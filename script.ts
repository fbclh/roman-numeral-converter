// Convert the given arabic number into a roman numeral.

function convertToRoman(num) {
  const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];

  for (let i = 0; i < arabic.length; i++) {
    if (num === 0 || num < 1) return '';
    if (num >= arabic[i]) return roman[i] + convertToRoman(num - arabic[i]);
  }
}

console.log(convertToRoman(3)); // III
console.log(convertToRoman(7)); // VII
console.log(convertToRoman(11)); // XI
console.log(convertToRoman(400)); // CD
console.log(convertToRoman(1000)); // M


