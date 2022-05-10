const testWordDisplayOneWord = [
  {
    scale: 0,
    word: [
      {
        letter: 'H',
        note: null
      },
      {
        letter: 'I',
        note: null
      }
    ]
  }
];

const testWordDisplayTwoWords = [
  {
    scale: 0,
    word: [
      {
        letter: 'H',
        note: null
      },
      {
        letter: 'I',
        note: null
      }
    ]
  },
  {
    scale: 0,
    word: [
      {
        letter: 'H',
        note: null
      },
      {
        letter: 'E',
        note: null
      },
      {
        letter: 'L',
        note: null
      },
      {
        letter: 'L',
        note: null
      },
      {
        letter: 'O',
        note: null
      }
    ]
  }
];

const testState = {
  wordDisplay: testWordDisplayOneWord,
};

export {
  testWordDisplayOneWord,
  testWordDisplayTwoWords,
  testState
};