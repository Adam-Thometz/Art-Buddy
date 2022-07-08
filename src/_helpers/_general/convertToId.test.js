import convertToId from "./convertToId";

describe('convertToId function', () => {
  it('should convert a one-word name into an id for an object', () => {
    const result = convertToId('Thometz');
    expect(result).toBe('thometz');
  });

  it('should convert a two-word name into an id for an object', () => {
    const result = convertToId('demo class');
    expect(result).toBe('demoClass');
  });

  it('should convert input with a number into an id', () => {
    const result = convertToId('5662 Thometz');
    expect(result).toBe('5662Thometz');
  });

  it('should convert an instrument into camel case', () => {
    const result = convertToId('french horn');
    expect(result).toBe('frenchHorn');
  });
});