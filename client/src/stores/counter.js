import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import Axios from 'axios'

const BASE_URL = "http://localhost:3000"

export const rootStore = defineStore('root', {
  state: () =>
  {
    {
      return {
        menuDatas: [],
        locationDatas: [],
        cartData: {}
      }
    }
  },
  actions: {
    async getMenuData()
    {
      try
      {
        const { data } = await Axios.get(BASE_URL + '/menus');
        this.menuDatas = data;
      } catch (error)
      {
        console.log(error);
      }
    },
    async getLocationsData()
    {
      try
      {
        const { data } = await Axios.get(BASE_URL + '/locations');
        this.locationDatas = data;
      }
      catch
      {
        console.log(error);
      }
    },
    async getCartData(id)
    {
      try
      {
        const { data } = await Axios.get(BASE_URL + '/cart/' + id)
        this.cartData = data;
      } catch (error)
      {
        console.log(error);
      }
    },

  }
})
