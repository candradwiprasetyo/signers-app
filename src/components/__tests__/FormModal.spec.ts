import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FormModal from '@/components/FormModal.vue'
import type { Signer } from '@/types/signer'

describe('FormModal', () => {
  it('renders correctly for add data', () => {
    const wrapper = mount(FormModal, {
      props: {
        signer: null,
      },
      global: {
        stubs: {
          cleave: true,
        },
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders correctly for edit data', () => {
    const mockSigner: Signer = {
      id: '1',
      name: 'Candra',
      npwp: '756946380643000',
      statusTaxpayer: 'ACTIVE',
      signatory: 'TAXPAYER',
      defaultSignatory: true,
    }

    const wrapper = mount(FormModal, {
      props: {
        signer: mockSigner,
      },
      global: {
        stubs: {
          cleave: true,
        },
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
