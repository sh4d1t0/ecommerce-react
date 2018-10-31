/* @flow */
// Action Types
import FETCH_PRODUCTS from './actionTypes'

const initialState = {
  products: []
}

export default function shopReducer(
  state: any = initialState,
  action: any
): any {
  switch (action.type) {
    case FETCH_PRODUCTS.success(): {
      return { ...state, products: action.payload }
    }

    default:
      return state
  }
}
