# Art Buddy

Developer: Adam Thometz  
UX designer: Mattie Becker  
See current deployment: https://art-buddy.surge.sh/

## About

### What is Art Buddy?

Created by two former educators, Art Buddy is a collection of arts-based multisensory games and teaching tools designed for students with special needs. All of the games in this collection are designed to help students reach specific goals, whether related to academics or life skills.  

This app is meant to help teachers by giving them easy access to arts-based multisensory instruction and empowering them to bring their own creativity into their craft while giving students a fun and neurodiverse-friendly way to reach their academic and social goals.  

## The App

### Main Page

#### Menu

The main menu is divided into games and tools. The games menu is further divided into music games, arts games, and all games. There is also a filter that will help you find games or based on an IEP goal (under construction).

#### Settings

The settings menu, which you can access via the navbar, allows the user to control volume, toggle the text-to-speech feature (under construction), toggle the color-blind setting (under construction), and set a roster for apps that require the use of a roster.

### Music Games

#### Word-to-Music Decoder

This app lays out a chart of all letters with different colors that correspond to different colors. You type a word into the form and students must find the letters in the chart. You can toggle between upper and lowercase letters. As they find them, the word gets colored in and a sound is played. You can create a melody based on the notes that are already selected.

#### Sequence Maker

This app allows students to create a sequence of sounds. They pick sounds from different categories and can mix and match them however they want. Students also have the option of either playing the sounds one at a time or playing them altogether at once. Students can also adjust the pitch of the sounds and how long the sounds last. Good for practicing general reading skills such as reading from left to right.

#### What's That Instrument?

This app is divided into two sections: Learn and Play. The Learn section allows students to learn about different instruments and instrument families. In the Play section, students can test their instrument knowledge in the Listening Skills test and unlock instruments for the Song Maker, a mini-sequencer where students can select instruments and melodies to play.

#### Jump Into Rhythm

This app is a movement-based game in which students can create unique rhythms and have the frog jump across the lily pads in the rhythm that students create.

### Art Games

#### Free Paint

This app is a basic coloring app that comes with stencils for numbers, letters (upper and lowercase) and shapes. User can pick different colors and can unlock more by playing Color Theory.

#### Color Theory

This app is devided into two sections: Learn and Play. The Learn section allows students to learn about primary, secondary, and tertiary colors. In the Play section, students can test their color recognition skills and unlock different colors for the Free Paint app.

### Tools

#### Time Keeper

This tool is a musical timer that allows users to use samples of varying lengths (15, 30, and 60 seconds) and purposes (focus or relax) to create a timer and the music plays as the timer counts down. Can be used to create full-length songs. Comes with options to create a 5- or 10-minute timer, which creates random sequences of available samples at the selected length. Good for learning about time or just as a timer for a break.  

Samples for Time Keeper to be composed by the developer.

#### Score Keeper

This tool is a basic score keeper. As points are added or subtracted, students are sorted based on who's winning. If you have a roster saved on the app, you can automatically populate the score keeper with the students on your roster. Good for recognizing and comparing quantity or just keeping score for other lessons.

#### Mood Meter

This tool helps students identify their emotions based on how happy they feel and how energetic they are. Then, they get a popup showing the emotion that they feel based on their selection, along with a link to a song that matches the mood. Good for incorporating social-emotional learning.

#### Noise Meter

This tool monitors noise in a room. Good for training noisy classes.

## Technical Information

### Tech Stack

For now, this app is purely front end:

- React and React Router for client-side rendering
- Redux for state management
- CSS for styling (yep, just plain CSS. No libraries or frameworks.)
- Jest/React Testing Library for testing
- Tone.js for music-related functionality

Currently building the backend in Python/FastAPI and MongoDB

### How to run app

```
npm start
```
It should run on `localhost:3000`.

### How to run tests

```
npm run test
```
You can also activate watch mode to run tests whenever a change is detected:
```
npm run test:watch
```

## How to determine test coverage

```
npm run coverage
```

In addition to a table getting displayed in your terminal, you will find more detailed coverage info in `src/test/coverage`.
