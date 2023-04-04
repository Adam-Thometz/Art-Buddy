import { initialState } from "_redux/sequence-maker/sequenceMakerReducer";

const withCategory = {
  ...initialState,
  category: "animals",
};

export { withCategory };
