import idListeningSkillsReducer, { INITIAL_STATE } from "./idListeningSkillsReducer";
import { selectChoice, generateAnswer, clearChoices } from "./idListeningSkillsActions";

import { setupChoices } from '_testUtils/setup-functions/instrumentIdReducerTestSetup';

describe("Listening Skills Test reducer", () => {
  it('should return the initial state', () => {
    expect(idListeningSkillsReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle selecting a choice for level 1', () => {
    Math.random = jest.fn(() => 0.5)
    const result = idListeningSkillsReducer(undefined, selectChoice({
      id: 1,
      level: '1',
      choice: 'percussion'
    }));
    expect(result.choice1.id).toBe('xylophone');
    const result2 = idListeningSkillsReducer(undefined, selectChoice({
      id: 2,
      level: '1',
      choice: 'voice'
    }));
    expect(result2.choice2.id).toBe('tenor');
  });

  it('should handle selecting a choice for level 2 or above', () => {
    const result = setupChoices();
    expect(result.choice1.id).toBe('electricBass');
    expect(result.choice2.id).toBe('theremin');
  });

  it('should handle generating an answer', () => {
    const choices = setupChoices();
    const { choice1, choice2 } = choices;
    const result = idListeningSkillsReducer(choices, generateAnswer({ choice1, choice2 }));
    expect(result.answer.id).toBe(choice2.id);
  });
  
  it('should handle clearing choices', () => {
    const choices = setupChoices();
    const result = idListeningSkillsReducer(choices, clearChoices());
    expect(result.choice1).toBe(null);
    expect(result.choice2).toBe(null);
    expect(result.answer).toBe(null);
  });
});