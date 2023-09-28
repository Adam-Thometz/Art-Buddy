import * as icons from "assets/instrument-id/instrumentId.assets";
import * as sounds from "assets/instrument-id/soundImports";

const materials = {
  brass: {
    icon: icons.BRASS_ICON,
    name: "BRASS",
  },
  silver: {
    icon: icons.SILVER_ICON,
    name: "SILVER",
  },
  wood: {
    icon: icons.WOOD_ICON,
    name: "WOOD",
  },
  leather: {
    icon: icons.LEATHER_ICON,
    name: "LEATHER",
  },
  voice: {
    icon: icons.VOICE_MAIN_ICON,
    name: "HUMAN",
  },
};

const learnInstrumentOptions = {
  brass: {
    main: icons.TRUMPET_ICON,
    instruments: [
      {
        id: "trumpet",
        name: "TRUMPET",
        icon: icons.TRUMPET_ICON,
        madeFrom: [materials.brass],
        howToPlay: "blowing into the mouthpiece and pressing on the valves",
        sound: sounds.TRUMPET,
        isRhythm: false,
        videoUri: "ALPgvs5CT60",
      },
      {
        id: "frenchHorn",
        name: "FRENCH HORN",
        icon: icons.FRENCH_HORN_ICON,
        madeFrom: [materials.brass],
        howToPlay: "blowing into the mouthpiece and pressing on the valves",
        sound: sounds.FRENCH_HORN,
        isRhythm: false,
        videoUri: "qiUXnaGfnhg",
      },
      {
        id: "trombone",
        name: "TROMBONE",
        icon: icons.TROMBONE_ICON,
        madeFrom: [materials.brass],
        howToPlay: "blowing into the mouthpiece and pressing on the valves",
        sound: sounds.TROMBONE,
        isRhythm: false,
        width: "250px",
        videoUri: "u5gj43Nnwzk",
      },
      {
        id: "tuba",
        name: "TUBA",
        icon: icons.TUBA_ICON,
        madeFrom: [materials.brass],
        howToPlay: "blowing into the mouthpiece and pressing on the valves",
        sound: sounds.TUBA,
        isRhythm: false,
        videoUri: "qlXdCvKGdBE",
      },
    ],
  },
  electronic: {
    main: icons.SYNTH_ICON,
    instruments: [
      {
        id: "electricGuitar",
        name: "ELECTRIC GUITAR",
        icon: icons.ELECTRIC_GUITAR_ICON,
        madeFrom: [materials.wood, materials.silver],
        howToPlay:
          "putting fingers on the frets and strumming or plucking the stings",
        sound: sounds.ELECTRIC_GUITAR,
        isRhythm: false,
        videoUri: "ULEBSxP725w",
      },
      {
        id: "electricBass",
        name: "ELECTRIC BASS",
        icon: icons.ELECTRIC_BASS_ICON,
        madeFrom: [materials.wood, materials.silver],
        howToPlay:
          "putting fingers on the frets and strumming or plucking the stings",
        sound: sounds.ELECTRIC_BASS,
        isRhythm: false,
        videoUri: "I5PboLxAkIg",
      },
      {
        id: "synthesizer",
        name: "SYNTHESIZER",
        icon: icons.SYNTH_ICON,
        madeFrom: [materials.silver],
        howToPlay: "adjusting knobs and/or pressing keys",
        sound: sounds.SYNTH,
        isRhythm: false,
        videoUri: "WBcUk0kGoBw",
      },
      {
        id: "sampler",
        name: "SAMPLER",
        icon: icons.SAMPLER_ICON,
        madeFrom: [materials.silver],
        howToPlay: "pressing buttons on the instrument",
        sound: sounds.SAMPLER,
        isRhythm: true,
        videoUri: "0K2aynMMBpo",
      },
      {
        id: "theremin",
        name: "THEREMIN",
        icon: icons.THEREMIN_ICON,
        madeFrom: [materials.silver],
        howToPlay: "waving your hands back and forth from the antenna",
        sound: sounds.THEREMIN,
        isRhythm: false,
        videoUri: "nE_sAnSkW-Q",
      },
    ],
  },
  percussion: {
    main: icons.DRUM_SET_ICON,
    instruments: [
      {
        id: "djembe",
        name: "DJEMBE",
        icon: icons.DJEMBE_ICON,
        madeFrom: [materials.wood, materials.leather],
        howToPlay: "hitting the leather",
        sound: sounds.DJEMBE,
        isRhythm: true,
        videoUri: "FMs3LTtgwY8",
      },
      {
        id: "drumSet",
        name: "DRUM SET",
        icon: icons.DRUM_SET_ICON,
        madeFrom: [materials.wood, materials.silver],
        howToPlay: "using drum sticks to hit different parts of the set",
        sound: sounds.DRUM_SET,
        isRhythm: true,
        videoUri: "fu8Iq1q73gY",
      },
      {
        id: "tambourine",
        name: "TAMBOURINE",
        icon: icons.TAMBOURINE_ICON,
        madeFrom: [materials.wood, materials.silver],
        howToPlay: "shaking it!",
        sound: sounds.TAMBOURINE,
        isRhythm: true,
        videoUri: "nz3vhCspy_I",
      },
      {
        id: "xylophone",
        name: "XYLOPHONE",
        icon: icons.XYLOPHONE_ICON,
        madeFrom: [materials.wood],
        howToPlay: "hitting different blocks with a mallet",
        sound: sounds.XYLOPHONE,
        isRhythm: false,
        videoUri: "nd9xha3vk58",
      },
      {
        id: "triangle",
        name: "TRIANGLE",
        icon: icons.TRIANGLE_ICON,
        madeFrom: [materials.silver],
        howToPlay: "hitting it with a metal stick",
        sound: sounds.TRIANGLE,
        isRhythm: true,
        videoUri: "chg1ILZwMBI",
      },
      {
        id: "conga",
        name: "CONGA",
        icon: icons.CONGA_ICON,
        madeFrom: [materials.wood, materials.leather],
        howToPlay: "hitting the leather",
        sound: sounds.CONGA,
        isRhythm: true,
        videoUri: "Dy9-P4MauuM",
      },
    ],
  },
  strings: {
    main: icons.HARP_ICON,
    instruments: [
      {
        id: "acousticGuitar",
        name: "ACOUSTIC GUITAR",
        icon: icons.ACOUSTIC_GUITAR_ICON,
        madeFrom: [materials.wood],
        howToPlay:
          "putting fingers on the frets and strumming or plucking the stings with a pick",
        sound: sounds.ACOUSTIC_GUITAR,
        isRhythm: false,
        videoUri: "VOMipc60JvA",
      },
      {
        id: "banjo",
        name: "BANJO",
        icon: icons.BANJO_ICON,
        madeFrom: [materials.wood, materials.leather],
        howToPlay:
          "putting fingers on the frets and strumming or plucking the stings with a pick",
        sound: sounds.BANJO,
        isRhythm: false,
        videoUri: "fnMhUPewk6c",
      },
      {
        id: "harp",
        name: "HARP",
        icon: icons.HARP_ICON,
        madeFrom: [materials.wood],
        howToPlay: "plucking the strings",
        sound: sounds.HARP,
        isRhythm: false,
        videoUri: "WEK4hw7hMgI",
      },
      {
        id: "piano",
        name: "PIANO",
        icon: icons.PIANO_ICON,
        madeFrom: [materials.wood],
        howToPlay:
          "pressing the keys, which activate hammers that bang on strings",
        sound: sounds.PIANO,
        isRhythm: false,
        videoUri: "HCDygl0pttM",
      },
      {
        id: "violin",
        name: "VIOLIN",
        icon: icons.VIOLIN_ICON,
        madeFrom: [materials.wood],
        howToPlay:
          "putting your fingers on the fretboard and bowing the strings using a bow",
        sound: sounds.VIOLIN,
        isRhythm: false,
        videoUri: "0jXXWBt5URw",
      },
    ],
  },
  woodwind: {
    main: icons.CLARINET_ICON,
    instruments: [
      {
        id: "clarinet",
        name: "CLARINET",
        icon: icons.CLARINET_ICON,
        madeFrom: [materials.wood],
        howToPlay: "blowing into the reed and covering holes with your fingers",
        sound: sounds.CLARINET,
        isRhythm: false,
        videoUri: "328nODWJD-M",
      },
      {
        id: "bassoon",
        name: "BASSOON",
        icon: icons.BASSOON_ICON,
        madeFrom: [materials.wood],
        howToPlay: "blowing into the reed and covering holes with your fingers",
        sound: sounds.BASSOON,
        isRhythm: false,
        videoUri: "XghEYA-edZA",
      },
      {
        id: "flute",
        name: "FLUTE",
        icon: icons.FLUTE_ICON,
        madeFrom: [materials.wood, materials.silver],
        howToPlay: "blowing into the reed and covering holes with your fingers",
        sound: sounds.FLUTE,
        isRhythm: false,
        videoUri: "QAiwlq3aP2U",
      },
      {
        id: "saxophone",
        name: "SAXOPHONE",
        icon: icons.SAXOPHONE_ICON,
        madeFrom: [materials.brass],
        howToPlay: "blowing into the reed and pressing the keys",
        sound: sounds.SAXOPHONE,
        isRhythm: false,
        videoUri: "XBWyE1v8--I",
      },
      {
        id: "panFlute",
        name: "PAN FLUTE",
        icon: icons.PAN_FLUTE_ICON,
        madeFrom: [materials.wood],
        howToPlay: "blowing into the holes",
        sound: sounds.PAN_FLUTE,
        isRhythm: false,
        videoUri: "nrTp7u6KD3U",
      },
    ],
  },
  voice: {
    main: icons.VOICE_MAIN_ICON,
    instruments: [
      {
        id: "soprano",
        name: "SOPRANO",
        icon: icons.SOPRANO_ICON,
        madeFrom: [materials.voice],
        howToPlay: "singing really high!",
        sound: sounds.SOPRANO,
        isRhythm: false,
        videoUri: "3ZSyAcIS4fo",
      },
      {
        id: "mezzoSoprano",
        name: "MEZZO SOPRANO",
        icon: icons.MEZZO_SOPRANO_ICON,
        madeFrom: [materials.voice],
        howToPlay: "singing high!",
        sound: sounds.MEZZO_SOPRANO,
        isRhythm: false,
        videoUri: "6m1T1BsB9rg",
      },
      {
        id: "alto",
        name: "ALTO",
        icon: icons.ALTO_ICON,
        madeFrom: [materials.voice],
        howToPlay: "siinging a little high!",
        sound: sounds.ALTO,
        isRhythm: false,
        videoUri: "wrCxfWVuDXU",
      },
      {
        id: "tenor",
        name: "TENOR",
        icon: icons.TENOR_ICON,
        madeFrom: [materials.voice],
        howToPlay: "singing a little low!",
        sound: sounds.TENOR,
        isRhythm: false,
        videoUri: "cWc7vYjgnTs",
      },
      {
        id: "baritone",
        name: "BARITONE",
        icon: icons.BARITONE_ICON,
        madeFrom: [materials.voice],
        howToPlay: "singing low!",
        sound: sounds.BARITONE,
        isRhythm: false,
        videoUri: "d-m1JtnZbEQ",
      },
      {
        id: "bass",
        name: "BASS",
        icon: icons.BASS_ICON,
        madeFrom: [materials.voice],
        howToPlay: "singing really low!",
        sound: sounds.BASS,
        isRhythm: false,
        videoUri: "wJv0jMLLRcw",
      },
    ],
  },
};

export default learnInstrumentOptions;