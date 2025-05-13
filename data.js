// Currency data with exchange rates (base: USD)
const currencies = {
    CZK: { rate: 22.5, symbol: 'Kč' },
    EUR: { rate: 0.92, symbol: '€' },
    USD: { rate: 1, symbol: '$' },
    GBP: { rate: 0.79, symbol: '£' },
    PLN: { rate: 4.0, symbol: 'zł' }
};

// Countries with their average CPC and CPM rates (in USD)
const countries = [
    { code: 'CZ', name: 'Česká republika', cpc: 0.45, cpm: 3.50 },
    { code: 'SK', name: 'Slovensko', cpc: 0.40, cpm: 3.20 },
    { code: 'DE', name: 'Německo', cpc: 0.55, cpm: 4.50 },
    { code: 'AT', name: 'Rakousko', cpc: 0.50, cpm: 4.00 },
    { code: 'PL', name: 'Polsko', cpc: 0.35, cpm: 2.80 },
    { code: 'HU', name: 'Maďarsko', cpc: 0.30, cpm: 2.50 },
    { code: 'RO', name: 'Rumunsko', cpc: 0.25, cpm: 2.00 },
    { code: 'BG', name: 'Bulharsko', cpc: 0.20, cpm: 1.80 },
    { code: 'HR', name: 'Chorvatsko', cpc: 0.35, cpm: 2.80 },
    { code: 'SI', name: 'Slovinsko', cpc: 0.40, cpm: 3.20 },
    { code: 'IT', name: 'Itálie', cpc: 0.45, cpm: 3.50 },
    { code: 'ES', name: 'Španělsko', cpc: 0.40, cpm: 3.20 },
    { code: 'FR', name: 'Francie', cpc: 0.50, cpm: 4.00 },
    { code: 'GB', name: 'Velká Británie', cpc: 0.60, cpm: 4.80 },
    { code: 'IE', name: 'Irsko', cpc: 0.55, cpm: 4.40 },
    { code: 'NL', name: 'Nizozemsko', cpc: 0.50, cpm: 4.00 },
    { code: 'BE', name: 'Belgie', cpc: 0.45, cpm: 3.60 },
    { code: 'DK', name: 'Dánsko', cpc: 0.55, cpm: 4.40 },
    { code: 'SE', name: 'Švédsko', cpc: 0.50, cpm: 4.00 },
    { code: 'NO', name: 'Norsko', cpc: 0.55, cpm: 4.40 },
    { code: 'FI', name: 'Finsko', cpc: 0.45, cpm: 3.60 }
];

// Industry multipliers for CPC and CPM
const industryMultipliers = {
    ecommerce: { cpc: 1.2, cpm: 1.1 },
    services: { cpc: 1.0, cpm: 1.0 },
    education: { cpc: 0.9, cpm: 0.9 },
    healthcare: { cpc: 1.3, cpm: 1.2 },
    realEstate: { cpc: 1.4, cpm: 1.3 },
    automotive: { cpc: 1.5, cpm: 1.4 },
    travel: { cpc: 1.1, cpm: 1.0 },
    beauty: { cpc: 1.2, cpm: 1.1 },
    tech: { cpc: 1.3, cpm: 1.2 },
    food: { cpc: 1.0, cpm: 0.9 },
    custom: { cpc: 1.0, cpm: 1.0 }
};

// Platform multipliers
const platformMultipliers = {
    facebook: { cpc: 1.0, cpm: 1.0 },
    instagram: { cpc: 1.2, cpm: 1.1 }
};

// Recommended budget ranges by currency (in their respective currencies)
const recommendedBudgets = {
    CZK: { min: 2500, max: 5000 },
    EUR: { min: 100, max: 200 },
    USD: { min: 100, max: 200 },
    GBP: { min: 80, max: 160 },
    PLN: { min: 400, max: 800 }
};

// Export all data
window.appData = {
    currencies,
    countries,
    industryMultipliers,
    platformMultipliers,
    recommendedBudgets
}; 