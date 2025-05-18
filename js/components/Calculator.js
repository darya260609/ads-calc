// Komponenta kalkulačky
const Calculator = ({ language, currency, setCurrency }) => {
  // Základní stav
  const [budget, setBudget] = React.useState(200);
  const [budgetInput, setBudgetInput] = React.useState('custom');
  const [customBudget, setCustomBudget] = React.useState('200');
  const [duration, setDuration] = React.useState(14);
  const [durationInput, setDurationInput] = React.useState('14');
  const [customDuration, setCustomDuration] = React.useState(false);
  const [cpc, setCpc] = React.useState(8);
  const [customCpc, setCustomCpc] = React.useState('');
  const [cpm, setCpm] = React.useState(150);
  const [customCpm, setCustomCpm] = React.useState('');
  const [showCpcInput, setShowCpcInput] = React.useState(false);
  const [showCpmInput, setShowCpmInput] = React.useState(false);
  const [industry, setIndustry] = React.useState('ecommerce');
  const [adObjective, setAdObjective] = React.useState('awareness');
  
  // Stav pro platformy
  const [selectedPlatforms, setSelectedPlatforms] = React.useState({
    facebook: true,
    instagram: true
  });
  
  // Nový stav pro zemi a vyhledávání
  const [targetCountry, setTargetCountry] = React.useState('cz');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [showCountryDropdown, setShowCountryDropdown] = React.useState(false);
  
  // Nový stav pro odvětví a vyhledávání
  const [industrySearchQuery, setIndustrySearchQuery] = React.useState('');
  const [showIndustryDropdown, setShowIndustryDropdown] = React.useState(false);
  
  // Vypočítané hodnoty v CZK (základní měna)
  const [totalBudget, setTotalBudget] = React.useState(0);
  const [clicks, setClicks] = React.useState(0);
  const [impressions, setImpressions] = React.useState(0);
  const [reach, setReach] = React.useState(0);
  const [conversions, setConversions] = React.useState(0);
  
  // Zkrácení funkce pro překlad
  const t = (key, params) => translate(key, language, params);
  
  // Funkce pro filtrování zemí na základě vyhledávacího dotazu
  const filteredCountries = React.useMemo(() => {
    if (!searchQuery.trim()) {
      // Když není vyhledávací dotaz, vrátíme všechny země kromě Ruska
      return Object.entries(countries)
        .filter(([code]) => code !== 'ru')
        .sort((a, b) => {
          const nameA = t(`country${a[0].toUpperCase()}`) || a[1].name;
          const nameB = t(`country${b[0].toUpperCase()}`) || b[1].name;
          return nameA.localeCompare(nameB);
        });
    }
    
    // Filtrování podle vyhledávacího dotazu
    const query = searchQuery.toLowerCase();
    return Object.entries(countries)
      .filter(([code, country]) => {
        const translatedName = t(`country${code.toUpperCase()}`) || country.name;
        const translatedRegion = t(country.region) || country.region;
        return code !== 'ru' && (
          translatedName.toLowerCase().includes(query) || 
          translatedRegion.toLowerCase().includes(query)
        );
      })
      .sort((a, b) => {
        const nameA = t(`country${a[0].toUpperCase()}`) || a[1].name;
        const nameB = t(`country${b[0].toUpperCase()}`) || b[1].name;
        return nameA.localeCompare(nameB);
      });
  }, [searchQuery, language]);
  
  // Seskupení zemí podle regionů pro lepší zobrazení
  const countriesByRegion = React.useMemo(() => {
    const regions = {};
    
    filteredCountries.forEach(([code, country]) => {
      const regionKey = country.region;
      if (!regions[regionKey]) {
        regions[regionKey] = [];
      }
      regions[regionKey].push([code, country]);
    });
    
    return regions;
  }, [filteredCountries]);
  
  // Funkce pro filtrování odvětví na základě vyhledávacího dotazu
  const filteredIndustries = React.useMemo(() => {
    if (!industrySearchQuery.trim()) {
      // Když není vyhledávací dotaz, vrátíme všechny odvětví
      return Object.entries(industries).sort((a, b) => {
        const nameA = t(a[1].nameKey);
        const nameB = t(b[1].nameKey);
        return nameA.localeCompare(nameB);
      });
    }
    
    // Filtrování podle vyhledávacího dotazu
    const query = industrySearchQuery.toLowerCase();
    return Object.entries(industries)
      .filter(([key, value]) => {
        const translatedName = t(value.nameKey);
        return translatedName.toLowerCase().includes(query);
      })
      .sort((a, b) => {
        const nameA = t(a[1].nameKey);
        const nameB = t(b[1].nameKey);
        return nameA.localeCompare(nameB);
      });
  }, [industrySearchQuery, language]);
  
  // Přepínání platform
  const togglePlatform = (platform) => {
    setSelectedPlatforms(prev => {
      // Ověříme, že alespoň jedna platforma zůstane vybraná
      const newState = {...prev, [platform]: !prev[platform]};
      const anySelected = Object.values(newState).some(v => v);
      
      // Pokud uživatel odznačil poslední platformu, nedovolíme to
      if (!anySelected) {
        return prev;
      }
      
      return newState;
    });
  };
  
  // Sledování změny měny a aktualizace vstupů
  React.useEffect(() => {
    if (customBudget !== '') {
      // Převod z předchozí měny do nové měny
      const valueInCZK = convertToCZK(parseFloat(customBudget), currency);
      setCustomBudget(valueInCZK.toString());
    }
  }, [currency]);
  
  // Aktualizace CPC a CPM podle odvětví
  React.useEffect(() => {
    setCpc(industries[industry]?.cpc || 8);
    setCpm(industries[industry]?.cpm || 150);
  }, [industry]);
  
  // Výpočet výsledků při změně vstupů
  React.useEffect(() => {
    // Stanovení skutečných hodnot (převedené na CZK)
    const actualBudget = parseFloat(customBudget || budget);
    const actualDuration = parseFloat(customDuration ? durationInput : duration);
    const actualCpc = customCpc ? parseFloat(customCpc) : cpc;
    const actualCpm = customCpm ? parseFloat(customCpm) : cpm;
    
    // Získání faktorů pro zvolenou zemi
    const countryFactors = countries[targetCountry] || countries['cz'];
    
    // Použijeme CZK jako základní měnu pro výpočty
    const budgetCZK = convertToCZK(actualBudget, currency);
    
    // Získání faktorů pro zvolený cíl reklamy
    const objectiveFactors = adObjectives[adObjective];
    
    // Výpočet celkového rozpočtu v CZK
    const calculatedBudget = budgetCZK * actualDuration;
    setTotalBudget(calculatedBudget);
    
    // Inicializace hodnot
    let totalClicks = 0;
    let totalImpressions = 0;
    let totalReach = 0;
    let totalConversions = 0;
    
    // Výpočet pro každou platformu - celý rozpočet použit na každou vybranou platformu
    Object.entries(selectedPlatforms).forEach(([platformId, isSelected]) => {
      if (isSelected) {
        const platform = platforms[platformId];
        
        // Aplikace faktorů cíle reklamy, platformy a země
        const adjustedCpc = actualCpc * objectiveFactors.cpcFactor * platform.cpcFactor * countryFactors.cpcFactor;
        const adjustedCpm = actualCpm * objectiveFactors.cpmFactor * platform.cpmFactor * countryFactors.cpmFactor;
        
        // Výpočet kliků pro tuto platformu
        const platformClicks = calculatedBudget / adjustedCpc;
        totalClicks += platformClicks;
        
        // Výpočet zobrazení pro tuto platformu
        const platformImpressions = calculatedBudget / (adjustedCpm / 1000);
        totalImpressions += platformImpressions;
        
        // Výpočet dosahu pro tuto platformu (s faktorem platformy a země)
        totalReach += platformImpressions * 0.7 * platform.reachFactor * countryFactors.reachFactor;
        
        // Výpočet konverzí pro tuto platformu (s faktorem platformy a země)
        totalConversions += platformClicks * (objectiveFactors.conversionRate / 100) * platform.conversionFactor * countryFactors.conversionFactor;
      }
    });
    
    // Nastavení celkových hodnot
    setClicks(totalClicks);
    setImpressions(totalImpressions);
    setReach(totalReach);
    setConversions(totalConversions);
    
  }, [budget, customBudget, duration, durationInput, customDuration, cpc, customCpc, cpm, customCpm, adObjective, currency, selectedPlatforms, targetCountry]);
  
  // Handler pro změnu vlastního rozpočtu
  const handleCustomBudgetChange = (e) => {
    const val = e.target.value;
    setCustomBudget(val);
    if (val) {
      setBudget(parseFloat(val));
    }
  };
  
  // Handler pro změnu vlastní doby trvání
  const handleCustomDurationChange = (e) => {
    const val = e.target.value;
    setDurationInput(val);
    if (val) {
      setDuration(parseFloat(val));
    }
  };
  
  // Výběr země a zavření dropdown menu
  const selectCountry = (code) => {
    setTargetCountry(code);
    setShowCountryDropdown(false);
    setSearchQuery('');
  };
  
  // Zobrazení jména země
  const getCountryName = (code) => {
    return t(`country${code.toUpperCase()}`) || countries[code]?.name || '';
  };
  
  // Výběr odvětví a zavření dropdown menu
  const selectIndustry = (key) => {
    setIndustry(key);
    setShowIndustryDropdown(false);
    setIndustrySearchQuery('');
  };
  
  // Zobrazení názvu odvětví
  const getIndustryName = (key) => {
    return t(industries[key]?.nameKey) || key;
  };
  
  // Handler pro změnu CPC
  const handleCpcChange = (e) => {
    const val = e.target.value;
    setCustomCpc(val);
    if (val !== '') {
      setCpc(parseFloat(val));
    } else {
      // Pokud je pole prázdné, použijeme výchozí hodnotu pro dané odvětví
      setCpc(industry === 'custom' ? 7 : industries[industry]?.cpc || 8);
    }
  };

  // Handler pro změnu CPM
  const handleCpmChange = (e) => {
    const val = e.target.value;
    setCustomCpm(val);
    if (val !== '') {
      setCpm(parseFloat(val));
    } else {
      // Pokud je pole prázdné, použijeme výchozí hodnotu pro dané odvětví
      setCpm(industry === 'custom' ? 140 : industries[industry]?.cpm || 150);
    }
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Levá strana - vstupy */}
      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{t('campaignSettings')}</h2>
          
          {/* Výběr měny */}
          <div className="flex items-center">
            <label className="mr-2 text-sm font-medium">{t('selectCurrency')}</label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="p-1 border rounded bg-white"
            >
              {Object.keys(currencies).map(currCode => (
                <option key={currCode} value={currCode}>
                  {currencies[currCode].code} ({currencies[currCode].symbol})
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="space-y-5">
          {/* Výběr cílové země */}
          <div className="relative">
            <label className="block mb-1 font-medium">{t('targetCountry')}</label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                className="w-full p-2 border rounded bg-white flex justify-between items-center cursor-pointer hover:bg-gray-50 country-dropdown-button"
              >
                <span>{getCountryName(targetCountry)}</span>
                <i className={`fas fa-chevron-${showCountryDropdown ? 'up' : 'down'} text-gray-500`}></i>
              </button>
              
              {showCountryDropdown && (
                <div className="absolute z-10 mt-1 w-full bg-white border rounded shadow-lg max-h-80 overflow-y-auto country-dropdown">
                  <div className="sticky top-0 bg-white p-2 border-b country-search">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={t('searchCountry')}
                      className="w-full p-2 border rounded"
                      autoFocus
                    />
                  </div>
                  
                  <div className="p-2">
                    {Object.entries(countriesByRegion).map(([region, countriesInRegion]) => (
                      <div key={region} className="mb-2">
                        <div className="font-medium text-gray-700 mb-1 country-region-title">{t(region)}</div>
                        <div className="ml-2">
                          {countriesInRegion.map(([code, country]) => (
                            <div
                              key={code}
                              onClick={() => selectCountry(code)}
                              className={`p-2 cursor-pointer rounded country-item ${targetCountry === code ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
                            >
                              {getCountryName(code)}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <p className="text-sm text-gray-500 mt-1">{t('countryRecommendation')}</p>
          </div>
          
          {/* Sekce pro výběr platforem */}
          <div>
            <label className="block mb-2 font-medium">{t('platforms')}</label>
            <div className="flex flex-wrap space-x-2 mb-1">
              <div 
                className={`platform-checkbox facebook ${selectedPlatforms.facebook ? 'active' : ''}`}
                onClick={() => togglePlatform('facebook')}
              >
                <i className="fab fa-facebook-square"></i>
                <span>{t('facebook')}</span>
              </div>
              <div 
                className={`platform-checkbox instagram ${selectedPlatforms.instagram ? 'active' : ''}`}
                onClick={() => togglePlatform('instagram')}
              >
                <i className="fab fa-instagram"></i>
                <span>{t('instagram')}</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-1">{t('bothPlatformsRecommended')}</p>
          </div>
          
          {/* Výběr odvětví s vyhledáváním */}
          <div className="relative">
            <label className="block mb-1 font-medium">{t('industry')}</label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowIndustryDropdown(!showIndustryDropdown)}
                className="w-full p-2 border rounded bg-white flex justify-between items-center cursor-pointer hover:bg-gray-50 industry-dropdown-button"
              >
                <span>{getIndustryName(industry)}</span>
                <i className={`fas fa-chevron-${showIndustryDropdown ? 'up' : 'down'} text-gray-500`}></i>
              </button>
              
              {showIndustryDropdown && (
                <div className="absolute z-10 mt-1 w-full bg-white border rounded shadow-lg max-h-80 overflow-y-auto industry-dropdown">
                  <div className="sticky top-0 bg-white p-2 border-b industry-search">
                    <input
                      type="text"
                      value={industrySearchQuery}
                      onChange={(e) => setIndustrySearchQuery(e.target.value)}
                      placeholder={t('searchIndustry')}
                      className="w-full p-2 border rounded"
                      autoFocus
                    />
                  </div>
                  
                  <div className="p-2">
                    {filteredIndustries.map(([key, indData]) => (
                      <div
                        key={key}
                        onClick={() => selectIndustry(key)}
                        className={`p-2 cursor-pointer rounded industry-item ${industry === key ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
                      >
                        {t(indData.nameKey)}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <p className="text-sm text-gray-500 mt-1">{t('industryRecommendation')}</p>
          </div>
          
          <div>
            <label className="block mb-1 font-medium">{t('dailyBudget')}</label>
            <div className="flex space-x-2">
              <select
                value={budgetInput}
                onChange={(e) => {
                  setBudgetInput(e.target.value);
                  if (e.target.value !== 'custom') {
                    setBudget(Number(e.target.value));
                    setCustomBudget(e.target.value);
                  }
                }}
                className="w-1/2 p-2 border rounded"
              >
                <option value="100">100 {currencies[currency].symbol}</option>
                <option value="200">200 {currencies[currency].symbol}</option>
                <option value="500">500 {currencies[currency].symbol}</option>
                <option value="1000">1000 {currencies[currency].symbol}</option>
                <option value="custom">{t('customValue')}</option>
              </select>
              
              {budgetInput === 'custom' && (
                <input
                  type="number"
                  min="50"
                  value={customBudget}
                  onChange={handleCustomBudgetChange}
                  className="w-1/2 p-2 border rounded"
                  placeholder={t('enterCustomValue')}
                />
              )}
            </div>
            <p className="text-sm text-gray-500 mt-1">{t('minRecommended', { minAmount: formatCurrency(convertCurrency(100, currency), currency, language) })}</p>
          </div>
          
          <div>
            <label className="block mb-1 font-medium">{t('duration')}</label>
            <div className="flex space-x-2">
              <select
                value={customDuration ? 'custom' : duration}
                onChange={(e) => {
                  if (e.target.value === 'custom') {
                    setCustomDuration(true);
                    setDurationInput(duration.toString());
                  } else {
                    setCustomDuration(false);
                    setDuration(Number(e.target.value));
                  }
                }}
                className="w-1/2 p-2 border rounded"
              >
                <option value="7">{t('days7')}</option>
                <option value="14">{t('days14')}</option>
                <option value="30">{t('days30')}</option>
                <option value="60">{t('days60')}</option>
                <option value="90">{t('days90')}</option>
                <option value="custom">{t('customValue')}</option>
              </select>
              
              {customDuration && (
                <input
                  type="number"
                  min="1"
                  value={durationInput}
                  onChange={handleCustomDurationChange}
                  className="w-1/2 p-2 border rounded"
                  placeholder={t('enterCustomValue')}
                />
              )}
            </div>
            <p className="text-sm text-gray-500 mt-1">{t('durationRecommended')}</p>
          </div>
          
          <div>
            <label className="block mb-1 font-medium">{t('adObjective')}</label>
            <select
              value={adObjective}
              onChange={(e) => setAdObjective(e.target.value)}
              className="w-full p-2 border rounded"
            >
              {Object.entries(adObjectives).map(([key, value]) => (
                <option key={key} value={key}>{t(value.nameKey)}</option>
              ))}
            </select>
            <p className="text-sm text-gray-500 mt-1">
              {adObjective === 'awareness' && t('objectiveAwareness')}
              {adObjective === 'consideration' && t('objectiveConsideration')}
              {adObjective === 'conversion' && t('objectiveConversion')}
              {adObjective === 'traffic' && t('objectiveTraffic')}
              {adObjective === 'leads' && t('objectiveLeads')}
            </p>
          </div>
          
          <div className="mt-6 p-4 bg-blue-100 rounded-lg">
            <h3 className="font-medium mb-2">
              {t('averagePricesInIndustry')} {t(industries[industry]?.nameKey)}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">{t('cpc')}</p>
                <div className="flex items-center">
                  <p className="font-semibold">{formatCurrency(convertCurrency(cpc, currency), currency, language)}</p>
                  <button 
                    onClick={() => {
                      setShowCpcInput(true);
                      setCustomCpc(cpc.toString());
                    }}
                    className="ml-2 text-blue-500 text-sm"
                  >
                    {t('edit')}
                  </button>
                </div>
                {/* CPC input vždy viditelný, když je aktivní */}
                {showCpcInput && (
                  <div>
                    <input
                      type="number"
                      min="0.1"
                      step="0.1"
                      value={customCpc}
                      onChange={handleCpcChange}
                      className="mt-1 w-full p-1 border rounded text-sm"
                      placeholder={t('cpc')}
                    />
                  </div>
                )}
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">{t('cpm')}</p>
                <div className="flex items-center">
                  <p className="font-semibold">{formatCurrency(convertCurrency(cpm, currency), currency, language)}</p>
                  <button 
                    onClick={() => {
                      setShowCpmInput(true);
                      setCustomCpm(cpm.toString());
                    }}
                    className="ml-2 text-blue-500 text-sm"
                  >
                    {t('edit')}
                  </button>
                </div>
                {/* CPM input vždy viditelný, když je aktivní */}
                {showCpmInput && (
                  <div>
                    <input
                      type="number"
                      min="1"
                      step="1"
                      value={customCpm}
                      onChange={handleCpmChange}
                      className="mt-1 w-full p-1 border rounded text-sm"
                      placeholder={t('cpm')}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Pravá strana - výsledky */}
      <div>
        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h2 className="text-lg font-semibold mb-4">{t('estimatedResults')}</h2>
          
          <div className="mb-6 p-4 bg-white rounded-lg border border-green-200">
            <div className="flex justify-between items-center">
              <span className="font-medium">{t('totalBudget')}</span>
              <span className="font-bold text-xl">
                {formatCurrency(convertCurrency(totalBudget, currency), currency, language)}
              </span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg border border-green-200">
              <div className="text-sm text-gray-500">{t('clicks')}</div>
              <div className="font-bold text-xl">{formatNumber(clicks, language)}</div>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-green-200">
              <div className="text-sm text-gray-500">{t('impressions')}</div>
              <div className="font-bold text-xl">{formatNumber(impressions, language)}</div>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-green-200">
              <div className="text-sm text-gray-500">{t('reach')}</div>
              <div className="font-bold text-xl">{formatNumber(reach, language)}</div>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-green-200">
              <div className="text-sm text-gray-500">
                {adObjective === 'awareness' && t('awarenessIncrease')}
                {adObjective === 'consideration' && t('productInterest')}
                {adObjective === 'conversion' && t('conversionCount')}
                {adObjective === 'traffic' && t('visitCount')}
                {adObjective === 'leads' && t('leadCount')}
              </div>
              <div className="font-bold text-xl">{formatNumber(conversions, language)}</div>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">{t('tipsForBeginners')}</h2>
          
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center text-yellow-600 mr-2">✓</span>
              <span>{t('tip1', { amount: `${formatCurrency(convertCurrency(100, currency), currency, language)}-${formatCurrency(convertCurrency(200, currency), currency, language)}` })}</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center text-yellow-600 mr-2">✓</span>
              <span>{t('tip2')}</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center text-yellow-600 mr-2">✓</span>
              <span>{t('tip3')}</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center text-yellow-600 mr-2">✓</span>
              <span>{t('tip4')}</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center text-yellow-600 mr-2">✓</span>
              <span>
                {adObjective === 'awareness' && t('tipAwareness')}
                {adObjective === 'consideration' && t('tipConsideration')}
                {adObjective === 'conversion' && t('tipConversion')}
                {adObjective === 'traffic' && t('tipTraffic')}
                {adObjective === 'leads' && t('tipLeads')}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}; 