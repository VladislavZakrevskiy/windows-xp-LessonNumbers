import { Box } from '@mui/material'
import React from 'react'
import Hub from './Hub'
import Statistics from './Statistics'

const Kasperskiy = () => {
  return (
    <Box display={'grid'} gridTemplateColumns={'1fr 1fr'} >
        <Hub/>
        <Statistics/>
    </Box>
  )
}

export default Kasperskiy