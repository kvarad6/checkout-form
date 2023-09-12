import React, { useContext } from 'react'
import { Box, Typography, TextField, FormGroup, FormControlLabel, Checkbox, Grid } from '@mui/material'
import { passContext } from './Contexts/passContext'
const PaymentDetails = () => {
    // const [paymentDetail, setPaymentDetail] = React.useState({
    //     cardName:"", cardNumber:"", expiryDate:"", cvv:""
    // })

    const { paymentDetail, setPaymentDetail, errors } = useContext(passContext)

    function handleCardInput(event) {
        setPaymentDetail(prevState => {
            const { name, value } = event.target;
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    return (
        <>
            <Typography variant='h6' align='center' sx={{ mt: 5, fontWeight: 600 }}>Payment Method</Typography>
            <Box>
                <Grid container rowSpacing={3} columnSpacing={3}>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="standard-search"
                            label="Name on card"
                            name="cardName"
                            type="search"
                            variant="standard"
                            value={paymentDetail.cardName}
                            onChange={handleCardInput}
                        />
                        <Typography>
                            {(paymentDetail.cardName).length === 0 && errors.cardName && <span style={{ color: "red" }}>*{errors.cardName}</span>}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="standard-search"
                            label="Card number"
                            name="cardNumber"
                            type="search"
                            variant="standard"
                            value={paymentDetail.cardNumber}
                            onChange={handleCardInput}
                        />
                        <Typography>
                            {(paymentDetail.cardNumber).length === 0 && errors.cardNumber && <span style={{ color: "red" }}>*{errors.cardNumber}</span>}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="standard-search"
                            label="Expiry date (MM/YY)"
                            name="expiryDate"
                            type="search"
                            variant="standard"
                            value={paymentDetail.expiryDate}
                            onChange={handleCardInput}
                        />
                        <Typography>
                            {(paymentDetail.expiryDate).length === 0 && errors.expiryDate && <span style={{ color: "red" }}>*{errors.expiryDate}</span>}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="standard-search"
                            helperText="Last three digits on signature strip"
                            label="CVV"
                            name="cvv"
                            type="password"
                            variant="standard"
                            value={PaymentDetails.cvv}
                            onChange={handleCardInput}
                        />
                        <Typography>
                            {(paymentDetail.cvv).length === 0 && errors.cvv && <span style={{ color: "red" }}>*{errors.cvv}</span>}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 4 }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Remember credit card details for next time" />
                        </FormGroup>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default PaymentDetails