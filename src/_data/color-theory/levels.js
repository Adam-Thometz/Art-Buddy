export const COLOR_THEORY_LEVELS = ["primary", "secondary", "tertiary"];

const levels = {
  primary: {
    A: [
      {
        colorWheelState: {
          colors: [],
          groups: ["primary"],
        },
        task: {
          direction: "Click on the three primary colors",
          colorText: "",
          answers: ["yellow", "blue", "red"],
          showAnswers: true,
        },
      },
    ],
    B: [
      {
        colorWheelState: {
          colors: [],
          groups: [],
        },
        task: {
          direction: "Click on the three primary colors",
          colorText: "",
          answers: ["yellow", "blue", "red"],
          showAnswers: true,
        },
      },
    ],
  },
  secondary: {
    A: [
      {
        colorWheelState: {
          colors: [],
          groups: ["primary", "secondary"],
        },
        task: {
          direction: "Click on the three secondary colors",
          colorText: "",
          answers: ["green", "orange", "violet"],
          showAnswers: true,
        },
      },
    ],
    B: [
      {
        colorWheelState: {
          colors: ["green"],
          groups: ["primary"],
        },
        task: {
          direction: "Click on the 2 primary colors that make:",
          colorText: "green",
          answers: ["yellow", "blue"],
          showAnswers: false,
        },
      },
      {
        colorWheelState: {
          colors: ["orange"],
          groups: ["primary"],
        },
        task: {
          direction: "Click on the 2 primary colors that make:",
          colorText: "orange",
          answers: ["yellow", "red"],
          showAnswers: false,
        },
      },
      {
        colorWheelState: {
          colors: ["violet"],
          groups: ["primary"],
        },
        task: {
          direction: "Click on the 2 primary colors that make:",
          colorText: "violet",
          answers: ["blue", "red"],
          showAnswers: false,
        },
      },
    ],
  },
  tertiary: {
    A: [
      {
        colorWheelState: {
          colors: [],
          groups: [],
        },
        task: {
          direction: "Click on 3 tertiary colors",
          colorText: "",
          answers: ["pear", "emerald", "blueberry"],
          showAnswers: true,
        },
      },
      {
        colorWheelState: {
          colors: [],
          groups: [],
        },
        task: {
          direction: "Click on three tertiary colors",
          colorText: "",
          answers: ["plum", "tangelo", "dandelion"],
          showAnswers: true,
        },
      },
    ],
    B: [
      {
        colorWheelState: {
          colors: [],
          groups: [],
        },
        task: {
          direction: "Click on the two colors that make",
          colorText: "pear",
          answers: ["yellow", "green"],
          showAnswers: true,
        },
      },
      {
        colorWheelState: {
          colors: [],
          groups: [],
        },
        task: {
          direction: "Click on the two colors that make",
          colorText: "emerald",
          answers: ["green", "blue"],
          showAnswers: true,
        },
      },
      {
        colorWheelState: {
          colors: [],
          groups: [],
        },
        task: {
          direction: "Click on the two colors that make",
          colorText: "blueberry",
          answers: ["blue", "violet"],
          showAnswers: true,
        },
      },
      {
        colorWheelState: {
          colors: [],
          groups: [],
        },
        task: {
          direction: "Click on the two colors that make",
          colorText: "plum",
          answers: ["violet", "red"],
          showAnswers: true,
        },
      },
      {
        colorWheelState: {
          colors: [],
          groups: [],
        },
        task: {
          direction: "Click on the two colors that make",
          colorText: "tangelo",
          answers: ["red", "orange"],
          showAnswers: true,
        },
      },
      {
        colorWheelState: {
          colors: [],
          groups: [],
        },
        task: {
          direction: "Click on the two colors that make",
          colorText: "dandelion",
          answers: ["orange", "yellow"],
          showAnswers: true,
        },
      },
    ],
  },
};

export default levels;
