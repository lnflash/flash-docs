# ⚡ docs.getflash.io

A comprehensive guide to all things Flash.

## Table of contents

-   [Getting Started](#🐣-getting-started-with-the-codebase)
-   [Contributing](#🫂-contributing)
    -   [Translations](#translations)

## 🐣 Getting started with the codebase

docs.getflash.io is forked with [Nostr.how](https://nostr.how/), which is build on a lightweight javascript framework. If you would like to create documentation like this, please visit the open source [Nostr.how github repo](https://github.com/erskingardner/nostr-how)

## 🫂 Contributing

We're always looking for writers, coders, and translators to help us make docs.getflash.io more useful. (TODO: A few more details below on how you can contribute)

### Translations

Translations in docs.getflash.io are done in two parts. For UI elements and navigation items we use in i18n library and simple JSON files to store the translated strings. The main content of each page is written in Markdown and each page must be translated separately and put into the correct directory in the codebase.

#### i18n JSON files

These files are found in the `/src/lib/locales/` directory [here](https://github.com/lnflash/flash-how/tree/main/src/lib/locales). Each new language needs to have it's own file named with the ISO 3166 Alpha-2 code. E.g. `en.json` for English and `it.json` for Italian.

To translate these files, copy the `en.json` file and change only the values, not the keys, of each item.

![JSON file](https://user-images.githubusercontent.com/202880/231967087-5f66846b-f76b-42d2-b0f5-37a2dd8778a2.png)

#### Markdown pages

Each of the individual pages of content are in the `/src/routes/pages` directory [here](https://github.com/lnflash/flash-how/tree/main/src/routes/pages). The pages for each language are in a folder with the corresponding Alpha-2 two letter code for that language.

Here's how to create files for a new language:

1. Create a new folder with the 2 letter country code as the name. E.g. `/src/routes/pages/es/` for Spanish.
1. Create blank files **with the same names** as the files in the `/src/routes/pages/en/` (english) directory. It's important that the names are exactly the same so that they can be dynamically loaded.
1. Translate each page.
    1. The section at the top (between the `---`) is called Frontmatter and it's really important that the formatting stays the same. Please don't change the `title` or `description` keys, but definitely translate the text after.
    1. The full page should be translated to your target language.
    1. For URLs to other pages, please change the two letter country code to your target language. e.g. `/en/get-started` should change to `/fr/get-started` if you're translating to French.
    1. It's ok to change the anchor links for each header to the target language. These make it easy for people to link to specific parts of the page. e.g. `## [§](#understanding-keys)` should chance to something like `## [§](#compendere-chiavi)` if you're translating to Italian.
    1. That's it!

## 📜 License

The Flash How documentation is open source software under the [MIT License](https://opensource.org/licenses/MIT), and gives attribution to the [Nostr.how](https://nostr.how/) project for the design and development of this framework instance. Special Shoutout to [JeffG](https://snort.social/p/npub1zuuajd7u3sx8xu92yav9jwxpr839cs0kc3q6t56vd5u9q033xmhsk6c2uc) for being an amazing NOSTR dev.
