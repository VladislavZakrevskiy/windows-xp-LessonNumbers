import { Box } from '@mui/material'
import React from 'react'
import Header from '../langingsComponents/Header'
import Congratuiations from '../langingsComponents/Congratuiations'
import Feedback from '../langingsComponents/Feedback'

const Final = () => {
  return (
    <Box component={'div'} sx={{width: '100%', height: '100vh'}}>
    <Header/>
    <Box height={'89vh'} display={'grid'} gridTemplateColumns={'40% 60%'}>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Feedback/>
        </Box>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Congratuiations/>
        </Box>
    </Box>
</Box>
  )
}

export default Final