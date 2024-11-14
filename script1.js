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
// Ejemplos de uso
document.write("Suma: ", suma(5, 3));           // Resultado: 8
document.write("Resta: ", resta(5, 3));         // Resultado: 2
document.write("Multiplicación: ", multiplicacion(5, 3)); // Resultado: 15
document.write("División: ", division(5, 3));   // Resultado: 1.6666666666666667
document.write("División por cero: ", division(5, 0)); // Resultado: "Error: División por cero"