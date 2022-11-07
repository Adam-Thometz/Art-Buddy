import Icon from '_components/icon/Icon';
import * as icons from '_media/instrument-id/_icons/iconImports';
import * as sounds from '_media/instrument-id/_sounds/soundImports';

const iconStyle = { margin: '0 20px' };

const brass = <Icon icon={icons.brass} text="BRASS" size='100px' otherImgStyles={iconStyle} />;
const silver = <Icon icon={icons.silver} text="SILVER" size='100px' otherImgStyles={iconStyle} />;
const wood = <Icon icon={icons.wood} text="WOOD" size='100px' otherImgStyles={iconStyle} />;
const leather = <Icon icon={icons.leather} text="LEATHER" size='100px' otherImgStyles={iconStyle} />;

const learnInstrumentOptions = {
  brass: {
    main: icons.trumpetIcon,
    instruments: [
      {
        id: 'trumpet',  
        name: 'TRUMPET',
        icon: icons.trumpetIcon,
        madeFrom: [brass],
        howToPlay: 'blowing into the mouthpiece and pressing on the valves',
        sound: sounds.trumpet,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=ALPgvs5CT60'
      },
      {
        id: 'frenchHorn',
        name: 'FRENCH HORN',
        icon: icons.frenchHornIcon,
        madeFrom: [brass],
        howToPlay: 'blowing into the mouthpiece and pressing on the valves',
        sound: sounds.frenchHorn,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=qiUXnaGfnhg'
      },
      {
        id: 'trombone',
        name: 'TROMBONE',
        icon: icons.tromboneIcon,
        madeFrom: [brass],
        howToPlay: 'blowing into the mouthpiece and pressing on the valves',
        sound: sounds.trombone,
        isRhythm: false,
        width: '250px',
        videoUrl: 'https://www.youtube.com/watch?v=u5gj43Nnwzk'
      },
      {
        id: 'tuba',
        name: 'TUBA',
        icon: icons.tubaIcon,
        madeFrom: [brass],
        howToPlay: 'blowing into the mouthpiece and pressing on the valves',
        sound: sounds.tuba,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=qlXdCvKGdBE'
      },
    ]
  },
  electronic: {
    main: icons.synthIcon,
    instruments: [
      {
        id: 'electricGuitar',
        name: 'ELECTRIC GUITAR',
        icon: icons.electricGuitarIcon,
        madeFrom: [wood, silver],
        howToPlay: 'putting fingers on the frets and strumming or plucking the stings with a pick',
        sound: sounds.electricGuitar,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=QkzN1d6h8hE'
      },
      {
        id: 'electricBass',
        name: 'ELECTRIC BASS',
        icon: icons.electricBassIcon,
        madeFrom: [wood, silver],
        howToPlay: 'putting fingers on the frets and strumming or plucking the stings with a pick or fingers',
        sound: sounds.electricBass,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=I5PboLxAkIg'
      },
      {
        id: 'synthesizer',
        name: 'SYNTHESIZER',
        icon: icons.synthIcon,
        madeFrom: [silver],
        howToPlay: 'adjusting knobs and/or pressing keys',
        sound: sounds.synthesizer,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=WBcUk0kGoBw'
      },
      {
        id: 'sampler',
        name: 'SAMPLER',
        icon: icons.samplerIcon,
        madeFrom: [silver],
        howToPlay: 'pressing buttons on the instrument',
        sound: sounds.sampler,
        isRhythm: true,
        videoUrl: 'https://www.youtube.com/watch?v=0K2aynMMBpo'
      },
      {
        id: 'theremin',
        name: 'THEREMIN',
        icon: icons.thereminIcon,
        madeFrom: [silver],
        howToPlay: 'waving your hands back and forth from the antenna',
        sound: sounds.theremin,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=nE_sAnSkW-Q'
      },
    ]
  },
  percussion: {
    main: icons.drumSetIcon,
    instruments: [
      {
        id: 'djembe',
        name: 'DJEMBE',
        icon: icons.djembeIcon,
        madeFrom: [wood, leather],
        howToPlay: 'hitting the animal skin',
        sound: sounds.djembe,
        isRhythm: true,
        videoUrl: 'https://www.youtube.com/watch?v=FMs3LTtgwY8'
      },
      {
        id: 'drumSet',
        name: 'DRUM SET',
        icon: icons.drumSetIcon,
        madeFrom: [wood, silver],
        howToPlay: 'using drum sticks to hit different parts of the set',
        sound: sounds.drumSet,
        isRhythm: true,
        videoUrl: 'https://www.youtube.com/watch?v=fu8Iq1q73gY'
      },
      {
        id: 'tambourine',
        name: 'TAMBOURINE',
        icon: icons.tambourineIcon,
        madeFrom: [wood, silver],
        howToPlay: 'shaking it!',
        sound: sounds.tambourine,
        isRhythm: true,
        videoUrl: 'https://www.youtube.com/watch?v=nz3vhCspy_I'
      },
      {
        id: 'xylophone',
        name: 'XYLOPHONE',
        icon: icons.xylophoneIcon,
        madeFrom: [wood],
        howToPlay: 'hitting different blocks with a mallet',
        sound: sounds.xylophone,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=nd9xha3vk58'
      },
      {
        id: 'triangle',
        name: 'TRIANGLE',
        icon: icons.triangleIcon,
        madeFrom: [silver],
        howToPlay: 'hitting it with a metal stick',
        sound: sounds.triangle,
        isRhythm: true,
        videoUrl: 'https://www.youtube.com/watch?v=chg1ILZwMBI'
      },
      {
        id: 'conga',
        name: 'CONGA',
        icon: icons.congaIcon,
        madeFrom: [wood, leather],
        howToPlay: 'hitting the animal skin',
        sound: sounds.conga,
        isRhythm: true,
        videoUrl: 'https://www.youtube.com/watch?v=Dy9-P4MauuM'
      },
    ]
  },
  strings: {
    main: icons.harpIcon,
    instruments: [
      {
        id: 'acousticGuitar',
        name: 'ACOUSTIC GUITAR',
        icon: icons.acousticGuitarIcon,
        madeFrom: [wood],
        howToPlay: 'putting fingers on the frets and strumming or plucking the stings with a pick',
        sound: sounds.acousticGuitar,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=VOMipc60JvA'
      },
      {
        id: 'banjo',
        name: 'BANJO',
        icon: icons.banjoIcon,
        madeFrom: [wood, leather],
        howToPlay: 'putting fingers on the frets and strumming or plucking the stings with a pick',
        sound: sounds.banjo,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=fnMhUPewk6c'
      },
      {
        id: 'harp',
        name: 'HARP',
        icon: icons.harpIcon,
        madeFrom: [wood],
        howToPlay: 'plucking the strings',
        sound: sounds.harp,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=WEK4hw7hMgI'
      },
      {
        id: 'piano',
        name: 'PIANO',
        icon: icons.pianoIcon,
        madeFrom: [wood],
        howToPlay: 'pressing the keys, which activate hammers that bang on strings',
        sound: sounds.piano,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=HCDygl0pttM'
      },
      {
        id: 'violin',
        name: 'VIOLIN',
        icon: icons.violinIcon,
        madeFrom: [wood],
        howToPlay: 'putting your fingers on the fretboard and bowing the strings using a bow',
        sound: sounds.violin,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=0jXXWBt5URw'
      },
    ]
  },
  woodwind: {
    main: icons.harpIcon,
    instruments: [
      {
        id: 'clarinet',
        name: 'CLARINET',
        icon: icons.clarinetIcon,
        madeFrom: [wood],
        howToPlay: '',
        sound: sounds.clarinet,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=0srzSEPeHrk'
      },
      {
        id: 'bassoon',
        name: 'BASSOON',
        icon: icons.bassoonIcon,
        madeFrom: [wood],
        howToPlay: '',
        sound: sounds.bassoon,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=XghEYA-edZA'
      },
      {
        id: 'flute',
        name: 'FLUTE',
        icon: icons.fluteIcon,
        madeFrom: [wood, silver],
        howToPlay: '',
        sound: sounds.flute,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=QAiwlq3aP2U'
      },
      {
        id: 'saxophone',
        name: 'SAXOPHONE',
        icon: icons.saxophoneIcon,
        madeFrom: [brass],
        howToPlay: '',
        sound: sounds.saxophone,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=XBWyE1v8--I'
      },
      {
        id: 'panFlute',
        name: 'PAN FLUTE',
        icon: icons.panFluteIcon,
        madeFrom: [wood],
        howToPlay: '',
        sound: sounds.panFlute,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=nrTp7u6KD3U'
      },
    ]
  },
  voice: {
    main: icons.voiceMainIcon,
    instruments: [
      {
        id: 'soprano',
        name: 'SOPRANO',
        icon: icons.sopranoIcon,
        madeFrom: ['HUMANS!'],
        howToPlay: 'singing really high!',
        sound: sounds.soprano,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=3ZSyAcIS4fo'
      },
      {
        id: 'mezzoSoprano',
        name: 'MEZZO SOPRANO',
        icon: icons.mezzoSopranoIcon,
        madeFrom: ['HUMANS!'],
        howToPlay: 'singing high!',
        sound: sounds.mezzoSoprano,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=6m1T1BsB9rg'
      },
      {
        id: 'alto',
        name: 'ALTO',
        icon: icons.altoIcon,
        madeFrom: ['HUMANS!'],
        howToPlay: 'siinging a little high!',
        sound: sounds.alto,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=wrCxfWVuDXU'
      },
      {
        id: 'tenor',
        name: 'TENOR',
        icon: icons.tenorIcon,
        madeFrom: ['HUMANS!'],
        howToPlay: 'singing a little low!',
        sound: sounds.tenor,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=cWc7vYjgnTs'
      },
      {
        id: 'baritone',
        name: 'BARITONE',
        icon: icons.baritoneIcon,
        madeFrom: ['HUMANS!'],
        howToPlay: 'singing low!',
        sound: sounds.baritone,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=d-m1JtnZbEQ'
      },
      {
        id: 'bass',
        name: 'BASS',
        icon: icons.bassIcon,
        madeFrom: ['HUMANS!'],
        howToPlay: 'singing really low!',
        sound: sounds.bass,
        isRhythm: false,
        videoUrl: 'https://www.youtube.com/watch?v=wJv0jMLLRcw'
      }
    ]
  }
};

export default learnInstrumentOptions;