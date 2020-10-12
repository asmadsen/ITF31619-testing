import { wordToNumber } from "../src/coverage"

it('should test wordToNumber', () => {
  expect(wordToNumber('Two words')).toEqual(-1)
  expect(wordToNumber('A')).toEqual(0)
})
