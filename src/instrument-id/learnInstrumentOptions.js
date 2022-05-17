import * as icons from './_icons/iconImports';
import * as sounds from './_sounds/soundImports';

const learnInstrumentOptions = {
  brass: {
    main: icons.trumpetIcon,
    instruments: [{
        name: 'TRUMPET',
        icon: icons.trumpetIcon,
        madeFrom: ['BRASS'],
        howToPlay: 'blowing into the mouthpiece and pressing on the valves',
        sound: sounds.trumpet,
        videoUrl: 'https://www.youtube.com/watch?v=ALPgvs5CT60'
      },
      {
        name: 'FRENCH HORN',
        icon: icons.frenchHornIcon,
        madeFrom: ['BRASS'],
        howToPlay: 'blowing into the mouthpiece and pressing on the valves',
        sound: sounds.frenchHorn,
        videoUrl: 'https://www.youtube.com/watch?v=qiUXnaGfnhg'
      },
      {
        name: 'TROMBONE',
        icon: icons.tromboneIcon,
        madeFrom: ['BRASS'],
        howToPlay: 'blowing into the mouthpiece and pressing on the valves',
        sound: sounds.trombone,
        videoUrl: 'https://www.youtube.com/watch?v=u5gj43Nnwzk'
      },
      {
        name: 'TUBA',
        icon: icons.tubaIcon,
        madeFrom: ['BRASS'],
        howToPlay: 'blowing into the mouthpiece and pressing on the valves',
        sound: sounds.tuba,
        videoUrl: 'https://www.youtube.com/watch?v=qlXdCvKGdBE'
      },
    ]
  },
  electronic: {
    main: icons.synthIcon,
    instruments: [
      {
        name: 'ELECTRIC GUITAR',
        icon: icons.electricGuitarIcon,
        madeFrom: ['WOOD', 'METAL'],
        howToPlay: 'putting fingers on the frets and strumming or plucking the stings with a pick',
        sound: sounds.electricGuitar,
        videoUrl: 'https://www.youtube.com/watch?v=QkzN1d6h8hE'
      },
      {
        name: 'ELECTRIC BASS',
        icon: icons.electricBassIcon,
        madeFrom: ['WOOD', 'METAL'],
        howToPlay: 'putting fingers on the frets and strumming or plucking the stings with a pick or fingers',
        sound: sounds.electricBass,
        videoUrl: 'https://www.youtube.com/watch?v=I5PboLxAkIg'
      },
      {
        name: 'SYNTHESIZER',
        icon: icons.synthIcon,
        madeFrom: ['METAL'],
        howToPlay: 'adjusting knobs and/or pressing keys',
        sound: sounds.synthesizer,
        videoUrl: 'https://www.youtube.com/watch?v=WBcUk0kGoBw'
      },
      {
        name: 'SAMPLER',
        icon: icons.samplerIcon,
        madeFrom: ['METAL'],
        howToPlay: 'pressing buttons on the instrument',
        sound: sounds.sampler,
        videoUrl: 'https://www.youtube.com/watch?v=0K2aynMMBpo'
      },
      {
        name: 'THEREMIN',
        icon: icons.thereminIcon,
        madeFrom: ['METAL'],
        howToPlay: 'waving your hands back and forth from the antenna',
        sound: sounds.theremin,
        videoUrl: 'https://www.youtube.com/watch?v=nE_sAnSkW-Q'
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
        videoUrl: 'https://www.youtube.com/watch?v=FMs3LTtgwY8'
      },
      {
        name: 'DRUM SET',
        icon: icons.drumSetIcon,
        madeFrom: ['WOOD', 'METAL'],
        howToPlay: 'using drum sticks to hit different parts of the set',
        sound: sounds.drumSet,
        videoUrl: 'https://www.youtube.com/watch?v=fu8Iq1q73gY'
      },
      {
        name: 'TAMBOURINE',
        icon: icons.tambourineIcon,
        madeFrom: ['WOOD', 'METAL'],
        howToPlay: 'shaking it!',
        sound: sounds.tambourine,
        videoUrl: 'https://www.youtube.com/watch?v=nz3vhCspy_I'
      },
      {
        name: 'XYLOPHONE',
        icon: icons.xylophoneIcon,
        madeFrom: ['WOOD'],
        howToPlay: 'hitting different blocks with a mallet',
        sound: sounds.xylophone,
        videoUrl: 'https://www.youtube.com/watch?v=nd9xha3vk58'
      },
      {
        name: 'TRIANGLE',
        icon: icons.triangleIcon,
        madeFrom: ['METAL'],
        howToPlay: 'hitting it with a metal stick',
        sound: sounds.triangle,
        videoUrl: 'https://www.youtube.com/watch?v=chg1ILZwMBI'
      },
      {
        name: 'CONGA',
        icon: icons.congaIcon,
        madeFrom: ['WOOD', 'ANIMAL SKIN'],
        howToPlay: 'hitting the animal skin',
        sound: sounds.conga,
        melodies: [
          [[0, 1],[1],[2, 1],[0,2]]
        ],
        videoUrl: 'https://www.youtube.com/watch?v=Dy9-P4MauuM'
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
        melodies: [
          [['C', 'G'], ['G', 'D'], ['C', 'A']],
          ['D', 'A', 'D'],
          ['E', 'B', 'E']
        ],
        videoUrl: 'https://www.youtube.com/watch?v=VOMipc60JvA'
      },
      {
        name: 'BANJO',
        icon: icons.banjoIcon,
        madeFrom: ['WOOD', 'ANIMAL SKIN'],
        howToPlay: 'putting fingers on the frets and strumming or plucking the stings with a pick',
        sound: sounds.banjo,
        videoUrl: 'https://www.youtube.com/watch?v=fnMhUPewk6c'
      },
      {
        name: 'HARP',
        icon: icons.harpIcon,
        madeFrom: ['WOOD'],
        howToPlay: 'plucking the strings',
        sound: sounds.harp,
        videoUrl: 'https://www.youtube.com/watch?v=WEK4hw7hMgI'
      },
      {
        name: 'PIANO',
        icon: icons.pianoIcon,
        madeFrom: ['WOOD'],
        howToPlay: 'pressing the keys, which activate hammers that bang on strings',
        sound: sounds.piano,
        videoUrl: 'https://www.youtube.com/watch?v=HCDygl0pttM'
      },
      {
        name: 'VIOLIN',
        icon: icons.violinIcon,
        madeFrom: ['WOOD'],
        howToPlay: 'putting your fingers on the fretboard and bowing the strings using a bow',
        sound: sounds.violin,
        videoUrl: 'https://www.youtube.com/watch?v=0jXXWBt5URw'
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
        videoUrl: 'https://www.youtube.com/watch?v=0srzSEPeHrk'
      },
      {
        name: 'BASSOON',
        icon: icons.bassoonIcon,
        madeFrom: ['WOOD'],
        howToPlay: '',
        sound: sounds.bassoon,
        videoUrl: 'https://www.youtube.com/watch?v=XghEYA-edZA'
      },
      {
        name: 'FLUTE',
        icon: icons.fluteIcon,
        madeFrom: ['WOOD', 'METAL'],
        howToPlay: '',
        sound: sounds.flute,
        videoUrl: 'https://www.youtube.com/watch?v=QAiwlq3aP2U'
      },
      {
        name: 'SAXOPHONE',
        icon: icons.saxophoneIcon,
        madeFrom: ['BRASS'],
        howToPlay: '',
        sound: sounds.saxophone,
        videoUrl: 'https://www.youtube.com/watch?v=XBWyE1v8--I'
      },
      {
        name: 'PAN FLUTE',
        icon: icons.panFluteIcon,
        madeFrom: ['WOOD'],
        howToPlay: '',
        sound: sounds.panFlute,
        videoUrl: 'https://www.youtube.com/watch?v=nrTp7u6KD3U'
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
        videoUrl: 'https://www.youtube.com/watch?v=3ZSyAcIS4fo'
      },
      {
        name: 'MEZZO SOPRANO',
        icon: icons.mezzoSopranoIcon,
        madeFrom: ['HUMANS!'],
        howToPlay: 'using your voice!',
        sound: sounds.mezzoSoprano,
        videoUrl: 'https://www.youtube.com/watch?v=6m1T1BsB9rg'
      },
      {
        name: 'ALTO',
        icon: icons.altoIcon,
        madeFrom: ['HUMANS!'],
        howToPlay: 'using your voice!',
        sound: sounds.alto,
        videoUrl: 'https://www.youtube.com/watch?v=wrCxfWVuDXU'
      },
      {
        name: 'TENOR',
        icon: icons.tenorIcon,
        madeFrom: ['HUMANS!'],
        howToPlay: 'using your voice!',
        sound: sounds.tenor,
        videoUrl: 'https://www.youtube.com/watch?v=cWc7vYjgnTs'
      },
      {
        name: 'BARITONE',
        icon: icons.baritoneIcon,
        madeFrom: ['HUMANS!'],
        howToPlay: 'using your voice!',
        sound: sounds.baritone,
        videoUrl: 'https://www.youtube.com/watch?v=d-m1JtnZbEQ'
      },
      {
        name: 'BASS',
        icon: icons.bassIcon,
        madeFrom: ['HUMANS!'],
        howToPlay: 'using your voice!',
        sound: sounds.bass,
        videoUrl: 'https://www.youtube.com/watch?v=wJv0jMLLRcw'
      }
    ]
  }
};

export default learnInstrumentOptions;