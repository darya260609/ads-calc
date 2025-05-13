const CountrySelector = ({ selectedCountry, onCountryChange, language }) => {
    const t = translations[language];
    const countries = window.appData.countries;

    React.useEffect(() => {
        // Initialize Select2
        $('#country-select').select2({
            placeholder: t.selectCountry,
            allowClear: true,
            language: {
                noResults: () => t.searchCountry
            }
        });

        // Handle change event
        $('#country-select').on('change', (e) => {
            onCountryChange(e.target.value);
        });

        // Cleanup
        return () => {
            $('#country-select').select2('destroy');
        };
    }, [language]);

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.selectCountry}
            </label>
            <select
                id="country-select"
                value={selectedCountry}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
                <option value="">{t.selectCountry}</option>
                {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                        {country.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

// Export the component
window.CountrySelector = CountrySelector; 