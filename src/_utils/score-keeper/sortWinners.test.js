import sortWinners from "./sortWinners";

describe("sortWinners function", () => {
  it("should sort students by most points", () => {
    const result = sortWinners([
      { name: "Jack", points: 1 },
      { name: "Jill", points: 2 },
    ]);
    expect(result[0]).toEqual({ name: "Jill", points: 2 });
    expect(result[1]).toEqual({ name: "Jack", points: 1 });
  });
});
