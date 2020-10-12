import { renderHook, act } from "@testing-library/react-hooks"
import { useFormInput } from "../../src/hooks/useFormInput"

it('should return props for TextField', () => {
  const { result } = renderHook(() => useFormInput('initial'))

  expect(result.current.props).toEqual({
    value: 'initial',
    onChange: expect.any(Function)
  })

  expect(result.current.value).toEqual('initial')
  act(() => {
    result.current.setValue('new value')
  })
  expect(result.current.value).toEqual('new value')
})


it('should provide validation function for manual validation', () => {
  const rule = jest.fn()

  const { result } = renderHook(() => useFormInput('initial', [rule]))

  expect(result.current.props).toEqual({
      value: expect.any(String),
      onChange: expect.any(Function),
      error: false,
      helperText: null,
  })

  expect(rule).not.toHaveBeenCalled()

  rule.mockReturnValueOnce(true)
  expect(result.current.validate()).toEqual(true)
  expect(rule).toHaveBeenCalledWith('initial')

  rule.mockImplementation(value => `"${value}" is not a valid value`)

  act(() => result.current.setValue('changed'))

  act(() => expect(result.current.validate()).toEqual(false))
  

  expect(rule).toHaveBeenCalledWith('changed')
  expect(result.current.props.error).toEqual(true)
  expect(result.current.props.helperText).toEqual('"changed" is not a valid value')
})
