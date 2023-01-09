import { HIGH_BATTERY, MEDIUM_BATTERY, LOW_BATTERY, GREEN_FILTER, YELLOW_FILTER, RED_FILTER } from '_data/mood-meter/batteryDefaults';

const batteries = [
  { width: HIGH_BATTERY, id: 2, filter: GREEN_FILTER },
  { width: MEDIUM_BATTERY, id: 1, filter: YELLOW_FILTER },
  { width: LOW_BATTERY, id: 0, filter: RED_FILTER },
];

export default batteries