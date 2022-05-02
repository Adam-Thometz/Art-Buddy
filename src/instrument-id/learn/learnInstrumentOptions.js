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
        description: 'lorum ipsum dolor and all that',
        sound: sample(sounds.trumpet),
        videoUrl: ''
      },
      {
        name: 'french horn',
        icon: icons.frenchHornIcon,
        description: 'lorum ipsum dolor and all that',
        sound: sample(sounds.frenchHorn),
        videoUrl: ''
      },
      {
        name: 'trombone',
        icon: icons.tromboneIcon,
        description: 'lorum ipsum dolor and all that',
        sound: sample(sounds.trombone),
        videoUrl: ''
      },
      {
        name: 'tuba',
        icon: icons.tubaIcon,
        description: 'lorum ipsum dolor and all that',
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
        description: 'lorum ipsum dolor and all that',
        sound: sample(sounds.electricGuitar),
        videoUrl: ''
      },
      {
        name: 'electric bass',
        icon: icons.electricBassIcon,
        description: 'lorum ipsum dolor and all that',
        sound: sample(sounds.electricBass),
        videoUrl: ''
      },
      {
        name: 'synthesizer',
        icon: icons.synthIcon,
        description: 'lorum ipsum dolor and all that',
        sound: sample(sounds.synthesizer),
        videoUrl: ''
      },
      {
        name: 'sampler',
        icon: icons.samplerIcon,
        description: 'lorum ipsum dolor and all that',
        sound: sample(sounds.sampler),
        videoUrl: ''
      },
      {
        name: 'theremin',
        icon: icons.thereminIcon,
        description: 'lorum ipsum dolor and all that',
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
        description: 'lorum ipsum dolor and all that',
        sound: sample(sounds.djembe),
        videoUrl: ''
      },
      {
        name: 'drum set',
        icon: icons.drumSetIcon,
        description: 'lorum ipsum dolor and all that',
        sound: sample(sounds.drumSet),
        videoUrl: ''
      },
      {
        name: 'tambourine',
        icon: icons.tambourineIcon,
        description: 'lorum ipsum dolor and all that',
        sound: sample(sounds.tambourine),
        videoUrl: ''
      },
      {
        name: 'xylophone',
        icon: icons.xylophoneIcon,
        description: 'lorum ipsum dolor and all that',
        sound: sample(sounds.xylophone),
        videoUrl: ''
      },
      {
        name: 'triangle',
        icon: icons.triangleIcon,
        description: 'lorum ipsum dolor and all that',
        sound: sample(sounds.triangle),
        videoUrl: ''
      },
      {
        name: 'conga',
        icon: icons.congaIcon,
        description: 'lorum ipsum dolor and all that',
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
        description: 'lorum ipsum dolor and all that',
        sound: sample(sounds.acousticGuitar),
        videoUrl: ''
      },
      {
        name: 'banjo',
        icon: icons.banjoIcon,
        description: 'lorum ipsum dolor and all that',
        sound: sample(sounds.banjo),
        videoUrl: ''
      },
      {
        name: 'harp',
        icon: icons.harpIcon,
        description: 'lorum ipsum dolor and all that',
        sound: sample(sounds.harp),
        videoUrl: ''
      },
      {
        name: 'piano',
        icon: icons.pianoIcon,
        description: 'lorum ipsum dolor and all that',
        sound: sample(sounds.piano),
        videoUrl: ''
      },
      {
        name: 'violin',
        icon: icons.violinIcon,
        description: 'lorum ipsum dolor and all that',
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
        description: 'lorum ipsum dolor and all that',
        sound: sample(sounds.clarinet),
        videoUrl: ''
      },
      {
        name: 'bassoon',
        icon: icons.bassoonIcon,
        description: 'lorum ipsum dolor and all that',
        sound: sample(sounds.bassoon),
        videoUrl: ''
      },
      {
        name: 'flute',
        icon: icons.fluteIcon,
        description: 'lorum ipsum dolor and all that',
        sound: sample(sounds.flute),
        videoUrl: ''
      },
      {
        name: 'saxophone',
        icon: icons.saxophoneIcon,
        description: 'lorum ipsum dolor and all that',
        sound: sample(sounds.saxophone),
        videoUrl: ''
      },
      {
        name: 'pan flute',
        icon: icons.panFluteIcon,
        description: 'lorum ipsum dolor and all that',
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
        description: 'lorum ipsum dolor and all that',
        sound: sample(sounds.soprano),
        videoUrl: ''
      },
      {
        name: 'mezzo soprano',
        icon: icons.mezzoSopranoIcon,
        description: 'lorum ipsum dolor and all that',
        sound: sample(sounds.mezzoSoprano),
        videoUrl: ''
      },
      {
        name: 'alto',
        icon: icons.altoIcon,
        description: 'lorum ipsum dolor and all that',
        sound: sample(sounds.alto),
        videoUrl: ''
      },
      {
        name: 'tenor',
        icon: icons.tenorIcon,
        description: 'lorum ipsum dolor and all that',
        sound: sample(sounds.tenor),
        videoUrl: ''
      },
      {
        name: 'baritone',
        icon: icons.baritoneIcon,
        description: 'lorum ipsum dolor and all that',
        sound: sample(sounds.baritone),
        videoUrl: ''
      },
      {
        name: 'bass',
        icon: icons.bassIcon,
        description: 'lorum ipsum dolor and all that',
        sound: sample(sounds.bass),
        videoUrl: ''
      }
    ]
  }
}

export default learnInstrumentOptions;