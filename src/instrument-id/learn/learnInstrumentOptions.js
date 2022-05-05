import * as icons from '../_icons/iconImports';
import * as sounds from '../_sounds/soundImports';

const learnInstrumentOptions = {
  brass: {
    main: icons.trumpetIcon,
    instruments: [{
        name: 'TRUMPET',
        icon: icons.trumpetIcon,
        madeFrom: ['BRASS'],
        howToPlay: 'blowing into the mouthpiece and pressing on the valves',
        sound: sounds.trumpet,
        videoUrl: ''
      },
      {
        name: 'FRENCH HORN',
        icon: icons.frenchHornIcon,
        madeFrom: ['BRASS'],
        howToPlay: 'blowing into the mouthpiece and pressing on the valves',
        sound: sounds.frenchHorn,
        videoUrl: ''
      },
      {
        name: 'TROMBONE',
        icon: icons.tromboneIcon,
        madeFrom: ['BRASS'],
        howToPlay: 'blowing into the mouthpiece and pressing on the valves',
        sound: sounds.trombone,
        videoUrl: ''
      },
      {
        name: 'TUBA',
        icon: icons.tubaIcon,
        madeFrom: ['BRASS'],
        howToPlay: 'blowing into the mouthpiece and pressing on the valves',
        sound: sounds.tuba,
        videoUrl: ''
      },
    ]
  },
  electronic: {
    main: icons.synthIcon,
    instruments: [
      {
        name: 'ELECTRIC GUITAR',
        icon: icons.electricGuitarIcon,
        madeFrom: ['WOOD', 'MAGNETS', 'METAL', 'ELECTRICITY'],
        howToPlay: 'putting fingers on the frets and strumming or plucking the stings with a pick',
        sound: sounds.electricGuitar,
        videoUrl: ''
      },
      {
        name: 'ELECTRIC BASS',
        icon: icons.electricBassIcon,
        madeFrom: ['WOOD', 'MAGNETS', 'METAL', 'ELECTRICITY'],
        howToPlay: 'putting fingers on the frets and strumming or plucking the stings with a pick or fingers',
        sound: sounds.electricBass,
        videoUrl: ''
      },
      {
        name: 'SYNTHESIZER',
        icon: icons.synthIcon,
        madeFrom: ['METAL', 'ELECTRICITY', 'COMPUTERS'],
        howToPlay: 'adjusting knobs and/or pressing keys',
        sound: sounds.synthesizer,
        videoUrl: ''
      },
      {
        name: 'SAMPLER',
        icon: icons.samplerIcon,
        madeFrom: ['METAL', 'ELECTRICITY', 'COMPUTERS'],
        howToPlay: 'pressing buttons on the instrument',
        sound: sounds.sampler,
        videoUrl: ''
      },
      {
        name: 'THEREMIN',
        icon: icons.thereminIcon,
        madeFrom: ['METAL', 'ELECTRICITY', 'HEAT SENSOR'],
        howToPlay: 'waving your hands back and forth from the antenna',
        sound: sounds.theremin,
        videoUrl: ''
      },
    ]
  },
  percussion: {
    main: icons.drumSetIcon,
    instruments: [
      {
        name: 'DJEMBE',
        icon: icons.djembeIcon,
        madeFrom: ['WOOD', 'ANIMAL SKIN'],
        howToPlay: 'hitting the animal skin',
        sound: sounds.djembe,
        videoUrl: ''
      },
      {
        name: 'DRUM SET',
        icon: icons.drumSetIcon,
        madeFrom: ['WOOD', 'METAL'],
        howToPlay: 'using drum sticks to hit different parts of the set',
        sound: sounds.drumSet,
        videoUrl: ''
      },
      {
        name: 'TAMBOURINE',
        icon: icons.tambourineIcon,
        madeFrom: ['WOOD', 'METAL'],
        howToPlay: 'shaking it!',
        sound: sounds.tambourine,
        videoUrl: ''
      },
      {
        name: 'XYLOPHONE',
        icon: icons.xylophoneIcon,
        madeFrom: ['WOOD'],
        howToPlay: 'hitting different blocks with a mallet',
        sound: sounds.xylophone,
        videoUrl: ''
      },
      {
        name: 'TRIANGLE',
        icon: icons.triangleIcon,
        madeFrom: ['METAL'],
        howToPlay: 'hitting it with a metal stick',
        sound: sounds.triangle,
        videoUrl: ''
      },
      {
        name: 'CONGA',
        icon: icons.congaIcon,
        madeFrom: ['WOOD', 'ANIMAL SKIN'],
        howToPlay: 'hitting the animal skin',
        sound: sounds.conga,
        videoUrl: ''
      },
    ]
  },
  strings: {
    main: icons.harpIcon,
    instruments: [
      {
        name: 'ACOUSTIC GUITAR',
        icon: icons.acousticGuitarIcon,
        madeFrom: ['WOOD'],
        howToPlay: 'putting fingers on the frets and strumming or plucking the stings with a pick',
        sound: sounds.acousticGuitar,
        videoUrl: ''
      },
      {
        name: 'BANJO',
        icon: icons.banjoIcon,
        madeFrom: ['WOOD', 'ANIMAL SKIN'],
        howToPlay: 'putting fingers on the frets and strumming or plucking the stings with a pick',
        sound: sounds.banjo,
        videoUrl: ''
      },
      {
        name: 'HARP',
        icon: icons.harpIcon,
        madeFrom: ['WOOD'],
        howToPlay: 'plucking the strings',
        sound: sounds.harp,
        videoUrl: ''
      },
      {
        name: 'PIANO',
        icon: icons.pianoIcon,
        madeFrom: ['WOOD'],
        howToPlay: 'pressing the keys, which activate hammers that bang on strings',
        sound: sounds.piano,
        videoUrl: ''
      },
      {
        name: 'VIOLIN',
        icon: icons.violinIcon,
        madeFrom: ['WOOD'],
        howToPlay: 'putting your fingers on the fretboard and bowing the strings using a bow',
        sound: sounds.violin,
        videoUrl: ''
      },
    ]
  },
  woodwind: {
    main: icons.harpIcon,
    instruments: [
      {
        name: 'CLARINET',
        icon: icons.clarinetIcon,
        madeFrom: ['WOOD'],
        howToPlay: '',
        sound: sounds.clarinet,
        videoUrl: ''
      },
      {
        name: 'BASSOON',
        icon: icons.bassoonIcon,
        madeFrom: ['WOOD'],
        howToPlay: '',
        sound: sounds.bassoon,
        videoUrl: ''
      },
      {
        name: 'FLUTE',
        icon: icons.fluteIcon,
        madeFrom: ['WOOD', 'METAL'],
        howToPlay: '',
        sound: sounds.flute,
        videoUrl: ''
      },
      {
        name: 'SAXOPHONE',
        icon: icons.saxophoneIcon,
        madeFrom: ['BRASS'],
        howToPlay: '',
        sound: sounds.saxophone,
        videoUrl: ''
      },
      {
        name: 'PAN FLUTE',
        icon: icons.panFluteIcon,
        madeFrom: ['WOOD'],
        howToPlay: '',
        sound: sounds.panFlute,
        videoUrl: ''
      },
    ]
  },
  voice: {
    main: icons.voiceMainIcon,
    instruments: [
      {
        name: 'SOPRANO',
        icon: icons.sopranoIcon,
        madeFrom: ['HUMANS!'],
        howToPlay: 'using your voice!',
        sound: sounds.soprano,
        videoUrl: ''
      },
      {
        name: 'MEZZO SOPRANO',
        icon: icons.mezzoSopranoIcon,
        madeFrom: ['HUMANS!'],
        howToPlay: 'using your voice!',
        sound: sounds.mezzoSoprano,
        videoUrl: ''
      },
      {
        name: 'ALSO',
        icon: icons.altoIcon,
        madeFrom: ['HUMANS!'],
        howToPlay: 'using your voice!',
        sound: sounds.alto,
        videoUrl: ''
      },
      {
        name: 'TENOR',
        icon: icons.tenorIcon,
        madeFrom: ['HUMANS!'],
        howToPlay: 'using your voice!',
        sound: sounds.tenor,
        videoUrl: ''
      },
      {
        name: 'BARITONE',
        icon: icons.baritoneIcon,
        madeFrom: ['HUMANS!'],
        howToPlay: 'using your voice!',
        sound: sounds.baritone,
        videoUrl: ''
      },
      {
        name: 'BASS',
        icon: icons.bassIcon,
        madeFrom: ['HUMANS!'],
        howToPlay: 'using your voice!',
        sound: sounds.bass,
        videoUrl: ''
      }
    ]
  }
}

export default learnInstrumentOptions;