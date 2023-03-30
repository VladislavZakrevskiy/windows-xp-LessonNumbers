import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import xp from '../assets/interfaceWinXp.jpeg'

const Desc = () => {
  return (
    <Box display={'flex'} justifyContent='center' alignItems = 'center' flexDirection={'column'} gap = {2}
    >
        <Paper component={'img'} src={xp} width={'90%'} />
        <Typography fontFamily={'Consolas'} fontSize={20}>Узнайте больше о <Typography fontFamily={'Consolas'} fontSize={20} color={'Highlight'} display={'inline'}>кибербезопасности</Typography> в практическом пособии</Typography>
    </Box>
  )
}

export default Desc