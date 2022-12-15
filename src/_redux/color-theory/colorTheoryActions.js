const { createAction } = require("@reduxjs/toolkit");

export const learnColors = createAction('learnColors');
export const toggleAllColors = createAction('toggleAllColors');
export const toggleColor = createAction('toggleColor');
export const toggleGroup = createAction('toggleGroup');
export const toggleText = createAction('toggleText');
export const clearWheel = createAction('clearWheel');