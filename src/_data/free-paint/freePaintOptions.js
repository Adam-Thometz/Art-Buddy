import square from "_media/free-paint/shapes/square.png";
import circle from "_media/free-paint/shapes/circle.png";
import triangle from "_media/free-paint/shapes/triangle.png";
import star from "_media/free-paint/shapes/star.png";

const options = {
  upperCase: Array.from(Array(26)).map((_, i) => String.fromCharCode(i + 65)),
  lowerCase: Array.from(Array(26)).map((_, i) => String.fromCharCode(i + 97)),
  numbers: Array.from(Array(10)).map((_, i) => String.fromCharCode(i + 48)),
  // each shape is an array that contains the reference to the image and the string for alt text
  shapes: [
    [square, "square"],
    [circle, "circle"],
    [triangle, "triangle"],
    [star, "star"],
  ],
};

export default options;
