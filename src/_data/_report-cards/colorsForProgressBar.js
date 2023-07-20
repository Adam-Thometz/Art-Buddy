import colorWheel from "_data/color-theory/colorWheel";
import colors from "_data/_utils/colorOrder";

// Standard colors
// Red: #FD4D3A
const redInstrumentId = colors[2];
// Yellow: #FFE81A
const yellowInstrumentId = colors[1]
// Green: #89EB0A
const greenInstrumentId = colors[0]
export const instrumentIdColors = [
  redInstrumentId,
  yellowInstrumentId,
  yellowInstrumentId,
  greenInstrumentId,
];

// COLOR THEORY COLORS
const {
  yellow,
  red,
  blue,
  green,
  orange,
  violet,
  dandelion,
  tangelo,
  plum,
  blueberry,
  emerald,
  pear,
} = colorWheel;

export const primaryColors = [
  yellow.color.hex,
  red.color.hex,
  blue.color.hex,
];

export const secondaryColors = [
  green.color.hex,
  orange.color.hex,
  violet.color.hex,
];

export const tertiaryColors = [
  dandelion.color.hex,
  tangelo.color.hex,
  plum.color.hex,
  blueberry.color.hex,
  emerald.color.hex,
  pear.color.hex,
];
