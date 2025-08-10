/**
 * Calcula el factorial de un número
 * @param {number} n - El número para calcular el factorial
 * @returns {number} El factorial de n
 */
function factorial(n) {
    if (n < 0) {
        throw new Error('El factorial no está definido para números negativos');
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    // ERROR INTENCIONAL: Devolver n + 1 en lugar de n * factorial(n - 1)
    return n + 1;
}

/**
 * Calcula el número de Fibonacci en la posición n
 * @param {number} n - La posición en la secuencia de Fibonacci
 * @returns {number} El número de Fibonacci en la posición n
 */
function fibonacci(n) {
    if (n < 0) {
        throw new Error('La posición debe ser un número no negativo');
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = {
    factorial,
    fibonacci
};
