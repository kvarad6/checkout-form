import React, { useEffect } from 'react'
import { Step, Stepper, StepLabel, Typography, Box, Button } from '@mui/material'
import { FormControl } from '@mui/base';
import ShippingAddress from './ShippingAddress';
import PaymentDetails from './PaymentDetails';
import OrderSummary from './OrderSummary';
import { passContext } from './Contexts/passContext'


function getStepContent(step) {
    switch (step) {
        case 0:
            return <ShippingAddress />;
        case 1:
            return <PaymentDetails />;
        case 2:
            return <OrderSummary />
        default:
            return (
                <>
                    <Typography>Unknown State</Typography>
                </>
            )
    }
}

const LinearStepper = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = ['Shipping address', 'Payment details', 'Review your order'];

    const [shippingState, setShippingState] = React.useState({
        firstName: "", lastName: "", addressLine1: "", addressLine2: "", city: "", state: "", zipCode: "", country: ""
    });

    const [paymentDetail, setPaymentDetail] = React.useState({
        cardName: "", cardNumber: "", expiryDate: "", cvv: ""
    });

    const [errors, setErrors] = React.useState({})

    const handleNext = () => {
        const validationError = {}
        if (activeStep === 0) {
            let flag = 0;
            if (!shippingState.firstName.trim()) {
                validationError.firstName = "First name required";
                setErrors(validationError)
                flag = 1;
            }
            if (!shippingState.lastName.trim()) {
                validationError.lastName = "Last name required";
                setErrors(validationError)
                flag = 1;
            }
            if (!shippingState.addressLine1.trim()) {
                validationError.addressLine1 = "Address is required";
                setErrors(validationError)
                flag = 1;
            }
            if (!shippingState.city.trim()) {
                validationError.city = "City is required";
                setErrors(validationError)
                flag = 1;
            }
            if (!shippingState.zipCode.trim()) {
                validationError.zipCode = "Zip Code is required";
                setErrors(validationError)
                flag = 1;
            }
            if (!shippingState.country.trim()) {
                validationError.country = "Country is required";
                setErrors(validationError)
                flag = 1;
            }
            if (flag === 1) {
                return;
            }
        }
        else if (activeStep === 1) {
            let flag = 0;
            if (!paymentDetail.cardName.trim()) {
                validationError.cardName = "Card name is required";
                setErrors(validationError)
                flag = 1;
            }
            if (!paymentDetail.cardNumber.trim()) {
                validationError.cardNumber = "Card number is required";
                setErrors(validationError)
                flag = 1;
            }
            if (!paymentDetail.expiryDate.trim()) {
                validationError.expiryDate = "Expiry date is required";
                setErrors(validationError)
                flag = 1;
            }
            if (!paymentDetail.cvv.trim()) {
                validationError.cvv = "Expiry date is required";
                setErrors(validationError)
                flag = 1;
            }
            if (flag === 1) {
                return;
            }
        }
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    useEffect(() => {
        console.log("Errors changed: ", errors);
    }, [errors])

    return (
        <Box>
            <Typography align='center' sx={{ fontSize: { xs: 20, md: 30, lg: 40 }, mb: 3 }}>Checkout</Typography>
            <Stepper activeStep={activeStep} alternativeLabel>
                {
                    steps.map((step, index) => {
                        return (
                            <Step >
                                <StepLabel>
                                    <Typography sx={{ fontSize: { xs: 11, md: 12, lg: 13 } }}>
                                        {step}
                                    </Typography>
                                </StepLabel>
                            </Step>
                        )
                    })
                }
            </Stepper>
            {
                activeStep === 3 ? (
                    <>
                        <Typography sx={{ mt: 5, color: 'rgb(0, 127, 255)', fontSize: 25 }}>Thank you for your order.</Typography>
                        <Typography sx={{ fontWeight: 600 }}>Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your order has shipped.</Typography>
                    </>
                ) : (
                    <>
                        <FormControl>
                            <passContext.Provider value={{ shippingState, setShippingState, paymentDetail, setPaymentDetail, errors }}>{getStepContent(activeStep)}</passContext.Provider>
                        </FormControl>
                        <Box sx={{ display: 'flex', flexDirection: 'row-reverse', mt: 4, gap: 2 }}>
                            <Button
                                variant="contained"
                                color='primary'
                                onClick={handleNext}>
                                {activeStep === 2 ? "Place order" : "Next"}

                            </Button>
                            <Button
                                variant="contained"
                                onClick={handleBack}
                                disabled={activeStep === 0}>Back</Button>
                        </Box>
                    </>
                )
            }
        </Box >
    )
}

export default LinearStepper