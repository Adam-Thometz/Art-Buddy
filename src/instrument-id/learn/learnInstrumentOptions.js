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

const learnInstrumentOptions = {
  brass: {
    main: trumpetIcon,
    instruments: [{
        name: 'trumpet',
        icon: trumpetIcon,
        description: 'lorum ipsum dolor and all that',
        sound: null,
        videoUrl: ''
      },
      {
        name: 'french horn',
        icon: frenchHornIcon,
        description: 'lorum ipsum dolor and all that',
        sound: null,
        videoUrl: ''
      }
    ]
  },
  electronic: {
    main: synthIcon,
    instruments: [
      {
        name: 'electric guitar',
        icon: electricGuitarIcon,
        description: 'lorum ipsum dolor and all that',
        sound: null,
        videoUrl: ''
      },
      {
        name: 'electric bass',
        icon: electricBassIcon,
        description: 'lorum ipsum dolor and all that',
        sound: null,
        videoUrl: ''
      },
      {
        name: 'synthesizer',
        icon: synthIcon,
        description: 'lorum ipsum dolor and all that',
        sound: null,
        videoUrl: ''
      },
      {
        name: 'sampler',
        icon: samplerIcon,
        description: 'lorum ipsum dolor and all that',
        sound: null,
        videoUrl: ''
      },
    ]
  },
  percussion: {
    main: drumSetIcon,
    instruments: [
      {
        name: 'djembe',
        icon: djembeIcon,
        description: 'lorum ipsum dolor and all that',
        sound: null,
        videoUrl: ''
      },
      {
        name: 'drum set',
        icon: drumSetIcon,
        description: 'lorum ipsum dolor and all that',
        sound: null,
        videoUrl: ''
      },
      {
        name: 'tambourine',
        icon: tambourineIcon,
        description: 'lorum ipsum dolor and all that',
        sound: null,
        videoUrl: ''
      },
      {
        name: 'xylophone',
        icon: xylophoneIcon,
        description: 'lorum ipsum dolor and all that',
        sound: null,
        videoUrl: ''
      },
    ]
  },
  strings: {
    main: harpIcon,
    instruments: [
      {
        name: 'acoustic guitar',
        icon: acousticGuitarIcon,
        description: 'lorum ipsum dolor and all that',
        sound: null,
        videoUrl: ''
      },
      {
        name: 'banjo',
        icon: banjoIcon,
        description: 'lorum ipsum dolor and all that',
        sound: null,
        videoUrl: ''
      },
      {
        name: 'harp',
        icon: harpIcon,
        description: 'lorum ipsum dolor and all that',
        sound: null,
        videoUrl: ''
      },
      {
        name: 'piano',
        icon: pianoIcon,
        description: 'lorum ipsum dolor and all that',
        sound: null,
        videoUrl: ''
      },
      {
        name: 'violin',
        icon: violinIcon,
        description: 'lorum ipsum dolor and all that',
        sound: null,
        videoUrl: ''
      },
    ]
  },
  woodwind: {
    main: harpIcon,
    instruments: [
      {
        name: 'clarinet',
        icon: clarinetIcon,
        description: 'lorum ipsum dolor and all that',
        sound: null,
        videoUrl: ''
      },
      {
        name: 'saxophone',
        icon: saxophoneIcon,
        description: 'lorum ipsum dolor and all that',
        sound: null,
        videoUrl: ''
      },
      {
        name: 'pan flute',
        icon: panFluteIcon,
        description: 'lorum ipsum dolor and all that',
        sound: null,
        videoUrl: ''
      },
    ]
  },
}

export default learnInstrumentOptions;