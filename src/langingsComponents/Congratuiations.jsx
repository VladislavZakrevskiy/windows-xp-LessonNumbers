import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import xp from '../assets/windows-xp.jpg'

const Congratuiations = () => {
  return (
    <Box display={'flex'} justifyContent='center' alignItems = 'center' flexDirection={'column'} gap = {2}
    >
        <Paper component={'img'} src={xp} width={'90%'} />
        <Typography fontFamily={'Consolas'} fontSize={20}>Спасибо, что прошли мой тест для исследования по кибербезопасности</Typography>
    </Box>
  )
}

export default Congratuiations