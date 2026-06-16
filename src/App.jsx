function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* Navbar / Cabecera Rojo Vino */}
      <header className="bg-rose-950 text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">
            Galería <span className="text-rose-200">Pedro Báez</span>
          </h1>
          <nav className="space-x-6 text-sm font-medium">
            <a href="#inicio" className="hover:text-rose-200 transition-colors">Inicio</a>
            <a href="#galeria" className="hover:text-rose-200 transition-colors">Colección</a>
            <a href="#biografia" className="hover:text-rose-200 transition-colors">Biografía</a>
          </nav>
        </div>
      </header>

      {/* Sección Principal / Héroe */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 md:flex">
          <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
            <span className="text-rose-800 font-semibold text-sm tracking-wider uppercase mb-2">
              Exposición Permanente
            </span>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
              El Legado Cromático de un Maestro
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Explora la vida, pinceladas y visión artística de Pedro Báez. Una experiencia interactiva diseñada para preservar y difundir su impacto en las artes plásticas.
            </p>
            <div className="flex gap-4">
              <a href="#galeria" className="bg-rose-900 hover:bg-rose-950 text-white font-medium px-6 py-3 rounded-lg transition-colors shadow-md">
                Ver Obras
              </a>
              <a href="#biografia" className="border border-rose-900 text-rose-900 hover:bg-rose-50 font-medium px-6 py-3 rounded-lg transition-colors">
                Conocer al Artista
              </a>
            </div>
          </div>
          
          {/* Espacio para la imagen principal */}
          <div className="bg-rose-900/10 md:w-1/2 h-64 md:h-auto flex items-center justify-center p-8">
            <div className="border-4 border-white shadow-2xl bg-rose-950 text-white w-full h-full max-h-80 rounded flex items-center justify-center font-bold text-lg">
              [ Imagen Principal / Obra Destacada ]
            </div>
          </div>
        </div>

        {/* Sección de la Galería (Muestra de Tarjetas) */}
        <section id="galeria" className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b-2 border-rose-900/20 pb-2">
            Obras Destacadas
          </h3>
          
          {/* Cuadrícula de tarjetas blancas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="bg-slate-200 h-48 flex items-center justify-center text-slate-400 font-medium">
                  Obra #{item}
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg text-slate-900">Título de la Pintura</h4>
                  <p className="text-xs text-rose-800 font-semibold mb-2">Año de creación</p>
                  <p className="text-sm text-slate-600 line-clamp-2">
                    Breve descripción o análisis de los elementos técnicos y conceptuales de la obra.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Pie de página */}
      <footer className="bg-slate-900 text-slate-400 text-center py-6 mt-20 text-sm border-t border-slate-800">
        <p>&copy; 2026 Seminario de Software - Proyecto Galería Pedro Báez.</p>
      </footer>

    </div>
  )
}

export default App