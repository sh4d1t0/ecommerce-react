/* @flow */
// API
import shopApi from './api'

// action types
import FETCH_PRODUCTS from './actionTypes'

const fetchProducts = (fetchingFrom: any, query: any) => (
  dispatch: any
): string => {
  const requestProducts = () => ({
    type: FETCH_PRODUCTS.request()
  })

  const receivedProducts = products => ({
    type: FETCH_PRODUCTS.success(),
    payload: products
  })

  dispatch(requestProducts())

  return shopApi
    .getAllProducts(query, fetchingFrom)
    .then(products => dispatch(receivedProducts(products)))
}

export default fetchProducts
