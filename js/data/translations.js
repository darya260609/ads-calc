// Překlady pro všechny jazyky
const translations = {
  cs: {
    title: 'Kalkulačka nákladů na Facebook a Instagram reklamy',
    campaignSettings: 'Nastavení kampaně',
    dailyBudget: 'Denní rozpočet',
    customValue: 'Vlastní hodnota',
    minRecommended: 'Doporučeno minimálně {minAmount} pro začátek',
    duration: 'Doba trvání kampaně (dny)',
    customDuration: 'Vlastní doba trvání',
    durationRecommended: 'Doporučeno alespoň 7 dní pro první kampaň',
    adObjective: 'Cíl reklamy',
    objectiveAwareness: 'Vhodné pro zvýšení povědomí o značce nebo produktu',
    objectiveConsideration: 'Vhodné pro získání zájmu o produkt nebo službu',
    objectiveConversion: 'Vhodné pro dosažení prodeje nebo konverze',
    objectiveTraffic: 'Vhodné pro zvýšení návštěvnosti webu',
    objectiveLeads: 'Vhodné pro získání kontaktů na potenciální zákazníky',
    industry: 'Odvětví',
    customIndustry: 'Vlastní odvětví',
    pricesDifferByIndustry: 'Ceny se liší podle odvětví',
    averagePricesInIndustry: 'Průměrné ceny v odvětví',
    cpc: 'Cena za klik (CPC)',
    cpm: 'Cena za 1000 zobrazení (CPM)',
    edit: 'Upravit',
    estimatedResults: 'Odhadované výsledky',
    totalBudget: 'Celkový rozpočet:',
    clicks: 'Odhadovaný počet kliků',
    impressions: 'Odhadovaný počet zobrazení',
    reach: 'Odhadovaný dosah (počet lidí)',
    awarenessIncrease: 'Odhadovaný nárůst povědomí',
    productInterest: 'Odhadovaný zájem o produkt',
    conversionCount: 'Odhadovaný počet konverzí',
    visitCount: 'Odhadovaný počet návštěv',
    leadCount: 'Odhadovaný počet získaných kontaktů',
    tipsForBeginners: 'Tipy pro začátečníky',
    tip1: 'Začněte s menším rozpočtem ({amount}/den) pro testování',
    tip2: 'Vždy nastavte Meta Pixel na váš web pro lepší měření výsledků',
    tip3: 'Vytvořte několik verzí reklam a testujte je současně',
    tip4: 'Úzce definujte cílovou skupinu pro lepší výsledky',
    tipAwareness: 'Pro zvýšení povědomí používejte atraktivní obrázky a videa',
    tipConsideration: 'Pro zvážení produktu ukažte jeho hlavní výhody',
    tipConversion: 'Pro konverze přidejte jasnou výzvu k akci a časově omezené nabídky',
    tipTraffic: 'Pro návštěvnost webu používejte otázky a zajímavé titulky',
    tipLeads: 'Pro získání kontaktů nabídněte něco hodnotného zdarma (e-book, konzultace)',
    footerNote1: 'Kalkulačka používá průměrná data z trhu s reklamou na Meta platformách.',
    footerNote2: 'Výsledky se mohou lišit podle mnoha faktorů včetně kvality reklam a konkurence.',
    author: 'Autor aplikace',
    // Objekty
    objAwareness: 'Povědomí o značce',
    objConsideration: 'Zvážení produktu/služby',
    objConversion: 'Konverze/Prodej',
    objTraffic: 'Návštěvnost webu',
    objLeads: 'Získání kontaktů',
    // Odvětví
    indEcommerce: 'E-commerce',
    indServices: 'Služby',
    indEducation: 'Vzdělávání',
    indHealthcare: 'Zdravotnictví',
    indRealEstate: 'Reality',
    indAutomotive: 'Automotive',
    indTravel: 'Cestování',
    indBeauty: 'Krása a zdraví',
    indTech: 'Technologie',
    indFood: 'Gastronomie',
    // Nová odvětví
    indFinance: 'Finance',
    indFashion: 'Móda a oblečení',
    indGaming: 'Hry a gaming',
    indFitness: 'Fitness a sport',
    indEntertainment: 'Zábava a volný čas',
    indLegal: 'Právní služby',
    indSports: 'Sportovní vybavení',
    indPets: 'Domácí mazlíčci',
    indHomeGoods: 'Vybavení domácnosti',
    indInsurance: 'Pojištění',
    // Dalších 10 odvětví
    indJewelry: 'Šperky a hodinky',
    indConstruction: 'Stavebnictví',
    indAgriculture: 'Zemědělství',
    indChildcare: 'Péče o děti',
    indFurniture: 'Nábytek',
    indArts: 'Umění a kultura',
    indMusic: 'Hudba a nástroje', 
    indWedding: 'Svatby a oslavy',
    indPhotography: 'Fotografie a video',
    indElectronics: 'Elektronika',
    // Dny
    days7: '7 dní',
    days14: '14 dní',
    days30: '30 dní',
    days60: '60 dní',
    days90: '90 dní',
    // Měna
    selectCurrency: 'Měna:',
    // Nové položky pro měnu
    currencySettings: 'Nastavení měny',
    enterCustomValue: 'Zadejte vlastní hodnotu',
    // Platformy
    platforms: 'Reklamní platformy',
    facebook: 'Facebook',
    instagram: 'Instagram',
    bothPlatformsRecommended: 'Doporučeno používat obě platformy pro lepší výsledky',
    // Země
    targetCountry: 'Cílová země',
    searchCountry: 'Vyhledat zemi...',
    countryRecommendation: 'Cílení na konkrétní zemi může výrazně ovlivnit výsledky kampaně',
    // Regiony
    "Evropa": 'Evropa',
    "Severní Amerika": 'Severní Amerika',
    "Jižní Amerika": 'Jižní Amerika',
    "Asie": 'Asie',
    "Afrika": 'Afrika',
    "Oceánie": 'Oceánie',
    "Blízký východ": 'Blízký východ',
    // Překlady názvů zemí
    countryCZ: 'Česká republika',
    countrySK: 'Slovensko',
    countryDE: 'Německo',
    countryAT: 'Rakousko',
    countryPL: 'Polsko',
    countryHU: 'Maďarsko',
    countryUK: 'Ukrajina',
    countryFR: 'Francie',
    countryIT: 'Itálie',
    countryES: 'Španělsko',
    countryPT: 'Portugalsko',
    countryGB: 'Velká Británie',
    countryIE: 'Irsko',
    countryBE: 'Belgie',
    countryNL: 'Nizozemsko',
    countryDK: 'Dánsko',
    countrySE: 'Švédsko',
    countryNO: 'Norsko',
    countryFI: 'Finsko',
    countryCH: 'Švýcarsko',
    countryGR: 'Řecko',
    countryRO: 'Rumunsko',
    countryBG: 'Bulharsko',
    countryHR: 'Chorvatsko',
    countrySI: 'Slovinsko',
    countryUS: 'USA',
    countryCA: 'Kanada',
    countryMX: 'Mexiko',
    countryJP: 'Japonsko',
    countryKR: 'Jižní Korea',
    countryCN: 'Čína',
    countryIN: 'Indie',
    countryID: 'Indonésie',
    countryTH: 'Thajsko',
    countryVN: 'Vietnam',
    countrySG: 'Singapur',
    countryAU: 'Austrálie',
    countryNZ: 'Nový Zéland',
    countryBR: 'Brazílie',
    countryAR: 'Argentina',
    countryCO: 'Kolumbie',
    countryCL: 'Chile',
    countryZA: 'Jihoafrická republika',
    countryEG: 'Egypt',
    countryNG: 'Nigérie',
    countryKE: 'Keňa',
    countryAE: 'Spojené arabské emiráty',
    countrySA: 'Saúdská Arábie',
    countryIL: 'Izrael',
    countryTR: 'Turecko',
    searchIndustry: 'Vyhledat odvětví...',
    industryRecommendation: 'Vyberte odvětví, které nejlépe odpovídá vašemu podnikání',
    // Odvětví - jídlo (nové)
    indFoodRetail: 'Potraviny a nápoje',
    indFastFood: 'Rychlé občerstvení'
  },
  uk: {
    title: 'Калькулятор витрат на рекламу в Facebook та Instagram',
    campaignSettings: 'Налаштування кампанії',
    dailyBudget: 'Денний бюджет',
    customValue: 'Власне значення',
    minRecommended: 'Рекомендовано мінімум {minAmount} для початку',
    duration: 'Тривалість кампанії (днів)',
    customDuration: 'Власна тривалість',
    durationRecommended: 'Рекомендовано принаймні 7 днів для першої кампанії',
    adObjective: 'Мета реклами',
    objectiveAwareness: 'Підходить для підвищення обізнаності про бренд або продукт',
    objectiveConsideration: 'Підходить для залучення інтересу до продукту або послуги',
    objectiveConversion: 'Підходить для досягнення продажів або конверсій',
    objectiveTraffic: 'Підходить для збільшення відвідуваності сайту',
    objectiveLeads: 'Підходить для отримання контактів потенційних клієнтів',
    industry: 'Галузь',
    customIndustry: 'Власна галузь',
    pricesDifferByIndustry: 'Ціни відрізняються залежно від галузі',
    averagePricesInIndustry: 'Середні ціни в галузі',
    cpc: 'Ціна за клік (CPC)',
    cpm: 'Ціна за 1000 показів (CPM)',
    edit: 'Змінити',
    estimatedResults: 'Орієнтовні результати',
    totalBudget: 'Загальний бюджет:',
    clicks: 'Орієнтовна кількість кліків',
    impressions: 'Орієнтовна кількість показів',
    reach: 'Орієнтовне охоплення (кількість людей)',
    awarenessIncrease: 'Орієнтовне збільшення обізнаності',
    productInterest: 'Орієнтовний інтерес до продукту',
    conversionCount: 'Орієнтовна кількість конверсій',
    visitCount: 'Орієнтовна кількість відвідувань',
    leadCount: 'Орієнтовна кількість отриманих контактів',
    tipsForBeginners: 'Поради для початківців',
    tip1: 'Почніть з меншого бюджету ({amount}/день) для тестування',
    tip2: 'Завжди встановлюйте Meta Pixel на свій сайт для кращого вимірювання результатів',
    tip3: 'Створюйте кілька версій реклами та тестуйте їх одночасно',
    tip4: 'Точно визначте цільову аудиторію для кращих результатів',
    tipAwareness: 'Для підвищення обізнаності використовуйте привабливі зображення та відео',
    tipConsideration: 'Для розгляду продукту покажіть його основні переваги',
    tipConversion: 'Для конверсій додайте чіткий заклик до дії та обмежені за часом пропозиції',
    tipTraffic: 'Для відвідуваності сайту використовуйте питання та цікаві заголовки',
    tipLeads: 'Для отримання контактів пропонуйте щось цінне безкоштовно (електронна книга, консультація)',
    footerNote1: 'Калькулятор використовує середні дані з ринку реклами на платформах Meta.',
    footerNote2: 'Результати можуть відрізнятися залежно від багатьох факторів, включаючи якість реклами та конкуренцію.',
    author: 'Автор програми',
    // Об'єкти
    objAwareness: 'Обізнаність про бренд',
    objConsideration: 'Розгляд продукту/послуги',
    objConversion: 'Конверсія/Продаж',
    objTraffic: 'Відвідуваність сайту',
    objLeads: 'Отримання контактів',
    // Галузі
    indEcommerce: 'Електронна комерція',
    indServices: 'Послуги',
    indEducation: 'Освіта',
    indHealthcare: 'Охорона здоров\'я',
    indRealEstate: 'Нерухомість',
    indAutomotive: 'Автомобільна галузь',
    indTravel: 'Подорожі',
    indBeauty: 'Краса та здоров\'я',
    indTech: 'Технології',
    indFood: 'Гастрономія',
    // Нові галузі
    indFinance: 'Фінанси',
    indFashion: 'Мода та одяг',
    indGaming: 'Ігри та гейминг',
    indFitness: 'Фітнес та спорт',
    indEntertainment: 'Розваги та дозвілля',
    indLegal: 'Юридичні послуги',
    indSports: 'Спортивне обладнання',
    indPets: 'Домашні тварини',
    indHomeGoods: 'Товари для дому',
    indInsurance: 'Страхування',
    // Додаткові 10 галузей
    indJewelry: 'Ювелірні вироби та годинники',
    indConstruction: 'Будівництво',
    indAgriculture: 'Сільське господарство',
    indChildcare: 'Догляд за дітьми',
    indFurniture: 'Меблі',
    indArts: 'Мистецтво та культура',
    indMusic: 'Музика та інструменти',
    indWedding: 'Весілля та святкування',
    indPhotography: 'Фотографія та відео',
    indElectronics: 'Електроніка',
    // Дні
    days7: '7 днів',
    days14: '14 днів',
    days30: '30 днів',
    days60: '60 днів',
    days90: '90 днів',
    // Валюта
    selectCurrency: 'Валюта:',
    // Нові елементи для валюти
    currencySettings: 'Налаштування валюти',
    enterCustomValue: 'Введіть власне значення',
    // Платформи
    platforms: 'Рекламні платформи',
    facebook: 'Facebook',
    instagram: 'Instagram',
    bothPlatformsRecommended: 'Рекомендовано використовувати обидві платформи для кращих результатів',
    // Země
    targetCountry: 'Цільова країна',
    searchCountry: 'Пошук країни...',
    countryRecommendation: 'Націлювання на конкретну країну може суттєво вплинути на результати кампанії',
    // Regiony
    "Evropa": 'Європа',
    "Severnі Amerika": 'Північна Америка',
    "Jižnі Amerika": 'Південна Америка',
    "Asie": 'Азія',
    "Afrika": 'Африка',
    "Oceánie": 'Океанія',
    "Blízký východ": 'Близький Схід',
    // Překlady názvů zemí
    countryCZ: 'Чеська Республіка',
    countrySK: 'Словаччина',
    countryDE: 'Німеччина',
    countryAT: 'Австрія',
    countryPL: 'Польща',
    countryHU: 'Угорщина',
    countryUK: 'Україна',
    countryFR: 'Франція',
    countryIT: 'Італія',
    countryES: 'Іспанія',
    countryPT: 'Португалія',
    countryGB: 'Велика Британія',
    countryIE: 'Ірландія',
    countryBE: 'Бельгія',
    countryNL: 'Нідерланди',
    countryDK: 'Данія',
    countrySE: 'Швеція',
    countryNO: 'Норвегія',
    countryFI: 'Фінляндія',
    countryCH: 'Швейцарія',
    countryGR: 'Греція',
    countryRO: 'Румунія',
    countryBG: 'Болгарія',
    countryHR: 'Хорватія',
    countrySI: 'Словенія',
    countryUS: 'США',
    countryCA: 'Канада',
    countryMX: 'Мексика',
    countryJP: 'Японія',
    countryKR: 'Південна Корея',
    countryCN: 'Китай',
    countryIN: 'Індія',
    countryID: 'Індонезія',
    countryTH: 'Таїланд',
    countryVN: 'В\'єтнам',
    countrySG: 'Сінгапур',
    countryAU: 'Австралія',
    countryNZ: 'Нова Зеландія',
    countryBR: 'Бразилія',
    countryAR: 'Аргентина',
    countryCO: 'Колумбія',
    countryCL: 'Чилі',
    countryZA: 'Південно-Африканська Республіка',
    countryEG: 'Єгипет',
    countryNG: 'Нігерія',
    countryKE: 'Кенія',
    countryAE: 'Об\'єднані Арабські Емірати',
    countrySA: 'Саудівська Аравія',
    countryIL: 'Ізраїль',
    countryTR: 'Туреччина',
    searchIndustry: 'Пошук галузі...',
    industryRecommendation: 'Виберіть галузь, яка найкраще відповідає вашому бізнесу',
    // Галузі - їжа (нові)
    indFoodRetail: 'Продукти харчування та напої',
    indFastFood: 'Швидке харчування'
  },
  ru: {
    title: 'Калькулятор расходов на рекламу в Facebook и Instagram',
    campaignSettings: 'Настройки кампании',
    dailyBudget: 'Дневной бюджет',
    customValue: 'Собственное значение',
    minRecommended: 'Рекомендуется минимум {minAmount} для начала',
    duration: 'Длительность кампании (дней)',
    customDuration: 'Собственная длительность',
    durationRecommended: 'Рекомендуется не менее 7 дней для первой кампании',
    adObjective: 'Цель рекламы',
    objectiveAwareness: 'Подходит для повышения осведомленности о бренде или продукте',
    objectiveConsideration: 'Подходит для привлечения интереса к продукту или услуге',
    objectiveConversion: 'Подходит для достижения продаж или конверсий',
    objectiveTraffic: 'Подходит для увеличения посещаемости сайта',
    objectiveLeads: 'Подходит для получения контактов потенциальных клиентов',
    industry: 'Отрасль',
    customIndustry: 'Собственная отрасль',
    pricesDifferByIndustry: 'Цены различаются в зависимости от отрасли',
    averagePricesInIndustry: 'Средние цены в отрасли',
    cpc: 'Цена за клик (CPC)',
    cpm: 'Цена за 1000 показов (CPM)',
    edit: 'Изменить',
    estimatedResults: 'Ориентировочные результаты',
    totalBudget: 'Общий бюджет:',
    clicks: 'Ориентировочное количество кликов',
    impressions: 'Ориентировочное количество показов',
    reach: 'Ориентировочный охват (количество людей)',
    awarenessIncrease: 'Ориентировочное увеличение осведомленности',
    productInterest: 'Ориентировочный интерес к продукту',
    conversionCount: 'Ориентировочное количество конверсий',
    visitCount: 'Ориентировочное количество посещений',
    leadCount: 'Ориентировочное количество полученных контактов',
    tipsForBeginners: 'Советы для начинающих',
    tip1: 'Начните с меньшего бюджета ({amount}/день) для тестирования',
    tip2: 'Всегда устанавливайте Meta Pixel на свой сайт для лучшего измерения результатов',
    tip3: 'Создавайте несколько версий рекламы и тестируйте их одновременно',
    tip4: 'Точно определите целевую аудиторию для лучших результатов',
    tipAwareness: 'Для повышения осведомленности используйте привлекательные изображения и видео',
    tipConsideration: 'Для рассмотрения продукта покажите его основные преимущества',
    tipConversion: 'Для конверсий добавьте четкий призыв к действию и ограниченные по времени предложения',
    tipTraffic: 'Для посещаемости сайта используйте вопросы и интересные заголовки',
    tipLeads: 'Для получения контактов предлагайте что-то ценное бесплатно (электронная книга, консультация)',
    footerNote1: 'Калькулятор использует средние данные с рынка рекламы на платформах Meta.',
    footerNote2: 'Результаты могут отличаться в зависимости от многих факторов, включая качество рекламы и конкуренцию.',
    author: 'Автор программы',
    // Объекты
    objAwareness: 'Осведомленность о бренде',
    objConsideration: 'Рассмотрение продукта/услуги',
    objConversion: 'Конверсия/Продажа',
    objTraffic: 'Посещаемость сайта',
    objLeads: 'Получение контактов',
    // Отрасли
    indEcommerce: 'Электронная коммерция',
    indServices: 'Услуги',
    indEducation: 'Образование',
    indHealthcare: 'Здравоохранение',
    indRealEstate: 'Недвижимость',
    indAutomotive: 'Автомобильная отрасль',
    indTravel: 'Путешествия',
    indBeauty: 'Красота и здоровье',
    indTech: 'Технологии',
    indFood: 'Гастрономия',
    // Новые отрасли
    indFinance: 'Финансы',
    indFashion: 'Мода и одежда',
    indGaming: 'Игры и гейминг',
    indFitness: 'Фитнес и спорт',
    indEntertainment: 'Развлечения и досуг',
    indLegal: 'Юридические услуги',
    indSports: 'Спортивное оборудование',
    indPets: 'Домашние животные',
    indHomeGoods: 'Товары для дома',
    indInsurance: 'Страхование',
    // Дополнительные 10 отраслей
    indJewelry: 'Ювелирные изделия и часы',
    indConstruction: 'Строительство',
    indAgriculture: 'Сельское хозяйство',
    indChildcare: 'Уход за детьми',
    indFurniture: 'Мебель',
    indArts: 'Искусство и культура',
    indMusic: 'Музыка и инструменты',
    indWedding: 'Свадьбы и торжества',
    indPhotography: 'Фотография и видео',
    indElectronics: 'Электроника',
    // Дни
    days7: '7 дней',
    days14: '14 дней',
    days30: '30 дней',
    days60: '60 дней',
    days90: '90 дней',
    // Валюта
    selectCurrency: 'Валюта:',
    // Новые элементы для валюты
    currencySettings: 'Настройки валюты',
    enterCustomValue: 'Введите собственное значение',
    // Платформы
    platforms: 'Рекламные платформы',
    facebook: 'Facebook',
    instagram: 'Instagram',
    bothPlatformsRecommended: 'Рекомендуется использовать обе платформы для лучших результатов',
    // Země
    targetCountry: 'Целевая страна',
    searchCountry: 'Найти страну...',
    countryRecommendation: 'Таргетинг на конкретную страну может значительно повлиять на результаты кампании',
    // Regiony
    "Evropa": 'Европа',
    "Severní Amerika": 'Северная Америка',
    "Jižní Amerika": 'Южная Америка',
    "Asie": 'Азия',
    "Afrika": 'Африка',
    "Oceánie": 'Океания',
    "Blízký východ": 'Ближний Восток',
    // Překlady názvů zemí
    countryCZ: 'Чешская Республика',
    countrySK: 'Словакия',
    countryDE: 'Германия',
    countryAT: 'Австрия',
    countryPL: 'Польша',
    countryHU: 'Венгрия',
    countryUK: 'Украина',
    countryFR: 'Франция',
    countryIT: 'Италия',
    countryES: 'Испания',
    countryPT: 'Португалия',
    countryGB: 'Великобритания',
    countryIE: 'Ирландия',
    countryBE: 'Бельгия',
    countryNL: 'Нидерланды',
    countryDK: 'Дания',
    countrySE: 'Швеция',
    countryNO: 'Норвегия',
    countryFI: 'Финляндия',
    countryCH: 'Швейцария',
    countryGR: 'Греция',
    countryRO: 'Румыния',
    countryBG: 'Болгария',
    countryHR: 'Хорватия',
    countrySI: 'Словения',
    countryUS: 'США',
    countryCA: 'Канада',
    countryMX: 'Мексика',
    countryJP: 'Япония',
    countryKR: 'Южная Корея',
    countryCN: 'Китай',
    countryIN: 'Индия',
    countryID: 'Индонезия',
    countryTH: 'Таиланд',
    countryVN: 'Вьетнам',
    countrySG: 'Сингапур',
    countryAU: 'Австралия',
    countryNZ: 'Новая Зеландия',
    countryBR: 'Бразилия',
    countryAR: 'Аргентина',
    countryCO: 'Колумбия',
    countryCL: 'Чили',
    countryZA: 'Южно-Африканская Республика',
    countryEG: 'Египет',
    countryNG: 'Нигерия',
    countryKE: 'Кения',
    countryAE: 'Объединенные Арабские Эмираты',
    countrySA: 'Саудовская Аравия',
    countryIL: 'Израиль',
    countryTR: 'Турция',
    searchIndustry: 'Найти отрасль...',
    industryRecommendation: 'Выберите отрасль, которая лучше всего соответствует вашему бизнесу',
    // Отрасли - еда (новые)
    indFoodRetail: 'Продукты питания и напитки',
    indFastFood: 'Быстрое питание'
  },
  en: {
    title: 'Facebook and Instagram Advertising Cost Calculator',
    campaignSettings: 'Campaign Settings',
    dailyBudget: 'Daily Budget',
    customValue: 'Custom Value',
    minRecommended: 'Recommended minimum of {minAmount} to start',
    duration: 'Campaign Duration (days)',
    customDuration: 'Custom Duration',
    durationRecommended: 'Recommended at least 7 days for first campaign',
    adObjective: 'Ad Objective',
    objectiveAwareness: 'Suitable for increasing brand or product awareness',
    objectiveConsideration: 'Suitable for generating interest in product or service',
    objectiveConversion: 'Suitable for achieving sales or conversions',
    objectiveTraffic: 'Suitable for increasing website traffic',
    objectiveLeads: 'Suitable for acquiring potential customer contacts',
    industry: 'Industry',
    customIndustry: 'Custom Industry',
    pricesDifferByIndustry: 'Prices differ by industry',
    averagePricesInIndustry: 'Average prices in industry',
    cpc: 'Cost per Click (CPC)',
    cpm: 'Cost per 1000 Impressions (CPM)',
    edit: 'Edit',
    estimatedResults: 'Estimated Results',
    totalBudget: 'Total Budget:',
    clicks: 'Estimated Number of Clicks',
    impressions: 'Estimated Number of Impressions',
    reach: 'Estimated Reach (number of people)',
    awarenessIncrease: 'Estimated Awareness Increase',
    productInterest: 'Estimated Product Interest',
    conversionCount: 'Estimated Number of Conversions',
    visitCount: 'Estimated Number of Visits',
    leadCount: 'Estimated Number of Acquired Contacts',
    tipsForBeginners: 'Tips for Beginners',
    tip1: 'Start with a smaller budget ({amount}/day) for testing',
    tip2: 'Always set up Meta Pixel on your website for better result measurement',
    tip3: 'Create multiple ad versions and test them simultaneously',
    tip4: 'Narrowly define your target audience for better results',
    tipAwareness: 'For increasing awareness, use attractive images and videos',
    tipConsideration: 'For product consideration, show its main benefits',
    tipConversion: 'For conversions, add a clear call to action and time-limited offers',
    tipTraffic: 'For website traffic, use questions and interesting headlines',
    tipLeads: 'For acquiring contacts, offer something valuable for free (e-book, consultation)',
    footerNote1: 'The calculator uses average data from the Meta platforms advertising market.',
    footerNote2: 'Results may vary based on many factors including ad quality and competition.',
    author: 'Author of the application',
    // Objects
    objAwareness: 'Brand Awareness',
    objConsideration: 'Product/Service Consideration',
    objConversion: 'Conversion/Sale',
    objTraffic: 'Website Traffic',
    objLeads: 'Lead Generation',
    // Industries
    indEcommerce: 'E-commerce',
    indServices: 'Services',
    indEducation: 'Education',
    indHealthcare: 'Healthcare',
    indRealEstate: 'Real Estate',
    indAutomotive: 'Automotive',
    indTravel: 'Travel',
    indBeauty: 'Beauty & Health',
    indTech: 'Technology',
    indFood: 'Food & Beverage',
    // New industries
    indFinance: 'Finance',
    indFashion: 'Fashion & Clothing',
    indGaming: 'Gaming & Games',
    indFitness: 'Fitness & Sports',
    indEntertainment: 'Entertainment & Leisure',
    indLegal: 'Legal Services',
    indSports: 'Sports Equipment',
    indPets: 'Pets & Pet Supplies',
    indHomeGoods: 'Home Goods',
    indInsurance: 'Insurance',
    // Additional 10 industries
    indJewelry: 'Jewelry & Watches',
    indConstruction: 'Construction',
    indAgriculture: 'Agriculture',
    indChildcare: 'Childcare',
    indFurniture: 'Furniture',
    indArts: 'Arts & Culture',
    indMusic: 'Music & Instruments',
    indWedding: 'Weddings & Celebrations',
    indPhotography: 'Photography & Video',
    indElectronics: 'Electronics',
    // Days
    days7: '7 days',
    days14: '14 days',
    days30: '30 days',
    days60: '60 days',
    days90: '90 days',
    // Currency
    selectCurrency: 'Currency:',
    // New items for currency
    currencySettings: 'Currency Settings',
    enterCustomValue: 'Enter custom value',
    // Platforms
    platforms: 'Advertising Platforms',
    facebook: 'Facebook',
    instagram: 'Instagram',
    bothPlatformsRecommended: 'Recommended to use both platforms for better results',
    // Země
    targetCountry: 'Target Country',
    searchCountry: 'Search country...',
    countryRecommendation: 'Targeting a specific country can significantly impact campaign results',
    // Regiony
    "Evropa": 'Europe',
    "Severní Amerika": 'North America',
    "Jižní Amerika": 'South America',
    "Asie": 'Asia',
    "Afrika": 'Africa',
    "Oceánie": 'Oceania',
    "Blízký východ": 'Middle East',
    // Překlady názvů zemí
    countryCZ: 'Czech Republic',
    countrySK: 'Slovakia',
    countryDE: 'Germany',
    countryAT: 'Austria',
    countryPL: 'Poland',
    countryHU: 'Hungary',
    countryUK: 'Ukraine',
    countryFR: 'France',
    countryIT: 'Italy',
    countryES: 'Spain',
    countryPT: 'Portugal',
    countryGB: 'Great Britain',
    countryIE: 'Ireland',
    countryBE: 'Belgium',
    countryNL: 'Netherlands',
    countryDK: 'Denmark',
    countrySE: 'Sweden',
    countryNO: 'Norway',
    countryFI: 'Finland',
    countryCH: 'Switzerland',
    countryGR: 'Greece',
    countryRO: 'Romania',
    countryBG: 'Bulgaria',
    countryHR: 'Croatia',
    countrySI: 'Slovenia',
    countryUS: 'USA',
    countryCA: 'Canada',
    countryMX: 'Mexico',
    countryJP: 'Japan',
    countryKR: 'South Korea',
    countryCN: 'China',
    countryIN: 'India',
    countryID: 'Indonesia',
    countryTH: 'Thailand',
    countryVN: 'Vietnam',
    countrySG: 'Singapore',
    countryAU: 'Australia',
    countryNZ: 'New Zealand',
    countryBR: 'Brazil',
    countryAR: 'Argentina',
    countryCO: 'Colombia',
    countryCL: 'Chile',
    countryZA: 'South Africa',
    countryEG: 'Egypt',
    countryNG: 'Nigeria',
    countryKE: 'Kenya',
    countryAE: 'United Arab Emirates',
    countrySA: 'Saudi Arabia',
    countryIL: 'Israel',
    countryTR: 'Turkey',
    searchIndustry: 'Search industry...',
    industryRecommendation: 'Select the industry that best matches your business',
    // Industries - food (new)
    indFoodRetail: 'Food & Beverages Retail',
    indFastFood: 'Fast Food'
  }
}; 