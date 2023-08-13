import {
  QUARTER_NOTE,
  QUARTER_REST,
  EIGHTH_NOTES
} from "assets/jump-into-rhythm/jumpIntoRhythm.assets";

const noteInfo = {
  quarterNote: {
    id: "quarterNote",
    text: "Quarter Note",
    img: QUARTER_NOTE,
    duration: ["4n"],
    isRest: false,
  },
  eighthNotes: {
    id: "eighthNotes",
    text: "Eighth Notes",
    img: EIGHTH_NOTES,
    duration: ["8n", "8n"],
    isRest: false,
  },
  quarterRest: {
    id: "quarterRest",
    text: "Quarter Rest",
    img: QUARTER_REST,
    duration: ["4n"],
    isRest: true,
  },
};

export default noteInfo;
