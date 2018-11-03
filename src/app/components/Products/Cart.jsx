/* @flow */
// dependencies
import React, { Fragment } from 'react'
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

type Props = {
  products: Array<{
    id: number,
    title: string,
    image: string,
    price: number,
    inventory: number,
    author: string,
    date: string
  }>
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

function Cart(props: Props) {
  const { products } = props

  return (
    <Fragment>
      <Grid container spacing={24}>
        {products &&
          products.map(product => (
            <Grid item xs={12}>
              <List>
                <ListItem key={product.id}>
                  <ListItemAvatar>
                    <Avatar>
                      <VideogameAssetIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={product.title} />
                  <ListItemSecondaryAction>
                    <IconButton color="primary" aria-label="Pagar">
                      <CreditCardIcon />
                    </IconButton>
                    <IconButton color="primary" aria-label="Eliminar">
                      <RemoveShoppingCartIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </Grid>
          ))}
      </Grid>
    </Fragment>
  )
}

export default withStyles(style)(Cart)
