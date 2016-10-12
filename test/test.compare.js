'use strict'

const assert = require('assert')

describe('compare', () => {
  it('should compare values and provide a ranking if value 1 if grater than value 2.', () => {
    const sum = (previous, current) => previous + current
      , rank = (a, b) => {
        if (a > b) return 1
        return 0
      }

    const [a1, a2, a3] = [5, 6, 7]
      , [b1, b2, b3] = [3, 6, 10]
      , aResult = [rank(a1, b1), rank(a2, b2), rank(a3, b3)].reduce(sum)
      , bResult = [rank(b1, a1), rank(b2, a2), rank(b3, a3)].reduce(sum)

    assert(`${aResult} ${bResult}`, '1 1' )
  })
})
