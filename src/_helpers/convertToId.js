export default function convertToId(name) {
  const nameArr = name.split(' ');
  let id = '';
  id += nameArr[0].toLowerCase();
  for (let i = 1; i < nameArr.length; i++) {
    const firstLetter = nameArr[i][0]
    const rest = nameArr[i].slice(1).toLowerCase();
    id += (firstLetter.toUpperCase() + rest);
  };
  return id;
};