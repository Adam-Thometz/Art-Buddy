import { createAction } from "@reduxjs/toolkit";

export const addOneChunk = createAction("addOneChunk");
export const addRandomChunks = createAction("addRandomChunks");
export const toggleTimer = createAction("toggleTimer");
