import randomizeSong from "./randomizeSong";

describe("randomizeSong function", () => {
  const FIFTEEN_SECONDS = 0;
  const THIRTY_SECONDS = 0.34;
  const ONE_MINUTE = 0.67;
  const THIRTY_SECONDS_TWO_CHOICES = 0.5;

  function setupWithoutElimination() {
    Math.random
      .mockReturnValueOnce(THIRTY_SECONDS)
      .mockReturnValueOnce(THIRTY_SECONDS)
      // this should run twice
      .mockReturnValue(ONE_MINUTE);
  }

  function setupWithElimination() {
    Math.random
      .mockReturnValueOnce(ONE_MINUTE)
      .mockReturnValueOnce(ONE_MINUTE)
      .mockReturnValueOnce(FIFTEEN_SECONDS)
      // At this point there's 45 sec left so 1 min is not a valid choice
      .mockReturnValueOnce(THIRTY_SECONDS_TWO_CHOICES)
      // Now there's 15 sec left so 15 sec is the only valid choice
      .mockReturnValueOnce(FIFTEEN_SECONDS);
  }
  const tests = [
    // assertion                            setup                     result
    ["",                                    setupWithoutElimination,  [30, 30, 60, 60]], 
    [" while eliminating unusable choices", setupWithElimination,     [60, 60, 15, 30, 15]]
  ];
  it.each(tests)("creates a 3 minute song%s", (_, setup, result) => {
    Math.random = jest.fn();
    setup();
    const song = randomizeSong({ seconds: 180, mood: "excited" });
    expect(song.map(piece => piece.seconds)).toEqual(result);
  });
});
