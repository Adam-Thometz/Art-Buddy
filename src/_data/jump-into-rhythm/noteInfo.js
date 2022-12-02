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
    duration: ['4n'],
    isRest: false,
  },
  eighthNotes: {
    id: 'eighthNotes',
    text: 'Eighth Notes',
    img: eighthNotes,
    duration: ['8n', '8n'],
    isRest: false,
  },
  quarterRest: {
    id: 'quarterRest',
    text: 'Quarter Rest',
    img: quarterRest,
    duration: ['4n'],
    isRest: true,
  },
};

export default noteInfo;