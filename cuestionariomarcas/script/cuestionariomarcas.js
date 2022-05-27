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
}

function generateListItems(arg) {
    let items = "";
    for (let i = 0; i < arg.length; i++) {
        items += `<li>${arg[i]}</li>`;
    }
    return items;
};


const tema1 =
["CSS4 se usa para referirse a actualizaciones que han ocurrido después de... // CSS2",
"Node.js ha permitido que JavaScript ejecute código en el lado del cliente y en el del servidor // Verdadero",
"XHTML significa EXpansible Hyper Text Markup Language // Falso",
"Selecciona la opción que no sea un editor de texto válido para HTML // PowerPoint",
"¿Quién creó el primer navegador? // Tim Berners-Lee",
"CSS nos permite // Cambiar el color de nuestro texto, cambiar la posición los cuadros con nuestro contenido en nuestra web, mejorar la accesibilidad del usuario",
"XHTML le brinda un formato menos consistente y peor estructurado pero permite que nuestras páginas web puedan ser fácilmente analizadas y procesadas por los navegadores web presentes y futuros // Falso",
"¿Qué significan las siglas HTML? // HyperText Markup Language",
"¿Cual de estas no es una ventaja que obtenemos al cumplir con los estándares establecidos por el W3C? // NINGUNA DE ESTAS: La web se mostrará en una gran variedad de navegadores, Mayor eficiencia a la hora de acceder e indexar nuestra web por parte de los motores de búsqueda, Más facilidad para cambiar el estilo de nuestra web",
"Las siglas WWW significan World Web Wide // Falso"];

const tema2 = 
["La etiqueta head define el encabezado para un documento o una sección // Falso",
"Los comentarios en HTML se escriben utilizando la sintaxis /**/ // Verdadero",
"Selecciona la etiqueta que no existe dentro de la distribución etiqueta table // tq (Si existen: tr, th, td)",
"Las etiquetas de enlace a son etiquetas abiertas // Falso",
"Las etiquetas HTML son como palabras clave que definen cómo el navegador web formateará y mostrará el contenido // Verdadero",
"Dentro de las etiquetas h, h9 es válida // Falso",
"Dentro de una etiqueta como img el atributo src nos permite indicar // La ruta en la que se encuentra nuestra imagen",
"La etiqueta ol nos permite definir los elementos que van dentro de una lista // Falso",
"Selecciona la etiqueta HTML cuya sintaxis sea correcta // <tag></tag>"]

const tema3 = ["En XHTML los nombres de las etiquetas se distinguen entre mayúsculas y minúscula // Verdadero",
"Las ID las asignamos a un único elemento y las clases a varios elementos // Verdadero",
"Selecciona los atributos que debe contener obliatoriamente la etiqueta IMG // src y alt",
"¿Qué es un elemento de nivel en línea? // Son aquellos elementos del documento fuente que no forman nuevos bloques de contenido; El contenido se distribuye en líneas",
"El atributo colspan se usa si desea fusionar dos o más columnas en una sola columna // Verdadero",
"Indica la regla para nombrar la ID de una etiqueta // Puede contener caracteres especiales como #, $ y ? (si contamos con la codificación adecuada)",
"En HTML, los nombres de etiquetas y atributos no distinguen entre mayúsculas y minúsculas // Verdadero",
"La etiqueta TP se usa para crear filas en una tabla // Falso",
"Cómo se llaman los estilos que usamos en CSS para aplicar un estilo único a un único elemento HTML // in-line",
"Marca el atributo que no forma parte de la etiqueta input de los formularios // bottom",
"¿Con qué símbolo se identifica la ID que le proporcionamos a una etiqueta? // #",
"Un CSS interno se define en el HEAD de una página HTML, dentro de un STYLES // Verdadero"]

const tema4 = ["Los valores de color hexadecimales se indican por medio de un # y 6 caracteres (letras y/o números) // TRUE",
"No podemos importar fuentes a nuestra web, solo podemos usar aquellas que vienen por defecto en nuestro navegador // FALSE",
"¿Qué es un selector de pseudo-clase? // Es el que se usa para definir un estado especial de un elemento",
"No podemos especificar los márgenes de un elemento en una sola línea // FALSE",
"Selecciona la propiedad que no pertenezca a los fondos en CSS // NINGUNA ES CORRECTA: Posicion del fondo, Repetición del fondo, Imagen de fondo",
"Indica la opción cuyos valores de posición formen parte de la propiedad position // static, relative, fixed, absolute, sticky",
"em es una unidad de longitud relativa // TRUE",
"cm es una unidad de longitud relativa // FALSE"]

const tema5 = ["Las media queries nos permiten // Agregar un punto de interrupción donde ciertas partes del diseño se comportarán de manera diferente en cada lado del punto de interrupción.",
"Una plantilla web puede incluir // Texto e imágenes .jpg, .png o .gif, animación jQuery y CSS3. Entre otros",
"Un viewport es // El término no existe",
"Podemos cambiar la fuente de una web por medio de las media queries // TRUE",
"Las plantillas HTML nos ayudan a desarrollar una web // TRUE",
"Las plantillas web // Reducen o eliminan la necesidad de un diseñador profesional de páginas web",
"Una de las ventajas del diseño responsive es // Que los tamaños de fuente e imagen serán más visibles en todos los dispositivos y los enlaces y botones serán más accesibles",
"El diseño web responsive permite que nuestra web se adapte a múltiples dispositivos // TRUE",
"¿Qué son las plantillas de información web? // Es una página web prediseñada que solo carece de contenido y fotos."]

const tema6 = ["¿Qué significa POO? // Programación Orientada a Objetos",
"El proceso de combinar elementos para crear una nueva entidad se llama abstracción // TRUE",
"¿Qué significa ||? // Or",
"getElementById es... // Un método",
"document.write nos permite mostrar en la consola del navegador un texto // FALSE",
"¿Qué es un procedimiento? // Es una sección de código de un programa que realiza una tarea específica",
"¿Qué hace un switch? // Marca un bloque de declaraciones a ejecutar, dependiendo de los diferentes casos",
"Nuestros archivos externos Javascript deben tener etiquetas script de apertura y cierre // FALSE",
"¿Qué logramos usando getElementById? // Acceder a un elemento de nuestro HTML por medio de su ID",
"Podemos usar Javascript para ocultar elementos // TRUE",
"El polimorfismo es... // La capacidad de un lenguaje de programación para procesar objetos de manera diferente según su tipo de datos o clase",
"Usamos InnerHTML para... // Escribir en un elemento HTML"]

const tema7 = ["Los arrays se utilizan para almacenar varios valores dentro de una misma variable // Verdadero",
"Onmouseover? // El usuario coloca el ratón sobre un elemento HTML",
"Si queremos añadir elementos a un array simplemente usaremos el método // push()",
"Qué método añade un elemento al principio del array y cambia el índice de los demás elementos para evitar romper el array // unshift()",
"Onkeydown? // El usuario pulsa una tecla",
"Onchange? // Un elemento HTML ha cambiado",
"JavaScript tiene solo un tipo de números. // Verdadero",
"Los índices del array comienzan con el 1 // Falso",
"Onclick? // El usuario hace click en un elemento HTML",
"Devuelve el tamaño de un array (el número de elementos que hay en este). // Verdadero"]

const tema8 = ["Las marcas de XML en cuanto a las mayúsculas y minúsculas // No distinguen entre mayúsculas y minúsculas",
"El método x.removeChild(): elimina un nodo hijo de x. // Verdadero",
"El método x.getElementsByTagName() // Obtiene todos los elementos con un nombre de etiqueta especificado",
"El objeto XMLHttpRequest se puede usar para solicitar datos de un servidor web // Verdadero",
"Un elemento raíz que sea el padre de todos los demás elementos tiene // Solo un hijo",
"El método x.appendChild() // Inserta un nodo hijo en x",
"XPath es una sintaxis para definir partes de un documento JavaScript // Falso",
"En un documento xml la marca raiz es // Elemento padre",
"Las marcas en XML // Pueden contener espacios"]

const tema9 = ["En un ábol de nodos, el nodo superior se llama base // Falso",
"Qué usamos para transformar un documento XML en otro documento XML // XSLT",
"XPath es // Un lenguaje para navegar en documentos XML",
"XSLT es // Un lenguaje para transformar documentos XML",
"El elemento <xsl: value-of> se puede usar para extraer el valor de un elemento XML y agregarlo a la secuencia de salida de la transformación // Verdadero",
"XSLT es un lenguaje que no permite transformar documentos XML // Falso",
"El atributo match se utiliza para asociar una plantilla con un elemento CSS // Falso",
"Con XSLT puedes // Agregar/eliminar elementos y atributos desde o hacia el archivo de salida",
"Cada atributo es un nodo de atributo // Verdadero",
"XQuery es // Un lenguaje para consultar documentos XML"]

const tema10 = ["Dentro del CRM las campañas están diseñadas para medir la efectividad y lograr un resultado específico, como introducir un nuevo producto o aumentar la cuota de mercado // Verdadero",
"Los SGE suponen un mayor costo para las empresas // Falso",
"El módulo de marketing de CRM // Está diseñado para impulsar todo el proceso de marketing de una organización para sus clientes existentes y potenciales",
"Microsoft Dynamics CRM es un paquete de software de gestión de relaciones con clientes desarrollado por Oracle // Falso",
"Los sistemas de gestión empresarial (SGE) son un tipo de software que las organizaciones usan para administrar las actividades comerciales cotidianas, tales como contabilidad, adquisiciones, gestión de proyectos, gestión de riesgos y cumplimiento, y operaciones de la cadena de suministro // Verdadero",
"El módulo de ventas de CRM // Está diseñado para impulsar todo el ciclo de vida de ventas de un nuevo cliente",
"CRM Online es una oferta basada en la nubE // Verdadero",
"Una campaña rápida es similar a la campaña, pero puede estar relacionada a un solo tipo de actividad // Verdadero",
"Microsoft Dynamics CRM está diseñado en torno a los siguientes módulos funcionales // Ventas, comercialización y gestión de servicios",
"El módulo de administración de servicios de CRM // Está diseñado para enfocar, administrar y rastrear operaciones de servicio al cliente de una organización, como el soporte de incidentes, servicios, apoyo a los clientes mediante la programación de servicios, etc."]
