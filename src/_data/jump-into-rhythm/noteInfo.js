import {
  quarterNote,
  eighthNotes,
  quarterRest,
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
  quarterRest: {
    id: 'quarterRest',
    text: 'Quarter Rest',
    img: quarterRest,
    duration: ['4n']
  },
};

export default noteInfo;