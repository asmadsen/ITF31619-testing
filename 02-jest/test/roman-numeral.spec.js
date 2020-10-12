import { toRomanNumeral } from "../src/roman-numeral"

it('1 returns roman I', () => {
  expect(toRomanNumeral(1)).toEqual('I')
})

it('should return roman "II" when given 2', () => {
  expect(toRomanNumeral(2)).toEqual('II')
})

it('should return roman "V" when given 5', () => {
  expect(toRomanNumeral(5)).toEqual('V')
})
