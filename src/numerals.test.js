const { expect } = require('chai');
const { decimalToRoman } = require('./numerals');

describe('Roman Numerals', () => {
  it('returns I for 1', () => {
    const result = decimalToRoman(1);
    expect(result).to.equal('I');
  });

  it('returns II for 2', () => {
    const result = decimalToRoman(2);
    expect(result).to.equal('II');
  });

  it('returns III for 3', () => {
    const result = decimalToRoman(3);
    expect(result).to.equal('III');
  });

  it('returns IV for 4', () => {
    const result = decimalToRoman(4);
    expect(result).to.equal('IV');
  });

  it('returns V for 5', () => {
    const result = decimalToRoman(5);
    expect(result).to.equal('V');
  });

  it('returns VI for 6', () => {
    const result = decimalToRoman(6);
    expect(result).to.equal('VI');
  });

  it('returns VII for 7', () => {
    const result = decimalToRoman(7)
    expect(result).to.equal('VII')
  })

  it('returns VIII for 8', () => {
    const result = decimalToRoman(8)
    expect(result).to.equal('VIII')
  })

  it('returns IX for 9', () => {
    const result = decimalToRoman(9)
    expect(result).to.equal('IX')
  })

  it('returns X for 10', () => {
    const result = decimalToRoman(10)
    expect(result).to.equal('X')
  })

  it('returns XI for 11', () => {
    const result = decimalToRoman(11)
    expect(result).to.equal('XI')
  })

  it('returns XII for 12', () => {
    const result = decimalToRoman(12)
    expect(result).to.equal('XII')
  })

  it('returns XIII for 13', () => {
    const result = decimalToRoman(13)
    expect(result).to.equal('XIII')
  })

  it('returns XIV for 14', () => {
    const result = decimalToRoman(14)
    expect(result).to.equal('XIV')
  })

  it('returns XV for 15', () => {
    const result = decimalToRoman(15)
    expect(result).to.equal('XV')
  })

  it('returns XVIII for 18', () => {
    const result = decimalToRoman(18)
    expect(result).to.equal('XVIII')
  })

  it('returns XIX for 19', () => {
    const result = decimalToRoman(19)
    expect(result).to.equal('XIX')
  })

  it('returns XX for 20', () => {
    const result = decimalToRoman(20)
    expect(result).to.equal('XX')
  })

  it('returns XXIV for 24', () => {
    const result = decimalToRoman(24)
    expect(result).to.equal('XXIV')
  })

  it('returns XXIX for 29', () => {
    const result = decimalToRoman(29)
    expect(result).to.equal('XXIX')
  })

  it('returns XL for 40', () => {
    const result = decimalToRoman(40)
    expect(result).to.equal('XL')
  })

  it('returns XLIX for 49', () => {
    const result = decimalToRoman(49)
    expect(result).to.equal('XLIX')
  })

  it('returns L for 50', () => {
    const result = decimalToRoman(50)
    expect(result).to.equal('L')
  })

  it('returns LX for 60', () => {
    const result = decimalToRoman(60)
    expect(result).to.equal('LX')
  })

  it('returns LXXIV for 74', () => {
    const result = decimalToRoman(74)
    expect(result).to.equal('LXXIV')
  })

  it('returns LXXXIX for 89', () => {
    const result = decimalToRoman(89)
    expect(result).to.equal('LXXXIX')
  })

  it('returns XC for 90', () => {
    const result = decimalToRoman(90)
    expect(result).to.equal('XC')
  })

  it('returns XCIV for 94', () => {
    const result = decimalToRoman(94)
    expect(result).to.equal('XCIV')
  })

  it('returns XCIX for 99', () => {
    const result = decimalToRoman(99)
    expect(result).to.equal('XCIX')
  })

  it('returns C for 100', () => {
    const result = decimalToRoman(100)
    expect(result).to.equal('C')
  })

  it('returns CC for 200', () => {
    const result = decimalToRoman(200)
    expect(result).to.equal('CC')
  })

});