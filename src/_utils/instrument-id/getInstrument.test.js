import getInstrument from "./getInstrument";
import learnInstrumentOptions from "_data/instrument-id/learnInstrumentOptions";

describe("getInstrument function", () => {
  it("should return an instrument object", () => {
    expect(getInstrument("trumpet")).toEqual(
      learnInstrumentOptions.brass.instruments[0]
    );
    expect(getInstrument("electricGuitar")).toEqual(
      learnInstrumentOptions.electronic.instruments[0]
    );
  });

  it("should return undefined if instrument not found", () => {
    expect(getInstrument("mayonaise")).toBe(undefined);
  });
});
