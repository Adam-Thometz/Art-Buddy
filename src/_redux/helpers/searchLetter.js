function searchLetter(wordDisplay, letter) {
  const result = []
  for (let i = 0; i < wordDisplay.length; i++) {
    const currWord = wordDisplay[i].word;
    const letterIdx = currWord.findIndex(block => !block.note && (block.letter === letter));
    if (letterIdx !== -1) {
      result.push(i, letterIdx);
      break;
    }
  }
  return result;
}

export default searchLetter;