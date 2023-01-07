import { createAction } from "@reduxjs/toolkit";

export const changeMenu = createAction('changeMenu');
export const changeCurrGame = createAction('changeCurrGame');
export const setCurrTimer = createAction('setCurrTimer');
export const setVolume = createAction('setVolume');
export const toggleTextToSpeech = createAction('toggleTextToSpeech');
export const toggleColorBlind = createAction('toggleColorBlind');
export const setRoster = createAction('setRoster');