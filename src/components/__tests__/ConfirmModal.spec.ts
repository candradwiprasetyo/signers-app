import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ConfirmModal from '@/components/ConfirmModal.vue'

describe('ConfirmModal', () => {
  it('render correctly layout', () => {
    const wrapper = mount(ConfirmModal)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('emit cancel when background is clicked', async () => {
    const wrapper = mount(ConfirmModal)
    await wrapper.trigger('click')
    expect(wrapper.emitted('cancel')).toBeTruthy()
  })

  it('emit cancel when click batal', async () => {
    const wrapper = mount(ConfirmModal)
    const buttons = wrapper.findAll('button')
    const cancelBtn = buttons.find((btn) => btn.text() === 'Batal')
    expect(cancelBtn).toBeTruthy()
    await cancelBtn!.trigger('click')
    expect(wrapper.emitted('cancel')).toBeTruthy()
  })

  it('emit confirm when click hapus', async () => {
    const wrapper = mount(ConfirmModal)
    const buttons = wrapper.findAll('button')
    const confirmBtn = buttons.find((btn) => btn.text() === 'Hapus')
    expect(confirmBtn).toBeTruthy()
    await confirmBtn!.trigger('click')
    expect(wrapper.emitted('confirm')).toBeTruthy()
  })
})
