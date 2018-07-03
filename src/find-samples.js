'use strict'

export const findLeftmostEven = (numbers) => {
  const result = numbers.find(numbers => (numbers % 2) === 0)
  return result
}

export const findLeftmostOdd = (numbers) => {
  const result = numbers.find(numbers => (numbers % 2) !== 0)
  return result
}
