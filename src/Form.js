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
                sx={{
                    width: { xs: 350, md: 600, lg: 700 }, height: { xs: 650, md: 700, lg: 700 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', mt: 6, borderColor: 'black', border: '1px solid black'}}>
                <Paper component={Box} variant="outlined"
                    sx={{ m: { xs: 1, md: 8, lg: 10 }, p: { xs: 2, md: 2, lg: 2 }, width: { xs: 300, md: 400, lg: 500 }, bgcolor: '#77aabd'}}
                >
                    <LinearStepper />
                </ Paper>
            </Container>
        </React.Fragment>
    )
}

export default Form