export default function hasValidWords(words) {
  const fullInput = words.replace(/ /g, '');
  if (fullInput.length > 20) return { success: false, error: 'Input can only have 20 characters' };
  const wordsArr = words.split(' ');
  if (wordsArr.length > 4) {
    return { success: false, error: 'Only four words at a time' };
  };
  
  for (let word of wordsArr) {
    if (word.length === 0) return { success: true };
    if (word.length > 12) {
      return { success: false, error: 'Words can only have 12 characters at a time' };
    };
    
    const hasValidChars = word.match(/^[A-Za-z]+$/);
    if (!hasValidChars) {
      return { success: false, error: 'Only letters are allowed' };
    };
  };

  return { success: true };
};