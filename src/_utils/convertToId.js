export default function convertToId(name) {
  const nameArr = name.split(' ');
  let id = '';
  id += nameArr[0].toLowerCase();
  for (let i = 1; i < nameArr.length; i++) {
    nameArr[i].toLowerCase();
    nameArr[i][0].toUpperCase();
    id += nameArr[i];
  };
  return id;
};