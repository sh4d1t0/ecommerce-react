// @flow
// Dependencies
import { combineReducers } from 'redux'
// Containers Reducers
import shop from 'Features/shop/reducer'

// Shared Reducers
import device from './deviceReducer'

const rootReducer = combineReducers({
  shop,
  device
})

export default rootReducer
