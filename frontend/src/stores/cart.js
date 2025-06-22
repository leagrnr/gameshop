import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  actions: {
    addToCart(game, platform) {
      const exists = this.items.some(
        item =>
          item.id === game.id &&
          (item.selectedPlatform || '') === (platform || '')
      )
      if (!exists) {
        this.items.push({
          ...game,
          selectedPlatform: platform || null
        })
      }
    }
  }
})
