type Language = "pt-BR" | "en-US" | "es-ES";
type Translation = { en: string; es: string };

const dictionary: Record<string, Translation> = {
  "Idioma": { en: "Language", es: "Idioma" },
  "Selecionar idioma": { en: "Choose language", es: "Elegir idioma" },
  "Obras": { en: "Projects", es: "Proyectos" },
  "Especialidades": { en: "Specialties", es: "Especialidades" },
  "Telhas": { en: "Shingles", es: "Tejas" },
  "Acabamento": { en: "Finishes", es: "Acabados" },
  "Instagram": { en: "Instagram", es: "Instagram" },
  "FAQ": { en: "FAQ", es: "Preguntas frecuentes" },
  "Contato": { en: "Contact", es: "Contacto" },
  "Solicitar projeto": { en: "Request a project", es: "Solicitar proyecto" },
  "Fechar menu": { en: "Close menu", es: "Cerrar menú" },
  "Abrir menu": { en: "Open menu", es: "Abrir menú" },
  "J.SHINGLE — início": { en: "J.SHINGLE — home", es: "J.SHINGLE — inicio" },
  "Coberturas Shingle": { en: "Shingle roofing", es: "Cubiertas Shingle" },
  "Coberturas que": { en: "Roofs that", es: "Cubiertas que" },
  "marcam a arquitetura.": { en: "define architecture.", es: "definen la arquitectura." },
  "Execução especializada para domos, residências e projetos em que a cobertura faz parte da identidade.": { en: "Specialized installation for domes, homes, and projects where the roof is part of the architectural identity.", es: "Instalación especializada para domos, viviendas y proyectos en los que la cubierta forma parte de la identidad arquitectónica." },
  "Ver obras": { en: "View projects", es: "Ver proyectos" },
  "Precisão em cada plano": { en: "Precision in every plane", es: "Precisión en cada plano" },
  "Especialistas em cobertura.": { en: "Roofing specialists.", es: "Especialistas en cubiertas." },
  "Da leitura da geometria ao acabamento final, cada solução é pensada para a arquitetura do projeto.": { en: "From understanding the geometry to the final finish, every solution is designed for the project's architecture.", es: "Desde el análisis de la geometría hasta el acabado final, cada solución se piensa para la arquitectura del proyecto." },
  "Domos geodésicos": { en: "Geodesic domes", es: "Domos geodésicos" },
  "Encaixes, recortes e impermeabilização tratados com atenção à geometria da estrutura.": { en: "Joints, cuts, and waterproofing handled with care for the structure's geometry.", es: "Uniones, cortes e impermeabilización resueltos con atención a la geometría de la estructura." },
  "Residências de alto padrão": { en: "High-end residences", es: "Residencias de alto nivel" },
  "Coberturas de presença arquitetônica para residências, chalés e empreendimentos especiais.": { en: "Architectural roofing for homes, cabins, and distinctive developments.", es: "Cubiertas con presencia arquitectónica para viviendas, cabañas y proyectos especiales." },
  "Portfólio arquitetônico": { en: "Architectural portfolio", es: "Portafolio arquitectónico" },
  "Nossas obras.": { en: "Our projects.", es: "Nuestros proyectos." },
  "Conheça projetos realizados em Belém, Sapucaí e Sarapuí.": { en: "Explore projects completed in Belém, Sapucaí, and Sarapuí.", es: "Conozca proyectos realizados en Belém, Sapucaí y Sarapuí." },
  "Explorar Obras": { en: "Explore projects", es: "Explorar proyectos" },
  "Telhas Shingle": { en: "Shingle roofing", es: "Tejas Shingle" },
  "Venda e instalação para o seu projeto.": { en: "Sales and installation for your project.", es: "Venta e instalación para su proyecto." },
  "Conheça exemplos dos modelos 3 Abas e Laminada. A escolha da telha e a instalação são definidas de acordo com as necessidades da sua cobertura.": { en: "Explore examples of 3-Tab and Laminated models. The shingle and installation method are selected to suit your roof's requirements.", es: "Conozca los modelos de 3 lengüetas y laminado. La teja y la instalación se eligen según las necesidades de su cubierta." },
  "Ver modelos de telha": { en: "View shingle models", es: "Ver modelos de teja" },
  "Apresentar meu projeto": { en: "Tell us about my project", es: "Presentar mi proyecto" },
  "Execução especializada": { en: "Specialized installation", es: "Ejecución especializada" },
  "Detalhes que definem o resultado.": { en: "Details that define the result.", es: "Detalles que definen el resultado." },
  "Encontros, recortes, bordas e transições tratados como parte da arquitetura.": { en: "Joints, cuts, edges, and transitions treated as part of the architecture.", es: "Uniones, cortes, bordes y transiciones tratados como parte de la arquitectura." },
  "J.SHINGLE no Instagram": { en: "J.SHINGLE on Instagram", es: "J.SHINGLE en Instagram" },
  "Acompanhe nossas obras de perto.": { en: "Follow our projects up close.", es: "Siga de cerca nuestros proyectos." },
  "Projetos, detalhes de execução e atualizações no perfil da J.SHINGLE.": { en: "Projects, installation details, and updates on J.SHINGLE's profile.", es: "Proyectos, detalles de ejecución y novedades en el perfil de J.SHINGLE." },
  "Ver Instagram": { en: "View Instagram", es: "Ver Instagram" },
  "Experiências reais": { en: "Real experiences", es: "Experiencias reales" },
  "Quem construiu com a J.SHINGLE.": { en: "Those who built with J.SHINGLE.", es: "Quienes construyeron con J.SHINGLE." },
  "Depoimentos de clientes e parceiros serão publicados aqui quando estiverem disponíveis e autorizados.": { en: "Client and partner testimonials will be published here when available and authorized.", es: "Aquí se publicarán testimonios de clientes y socios cuando estén disponibles y autorizados." },
  "Informação direta": { en: "Straightforward information", es: "Información directa" },
  "Dúvidas frequentes.": { en: "Frequently asked questions.", es: "Preguntas frecuentes." },
  "Conte sobre a obra": { en: "Tell us about your project", es: "Cuéntenos sobre su proyecto" },
  "Seu projeto começa aqui.": { en: "Your project starts here.", es: "Su proyecto empieza aquí." },
  "Envie as informações iniciais. A equipe organiza o briefing e orienta os próximos passos.": { en: "Send us the initial details. Our team will organize the brief and guide you through the next steps.", es: "Envíenos la información inicial. El equipo organizará el resumen y le orientará sobre los próximos pasos." },
  "Acabamentos": { en: "Finishes", es: "Acabados" },
  "Integração com a arquitetura": { en: "Integrated with the architecture", es: "Integración con la arquitectura" },
  "Detalhes de acabamento": { en: "Finish details", es: "Detalles de acabado" },
  "Recortes e luz natural": { en: "Cuts and natural light", es: "Cortes y luz natural" },
  "Um sistema completo para a sua cobertura": { en: "A complete roofing system", es: "Un sistema completo para su cubierta" },
  "Sistema de instalação": { en: "Installation system", es: "Sistema de instalación" },
  "A cobertura": { en: "The", es: "La cubierta" },
  "combina telhas asfálticas, subcobertura e uma base estrutural contínua. Cada camada tem uma função específica na proteção contra a chuva e na durabilidade do telhado.": { en: "combines asphalt shingles, underlayment, and a continuous structural base. Each layer has a specific role in protecting against rain and extending roof life.", es: "combina tejas asfálticas, impermeabilización y una base estructural continua. Cada capa cumple una función específica en la protección contra la lluvia y la durabilidad del techo." },
  "Telha": { en: "Shingle", es: "Teja" },
  "Subcobertura": { en: "Underlayment", es: "Impermeabilización" },
  "Placas de OSB": { en: "OSB boards", es: "Tableros OSB" },
  "É a camada externa da cobertura, formada por fibra de vidro, asfalto e grânulos minerais. Flexível e resistente às condições climáticas, está disponível em diferentes cores e nos modelos 3 Abas e Laminada, com acabamentos que se adaptam ao estilo de cada projeto.": { en: "The outer roof layer, made of fiberglass, asphalt, and mineral granules. Flexible and weather-resistant, it comes in a range of colors and 3-Tab or Laminated models, with finishes to suit each project.", es: "Es la capa exterior de la cubierta, hecha de fibra de vidrio, asfalto y gránulos minerales. Flexible y resistente a la intemperie, está disponible en varios colores y modelos de 3 lengüetas o laminado, con acabados para cada proyecto." },
  "Instalada abaixo das telhas, é uma camada adicional de proteção contra a entrada de água. Ajuda a impedir que a umidade alcance a base do telhado, especialmente em situações de chuva acompanhada de vento.": { en: "Installed beneath the shingles, it adds another barrier against water. It helps keep moisture from reaching the roof base, especially during wind-driven rain.", es: "Instalada debajo de las tejas, añade una barrera contra el agua. Ayuda a evitar que la humedad llegue a la base del techo, especialmente con lluvia impulsada por el viento." },
  "Formam uma base contínua e resistente sobre a estrutura do telhado. São responsáveis por oferecer uma superfície firme para a fixação das telhas e devem ser dimensionadas de acordo com as características da cobertura.": { en: "They create a strong, continuous base over the roof structure. This firm surface supports shingle fastening and must be sized to suit the roof's characteristics.", es: "Forman una base continua y resistente sobre la estructura del techo. Ofrecen una superficie firme para fijar las tejas y deben dimensionarse según las características de la cubierta." },
  "O resultado depende do sistema completo.": { en: "The result depends on the complete system.", es: "El resultado depende del sistema completo." },
  "Além dessas três camadas, a instalação exige atenção à inclinação do telhado, à ventilação, às fixações e aos arremates. A J.Shingle avalia esses detalhes para definir a solução adequada a cada projeto.": { en: "Beyond these three layers, installation requires careful attention to roof pitch, ventilation, fasteners, and flashing. J.Shingle evaluates these details to determine the right solution for each project.", es: "Además de estas tres capas, la instalación requiere atención a la pendiente, la ventilación, las fijaciones y los remates. J.Shingle evalúa estos detalles para definir la solución adecuada para cada proyecto." },
  "Catálogo de telhas": { en: "Shingle catalog", es: "Catálogo de tejas" },
  "Dois perfis para a sua cobertura.": { en: "Two profiles for your roof.", es: "Dos perfiles para su cubierta." },
  "Conheça exemplos de telhas Shingle 3 Abas e Laminada. Nossa equipe ajuda você a escolher e instalar a solução adequada ao seu projeto.": { en: "Explore examples of 3-Tab and Laminated Shingles. Our team can help you choose and install the right solution for your project.", es: "Conozca ejemplos de tejas Shingle de 3 lengüetas y laminadas. Nuestro equipo puede ayudarle a elegir e instalar la solución adecuada para su proyecto." },
  "Modelos de telha Shingle": { en: "Shingle models", es: "Modelos de tejas Shingle" },
  "As imagens mostram exemplos de acabamentos. A percepção da cor pode variar entre telas; consulte a equipe para confirmar a disponibilidade, a amostra física e as condições técnicas.": { en: "Images show finish examples. Colors may look different across screens; contact our team to confirm availability, physical samples, and technical details.", es: "Las imágenes muestran ejemplos de acabados. El color puede variar entre pantallas; consulte con el equipo la disponibilidad, las muestras físicas y las condiciones técnicas." },
  "Seu projeto": { en: "Your project", es: "Su proyecto" },
  "Vamos escolher a cobertura com você.": { en: "Let's choose the right roof together.", es: "Elijamos juntos la cubierta adecuada." },
  "Enviar dados do projeto": { en: "Send project details", es: "Enviar datos del proyecto" },
  "Falar pelo WhatsApp": { en: "Contact us on WhatsApp", es: "Contactar por WhatsApp" },
  "Modelo": { en: "Model", es: "Modelo" },
  "Cor de interesse": { en: "Color of interest", es: "Color de interés" },
  "Apresentar projeto": { en: "Share project details", es: "Presentar proyecto" },
  "Falar no WhatsApp": { en: "Chat on WhatsApp", es: "Hablar por WhatsApp" },
  "Acabamento ilustrado:": { en: "Finish shown:", es: "Acabado mostrado:" },
  "Voltar para o catálogo": { en: "Back to catalog", es: "Volver al catálogo" },
  "Exemplos de cores do modelo": { en: "Color examples for the", es: "Ejemplos de colores del modelo" },
  "Veja diferentes possibilidades para a cobertura. As cores podem variar entre telas; confirme a amostra física e a disponibilidade com a equipe.": { en: "Explore different roofing options. Colors may vary between screens; confirm physical samples and availability with our team.", es: "Descubra distintas opciones para la cubierta. Los colores pueden variar entre pantallas; confirme las muestras físicas y la disponibilidad con el equipo." },
  "Ficha do modelo": { en: "Model specifications", es: "Ficha del modelo" },
  "Informações técnicas.": { en: "Technical information.", es: "Información técnica." },
  "Consulte as medidas e características deste modelo para começar a planejar sua cobertura.": { en: "Review this model's dimensions and features as you plan your roof.", es: "Consulte las medidas y características de este modelo para empezar a planificar su cubierta." },
  "Largura da folha": { en: "Sheet width", es: "Ancho de la lámina" },
  "Comprimento da folha": { en: "Sheet length", es: "Largo de la lámina" },
  "Peso por pacote": { en: "Weight per pack", es: "Peso por paquete" },
  "Espessura da telha": { en: "Shingle thickness", es: "Espesor de la teja" },
  "Cobertura por pacote": { en: "Coverage per pack", es: "Cobertura por paquete" },
  "Resistência ao vento": { en: "Wind resistance", es: "Resistencia al viento" },
  "Embalagem": { en: "Package contents", es: "Contenido del paquete" },
  "Garantia indicada": { en: "Listed warranty", es: "Garantía indicada" },
  "Medida da folha no sentido transversal.": { en: "Sheet measurement across its width.", es: "Medida transversal de la lámina." },
  "Medida da folha no sentido longitudinal.": { en: "Sheet measurement along its length.", es: "Medida longitudinal de la lámina." },
  "Peso aproximado de um pacote completo.": { en: "Approximate weight of a full pack.", es: "Peso aproximado de un paquete completo." },
  "Espessura nominal deste modelo.": { en: "Nominal thickness of this model.", es: "Espesor nominal de este modelo." },
  "Área de referência. Recortes e características do telhado podem alterar a quantidade necessária.": { en: "Reference area. Cuts and roof features may change the amount required.", es: "Área de referencia. Los cortes y las características del techo pueden cambiar la cantidad necesaria." },
  "Valor de referência do modelo; o desempenho depende da instalação e do sistema completo.": { en: "Reference value for this model; performance depends on installation and the complete system.", es: "Valor de referencia del modelo; el rendimiento depende de la instalación y del sistema completo." },
  "Quantidade de folhas por pacote.": { en: "Number of sheets per pack.", es: "Cantidad de láminas por paquete." },
  "Prazo de referência. Consulte as condições de cobertura e aplicação com a equipe.": { en: "Reference term. Ask our team about coverage and application conditions.", es: "Plazo de referencia. Consulte al equipo las condiciones de cobertura y aplicación." },
  "A escolha do modelo, o cálculo da quantidade e as condições de garantia dependem do seu projeto e da instalação. Nossa equipe pode orientar você a partir das medidas e dos detalhes da cobertura.": { en: "Model selection, quantity estimates, and warranty terms depend on your project and installation. Our team can advise you using your roof's measurements and details.", es: "La elección del modelo, el cálculo de cantidades y las condiciones de garantía dependen de su proyecto y de la instalación. Nuestro equipo puede orientarle a partir de las medidas y los detalles de la cubierta." },
  "Voltar para obras": { en: "Back to projects", es: "Volver a proyectos" },
  "Galeria da obra": { en: "Project gallery", es: "Galería del proyecto" },
  "Converse com a J.SHINGLE.": { en: "Talk to J.SHINGLE.", es: "Hable con J.SHINGLE." },
  "Todas": { en: "All", es: "Todas" },
  "São Paulo": { en: "São Paulo", es: "São Paulo" },
  "Minas Gerais": { en: "Minas Gerais", es: "Minas Gerais" },
  "Pará": { en: "Pará", es: "Pará" },
  "Filtrar obras por estado": { en: "Filter projects by state", es: "Filtrar proyectos por estado" },
  "Ver obra": { en: "View project", es: "Ver proyecto" },
  "Privacidade": { en: "Privacy", es: "Privacidad" },
  "Política de Privacidade": { en: "Privacy Policy", es: "Política de privacidad" },
  "CONTEÚDO PROVISÓRIO — revisar antes da publicação final.": { en: "DRAFT CONTENT — review before final publication.", es: "CONTENIDO PROVISIONAL — revisar antes de la publicación final." },
  "Dados coletados": { en: "Data collected", es: "Datos recopilados" },
  "Finalidade": { en: "Purpose", es: "Finalidad" },
  "WhatsApp": { en: "WhatsApp", es: "WhatsApp" },
  "Cookies e métricas": { en: "Cookies and analytics", es: "Cookies y métricas" },
  "Retenção": { en: "Retention", es: "Retención" },
  "Direitos do usuário": { en: "User rights", es: "Derechos del usuario" },
  "Contato e atualizações": { en: "Contact and updates", es: "Contacto y actualizaciones" },
  "Nome*": { en: "Name*", es: "Nombre*" },
  "Telefone*": { en: "Phone*", es: "Teléfono*" },
  "Cidade*": { en: "City*", es: "Ciudad*" },
  "Estado*": { en: "State*", es: "Estado*" },
  "Tipo de projeto*": { en: "Project type*", es: "Tipo de proyecto*" },
  "Tipo de cobertura": { en: "Roof type", es: "Tipo de cubierta" },
  "Previsão de início": { en: "Expected start", es: "Fecha prevista de inicio" },
  "Mensagem": { en: "Message", es: "Mensaje" },
  "Selecione": { en: "Select", es: "Seleccione" },
  "Domo geodésico": { en: "Geodesic dome", es: "Domo geodésico" },
  "Residência": { en: "Residence", es: "Vivienda" },
  "Chalé": { en: "Cabin", es: "Cabaña" },
  "Hospedagem": { en: "Hospitality", es: "Alojamiento" },
  "Projeto comercial": { en: "Commercial project", es: "Proyecto comercial" },
  "Outro": { en: "Other", es: "Otro" },
  "Shingle, reforma ou a definir": { en: "Shingle, renovation, or to be decided", es: "Shingle, reforma o por definir" },
  "Ex.: segundo semestre": { en: "e.g. second half of the year", es: "Ej.: segundo semestre" },
  "Enviar projeto": { en: "Submit project", es: "Enviar proyecto" },
  "Preparar mensagem": { en: "Prepare message", es: "Preparar mensaje" },
  "Preencha nome, telefone, cidade, estado e tipo de projeto.": { en: "Enter your name, phone, city, state, and project type.", es: "Complete nombre, teléfono, ciudad, estado y tipo de proyecto." },
  "A definir": { en: "To be decided", es: "Por definir" },
  "Não informada": { en: "Not provided", es: "No indicada" },
  "Sem informações adicionais.": { en: "No additional information.", es: "Sin información adicional." },
  "O WhatsApp oficial ainda não foi informado. A mensagem é preparada para compartilhamento, mas não é enviada diretamente à J.SHINGLE.": { en: "The official WhatsApp number has not been provided yet. A message is prepared for sharing, but is not sent directly to J.SHINGLE.", es: "Aún no se ha indicado el WhatsApp oficial. Se prepara un mensaje para compartir, pero no se envía directamente a J.SHINGLE." },
  "Vamos conversar sobre sua obra?": { en: "Let's talk about your project.", es: "¿Hablamos de su proyecto?" },
  "Falar com a J.SHINGLE": { en: "Talk to J.SHINGLE", es: "Hablar con J.SHINGLE" },
  "Coberturas Shingle para domos, residências e projetos arquitetônicos especiais.": { en: "Shingle roofing for domes, homes, and distinctive architectural projects.", es: "Cubiertas Shingle para domos, viviendas y proyectos arquitectónicos especiales." },
  "Catálogo": { en: "Catalog", es: "Catálogo" },
  "Building & Installation": { en: "Building & Installation", es: "Construcción e instalación" },
  "Idioma: Português (Brasil)": { en: "Language: Portuguese (Brazil)", es: "Idioma: Portugués (Brasil)" },
  "Idioma: English (US)": { en: "Language: English (US)", es: "Idioma: inglés (EE. UU.)" },
  "Idioma: Español": { en: "Language: Spanish", es: "Idioma: español" },
  "Português (Brasil)": { en: "Portuguese (Brazil)", es: "Portugués (Brasil)" },
  "English (US)": { en: "English (US)", es: "Inglés (EE. UU.)" },
  "Español": { en: "Spanish", es: "Español" },
  "O que é telha Shingle?": { en: "What is a Shingle roof?", es: "¿Qué es una cubierta Shingle?" },
  "É um sistema de cobertura flexível, com acabamento mineral e diferentes perfis visuais. A especificação final depende da base, da inclinação e das condições de cada projeto.": { en: "It is a flexible roofing system with a mineral finish and different visual profiles. Final specifications depend on the base, roof pitch, and conditions of each project.", es: "Es un sistema de cubierta flexible, con acabado mineral y distintos perfiles visuales. La especificación final depende de la base, la inclinación y las condiciones de cada proyecto." },
  "Shingle pode ser aplicada em domos?": { en: "Can Shingle be installed on domes?", es: "¿Se puede instalar Shingle en domos?" },
  "A flexibilidade do material favorece aplicações em geometrias complexas. A viabilidade e os detalhes de execução precisam ser avaliados para cada estrutura.": { en: "The material's flexibility makes it suitable for complex geometries. Feasibility and installation details must be assessed for each structure.", es: "La flexibilidad del material favorece su uso en geometrías complejas. La viabilidad y los detalles de ejecución deben evaluarse para cada estructura." },
  "A J.SHINGLE trabalha com residências?": { en: "Does J.SHINGLE work on homes?", es: "¿J.SHINGLE trabaja en viviendas?" },
  "A estrutura de atendimento contempla residências, chalés, domos e projetos arquitetônicos especiais. O escopo é validado a partir das informações iniciais da obra.": { en: "Our services cover homes, cabins, domes, and special architectural projects. The scope is confirmed from the initial project details.", es: "Nuestros servicios incluyen viviendas, cabañas, domos y proyectos arquitectónicos especiales. El alcance se confirma con la información inicial de la obra." },
  "Como solicitar uma avaliação?": { en: "How can I request an assessment?", es: "¿Cómo puedo solicitar una evaluación?" },
  "Envie o formulário desta página com os dados básicos do projeto. A equipe receberá uma mensagem organizada para iniciar a conversa pelo WhatsApp.": { en: "Submit this page's form with the basic project details. Our team will receive an organized message to start the conversation on WhatsApp.", es: "Envíe el formulario de esta página con los datos básicos del proyecto. El equipo recibirá un mensaje organizado para iniciar la conversación por WhatsApp." },
  "Quais informações preciso enviar?": { en: "What information should I send?", es: "¿Qué información debo enviar?" },
  "Cidade, estado, tipo de projeto, tipo de cobertura, previsão de início e uma breve descrição ajudam na avaliação inicial.": { en: "The city, state, project type, roof type, expected start date, and a brief description help with the initial assessment.", es: "La ciudad, el estado, el tipo de proyecto y de cubierta, la fecha prevista de inicio y una breve descripción ayudan en la evaluación inicial." },
  "Existem diferentes modelos de Shingle?": { en: "Are there different Shingle models?", es: "¿Hay distintos modelos de Shingle?" },
  "Sim. Você pode conhecer exemplos dos modelos 3 Abas e Laminada no catálogo. A escolha final depende das características do seu projeto.": { en: "Yes. The catalog shows examples of 3-Tab and Laminated models. The final choice depends on your project's requirements.", es: "Sí. En el catálogo puede ver ejemplos de los modelos de 3 lengüetas y laminado. La elección final depende de las características de su proyecto." },
  "Como funciona a escolha da telha?": { en: "How do I choose a shingle?", es: "¿Cómo se elige la teja?" },
  "A escolha considera a linguagem arquitetônica, a geometria, a base da cobertura e o acabamento desejado. A indicação definitiva depende da análise do projeto.": { en: "The choice considers the architectural style, geometry, roofing base, and desired finish. The final recommendation depends on the project assessment.", es: "La elección considera el estilo arquitectónico, la geometría, la base de la cubierta y el acabado deseado. La recomendación final depende del análisis del proyecto." },
  "A J.SHINGLE atende outras regiões?": { en: "Does J.SHINGLE serve other regions?", es: "¿J.SHINGLE trabaja en otras regiones?" },
  "A área de atendimento ainda será confirmada. Informe cidade e estado no formulário para que a viabilidade seja analisada.": { en: "Our service area is still being confirmed. Enter your city and state in the form so we can assess feasibility.", es: "El área de servicio está pendiente de confirmación. Indique su ciudad y estado en el formulario para evaluar la viabilidad." },
  "Domo revestido de Shingle com deck e espaços de convivência na floresta.": { en: "Shingle-clad dome with a deck and gathering spaces in the forest.", es: "Domo revestido de Shingle con terraza y espacios de convivencia en el bosque." },
  "Domo de grande escala, da execução da cobertura aos ambientes internos.": { en: "Large-scale dome, from roof installation to interior spaces.", es: "Domo de gran escala, desde la instalación de la cubierta hasta los espacios interiores." },
  "Cobertura Shingle integrada à arquitetura e à vegetação do entorno.": { en: "Shingle roof integrated with the architecture and surrounding landscape.", es: "Cubierta Shingle integrada en la arquitectura y la vegetación del entorno." },
  "Domo de cobertura Shingle em meio à vegetação de Belém": { en: "Shingle-roofed dome surrounded by the vegetation of Belém", es: "Domo con cubierta Shingle entre la vegetación de Belém" },
  "Domo da floresta com cobertura Shingle e deck de madeira": { en: "Forest dome with Shingle roofing and a wooden deck", es: "Domo del bosque con cubierta Shingle y terraza de madera" },
  "Domo de cobertura Shingle em Sarapuí visto de frente": { en: "Front view of the Shingle-roofed dome in Sarapuí", es: "Vista frontal del domo con cubierta Shingle en Sarapuí" },
  "Domo da floresta": { en: "Forest Dome", es: "Domo del bosque" },
  "Belém · PA": { en: "Belém · PA", es: "Belém · PA" },
  "Sapucaí · MG": { en: "Sapucaí · MG", es: "Sapucaí · MG" },
  "Sarapuí · SP": { en: "Sarapuí · SP", es: "Sarapuí · SP" },
  "Prévia de obras": { en: "Project preview", es: "Vista previa de proyectos" },
  "Galeria de obras. Arraste ou deslize para explorar.": { en: "Project gallery. Drag or swipe to explore.", es: "Galería de proyectos. Arrastre o deslice para explorar." },
  "Navegação principal": { en: "Main navigation", es: "Navegación principal" },
  "Navegação mobile": { en: "Mobile navigation", es: "Navegación móvil" },
  "Navegação do rodapé": { en: "Footer navigation", es: "Navegación del pie de página" },
  "Navegação J.SHINGLE": { en: "J.SHINGLE navigation", es: "Navegación J.SHINGLE" },
  "Projetos da J.SHINGLE": { en: "J.SHINGLE projects", es: "Proyectos de J.SHINGLE" },
  "Domo geodésico com cobertura Shingle em área arborizada": { en: "Geodesic dome with Shingle roofing in a wooded area", es: "Domo geodésico con cubierta Shingle en una zona arbolada" },
  "Conheça os projetos por local e abra cada obra para ver sua galeria de fotografias.": { en: "Explore projects by location and open each one to view its photo gallery.", es: "Explore los proyectos por ubicación y abra cada obra para ver su galería de fotos." },
  "Explore os projetos por local e abra cada obra para ver sua galeria de fotografias.": { en: "Explore projects by location and open each one to view its photo gallery.", es: "Explore los proyectos por ubicación y abra cada obra para ver su galería de fotos." },
  "Obra": { en: "Project", es: "Obra" },
  "Galeria de fotografias": { en: "Photo gallery", es: "Galería de fotos" },
  "Ampliar:": { en: "Enlarge:", es: "Ampliar:" },
  "Fechar imagem ampliada": { en: "Close enlarged image", es: "Cerrar imagen ampliada" },
  "Foto ampliada": { en: "Enlarged photo", es: "Foto ampliada" },
  "Foto": { en: "Photo", es: "Foto" },
  "Belém · PA — Cobertura Shingle integrada à arquitetura e à vegetação do entorno.": { en: "Belém · PA — Shingle roofing integrated with the architecture and surrounding landscape.", es: "Belém · PA — Cubierta Shingle integrada en la arquitectura y la vegetación del entorno." },
  "Sapucaí · MG — Domo revestido de Shingle com deck e espaços de convivência na floresta.": { en: "Sapucaí · MG — A Shingle-clad dome with a deck and gathering spaces in the forest.", es: "Sapucaí · MG — Domo revestido de Shingle con terraza y espacios de convivencia en el bosque." },
  "Sarapuí · SP — Domo de grande escala, da execução da cobertura aos ambientes internos.": { en: "Sarapuí · SP — A large-scale dome, from roof installation to interior spaces.", es: "Sarapuí · SP — Domo de gran escala, desde la instalación de la cubierta hasta los espacios interiores." },
  "Esta página organiza os tópicos que deverão compor a política definitiva da J.SHINGLE. O texto atual não constitui aconselhamento jurídico.": { en: "This page outlines the topics for J.SHINGLE's final privacy policy. This text is not legal advice.", es: "Esta página organiza los temas de la política de privacidad definitiva de J.SHINGLE. El texto actual no constituye asesoramiento jurídico." },
};

let observer: MutationObserver | null = null;
let activeLanguage: Language = "pt-BR";
let translationQueued = false;
const pendingNodes = new Set<Node>();

function sourceText(value: string) {
  const leading = value.match(/^\s*/)?.[0] ?? "";
  const trailing = value.match(/\s*$/)?.[0] ?? "";
  const end = Math.max(leading.length, value.length - trailing.length);
  const core = value.slice(leading.length, end);
  return { leading, trailing, core };
}

const translationEntries = Object.entries(dictionary).sort(([a], [b]) => b.length - a.length);

function translateValue(value: string) {
  for (const [source, translations] of translationEntries) {
    const match = [source, translations.en, translations.es].find((candidate) => candidate && value.startsWith(candidate));
    if (!match) continue;
    const replacement = activeLanguage === "en-US" ? translations.en : activeLanguage === "es-ES" ? translations.es : source;
    return `${replacement}${value.slice(match.length)}`;
  }
  return value;
}

function translateTextNode(node: Text) {
  const value = node.nodeValue ?? "";
  if (!value.trim()) return;
  const parts = sourceText(value);
  const nextValue = `${parts.leading}${translateValue(parts.core)}${parts.trailing}`;
  if (nextValue !== value) node.nodeValue = nextValue;
}

function translateAttributes(element: Element) {
  for (const name of ["aria-label", "alt", "placeholder", "title"]) {
    const current = element.getAttribute(name);
    if (!current) continue;
    const translated = translateValue(current);
    if (translated !== current) element.setAttribute(name, translated);
  }
}

function translateSubtree(root: Node) {
  if (root.nodeType === Node.TEXT_NODE) { translateTextNode(root as Text); return; }
  if (root instanceof Element) translateAttributes(root);
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node instanceof Element) {
      translateAttributes(node);
    } else translateTextNode(node as Text);
  }
}

export function applySiteLanguage(language: Language) {
  activeLanguage = language;
  document.documentElement.lang = language;
  if (document.body) translateSubtree(document.body);
  if (observer || !document.body) return;
  observer = new MutationObserver((records) => {
    for (const record of records) {
      if (record.type === "characterData") pendingNodes.add(record.target);
      else record.addedNodes.forEach((node) => pendingNodes.add(node));
    }
    if (translationQueued) return;
    translationQueued = true;
    queueMicrotask(() => {
      translationQueued = false;
      pendingNodes.forEach(translateSubtree);
      pendingNodes.clear();
    });
  });
  observer.observe(document.body, { subtree: true, childList: true, characterData: true });
}

