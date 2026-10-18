#!/usr/bin/env node
/**
 * Offline release validation for the GitHub Pages static export.
 * Run after `npm run build`: node scripts/verify-export.mjs
 * No network, headless browser, or extra npm dependencies required.
 */
import { createHash } from "node:crypto";
import { existsSync, readFileSync, statSync } from "node:fs";
import { resolve, join, sep } from "node:path";

const root = resolve(import.meta.dirname, "..");
const out = resolve(root, "out");
const siteUrl = "https://gadero5565.github.io/";
const failures = [];
let passed = 0;
const check = (condition, message) => {
  if (condition) {
    passed++;
    console.log(`PASS  ${message}`);
  } else {
    failures.push(message);
    console.error(`FAIL  ${message}`);
  }
};
const file = (relative) => join(out, relative);
const exists = (relative) => {
  const f = file(relative);
  return existsSync(f) && statSync(f).isFile() && statSync(f).size > 0;
};
const text = (relative) => exists(relative) ? readFileSync(file(relative), "utf8") : "";

check(exists("index.html"), "Exported homepage (out/index.html)");
for (const path of ["404.html", "robots.txt", "sitemap.xml", "favicon.ico", "apple-touch-icon.png", "images/branding/og-preview.png"]) {
  check(exists(path), `Exported asset: ${path}`);
}

// Prevent accidental changes to the five explicitly content-locked corporate cases.
const portfolioSource = readFileSync(resolve(root, "src/data/portfolio.ts"), "utf8");
const start = portfolioSource.indexOf("export const corporateProjects = [");
const end = start < 0 ? -1 : portfolioSource.indexOf("\n];", start);
const corporate = end < 0 ? "" : portfolioSource.slice(start, end + 3);
const corporateHash = createHash("sha256").update(corporate).digest("hex");
check(corporateHash === "ff1f8c3ecc22bcacddda35a97679c3a34ee3171460dd03b17af807b5663949da", "All five original corporate case studies are unchanged");

const html = text("index.html");
check(html.includes("Featured Projects") && html.includes("Odoo Module Explorer"), "Featured projects exported as HTML");
check(html.includes("Confidential Corporate Case Studies"), "Corporate experience section exported");
check(html.includes("Getmo Requests System") && html.includes("Full Auth NestJS"), "Secondary projects exported");
check(html.includes("Crossword") && html.includes("Tic Tac Toe"), "OWL experiments exported");
check(html.includes("og:image") && html.includes("og-preview.png"), "Open Graph image metadata exported");
check(html.includes("twitter:card"), "Social card metadata exported");
check(html.includes('rel="canonical"') && html.includes(siteUrl.replace(/\/$/, "")), "Canonical site metadata exported");

// HTML fragments must point to actual on-page IDs. Scan the actual exported HTML,
// not TypeScript source, so broken navigation is caught before deployment.
const ids = new Set(Array.from(html.matchAll(/\bid="([^"]+)"/g), (match) => match[1]));
const fragments = new Set(Array.from(html.matchAll(/\bhref="#([^"]+)"/g), (match) => match[1]));
for (const id of fragments) check(ids.has(id), `In-page link #${id} resolves`);

// Verify all local files referenced by the homepage exist in the static export.
const external = new URL(siteUrl);
const assetPaths = new Set();
for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
  const raw = match[1].replaceAll("&amp;", "&");
  if (!raw || raw.startsWith("#") || /^(?:data:|mailto:|tel:|javascript:)/i.test(raw)) continue;
  try {
    const url = new URL(raw, siteUrl);
    if (url.origin !== external.origin || url.pathname === "/") continue;
    let pathname = decodeURIComponent(url.pathname);
    if (pathname.endsWith("/")) pathname += "index.html";
    pathname = pathname.replace(/^\/+/, "");
    const absolute = resolve(out, pathname);
    if (absolute !== out && !absolute.startsWith(out + sep)) {
      failures.push(`Invalid local asset path: ${raw}`);
      continue;
    }
    assetPaths.add(pathname);
  } catch {
    failures.push(`Malformed HTML URL: ${raw}`);
  }
}
for (const path of assetPaths) {
  check(exists(path), `Local HTML asset exists: /${path}`);
}

const robots = text("robots.txt");
const sitemap = text("sitemap.xml");
check(robots.includes(`Sitemap: ${siteUrl}sitemap.xml`), "Robots file points to the correct sitemap");
check(sitemap.includes(`<loc>${siteUrl}</loc>`), "Sitemap includes the canonical homepage");

// An expected media-related limitation, not a failure: project screenshots are
// hosted on GitHub and should still be checked in a connected browser manually.
console.log("NOTE  Remote project screenshots and third-party links need browser verification.");
if (failures.length) {
  console.error(`\nRelease audit failed: ${failures.length} failed / ${passed + failures.length} total checks.`);
  process.exitCode = 1;
} else {
  console.log(`\nRelease audit passed: ${passed} checks.`);
}
