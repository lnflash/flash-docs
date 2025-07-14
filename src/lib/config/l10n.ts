interface localesType {
    alpha2Code: string;
    name: string;
}

// Locales our app supports
export const locales: localesType[] = [
    { alpha2Code: 'en', name: 'English' },
    { alpha2Code: 'es', name: 'Español' },
    { alpha2Code: 'fr', name: 'Français' },
    { alpha2Code: 'it', name: 'Italiano' },
    { alpha2Code: 'de', name: 'Deutsch' },
    { alpha2Code: 'fa', name: 'فارسی' },
    { alpha2Code: 'pt', name: 'Português' },
    { alpha2Code: 'nl', name: 'Nederlands' },
    { alpha2Code: 'sw', name: 'Kiswahili' },
    { alpha2Code: 'ar', name: 'العربية' },
    { alpha2Code: 'zh', name: '中文' },
    { alpha2Code: 'ja', name: '日本語' },
    { alpha2Code: 'ko', name: '한국어' },
    { alpha2Code: 'hi', name: 'हिन्दी' }
];

// Returns an array of the supported alpha2 codes
export const supportedLocales: string[] = locales.map((item) => item.alpha2Code);

// Locale to show when we don't support the requested locale
export const fallbackLocale = 'en';
