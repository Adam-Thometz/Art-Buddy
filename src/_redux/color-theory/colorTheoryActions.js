const { createAction } = require("@reduxjs/toolkit");

export const learnColors = createAction('learnColors');
export const toggleAllColors = createAction('toggleAllColors');
export const toggleColors = createAction('toggleColors');
export const toggleGroups = createAction('toggleGroups');
export const toggleText = createAction('toggleText');
export const clearWheel = createAction('clearWheel');