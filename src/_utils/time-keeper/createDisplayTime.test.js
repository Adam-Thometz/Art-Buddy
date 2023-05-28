import createDisplayTime from "./createDisplayTime.js";

describe("createDisplayTime function", () => {
  const tests = [
    // assertion                           seconds display
    ["30 seconds",                         30,     "00:00:30"],
    ["3 minutes",                          180,    "00:03:00"],
    ["1 hour, 10 minutes, and 29 seconds", 4229,   "01:10:29"],
  ];
  it.each(tests)("display time for %s", (_, seconds, display) => {
    expect(createDisplayTime(seconds)).toBe(display)
  });
});
