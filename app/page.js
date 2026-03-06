'use client'
import { useState } from 'react'
import { DISTRITOS, GLOSARIO } from '../data/zonificacion'

const DISTRITO_OPTIONS = [
  { id: 'D1', label: 'D1 — Zona Romántica / Olas Altas' },
  { id: 'D2', label: 'D2 — 5 de Diciembre / E. Zapata' },
  { id: 'D3', label: 'D3 — Versalles / Fluvial' },
  { id: 'D4', label: 'D4 — Ixtapa / Las Juntas / Pitillal' },
  { id: 'D5', label: 'D5 — Marina Vallarta / Zona Hotelera' },
  { id: 'D9', label: 'D9 — Conchas Chinas / Amapas' },
]

function ZonaCard({ zona }) {
  const [open, setOpen] = useState(false)
  const cusEfectivo = zona.ICUS ? `→ ${(parseFloat(zona.CUS) + parseFloat(zona.ICUS)).toFixed(2)} con ICUS` : null

  return (
    <div
      className="rounded-lg border transition-all cursor-pointer hover:border-[var(--accent)]"
      style={{ background: 'var(--surface)', borderColor: open ? 'var(--accent)' : 'var(--border)' }}
      onClick={() => setOpen(!open)}
    >
      <div className="p-4 flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="mono text-sm font-bold" style={{ color: 'var(--accent)' }}>{zona.clave}</span>
            {zona.ICUS && <span className="text-[10px] px-1.5 py-0.5 rounded font-bold" style={{ background: '#c9a84c22', color: 'var(--accent)' }}>+ICUS {zona.ICUS}</span>}
          </div>
          <div className="text-sm mt-1" style={{ color: 'var(--text2)' }}>{zona.nombre}</div>
        </div>
        <div className="text-right shrink-0">
          <div className="mono text-lg font-bold">{zona.CUS}</div>
          <div className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--text2)' }}>CUS</div>
        </div>
      </div>

      {open && (
        <div className="px-4 pb-4 pt-2 border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            <Stat label="Lote mín." value={typeof zona.lote === 'number' ? `${zona.lote.toLocaleString()} m²` : `${zona.lote} m²`} />
            <Stat label="Frente mín." value={`${zona.frente} ml`} />
            <Stat label="COS" value={zona.COS} />
            <Stat label="Altura" value={zona.altura} />
            <Stat label="IV" value={zona.IV} />
            <Stat label="IHO" value={zona.IHO} />
            {zona.ICUS && <Stat label="ICUS" value={zona.ICUS} highlight />}
            {cusEfectivo && <Stat label="CUS efectivo" value={cusEfectivo.replace('→ ', '')} highlight />}
          </div>
        </div>
      )}
    </div>
  )
}

function Stat({ label, value, highlight }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider mb-0.5" style={{ color: 'var(--text2)' }}>{label}</div>
      <div className="mono text-sm font-bold" style={{ color: highlight ? 'var(--accent)' : 'var(--text)' }}>
        {value === "—" ? <span style={{ color: 'var(--text2)' }}>—</span> : value}
      </div>
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

export default function Home() {
  const [selectedDistrito, setSelectedDistrito] = useState(null)
  const [search, setSearch] = useState('')

  const distrito = selectedDistrito ? DISTRITOS[selectedDistrito] : null
  const filteredZonas = distrito?.zonas?.filter(z => {
    if (!search) return true
    const s = search.toLowerCase()
    return z.clave.toLowerCase().includes(s) || z.nombre.toLowerCase().includes(s)
  }) || []

  const totalZonas = Object.values(DISTRITOS).reduce((sum, d) => sum + d.zonas.length, 0)

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* Header */}
      <header className="border-b" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
        <div className="max-w-4xl mx-auto px-4 py-5">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm" style={{ background: '#c9a84c22', color: 'var(--accent)' }}>◉</div>
            <h1 className="text-xl font-bold">Uso de Suelo PVR</h1>
          </div>
          <p className="text-sm ml-11" style={{ color: 'var(--text2)' }}>
            Dictamen automático de zonificación — Puerto Vallarta — {totalZonas} zonas en 6 distritos
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-4">
        {/* District selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {DISTRITO_OPTIONS.map(d => (
            <button
              key={d.id}
              onClick={() => { setSelectedDistrito(d.id); setSearch('') }}
              className="p-3 rounded-lg border text-left text-sm transition-all hover:border-[var(--accent)]"
              style={{
                background: selectedDistrito === d.id ? 'var(--surface2)' : 'var(--surface)',
                borderColor: selectedDistrito === d.id ? 'var(--accent)' : 'var(--border)',
              }}
            >
              <div className="mono font-bold text-xs" style={{ color: selectedDistrito === d.id ? 'var(--accent)' : 'var(--text2)' }}>{d.id}</div>
              <div className="text-xs mt-0.5 truncate" style={{ color: 'var(--text)' }}>{d.label.split(' — ')[1]}</div>
            </button>
          ))}
        </div>

        {/* Content */}
        {distrito && (
          <>
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <h2 className="font-bold">{distrito.nombre}</h2>
                <span className="text-xs mono" style={{ color: 'var(--text2)' }}>PDU {distrito.periodo} · {distrito.zonas.length} zonas</span>
              </div>
              <input
                type="text"
                placeholder="Filtrar zona... (ej: H1, CS3, turístico)"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="px-3 py-2 rounded-lg border text-sm bg-transparent outline-none w-full sm:w-64"
                style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
              />
            </div>

            <div className="space-y-2">
              {filteredZonas.map((z, i) => <ZonaCard key={i} zona={z} />)}
              {filteredZonas.length === 0 && (
                <div className="text-center py-8 text-sm" style={{ color: 'var(--text2)' }}>
                  Sin resultados para "{search}"
                </div>
              )}
            </div>
          </>
        )}

        {!distrito && (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">🏗️</div>
            <h2 className="text-lg font-bold mb-2">Selecciona un distrito</h2>
            <p className="text-sm" style={{ color: 'var(--text2)' }}>
              Consulta zonificación secundaria, COS, CUS, alturas, densidades y más.<br />
              Datos oficiales del Plan de Desarrollo Urbano de Puerto Vallarta.
            </p>
          </div>
        )}

        <GlosarioPanel />

        {/* Footer */}
        <footer className="text-center py-6 text-xs" style={{ color: 'var(--text2)' }}>
          <span>Expat Advisor MX · Colmena v2 · </span>
          <span className="mono">duendes.app 2026</span>
        </footer>
      </main>
    </div>
  )
}
