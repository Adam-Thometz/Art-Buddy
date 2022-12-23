/** prependBrightnessAndSaturation
 * Purpose: takes a filter and prepends brightness and saturation. Used on components that are not black so the filter may work.
 */
export default function prependBrightnessAndSaturation(filter) {
  return `brightness(0%) saturate(100%) ${filter}`
};