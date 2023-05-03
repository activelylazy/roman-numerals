const { expect } = require('chai');
const { decimalToRoman } = require('./numerals');

describe('Roman Numerals', () => {

  it('converts 1 to I', () => {
    expect(decimalToRoman(1)).to.equal('I');
  });

  it('converts 2 to II', () => {
    expect(decimalToRoman(2)).to.equal('II');
  });

  it('converts 3 to III', () => {
    expect(decimalToRoman(3)).to.equal('III');
  });

  it('converts 5 to V', () => {
    expect(decimalToRoman(5)).to.equal('V');
  });

  it('converts 6 to VI', () => {
    expect(decimalToRoman(6)).to.equal('VI');
  });
  
  it('converts 4 to IV', () => {
    expect(decimalToRoman(4)).to.equal('IV');
  });

  it('converts 7 to VII', () => {
    expect(decimalToRoman(7)).to.equal('VII');
  });

  it('converts 8 to VIII', () => {
    expect(decimalToRoman(8)).to.equal('VIII');
  });

  it('converts 9 to IX', () => {
    expect(decimalToRoman(9)).to.equal('IX');
  });

  it('converts 10 to X', () => {
    expect(decimalToRoman(10)).to.equal('X');
  });

  it('converts 11 to XI', () => {
    expect(decimalToRoman(11)).to.equal('XI');
  });

  it('converts 12 to XII', () => {
    expect(decimalToRoman(12)).to.equal('XII');
  });

  it('converts 13 to XIII', () => {
    expect(decimalToRoman(13)).to.equal('XIII');
  });

  it('converts 14 to XIV', () => {
    expect(decimalToRoman(14)).to.equal('XIV');
  });

  it('converts 15 to XV', () => {
    expect(decimalToRoman(15)).to.equal('XV');
  });

  it('converts 16 to XVI', () => {
    expect(decimalToRoman(16)).to.equal('XVI');
  });

  it('converts 19 to XIX', () => {
    expect(decimalToRoman(19)).to.equal('XIX');
  });

  it('converts 20 to XX', () => {
    expect(decimalToRoman(20)).to.equal('XX');
  });

  it('converts 21 to XXI', () => {
    expect(decimalToRoman(21)).to.equal('XXI');
  });

  it('converts 24 to XXIV', () => {
    expect(decimalToRoman(24)).to.equal('XXIV');
  });

  it('converts 29 to XXIX', () => {
    expect(decimalToRoman(29)).to.equal('XXIX');
  });

  it('converts 35 to XXXV', () => {
    expect(decimalToRoman(35)).to.equal('XXXV');
  });

  it('converts 40 to XL', () => {
    expect(decimalToRoman(40)).to.equal('XL');
  });

  it('converts 42 to XLII', () => {
    expect(decimalToRoman(42)).to.equal('XLII');
  });

  it('converts 44 to XLIV', () => {
    expect(decimalToRoman(44)).to.equal('XLIV');
  });

  it('converts 49 to XLIX', () => {
    expect(decimalToRoman(49)).to.equal('XLIX');
  });

});