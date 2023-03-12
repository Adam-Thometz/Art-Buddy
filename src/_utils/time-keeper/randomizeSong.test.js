import randomizeSong from "./randomizeSong";

describe("randomizeSong function", () => {
  const FIFTEEN_SECONDS = 0;
  const THIRTY_SECONDS = 0.34;
  const ONE_MINUTE = 0.67;
  it("should create a random ordering of a 3 minute song", () => {
    Math.random = jest.fn();
    Math.random
      .mockReturnValueOnce(THIRTY_SECONDS)
      .mockReturnValueOnce(THIRTY_SECONDS)
      // this should run twice
      .mockReturnValue(ONE_MINUTE);
    const result = randomizeSong({ seconds: 180, mood: "excited" });
    expect(result.length).toBe(4);
  });

  it("should create a random ordering of a 3 minute song while eliminating unusable choices", () => {
    const THIRTY_SECONDS_TWO_CHOICES = 0.5;
    const FIFTEEN_SECONDS_TWO_CHOICES = 0.0;
    Math.random = jest.fn();
    Math.random
      .mockReturnValueOnce(ONE_MINUTE)
      .mockReturnValueOnce(ONE_MINUTE)
      .mockReturnValueOnce(FIFTEEN_SECONDS)
      // At this point there's 45 sec left so 1 min is not a valid choice
      .mockReturnValueOnce(THIRTY_SECONDS_TWO_CHOICES)
      .mockReturnValueOnce(FIFTEEN_SECONDS_TWO_CHOICES);
    const result = randomizeSong({ seconds: 180, mood: "excited" });
    expect(result.length).toBe(5);
  });
});
