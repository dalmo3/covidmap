const locMapper = new Map([
  ['Auckland', 'auckland hospital'],
  ['Bay of Plenty', 'Tauranga Hospital'],
  ['Canterbury', 'Christchurch Hospital'],
  ['Capital and Coast', 'Wellington Regional Hospital'],
  ['Capital & Coast', 'Wellington Regional Hospital'],
  ['Counties Manukau', 'Manukau, Otara-Papatoetoe,'],
  ['Hawke\'s Bay', '100 McLeod Street Hastings '],
  ['Hawkes\'s Bay', '100 McLeod Street Hastings '],
  ['Hawkes Bay', '100 McLeod Street Hastings '],
  ['Hutt Valley', 'Hutt Hospital'],
  ['Lakes', 'Rotorua Hospital'],
  ['MidCentral', 'palmerston north hospital'],
  ['Nelson Marlborough', 'nelson hospital'],
  ['Northland', 'Whangarei Hospital'],
  ['South Canterbury', 'Timaru Hospital '],
  ['Southern', 'dunedin hospital'],
  ['Tairawhiti', 'Gisborne Hospital'],
  ['Taranaki', 'taranaki base Hospital'],
  ['Waikato', 'waikato Hospital'],
  ['Wairarapa', '96 Blair Street, Masterton'],
  ['Waitemata', 'waitemata auckland'],
  ['West Coast', 'greymouth hospital'],
  ['Whanganui', 'whanganui hospital'],
  ["Sydney Kingsford Smith Airport","Sydney Airport"]
]);

exports.get = (location) => locMapper.get(location) || location;

