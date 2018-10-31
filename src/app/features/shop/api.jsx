/* @flow */
// Utils
import { apiFetch } from 'SharedUtils/api'
// Constants
import API from './constants'

class ShopApi {
  static getAllProducts(query: any = {}, fetchingFrom: string = 'client'): any {
    return apiFetch(API.SHOP.PRODUCTS, { fetchingFrom }, query)
  }
}

export default ShopApi
