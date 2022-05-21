import getChoices from "./getChoice";

describe('getChoices function', () => {
  it('should return one choice for level 1', () => {
    Math.random = jest.fn(() => 0.5);
    const result = getChoices({ 
      level: '1',
      choice: 'brass',
    });
    expect(result.id).toBe('trombone');
    expect(result.family).toBe('brass');
  });

  it('should return two choices for level 2 and above', () => {
    Math.random = jest.fn();
    Math.random.mockReturnValueOnce(0.25).mockReturnValueOnce(0.75);
    const result = getChoices({ 
      level: '2',
      choice: 'brass',
    });
    expect(result.instrumentChoice.id).toBe('frenchHorn');
    expect(result.instrumentChoice.family).toBe('brass');
    expect(result.instrumentChoice2.id).toBe('tuba');
    expect(result.instrumentChoice2.family).toBe('brass');
  });
});