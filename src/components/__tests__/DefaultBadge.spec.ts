import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DefaultBadge from '@/components/DefaultBadge.vue'

describe('DefaultBadge', () => {
  it('render active icon when isDefault is true', () => {
    const wrapper = mount(DefaultBadge, {
      props: {
        isDefault: true,
      },
    })

    expect(wrapper.text()).toBe('check')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('render non active icon when isDefault is false', () => {
    const wrapper = mount(DefaultBadge, {
      props: {
        isDefault: false,
      },
    })

    expect(wrapper.text()).toBe('close')
    expect(wrapper.html()).toMatchSnapshot()
  })
})
