import { Box, Typography } from '@mui/material'
import React from 'react'
import Console from './Console'

const Cmd = () => {
  return (
    <>
        <Box
            component={'div'}
            sx={{
                fontFamily: 'Consolas',
                backgroundColor: '#000000',
                color: '#FFFFFF',
                padding: 1
            }}
        >
            <Typography
                variant='subtitle2'
                fontFamily={'Consolas'}
            >
                Microsoft Windows [Version 10.0.19044.2728]
            </Typography>
            <Typography
                variant='subtitle2'
                fontFamily={'Consolas'}
            >
                (c) Корпорация Майкрософт (Microsoft Corporation). Все права защищены.
            </Typography>
        </Box>
        <Console/>
    </>
  )
}

export default Cmd