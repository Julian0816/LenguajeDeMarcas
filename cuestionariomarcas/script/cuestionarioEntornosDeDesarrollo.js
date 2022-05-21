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
}

function generateListItems(arg) {
    let items = "";
    for (let i = 0; i < arg.length; i++) {
        items += `<li>${arg[i]}</li>`;
    }
    return items;
};


const tema1 =
["¿Qué lenguaje es directamente ejecutable por la computadora? // Maquina",
"La elaboración de documentación es una pérdida de tiempo // Falso",
"Al desarrollar una aplicación podemos prescindir de // Manual de identidad",
"Cuál de las siguientes fases NO forman parte del desarrollo de una aplicación //Marketing (Forman parte: Analisis, pruebas y diseno)",
"Los lenguajes de programación pueden ser (marca la incorrecta) // ULTRA BAJO NIVEL (Correctas: Bajo nivel o maquina, Nivel medio o ensamblador, ALto nivel)",
"El software es la parte intangible o soporte lógico de un sistema informático ¿Verdadero o Falso? // Verdadero",
"¿Qué es la criptografía? // Ciencia o Arte cuyo objetivo es hacer que un mensaje sea ininteligible a los receptores no autorizados",
"De todos los tipos de software, ________ es el encargado de gestionar los recursos hardware de un computador // El sistema operativo",
"Entre los roles del proceso de desarrollo de software están (selecciona la incorrecta) // Recolector de basura",
"Con lenguajes interpretados son fases (marca la incorrecta) // Enlazado",
"GUI es: // Acrónimo del inglés graphical user interface (interfaz gráfica de usuario)",
"Lo más conveniente es que las pruebas de software se realicen sólo sobre el sistema completo, ya que no detectaríamos los errores en cada trozo de manera individual ¿Verdadero o Falso? // Falso",
"Son tipos de software (marca la incorrecta) // ALU (Respuesta correcta: Sistema operativo, sofware de programacion, aplicaciones)",
"Con lenguajes compilados son fases (marca la incorrecta) // TRADUCCION (La respuesta correcta es: Codigo fuente, compilacion, programa objeto)",
"Cuando hablamos de POO ¿a qué nos referimos? // Programacion orientada a onjetos",
"Java es un lenguaje (selecciona la incorrecta) // Compilado (La correcta es: Interpretado, Orientado a objetos, permite multihilos)",
"Código objeto es el resultado de compilar el código fuente. Puede ser código máquina o bytecode // Verdadero",
"En programación, a un conjunto de conceptos, estructuras, funciones y componentes, se le conoce como: // Framework",
"Código ejecutable es el resultado de compilar y enlazar el código con el IDE // Falso"];

const tema2 = 
["Cuál de los siguientes no es un entorno de desarrollo online // XCode",
"El JRE (Java Runtime Enviroment) // Es el software utilizado por los usuarios",
"El IDE Netbeans está escrito en lenguaje // Java",
"Las aplicaciones para iOS ... // Se pueden desarrollar de forma gratuita",
"ablando de desarrollo ¿Qué significa el acrónimo RAD? // Rapid Application Development",
"Cuando hablamos de la depuración de un programa nos referimos a // al proceso de identificación y corrección de erroes",
"El concepto/herramienta de punto de interrupción o breakpoint pertenece a la fase de // Depuracion",
"Para qué es necesario el JDK // Para el desarrollo de apliaciones Java",
"¿Cuál de los siguientes elementos NO forma parte de un IDE? // EJECUTOR (Si froman parte: Editor, depurador, compilador)",
"Qué resultado nos da el comando jar -tvf archivo.jar // Nos permite ver el contenido del fichero archivo.jar",
"La Java Virtual Machine (JVM) // es capaz de ejecutar el mismo programa java sea cual sea la máquina anfitriona",
"El resultado de ejecutar el comando 'javac -version' nos indica // que ya está instalado el JDK",
"Xcode es la herramienta para realizar aplicaciones para dispositivos: // Apple",
"La herramienta que extrae los textos y comentarios del código fuente en Java y los transforma en páginas web es // javadoc",
"Cuando hablamos de JAR nos referimos a ? // Java ARchive. Tipo de archivo que permite ejecutar aplicaciones escritas en lenguaje Java",
"JDT // Java Development Toolkit",
"Qué significan las siglas EPL? // Eclipse public license",
"¿Qué conseguimos al ejecutar el comando jar cf HolaMundo.jar HolaMundo.class? // Crea el fichero HolaMundo.jar a partir de la clase HolaMundo.class",
"El IDE Xcode tiene versiones para qué sistemas operativos // MacOs",
"Para ejecutar un programa Java, es necesario tener el JDK // Falso"]

const tema3 = ["Marca la afirmación correcta // Las pruebas de caja blanca conocen y tienen en cuenta el código. Mientras que las de caja negra lo desconocen y sólo prueban la interfaz.",
"¿Qué es MD5? // Es un algoritmo de reducción criptográfico que sirve para saber si una información ha sido modificada",
"¿Qué es una RTF? // Revision Tecnica Formal",
"¿Cuál de las siguientes no es una métrica de calidad del software? // Tiempo de entrega o Lead Time (Lo son: Número de errores por línea de código, Número de revisiones realizadas a un módulo, Rendimiento o Throughput)",
"Sahi es una herramienta para // Testear aplicaciones web",
"¿Cuál de los siguientes elementos no suele formar parte de un caso de pruebas? // IDE utilizado",
"Habitualmente se encargan de hacer las pruebas // Personal independiente del equipo de desarrollo",
"Es importante que el diseño de las pruebas sea lo suficientemente complejo para que nos aporte información de interés, pero no tanto como para que el coste de detección de los errores sea muy alto // True",
"La documentación de las pruebas // Es importantísima para el correcto desarrollo de las mismas",
"Es preferible repetir las mismas pruebas a realizar pruebas diferentes // False",
"¿Por qué se caracteriza una prueba de clases de equivalencia de datos? // Por el uso de clases de entrada válidos y no válidos",
"¿Qué es un caso de prueba? // Conjunto de entradas, condiciones y salidas esperadas diseñadas para un objetivo concreto",
"El objetivo de las pruebas de software es // Detectar errores, analizar el rendimiento, comprobar la apariencia y el cumplimiento de determinadas características",
"¿Qué significan las siglas SQA? // Software Quality Assurance",
"Es una prueba de caja negra // De Interfaces",
"Las pruebas de valores límite // Son imprescindibles durante el desarrollo y testeo del software",
"¿Cuál de los siguientes aspectos no forma parte de un plan de pruebas? // Recogida de requisitos del software",
"El hecho de que un software supere todas las pruebas realizadas sobre él nos indica que está libre de errores // False",
"Es una prueba de caja blanca // De cubrimiento"]

const tema4 = ["Git no está recomendado para proyectos grandes // Falso",
"Un patrón de diseño Visitor o Visitante permitirá al programador definir nuevas operaciones sin modificar las clases sobre una jerarquía. // Verdadero",
"Refactorizar no ayuda a que los programas tengan más calidad pero sí asegura que sean más robustos. // Falso",
"SOLID son las iniciales de estas expresiones: single responsibility // Verdadero",
"Hay que diseñar las clases para que los objetos tenga solamente una única responsabilidad. // Verdadero",
"Git es un SCV gratuito y de código abierto. // Verdadero",
"Según Liskov, si en un programa OO sustituimos un objeto por alguna superclase suya, el funcionamiento del programa debería ser idéntico. // Falso",
"Autoencapsular atributos es una buena práctica. Los atributos se definen como public y luego se encapsulan con getters y setters. // Falso",
"Extract method es una refactorización en la que se realiza una reducción lógica al código. // Verdadero",
"A la vez que se crea nuevo código se debería refactorizar y crear casos de prueba. // Verdadero",
"Al utilizar una variable autoexplicativa el código resulta más legible y sencillo. // Verdadero",
"Según SOLID es mejor crear muchas interfaces específicas separadas que una interfaz general amplia. // Verdadero",
"Un patrón de diseño Memento o Recuerdo permite trasladar un conjunto de objetos o sistema a un estado anterior. // Verdadero",
"Se recomienda evitar utilizar variables temporales para almacenar resultados intermedios de las operaciones. // Verdadero",
"Un método inline intenta ocultar la lógica del programa factorizando el código. // Falso"]

const tema5 = ["En una agregación, al eliminar el objeto se destruirán también sus agregados. // Falso",
"La programación orientada a objetos sigue la filosofía divide et impera (dividir el problema en objetos). // Falso",
"Una composición es un tipo de asociación. // Verdadero",
"La multiplicidad 12,24 quiere decir que pueden existir de 12 a 24 objetos de dicha clase. // Falso",
"Los métodos son la parte dinámica de la clase y deberían seguir la notación camellCase. // Verdadero",
"El UML es útil tanto en proyectos pequeños como en proyectos muy grandes. // Verdadero",
"En el nivel protegido, las subclases podrán utilizar los atributos y métodos protegidos de la clase base, pero las subclases de estas NO los heredarán. // Verdadero",
"El OMG se encarga del estándar UML. // Verdadero",
"En una composición, al eliminar el objeto se destruirán también sus compuestos. // Verdadero",
"En UML no es posible establecer valores por defecto a ciertos atributos. Esto se hace en la fase de programación. // Falso",
"En UML se definen las clases. No es posible modelar objetos. // Falso",
"Un objeto siempre es una entidad que tiene una serie de propiedades y un comportamiento. // Verdadero",
"Una agregación es un tipo de asociación. // Verdadero",
"La POO intenta representar la realidad de aquellas partes o elementos que forman el problema que hay que resolver. // Verdadero",
"UML es el acrónimo de united modeling language. // Falso"]

const tema6 = ["Cuando se representa un caso de uso lo que se está representando es la funcionalidad del sistema. // Verdadero",
"La generalización y la especialización son posibles tanto en casos de uso como en actores. // Verdadero",
"Si tenemos un diagrama de estados y vemos en él un punto sólido, estamos ante el comienzo de una serie de estados. // Verdadero",
"Los diagramas de secuencia son asíncronos, es decir, no tienen en cuenta el tiempo. // Falso",
"Cuando existe un caso de uso y otro que representa una variante del mismo se representarán ambos mediante un extends. // Verdadero",
"Si por ejemplo dentro de un enunciado leo algo como ?generar informe?, casi con toda seguridad estoy ante un caso de uso. // Verdadero",
"Un mensaje asincrónico nunca permite que el método que originó la llamada siga su ejecución normal. // Falso",
"Imagina un caso de uso en el que se realicen dos o más tareas. Se podría modelar cada una de las tareas en un caso de uso aparte y un include a la tarea principal. // Falso",
"La recursividad en un diagrama de secuencia está permitida, es decir, un objeto puede enviarse un mensaje a sí mismo. // Verdadero",
"Hay una correlación directa entre un caso de uso y un diagrama de secuencia. // Verdadero",
"Aunque la información que aparece en un diagrama de colaboración es diferente a la de un diagrama de secuencias, en ambos se representa la variable tiempo. // Falso",
"Los diagramas de secuencia son modelos que pueden ser extraídos de los diagramas de clase y de los diagramas de casos de uso. // Verdadero",
"Hay una regla fundamental que es intentar incluir en un diagrama de casos de uso cuantos más aspectos de diseño mejor. De esa más definido estará el caso de uso. // Falso",
"Los estados se representan con un recuadro no redondeado. // Falso",
"Por experiencia, cuando en un enunciado leo un verbo, generalmente se puede identificar en el mismo un caso de uso. // Verdadero",
"Dentro de un diagrama de secuencia puede incluirse un diagrama de interacción. // Verdadero",
"En un diagrama de colaboración se puede ver tanto el orden en el que se ejecutarán las acciones en un sistema como los objetos responsables de las mismas. // Verdadero",
"En los casos de uso cuando se representa el sistema habrá que englobar dentro del mismo tanto los casos de uso como los actores que intervienen en el mismo. // Falso"]

