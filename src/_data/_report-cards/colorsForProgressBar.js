import prependBrightnessAndSaturation from "_utils/_general/prependBrightnessAndSaturation";
import colorWheel from "_data/color-theory/colorWheel";

// Standard colors
// Red: #FD4D3A
const redInstrumentId = 'invert(53%) sepia(93%) saturate(4071%) hue-rotate(337deg) brightness(98%) contrast(104%)';
// Yellow: #FFE81A
const yellowInstrumentId = 'invert(81%) sepia(95%) saturate(5782%) hue-rotate(336deg) brightness(102%) contrast(103%)';
// Green: #89EB0A
const greenInstrumentId = 'invert(72%) sepia(68%) saturate(1545%) hue-rotate(38deg) brightness(109%) contrast(92%)';
export const instrumentIdColors = [
  prependBrightnessAndSaturation(redInstrumentId),
  prependBrightnessAndSaturation(yellowInstrumentId),
  prependBrightnessAndSaturation(yellowInstrumentId),
  prependBrightnessAndSaturation(greenInstrumentId)
];

// COLOR THEORY COLORS
const {
  yellow, red, blue,
  green, orange, violet,
  dandelion, tangelo, plum, blueberry, emerald, pear
} = colorWheel;

export const primaryColors = [
  yellow.color.filter, 
  red.color.filter, 
  blue.color.filter
];

export const secondaryColors = [
  green.color.filter,
  orange.color.filter,
  violet.color.filter
];

export const tertiaryColors = [
  dandelion.color.filter, 
  tangelo.color.filter, 
  plum.color.filter, 
  blueberry.color.filter, 
  emerald.color.filter, 
  pear.color.filter
];