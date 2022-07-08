export default function findLettersToRemove({ oldInput, newInput }) {
  const oldLetters = lettersInInput(oldInput);
  const newLetters = lettersInInput(newInput);
  const lettersToRemove = [];
  for (let char of Object.keys(oldLetters)) {
    if (!newLetters[char]) lettersToRemove.push(char);
  };
  return lettersToRemove;
};

export function lettersInInput(words) {
  const letters = {};
  for (let word of words) {
    for (let char of word) {
      letters[char] = true;
    };
  };
  return letters;
};