export default function findLettersToRemove({ newWords, currWords }) {
  const oldLetterCounter = makeFrequencyCounter(currWords);
  const newLetterCounter = makeFrequencyCounter(newWords);
  const lettersToRemove = [];
  for (let char of Object.keys(oldLetterCounter)) {
    if (!newLetterCounter[char]) lettersToRemove.push(char);
  };
  return lettersToRemove;
};

export function makeFrequencyCounter(words) {
  const freqCounter = {};
  for (let word of words) {
    for (let char of word) {
      freqCounter[char] ? 
        freqCounter[char] += 1 :
        freqCounter[char] = 1;
    };
  };
  return freqCounter;
};