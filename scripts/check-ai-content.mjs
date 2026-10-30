import fs from "fs";

const source = fs.readFileSync("data/blogData.ts", "utf8");

const blogs = [];
const idRe = /^\s{4}id: "([^"]+)"/gm;
let match;
while ((match = idRe.exec(source))) {
  blogs.push({ id: match[1], start: match.index });
}

const banned = [
  { name: "contrast reveal (not just)", re: /\bnot just\b/i, weight: 8 },
  { name: "contrast reveal (isn't just)", re: /\bisn'?t just\b/i, weight: 8 },
  { name: "contrast reveal (it's not X, it's Y)", re: /\bit'?s not [^.]{3,60}[.,] it'?s\b/i, weight: 8 },
  { name: "not only ... but also", re: /\bnot only\b[\s\S]{0,80}\bbut also\b/i, weight: 8 },
  { name: "negation list", re: /\bno [a-z-]+, no [a-z-]+, no [a-z-]+/i, weight: 8 },
  { name: "stock opener (whether you're)", re: /\bwhether you'?re\b/i, weight: 8 },
  { name: "stock opener (whether you/your)", re: /\bwhether (you|your)\b/i, weight: 8 },
  { name: "stock opener (in today's)", re: /\bin today'?s\b/i, weight: 8 },
  { name: "stock phrase (here's the thing)", re: /\bhere'?s the thing\b/i, weight: 8 },
  { name: "self-answered question (the result?)", re: /\bthe result\?/i, weight: 8 },
  { name: "buzzword (unlock)", re: /\bunlock\b/i, weight: 4 },
  { name: "buzzword (seamless)", re: /\bseamless(ly)?\b/i, weight: 4 },
  { name: "buzzword (elevate)", re: /\belevate\b/i, weight: 4 },
  { name: "buzzword (delve)", re: /\bdelve\b/i, weight: 4 },
  { name: "buzzword (comprehensive)", re: /\bcomprehensive\b/i, weight: 4 },
  { name: "buzzword (game-changer)", re: /\bgame[- ]changer\b/i, weight: 4 },
  { name: "em dash", re: /—/g, weight: 2 },
];

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<\/(p|li|h[1-6]|div|section|blockquote|td|th)>/gi, ". ")
    .replace(/<br\s*\/?>/gi, ". ")
    .replace(/<li[^>]*>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .replace(/\.\s*\./g, ".")
    .trim();
}

function sentences(text) {
  return text.split(/(?<=[.!?])\s+/).map((s) => s.trim()).filter(Boolean);
}

function analyse(blog) {
  const globalIndex = source.indexOf(`id: "${blog.id}"`);
  const contentStart = source.indexOf("content: `", globalIndex);
  const bodyStart = contentStart + "content: `".length;
  const bodyEnd = source.indexOf("`,\n", bodyStart);
  const html = source.slice(bodyStart, bodyEnd);
  const text = stripHtml(html);

  const afterId = source.slice(globalIndex);
  const descMatch = afterId.match(/description:\s*"([^"]*)"/);
  const description = descMatch ? descMatch[1] : "";
  const tldrStart = afterId.indexOf("tldr: [");
  let tldr = "";
  if (tldrStart !== -1) {
    const tldrEnd = afterId.indexOf("],", tldrStart);
    tldr = afterId
      .slice(tldrStart + 7, tldrEnd)
      .replace(/["']/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }
  const metaText = `${description} ${tldr}`;

  const sents = sentences(text);
  const words = text.split(/\s+/).filter(Boolean);
  const lengths = sents.map((s) => s.split(/\s+/).filter(Boolean).length);
  const avg = lengths.reduce((a, b) => a + b, 0) / (lengths.length || 1);
  const variance = lengths.reduce((a, b) => a + (b - avg) ** 2, 0) / (lengths.length || 1);
  const stddev = Math.sqrt(variance);
  const longRatio = lengths.filter((n) => n > 24).length / (lengths.length || 1);
  const firstPerson = (text.match(/\b(I|my|me|I've|I'm|I'd|I'll)\b/g) || []).length;
  const headings = (html.match(/<h[23][ >]/gi) || []).length;
  const listItems = (html.match(/<li[ >]/gi) || []).length;

  const hits = [];
  for (const rule of banned) {
    const found = text.match(rule.re);
    if (found) hits.push({ name: rule.name, count: found.length, weight: rule.weight });
  }
  for (const rule of banned) {
    const found = metaText.match(rule.re);
    if (found) hits.push({ name: `meta: ${rule.name}`, count: found.length, weight: rule.weight });
  }

  let score = 100;
  for (const h of hits) score -= h.weight * Math.min(h.count, 4);
  if (sents.length >= 30 && stddev < 4.5) score -= 12;
  if (longRatio > 0.22) score -= 8;
  if (firstPerson === 0) score -= 10;

  return {
    id: blog.id,
    words: words.length,
    sentences: sents.length,
    avg: Number(avg.toFixed(1)),
    stddev: Number(stddev.toFixed(1)),
    longRatio: Number((longRatio * 100).toFixed(0)),
    firstPerson,
    headings,
    listItems,
    hits,
    score: Math.max(0, Math.round(score)),
  };
}

const results = blogs.map(analyse).sort((a, b) => a.score - b.score);

console.log(
  ["Score", "Blog", "Words", "Sent", "Avg", "SD", ">24w", "1st", "Issues"].join(" | ")
);
console.log("-".repeat(110));
for (const r of results) {
  const issues = r.hits.map((h) => `${h.name} x${h.count}`).join("; ") || "none";
  console.log(
    [r.score, r.id, r.words, r.sentences, r.avg, r.stddev, r.longRatio + "%", r.firstPerson, issues].join(" | ")
  );
}

const flagged = results.filter((r) => r.score < 85);
console.log(`\n${results.length} posts checked, ${flagged.length} below 85.`);
if (flagged.length) {
  console.log("Needs work: " + flagged.map((r) => `${r.id} (${r.score})`).join(", "));
  process.exitCode = 1;
}
