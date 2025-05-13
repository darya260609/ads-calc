const CurrencySelector = ({ selectedCurrency, onCurrencyChange, language }) => {
    const t = translations[language];
    const currencies = window.appData.currencies;

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.selectCurrency}
            </label>
            <select
                value={selectedCurrency}
                onChange={(e) => onCurrencyChange(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
                {Object.entries(currencies).map(([code, data]) => (
                    <option key={code} value={code}>
                        {code} ({data.symbol})
                    </option>
                ))}
            </select>
        </div>
    );
};

// Export the component
window.CurrencySelector = CurrencySelector; 