import { defineStore } from 'pinia'
import axios from 'axios'
import apiEnv from '@/api/api.config'

const { getPrice } = apiEnv

console.log('apiEnv', apiEnv)

export const useCryptoStore = defineStore('cryptoStore', {
  state: () => ({ usersApi: 'cf1d6063535e584f61467cbc9069825409929cf2d58b2c909aeec1ce8017dd1c' }),
  getters: {},
  actions: {
    async getCryptoData(currentTicker) {
      const response = await axios.get(
        `${getPrice}?fsym=${currentTicker}&tsyms=EUR&api_key=${this.$state.usersApi}`
      )
      return response.data
    }
  }
})
