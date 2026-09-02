export const content = {
  es: {
    a11y: {
      skip: "Saltar al contenido",
    },
    brand: {
      name: "Bienestar Digital",
      tag: "Recurso educativo",
    },
    nav: {
      primary: "Navegación principal",
      home: "Inicio",
      modules: "Módulos",
      credits: "Créditos y referencias",
      menu: "Abrir o cerrar el menú",
      language: "Selección de idioma",
    },
    langSwitch: {
      es: "Contenido en español",
      en: "Cambiar a inglés",
    },
    footer: {
      support: "Recurso académico desarrollado para el curso de Aplicaciones Multimedia, Ingeniería Multimedia, UNAD.",
      creditsLink: "Créditos y referencias",
      course: "Fase 2 · Versión beta",
    },
    home: {
      eyebrow: "Recurso multimedia educativo",
      title: "Bienestar digital para la vida universitaria",
      lead: "Información clara y actividades interactivas para reflexionar sobre tu relación con la tecnología y construir hábitos digitales más saludables.",
      startCta: "Comenzar",
      startHint: "Empieza por el Módulo 1 o elige el tema que quieras explorar.",
      modulesTitle: "Los cinco módulos",
      modulesIntro: "Cada módulo incluye dos pantallas educativas con una actividad interactiva.",
      guideTitle: "Cómo usar este recurso",
      guide: [
        "Avanza con los botones Anterior y Siguiente, o usa el menú Módulos para ir directamente a un tema.",
        "Cambia entre español e inglés en cualquier momento con el selector ES / EN.",
        "Tus respuestas y listas se guardan en tu navegador; no se envía información a ningún servidor.",
      ],
    },
    screen: {
      moduleWord: "Módulo",
      screenWord: "Pantalla",
      positionLabel: "Pantalla {n} de 10",
      objectiveLabel: "Objetivo de aprendizaje",
      sourcesLink: "Ver todas las referencias",
      sections: {
        intro: "Introducción",
        content: "Contenido educativo",
        example: "Ejemplo práctico",
        visual: "Recurso visual",
        interaction: "Actividad interactiva",
        reflection: "Retroalimentación y reflexión",
        sources: "Apoyo académico e institucional",
      },
      placeholder: "El contenido del módulo se integrará en la siguiente etapa de desarrollo.",
    },
    pager: {
      label: "Navegación entre pantallas",
      previous: "Anterior",
      next: "Siguiente",
      toHome: "Inicio",
      toCredits: "Créditos y referencias",
    },
    breadcrumb: {
      label: "Ruta de navegación",
      home: "Inicio",
    },
    modules: [
      {
        n: 1,
        title: "Comprender el bienestar digital",
        screens: [
          {
            id: "m1a",
            code: "1A",
            title: "¿Qué es el bienestar digital?",
            objective: "Comprender el concepto de bienestar digital y reconocer que implica una relación más saludable e intencionada con la tecnología, y no solo reducir el tiempo de pantalla.",
          },
          {
            id: "m1b",
            code: "1B",
            title: "Hábitos digitales y autoconocimiento",
            objective: "Identificar algunos hábitos digitales cotidianos y reflexionar sobre cómo pueden influir en la concentración, la organización y la sensación de control.",
          },
        ],
      },
      {
        n: 2,
        title: "Tiempo de pantalla y distracciones digitales",
        screens: [
          {
            id: "m2a",
            code: "2A",
            title: "Gestionar el tiempo de pantalla",
            objective: "Reconocer los factores que aumentan el tiempo de pantalla y aplicar estrategias simples para gestionarlo.",
          },
          {
            id: "m2b",
            code: "2B",
            title: "Notificaciones y distracciones digitales",
            objective: "Identificar distracciones digitales que pueden afectar la concentración y las actividades académicas.",
          },
        ],
      },
      {
        n: 3,
        title: "Uso saludable de la tecnología",
        screens: [
          {
            id: "m3a",
            code: "3A",
            title: "Sueño y dispositivos digitales",
            objective: "Identificar prácticas más saludables relacionadas con el uso de dispositivos digitales y el sueño.",
          },
          {
            id: "m3b",
            code: "3B",
            title: "Pausas físicas y mentales",
            objective: "Reconocer la importancia de incorporar pausas adecuadas durante el uso de la tecnología.",
          },
        ],
      },
      {
        n: 4,
        title: "Hábitos digitales responsables",
        screens: [
          {
            id: "m4a",
            code: "4A",
            title: "Privacidad y seguridad en línea",
            objective: "Reconocer prácticas básicas de privacidad y seguridad en línea.",
          },
          {
            id: "m4b",
            code: "4B",
            title: "Uso saludable de las redes sociales",
            objective: "Reflexionar sobre una participación responsable y equilibrada en las redes sociales.",
          },
        ],
      },
      {
        n: 5,
        title: "Equilibrio digital y gestión del tiempo",
        screens: [
          {
            id: "m5a",
            code: "5A",
            title: "Organizar el tiempo académico",
            objective: "Aplicar estrategias simples para organizar las actividades académicas y el tiempo digital.",
          },
          {
            id: "m5b",
            code: "5B",
            title: "Crear una rutina digital saludable",
            objective: "Identificar cambios prácticos que apoyen una rutina digital más saludable y equilibrada.",
          },
        ],
      },
    ],
    screenContent: {
      m1a: {
        intro: [
          "El bienestar digital se refiere a la forma en que la tecnología influye en tu vida diaria y en cómo te sientes. No consiste en usar menos el teléfono o el computador, sino en usarlos de una manera más consciente e intencionada.",
          "Las herramientas digitales pueden apoyar tu aprendizaje, tu comunicación, tu creatividad y tu organización. Al mismo tiempo, la manera en que las usamos puede afectar la atención, las emociones, la comodidad física, la vida social y las rutinas de estudio.",
        ],
        main: {
          lead: "El bienestar digital describe cómo las personas viven, gestionan y equilibran su uso de las tecnologías digitales. La investigación reciente en educación superior coincide en que no es un único aspecto, sino un conjunto de dimensiones relacionadas.",
          dimensions: [
            {
              name: "Equilibrio",
              text: "Combinar el tiempo frente a las pantallas con el estudio, el descanso, la actividad física y la vida social, sin que una parte desplace por completo a las demás.",
            },
            {
              name: "Control y autorregulación",
              text: "Poder decidir cuándo, cómo y para qué usas la tecnología, en lugar de responder de forma automática a cada notificación.",
            },
            {
              name: "Uso responsable y seguro",
              text: "Cuidar tu información personal y tu privacidad, y relacionarte con respeto con otras personas en los entornos digitales.",
            },
            {
              name: "Bienestar físico y emocional",
              text: "Reconocer cómo el uso de dispositivos influye en tu descanso, tu postura, tu concentración y tu estado de ánimo.",
            },
          ],
          note: "Estas cuatro categorías son una guía educativa inspirada en la literatura sobre bienestar digital; no constituyen una escala oficial de medición.",
        },
        example: {
          text: "Camila asiste a clases virtuales desde su computador, usa el teléfono para comunicarse y para redes sociales, y trabaja en sus entregas con herramientas digitales. En una semana de parciales nota que revisar el teléfono cada pocos minutos alarga sus tareas y le cuesta retomar la concentración.",
          note: "El objetivo no es dejar de usar la tecnología, sino reconocer en qué momentos apoya el estudio, el descanso y la organización, y en cuáles los interrumpe.",
        },
        visual: {
          file: "m1a-balance.svg",
          alt: "Ilustración de una persona estudiante junto a una balanza, rodeada de símbolos de estudio, comunicación, descanso y tecnología.",
          caption: "El bienestar digital busca un equilibrio entre el estudio, la comunicación, el descanso y el uso de la tecnología.",
        },
        interaction: {
          type: "conceptCards",
          instructions: "Selecciona cada tarjeta para ver una explicación breve y un ejemplo.",
          exampleLabel: "Ejemplo",
          expandLabel: "Mostrar explicación",
          collapseLabel: "Ocultar explicación",
          cards: [
            {
              name: "Equilibrio",
              icon: "balance",
              explanation: "Distribuir tu tiempo entre las pantallas y otras actividades importantes, como dormir, moverte, ver a tus amigos o estudiar sin interrupciones.",
              example: "Después de dos horas de estudio en el computador, sales a caminar y dejas el teléfono cargando en otra habitación.",
            },
            {
              name: "Autorregulación",
              icon: "regulation",
              explanation: "Elegir de forma consciente cuándo y para qué abres cada aplicación, en lugar de hacerlo por costumbre.",
              example: "Silencias las notificaciones mientras redactas un trabajo y revisas los mensajes en una pausa que planificaste.",
            },
            {
              name: "Uso responsable",
              icon: "shield",
              explanation: "Proteger tu privacidad y tu información personal, y tratar con respeto a las demás personas en los espacios digitales.",
              example: "Revisas quién puede ver tus publicaciones y piensas antes de compartir datos personales en un grupo.",
            },
            {
              name: "Bienestar",
              icon: "wellbeing",
              explanation: "Prestar atención a cómo el uso de dispositivos afecta tu descanso, tu cuerpo y tus emociones.",
              example: "Notas que mirar el teléfono en la cama te quita horas de sueño y decides dejarlo fuera del cuarto.",
            },
          ],
        },
        reflection: {
          prompt: "¿En qué momentos sientes que la tecnología mejora tu día y en cuáles puede dificultarlo?",
        },
        support: {
          text: "Este contenido se apoya en el marco de bienestar digital de Jisc y en investigaciones recientes sobre bienestar digital en educación superior, que describen este concepto como multidimensional.",
          refs: [
            "Jisc. Digital wellbeing (Building digital capability).",
            "Mohd Bahar et al. (2026). BMC Medical Education.",
            "Appianing et al. (2026). Frontiers in Psychiatry.",
          ],
        },
      },
      m1b: {
        intro: [
          "Los hábitos digitales son acciones que repetimos tantas veces que se vuelven casi automáticas. Muchas veces ni siquiera notamos que las hacemos.",
          "Algunos ejemplos frecuentes son revisar las notificaciones mientras estudias, alternar entre una tarea y las redes sociales, seguir deslizando la pantalla más tiempo del previsto, usar el teléfono muy tarde en la noche o que te cueste decidir cuándo desconectarte. Reconocerlos no significa que causen un problema de salud: es solo información útil sobre tu día.",
        ],
        main: {
          lead: "El autoconocimiento consiste en observar cuatro cosas sencillas sobre tus hábitos:",
          dimensions: [
            { name: "Qué haces", text: "Por ejemplo, abrir una aplicación o tomar el teléfono." },
            { name: "Cuándo lo haces", text: "Durante el estudio, antes de dormir, en una pausa." },
            { name: "Por qué lo haces", text: "Aburrimiento, costumbre, una necesidad real o ansiedad por responder." },
            { name: "Cómo afecta tu objetivo", text: "Terminaste la tarea, la retrasaste, descansaste mejor o peor." },
          ],
          note: "En la investigación en educación superior, esta observación se relaciona con la autorregulación digital: la capacidad de orientar tu propio uso de la tecnología. Una revisión reciente señala que las dificultades con la autorregulación digital fueron la fuente de efectos negativos más mencionada en los estudios revisados.",
        },
        example: {
          text: "Daniel se sienta a redactar un informe. Cada vez que recibe un mensaje, abre el chat, responde y luego mira las redes sociales unos minutos. Cuando vuelve al informe, necesita releer lo que había escrito para recordar dónde iba.",
          note: "Identificar el patrón —interrumpir la tarea cada vez que llega un mensaje— es el primer paso para decidir, con calma, si quiere cambiar ese hábito o no.",
        },
        visual: {
          file: "m1b-awareness.svg",
          alt: "Ilustración de una persona estudiante mirando su teléfono, con pequeños símbolos de notificaciones, tareas, tiempo y reflexión alrededor.",
          caption: "Observar nuestros hábitos digitales —qué, cuándo y por qué— nos ayuda a decidir si queremos ajustarlos.",
        },
        interaction: {
          type: "habitsSelfCheck",
          instructions: "Marca las afirmaciones con las que te identifiques habitualmente. No es una prueba ni un diagnóstico: es una actividad de reflexión personal.",
          savedNote: "Tus respuestas se guardan solo en este navegador; puedes borrarlas con «Reiniciar».",
          legend: "Afirmaciones sobre hábitos digitales",
          statements: [
            "Reviso notificaciones mientras estoy estudiando.",
            "Cambio con frecuencia entre una tarea y otras aplicaciones.",
            "Uso el dispositivo más tiempo del que había planeado.",
            "Uso pantallas hasta muy poco antes de dormir.",
            "Se me olvida hacer pausas cuando llevo mucho rato frente a la pantalla.",
            "Tomo el teléfono de forma automática, sin una razón concreta.",
            "Me cuesta concentrarme cuando espero o escucho notificaciones.",
            "Me resulta difícil elegir momentos para desconectarme.",
          ],
          countLabel: "{n} de {total} seleccionadas",
          resultLabel: "Ver resultado",
          resetLabel: "Reiniciar",
          reflectionLabel: "Para reflexionar",
          reflectionPrompt: "¿Qué hábito digital te gustaría observar con más atención durante esta semana?",
          results: {
            few: {
              title: "Identificaste pocos hábitos",
              body: "Reconociste algunos hábitos que quizá quieras observar. Incluso los patrones pequeños son útiles para notar cómo usas la tecnología.",
            },
            several: {
              title: "Identificaste varios hábitos",
              body: "Reconociste varios hábitos que a veces compiten por tu atención. Puedes elegir uno que te gustaría observar durante esta semana.",
            },
            many: {
              title: "Identificaste bastantes hábitos",
              body: "Notaste varios hábitos digitales que se repiten. En lugar de cambiarlo todo a la vez, puedes empezar por una sola situación en la que te gustaría sentir más control.",
            },
          },
        },
        reflection: {
          prompt: "Piensa en una situación concreta (una clase, una noche, una tarea). ¿Qué pequeño cambio te gustaría probar en ella?",
        },
        support: {
          text: "Esta actividad se basa en investigaciones sobre bienestar digital y autorregulación en educación superior. Observar los hábitos es un punto de partida para la reflexión; las relaciones que describen los estudios no implican causas directas.",
          refs: [
            "Mohd Bahar et al. (2026). BMC Medical Education.",
            "Appianing et al. (2026). Frontiers in Psychiatry.",
            "Jisc. Digital wellbeing (Building digital capability).",
          ],
        },
      },
    },
    credits: {
      eyebrow: "Documentación del proyecto",
      title: "Créditos y referencias",
      lead: "Esta sección reúne las fuentes académicas e institucionales y la atribución de los recursos visuales utilizados en el recurso. Se completa progresivamente a medida que se desarrolla cada módulo.",
      pending: "Las referencias de este apartado se documentarán durante el desarrollo de los módulos correspondientes.",
      sections: [
        {
          id: "academic",
          title: "Fuentes académicas",
          items: [
            "Appianing, J., Quansah, F. y Amoako, R. (2026). Development and validation of the digital well-being scale using university students. <em>Frontiers in Psychiatry, 17</em>, Artículo 1853998. https://doi.org/10.3389/fpsyt.2026.1853998",
            "Mohd Bahar, F. H., Roslan, N. S., Ping, N. P. T., Abdul Nasir, N. A., Ibrahim, M. S., Adam, S. K., Ahmad Razali, S. y Yusoff, M. S. B. (2026). The digital well-being among learners in higher education: A scoping review. <em>BMC Medical Education, 26</em>(1), Artículo 1146. https://doi.org/10.1186/s12909-026-09370-w",
          ],
        },
        {
          id: "institutional",
          title: "Fuentes institucionales",
          items: [
            "Jisc. (s. f.). <em>Digital wellbeing</em>. Building digital capability. Recuperado el 2 de septiembre de 2026, de https://digitalcapability.jisc.ac.uk/what-is-digital-capability/digital-wellbeing/",
          ],
        },
        {
          id: "images",
          title: "Fuentes de imágenes e ilustraciones",
          items: [
            "Ilustraciones originales del proyecto en formato SVG: <em>home-balance.svg</em>, <em>m1a-balance.svg</em> y <em>m1b-awareness.svg</em>. Creadas para este recurso educativo; no se emplean bancos de imágenes ni recursos de terceros.",
          ],
        },
        {
          id: "multimedia",
          title: "Recursos multimedia",
          items: [],
        },
        {
          id: "external",
          title: "Recursos y activos externos",
          items: [],
        },
      ],
      toolsTitle: "Tecnología utilizada",
      tools: "HTML5, CSS3 y JavaScript sin frameworks. Publicado con GitHub Pages.",
    },
    notFound: {
      title: "Página no encontrada",
      body: "La dirección solicitada no existe en este recurso.",
      back: "Volver al inicio",
    },
  },

  en: {
    a11y: {
      skip: "Skip to content",
    },
    brand: {
      name: "Digital Wellbeing",
      tag: "Educational resource",
    },
    nav: {
      primary: "Main navigation",
      home: "Home",
      modules: "Modules",
      credits: "Credits & references",
      menu: "Open or close the menu",
      language: "Language selection",
    },
    langSwitch: {
      es: "Switch to Spanish",
      en: "Content in English",
    },
    footer: {
      support: "Academic resource developed for the Multimedia Applications course, Multimedia Engineering, UNAD.",
      creditsLink: "Credits & references",
      course: "Phase 2 · Beta version",
    },
    home: {
      eyebrow: "Educational multimedia resource",
      title: "Digital wellbeing for university life",
      lead: "Clear information and interactive activities to reflect on your relationship with technology and build healthier digital habits.",
      startCta: "Start",
      startHint: "Begin with Module 1 or choose the topic you want to explore.",
      modulesTitle: "The five modules",
      modulesIntro: "Each module includes two educational screens with an interactive activity.",
      guideTitle: "How to use this resource",
      guide: [
        "Move through the screens with the Previous and Next buttons, or use the Modules menu to jump straight to a topic.",
        "Switch between Spanish and English at any time with the ES / EN selector.",
        "Your answers and lists are saved in your browser; no information is sent to any server.",
      ],
    },
    screen: {
      moduleWord: "Module",
      screenWord: "Screen",
      positionLabel: "Screen {n} of 10",
      objectiveLabel: "Learning objective",
      sourcesLink: "See all references",
      sections: {
        intro: "Introduction",
        content: "Educational content",
        example: "Practical example",
        visual: "Visual resource",
        interaction: "Interactive activity",
        reflection: "Feedback and reflection",
        sources: "Academic and institutional support",
      },
      placeholder: "Module content will be integrated during the next development stage.",
    },
    pager: {
      label: "Screen navigation",
      previous: "Previous",
      next: "Next",
      toHome: "Home",
      toCredits: "Credits & references",
    },
    breadcrumb: {
      label: "Breadcrumb",
      home: "Home",
    },
    modules: [
      {
        n: 1,
        title: "Understanding Digital Wellbeing",
        screens: [
          {
            id: "m1a",
            code: "1A",
            title: "What is Digital Wellbeing?",
            objective: "To understand the concept of digital wellbeing and recognise that it involves a healthier and more intentional relationship with technology, rather than simply reducing screen time.",
          },
          {
            id: "m1b",
            code: "1B",
            title: "Digital Habits and Self-Awareness",
            objective: "To identify some everyday digital habits and reflect on how they may influence concentration, organisation and the sense of control.",
          },
        ],
      },
      {
        n: 2,
        title: "Screen Time and Digital Distractions",
        screens: [
          {
            id: "m2a",
            code: "2A",
            title: "Managing Screen Time",
            objective: "To recognize factors that increase screen time and apply simple strategies to manage it.",
          },
          {
            id: "m2b",
            code: "2B",
            title: "Notifications and Digital Distractions",
            objective: "To identify digital distractions that may affect concentration and academic activities.",
          },
        ],
      },
      {
        n: 3,
        title: "Healthy Use of Technology",
        screens: [
          {
            id: "m3a",
            code: "3A",
            title: "Sleep and Digital Devices",
            objective: "To identify healthier practices related to the use of digital devices and sleep.",
          },
          {
            id: "m3b",
            code: "3B",
            title: "Physical and Mental Breaks",
            objective: "To recognize the importance of incorporating appropriate breaks during technology use.",
          },
        ],
      },
      {
        n: 4,
        title: "Responsible Digital Habits",
        screens: [
          {
            id: "m4a",
            code: "4A",
            title: "Privacy and Online Safety",
            objective: "To recognize basic privacy and online safety practices.",
          },
          {
            id: "m4b",
            code: "4B",
            title: "Healthy Social Media Use",
            objective: "To reflect on responsible and balanced participation in social media environments.",
          },
        ],
      },
      {
        n: 5,
        title: "Digital Balance and Time Management",
        screens: [
          {
            id: "m5a",
            code: "5A",
            title: "Organizing Academic Time",
            objective: "To apply simple strategies for organizing academic activities and digital time.",
          },
          {
            id: "m5b",
            code: "5B",
            title: "Creating a Healthy Digital Routine",
            objective: "To identify practical changes that can support a healthier and more balanced digital routine.",
          },
        ],
      },
    ],
    screenContent: {
      m1a: {
        intro: [
          "Digital wellbeing is about how technology affects your daily life and how you feel. It is not about using your phone or laptop less, but about using them in a more conscious and intentional way.",
          "Digital tools can support your learning, communication, creativity and organisation. At the same time, the way we use them can affect our attention, emotions, physical comfort, social life and study routines.",
        ],
        main: {
          lead: "Digital wellbeing describes how people experience, manage and balance their use of digital technologies. Recent research in higher education agrees that it is not a single thing, but a set of related dimensions.",
          dimensions: [
            {
              name: "Balance",
              text: "Combining screen time with study, rest, physical activity and social life, so that one part does not completely push out the others.",
            },
            {
              name: "Control and self-regulation",
              text: "Being able to decide when, how and why you use technology, instead of reacting automatically to every notification.",
            },
            {
              name: "Responsible and safe use",
              text: "Looking after your personal information and privacy, and treating other people with respect in digital spaces.",
            },
            {
              name: "Physical and emotional wellbeing",
              text: "Noticing how device use affects your rest, posture, concentration and mood.",
            },
          ],
          note: "These four categories are an educational guide inspired by the digital wellbeing literature; they are not an official measurement scale.",
        },
        example: {
          text: "Camila attends online classes on her laptop, uses her phone for messaging and social media, and works on her assignments with digital tools. During an exam week she notices that checking her phone every few minutes makes her tasks longer and makes it harder to regain focus.",
          note: "The goal is not to stop using technology, but to notice when it supports study, rest and organisation, and when it interrupts them.",
        },
        visual: {
          file: "m1a-balance.svg",
          alt: "Illustration of a student next to a balance scale, surrounded by symbols of study, communication, rest and technology.",
          caption: "Digital wellbeing is about finding a balance between study, communication, rest and the use of technology.",
        },
        interaction: {
          type: "conceptCards",
          instructions: "Select each card to see a short explanation and an example.",
          exampleLabel: "Example",
          expandLabel: "Show explanation",
          collapseLabel: "Hide explanation",
          cards: [
            {
              name: "Balance",
              icon: "balance",
              explanation: "Spreading your time between screens and other important activities, such as sleeping, moving, seeing friends or studying without interruptions.",
              example: "After two hours of study on your laptop, you go for a walk and leave your phone charging in another room.",
            },
            {
              name: "Self-regulation",
              icon: "regulation",
              explanation: "Consciously choosing when and why you open each app, instead of doing it out of habit.",
              example: "You mute notifications while writing an assignment and check messages during a break you planned.",
            },
            {
              name: "Responsible use",
              icon: "shield",
              explanation: "Protecting your privacy and personal information, and treating other people with respect in digital spaces.",
              example: "You review who can see your posts and think before sharing personal details in a group.",
            },
            {
              name: "Wellbeing",
              icon: "wellbeing",
              explanation: "Paying attention to how device use affects your rest, your body and your emotions.",
              example: "You notice that looking at your phone in bed costs you hours of sleep, and you decide to leave it outside the bedroom.",
            },
          ],
        },
        reflection: {
          prompt: "When do you feel technology improves your day, and when can it make things more difficult?",
        },
        support: {
          text: "This content draws on the Jisc digital wellbeing framework and recent research on digital wellbeing in higher education, which describe the concept as multidimensional.",
          refs: [
            "Jisc. Digital wellbeing (Building digital capability).",
            "Mohd Bahar et al. (2026). BMC Medical Education.",
            "Appianing et al. (2026). Frontiers in Psychiatry.",
          ],
        },
      },
      m1b: {
        intro: [
          "Digital habits are actions we repeat so often that they become almost automatic. Often we do not even notice them.",
          "Common examples include checking notifications while studying, switching between a task and social media, scrolling for longer than intended, using devices late at night, or finding it hard to decide when to disconnect. Noticing them does not mean they cause a health problem: it is simply useful information about your day.",
        ],
        main: {
          lead: "Self-awareness means noticing four simple things about your habits:",
          dimensions: [
            { name: "What you do", text: "For example, opening an app or picking up your phone." },
            { name: "When you do it", text: "While studying, before sleeping, during a break." },
            { name: "Why you do it", text: "Boredom, habit, a real need, or worry about replying." },
            { name: "How it affects your goal", text: "You finished the task, delayed it, rested better or worse." },
          ],
          note: "In higher education research, this kind of noticing is linked to digital self-regulation: the ability to guide your own use of technology. A recent review reports that difficulties with digital self-regulation were the most frequently mentioned source of negative outcomes in the studies it examined.",
        },
        example: {
          text: "Daniel sits down to write a report. Each time a message arrives, he opens the chat, replies, and then looks at social media for a few minutes. When he goes back to the report, he has to reread what he had written to remember where he was.",
          note: "Identifying the pattern —interrupting the task every time a message arrives— is the first step toward calmly deciding whether he wants to change that habit or not.",
        },
        visual: {
          file: "m1b-awareness.svg",
          alt: "Illustration of a student looking at their phone, with small symbols of notifications, tasks, time and reflection around them.",
          caption: "Noticing our digital habits —what, when and why— helps us decide whether we want to adjust them.",
        },
        interaction: {
          type: "habitsSelfCheck",
          instructions: "Tick the statements you identify with as regular habits. This is not a test or a diagnosis: it is a personal reflection activity.",
          savedNote: "Your answers are saved only in this browser; you can clear them with “Reset”.",
          legend: "Statements about digital habits",
          statements: [
            "I check notifications while I am studying.",
            "I frequently switch between a task and other apps.",
            "I use my device for longer than I had planned.",
            "I use screens until shortly before going to sleep.",
            "I forget to take breaks when I have been in front of a screen for a long time.",
            "I pick up my phone automatically, without a specific reason.",
            "I find it hard to concentrate when I am waiting for or hearing notifications.",
            "I find it difficult to choose moments to disconnect.",
          ],
          countLabel: "{n} of {total} selected",
          resultLabel: "See result",
          resetLabel: "Reset",
          reflectionLabel: "To reflect on",
          reflectionPrompt: "Which digital habit would you like to pay more attention to this week?",
          results: {
            few: {
              title: "You identified a few habits",
              body: "You recognised a few habits you may want to observe. Even small patterns are useful for noticing how you use technology.",
            },
            several: {
              title: "You identified several habits",
              body: "You recognised several habits that sometimes compete for your attention. You could choose one to observe this week.",
            },
            many: {
              title: "You identified quite a few habits",
              body: "You noticed several digital habits that repeat. Instead of changing everything at once, you could start with a single situation where you would like to feel more in control.",
            },
          },
        },
        reflection: {
          prompt: "Think of a specific situation (a class, an evening, an assignment). What small change would you like to try in it?",
        },
        support: {
          text: "This activity draws on research on digital wellbeing and self-regulation in higher education. Noticing habits is a starting point for reflection; the relationships described in these studies do not imply direct causes.",
          refs: [
            "Mohd Bahar et al. (2026). BMC Medical Education.",
            "Appianing et al. (2026). Frontiers in Psychiatry.",
            "Jisc. Digital wellbeing (Building digital capability).",
          ],
        },
      },
    },
    credits: {
      eyebrow: "Project documentation",
      title: "Credits & references",
      lead: "This section brings together the academic and institutional sources and the attribution of the visual resources used in this resource. It is completed progressively as each module is developed.",
      pending: "The references for this section will be documented while the corresponding modules are developed.",
      sections: [
        {
          id: "academic",
          title: "Academic sources",
          items: [
            "Appianing, J., Quansah, F., & Amoako, R. (2026). Development and validation of the digital well-being scale using university students. <em>Frontiers in Psychiatry, 17</em>, Article 1853998. https://doi.org/10.3389/fpsyt.2026.1853998",
            "Mohd Bahar, F. H., Roslan, N. S., Ping, N. P. T., Abdul Nasir, N. A., Ibrahim, M. S., Adam, S. K., Ahmad Razali, S., & Yusoff, M. S. B. (2026). The digital well-being among learners in higher education: A scoping review. <em>BMC Medical Education, 26</em>(1), Article 1146. https://doi.org/10.1186/s12909-026-09370-w",
          ],
        },
        {
          id: "institutional",
          title: "Institutional sources",
          items: [
            "Jisc. (n.d.). <em>Digital wellbeing</em>. Building digital capability. Retrieved September 2, 2026, from https://digitalcapability.jisc.ac.uk/what-is-digital-capability/digital-wellbeing/",
          ],
        },
        {
          id: "images",
          title: "Image and illustration sources",
          items: [
            "Original project illustrations in SVG format: <em>home-balance.svg</em>, <em>m1a-balance.svg</em> and <em>m1b-awareness.svg</em>. Created for this educational resource; no stock image banks or third-party resources are used.",
          ],
        },
        {
          id: "multimedia",
          title: "Multimedia resources",
          items: [],
        },
        {
          id: "external",
          title: "External resources and assets",
          items: [],
        },
      ],
      toolsTitle: "Technology used",
      tools: "HTML5, CSS3 and framework-free JavaScript. Published with GitHub Pages.",
    },
    notFound: {
      title: "Page not found",
      body: "The requested address does not exist in this resource.",
      back: "Back to home",
    },
  },
};
