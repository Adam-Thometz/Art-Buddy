import square from '_media/free-paint/shapes/square.png';
import circle from '_media/free-paint/shapes/circle.png';
import triangle from '_media/free-paint/shapes/triangle.png';
import star from '_media/free-paint/shapes/star.png';

const options = {
  upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  // each shape is an array that contains the reference to the image and the string for alt text
  shapes: [[square, 'square'], [circle, 'circle'], [triangle, 'triangle'], [star, 'star']]
}

export default options;