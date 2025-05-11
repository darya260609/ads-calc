// Komponenta kalkulačky
const Calculator = ({ language, currency, setCurrency }) => {
  // Základní stav
  const [budget, setBudget] = React.useState(200);
  const [customBudget, setCustomBudget] = React.useState('');
  const [duration, setDuration] = React.useState(14);
  const [customDuration, setCustomDuration] = React.useState('');
  const [cpc, setCpc] = React.useState(8);
  const [customCpc, setCustomCpc] = React.useState('');
  const [cpm, setCpm] = React.useState(150);
  const [customCpm, setCustomCpm] = React.useState('');
  const [industry, setIndustry] = React.useState('ecommerce');
  const [customIndustry, setCustomIndustry] = React.useState('');
  const [adObjective, setAdObjective] = React.useState('awareness');
  
  // Vypočítané hodnoty
  const [totalBudget, setTotalBudget] = React.useState(0);
  const [clicks, setClicks] = React.useState(0);
  const [impressions, setImpressions] = React.useState(0);
  const [reach, setReach] = React.useState(0);
  const [conversions, setConversions] = React.useState(0);
  
  // Zkrácení funkce pro překlad
  const t = (key) => translate(key, language);
  
  // Aktualizace CPC a CPM podle odvětví
  React.useEffect(() => {
    if (industry === 'custom') {
      setCpc(customCpc ? parseFloat(customCpc) : 7);
      setCpm(customCpm ? parseFloat(customCpm) : 140);
    } else {
      setCpc(industries[industry]?.cpc || 8);
      setCpm(industries[industry]?.cpm || 150);
    }
  }, [industry, customCpc, customCpm]);
  
  // Výpočet výsledků při změně vstupů
  React.useEffect(() => {
    // Stanovení skutečných hodnot (použití vlastních hodnot má přednost)
    const actualBudget = customBudget ? parseFloat(customBudget) : budget;
    const actualDuration = customDuration ? parseFloat(customDuration) : duration;
    const actualCpc = customCpc ? parseFloat(customCpc) : cpc;
    const actualCpm = customCpm ? parseFloat(customCpm) : cpm;
    
    // Získání faktorů pro zvolený cíl reklamy
    const objectiveFactors = adObjectives[adObjective];
    
    // Aplikace faktorů cíle reklamy
    const adjustedCpc = actualCpc * objectiveFactors.cpcFactor;
    const adjustedCpm = actualCpm * objectiveFactors.cpmFactor;
    
    // Výpočet celkového rozpočtu
    const calculatedBudget = actualBudget * actualDuration;
    setTotalBudget(calculatedBudget);
    
    // Výpočet počtu kliků
    const calculatedClicks = calculatedBudget / adjustedCpc;
    setClicks(calculatedClicks);
    
    // Výpočet počtu zobrazení
    const calculatedImpressions = calculatedBudget / (adjustedCpm / 1000);
    setImpressions(calculatedImpressions);
    
    // Odhadovaný dosah (obvykle 60-80% zobrazení)
    setReach(calculatedImpressions * 0.7);
    
    // Odhadovaný počet konverzí (závisí na cíli kampaně)
    const calculatedConversions = calculatedClicks * (objectiveFactors.conversionRate / 100);
    setConversions(calculatedConversions);
    
  }, [budget, customBudget, duration, customDuration, cpc, customCpc, cpm, customCpm, adObjective]);
  
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
          <div>
            <label className="block mb-1 font-medium">{t('dailyBudget')}</label>
            <div className="flex space-x-2">
              <select
                value={customBudget ? 'custom' : budget}
                onChange={(e) => {
                  if (e.target.value === 'custom') {
                    setCustomBudget(budget.toString());
                  } else {
                    setCustomBudget('');
                    setBudget(Number(e.target.value));
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
              
              {customBudget !== '' && (
                <input
                  type="number"
                  min="50"
                  value={customBudget}
                  onChange={(e) => setCustomBudget(e.target.value)}
                  className="w-1/2 p-2 border rounded"
                  placeholder={t('customValue')}
                />
              )}
            </div>
            <p className="text-sm text-gray-500 mt-1">{t('minRecommended')}</p>
          </div>
          
          <div>
            <label className="block mb-1 font-medium">{t('duration')}</label>
            <div className="flex space-x-2">
              <select
                value={customDuration ? 'custom' : duration}
                onChange={(e) => {
                  if (e.target.value === 'custom') {
                    setCustomDuration(duration.toString());
                  } else {
                    setCustomDuration('');
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
              
              {customDuration !== '' && (
                <input
                  type="number"
                  min="1"
                  value={customDuration}
                  onChange={(e) => setCustomDuration(e.target.value)}
                  className="w-1/2 p-2 border rounded"
                  placeholder={t('customDuration')}
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
          
          <div>
            <label className="block mb-1 font-medium">{t('industry')}</label>
            <div className="flex space-x-2">
              <select
                value={industry}
                onChange={(e) => {
                  setIndustry(e.target.value);
                  if (e.target.value === 'custom') {
                    setCustomIndustry(t('customIndustry'));
                  }
                }}
                className="w-full p-2 border rounded"
              >
                {Object.entries(industries).map(([key, value]) => (
                  <option key={key} value={key}>{t(value.nameKey)}</option>
                ))}
              </select>
              
              {industry === 'custom' && (
                <input
                  type="text"
                  value={customIndustry}
                  onChange={(e) => setCustomIndustry(e.target.value)}
                  className="w-1/2 p-2 border rounded"
                  placeholder={t('customIndustry')}
                />
              )}
            </div>
            <p className="text-sm text-gray-500 mt-1">{t('pricesDifferByIndustry')}</p>
          </div>
          
          <div className="mt-6 p-4 bg-blue-100 rounded-lg">
            <h3 className="font-medium mb-2">
              {t('averagePricesInIndustry')} {industry === 'custom' ? customIndustry : t(industries[industry]?.nameKey)}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">{t('cpc')}</p>
                <div className="flex items-center">
                  <p className="font-semibold">{formatCurrency(convertCurrency(cpc, currency), currency, language)}</p>
                  <button 
                    onClick={() => setCustomCpc(cpc.toString())}
                    className="ml-2 text-blue-500 text-sm"
                  >
                    {t('edit')}
                  </button>
                </div>
                {customCpc !== '' && (
                  <input
                    type="number"
                    min="0.1"
                    step="0.1"
                    value={customCpc}
                    onChange={(e) => setCustomCpc(e.target.value)}
                    className="mt-1 w-full p-1 border rounded text-sm"
                    placeholder={t('cpc')}
                  />
                )}
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">{t('cpm')}</p>
                <div className="flex items-center">
                  <p className="font-semibold">{formatCurrency(convertCurrency(cpm, currency), currency, language)}</p>
                  <button 
                    onClick={() => setCustomCpm(cpm.toString())}
                    className="ml-2 text-blue-500 text-sm"
                  >
                    {t('edit')}
                  </button>
                </div>
                {customCpm !== '' && (
                  <input
                    type="number"
                    min="1"
                    step="1"
                    value={customCpm}
                    onChange={(e) => setCustomCpm(e.target.value)}
                    className="mt-1 w-full p-1 border rounded text-sm"
                    placeholder={t('cpm')}
                  />
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
              <span className="font-bold text-xl">{formatCurrency(convertCurrency(totalBudget, currency), currency, language)}</span>
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
              <span>{t('tip1').replace('100-200', `100-200 ${currencies[currency].symbol}`)}</span>
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