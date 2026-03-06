// Mapeo colonia/fraccionamiento → distrito para Puerto Vallarta
// Permite auto-detectar el distrito a partir de la dirección
// Fuente: Plans Parciales de Desarrollo Urbano + conocimiento geográfico local

export const COLONIA_DISTRITO = {
  // D1 — Zona Romántica / Olas Altas / Las Palmas Norte
  "emiliano zapata": "D1", "zona romantica": "D1", "zona romántica": "D1",
  "olas altas": "D1", "las palmas": "D1", "las palmas norte": "D1",
  "altavista": "D1", "alta vista": "D1", "col. centro sur": "D1",
  "pilitas": "D1", "las pilitas": "D1", "coapinole": "D1",

  // D2 — 5 de Diciembre / Col. E. Zapata Norte
  "5 de diciembre": "D2", "cinco de diciembre": "D2",
  "centro": "D2", "col. centro": "D2", "el centro": "D2",
  "lazaro cardenas": "D2", "lázaro cárdenas": "D2",
  "el caloso": "D2", "canoas": "D2", "brasilia": "D2",
  "el cerro": "D2", "santa maria": "D2", "santa maría": "D2",
  "isla cuale": "D2", "isla del cuale": "D2",

  // D3 — Versalles / Fluvial
  "versalles": "D3", "diaz ordaz": "D3", "díaz ordaz": "D3",
  "fluvial": "D3", "fluvial vallarta": "D3",
  "olimpica": "D3", "olímpica": "D3",
  "lopez mateos": "D3", "lópez mateos": "D3",
  "bobadilla": "D3", "gaviotas": "D3",
  "las gaviotas": "D3", "ignacio l. vallarta": "D3",
  "col. petrolera": "D3",

  // D4 — Ixtapa / Las Juntas / Pitillal
  "ixtapa": "D4", "las juntas": "D4", "pitillal": "D4",
  "el pitillal": "D4", "villas del puerto": "D4",
  "real ixtapa": "D4", "jardines del puerto": "D4",
  "infonavit": "D4", "lomas del coapinole": "D4",
  "los portales": "D4", "las aralias": "D4",
  "las flores": "D4", "del real": "D4",
  "mojoneras": "D4", "las mojoneras": "D4",
  "jardines de las juntas": "D4", "rincón del puerto": "D4",
  "rincon del puerto": "D4", "villa las flores": "D4",
  "aramara": "D4", "la floresta": "D4",
  "palmar de aramara": "D4", "villas de las flores": "D4",
  "paso ancho": "D4", "san esteban": "D4",
  "educación": "D4", "educacion": "D4",

  // D5 — Marina Vallarta / Zona Hotelera Norte
  "marina vallarta": "D5", "la marina": "D5",
  "zona hotelera": "D5", "zona hotelera norte": "D5",
  "hotel zone": "D5", "las glorias": "D5",
  "los tules": "D5", "villas universidad": "D5",
  "villa universidad": "D5",
  "francisco villa": "D5", "jardines de vallarta": "D5",
  "jardines vallarta": "D5", "lomas de enmedio": "D5",
  "los mangos": "D5", "los sauces": "D5",
  "peninsula": "D5", "península": "D5",

  // D9 — Conchas Chinas / Amapas
  "conchas chinas": "D9", "amapas": "D9",
  "los muertos": "D9", "playa los muertos": "D9",
  "garza blanca": "D9", "mismaloya": "D9",
  "boca de tomatlán": "D9", "boca de tomatlan": "D9",
  "los venados": "D9", "sierra del mar": "D9",

  // Bahía de Banderas — localidades principales
  "bucerias": "BB", "bucerías": "BB",
  "cruz de huanacaxtle": "BB", "la cruz de huanacaxtle": "BB",
  "sayulita": "BB", "san francisco": "BB", "san pancho": "BB",
  "lo de marcos": "BB", "higuera blanca": "BB",
  "valle de banderas": "BB", "jarretaderas": "BB",
  "mezcales": "BB", "mezcalitos": "BB",
  "nuevo vallarta": "BB", "nuevo nayarit": "BB",
  "flamingos": "BB", "san jose del valle": "BB",
  "san josé del valle": "BB", "el porvenir": "BB",
  "san vicente": "BB", "san juan de abajo": "BB",
  "el colomo": "BB", "pontoroque": "BB",
  "punta de mita": "BB", "punta mita": "BB",
  "litibú": "BB", "litibu": "BB",
  "corral del risco": "BB", "el anclote": "BB",
  "emiliano zapata bb": "BB", "fracc. emiliano zapata": "BB",
};

// Función: buscar distrito por nombre de colonia (fuzzy)
export function findDistrito(text) {
  if (!text) return null;
  const t = text.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[.,;:]/g, ' ').trim();

  // Buscar match exacto primero
  for (const [colonia, distrito] of Object.entries(COLONIA_DISTRITO)) {
    const c = colonia.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    if (t.includes(c)) return distrito;
  }
  return null;
}
