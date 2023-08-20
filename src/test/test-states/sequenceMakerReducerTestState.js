import { initialState } from "store/sequence-maker/sequenceMakerReducer";

const withCategory = {
  ...initialState,
  category: "animals",
};

export { withCategory };
