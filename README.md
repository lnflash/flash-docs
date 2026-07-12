# ⚡ Flash Docs

The official documentation for [Flash](https://getflash.io) — Bitcoin financial services built for the Caribbean.

Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build). Content is Markdown/MDX; the site builds to static files and deploys to Cloudflare Pages.

## Develop

```sh
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build → ./dist
npm run preview  # preview the production build locally
```

## Structure

```
src/
  content/docs/        # all documentation pages (Markdown / MDX)
    index.mdx          #   home / splash page
    get-started.mdx    #   hand-built landing pages use Starlight components
    guides/            #   app how-to guides
    training/          #   merchant / POS / Flashcard training
  assets/              # images referenced from MDX (optimized at build)
  styles/flash.css     # brand accent colors
public/                # static assets served as-is (images/, favicon, _redirects)
astro.config.mjs       # site config: title, logo, sidebar, i18n
```

## Add a page

1. Create a Markdown file under `src/content/docs/` (e.g. `guides/my-guide.md`).
2. Add frontmatter:
   ```md
   ---
   title: My Guide
   description: One-line summary shown in search and social cards.
   ---
   ```
3. Add it to the `sidebar` in `astro.config.mjs`.

Internal links are root-absolute: `[Cash Wallet](/guides/cash-wallet/)`. Images live in
`public/images/` and are referenced as `/images/<file>`.

## Translations

Starlight has built-in i18n. English is the source of truth and lives at the site root.
To add a language, add it to `locales` in `astro.config.mjs` and drop translated files into
`src/content/docs/<lang>/` mirroring the English tree. **Any page you don't translate
automatically falls back to English** — nothing 404s while a locale is incomplete.

## License

MIT.
