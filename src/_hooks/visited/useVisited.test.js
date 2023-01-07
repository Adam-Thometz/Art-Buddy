import useVisited from './useVisited';
import { act, renderHook } from '@testing-library/react-hooks';

describe('useVisited hook', () => {
  it('returns false if no default value is set', () => {
    const { result } = renderHook(() => useVisited());
    expect(result.current[0]).toBe(false);
  });
  
  it('returns false if key is put in but the game was not visited', () => {
    const { result } = renderHook(() => useVisited('wtm'));
    expect(result.current[0]).toBe(false);
  });
  
  it('updates localStorage', () => {
    const { result } = renderHook(() => useVisited('wtm'));
    act(() => {
      const setState = result.current[1];
      setState(true);
    });
    expect(result.current[0]).toBe(true);
  });
});