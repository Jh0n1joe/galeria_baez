// 1. Importaciones de imágenes desde assets con la secuencia exacta de Windows
import img0 from '../assets/image.png';
import img1 from '../assets/image copy.png';
import img2 from '../assets/image copy 4.png';
import img3 from '../assets/image copy 3.png';
import img4 from '../assets/image copy 5.png';
import img5 from '../assets/image copy 7.png';
import img6 from '../assets/image copy 6.png';
import img7 from '../assets/image copy 9.png';
import img8 from '../assets/image copy 10.png';
import img9 from '../assets/image copy 11.png';
import img10 from '../assets/image copy 12.png';
import img11 from '../assets/image copy 13.png';
import img12 from '../assets/image copy 14.png';
import img13 from '../assets/image copy 15.png';
import img14 from '../assets/image copy 16.png';

// Importaciones de las fotos de la infraestructura física (Imágenes 17 a 21 del PDF)
import lugar1 from '../assets/image copy 17.png';
import lugar2 from '../assets/image copy 18.png';
import lugar3 from '../assets/image copy 19.png';
import lugar4 from '../assets/image copy 20.png';
import lugar5 from '../assets/image copy 21.png';

export const infoInstitucional = {
  nombre: "Galería de Arte Pedro Báez",
  ubicacion: "Barcelona, Estado Anzoátegui, Venezuela",
  adscripcion: "Instituto de Cultura del Estado Anzoátegui (ICANZ)",
  resumen: "Inaugurada el 04 de Junio de 2007 con el Primer Salón Oriental de Arte, rindiendo homenaje a creadores de Nueva Esparta, Sucre, Bolívar y Anzoátegui. Honra la memoria del pintor, grabador y serigrafista Pedro Báez (1939-2006), reconocido por su fuerte compromiso social.",
  mision: "Funcionar como un espacio cultural fundamental para el arte oriental venezolano adscrito al Instituto de Cultura del Estado Anzoátegui, dedicado a destacar, resaltar y difundir las tradiciones, costumbres e identidad cultural de los pueblos del oriente del país.",
  vision: "Consolidarse como la sala de exposiciones de referencia y la principal vitrina artística del oriente de Venezuela, reconocida nacional e internacionalmente por su excelencia en la promoción de las artes plásticas contemporánea y tradicional.",
  conceptoColeccion: "La muestra articula materia, símbolo y territorio para reconstruir la percepción de la realidad mediante un diálogo entre geometría constructiva, poética del objeto encontrado y la fuerza del gesto pictórico. Abstracción, surrealismo y compromiso social se entrelazan."
};

export const artistasColeccion = [
  {
    id: 1,
    nombre: "Gregorio Torres",
    origen: "Barcelona (1948-2020)",
    estilo: "Escuela Constructivista Latinoamericana",
    biografia: "Destacado artista y docente cuya trayectoria se cimentó en Barcelona y Mérida, consolidándose tras su paso por Buenos Aires y Santiago de Chile. Su propuesta artística se caracteriza por una tensión creativa entre la geometría y la memoria, transformando el rigor constructivista en un lenguaje ambiguo que evoca la cartografía sensorial del oriente venezolano.",
    imagen: img0
  },
  {
    id: 2,
    nombre: "Franklin Fernández",
    origen: "Caracas (1973)",
    estilo: "Ensamblaje y Poesía Material",
    biografia: "Artista y gestor cultural cuya formación integra las artes plásticas con la poesía. Su producción artística se define como un diálogo táctil entre la materia y la palabra. A través de ensamblajes y relieves, Fernández dota a los objetos de una carga poética que remite a la memoria colectiva y la geografía cultural venezolana.",
    imagen: img1
  },
  {
    id: 3,
    nombre: "Jesús Ovalles",
    origen: "Barcelona (1963)",
    estilo: "Abstracción y Gesto Contemporáneo",
    biografia: "Consolidó su formación en la Escuela de Artes Armando Reverón. Su evolución creativa partió del dibujo, utilizando texturas visuales para fragmentar la realidad, hasta alcanzar una abstracción donde el color y la línea son protagonistas absolutos en topografías gráficas que irradian energía.",
    imagen: img2
  },
  {
    id: 4,
    nombre: "Armando Cuaulma",
    origen: "Clarines (1975)",
    estilo: "Figuración Gestual / Movimiento",
    biografia: "Formado en la Escuela Armando Reverón, su propuesta estética se centra en el movimiento, tomando a la bailarina como eje central para traducir el ritmo corporal en trazos que oscilan entre la figuración y la sugerencia. Explora líneas gestuales y superposición de planos.",
    imagen: img3
  },
  {
    id: 5,
    nombre: "Rosa Vegas",
    origen: "Maturín (1950)",
    estilo: "Arte Naíf / Poética de la Cotidianidad",
    biografia: "Conocida como 'la Reverona', es una artista multifacética marcada por la militancia política y la resiliencia social. Transforma materiales humildes como arcilla, telas y objetos recuperados en una poética de la cotidianidad y la resistencia desde su Casa-Museo La Paz en Barcelona.",
    imagen: img4
  },
  {
    id: 6,
    nombre: "Eduardo Latouche",
    origen: "Guanare (Portuguesa)",
    estilo: "Síntesis Figurativa-Abstracta",
    biografia: "Referente de la plástica formado en Barcelona, fundador del Taller Libre de Arte en El Tigre. Su obra evoluciona hacia una síntesis entre figuración y abstracción con la naturaleza como eje fundamental, empleando una pincelada vigorosa y agresiva que fragmenta el paisaje.",
    imagen: img5
  },
  {
    id: 7,
    nombre: "Luis Méndez",
    origen: "Barcelona",
    estilo: "Surrealismo Mágico",
    biografia: "Pintor autodidacta y poeta barcelonés que celebra cinco décadas de trayectoria. Desarrolla un estilo donde la pintura y la poesía convergen, creando un universo onírico de gran carga simbólica construido mediante capas de color y formas simplificadas.",
    imagen: img6
  },
  {
    id: 8,
    nombre: "Eduard Díaz",
    origen: "Barcelona (1970)",
    estilo: "Investigación Material (Asfalto)",
    biografia: "Artista de oficio formado bajo la tutela de Gregorio Torres. Destaca por el uso innovador del asfalto como recurso pictórico, dotando a su obra de una densidad física que trasciende lo estético para convertirse en portadora de significados, raspados y acumulaciones de memoria.",
    imagen: img7
  },
  {
    id: 9,
    nombre: "Abelardo Girón",
    origen: "El Tigre (1951)",
    estilo: "Figuración Expresiva / Crítica Social",
    biografia: "Figura fundamental del arte oriental con proyección internacional. Su obra se distingue por un profundo compromiso social y una potencia visual que utiliza la pintura como vehículo crítico, creando imágenes de gran intensidad cromática, textura monumental y densidad simbólica.",
    imagen: img8
  },
  {
    id: 10,
    nombre: "Pilar Gispert",
    origen: "Mérida (1954)",
    estilo: "Arte Textil y Conceptual",
    biografia: "Artista visual y profesional de las letras formada en filosofía. Utiliza recursos textiles, pigmentos y objetos encontrados donde la urdimbre y el tejido funcionan como metáforas del tiempo y la memoria, oscilando de manera rítmica entre lo doméstico y lo ritual.",
    imagen: img9
  },
  {
    id: 11,
    nombre: "Valito Siso",
    origen: "San Mateo (1946)",
    estilo: "Pintura Lírica / Patrimonio Local",
    biografia: "Ildemaro 'Valito' Siso traduce la esencia del oriente venezolano mediante una luminosidad cromática excepcional. Conserva una esencia autodidacta que privilegia la sencillez, frescura y emotividad, transformando escenas cotidianas en una celebración de las raíces culturales.",
    imagen: img10
  },
  {
    id: 12,
    nombre: "Hugo Newton",
    origen: "San José de Guanipa (1950)",
    estilo: "Fuerza Telúrica / Expresionismo",
    biografia: "Formado en Barcelona y Milán, combina diseño gráfico e ilustración. Su obra presenta una pincelada enérgica que construye relieves cromáticos, donde los mitos y las formas se disuelven en atmósferas densas ofreciendo una visión potente del paisaje emocional venezolano.",
    imagen: img11
  },
  {
    id: 13,
    nombre: "Pablo Moncada",
    origen: "Pregoneros (1953)",
    estilo: "Cuadros-Escenario / Montaje",
    biografia: "Artista integral cuya práctica visual está influenciada por su experiencia como escenógrafo y literato. Su obra se define por una poética del montaje donde las composiciones actúan como escenarios que utilizan el ritmo y el vacío para construir narrativas temporales.",
    imagen: img12
  },
  {
    id: 14,
    nombre: "Hernán Coa",
    origen: "Barcelona",
    estilo: "Fotografía y Promoción Cultural",
    biografia: "Extensa formación iniciada en 1982 que abarca artes plásticas, cerámica (Taller Alquimia) y dibujo en la Escuela Armando Reverón. Su trabajo se expande hacia la valoración del patrimonio cultural a través de la fotografía y la escenografía, participando en encuentros latinoamericanos.",
    imagen: img13
  },
  {
    id: 15,
    nombre: "José Rangel",
    origen: "Porlamar (1952)",
    estilo: "Abstracción Geométrica y Gráfica",
    biografia: "Destacado artista plástico y diseñador gráfico con trayectoria internacional en salones de Japón y Londres. Su evolución combina el uso de texturas visuales con una abstracción absoluta donde el color, la línea y la experimentación digital construyen topografías contemporáneas.",
    imagen: img14
  },
];

// ... Todo lo demás en galeriaData.js se mantiene exactamente IGUAL

// ... Todo lo demás en galeriaData.js se mantiene exactamente igual

export const fotosInstalaciones = [
  { 
    id: 1, 
    titulo: "Fachada Principal y Entorno", 
    desc: "Entrada principal de la Galería de Arte Pedro Báez y perspectivas del lugar.",
    imagenes: [lugar1, lugar2, lugar5] // <-- Ahora tiene 3 fotos integradas
  },
  { 
    id: 2, 
    titulo: "Pasillo de Grabados", 
    desc: "Área de iluminación controlada para la conservación de obras.",
    imagenes: [lugar3, lugar4] // <-- Tiene 2 fotos integradas
  }
];