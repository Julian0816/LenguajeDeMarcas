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
["En la programacion, la secuencia de la instrucciones - define el flujo del programa",
"Una asignacion es una intruccion que le da un valor numerico a una variable - Falso",
"Que podemos concluir de esta instruccion? MiVar = 5 - Se trata de una asignacion",
"El tipo de datos string representa una cadena de caracteres - Verdadero",
"Un metodo o funcion... - No existe limitacion a los parametros de entrada",
"Cual de la siguientes afirmaciones se aplica a las variables globales - Son variables por al menos todo el script donde son declaradas",
"Un parametro de entrada solo es visible en el metodo que lo define - Verdadero",
"El predicado logico siguiente </br>(! Verdadero && varBool) vale... Siempre falso",
"Que es un float en programacion? - Un tipo de tados simple",
"En programacion no se permite mezclar variables de distinto tipos de datos - Verdadero"];

const tema2 = 
["If (puntos !=10) { MuertePlayer(); } // Si puntos es distinto de 10 ejecuta MuertePlayer().",
"La estructura Switch... // Es equivalente a una gran cantidad de ifs anidados con predicados de igualdad.",
"No podemos anidar más de tres instrucciones If. // Falso",
"No debe usarse la sentencia Switch si puede evitarse. // Falso",
"If (puntos >10) { DesbloqueaTrofeo(); } // Este código debloquea un trofeo si la variable puntos vale más que 10.",
"No es necesario usar el caso Default si no lo necesitamos al codificar un Swith. // Verdadero",
"La sentencia Switch es equivalente a anidar una sentencia de comparación if para cada caso. // Verdadero",
"Los ifs se representan en los diagramas de flujo UML con un rombo. // Verdadero",
"Los ifs consecutivos sin anidar se ejecutan unos detrás de otros. // Verdadero",
"Un if else if no pude concatenarse de nuevo con otro elseif. // Falso"]

const tema3 = ["El predicado lógico de un While es el siguiente:<br/>(! Verdadero && varBool) vale... // Siempre Verdadero.",
"Un Do While siempre ejecuta su código al menos una vez. // Verdadero",
"Para usar un While necesitas? // asegurarte de que el código que cicla alguna vez niega la condición.",
"Un While repite ciclo cuando su condición (predicado lógico) es verdadero. // Verdadero",
"El predicado lógico de un For es el siguiente:<br/>(! Verdadero || varBool) vale... // Depende del valor de la variable varBool.",
"La estructura For? // necesita una inicialización, una condición de terminación, y un modo de incremento.",
"Un For repite ciclo cuando su condición (predicado lógico) es falso. // Falso",
"Un For termina siempre. Su cantidad de ciclos está limitado. // Falso",
"La estructura de control While es ciclica y siempre se ejecuta al menos una vez. // Falso",
"La estructura de control For es cíclica y no sabemos cuando terminará de ciclar. // Falso"]

const tema4 = ["Un método o función... // No existe limitación a los parámetros de entrada.",
"Los parámetros de entrada no son siempre opcionales. // Falso",
"Los métodos y funciones no pueden llamarse a si mismos en su código. // Falso",
"Existe una limitación en el número de comandos return que una función puede usar. // Falso",
"El uso de métodos y funciones hace que el programa sea más fácil de leer e interpretar. // Verdadero",
"Indicar la visibilidad de los métodos y funciones es algo opcional. // Verdadero",
"Un método llamado ej1 que tiene un parámetro de entrada de tipo float se le puede llamar? // Siempre y cuando le demos un valor al parámetro de entrada.",
"No hay limitación al número de llamadas a una función en un programa. // Verdadero",
"Un método tipificado? // Debe retornar siempre un valor del tipo del método.",
"Decimos que un método está tipificado cuando al terminar devuelve algún valor del tipo declarado. // Verdadero"]

const tema5 = ["Cuando hacemos una captura de requisitos... // Debemos tratar de buscar el diseño más eficiente.",
"El análisis de requisitos // Consiste en la localización de las necesidades de nuestro proyecto.",
"Existen dos tipologías de errores que se pueden producir al programar. // Falso",
"Es mejor añadir parámetros siempre a usar valores fijos cuando programamos. // Verdadero",
"Una mala captura de requisitos puede suponer repetir trabajo. // Verdadero",
"La metodología de diseño de 4 reglas puede resumirse en... // Datos, inicialización, desarrollo y repetición.",
"Un análisis de requisitos siempre debería... // Cubrir al menos el 50% del tiempo de desarrollo o más.",
"Los errores tipo semánticos no permiten ejecutar nuestro programa. // Falso",
"Al realizar una captura de requisitos es conveniente que... // Creemos cuanto más documentación, mejor.",
"Una captura de requisitos la realizamos simplemente preguntándonos qué necesitamos y cómo vamos a conseguirlo. // Verdadero"]

const tema6 = ["El tamaño de un array es fijo y no cambiará aunque borremos datos. // Verdadero",
"Que puedes decir de la siguiente línea de código: miArray[miArray.Lenght] = 5; Que la asignación dará error, ya que el índice indicado no existe.",
"Los arrays no son nativos de C#. Se necesita una librería como el System para poderlos usar. // Falso",
"Las estructuras tipo array son en realidad una tabla con una sola dimensión o fila. // Verdadero",
"Un array es una colección de datos de diversos tipos // Falso",
"Los arrays no pueden ser de tipo bool. // Falso",
"En las búsquedas es mejor usar la estructura For. // Falso",
"El tipo de datos String representa una cadena de caracteres. Es también una colección de datos. // Verdadero",
"Los arrays se declaran con la sintaxis... // TipoArray[] nombreArray;",
"Para asignar un valor dentro de un array necesitas... // El valor a asignar y un índice válido.",
"Para poder usar un array hay que definir su tamaño. // Verdadero"]

const tema7 = ["La instancia única nos asegura que no habrá más de una copia de una clase por área de trabajo. // Verdadero",
"¿La instancia única requiere de usar qué método específico del sistema? // Awake",
"La instancia única nos asegura que no habrá más de dos copias de una clase por área de trabajo. // Falso",
"Podemos crear tantas copias de un objeto como queramos. // Verdadero",
"Un objeto sólo puede tener un componente asociado.  // Falso",
"El this es un puntero al objeto que lleva el script que lo ejecuta. // Verdadero",
"La herencia permite que la clase hija herede métodos y atributos de la clase padre. // Verdadero",
"¿Qué puedes decir de la siguiente línea de código: GameObject miGO = GameObject.Find(??);? // Es correcta y buscará un objeto sin nombre, por lo que siempre devolverá null.",
"Los punteros no borran los objetos a los que apuntaban cuando pasan a apuntar a null. // Verdadero",
"Con la palabra reservada extends... // Podemos aplicar polimorfismo a nuestras clases."]

const tema8 = ["Las matrices deben ser siempre rectangulares. // False",
"¿Cual de los siguientes pares de valores enteros no es válido como índices de una matriz? // El par (0,-1)",
"public String[,] matrizStr = new String[3,3]; MatrizStr[1,1] = 'manzana'; MatrizStr[0,0] = 'uva'; MatrizStr[2,2] = 'pera'; //¿Que valor tiene la posición [0,1]? // (Cadena vacía).",
"No siempre es necesario conocer todos los índices para acceder a un elemento de una matriz. // Felse",
"String[,] miMatriz; miMatriz[0,0] = ?10?; //¿Que representa este código? // El código es incorrecto, la matriz no tiene tamaño.",
"Las matrices no son más que arrays de dos dimensiones. // True",
"Las matrices o tableros son elementos nativos de los lenguajes de programación, no necesitan importar librerías. // True",
"int[,] miMatriz = new Int[3,3]; //¿Que representa este código? // Declaro una matriz de números enteros de dimensiones 3 por 3.",
"int[,] miMatriz = new float[3,3]; //¿Que representa este código? // El código es incorrecto, incompatibilidad de tipos.",
"Las matrices creadas como arrays de arryas... // Deben inicializarse cada columna de manera individual."]

const tema9 = [" public List<string> listaStr = new List<string>(); listaStr.add('manzana'); listaStr.add('uva'); listaStr.add('pera'); listaStr.add('manzana');listaStr.RemoveAt(2);//¿Que valor se elimina? // El valor de pera.",
"Las listas y los arrays sólo se diferencian en que el tamaño de listas es indeterminado. // False",
" public List<string> listaStr = new List<string>(); listaStr.add('manzana'); listaStr.add('uva'); listaStr.add('pera'); listaStr.add('manzana');listaStr.RemoveAt(5); //¿Que valor se elimina? // La función RemoveAt da error en tiempo de ejecución por salirse del rango de la lista.",
"Las listas no son elementos nativos de los lenguajes de programación. // True",
"Si quito el using collection puedo seguir usando las listas sólo en el entorno de desarrollo Unity. // False",
" public List<string> listaStr = new List<string>(); listaStr.add('manzana'); listaStr.add('uva'); listaStr.add('pera'); int auxInd = -78; auxInd = listaStr.IndexOf('uva'); //¿Que valor tiene auxInd ahora? // 1",
"Las colas y pilas no son más que versiones con diferente comportamiento de las listas. // True",
"public List<string> listaStr = new List<string>(); listaStr.add('manzana'); listaStr.add('uva'); listaStr.add('pera');listaStr.add('manzana'); listaStr.RemoveAt(3); //¿Que valor se elimina? // La segunda aparición de manzana.",
"public List<string> listaStr = new List<string>(); listaStr.add('manzana'); listaStr.add('uva'); listaStr.add('pera'); listaStr.add('manzana'); listaStr.Remove('manzana'); //¿Que valor se elimina? // El indice de 0.",
"El atributo para acceder al tamaño de una lista se denomina Lenght. // False"]

const tema10 = ["El DropDown es un tipo de Widget de categoría de Interacción. // True",
"Para escalar el tamaño del Canvas, usaremos su componente Canvas Scaler // True",
"¿Porqué no podrías asignar el siguiente código a un botón? Public Void Test(GameObjet f){<br/>if (f.transform.x > 100){<br/> Destroy(this);<br/>}<br/>} //End Test // Porque tiene como parámetro de entrada un tipo no permitido.",
"Para vincular código a un botón el método a asociar no puede tener más de dos parámetreos de entrada. // False",
"La lista de sucesos de un widget de interacción está limitada. // False",
"¿Porqué no podrías asignar el siguiente código a un botón? Public Int Test(float f){<br/>if (f > 100){<br/> Destroy(this);<br/>}<br/>} //End Test // Porque el método está tipificado, sólo los métodos vacíos pueden asignarse a eventos de widgets.",
"Los checkBoxes por defecto pueden funcionar como RadioButtons simplemente marcando a cierto uno de sus atributos. // False",
"El Canvas no puede pintarse si eliminamos el componente auxiliar EventSystem // False",
"El atributo del Canvas Sort Order indica la prioridad de pintado en pantalla de este frente a otros Canvas. // True",
"Cada Canvas en escena necesita un componente auxiliar asociado EventSystem // False",
"¿Porqué no podrías asignar el siguiente código a un botón? Public Void Test(float f){<br/>if (f > 100){<br/> Destroy(this);<br/>}<br/>} //End Test // El código es correcto y sí que podría asignarse a un botón o otro tipo de widget.",
"El OutLine pone un borde a los textos y no es un objeto, sino un componente. // True"]

const tema11 =["Los Structs son una agrupación de variables similares a una clase, sin llegar a serlo. // True",
"¿Para que sirve la siguiente instrucción? MiSt = new MiStruct(); // Para crear una instancia del Struct MiStruct con el constructor por defecto.",
"¿Cual de las siguientes afirmaciones es correcta cuando hablamos de las ventajas de usar un tipo enumerado? // Simplifica el uso de herramientas Switch Case con valores constantes.",
"El tipo Enum no se puede usar sin importar la librería System. // False",
"Los constructores de un struct están limitados a un máximo de 10. // False",
"Podemos crear un Struct sin definir ningún constructor. // True",
"¿Para que sirve la siguiente instrucción? DiaAño DiaComienzo = (DiaAño) 48; // Para obtener el valor constante almacenado en el Enum DiaAño con índice 48.",
"Un constructor en un struct debe inicialiar todas las variables del mismo. // True",
"El tipo Enum puede compararse con una cadena de caracteres String en un predicado. // FAlse",
"El tipo Enum puede compararse con una colección de cadenas de caracteres String constantes. // True"]

const tema12 = ["Los métodos tipo Listener se usan principalmente para: movimiento, temporizadores y eventos condicionados. // True",
"Un prefab es una plantilla de objeto que sirve de molde para crear copias. // True",
"this.gameObject.transform.position.x = 5.2f; // Esta línea de código es incorrecta porque las coordenadas individuales son variables de solo lectura.",
"Las coordenadas de los tipos vectores son siempre de tipo float. // True",
"Destruir un objeto no destruye a sus hijos // False",
"Cuando queremos esperar a que ocurra algo podemos poner una estructura de control while dentro de un evento Update // False",
"Instantiate(GameObject, Vector3, Quaternion); // Es una sobrecarga de la función Instantiate.",
"Los únicos métodos Listener que existen son el Update y FixedUpdate. // False",
"El Vector3.Down es el // (0,-1,0)",
"Si ejecuto el siguiente fragmento de código, el Objeto1 se destruye. GameObject ob1 = Objeto1; GameObject ob2 = Objeto2; obj1 = obj2; // False",
"Time.TimeScale = 0.75f; // Esta línea de código decrementa el paso del tiempo por un cuarto de lo normal.",
"Vector3 ejeY = Vector3.up;<br/>float velAngular = -90 * Time.deltaTime;<br/>this.transform.Rotate(ejeY * velAngular, Space.Self); // Este código hace rotar al objeto en el sentido contrario a las agujas del reloj.",
"Resources.Load sólo carga paths que empiezan en una carpeta llamada Resources. // True",
"Para crear un prefab vacío debemos de... // Seleccionando Asset > Create Prefab."]

const tema13 = ["¿Que es el KeyCode? // Un tipo enumerado que guarda los Ids de las teclas de nuestro teclado.",
"No todos los eventos de la clase Input están tipificados como booleanos. // False",
"La matriz de colisiones indica que layers (capas de objetos) se ignoran o no cuando se producen colisiones. // True",
"Las funciones de rayo sólo existen en la clase Physics. // False",
"Basta con que uno de los dos objetos que colisionan estén en modo isTrigger para que no se produzca una colisión. // True",
"Para que se produzcan colisiones (no triggers) es necesario que al menos uno de los objetos tenga un componente RigidBody // False",
"La función RayCastAll está tipificada y devuelve algo de tipo array. // True",
"Basta con que uno de los dos objetos que colisionan estén en modo isTrigger para que se produzca una colisión. // False",
"El evento GetKeyUp // Se ejecuta una sóla vez en el último frame de la pulsación.",
"El evento OnCollisionEnter // Se ejecuta una sóla vez en el primer frame de la colisión.",
"GetAxis(Horizontal) devuelve un valor entre 0 y 1. // True",
"El parámetro IsKinematic // Pertenece al componente RigidBody."]

const tema14 = ["Los métodos StarCorrutine son nativos de C# y no precisan de importación de librerias para funcionar. // True",
"Solo el StarCorrutine permite llamar a hilos con parámetros de entrada. // True",
"El método invoke no tiene porque llevar un valor de retardo en su llamada, es un parámetro opcional. // True",
"Las corrutinas creadas con métodos invoke deben llamar a métodos tipificados Ienumerator. // Falso",
"No existe limitación salvo desbordamiento de memoria, a cuantas corrutinas podemos lanzar a la vez. // True",
"¿Porqué no podrías asignar el siguiente código a un botón? Public Void Test(GameObjet f){<br/>if (f.transform.x > 100){<br/> Destroy(this);<br/>}<br/>} //End Test // Porque tiene como parámetro de entrada un tipo no permitido.",
"¿Da error la siguiente lína de código? Y en caso afirmativo, ¿Porqué? - Invoke(esperaJugador); // Es erroneo porque el parámetro de entrada debe estar en formato string, le faltan las comillas.",
"Si no indicas tiempo de repetición en un InvokeRepeating, por defecto te repite la corrutina trascurrido un frame. // False",
"¿Que hace esta línea de código? InvokeRepeating(?LanzaBomba?, 10f, 1); // Cada segundo que pasa, lanza un nuevo hilo con el método LanzaBomba, que espera 10 segundos para empezar su ejecución.",
"StopAllCorrutines() detiene todo tipo de corrutinas que se hayan iniciado. // False",
"Se recomienda usar el InvokeReapeting solamente en métodos Update // False",
"Las corrutinas cambian el hilo de ejecución de nuestro programa. // Falso"]

const tema15 = ["No hay limitación al número de hijos que una etiqueta o nodo puede tener en un archivo XML. // True",
"La cabecera de un archivo XML no es necesaria, ya que el encoding que recibe es el de por defecto. // False",
"Con GetNodes(?NombreNodo?) obtenemos una lista de nodos de nombre NombreNodo. // Falso",
"InnerText da error si no apuntamos a un nodo final. // True",
"Con SelectSingleNode(?NombreNodo?) obtenemos el primer nodo que encontramos en la jerarquía de nombre NombreNodo. // True",
"La escritura y lectura de archivos no requiere de librerías adicionales. // False",
"Todo lo que leemos de archivos externos viene en formato String. // True",
"El resources.Load necesita siempre hacer uso del proceso de Casting. // True",
"El formato XML pertenece a 3WSchools. // False",
"El try & Catch sin guardar la excepción no requiere importar librerías adicionales. // True"]

const tema16 = ["La proyección ortográfica ignora la profundidad de los objetos que renderiza. // True",
"El atributo Depth indica la prioridad de pintado de una cámara cuando hay más de una en escena. // True",
"El atributo FieldOfView es sólo para cámaras con proyección de perspectiva. // True",
"La clase Rect simplemente define un rectángulo, en pixeles. // True",
"El atributo AllowHDR permite usar el algoritmo de pintado High Def Change. // True",
"Las cámaras pintan siempre los objetos que tienen más cerca primero. // False",
"Usando varias capas o layers podemos distribuir el rendimiento de pintado de nuestro proyecto. // True",
"No se pueden combinar cámaras con diferentes perspectivas en una misma escena. // False",
"El atributo Culling Mask pemite definir una máscara de capas (layers) que la cámara pintará. // True",
"La definición 9:16 no es un tipo de aspecto de pantalla. // False"]







//document.getElementById("arrPrint").innerHTML = arr;