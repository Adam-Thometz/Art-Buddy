const { createAction } = require("@reduxjs/toolkit");

export const learnPrimaryColors = createAction('learnPrimaryColors');
export const learnSecondaryColors = createAction('learnSecondaryColors');
export const learnTertiaryColors = createAction('learnTertiaryColors');
export const toggleAllColors = createAction('toggleAllColors');
export const toggleColors = createAction('toggleColors');
export const toggleGroups = createAction('toggleGroups');
export const toggleText = createAction('toggleText');