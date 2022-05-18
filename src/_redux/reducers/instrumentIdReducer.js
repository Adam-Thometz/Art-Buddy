import { clearChoices, clearReportCards, generateAnswer, loadReportCards, selectChoice, updateReportCard, addInstrument, selectInstrument, selectMelody } from "../actions/insturmentIdActions";
import { createReducer } from "@reduxjs/toolkit";

import learnInstrumentOptions from '../../instrument-id/learnInstrumentOptions';
import { INITIAL_REPORT_CARD } from "../../_hooks/useReportCard";
import * as melodies from '../../instrument-id/play/song-maker/playback/melodies';
import * as rhythms from '../../instrument-id/play/song-maker/playback/rhythms'

const defaultInstrument = {
  instrumentId: null,
  melody: null
}

const INITIAL_STATE = {
  // Listening Skills Test
  choice1: null,
  choice2: null,
  answer: null,
  reportCard1: INITIAL_REPORT_CARD,
  reportCard2: INITIAL_REPORT_CARD,
  // Song Maker
  instruments: [defaultInstrument, null, null, null]
};

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
      state.reportCard1 = JSON.parse(savedReportCard1);
      state.reportCard2 = JSON.parse(savedReportCard2);
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
    .addCase(addInstrument, (state, action) => {
      const id = action.payload;
      state.instruments[id] = defaultInstrument;
    })
    .addCase(selectInstrument, (state, action) => {
      const { id, instrumentId } = action.payload;
      const newInstrument = {
        instrumentId,
        melody: null
      };
      state.instruments[id] = newInstrument;
    })
    .addCase(selectMelody, (state, action) => {
      const { id, melodyId, isRhythm } = action.payload;
      const melody = isRhythm ? rhythms[melodyId] : melodies[melodyId];
      const instrumentWithMelody = {
        ...state.instruments[id],
        melody
      };
      state.instruments[id] = instrumentWithMelody;
    })
});

export default instrumentIdReducer;