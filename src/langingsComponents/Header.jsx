import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <AppBar position='static'>
        <Toolbar sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Typography flexGrow={1} fontFamily={'Consolas'} fontSize={32}>
                Lesson Numbers
            </Typography>
            <Typography fontFamily={'Consolas'}>
                //VladZakrevsky
            </Typography>
        </Toolbar>   
    </AppBar>
  )
}

export default Header