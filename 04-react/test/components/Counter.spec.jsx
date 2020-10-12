import { mount } from 'enzyme'
import React from 'react'
import { Counter } from '../../src/components/Counter'

it('should start counter at 0', () => {
  const wrapper = mount(<Counter />)

  expect(wrapper.find('#count').text()).toContain('0')
})


it('should increase counter when + button clicked', () => {
  const wrapper = mount(<Counter />)

  expect(wrapper.find('#count').text()).toContain('0')
  
  wrapper.find('[data-test-id="button-add"]').simulate('click')
  
  expect(wrapper.find('#count').text()).toContain('1')
})


it('should decrease counter when - button clicked', () => {
  const wrapper = mount(<Counter />)

  expect(wrapper.find('#count').text()).toContain('0')
  
  wrapper.find('[data-test-id="button-subtract"]').simulate('click')
  
  expect(wrapper.find('#count').text()).toContain('-1')
})
