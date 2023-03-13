# Jump Into Rhythm

![jump into rhythm in initial state](../_media/_docs/jump-into-rhythm/jump-into-rhythm-1.png)

## Purpose
This app allows students to write a rhythm and create frog animations that jump according to the rhythm.

## Other Relevant Directories (all under `src`)

Helper functions: `_utils/jump-into-rhythm`  
Redux reducer: `_redux/jump-into-rhythm`  
The note info object: `_data/jump-into-rhythm/noteInfo.js`
Play context: `_context/PlayContext.js`

## Basic flow

1. Select notes from the bottom bar (`NoteOptions.js`) to render in the colored measures (`Notes.js`)

![jump into rhythm with a rhythm (quarter note, eighth notes, quarter rest, quarter note)](../_media/_docs/jump-into-rhythm/jump-into-rhythm-2.png)

2. Press the Play button (`NoteOptions.js`) and watch the frogs jump! (`FrogLilyPad.js`). Press the back button below to return to the notes screen.

![jump into rhythm with a frog and lily pad representation of the rhythm](../_media/_docs/jump-into-rhythm/jump-into-rhythm-3.png)

3. You can create up to four rhythms (scroll to see the rest - currently working on a more obvious scroller)

![jump into rhythm with a two rhythms](../_media/_docs/jump-into-rhythm/jump-into-rhythm-4.png)
![jump into rhythm with lily pad representations of rhythms](../_media/_docs/jump-into-rhythm/jump-into-rhythm-5.png)


## How animation is handled

Animations are created dynamically using the animate function that's built in to most HTML elements. See `createAnimation.js` to see how properties and attributes are manipulated.