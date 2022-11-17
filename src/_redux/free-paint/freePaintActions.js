import { createAction } from "@reduxjs/toolkit";

export const setColor = createAction('setColor');
export const setStencil = createAction('setStencil');
export const setIsErasing = createAction('setIsErasing');
export const clearGame = createAction('clearGame');