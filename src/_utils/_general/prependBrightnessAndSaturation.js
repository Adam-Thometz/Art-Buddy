// function to convert gray block to black so the filter can work
// takes multiple colors and returns an array of colors with
// brightness and saturation added.
export default function prependBrightnessAndSaturation(color) {
  return `brightness(0%) saturate(100%) ${color}`
};