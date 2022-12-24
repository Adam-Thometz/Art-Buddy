import { trumpetIcon, synthIcon, drumSetIcon, harpIcon, clarinetIcon, voiceMainIcon } from "_media/instrument-id/_icons/iconImports";

import { instrumentIdUrls } from "_routes/routeUrls";

const learnMenuOptions = [
  {
    name: 'BRASS',
    icon: trumpetIcon,
    url: `${instrumentIdUrls.learn}/brass`
  },
  {
    name: 'ELECTRONIC',
    icon: synthIcon,
    url: `${instrumentIdUrls.learn}/electronic`
  },
  {
    name: 'PERCUSSION',
    icon: drumSetIcon,
    url: `${instrumentIdUrls.learn}/percussion`
  },
  {
    name: 'STRINGS',
    icon: harpIcon,
    url: `${instrumentIdUrls.learn}/strings`
  },
  {
    name: 'WOODWIND',
    icon: clarinetIcon,
    url: `${instrumentIdUrls.learn}/woodwind`
  },
  {
    name: 'VOICE',
    icon: voiceMainIcon,
    url: `${instrumentIdUrls.learn}/voice`
  }
]

export default learnMenuOptions;