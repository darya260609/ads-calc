const AdCalculator = () => {
    const [language, setLanguage] = React.useState('cs');
    const [currency, setCurrency] = React.useState('CZK');
    const [country, setCountry] = React.useState('');
    const [platforms, setPlatforms] = React.useState(['facebook']);
    const [dailyBudget, setDailyBudget] = React.useState('');
    const [duration, setDuration] = React.useState('7');
    const [objective, setObjective] = React.useState('awareness');
    const [industry, setIndustry] = React.useState('services');

    const t = translations[language];
    const { currencies, countries, industryMultipliers, platformMultipliers, recommendedBudgets } = window.appData;

    const calculateResults = () => {
        if (!dailyBudget || !country || platforms.length === 0) return null;

        const selectedCountry = countries.find(c => c.code === country);
        const currencyRate = currencies[currency].rate;
        const industryMultiplier = industryMultipliers[industry];
        const platformMultiplier = platforms.reduce((acc, platform) => {
            const multiplier = platformMultipliers[platform];
            return {
                cpc: acc.cpc + multiplier.cpc,
                cpm: acc.cpm + multiplier.cpm
            };
        }, { cpc: 0, cpm: 0 });

        // Average the platform multipliers
        platformMultiplier.cpc /= platforms.length;
        platformMultiplier.cpm /= platforms.length;

        // Convert daily budget to USD
        const dailyBudgetUSD = parseFloat(dailyBudget) / currencyRate;
        const totalBudgetUSD = dailyBudgetUSD * parseInt(duration);

        // Calculate metrics
        const cpc = selectedCountry.cpc * industryMultiplier.cpc * platformMultiplier.cpc;
        const cpm = selectedCountry.cpm * industryMultiplier.cpm * platformMultiplier.cpm;

        const clicks = Math.floor(totalBudgetUSD / cpc);
        const impressions = Math.floor((totalBudgetUSD / cpm) * 1000);
        const reach = Math.floor(impressions * 0.4); // Assuming 40% unique reach

        // Calculate objective-specific metrics
        let objectiveMetrics = {};
        switch (objective) {
            case 'awareness':
                objectiveMetrics = {
                    awarenessIncrease: Math.floor(reach * 0.3) // 30% of reach
                };
                break;
            case 'consideration':
                objectiveMetrics = {
                    productInterest: Math.floor(clicks * 0.4) // 40% of clicks
                };
                break;
            case 'conversion':
                objectiveMetrics = {
                    conversionCount: Math.floor(clicks * 0.1) // 10% conversion rate
                };
                break;
            case 'traffic':
                objectiveMetrics = {
                    visitCount: Math.floor(clicks * 0.8) // 80% of clicks
                };
                break;
            case 'leads':
                objectiveMetrics = {
                    leadCount: Math.floor(clicks * 0.2) // 20% of clicks
                };
                break;
        }

        return {
            totalBudget: totalBudgetUSD * currencyRate,
            clicks,
            impressions,
            reach,
            ...objectiveMetrics
        };
    };

    const results = calculateResults();
    const recommendedBudget = recommendedBudgets[currency];

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">{t.title}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <CurrencySelector
                        selectedCurrency={currency}
                        onCurrencyChange={setCurrency}
                        language={language}
                    />

                    <CountrySelector
                        selectedCountry={country}
                        onCountryChange={setCountry}
                        language={language}
                    />

                    <PlatformSelector
                        selectedPlatforms={platforms}
                        onPlatformChange={setPlatforms}
                        language={language}
                    />

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t.dailyBudget}
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input
                                type="number"
                                value={dailyBudget}
                                onChange={(e) => setDailyBudget(e.target.value)}
                                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
                                placeholder={t.enterCustomValue}
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <span className="text-gray-500 sm:text-sm">
                                    {currencies[currency].symbol}
                                </span>
                            </div>
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                            {t.minRecommended.replace('{min}', recommendedBudget.min).replace('{max}', recommendedBudget.max)}
                        </p>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t.duration}
                        </label>
                        <select
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                        >
                            <option value="7">{t.days7}</option>
                            <option value="14">{t.days14}</option>
                            <option value="30">{t.days30}</option>
                            <option value="60">{t.days60}</option>
                            <option value="90">{t.days90}</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t.adObjective}
                        </label>
                        <select
                            value={objective}
                            onChange={(e) => setObjective(e.target.value)}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                        >
                            <option value="awareness">{t.objAwareness}</option>
                            <option value="consideration">{t.objConsideration}</option>
                            <option value="conversion">{t.objConversion}</option>
                            <option value="traffic">{t.objTraffic}</option>
                            <option value="leads">{t.objLeads}</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t.industry}
                        </label>
                        <select
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                        >
                            <option value="ecommerce">{t.indEcommerce}</option>
                            <option value="services">{t.indServices}</option>
                            <option value="education">{t.indEducation}</option>
                            <option value="healthcare">{t.indHealthcare}</option>
                            <option value="realEstate">{t.indRealEstate}</option>
                            <option value="automotive">{t.indAutomotive}</option>
                            <option value="travel">{t.indTravel}</option>
                            <option value="beauty">{t.indBeauty}</option>
                            <option value="tech">{t.indTech}</option>
                            <option value="food">{t.indFood}</option>
                            <option value="custom">{t.indCustom}</option>
                        </select>
                    </div>
                </div>

                {results && (
                    <div className="results-container bg-gray-50 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            {t.estimatedResults}
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm font-medium text-gray-500">{t.totalBudget}</p>
                                <p className="text-lg font-semibold text-gray-900">
                                    {results.totalBudget.toLocaleString()} {currencies[currency].symbol}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">{t.clicks}</p>
                                <p className="text-lg font-semibold text-gray-900">
                                    {results.clicks.toLocaleString()}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">{t.impressions}</p>
                                <p className="text-lg font-semibold text-gray-900">
                                    {results.impressions.toLocaleString()}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">{t.reach}</p>
                                <p className="text-lg font-semibold text-gray-900">
                                    {results.reach.toLocaleString()}
                                </p>
                            </div>
                            {Object.entries(results).map(([key, value]) => {
                                if (['totalBudget', 'clicks', 'impressions', 'reach'].includes(key)) return null;
                                return (
                                    <div key={key}>
                                        <p className="text-sm font-medium text-gray-500">{t[key]}</p>
                                        <p className="text-lg font-semibold text-gray-900">
                                            {value.toLocaleString()}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-medium text-blue-900 mb-4">{t.tipsForBeginners}</h3>
                <ul className="space-y-2">
                    <li className="text-blue-800">{t.tip1.replace('{min}', recommendedBudget.min).replace('{max}', recommendedBudget.max)}</li>
                    <li className="text-blue-800">{t.tip2}</li>
                    <li className="text-blue-800">{t.tip3}</li>
                    <li className="text-blue-800">{t.tip4}</li>
                    <li className="text-blue-800">{t[`tip${objective.charAt(0).toUpperCase() + objective.slice(1)}`]}</li>
                </ul>
            </div>

            <div className="mt-8 text-sm text-gray-500">
                <p>{t.footerNote1}</p>
                <p className="mt-1">{t.footerNote2}</p>
            </div>
        </div>
    );
};

// Export the component
window.AdCalculator = AdCalculator; 