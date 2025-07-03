import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import StatusBadge from '../StatusBadge.vue'

describe('StatusBadge', () => {
  it('render active icon when active is true', () => {
    const wrapper = mount(StatusBadge, {
      props: {
        active: true,
      },
    })

    const span = wrapper.find('span')
    expect(span.text()).toBe('check')
    expect(span.attributes('title')).toBe('Aktif')
    expect(span.classes()).toContain('bg-green-400')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('render non active icon when active is false', () => {
    const wrapper = mount(StatusBadge, {
      props: {
        active: false,
      },
    })

    const span = wrapper.find('span')
    expect(span.text()).toBe('close')
    expect(span.attributes('title')).toBe('Tidak Aktif')
    expect(span.classes()).toContain('bg-red-400')
    expect(wrapper.html()).toMatchSnapshot()
  })
})
