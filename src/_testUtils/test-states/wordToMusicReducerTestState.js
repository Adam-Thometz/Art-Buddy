const testWordDisplayOneWord = [
  [
    {
      letter: 'H',
      note: null
    },
    {
      letter: 'I',
      note: null
    }
  ]
];

const testWordDisplayTwoWords = [
  [
    {
      letter: 'H',
      note: null
    },
    {
      letter: 'I',
      note: null
    }
  ],
  [
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
];

const testState = {
  wordDisplay: testWordDisplayOneWord,
  scale: 0
};

export {
  testWordDisplayOneWord,
  testWordDisplayTwoWords,
  testState
};