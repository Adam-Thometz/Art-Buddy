# Art Buddy

Developer: Adam Thometz  
UX designer: Mattie Becker  
See deployment: https://art-buddy.surge.sh/

## About

### What is Art Buddy?

Created by two former educators, Art Buddy is a collection of arts-based multisensory games and teaching tools designed for students with special needs. The games in this collection are either based on real IEP goals that we've seen in our teaching careers or taken from Everyday Arts for Special Education (EASE), an experimental curriculum designed to supplement instruction with arts activities that the developer trained in during his teaching career. All of the games in this collection are designed to help students reach specific goals, whether related to academics or life skills.  

This app is meant to help teachers by giving them easy access to arts-based multisensory instruction and empowering them to bring their own creativity into their craft and gives students a fun and neurodiverse-friendly way to reach their goals.

### Glossary of Terms Related to Art Buddy

**IEP (Individualized Education Plan):** a lengthy, student-focused document written primarily by a special education teacher that outlines a student's learning profile and goals in detail. IEP goals could be academic - such as 'identify lowercase letters' and 'compare numbers to identify the larger/smaller number' - or social - such as 'engage in play with peers' and 'express their needs'. The games in Art Buddy are designed for such goals.

**Multisensory Instruction:** a style of teaching in which a teacher taps into multiple senses, giving students multiple ways of engaging in a lesson. Educational research suggests that mutlisensory instruction is highly effective for all students, especially those with learning challenges and other neurodivergent conditions. Given that all the major arts disciplines engage different human senses, Art Buddy turns the arts into a vehicle for multisensory instruction.

**Neurodiversity:** the idea that how someone's brain works and processes information is simply a reflection of natural human diversity, like gender, ethnicity, and sexuality. Autism, ADHD, dyslexia, and bipolar disorder are examples of 'neurodiverse' conditions and people without such conditions are 'neurotypical.' Neurodiversity is the lifeblood of Art Buddy; it was made specifically for neurodiverse children.

## The App

### Settings

The settings menu, which you can access via the navbar, allows the user to control volume, toggle the text-to-speech feature (under construction), toggle the color-blind setting (under construction), and set a roster for games that require the use of a roster.

### Music Games

#### Word-to-Music Decoder

This app lays out a chart of all letters with different colors that correspond to different colors. You type a word into the form and students must find the letters in the chart. You can toggle between upper and lowercase letters. As they find them, the word gets colored in and a sound is played. You can create a melody based on the notes that are already selected. Good for letter recognition and phonics-related activities.

#### Sequence Maker

This app allows students to create a sequence of sounds. They pick sounds from different categories and can mix and match them however they want. Students also have the option of either playing the sounds one at a time or playing them altogether at once. Students can also adjust the pitch of the sounds and how long the sounds last. Good for practicing general reading skills such as reading from left to right.

#### What's That Instrument?

This app is divided into two sections: Learn and Play. The Learn section allows students to learn about different instruments. In the Play section, students can test their instrument knowledge in the Listening Skills test and unlock instruments for the Song Maker, a mini-sequencer where students can select instruments and melodies for them to play. Good for listening and reading comprehension.

#### Jump Into Rhythm (under construction)

This app is a movement-based game in which students can create unique rhythms and have the frog jump across the lily pads in the rhythm that students create. Good for recognizing quantity and representing numbers in different ways.

### Tools

#### Time Keeper (under construction)

This tool is a musical timer that allows users to use samples of varying lengths (15, 30, and 60 seconds) to create a timer and the music plays as the timer counts down. Can be used to create full-length songs. Comes with options to create a 5- or 10-minute timer, which creates random sequences of available samples at the selected length. Good for learning about time or just as a timer for a break.  

Samples for Time Keeper were composed by the developer.

#### Score Keeper

This tool is a basic score keeper. As points are added or subtracted, students are sorted based on who's winning. If you have a roster saved on the app, you can automatically populate the score keeper with the students on your roster. Good for recognizing and comparing quantity or just keeping score for other lessons.

#### Mood Meter (under construction)

This tool helps students identify their emotions based on how happy they feel and how energetic they are. Then, they get a popup showing the emotion that they feel based on their selection, along with a link to a song that matches the mood. Good for incorporating social-emotional learning.

#### Noise Meter (under construction)

This tool monitors noise in a room. Good for training noisy classes.

## Technical Information

### Tech Stack

For now, this app is purely front end:

- React for client-side rendering
- Redux for state management
- CSS for styling
- Jest/React Testing Library for testing
- Tone.js for music-related functionality

### How to run app

Very simple:

```
npm start
```
It should run on `localhost:3000`.

### How to run tests

Also very simple:

```
npm run test
```
You can also activate watch mode to run tests whenever a change is detected:
```
npm run test:watch
```

### How to deploy app

In the `public` folder, create a file called `CNAME` and type in the full URL where you want to deploy the app. Then run this command:

```
npm run deploy
```