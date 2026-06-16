// 1. Importamos los datos institucionales, los artistas y el arreglo separado de las instalaciones
import { infoInstitucional, artistasColeccion, fotosInstalaciones } from "./data/galeriaData";

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-800 font-sans">
      
      {/* Navbar Fijo Rojo Vino */}
      <header className="bg-rose-950 text-white shadow-md sticky top-0 z-50 backdrop-blur-md bg-rose-950/95">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">
            Galería <span className="text-rose-200">Pedro Báez</span>
          </h1>
          <nav className="space-x-6 text-sm font-medium">
            <a href="#inicio" className="hover:text-rose-200 transition-colors">Inicio</a>
            <a href="#institucional" className="hover:text-rose-200 transition-colors">Institución</a>
            <a href="#instalaciones" className="hover:text-rose-200 transition-colors">Instalaciones</a>
            <a href="#coleccion" className="hover:text-rose-200 transition-colors">Colección</a>
          </nav>
        </div>
      </header>

      {/* Sección Hero / Inicio */}
      <main className="max-w-6xl mx-auto px-4 py-12" id="inicio">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-200 md:flex mb-16">
          <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
            <span className="text-rose-800 font-semibold text-sm tracking-wider uppercase mb-2">
              {infoInstitucional.adscripcion}
            </span>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
              {infoInstitucional.nombre}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6 text-justify">
              {infoInstitucional.resumen}
            </p>
            <div className="flex gap-4">
              <a href="#coleccion" className="bg-rose-900 hover:bg-rose-950 text-white font-medium px-6 py-3 rounded-lg transition-colors shadow-md">
                Explorar Colección
              </a>
            </div>
          </div>
          
          {/* Concepto Curatorial en el banner lateral */}
          <div className="bg-rose-950 text-stone-100 md:w-1/2 p-8 md:p-12 flex flex-col justify-center border-t-4 md:border-t-0 md:border-l-4 border-rose-800">
            <h4 className="text-rose-300 font-bold tracking-wide uppercase text-xs mb-2">Concepto de la Muestra</h4>
            <p className="text-sm font-light italic leading-relaxed text-justify">
              "{infoInstitucional.conceptoColeccion}"
            </p>
          </div>
        </div>

        {/* Sección Institucional (Misión y Visión) */}
        <section id="institucional" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 pt-6">
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-rose-900">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Nuestra Misión</h3>
            <p className="text-sm text-slate-600 leading-relaxed text-justify">{infoInstitucional.mision}</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-rose-900">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Nuestra Visión</h3>
            <p className="text-sm text-slate-600 leading-relaxed text-justify">{infoInstitucional.vision}</p>
          </div>
        </section>

        {/* SECCIÓN NUEVA: Recorrido por las Instalaciones Físicas (Mosaico de Fotos del Lugar) */}
        <section id="instalaciones" className="mb-16 pt-6">
          <div className="border-b-2 border-rose-900/20 pb-4 mb-8">
            <h3 className="text-2xl font-bold text-slate-900">
              Nuestras Instalaciones
            </h3>
            <p className="text-sm text-slate-500 mt-1">Un vistazo al espacio físico de la galería en Barcelona, Anzoátegui.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {fotosInstalaciones && fotosInstalaciones.map((foto, index) => (
              <div 
                key={foto.id} 
                className={`group relative rounded-xl overflow-hidden shadow-md bg-stone-900 h-64 border border-stone-200 ${
                  index === 0 ? "md:col-span-2" : "" // Destaca la fachada haciéndola doble ancho
                }`}
              >
                <img 
                  src={foto.src} 
                  alt={foto.titulo} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                {/* Capa oscura que emerge con texto descriptivo al hacer hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-white font-bold text-lg">{foto.titulo}</h4>
                  <p className="text-rose-200 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {foto.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de la Colección de Artistas */}
        <section id="coleccion" className="pt-6">
          <div className="border-b-2 border-rose-900/20 pb-4 mb-8">
            <h3 className="text-2xl font-bold text-slate-900">
              Artistas de la Muestra Permanente
            </h3>
            <p className="text-sm text-slate-500 mt-1">Un recorrido por la diversidad plástica del oriente venezolano.</p>
          </div>
          
          {/* Cuadrícula Dinámica */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {artistasColeccion.map((artista) => (
              <div key={artista.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-stone-200 flex flex-col hover:shadow-lg transition-shadow">
                <div className="h-52 overflow-hidden bg-stone-100 relative">
                  <img 
                    src={artista.imagen} 
                    alt={artista.nombre} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <span className="absolute bottom-2 right-2 bg-rose-950 text-white text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded">
                    {artista.estilo}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">{artista.nombre}</h4>
                    <p className="text-xs text-rose-800 font-semibold mb-3">{artista.origen}</p>
                    <p className="text-xs text-slate-600 text-justify line-clamp-4 leading-relaxed">
                      {artista.biografia}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 text-center py-6 mt-20 text-sm border-t border-slate-800">
        <p>&copy; 2026 - {infoInstitucional.nombre}. {infoInstitucional.ubicacion}.</p>
      </footer>

    </div>
  );
}

export default App;