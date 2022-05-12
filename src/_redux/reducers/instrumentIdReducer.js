import { clearChoices, clearReportCards, createSound, generateAnswer, loadReportCards, playSound, selectChoice, updateReportCard } from "../actions/insturmentIdActions";
import { createReducer } from "@reduxjs/toolkit";

import learnInstrumentOptions from '../../instrument-id/learnInstrumentOptions';
import { INITIAL_REPORT_CARD } from "../../_hooks/useReportCard";

const INITIAL_STATE = {
  choice1: null,
  choice2: null,
  answer: null,
  reportCard1: INITIAL_REPORT_CARD,
  reportCard2: INITIAL_REPORT_CARD
}

const instrumentIdReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(selectChoice, (state, action) => {
      const { id, level, choice } = action.payload;
      const choices = learnInstrumentOptions[choice].instruments;
      if (level === '1') {
        if (id === '1') {
          const instrument1Idx = Math.floor(Math.random() * choices.length);
          const instrumentChoice = { ...choices[instrument1Idx], family: choice };
          state.choice1 = instrumentChoice;
        } else if (id === '2') {
          const instrument2Idx = Math.floor(Math.random() * choices.length);
          const instrumentChoice = { ...choices[instrument2Idx], family: choice };
          state.choice2 = instrumentChoice;
        };
      } else {
        const instrument1Idx = Math.floor(Math.random() * choices.length);
        const instrumentChoice1 = { ...choices[instrument1Idx], family: choice };
        state.choice1 = instrumentChoice1;
        let instrument2Idx = instrument1Idx;
        while (instrument2Idx === instrument1Idx) {
          instrument2Idx = Math.floor(Math.random() * choices.length);
        };
        const instrumentChoice2 = { ...choices[instrument2Idx], family: choice };
        state.choice2 = instrumentChoice2;
      };
    })
    .addCase(generateAnswer, (state, action) => {
      const { choice1, choice2 } = action.payload;
      const answer = Math.ceil(Math.random() * 2);
      state.answer = answer === 1 ? choice1 : choice2;
    })
    .addCase(loadReportCards, (state, action) => {
      const { savedReportCard1, savedReportCard2 } = action.payload;
      state.reportCard1 = savedReportCard1;
      state.reportCard2 = savedReportCard2;
    })
    .addCase(updateReportCard, (state, action) => {
      const { level, newReportCard } = action.payload
      if (level === '1') state.reportCard1 = newReportCard;
      if (level === '2') state.reportCard2 = newReportCard;
    })
    .addCase(clearChoices, (state) => {
      state.choice1 = null;
      state.choice2 = null;
      state.answer = null;
    })
    .addCase(clearReportCards, (state) => {
      state.reportCard1 = INITIAL_REPORT_CARD;
      state.reportCard2 = INITIAL_REPORT_CARD;
    })
    .addCase(createSound, (state, action) => {
      // const instrument = action.payload;
      // const sound = storedSounds[instrument];
    })
    .addCase(playSound, (state, action) => {
      const sound = action.payload;
      const audio = new Audio(sound);
      audio.play();
    })
});

export default instrumentIdReducer;