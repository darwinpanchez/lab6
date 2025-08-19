
const { toFahrenheit, movingAverage, toCelsius } = require('../utils/math');

describe('toFahrenheit', () => {
    test('Transformar a Fahrenheit 0C', () => {
        expect(toFahrenheit(0)).toBe(32.0);
    });
    test('Transformar a Fahrenheit 100C', () => {
        expect(toFahrenheit(100)).toBe(212.0);
    });
    test('Transformar a Fahrenheit -40C', () => {
        expect(toFahrenheit(-40)).toBe(-40);
    });

});

describe('toCelsius', () => {
    test('Transformar a Celsius 32F ', () => {
        expect(toCelsius(32)).toBe(0.0);
    });

});


describe('movingAverage', () => {
    test('Media movil con ventana 2', () => {
        expect(movingAverage([10,20,30,40], 2)).toEqual([15.00, 25.00, 35.00]);
    });
    
    test('Media movil con ventana igual al tamaño del array', () => {
        expect(movingAverage([1,2,3], 3)).toEqual([2.00]);
    });
});
