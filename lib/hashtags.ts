export function toHashtags(items: string[], limit = 10): string[] {
  const seen = new Set<string>();
  const out: string[] = [];

  for (const raw of items) {
    const tag = raw.trim().replace(/^#/, "");
    const key = tag.toLowerCase();

    if (!tag) continue;
    if (seen.has(key)) continue;

    seen.add(key);
    out.push(tag);

    if (out.length >= limit) break;
  }

  return out;
}
