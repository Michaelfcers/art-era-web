export type Language = 'en' | 'es' | 'pt';

export interface StyleTranslation {
  name: string;
  era: string;
  description: string;
  keyCharacteristics: string[];
}

export const UI_TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    home: 'Home',
    howItWorks: 'How it Works',
    contact: 'Contact',
    title: 'Art Era Detector',
    subtitle: 'Unveiling the soul of your imagery',
    uploadTitle: 'Upload Art Piece',
    uploadSubtitle: 'Drag & drop, click to browse, or paste with Ctrl + V',
    analyzingTitle: 'Analyzing Masterpiece...',
    analyzingSubtitle: 'Discerning style, era, and technique',
    detectedStyle: 'Detected Style',
    original: 'Original',
    reference: 'Reference',
    era: 'Era / Period',
    keyCharacteristics: 'Key Characteristics:',
    analyzeAnother: 'Analyze Another Piece'
  },
  es: {
    home: 'Inicio',
    howItWorks: 'Cómo funciona',
    contact: 'Contacto',
    title: 'Art Era Detector',
    subtitle: 'Revelando el alma de tus imágenes',
    uploadTitle: 'Subir obra de arte',
    uploadSubtitle: 'Arrastra y suelta, busca o pega con Ctrl + V',
    analyzingTitle: 'Analizando obra de arte...',
    analyzingSubtitle: 'Identificando estilo, época y técnica',
    detectedStyle: 'Estilo Detectado',
    original: 'Original',
    reference: 'Referencia',
    era: 'Época / Período',
    keyCharacteristics: 'Características principales:',
    analyzeAnother: 'Analizar otra obra'
  },
  pt: {
    home: 'Início',
    howItWorks: 'Como funciona',
    contact: 'Contacto',
    title: 'Art Era Detector',
    subtitle: 'Revelando a alma de suas imagens',
    uploadTitle: 'Carregar obra de arte',
    uploadSubtitle: 'Arraste e solte, clique para procurar ou cole com Ctrl + V',
    analyzingTitle: 'A analisar obra de arte...',
    analyzingSubtitle: 'A identificar estilo, época e técnica',
    detectedStyle: 'Estilo Detetado',
    original: 'Original',
    reference: 'Referência',
    era: 'Época / Período',
    keyCharacteristics: 'Características principais:',
    analyzeAnother: 'Analisar outra obra'
  }
};

export const STYLE_TRANSLATIONS: Record<string, Record<Language, StyleTranslation>> = {
  abstract_expressionism: {
    en: {
      name: 'Abstract Expressionism',
      era: '1940s – 1960s',
      description: 'A gestural and monumental movement born in New York. It conceives the canvas as an arena of spontaneous subconscious action where pure color and movement convey emotion.',
      keyCharacteristics: ['Impetuous, gestural brushstrokes', 'Drip painting technique', 'Absence of traditional figuration', 'Raw emotional expression']
    },
    es: {
      name: 'Expresionismo Abstracto',
      era: '1940 – 1960',
      description: 'Movimiento gestual y monumental surgido en Nueva York. Concibe el lienzo como una arena de acción espontánea del subconsciente donde el color y el movimiento transmiten la emoción pura.',
      keyCharacteristics: ['Pinceladas gestuales e impetuosas', 'Técnica de chorreado (Drip Painting)', 'Ausencia de figuración tradicional', 'Exposición de la emoción pura']
    },
    pt: {
      name: 'Expressionismo Abstrato',
      era: '1940 – 1960',
      description: 'Movimento gestual e monumental nascido em Nova Iorque. Concebe a tela como uma arena de ação espontânea do subconsciente onde a cor e o movimento transmitem emoção pura.',
      keyCharacteristics: ['Pinceladas gestuais e impetuosas', 'Técnica de gotejamento (Drip Painting)', 'Ausência de figuração tradicional', 'Expressão emocional pura']
    }
  },
  art_nouveau: {
    en: {
      name: 'Art Nouveau Modern',
      era: '1890s – 1910s',
      description: 'An international style inspired by organic forms and nature. Famous for its sinuous, asymmetrical lines resembling plant stems and graceful curves.',
      keyCharacteristics: ['Fluid, organic lines ("whiplash")', 'Floral and botanical motifs', 'Stylized female figures', 'Integration of decorative design and painting']
    },
    es: {
      name: 'Art Nouveau Modern',
      era: '1890 – 1910',
      description: 'Estilo internacional inspirado en formas orgánicas y naturales. Destaca por sus líneas sinuosas y asimétricas semejantes a tallos, plantas y curvas femeninas.',
      keyCharacteristics: ['Líneas fluidas y orgánicas', 'Motivos florales y maza de látigo', 'Estilización de la figura femenina', 'Integración del adorno arquitectónico']
    },
    pt: {
      name: 'Art Nouveau Moderno',
      era: '1890 – 1910',
      description: 'Um estilo internacional inspirado por formas orgânicas e pela natureza. Famoso pelas suas linhas sinuosas e assimétricas semelhantes a caules e curvas elegantes.',
      keyCharacteristics: ['Linhas fluídas e orgânicas', 'Motivos florais e botânicos', 'Estilização da figura feminina', 'Integração entre arte decorativa e pintura']
    }
  },
  baroque: {
    en: {
      name: 'Baroque',
      era: '1600 – 1750',
      description: 'Defined by grand drama, exuberant detail, and striking chiaroscuro light contrasts that immerse the viewer in intense theatrical emotion.',
      keyCharacteristics: ['Dramatic chiaroscuro (Tenebrism)', 'Dynamic diagonal compositions', 'Richness of texture and movement', 'Intense emotional and religious depth']
    },
    es: {
      name: 'Barroco',
      era: '1600 – 1750',
      description: 'Arte de gran teatralidad, emoción exuberante y marcados contrastes de luz y sombra (claroscuro) que sumergen al espectador en una atmósfera dramática.',
      keyCharacteristics: ['Claroscuro dramático (Tenebrismo)', 'Composiciones dinámicas en diagonal', 'Riqueza de textura y movimiento', 'Intensidad emocional y religiosa']
    },
    pt: {
      name: 'Barroco',
      era: '1600 – 1750',
      description: 'Definido pelo grande dramatismo, detalhes exuberantes e contrastes marcantes de clarescuro que imergem o espetador numa intensa emoção teatral.',
      keyCharacteristics: ['Claroscuro dramático (Tenebrismo)', 'Composições dinâmicas em diagonal', 'Riqueza de textura e movimento', 'Intensa profundidade emocional e religiosa']
    }
  },
  color_field: {
    en: {
      name: 'Color Field Painting',
      era: '1940s – 1960s',
      description: 'A variant of abstract art featuring large expanses of flat, unmodulated color. It invites a pure meditative and immersive experience.',
      keyCharacteristics: ['Large fields of flat color', 'Absence of texture or visible brushstrokes', 'Immersive meditative effect', 'Clean geometric forms']
    },
    es: {
      name: 'Color Field Painting',
      era: '1940 – 1960',
      description: 'Estilo caracterizado por amplias extensiones de color unificado. Invita a una experiencia contemplativa donde el color actúa como sujeto y vehículo de lo sublime.',
      keyCharacteristics: ['Grandes campos de color plano', 'Superficies sin textura aparente', 'Efecto contemplativo y envolvente', 'Formas limpias e inmersivas']
    },
    pt: {
      name: 'Pintura Color Field',
      era: '1940 – 1960',
      description: 'Uma variante da arte abstrata caracterizada por grandes áreas de cor plana. Convida a uma experiência meditativa e imersiva pura.',
      keyCharacteristics: ['Grandes campos de cor plana', 'Ausência de textura visível', 'Efeito contemplativo e envolvente', 'Formas geométricas limpas']
    }
  },
  cubism: {
    en: {
      name: 'Cubism',
      era: '1907 – 1914',
      description: 'An avant-garde revolution that broke down 3D objects into geometric planes, depicting multiple viewpoints simultaneously.',
      keyCharacteristics: ['Decomposition into geometric planes', 'Simultaneous multiple viewpoints', 'Sobriety of color palette', 'Abstraction of traditional forms']
    },
    es: {
      name: 'Cubismo',
      era: '1907 – 1914',
      description: 'Revolución vanguardista que fragmentó la realidad tridimensional en planos geométricos, representando múltiples perspectivas en un mismo instante.',
      keyCharacteristics: ['Descomposición en planos geométricos', 'Múltiples puntos de vista simultáneos', 'Paleta de color sobria y estructurada', 'Abstracción de la forma tradicional']
    },
    pt: {
      name: 'Cubismo',
      era: '1907 – 1914',
      description: 'Uma revolução vanguardista que desmembrou objetos tridimensionais em planos geométricos, representando múltiplos pontos de vista simultaneamente.',
      keyCharacteristics: ['Decomposição em planos geométricos', 'Múltiplos pontos de vista simultâneos', 'Paleta de cores sóbria', 'Abstração das formas tradicionais']
    }
  },
  early_renaissance: {
    en: {
      name: 'Early Renaissance',
      era: '1400 – 1490',
      description: 'Florentine movement that revived classical ideals, introducing mathematical linear perspective and humanist anatomical study.',
      keyCharacteristics: ['Scientific linear perspective', 'Naturalistic human anatomy', 'Clear light and balanced composition', 'Humanism and classical inspiration']
    },
    es: {
      name: 'Primer Renacimiento',
      era: '1400 – 1490',
      description: 'Período florentino que reinstauró los ideales clásicos de armonía, introduciendo la perspectiva matemática y el estudio humanista de la anatomía.',
      keyCharacteristics: ['Perspectiva lineal científica', 'Anatomía humana naturalista', 'Luz clara y equilibrio compositivo', 'Humanismo e inspiración clásica']
    },
    pt: {
      name: 'Primeiro Renascimento',
      era: '1400 – 1490',
      description: 'Movimento florentino que reviveu os ideais clássicos de harmonia, introduzindo a perspectiva matemática e o estudo anatómico humanista.',
      keyCharacteristics: ['Perspectiva linear científica', 'Anatomia humana naturalista', 'Luz clara e composição equilibrada', 'Humanismo e inspiração clássica']
    }
  },
  expressionism: {
    en: {
      name: 'Expressionism',
      era: '1905 – 1920s',
      description: 'Distorts physical reality to project the inner subjective soul, psychological angst, and deep emotional experience.',
      keyCharacteristics: ['Intense and dramatic colors', 'Distorted, angular shapes', 'Focus on psychological emotion', 'Energetic, heavy brushstrokes']
    },
    es: {
      name: 'Expresionismo',
      era: '1905 – 1920',
      description: 'Movimiento que distorsiona la realidad física para proyectar la visión subjetiva del alma humana, la inquietud psicológica y la emoción profunda.',
      keyCharacteristics: ['Colores intensos y dramáticos', 'Formas distorsionadas y angulosas', 'Enfoque en la emoción interior', 'Trazos enérgicos y cargados']
    },
    pt: {
      name: 'Expressionismo',
      era: '1905 – 1920',
      description: 'Distorce a realidade física para projetar a visão subjetiva da alma, a angústia psicológica e a emoção profunda.',
      keyCharacteristics: ['Cores intensas e dramáticas', 'Formas distorcidas e angulares', 'Foco na emoção psicológica', 'Pinceladas enérgicas e densas']
    }
  },
  fauvism: {
    en: {
      name: 'Fauvism',
      era: '1904 – 1910',
      description: 'Known as "the wild beasts", they challenged academic rules using pure, arbitrary, vibrant color for visual joy and expression.',
      keyCharacteristics: ['Pure, vibrant unmixed color', 'Direct, spontaneous brushwork', 'Simplified shapes and outlines', 'Rejection of traditional chiaroscuro']
    },
    es: {
      name: 'Fauvismo',
      era: '1904 – 1910',
      description: 'Conocidos como "las fieras", desafiaron las normas académicas mediante el uso puro, liberado y arbitrario del color sobre el lienzo.',
      keyCharacteristics: ['Uso libre de colores primarios y vivos', 'Pinceladas directas y espontáneas', 'Simplificación de formas y contornos', 'Rechazo del claroscuro tradicional']
    },
    pt: {
      name: 'Fauvismo',
      era: '1904 – 1910',
      description: 'Conhecidos como "as feras", desafiaram as regras académicas usando cores puras e arbitrárias para a alegria e expressão visual.',
      keyCharacteristics: ['Cores puras e vibrantes', 'Pinceladas diretas e espontâneas', 'Formas e contornos simplificados', 'Rejeição do clarescuro tradicional']
    }
  },
  high_renaissance: {
    en: {
      name: 'High Renaissance',
      era: '1490 – 1527',
      description: 'The pinnacle of Western academic mastery (Da Vinci, Michelangelo, Raphael), renowned for ideal harmony and sfumato lighting.',
      keyCharacteristics: ['Ideal proportion and harmony', 'Sfumato blending technique', 'Balanced pyramidal compositions', 'Mastery of light and anatomy']
    },
    es: {
      name: 'Alto Renacimiento',
      era: '1490 – 1527',
      description: 'La cima de la maestría académica occidental. Destaca por la armonía sublime, las composiciones piramidales y el dominio de la técnica del esfumado.',
      keyCharacteristics: ['Proporción e integración sublime', 'Técnica del esfumado (Sfumato)', 'Composición piramidal equilibrada', 'Dominio supremo de la anatomía']
    },
    pt: {
      name: 'Alto Renascimento',
      era: '1490 – 1527',
      description: 'O apogeu do domínio académico ocidental, famoso pela harmonia sublime, composições piramidais e técnica de sfumato.',
      keyCharacteristics: ['Proporção e harmonia ideais', 'Técnica de sfumato', 'Composições piramidais equilibradas', 'Domínio da luz e anatomia']
    }
  },
  impressionism: {
    en: {
      name: 'Impressionism',
      era: '1860s – 1880s',
      description: 'Captured the fleeting sensory effects of natural sunlight in real-time with short, loose brushstrokes, often painted en plein air.',
      keyCharacteristics: ['Short, loose brushstrokes', 'Real-time study of sunlight', 'Colored shadows without pure black', 'Vibrant outdoor atmospheres (Plein Air)']
    },
    es: {
      name: 'Impresionismo',
      era: '1860 – 1886',
      description: 'Movimiento que capturó la vibración de la luz natural en tiempo real mediante pinceladas rápidas y sueltas, pintando al aire libre.',
      keyCharacteristics: ['Pincelada corta y fragmentada', 'Estudio preciso de la luz del sol', 'Sombras coloreadas sin negro puro', 'Atmósferas vibrantes y efímeras']
    },
    pt: {
      name: 'Impressionismo',
      era: '1860 – 1886',
      description: 'Capturou os efeitos sensoriais fugazes da luz solar natural em tempo real com pinceladas curtas e soltas ao ar livre.',
      keyCharacteristics: ['Pinceladas curtas e soltas', 'Estudo preciso da luz solar', 'Sombras coloridas sem preto puro', 'Atmosferas vibrantes (Plein Air)']
    }
  },
  mannerism: {
    en: {
      name: 'Mannerism Late Renaissance',
      era: '1520 – 1600',
      description: 'A stylish reaction to Renaissance harmony, emphasizing artifice through elongated figures and complex serpentinate poses.',
      keyCharacteristics: ['Elongated, graceful figures', 'Complex serpentinate poses', 'Dramatic, unnatural lighting', 'Refined technical artifice']
    },
    es: {
      name: 'Manierismo',
      era: '1520 – 1600',
      description: 'Evolución refinada del Renacimiento que enfatizó la elegancia artificiosa mediante figuras estilizadas, alargadas y poses complejas.',
      keyCharacteristics: ['Figuras alargadas y estilizadas', 'Poses en serpentinata', 'Iluminación dramática e irreal', 'Sofisticación y artificio técnico']
    },
    pt: {
      name: 'Maneirismo',
      era: '1520 – 1600',
      description: 'Uma reação sofisticada à harmonia renascentista, enfatizando o artifício através de figuras alongadas e poses complexas.',
      keyCharacteristics: ['Figuras alongadas e estilizadas', 'Poses em serpentinata', 'Iluminação dramática e irreal', 'Sofisticação e artifício técnico']
    }
  },
  minimalism: {
    en: {
      name: 'Minimalism',
      era: '1960s – 1970s',
      description: 'Reduces art to its pure essential form and material, stripping away decorative detail, narrative, or personal subjectivity.',
      keyCharacteristics: ['Pure geometric structures', 'Elimination of decorative detail', 'Repetition of neutral patterns', 'Focus on spatial interaction']
    },
    es: {
      name: 'Minimalismo',
      era: '1960 – 1970',
      description: 'Reducción estética a la esencia pura de la forma y la materia, despojando a la obra de narrativa o carga emocional subjetiva.',
      keyCharacteristics: ['Estructuras geométricas puras', 'Eliminación del detalle decorativo', 'Repetición de patrones neutros', 'Diálogo entre la obra y el espacio']
    },
    pt: {
      name: 'Minimalismo',
      era: '1960 – 1970',
      description: 'Reduz a arte à sua forma e matéria essenciais puras, eliminando detalhes decorativos ou subjetividade pessoal.',
      keyCharacteristics: ['Estruturas geométricas puras', 'Eliminação de detalhes decorativos', 'Repetição de padrões neutros', 'Foco no espaço físico']
    }
  },
  naive_art: {
    en: {
      name: 'Naive Art Primitivism',
      era: '19th Century – Present',
      description: 'A poetic, childlike style evoking fresh innocence, uninhibited by formal academic rules or perspective constraints.',
      keyCharacteristics: ['Flat, intuitive perspective', 'Meticulous decorative detail', 'Pure, luminous colors', 'Poetic, dreamlike narrative']
    },
    es: {
      name: 'Arte Naïf',
      era: 'Siglo XIX – Presente',
      description: 'Estilo ingenuo y poético que evoca la frescura de la mirada infantil, libre de los convencionalismos y técnicas académicas rígidas.',
      keyCharacteristics: ['Perspectiva plana e intuitiva', 'Minucioso nivel de detalle decorativo', 'Colores puros y luminosos', 'Atmósfera onírica y poética']
    },
    pt: {
      name: 'Arte Naïf',
      era: 'Século XIX – Presente',
      description: 'Um estilo poético e infantil que evoca inocência fresca, sem as inibições das regras académicas formais.',
      keyCharacteristics: ['Perspectiva plana e intuitiva', 'Detalhes decorativos minuciosos', 'Cores puras e luminosas', 'Narrativa poética e de sonho']
    }
  },
  northern_renaissance: {
    en: {
      name: 'Northern Renaissance',
      era: '1430 – 1580',
      description: 'Flourished in Flanders and Germany, perfecting oil technique to achieve microscopic detail, realistic texture, and rich symbolism.',
      keyCharacteristics: ['Mastery of oil painting technique', 'Microscopic detail and textures', 'Cool Northern light', 'Rich everyday symbolism']
    },
    es: {
      name: 'Renacimiento del Norte',
      era: '1430 – 1580',
      description: 'Desarrollado en Flandes y Alemania. Perfeccionó la técnica del óleo alcanzando un detalle microscópico de texturas, luz y simbolismo.',
      keyCharacteristics: ['Perfeccionamiento del óleo', 'Detalle microscópico y textura realista', 'Luz clara y fría del norte', 'Rico simbolismo cotidiano']
    },
    pt: {
      name: 'Renascimento do Norte',
      era: '1430 – 1580',
      description: 'Floresceu na Flandres e Alemanha, aperfeiçoando a pintura a óleo para alcançar um detalhe microscópico e simbolismo rico.',
      keyCharacteristics: ['Domínio da técnica da pintura a óleo', 'Detalhes e texturas microscópicas', 'Luz fria do norte', 'Rico simbolismo quotidiano']
    }
  },
  pop_art: {
    en: {
      name: 'Pop Art',
      era: '1950s – 1970s',
      description: 'Elevated mass culture, comic strips, and commercial imagery into fine art using bold screenprinting techniques.',
      keyCharacteristics: ['Popular culture imagery', 'Bold, flat commercial colors', 'Screenprinting techniques', 'Irony toward consumerism']
    },
    es: {
      name: 'Pop Art',
      era: '1950 – 1970',
      description: 'Movimiento que incorporó la imaginería de la publicidad, el cómic y la cultura de consumo, redefiniendo el concepto de arte culto.',
      keyCharacteristics: ['Imaginería de la cultura de masas', 'Colores vivos y planos', 'Técnicas de serigrafía comercial', 'Ironía frente al consumismo']
    },
    pt: {
      name: 'Pop Art',
      era: '1950 – 1970',
      description: 'Elevou a cultura de massas, banda desenhada e imagens publicitárias a belas-artes usando serigrafia arrojada.',
      keyCharacteristics: ['Imagens da cultura popular', 'Cores vivas e planas', 'Técnicas de serigrafia comercial', 'Ironia sobre o consumismo']
    }
  },
  post_impressionism: {
    en: {
      name: 'Post Impressionism',
      era: '1886 – 1905',
      description: 'Transition to modern avant-gardes (Van Gogh, Cézanne, Gauguin), emphasizing expressive brushwork and structural form.',
      keyCharacteristics: ['Expressive, energetic brushwork', 'Symbolic use of color', 'Emphasis on structural form', 'Precursor to 20th century avant-garde']
    },
    es: {
      name: 'Postimpresionismo',
      era: '1886 – 1905',
      description: 'Transición hacia las vanguardias modernas (Van Gogh, Cézanne, Gauguin) marcada por una pincelada expresiva y una sólida estructura formal.',
      keyCharacteristics: ['Pincelada enérgica y emotiva', 'Uso simbólico del color', 'Enfatización de la estructura de la forma', 'Precursor de las vanguardias del S. XX']
    },
    pt: {
      name: 'Pós-Impressionismo',
      era: '1886 – 1905',
      description: 'Transição para as vanguardas modernas (Van Gogh, Cézanne, Gauguin), enfatizando pinceladas expressivas e estrutura formal.',
      keyCharacteristics: ['Pinceladas expressivas e enérgicas', 'Uso simbólico da cor', 'Ênfase na estrutura da forma', 'Precursor da vanguarda do século XX']
    }
  },
  realism: {
    en: {
      name: 'Realism',
      era: '1840s – 1880s',
      description: 'Truthful, unvarnished depiction of everyday working-class life, rejecting romantic or mythological idealization.',
      keyCharacteristics: ['Everyday working-class subjects', 'Earthy, natural color tones', 'Honest observation without idealization', 'Social commentary and witness']
    },
    es: {
      name: 'Realismo',
      era: '1840 – 1880',
      description: 'Representación sobria y veraz de la sociedad y el trabajo diario, rechazando la idealización romántica en favor de la verdad visual.',
      keyCharacteristics: ['Temática de la vida cotidiana y trabajadora', 'Paleta de colores tierra y naturales', 'Observación precisa sin artificios', 'Denuncia y testimonio social']
    },
    pt: {
      name: 'Realismo',
      era: '1840 – 1880',
      description: 'Representação verdadeira e direta da vida quotidiana da classe trabalhadora, rejeitando a idealização romântica.',
      keyCharacteristics: ['Temas da vida quotidiana', 'Tons de cores terrosos e naturais', 'Observação honesta sem idealização', 'Testemunho e comentário social']
    }
  },
  rococo: {
    en: {
      name: 'Rococo',
      era: '1730 – 1770',
      description: 'Aristocratic French style celebrated for delicate pastel tones, shell motifs, and playful themes of love and nature.',
      keyCharacteristics: ['Soft pastel color palette', 'Curved rocaille lines', 'Gallant, romantic themes', 'Exuberant, refined ornamentation']
    },
    es: {
      name: 'Rococó',
      era: '1730 – 1770',
      description: 'Estilo aristocrático de extrema delicadeza, tonos pastel y motivos rocalla que retrata escenas galantes, alegres y voluptuosas.',
      keyCharacteristics: ['Tonos pastel suave y luminosos', 'Líneas rocalla y curvas delicadas', 'Temas galantes y pastorales', 'Elegancia refinada y jovial']
    },
    pt: {
      name: 'Rococó',
      era: '1730 – 1770',
      description: 'Estilo francês aristocrático celebrado por delicados tons pastel, motivos de conchas e temas românticos.',
      keyCharacteristics: ['Paleta de cores pastel suaves', 'Linhas de concha e curvas delicadas', 'Temas galantes e românticos', 'Ornamentação refinada e exuberante']
    }
  },
  romanticism: {
    en: {
      name: 'Romanticism',
      era: '1780s – 1850s',
      description: 'Exaltation of intense emotion, individual freedom, and the awe-inspiring, untamable force of nature.',
      keyCharacteristics: ['Sublime force of nature', 'Drama, mystery, and intense passion', 'Dynamic, emotional compositions', 'Individual creative freedom']
    },
    es: {
      name: 'Romanticismo',
      era: '1780 – 1850',
      description: 'Exaltación de la emoción, lo sublime y la fuerza indomable de la naturaleza frente al racionalismo ilustrado.',
      keyCharacteristics: ['La fuerza sublime de la naturaleza', 'Pasión, misterio y misticismo', 'Composiciones dinámicas y dramáticas', 'Búsqueda de la libertad individual']
    },
    pt: {
      name: 'Romantismo',
      era: '1780 – 1850',
      description: 'Exaltação da emoção intensa, liberdade individual e a força indomável e inspiradora da natureza.',
      keyCharacteristics: ['Força sublime da natureza', 'Drama, mistério e paixão intensa', 'Composições dinâmicas e emocionais', 'Liberdade criativa individual']
    }
  },
  symbolism: {
    en: {
      name: 'Symbolism',
      era: '1880s – 1910s',
      description: 'Exploration of hidden spiritual meaning, dreams, and myth through deep visual metaphors and evocative atmospheres.',
      keyCharacteristics: ['Allegorical and dreamlike imagery', 'Mystical, melancholic atmospheres', 'Exploration of myth and subconscious', 'Decorative, suggestive lines']
    },
    es: {
      name: 'Simbolismo',
      era: '1880 – 1910',
      description: 'Búsqueda del significado oculto y el misterio a través de metáforas visuales profundas, alegorías de ensueño y visiones espirituales.',
      keyCharacteristics: ['Imágenes alegóricas y espirituales', 'Atmósferas de ensueño y melancolía', 'Exploración de mitos y el inconsciente', 'Líneas decorativas e evocadoras']
    },
    pt: {
      name: 'Simbolismo',
      era: '1880 – 1910',
      description: 'Exploração do significado espiritual oculto, sonhos e mitos através de metáforas visuais profundas.',
      keyCharacteristics: ['Imagens alegóricas e oníricas', 'Atmosferas místicas e melancólicas', 'Exploração de mitos e inconsciente', 'Linhas decorativas e sugestivas']
    }
  },
  ukiyo_e: {
    en: {
      name: 'Ukiyo-e',
      era: '17th – 19th Century',
      description: 'Traditional Japanese woodblock printmaking ("pictures of the floating world"), famed for elegant outlines and flat harmonious color.',
      keyCharacteristics: ['Clean, elegant outline work', 'Flat color planes without shading', 'Bold, asymmetric compositions', 'Depiction of nature and fleeting life']
    },
    es: {
      name: 'Ukiyo-e',
      era: 'Siglos XVII – XIX',
      description: 'Arte tradicional del grabado japonés ("imágenes del mundo flotante") célebre por su refinado equilibrio plano y sus contornos fluidos.',
      keyCharacteristics: ['Líneas de contorno limpias y elegantes', 'Planos de color armonioso sin sombra', 'Composiciones audaces y asimétricas', 'Retrato de la naturaleza y costumbres']
    },
    pt: {
      name: 'Ukiyo-e',
      era: 'Século XVII – XIX',
      description: 'Arte tradicional de xilogravura japonesa ("imagens do mundo flutuante"), famosa por contornos elegantes e cores planas.',
      keyCharacteristics: ['Contornos limpos e elegantes', 'Planos de cor sem sombreamento', 'Composições assimétricas arrojadas', 'Retrato da natureza e da vida cotidiana']
    }
  }
};
