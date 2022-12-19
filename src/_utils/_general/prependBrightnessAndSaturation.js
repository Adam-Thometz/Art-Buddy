// function to convert gray block to black so the filter can work
// takes the filter settings of a color and returns the filter with
// brightness and saturation added at the beginning.
export default function prependBrightnessAndSaturation(color) {
  return `brightness(0%) saturate(100%) ${color}`
};