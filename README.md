# triangles-area

[![NPM](https://nodei.co/npm/triangles-area.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/triangles-area/)

> Get the **[`area of a triangle`](https://en.wikipedia.org/wiki/Triangle#Computing_the_area_of_a_triangle)**, given the base and height


## Install

```
$ npm install --save triangles-area
```


## Usage

```js
const triangleArea = require('triangles-area')

console.log(triangleArea(24, 27.6))
// => 331.2

console.log(triangleArea(12, 2.5))
// => 15

console.log(triangleArea(11, 13.4))
// => 73.7

console.log(triangleArea(0, 78))
// => Error: Invalid input. Sides of the triangle must be greater than 0

console.log(triangleArea(1, -1))
// => Error: Invalid input. Sides of the triangle must be greater than 0
```


## License

MIT © **[`Nicolás Quiroz`](https://nicolasquiroz.com)**
