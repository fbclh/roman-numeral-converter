# Roman Numeral Converter

freeCodeCamp JavaScript Algorithms and Data Structure project

## Description

Convert the given arabic number into a roman numeral.

## Example

```JavaScript
// Roman Numeral Converter
const convertToRoman = (num) => {
  const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  for (let i = 0; i < arabic.length; i++) {
    if (num === 0 || num < 1) return '';
    if (num >= arabic[i]) return roman[i] + convertToRoman(num - arabic[i]);
  }
};

// Input/Output
console.log(convertToRoman(33)); // XXIII
console.log(convertToRoman(93)); // XCIII
console.log(convertToRoman(777)); // DCCLXXVII

```
