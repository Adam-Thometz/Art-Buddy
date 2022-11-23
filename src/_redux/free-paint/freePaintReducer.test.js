import freePaintReducer, { INITIAL_STATE } from "./freePaintReducer";

import { setColor, setStencil, setIsErasing, clearGame, setEditStencilMode } from "./freePaintActions";

describe("Free Paint reducer", () => {
  it('should return the initial state', () => {
    expect(freePaintReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should change the color', () => {
    const result = freePaintReducer(undefined, setColor('blue'));
    expect(result.color).toBe('blue');
  });
  
  it('should change the display icon', () => {
    const result = freePaintReducer(undefined, setStencil('A'));
    expect(result.stencil).toBe('A');
  });

  it('should change the erasing state', () => {
    const result = freePaintReducer(undefined, setIsErasing(true));
    expect(result.isErasing).toBe(true);
  });

  it('should set the stencil edit state', () => {
    const result = freePaintReducer(undefined, setEditStencilMode(true));
    expect(result.isEditingStencil).toBe(true);
  });

  it('should handle resetting', () => {
    const result = freePaintReducer(undefined, clearGame());
    expect(result).toEqual(INITIAL_STATE);
  });
});