
const symbols = [
  { decimal: 1, roman: 'I', maxRepeats: 3, prefixes: [] },
  { decimal: 5, roman: 'V', maxRepeats: 1, prefixes: [ { decimal: 1, roman: 'I' } ] },
  { decimal: 10, roman: 'X', maxRepeats: 3, prefixes: [ { decimal: 1, roman: 'I' } ] },
  { decimal: 50, roman: 'L', maxRepeats: 1, prefixes: [ { decimal: 10, roman: 'X' } ] },
]

function decimalToRoman(decimal) {
  var result = '';
  var value = decimal;
  symbols.forEach((element, index) => {
    var valueToCompare = index < symbols.length - 1
      ? value % symbols[index+1].decimal
      : value;
    var toPrepend = '';
    while (valueToCompare >= element.decimal && valueToCompare <= element.decimal * element.maxRepeats) {
      toPrepend += element.roman;
      value -= element.decimal;
      valueToCompare -= element.decimal;
    }
    element.prefixes.forEach(prefix => {
      if (valueToCompare > 0 && valueToCompare == element.decimal - prefix.decimal) {
        toPrepend += prefix.roman + element.roman;
        value -= element.decimal - prefix.decimal;
        valueToCompare -= element.decimal - prefix.decimal;
      }  
    });
    result = toPrepend + result;
  });
  return result;
}

exports.decimalToRoman = decimalToRoman;
