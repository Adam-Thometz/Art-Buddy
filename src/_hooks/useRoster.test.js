import useRoster from "./useRoster";
import { act, renderHook } from '@testing-library/react-hooks';

describe('useRoster hook', () => {
  it('returns the initial roster', () => {
    const { result } = renderHook(() => useRoster());
    expect(result.current[0]).toEqual({});
  });

  it('updates the roster', () => {
    const { result } = renderHook(() => useRoster());
    const sampleRoster = {
      demoClass: {
        name: 'Demo Class',
        students: ['Hello', 'Goodbye']
      }
    };
    act(() => {
      const setRoster = result.current[1];
      setRoster(sampleRoster);
    });
    expect(result.current[0]).toEqual(sampleRoster);
  });
});