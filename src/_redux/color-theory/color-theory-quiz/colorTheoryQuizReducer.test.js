import colorTheoryQuizReducer, { initialState, nextQuestion, nextSection, nextSublevel, nextLevel, gotIncorrect } from "./colorTheoryQuizReducer";

describe('Color Theory Quiz Reducer', () => {
  it("should return the initial state", () => {
    expect(colorTheoryQuizReducer(undefined, {})).toEqual(initialState);
  });

  const incorrectResult = colorTheoryQuizReducer(undefined, gotIncorrect);
  it("should catch an incorrect answer", () => {
    expect(incorrectResult.incorrect).toBe(true);
  });
  
  const nextQuestionResult = colorTheoryQuizReducer(incorrectResult, nextQuestion);
  it("should go to the next question", () => {
    expect(nextQuestionResult.answerIdx).toBe(1);
    expect(nextQuestionResult.incorrect).toBe(false);
  });

  const nextSectionResult = colorTheoryQuizReducer(nextQuestionResult, nextSection);
  it("should go to the next section", () => {
    expect(nextSectionResult.section).toBe(1);
    expect(nextSectionResult.answerIdx).toBe(0);
  });
  
  const nextSublevelResult = colorTheoryQuizReducer(nextSectionResult, nextSublevel);
  it("should go to the next sublevel", () => {
    expect(nextSublevelResult.subLevel).toBe('B');
    expect(nextSublevelResult.section).toBe(0);
    expect(nextSublevelResult.answerIdx).toBe(0);
  });

  const nextLevelResult = colorTheoryQuizReducer(nextSublevelResult, nextLevel);
  it("should go to the next level", () => {
    expect(nextLevelResult.subLevel).toBe('A');
    expect(nextLevelResult.section).toBe(0);
    expect(nextLevelResult.answerIdx).toBe(0);
  });
});