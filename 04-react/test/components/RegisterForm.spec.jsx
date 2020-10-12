import React from 'react'
import { shallow, } from 'enzyme'
import { RegisterForm } from '../../src/components/RegisterForm'


afterEach(() => {
  jest.useRealTimers()
})

it('should make submit button when name is valid', () => {
  const wrapper = shallow(<RegisterForm />)

  expect(wrapper.find('#submit').prop('disabled')).toEqual(true)

  wrapper.find('#firstName').simulate('change', 'Abc')
  wrapper.find('#lastName').simulate('change', { target: { value: 'Abc'} })

  expect(wrapper.find('#submit').prop('disabled')).toEqual(false)
})

it('should show cleared message after cleared clicked', () => {
  jest.useFakeTimers('modern')

  const wrapper = mount(<RegisterForm />)
  expect(wrapper.exists('#message')).toEqual(false)

  wrapper.find('#clear').simulate('click')
  expect(wrapper.find('#message').text()).toEqual('Content cleared')

  jest.advanceTimersByTime(2000)
  wrapper.update()
  
  expect(wrapper.exists('#message')).toEqual(false)
})
