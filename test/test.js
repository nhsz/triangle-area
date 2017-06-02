import test from 'ava'
import triangleArea from '../lib'

test('Test 1', t => {
  t.is(triangleArea(3, 3), 4.5)
})

test('Test 2', t => {
  t.is(triangleArea(24, 27.6), 331.2)
})

test('Test 3', t => {
  t.is(triangleArea(12, 2.5), 15)
})

test('Test 4', t => {
  t.is(triangleArea(12, 3.9), 23.4)
})

test('Test 5', t => {
  t.is(triangleArea(14, 4), 28)
})

test('Test 6', t => {
  t.is(triangleArea(11, 13.4), 73.7)
})

test('Test 7: zero base', t => {
  const error = t.throws(() => {
    triangleArea(0, 78)
  }, Error)

  t.is(error.message, 'Invalid input. Sides of the triangle must be greater than 0')
})

test('Test 8: negative height', t => {
  const error = t.throws(() => {
    triangleArea(1, -1)
  }, Error)

  t.is(error.message, 'Invalid input. Sides of the triangle must be greater than 0')
})
