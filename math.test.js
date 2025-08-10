const { factorial, fibonacci } = require('./math');

describe('Factorial Function', () => {
    test('factorial de 0 es 1', () => {
        expect(factorial(0)).toBe(1);
    });

    test('factorial de 1 es 1', () => {
        expect(factorial(1)).toBe(1);
    });

    test('factorial de 5 es 120', () => {
        expect(factorial(5)).toBe(120);
    });

    test('factorial de 7 es 5040', () => {
        expect(factorial(7)).toBe(5040);
    });

    test('factorial de número negativo lanza error', () => {
        expect(() => factorial(-1)).toThrow('El factorial no está definido para números negativos');
    });

    test('factorial de 10 es 3628800', () => {
        expect(factorial(10)).toBe(3628800);
    });
});

describe('Fibonacci Function', () => {
    test('fibonacci de 0 es 0', () => {
        expect(fibonacci(0)).toBe(0);
    });

    test('fibonacci de 1 es 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    test('fibonacci de 2 es 1', () => {
        expect(fibonacci(2)).toBe(1);
    });

    test('fibonacci de 5 es 5', () => {
        expect(fibonacci(5)).toBe(5);
    });

    test('fibonacci de 8 es 21', () => {
        expect(fibonacci(8)).toBe(21);
    });

    test('fibonacci de 10 es 55', () => {
        expect(fibonacci(10)).toBe(55);
    });

    test('fibonacci de número negativo lanza error', () => {
        expect(() => fibonacci(-1)).toThrow('La posición debe ser un número no negativo');
    });
});
