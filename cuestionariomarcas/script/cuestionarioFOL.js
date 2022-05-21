function pwcheck() {
    i=3;
    
    var contraseña = document.getElementById("caja").value;
    campoMensaje = document.getElementById("mensaje"); //Esta es la segunda parte del ejercicio

    if(contraseña==1) {
        document.querySelector("main").innerHTML = `
        <ol>
        ${generateListItems(tema1)}
        </ol>
        `;
    }
    else if (contraseña==2) {
        document.querySelector("main").innerHTML = `
        <ol>
        ${generateListItems(tema2)}
        </ol>
        `;
    }
    else if (contraseña==3) {
        document.querySelector("main").innerHTML = `
        <ol>
        ${generateListItems(tema3)}
        </ol>
        `;
    }
    else if (contraseña==4) {
        document.querySelector("main").innerHTML = `
        <ol>
        ${generateListItems(tema4)}
        </ol>
        `;
    }
    else if (contraseña==5) {
        document.querySelector("main").innerHTML = `
        <ol>
        ${generateListItems(tema5)}
        </ol>
        `;
    }
    else if (contraseña==6) {
        document.querySelector("main").innerHTML = `
        <ol>
        ${generateListItems(tema6)}
        </ol>
        `;
    }
    else if (contraseña==7) {
        document.querySelector("main").innerHTML = `
        <ol>
        ${generateListItems(tema7)}
        </ol>
        `;
    }
    else if (contraseña==8) {
        document.querySelector("main").innerHTML = `
        <ol>
        ${generateListItems(tema8)}
        </ol>
        `;
    }
    else if (contraseña==9) {
        document.querySelector("main").innerHTML = `
        <ol>
        ${generateListItems(tema9)}
        </ol>
        `;
    }
    else if (contraseña==10) {
        document.querySelector("main").innerHTML = `
        <ol>
        ${generateListItems(tema10)}
        </ol>
        `;
    }
    else if (contraseña==11) {
        document.querySelector("main").innerHTML = `
        <ol>
        ${generateListItems(tema11)}
        </ol>
        `;
    }
    else if (contraseña==12) {
        document.querySelector("main").innerHTML = `
        <ol>
        ${generateListItems(tema12)}
        </ol>
        `;
    }
    else if (contraseña==13) {
        document.querySelector("main").innerHTML = `
        <ol>
        ${generateListItems(tema13)}
        </ol>
        `;
    }
    else if (contraseña==14) {
        document.querySelector("main").innerHTML = `
        <ol>
        ${generateListItems(tema14)}
        </ol>
        `;
    }
    else if (contraseña==15) {
        document.querySelector("main").innerHTML = `
        <ol>
        ${generateListItems(tema15)}
        </ol>
        `;
    }
    else if (contraseña==16) {
        document.querySelector("main").innerHTML = `
        <ol>
        ${generateListItems(tema16)}
        </ol>
        `;
    }
}

function generateListItems(arg) {
    let items = "";
    for (let i = 0; i < arg.length; i++) {
        items += `<li>${arg[i]}</li>`;
    }
    return items;
};


const tema1 =
["El trabajador siempre tiene que cumplir las órdenes dadas por el empresario: // No, hay supuestos en los que no tiene que cumplirlas",
"El empresario puede proceder al registro de los enseres personales de los trabajadores // Sí, siempre que sea en horario y dentro del centro de trabajo, en su presencia y la de un representante de los trabajadores",
"En caso de controversia entre dos normas laborales la que se aplica es: // La que más favorezca al trabajador",
"La adecuada utilización de las medidas de prevención de riesgos laborales es: // Un derecho para los trabajadores, el empresario debe facilitar las medidas; y, a la vez tiene la obligación de usarlas",
"Las características de una relación laboral son: // Personal, voluntario, dependiente, por cuenta ajena y retribuido",
"Los poderes del empresario son: // De dirección, de control, disciplinario y de modificación",
"Los trabajadores de una empresa venían disfrutando de una Cesta en Navidad, podría el empresario dejar de entregar estas cestas: // No, por la regla de la condición más beneficiosa.",
"Un trabajador firma un contrato en el que se le prohíbe la afiliación a un sindicato, esta cláusula es: // Nula, puesto que supone la renuncia a un derecho del trabajador",
"Cuál de las siguientes relaciones está excluida del Derecho del Trabajo // Los funcionarios públicos",
"Cuál de las siguientes fuentes del derecho son propias del Derecho del Trabajo: // Los convenios colectivos, los contratos de trabajo y los usos y constumbres propias"];

const tema2 = 
["El encadenamiento de contratos se produce cuando // Existen dos o más contratos que superan los 24 meses en un periodo de 30 meses",
"Los contratos celebrados en fraude de ley // Se convierten automáticamente en indefinidos ordinarios",
"El empresario puede ser? // Una persona física, persona jurídica o comunidad de bienes",
"El contrato de trabajo puede ser en forma oral?. // En los contratos indefinidos ordinarios y en los eventuales por circunstancias de la producción de duración inferior a 4 semanas",
"Durante el periodo de prueba el trabajador? // Tienen los mismos derechos y deberes que el resto de la plantilla",
"Un contrato con cláusulas nulas // Sólo se anulan las cláusulas que son nulas, el resto siguen vigentes",
"Los menores de edad puede trabajar? // Desde los 16 años, con el consentimiento de sus padres o tutores",
"Los contratos de duración determinada son // Por obra y servicio determinado, eventual por circnstancias de la producción e interinidad",
"Una menorde 17 años a la que sus padres la han autorizado para trabajar, quiere dejar su trabajo // Puede dejar de trabajar sin contar con sus padres de usarlas",
"Cuánto puede durar en el tiempo un pacto de no concurrencia o competencia desleal // Mientras presta sus servicios en la empresa"]

const tema3 = ["La duración máxima de un contrato en prácticas es de: // Dos años",
"En los contratos formativos para la formación y el aprendizaje el tiempo de trabajo efectivo?. // No podrá superar el setenta y cinco por ciento durante el primer año, ni el ochenta y cinco por ciento durante el segundo y tercer año",
"La duración máxima de un contrato eventual por circunstancias de la producción será de: // Seis meses dentro de un periodo de 12 meses",
"Los contratos celebrados en fraude de ley?. // Se convierten en contratos indefinidos ordinarios y a jornada completa",
"Los trabajadores a tiempo parcial? // No pueden realizar horas extraordinarias",
"El encadenamiento de contratos se produce cuando los trabajadores?. // Han estado vinculados con la misma empresa o grupo de empresas, con dos o más contratos temporales, durante veinticuatro o más meses en un periodo de referencia de treinta meses",
"El contrato de trabajo para la formación y el aprendizaje va dirigido a? // Trabajadores que no tienen formación",
"El contrato de trabajo en grupo es aquel? // El empresario contrata un grupo de trabajadores considerado en su totalidad",
"El contrato de relevo?. // Es aquél que se celebra con un trabajador para cubrir la vacante que deja otro trabajador en situación de jubilación parcial",
"El contrato a tiempo parcial // Se ha de formalizar por escrito, haciendo constar expresamente el número de horas que se trabajarán al día, semana, meso o año y su distribución"]

const tema4 = ["El descanso mínimo semanal para los mayores de edad es de: // Un día y medio",
"El trabajador puede reducir la jornada por guarda legal de un menor hasta la edad de: // Doce años",
"Indica el límite mínimo de descanso que debe mediar entre el final de una jornada laboral y el comienzo de la siguiente: // Doce horas",
"La jornada máxima diaria para los mayores de edad es de: // Nueve horas",
"Las horas extraordinarias son voluntarias, salvo que: // Todas las respuestas son correctas (Vengan establecidas por convenio, Sean de fuerza mayor, Se pacten por contrato)",
"Se considera trabajador nocturno aquél que trabaje: // Todas las respuestas son correctas (Al menos un tercio de la jornada anual en horario nocturno, Cuatro horas en horario nocturno, Tres horas en jornada de noche)",
"Según el Estatuto de los Trabajadores se respetarán como fiestas de ámbito nacional: // 1 de mayo, Fiesta del trabajo",
"Si se compensan las horas extraordinarias por tiempo de descanso, en qué periodo podrá disfrutarlo el trabajador: // En los cuatro meses siguientes",
"La duración mínima de las vacaciones debe ser de: // Treinta días naturales",
"Indica cuál es el promedio de la jornada máxima semanal // Cuarenta horas en cómputo anual"]

const tema5 = ["La excedencia por cuidado de un familiar reserva el puesto de trabajo que el trabajador ocupaba durante // Un año",
"La falta de adaptación de un trabajador a las modificaciones introducidas en su puesto de trabajo es causa de: // Despido por causas objetivas",
"La indemnización de un trabajador que extingue su contrato al sufrir una modificación sustancial de las condiciones del contrato de trabajo será de: // Veinte días de salario por año de servicio con un máximo de nueve mensualidades",
"La indemnización de un trabajador que extingue su contrato al sufrir una movilidad geográfica definitiva será de: // Veinte días de salario por año de servicio con un máximo de doce mensualidades",
"Si un trabajador falta a su trabajo, puede ser despedido mediante despido disciplinario siempre que las faltas // Sean repetidas y estén injustificadas",
"Si una mujer es incluida en un Expediente de Regulación del Empleo (ERE), despido colectivo, estando embarazada, el despido es? // Nulo",
"Simular una enfermedad puede ser causa de: // Despido disciplinario, al tratarse de una transgresión de la buena fe",
"Un empresario puede realizar una movilidad funcional dentro del mismo grupo profesional // Sin necesidad de alegar causa alguna",
"Indica cuál de las siguientes situaciones es causa de suspensión del contrato de trabajo // Todas las respuestas son verdaderas (Ejercicio de cargo público representativo, Incapacidad temporal de un trabajador, Maternidad)",
"El plazo que tiene el trabajador para impugnar o reclamar un despido con el que no está de acuerdo es de // Veinte días hábiles"]

const tema6 = ["En el cálculo de las indemnizaciones la cantidad que tenemos en cuenta para el finiquito es? // Se lleva al finiquito la cantidad menor",
"Las nóminas correspondientes a las pagas extraordinarias // Tributan por IRPF",
"La base de cotización por contingencias profesionales // Es la base de cotización por contingencias comunes más las horas extraordinarias",
"Las pagas extraordinarias // Son mínimo dos al año",
"Para el cálculo de los días de vacaciones que le corresponden a un trabajador // No se tienen en cuenta los decimales y se redondea al alza",
"En el cálculo de la base de cotización por contingencias comumes no se incluyen // Las horas extraordinarias",
"El salario en especie no debe superar // El 30% de las percepciones salariales",
"El importe de cada paga extraordinaria // Como mínimo será el salario base, pero habrá que tener en cuenta lo que dice el convenio colectivo",
"El FOGASA ?. // Es un organismo autónomo adscrito al Ministerio de Empleo y Seguridad Social",
"El documento de finiquito // Es la suma de todos los conceptos adeudados al trabajador, tales como nómina, pagas extraordinarias devengadas y no cobradas, vacaciones, preaviso e indemnización"]

const tema7 = ["Indica, de los siguientes colectivos, quienes no tienen derecho a la sindicación // Los miembros de las Fuerzas Armadas",
"La asociación permanente de trabajadores para la representación y mejora de sus intereses profesionales y de sus condiciones de vida son // Los sindicatos",
"La huelga se debe comunicar con una antelación mínima // De 5 días naturales y 10 si se trata de servicios públicos",
"La libertad sindical es un derecho constitucional reconocido en el artículo 28 de la Constitución que implica: // Afiliarte al sindicato de tu libre elección",
"Los delegados de personal son representantes de los trabajadores en aquellas empresas que tengan // Más de 10 trabajadores y menos de 50",
"Pueden ser electores en las elecciones sindicales los trabajadores mayores de // 16 ños y una antigüedad de un mes en la empresa",
"Indica el número mínimo de trabajadores que debe tener una empresa para que se elija un comité de empresa // Cincuenta",
"El comité de empresa representa // Todos los trabajadores de la empresa",
"El cierre patronal es posible para que el empresario pueda: // Defenderse de una huelga que cause graves daños a las personas o a las cosas",
"Durante una huelga, el empresario // No puede contratar a nuevo personal para sustituir a los trabajadores en huelga"]

const tema8 = ["La edad de jubilación es // Aumenta progresivamente hasta el año 2027 que será de 67 años",
"La incapacidad permanente total inhabilita al trabajador para: // Realizar tareas de su profesión; no obstante, puede dedicarse a otras distintas",
"Tienen derecho a la pensión de orfandad // Todas las opciones son correctas (Los menores de 21 años, Si no realizan actividad, se amplía hasta los 25 años, igual que si sus ingresos resulten inferiores al SMI en cómputo anual, Los hijos incapacitados para trabajar)",
"¿Cuál de los siguientes trabajadores se encuadra dentro del régimen general de la Seguridad Social? // Un Técnico de Laboratorio que trabaja en una clínica",
"¿Qué organismo gestiona la prestación por desempleo? // El Servicio Público de Empleo Estatal (SEPE)",
"La duración de la prestación de paternidad desde el 01/04/2019 hasta el 31/12/2019 es de // 8 semanas",
"La cuantía de la prestación por patenidad será de: // 100% de la BR del trabajador",
"La acción protectora de la Seguridad Social // Abarca la asistencia sanitaria y las prestaciones económicas correspondientes",
"El permiso de maternidad de 16 semanas puede ser disfrutado // Ninguna es correcta (Las diez semanas inmediatamente posteriores al parto pueden ser disfrutadas por ambos progenitores de manera simultánea o sucesiva, si ambos trabajan, Entero por el otro progenitor si el menor está hospitalizado, La madre puede ceder, si quiere, cinco semanas al otro progenitor para que las disfrute de manera sucesiva o simultánea a ella)",
"Durante los tres primeros días, en una incapacidad temporal derivada de enfermedad común, el subsidio es de // No hay subsidio los tres primeros días"]

const tema9 = ["Para poder hablar de accidente de trabajo, ¿qué requisitos es necesario que concurran? // Que sea en el trabajo por cuenta ajena, que haya lesión corporal y que exista relación causa-efecto entre accidente y trabajo",
"Cuando hablamos de las condiciones de trabajo que incrementan la posibilidad de sufrir un daño derivado del trabajo, hacemos referencia a: // Un factor de riesgo",
"Cuando hablamos de la posibilidad de sufrir un daño derivado del trabajo, nos referimos a: // Un riesgo laboral",
"La responsabilidad administrativa consiste en // Una multa",
"La prevención de riesgos laborales es el conjunto de medidas adoptadas por la empresa para: // Evitar los riesgos derivados del trabajo",
"El accidente in itinere es aquel que: // Se produce al ir o volver del trabajo",
"Las enfermedades del trabajo son: // Enfermedades con causa en el trabajo pero no incluidas en el cuadro de enfermedades profesionales",
"Cuando un trabajador se incorpora a una empresa, ésta debe: // Informarle y formarle sobre los riesgos a los que está expuesto",
"No se consideran trabajadores especialmente sensibles: Los que desarrollan trabajos de especial peligrosidad",
"¿Cuál de los siguientes requisitos es necesario para que exista enfermedad profesional? // Debe venir incluida en el Real Decreto que regula las enfermedades profesionales"]

const tema10 = ["Para que se produzca un incendio son necesarios: // Un combustible, un comburente, una energía de activación y una reacción en cadena",
"Los riesgos derivados de las condiciones de seguridad no los generan: // La manipulación de cargas",
"Son medidas de prevención frente a la exposición a vibraciones // La instalación de suspensiones",
"El estrés térmico es: // La cantidad de calor que los trabajadores reciben y acumulan en su cuerpo",
"La hepatitis B se produce como consecuencia de la exposición a: // Riesgos biológicos",
"El mobbing es: // Una forma de acoso en el trabajo",
"Ante un riesgo químico cuál sería la medida preventiva: // Todas las respuestas son correctas (Ventilación general del lugar de trabajo, Rotación de los trabajadores, Sustitución de los productos)",
"Los rayos X son un tipo de radiación: // Ionizante",
"Es causa de fatiga por carga física: // La postura forzada",
"Es un factor de riesgo psicosocial: // Todas las respuestas son correctas (La monotonía en el trabajo, El horario en el trabajo, La estabilidad en el empleo)"]

const tema11 =["El orden correcto de actuación ante una situación de emergencia es: // Alerta, alarma, intervención y evacuación.",
"La seguridad en el trabajo es una técnica preventiva que trata de evitar: // Los accidentes de trabajo",
"El documento en el que la empresa planifica y da respuesta a las posibles situaciones de emergencia se llama: // Plan de autoprotección.",
"La prevención consiste en: // El conjunto de actividades adoptadas o tendentes a eliminar, minimizar o disminuir los daños que sobre los trabajadores podrían ocasionar los diferentes riesgos previstos.",
"No es un medio de protección colectiva que evite el riesgo de caída desde altura: // Un arnés.",
"¿Cuándo deben utilizarse las medidas de protección individual? // Cuando los riesgos no se puedan eliminar o reducir con las medidas colectivas.",
"Los equipos de protección individual? // Los financia el empresario.",
"La señalización de seguridad tiene como finalidad: // Indicar un riesgo o como actuar ante el mismo.",
"La protección en materia de riesgos laborales es: // El conjunto de medidas adoptadas o previstas en todas las fases de la actividad de la empresa dirigidas a evitar la aparición de riesgos laborales.",
"Para que se produzca la evacuación de un centro debe tratarse de: // Una emergencia general."]

const tema12 = ["Las medidas para controlar o eliminar un riesgo se proponen en: // La planificación de la actividad preventiva.",
"Cuando la evaluación ha puesto de manifiesto riesgos laborales, se debe: // Realizar la planificación de la acción preventiva.",
"Para estimar un riesgo en la evaluación de riesgos, hay que tener en cuenta: // Su probabilidad y gravedad.",
"Toda actuación preventiva tiene que tener en cuenta una serie de principios. El primero es: // Evitar los riesgos.",
"La participación de los trabajadores en materia de prevención de riesgos laborales se hace a través de: // Los delegados de prevención.",
"El órgano de participación paritario en materia de prevención de riesgos laborales es: // Elcomité de seguridad y salud.",
"Son instrumentos del plan de prevención: // La evaluación de riesgos y la planificación de la acción preventiva.",
"La evaluación de riesgos es un proceso destinado a: // Estimar la magnitud de los riesgos que no puedan evitarse.",
"El documento a través del cual se integra la prevención en el sistema de gestión de la empresa es: // El plan de prevención.",
"El plan de prevención es un documento: // De realización obligatoria para las empresas."]

const tema13 = ["Cuando se habla de primeros auxilios, PAS significa: // Proteger, avisar, socorrer",
"En la RCP el ritmo de las compresiones torácicas cuando sólo hay un socorrista es: // 30/2",
"Indica qué actuación no debe realizarse en caso de atragatamiento parcial u obstrucción incompleta. // Golpear en la espalda.",
"La maniobra frente-mentón se utiliza para: // Abrir las vías respiratorias.",
"En primeros auxilios, PLS significa: // Posición lateral de seguridad",
"¿Cuál es la primera actuación en caso de parada respiratoria? // Comprobar la consciencia.",
"En caso de hemorragia, indica qué técnica se debe realizar en primer lugar: // Compresión directa.",
"Los primeros auxilios son las medidas que se adoptan para: // Atender inicialmente a un accidentado o un enfermo repentino en el mismo lugar de los hechos hasta que se pueda obtener una asistencia médica profesional.",
"La principal medida en caso de quemaduras es: // Refrescar con agua la zona quemada.",
"El triaje es una técnica que se utiliza para: // Priorizar a los heridos en caso de accidente múltiple."]

const tema14 = ["El Europass: // Contiene el curriculum vitae europeo.",
"Para hacer networking, la red más adecuada es: // Linkedin",
"El networking no consiste en: // Contactar con conocidos y desconocidos para establecer relaciones personales.",
"El portal europeo para buscar oportunidades de formación en Europa se denomina: // Ploteus",
"Son competencias profesionales: // Las destrezas y habilidades.",
"Las marca personal es: // La percepción que los demás tienen de una persona como profesional.",
"El suplemento Europass al título superior: // Es un documento adjunto a un título de FP, que facilita la comprensión a terceros del significado del título en términos de competencias adquiridas.",
"La realización del autoanálisis te ayudará: // Detectar tus puntos fuertes y débiles del curriculum.",
"Las competencias personales: // Son válidas para cualquier puesto de trabajo.",
"Las Empresas de Trabajo Temporal: // Son empresas que contratan trabajadores para cederlos a otras empresas."]

const tema15 = ["Son características de los equipos de trabajo: // Todas las opciones son correctas. (Perseguir un objetivo común., Tener conciencia de pertenencia al equipo., Dotarse de una estructura básica.)",
"Una tormenta de ideas es un método de trabajo en equipo que busca: // Generar ideas.",
"Respecto al rol de equipo podemos decir que? // Todas las opciones son correctas. (Es una particular tendencia a comportarse, contribuir e interrelacionarse con los demás de una determinada manera., Se pueden clasificar en roles de acción, sociales y mentales., Comprender nuestros propios roles es necesario y nos sirve de ayuda.)",
"Los equipos de trabajo: // Generan sinergias que redundan en la calidad del trabajo.",
"Una barrera psicológica en la cmunicación dentro de los grupos puede ser: // Los prejuicios sobre las personas o las cosas.",
"El role playing: // Es una técnica que pide a los miembros del equipo que simulen una situación imaginaria como si fuera real.",
"El objetivo de una entrevista pública es: // Obtener información.",
"La inteligencia emocional está formada por: // Las competencias personales que completan los estudios y las capacidades profesionales.",
"Entre las utilidades de la técnica del estudio de casos, está su aplicación para: // Analizar y buscar soluciones a un problema real.",
"Una de las competencias que más demandan las empresas es: // Capacidad para trabajar en equipo"]

const tema16 = ["Una controversia clara indica que: // Las partes comunican que existe un problema que hay que resolver.",
"Un conflicto es una situación que puede tener carácter: // En ocasiones puede ser positivo.",
"Cuando en una negociación una de las partes utiliza una estrategia de competición, se entiende que: // La actitud que se va a mantener en el proceso será básicamente defensiva.",
"El conflicto latente es aquel que: // No se manifiesta expresamente, pero existe.",
"Se entiende por actitud: // La manera en que nuestro ánimo o nuestra mente se enfrentan a una situación.",
"La experiencia personal o profesional: // Puede evitar conflictos si las personas se han enfrentado a situaciones similares en el pasado.",
"En la estrategia negociadora cooperativa, los sujetos: // Tienden a colaborar para lograr una solución.",
"Si las partes en un conflicto se someten a un arbitraje para lograr la solución del mismo, deben saber que el árbitro: // Va a dictar la solución por medio de un laudo de obligado cumplimiento.",
"La negociación es un método para resolver problemas que utiliza como elemento imprescindible: // El diálogo.",
"La justicia como criterio para solucionar un problema supone que se piensa que el beneficio llegue a: // Quien realmente corresponda."]