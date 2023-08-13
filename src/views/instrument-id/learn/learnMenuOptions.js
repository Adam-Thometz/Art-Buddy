import { TRUMPET_ICON, SYNTH_ICON, DRUM_SET_ICON, HARP_ICON, CLARINET_ICON, VOICE_MAIN_ICON } from "_assets/instrument-id/instrumentId.assets";

import { instrumentIdUrls } from "_routes/routeUrls";

const learnMenuOptions = [
  {
    name: "BRASS",
    icon: TRUMPET_ICON,
    url: `${instrumentIdUrls.learn}/brass`,
  },
  {
    name: "ELECTRONIC",
    icon: SYNTH_ICON,
    url: `${instrumentIdUrls.learn}/electronic`,
  },
  {
    name: "PERCUSSION",
    icon: DRUM_SET_ICON,
    url: `${instrumentIdUrls.learn}/percussion`,
  },
  {
    name: "STRINGS",
    icon: HARP_ICON,
    url: `${instrumentIdUrls.learn}/strings`,
  },
  {
    name: "WOODWIND",
    icon: CLARINET_ICON,
    url: `${instrumentIdUrls.learn}/woodwind`,
  },
  {
    name: "VOICE",
    icon: VOICE_MAIN_ICON,
    url: `${instrumentIdUrls.learn}/voice`,
  },
];

export default learnMenuOptions;
