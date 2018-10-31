/* @flow */
// dependencies
import React from 'react'
import timeAgo from 'node-time-ago'
// utils
import isFirstRender from 'SharedUtils/data'
// styles
import styles from './Products.scss'

type Props = {
  products: Array<{
    id: number,
    title: string,
    author: string,
    date: string
  }>
}

function Products(props: Props) {
  const { products } = props

  if (isFirstRender(products)) {
    return null
  }

  return (
    <div className={styles.products}>
      <div className={styles.header}>
        <h1>Productos</h1>
      </div>

      {products &&
        products.map(product => (
          <div key={product.id} className={styles.products}>
            <p>
              {product.id}
              {' - '}
              {product.title}
              {' by '}
              {product.author}
            </p>
            <p>{timeAgo(product.date)}</p>
          </div>
        ))}
    </div>
  )
}

export default Products
