/** capturePerformance: 
 * a debugging tool for measuring performance with React's Profiler component. Wrap your component(s) with a Profiler and set its onRender prop to this function
 * 
 * Only use when you need to check the performance of a component
 * 
 * Refer to these docs for explanation of params:
 * https://react.dev/reference/react/Profiler
 */

export default function capturePerformance(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) {
  console.table({
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  });
}