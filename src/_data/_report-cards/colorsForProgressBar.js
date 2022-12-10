// function to convert gray block to black so the filter can work
const prependBrightnessSaturation = filter => `brightness(0%) saturate(100%) ${filter}`;

// Standard colors
// Red: #FD4D3A
const redStandard = 'invert(53%) sepia(93%) saturate(4071%) hue-rotate(337deg) brightness(98%) contrast(104%)';
// Yellow: #FFE81A
const yellowStandard = 'invert(81%) sepia(95%) saturate(5782%) hue-rotate(336deg) brightness(102%) contrast(103%)';
// Green: #89EB0A
const greenStandard = 'invert(72%) sepia(68%) saturate(1545%) hue-rotate(38deg) brightness(109%) contrast(92%)';

export const standardColors = [
  prependBrightnessSaturation(redStandard), 
  prependBrightnessSaturation(yellowStandard), 
  prependBrightnessSaturation(greenStandard)
];

// COLOR THEORY COLORS
// Primary
const yellowColorTheory = 'invert(87%) sepia(48%) saturate(823%) hue-rotate(343deg) brightness(107%) contrast(99%)';
const redColorTheory = 'invert(36%) sepia(91%) saturate(7216%) hue-rotate(349deg) brightness(95%) contrast(96%)';
const blueColorTheory = 'invert(36%) sepia(13%) saturate(2712%) hue-rotate(183deg) brightness(100%) contrast(87%)';

export const primaryColors = [
  prependBrightnessSaturation(yellowColorTheory), 
  prependBrightnessSaturation(redColorTheory), 
  prependBrightnessSaturation(blueColorTheory)
];

// Secondary
const greenColorTheory = 'invert(64%) sepia(15%) saturate(2216%) hue-rotate(82deg) brightness(89%) contrast(80%)';
const orangeColorTheory = 'invert(74%) sepia(38%) saturate(5375%) hue-rotate(347deg) brightness(101%) contrast(94%)';
const purpleColorTheory = 'invert(22%) sepia(34%) saturate(4099%) hue-rotate(264deg) brightness(88%) contrast(88%)';

export const secondaryColors = [
  prependBrightnessSaturation(greenColorTheory), 
  prependBrightnessSaturation(orangeColorTheory), 
  prependBrightnessSaturation(purpleColorTheory)
];

// Tertiary
const dandelionColorTheory = 'invert(75%) sepia(92%) saturate(680%) hue-rotate(350deg) brightness(102%) contrast(98%)';
const tangeloColorTheory = 'invert(49%) sepia(88%) saturate(4037%) hue-rotate(349deg) brightness(98%) contrast(94%)';
const plumColorTheory = 'invert(29%) sepia(85%) saturate(1273%) hue-rotate(273deg) brightness(83%) contrast(80%)';
const blueberryColorTheory = 'invert(42%) sepia(18%) saturate(1468%) hue-rotate(208deg) brightness(88%) contrast(94%)';
const emeraldColorTheory = 'invert(44%) sepia(52%) saturate(579%) hue-rotate(121deg) brightness(94%) contrast(94%)';
const pearColorTheory = 'invert(68%) sepia(80%) saturate(365%) hue-rotate(38deg) brightness(94%) contrast(87%)';

export const tertiaryColors = [
  prependBrightnessSaturation(dandelionColorTheory), 
  prependBrightnessSaturation(tangeloColorTheory), 
  prependBrightnessSaturation(plumColorTheory), 
  prependBrightnessSaturation(blueberryColorTheory), 
  prependBrightnessSaturation(emeraldColorTheory), 
  prependBrightnessSaturation(pearColorTheory)
];