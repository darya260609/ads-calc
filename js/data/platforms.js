// Data o platformách a jejich faktorech pro výpočty
const platforms = {
  facebook: {
    id: 'facebook',
    nameKey: 'facebook',
    icon: '<i class="fab fa-facebook-square"></i>',
    cpcFactor: 1.0,
    cpmFactor: 1.0,
    reachFactor: 1.0,
    conversionFactor: 1.0
  },
  instagram: {
    id: 'instagram',
    nameKey: 'instagram',
    icon: '<i class="fab fa-instagram"></i>',
    cpcFactor: 1.2, // Instagram má obvykle o něco vyšší CPC
    cpmFactor: 1.1, // Instagram má obvykle o něco vyšší CPM
    reachFactor: 0.9, // Instagram má menší dosah než Facebook
    conversionFactor: 1.1 // Instagram má vyšší míru konverze v některých odvětvích
  }
}; 