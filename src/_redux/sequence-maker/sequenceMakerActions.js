import { createAction } from "@reduxjs/toolkit";

export const setCategory = createAction("setCategory");
export const addToSequence = createAction("addToSequence");
export const removeFromSequence = createAction("removeFromSequence");
export const resetSequence = createAction("resetSequence");
export const setPitch = createAction("setPitch");
export const setDuration = createAction("setDuration");
export const togglePlaying = createAction("togglePlaying");
export const clearGame = createAction("clearGame");
