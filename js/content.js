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
      m2a: {
        intro: [
          "En la universidad es normal pasar muchas horas frente a una pantalla por razones necesarias: clases virtuales, búsqueda de información, trabajos, comunicación con compañeros y también descanso o entretenimiento.",
          "Por eso, el total de horas de pantalla, por sí solo, no dice si la tecnología te está ayudando o interrumpiendo una actividad. Lo que más importa es el contexto: para qué usas el dispositivo, con qué intención y cuánto control sientes que tienes.",
        ],
        main: {
          lead: "Cuando pienses en tu uso de pantallas, puedes hacerte cuatro preguntas sencillas:",
          dimensions: [
            { name: "Propósito", text: "¿Para qué estoy usando este dispositivo ahora mismo?" },
            { name: "Tiempo", text: "¿Llevo más tiempo del que había pensado?" },
            { name: "Interferencia", text: "¿Este uso está interrumpiendo otra tarea o rutina?" },
            { name: "Control", text: "¿Puedo parar, hacer una pausa o cambiar de actividad cuando lo decido?" },
          ],
          extra: [
            "Las estadísticas de uso que ofrecen los dispositivos pueden servir como información para observar patrones, pero conviene interpretarlas junto con el contexto de cada día.",
          ],
          note: "Son categorías de reflexión, no una escala de diagnóstico. No existe un número único de horas diarias de pantalla que sea saludable o no para todas las personas.",
        },
        example: {
          text: "Mariana dedica la mañana a una clase virtual y a avanzar un trabajo en el computador. Por la tarde, cada vez que se bloquea con una idea, abre las redes sociales «un momento». Esas pausas breves se repiten y su sesión de estudio termina alargándose casi una hora más de lo previsto.",
          note: "El uso académico de la pantalla era necesario; lo que se acumuló fueron las interrupciones no planificadas. Notar esa diferencia es más útil que contar solo las horas.",
        },
        visual: {
          file: "m2a-screen-time.svg",
          alt: "Ilustración de una persona estudiante con un portátil y un teléfono, junto a elementos que representan el tiempo de estudio, el uso intencionado y las pausas.",
          caption: "Gestionar el tiempo de pantalla tiene que ver con el para qué, el cuándo y el control, más que con el total de horas.",
        },
        interaction: {
          type: "frequencyQuiz",
          instructions: "Elige la opción que mejor describa tu experiencia habitual. No es una prueba: es una guía para reflexionar.",
          savedNote: "Tus respuestas se guardan solo en este navegador; puedes borrarlas con «Reiniciar».",
          options: ["Nunca", "Rara vez", "A veces", "A menudo"],
          questions: [
            "Sigo usando una aplicación más tiempo del que había planeado.",
            "Reviso contenidos ajenos a la tarea mientras estudio.",
            "Pierdo la noción del tiempo mientras uso el dispositivo.",
            "Me cuesta hacer una pausa cuando decido que quiero parar.",
            "Uso el dispositivo sin tener claro para qué lo abrí.",
            "Empiezo a estudiar sin reservar un rato concreto de concentración para una sola tarea.",
          ],
          progressLabel: "{n} de {total} respondidas",
          incompleteLabel: "Responde todas las preguntas para ver el resultado.",
          resultLabel: "Ver resultado",
          resetLabel: "Reiniciar",
          strategiesTitle: "Estrategias para probar",
          strategies: [
            "Antes de abrir una aplicación o el dispositivo, define para qué lo vas a usar y por cuánto tiempo.",
            "Reserva un rato concreto para concentrarte en una sola tarea académica, sin cambiar de actividad.",
            "Reduce temporalmente el acceso a una distracción que ya conoces mientras haces esa tarea.",
          ],
          reflectionLabel: "Para reflexionar",
          reflectionPrompt: "Elige una situación de la lista y obsérvala durante esta semana: ¿cuándo aparece y qué la desencadena?",
          results: {
            low: {
              title: "Tu uso parece bastante intencional",
              body: "Tus respuestas sugieren que, en general, decides tu uso de pantallas de forma consciente. Aun así, puede haber alguna situación puntual que valga la pena observar.",
            },
            mid: {
              title: "Hay algunos momentos que puedes observar",
              body: "Identificaste varios momentos en los que el uso de pantallas puede alargarse o interrumpir otra actividad. Elige una sola situación para observar durante esta semana.",
            },
            high: {
              title: "Varias situaciones compiten con tu objetivo",
              body: "Notaste varias situaciones en las que las actividades digitales pueden competir con lo que querías hacer. En lugar de cambiarlo todo a la vez, elige un pequeño ajuste para probar.",
            },
          },
        },
        reflection: {
          prompt: "¿Qué momento de tu uso diario de pantallas te gustaría hacer un poco más intencional?",
        },
        support: {
          text: "Este contenido se apoya en investigación reciente sobre distracción digital y sobre herramientas de autocontrol digital, que describen el uso de pantallas como algo que depende de varios factores y presentan las estrategias como opciones para probar, no como soluciones garantizadas.",
          refs: [
            "Martin et al. (2025). Educational Technology Research and Development.",
            "Biedermann et al. (2021). Journal of Computer Assisted Learning.",
          ],
        },
      },
      m2b: {
        intro: [
          "Una distracción digital ocurre cuando pierdes el foco de la tarea académica porque tu atención se va hacia contenido digital que no tiene relación con ella: mensajes, alertas de redes sociales, correos, notificaciones de aplicaciones, pestañas del navegador o revisar el teléfono de forma automática.",
          "Además, una notificación no siempre necesita abrirse para competir por tu atención: el aviso en sí ya puede interrumpir la concentración.",
        ],
        main: {
          lead: "Las causas de la distracción digital suelen agruparse en tres tipos:",
          dimensions: [
            { name: "Tecnología", text: "Avisos, aplicaciones y mensajes, y el acceso fácil a contenido que no tiene relación con la tarea." },
            { name: "Factores personales", text: "La costumbre, la curiosidad, el aburrimiento o las ganas de comprobar algo." },
            { name: "Entorno", text: "Tener varios dispositivos a la vez, el lugar de estudio o las interrupciones y expectativas de las personas alrededor." },
          ],
          note: "Esta forma de ordenar las causas —tecnología, factores personales y entorno— proviene de una revisión reciente sobre distracción digital en educación. Como intervienen varios factores, gestionarla suele requerir más de una estrategia.",
        },
        example: {
          text: "Sofía está redactando un trabajo. Llega la notificación de un mensaje y lo abre para responder rápido. Enseguida entra un correo. Antes de darse cuenta, ha pasado por la app de mensajes, el correo y una red social, y cuando vuelve al documento necesita releer el último párrafo para retomar el hilo.",
          note: "El ejemplo muestra cómo se interrumpe una tarea, no busca señalar a quien estudia. A casi todo el mundo le pasa.",
        },
        visual: {
          file: "m2b-distractions.svg",
          alt: "Ilustración de una persona estudiante frente a un portátil, con pequeños elementos de notificación alrededor y una zona central que representa la atención concentrada.",
          caption: "Varias señales digitales compiten por la atención mientras se estudia; proteger un espacio de concentración ayuda a sostener la tarea.",
        },
        interaction: {
          type: "scenarios",
          instructions: "En cada situación, elige la respuesta que probarías. Después verás una explicación. No siempre hay una única respuesta perfecta.",
          savedNote: "Tus respuestas se guardan solo en este navegador; puedes borrarlas con «Reiniciar».",
          progressLabel: "{n} de {total} situaciones respondidas",
          resetLabel: "Reiniciar",
          scenarios: [
            {
              situation: "Estás escribiendo un trabajo y aparece la notificación de un mensaje que no es urgente.",
              options: [
                {
                  text: "Silencio las notificaciones no esenciales durante este rato de trabajo.",
                  feedback: "Reduce la cantidad de avisos que compiten por tu atención. En un estudio experimental, recibir notificaciones bastó para afectar el rendimiento en una tarea de atención, aunque no se tocara el teléfono.",
                },
                {
                  text: "Miro el mensaje un segundo para saber de qué es y sigo.",
                  feedback: "Aunque parezca rápido, el aviso ya interrumpió la tarea y retomar el punto donde estabas cuesta un esfuerzo extra. Puede tener sentido si de verdad esperas algo importante.",
                },
                {
                  text: "Respondo ahora para quitármelo de encima.",
                  feedback: "Responder de inmediato suele abrir la puerta a más mensajes y a cambiar de aplicación. Si no es urgente, fijar un momento para revisar los mensajes protege mejor la concentración.",
                },
              ],
            },
            {
              situation: "Estás leyendo material académico con varias pestañas del navegador y redes sociales abiertas de antes.",
              options: [
                {
                  text: "Cierro las pestañas que no necesito para esta lectura.",
                  feedback: "Quita accesos directos a la distracción y deja a la vista solo lo relacionado con la tarea, lo que facilita mantener el foco.",
                },
                {
                  text: "Las dejo abiertas; no las estoy mirando.",
                  feedback: "Tenerlas a un clic facilita el cambio automático de tarea, sobre todo en pausas o momentos de bloqueo. No siempre distraen, pero aumentan la probabilidad.",
                },
                {
                  text: "Me permito revisarlas cada vez que termino una página.",
                  feedback: "Puede servir como recompensa breve, aunque a veces esas pausas se alargan. Si lo pruebas, decide de antemano cuánto durará la pausa.",
                },
              ],
            },
            {
              situation: "Durante una clase virtual, el chat del grupo se anima con una conversación que no es sobre la clase.",
              options: [
                {
                  text: "Silencio ese chat hasta que termine la clase.",
                  feedback: "Protege la atención para la clase sin cerrar la conversación, que puedes retomar después.",
                },
                {
                  text: "Sigo la conversación mientras escucho la clase.",
                  feedback: "Atender a dos cosas a la vez reparte la atención y es fácil perderse partes de la explicación. Puede ser asumible si la clase es de repaso y el mensaje es importante.",
                },
                {
                  text: "Contesto rápido y vuelvo a la clase.",
                  feedback: "Una respuesta corta parece inofensiva, pero suele encadenar más respuestas. Avisar de que responderás al terminar la clase suele funcionar mejor.",
                },
              ],
            },
            {
              situation: "Coges el teléfono para leer un mensaje de un compañero sobre un trabajo y ves que hay otras notificaciones esperando.",
              options: [
                {
                  text: "Leo solo el mensaje del trabajo y dejo el resto para más tarde.",
                  feedback: "Mantienes el motivo por el que cogiste el teléfono y evitas que otras notificaciones decidan el siguiente paso.",
                },
                {
                  text: "Aprovecho para revisar también las demás.",
                  feedback: "Es la reacción más habitual, y por eso las notificaciones «arrastran»: una lleva a otra. Revisar solo lo que buscabas mantiene el control de la situación.",
                },
                {
                  text: "Dejo el teléfono boca abajo y lo miro en la siguiente pausa.",
                  feedback: "Aplaza la interrupción por completo. Funciona bien si de verdad no esperas nada urgente en ese momento.",
                },
              ],
            },
          ],
          summaryTitle: "Resumen",
          summary: "Has practicado varias formas de responder a las interrupciones digitales. La estrategia más útil depende de la tarea y de la situación; no hay una que sirva siempre. Piensa en cuál te resultaría más fácil de probar.",
          reflectionLabel: "Para reflexionar",
          reflectionPrompt: "De las estrategias que probaste, ¿cuál te gustaría usar la próxima vez que estudies?",
        },
        reflection: {
          prompt: "¿Qué distracción digital aparece con más frecuencia cuando estás estudiando?",
        },
        support: {
          text: "Este contenido se apoya en investigación sobre distracción digital en educación y en un estudio experimental sobre el efecto de las notificaciones en la atención. Los resultados de laboratorio no significan que cada notificación cause un mal resultado académico; muestran que los avisos pueden competir por la atención.",
          refs: [
            "Martin et al. (2025). Educational Technology Research and Development.",
            "Stothart et al. (2015). Journal of Experimental Psychology: Human Perception and Performance.",
          ],
        },
      },
      m3a: {
        intro: [
          "Por la noche, los dispositivos digitales pueden tener usos útiles: estudiar, comunicarte, entretenerte, leer u organizar el día siguiente. Esta pantalla no busca presentar el uso nocturno del teléfono como algo automáticamente negativo.",
          "Lo que ocurre cerca de la hora de dormir puede depender de varios factores: cuánto se alarga la actividad, si retrasa la hora prevista para acostarte, el tipo de contenido, si siguen llegando mensajes o notificaciones, y si tienes un momento para ir bajando el ritmo. La investigación sobre pantallas y sueño es compleja y no se reduce solo a la «luz azul».",
        ],
        main: {
          lead: "Para observar tu rutina digital nocturna, puedes fijarte en cuatro aspectos:",
          dimensions: [
            { name: "Tiempo e intención", text: "¿La actividad se alargó más de lo que habías planeado?" },
            { name: "Estimulación", text: "¿La actividad era tranquila o seguía pidiendo tu atención?" },
            { name: "Interrupciones", text: "¿Siguen llegando mensajes o notificaciones cuando quieres descansar?" },
            { name: "Rutina de transición", text: "¿Hay algún momento entre la actividad digital activa y el intento de dormir?" },
          ],
          extra: [
            "En población universitaria, algunos estudios observan que usar dispositivos justo antes de dormir se asocia con una peor calidad de sueño. Son asociaciones observadas, no una relación de causa directa.",
          ],
          note: "Son categorías de reflexión para este recurso, no una escala de sueño validada. En personas adultas, la relación entre el uso de pantallas y el sueño es compleja y varía según qué se mide y qué aspecto del sueño se evalúa.",
        },
        example: {
          text: "Valentina termina una entrega por la noche y piensa acostarse pronto. Al cerrar, abre una red social «un par de minutos». Se inicia una conversación, después llega otra notificación, y la hora de dormir acaba siendo bastante más tarde de lo previsto.",
          note: "El punto no es que haya un teléfono cerca de la cama. Es que Valentina puede observar cómo encaja esa actividad digital en su rutina de descanso y si cambia lo que había decidido hacer.",
        },
        visual: {
          file: "m3a-sleep.svg",
          alt: "Ilustración de una persona estudiante que pasa del uso del portátil y el teléfono hacia el descanso, con elementos nocturnos tranquilos y señales de notificaciones y tiempo.",
          caption: "Cerca de la hora de dormir influyen varios factores: cuánto se alarga la actividad, las interrupciones y si hay un momento para bajar el ritmo.",
        },
        interaction: {
          type: "routineSlider",
          instructions: "Mueve el control para comparar cuatro ejemplos de rutina nocturna. No hay una rutina perfecta universal: la idea es observar diferencias.",
          savedNote: "Tu selección se guarda solo en este navegador; puedes borrarla con «Reiniciar».",
          sliderLabel: "Ejemplo de rutina nocturna",
          resetLabel: "Reiniciar",
          noticeLabel: "Qué podrías notar",
          ideaLabel: "Una idea para probar",
          reflectionLabel: "Para reflexionar",
          note: "Ninguna de estas rutinas es «la correcta». Sirven para comparar y para pensar qué encaja contigo.",
          positions: [
            {
              name: "Actividad digital hasta la hora de dormir",
              description: "La actividad digital continúa directamente hasta la hora prevista para dormir, con mensajes y notificaciones todavía activos.",
              notice: "Si la hora real de acostarte coincide con la que habías pensado.",
              idea: "Silenciar las conversaciones que no necesitas seguir esta noche.",
              reflection: "¿Qué suele mantenerte con el teléfono más tiempo del previsto?",
            },
            {
              name: "Uso cercano a la hora de dormir, con menos interrupciones",
              description: "El uso del dispositivo continúa cerca de la hora de dormir, pero empiezas a reducir las interrupciones que no son necesarias.",
              notice: "Si bajar las notificaciones cambia cómo te sientes al acostarte.",
              idea: "Elegir una hora a partir de la cual dejas de responder mensajes no urgentes.",
              reflection: "¿Qué notificaciones podrías posponer sin problema hasta el día siguiente?",
            },
            {
              name: "Tarea principal terminada y una transición breve",
              description: "Terminas la tarea digital principal y creas una transición corta hacia el descanso.",
              notice: "Si ese pequeño intervalo te ayuda a desconectar de la tarea.",
              idea: "Dejar unos minutos entre cerrar el trabajo y apagar la luz, con una actividad tranquila.",
              reflection: "¿Qué actividad breve te ayuda a cambiar de ritmo por la noche?",
            },
            {
              name: "Rutina de transición más intencional",
              description: "Una rutina para bajar el ritmo en la que has pausado las actividades digitales que no son esenciales.",
              notice: "Si te resulta más fácil o más difícil mantener esta rutina algunos días.",
              idea: "Preparar lo necesario para el día siguiente antes de empezar la transición, para no volver al teléfono.",
              reflection: "¿Qué parte de esta rutina te parece realista para un día normal?",
            },
          ],
        },
        reflection: {
          prompt: "¿Qué parte de tu rutina digital nocturna podrías observar con más atención esta semana?",
        },
        support: {
          text: "Este contenido se apoya en investigación sobre el uso de pantallas antes de dormir. En personas adultas esa relación con el sueño es compleja y varía según qué se mide; en población universitaria, algunos estudios observan una asociación entre el uso de dispositivos justo antes de dormir y una peor calidad de sueño, sin establecer una causa directa.",
          refs: [
            "Vézina-Im et al. (2025). Sleep Health.",
            "Wang et al. (2025). American Journal of Translational Research.",
          ],
        },
      },
      m3b: {
        intro: [
          "Las sesiones largas de estudio suelen implicar mirar una pantalla mucho tiempo, permanecer sentado o sentada, repetir la misma tarea mental y, a veces, sentir cansancio o incomodidad física.",
          "Una pausa corta no significa abandonar el estudio: puede ser una transición breve antes de seguir. La investigación no demuestra que cualquier pausa mejore automáticamente el rendimiento académico, pero algunas pausas pueden ayudar a recuperar energía o a sentirte mejor.",
        ],
        main: {
          lead: "Hay distintos tipos de pausa breve, y el más útil puede depender de lo que estés notando:",
          dimensions: [
            { name: "Pausa visual", text: "Apartar un momento la vista de la pantalla y mirar a una distancia diferente, más lejos." },
            { name: "Pausa de movimiento", text: "Ponerte de pie, estirarte con suavidad o dar un paseo corto después de mucho rato sentado o sentada." },
            { name: "Reinicio mental", text: "Alejarte un momento de una tarea exigente antes de decidir el siguiente paso." },
            { name: "Revisión del entorno", text: "Ajustar la postura, el espacio de trabajo o las distracciones antes de continuar." },
          ],
          extra: [
            "En un metaanálisis, las pausas cortas mostraron pequeños beneficios para sentirse con más energía y menos fatiga, mientras que el efecto general sobre el rendimiento no fue significativo. En un estudio con estudiantes universitarios, interrumpir el tiempo sentado con actividad ligera tuvo efectos selectivos, no generales.",
          ],
          note: "Solo se incluyen ideas respaldadas por las fuentes citadas. No son rutinas médicas de estiramiento ni un tratamiento.",
        },
        example: {
          text: "Andrés lleva un buen rato leyendo artículos y escribiendo. Se da cuenta de que está releyendo el mismo párrafo, apenas ha cambiado de postura y lleva mucho tiempo mirando el portátil sin descanso.",
          note: "En lugar de obligarse a seguir igual, elige una pausa corta acorde con lo que está notando. La idea es la conciencia y la elección, no optimizar la productividad.",
        },
        visual: {
          file: "m3b-breaks.svg",
          alt: "Ilustración de una persona estudiante en un escritorio con símbolos sencillos de mirar a lo lejos, ponerse de pie y moverse, respirar y volver al estudio.",
          caption: "Durante una sesión larga, distintos tipos de pausa breve pueden ayudar según lo que estés notando.",
        },
        interaction: {
          type: "breakSelector",
          instructions: "Elige la opción que más se parezca a tu situación. Verás una idea opcional para probar.",
          question: "¿Qué estás notando ahora mismo?",
          savedNote: "Tu selección se guarda solo en este navegador; puedes borrarla con «Reiniciar».",
          resetLabel: "Reiniciar",
          whatLabel: "Qué probar",
          whyLabel: "Por qué elegirla",
          reflectionLabel: "Para reflexionar",
          options: [
            {
              label: "Llevo mucho tiempo mirando la pantalla.",
              recommendation: {
                title: "Si llevas rato mirando la pantalla de forma continua",
                what: "Aparta la vista unos segundos y mira un objeto que esté más lejos; aprovecha para parpadear varias veces de forma consciente.",
                why: "Al mirar pantallas se parpadea menos y la vista se mantiene fija a la misma distancia, lo que puede producir molestias como sequedad o cansancio ocular.",
                rationale: "La Academia Americana de Oftalmología sugiere hacer pausas durante el uso prolongado del computador, parpadear de forma consciente y mirar a lo lejos; una versión muy usada de este recordatorio es la regla 20-20-20.",
                reflection: "¿Cada cuánto sueles apartar la vista de la pantalla cuando estudias?",
              },
            },
            {
              label: "Llevo mucho tiempo en la misma postura.",
              recommendation: {
                title: "Si llevas un periodo largo sentado o sentada",
                what: "Ponte de pie un momento y, si te viene bien, haz unos minutos de movimiento ligero, como caminar un poco.",
                why: "Interrumpir los periodos largos sentado es una opción práctica para cambiar de postura y activar el cuerpo.",
                rationale: "En un estudio con estudiantes universitarios, intercalar actividad ligera durante el tiempo sentado tuvo efectos selectivos sobre la cognición y el ánimo, no una mejora general; aun así, cortar el sedentarismo es algo que puedes probar.",
                reflection: "¿Cuánto tiempo sueles pasar sentado o sentada sin levantarte durante una sesión de estudio?",
              },
            },
            {
              label: "Me siento saturado o saturada con la tarea.",
              recommendation: {
                title: "Si notas cansancio mental con la tarea",
                what: "Haz una pausa corta lejos de la tarea y, al volver, decide cuál será el siguiente paso pequeño.",
                why: "Alejarte un momento de una tarea muy exigente puede ayudarte a retomarla con una idea más clara de por dónde seguir.",
                rationale: "Un metaanálisis sobre pausas cortas observó pequeños beneficios para sentirse con más energía y menos fatiga; el efecto sobre el rendimiento fue más limitado y dependía del tipo de tarea.",
                reflection: "¿Qué señales te indican que una tarea te está saturando?",
              },
            },
            {
              label: "Tengo varias de estas a la vez.",
              recommendation: {
                title: "Si notas varias de estas cosas a la vez",
                what: "Combina una pausa breve sin pantallas con algo de movimiento y, al volver, define un plan sencillo para reanudar.",
                why: "Cuando se juntan la fatiga visual, el tiempo sentado y el cansancio mental, una sola pausa puede atender más de un aspecto.",
                rationale: "Las fuentes coinciden en que las pausas cortas pueden apoyar la recuperación y el bienestar, aunque no garantizan una mejora del rendimiento; conviene probarlas como una opción, no como una regla fija.",
                reflection: "Si solo pudieras cambiar una cosa de tus sesiones largas, ¿cuál sería?",
              },
            },
          ],
        },
        reflection: {
          prompt: "Durante una sesión larga de estudio, ¿qué señal suele indicarte que necesitas una pausa?",
        },
        support: {
          text: "Este contenido se apoya en investigación sobre pausas cortas y sobre la interrupción del tiempo sentado, y en orientación de la Academia Americana de Oftalmología sobre el descanso visual. La evidencia sugiere beneficios modestos para el bienestar y efectos selectivos sobre el rendimiento, no mejoras garantizadas.",
          refs: [
            "Albulescu et al. (2022). PLOS ONE.",
            "Wu et al. (2023). Scandinavian Journal of Medicine & Science in Sports.",
            "American Academy of Ophthalmology (2023). Eye strain and sleepy eyes.",
          ],
        },
      },
      m4a: {
        intro: [
          "Como estudiante usas cuentas en línea para las plataformas de la universidad, el correo, el almacenamiento en la nube, las redes sociales, los pagos y la comunicación. La seguridad de esas cuentas y tu privacidad forman parte de tus hábitos digitales cotidianos.",
          "La seguridad en línea no consiste en evitar internet, sino en tomar decisiones informadas sobre la autenticación, los mensajes que recibes, la información personal que compartes, la configuración de privacidad y la actividad inesperada en tus cuentas.",
        ],
        main: {
          lead: "Cuatro ideas prácticas para el día a día:",
          dimensions: [
            { name: "Protege tus cuentas", text: "Usa contraseñas o frases de contraseña largas y distintas para cada cuenta, y evita reutilizarlas. Un gestor de contraseñas ayuda a manejar credenciales únicas; la longitud importa más que mezclar tipos de caracteres." },
            { name: "Añade otra capa", text: "La verificación en dos pasos pide una segunda comprobación además de la contraseña. Añade protección, aunque no hace que una cuenta sea imposible de comprometer." },
            { name: "Haz una pausa antes de hacer clic", text: "Los mensajes, enlaces, archivos adjuntos y solicitudes de información inesperados conviene verificarlos antes de actuar, sobre todo si transmiten urgencia." },
            { name: "Controla lo que compartes", text: "Revisar la configuración de privacidad y compartir de forma intencionada ayuda a limitar la exposición innecesaria de tu información personal." },
          ],
          extra: [
            "Las contraseñas por sí solas no protegen frente al phishing: si alguien te engaña para escribirla en un sitio falso, la longitud no ayuda. Por eso la verificación en dos pasos es un apoyo útil.",
          ],
          note: "Son categorías educativas, no una certificación de seguridad.",
        },
        example: {
          text: "Sofía recibe un correo que dice que su cuenta de la universidad será suspendida si no la verifica de inmediato mediante un enlace. El correo lleva el logo de la universidad y parece creíble.",
          note: "En lugar de decidir solo por la apariencia, Sofía revisa el remitente, no usa el enlace y comprueba la solicitud entrando al servicio de la universidad por una ruta oficial que ya conoce. Verificar es más seguro que reaccionar a la urgencia o a la apariencia.",
        },
        visual: {
          file: "m4a-online-safety.svg",
          alt: "Ilustración de una persona estudiante con un portátil y un teléfono, rodeada de símbolos sencillos de cuenta, escudo, mensaje, privacidad y verificación.",
          caption: "La seguridad en línea se construye con decisiones cotidianas: autenticación, verificación de mensajes y control de la información.",
        },
        interaction: {
          type: "scenarios",
          storageKey: "dw_m4a_quiz",
          instructions: "En cada situación, elige la acción que probarías. Después verás una explicación de por qué es más segura o menos aconsejable.",
          savedNote: "Tus respuestas se guardan solo en este navegador; puedes borrarlas con «Reiniciar».",
          progressLabel: "{n} de {total} situaciones respondidas",
          resetLabel: "Reiniciar",
          scenarios: [
            {
              situation: "Recibes un correo con aspecto oficial de la universidad que pide iniciar sesión de inmediato a través de un enlace incluido en el mensaje.",
              options: [
                { recommended: true, text: "Entro al sitio oficial de la universidad que ya conozco, o verifico la solicitud por un canal de confianza, en lugar de usar el enlace.", feedback: "Verificar por una ruta que ya conoces evita los enlaces falsos. La Comisión Federal de Comercio de EE. UU. (FTC) recomienda contactar a la organización con un sitio o un número que sepas que es real, no con los datos del mensaje." },
                { recommended: false, text: "Hago clic en el enlace y, si la página se ve como la de la universidad, inicio sesión.", feedback: "Las páginas falsas pueden imitar muy bien el aspecto real. La apariencia no confirma que un enlace sea legítimo; una página de inicio de sesión copiada puede capturar tu contraseña." },
                { recommended: false, text: "Respondo al correo preguntando si es auténtico.", feedback: "Si el correo lo envía quien intenta engañarte, la respuesta llega a esa misma persona. Es mejor verificar por un canal independiente." },
              ],
            },
            {
              situation: "Vas a crear otra cuenta en línea y piensas usar la misma contraseña que usas para el correo de la universidad.",
              options: [
                { recommended: true, text: "Creo una contraseña o frase de contraseña distinta, o la genero con un gestor de contraseñas.", feedback: "Usar contraseñas distintas reduce el riesgo de reutilización: si una filtración expone una cuenta, las demás no quedan abiertas. Las guías actuales del NIST recomiendan permitir contraseñas largas y el uso de gestores." },
                { recommended: false, text: "Uso la misma contraseña; es larga y me la sé de memoria.", feedback: "Aunque sea larga, reutilizarla significa que una sola filtración puede afectar a varias cuentas a la vez, incluida la del correo." },
                { recommended: false, text: "Uso la misma contraseña pero le cambio un número al final.", feedback: "Las variaciones pequeñas son fáciles de deducir a partir de una contraseña filtrada. En la práctica sigue siendo una contraseña reutilizada." },
              ],
            },
            {
              situation: "Una cuenta importante ofrece verificación en dos pasos, pero no la tienes activada.",
              options: [
                { recommended: true, text: "La activo, empezando por las cuentas más sensibles como el correo y el banco.", feedback: "Un segundo factor añade una capa: según la FTC, aunque alguien conozca tu usuario y contraseña, no puede entrar sin la segunda comprobación. No la vuelve imposible de comprometer, pero sí más difícil." },
                { recommended: false, text: "No la activo para no complicar el inicio de sesión.", feedback: "Es una decisión personal, pero deja la cuenta dependiendo solo de la contraseña. En cuentas importantes, el paso extra suele compensar." },
                { recommended: false, text: "La activo solo si me obligan.", feedback: "Esperar a que sea obligatorio deja un tiempo en el que la cuenta está menos protegida, justo en las cuentas que más te importan." },
              ],
            },
            {
              situation: "Recibes una solicitud de aprobación de verificación en dos pasos que tú no iniciaste.",
              options: [
                { recommended: true, text: "No la apruebo y reviso qué está pasando; cambio la contraseña si sospecho que alguien la tiene.", feedback: "Una solicitud que no iniciaste puede significar que alguien intenta entrar con tu contraseña. Aprobarla le daría acceso; verificar y cambiar la contraseña es lo prudente." },
                { recommended: false, text: "La apruebo para que deje de aparecer.", feedback: "Aprobar una solicitud que no iniciaste puede dar acceso a otra persona. Las solicitudes inesperadas conviene tratarlas como algo que verificar, no que aceptar." },
                { recommended: false, text: "La ignoro y no hago nada más.", feedback: "Ignorarla evita el acceso inmediato, pero no resuelve que quizá alguien tenga tu contraseña. Conviene revisarla y cambiarla." },
              ],
            },
            {
              situation: "Una aplicación social te pide acceso a tu ubicación, o estás a punto de publicar información personal para todo el mundo.",
              options: [
                { recommended: true, text: "Reviso si ese acceso es necesario, quién puede ver la información y qué configuración de privacidad tiene sentido.", feedback: "La FTC sugiere revisar los permisos de las aplicaciones y ajustar la configuración de la cuenta a tus preferencias, y desactivar los permisos que no hacen falta para que la app funcione." },
                { recommended: false, text: "Doy todos los permisos para que la aplicación funcione sin avisos.", feedback: "Muchas apps funcionan sin todos los permisos que piden. Conceder acceso a la ubicación o a los contactos sin necesidad amplía la exposición de tu información." },
                { recommended: false, text: "Publico ahora y ajusto la privacidad después si hace falta.", feedback: "Una vez publicada, la información puede haberse visto o copiado. Decidir la audiencia antes de publicar te da más control." },
              ],
            },
          ],
          summaryTitle: "Resumen",
          scoreLabel: "Identificaste {n} de {total} acciones recomendadas.",
          summary: "La seguridad en línea se construye con decisiones pequeñas que puedes repetir. Cuando falla una respuesta, la explicación ya describe la práctica más segura.",
          reflectionLabel: "Para reflexionar",
          reflectionPrompt: "De las cinco situaciones, ¿cuál se parece más a algo que te podría pasar esta semana?",
        },
        reflection: {
          prompt: "¿Qué medida de seguridad podrías revisar hoy en una de tus cuentas más importantes?",
        },
        support: {
          text: "Este contenido se apoya en las guías de identidad digital del NIST (autenticación) y en las recomendaciones de la Comisión Federal de Comercio de EE. UU. (FTC) sobre phishing, verificación en dos pasos y privacidad. Son orientaciones generales; los servicios y las plataformas cambian con el tiempo.",
          refs: [
            "NIST. Digital Identity Guidelines (SP 800-63B-4, 2025).",
            "FTC. How to recognize and avoid phishing scams.",
            "FTC. Use two-factor authentication to protect your accounts.",
          ],
        },
      },
      m4b: {
        intro: [
          "Las redes sociales pueden apoyar la comunicación, la amistad, la colaboración académica, el acceso a información, la creatividad y el sentido de comunidad. El objetivo de esta pantalla no es «dejar de usar redes sociales».",
          "La investigación no respalda una conclusión simple de que todo uso de redes sociales tenga el mismo efecto en el bienestar. Cómo, por qué y en qué contexto se usa una plataforma puede importar más que una sola cifra de tiempo.",
        ],
        main: {
          lead: "Cuatro preguntas para usar las redes de forma más intencional:",
          dimensions: [
            { name: "Intención", text: "¿Por qué abrí la plataforma?" },
            { name: "Atención", text: "¿Sigo haciendo lo que quería, o la actividad cambió sin que me diera cuenta?" },
            { name: "Conexión", text: "¿Esta interacción me ayuda a comunicarme, colaborar o conectar de una forma que me resulta útil?" },
            { name: "Límites y lo que comparto", text: "¿Quiero seguir usando la plataforma ahora mismo? ¿Con qué audiencia estoy compartiendo? ¿Es esta información algo que quiero que sea público?" },
          ],
          extra: [
            "En los estudios, el uso elevado por sí solo no mostró el mismo patrón que las medidas descritas como «uso problemático». Además, factores como el apoyo social percibido y la autoestima se relacionan con el bienestar más que los indicadores básicos de uso. En resumen: cómo se usa una plataforma puede importar más que cuánto.",
          ],
          note: "Son preguntas para reflexionar, no una escala de bienestar validada.",
        },
        example: {
          text: "Mateo abre una red social para responder un mensaje del grupo de una asignatura. Después de responder, empieza a ver publicaciones que no tienen que ver con eso y, un rato más tarde, se da cuenta de que ha estado bastante más tiempo del que había pensado.",
          note: "La lección no es «las redes sociales son malas». Es que el propósito inicial cambió sin que Mateo lo notara. Reconocer ese cambio le da la opción de seguir de forma intencional o volver a lo que había planeado.",
        },
        visual: {
          file: "m4b-social-media.svg",
          alt: "Ilustración de una persona estudiante usando el teléfono, con elementos equilibrados de mensajes, personas y conexiones, contenido, pausa y privacidad.",
          caption: "No hay una única forma correcta de usar las redes: ayuda notar cuándo eliges cómo participar y cuándo la actividad sigue sola.",
        },
        interaction: {
          type: "scenarios",
          storageKey: "dw_m4b_cards",
          instructions: "En cada situación, elige la respuesta que probarías. Verás una explicación y una pregunta para pensar. No hay una única forma correcta.",
          savedNote: "Tus respuestas se guardan solo en este navegador; puedes borrarlas con «Reiniciar».",
          progressLabel: "{n} de {total} decisiones tomadas",
          resetLabel: "Reiniciar",
          scenarios: [
            {
              situation: "Abriste la app para responder un mensaje del grupo de clase, pero después de responder llevas varios minutos viendo contenido que no tiene relación.",
              options: [
                { text: "Sigo un rato más porque quiero de verdad una pausa.", feedback: "Tomarte una pausa a propósito puede ser razonable. Lo importante es que sea una elección consciente y no algo que simplemente pasó." },
                { text: "Cierro la app y vuelvo a la tarea.", feedback: "Volver a la tarea a propósito también es razonable. El punto es el mismo: notar que el propósito había cambiado." },
                { text: "Sigo desplazándome sin pensarlo.", feedback: "Aquí la actividad continúa por inercia. Darte cuenta es lo que te permite decidir si quieres seguir o parar." },
              ],
              reflection: "¿Qué suele hacer que te quedes en la app más tiempo del previsto?",
            },
            {
              situation: "Ves varias publicaciones sobre logros de tus compañeros y notas que empiezas a comparar tu progreso con lo que aparece en el feed.",
              options: [
                { text: "Recuerdo que las publicaciones muestran solo una parte de la experiencia de otras personas.", feedback: "Tener presente que un feed es una selección ayuda a poner en contexto lo que ves. No todo el mundo publica lo mismo ni con la misma frecuencia." },
                { text: "Sigo comparando hasta sentir que me he puesto al día.", feedback: "Comparar de forma continua puede alargarse sin un punto final claro. Si notas que no te aporta, puedes cambiar lo que estás viendo." },
                { text: "Hago una pausa o cambio lo que estoy mirando.", feedback: "Cambiar el contenido o hacer una pausa es una opción cuando algo no te sienta bien. Ver publicaciones de logros no daña la salud mental por sí mismo, pero tú decides a qué dedicas tu atención." },
              ],
              reflection: "¿En qué momentos las redes te ayudan a sentirte conectado y en cuáles no tanto?",
            },
            {
              situation: "Un chat de grupo se vuelve muy activo mientras trabajas en una entrega.",
              options: [
                { text: "Mantengo todas las alertas activas.", feedback: "Mantener todas las alertas hace que cada mensaje compita con la tarea. Puede tener sentido si esperas algo urgente, pero no siempre." },
                { text: "Silencio temporalmente las alertas no esenciales y decido cuándo revisar.", feedback: "Los límites pueden ser temporales y según el contexto: silenciar durante un rato no es dejar el grupo, es elegir cuándo atenderlo." },
                { text: "Dejo el grupo para siempre.", feedback: "Salir del todo es una opción, pero para una situación puntual suele bastar con un límite temporal." },
              ],
              reflection: "¿Qué límite temporal con las notificaciones te funcionaría durante una sesión de estudio?",
            },
            {
              situation: "Vas a publicar algo que incluye información personal, tu ubicación o algo que quizá no quieras que vea todo el mundo.",
              options: [
                { text: "Reviso la audiencia y la configuración de privacidad antes de publicar.", feedback: "Decidir quién puede verlo antes de publicar te da más control. La FTC sugiere ajustar la configuración de la cuenta a tus preferencias." },
                { text: "Publico primero y decido después.", feedback: "Una vez publicado, el contenido puede haberse visto o guardado aunque lo borres luego. Elegir la audiencia antes evita esa situación." },
                { text: "Decido no compartir esa información.", feedback: "También es una opción válida. La idea no es no compartir nunca nada, sino elegir de forma intencional la audiencia y lo que haces público." },
              ],
              reflection: "¿Qué tipo de información prefieres mantener fuera de tus publicaciones públicas?",
            },
          ],
          summaryTitle: "Para terminar",
          summary: "No existe una única forma correcta de usar las redes sociales. Lo importante es reconocer cuándo estás eligiendo cómo participar y cuándo la actividad simplemente continúa por inercia.",
          reflectionLabel: "Para reflexionar",
          reflectionPrompt: "De las cuatro situaciones, ¿cuál se parece más a algo que te pasa a menudo?",
        },
        reflection: {
          prompt: "¿En qué momento del día utilizas las redes sociales de una manera más intencional y en cuál más automática?",
        },
        support: {
          text: "Este contenido se apoya en revisiones y metaanálisis recientes sobre redes sociales y bienestar, que describen una relación compleja e inconsistente y señalan que el patrón de uso puede importar más que la cantidad. Para la parte de privacidad se usan recomendaciones de la FTC.",
          refs: [
            "Ansari et al. (2024). Cyberpsychology, Behavior, and Social Networking.",
            "Yang y Feng (2024). Heliyon.",
            "FTC. How websites and apps collect and use your information.",
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
            "Albulescu, P., Macsinga, I., Rusu, A., Sulea, C., Bodnaru, A. y Tulbure, B. T. (2022). “Give me a break!” A systematic review and meta-analysis on the efficacy of micro-breaks for increasing well-being and performance. <em>PLOS ONE, 17</em>(8), Artículo e0272460. https://doi.org/10.1371/journal.pone.0272460",
            "Ansari, S., Iqbal, N., Asif, R., Hashim, M., Farooqi, S. R. y Alimoradi, Z. (2024). Social media use and well-being: A systematic review and meta-analysis. <em>Cyberpsychology, Behavior, and Social Networking, 27</em>(10), 704–719. https://doi.org/10.1089/cyber.2024.0001",
            "Appianing, J., Quansah, F. y Amoako, R. (2026). Development and validation of the digital well-being scale using university students. <em>Frontiers in Psychiatry, 17</em>, Artículo 1853998. https://doi.org/10.3389/fpsyt.2026.1853998",
            "Biedermann, D., Schneider, J. y Drachsler, H. (2021). Digital self-control interventions for distracting media multitasking: A systematic review. <em>Journal of Computer Assisted Learning, 37</em>(5), 1217–1231. https://doi.org/10.1111/jcal.12581",
            "Martin, F., Long, S., Haywood, K. y Xie, K. (2025). Digital distractions in education: A systematic review of research on causes, consequences and prevention strategies. <em>Educational Technology Research and Development, 73</em>(6), 3423–3451. https://doi.org/10.1007/s11423-025-10550-6",
            "Mohd Bahar, F. H., Roslan, N. S., Ping, N. P. T., Abdul Nasir, N. A., Ibrahim, M. S., Adam, S. K., Ahmad Razali, S. y Yusoff, M. S. B. (2026). The digital well-being among learners in higher education: A scoping review. <em>BMC Medical Education, 26</em>(1), Artículo 1146. https://doi.org/10.1186/s12909-026-09370-w",
            "Stothart, C., Mitchum, A. y Yehnert, C. (2015). The attentional cost of receiving a cell phone notification. <em>Journal of Experimental Psychology: Human Perception and Performance, 41</em>(4), 893–897. https://doi.org/10.1037/xhp0000100",
            "Vézina-Im, L.-A., Morin, C. M., Chen, S., Ivers, H., Carney, C. E., Chaput, J.-P., Dang-Vu, T. T., Davidson, J. R., Robillard, R. y Canadian Sleep Research Consortium. (2025). The complex association between bedtime screen use and adult sleep health. <em>Sleep Health, 11</em>(5), 572–578. https://doi.org/10.1016/j.sleh.2025.06.010",
            "Wang, J., Ishak, I., Mazri, F. H., Siau, C. S., Xin, F., Wang, X. y Mat Ludin, A. F. (2025). Sleep quality and related risk factors among college students in China: A systematic review and meta-analysis. <em>American Journal of Translational Research, 17</em>(12), 10111–10128. https://doi.org/10.62347/bpae1262",
            "Wu, Y., Van Gerven, P. W. M., de Groot, R. H. M., Eijnde, B. O., Winkens, B. y Savelberg, H. H. C. M. (2023). Effects of breaking up sitting with light-intensity physical activity on cognition and mood in university students. <em>Scandinavian Journal of Medicine &amp; Science in Sports, 33</em>(3), 257–266. https://doi.org/10.1111/sms.14277",
            "Yang, Q. y Feng, Y. (2024). Relationships between social networking sites use and subjective well-being: A meta-analysis and meta-analytic structural equation model. <em>Heliyon, 10</em>(12), Artículo e32463. https://doi.org/10.1016/j.heliyon.2024.e32463",
          ],
        },
        {
          id: "institutional",
          title: "Fuentes institucionales",
          items: [
            "American Academy of Ophthalmology. (2023). <em>Eye strain and sleepy eyes: How to prevent eye discomfort</em>. Recuperado el 2 de septiembre de 2026, de https://www.aao.org/eye-health/diseases/what-is-eye-strain",
            "Federal Trade Commission. (2022). <em>How to recognize and avoid phishing scams</em>. Consumer Advice. Recuperado el 2 de septiembre de 2026, de https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams",
            "Federal Trade Commission. (2022). <em>Use two-factor authentication to protect your accounts</em>. Consumer Advice. Recuperado el 2 de septiembre de 2026, de https://consumer.ftc.gov/articles/use-two-factor-authentication-protect-your-accounts",
            "Federal Trade Commission. (2023). <em>How websites and apps collect and use your information</em>. Consumer Advice. Recuperado el 2 de septiembre de 2026, de https://consumer.ftc.gov/articles/how-websites-and-apps-collect-and-use-your-information",
            "Jisc. (s. f.). <em>Digital wellbeing</em>. Building digital capability. Recuperado el 2 de septiembre de 2026, de https://digitalcapability.jisc.ac.uk/what-is-digital-capability/digital-wellbeing/",
            "National Institute of Standards and Technology. (2025). <em>Digital identity guidelines: Authentication and authenticator management</em> (NIST Special Publication 800-63B-4). https://doi.org/10.6028/NIST.SP.800-63b-4",
          ],
        },
        {
          id: "images",
          title: "Fuentes de imágenes e ilustraciones",
          items: [
            "Ilustraciones originales del proyecto en formato SVG: <em>home-balance.svg</em>, <em>m1a-balance.svg</em>, <em>m1b-awareness.svg</em>, <em>m2a-screen-time.svg</em>, <em>m2b-distractions.svg</em>, <em>m3a-sleep.svg</em>, <em>m3b-breaks.svg</em>, <em>m4a-online-safety.svg</em> y <em>m4b-social-media.svg</em>. Creadas para este recurso educativo; no se emplean bancos de imágenes ni recursos de terceros.",
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
      m2a: {
        intro: [
          "At university it is normal to spend many hours in front of a screen for necessary reasons: online classes, looking for information, assignments, communication with classmates, and also rest or entertainment.",
          "So the total number of screen hours, on its own, does not tell you whether technology is helping you or interrupting an activity. What matters most is context: what you are using the device for, with what intention, and how much control you feel you have.",
        ],
        main: {
          lead: "When you think about your screen use, you can ask yourself four simple questions:",
          dimensions: [
            { name: "Purpose", text: "What am I using this device for right now?" },
            { name: "Time", text: "Have I been at it longer than I intended?" },
            { name: "Interference", text: "Is this use interrupting another task or routine?" },
            { name: "Control", text: "Can I stop, pause or switch activities when I decide to?" },
          ],
          extra: [
            "The usage statistics that devices provide can be useful as information for noticing patterns, but it helps to read them together with the context of each day.",
          ],
          note: "These are reflection categories, not a diagnostic scale. There is no single number of daily screen hours that is healthy or unhealthy for everyone.",
        },
        example: {
          text: "Mariana spends the morning in an online class and working on an assignment on her laptop. In the afternoon, every time she gets stuck on an idea she opens social media “for a moment”. Those short breaks repeat, and her study session ends up running almost an hour longer than planned.",
          note: "The academic screen use was necessary; what added up were the unplanned interruptions. Noticing that difference is more useful than only counting the hours.",
        },
        visual: {
          file: "m2a-screen-time.svg",
          alt: "Illustration of a student with a laptop and a phone, next to elements representing study time, intentional use and breaks.",
          caption: "Managing screen time is about the what for, the when and the sense of control, more than the total number of hours.",
        },
        interaction: {
          type: "frequencyQuiz",
          instructions: "Choose the option that best describes your usual experience. This is not a test: it is a guide for reflection.",
          savedNote: "Your answers are saved only in this browser; you can clear them with “Reset”.",
          options: ["Never", "Rarely", "Sometimes", "Often"],
          questions: [
            "I keep using an app for longer than I had planned.",
            "I check content unrelated to the task while I study.",
            "I lose track of time while using the device.",
            "I find it hard to pause when I decide I want to stop.",
            "I use the device without being clear about why I opened it.",
            "I start studying without setting aside a specific period to focus on one task.",
          ],
          progressLabel: "{n} of {total} answered",
          incompleteLabel: "Answer every question to see the result.",
          resultLabel: "See result",
          resetLabel: "Reset",
          strategiesTitle: "Strategies to try",
          strategies: [
            "Before opening an app or the device, decide what you will use it for and for how long.",
            "Set aside a specific period to focus on one academic task, without switching activities.",
            "Temporarily reduce access to a distraction you already know about while you do that task.",
          ],
          reflectionLabel: "To reflect on",
          reflectionPrompt: "Choose one situation from the list and observe it this week: when does it happen, and what triggers it?",
          results: {
            low: {
              title: "Your use looks fairly intentional",
              body: "Your answers suggest that, in general, you decide on your screen use consciously. Even so, there may be a particular situation worth observing.",
            },
            mid: {
              title: "There are a few moments you could observe",
              body: "You identified several moments where screen use may continue longer or interrupt another activity. Choose one situation to observe this week.",
            },
            high: {
              title: "Several situations compete with your goal",
              body: "You noticed several situations where digital activities may compete with what you set out to do. Rather than changing everything at once, choose one small adjustment to test.",
            },
          },
        },
        reflection: {
          prompt: "Which part of your daily screen use would you like to make a little more intentional?",
        },
        support: {
          text: "This content draws on recent research on digital distraction and on digital self-control tools, which describe screen use as something that depends on several factors and present strategies as options to experiment with, not as guaranteed solutions.",
          refs: [
            "Martin et al. (2025). Educational Technology Research and Development.",
            "Biedermann et al. (2021). Journal of Computer Assisted Learning.",
          ],
        },
      },
      m2b: {
        intro: [
          "A digital distraction happens when you lose focus on the academic task because your attention moves toward digital content unrelated to it: messages, social-media alerts, email, app notifications, browser tabs, or checking the phone automatically.",
          "A notification does not always need to be opened to compete for your attention: the alert itself can already interrupt your concentration.",
        ],
        main: {
          lead: "The causes of digital distraction are usually grouped into three types:",
          dimensions: [
            { name: "Technology", text: "Alerts, apps and messages, and easy access to content unrelated to the task." },
            { name: "Personal factors", text: "Habit, curiosity, boredom, or the urge to check something." },
            { name: "Environment", text: "Having several devices at once, the study location, or interruptions and expectations from people nearby." },
          ],
          note: "This way of organising the causes —technology, personal factors and environment— comes from a recent review of digital distraction in education. Because several factors are involved, managing it usually takes more than one strategy.",
        },
        example: {
          text: "Sofía is writing an assignment. A message notification arrives and she opens it to reply quickly. An email comes in right after. Before she realises it, she has moved through the messaging app, her email and a social network, and when she returns to the document she has to reread the last paragraph to pick up the thread.",
          note: "The example shows how a task gets interrupted; it is not about blaming the student. It happens to almost everyone.",
        },
        visual: {
          file: "m2b-distractions.svg",
          alt: "Illustration of a student at a laptop, with small notification elements around them and a central area representing focused attention.",
          caption: "Several digital signals compete for attention while studying; protecting a space for focus helps to sustain the task.",
        },
        interaction: {
          type: "scenarios",
          instructions: "In each situation, choose the response you would try. You will then see an explanation. There is not always a single perfect answer.",
          savedNote: "Your answers are saved only in this browser; you can clear them with “Reset”.",
          progressLabel: "{n} of {total} situations answered",
          resetLabel: "Reset",
          scenarios: [
            {
              situation: "You are writing an assignment and a notification appears for a message that is not urgent.",
              options: [
                {
                  text: "I mute non-essential notifications for this stretch of work.",
                  feedback: "It reduces the number of alerts competing for your attention. In one experiment, simply receiving notifications was enough to affect performance on an attention task, even when the phone was not touched.",
                },
                {
                  text: "I glance at the message for a second to see what it is, then continue.",
                  feedback: "Even if it seems quick, the alert has already interrupted the task, and getting back to where you were takes extra effort. It can make sense if you really are expecting something important.",
                },
                {
                  text: "I reply now to get it out of the way.",
                  feedback: "Replying straight away often opens the door to more messages and to switching apps. If it is not urgent, setting a time to check messages protects your concentration better.",
                },
              ],
            },
            {
              situation: "You are reading academic material with several browser tabs and social media open from before.",
              options: [
                {
                  text: "I close the tabs I do not need for this reading.",
                  feedback: "It removes shortcuts to distraction and keeps only task-related content in view, which makes it easier to stay focused.",
                },
                {
                  text: "I leave them open; I am not looking at them.",
                  feedback: "Having them one click away makes automatic task-switching easier, especially during breaks or when you get stuck. They do not always distract, but they raise the chance.",
                },
                {
                  text: "I let myself check them each time I finish a page.",
                  feedback: "It can work as a short reward, though those breaks sometimes stretch out. If you try it, decide in advance how long the break will last.",
                },
              ],
            },
            {
              situation: "During an online class, the group chat comes alive with a conversation that is not about the class.",
              options: [
                {
                  text: "I mute that chat until the class is over.",
                  feedback: "It protects your attention for the class without closing the conversation, which you can return to afterwards.",
                },
                {
                  text: "I follow the conversation while I listen to the class.",
                  feedback: "Attending to two things at once splits your attention and it is easy to miss parts of the explanation. It may be acceptable if the class is revision and the message is important.",
                },
                {
                  text: "I reply quickly and go back to the class.",
                  feedback: "A short reply seems harmless, but it often leads to more replies. Saying you will answer after the class usually works better.",
                },
              ],
            },
            {
              situation: "You pick up your phone to read a classmate's message about an assignment and see other notifications waiting.",
              options: [
                {
                  text: "I read only the assignment message and leave the rest for later.",
                  feedback: "You keep the reason you picked up the phone and avoid letting other notifications decide your next step.",
                },
                {
                  text: "I take the chance to check the others too.",
                  feedback: "It is the most common reaction, and it is why notifications “pull” you along: one leads to another. Checking only what you came for keeps you in control of the situation.",
                },
                {
                  text: "I put the phone face down and look at it during the next break.",
                  feedback: "It postpones the interruption completely. It works well if you really are not expecting anything urgent right now.",
                },
              ],
            },
          ],
          summaryTitle: "Summary",
          summary: "You have practised several ways of responding to digital interruptions. The most useful strategy depends on the task and the situation; there is not one that always works. Think about which one would be easiest for you to test.",
          reflectionLabel: "To reflect on",
          reflectionPrompt: "Of the strategies you tried, which one would you like to use next time you study?",
        },
        reflection: {
          prompt: "Which digital distraction appears most often when you are studying?",
        },
        support: {
          text: "This content draws on research on digital distraction in education and on an experiment about the effect of notifications on attention. Laboratory results do not mean that every notification causes a poor academic outcome; they show that alerts can compete for attention.",
          refs: [
            "Martin et al. (2025). Educational Technology Research and Development.",
            "Stothart et al. (2015). Journal of Experimental Psychology: Human Perception and Performance.",
          ],
        },
      },
      m3a: {
        intro: [
          "In the evening, digital devices can serve useful purposes: studying, communicating, entertainment, reading, or organising the next day. This screen is not about portraying nighttime device use as automatically bad.",
          "What happens near bedtime can involve several factors: how long the activity continues, whether it delays your intended bedtime, the type of content, whether messages or notifications keep arriving, and whether you have a moment to wind down. Research on screens and sleep is complex, and it is not only about “blue light”.",
        ],
        main: {
          lead: "To look at your nighttime digital routine, you can pay attention to four things:",
          dimensions: [
            { name: "Time and intention", text: "Did the activity continue longer than you planned?" },
            { name: "Stimulation", text: "Was the activity calm, or did it keep demanding your attention?" },
            { name: "Interruptions", text: "Do messages or notifications keep arriving when you want to rest?" },
            { name: "Wind-down routine", text: "Is there any moment between active digital activity and trying to sleep?" },
          ],
          extra: [
            "In university-student samples, some studies observe that using devices right before sleep is associated with poorer sleep quality. These are observed associations, not a direct causal link.",
          ],
          note: "These are reflection categories for this resource, not a validated sleep scale. In adults, the relationship between screen use and sleep is complex and varies with what is measured and which dimension of sleep is evaluated.",
        },
        example: {
          text: "Valentina finishes an assignment at night and plans to sleep soon. As she closes it, she opens a social-media app “for a couple of minutes”. A conversation starts, then another notification arrives, and bedtime ends up much later than planned.",
          note: "The point is not that a phone is near the bed. It is that Valentina can notice how that digital activity fits into her rest routine and whether it changes what she had decided to do.",
        },
        visual: {
          file: "m3a-sleep.svg",
          alt: "Illustration of a student moving from laptop and phone use toward rest, with calm nighttime elements and cues for notifications and time.",
          caption: "Near bedtime, several factors matter: how long the activity runs, the interruptions, and whether there is a moment to wind down.",
        },
        interaction: {
          type: "routineSlider",
          instructions: "Move the control to compare four example evening routines. There is no universal perfect routine: the idea is to notice differences.",
          savedNote: "Your selection is saved only in this browser; you can clear it with “Reset”.",
          sliderLabel: "Example evening routine",
          resetLabel: "Reset",
          noticeLabel: "What you could notice",
          ideaLabel: "One idea to try",
          reflectionLabel: "To reflect on",
          note: "None of these routines is “the right one”. They are for comparing and for thinking about what fits you.",
          positions: [
            {
              name: "Digital activity until bedtime",
              description: "Digital activity continues directly until the intended sleep time, with messages and notifications still active.",
              notice: "Whether your actual bedtime matches the one you had in mind.",
              idea: "Mute the conversations you do not need to follow tonight.",
              reflection: "What usually keeps you on the phone longer than planned?",
            },
            {
              name: "Use near bedtime, with fewer interruptions",
              description: "Device use continues near bedtime, but you start reducing the interruptions that are not necessary.",
              notice: "Whether lowering notifications changes how you feel as you go to bed.",
              idea: "Choose a time after which you stop replying to non-urgent messages.",
              reflection: "Which notifications could you postpone until the next day without a problem?",
            },
            {
              name: "Main task finished and a short transition",
              description: "You finish the main digital task and create a short transition toward rest.",
              notice: "Whether that small gap helps you disconnect from the task.",
              idea: "Leave a few minutes between closing your work and turning off the light, with a calm activity.",
              reflection: "What brief activity helps you change pace at night?",
            },
            {
              name: "A more intentional wind-down routine",
              description: "A routine for slowing down in which you have paused the non-essential digital activities.",
              notice: "Whether it feels easier or harder to keep this routine on some days.",
              idea: "Get what you need for the next day ready before starting the transition, so you do not go back to the phone.",
              reflection: "Which part of this routine seems realistic for a normal day?",
            },
          ],
        },
        reflection: {
          prompt: "Which part of your nighttime digital routine could you pay more attention to this week?",
        },
        support: {
          text: "This content draws on research on screen use before bed. In adults, that relationship with sleep is complex and varies with what is measured; in university-student samples, some studies observe an association between using devices right before sleep and poorer sleep quality, without establishing a direct cause.",
          refs: [
            "Vézina-Im et al. (2025). Sleep Health.",
            "Wang et al. (2025). American Journal of Translational Research.",
          ],
        },
      },
      m3b: {
        intro: [
          "Long study sessions often involve looking at a screen for extended periods, staying seated, repeating the same mental task and, sometimes, feeling tired or physically uncomfortable.",
          "A short break does not mean giving up on studying: it can be a brief transition before continuing. Research does not show that any break automatically improves academic performance, but some breaks can help you recover energy or feel better.",
        ],
        main: {
          lead: "There are different kinds of short break, and the most useful one may depend on what you are noticing:",
          dimensions: [
            { name: "Visual break", text: "Looking away from the screen for a moment and looking at a different, farther distance." },
            { name: "Movement break", text: "Standing up, stretching gently or taking a short walk after a long time seated." },
            { name: "Mental reset", text: "Stepping away from a demanding task for a moment before deciding the next step." },
            { name: "Environment check", text: "Adjusting your posture, your workspace or distractions before continuing." },
          ],
          extra: [
            "In a meta-analysis, short breaks showed small benefits for feeling more energetic and less fatigued, while the overall effect on performance was not significant. In a study with university students, breaking up sitting with light activity had selective, not general, effects.",
          ],
          note: "Only ideas supported by the cited sources are included. These are not medical stretching routines or a treatment.",
        },
        example: {
          text: "Andrés has been reading articles and writing for quite a while. He notices that he is rereading the same paragraph, has barely changed position, and has been looking at the laptop for a long time without a break.",
          note: "Instead of forcing himself to continue unchanged, he chooses a short break that matches what he is noticing. The idea is awareness and choice, not optimising productivity.",
        },
        visual: {
          file: "m3b-breaks.svg",
          alt: "Illustration of a student at a study desk with simple symbols for looking into the distance, standing and moving, breathing, and returning to study.",
          caption: "During a long session, different kinds of short break can help depending on what you are noticing.",
        },
        interaction: {
          type: "breakSelector",
          instructions: "Choose the option that best matches your situation. You will see an optional idea to try.",
          question: "What are you noticing right now?",
          savedNote: "Your selection is saved only in this browser; you can clear it with “Reset”.",
          resetLabel: "Reset",
          whatLabel: "What to try",
          whyLabel: "Why you might choose it",
          reflectionLabel: "To reflect on",
          options: [
            {
              label: "I have been looking at the screen for a long time.",
              recommendation: {
                title: "If you have been looking at the screen continuously",
                what: "Look away for a few seconds at an object that is farther away, and take the chance to blink several times consciously.",
                why: "When looking at screens people blink less and keep their eyes fixed at the same distance, which can cause discomfort such as dryness or tired eyes.",
                rationale: "The American Academy of Ophthalmology suggests taking breaks during prolonged computer use, blinking consciously and looking into the distance; a widely used version of this reminder is the 20-20-20 rule.",
                reflection: "How often do you usually look away from the screen when you study?",
              },
            },
            {
              label: "I have been in the same position for a long time.",
              recommendation: {
                title: "If you have been seated for a long period",
                what: "Stand up for a moment and, if it suits you, do a few minutes of light movement, such as walking a little.",
                why: "Interrupting long periods of sitting is a practical option for changing posture and getting the body moving.",
                rationale: "In a study with university students, adding light activity during sitting had selective effects on cognition and mood, not a general improvement; even so, breaking up sedentary time is something you can try.",
                reflection: "How long do you usually stay seated without getting up during a study session?",
              },
            },
            {
              label: "I feel mentally saturated with the task.",
              recommendation: {
                title: "If you notice mental tiredness with the task",
                what: "Take a short break away from the task and, when you return, decide what the next small step will be.",
                why: "Stepping away from a very demanding task for a moment can help you return with a clearer idea of how to continue.",
                rationale: "A meta-analysis of short breaks observed small benefits for feeling more energetic and less fatigued; the effect on performance was more limited and depended on the type of task.",
                reflection: "What signs tell you that a task is saturating you?",
              },
            },
            {
              label: "I have several of these at the same time.",
              recommendation: {
                title: "If you notice several of these things at once",
                what: "Combine a short screen-free break with some movement and, when you return, set a simple plan to resume.",
                why: "When visual fatigue, sitting time and mental tiredness come together, a single break can address more than one thing.",
                rationale: "The sources agree that short breaks can support recovery and wellbeing, although they do not guarantee better performance; it is worth trying them as an option, not as a fixed rule.",
                reflection: "If you could change only one thing about your long sessions, what would it be?",
              },
            },
          ],
        },
        reflection: {
          prompt: "During a long study session, what usually tells you that you may need a break?",
        },
        support: {
          text: "This content draws on research on short breaks and on breaking up sitting time, and on guidance from the American Academy of Ophthalmology about resting the eyes. The evidence suggests modest benefits for wellbeing and selective effects on performance, not guaranteed improvements.",
          refs: [
            "Albulescu et al. (2022). PLOS ONE.",
            "Wu et al. (2023). Scandinavian Journal of Medicine & Science in Sports.",
            "American Academy of Ophthalmology (2023). Eye strain and sleepy eyes.",
          ],
        },
      },
      m4a: {
        intro: [
          "As a university student you use online accounts for university platforms, email, cloud storage, social networks, payments and communication. The security of those accounts and your privacy are part of your everyday digital habits.",
          "Online safety is not about avoiding the internet. It is about making informed decisions about authentication, the messages you receive, the personal information you share, your privacy settings, and unexpected activity on your accounts.",
        ],
        main: {
          lead: "Four practical ideas for everyday use:",
          dimensions: [
            { name: "Protect your accounts", text: "Use long, unique passwords or passphrases for each account, and avoid reusing them. A password manager helps handle unique credentials; length matters more than mixing character types." },
            { name: "Add another layer", text: "Two-step verification asks for a second check in addition to your password. It adds protection, though it does not make an account impossible to compromise." },
            { name: "Pause before you click", text: "Unexpected messages, links, attachments and requests for information are worth verifying before you act, especially if they convey urgency." },
            { name: "Control what you share", text: "Reviewing privacy settings and sharing intentionally helps limit unnecessary exposure of your personal information." },
          ],
          extra: [
            "Passwords on their own do not protect against phishing: if someone tricks you into typing yours on a fake site, length does not help. That is why two-step verification is a useful support.",
          ],
          note: "These are educational categories, not a security certification.",
        },
        example: {
          text: "Sofía receives an email saying her university account will be suspended unless she verifies it immediately through a link. The email carries the university logo and looks believable.",
          note: "Instead of deciding from appearance alone, Sofía checks the sender, avoids the link, and verifies the request by going to the university service through an official route she already knows. Verifying is safer than reacting to urgency or appearance.",
        },
        visual: {
          file: "m4a-online-safety.svg",
          alt: "Illustration of a student with a laptop and a phone, surrounded by simple symbols for account, shield, message, privacy and verification.",
          caption: "Online safety is built from everyday decisions: authentication, verifying messages, and controlling your information.",
        },
        interaction: {
          type: "scenarios",
          storageKey: "dw_m4a_quiz",
          instructions: "In each situation, choose the action you would try. You will then see an explanation of why it is safer or less advisable.",
          savedNote: "Your answers are saved only in this browser; you can clear them with “Reset”.",
          progressLabel: "{n} of {total} situations answered",
          resetLabel: "Reset",
          scenarios: [
            {
              situation: "You receive an official-looking university email asking you to log in immediately through a link included in the message.",
              options: [
                { recommended: true, text: "I go to the official university site I already know, or verify the request through a trusted channel, instead of using the link.", feedback: "Verifying through a route you already know avoids fake links. The U.S. Federal Trade Commission (FTC) recommends contacting the organisation using a site or number you know is real, not the details in the message." },
                { recommended: false, text: "I click the link and, if the page looks like the university's, I log in.", feedback: "Fake pages can imitate the real look very well. Appearance does not confirm that a link is legitimate; a copied login page can capture your password." },
                { recommended: false, text: "I reply to the email asking whether it is genuine.", feedback: "If the email is sent by whoever is trying to trick you, the reply reaches that same person. It is better to verify through an independent channel." },
              ],
            },
            {
              situation: "You are creating another online account and think about using the same password you use for your university email.",
              options: [
                { recommended: true, text: "I create a different password or passphrase, or generate one with a password manager.", feedback: "Using different passwords reduces reuse risk: if a breach exposes one account, the others are not left open. Current NIST guidance recommends allowing long passwords and the use of password managers." },
                { recommended: false, text: "I use the same password; it is long and I know it by heart.", feedback: "Even if it is long, reusing it means a single breach can affect several accounts at once, including your email." },
                { recommended: false, text: "I use the same password but change one number at the end.", feedback: "Small variations are easy to guess from a leaked password. In practice it is still a reused password." },
              ],
            },
            {
              situation: "An important account offers two-step verification, but you do not have it enabled.",
              options: [
                { recommended: true, text: "I enable it, starting with the most sensitive accounts such as email and banking.", feedback: "A second factor adds a layer: according to the FTC, even if someone knows your username and password, they cannot log in without the second check. It does not make the account impossible to compromise, but it makes it harder." },
                { recommended: false, text: "I do not enable it, to keep logging in simple.", feedback: "It is a personal choice, but it leaves the account depending on the password alone. For important accounts, the extra step usually pays off." },
                { recommended: false, text: "I only enable it if I am forced to.", feedback: "Waiting until it is mandatory leaves a window where the account is less protected, in exactly the accounts that matter most to you." },
              ],
            },
            {
              situation: "You receive a two-step verification approval request that you did not start.",
              options: [
                { recommended: true, text: "I do not approve it and check what is happening; I change the password if I suspect someone has it.", feedback: "A request you did not start can mean someone is trying to log in with your password. Approving it would give them access; verifying and changing the password is the prudent move." },
                { recommended: false, text: "I approve it so it stops appearing.", feedback: "Approving a request you did not start can give another person access. Unexpected requests are something to verify, not to accept." },
                { recommended: false, text: "I ignore it and do nothing else.", feedback: "Ignoring it prevents immediate access, but it does not resolve that someone may have your password. It is worth reviewing it and changing the password." },
              ],
            },
            {
              situation: "A social app asks for access to your location, or you are about to post personal information for everyone to see.",
              options: [
                { recommended: true, text: "I check whether that access is necessary, who can see the information, and what privacy setting makes sense.", feedback: "The FTC suggests reviewing app permissions and adjusting account settings to your preferences, and turning off permissions the app does not need to function." },
                { recommended: false, text: "I grant every permission so the app works without prompts.", feedback: "Many apps work without all the permissions they request. Granting access to location or contacts unnecessarily widens the exposure of your information." },
                { recommended: false, text: "I post now and adjust the privacy later if needed.", feedback: "Once posted, the information may have been seen or copied. Deciding the audience before posting gives you more control." },
              ],
            },
          ],
          summaryTitle: "Summary",
          scoreLabel: "You identified {n} of {total} recommended actions.",
          summary: "Online safety is built through small decisions that can be repeated. When an answer is missed, the explanation already describes the safer practice.",
          reflectionLabel: "To reflect on",
          reflectionPrompt: "Of the five situations, which one is closest to something that could happen to you this week?",
        },
        reflection: {
          prompt: "Which security measure could you review today on one of your most important accounts?",
        },
        support: {
          text: "This content draws on the NIST digital identity guidelines (authentication) and on U.S. Federal Trade Commission (FTC) recommendations about phishing, two-step verification and privacy. These are general guidance; services and platforms change over time.",
          refs: [
            "NIST. Digital Identity Guidelines (SP 800-63B-4, 2025).",
            "FTC. How to recognize and avoid phishing scams.",
            "FTC. Use two-factor authentication to protect your accounts.",
          ],
        },
      },
      m4b: {
        intro: [
          "Social media can support communication, friendship, academic collaboration, access to information, creativity and a sense of community. The aim of this screen is not to “stop using social media”.",
          "Research does not support a simple conclusion that all social-media use has the same effect on wellbeing. How, why and in what context a platform is used may matter more than a single time figure.",
        ],
        main: {
          lead: "Four questions for using social media more intentionally:",
          dimensions: [
            { name: "Intention", text: "Why did I open the platform?" },
            { name: "Attention", text: "Am I still doing what I intended, or did the activity shift without me noticing?" },
            { name: "Connection", text: "Is this interaction helping me communicate, collaborate or connect in a way that feels useful?" },
            { name: "Boundaries and sharing", text: "Do I want to keep using the platform right now? What audience am I sharing with? Is this information something I want to be public?" },
          ],
          extra: [
            "In the studies, high use on its own did not show the same pattern as measures described as “problematic use”. Also, factors such as perceived social support and self-esteem relate to wellbeing more than basic use indicators. In short: how a platform is used may matter more than how much.",
          ],
          note: "These are prompts for reflection, not a validated wellbeing scale.",
        },
        example: {
          text: "Mateo opens a social network to answer a message in a course group. After replying, he starts looking at unrelated posts and, some time later, realises he has stayed much longer than he had planned.",
          note: "The lesson is not “social media is bad”. It is that the original purpose changed without Mateo noticing. Recognising that shift gives him the option to continue intentionally or return to what he had planned.",
        },
        visual: {
          file: "m4b-social-media.svg",
          alt: "Illustration of a student using a phone, with balanced elements for messages, people and connections, content, pause, and privacy.",
          caption: "There is no single correct way to use social media: it helps to notice when you are choosing how to take part and when the activity just continues.",
        },
        interaction: {
          type: "scenarios",
          storageKey: "dw_m4b_cards",
          instructions: "In each situation, choose the response you would try. You will see an explanation and a question to think about. There is no single correct way.",
          savedNote: "Your answers are saved only in this browser; you can clear them with “Reset”.",
          progressLabel: "{n} of {total} decisions made",
          resetLabel: "Reset",
          scenarios: [
            {
              situation: "You opened the app to answer a class-group message, but after replying you have spent several minutes looking at unrelated content.",
              options: [
                { text: "I keep going a while longer because I genuinely want a break.", feedback: "Taking a break on purpose can be reasonable. What matters is that it is a conscious choice and not something that just happened." },
                { text: "I close the app and go back to the task.", feedback: "Going back to the task on purpose is also reasonable. The point is the same: noticing that the purpose had changed." },
                { text: "I keep scrolling without thinking about it.", feedback: "Here the activity continues by habit. Noticing it is what lets you decide whether to keep going or stop." },
              ],
              reflection: "What usually makes you stay in the app longer than you intended?",
            },
            {
              situation: "You see several posts about classmates' achievements and notice yourself starting to compare your progress with what appears in the feed.",
              options: [
                { text: "I remember that posts show only part of other people's experiences.", feedback: "Keeping in mind that a feed is a selection helps put what you see in context. Not everyone posts the same things or at the same rate." },
                { text: "I keep comparing until I feel caught up.", feedback: "Comparing continuously can drag on without a clear end point. If you notice it is not helping, you can change what you are viewing." },
                { text: "I pause or change what I am looking at.", feedback: "Changing the content or pausing is an option when something does not feel good. Seeing achievement posts does not harm mental health by itself, but you decide what you give your attention to." },
              ],
              reflection: "When do social media help you feel connected, and when not so much?",
            },
            {
              situation: "A group chat becomes very active while you are working on an assignment.",
              options: [
                { text: "I keep every alert on.", feedback: "Keeping every alert on makes each message compete with the task. It can make sense if you are expecting something urgent, but not always." },
                { text: "I temporarily mute non-essential alerts and decide when to check.", feedback: "Boundaries can be temporary and context-based: muting for a while is not leaving the group, it is choosing when to attend to it." },
                { text: "I leave the group for good.", feedback: "Leaving entirely is an option, but for a one-off situation a temporary boundary is usually enough." },
              ],
              reflection: "What temporary boundary with notifications would work for you during a study session?",
            },
            {
              situation: "You are about to post something that includes personal information, your location, or something you may not want everyone to see.",
              options: [
                { text: "I check the audience and privacy settings before posting.", feedback: "Deciding who can see it before posting gives you more control. The FTC suggests adjusting account settings to your preferences." },
                { text: "I post first and decide later.", feedback: "Once posted, the content may have been seen or saved even if you delete it afterwards. Choosing the audience first avoids that situation." },
                { text: "I decide not to share that information.", feedback: "That is also a valid option. The idea is not to never share anything, but to choose the audience and what you make public intentionally." },
              ],
              reflection: "What kind of information do you prefer to keep out of your public posts?",
            },
          ],
          summaryTitle: "To finish",
          summary: "There is no single correct way to use social media. What matters is noticing when you are choosing how to participate and when the activity is simply continuing by habit.",
          reflectionLabel: "To reflect on",
          reflectionPrompt: "Of the four situations, which one is closest to something that happens to you often?",
        },
        reflection: {
          prompt: "At what time of day do you use social media most intentionally, and when does it feel more automatic?",
        },
        support: {
          text: "This content draws on recent reviews and meta-analyses of social media and wellbeing, which describe a complex and inconsistent relationship and note that the pattern of use may matter more than the amount. The privacy part uses FTC recommendations.",
          refs: [
            "Ansari et al. (2024). Cyberpsychology, Behavior, and Social Networking.",
            "Yang & Feng (2024). Heliyon.",
            "FTC. How websites and apps collect and use your information.",
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
            "Albulescu, P., Macsinga, I., Rusu, A., Sulea, C., Bodnaru, A., & Tulbure, B. T. (2022). “Give me a break!” A systematic review and meta-analysis on the efficacy of micro-breaks for increasing well-being and performance. <em>PLOS ONE, 17</em>(8), Article e0272460. https://doi.org/10.1371/journal.pone.0272460",
            "Ansari, S., Iqbal, N., Asif, R., Hashim, M., Farooqi, S. R., & Alimoradi, Z. (2024). Social media use and well-being: A systematic review and meta-analysis. <em>Cyberpsychology, Behavior, and Social Networking, 27</em>(10), 704–719. https://doi.org/10.1089/cyber.2024.0001",
            "Appianing, J., Quansah, F., & Amoako, R. (2026). Development and validation of the digital well-being scale using university students. <em>Frontiers in Psychiatry, 17</em>, Article 1853998. https://doi.org/10.3389/fpsyt.2026.1853998",
            "Biedermann, D., Schneider, J., & Drachsler, H. (2021). Digital self-control interventions for distracting media multitasking: A systematic review. <em>Journal of Computer Assisted Learning, 37</em>(5), 1217–1231. https://doi.org/10.1111/jcal.12581",
            "Martin, F., Long, S., Haywood, K., & Xie, K. (2025). Digital distractions in education: A systematic review of research on causes, consequences and prevention strategies. <em>Educational Technology Research and Development, 73</em>(6), 3423–3451. https://doi.org/10.1007/s11423-025-10550-6",
            "Mohd Bahar, F. H., Roslan, N. S., Ping, N. P. T., Abdul Nasir, N. A., Ibrahim, M. S., Adam, S. K., Ahmad Razali, S., & Yusoff, M. S. B. (2026). The digital well-being among learners in higher education: A scoping review. <em>BMC Medical Education, 26</em>(1), Article 1146. https://doi.org/10.1186/s12909-026-09370-w",
            "Stothart, C., Mitchum, A., & Yehnert, C. (2015). The attentional cost of receiving a cell phone notification. <em>Journal of Experimental Psychology: Human Perception and Performance, 41</em>(4), 893–897. https://doi.org/10.1037/xhp0000100",
            "Vézina-Im, L.-A., Morin, C. M., Chen, S., Ivers, H., Carney, C. E., Chaput, J.-P., Dang-Vu, T. T., Davidson, J. R., Robillard, R., & Canadian Sleep Research Consortium. (2025). The complex association between bedtime screen use and adult sleep health. <em>Sleep Health, 11</em>(5), 572–578. https://doi.org/10.1016/j.sleh.2025.06.010",
            "Wang, J., Ishak, I., Mazri, F. H., Siau, C. S., Xin, F., Wang, X., & Mat Ludin, A. F. (2025). Sleep quality and related risk factors among college students in China: A systematic review and meta-analysis. <em>American Journal of Translational Research, 17</em>(12), 10111–10128. https://doi.org/10.62347/bpae1262",
            "Wu, Y., Van Gerven, P. W. M., de Groot, R. H. M., Eijnde, B. O., Winkens, B., & Savelberg, H. H. C. M. (2023). Effects of breaking up sitting with light-intensity physical activity on cognition and mood in university students. <em>Scandinavian Journal of Medicine &amp; Science in Sports, 33</em>(3), 257–266. https://doi.org/10.1111/sms.14277",
            "Yang, Q., & Feng, Y. (2024). Relationships between social networking sites use and subjective well-being: A meta-analysis and meta-analytic structural equation model. <em>Heliyon, 10</em>(12), Article e32463. https://doi.org/10.1016/j.heliyon.2024.e32463",
          ],
        },
        {
          id: "institutional",
          title: "Institutional sources",
          items: [
            "American Academy of Ophthalmology. (2023). <em>Eye strain and sleepy eyes: How to prevent eye discomfort</em>. Retrieved September 2, 2026, from https://www.aao.org/eye-health/diseases/what-is-eye-strain",
            "Federal Trade Commission. (2022). <em>How to recognize and avoid phishing scams</em>. Consumer Advice. Retrieved September 2, 2026, from https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams",
            "Federal Trade Commission. (2022). <em>Use two-factor authentication to protect your accounts</em>. Consumer Advice. Retrieved September 2, 2026, from https://consumer.ftc.gov/articles/use-two-factor-authentication-protect-your-accounts",
            "Federal Trade Commission. (2023). <em>How websites and apps collect and use your information</em>. Consumer Advice. Retrieved September 2, 2026, from https://consumer.ftc.gov/articles/how-websites-and-apps-collect-and-use-your-information",
            "Jisc. (n.d.). <em>Digital wellbeing</em>. Building digital capability. Retrieved September 2, 2026, from https://digitalcapability.jisc.ac.uk/what-is-digital-capability/digital-wellbeing/",
            "National Institute of Standards and Technology. (2025). <em>Digital identity guidelines: Authentication and authenticator management</em> (NIST Special Publication 800-63B-4). https://doi.org/10.6028/NIST.SP.800-63b-4",
          ],
        },
        {
          id: "images",
          title: "Image and illustration sources",
          items: [
            "Original project illustrations in SVG format: <em>home-balance.svg</em>, <em>m1a-balance.svg</em>, <em>m1b-awareness.svg</em>, <em>m2a-screen-time.svg</em>, <em>m2b-distractions.svg</em>, <em>m3a-sleep.svg</em>, <em>m3b-breaks.svg</em>, <em>m4a-online-safety.svg</em> and <em>m4b-social-media.svg</em>. Created for this educational resource; no stock image banks or third-party resources are used.",
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
