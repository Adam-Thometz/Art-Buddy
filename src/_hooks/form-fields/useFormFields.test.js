import useFormFields from "./useFormFields";
import { act, renderHook } from "@testing-library/react-hooks";

describe('useFormFields hook', () => {
  const testInitValue = { testInput: 'hello' };
  
  it('returns the initial value', () => {
    const { result } = renderHook(() => useFormFields(testInitValue));
    expect(result.current[0]).toEqual(testInitValue);
  });
  
  it('handles changing the value', () => {
    const { result } = renderHook(() => useFormFields(testInitValue));
    act(() => {
      const setForm = result.current[1];
      setForm({ target: { name: 'testInput', value: 'goodbye' } });
    });
    expect(result.current[0]).toEqual({ testInput: 'goodbye' });
  });
  
  it('handles resetting the form', () => {
    const { result } = renderHook(() => useFormFields(testInitValue));
    act(() => {
      const setForm = result.current[1];
      setForm({ target: { name: 'testInput', value: 'goodbye' } });
    });
    act(() => {
      const resetForm = result.current[2];
      resetForm();
    });
    expect(result.current[0]).toEqual(testInitValue);
  });

  it('handles adding another input', () => {
    const { result } = renderHook(() => useFormFields(testInitValue));
    act(() => {
      const addInput = result.current[3];
      addInput('testInput2', 'did i work?');
    });
    expect(result.current[0]).toEqual({
      ...testInitValue,
      testInput2: 'did i work?'
    });
  });
});