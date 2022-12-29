import createNoteOrder from "./createNoteOrder";

jest.mock('tone', () => ({
  Time: jest.fn((time) => ({
    toSeconds: jest.fn(() => time === '4n' ? 1 : 0.5)
  }))
}));

describe('createNoteOrder function', () => {
  it('should take an array of objects with note and isRest and return objects with duration, time, isRest, and notes', () => {
    const notes = [
      // Measure 1
      { duration: ['4n'], isRest: false },
      { duration: ['8n', '8n'], isRest: false },
      { duration: ['4n'], isRest: true },
      { duration: ['4n'], isRest: false },
      // Measure 2
      { duration: ['8n', '8n'], isRest: false },
      { duration: ['4n'], isRest: true },
      { duration: ['4n'], isRest: false },
      { duration: ['4n'], isRest: false },
    ];

    const result = [
      // Measure 1
      { pitch: 'D5', duration: '4n', time: 0, isRest: false },
      { pitch: 'D5', duration: '8n', time: 1, isRest: false },
      { pitch: 'D5', duration: '8n', time: 1.5, isRest: false },
      { pitch: 'D5', duration: '4n', time: 2, isRest: true },
      { pitch: 'D5', duration: '4n', time: 3, isRest: false },
      // Measure 2
      { pitch: 'F5', duration: '8n', time: 4, isRest: false },
      { pitch: 'F5', duration: '8n', time: 4.5, isRest: false },
      { pitch: 'F5', duration: '4n', time: 5, isRest: true },
      { pitch: 'F5', duration: '4n', time: 6, isRest: false },
      { pitch: 'F5', duration: '4n', time: 7, isRest: false },
    ];
    expect(createNoteOrder(notes)).toEqual(result);
  });
});