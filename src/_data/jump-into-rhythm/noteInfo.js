import {
  quarterNote,
  eighthNotes,
  eighthNote,
  quarterRest,
  eighthRest
} from "_media/jump-into-rhythm/_icons/notes/noteImports";

const noteInfo = {
  quarterNote: {
    id: 'quarterNote',
    text: 'Quarter Note',
    img: quarterNote,
    duration: ['4n']
  },
  eighthNotes: {
    id: 'eighthNotes',
    text: 'Eighth Notes',
    img: eighthNotes,
    duration: ['8n', '8n']
  },
  eighthNote: {
    id: 'eighthNotes',
    text: 'Eighth Note',
    img: eighthNote,
    duration: ['8n']
  },
  quarterRest: {
    id: 'quarterRest',
    text: 'Quarter Rest',
    img: quarterRest,
    duration: ['4n']
  },
  eighthRest: {
    id: 'eighthRest',
    text: 'Eighth Rest',
    img: eighthRest,
    duration: ['8n']
  }
};

export default noteInfo;