import type { RequestHandler } from './$types';
import { supportedLocales } from '$lib/config/l10n';

// Build a list of all markdown pages at compile time. Vite's import.meta.glob
// gives us a static map of every .md file under src/routes/pages, which lets
// the sitemap stay in sync with the actual content without any runtime FS work.
const pageModules = import.meta.glob('/src/routes/pages/**/*.md');

// Site URL is overridable via env (PUBLIC_SITE_URL) so deploy previews can use
// their own host. Defaults to the production docs domain.
const SITE_URL = (import.meta.env.PUBLIC_SITE_URL ?? 'https://documentation.getflash.io').replace(/\/$/, '');

interface SitemapEntry {
    loc: string;
    alternates: { hreflang: string; href: string }[];
}

function buildEntries(): SitemapEntry[] {
    // Map of slug -> set of locales that have a translated page for that slug.
    // Slugs include sub-paths (e.g. "guides/top-up", "training/flashcard").
    const slugLocales = new Map<string, Set<string>>();

    for (const path of Object.keys(pageModules)) {
        // path looks like "/src/routes/pages/en/guides/top-up.md"
        const match = path.match(/\/src\/routes\/pages\/([^/]+)\/(.+)\.md$/);
        if (!match) continue;
        const [, locale, slug] = match;
        if (!supportedLocales.includes(locale)) continue;
        // Skip drafts (filename or any path segment starting with "_")
        if (slug.split('/').some((seg) => seg.startsWith('_'))) continue;

        if (!slugLocales.has(slug)) slugLocales.set(slug, new Set());
        slugLocales.get(slug)!.add(locale);
    }

    const entries: SitemapEntry[] = [];

    // Locale homepages (e.g. /en, /es) — always present, point at docs-home.
    for (const locale of supportedLocales) {
        entries.push({
            loc: `${SITE_URL}/${locale}`,
            alternates: supportedLocales.map((l) => ({ hreflang: l, href: `${SITE_URL}/${l}` }))
        });
    }

    // One entry per (slug, locale) with hreflang alternates pointing to every
    // other translation that exists.
    for (const [slug, locales] of slugLocales.entries()) {
        const alternates = [...locales].sort().map((l) => ({
            hreflang: l,
            href: `${SITE_URL}/${l}/${slug}`
        }));
        for (const locale of locales) {
            entries.push({
                loc: `${SITE_URL}/${locale}/${slug}`,
                alternates
            });
        }
    }

    return entries;
}

function escapeXml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

function renderSitemap(entries: SitemapEntry[]): string {
    const urls = entries
        .map((entry) => {
            const alternates = entry.alternates
                .map(
                    (a) =>
                        `        <xhtml:link rel="alternate" hreflang="${escapeXml(a.hreflang)}" href="${escapeXml(a.href)}" />`
                )
                .join('\n');
            return `    <url>\n        <loc>${escapeXml(entry.loc)}</loc>\n${alternates}\n    </url>`;
        })
        .join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset\n    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n    xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
}

export const GET: RequestHandler = async () => {
    const xml = renderSitemap(buildEntries());
    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            // Sitemap can safely live on the CDN for a day; search engines will
            // refetch on their own schedule regardless.
            'Cache-Control': 'public, max-age=3600, s-maxage=86400'
        }
    });
};

export const prerender = true;
