(function(){
  "use strict";

  var CAT_META = {
    mat:  { name:'Matemáticas',            total:50 },
    leng: { name:'Lenguaje y Literatura',  total:50 },
    soc:  { name:'Estudios Sociales',      total:50 },
    cie:  { name:'Ciencias',               total:50 }
  };

  // [categoria, subcategoria, pregunta, respuesta]
  var DATA = [
    // ---------- MATEMÁTICAS ----------
    ['mat','','¿Cómo se define un número racional?','Es todo número que puede representarse como el cociente de dos enteros (una fracción), con denominador distinto de cero.'],
    ['mat','','¿Qué es un número primo?','Es un número natural mayor que 1 que solo tiene dos divisores: el 1 y él mismo.'],
    ['mat','','¿A qué se llama "hipotenusa"?','Al lado de mayor longitud en un triángulo rectángulo, el cual es opuesto al ángulo recto.'],
    ['mat','','¿Qué es un ángulo obtuso?','Es aquel que mide más de 90 grados, pero menos de 180 grados.'],
    ['mat','','¿Qué nombre recibe el conjunto de todos los resultados posibles de un experimento aleatorio?','Espacio muestral.'],
    ['mat','','¿Qué indica la propiedad conmutativa en la multiplicación?','Que el orden de los factores no altera el producto.'],
    ['mat','','¿Cuál es la definición de "asíntota"?','Es una línea recta a la que se aproxima continuamente la gráfica de una función, pero sin llegar jamás a tocarla.'],
    ['mat','','En estadística, ¿qué es la "moda"?','Es el valor que aparece con mayor frecuencia en un conjunto de datos.'],
    ['mat','','¿Qué es un polígono regular?','Es una figura geométrica plana cuyos lados y ángulos interiores son todos iguales entre sí.'],
    ['mat','','¿Qué mide el "perímetro" de una figura?','La longitud total del contorno o borde de la figura.'],
    ['mat','','¿A qué se refiere el término "dominio" de una función?','Al conjunto de todos los valores de entrada (variable independiente) para los cuales la función está definida.'],
    ['mat','','¿Qué es una matriz identidad?','Una matriz cuadrada que tiene el número 1 en su diagonal principal y 0 en todas las demás posiciones.'],
    ['mat','','¿Cómo se define un ángulo llano?','Es aquel que mide exactamente 180 grados.'],
    ['mat','','¿Qué es el "rango" en un conjunto de datos estadísticos?','La diferencia entre el valor máximo y el valor mínimo de los datos.'],
    ['mat','','¿Qué nombre recibe el punto donde se cortan las tres medianas de un triángulo?','Baricentro (o centro de gravedad).'],
    ['mat','','¿Qué es un número irracional?','Un número real que no puede expresarse como fracción y cuya expresión decimal es infinita no periódica (ejemplo: pi).'],
    ['mat','','¿Qué establece el teorema de Pitágoras?','Que, en todo triángulo rectángulo, el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos.'],
    ['mat','','¿Qué es la "mediana" en estadística?','Es el valor que ocupa la posición central en un conjunto de datos ordenados.'],
    ['mat','','¿Cuál es la base de los logaritmos naturales o neperianos?','El número e (aproximadamente 2.71828).'],
    ['mat','','¿Qué es un vector?','Un segmento de recta orientado que posee magnitud, dirección y sentido.'],
    ['mat','','¿A qué se le llama "ordenada al origen"?','Al punto donde la gráfica de una función corta al eje vertical (eje Y).'],
    ['mat','','¿Cómo se define un "Conjunto Vacío" y qué símbolo lo representa?','Es el conjunto que carece de elementos. Se representa por ∅ o por dos llaves vacías { }.'],
    ['mat','','¿Qué es un diámetro en una circunferencia?','Es la cuerda que pasa por el centro y une dos puntos de la circunferencia, midiendo el doble que el radio.'],
    ['mat','','¿Qué indica la desviación estándar en estadística?','El grado de dispersión o alejamiento de los datos respecto al promedio o media.'],
    ['mat','','¿A qué se refiere el término "grado de un polinomio"?','Al exponente mayor que posee la variable en el polinomio.'],
    ['mat','','¿Qué es una parábola?','Es el lugar geométrico de los puntos que equidistan de un punto fijo llamado foco y una recta llamada directriz.'],
    ['mat','','¿Qué nombre reciben dos rectas que nunca se cruzan y están en el mismo plano?','Rectas paralelas.'],
    ['mat','','¿Qué es la "media aritmética"?','El promedio que se obtiene al sumar todos los datos y dividir el resultado entre el número total de ellos.'],
    ['mat','','¿Qué es un "radián"?','Es la unidad de medida de ángulos que equivale al ángulo central que subtiende un arco cuya longitud es igual al radio.'],
    ['mat','','¿Qué significa que dos figuras sean "congruentes"?','Que tienen la misma forma y el mismo tamaño (lados y ángulos iguales).'],
    ['mat','','¿Qué es un "término independiente"?','Es el elemento de una expresión algebraica que no está acompañado de ninguna variable.'],
    ['mat','','¿Qué es un "monomio"?','Una expresión algebraica que consta de un solo término.'],
    ['mat','','¿Cómo se llama el polígono de 12 lados?','Dodecágono.'],
    ['mat','','¿Qué es la "secante" de un ángulo?','Es la razón recíproca o inversa del coseno.'],
    ['mat','','¿Qué nombre recibe el conjunto que contiene todos los elementos de referencia para una situación particular?','Conjunto Universal.'],
    ['mat','','¿Qué es un "evento seguro" en probabilidad?','Aquel cuya probabilidad de ocurrir es igual a 1 (o 100%).'],
    ['mat','','¿Quién es considerado el padre de la Geometría por su obra "Los Elementos"?','Euclides.'],
    ['mat','','¿Cómo se denomina a la figura plana formada por puntos que están a la misma distancia de un centro?','Círculo.'],
    ['mat','','¿Qué es un ángulo complementario?','Es aquel que, sumado con otro, da como resultado 90 grados.'],
    ['mat','','¿Qué es una progresión aritmética?','Una sucesión de números donde cada término se obtiene sumando una cantidad fija al anterior.'],
    ['mat','','¿Qué es un poliedro?','Un cuerpo geométrico de tres dimensiones cuyas caras son polígonos planos.'],
    ['mat','','¿A qué se llama "abscisa"?','A la coordenada horizontal (X) en un plano cartesiano.'],
    ['mat','','¿Cómo se le denomina a un polígono de cinco lados?','Pentágono.'],
    ['mat','','¿Qué es una bisectriz?','Es la semirrecta que divide a un ángulo en dos partes exactamente iguales.'],
    ['mat','','¿Qué es una función periódica?','Aquella cuyos valores se repiten a intervalos regulares (como el seno o el coseno).'],
    ['mat','','¿Qué nombre recibe un sistema de ecuaciones que no tiene solución?','Sistema incompatible.'],
    ['mat','','¿Cómo se le llama a la operación que consiste en multiplicar un número (base) por sí mismo tantas veces como indique otro número (exponente)?','Potencia.'],
    ['mat','','¿Cuál es el único número primo par?','El número 2.'],
    ['mat','','¿Cuál es la suma de los ángulos internos de un triángulo?','180°.'],
    ['mat','','¿Cómo se clasifican los triángulos según sus lados?','Equilátero, Isósceles y Escaleno.'],

    // ---------- LENGUAJE Y LITERATURA ----------
    ['leng','Literatura Universal y Clásica','¿Cuál es la obra épica de la Antigua Grecia que narra la cólera de Aquiles durante la Guerra de Troya?','La Ilíada.'],
    ['leng','Literatura Universal y Clásica','¿A qué género literario pertenecen las obras que están destinadas a ser representadas ante un público?','Género Dramático.'],
    ['leng','Literatura Universal y Clásica','¿Quién es el autor de la famosa novela "Don Quijote de la Mancha"?','Miguel de Cervantes Saavedra.'],
    ['leng','Literatura Universal y Clásica','¿Cómo se llama el movimiento literario que busca la perfección formal y surge como respuesta al Romanticismo en el siglo XIX?','Parnasianismo (o Realismo, según el enfoque del programa).'],
    ['leng','Literatura Universal y Clásica','¿En qué época literaria se sitúa el "Cantar de Mio Cid"?','Época Medieval (Edad Media).'],
    ['leng','Literatura Universal y Clásica','¿Cuál es el nombre del protagonista de "La Odisea" que lucha por regresar a su hogar en Ítaca?','Odiseo (o Ulises).'],
    ['leng','Literatura Universal y Clásica','¿Quién escribió la tragedia "Romeo y Julieta"?','William Shakespeare.'],
    ['leng','Literatura Universal y Clásica','¿Qué nombre recibe la estrofa de ocho versos endecasílabos con rima consonante, muy usada en la épica?','Octava Real.'],
    ['leng','Literatura Universal y Clásica','¿A qué corriente pertenece el autor Franz Kafka con su obra "La Metamorfosis"?','Existencialismo / Expresionismo.'],
    ['leng','Literatura Universal y Clásica','¿Cuál es la principal característica del Realismo Mágico?','La inclusión de elementos fantásticos percibidos como normales por los personajes.'],

    ['leng','Literatura Salvadoreña y Centroamericana','¿Quién es el autor salvadoreño conocido por sus "Cuentos de Barro"?','Salvador Salazar Arrué (Salarrué).'],
    ['leng','Literatura Salvadoreña y Centroamericana','¿A qué escritor se le atribuye el poema "Ascensión", tras morir a una edad muy temprana?','Alfredo Espino.'],
    ['leng','Literatura Salvadoreña y Centroamericana','¿Quién escribió la novela "Cenizas de Izalco"?','Claribel Alegría y Darwin J. Flakoll.'],
    ['leng','Literatura Salvadoreña y Centroamericana','¿Cuál es el nombre del poeta salvadoreño que escribió el "Poema de Amor" y fue parte de la Generación Comprometida?','Roque Dalton.'],
    ['leng','Literatura Salvadoreña y Centroamericana','¿Qué escritora salvadoreña es famosa por su obra "Tierra de Infancia"?','Claudia Lars.'],
    ['leng','Literatura Salvadoreña y Centroamericana','¿Cómo se llama la obra de Alberto Masferrer donde plantea que todos deben tener lo mínimo para vivir dignamente?','El Mínimum Vital.'],
    ['leng','Literatura Salvadoreña y Centroamericana','¿A qué autor salvadoreño pertenece el libro de poemas "Jícaras Tristes"?','Alfredo Espino.'],
    ['leng','Literatura Salvadoreña y Centroamericana','¿Quién es el autor nicaragüense considerado el máximo representante del Modernismo?','Rubén Darío.'],
    ['leng','Literatura Salvadoreña y Centroamericana','¿Qué autor salvadoreño escribió la obra de teatro "Luz Negra"?','Álvaro Menen Desleal.'],
    ['leng','Literatura Salvadoreña y Centroamericana','¿Cuál es el tema principal de la novela "El Asco" de Horacio Castellanos Moya?','La crítica mordaz a la identidad y sociedad salvadoreña de posguerra.'],

    ['leng','Figuras Literarias y Retórica','¿Cómo se llama la figura que consiste en exagerar un hecho o relato?','Hipérbole.'],
    ['leng','Figuras Literarias y Retórica','¿Qué figura literaria se usa en la frase: "Tus labios son pétalos de rosa"?','Metáfora.'],
    ['leng','Figuras Literarias y Retórica','¿Cómo se llama la repetición de sonidos al inicio de varios versos?','Aliteración.'],
    ['leng','Figuras Literarias y Retórica','¿Qué figura consiste en atribuir cualidades humanas a objetos inanimados o animales?','Prosopopeya o Personificación.'],
    ['leng','Figuras Literarias y Retórica','¿Cuál es la figura que establece una relación de semejanza usando la palabra "como"?','Símil o Comparación.'],
    ['leng','Figuras Literarias y Retórica','¿Qué es un oxímoron?','Unión de dos términos de significado opuesto (ej. "hielo abrasador").'],
    ['leng','Figuras Literarias y Retórica','¿Cómo se llama la figura que consiste en alterar el orden lógico de las palabras en una oración?','Hipérbaton.'],
    ['leng','Figuras Literarias y Retórica','¿Qué figura se utiliza al decir: "El hierro que me dio la vida" (refiriéndose a una espada)?','Metonimia.'],
    ['leng','Figuras Literarias y Retórica','¿Qué es una onomatopeya?','Representación escrita de un sonido natural o de un objeto.'],
    ['leng','Figuras Literarias y Retórica','¿Cómo se llama la figura que repite una o varias palabras al comienzo de frases o versos consecutivos?','Anáfora.'],

    ['leng','Gramática, Ortografía y Comunicación','¿Cómo se llaman las palabras que tienen el mismo sonido, pero diferente escritura y significado?','Homófonas.'],
    ['leng','Gramática, Ortografía y Comunicación','¿Qué tipo de acento es el que se utiliza para diferenciar funciones gramaticales en palabras que se escriben igual (ejemplo: él / el)?','Acento diacrítico.'],
    ['leng','Gramática, Ortografía y Comunicación','¿Cuál es el núcleo del sujeto en una oración?','El sustantivo o un pronombre.'],
    ['leng','Gramática, Ortografía y Comunicación','¿Qué función del lenguaje se centra en el receptor y busca influir en su conducta?','Función Apelativa o Conativa.'],
    ['leng','Gramática, Ortografía y Comunicación','¿Cómo se llaman las palabras que llevan la mayor fuerza de voz en la última sílaba?','Palabras Agudas.'],
    ['leng','Gramática, Ortografía y Comunicación','¿Qué es un diptongo?','La unión de dos vocales en una misma sílaba.'],
    ['leng','Gramática, Ortografía y Comunicación','¿Cuál es la parte de la oración que indica la acción, proceso o estado del sujeto?','El Verbo.'],
    ['leng','Gramática, Ortografía y Comunicación','¿A qué categoría gramatical pertenecen palabras como: "bajo", "con", "desde", "hacia"?','Preposiciones.'],
    ['leng','Gramática, Ortografía y Comunicación','¿Qué signo de puntuación se utiliza para introducir una enumeración?','Los dos puntos (:).'],
    ['leng','Gramática, Ortografía y Comunicación','¿Cómo se llaman las palabras que tienen significados opuestos?','Antónimos.'],

    ['leng','Comprensión y Análisis Textual','¿Qué es el narrador omnisciente?','Aquel que conoce todo sobre la historia, incluyendo pensamientos y sentimientos de los personajes.'],
    ['leng','Comprensión y Análisis Textual','¿Cuál es la diferencia entre un texto denotativo y uno connotativo?','El denotativo es literal/objetivo; el connotativo es figurado/subjetivo.'],
    ['leng','Comprensión y Análisis Textual','¿Qué es el clímax en una obra narrativa?','El momento de máxima tensión o el punto culminante de la historia.'],
    ['leng','Comprensión y Análisis Textual','¿A qué tipo de texto pertenece un editorial de periódico?','Texto argumentativo / de opinión.'],
    ['leng','Comprensión y Análisis Textual','¿Qué es la cohesión en un texto?','Es la conexión gramatical y léxica que permite que las oraciones se unan correctamente.'],
    ['leng','Comprensión y Análisis Textual','¿Cómo se llama el género que combina la exposición de ideas con la belleza literaria, cuyo mayor exponente en El Salvador fue Masferrer?','El Ensayo.'],
    ['leng','Comprensión y Análisis Textual','¿Qué es una rima asonante?','Cuando solo coinciden los sonidos vocálicos a partir de la última vocal acentuada.'],
    ['leng','Comprensión y Análisis Textual','¿A qué se refiere el término "intertextualidad"?','A la relación o influencia que un texto mantiene con otros textos.'],
    ['leng','Comprensión y Análisis Textual','¿Cuál es el propósito principal de un texto argumentativo?','Convencer o persuadir al lector sobre una tesis o punto de vista.'],
    ['leng','Comprensión y Análisis Textual','¿Qué es el contexto en un acto comunicativo?','Son las circunstancias de tiempo, espacio y situación que rodean el mensaje.'],

    // ---------- ESTUDIOS SOCIALES ----------
    ['soc','Geografía y Medio Ambiente','¿Cuál es la extensión territorial de El Salvador?','21,041 km².'],
    ['soc','Geografía y Medio Ambiente','¿Cuál es el río más largo de El Salvador?','El Río Lempa.'],
    ['soc','Geografía y Medio Ambiente','¿Cómo se llama el punto más elevado del país?','El Cerro El Pital (2,730 metros sobre el nivel del mar).'],
    ['soc','Geografía y Medio Ambiente','¿Cuál es el volcán conocido como el "Faro del Pacífico"?','El volcán de Izalco.'],
    ['soc','Geografía y Medio Ambiente','¿Qué departamento es conocido como "La Ciudad de los Cocos"?','Sonsonate.'],
    ['soc','Geografía y Medio Ambiente','¿Cuáles son los tres países que comparten el Golfo de Fonseca?','El Salvador, Honduras y Nicaragua.'],
    ['soc','Geografía y Medio Ambiente','¿Cuál es el lago natural más grande de El Salvador?','El Lago de Güija.'],
    ['soc','Geografía y Medio Ambiente','¿Cómo se llama la zona costera protegida por sus manglares en el departamento de Ahuachapán?','Barra de Santiago.'],
    ['soc','Geografía y Medio Ambiente','¿En qué departamento se ubica el volcán Chinchontepec?','San Vicente.'],
    ['soc','Geografía y Medio Ambiente','¿Cuál es el nombre de la llanura situada entre la cordillera costera y el océano?','Planicie Costera.'],

    ['soc','Historia de El Salvador','¿En qué fecha se celebra la Independencia de Centroamérica?','15 de septiembre de 1821.'],
    ['soc','Historia de El Salvador','¿Quién dio el "Primer Grito de Independencia" en 1811?','José Matías Delgado.'],
    ['soc','Historia de El Salvador','¿Quién fue el líder del levantamiento indígena de 1833?','Anastasio Aquino.'],
    ['soc','Historia de El Salvador','¿A qué se le conoció como "la República Cafetalera"?','Al periodo (1880-1930) donde el café fue la base única de la economía y el poder político.'],
    ['soc','Historia de El Salvador','¿Quién gobernó El Salvador como dictador entre 1931 y 1944?','Maximiliano Hernández Martínez.'],
    ['soc','Historia de El Salvador','¿En qué año ocurrió el levantamiento campesino e indígena en la zona occidental?','1932.'],
    ['soc','Historia de El Salvador','¿Qué nombre recibió el conflicto bélico entre El Salvador y Honduras en 1969?','La Guerra de las 100 horas (o erróneamente llamada "Guerra del Fútbol").'],
    ['soc','Historia de El Salvador','¿En qué fecha se firmaron los Acuerdos de Paz?','16 de enero de 1992.'],
    ['soc','Historia de El Salvador','¿En qué lugar se firmaron oficialmente los Acuerdos de Paz?','Castillo de Chapultepec, México.'],
    ['soc','Historia de El Salvador','¿Quién fue el arzobispo de San Salvador asesinado en 1980 y ahora es santo?','San Óscar Arnulfo Romero.'],

    ['soc','Organización del Estado y Constitución','¿Cuál es la ley suprema de la República de El Salvador?','La Constitución de la República.'],
    ['soc','Organización del Estado y Constitución','¿Cuáles son los tres órganos del Estado?','Legislativo, Ejecutivo y Judicial.'],
    ['soc','Organización del Estado y Constitución','¿Cuántos diputados conforman actualmente la Asamblea Legislativa?','60 diputados.'],
    ['soc','Organización del Estado y Constitución','¿Cuál es el periodo de gestión de un Presidente en El Salvador?','5 años.'],
    ['soc','Organización del Estado y Constitución','¿Cuál es el periodo de gestión de los alcaldes y diputados?','3 años.'],
    ['soc','Organización del Estado y Constitución','¿Quién es el encargado de elegir a los magistrados de la Corte Suprema de Justicia?','La Asamblea Legislativa.'],
    ['soc','Organización del Estado y Constitución','¿Cuál es la edad mínima para poder votar en El Salvador?','18 años.'],
    ['soc','Organización del Estado y Constitución','¿Qué institución es la autoridad máxima en materia electoral?','El Tribunal Supremo Electoral (TSE).'],
    ['soc','Organización del Estado y Constitución','¿Qué es un escrutinio?','Es el conteo de votos después de las elecciones.'],
    ['soc','Organización del Estado y Constitución','¿Cuál es la función principal de la Corte de Cuentas de la República?','Fiscalizar la administración del patrimonio público (el dinero del Estado).'],

    ['soc','Economía y Sociedad','¿En qué año entró en vigencia la Ley de Integración Monetaria (Dolarización)?','En el año 2001.'],
    ['soc','Economía y Sociedad','¿Cuál era la moneda oficial de El Salvador antes del dólar?','El Colón.'],
    ['soc','Economía y Sociedad','¿Qué es el sector primario de la economía?','El que se dedica a la extracción de recursos naturales (agricultura, ganadería, pesca).'],
    ['soc','Economía y Sociedad','¿Qué son las remesas familiares?','Dinero enviado por salvadoreños en el exterior a sus familiares en el país.'],
    ['soc','Economía y Sociedad','¿Qué significa el término "migración externa"?','Es el movimiento de personas que salen del país para residir en otro.'],
    ['soc','Economía y Sociedad','¿Qué es la canasta básica?','Es el conjunto de alimentos y servicios esenciales para la subsistencia de una familia.'],
    ['soc','Economía y Sociedad','¿Cuál es el principal socio comercial de El Salvador?','Estados Unidos.'],
    ['soc','Economía y Sociedad','¿Qué significan las siglas TLC?','Tratado de Libre Comercio.'],
    ['soc','Economía y Sociedad','¿Qué es la inflación?','Es el aumento generalizado y sostenido de los precios de bienes y servicios.'],
    ['soc','Economía y Sociedad','¿Qué es el IDH?','Índice de Desarrollo Humano (mide salud, educación y riqueza).'],

    ['soc','Cultura, Cívica y Actualidad','¿Quién escribió la letra del Himno Nacional de El Salvador?','Juan José Cañas.'],
    ['soc','Cultura, Cívica y Actualidad','¿Quién compuso la música del Himno Nacional?','Juan Aberle.'],
    ['soc','Cultura, Cívica y Actualidad','¿Cuáles son los símbolos patrios de El Salvador?','La Bandera, el Escudo y el Himno Nacional.'],
    ['soc','Cultura, Cívica y Actualidad','¿Cuál es el ave nacional de El Salvador?','El Torogoz.'],
    ['soc','Cultura, Cívica y Actualidad','¿Cuál es el árbol nacional de El Salvador?','El Maquilishuat.'],
    ['soc','Cultura, Cívica y Actualidad','¿Qué flor es considerada símbolo nacional?','La Flor de Izote.'],
    ['soc','Cultura, Cívica y Actualidad','¿Cómo se divide políticamente el territorio salvadoreño?','En 14 departamentos y 44 municipios.'],
    ['soc','Cultura, Cívica y Actualidad','¿Cuál es el nombre del actual sistema de pensiones en el país?','SAP (Sistema de Ahorro para Pensiones).'],
    ['soc','Cultura, Cívica y Actualidad','¿Qué es la cultura de paz?','Valores, actitudes y conductas que rechazan la violencia y previenen los conflictos.'],
    ['soc','Cultura, Cívica y Actualidad','¿Qué organismo internacional tiene su sede regional en San Salvador para la integración centroamericana?','El SICA (Sistema de la Integración Centroamericana).'],

    // ---------- CIENCIAS ----------
    ['cie','Biología','¿Cuál es la unidad estructural y funcional de todos los seres vivos?','La célula.'],
    ['cie','Biología','¿Cómo se le llama al proceso por el cual las plantas convierten la energía solar en energía química?','Fotosíntesis.'],
    ['cie','Biología','¿Qué organelo celular es conocido como la "central energética" de la célula por producir ATP?','Mitocondria.'],
    ['cie','Biología','¿Cuál es el nombre del ácido nucleico que contiene la información genética de los seres vivos?','ADN (Ácido Desoxirribonucleico).'],
    ['cie','Biología','¿Qué biomoléculas son las responsables de la formación de tejidos y están compuestas por aminoácidos?','Proteínas.'],
    ['cie','Biología','¿Cómo se denomina al mecanismo de división celular que da lugar a las células sexuales (gametos)?','Meiosis.'],
    ['cie','Biología','¿Cuál es el reino de la naturaleza que agrupa a los organismos procariontes, como las bacterias?','Reino Monera.'],
    ['cie','Biología','¿Qué nombre recibe el conjunto de poblaciones de diferentes especies que interactúan en un lugar determinado?','Comunidad.'],
    ['cie','Biología','¿Cuál es la principal función de los glóbulos blancos en la sangre humana?','Defender al organismo contra infecciones y enfermedades.'],
    ['cie','Biología','¿Cómo se llama la teoría que explica el origen y evolución de las especies por selección natural, propuesta por Charles Darwin?','Teoría de la Evolución.'],
    ['cie','Biología','¿Qué gas absorben las plantas de la atmósfera para realizar la fotosíntesis?','Dióxido de carbono (CO₂).'],
    ['cie','Biología','¿Cuál es el órgano más grande del cuerpo humano?','La piel.'],
    ['cie','Biología','¿Cómo se llama el proceso de mantenimiento de un ambiente interno estable en un organismo?','Homeostasis.'],
    ['cie','Biología','¿Qué tipo de relación simbiótica ocurre cuando ambas especies se benefician?','Mutualismo.'],
    ['cie','Biología','¿Qué vitamina es sintetizada por el cuerpo humano con la ayuda de la luz solar?','Vitamina D.'],
    ['cie','Biología','¿En qué parte de la célula vegetal se encuentra la clorofila?','En los cloroplastos.'],
    ['cie','Biología','¿Cuál es el principal sistema encargado de transportar nutrientes y oxígeno a todo el cuerpo?','Sistema Circulatorio.'],

    ['cie','Física','¿Cuál es la unidad de medida de la fuerza en el Sistema Internacional?','El Newton (N).'],
    ['cie','Física','¿Qué ley establece que "a toda acción corresponde una reacción de igual magnitud, pero en sentido opuesto"?','Tercera Ley de Newton.'],
    ['cie','Física','¿Cómo se define la capacidad que tiene un cuerpo para realizar un trabajo?','Energía.'],
    ['cie','Física','¿Qué nombre recibe el cambio de posición de un objeto respecto a un punto de referencia en el tiempo?','Movimiento.'],
    ['cie','Física','¿Cuál es el valor aproximado de la aceleración de la gravedad en la Tierra?','9,807 m/s².'],
    ['cie','Física','¿Cómo se le llama a la transferencia de energía térmica entre dos cuerpos a diferente temperatura?','Calor.'],
    ['cie','Física','¿Cuál es el instrumento utilizado para medir la presión atmosférica?','Barómetro.'],
    ['cie','Física','¿Qué tipo de energía posee un objeto debido a su altura o posición respecto al suelo?','Energía potencial gravitatoria.'],
    ['cie','Física','¿Qué fenómeno ocurre cuando la luz cambia de dirección al pasar de un medio a otro (por ejemplo, del aire al agua)?','Refracción.'],
    ['cie','Física','¿Cuál es la unidad de medida de la potencia eléctrica?','Vatio o Watt (W).'],
    ['cie','Física','¿Qué establece la ley de la conservación de la energía?','La energía no se crea ni se destruye, solo se transforma.'],
    ['cie','Física','¿Cómo se llama a la resistencia que ofrece un cuerpo a cambiar su estado de reposo o movimiento?','Inercia.'],
    ['cie','Física','¿Cuál es el tipo de circuito eléctrico donde la corriente tiene un solo camino para fluir?','Circuito en serie.'],
    ['cie','Física','¿Qué magnitud física resulta de dividir la distancia recorrida entre el tiempo empleado?','Rapidez (o velocidad).'],
    ['cie','Física','¿Quién formuló la Ley de la Gravitación Universal?','Isaac Newton.'],
    ['cie','Física','¿Cómo se llama el paso directo de un sólido al estado gaseoso sin pasar por el líquido?','Sublimación.'],

    ['cie','Química','¿Cuál es la partícula subatómica con carga eléctrica negativa que orbita alrededor del núcleo?','Electrón.'],
    ['cie','Química','¿Cómo se llama la tabla que organiza todos los elementos químicos según su número atómico?','Tabla Periódica de los Elementos.'],
    ['cie','Química','¿Cuál es el símbolo químico del Oro?','Au.'],
    ['cie','Química','¿Qué tipo de enlace se forma cuando dos átomos comparten electrones?','Enlace covalente.'],
    ['cie','Química','¿Cuál es el valor del pH para una sustancia que es considerada neutra (como el agua pura)?','7.'],
    ['cie','Química','¿Cómo se llama el proceso químico en el cual una sustancia gana electrones?','Reducción.'],
    ['cie','Química','¿Cuál es el principal componente del gas natural?','Metano (CH₄).'],
    ['cie','Química','¿Qué nombre reciben las filas horizontales en la tabla periódica?','Periodos.'],
    ['cie','Química','¿Cuál es la fórmula química del agua?','H₂O.'],
    ['cie','Química','¿Cómo se denominan los elementos que tienen propiedades intermedias entre metales y no metales?','Metaloides.'],
    ['cie','Química','¿Qué tipo de mezcla es aquella en la que sus componentes no se pueden distinguir a simple vista (como el aire)?','Mezcla homogénea.'],
    ['cie','Química','¿Cuál es el elemento químico más abundante en el universo?','Hidrógeno.'],
    ['cie','Química','¿Qué nombre recibe el cambio de estado de gas a líquido?','Condensación.'],
    ['cie','Química','¿Cuál es el número atómico del Carbono?','6.'],
    ['cie','Química','¿Cómo se llaman las sustancias que aceleran una reacción química sin consumirse en ella?','Catalizadores.'],
    ['cie','Química','¿Qué gas es necesario para que ocurra la combustión?','Oxígeno (O₂).'],
    ['cie','Química','¿Cuál es el enlace que se forma por la transferencia de electrones de un metal a un no metal?','Enlace iónico.']
  ];

  // Asignar número global de ficha (1-200) según el orden de la lista
  var FICHAS = DATA.map(function(row, i){
    return { cat:row[0], sub:row[1], q:row[2], a:row[3], n:i+1 };
  });

  var els = {
    ficha: document.getElementById('ficha'),
    ball: document.getElementById('ballNumber'),
    catName: document.getElementById('catName'),
    subcatName: document.getElementById('subcatName'),
    question: document.getElementById('questionText'),
    answer: document.getElementById('answerText'),
    tapHint: document.getElementById('tapHint'),
    drawBtn: document.getElementById('drawBtn'),
    backBtn: document.getElementById('backBtn'),
    resetBtn: document.getElementById('resetBtn'),
    speechBtn: document.getElementById('speechBtn'),
    speechBtnLabel: document.getElementById('speechBtnLabel'),
    progressFill: document.getElementById('progressFill'),
    progressLabel: document.getElementById('progressLabel'),
    deckComplete: document.getElementById('deckComplete'),
    srStatus: document.getElementById('srStatus'),
    chips: Array.prototype.slice.call(document.querySelectorAll('.chip'))
  };

  // ---------- Lectura en voz alta (solo preguntas, nunca respuestas) ----------
  var speechSupported = ('speechSynthesis' in window) && (typeof SpeechSynthesisUtterance !== 'undefined');
  var spanishVoices = [];

  function refreshVoices(){
    if(!speechSupported) return;
    spanishVoices = window.speechSynthesis.getVoices().filter(function(v){
      return v.lang && v.lang.toLowerCase().indexOf('es') === 0;
    });
  }

  function pickSpanishVoice(){
    if(!spanishVoices.length) return null;

    // 1) Voces "Google" (motor de nube): son las que suenan naturales, no robóticas.
    var google = spanishVoices.find(function(v){ return /google/i.test(v.name); });
    if(google) return google;

    // 2) Cualquier voz remota de alta calidad (localService === false), evitando
    //    los motores locales tipo eSpeak/SAPI que suenan mecánicos.
    var remote = spanishVoices.find(function(v){ return v.localService === false; });
    if(remote) return remote;

    // 3) Fallback por prioridad de variante de idioma si solo hay voces locales.
    var priority = ['es-419','es-us','es-mx','es-es','es-sv','es-gt','es-hn','es-co','es-ar'];
    for(var i=0;i<priority.length;i++){
      for(var j=0;j<spanishVoices.length;j++){
        if(spanishVoices[j].lang.toLowerCase() === priority[i]) return spanishVoices[j];
      }
    }
    return spanishVoices[0];
  }

  var SPEECH_RATE = 1.18;  // ritmo ágil, pensado para practicar contrarreloj
  var SPEECH_PITCH = 1.02; // pizca de variación para sonar menos plano

  function speakQuestion(text){
    if(!state.speechEnabled || !speechSupported || !text) return;
    var synth = window.speechSynthesis;
    synth.cancel(); // corta cualquier lectura anterior antes de iniciar la nueva
    var utter = new SpeechSynthesisUtterance(text);
    var voice = pickSpanishVoice();
    utter.lang = voice ? voice.lang : 'es-ES';
    if(voice) utter.voice = voice;
    utter.rate = SPEECH_RATE;
    utter.pitch = SPEECH_PITCH;
    synth.speak(utter);
  }

  function updateSpeechButton(){
    if(!els.speechBtn) return;
    els.speechBtn.setAttribute('aria-pressed', String(state.speechEnabled));
    els.speechBtn.classList.toggle('active', state.speechEnabled);
    if(els.speechBtnLabel){
      els.speechBtnLabel.textContent = state.speechEnabled ? 'Voz activada' : 'Voz desactivada';
    }
  }

  function toggleSpeech(){
    state.speechEnabled = !state.speechEnabled;
    updateSpeechButton();
    if(!state.speechEnabled){
      if(speechSupported) window.speechSynthesis.cancel();
    } else if(state.current){
      speakQuestion(state.current.q);
    }
  }

  if(speechSupported){
    refreshVoices();
    window.speechSynthesis.onvoiceschanged = refreshVoices;
    document.addEventListener('visibilitychange', function(){
      if(document.hidden) window.speechSynthesis.cancel();
    });
  } else if(els.speechBtn){
    els.speechBtn.hidden = true;
  }

  var state = {
    filter: 'all',
    current: null,
    revealed: false,
    speechEnabled: speechSupported,
    seen: { mat:new Set(), leng:new Set(), soc:new Set(), cie:new Set() },
    history: [],       // fichas mostradas en esta sesión, en orden
    historyIndex: -1   // posición actual dentro del historial
  };

  function pool(filter){
    if(filter === 'all') return FICHAS;
    return FICHAS.filter(function(f){ return f.cat === filter; });
  }

  // Solo las fichas que aún no se han mostrado en esta sesión (para no repetir
  // hasta que el usuario pulse "Reiniciar repaso").
  function remainingPool(filter){
    return pool(filter).filter(function(f){ return !state.seen[f.cat].has(f.n); });
  }

  function pick(filter){
    var list = remainingPool(filter);
    if(list.length === 0) return null;
    return list[Math.floor(Math.random() * list.length)];
  }

  function render(f, opts){
    opts = opts || {};
    state.current = f;
    state.revealed = false;
    els.ficha.classList.remove('revealed');
    els.ficha.setAttribute('aria-expanded','false');
    els.ficha.setAttribute('data-cat', f.cat);
    els.ball.textContent = String(f.n).padStart(3,'0');
    els.catName.textContent = CAT_META[f.cat].name;
    els.subcatName.textContent = f.sub || '';
    els.question.textContent = f.q;
    els.answer.textContent = f.a;
    els.tapHint.textContent = 'Toca la ficha para ver la respuesta';

    state.seen[f.cat].add(f.n);
    updateProgress();

    if(opts.announce !== false){
      els.srStatus.textContent = CAT_META[f.cat].name + ', ficha número ' + f.n + '. ' + f.q;
    }

    if(opts.speak !== false){
      speakQuestion(f.q);
    }

    if(!opts.skipAnim){
      els.ficha.classList.remove('drawing');
      void els.ficha.offsetWidth;
      els.ficha.classList.add('drawing');
    }
  }

  function toggleReveal(){
    state.revealed = !state.revealed;
    els.ficha.classList.toggle('revealed', state.revealed);
    els.ficha.setAttribute('aria-expanded', String(state.revealed));
    if(state.revealed && state.current){
      els.srStatus.textContent = 'Respuesta: ' + state.current.a;
    }
  }

  function updateProgress(){
    var totalForFilter = state.filter === 'all' ? 200 : CAT_META[state.filter].total;
    var seenCount;
    if(state.filter === 'all'){
      var all = new Set();
      Object.keys(state.seen).forEach(function(k){
        state.seen[k].forEach(function(n){ all.add(k+'-'+n); });
      });
      seenCount = all.size;
    } else {
      seenCount = state.seen[state.filter].size;
    }
    var pct = Math.min(100, Math.round((seenCount/totalForFilter)*100));
    els.progressFill.style.width = pct + '%';
    els.progressLabel.textContent = seenCount + ' / ' + totalForFilter + ' vistas';
  }

  // Añade una ficha nueva al historial de navegación y la muestra.
  // Si el usuario había retrocedido, descarta el "futuro" anterior (igual que
  // el historial de un navegador cuando retrocedes y luego navegas a otro lado).
  function showCard(f, opts){
    state.history = state.history.slice(0, state.historyIndex + 1);
    state.history.push(f);
    state.historyIndex = state.history.length - 1;
    render(f, opts);
    updateControlsState();
  }

  function draw(){
    var f = pick(state.filter);
    if(f){
      showCard(f);
    } else {
      updateControlsState();
      els.srStatus.textContent = 'Ya repasaste todas las fichas de esta categoría. Pulsa «Reiniciar repaso» para volver a barajarlas.';
    }
  }

  // "Siguiente": si hay una ficha futura en el historial (porque el usuario
  // retrocedió antes), avanza hacia ella; si no, saca una ficha nueva al azar.
  function goNext(){
    if(state.historyIndex < state.history.length - 1){
      state.historyIndex++;
      render(state.history[state.historyIndex]);
      updateControlsState();
    } else {
      draw();
    }
  }

  // "Anterior": vuelve a mostrar la ficha previa del historial de esta sesión.
  function goBack(){
    if(state.historyIndex <= 0) return;
    state.historyIndex--;
    render(state.history[state.historyIndex]);
    updateControlsState();
  }

  function updateControlsState(){
    var remaining = remainingPool(state.filter).length;
    var hasForward = state.historyIndex < state.history.length - 1;
    var hasBack = state.historyIndex > 0;

    if(els.backBtn) els.backBtn.disabled = !hasBack;
    els.drawBtn.disabled = (remaining === 0 && !hasForward);

    if(els.deckComplete){
      els.deckComplete.hidden = remaining !== 0;
    }
  }

  function setFilter(filter){
    state.filter = filter;
    els.chips.forEach(function(chip){
      var active = chip.getAttribute('data-filter') === filter;
      chip.classList.toggle('active', active);
      chip.setAttribute('aria-pressed', String(active));
    });
    updateProgress();
    draw();
  }

  // Eventos
  els.ficha.addEventListener('click', toggleReveal);
  els.ficha.addEventListener('keydown', function(e){
    if(e.code === 'Space' || e.code === 'Enter'){
      e.preventDefault();
      toggleReveal();
    }
  });

  els.drawBtn.addEventListener('click', goNext);
  if(els.backBtn){
    els.backBtn.addEventListener('click', goBack);
  }

  els.chips.forEach(function(chip){
    chip.addEventListener('click', function(){
      setFilter(chip.getAttribute('data-filter'));
    });
  });

  if(els.speechBtn){
    els.speechBtn.addEventListener('click', toggleSpeech);
  }
  updateSpeechButton();

  els.resetBtn.addEventListener('click', function(){
    state.seen = { mat:new Set(), leng:new Set(), soc:new Set(), cie:new Set() };
    state.history = [];
    state.historyIndex = -1;
    updateProgress();
    els.srStatus.textContent = 'Progreso reiniciado.';
    draw();
  });

  document.addEventListener('keydown', function(e){
    var tag = document.activeElement && document.activeElement.tagName;
    if(tag === 'INPUT' || tag === 'TEXTAREA') return;
    if(e.code === 'ArrowRight' || e.key === 'n' || e.key === 'N'){
      if(document.activeElement !== els.ficha){
        e.preventDefault();
        goNext();
      }
    } else if(e.code === 'ArrowLeft' || e.key === 'p' || e.key === 'P'){
      if(document.activeElement !== els.ficha){
        e.preventDefault();
        goBack();
      }
    }
  });

  // Estado inicial
  var primeraFicha = pick('all');
  if(primeraFicha){
    showCard(primeraFicha, { skipAnim:true, announce:false });
  }

})();