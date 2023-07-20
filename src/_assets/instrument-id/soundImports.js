import { ROOT_URL, MP3 } from "_assets/awsS3Root";

const TRUMPET = `${ROOT_URL}/instrument-id/sounds/brass/trumpet.${MP3}`;
const TROMBONE = `${ROOT_URL}/instrument-id/sounds/brass/trombone.${MP3}`;
const TUBA = `${ROOT_URL}/instrument-id/sounds/brass/tuba.${MP3}`;
const FRENCH_HORN = `${ROOT_URL}/instrument-id/sounds/brass/french-horn.${MP3}`;

const ELECTRIC_GUITAR = `${ROOT_URL}/instrument-id/sounds/electronic/electric-guitar.${MP3}`;
const ELECTRIC_BASS = `${ROOT_URL}/instrument-id/sounds/electronic/electric-bass.${MP3}`;
const SYNTH = `${ROOT_URL}/instrument-id/sounds/electronic/synthesizer.${MP3}`;
const THEREMIN = `${ROOT_URL}/instrument-id/sounds/electronic/theremin.${MP3}`;
const SAMPLER_BASS_DRUM = `${ROOT_URL}/instrument-id/sounds/electronic/sampler/bass-drum.${MP3}`;
const SAMPLER_SNARE_DRUM = `${ROOT_URL}/instrument-id/sounds/electronic/sampler/snare-drum.${MP3}`;
const SAMPLER_HI_HAT = `${ROOT_URL}/instrument-id/sounds/electronic/sampler/hi-hat.${MP3}`;
const SAMPLER_CRASH = `${ROOT_URL}/instrument-id/sounds/electronic/sampler/crash.${MP3}`;
const SAMPLER_OTHER = `${ROOT_URL}/instrument-id/sounds/electronic/sampler/other.${MP3}`;

const XYLOPHONE = `${ROOT_URL}/instrument-id/sounds/percussion/xylophone.${MP3}`;
const CONGA_HEEL = `${ROOT_URL}/instrument-id/sounds/percussion/conga/heel.${MP3}`;
const CONGA_HIGH = `${ROOT_URL}/instrument-id/sounds/percussion/conga/high.${MP3}`;
const CONGA_LOW = `${ROOT_URL}/instrument-id/sounds/percussion/conga/low.${MP3}`;
const CONGA_MUFFLED = `${ROOT_URL}/instrument-id/sounds/percussion/conga/muffled.${MP3}`;
const CONGA_SLAP = `${ROOT_URL}/instrument-id/sounds/percussion/conga/slap.${MP3}`;
const DJEMBE_HIGH = `${ROOT_URL}/instrument-id/sounds/percussion/djembe/high.${MP3}`;
const DJEMBE_LOW = `${ROOT_URL}/instrument-id/sounds/percussion/djembe/low.${MP3}`;
const DJEMBE_MEDIUM = `${ROOT_URL}/instrument-id/sounds/percussion/djembe/medium.${MP3}`;
const DJEMBE_MID_HIGH = `${ROOT_URL}/instrument-id/sounds/percussion/djembe/mid-high.${MP3}`;
const DJEMBE_MID_LOW = `${ROOT_URL}/instrument-id/sounds/percussion/djembe/mid-low.${MP3}`;
const DRUM_SET_BASS_DRUM = `${ROOT_URL}/instrument-id/sounds/percussion/drum-set/bass-drum.${MP3}`;
const DRUM_SET_COWBELL = `${ROOT_URL}/instrument-id/sounds/percussion/drum-set/cowbell.${MP3}`;
const DRUM_SET_CRASH = `${ROOT_URL}/instrument-id/sounds/percussion/drum-set/crash.${MP3}`;
const DRUM_SET_HI_HAT = `${ROOT_URL}/instrument-id/sounds/percussion/drum-set/hi-hat.${MP3}`;
const DRUM_SET_SNARE_DRUM = `${ROOT_URL}/instrument-id/sounds/percussion/drum-set/snare-drum.${MP3}`;
const TAMBOURINE_ACCENT = `${ROOT_URL}/instrument-id/sounds/percussion/tambourine/accent.${MP3}`;
const TAMBOURINE_DIMPLE = `${ROOT_URL}/instrument-id/sounds/percussion/tambourine/dimple.${MP3}`;
const TAMBOURINE_FORWARD = `${ROOT_URL}/instrument-id/sounds/percussion/tambourine/forward.${MP3}`;
const TAMBOURINE_PERFORMANCE = `${ROOT_URL}/instrument-id/sounds/percussion/tambourine/performance.${MP3}`;
const TAMBOURINE_VINTAGE = `${ROOT_URL}/instrument-id/sounds/percussion/tambourine/vintage.${MP3}`;
const TRIANGLE_LOUD = `${ROOT_URL}/instrument-id/sounds/percussion/triangle/loud.${MP3}`;
const TRIANGLE_MID_LOUD = `${ROOT_URL}/instrument-id/sounds/percussion/triangle/mid-loud.${MP3}`;
const TRIANGLE_MID = `${ROOT_URL}/instrument-id/sounds/percussion/triangle/mid.${MP3}`;
const TRIANGLE_MID_QUIET = `${ROOT_URL}/instrument-id/sounds/percussion/triangle/mid-quiet.${MP3}`;
const TRIANGLE_QUIET = `${ROOT_URL}/instrument-id/sounds/percussion/triangle/quiet.${MP3}`;

// Strings
const ACOUSTIC_GUITAR = `${ROOT_URL}/instrument-id/sounds/strings/acoustic-guitar.${MP3}`;
const BANJO = `${ROOT_URL}/instrument-id/sounds/strings/banjo.${MP3}`;
const HARP = `${ROOT_URL}/instrument-id/sounds/strings/harp.${MP3}`;
const PIANO = `${ROOT_URL}/instrument-id/sounds/strings/piano.${MP3}`;
const VIOLIN = `${ROOT_URL}/instrument-id/sounds/strings/violin.${MP3}`;

// Woodwinds
const BASSOON = `${ROOT_URL}/instrument-id/sounds/woodwinds/bassoon.${MP3}`;
const FLUTE = `${ROOT_URL}/instrument-id/sounds/woodwinds/flute.${MP3}`;
const CLARINET = `${ROOT_URL}/instrument-id/sounds/woodwinds/clarinet.${MP3}`;
const PAN_FLUTE = `${ROOT_URL}/instrument-id/sounds/woodwinds/pan-flute.${MP3}`;
const SAXOPHONE = `${ROOT_URL}/instrument-id/sounds/woodwinds/saxophone.${MP3}`;

// Voice
const SOPRANO = `${ROOT_URL}/instrument-id/sounds/voice/soprano.${MP3}`;
const MEZZO_SOPRANO = `${ROOT_URL}/instrument-id/sounds/voice/mezzo-soprano.${MP3}`;
const ALTO = `${ROOT_URL}/instrument-id/sounds/voice/alto.${MP3}`;
const TENOR = `${ROOT_URL}/instrument-id/sounds/voice/tenor.${MP3}`;
const BARITONE = `${ROOT_URL}/instrument-id/sounds/voice/baritone.${MP3}`;
const BASS = `${ROOT_URL}/instrument-id/sounds/voice/bass.${MP3}`;

const SAMPLER = {
  bassDrum: SAMPLER_BASS_DRUM,
  snareDrum: SAMPLER_SNARE_DRUM,
  hiHat: SAMPLER_HI_HAT,
  crash: SAMPLER_CRASH,
  other: SAMPLER_OTHER,
};

const TAMBOURINE = {
  accent: TAMBOURINE_ACCENT,
  forward: TAMBOURINE_FORWARD,
  dimple: TAMBOURINE_DIMPLE,
  vintage: TAMBOURINE_VINTAGE,
  performance: TAMBOURINE_PERFORMANCE,
};

const DJEMBE = {
  low: DJEMBE_LOW,
  high: DJEMBE_HIGH,
  mid: DJEMBE_MEDIUM,
  midLow: DJEMBE_MID_LOW,
  midHigh: DJEMBE_MID_HIGH,
};

const TRIANGLE = {
  loud: TRIANGLE_LOUD,
  quiet: TRIANGLE_QUIET,
  mid: TRIANGLE_MID,
  midLoud: TRIANGLE_MID_LOUD,
  midQuiet: TRIANGLE_MID_QUIET,
};

const CONGA = {
  low: CONGA_LOW,
  high: CONGA_HIGH,
  heel: CONGA_HEEL,
  muffled: CONGA_MUFFLED,
  slap: CONGA_SLAP,
};

const DRUM_SET = {
  bassDrum: DRUM_SET_BASS_DRUM,
  snareDrum: DRUM_SET_SNARE_DRUM,
  hiHat: DRUM_SET_HI_HAT,
  crash: DRUM_SET_CRASH,
  cowbell: DRUM_SET_COWBELL,
};

export {
  TRUMPET,
  TROMBONE,
  TUBA,
  FRENCH_HORN,
  VIOLIN,
  BANJO,
  HARP,
  ACOUSTIC_GUITAR,
  PIANO,
  FLUTE,
  CLARINET,
  PAN_FLUTE,
  BASSOON,
  SAXOPHONE,
  TAMBOURINE,
  DJEMBE,
  TRIANGLE,
  XYLOPHONE,
  DRUM_SET,
  CONGA,
  SOPRANO,
  MEZZO_SOPRANO,
  ALTO,
  TENOR,
  BARITONE,
  BASS,
  ELECTRIC_GUITAR,
  ELECTRIC_BASS,
  SYNTH,
  SAMPLER,
  THEREMIN
};
