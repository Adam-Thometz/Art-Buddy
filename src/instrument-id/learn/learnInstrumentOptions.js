import * as icons from '../_icons/iconImports';
import * as sounds from '../_sounds/soundImports';
import { Sampler } from 'tone';

const sample = (instrument) => (
  new Sampler({
    urls: {
      C3: instrument
    }
  }).toDestination()
);

const learnInstrumentOptions = {
  brass: {
    main: icons.trumpetIcon,
    instruments: [{
        name: 'trumpet',
        icon: icons.trumpetIcon,
        madeFrom: 'lorum ipsum dolor and all that',
        howToPlay: '',
        sound: sample(sounds.trumpet),
        videoUrl: ''
      },
      {
        name: 'french horn',
        icon: icons.frenchHornIcon,
        madeFrom: 'lorum ipsum dolor and all that',
        howToPlay: '',
        sound: sample(sounds.frenchHorn),
        videoUrl: ''
      },
      {
        name: 'trombone',
        icon: icons.tromboneIcon,
        madeFrom: 'lorum ipsum dolor and all that',
        howToPlay: '',
        sound: sample(sounds.trombone),
        videoUrl: ''
      },
      {
        name: 'tuba',
        icon: icons.tubaIcon,
        madeFrom: 'lorum ipsum dolor and all that',
        howToPlay: '',
        sound: sample(sounds.tuba),
        videoUrl: ''
      },
    ]
  },
  electronic: {
    main: icons.synthIcon,
    instruments: [
      {
        name: 'electric guitar',
        icon: icons.electricGuitarIcon,
        madeFrom: 'lorum ipsum dolor and all that',
        howToPlay: '',
        sound: sample(sounds.electricGuitar),
        videoUrl: ''
      },
      {
        name: 'electric bass',
        icon: icons.electricBassIcon,
        madeFrom: 'lorum ipsum dolor and all that',
        howToPlay: '',
        sound: sample(sounds.electricBass),
        videoUrl: ''
      },
      {
        name: 'synthesizer',
        icon: icons.synthIcon,
        madeFrom: 'lorum ipsum dolor and all that',
        howToPlay: '',
        sound: sample(sounds.synthesizer),
        videoUrl: ''
      },
      {
        name: 'sampler',
        icon: icons.samplerIcon,
        madeFrom: 'lorum ipsum dolor and all that',
        howToPlay: '',
        sound: sample(sounds.sampler),
        videoUrl: ''
      },
      {
        name: 'theremin',
        icon: icons.thereminIcon,
        madeFrom: 'lorum ipsum dolor and all that',
        howToPlay: '',
        sound: sample(sounds.theremin),
        videoUrl: ''
      },
    ]
  },
  percussion: {
    main: icons.drumSetIcon,
    instruments: [
      {
        name: 'djembe',
        icon: icons.djembeIcon,
        madeFrom: 'lorum ipsum dolor and all that',
        howToPlay: '',
        sound: sample(sounds.djembe),
        videoUrl: ''
      },
      {
        name: 'drum set',
        icon: icons.drumSetIcon,
        madeFrom: 'lorum ipsum dolor and all that',
        howToPlay: '',
        sound: sample(sounds.drumSet),
        videoUrl: ''
      },
      {
        name: 'tambourine',
        icon: icons.tambourineIcon,
        madeFrom: 'lorum ipsum dolor and all that',
        howToPlay: '',
        sound: sample(sounds.tambourine),
        videoUrl: ''
      },
      {
        name: 'xylophone',
        icon: icons.xylophoneIcon,
        madeFrom: 'lorum ipsum dolor and all that',
        howToPlay: '',
        sound: sample(sounds.xylophone),
        videoUrl: ''
      },
      {
        name: 'triangle',
        icon: icons.triangleIcon,
        madeFrom: 'lorum ipsum dolor and all that',
        howToPlay: '',
        sound: sample(sounds.triangle),
        videoUrl: ''
      },
      {
        name: 'conga',
        icon: icons.congaIcon,
        madeFrom: 'lorum ipsum dolor and all that',
        howToPlay: '',
        sound: sample(sounds.conga),
        videoUrl: ''
      },
    ]
  },
  strings: {
    main: icons.harpIcon,
    instruments: [
      {
        name: 'acoustic guitar',
        icon: icons.acousticGuitarIcon,
        madeFrom: 'lorum ipsum dolor and all that',
        howToPlay: '',
        sound: sample(sounds.acousticGuitar),
        videoUrl: ''
      },
      {
        name: 'banjo',
        icon: icons.banjoIcon,
        madeFrom: 'lorum ipsum dolor and all that',
        howToPlay: '',
        sound: sample(sounds.banjo),
        videoUrl: ''
      },
      {
        name: 'harp',
        icon: icons.harpIcon,
        madeFrom: 'lorum ipsum dolor and all that',
        howToPlay: '',
        sound: sample(sounds.harp),
        videoUrl: ''
      },
      {
        name: 'piano',
        icon: icons.pianoIcon,
        madeFrom: 'lorum ipsum dolor and all that',
        howToPlay: '',
        sound: sample(sounds.piano),
        videoUrl: ''
      },
      {
        name: 'violin',
        icon: icons.violinIcon,
        madeFrom: 'lorum ipsum dolor and all that',
        howToPlay: '',
        sound: sample(sounds.violin),
        videoUrl: ''
      },
    ]
  },
  woodwind: {
    main: icons.harpIcon,
    instruments: [
      {
        name: 'clarinet',
        icon: icons.clarinetIcon,
        madeFrom: 'lorum ipsum dolor and all that',
        howToPlay: '',
        sound: sample(sounds.clarinet),
        videoUrl: ''
      },
      {
        name: 'bassoon',
        icon: icons.bassoonIcon,
        madeFrom: 'lorum ipsum dolor and all that',
        howToPlay: '',
        sound: sample(sounds.bassoon),
        videoUrl: ''
      },
      {
        name: 'flute',
        icon: icons.fluteIcon,
        madeFrom: 'lorum ipsum dolor and all that',
        howToPlay: '',
        sound: sample(sounds.flute),
        videoUrl: ''
      },
      {
        name: 'saxophone',
        icon: icons.saxophoneIcon,
        madeFrom: 'lorum ipsum dolor and all that',
        howToPlay: '',
        sound: sample(sounds.saxophone),
        videoUrl: ''
      },
      {
        name: 'pan flute',
        icon: icons.panFluteIcon,
        madeFrom: 'lorum ipsum dolor and all that',
        howToPlay: '',
        sound: sample(sounds.panFlute),
        videoUrl: ''
      },
    ]
  },
  voice: {
    main: icons.voiceMainIcon,
    instruments: [
      {
        name: 'soprano',
        icon: icons.sopranoIcon,
        madeFrom: 'lorum ipsum dolor and all that',
        howToPlay: '',
        sound: sample(sounds.soprano),
        videoUrl: ''
      },
      {
        name: 'mezzo soprano',
        icon: icons.mezzoSopranoIcon,
        madeFrom: 'lorum ipsum dolor and all that',
        howToPlay: '',
        sound: sample(sounds.mezzoSoprano),
        videoUrl: ''
      },
      {
        name: 'alto',
        icon: icons.altoIcon,
        madeFrom: 'lorum ipsum dolor and all that',
        howToPlay: '',
        sound: sample(sounds.alto),
        videoUrl: ''
      },
      {
        name: 'tenor',
        icon: icons.tenorIcon,
        madeFrom: 'lorum ipsum dolor and all that',
        howToPlay: '',
        sound: sample(sounds.tenor),
        videoUrl: ''
      },
      {
        name: 'baritone',
        icon: icons.baritoneIcon,
        madeFrom: 'lorum ipsum dolor and all that',
        howToPlay: '',
        sound: sample(sounds.baritone),
        videoUrl: ''
      },
      {
        name: 'bass',
        icon: icons.bassIcon,
        madeFrom: 'lorum ipsum dolor and all that',
        howToPlay: '',
        sound: sample(sounds.bass),
        videoUrl: ''
      }
    ]
  }
}

export default learnInstrumentOptions;