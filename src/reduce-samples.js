'use strict'

export const rowMultiplication = (row) => {
  const result = row.reduce((a,b)  => a*b)
  return result
}
