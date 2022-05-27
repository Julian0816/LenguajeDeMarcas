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
}

function generateListItems(arg) {
    let items = "";
    for (let i = 0; i < arg.length; i++) {
        items += `<li>${arg[i]}</li>`;
    }
    return items;
};


const tema1 =
["Un archivo se expresa en bytes. Verdadero",
"Un sistema de informacion se corresponde de datos, harware y software",
"Monotorizacion, Recuperacion, Administracion son funciones del SGBD",
"Es Redis una base de datos? si!",
"Un archivo se caracteriza por un nombre y una ruta. Si!",
"Los sistemas de informacion ayudan a recuperar informacion relevante. Verdadero",
"Son sistemas de DB relacional: MySQL, MariaDB, SQLite / No relacionales: MongoDB",
"El objetivo de un sistema de informacion es producir informacion valida para la posterior toma de decisiones. Verdadero",
"Ventajas de un SGBD: Integridad, Seguridad, Eficiencia - Desventajas: Rapidez"];

const tema2 = 
["Que base de datos no da un acceso concurrente -Microsoft office- / si dan: Oracle, MySQL, SQL Server",
"Oracle es una base de datos no relacional. Falso",
"Caracteristicas deseables de una SGBD: Validez, Velocidad, Persistencia - NO DESEABLES: INCONSISTENCIA",
"Access seria un SGBD de alto rendimiento - FALSO",
"Desventajas de un SGBD: RAPIDEZ - Las ventajas son: Integridad, Seguridad, Eficiencia",
"Segun su tamano una base de datos puede ser: LIGERA",
"Un SGBD es una herramienta software, que permite la creacion y gestion de una base de datos. - VERDADERO",
"MySQL es una base de datos relacional. - VERDADERO",
"XML es: UN LENGUAJE",
"Cual de estas funcionalidades no soporta una base de datos: -OPERACIONES COMPLEJAS, Consultas complejas, Tipos de datos, Restricciones"]

const tema3 = ["La base de datos relacional son recomendables cuando: Los datos que vamos a utilizar tienen un margen de error nulo",
"Ventajas BBDD centralizadas: Facil implementación, Diseno sencillo",
"El lenguaje de programación usado en una base de datos relacional es: SQL",
"Según el contenido, un tipo de base de datos es: Base de datos de Texto Completo, Directorios, Base de datos bibliográfica",
"Según la variabilidad de la base de datos un tipo de base de datos es: Estatica o Dinamica",
"Desventajas BBDD distribuidas: Poca experiencia en uso, Poca seguridad, complejo de poner en marcha y mantener, mas mano de obra especializada",
"Tipo de base de datos según los modelos de bases de datos: Jerarquica, datos de red, transaccionales, relacionales, multidimencionales, orientadas a objetos, documentales, deductivas",
"Para trabajar con BBDD existen software especiales que son llamados Sistemas gestores de bases de datos (SGBD) - Verdadero",
"La función que cumplen las bases de datos transaccionales es encargarse del envío y recepción de datos a gran velocidad - Verdadero",
"Una BBDD jerárquica: es un tipo de base de datos basada en nodos - Falso"]

const tema4 = ["¿Cuál de estas etapas NO corresponde al diseño de una base de datos? Etapa de diseño de la interfaz (Si corresponden: Etapa del diseño conceptual, Etapa del diseño físico, Etapa del diseño lógico)",
"Una arquitectura basada en eventos está compuesta por consumidores y productores de eventos. - Verdadero",
"La normalización de una base de datos permite: TODAS SON FALSAS (Varios valores para cada celda de una tabla, Los atributos no dependen de la clave primaria, Cada columna con una clave tiene que ser independiente)",
"Una base de datos tiene como principal propósito organizar y almacenar datos para su fácil manejo - Verdadero",
"Principios básicos en el diseño de una base de datos: Organización eficiente de las tablas, Diseño de las claves primarias y foránea, Diseño de las relaciones entre tablas",
"Tipos de arquitecturas: Arquitectura monolítica, Arquitectura basada en eventos, Arquitectura de microservicios",
"La arquitectura de microservicios esta relacionada con los sistemas heredados - FALSO",
"La etapa del diseño lógico es posterior a la etapa del diseño físico - FALSO",
"En una arquitectura cliente-servidor, las capas de la arquitectura son: Capa de presentacion, Capa de negocio, Capa de datos",
"Desventajas del diseño de una base de datos - Los tipos de datos"]

const tema5 = ["Los atributos.. Hacen que unas entidades se distingan de otras",
"Un objeto que existe en una realidad que queremos representar, es: Una entidad",
"¿Qué otra relación existe en un modelo E/R? - Reflexividad",
"La reflexibidad expresa que un objeto es un subtipo de otro objeto - FALSO",
"En una relación uno a muchos? - Es justamente lo contrario que una relacion muchos a uno",
"Si tenemos dos entidades A y B, la cardinalidad determina cuantas entidades de tipo A se relacionan con con cuantas entidades de tipo B - Verdadero",
"Los diagramas E/R se usan para modelar y diseñar bases de datos relacionales - Verdadero",
"Entre los tipos de relaciones que existen en un modelo entidad-relacion, tenemos: Relación uno a uno / muchos a muchos / muchos a uno",
"¿Cuáles serían algunas comprobaciones sobre el diagrama entidad-relación? Consejos prácticos: REVISA LOS APUNTES, HAY MUCHAS!!!",
"En un modelo entidad-relación existen algunos conceptos como: REVISAR LOS APUNTES POR QUE HAY MUCHAS!!!",
"En un modelo entidad-relación existen algunos conceptos como: Entidades, Atributos, Relacion"]

const tema6 = ["La teoria de la normalizacion se basa en cuatro formas normales - Falso, se basa en tres",
"El registro o auditoria es: Poder registrar las acciones de los usuarios",
"Pautas para pasar del modelo E/R al modelo relacional: El identificador único se convierte en clave primaria",
"Una desventaja del modelo relacional es: Limitaciones en las representaciones gráficas",
"¿ En el modelo relacional es imprescindible desponer de un identificador único? - Verdadero",
"¿Cuál de estas condiciones NO cumple la primera forma normal? - El orden de las columnas y las filas importa",
"Hoy en dia, el modelo relacional es el modelo que usa el SGBD: MySQL, SQL Server, Oracle",
"¿Un modelo relacional permite procesar los bloques de texto de forma eficiente? - Falso",
"¿Cuál de estos terminos formales NO se corresponde con el de un modelo relacional? - Un campo (Si corresponde: Tupla, Relacion, Clave primaria)",
"Uno de los objetivos principales a la hora de diseñar una base de datos es tener una estructura estable - Verdadero"]

const tema7 = ["El comando alter se utiliza para: Modificar objetos de una base de datos",
"Para representar datos de tipo numérico usamos: Int, Float, Bit, Double",
"¿ Cuál de estas afirmaciones es correcta? --El tipo text permite almacenar cadenas de caracteres de hasta varios GB de longitud.",
"La clave primaria: - Debe ser única, no nula y es obligatoria",
"¿Que comando realiza la operación y fija a null el valor en las filas que hacen referencia? - SET NULL",
"La clave foránea sirve para relacionar tablas entre sí y está formada por una o varias columnas que hacen referencia a una clave primaria de otra o de la misma tabla. - Verdadero",
"En el lenguaje SQL las sentencias DDL(Data Manipulation Language) sirven para trabajar con los datos almacenados en dichas estructuras. - FALSO",
"Consideraciones a tener en cuenta para definir claves foráneas: Si la columna se define como obligatoria no podrá contener la claúsula para los casos de borrado o actualización, La columna deberá ser un índice, La columna deberá ser del mismo tipo (y atributos) que la columna de la que es clave ajena",
"Una de las funciones del SGBD es la de proporcionar seguridad en el acceso a los datos a través de mecanismos de control de acceso. - Verdadero",
"El tipo varchar permite almacenar : Cadenas de caracteres variables de hasta 4000 caracteres."]

const tema8 = ["Ejemplos de DML: IMS / DL 1, CODASYL, SQL",
"Para abandonar la transacción y deshacer los cambios que se hubieran hecho en la transacciónse utiliza el comando ROLLBACK - VAERDADERO",
"¿Que código usariamos para modificar el departamento cuyo empleado sea Juan ? (UPDATE ''RRHH'' SET ''departamento'' = ''desarrollo'' WHERE ''empleado'' = ''Juan'') ", 
"¿ Cuál de estos comandos básicos de control en las transacciones SQL no existe? AUTOCOMMIT",
"En MySQL, se trabaja con la opción AUTOCOMMIT activada por defecto. Verdadero", 
"En la modificación de registros podemos..Actualizar varias columnas de una, Actualizar una columna de varias filas, Actualizar una columna utilizando una subconsulta",
"¿Que código usariamos para borrar los valores de las columnas cuyo departamento sea desarrollo? (DELETE FROM ‘’empresa’’ WHERE ‘’departamento’’= ‘’desarrollo’’)", 
"El comando CREATE TABLE se utiliza para: Crear una nueva tabla",
"En el lenguaje SQL las sentencias DML(Data Manipulation Language) sirven para recuperar y manipular datos en una base de datos relacional.Verdadero", 
"¿ Cuál de estas afirmaciones es correcta ? El borrado de filas de una tabla se efectúa con la sentencia DELETE"]

const tema9 = ["¿ Cuál de estas afirmaciones es correcta ? - ASC, especifica que la columna indicada en la cláusula ORDER BY se ordenará de forma ascendente, o sea, de menor a mayor.",
"¿Cuál de estás expresiones no es una condición lógica? - WHERE",
"¿ AVG devuelve el valor medio de los valores de una columna ? - Verdadero",
"¿Cuáles de estas clausulas son asociadas a la sentencia SELECT? - GROUP BY / Having",
"¿Que codigo usariamos para obtener los valores de las columnas cuyo departamento sea desarrollo? - (( SELECT FROM 'empresa' WHERE 'departamento' = 'desarrollo' ))",
"INNER JOIN - Se usa para una combinación interna de ambas tablas",
"Si queremos seleccionar todas las aclumnas afectadas de una tabla, usaremos: - '*'",
"¿ Existen muchas clausulas asociadas a la sentencia SELECT ? - Verdadero",
"Si queremos que al realizar una consulta haya registros iguales que aparezcan mas de una vez y se eliminen, utilizaremos: - DISTINCT",
"¿Qué expresión define el orden de las filas del conjunto de resultados? - ORDER BY"]

const tema10 = ["¿Cuál de estos conceptos no está relacionado con MySQL ? - Bases de datos no relacional",
"¿Cuáles de estas frases se corresponde con MySQL? - Todas: Un amplio compendio de servidores de clúster respalda a MySQL - Puedes modificar el código fuente para satisfacer tus propias expectativas - MySQL establece un alto estándar de seguridad",
"Tipos básicos de datos de un campo de una tabla: - Todas: FLOAT, VARCHAR, INTIGER",
"¿Cuál de estás sentencias seria la correcta para insertar una serie de filas? - (insert into libros (título, autor, editorial, precio, cantidad) values ('El aleph','Borges','Emece',45.50,100);)",
"¿Cuál de estos no es un operador relacional? - ( != )",
"¿Qué aplicaciones usan MySQL para el almacenamiento de datos ? - Todas: Facebook. Twiter, YouTube",
"Los valores del campo clave primaria no se repiten ni pueden ser nulos. - Verdadero",
"¿Cuál es la funcionalidad de la sentencia 'truncate table'? - Vacía la tabla y vuelve a crear la tabla con la misma estructura",
"¿Es MySQL Workbench un software con una interfaz gráfica muy intuitiva y fácil de usar por el usuario ? - Verdadero",
"Sobre la cláusula 'where': - Podemos recuperar algunos registros que cumplan con ciertas condiciones"]

const tema11 =["cual es la funcionalidad de la clausula ‘WHERE’? - Podemos especificar condiciones para una consulta ‘select’", 
"¿Qué diferencias hay entre PostgreSQL y MySQL? -El tipo de consultas en PostgreSQL suelen ser mas complejas -  ", 
"¿Cuál de estas sentencias seria la correcta para insertar una serie de filas? -  insert into usuarios (nombre, clave) values (‘Juan’, ‘Hola’);", 
"¿Qué sentencia usamos para borrar el contenido de una tabla usuarios ? – delete from usuarios", 
"¿El comando select sirve para recuperar datos de una tabla? -Verdadero", 
"¿ Cuál de estas características corresponde con PostgreSQL ? – Todas: Codigo abierto, Gratuito, Ejecución de optimizaciónes de rendimiento avanzado", 
"¿Es PostgreSQL un software multiplataforma ? -Verdadero", 
"Sobre la cláusula ‘create’: -Sirve para crear una tabla nueva", 
"¿Cuál de estos no es un dato básico? – Todas son CORRECTAS: integer, float, varchar",
"¿Cual de estos programas no nos permite tener la posibilidad de manejar bases de datos hechas en PostgreSQL? -PhpMyAdmin"]

const tema12 = ["La programación orientada a objetos? - Es una solución concreta basada en un paradigma que utiliza los mismos conceptos teóricos que el análisis orientado a objetos",
"La sentencia INHERITS se utiliza para indicar que una tabla hereda de otra - Verdadero",
"¿Qué tipos de herencia tenemos? - Herencia simple, multiple, interfaz",
"¿Qué sentencia usamos para indicar que solo queremos referenciar a una tabla heredada? - ONLY",
"¿Para qué se utiliza la herencia? - todas: Crear especializaciones de entidade, Generar una jerarquía de entidades, Reutilizar conceptos/codigo de programacion.",
"La relación que existe entre el modelo relacional y el modelo de objetos? - Cada instancia de un objeto se representa en el modelo relacional con un registro de una tabla",
"La herencia es una propiedad que nos define? - La relación entre una clase general y otra clase más específica",
"El mundo de las bases de datos relacionales está estrechamente relacionado con el análisis orientado a objetos - Verdadero",
"La cardinalidad es el único problema a la hora de utilizar la propiedad de la herencia en una base de datos - Falso",
"En la herencia de implementación ? - Todas: Puede sobreescribirse en las clases derivadas, No solo se hereda la interfaz, La implementacion de los métodos es heredada"]

const tema13 = ["¿Cuál no es un tipo de actualización de la memoria externa? - Actualización genérica",
"¿Qué perfiles tenemos de algoritmos de recuperación? - Todas: Undo / No Redo -- No Undo / Redo -- Undo / Redo",
"En el algoritmo ARIES generamos una serie de registros de log identificados mediante un número de secuencia de log - Verdadero",
"¿Qué son los fallos en el sistema? - Es un tipo de fallos que afectan a un grupo de transacciones que están en ese instante en ejecución",
"Un CheckPoint? - Todas: Se suspende la ejecución normal de transacciones temporalmente. -- Se fuerza la escritura de páginas sucias a disco -- Se vuelve a la ejecución normal de transacciones.",
"Propiedades de una transacción: - Todas: Atomicidad, COnsistencia, Durabilidad",
"Para la custodia de copias de seguridad no se tiene en cuenta... -- Soportes offline",
"El propósito de la recuperación de bases de datos no es garantizar que el estado representado por esta sea el estado consistente más reciente previo al ocasionado por un fallo -- Falso",
"El gestor de transacciones recibe las peticiones de las transacciones y es capaz de servir los datos a dichas transacciones como retorno a su petición -- Verdadero",
"El algoritmo de recuperacion ARIES esta básado en ? - Undo/Redo"]

const tema14 = ["El RTO sería el mayor intervalo de tiempo aceptable de pérdida de datos - Falso",
"¿Cuál es la causa más común de la pérdida de datos? - Por errores de los usuarios",
"La copia espejo (mirroring) - Se ha desarrollado para proteger los datos contra fallos de hardware en un sistema de almacenamiento.",
"¿Cuál no es un tipo de dato informático? - Datos de la memoria",
"Un sistema de copias ideal debe tener las siguientes características? - Todas: No usaría más espacio de almacenamiento - No consumiría ancho de banda - No consumiría ciclos de CPU",
"Tipos de tecnologías de almacenamiento - Todas: Matriz de discos, Replicacion de datos, Deduplicacion",
"A diferencia de la deduplicación, el objetivo de una copia de seguridad es crear una copia separada, conservada en caso de pérdida o deterioro del original - Verdadero",
"¿Cuál de estos no es un dispositivo de copias de seguridad? - La CPU",
"SAN - Se refiere a unidades remotas de una red de area de almacenamiento",
"La ventaja mas sorprendente de una copia de seguridad en una WAN o en una nube, es que los tiempos de restauración son más cortos. - Verdadero"]