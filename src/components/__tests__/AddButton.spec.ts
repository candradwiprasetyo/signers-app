import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AddButton from '@/components/AddButton.vue'

describe('AddButton.vue', () => {
  it('render correctly button', () => {
    const wrapper = mount(AddButton)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
