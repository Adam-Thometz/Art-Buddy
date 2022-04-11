import * as Tone from 'tone';

const bitcrusher = new Tone.BitCrusher(4).toDestination()
// const filter = new Tone.AutoFilter()
const synth = new Tone.Synth().connect(bitcrusher)

export default synth;