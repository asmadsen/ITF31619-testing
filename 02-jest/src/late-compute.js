import wait from 'waait'

export const lateCompute = async (callback, ms) => {
  await wait(ms)
  callback()
}
