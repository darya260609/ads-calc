// Formátování čísel s oddělovačem tisíců podle jazyka
function formatNumber(num, language, currency) {
  if (num === undefined || num === null) return '';
  
  const roundedNum = Math.round(num * 100) / 100;
  
  // Nastavení lokalizace podle jazyka
  let locale;
  switch(language) {
    case 'cs':
    case 'uk':
    case 'ru':
      locale = 'cs-CZ'; // Pro češtinu, ukrajinštinu a ruštinu - formát s mezerou a čárkou
      break;
    case 'en':
    default:
      locale = 'en-US'; // Pro angličtinu - formát s čárkou a tečkou
      break;
  }
  
  // Formátování čísla podle lokalizace
  return roundedNum.toLocaleString(locale);
}

// Konverze z CZK do zvolené měny
function convertCurrency(amountCZK, toCurrency) {
  if (amountCZK === undefined || amountCZK === null) return 0;
  if (!currencies[toCurrency]) return amountCZK;
  
  return amountCZK * currencies[toCurrency].rate;
}

// Konverze z libovolné měny do CZK
function convertToCZK(amount, fromCurrency) {
  if (amount === undefined || amount === null) return 0;
  if (!currencies[fromCurrency] || fromCurrency === 'CZK') return amount;
  
  return amount / currencies[fromCurrency].rate;
}

// Vrácení textu podle aktuálního jazyka z objektu překladů
function translate(key, language, params = {}) {
  // Default to English if the requested language doesn't exist
  const lang = translations[language] || translations.en;
  
  // Get the translation string
  let translation = lang[key] || translations.en[key] || key;
  
  // Replace any parameters in the translation string
  if (params && Object.keys(params).length > 0) {
    Object.keys(params).forEach(param => {
      const regex = new RegExp(`\\{${param}\\}`, 'g');
      translation = translation.replace(regex, params[param]);
    });
  }
  
  return translation;
}

// Formátování měny (hodnota + symbol)
function formatCurrency(amount, currencyCode, language) {
  if (amount === undefined || amount === null) return '';
  
  const currency = currencies[currencyCode];
  if (!currency) return `${formatNumber(amount, language)} ?`;
  
  const formattedAmount = formatNumber(amount, language);
  
  // Různá umístění symbolu měny podle jazyka/měny
  if (currencyCode === 'USD' || currencyCode === 'GBP') {
    return `${currency.symbol}${formattedAmount}`;
  } else {
    return `${formattedAmount} ${currency.symbol}`;
  }
} 