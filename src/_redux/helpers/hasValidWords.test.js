import hasValidWords from "./hasValidWords";

describe('hasValidWords function', () => {
  it('should return true when given one valid word', () => {
    const result = hasValidWords('hello');
    expect(result).toEqual({ success: true });
  });
  
  it('should return true when given at least two valid words', () => {
    const result = hasValidWords('hello goodbye');
    expect(result).toEqual({ success: true });
  });

  it('should return false when given a word with non-alphabetic characters', () => {
    const result = hasValidWords('he110');
    expect(result).toEqual({ success: false, error: 'Only letters are allowed!' });
  });
  
  it('should return false when given more than 4 valid words', () => {
    const result = hasValidWords('hello will you decode me pretty please');
    expect(result).toEqual({ success: false, error: 'Only four words at a time!' });
  });
  
  it('should return false if one of the words is over 12 characters', () => {
    const result = hasValidWords('supercalifragilisticexpialidocious');
    expect(result).toEqual({ success: false, error: 'Words can only have 12 characters at a time!' });
  });
});