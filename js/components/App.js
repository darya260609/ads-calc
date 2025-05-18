// Hlavní komponenta aplikace
const App = () => {
  // Stav jazyka a měny
  const [language, setLanguage] = React.useState('cs');
  const [currency, setCurrency] = React.useState('CZK');
  
  // Zkrácení funkce pro překlad
  const t = (key) => translate(key, language);
  
  return (
    <div className="p-6 max-w-5xl mx-auto bg-white rounded-lg shadow-lg">
      {/* Přepínač jazyků s jednoduchými ikonami */}
      <div className="flex justify-end mb-4 space-x-2 language-selector">
        <button
          onClick={() => setLanguage('cs')}
          className={`px-3 py-1 rounded-md text-sm flex items-center ${language === 'cs' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
        >
          <span className="language-icon mr-2">CZ</span>
          <span>Čeština</span>
        </button>
        <button
          onClick={() => setLanguage('uk')}
          className={`px-3 py-1 rounded-md text-sm flex items-center ${language === 'uk' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
        >
          <span className="language-icon mr-2">UA</span>
          <span>Українська</span>
        </button>
        <button
          onClick={() => setLanguage('ru')}
          className={`px-3 py-1 rounded-md text-sm flex items-center ${language === 'ru' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
        >
          <span className="language-icon mr-2">RU</span>
          <span>Русский</span>
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded-md text-sm flex items-center ${language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
        >
          <span className="language-icon mr-2">EN</span>
          <span>English</span>
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
        <div className="mt-4 pt-3 border-t border-gray-200">
          <p className="flex items-center justify-center">
            <span>{t('author')}: </span>
            <a href="https://www.instagram.com/dashakovalchuk_/?hl=cs" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="ml-1 text-blue-600 hover:text-blue-800 flex items-center">
              dashakovalchuk_
              <i className="fab fa-instagram ml-2"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}; 