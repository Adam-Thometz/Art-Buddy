export default function findLettersToRemove({ oldInput, newInput }) {
  const oldLetters = lettersInInput(oldInput);
  const newLetters = lettersInInput(newInput);
  const lettersToRemove = [];
  for (let char of oldLetters.keys()) {
    if (!newLetters.has(char)) lettersToRemove.push(char);
  };
  return lettersToRemove;
};

export function lettersInInput(words) {
  const letters = new Set();
  for (let word of words) {
    for (let char of word) {
      letters.add(char);
    };
  };
  return letters;
};