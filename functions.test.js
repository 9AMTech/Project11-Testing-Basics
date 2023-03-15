import { capitalize, reverse, calculator, cipher, average, min, max, length, analyzeArray } from './functions.js';

test.skip('Will capitalize string', () => {
    expect(capitalize('dog')).toBe('Dog');
});

test.skip('Will reverse string', () => {
    expect(reverse('nascar')).toBe('racsan');
});

test.skip('Calculator will add', () => {
    expect(calculator(2, 5).add()).toBe(7)
});

test.skip('Calculator will subtract', () => {
    expect(calculator(2, 5).subtract()).toBe(-3)
});

test.skip('Calculator will multiply', () => {
    expect(calculator(2, 5).multiply()).toBe(10)
});

test.skip('Calculator will divide', () => {
    expect(calculator(10, 5).divide()).toBe(2)
});

test.skip('Caeser Cipher; Works', () => {
    expect(cipher('zad')).toBe('abe')
});

test.skip('Caeser Cipher; Works with Capitals', () => {
    expect(cipher('ZAD')).toBe('ABE')
});

test.skip('Function will return average', () => {
    expect(average([2, 4, 6])).toBe(4);
});

test.skip('Function will return smallest value', () => {
    expect(min([1, 2, 3, 0])).toBe(0);
})

test.skip('Function will return maximum value', () => {
    expect(max([1, 2, 3, 4, 1, 1, 1])).toBe(4);
})

test.skip('Will return array length', () => {
    expect(length([1, 5, 7, 9, 23])).toBe(5);
})


test('Will analyze the current array, returning an average, min value, max value, and array length', () => {
    expect(analyzeArray([2, 4, 6])).toEqual({
        average: 4,
        min: 2,
        max: 6,
        length: 3
    });
})