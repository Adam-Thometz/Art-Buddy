# Word-To-Music Decoder

![music decoder in initial state](../_media/_docs/music-decoder/music-decoder-1.png)

## Purpose
This app turns words into music.

## Other Relevant Directories (all under `src`)

Helper functions: `_utils/music-decoder`  
Redux reducer: `_redux/music-decoder`  
The LETTER_NOTES object: `_data/music-decoder/letterNotes.js`
Form Field hook: `_hooks/form-fields`
Play context: `_context/PlayContext.js`

## Basic flow

1. Type a word into the input (`WordForm.js`)

![music decoder with the word "Hello" typed in](../_media/_docs/music-decoder/music-decoder-2.png)

2. Look for the each letter in the word using the alphabet table (`AlphabetTable.js`)

![music decoder with an uppercase letter filled in the alphabet table](../_media/_docs/music-decoder/music-decoder-3.png)

3. Turn off uppercase mode to get lowercase letters using the toggle (`DecoderControls.js`)

![music decoder with lowercase letters filled in](../_media/_docs/music-decoder/music-decoder-4.png)

4. Press Play to hear the melody!

5. You can change the instrument sound and the musical scale used

## How sound is manipulated

The synth uses basic sounds from the Web Audio API. Other instruments are formed from a recording of single note played and then the sounds are transposed to the desired note as needed. For example, the sound file for the guitar is a single C note and that note gets transposed as needed.