function searchLetter(words, letter) {
  for (let word of words) {
    if (word.includes(letter)) return true;
  }
  return false;
};

export default searchLetter;