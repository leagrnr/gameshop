import { describe, it, expect } from 'vitest'
import { calculateCartTotal } from '@/utils/cart'


describe('calculateCartTotal', () => {
  it('calcule le total correctement', () => {
    const total = calculateCartTotal([
      { price: '10.00' },
      { price: '25.50' },
      { price: '4.49' }
    ])
    expect(total).toBe('39.99')
  })

  it('retourne 0.00 pour un panier vide', () => {
    expect(calculateCartTotal([])).toBe('0.00')
  })
})
