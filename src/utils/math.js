function toCelsius(f) {
    if (!Number.isFinite(f)) {
        throw new TypeError('Input must be a number');
    }
    return Math.round(((f-32) * (5/9)) * 10) / 10;
}

function toFahrenheit(c) {
    if (!Number.isFinite(c)) {
        throw new TypeError('Input must be a number');
    }
    return Math.round(((c*(9/5))+32) * 10) / 10;
}

function movingAverage(series, window){
    if (!Array.isArray(series)) {
        throw new TypeError('Series must be an array');
    }
    
    if (series.some(x => !Number.isFinite(x))) {
        throw new TypeError('All series values must be finite numbers');
    }
    
    if (!Number.isInteger(window) || window < 2 || window > series.length) {
        throw new RangeError('Window must be an integer ≥ 2 and ≤ series.length');
    }
    
    const result = [];
    for (let i = 0; i <= series.length - window; i++) {
        const slice = series.slice(i, i + window);
        const average = slice.reduce((sum, val) => sum + val, 0) / window;
        result.push(Math.round(average * 100) / 100);
    }
    
    return result;
}

module.exports = {
    toCelsius,
    toFahrenheit,
    movingAverage
};
