// Hlavní komponenta aplikace
const App = () => {
  // Stav jazyka a měny
  const [language, setLanguage] = React.useState('cs');
  const [currency, setCurrency] = React.useState('CZK');
  
  // Zkrácení funkce pro překlad
  const t = (key) => translate(key, language);
  
  return (
    <div className="p-6 max-w-5xl mx-auto bg-white rounded-lg shadow-lg">
      {/* Přepínač jazyků */}
      <div className="flex justify-end mb-4 space-x-2 language-selector">
        <button
          onClick={() => setLanguage('cs')}
          className={`px-2 py-1 rounded-md text-sm ${language === 'cs' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
        >
          Čeština
        </button>
        <button
          onClick={() => setLanguage('uk')}
          className={`px-2 py-1 rounded-md text-sm ${language === 'uk' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
        >
          Українська
        </button>
        <button
          onClick={() => setLanguage('ru')}
          className={`px-2 py-1 rounded-md text-sm ${language === 'ru' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
        >
          Русский
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-2 py-1 rounded-md text-sm ${language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
        >
          English
        </button>
      </div>
      
      <h1 className="text-2xl font-bold text-center mb-6 fade-in">{t('title')}</h1>
      
      {/* Komponenta kalkulačky */}
      <Calculator
        language={language}
        currency={currency}
        setCurrency={setCurrency}
      />
      
      <div className="mt-6 text-center text-gray-500 text-sm">
        <p>{t('footerNote1')}</p>
        <p className="mt-1">{t('footerNote2')}</p>
      </div>
    </div>
  );
};