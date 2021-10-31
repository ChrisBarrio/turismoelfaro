

/*Ejemplos de variables */
/*
let Alumno;
let Dni;
let _bebida;
let $sueldo;
let nombreAlumno; // camelcase
let nombre_alumno;//snakecase
let NombreAlumno,// pascalcase
*/
// Estos estan MALLLLLL
/*
let 1ernombre; //  no se comienza con nombre
let nombre-apellido; // es una resta
let this ,class ,super ,break ;// son clases
*/




//let n1 = 5;
//let n2 = 10;




//if (n2>n1) {
//console.log("es mayor");
//alert("Es mayor!")
//}

//Switch


//Calculadora hecha con switch
//Se podria hacer la calculadora con 4 if tambien si quiero
/*
let numb1 = parseFloat(prompt("numero1 :"));
let numb2 = parseFloat(prompt("numero2 :"));
let operacion = parseInt(prompt("Introduzca:\n 1 para suma \n 2:Resta \n 3:Multipl \n 4:Division"));

switch (operacion){
    case 1:
        let sumaFloat= numb1 + numb2;
        console.log("La suma es: " + sumaFloat);
        break;

    case 2:
        let restaFloat= numb1 - numb2;
        console.log("La resta es :" +restaFloat);
        break;

    case 3:
        let multiFloat= numb1 * numb2;
        console.log("La mult es: "+multiFloat);
        break;

    case 4:
        let diviFloat= numb1 / numb2;
        console.log("La division es: "+diviFloat);
        break;

    default:
        console.log("Operacion no reconocida");
        
}

*/


//Informar segun la edad que categoria tiene//
/*
let nombre = prompt("Como te llamas??");
console.log("Hola "+ nombre)
let apodo = prompt("Tenes apodo?")
    if (apodo=="si"){
            let Napodo = prompt("Cual es?");
                console.log("Perfecto!" + Napodo);}
    else {
                console.log("perfecto, no hay problema..")
                }
            

let edad = parseInt(prompt("Ingrese su edad:"));

if(edad< 18){
    console.log("disculpame no puedo hablar con menores de edad...");
}else if(edad <65){
    console.log("segun tu edad veo que sos una persona en edad laboral");
}else{
    console.log("segun tu edad veo que ya debes estar jubilado/a");
}

*/

/*Escribe un programa de una sola línea que haga que aparezca en la pantalla un
alert que diga “Hello World”.*/

/*alert("Hola mundo!")*/

/*Escribe un programa de una sola línea que escriba en la pantalla un texto que
diga “Hello World” (document.write).*/

/*document.write("Hello World")
console.log("Hello World")

/*Escribe un programa de una sola línea que escriba en la pantalla el resultado
de sumar 3 + 5.*/

/*let suma = (3+5) 
console.log(suma)
document.write(suma)*/

/*Escribe un programa de dos líneas que pida el nombre del usuario con un
prompt y escriba un texto que diga “Hola nombreUsuario”*/

/*nombre = prompt("Cual es tu nombre???")
console.log("Hola "+ nombre + "!!") 
*/
/*Escribe un programa que pida 3 números y escriba en la pantalla el mayor de
los tres.*/
/*let n1 = prompt("Escriba el primer numero>>")

let n2  = prompt("Escriba el segundo numero>>")

let n3 = prompt("Escriba el tercer numero>>")    

if(n1>n2 & n3){
    console.log("el mayor es" + n1)
}
else if(n2>n1 & n3){
    console.log("el mayor es" + n2)
}
else{
    console.log("el mayor es" + n3)
}*/
/*Escribe un programa que pida un número y diga si es divisible por 2*/
/*
numero = prompt("escriba un numero:")

if(numero %2 == 0){
    console.log("Este numero es divisible por 2")}
else{
    console.log("Este numero NO es divisible por 2")

}*/

/*function saludar(){
    console.log("Hola soy una funcion")
}
 
saludar()
*/

//let dolarhoy = 180;

// Declaración de la función "saludar"
/*function saludarF() {
    // Contenido de la función
    console.log("Hola, soy una función");
   }
   // Ejecución de la función
saludarF();

let n1 = 10;
let n2 = 15; 
*/
/*Realizar una función, a la que se le pase como parámetro un número N,
y muestre por consola N veces, el siguiente mensaje: “Bienvenidos al
curso Full Stack”*/

/*let N = 0;
let mensaje = ("Bienvenidos al curso Full Stack")
while (N<5){
    alert(mensaje);
    N++;
}
let N = 0;
let mensaje = ("Bienvenidos al curso Full Stack")
function llamar(){
while (N<10){
    console.log(mensaje);
    N++;
}
}
llamar()*/

/*1.  Realizar una función, a la que se le pase como parámetro un número N, y muestre por consola N veces, el  siguiente mensaje: “Bienvenidos al curso Full Stack”*/
/*
//Declaración
function mensaje(N) {
    for (let i = 1; i <= N; i++) {
        //let: a nivel de bloque 
        document.write(i + "- Bienvenidos al curso Full Stack" + "<br>")
    }
}

//Ejecución
//- prompt: pide el dato
//- parseInt: parsea a entero
//- mensaje: llama a la función
mensaje(parseInt(prompt("Ingrese un Numero:")));
*/


/*Una función que se llame doble, que reciba como parámetro un valor, y
devuelva el doble del número ingresado como parámetro.*/

//DECLARATION
/*
function doble(N){
   multiplicacion = (N*2)
    document.write("El valor duplicado es "+ multiplicacion)
}
*/
//EJECUTION

/*let N = (parseInt(prompt("ingrese el numero: ")));

let multiplicacion = (N*2);

document.write("El doble del ingresado es "+ multiplicacion)*/


//AGREGAR IVA A UN PRECIO

var precio = parseInt(prompt("ingresde precio >>> "));

var iva = ((precio*21)/100);

if (precio > 0){
    var precio_total = (precio+iva);
    document.write("El precio total con iva incluido es : "+ precio_total)
    }
else{
    document.write("el valor ingresado es incorrecto")
}
