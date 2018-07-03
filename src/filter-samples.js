'use strict'

export const getOddNumbers = (numbers) => {
  const result = numbers.filter(numbers => (numbers % 2) !== 0 )
  return result
}

export const getEvenNumbers = (numbers) => {
  const result = numbers.filter(numbers =>  (numbers % 2) === 0 )
  return result
}
