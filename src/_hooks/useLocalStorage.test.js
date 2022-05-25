import useLocalStorage from './useLocalStorage';
import { act, renderHook } from '@testing-library/react-hooks';
import { cleanup } from '@testing-library/react'

afterEach(cleanup)

describe('useLocalStorage hook', () => {
  it('returns null if no default value is set', () => {
    const { result } = renderHook(() => useLocalStorage('hello'));
    expect(result.current[0]).toBeNull();
  });
  
  it('returns default value', () => {
    const { result } = renderHook(() => useLocalStorage('hello', 'goodbye'));
    expect(result.current[0]).toBe('goodbye');
  });
  
  it('updates localStorage', () => {
    const { result } = renderHook(() => useLocalStorage('hello'));
    act(() => {
      const setState = result.current[1];
      setState('adios');
    });
    expect(result.current[0]).toBe('adios');
  });
});