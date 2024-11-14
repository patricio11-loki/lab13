// Función de suma
function suma(a, b) {
    return a + b;
}

// Función de resta
function resta(a, b) {
    return a - b;
}
// Función de multiplicación
function multiplicacion(a, b) {
    return a * b;
}
// Función de división
function division(a, b) {
    return a / b;
}
//función calculadora
function calculadora(num1, num2, operacion) {
    switch (operacion) {
        case 'suma':
            return suma (num1, num2);
        case 'resta':
            return resta (num1, num2);
        case 'multiplicacion':
            return multiplicacion (num1, num2);
        case 'division':
            
                return division (num1, num2);
          }
}
let numero1=parseFloat(prompt("Ingrese el primer número:  "));
let numero2=parseFloat(prompt("Ingrese el segundo número:  "));
let operacion=parseFloat(prompt("Ingrese la operación (suma, resta, multiplicacion, division)"));

let resultado=calculadora(numero1, numero2, operacion);
console.log("El resultado es:  "+ resultado);
document.write("El resultado es:  "+ resultado);