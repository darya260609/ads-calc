// Seznam měn s jejich symboly, kódy a kurzy vůči CZK
const currencies = {
  CZK: {
    code: 'CZK',
    symbol: 'Kč',
    name: {
      cs: 'Česká koruna',
      uk: 'Чеська крона',
      ru: 'Чешская крона',
      en: 'Czech Koruna'
    },
    rate: 1 // Základní měna
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    name: {
      cs: 'Euro',
      uk: 'Євро',
      ru: 'Евро',
      en: 'Euro'
    },
    rate: 0.04 // 1 CZK = 0.04 EUR (příklad, aktualizujte dle aktuálního kurzu)
  },
  USD: {
    code: 'USD',
    symbol: '$',
    name: {
      cs: 'Americký dolar',
      uk: 'Долар США',
      ru: 'Доллар США',
      en: 'US Dollar'
    },
    rate: 0.043 // 1 CZK = 0.043 USD (příklad, aktualizujte dle aktuálního kurzu)
  },
  GBP: {
    code: 'GBP',
    symbol: '£',
    name: {
      cs: 'Britská libra',
      uk: 'Британський фунт',
      ru: 'Британский фунт',
      en: 'British Pound'
    },
    rate: 0.035 // 1 CZK = 0.035 GBP (příklad, aktualizujte dle aktuálního kurzu)
  },
  UAH: {
    code: 'UAH',
    symbol: '₴',
    name: {
      cs: 'Ukrajinská hřivna',
      uk: 'Українська гривня',
      ru: 'Украинская гривна',
      en: 'Ukrainian Hryvnia'
    },
    rate: 1.6 // 1 CZK = 1.6 UAH (příklad, aktualizujte dle aktuálního kurzu)
  },
  RUB: {
    code: 'RUB',
    symbol: '₽',
    name: {
      cs: 'Ruský rubl',
      uk: 'Російський рубль',
      ru: 'Российский рубль',
      en: 'Russian Ruble'
    },
    rate: 4.0 // 1 CZK = 4.0 RUB (příklad, aktualizujte dle aktuálního kurzu)
  },
  PLN: {
    code: 'PLN',
    symbol: 'zł',
    name: {
      cs: 'Polský zlotý',
      uk: 'Польський злотий',
      ru: 'Польский злотый',
      en: 'Polish Zloty'
    },
    rate: 0.18 // 1 CZK = 0.18 PLN (příklad, aktualizujte dle aktuálního kurzu)
  }
};