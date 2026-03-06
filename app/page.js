'use client'
import { useState } from 'react'
import { DISTRITOS, BAHIA_BANDERAS, GLOSARIO } from '../data/zonificacion'
import { findDistrito } from '../data/colonias'

const PVR_OPTIONS = [
  { id: 'D1', label: 'Zona Romántica / Olas Altas' },
  { id: 'D2', label: '5 de Diciembre / E. Zapata' },
  { id: 'D3', label: 'Versalles / Fluvial' },
  { id: 'D4', label: 'Ixtapa / Las Juntas / Pitillal' },
  { id: 'D5', label: 'Marina Vallarta / Zona Hotelera' },
  { id: 'D9', label: 'Conchas Chinas / Amapas' },
]

function generarDictamen(zona, distrito, terrenoM2, frente, uso) {
  const d = distrito === 'BB' ? BAHIA_BANDERAS : DISTRITOS[distrito]
  const z = zona
  const loteMin = typeof z.lote === 'number' ? z.lote : parseFloat(String(z.lote).replace(/,/g, ''))
  const frenteMin = typeof z.frente === 'number' ? z.frente : parseFloat(String(z.frente).replace(/,/g, ''))
  const cos = typeof z.COS === 'number' ? z.COS : parseFloat(z.COS)
  const cus = typeof z.CUS === 'number' ? z.CUS : parseFloat(z.CUS)
  const icus = z.ICUS ? (typeof z.ICUS === 'number' ? z.ICUS : parseFloat(z.ICUS)) : 0

  const cumpleLote = terrenoM2 >= loteMin
  const cumpleFrente = frente >= frenteMin
  const plantaBaja = Math.floor(terrenoM2 * cos)
  const totalConstruible = Math.floor(terrenoM2 * cus)
  const totalConICUS = icus ? Math.floor(terrenoM2 * (cus + icus)) : null
  const nivelesAprox = cos > 0 ? Math.ceil(cus / cos) : '?'

  let maxViviendas = null
  if (z.IV && z.IV !== '—' && typeof z.IV === 'number') {
    maxViviendas = Math.floor(terrenoM2 / z.IV)
  }

  const esHabitacional = z.nombre.toLowerCase().includes('habit')
  const esComercial = z.nombre.toLowerCase().includes('comerc') || z.nombre.toLowerCase().includes('mixto')
  const esTuristico = z.nombre.toLowerCase().includes('turíst') || z.nombre.toLowerCase().includes('turist')
  const esIndustrial = z.nombre.toLowerCase().includes('indust')

  let usoPermitido = true
  let usoNota = ''
  if (uso === 'habitacional') {
    if (esTuristico && !z.nombre.toLowerCase().includes('hab')) {
      usoPermitido = false; usoNota = 'Zona turística — solo alojamiento temporal, NO vivienda permanente'
    } else if (esIndustrial) {
      usoPermitido = false; usoNota = 'Zona industrial — uso habitacional PROHIBIDO'
    } else { usoNota = esHabitacional ? 'Uso habitacional PERMITIDO (predominante)' : 'Uso habitacional COMPATIBLE' }
  } else if (uso === 'comercial') {
    if (esComercial) { usoPermitido = true; usoNota = 'Uso comercial PERMITIDO' }
    else { usoNota = 'Revisar tabla de compatibilidad del PDU para uso específico' }
  } else if (uso === 'turistico') {
    if (esTuristico) { usoPermitido = true; usoNota = 'Uso turístico PERMITIDO (predominante)' }
    else if (z.nombre.toLowerCase().includes('medio') || z.nombre.toLowerCase().includes('alto')) {
      usoNota = 'Alojamiento temporal puede ser CONDICIONADO — verificar PDU'
    } else { usoPermitido = false; usoNota = 'Zona habitacional básica — ETJ generalmente PROHIBIDO' }
  }

  const restricciones = []
  if (z.altura === 'R*') restricciones.push('Altura CONDICIONADA (R*) — posible restricción aeroportuaria OACI')
  if (z.ICUS) restricciones.push('Requiere EPP (Espacio Público Programado) como contraprestación por ICUS')

  return { cumpleLote, cumpleFrente, plantaBaja, totalConstruible, totalConICUS, nivelesAprox, maxViviendas, usoPermitido, usoNota, restricciones, loteMin, frenteMin, cos, cus, icus, zona: z, distrito: d }
}

function StatBig({ label, value, sub, highlight }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider mb-0.5" style={{ color: 'var(--text2)' }}>{label}</div>
      <div className="mono text-xl font-bold" style={{ color: highlight ? 'var(--accent)' : 'var(--text)' }}>{value}</div>
      {sub && <div className="text-[10px] mt-0.5" style={{ color: 'var(--text2)' }}>{sub}</div>}
    </div>
  )
}

function DictamenResult({ result, terrenoM2, frente }) {
  const r = result
  const viable = r.cumpleLote && r.cumpleFrente && r.usoPermitido
  return (
    <div className="space-y-4">
      <div className="p-4 rounded-lg border" style={{ background: viable ? '#16a34a15' : '#dc262615', borderColor: viable ? '#4ade8055' : '#f8717155' }}>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">{viable ? '✅' : '⛔'}</span>
          <span className="text-lg font-bold" style={{ color: viable ? 'var(--green)' : 'var(--red)' }}>{viable ? 'FACTIBLE' : 'NO VIABLE'}</span>
        </div>
        <div className="text-sm space-y-1" style={{ color: 'var(--text2)' }}>
          {!r.cumpleLote && <div style={{ color: 'var(--red)' }}>✗ Lote mínimo: {r.loteMin.toLocaleString()} m² — tu terreno: {terrenoM2} m²</div>}
          {!r.cumpleFrente && <div style={{ color: 'var(--red)' }}>✗ Frente mínimo: {r.frenteMin} ml — tu frente: {frente} ml</div>}
          {r.cumpleLote && <div style={{ color: 'var(--green)' }}>✓ Lote OK ({r.loteMin.toLocaleString()} m² mín.)</div>}
          {r.cumpleFrente && <div style={{ color: 'var(--green)' }}>✓ Frente OK ({r.frenteMin} ml mín.)</div>}
          <div style={{ color: r.usoPermitido ? 'var(--green)' : 'var(--red)' }}>{r.usoPermitido ? '✓' : '✗'} {r.usoNota}</div>
        </div>
      </div>

      <div className="p-4 rounded-lg border" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
        <div className="text-xs uppercase tracking-wider mb-3 font-bold" style={{ color: 'var(--accent)' }}>Cálculo Urbanístico</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <StatBig label="Planta baja máx." value={`${r.plantaBaja.toLocaleString()} m²`} sub={`COS ${r.cos} × ${terrenoM2} m²`} />
          <StatBig label="Total construible" value={`${r.totalConstruible.toLocaleString()} m²`} sub={`CUS ${r.cus} × ${terrenoM2} m²`} />
          {r.totalConICUS && <StatBig label="Con ICUS" value={`${r.totalConICUS.toLocaleString()} m²`} sub={`CUS ${(r.cus + r.icus).toFixed(2)} efectivo`} highlight />}
          <StatBig label="Niveles aprox." value={r.zona.altura === 'R' || r.zona.altura === 'R*' ? `~${r.nivelesAprox}` : r.zona.altura} sub={r.zona.altura === 'R' ? 'Resultante COS/CUS' : r.zona.altura === 'R*' ? 'Condicionada' : 'Fija por PDU'} />
          {r.maxViviendas !== null && <StatBig label="Máx. viviendas" value={r.maxViviendas} sub={`IV=${r.zona.IV} → ${terrenoM2}÷${r.zona.IV}`} />}
          {r.zona.IHO && r.zona.IHO !== '—' && <StatBig label="IHO cuartos/ha" value={r.zona.IHO} sub="Índice hotelero" />}
        </div>
      </div>

      {r.restricciones.length > 0 && (
        <div className="p-4 rounded-lg border" style={{ background: '#f59e0b10', borderColor: '#f59e0b33' }}>
          <div className="text-xs uppercase tracking-wider mb-2 font-bold" style={{ color: '#f59e0b' }}>Alertas</div>
          {r.restricciones.map((res, i) => <div key={i} className="text-sm mb-1">⚠️ {res}</div>)}
        </div>
      )}

      <div className="p-3 rounded-lg border text-xs" style={{ background: 'var(--surface2)', borderColor: 'var(--border)', color: 'var(--text2)' }}>
        <span className="mono font-bold" style={{ color: 'var(--accent)' }}>{r.zona.clave}</span> — {r.zona.nombre} · {r.distrito.nombre} · PDU {r.distrito.periodo}
        <div className="mt-2" style={{ fontSize: 10 }}>⚖️ Dictamen INFORMATIVO. No sustituye constancia oficial del municipio. Datos de los PDU publicados por el H. Ayuntamiento de Puerto Vallarta.</div>
      </div>
    </div>
  )
}

export default function Home() {
  const [step, setStep] = useState(0)
  const [municipio, setMunicipio] = useState(null) // 'pvr' or 'bb'
  const [selectedDistrito, setSelectedDistrito] = useState(null)
  const [selectedZona, setSelectedZona] = useState(null)
  const [frenteInput, setFrenteInput] = useState('')
  const [fondoInput, setFondoInput] = useState('')
  const [uso, setUso] = useState('habitacional')
  const [search, setSearch] = useState('')
  const [direccion, setDireccion] = useState('')

  // Auto-detect distrito from address
  const handleDireccion = (val) => {
    setDireccion(val)
    const detected = findDistrito(val)
    if (detected === 'BB') {
      setMunicipio('bb')
      setSelectedDistrito(null)
    } else if (detected) {
      setMunicipio('pvr')
      setSelectedDistrito(detected)
    }
  }

  const isBB = municipio === 'bb'
  const distrito = selectedDistrito ? DISTRITOS[selectedDistrito] : (isBB ? BAHIA_BANDERAS : null)
  const terrenoM2 = parseFloat(frenteInput) * parseFloat(fondoInput) || 0
  const frenteNum = parseFloat(frenteInput) || 0

  const zonaSource = isBB ? BAHIA_BANDERAS.zonas : (distrito?.zonas || [])
  const filteredZonas = zonaSource.filter(z => {
    if (!search) return true
    const s = search.toLowerCase()
    return z.clave.toLowerCase().includes(s) || z.nombre.toLowerCase().includes(s)
  })

  const dictamen = selectedZona && terrenoM2 > 0 && frenteNum > 0
    ? generarDictamen(selectedZona, selectedDistrito || 'BB', terrenoM2, frenteNum, uso)
    : null

  const reset = () => { setStep(0); setMunicipio(null); setSelectedDistrito(null); setSelectedZona(null); setFrenteInput(''); setFondoInput(''); setSearch(''); setDireccion('') }
  const totalZonasPVR = Object.values(DISTRITOS).reduce((sum, d) => sum + d.zonas.length, 0)
  const totalZonas = totalZonasPVR + BAHIA_BANDERAS.zonas.length

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <header className="border-b" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm" style={{ background: '#c9a84c22', color: 'var(--accent)' }}>◉</div>
            <div>
              <h1 className="text-lg font-bold">Dictamen de Uso de Suelo</h1>
              <p className="text-xs" style={{ color: 'var(--text2)' }}>PV + Bahía de Banderas — {totalZonas} zonas · 2 municipios</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        {/* Progress */}
        <div className="flex items-center gap-2 text-xs">
          {(isBB ? [0,1,3,4] : [0,1,2,3,4]).map((s, idx) => (
            <div key={s} className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full flex items-center justify-center mono text-xs font-bold"
                style={{ background: step >= s ? 'var(--accent)' : 'var(--surface2)', color: step >= s ? '#0a0a0c' : 'var(--text2)' }}>{idx+1}</div>
              {idx < (isBB ? 3 : 4) && <div className="w-6 h-px" style={{ background: step > s ? 'var(--accent)' : 'var(--border)' }} />}
            </div>
          ))}
          <span className="ml-2" style={{ color: 'var(--text2)' }}>
            {step === 0 && 'Municipio'}{step === 1 && 'Terreno'}{step === 2 && 'Distrito'}{step === 3 && 'Zona'}{step === 4 && 'Dictamen'}
          </span>
          {step > 0 && <button onClick={reset} className="ml-auto text-xs underline" style={{ color: 'var(--accent)' }}>Reiniciar</button>}
        </div>

        {/* Step 0: Municipio */}
        {step === 0 && (
          <div className="space-y-4">
            {/* Address auto-detect */}
            <div className="p-5 rounded-lg border" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
              <div className="text-sm font-bold mb-1">¿Dónde está tu terreno?</div>
              <div className="text-xs mb-3" style={{ color: 'var(--text2)' }}>Escribe tu colonia o dirección y detectamos el municipio y distrito automáticamente</div>
              <input type="text" placeholder="ej: 5 de Diciembre, Versalles, Marina Vallarta, Bucerías..."
                value={direccion} onChange={e => handleDireccion(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border text-sm bg-transparent outline-none"
                style={{ borderColor: 'var(--border)', color: 'var(--text)' }} />
              {direccion && (municipio || selectedDistrito) && (
                <div className="mt-3 p-3 rounded-lg flex items-center gap-2" style={{ background: '#16a34a15' }}>
                  <span style={{ color: 'var(--green)' }}>✓</span>
                  <span className="text-sm">
                    {isBB ? '🌴 Bahía de Banderas, Nayarit' : `🏖️ Puerto Vallarta — Distrito ${selectedDistrito}`}
                    {selectedDistrito && DISTRITOS[selectedDistrito] && <span style={{ color: 'var(--text2)' }}> ({DISTRITOS[selectedDistrito].nombre})</span>}
                  </span>
                </div>
              )}
              {direccion && !municipio && !selectedDistrito && direccion.length > 3 && (
                <div className="mt-3 p-3 rounded-lg text-xs" style={{ background: 'var(--surface2)', color: 'var(--text2)' }}>
                  No reconocimos la colonia. Selecciona municipio manualmente:
                </div>
              )}
            </div>

            {/* Manual selection or continue */}
            {(municipio || selectedDistrito) ? (
              <button onClick={() => setStep(1)}
                className="w-full py-3 rounded-lg font-bold text-sm"
                style={{ background: 'var(--accent)', color: '#0a0a0c', cursor: 'pointer' }}>
                Continuar →
              </button>
            ) : (
              <>
                <div className="text-xs text-center" style={{ color: 'var(--text2)' }}>— o selecciona manualmente —</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button onClick={() => { setMunicipio('pvr'); setStep(1) }}
                    className="p-4 rounded-lg border text-left transition-all hover:border-[var(--accent)]"
                    style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                    <div className="font-bold">🏖️ Puerto Vallarta</div>
                    <div className="text-xs mt-1" style={{ color: 'var(--text2)' }}>Jalisco · {totalZonasPVR} zonas · 6 distritos</div>
                  </button>
                  <button onClick={() => { setMunicipio('bb'); setStep(1) }}
                    className="p-4 rounded-lg border text-left transition-all hover:border-[var(--accent)]"
                    style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                    <div className="font-bold">🌴 Bahía de Banderas</div>
                    <div className="text-xs mt-1" style={{ color: 'var(--text2)' }}>Nayarit · {BAHIA_BANDERAS.zonas.length} zonas</div>
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="p-5 rounded-lg border" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
              <div className="text-sm font-bold mb-4">¿Cuánto mide tu terreno?</div>
              {direccion && (municipio || selectedDistrito) && (
                <div className="mb-3 p-2 rounded-lg text-xs" style={{ background: 'var(--surface2)', color: 'var(--text2)' }}>
                  📍 {direccion} → {isBB ? 'Bahía de Banderas' : `PV ${selectedDistrito} (${DISTRITOS[selectedDistrito]?.nombre || ''})`}
                </div>
              )}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs mb-1 block" style={{ color: 'var(--text2)' }}>Frente (metros)</label>
                  <input type="number" placeholder="ej: 10" value={frenteInput} onChange={e => setFrenteInput(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border text-sm bg-transparent outline-none mono"
                    style={{ borderColor: 'var(--border)', color: 'var(--text)' }} />
                </div>
                <div>
                  <label className="text-xs mb-1 block" style={{ color: 'var(--text2)' }}>Fondo (metros)</label>
                  <input type="number" placeholder="ej: 20" value={fondoInput} onChange={e => setFondoInput(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border text-sm bg-transparent outline-none mono"
                    style={{ borderColor: 'var(--border)', color: 'var(--text)' }} />
                </div>
              </div>
              {terrenoM2 > 0 && (
                <div className="mt-3 p-3 rounded-lg" style={{ background: 'var(--surface2)' }}>
                  <span className="text-xs" style={{ color: 'var(--text2)' }}>Superficie: </span>
                  <span className="mono font-bold" style={{ color: 'var(--accent)' }}>{terrenoM2.toLocaleString()} m²</span>
                </div>
              )}
              <div className="mt-4">
                <label className="text-xs mb-2 block" style={{ color: 'var(--text2)' }}>¿Qué quieres construir?</label>
                <div className="grid grid-cols-3 gap-2">
                  {[{ id: 'habitacional', emoji: '🏠', label: 'Vivienda' },{ id: 'comercial', emoji: '🏪', label: 'Comercial' },{ id: 'turistico', emoji: '🏨', label: 'Turístico' }].map(u => (
                    <button key={u.id} onClick={() => setUso(u.id)}
                      className="p-2.5 rounded-lg border text-center text-sm transition-all"
                      style={{ background: uso === u.id ? 'var(--surface2)' : 'var(--surface)', borderColor: uso === u.id ? 'var(--accent)' : 'var(--border)' }}>
                      <div className="text-lg">{u.emoji}</div>
                      <div className="text-xs mt-0.5" style={{ color: uso === u.id ? 'var(--accent)' : 'var(--text2)' }}>{u.label}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button onClick={() => terrenoM2 > 0 && frenteNum > 0 && setStep(isBB ? 3 : (selectedDistrito ? 3 : 2))}
              disabled={terrenoM2 <= 0 || frenteNum <= 0}
              className="w-full py-3 rounded-lg font-bold text-sm transition-all"
              style={{ background: terrenoM2 > 0 ? 'var(--accent)' : 'var(--surface2)', color: terrenoM2 > 0 ? '#0a0a0c' : 'var(--text2)', cursor: terrenoM2 > 0 ? 'pointer' : 'not-allowed' }}>
              Siguiente →
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-3">
            <div className="text-sm font-bold">¿En qué zona de PV está tu terreno?</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {PVR_OPTIONS.map(d => (
                <button key={d.id} onClick={() => { setSelectedDistrito(d.id); setStep(3) }}
                  className="p-4 rounded-lg border text-left transition-all hover:border-[var(--accent)]"
                  style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                  <div className="mono font-bold text-sm" style={{ color: 'var(--accent)' }}>{d.id}</div>
                  <div className="text-sm mt-1">{d.label}</div>
                  <div className="text-xs mt-1" style={{ color: 'var(--text2)' }}>{DISTRITOS[d.id].zonas.length} zonas · PDU {DISTRITOS[d.id].periodo}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (distrito || isBB) && (
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <div className="text-sm font-bold">Selecciona tu zonificación</div>
                <div className="text-xs" style={{ color: 'var(--text2)' }}>{isBB ? BAHIA_BANDERAS.nombre : distrito.nombre} · {terrenoM2} m² ({frenteInput}×{fondoInput})</div>
              </div>
              <input type="text" placeholder="Filtrar..." value={search} onChange={e => setSearch(e.target.value)}
                className="px-3 py-2 rounded-lg border text-sm bg-transparent outline-none w-full sm:w-44"
                style={{ borderColor: 'var(--border)', color: 'var(--text)' }} />
            </div>
            <div className="text-xs p-3 rounded-lg" style={{ background: 'var(--surface2)', color: 'var(--text2)' }}>
              💡 La clave de zonificación (H1, H2, CS2, TS...) aparece en tu escritura, constancia catastral o plano de lotificación.
            </div>
            {isBB && (
              <div className="text-xs p-3 rounded-lg" style={{ background: '#f59e0b10', color: '#f59e0b' }}>
                ⚠️ PDU Bahía de Banderas data de 2003 (+20 años). Nuevo Vallarta y Flamingos tienen planes parciales propios. Predios colindantes con ZFMT permiten hasta 10 niveles.
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {filteredZonas.map((z, i) => (
                <button key={i} onClick={() => { setSelectedZona(z); setStep(4) }}
                  className="w-full p-3 rounded-lg border text-left text-sm transition-all hover:border-[var(--accent)]"
                  style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="mono text-xs font-bold" style={{ color: 'var(--accent)' }}>{z.clave}</span>
                      <div className="text-xs mt-0.5" style={{ color: 'var(--text2)' }}>{z.nombre}</div>
                    </div>
                    <div className="text-right">
                      <div className="mono text-sm font-bold">{z.CUS}</div>
                      <div className="text-[9px] uppercase" style={{ color: 'var(--text2)' }}>CUS</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4 */}
        {step === 4 && dictamen && (
          <div className="space-y-4">
            <div className="text-sm font-bold">Dictamen — {terrenoM2} m² ({frenteInput}m × {fondoInput}m) — {uso} — {isBB ? 'Bahía de Banderas' : 'Puerto Vallarta'}</div>
            <DictamenResult result={dictamen} terrenoM2={terrenoM2} frente={frenteNum} />
          </div>
        )}

        <GlosarioPanel />
        <footer className="text-center py-6 text-xs" style={{ color: 'var(--text2)' }}>
          Expat Advisor MX · Colmena v2 · <span className="mono">duendes.app 2026</span>
        </footer>
      </main>
    </div>
  )
}

function GlosarioPanel() {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-lg border" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
      <button onClick={() => setOpen(!open)} className="w-full p-3 flex justify-between items-center text-sm">
        <span style={{ color: 'var(--text2)' }}>Glosario de términos</span>
        <span className="mono text-xs" style={{ color: 'var(--accent)' }}>{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="px-3 pb-3 space-y-2">
          {Object.entries(GLOSARIO).map(([k, v]) => (
            <div key={k} className="text-sm">
              <span className="mono font-bold" style={{ color: 'var(--accent)' }}>{k}</span>
              <span style={{ color: 'var(--text2)' }}> — {v}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
