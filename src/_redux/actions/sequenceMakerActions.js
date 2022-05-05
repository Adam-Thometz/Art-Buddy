import { createAction } from "@reduxjs/toolkit";

export const changeCategory = createAction('changeCategory');
export const addToSequence = createAction('addToSequence');
export const removeFromSequence = createAction('removeFromSequence');
export const addBlock = createAction('addBlock');
export const removeBlock = createAction('removeBlock');
export const playSequence = createAction('playSequence');
export const playAllSequence = createAction('playAllSequence');
export const resetSequence = createAction('resetSequence');
export const setPitch = createAction('setPitch');