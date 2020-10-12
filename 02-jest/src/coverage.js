export const wordToNumber = name => {
  if (name.includes(' ')) {
    return -1
  } else if (name.length === 4) {
      return 1
  } else if (name.startsWith('B')) {
      return 2
  } else if (name.includes('ø') && !name.includes('æ')) {
      return 3
  } else if (name.includes('æ')) {
      return 4
  } else {
      return 0
  }
}
