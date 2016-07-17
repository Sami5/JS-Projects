function convertToRoman(num) {  
  let romanNumeral = '';
  const decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  decimals.forEach((elem, index) => {
    while (num >= elem) {
      romanNumeral += roman[index];
      num -= elem;
    }
  });

  return romanNumeral;
}

