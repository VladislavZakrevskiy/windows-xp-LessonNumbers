import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import xp from '../assets/interfaceWinXp.jpeg'
import Desc from '../langingsComponents/Desc'
import Form from '../langingsComponents/Form'
import Header from '../langingsComponents/Header'

const Start = () => {
  return (
    <Box component={'div'} sx={{width: '100%', height: '100vh'}}>
        <Header/>
        <Box height={'89vh'} display={'grid'} gridTemplateColumns={'40% 60%'}>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Form/>
            </Box>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Desc/>
            </Box>
        </Box>
    </Box>
  )
}

export default Start