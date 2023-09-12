import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'

const Header = () => {
  return (
    <React.Fragment>
          <AppBar position='absolute' elevation={0} sx={{ backgroundColor: '#E5EAF2'}}>
            <Toolbar>
                <Typography variant = 'h6' sx={{color: 'black', fontWeight: 550}}>Company name</Typography>
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default Header