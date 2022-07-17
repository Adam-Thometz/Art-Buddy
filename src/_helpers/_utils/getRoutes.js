/** getRoutes
 * Purpose: takes a React component and returns its children. Mainly used to get Route components found in a larger component and spread them in a Routes component.
 */

export default function getRoutes(component) {
  return component().props.children;
};