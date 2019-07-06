// Challenge
// In this exercise, we will define 3 functions to calculate the areas of 3 different shapes:

// rectangles
// triangles
// circles
// Create the following 3 functions with the correct logic to calculate the area of that shape.

// calculateRectangleArea(length, width)
// calculateTriangleArea(base, height)
// calculateCircleArea(radius)
// The parameters to the functions will always be numbers.

// Each function should return a number that corresponds to the area of the shape. Here is the math for each of the shapes:

// rectangle: length × width
// triangle: base × height / 2
// circle: π × radius2
// If any of the parameters are negative, the function should return undefined.

// Tips
// To access the value of π in your JavaScript code, use Math.PI.

function calculateRectangleArea(length, width) {
  let totalArea = length * width;
  if (totalArea <= 0) {
    return undefined;
  }
  return totalArea;
}

function calculateTriangleArea(base, height) {
  let totalArea = base * height / 2;
  if (totalArea <= 0) {
    return undefined;
  }
  return totalArea;
}

function calculateCircleArea(radius) {
  let totalArea = Math.PI * (radius ** 2);
  if (radius <= 0) {
    return undefined;
  }
  return totalArea;
} 