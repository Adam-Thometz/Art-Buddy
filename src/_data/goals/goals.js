// READING GOALS
export const IDENTIFY_LETTERS = "Identify letters (upper/lower case)";
export const WORD_FAMILIES = "Identify word families";
export const CONNECT_OBJECTS_WITH_EVENTS = "Connect objects with familiar events";
export const READ_LEFT_TO_RIGHT = "Follow words read from left to right";
export const VOCAB_WORDS = "Identify vocabulary words";
export const SIGHT_WORDS = "Identify sight words";

// WRITING_GOALS
export const DRAW_A_PICTURE = "Draw a picture";
export const WRITE_SIMPLE_WORDS = "Write simple words";
export const SEQUENCE_STORY = "Sequence a story";

// MATH GOALS
export const COUNT = "Count";
export const EXTEND_PATTERNS = "Identify and extend patterns";
export const IDENTIFY_QUANTITY = "Identify quantity";
export const IDENTIFY_MORE_AND_LESS = "Identify 'more' and 'less'";
export const IDENTIFY_SHAPES = "Identify shapes";

const goals = [
  {
    goal: IDENTIFY_LETTERS,
    type: 'reading',
    standards: [
      {
        standard: "CCSS.ELA-Literacy.RF.K.1.d",
        grade: "K",
        description: "Recognize and name all uppercase and lowercase letters of the alphabet."
      },
      {
        standard: "CCSS.ELA-Literacy.RF.1.1.a",
        grade: "1",
        description: "Recognize the distinguishing features of a sentence (e.g., first word, capitalization, ending punctuation)."
      },
    ]
  },
  {
    goal: WORD_FAMILIES,
    type: 'reading',
    standards: [
      {
        standard: "CCSS.ELA-Literacy.RF.K.2.e",
        grade: "K",
        description: "Demonstrate understanding of spoken words, syllables, and sounds (phonemes) by recognizing and producing words that rhyme or have the same initial sound."
      },
      {
        standard: "CCSS.ELA-Literacy.RF.1.2.c",
        grade: "1",
        description: "Isolate and pronounce initial, medial vowel, and final sounds (phonemes) in spoken single-syllable words."
      },
    ]
  },
  {
    goal: CONNECT_OBJECTS_WITH_EVENTS,
    type: 'reading',
    standards: [
      {
        standard: "CCSS.ELA-Literacy.SL.K.5",
        grade: "K",
        description: "Add drawings or other visual displays to descriptions as desired to provide additional detail."
      },
      {
        standard: "CCSS.ELA-Literacy.SL.1.5",
        grade: "1",
        description: "Add drawings or other visual displays to descriptions when appropriate to clarify ideas, thoughts, and feelings."
      },
    ]
  },
  {
    goal: READ_LEFT_TO_RIGHT,
    type: 'reading',
    standards: [
      {
        standard: "CCSS.ELA-Literacy.RF.K.1.b",
        grade: "K",
        description: "Demonstrate understanding of the organization and basic features of print by recognizing that spoken words are represented in written language by specific sequences of letters."
      },
      {
        standard: "CCSS.ELA-Literacy.RF.1.1.a",
        grade: "1",
        description: "Recognize the distinguishing features of a sentence (e.g., first word, capitalization, ending punctuation)."
      },
    ]
  },
  {
    goal: VOCAB_WORDS,
    type: 'reading',
    standards: [
      {
        standard: "CCSS.ELA-Literacy.L.K.4",
        grade: "K",
        description: "Determine or clarify the meaning of unknown and multiple-meaning words and phrases based on kindergarten reading and content."
      },
      {
        standard: "CCSS.ELA-Literacy.L.1.4",
        grade: "1",
        description: "Determine or clarify the meaning of unknown and multiple-meaning words and phrases based on grade 1 reading and content."
      },
    ]
  },
  {
    goal: SIGHT_WORDS,
    type: 'reading',
    standards: [
      {
        standard: "CCSS.ELA-Literacy.RF.K.3.c",
        grade: "K",
        description: "Read common high-frequency words by sight."
      },
      {
        standard: "CCSS.ELA-Literacy.RF.1.3.g",
        grade: "1",
        description: "Recognize and read grade-appropriate irregularly spelled words."
      },
    ]
  },
  {
    goal: DRAW_A_PICTURE,
    type: 'writing',
    standards: [
      {
        standard: "CCSS.ELA-LITERACY.W.K.6",
        grade: "K",
        description: "Use a combination of drawing, dictating, and writing to express their thoughts and ideas."
      },
      {
        standard: "CCSS.ELA-LITERACY.W.1.6",
        grade: "1",
        description: "Use a combination of drawing, dictating, and writing to express their thoughts, ideas, and experiences"
      },
    ]
  },
  {
    goal: WRITE_SIMPLE_WORDS,
    type: 'writing',
    standards: [
      {
        standard: "CCSS.ELA-LITERACY.W.K.2",
        grade: "K",
        description: "Use a combination of drawing, dictating, and writing to compose informative/explanatory texts, including using phonetic spelling for words."
      },
      {
        standard: "CCSS.ELA-LITERACY.W.1.2",
        grade: "1",
        description: "Write informative/explanatory texts using a combination of drawing, dictating, and writing, and spelling basic words phonetically."
      },
    ]
  },
  {
    goal: SEQUENCE_STORY,
    type: 'writing',
    standards: [
      {
        standard: "CCSS.ELA-LITERACY.RL.K.2",
        grade: "K",
        description: "Retell familiar stories, including key details, and identify the beginning, middle, and end of a story."
      },
      {
        standard: "CCSS.ELA-LITERACY.RL.1.2",
        grade: "K",
        description: "Retell stories, including key details, and identify the beginning, middle, and end of a story."
      },
    ]
  },
  {
    goal: COUNT,
    type: "math",
    standards: [
      {
        standard: "CCSS.MATH-CONTENT.K.CC.B.4",
        grade: "K",
        description: "Understand the relationship between numbers and quantities, counting objects in sequential order, and recognizing that the last number counted represents the total quantity."
      },
    ]
  },
  {
    goal: EXTEND_PATTERNS,
    type: "math",
    standards: [
      {
        standard: "CCSS.MATH-CONTENT.K.G.A.2",
        grade: "K",
        description: "Predict what comes next in a pattern and create their own patterns using different attributes."
      },
      {
        standard: "CCSS.MATH-CONTENT.1.OA.C.5",
        grade: "1",
        description: "Recognize patterns in numbers and shapes, predict what comes next in a pattern, and create their own patterns using addition or subtraction."
      },
    ]
  },
  {
    goal: IDENTIFY_QUANTITY,
    type: "math",
    standards: [
      {
        standard: "CCSS.MATH-CONTENT.K.CC.B.5",
        grade: "K",
        description: "Count up to 20."
      },
    ]
  },
  {
    goal: IDENTIFY_MORE_AND_LESS,
    type: "math",
    standards: [
      {
        standard: "CCSS.MATH-CONTENT.K.CC.C.6",
        grade: "K",
        description: "Compare numbers and determining which is greater or lesser"
      },
      {
        standard: "CCSS.MATH-CONTENT.1.NBT.B.3",
        grade: "K",
        description: "Compare two-digit numbers and understand which number is greater or lesser. ."
      },
    ]
  },
  {
    goal: IDENTIFY_SHAPES,
    type: "math",
    standards: [
      {
        standard: "CCSS.MATH-CONTENT.K.CC.C.6",
        grade: "K",
        description: "recognize and name common two-dimensional shapes, such as circles, squares, triangles, and rectangles"
      },
      {
        standard: "CCSS.MATH-CONTENT.1.G.A.1",
        grade: "K",
        description: "identify and draw shapes such as circles, triangles, rectangles, squares, and hexagons"
      },
    ]
  },
]

export default goals;
