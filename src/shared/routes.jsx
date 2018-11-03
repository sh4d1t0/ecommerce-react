/* @flow */
// components
import Cart from 'Components/Products/Cart'
// views
import Shop from 'Views/Shop'

const routes = [
  {
    path: '/',
    component: Shop,
    exact: true
  },
  {
    path: '/shop',
    component: Shop
  },
  {
    path: '/cart',
    component: Cart
  }
]

export default routes
