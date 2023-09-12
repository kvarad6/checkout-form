import { Paper } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box } from '@mui/system'
import React from 'react'
import LinearStepper from './LinearStepper';


const Form = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container component={Box}
                sx={{ width: "50%" }}>
                <Paper component={Box}
                    p={7} m={7} mt={10}
                >
                    <LinearStepper />
                </ Paper>
            </Container>
        </React.Fragment>
    )
}

export default Form