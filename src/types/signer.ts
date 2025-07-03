export interface Signer {
  id: string
  name: string
  npwp: string
  signatory: 'TAXPAYER' | 'AUTHORIZED_REPRESENTATIVE'
  statusTaxpayer: 'ACTIVE' | 'NOT_ACTIVE'
  defaultSignatory: boolean
}
