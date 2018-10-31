// @flow
// depencendies
import express from 'express'
// data
import products from './data/products'

// express router
const router = express.Router()

router.get('/shop/products', (req, res) => res.json(products))

export default router
