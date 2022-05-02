import { createAction } from "@reduxjs/toolkit";

export const changeMenuGames = createAction('changeMenuGames');

export const addWord = createAction('addWord');
export const createWord = createAction('createWord');
export const fillLetter = createAction('fillLetter');
export const playNote = createAction('playNote');
export const playMelody = createAction('playMelody');
export const changeScale = createAction('changeScale');
export const changeSound = createAction('changeSound');

export const changeCategory = createAction('changeCategory');
export const addToSequence = createAction('addToSequence');
export const removeFromSequence = createAction('removeFromSequence');
export const addBlock = createAction('addBlock');
export const removeBlock = createAction('removeBlock');
export const playSequence = createAction('playSequence');
export const playAllSequence = createAction('playAllSequence');
export const resetSequence = createAction('resetSequence');
export const setPitch = createAction('setPitch');

export const addStudent = createAction('addStudent');
export const removeStudent = createAction('removeStudent');
export const addPoint = createAction('addPoint');
export const removePoint = createAction('removePoint');
export const toggleGameOver = createAction('toggleGameOver');
export const resetScores = createAction('resetScores');