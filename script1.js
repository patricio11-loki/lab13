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
    if (b === 0) {
        return "Error: División por cero";
    }
    return a / b;
}
//función calculadora
function calculadora(num1, num2, operacion) {
    switch (operacion) {
        case 'suma':
            return suma (num1 + num2);
        case 'resta':
            return resta (num1 - num2);
        case 'multiplicacion':
            return multiplicacion (num1 * num2);
        case 'division':
            if (num2 !== 0) {
                return division (num1 / num2);
            } else {
                return 'Error: División por cero';
            }
        default:
            return 'Operación no válida';
    }
}
let numero1=prompt("Ingrese el primer número:  ");
let numero2=prompt("Ingrese el segundo número:  ");
let operacion=prompt("Ingrese la operación (sumar, restar, multi, divi)");

let resultado=calculadora(numero1, numero2, operacion);