
const valueMap = [
  { decimal: 100, symbol: 'C' },
  { decimal: 50, symbol: 'L' },
  { decimal: 10, symbol: 'X' },
  { decimal: 5, symbol: 'V' },
];

const prefixMap = [
  { decimal: 10, symbol: 'X' },
  { decimal: 1, symbol: 'I' },
]

function decimalToRoman(decimal) {
  var value = decimal;
  var result = '';
  valueMap.forEach(element => {
    while (value >= element.decimal) {
      value -= element.decimal;
      result += element.symbol;
    }
    prefixMap.forEach(prefix => {
      if (prefix.decimal < element.decimal &&
        value >= element.decimal - prefix.decimal) {
        value -= element.decimal - prefix.decimal;
        result += prefix.symbol + element.symbol;
      }
    });
  });
  while (value >= 1) {
    value--;
    result += 'I';
  }
  return result;
}

exports.decimalToRoman = decimalToRoman;
