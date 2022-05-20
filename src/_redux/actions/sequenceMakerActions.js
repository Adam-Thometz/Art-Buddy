import { createAction } from "@reduxjs/toolkit";

export const changeCategory = createAction('changeCategory');
export const addToSequence = createAction('addToSequence');
export const removeFromSequence = createAction('removeFromSequence');
export const resetSequence = createAction('resetSequence');
export const setPitch = createAction('setPitch');
export const clearGame = createAction('clearGame');