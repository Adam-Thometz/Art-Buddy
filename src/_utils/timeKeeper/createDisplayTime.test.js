import createDisplayTime from "./createDisplayTime.js";

describe("createDisplayTime function", () => {
  it("should display time for 30 seconds", () => {
    expect(createDisplayTime(30)).toBe("00:00:30");
  });

  it("should display time for 3 minutes", () => {
    expect(createDisplayTime(180)).toBe("00:03:00");
  });

  it("should display time for 1 hour, 10 minutes, and 29 seconds", () => {
    expect(createDisplayTime(4229)).toBe("01:10:29");
  });
});
