const paintColors = [
  // black
  '#000000',
  // pink
  '#FF69B4',
  // red
  '#FF0000',
  // orange
  '#FFA500',
  // yellow
  '#FFFF00',
  // green
  '#00FF00',
  // blue
  '#0000FF',
  // purple
  '#A020F0',
  // brown
  '#964B00',
  // grey
  '#808080',
]

export const colorsToFilter = new Map([
  // black
  ['#000000', 'invert(0%) sepia(0%) saturate(0%) hue-rotate(304deg) brightness(100%) contrast(102%)'],
  // pink
  ['#FF69B4', "invert(69%) sepia(45%) saturate(4705%) hue-rotate(296deg) brightness(103%) contrast(101%)"],
  // red
  ['#FF0000', "invert(13%) sepia(98%) saturate(6803%) hue-rotate(5deg) brightness(102%) contrast(116%)"],
  // orange
  ['#FFA500', "invert(67%) sepia(37%) saturate(3043%) hue-rotate(359deg) brightness(101%) contrast(107%)"],
  // yellow
  ['#FFFF00', "invert(92%) sepia(44%) saturate(3830%) hue-rotate(353deg) brightness(105%) contrast(104%)"],
  // green
  ['#00FF00', "invert(48%) sepia(26%) saturate(5280%) hue-rotate(91deg) brightness(127%) contrast(121%)"],
  // blue
  ['#0000FF', "invert(8%) sepia(99%) saturate(7150%) hue-rotate(245deg) brightness(109%) contrast(131%)"],
  // purple
  ['#A020F0', "invert(20%) sepia(50%) saturate(6442%) hue-rotate(273deg) brightness(95%) contrast(102%)"],
  // brown
  ['#964B00', "invert(24%) sepia(98%) saturate(1292%) hue-rotate(17deg) brightness(99%) contrast(101%)"],
  // grey
  ['#808080', "invert(56%) sepia(0%) saturate(0%) hue-rotate(19deg) brightness(91%) contrast(92%)"]
]);

export default paintColors;