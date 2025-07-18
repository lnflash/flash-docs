import { register, init, getLocaleFromNavigator, locale } from 'svelte-i18n';
import { fallbackLocale, supportedLocales } from '$lib/config/l10n';

register('en', () => import('$lib/locales/en.json'));
register('es', () => import('$lib/locales/es.json'));
register('fr', () => import('$lib/locales/fr.json'));
register('it', () => import('$lib/locales/it.json'));
register('de', () => import('$lib/locales/de.json'));
register('fa', () => import('$lib/locales/fa.json'));
register('pt', () => import('$lib/locales/pt.json'));
register('nl', () => import('$lib/locales/nl.json'));
register('sw', () => import('$lib/locales/sw.json'));
register('ar', () => import('$lib/locales/ar.json'));
register('zh', () => import('$lib/locales/zh.json'));
register('ja', () => import('$lib/locales/ja.json'));
register('ko', () => import('$lib/locales/ko.json'));
register('hi', () => import('$lib/locales/hi.json'));

interface i18nOpts {
    locale: string;
    page?: string;
}

export function setupI18n(opts?: i18nOpts) {
    const parsedLocale = supported(language(opts?.locale || getLocaleFromNavigator()));

    // Init locales
    init({
        fallbackLocale: fallbackLocale,
        initialLocale: parsedLocale
    });

    // Update locale if present
    if (opts && opts.locale) {
        locale.set(supported(opts.locale));
    }
}

// Extract the "en" bit from fully qualified locales, like "en-US"
function language(locale: string | null) {
    return locale?.replace('_', '-').split('-')[0];
}

// Check to see if the given locale is supported.
// If it isn't, return fallback locale.
function supported(locale: string | undefined) {
    if (locale && supportedLocales.includes(locale)) {
        return locale;
    } else {
        return fallbackLocale;
    }
}
