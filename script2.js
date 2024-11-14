
function calculadora(num1, num2, operacion) {
    switch (operacion) {
        case 'suma':
            return num1 + num2;
        case 'resta':
            return num1 - num2;
        case 'multiplicacion':
            return num1 * num2;
        case 'division':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return 'Error: División por cero';
            }
        default:
            return 'Operación no válida';
    }
}

// Ejemplos de uso:
document.write(calculadora(5, 3, 'suma'));          // Resultado: 8
document.write(calculadora(5, 3, 'resta'));         // Resultado: 2
document.write(calculadora(5, 3, 'multiplicacion')); // Resultado: 15
document.write(calculadora(5, 0, 'division'));      // Resultado: 'Error: División por cero'
document.write(calculadora(5, 3, 'potencia'));      // Resultado: 'Operación no válida'