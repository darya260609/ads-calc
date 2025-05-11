# Facebook & Instagram Ad Calculator

Vícejazyčná kalkulačka pro odhad nákladů na reklamy na platformách Facebook a Instagram. Podporuje češtinu, ukrajinštinu, ruštinu a angličtinu, a umožňuje výběr různých měn.

## Funkce

- Podpora 4 jazyků (čeština, ukrajinština, ruština, angličtina)
- Podpora 7 měn (CZK, EUR, USD, GBP, UAH, RUB, PLN)
- Možnost volby odvětví s automatickým nastavením cen
- Různé cíle reklamy s odpovídajícími faktory pro výpočty
- Přizpůsobitelné vstupy (vlastní hodnoty pro všechny parametry)
- Responzivní design pro mobilní i desktopová zařízení

## Struktura projektu

```
├── index.html              # Hlavní HTML soubor
├── css/
│   └── styles.css          # Dodatečné styly
├── js/
│   ├── App.js              # Hlavní React komponenta
│   ├── Calculator.js       # Komponenta kalkulačky
│   ├── data/               # Datové soubory
│   │   ├── translations.js # Jazykové překlady
│   │   ├── industries.js   # Odvětví a jejich ceny
│   │   ├── adObjectives.js # Cíle reklamy
│   │   └── currencies.js   # Měny a kurzy
│   └── utils.js            # Pomocné funkce
└── README.md               # Dokumentace
```

## Nasazení na GitHub Pages

Následuje návod, jak nasadit kalkulačku na GitHub Pages:

1. **Vytvoření GitHub repozitáře**

   - Přihlaste se do svého GitHub účtu
   - Vytvořte nový repozitář (např. "fb-ig-calculator")
   - Můžete ho vytvořit jako veřejný nebo soukromý

2. **Příprava lokálního repozitáře**

   ```bash
   # Inicializace Git repozitáře
   git init
   
   # Přidání všech souborů
   git add .
   
   # Vytvoření prvního commitu
   git commit -m "Initial commit"
   
   # Přidání vzdáleného repozitáře (nahraďte YOUR_USERNAME a YOUR_REPO_NAME)
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   
   # Pushnutí kódu na GitHub
   git push -u origin main
   ```

3. **Konfigurace GitHub Pages**

   - Jděte do GitHub repozitáře
   - Klikněte na "Settings" (Nastavení)
   - Přejděte do sekce "Pages" v levém menu
   - V sekci "Source" vyberte větev "main" a složku "/" (root)
   - Klikněte na "Save"

4. **Ověření nasazení**

   - GitHub Pages automaticky nasadí vaši aplikaci
   - URL bude ve formátu: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
   - Nasazení může trvat několik minut

## Aktualizace dat

### Aktualizace kurzů měn

Pro aktualizaci kurzů měn upravte soubor `js/data/currencies.js`. Každá měna má svůj kurz vůči CZK:

```javascript
// Příklad změny kurzu EUR
EUR: {
  code: 'EUR',
  symbol: '€',
  name: {
    cs: 'Euro',
    // další jazyky...
  },
  rate: 0.041 // Aktualizujte na aktuální kurz
}
```

### Aktualizace cen podle odvětví

Pro aktualizaci cen pro různá odvětví upravte soubor `js/data/industries.js`:

```javascript
// Příklad aktualizace cen pro E-commerce
ecommerce: { nameKey: 'indEcommerce', cpc: 8.5, cpm: 160 }
```

## Technické požadavky

Kalkulačka je postavena na:
- HTML5
- CSS3 (+ Tailwind CSS)
- JavaScript (ES6+)
- React (načítaný přes CDN)
- Babel (pro podporu JSX)

Není nutná žádná další konfigurace nebo sestavení - vše funguje přímo jako statické soubory.