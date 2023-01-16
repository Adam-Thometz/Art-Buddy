export const COLOR_THEORY_LEVELS = ['primary', 'secondary', 'tertiary'];

const levels = {
  primary: {
    A: {
      stages: [
        {
          direction: 'Click on the three primary colors',
          colorText: null,
          colorsToToggle: [],
          groupsToToggle: ['primary'],
          toggleAll: false,
          answers: ['yellow', 'blue', 'red'],
        },
      ]
    },
    B: {
      stages: [
        {
          direction: 'Click on the three primary colors',
          colorText: null,
          colorsToToggle: [],
          groupsToToggle: [],
          toggleAll: true,
          answers: ['yellow', 'blue', 'red'],
        }
      ]
    }
  },
  secondary: {
    A: {
      stages: [
        {
          direction: 'Click on the three secondary colors',
          colorText: null,
          colorsToToggle: [],
          groupsToToggle: ['secondary'],
          toggleAll: false,
          answers: ['green', 'orange', 'violet'],
        }
      ]
    },
    B: {
      stages: [
        {
          direction: 'Click on the 2 primary colors that make:',
          colorText: 'green',
          colorsToToggle: ['green'],
          groupsToToggle: ['secondary'],
          toggleAll: false,
          answers: ['yellow', 'blue'],
        },
        {
          direction: 'Click on the 2 primary colors that make:',
          colorText: 'orange',
          colorsToToggle: ['orange'],
          groupsToToggle: ['secondary'],
          toggleAll: false,
          answers: ['yellow', 'red'],
        },
        {
          direction: 'Click on the 2 primary colors that make:',
          colorText: 'violet',
          colorsToToggle: ['violet'],
          groupsToToggle: ['secondary'],
          toggleAll: false,
          answers: ['blue', 'red'],
        },
      ]
    },
  },
  tertiary: {
    A: {
      stages: [
        {
          direction: 'Click on the six tertiary colors',
          colorText: null,
          colorsToToggle: [],
          groupsToToggle: [],
          toggleAll: true,
          answers: ['pear', 'emerald', 'blueberry', 'plum', 'tangelo', 'dandelion'],
        }
      ]
    },
    B: {
      stages: [
        {
          direction: 'Click on the 2 colors that make:',
          colorText: 'pear',
          colorsToToggle: [],
          groupsToToggle: [],
          toggleAll: true,
          answers: ['yellow', 'green'],
        },
        {
          direction: 'Click on the 2 colors that make:',
          colorText: 'emerald',
          colorsToToggle: [],
          groupsToToggle: [],
          toggleAll: true,
          answers: ['green', 'blue'],
        },
        {
          direction: 'Click on the 2 colors that make:',
          colorText: 'blueberry',
          colorsToToggle: [],
          groupsToToggle: [],
          toggleAll: true,
          answers: ['green', 'violet'],
        },
        {
          direction: 'Click on the 2 colors that make:',
          colorText: 'plum',
          colorsToToggle: [],
          groupsToToggle: [],
          toggleAll: true,
          answers: ['violet', 'red'],
        },
        {
          direction: 'Click on the 2 colors that make:',
          colorText: 'tangelo',
          colorsToToggle: [],
          groupsToToggle: [],
          toggleAll: true,
          answers: ['red', 'orange'],
        },
        {
          direction: 'Click on the 2 colors that make:',
          colorText: 'dandelion',
          colorsToToggle: [],
          groupsToToggle: [],
          toggleAll: true,
          answers: ['orange', 'yellow'],
        },
      ]
    },
  },
}

export default levels;