import * as Tone from 'tone';

const pitchShifter = new Tone.PitchShift(0).toDestination()
const synth = new Tone.Synth().connect(pitchShifter)

export default synth;