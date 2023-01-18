import { createAction } from "@reduxjs/toolkit";

export const setColor = createAction("setColor");
export const setStencil = createAction("setStencil");
export const setShownOptions = createAction("setShownOptions");
export const setIsErasing = createAction("setIsErasing");
export const setEditStencilMode = createAction("setEditStencilMode");
export const clearGame = createAction("clearGame");
