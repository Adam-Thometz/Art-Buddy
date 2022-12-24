import calculateTimeLeft from "./calculateTimeLeft";

jest.mock('tone', () => ({
  Time() {
    return {
      toSeconds() {
        return 10;
      },
    };
  },
}));

describe('calculteTimeLeft function', () => {
  it('should return the correct amount of time', () => {
    const mockLoops = [{ progress: 0.5 }];
    const result = calculateTimeLeft(mockLoops);
    expect(result).toBe(5000);

    const mockLoops2 = [{ progress: 0.75 }];
    const result2 = calculateTimeLeft(mockLoops2);
    expect(result2).toBe(2500);    
  });
});