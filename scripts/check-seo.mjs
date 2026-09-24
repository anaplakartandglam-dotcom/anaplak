/**
 * Static SEO regression checks.
 * Run: npm run check:seo
 */
import { readFileSync, readdirSync, statSync } from "node:fs"
import { join } from "node:path"

const root = process.cwd()
const errors = []

function tryRead(relPath) {
  try {
    return readFileSync(join(root, relPath), "utf8")
  } catch {
    errors.push(`FAIL: could not read ${relPath}`)
    return ""
  }
}

function walk(dir, ext, acc = []) {
  for (const entry of readdirSync(join(root, dir))) {
    const full = join(dir, entry)
    const stat = statSync(join(root, full))
    if (stat.isDirectory()) {
      walk(full, ext, acc)
    } else if (full.endsWith(ext)) {
      acc.push(full)
    }
  }
  return acc
}

// 1. Blog posts must have a self-canonical
const blogPage = tryRead("app/blogs/[slug]/page.tsx")
if (!blogPage.includes("canonical:")) {
  errors.push("FAIL: app/blogs/[slug]/page.tsx does not set alternates.canonical (P0-1)")
}

// 2. Sitemap must include /kalpana
const sitemap = tryRead("app/sitemap.ts")
if (!sitemap.includes("/kalpana")) {
  errors.push("FAIL: app/sitemap.ts is missing the /kalpana route")
}

// 3. No meta-keywords arrays left in app/ metadata exports
for (const file of walk("app", ".tsx")) {
  const content = readFileSync(join(root, file), "utf8")
  if (content.includes("keywords:")) {
    errors.push(`FAIL: ${file} still contains a keywords: metadata array`)
  }
}

// 4. Global schema must not contain self-serving rating / wrong type / phantom search
const structuredData = tryRead("components/structured-data.tsx")
for (const banned of ["aggregateRating", "HairSalon", "SearchAction"]) {
  if (structuredData.includes(banned)) {
    errors.push(`FAIL: components/structured-data.tsx still contains "${banned}"`)
  }
}

// 5. AdSense loader must not be global in the root layout
const layout = tryRead("app/layout.tsx")
if (layout.includes("adsbygoogle")) {
  errors.push("FAIL: app/layout.tsx still loads the AdSense script")
}

// 6. No raw <img> tags bypassing next/image in app/ or shared components
for (const dir of ["app", "components"]) {
  for (const file of walk(dir, ".tsx")) {
    const content = readFileSync(join(root, file), "utf8")
    if (content.includes("<img")) {
      errors.push(`FAIL: ${file} uses a raw <img> tag instead of next/image`)
    }
  }
}

// 7. NAP single source: no obsolete address fragments outside data/businessInfo.ts
const obsoleteFragments = ["TNHB, : 3", "No 48/9", "First Main road, 4th block, MMDA Colony"]
for (const dir of ["app", "components", "lib"]) {
  for (const file of walk(dir, ".tsx")) {
    const content = readFileSync(join(root, file), "utf8")
    for (const frag of obsoleteFragments) {
      if (content.includes(frag)) {
        errors.push(`FAIL: ${file} contains obsolete address fragment "${frag}"`)
      }
    }
  }
}

// 8. Canonical single phone number surface (via businessInfo)
const businessInfo = tryRead("data/businessInfo.ts")
if (!businessInfo.includes("919840088867")) {
  errors.push("FAIL: data/businessInfo.ts missing primary phone")
}

if (errors.length > 0) {
  console.log(errors.join("\n"))
  console.log(`\nSEO check FAILED with ${errors.length} issue(s).`)
  process.exit(1)
}

console.log("SEO check passed.")