import prependBrightnessAndSaturation from "_utils/_general/prependBrightnessAndSaturation";

export const GREEN_FILTER = prependBrightnessAndSaturation(
  'invert(68%) sepia(56%) saturate(915%) hue-rotate(38deg) brightness(109%) contrast(92%)'
);
export const YELLOW_FILTER = prependBrightnessAndSaturation(
  'invert(99%) sepia(44%) saturate(4778%) hue-rotate(335deg) brightness(102%) contrast(104%)'
);
export const RED_FILTER = prependBrightnessAndSaturation(
  'invert(49%) sepia(82%) saturate(4390%) hue-rotate(339deg) brightness(101%) contrast(98%)'
);

export const HIGH_BATTERY = '89%';
export const MEDIUM_BATTERY = '48%';
export const LOW_BATTERY = '12%';