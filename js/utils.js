// Pomocné funkce pro kalkulačku

// Formátování čísel s oddělovačem tisíců podle jazyka
function formatNumber(num, language, currency) {
  if (!num && num !== 0) return '';
  
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
  if (!amountCZK && amountCZK !== 0) return 0;
  if (!currencies[toCurrency]) return amountCZK;
  
  return amountCZK * currencies[toCurrency].rate;
}

// Vrácení textu podle aktuálního jazyka z objektu překladů
function translate(key, language) {
  if (!translations[language]) return key;
  return translations[language][key] || key;
}

// Formátování měny (hodnota + symbol)
function formatCurrency(amount, currencyCode, language) {
  if (!amount && amount !== 0) return '';
  
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