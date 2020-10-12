import { assertEquals, test } from './testrunner.js'
import { toRomanNumeral } from '../src/roman-numeral.js'

// Fjerner forrige resultat fra konsollen slik at vi bare se nåværende resultat
console.clear()

test('1 returns roman I', () => {
    assertEquals('I', toRomanNumeral(1))
})

test('2 returns roman II', () => {
    assertEquals('II', toRomanNumeral(2))
})

test('5 returns roman V', () => {
    assertEquals('V', toRomanNumeral(5))
})
