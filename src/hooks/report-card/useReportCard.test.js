import useReportCard from "./useReportCard";
import { act, renderHook } from "@testing-library/react-hooks";
import { instrumentIdReportCard } from "data/_report-cards/initialReportCards";

describe("useReportCard hook", () => {
  it("returns the initial report card", () => {
    const { result } = renderHook(() => useReportCard("instrumentId", 1));
    expect(result.current[0]).toEqual(instrumentIdReportCard);
  });

  it("updates the report card", () => {
    const { result } = renderHook(() => useReportCard("instrumentId", 1));
    const updatedReportCard = {
      ...instrumentIdReportCard,
      electronic: ["SYNTHESIZER"],
    };
    act(() => {
      const setReportCard = result.current[1];
      setReportCard(updatedReportCard);
    });
    expect(result.current[0]).toEqual(updatedReportCard);
  });
});
