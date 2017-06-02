/*
  The area of a triangle is equal to A = (b * h) / 2,
  where b = base and h = height
*/
'use strict'

module.exports = (base, height) => {
  if (base <= 0 || height <= 0) {
    throw new Error('Invalid input. Sides of the triangle must be greater than 0')
  } else {
    return parseFloat(((base * height) / 2).toPrecision(16))
  }
}
