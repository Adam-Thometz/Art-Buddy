import prependBrightnessAndSaturation from "_utils/_general/prependBrightnessAndSaturation";

// #89EB0A, Lizard Green
const GREEN = prependBrightnessAndSaturation("invert(72%) sepia(80%) saturate(1579%) hue-rotate(37deg) brightness(108%) contrast(92%)");
// #FFE81A, Middle Yellow
const YELLOW = prependBrightnessAndSaturation("invert(81%) sepia(98%) saturate(1012%) hue-rotate(336deg) brightness(102%) contrast(103%)");
// #FD4D3A, Orange Soda
const RED = prependBrightnessAndSaturation("invert(34%) sepia(94%) saturate(1917%) hue-rotate(340deg) brightness(107%) contrast(98%)");

const meter = [
  GREEN,
  GREEN,
  GREEN,
  YELLOW,
  YELLOW,
  YELLOW,
  RED,
  RED,
  RED,
];

export default meter;