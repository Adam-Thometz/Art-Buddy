import { 
  trumpetIcon,
  frenchHornIcon,
  synthIcon,
  samplerIcon,
  electricGuitarIcon,
  electricBassIcon,
  drumSetIcon,
  djembeIcon,
  tambourineIcon,
  xylophoneIcon,
  harpIcon,
  acousticGuitarIcon,
  banjoIcon,
  pianoIcon,
  violinIcon,
  clarinetIcon,
  saxophoneIcon,
  panFluteIcon,
} from '../_icons/iconImports'

const learnOptions = {
  brass: {
    main: trumpetIcon,
    instruments: [{
        name: 'trumpet',
        icon: trumpetIcon
      },
      {
        name: 'french horn',
        icon: frenchHornIcon
      }
    ]
  },
  electronic: {
    main: synthIcon,
    instruments: [
      {
        name: 'electric guitar',
        icon: electricGuitarIcon
      },
      {
        name: 'electric bass',
        icon: electricBassIcon
      },
      {
        name: 'synthesizer',
        icon: synthIcon
      },
      {
        name: 'sampler',
        icon: samplerIcon
      },
    ]
  },
  percussion: {
    main: drumSetIcon,
    instruments: [
      {
        name: 'djembe',
        icon: djembeIcon
      },
      {
        name: 'drum set',
        icon: drumSetIcon
      },
      {
        name: 'tambourine',
        icon: tambourineIcon
      },
      {
        name: 'xylophone',
        icon: xylophoneIcon
      },
    ]
  },
  strings: {
    main: harpIcon,
    instruments: [
      {
        name: 'acoustic guitar',
        icon: acousticGuitarIcon
      },
      {
        name: 'banjo',
        icon: banjoIcon
      },
      {
        name: 'harp',
        icon: harpIcon
      },
      {
        name: 'piano',
        icon: pianoIcon
      },
      {
        name: 'violin',
        icon: violinIcon
      },
    ]
  },
  woodwind: {
    main: harpIcon,
    instruments: [
      {
        name: 'clarinet',
        icon: clarinetIcon
      },
      {
        name: 'saxophone',
        icon: saxophoneIcon
      },
      {
        name: 'pan flute',
        icon: panFluteIcon
      },
    ]
  },
}

export default learnOptions;