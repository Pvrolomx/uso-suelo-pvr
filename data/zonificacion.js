// Datos de zonificación de los 6 distritos urbanos de Puerto Vallarta
// Fuente: Planes Parciales de Desarrollo Urbano (2012 y 2018-2021)
// Extraídos de PDFs oficiales del H. Ayuntamiento de Puerto Vallarta

export const DISTRITOS = {
  D1: {
    nombre: "Zona Romántica / Olas Altas / Las Palmas Norte",
    periodo: "2018-2021",
    zonas: [
      { clave: "TS(1-2)", nombre: "Turístico Sustentable", lote: 10000, frente: 30, COS: 0.15, CUS: 0.30, altura: "R*", IV: "—", IHO: 15 },
      { clave: "TA(1)", nombre: "Turístico Alternativo", lote: 1600, frente: 70, COS: 0.25, CUS: 0.50, altura: "R*", IV: "—", IHO: 25 },
      { clave: "TA(2)", nombre: "Turístico Alternativo", lote: 7500, frente: 70, COS: 0.20, CUS: 0.60, altura: "R*", IV: "—", IHO: 30 },
      { clave: "H1(1-8,10-15)", nombre: "Habitacional Básico", lote: 90, frente: 6, COS: 0.80, CUS: 1.60, altura: "R", IV: 90, IHO: "—" },
      { clave: "H1(9)", nombre: "Habitacional Básico", lote: 140, frente: 6, COS: 0.80, CUS: 1.60, altura: "R", IV: 140, IHO: "—" },
      { clave: "H2(1) rural", nombre: "Habitacional Bajo", lote: 7500, frente: 8, COS: 0.20, CUS: 0.60, altura: "R*", IV: 50, IHO: "—" },
      { clave: "H2(2-11)", nombre: "Habitacional Bajo", lote: 120, frente: 8, COS: 0.80, CUS: 2.40, altura: "R*", IV: 40, IHO: "—" },
      { clave: "CS2(1-5)", nombre: "Comercial Bajo", lote: 120, frente: 8, COS: 0.80, CUS: 2.40, altura: "R*", IV: 40, IHO: "—" },
      { clave: "CS3(1-3)", nombre: "Comercial Medio", lote: 400, frente: 12, COS: 0.80, CUS: 2.40, altura: "R*", IV: 30, IHO: 30 },
      { clave: "CS4(1-6)", nombre: "Comercial Alto", lote: 800, frente: 20, COS: 0.80, CUS: 2.40, altura: "R*", IV: 30, IHO: 30 },
      { clave: "I2(1-4)", nombre: "Industria Baja", lote: 500, frente: 20, COS: 0.80, CUS: 1.60, altura: "R*", IV: "—", IHO: "—" },
      { clave: "I4(1-3)", nombre: "Industria Alta", lote: 500, frente: 20, COS: 0.80, CUS: 1.60, altura: "R*", IV: "—", IHO: "—" },
    ]
  },
  D2: {
    nombre: "5 de Diciembre / Col. E. Zapata Norte",
    periodo: "2018-2021",
    zonas: [
      { clave: "H1(1,3,6,14-17)", nombre: "Habitacional Básico", lote: 120, frente: 8, COS: 0.80, CUS: 1.60, altura: "R*", IV: 60, IHO: "—" },
      { clave: "H1(2)", nombre: "Habitacional Básico", lote: 90, frente: 6, COS: 0.80, CUS: 1.80, altura: "R*", IV: 90, IHO: "—" },
      { clave: "H1(4)", nombre: "Habitacional Básico", lote: 140, frente: 8, COS: 0.70, CUS: 1.40, altura: "R*", IV: 140, IHO: "—" },
      { clave: "H1(5,7-12)", nombre: "Habitacional Básico", lote: 90, frente: 6, COS: 0.80, CUS: 1.60, altura: "R*", IV: 90, IHO: "—" },
      { clave: "H2(1-6)", nombre: "Habitacional Bajo", lote: 120, frente: 8, COS: 0.80, CUS: 2.40, altura: "R*", IV: 40, IHO: "—" },
      { clave: "CS2(1)", nombre: "Comercial Bajo", lote: 120, frente: 8, COS: 0.80, CUS: 2.40, altura: "R*", IV: 40, IHO: "—" },
      { clave: "CS3(1-3)", nombre: "Comercial Medio", lote: 400, frente: 12, COS: 0.80, CUS: 2.40, altura: "R*", IV: 50, IHO: 50 },
      { clave: "CS4(1)", nombre: "Comercial Alto", lote: 800, frente: 20, COS: 0.60, CUS: 2.40, altura: "R*", IV: 50, IHO: 50 },
      { clave: "I4(1-2)", nombre: "Industria Alta", lote: 500, frente: 20, COS: 0.80, CUS: 1.60, altura: "R*", IV: "—", IHO: "—" },
    ]
  },
  D4: {
    nombre: "Ixtapa / Las Juntas / Pitillal / Zona Industrial",
    periodo: "2018-2021",
    zonas: [
      { clave: "H1(1-3,5-16,18,22)", nombre: "Habitacional Básico", lote: 90, frente: 6, COS: 0.80, CUS: 1.60, altura: "R", IV: 90, IHO: "—" },
      { clave: "H1(4,19,21,23-26)", nombre: "Hab. Básico alta densidad", lote: 90, frente: 6, COS: 0.80, CUS: 1.60, altura: "R", IV: 45, IHO: "—" },
      { clave: "H1(17,20)", nombre: "Hab. Básico baja densidad", lote: 140, frente: 8, COS: 0.70, CUS: 1.40, altura: "R", IV: 140, IHO: "—" },
      { clave: "H2(1-27)", nombre: "Habitacional Bajo", lote: 120, frente: 8, COS: 0.80, CUS: 2.40, altura: "R*", IV: 40, IHO: "—" },
      { clave: "CS1(1-5)", nombre: "Comercial Básico", lote: 120, frente: 8, COS: 0.80, CUS: 2.00, altura: "R", IV: 60, IHO: "—" },
      { clave: "CS2(1-21,23)", nombre: "Comercial Bajo", lote: 120, frente: 8, COS: 0.80, CUS: 2.40, altura: "R", IV: 40, IHO: "—" },
      { clave: "CS2(22) +ICUS", nombre: "Comercial Bajo +ICUS", lote: 120, frente: 8, COS: 0.80, CUS: 2.40, altura: "R", IV: 40, IHO: "—", ICUS: 1.0 },
      { clave: "CS3(1-7,9-17,19)", nombre: "Comercial Medio", lote: 400, frente: 12, COS: 0.80, CUS: 2.40, altura: "R", IV: 50, IHO: 50 },
      { clave: "CS3(8,18) +ICUS", nombre: "Comercial Medio +ICUS", lote: 400, frente: 12, COS: 0.80, CUS: 2.40, altura: "R", IV: 30, IHO: 30, ICUS: 1.6 },
      { clave: "CS4(1-7) +ICUS", nombre: "Comercial Alto +ICUS", lote: 800, frente: 20, COS: 0.80, CUS: 2.40, altura: "R", IV: 30, IHO: 30, ICUS: 2.40 },
    ]
  },
  D5: {
    nombre: "Marina Vallarta / Zona Hotelera Norte",
    periodo: "2018-2021",
    zonas: [
      { clave: "TS(1-5,8,11-15)", nombre: "Turístico Sustentable", lote: "8,500-80,000", frente: 30, COS: 0.40, CUS: 1.00, altura: "10 Niv/42m", IV: "—", IHO: 70, ICUS: 1.50 },
      { clave: "TS(6)", nombre: "Turístico Sustentable", lote: 20000, frente: 30, COS: 0.40, CUS: 1.00, altura: "6 Niv/26m", IV: "—", IHO: 100, ICUS: 1.50 },
      { clave: "TS(7)", nombre: "Turístico Sustentable", lote: 6000, frente: 30, COS: 0.40, CUS: 1.00, altura: "4 Niv/17m", IV: "—", IHO: 50, ICUS: 1.50 },
      { clave: "H1 baja densidad", nombre: "Hab. Básico unifamiliar", lote: "200-500", frente: 10, COS: "0.40-0.50", CUS: "0.80-1.00", altura: "2 Niv/8.5m", IV: "200-500", IHO: "—" },
      { clave: "H1 media densidad", nombre: "Hab. Básico plurifamiliar", lote: "3,000-18,000", frente: 10, COS: 0.60, CUS: 1.20, altura: "3-4 Niv/13-17m", IV: "100-120", IHO: "—" },
      { clave: "H1 torres +ICUS", nombre: "Hab. Básico torres", lote: "1,500-10,000", frente: 10, COS: 0.40, CUS: 1.00, altura: "10 Niv/42m", IV: 60, IHO: "—", ICUS: 2.00 },
      { clave: "H1(30)", nombre: "Hab. Básico denso", lote: 200, frente: 10, COS: 0.80, CUS: 2.40, altura: "R*", IV: 50, IHO: "—" },
      { clave: "H3(1-4,6)", nombre: "Habitacional Medio", lote: "10,000-79,000", frente: 10, COS: 0.40, CUS: 1.00, altura: "10 Niv/42m", IV: 80, IHO: "—", ICUS: "1.00-2.00" },
      { clave: "H3(5)", nombre: "Habitacional Medio", lote: 400, frente: 16, COS: 0.40, CUS: 2.10, altura: "8 Niv/32m", IV: 55, IHO: "—" },
      { clave: "H4(1)", nombre: "Habitacional Alto", lote: 600, frente: 15, COS: 0.80, CUS: 2.40, altura: "R*", IV: 30, IHO: "—", ICUS: 1.00 },
      { clave: "CS2(10) MAX", nombre: "Comercial Bajo MÁXIMO", lote: 900, frente: 8, COS: 0.80, CUS: 1.40, altura: "10 Niv/42m", IV: 9, IHO: "—", ICUS: 8.80 },
      { clave: "CS3(22-27)", nombre: "Comercial Medio Marina", lote: "200-40,000", frente: 12, COS: "0.50-0.60", CUS: 1.00, altura: "7-10 Niv", IV: 60, IHO: 60, ICUS: "2.10-2.50" },
      { clave: "CS3(28-32)", nombre: "Comercial plano", lote: 200, frente: 12, COS: 0.90, CUS: 0.90, altura: "1 Niv/5m", IV: 60, IHO: 60 },
      { clave: "H2(1-8)", nombre: "Habitacional Bajo", lote: 120, frente: 8, COS: 0.80, CUS: 2.40, altura: "R*", IV: 40, IHO: "—" },
      { clave: "I4(1-3)", nombre: "Industria Alta", lote: 500, frente: 20, COS: 0.80, CUS: 1.60, altura: "R*", IV: "—", IHO: "—" },
    ]
  },
  D3: {
    nombre: "Versalles / Fluvial Vallarta",
    periodo: "2012",
    zonas: [
      { clave: "H1-H", nombre: "Hab. Horizontal", lote: 90, frente: 6, COS: 0.80, CUS: 1.60, altura: "9m", IV: "—", IHO: "—" },
      { clave: "H2-H", nombre: "Hab. Horizontal Media", lote: 105, frente: 7, COS: 0.70, CUS: 2.10, altura: "12m", IV: "—", IHO: "—" },
      { clave: "H3-U / H3-V", nombre: "Hab. Media/Vertical", lote: 120, frente: 8, COS: 0.80, CUS: 2.40, altura: "12-20m", IV: "—", IHO: "—" },
      { clave: "H4-U", nombre: "Hab. Alta", lote: 150, frente: 10, COS: 0.80, CUS: 4.00, altura: "20m+", IV: "—", IHO: "—" },
      { clave: "MB3-MB4", nombre: "Mixto Barrial", lote: 120, frente: 8, COS: 0.80, CUS: "2.40-4.00", altura: "12-20m", IV: "—", IHO: "—" },
      { clave: "MD3-MD4", nombre: "Mixto Distrital", lote: 200, frente: 10, COS: 0.80, CUS: "2.40-4.00", altura: "12-20m", IV: "—", IHO: "—" },
      { clave: "MC3-MC4", nombre: "Mixto Central", lote: 300, frente: 12, COS: 0.80, CUS: "2.40-4.00", altura: "12-20m+", IV: "—", IHO: "—" },
      { clave: "CD2", nombre: "Corredor Distrital", lote: 200, frente: 10, COS: 0.80, CUS: 2.40, altura: "12m", IV: "—", IHO: "—" },
      { clave: "IN-U", nombre: "Industrial Urbana", lote: 500, frente: 20, COS: 0.70, CUS: 1.40, altura: "12m", IV: "—", IHO: "—" },
    ]
  },
  D9: {
    nombre: "Conchas Chinas / Amapas / Los Arcos",
    periodo: "2012",
    zonas: [
      { clave: "TH1/HJ", nombre: "Turístico-Hab. Jungla", lote: 2000, frente: 20, COS: 0.30, CUS: 0.60, altura: "9m", IV: "—", IHO: "—" },
      { clave: "TH1/H1-V", nombre: "Turístico-Hab. Vertical", lote: 500, frente: 15, COS: 0.60, CUS: 1.80, altura: "20m", IV: "—", IHO: "—" },
      { clave: "TH3/H2-V", nombre: "Turístico-Hab. Medio", lote: 300, frente: 12, COS: 0.60, CUS: 2.40, altura: "20m", IV: "—", IHO: "—" },
      { clave: "TH3", nombre: "Turístico Medio", lote: 1000, frente: 20, COS: 0.40, CUS: 1.20, altura: "12m", IV: "—", IHO: "—" },
      { clave: "TH4", nombre: "Turístico Alto", lote: 2000, frente: 20, COS: 0.40, CUS: 1.60, altura: "20m", IV: "—", IHO: "—" },
      { clave: "H1-U / H1-H", nombre: "Habitacional Básico", lote: 90, frente: 6, COS: 0.80, CUS: 1.60, altura: "9m", IV: "—", IHO: "—" },
      { clave: "H2-U / H2-H", nombre: "Habitacional Medio", lote: 120, frente: 8, COS: 0.80, CUS: 2.40, altura: "12m", IV: "—", IHO: "—" },
      { clave: "MB2", nombre: "Mixto Barrial", lote: 90, frente: 6, COS: 0.80, CUS: 1.60, altura: "9m", IV: "—", IHO: "—" },
      { clave: "MD1-MD3", nombre: "Mixto Distrital", lote: "120-200", frente: "8-10", COS: 0.80, CUS: "1.60-2.40", altura: "9-12m", IV: "—", IHO: "—" },
      { clave: "IN-U", nombre: "Industrial Urbana", lote: 500, frente: 20, COS: 0.70, CUS: 1.40, altura: "9m", IV: "—", IHO: "—" },
    ]
  }
};

// Datos de zonificación del municipio de Bahía de Banderas, Nayarit
// Fuente: Plan Municipal de Desarrollo Urbano (PMDU 2003, vigente)
// NOTA: PDU con +20 años de rezago. PMOTDU en elaboración 2025.
export const BAHIA_BANDERAS = {
  nombre: "Bahía de Banderas, Nayarit",
  periodo: "2003 (vigente — PMOTDU en proceso 2025-2030)",
  nota: "Reglamento de Zonificación publicado 9 julio 2003. Desarrollo vertical en zonas turísticas sin control por normativa obsoleta.",
  zonas: [
    { clave: "H211", nombre: "Habitacional densidad 211 hab/ha", lote: 90, frente: 6, COS: 0.80, CUS: 1.60, altura: "2 niveles", densidad_viv: 50, area_libre: 0.20 },
    { clave: "H127", nombre: "Habitacional densidad 127 hab/ha", lote: 140, frente: 8, COS: 0.70, CUS: 1.40, altura: "2 niveles", densidad_viv: 30, area_libre: 0.30 },
    { clave: "H84", nombre: "Habitacional densidad 84 hab/ha", lote: 300, frente: 10, COS: 0.60, CUS: 1.20, altura: "2 niveles", densidad_viv: 20, area_libre: 0.40 },
    { clave: "H51", nombre: "Habitacional densidad 51 hab/ha", lote: 400, frente: 20, COS: 0.50, CUS: 1.00, altura: "2 niveles", densidad_viv: 12, area_libre: 0.50 },
    { clave: "CU", nombre: "Centro Urbano (mixto)", lote: 122, frente: 7, COS: 0.65, CUS: 1.95, altura: "3 niveles", densidad_viv: 50, area_libre: 0.35 },
    { clave: "CB", nombre: "Centro de Barrio (mixto)", lote: 183, frente: 8, COS: 0.75, CUS: 1.50, altura: "2 niveles", densidad_viv: 40, area_libre: 0.25 },
    { clave: "CRU", nombre: "Corredor Urbano (mixto)", lote: 110, frente: 7, COS: 0.80, CUS: 2.40, altura: "3 niveles", densidad_viv: 50, area_libre: 0.20 },
    { clave: "CRU-R", nombre: "Corredor Urbano Regional", lote: 1520, frente: 40, COS: 0.65, CUS: 3.25, altura: "5 niveles", densidad_viv: 5, area_libre: 0.35 },
    { clave: "CUC", nombre: "Corredor Urbano Costero", lote: 500, frente: 20, COS: 0.70, CUS: 4.20, altura: "6 niveles", cuartos_ha: 50, area_libre: 0.30 },
    { clave: "DT-50", nombre: "Turístico 50 cuartos/ha", lote: 272, frente: 12, COS: 0.40, CUS: 2.40, altura: "6 niveles", cuartos_ha: 50, area_libre: 0.60 },
    { clave: "DT-40", nombre: "Turístico 40 cuartos/ha", lote: 350, frente: 30, COS: 0.35, CUS: 1.40, altura: "4 niveles", cuartos_ha: 40, area_libre: 0.65 },
    { clave: "DT-25", nombre: "Turístico 25 cuartos/ha", lote: 600, frente: 30, COS: 0.30, CUS: 1.20, altura: "4 niveles", cuartos_ha: 25, area_libre: 0.70 },
    { clave: "DT-20", nombre: "Turístico 20 cuartos/ha", lote: 850, frente: 35, COS: 0.25, CUS: 0.75, altura: "3 niveles", cuartos_ha: 20, area_libre: 0.75 },
    { clave: "DT-15", nombre: "Turístico 15 cuartos/ha", lote: 1133, frente: 40, COS: 0.20, CUS: 0.60, altura: "3 niveles", cuartos_ha: 15, area_libre: 0.80 },
    { clave: "DT-12", nombre: "Turístico 12 cuartos/ha", lote: 1450, frente: 40, COS: 0.18, CUS: 0.36, altura: "3 niveles", cuartos_ha: 12, area_libre: 0.82 },
    { clave: "DT-8", nombre: "Turístico 8 cuartos/ha", lote: 2175, frente: 40, COS: 0.15, CUS: 0.30, altura: "2 niveles", cuartos_ha: 8, area_libre: 0.85 },
    { clave: "DT-5", nombre: "Turístico 5 cuartos/ha", lote: 3480, frente: 50, COS: 0.10, CUS: 0.20, altura: "2 niveles", cuartos_ha: 5, area_libre: 0.90 },
    { clave: "DT-2", nombre: "Turístico 2 cuartos/ha", lote: 9000, frente: 50, COS: 0.08, CUS: 0.08, altura: "2 niveles", cuartos_ha: 2, area_libre: 0.92 },
    { clave: "ER", nombre: "Equipamiento Regional", lote: 1200, frente: 40, COS: 0.60, CUS: 1.95, altura: "3 niveles", area_libre: 0.40 },
    { clave: "CCN", nombre: "Centro Cívico y Negocios", lote: 1000, frente: 40, COS: 0.80, CUS: 1.95, altura: "3 niveles", area_libre: 0.20 },
    { clave: "E-T", nombre: "Equipamiento Turístico", lote: 600, frente: 20, COS: 0.60, CUS: 1.80, altura: "3 niveles", area_libre: 0.40 },
    { clave: "I-M", nombre: "Industria Mediana", lote: 3000, frente: 40, COS: 0.60, CUS: "dictamen", altura: "dictamen", area_libre: 0.40 },
    { clave: "I-P", nombre: "Industria Pequeña", lote: 1000, frente: 30, COS: 0.65, CUS: "dictamen", altura: "dictamen", area_libre: 0.35 },
  ],
  excepciones: [
    "Nuevo Vallarta y Flamingos: aplican Planes Parciales específicos",
    "Predios colindantes con ZFMT: hasta 10 niveles de altura",
    "Condominios turísticos: sin efecto lote mínimo, respetando densidad"
  ],
  localidades: ["Bucerías","Cruz de Huanacaxtle","Sayulita","San Francisco","Lo de Marcos","Higuera Blanca","Valle de Banderas","Jarretaderas","Mezcales","Mezcalitos","San José del Valle","El Porvenir","San Vicente","San Juan de Abajo","Nuevo Corral del Risco","Fracc. Emiliano Zapata"]
};

export const GLOSARIO = {
  COS: "Coeficiente de Ocupación del Suelo — % del terreno que puedes construir en planta baja",
  CUS: "Coeficiente de Utilización del Suelo — total m² construibles ÷ m² de terreno",
  IV: "Índice de Vivienda — m² de terreno ÷ IV = máx. viviendas permitidas",
  IHO: "Índice de Ocupación Hotelera — cuartos por hectárea",
  ICUS: "Incremento de CUS — bonificación adicional sobre el CUS base",
  R: "Resultante — la altura resulta de aplicar COS+CUS al 100%",
  "R*": "Resultante Condicionada — sujeta a restricciones (conos OACI aeropuerto u otras)",
  EPP: "Espacio Público Programado — contraprestación obligatoria por usar ICUS",
  AVUA: "Áreas con Valor Urbano Ambiental — restricción de conservación",
  OACI: "Organización de Aviación Civil Internacional — restricciones de altura por aeropuerto",
};
