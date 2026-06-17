import { useState, useEffect } from "react";
import { infoInstitucional, artistasColeccion, fotosInstalaciones } from "./data/galeriaData";

function App() {
  const [indexTarjeta1, setIndexTarjeta1] = useState(0);
  const [indexTarjeta2, setIndexTarjeta2] = useState(0);
  const [mostrarBotonTop, setMostrarBotonTop] = useState(false);

  // Detectar el scroll para mostrar u ocultar el botón "Volver arriba"
  useEffect(() => {
    const evaluarScroll = () => {
      if (window.scrollY > 400) {
        setMostrarBotonTop(true);
      } else {
        setMostrarBotonTop(false);
      }
    };
    window.addEventListener("scroll", evaluarScroll);
    return () => window.removeEventListener("scroll", evaluarScroll);
  }, []);

  const alternarTarjeta1 = (e, total) => {
    e.stopPropagation();
    setIndexTarjeta1((prev) => (prev + 1) % total);
  };

  const alternarTarjeta2 = (e, total) => {
    e.stopPropagation();
    setIndexTarjeta2((prev) => (prev + 1) % total);
  };

  const irArriba = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-stone-50 text-slate-800 font-sans scroll-smooth">
      
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
            <a href="#contacto" className="hover:text-rose-200 transition-colors">Contacto</a>
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

        {/* Recorrido por las Instalaciones Físicas */}
        <section id="instalaciones" className="mb-16 pt-6">
          <div className="border-b-2 border-rose-900/20 pb-4 mb-8">
            <h3 className="text-2xl font-bold text-slate-900">Nuestras Instalaciones</h3>
            <p className="text-sm text-slate-500 mt-1">Un vistazo interactivo al espacio físico de la galería en Barcelona.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fotosInstalaciones && fotosInstalaciones.map((foto, index) => {
              const indiceActual = index === 0 ? indexTarjeta1 : indexTarjeta2;
              const imagenActiva = foto.imagenes[indiceActual];
              const tieneVarias = foto.imagenes && foto.imagenes.length > 1;

              return (
                <div key={foto.id} className="group relative rounded-xl overflow-hidden shadow-md bg-stone-900 h-80 border border-stone-200">
                  <img src={imagenActiva} alt={foto.titulo} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500" />
                  {tieneVarias && (
                    <div className="absolute top-3 right-3 flex gap-1.5 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full z-10">
                      {foto.imagenes.map((_, idx) => (
                        <span key={idx} className={`w-1.5 h-1.5 rounded-full transition-all ${idx === indiceActual ? "bg-white scale-110" : "bg-white/40"}`} />
                      ))}
                    </div>
                  )}
                  {tieneVarias && (
                    <button onClick={(e) => index === 0 ? alternarTarjeta1(e, foto.imagenes.length) : alternarTarjeta2(e, foto.imagenes.length)} className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-3xl font-bold z-10 hover:from-black/70">
                      &#10230;
                    </button>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <div className="flex justify-between items-end w-full">
                      <div className="max-w-[85%]">
                        <h4 className="text-white font-bold text-xl">{foto.titulo}</h4>
                        <p className="text-rose-200 text-xs mt-1 opacity-90 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">{foto.desc}</p>
                      </div>
                      {tieneVarias && (
                        <div className="text-rose-300 font-mono text-sm font-semibold pb-0.5 bg-black/20 px-2 py-0.5 rounded shadow-sm">
                          {indiceActual + 1}/{foto.imagenes.length}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Sección de la Colección de Artistas */}
        <section id="coleccion" className="mb-16 pt-6">
          <div className="border-b-2 border-rose-900/20 pb-4 mb-8">
            <h3 className="text-2xl font-bold text-slate-900">Artistas de la Muestra Permanente</h3>
            <p className="text-sm text-slate-500 mt-1">Un recorrido por la diversidad plástica del oriente venezolano.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {artistasColeccion.map((artista) => (
              <div key={artista.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-stone-200 flex flex-col hover:shadow-lg transition-shadow">
                <div className="h-52 overflow-hidden bg-stone-100 relative">
                  <img src={artista.imagen} alt={artista.nombre} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                  <span className="absolute bottom-2 right-2 bg-rose-950 text-white text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded">
                    {artista.estilo}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">{artista.nombre}</h4>
                    <p className="text-xs text-rose-800 font-semibold mb-3">{artista.origen}</p>
                    <p className="text-xs text-slate-600 text-justify line-clamp-4 leading-relaxed">{artista.biografia}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de Contacto e Información de Visita */}
        <section id="contacto" className="pt-6 mb-8">
          <div className="border-b-2 border-rose-900/20 pb-4 mb-8">
            <h3 className="text-2xl font-bold text-slate-900">Información de Visita</h3>
            <p className="text-sm text-slate-500 mt-1">Planifica tu recorrido o síguenos en nuestras plataformas digitales.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Bloque de Horarios y Redes Sociales Institucionales */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-stone-200 flex flex-col justify-between">
              <div>
                <h4 className="text-rose-900 font-bold text-lg mb-4 border-b pb-2 border-stone-100">Horarios de Apertura</h4>
                <ul className="space-y-3 text-sm text-slate-600 mb-6">
                  <li className="flex justify-between"><span>Lunes a Viernes:</span> <span className="font-semibold text-slate-900">8:00 AM - 4:00 PM</span></li>
                  <li className="flex justify-between"><span>Sábados y Domingos:</span> <span className="text-rose-700 font-medium">Cerrado al público</span></li>
                </ul>

                <h4 className="text-rose-900 font-bold text-sm mb-3 uppercase tracking-wider text-xs">Canales Digitales</h4>
                <div className="space-y-2.5">
                  <a href="https://instagram.com/galeriadeartepedrobaez" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-slate-600 hover:text-rose-900 transition-colors group">
                    <svg className="w-5 h-5 text-slate-400 group-hover:text-rose-800 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span>@galeriadeartepedrobaez</span>
                  </a>
                  <a href="https://facebook.com/galeriapedrobaez" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-slate-600 hover:text-rose-900 transition-colors group">
                    <svg className="w-5 h-5 text-slate-400 group-hover:text-rose-800 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    <span>@galeriapedrobaez</span>
                  </a>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100">
                <p className="text-[11px] text-slate-400 text-justify">El acceso a las colecciones físicas y actividades guiadas está totalmente subsidiado por el ejecutivo regional.</p>
              </div>
            </div>

            {/* Bloque de Mapa en tiempo real (Iframe de Google Maps en Barcelona) */}
            <div className="md:col-span-2 rounded-xl overflow-hidden shadow-md border border-stone-200 h-64 md:h-auto min-h-[260px] bg-stone-200 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.312958742898!2d-64.68652392529949!3d10.114138189995537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2e9154b7c1abf7%3A0x86f8bfb291d2efb!2sAv.%20Fuerzas%20Armadas%2C%20Barcelona%206001%2C%20Anzo%C3%A1tegui!5e0!3m2!1ses!2sve!4v1718600000000!5m2!1ses!2sve" 
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de la Galería Pedro Báez"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Estilizado con Créditos de GitHub */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-sm border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; 2026 - {infoInstitucional.nombre}. {infoInstitucional.ubicacion}.</p>
          
          {/* Crédito del desarrollador alineado a la derecha */}
          <a 
            href="https://github.com/jh0n1joe" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group text-xs border border-slate-800 hover:border-slate-700 bg-slate-950/50 px-3 py-1.5 rounded-lg"
          >
            <svg className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <span>Desarrollado por <span className="font-mono font-semibold text-rose-300">jh0n1joe</span></span>
          </a>
        </div>
      </footer>

      {/* Botón flotante Volver Arriba */}
      <button
        onClick={irArriba}
        className={`fixed bottom-6 right-6 bg-rose-900 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 hover:bg-rose-950 flex items-center justify-center ${
          mostrarBotonTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        title="Volver al inicio"
      >
        <span className="text-xl font-bold transform -rotate-90 block">&#10230;</span>
      </button>

    </div>
  );
}

export default App;