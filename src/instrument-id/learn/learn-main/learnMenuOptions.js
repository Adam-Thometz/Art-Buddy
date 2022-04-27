import { trumpetIcon, synthIcon, drumSetIcon, harpIcon, clarinetIcon } from "../../_icons/iconImports";

import { instrumentIdUrls } from "../../../_routes/routeUrls";

const learnMenuOptions = [
  {
    name: 'BRASS',
    icon: trumpetIcon,
    url: `${instrumentIdUrls.learnUrl}/brass`
  },
  {
    name: 'ELECTRONIC',
    icon: synthIcon,
    url: `${instrumentIdUrls.learnUrl}/electronic`
  },
  {
    name: 'PERCUSSION',
    icon: drumSetIcon,
    url: `${instrumentIdUrls.learnUrl}/percussion`
  },
  {
    name: 'STRINGS',
    icon: harpIcon,
    url: `${instrumentIdUrls.learnUrl}/strings`
  },
  {
    name: 'WOODWIND',
    icon: clarinetIcon,
    url: `${instrumentIdUrls.learnUrl}/woodwind`
  }
]

export default learnMenuOptions;