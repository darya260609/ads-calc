// Seznam zemí a jejich faktorů pro reklamy na Meta platformách
const countries = {
  // Evropa
  "cz": { name: "Česká republika", region: "Evropa", cpcFactor: 1.0, cpmFactor: 1.0, reachFactor: 1.0, conversionFactor: 1.0 },
  "sk": { name: "Slovensko", region: "Evropa", cpcFactor: 0.95, cpmFactor: 0.9, reachFactor: 1.05, conversionFactor: 0.95 },
  "de": { name: "Německo", region: "Evropa", cpcFactor: 1.3, cpmFactor: 1.25, reachFactor: 0.9, conversionFactor: 1.1 },
  "at": { name: "Rakousko", region: "Evropa", cpcFactor: 1.25, cpmFactor: 1.2, reachFactor: 0.95, conversionFactor: 1.05 },
  "pl": { name: "Polsko", region: "Evropa", cpcFactor: 0.9, cpmFactor: 0.85, reachFactor: 1.1, conversionFactor: 0.9 },
  "hu": { name: "Maďarsko", region: "Evropa", cpcFactor: 0.9, cpmFactor: 0.85, reachFactor: 1.1, conversionFactor: 0.9 },
  "uk": { name: "Ukrajina", region: "Evropa", cpcFactor: 0.7, cpmFactor: 0.6, reachFactor: 1.2, conversionFactor: 0.8 },
  "fr": { name: "Francie", region: "Evropa", cpcFactor: 1.2, cpmFactor: 1.15, reachFactor: 0.9, conversionFactor: 1.05 },
  "it": { name: "Itálie", region: "Evropa", cpcFactor: 1.15, cpmFactor: 1.1, reachFactor: 0.95, conversionFactor: 1.0 },
  "es": { name: "Španělsko", region: "Evropa", cpcFactor: 1.1, cpmFactor: 1.05, reachFactor: 0.95, conversionFactor: 1.0 },
  "pt": { name: "Portugalsko", region: "Evropa", cpcFactor: 1.0, cpmFactor: 0.95, reachFactor: 1.0, conversionFactor: 0.95 },
  "gb": { name: "Velká Británie", region: "Evropa", cpcFactor: 1.4, cpmFactor: 1.35, reachFactor: 0.85, conversionFactor: 1.15 },
  "ie": { name: "Irsko", region: "Evropa", cpcFactor: 1.35, cpmFactor: 1.3, reachFactor: 0.9, conversionFactor: 1.1 },
  "be": { name: "Belgie", region: "Evropa", cpcFactor: 1.25, cpmFactor: 1.2, reachFactor: 0.9, conversionFactor: 1.05 },
  "nl": { name: "Nizozemsko", region: "Evropa", cpcFactor: 1.3, cpmFactor: 1.25, reachFactor: 0.9, conversionFactor: 1.1 },
  "dk": { name: "Dánsko", region: "Evropa", cpcFactor: 1.35, cpmFactor: 1.3, reachFactor: 0.9, conversionFactor: 1.15 },
  "se": { name: "Švédsko", region: "Evropa", cpcFactor: 1.35, cpmFactor: 1.3, reachFactor: 0.9, conversionFactor: 1.15 },
  "no": { name: "Norsko", region: "Evropa", cpcFactor: 1.4, cpmFactor: 1.35, reachFactor: 0.85, conversionFactor: 1.2 },
  "fi": { name: "Finsko", region: "Evropa", cpcFactor: 1.3, cpmFactor: 1.25, reachFactor: 0.9, conversionFactor: 1.1 },
  "ch": { name: "Švýcarsko", region: "Evropa", cpcFactor: 1.45, cpmFactor: 1.4, reachFactor: 0.85, conversionFactor: 1.2 },
  "gr": { name: "Řecko", region: "Evropa", cpcFactor: 1.0, cpmFactor: 0.95, reachFactor: 1.0, conversionFactor: 0.95 },
  "ro": { name: "Rumunsko", region: "Evropa", cpcFactor: 0.8, cpmFactor: 0.75, reachFactor: 1.15, conversionFactor: 0.85 },
  "bg": { name: "Bulharsko", region: "Evropa", cpcFactor: 0.8, cpmFactor: 0.75, reachFactor: 1.15, conversionFactor: 0.85 },
  "hr": { name: "Chorvatsko", region: "Evropa", cpcFactor: 0.9, cpmFactor: 0.85, reachFactor: 1.1, conversionFactor: 0.9 },
  "si": { name: "Slovinsko", region: "Evropa", cpcFactor: 1.0, cpmFactor: 0.95, reachFactor: 1.0, conversionFactor: 0.95 },
  
  // Severní Amerika
  "us": { name: "USA", region: "Severní Amerika", cpcFactor: 1.5, cpmFactor: 1.45, reachFactor: 0.8, conversionFactor: 1.25 },
  "ca": { name: "Kanada", region: "Severní Amerika", cpcFactor: 1.4, cpmFactor: 1.35, reachFactor: 0.85, conversionFactor: 1.2 },
  "mx": { name: "Mexiko", region: "Severní Amerika", cpcFactor: 0.9, cpmFactor: 0.85, reachFactor: 1.1, conversionFactor: 0.9 },
  
  // Asie
  "jp": { name: "Japonsko", region: "Asie", cpcFactor: 1.4, cpmFactor: 1.35, reachFactor: 0.85, conversionFactor: 1.15 },
  "kr": { name: "Jižní Korea", region: "Asie", cpcFactor: 1.3, cpmFactor: 1.25, reachFactor: 0.9, conversionFactor: 1.1 },
  "cn": { name: "Čína", region: "Asie", cpcFactor: 1.2, cpmFactor: 1.15, reachFactor: 0.95, conversionFactor: 1.05 },
  "in": { name: "Indie", region: "Asie", cpcFactor: 0.7, cpmFactor: 0.65, reachFactor: 1.2, conversionFactor: 0.8 },
  "id": { name: "Indonésie", region: "Asie", cpcFactor: 0.75, cpmFactor: 0.7, reachFactor: 1.15, conversionFactor: 0.85 },
  "th": { name: "Thajsko", region: "Asie", cpcFactor: 0.8, cpmFactor: 0.75, reachFactor: 1.15, conversionFactor: 0.85 },
  "vn": { name: "Vietnam", region: "Asie", cpcFactor: 0.75, cpmFactor: 0.7, reachFactor: 1.15, conversionFactor: 0.85 },
  "sg": { name: "Singapur", region: "Asie", cpcFactor: 1.35, cpmFactor: 1.3, reachFactor: 0.9, conversionFactor: 1.15 },
  
  // Austrálie a Oceánie
  "au": { name: "Austrálie", region: "Oceánie", cpcFactor: 1.4, cpmFactor: 1.35, reachFactor: 0.85, conversionFactor: 1.2 },
  "nz": { name: "Nový Zéland", region: "Oceánie", cpcFactor: 1.3, cpmFactor: 1.25, reachFactor: 0.9, conversionFactor: 1.1 },
  
  // Jižní Amerika
  "br": { name: "Brazílie", region: "Jižní Amerika", cpcFactor: 0.85, cpmFactor: 0.8, reachFactor: 1.1, conversionFactor: 0.9 },
  "ar": { name: "Argentina", region: "Jižní Amerika", cpcFactor: 0.8, cpmFactor: 0.75, reachFactor: 1.15, conversionFactor: 0.85 },
  "co": { name: "Kolumbie", region: "Jižní Amerika", cpcFactor: 0.75, cpmFactor: 0.7, reachFactor: 1.15, conversionFactor: 0.85 },
  "cl": { name: "Chile", region: "Jižní Amerika", cpcFactor: 0.85, cpmFactor: 0.8, reachFactor: 1.1, conversionFactor: 0.9 },
  
  // Afrika
  "za": { name: "Jihoafrická republika", region: "Afrika", cpcFactor: 0.9, cpmFactor: 0.85, reachFactor: 1.1, conversionFactor: 0.9 },
  "eg": { name: "Egypt", region: "Afrika", cpcFactor: 0.75, cpmFactor: 0.7, reachFactor: 1.15, conversionFactor: 0.85 },
  "ng": { name: "Nigérie", region: "Afrika", cpcFactor: 0.7, cpmFactor: 0.65, reachFactor: 1.2, conversionFactor: 0.8 },
  "ke": { name: "Keňa", region: "Afrika", cpcFactor: 0.7, cpmFactor: 0.65, reachFactor: 1.2, conversionFactor: 0.8 },
  
  // Blízký východ
  "ae": { name: "Spojené arabské emiráty", region: "Blízký východ", cpcFactor: 1.2, cpmFactor: 1.15, reachFactor: 0.95, conversionFactor: 1.05 },
  "sa": { name: "Saúdská Arábie", region: "Blízký východ", cpcFactor: 1.1, cpmFactor: 1.05, reachFactor: 1.0, conversionFactor: 1.0 },
  "il": { name: "Izrael", region: "Blízký východ", cpcFactor: 1.1, cpmFactor: 1.05, reachFactor: 1.0, conversionFactor: 1.0 },
  "tr": { name: "Turecko", region: "Blízký východ", cpcFactor: 0.9, cpmFactor: 0.85, reachFactor: 1.1, conversionFactor: 0.9 }
}; 