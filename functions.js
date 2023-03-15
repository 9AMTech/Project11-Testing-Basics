const capitalize = (string) => {
    return string[0].toUpperCase() + string.substring(1);
}

const reverse = (string) => {
    return string.split('').reverse().join('');
}

const calculator = (a, b) => ({
    add: function () { return a + b },
    subtract: function () { return a - b },
    multiply: function () { return a * b },
    divide: function () { return a / b },
})

const cipher = (string) => {
    const split = string.split('');
    const cipher = split.map(x => {
        console.log(x)
        console.log(x.charCodeAt(0));
        if (x.charCodeAt(0) === 122) {
            return x = 'a';
        }
        else if (x.charCodeAt(0) === 90) {
            return x = 'A';
        }
        else {
            let newCharCode = x.charCodeAt(0) + 1;
            return x = String.fromCharCode(newCharCode);
        }
    });

    return cipher.join('');
}

const average = (array) => {
    return (array.reduce((prev, curr) => prev + curr) / array.length);
}

const min = (array) => {
    const min = array.sort((a, b) => a - b);
    return min[0];
}

const max = (array) => {
    const max = array.sort((a, b) => b - a);
    return max[0];
}

const length = (array) => {
    return array.length;
}

const analyzeArray = (array) => {
    return {
        average: average(array),
        min: min(array),
        max: max(array),
        length: length(array),
    }
}

export {
    capitalize,
    reverse,
    calculator,
    cipher,
    average,
    min,
    max,
    length,
    analyzeArray
}