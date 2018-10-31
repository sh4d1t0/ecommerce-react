/* @flow */
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
  }
]

export default routes
