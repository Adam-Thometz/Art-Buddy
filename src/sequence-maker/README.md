# Sequence Maker

![sequence maker in initial state](../_media/_docs/sequence-maker/sequence-maker-1.png)

## Purpose

This app allows students to create sequences of different sounds.

## Other Relevant Directories (all under `src`)

Helper functions: `_utils/sequence-maker`  
Redux reducer: `_redux/sequence-maker`  
The soundInfo object: `_data/sequence-maker/soundInfo.js`
Play context: `_context/PlayContext.js`

## Basic flow

1. Pick a category from the dropdown (`SequenceControl.js`). It will show below the dropdowns (`SoundOptions.js`)

![sequence maker with body sounds picked](../_media/_docs/sequence-maker/sequence-maker-2.png)

2. Select the sequence you want to play in, which will show in the blocks below (`Sequence.js`)

![sequence maker with clapping, stomping, stop, and saying yeah set as the sequence](../_media/_docs/sequence-maker/sequence-maker-3.png)

3. Press the Play or Play All buttons below (`SequencePlayReset.js`) and hear what you get! Default pitch is medium and default duration is 3 seconds

4. You can also change the pitch and duration as well as mix and match categories

![sequence maker with clapping, stop, meowing, and tweeting set as the sequence, as well as 2 seconds and high pitch](../_media/_docs/sequence-maker/sequence-maker-4.png)

## How sound is manipulated

Samples are loaded with C3 set as the base pitch, with higher pitches set by changing the octave of C (i.e. high pitch is C4) and durations set by changing the sample play length.