import React, {useContext} from 'react'
import { Typography, Grid, ListItemText, List, ListItem} from '@mui/material'
import { passContext } from './Contexts/passContext'
const Products = [{ name: "Product 1", price: "$9.99" }, { name: "Product 2", price: "$3.45" }, { name: "Product 3", price: "$6.51" }, { name: "Product 4", price: "$14.11" }]

const OrderSummary = () => {
    const { shippingState, paymentDetail } = useContext(passContext)
  return (
      <>
          <Typography variant='h6' align='center' sx={{ mt: 5, fontWeight: 600 }}>Order Summary</Typography>
          <List>
              {
                  Products.map((product) => (
                      <ListItem sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                          <ListItemText>
                              <Typography>{product.name}</Typography>
                          </ListItemText>
                          <Typography>{product.price}</Typography>
                      </ListItem>
                  ))
              }
              <ListItem sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <ListItemText>
                      <Typography>Shipping</Typography>
                  </ListItemText>
                  <Typography>Free</Typography>
              </ListItem>
              <ListItem sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <ListItemText>
                      <Typography>Total</Typography>
                  </ListItemText>
                  <Typography>$34.06</Typography>
              </ListItem>
          </List>
          <Grid container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', ml: 2, mt: 3 }}>
              <Grid item xs={6}>
                  <Typography sx={{ fontWeight: 600 }}>Shipping</Typography>
                  {/* <Typography>John Smith</Typography> */}
                  <Typography>{shippingState.firstName} {shippingState.lastName}</Typography>
                  {/* <Typography>1 MUI Drive, Reactville, Anytown, 99999, USA</Typography> */}
                  <Typography>{shippingState.addressLine1} {shippingState.addressLine2}, {shippingState.city}, {shippingState.state}, {shippingState.zipCode}, {shippingState.country}</Typography>
              </Grid>
              <Grid item xs={6}>
                  <Typography sx={{ fontWeight: 600 }}>Payment details</Typography>
                  <Grid container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                      <Grid item xs={6}>
                          <Typography>Card type</Typography>
                          <Typography>Card holder</Typography>
                          <Typography>Card number</Typography>
                          <Typography>Expiry date</Typography>
                      </Grid>
                      <Grid item xs={6}>
                          {/* <Typography>Visa</Typography>
                          <Typography>Mr John Smith</Typography>
                          <Typography>xxxx-xxxx-xxxx-1234</Typography>
                          <Typography>04/2024</Typography> */}
                          <Typography>Visa</Typography>
                          <Typography>{paymentDetail.cardName}</Typography>
                          <Typography>{paymentDetail.cardNumber}</Typography>
                          <Typography>{paymentDetail.expiryDate}</Typography>
                      </Grid>
                  </Grid>
              </Grid>
          </Grid>
      </>
  )
}

export default OrderSummary