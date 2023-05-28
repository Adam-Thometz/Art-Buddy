import { LOW, MEDIUM, HIGH } from "_data/_utils/volume";

export default function generateVolume(volume, isMuted) {
  if (isMuted) return 0;
  if (volume === LOW) return 0.5;
  if (volume === MEDIUM) return 0.75;
  if (volume === HIGH) return 1;
}