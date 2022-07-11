# Art Buddy

Developer: Adam Thometz  
UX designer: Mattie Becker  
See deployment: https://art-buddy.surge.sh/

## What is Art Buddy?

Created by two educators, Art Buddy is a collection of arts-based multisensory games and teaching tools that are designed for students with special needs. The games in this collection are either based on real IEP goals that we've seen in our teaching careers or taken from Everyday Arts for Special Education (EASE), an experimental curriculum designed to supplement instruction with arts activities. All of the games in this collection are designed to help students reach specific goals, whether related to academics or life skills.

### Teaching Terminology Needed to Understand the Purpose of Art Buddy

**IEP (Individualized Education Plan):** a lengthy document written by a special education teacher that outlines a student's learning profile and goals in detail. IEP goals could be academic - such as 'identify all lowercase letters in the alphabet' and 'compare numbers and identify the larger/smaller number' - or social - such as 'engage in play with peers' and 'respond to their name'. Other school workers who work with the student, such as speech therapists, occupational therapists, etc. may contribute their own goals for the student as well.

**Multisensory Instruction:** a style of teaching in which a teacher taps into multiple senses, giving students multiple ways of engaging in a lesson. This style stands in contrast to traditional instruction, which involves a teacher lecturing to a room of (presumably) listening students. Educational research suggests that mutlisensory instruction is highly effective for all students, especially those with learning challenges such as ADHD, autism, dyslexia, and other neurodivergent conditions, and the arts has been recognized as a natural vehicle for multisensory instruction, hence Art Buddy.

## The Apps

### Word-to-Music Decoder

This app lays out a chart of all letters with different colors that correspond to different colors. You type a word into the form and students must find the letters in the chart. You can toggle between upper and lowercase letters. As they find them, the word gets colored in and a sound is played. You can create a melody based on the notes that are already selected. Good for letter recognition and phonics-related activities.

### Sequence Maker

This app allows students to create a sequence of sounds. They pick sounds from different categories and can mix and match them however they want. Students also have the option of either playing the sounds one at a time or playing them altogether at once. Students can also adjust the pitch of the sounds and how long the sounds last. Good for practicing general reading skills such as reading from left to right.

### What's That Instrument?

This app allows students to learn about different instruments based on category. Students can also test their instrument knowledge in the Listening Skills test and unlock instruments for the Song Maker. Good for listening and reading comprehension.

### Score Keeper

This app is a basic score keeper. As points are added or subtracted, students are sorted based on who's winning. If you have a roster saved on the app, you can automatically populate the score keeper with the students on your roster. Good for recognizing and comparing quantity.

## Technical Information

### Tech Stack

For now, this app is purely front end:

- React for client-side rendering
- Redux for state management
- CSS for styling
- Jest/React Testing Library for testing

### How to run app

Very simple:

```
npm start
```
It should run locally on port 3000.

### How to test app

Also very simple:

```
npm run test
```
Or to activate watch mode:
```
npm run test:watch
```

### How to deploy app

In the `public` folder, create a file called `CNAME` and type in the full URL where you want to deploy the app. Then run this command:

```
npm run deploy
```