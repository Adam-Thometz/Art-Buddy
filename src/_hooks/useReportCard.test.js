import useReportCard, { INITIAL_REPORT_CARD } from "./useReportCard";
import { act, renderHook } from '@testing-library/react-hooks';

describe('useReportCard hook', () => {
  it('returns the initial report card', () => {
    const { result } = renderHook(() => useReportCard(1));
    expect(result.current[0]).toEqual(INITIAL_REPORT_CARD);
  });

  it('updates the report card', () => {
    const { result } = renderHook(() => useReportCard(1));
    const updatedReportCard = { ...INITIAL_REPORT_CARD, electronic: ['SYNTHESIZER'] };
    act(() => {
      const setReportCard = result.current[1];
      setReportCard(JSON.stringify(updatedReportCard));
    });
    expect(result.current[0]).toEqual(updatedReportCard);
  });
});