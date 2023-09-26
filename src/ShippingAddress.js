import React, { useContext } from 'react'
import { Typography, TextField, FormGroup, FormControlLabel, Checkbox, Grid, Box } from '@mui/material'
import { passContext } from './Contexts/passContext'


const ShippingAddress = () => {
    // const [shippingState, setShippingState] = React.useState({
    //     firstName: "", lastName: "", addressLine1: "", addressLine2: "", city: "", state: "", zipCode: "", country: ""
    // })
    const { shippingState, setShippingState, errors } = useContext(passContext)

    function handleUserInput(event) {
        setShippingState(prevState => {
            const { name, value } = event.target;
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    return (
        <>
            <Box>
                <Typography align='center' sx={{ mt: 5, fontWeight: 600, fontSize: { xs: 15, md: 18, lg: 20 } }}>Shipping Address</Typography>
                <Grid container sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="standard-search"
                            label="First Name"
                            name="firstName"
                            type="search"
                            variant="standard"
                            value={shippingState.firstName}
                            onChange={handleUserInput}
                        />
                        <Typography>
                            {(shippingState.firstName).length === 0 && errors.firstName && <span style={{ color: "red" }}>*{errors.firstName}</span>}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="standard-search"
                            label="Last Name"
                            name="lastName"
                            type="search"
                            variant="standard"
                            value={shippingState.lastName}
                            onChange={handleUserInput}
                        />
                        <Typography>
                            {(shippingState.lastName).length === 0 && errors.lastName && <span style={{ color: "red" }}>*{errors.lastName}</span>}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            id="standard-search"
                            label="Address line 1"
                            name="addressLine1"
                            type="search"
                            variant="standard"
                            value={shippingState.addressLine1}
                            onChange={handleUserInput}
                        />
                        <Typography>
                            {(shippingState.addressLine1).length === 0 && errors.addressLine1 && <span style={{ color: "red" }}>*{errors.addressLine1}</span>}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="standard-search"
                            label="Address line 2"
                            name="addressLine2"
                            type="search"
                            variant="standard"
                            value={shippingState.addressLine2}
                            onChange={handleUserInput}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="standard-search"
                            label="City"
                            name="city"
                            type="search"
                            variant="standard"
                            value={shippingState.city}
                            onChange={handleUserInput}
                        />
                        <Typography>
                            {(shippingState.city).length === 0 && errors.city && <span style={{ color: "red" }}>*{errors.city}</span>}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="standard-search"
                            label="State/Province/Region"
                            name="state"
                            type="search"
                            variant="standard"
                            value={shippingState.state}
                            onChange={handleUserInput}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="standard-search"
                            label="Zip / Postal Code"
                            name="zipCode"
                            type="search"
                            variant="standard"
                            value={shippingState.zipCode}
                            onChange={handleUserInput}
                        />
                        <Typography>
                            {(shippingState.zipCode).length === 0 && errors.zipCode && <span style={{ color: "red" }}>*{errors.zipCode}</span>}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="standard-search"
                            label="Country"
                            name="country"
                            type="search"
                            variant="standard"
                            value={shippingState.country}
                            onChange={handleUserInput}
                        />
                        <Typography>
                            {(shippingState.country).length === 0 && errors.country && <span style={{ color: "red" }}>*{errors.country}</span>}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 4 }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Use this address for payment details" />
                        </FormGroup>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default ShippingAddress