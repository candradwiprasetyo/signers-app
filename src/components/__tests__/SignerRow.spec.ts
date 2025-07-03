import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SignerRow from '../SignerRow.vue'

const mockSigner = {
  id: '1',
  name: 'Candra Dwi',
  npwp: '756946380643000',
  signatory: 'TAXPAYER',
  statusTaxpayer: 'ACTIVE',
  defaultSignatory: true,
}

describe('SignerRow', () => {
  it('render correctly with given signer data', () => {
    const wrapper = mount(SignerRow, {
      props: { signer: mockSigner },
      global: {
        stubs: ['StatusBadge', 'DefaultBadge'],
      },
    })

    expect(wrapper.text()).toContain('75.694.638.0-643.000')
    expect(wrapper.text()).toContain('Candra Dwi')
    expect(wrapper.text()).toContain('Wajib Pajak')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('emit correctly when edit button is clicked', async () => {
    const wrapper = mount(SignerRow, {
      props: { signer: mockSigner },
      global: { stubs: ['StatusBadge', 'DefaultBadge'] },
    })

    const btn = wrapper.findAll('button')[0]
    await btn.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('edit')
  })

  it('emit correctly when delete button is clicked', async () => {
    const wrapper = mount(SignerRow, {
      props: { signer: mockSigner },
      global: { stubs: ['StatusBadge', 'DefaultBadge'] },
    })

    const btn = wrapper.findAll('button')[1]
    await btn.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('delete')
  })
})
