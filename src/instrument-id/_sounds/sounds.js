import * as Tone from 'tone';

import * as instruments from './soundImports';

const sample = (instrument, basePitch = 'C3') => (
  new Tone.Sampler({
    urls: {
      [basePitch]: instrument
    }
  }).toDestination()
)

const brassInstruments = [
  {
    name: 'Trumpet',
    sound: sample(instruments.trumpet),
    exampleUrl: ''
  },
  {
    name: 'Trombone',
    sound: sample(instruments.trombone),
    exampleUrl: ''
  },
  {
    name: 'French Horn',
    sound: sample(instruments.frenchHorn),
    exampleUrl: ''
  }
]

const stringInstruments = [
  {
    name: 'Violin',
    sound: sample(instruments.violin, 'C4'),
    exampleUrl: ''
  },
  {
    name: 'Cello',
    sound: sample(instruments.cello, 'C2'),
    exampleUrl: ''
  },
  {
    name: 'Harp',
    sound: sample(instruments.harp),
    exampleUrl: ''
  },
  {
    name: 'Banjo',
    sound: sample(instruments.banjo),
    exampleUrl: ''
  },
  {
    name: 'Acoustic Guitar',
    sound: sample(instruments.acousticGuitar),
    exampleUrl: ''
  }
]

const woodwindInstruments = [
  {
    name: 'Flute',
    sound: sample(instruments.flute),
    exampleUrl: ''
  },
  {
    name: 'Clarinet',
    sound: sample(instruments.clarinet),
    exampleUrl: ''
  },
  {
    name: 'Piccolo',
    sound: sample(instruments.piccolo, 'C4'),
    exampleUrl: ''
  },
  {
    name: 'Bassoon',
    sound: sample(instruments.bassoon, 'C2'),
    exampleUrl: ''
  },
  {
    name: 'Saxophone',
    sound: sample(instruments.bassoon),
    exampleUrl: ''
  }
]

const percussionInstruments = [
  {
    name: "Tambourine",
    sound: sample(instruments.tambourine),
    exampleUrl: ''
  },
  {
    name: "Djembe",
    sound: sample(instruments.djembe),
    exampleUrl: ''
  },
]

export {
  brassInstruments,
  stringInstruments,
  woodwindInstruments,
  percussionInstruments 
}