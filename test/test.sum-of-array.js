'use strict'

const assert = require('assert')

describe('get sum of an array of numbers', () => {
  const sum = (previous, current) => previous + current

  it('should calculate the sum of a number array.', () => {
    const values = [1, 2, 3, 4, 10, 11]

    assert.equal(values.reduce(sum), 31)
  })

  it('should calculate the sum of an array of string numbers..', () => {
    const values = ['1', '2', '3', '4', '10', '11']

    assert.equal(values.map(Number).reduce(sum), 31)
  })
})
