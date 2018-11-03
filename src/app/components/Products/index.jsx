/* @flow */
// dependencies
import React from 'react'
import timeAgo from 'node-time-ago'
import Button from '@material-ui/core/Button'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
// utils
import isFirstRender from 'SharedUtils/data'
// styles
import styles from './Products.scss'

type Props = {
  products: Array<{
    id: number,
    title: string,
    image: string,
    price: number,
    inventory: number,
    author: string,
    date: string
  }>,
  classes: any
}

// Material-UI JSStyles
const style = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  }
})

function Products(props: Props) {
  const { classes, products } = props

  if (isFirstRender(products)) {
    return null
  }

  return (
    <Grid container spacing={24}>
      {products &&
        products.map(product => (
          <Grid item xs={6} md={3}>
            <div key={product.id} className={styles.products}>
              <p>{product.title}</p>
              <p>
                <img
                  src={product.image}
                  alt={product.title}
                  width={200}
                  height={150}
                />
              </p>
              <p>{product.price}</p>
              <p>
                {product.author}
                {' - '}
                {timeAgo(product.date)}
              </p>
              <p>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  disabled={product.inventory > 0 ? '' : 'disabled'}
                >
                  <AddShoppingCartIcon className={classes.rightIcon} />
                  {product.inventory > 0 ? 'Agregar al carrito' : 'Vendido'}
                </Button>
              </p>
            </div>
          </Grid>
        ))}
    </Grid>
  )
}

export default withStyles(style)(Products)
