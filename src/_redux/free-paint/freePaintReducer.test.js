import freePaintReducer, { INITIAL_STATE } from "./freePaintReducer";

import { setColor, setDisplay } from "./freePaintActions";

describe("Free Paint reducer", () => {
  it('should return the initial state', () => {
    expect(freePaintReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should change the color', () => {
    const result = freePaintReducer(undefined, setColor('blue'));
    expect(result.color).toBe('blue');
  });
  
  it('should change the display icon', () => {
    const result = freePaintReducer(undefined, setDisplay('A'));
    expect(result.display).toBe('A');
  });
});