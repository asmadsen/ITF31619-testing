import wait from "waait"
import { lateCompute } from "../src/late-compute"

it('should run callback after 20 ms', async () => {
  const before = new Date().getTime()
  await lateCompute(() => {
    const now = new Date().getTime()
    expect(now - before).toBeGreaterThanOrEqual(20)
  }, 20)
})

it('should not call callback before 20 ms', async () => {
  const mock = jest.fn()
  lateCompute(mock, 20)
  expect(mock).not.toHaveBeenCalled()
  await wait(5)
  expect(mock).not.toHaveBeenCalled()
  await wait(15)
  expect(mock).toHaveBeenCalled()
})
