// Brass
import trumpet from './instruments/brass/trumpet.mp3';
import trombone from './instruments/brass/trombone.mp3';
import frenchHorn from './instruments/brass/french-horn.mp3';
import tuba from './instruments/brass/tuba.mp3';

// Strings
import violin from './instruments/strings/violin.mp3';
import harp from './instruments/strings/harp.mp3';
import banjo from './instruments/strings/banjo.mp3';
import acousticGuitar from './instruments/strings/acoustic-guitar.mp3';
import piano from './instruments/strings/piano.mp3';

// Woodwinds
import flute from './instruments/woodwinds/flute.mp3';
import clarinet from './instruments/woodwinds/clarinet.mp3';
import panFlute from './instruments/woodwinds/pan-flute.mp3';
import bassoon from './instruments/woodwinds/bassoon.mp3';
import saxophone from './instruments/woodwinds/saxophone.mp3';

// Percussion
import xylophone from './instruments/percussion/xylophone.mp3';
import tambourineAccent from './instruments/percussion/tambourine/accent.mp3';
import tambourineDimple from './instruments/percussion/tambourine/dimple.mp3';
import tambourineForward from './instruments/percussion/tambourine/forward.mp3';
import djembeHigh from './instruments/percussion/djembe/high.mp3';
import djembeMedium from './instruments/percussion/djembe/medium.mp3';
import djembeLow from './instruments/percussion/djembe/low.mp3';
import triangleLoud from './instruments/percussion/triangle/loud.mp3';
import triangleQuiet from './instruments/percussion/triangle/quiet.mp3';
import drumSetBassDrum from './instruments/percussion/drum-set/bass-drum.mp3';
import drumSetSnareDrum from './instruments/percussion/drum-set/snare-drum.mp3';
import drumSetHiHat from './instruments/percussion/drum-set/hi-hat.mp3';
import drumSetCrash from './instruments/percussion/drum-set/crash.mp3';
import congaHeel from './instruments/percussion/conga/heel.mp3';
import congaHigh from './instruments/percussion/conga/high.mp3';
import congaLow from './instruments/percussion/conga/low.mp3';
import congaMuffled from './instruments/percussion/conga/muffled.mp3';

// Voice
import soprano from './instruments/voice/soprano.mp3';
import mezzoSoprano from './instruments/voice/mezzo-soprano.mp3';
import alto from './instruments/voice/alto.mp3';
import tenor from './instruments/voice/tenor.mp3';
import baritone from './instruments/voice/baritone.mp3';
import bass from './instruments/voice/bass.mp3';

// Electronic
import electricGuitar from './instruments/electronic/electric-guitar.mp3';
import electricBass from './instruments/electronic/electric-bass.mp3';
import synthesizer from './instruments/electronic/synthesizer.mp3';
import samplerBassDrum from './instruments/electronic/sampler/bass-drum.mp3';
import samplerSnareDrum from './instruments/electronic/sampler/snare-drum.mp3';
import samplerHiHat from './instruments/electronic/sampler/hi-hat.mp3';
import samplerCrash from './instruments/electronic/sampler/crash.mp3';
import samplerOther from './instruments/electronic/sampler/other.mp3';
import theremin from './instruments/electronic/theremin.mp3';

const sampler = {
  bassDrum: samplerBassDrum,
  snareDrum: samplerSnareDrum,
  hiHat: samplerHiHat,
  crash: samplerCrash,
  other: samplerOther
};

const tambourine = {
  accent: tambourineAccent,
  forward: tambourineForward,
  dimple: tambourineDimple
};

const djembe = {
  high: djembeHigh,
  medium: djembeMedium,
  low: djembeLow
};

const triangle = {
  loud: triangleLoud,
  quiet: triangleQuiet
};

const conga = {
  heel: congaHeel,
  high: congaHigh,
  low: congaLow,
  muffled: congaMuffled
};

const drumSet = {
  bassDrum: drumSetBassDrum,
  snareDrum: drumSetSnareDrum,
  hiHat: drumSetHiHat,
  crash: drumSetCrash
}

export {
  trumpet,
  trombone,
  frenchHorn,
  tuba,
  violin,
  banjo,
  harp,
  acousticGuitar,
  piano,
  flute,
  clarinet,
  panFlute,
  bassoon,
  saxophone,
  tambourine,
  djembe,
  triangle,
  xylophone,
  drumSet,
  conga,
  soprano,
  mezzoSoprano,
  alto,
  tenor,
  baritone,
  bass,
  electricGuitar,
  electricBass,
  synthesizer,
  sampler,
  theremin
}