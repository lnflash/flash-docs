import { writable, derived } from 'svelte/store';

export interface SearchItem {
    title: string;
    description: string;
    content: string;
    url: string;
    locale: string;
    section?: string;
}

// Store for all searchable content
export const searchIndex = writable<SearchItem[]>([]);

// Store for search query
export const searchQuery = writable('');

// Debounced search query
let searchTimeout: NodeJS.Timeout;
export const debouncedSearchQuery = derived(
    searchQuery,
    ($searchQuery, set) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            set($searchQuery);
        }, 300);
    },
    ''
);

// Normalize text for matching: lowercase + collapse hyphens/punctuation to
// spaces so a query like "top up" matches indexed text like "top-up" or
// "top-ups". Without this, includes("top up") misses every hyphenated form.
function normalize(text: string): string {
    return text.toLowerCase().replace(/[-_/]+/g, ' ').replace(/\s+/g, ' ').trim();
}

// Tokenize query into terms. Multi-word queries are AND-matched, so
// "top up" requires both "top" AND "up" to appear (in any order).
function tokenize(query: string): string[] {
    return normalize(query).split(' ').filter((t) => t.length > 0);
}

// Search results
export const searchResults = derived(
    [searchIndex, debouncedSearchQuery],
    ([$searchIndex, $debouncedSearchQuery]) => {
        if (!$debouncedSearchQuery || $debouncedSearchQuery.length < 2) {
            return [];
        }

        const tokens = tokenize($debouncedSearchQuery);
        if (tokens.length === 0) return [];

        const results = $searchIndex
            .map((item) => {
                const titleNorm = normalize(item.title);
                const descNorm = normalize(item.description ?? '');
                const contentNorm = normalize(item.content ?? '');
                const haystack = `${titleNorm} ${descNorm} ${contentNorm}`;

                // Every token must appear somewhere (AND match).
                const allMatch = tokens.every((t) => haystack.includes(t));
                if (!allMatch) return null;

                // Score: title hits weigh most, then description, then content.
                // Bonus for whole-phrase match in title.
                let score = 0;
                const phrase = tokens.join(' ');
                for (const t of tokens) {
                    if (titleNorm.includes(t)) score += 10;
                    if (descNorm.includes(t)) score += 4;
                    if (contentNorm.includes(t)) score += 1;
                }
                if (titleNorm.includes(phrase)) score += 20;
                if (descNorm.includes(phrase)) score += 8;

                // Snippet: prefer content match for the first token, fall back
                // to description.
                let snippet = '';
                const contentLower = item.content?.toLowerCase() ?? '';
                const firstToken = tokens[0];
                const index = contentLower.indexOf(firstToken);
                if (index !== -1) {
                    const start = Math.max(0, index - 50);
                    const end = Math.min(item.content.length, index + firstToken.length + 50);
                    snippet = item.content.substring(start, end);
                    if (start > 0) snippet = '...' + snippet;
                    if (end < item.content.length) snippet = snippet + '...';
                } else {
                    snippet = item.description ?? '';
                }

                return { ...item, score, snippet };
            })
            .filter((x): x is NonNullable<typeof x> => x !== null)
            .sort((a, b) => b.score - a.score)
            .slice(0, 10);

        return results;
    }
);

// Hardcoded search index for better performance and reliability
const searchData: Record<string, SearchItem[]> = {
    en: [
        // Getting Started
        { title: "Get Started", description: "Set up Flash in 3 simple steps", content: "Download Flash app, create your wallet, add funds via bank transfer or Bitcoin", url: "/en/get-started", locale: "en", section: "Getting Started" },
        { title: "What is Flash?", description: "Flash is a Bitcoin-based financial application for individuals and businesses in the Caribbean and globally.", content: "Flash is a Bitcoin service provider creating products and services specifically for the Caribbean. Personal accounts, business accounts, Flash card, rewards points", url: "/en/what-is-flash", locale: "en", section: "Getting Started" },
        { title: "Why Flash?", description: "Benefits of using Flash for your financial needs", content: "Better exchange rates, lower fees, faster transfers, global access, secure transactions", url: "/en/why-flash", locale: "en", section: "Getting Started" },
        
        // User Guides
        { title: "All Guides", description: "Step-by-step guides for using Flash", content: "Comprehensive guides for all Flash features and functions", url: "/en/user-guides", locale: "en", section: "User Guides" },
        { title: "Top Up", description: "Add funds to your Flash wallet via bank transfer or in person at a Flashpoint", content: "Top up top-up bank transfer Flashpoint deposit fund add money cash USD", url: "/en/guides/top-up", locale: "en", section: "User Guides" },
        { title: "Upgrade Your Account", description: "Move from a Trial to a Personal account to raise limits and unlock features", content: "Upgrade account verification KYC limits personal trial", url: "/en/guides/upgrade-account", locale: "en", section: "User Guides" },
        { title: "Cash Wallet", description: "Hold USD in your Flash wallet and view it in your local currency", content: "Cash wallet USD dollars local currency stable", url: "/en/guides/cash-wallet", locale: "en", section: "User Guides" },
        { title: "Bitcoin Wallet", description: "Send and receive Bitcoin instantly with Lightning or on-chain", content: "Bitcoin wallet BTC sats Lightning on-chain receive send", url: "/en/guides/bitcoin-wallet", locale: "en", section: "User Guides" },
        { title: "Swap", description: "Move value between your Cash Wallet and Bitcoin Wallet", content: "Swap convert cash bitcoin USD BTC exchange", url: "/en/guides/swap", locale: "en", section: "User Guides" },
        { title: "Flashcard", description: "Use your Flashcard at supported merchants", content: "Flashcard NFC card merchant tap pay", url: "/en/guides/flashcard", locale: "en", section: "User Guides" },
        { title: "Get Cash", description: "How to convert Bitcoin to cash", content: "Convert your Bitcoin to local currency using Flash ATMs or partner locations", url: "/en/guides/get-cash", locale: "en", section: "User Guides" },
        { title: "Cash Out", description: "Withdraw funds from your Flash account", content: "Multiple options to cash out including bank transfers and partner locations cash settlement withdraw", url: "/en/guides/cash-out", locale: "en", section: "User Guides" },
        { title: "Earn Bitcoin", description: "Ways to earn Bitcoin with Flash", content: "Earn through referrals, rewards program, and merchant partnerships", url: "/en/guides/earn", locale: "en", section: "User Guides" },
        { title: "Secure Chat", description: "Private messaging with Flash", content: "End-to-end encrypted chat integrated with your Flash contacts", url: "/en/guides/chat", locale: "en", section: "User Guides" },
        { title: "Contacts", description: "Managing your Flash contacts", content: "Add, organize, and manage contacts for easy payments", url: "/en/guides/contacts", locale: "en", section: "User Guides" },
        { title: "Find Locations", description: "Locate Flash merchants and ATMs", content: "Interactive map showing Flash-enabled locations near you", url: "/en/guides/map", locale: "en", section: "User Guides" },
        { title: "Dollar Cost Averaging", description: "Automate your Bitcoin savings", content: "Set up recurring Bitcoin purchases to average your investment cost", url: "/en/guides/dca", locale: "en", section: "User Guides" },
        { title: "Non-Custodial Wallets", description: "Self-custody your Bitcoin", content: "Take full control of your Bitcoin with non-custodial wallet features", url: "/en/guides/non-custodial-wallets", locale: "en", section: "User Guides" },
        { title: "Sweep to Cold Storage", description: "Secure your Bitcoin offline", content: "Transfer Bitcoin to hardware wallets for maximum security", url: "/en/guides/sweep-to-cold-storage", locale: "en", section: "User Guides" },
        
        // How Flash Works
        { title: "Technical Architecture", description: "Flash's technical infrastructure", content: "Built on Bitcoin, Lightning Network, and eCash protocols for scalability", url: "/en/flash-infrastructure", locale: "en", section: "How Flash Works" },
        { title: "Integration Partners", description: "Third-party services powering Flash", content: "Partnerships with leading Bitcoin infrastructure providers", url: "/en/third-party-vendors", locale: "en", section: "How Flash Works" },
        
        // Learn Bitcoin
        { title: "Bitcoin Basics", description: "Understanding the Bitcoin protocol", content: "Peer-to-peer electronic cash system, blockchain, mining, and consensus", url: "/en/bitcoin-protocol", locale: "en", section: "Learn Bitcoin" },
        { title: "Lightning Network", description: "Bitcoin's scaling solution", content: "Second-layer payment protocol enabling instant, low-cost transactions", url: "/en/lightning-network", locale: "en", section: "Learn Bitcoin" },
        { title: "eCash Explained", description: "Privacy-preserving digital cash", content: "Chaumian eCash on Bitcoin for private, scalable transactions", url: "/en/ecash-on-bitcoin", locale: "en", section: "Learn Bitcoin" },
        { title: "NOSTR Protocol", description: "Decentralized messaging", content: "Notes and Other Stuff Transmitted by Relays - censorship-resistant communication", url: "/en/nostr-protocol", locale: "en", section: "Learn Bitcoin" },
        
        // Integrations
        { title: "Galoy Project", description: "Open source Bitcoin banking", content: "Core banking infrastructure for Bitcoin and Lightning applications", url: "/en/galoy-project", locale: "en", section: "Integrations" },
        { title: "Breez SDK", description: "Lightning development kit", content: "SDK for building Lightning-powered applications with built-in node management", url: "/en/breez-sdk", locale: "en", section: "Integrations" },
        { title: "IBEX Mercado", description: "Bitcoin exchange integration", content: "Wholesale Bitcoin exchange providing liquidity and flash top-ups and cash settlements", url: "/en/ibex-mercado", locale: "en", section: "Integrations" },
        { title: "BTCPay Server", description: "Self-hosted payment processor", content: "Open source Bitcoin payment processor for merchants", url: "/en/btcpay-server", locale: "en", section: "Integrations" },
        
        // Business & Development
        { title: "For Business", description: "Flash business solutions", content: "Accept Bitcoin payments, manage cash flow, and access global markets", url: "/en/business", locale: "en", section: "Business & Development" },
        { title: "For Developers", description: "Build with Flash APIs", content: "Developer tools, SDKs, and documentation for integrating Flash", url: "/en/development", locale: "en", section: "Business & Development" },
        { title: "Contribute", description: "Help improve Flash", content: "Open source contributions, bug reports, and feature requests", url: "/en/contribute", locale: "en", section: "Business & Development" },

        // FAQ
        { title: "Frequently Asked Questions", description: "Find answers to common questions about Flash, accounts, payments, security, and troubleshooting", content: "FAQ help support questions answers troubleshooting", url: "/en/faq", locale: "en", section: "Help" },

        // Training
        { title: "Mobile App Training", description: "Learn how to use the Flash mobile app", content: "Mobile app training tutorial walkthrough", url: "/en/training/mobile-app", locale: "en", section: "Training" },
        { title: "Flashcard Training", description: "Learn how to use your Flashcard", content: "Flashcard training tutorial NFC card", url: "/en/training/flashcard", locale: "en", section: "Training" },
        { title: "Flash POS Training", description: "Learn how to use Flash POS at your business", content: "Flash POS point of sale merchant training tutorial", url: "/en/training/flash-pos", locale: "en", section: "Training" }
    ]
};

// Build search index from hardcoded data
export function buildSearchIndex(locale: string) {
    const items = searchData[locale] || searchData['en'];
    searchIndex.set(items);
}