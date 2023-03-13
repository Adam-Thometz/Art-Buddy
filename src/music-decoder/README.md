# Word-To-Music Decoder

[music decoder in initial state](../_media/_docs/music-decoder/music-decoder-1.webp)

## Purpose
This app lays out a chart of all letters with different colors that correspond to different colors. You type a word into the form and students must find the letters in the chart. You can toggle between upper and lowercase letters. As they find them, the word gets colored in and a sound is played. You can create a melody based on the notes that are already selected.

## Other Relevant Directories (all under `src`)

Helper functions: `_utils/music-decoder`  
Redux reducer: `_redux/music-decoder`  
The LETTER_NOTES object: `_data/music-decoder/letterNotes.js`

## Basic flow

1. Type a word into the input (`WordForm.js`)

[music decoder with the word "Hello" typed in](../_media/_docs/music-decoder/music-decoder-2.webp)

2. Look for the each letter in the word using the alphabet table (`AlphabetTable.js`)

[music decoder with an uppercase letter filled in the alphabet table](../_media/_docs/music-decoder/music-decoder-3.webp)

3. Turn off uppercase mode to get lowercase letters using the toggle (`DecoderControls.js`)

[music decoder with lowercase letters filled in](../_media/_docs/music-decoder/music-decoder-4.webp)

4. Press Play to hear the melody!

5. You can change the instrument sound and the musical scale used

## How sound is manipulated

The synth uses basic sounds from the Web Audio API. Other instruments are formed from a recording of single note played and then the sounds are transposed to the desired note as needed. For example, the sound file for the guitar is a single C note and that note gets transposed as needed.