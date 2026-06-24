import { useState, useEffect } from "react";
import { infoInstitucional, artistasColeccion, fotosInstalaciones } from "./data/galeriaData";
import logoANZ from "./assets/ANZ.png";

function App() {
  const [indexTarjeta1, setIndexTarjeta1] = useState(0);
  const [indexTarjeta2, setIndexTarjeta2] = useState(0);
  const [mostrarBotonTop, setMostrarBotonTop] = useState(false);
  const [progresoScroll, setProgresoScroll] = useState(0);
  const [modalDonacionAbierto, setModalDonacionAbierto] = useState(false);
  const [artistaSeleccionado, setArtistaSeleccionado] = useState(null);

  useEffect(() => {
    const evaluarScroll = () => {
      if (window.scrollY > 400) {
        setMostrarBotonTop(true);
      } else {
        setMostrarBotonTop(false);
      }

      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTotal > 0) {
        const porcentaje = (window.scrollY / scrollTotal) * 100;
        setProgresoScroll(porcentaje);
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
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans antialiased selection:bg-rose-900 selection:text-white text-sm md:text-base font-medium">
      
      {/* Navbar Premium con Glassmorphism y Logo Icanz */}
      <header className="bg-rose-950/95 text-stone-100 shadow-md sticky top-0 z-50 backdrop-blur-md border-b border-rose-900/30">
        <div 
          className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-rose-400 via-rose-500 to-amber-400 transition-all duration-100 ease-out z-50"
          style={{ width: `${progresoScroll}%` }}
        />

        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          
          {/* Contenedor Alineado: Logo Institucional + Título */}
          <div className="flex items-center gap-4">
            
          <img 
            src={logoANZ} 
            alt="Logo ICANZ Anzoátegui" 
            className="h-10 md:h-12 w-auto object-contain mix-blend-screen" 
            style={{ filter: "grayscale(1) brightness(1) contrast(2) invert(1)" }}
          />
            
            <h1 className="text-xl md:text-2xl font-serif tracking-widest uppercase font-bold leading-tight">
              Galería <span className="font-light text-rose-200 block md:inline text-lg md:text-2xl">Pedro Báez</span>
            </h1>
          </div>

          <nav className="hidden md:flex space-x-8 text-xs font-bold tracking-widest uppercase">
            <a href="#inicio" className="hover:text-rose-200 transition-colors duration-300">Inicio</a>
            <a href="#institucional" className="hover:text-rose-200 transition-colors duration-300">Instalación</a>
            <a href="#instalaciones" className="hover:text-rose-200 transition-colors duration-300">Instalaciones</a>
            <a href="#coleccion" className="hover:text-rose-200 transition-colors duration-300">Colección</a>
            <a href="#contacto" className="hover:text-rose-200 transition-colors duration-300">Ubicación</a>
          </nav>
        </div>
      </header>

      {/* Contenedor General */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* ================= BLOQUE 1: DOS COLUMNAS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Columna de Contenido Principal (Izquierda) */}
          <div className="lg:col-span-3 space-y-12">
            
            {/* Sección Hero */}
            <div id="inicio" className="bg-white rounded-2xl shadow-md overflow-hidden border border-stone-300 md:flex transition-all duration-500 hover:shadow-lg">
              <div className="p-8 md:p-10 md:w-7/12 flex flex-col justify-center">
                <span className="text-rose-900 font-extrabold text-xs tracking-widest uppercase mb-3 block">
                  {infoInstitucional.adscripcion}
                </span>
                <h2 className="text-3xl font-serif text-stone-950 font-bold leading-tight mb-4">
                  {infoInstitucional.nombre}
                </h2>
                <p className="text-stone-800 leading-relaxed mb-6 text-justify font-semibold text-sm">
                  {infoInstitucional.resumen}
                </p>
                <div>
                  <a href="#coleccion" className="inline-block bg-stone-950 hover:bg-rose-900 text-stone-100 font-bold tracking-wider text-xs uppercase px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md">
                    Ver Muestra Permanente
                  </a>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-rose-950 to-stone-950 text-stone-100 md:w-5/12 p-8 md:p-10 flex flex-col justify-center relative overflow-hidden border-t md:border-t-0 md:border-l border-rose-900/40">
                <div className="absolute top-0 right-0 w-40 h-40 bg-rose-800/10 rounded-full blur-3xl"></div>
                <h4 className="text-rose-300 font-extrabold tracking-widest uppercase text-xs mb-3">Manifiesto Curatorial</h4>
                <p className="text-sm font-serif font-bold italic leading-relaxed text-justify text-stone-200">
                  "{infoInstitucional.conceptoColeccion}"
                </p>
              </div>
            </div>

            {/* Sección Institucional */}
            <section id="institucional" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-stone-300 shadow-md relative group hover:border-rose-900/50 transition-colors duration-300">
                <div className="w-12 h-1.5 bg-rose-900 mb-3 transition-all duration-300 group-hover:w-20"></div>
                <h3 className="text-base font-serif font-bold tracking-wide text-stone-950 mb-2">Nuestra Misión</h3>
                <p className="text-stone-800 text-xs leading-relaxed text-justify font-semibold">{infoInstitucional.mision}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-stone-300 shadow-md relative group hover:border-rose-900/50 transition-colors duration-300">
                <div className="w-12 h-1.5 bg-rose-900 mb-3 transition-all duration-300 group-hover:w-20"></div>
                <h3 className="text-base font-serif font-bold tracking-wide text-stone-950 mb-2">Nuestra Visión</h3>
                <p className="text-stone-800 text-xs leading-relaxed text-justify font-semibold">{infoInstitucional.vision}</p>
              </div>
            </section>

            {/* Espacio Expositivo */}
            <section id="instalaciones">
              <div className="border-b-2 border-stone-300 pb-2 mb-6">
                <h3 className="text-lg md:text-xl font-serif text-stone-950 tracking-wide font-bold">El Espacio Expositivo</h3>
                <p className="text-[11px] text-stone-600 uppercase tracking-widest mt-1 font-bold">Un recorrido arquitectónico y museográfico por nuestra sede.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {fotosInstalaciones && fotosInstalaciones.map((foto, index) => {
                  const indiceActual = index === 0 ? indexTarjeta1 : indexTarjeta2;
                  const imagenActiva = foto.imagenes[indiceActual];
                  const tieneVarias = foto.imagenes && foto.imagenes.length > 1;

                  return (
                    <div key={foto.id} className="group relative rounded-2xl overflow-hidden shadow-md bg-stone-950 h-72 border border-stone-300">
                      <img src={imagenActiva} alt={foto.titulo} className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" />
                      
                      {tieneVarias && (
                        <div className="absolute top-4 right-4 flex gap-1.5 bg-stone-950/80 backdrop-blur-md px-2.5 py-1.5 rounded-full z-10 border border-white/20">
                          {foto.imagenes.map((_, idx) => (
                            <span key={idx} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === indiceActual ? "bg-white scale-125" : "bg-white/40"}`} />
                          ))}
                        </div>
                      )}
                      
                      {tieneVarias && (
                        <button onClick={(e) => index === 0 ? alternarTarjeta1(e, foto.imagenes.length) : alternarTarjeta2(e, foto.imagenes.length)} className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-stone-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center text-white text-xl z-10 font-bold">
                          &#10230;
                        </button>
                      )}
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent flex flex-col justify-end p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex justify-between items-end w-full">
                          <div className="max-w-[85%]">
                            <h4 className="text-white font-serif text-base tracking-wide font-bold">{foto.titulo}</h4>
                            <p className="text-stone-200 text-xs mt-1.5 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">{foto.desc}</p>
                          </div>
                          {tieneVarias && (
                            <div className="text-rose-200 font-mono text-[11px] font-bold bg-stone-900/80 backdrop-blur-md px-2 py-0.5 rounded border border-white/20">
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

          </div>

          {/* ================= SIDEBAR LATERAL ================= */}
          <aside className="lg:col-span-1 space-y-6 flex flex-col justify-between">
            
            {/* 1. INFOBOX INSTITUCIONAL */}
            <div className="bg-white border-2 border-stone-300 rounded-xl shadow-md overflow-hidden">
              <div className="bg-rose-950 text-stone-100 text-xs font-serif font-bold tracking-wider uppercase px-4 py-3 text-center border-b border-rose-900">
                Ficha Institucional
              </div>
              <div className="p-4 space-y-3 text-xs">
                <div className="border-b border-stone-200 pb-2">
                  <span className="text-rose-900 font-extrabold block uppercase tracking-wide text-[9px] mb-0.5">Adscripción</span>
                  <span className="text-stone-950 font-bold">{infoInstitucional.adscripcion}</span>
                </div>
                <div className="border-b border-stone-200 pb-2">
                  <span className="text-rose-900 font-extrabold block uppercase tracking-wide text-[9px] mb-0.5">Tipo de Espacio</span>
                  <span className="text-stone-950 font-bold">Galería de Arte Público</span>
                </div>
                <div className="border-b border-stone-200 pb-2">
                  <span className="text-rose-900 font-extrabold block uppercase tracking-wide text-[9px] mb-0.5">Ubicación</span>
                  <span className="text-stone-950 font-bold">{infoInstitucional.ubicacion}</span>
                </div>
                <div className="border-b border-stone-200 pb-2">
                  <span className="text-rose-900 font-extrabold block uppercase tracking-wide text-[9px] mb-0.5">Horarios</span>
                  <span className="text-stone-950 font-bold">Lun a Vie: 8AM – 4PM</span>
                </div>
                <div className="pt-0.5">
                  <span className="inline-flex items-center gap-1.5 text-emerald-950 font-bold bg-emerald-100/90 px-2 py-1 rounded border border-emerald-300 w-full justify-center text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span> Abierta al Público
                  </span>
                </div>
              </div>
            </div>

            {/* 2. BANNER: APRECIACIÓN Y DONACIONES */}
            <div className="bg-gradient-to-br from-stone-900 to-rose-950 border-2 border-rose-900/50 rounded-xl shadow-md p-4 text-stone-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/10 rounded-full blur-2xl group-hover:bg-rose-500/20 transition-all duration-500"></div>
              <h4 className="text-rose-300 font-serif text-xs tracking-wide mb-1.5 font-bold uppercase">
                Apoya al Arte Regional
              </h4>
              <p className="text-[11px] text-stone-300 leading-normal mb-3 font-medium text-justify">
                Contribuye al mantenimiento de nuestras salas y a la preservación del catálogo patrimonial de creadores orientales.
              </p>
              <button 
                onClick={() => setModalDonacionAbierto(true)}
                className="w-full bg-rose-900 hover:bg-rose-800 text-white font-bold text-xs uppercase tracking-wider py-2.5 rounded-lg border border-rose-700/50 transition-all duration-300 shadow shadow-black/40 text-center"
              >
                Contribuciones & Regalías
              </button>
            </div>

            {/* 3. PANEL DE EJES TEMÁTICOS */}
            <div className="bg-white border-2 border-stone-300 rounded-xl shadow-md p-4">
              <h4 className="text-stone-950 font-serif text-xs tracking-wide mb-3 border-b-2 pb-1.5 border-stone-200 font-bold">
                Ejes de la Colección
              </h4>
              <div className="space-y-3 text-[11px]">
                <div>
                  <span className="font-extrabold text-rose-900 uppercase tracking-wider block">Paisajismo Lumínico</span>
                  <p className="text-stone-800 leading-normal text-justify font-bold">Luz tropical y costas del oriente plasmadas en el lienzo.</p>
                </div>
                <div>
                  <span className="font-extrabold text-rose-900 uppercase tracking-wider block">Realismo Social</span>
                  <p className="text-stone-800 leading-normal text-justify font-bold">Obras críticas que retratan la identidad popular.</p>
                </div>
                <div>
                  <span className="font-extrabold text-rose-900 uppercase tracking-wider block">Nueva Figuración</span>
                  <p className="text-stone-800 leading-normal text-justify font-bold">Exploración de la forma humana y abstracción regional.</p>
                </div>
              </div>
            </div>

            {/* 4. CARTELERA CULTURAL & REDES */}
            <div className="bg-white border-2 border-stone-300 rounded-xl shadow-md p-4">
              <h4 className="text-stone-950 font-serif text-xs tracking-wide mb-3 border-b-2 pb-1.5 border-stone-200 font-bold">
                Actividades & Redes
              </h4>
              <div className="space-y-3 text-[11px]">
                <div className="p-2 bg-stone-100 rounded border border-stone-300">
                  <span className="text-[9px] font-extrabold tracking-widest text-rose-900 uppercase block mb-0.5">Muestra</span>
                  <p className="text-stone-950 font-bold">Antología de Maestros Orientales</p>
                </div>
                
                <div className="pt-2 border-t border-stone-200 space-y-2">
                  <a href="https://instagram.com/galeriadeartepedrobaez" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-stone-800 hover:text-rose-900 transition-colors font-bold group">
                    <svg className="w-3.5 h-3.5 text-stone-500 group-hover:text-rose-900 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path></svg>
                    <span className="truncate">@galeriadeartepedrobaez</span>
                  </a>
                  <a href="https://facebook.com/galeriapedrobaez" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-stone-800 hover:text-rose-900 transition-colors font-bold group">
                    <svg className="w-3.5 h-3.5 text-stone-500 group-hover:text-rose-900 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    <span className="truncate">@galeriapedrobaez</span>
                  </a>
                </div>
              </div>
            </div>

          </aside>

        </div>

        {/* ================= BLOQUE 2: ANCHO COMPLETO ================= */}
        
        {/* Catálogo de Artistas Completo */}
        <section id="coleccion" className="mb-16 pt-6 border-t-2 border-stone-300">
          <div className="border-b-2 border-stone-300 pb-2 mb-8">
            <h3 className="text-xl font-serif text-stone-950 tracking-wide font-bold">Creadores en la Muestra</h3>
            <p className="text-xs text-stone-600 uppercase tracking-widest mt-1 font-bold">Maestros y nuevas voces de la plástica oriental venezolana. Haz clic en la obra para ver detalles.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {artistasColeccion.map((artista) => (
              <div 
                key={artista.id} 
                onClick={() => setArtistaSeleccionado(artista)}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-stone-300 flex flex-col hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                
                {/* Contenedor de la foto integrado con bg-stone-50 */}
                <div className="h-56 overflow-hidden bg-stone-50 relative border-b border-stone-200 flex items-center justify-center">
                  <img 
                    src={artista.imagen} 
                    alt={artista.nombre} 
                    className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-700 ease-out" 
                  />
                  <span className="absolute bottom-3 right-3 bg-stone-950 text-stone-100 text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-md border border-white/20 z-10">
                    {artista.estilo}
                  </span>
                  {/* Overlay sutil que indica que es interactivo */}
                  <div className="absolute inset-0 bg-stone-950/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/90 backdrop-blur-sm text-stone-950 text-xs font-bold px-3 py-1.5 rounded-xl shadow-md border border-stone-200 scale-95 group-hover:scale-100 transition-transform duration-300">
                      Ver Especificaciones
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-base text-stone-950 tracking-wide mb-1">{artista.nombre}</h4>
                    <p className="text-[10px] text-rose-900 font-extrabold tracking-wider uppercase mb-2">{artista.origen}</p>
                    <p className="text-xs md:text-sm text-stone-800 text-justify font-bold leading-relaxed line-clamp-3">{artista.biografia}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de Ubicación y Mapa Completo */}
        <section id="contacto" className="pt-4 mb-4">
          <div className="border-b-2 border-stone-300 pb-2 mb-8">
            <h3 className="text-xl font-serif text-stone-950 font-bold">Ubicación de la Sede</h3>
            <p className="text-xs text-stone-600 uppercase tracking-widest mt-1 font-bold">Coordenadas de acceso público a los espacios de la galería.</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md border border-stone-300 h-96 bg-stone-100 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.312958742898!2d-64.68652392529949!3d10.114138189995537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2e9154b7c1abf7%3A0x86f8bfb291d2efb!2sAv.%20Fuerzas%20Armadas%2C%20Barcelona%206001%2C%20Anzo%C3%A1tegui!5e0!3m2!1ses!2sve!4v1718600000000!5m2!1ses!2sve" 
              className="w-full h-full border-0 absolute inset-0"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación oficial de la Galería"
            ></iframe>
          </div>
        </section>

      </div>

      {/* Footer Estilizado */}
      <footer className="bg-stone-950 text-stone-300 py-8 text-xs border-t-2 border-stone-900 font-bold tracking-wide mt-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-center sm:text-left text-stone-400">&copy; 2026 {infoInstitucional.nombre}. {infoInstitucional.ubicacion}. All rights reserved.</p>
          <a 
            href="https://github.com/jh0n1joe" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-2 text-stone-300 hover:text-white transition-all duration-300 border-2 border-stone-800 bg-stone-900/60 px-4 py-2 rounded-xl tracking-wider text-[11px]"
          >
            <svg className="w-4 h-4 text-stone-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            <span>Curated by <span className="font-mono font-black text-rose-300">jh0n1joe</span></span>
          </a>
        </div>
      </footer>

      {/* ================= MODAL DE DONACIONES ================= */}
      {modalDonacionAbierto && (
        <div className="fixed inset-0 bg-stone-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full border border-stone-300 shadow-2xl overflow-hidden">
            <div className="bg-rose-950 p-5 text-stone-100 flex justify-between items-center border-b border-rose-900">
              <div>
                <h3 className="font-serif font-bold text-base tracking-wide">Fondo Patrimonial</h3>
                <p className="text-[10px] text-rose-200 font-bold uppercase tracking-widest mt-0.5">Soporte & Mecenazgo Cultural</p>
              </div>
              <button onClick={() => setModalDonacionAbierto(false)} className="text-stone-400 hover:text-white font-mono text-xl font-bold p-1">&#x2715;</button>
            </div>
            <div className="p-6 space-y-4 text-xs font-bold">
              <p className="text-stone-700 text-justify font-medium leading-relaxed">
                Agradecemos tu interés en respaldar los programas de digitalización y montaje físico de la Galería. Puedes realizar tu aporte a través de los siguientes canales oficiales:
              </p>
              <div className="p-3 bg-stone-50 border border-stone-300 rounded-xl space-y-1">
                <span className="text-[10px] text-rose-900 uppercase tracking-wider block">Transferencia Nacional / Pago Móvil</span>
                <div className="text-stone-950 font-mono space-y-0.5 text-[11px]">
                  <div><span className="text-stone-500 font-sans">Banco:</span> Banesco (0134)</div>
                  <div><span className="text-stone-500 font-sans">RIF:</span> G-20000000-0</div>
                  <div><span className="text-stone-500 font-sans">Teléfono:</span> 0412-1234567</div>
                </div>
              </div>
              <div className="p-3 bg-stone-50 border border-stone-300 rounded-xl space-y-1">
                <span className="text-[10px] text-rose-900 uppercase tracking-wider block">Canales Internacionales</span>
                <div className="text-stone-950 font-mono space-y-0.5 text-[11px]">
                  <div><span className="text-stone-500 font-sans">PayPal / Zelle:</span> pagos@galeriapedrobaez.org</div>
                  <div><span className="text-stone-500 font-sans">Ko-fi:</span> ko-fi.com/galeriapedrobaez</div>
                </div>
              </div>
            </div>
            <div className="bg-stone-100 px-6 py-4 flex justify-end border-t border-stone-200">
              <button onClick={() => setModalDonacionAbierto(false)} className="bg-stone-950 hover:bg-rose-900 text-stone-100 font-bold uppercase tracking-wider text-[11px] px-5 py-2 rounded-xl">Entendido</button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL DETALLADO DE ESPECIFICACIONES DE LA OBRA ================= */}
      {artistaSeleccionado && (
        <div 
          className="fixed inset-0 bg-stone-950/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300 animate-fadeIn"
          onClick={() => setArtistaSeleccionado(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full border border-stone-300 shadow-2xl overflow-hidden md:flex max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-y-visible"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Izquierda: Vista de la obra */}
            <div className="bg-stone-50 md:w-1/2 p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-stone-200 min-h-[250px] md:min-h-0">
              <img 
                src={artistaSeleccionado.imagen} 
                alt={artistaSeleccionado.nombre} 
                className="max-w-full max-h-[40vh] md:max-h-[50vh] object-contain drop-shadow-md rounded"
              />
            </div>

            {/* Derecha: Cartela Museográfica */}
            <div className="md:w-1/2 p-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] text-rose-900 font-extrabold uppercase tracking-widest">Ficha Técnico Oficial</span>
                    <h3 className="font-serif font-bold text-xl text-stone-950 tracking-wide mt-1 leading-tight">{artistaSeleccionado.nombre}</h3>
                  </div>
                  <button 
                    onClick={() => setArtistaSeleccionado(null)} 
                    className="text-stone-400 hover:text-stone-950 font-mono text-lg font-bold p-1 leading-none transition-colors"
                  >
                    &#x2715;
                  </button>
                </div>

                <div className="mt-4 border-t border-stone-200 pt-3 space-y-2 text-xs font-bold">
                  <div className="flex justify-between border-b border-stone-100 pb-1.5">
                    <span className="text-stone-500 font-medium">Procedencia:</span>
                    <span className="text-stone-950">{artistaSeleccionado.origen}</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-100 pb-1.5">
                    <span className="text-stone-500 font-medium">Movimiento / Estilo:</span>
                    <span className="text-rose-900 uppercase tracking-wider text-[10px]">{artistaSeleccionado.estilo}</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-100 pb-1.5">
                    <span className="text-stone-500 font-medium">Ubicación en Sala:</span>
                    <span className="text-stone-950">Muestra Permanente (Sala Principal)</span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span className="text-stone-500 font-medium">Disponibilidad:</span>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[10px]">En Exhibición</span>
                  </div>
                </div>

                <div className="mt-4">
                  <span className="text-[10px] text-stone-500 uppercase tracking-wider block mb-1">Reseña Curatorial</span>
                  <p className="text-stone-800 text-justify text-xs md:text-sm font-semibold leading-relaxed max-h-[150px] overflow-y-auto pr-1">
                    {artistaSeleccionado.biografia}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200 flex justify-end">
                <button 
                  onClick={() => setArtistaSeleccionado(null)}
                  className="bg-stone-950 hover:bg-rose-900 text-stone-100 font-bold uppercase tracking-wider text-[10px] px-4 py-2 rounded-xl transition-all duration-300 shadow-sm"
                >
                  Cerrar Ficha
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Botón flotante Volver Arriba */}
      <button
        onClick={irArriba}
        className={`fixed bottom-6 right-6 bg-stone-900 hover:bg-rose-900 text-stone-100 p-3 rounded-full shadow-md transition-all duration-500 z-50 flex items-center justify-center border-2 border-white/20 ${
          mostrarBotonTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        title="Volver arriba"
      >
        <span className="text-base font-bold transform -rotate-90 block leading-none">&#10230;</span>
      </button>

    </div>
  );
}

export default App;