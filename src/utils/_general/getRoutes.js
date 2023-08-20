/** getRoutes
 * Purpose: takes a React component and returns its children. Used in the _routes directory to get routes from a component
 */

export default function getRoutes(component) {
  return component().props.children;
}
