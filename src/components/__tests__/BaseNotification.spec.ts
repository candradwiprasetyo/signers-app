import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseNotification from '@/components/BaseNotification.vue'

describe('BaseNotification', () => {
  it('render success message correctly', () => {
    const wrapper = mount(BaseNotification, {
      props: {
        show: true,
        message: 'Data berhasil disimpan',
        type: 'success',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('render error message correctly', () => {
    const wrapper = mount(BaseNotification, {
      props: {
        show: true,
        message: 'Terjadi kesalahan saat menyimpan data',
        type: 'error',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
