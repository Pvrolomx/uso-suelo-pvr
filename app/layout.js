import './globals.css'

export const metadata = {
  title: 'Uso de Suelo PVR — Dictamen Automático',
  description: 'Consulta instantánea de zonificación y uso de suelo en Puerto Vallarta',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
