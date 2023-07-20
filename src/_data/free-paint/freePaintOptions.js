import { SQUARE_SHAPE, CIRCLE_SHAPE, TRIANGLE_SHAPE, STAR_SHAPE } from "_assets/free-paint/freePaint.assets";

const options = {
  upperCase: Array.from(Array(26)).map((_, i) => String.fromCharCode(i + 65)),
  lowerCase: Array.from(Array(26)).map((_, i) => String.fromCharCode(i + 97)),
  numbers: Array.from(Array(10)).map((_, i) => String.fromCharCode(i + 48)),
  // each shape is an array that contains the reference to the image and the string for alt text
  shapes: [
    [SQUARE_SHAPE, "square"],
    [CIRCLE_SHAPE, "circle"],
    [TRIANGLE_SHAPE, "triangle"],
    [STAR_SHAPE, "star"],
  ],
};

export default options;
