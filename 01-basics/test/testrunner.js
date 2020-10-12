export const test = (name, testFunc) => {
    try {
        testFunc()
        console.log(`✅  '${name}' ran successfully`)
    } catch (error) {
        console.error(`🛑  '${name}' failed with error`)
        console.error(error)
    }
}

export const assertEquals = (expected, actual) => {
    if (expected !== actual) {
        throw new Error(`Expected '${expected}' but got '${actual}'`)
    }
}
