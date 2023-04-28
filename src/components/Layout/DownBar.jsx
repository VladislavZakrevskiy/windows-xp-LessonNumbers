//@ts-nocheck
import {Box, Paper } from '@mui/material'
import React, { useState } from 'react'
import menu from '../../assets/win-bottom.png'
import button from '../../assets/start-btn.png'
import start_menu from '../../assets/start-menu.png'
import VirusItem from './VirusItem'
import Virus from './Virus'

const DownBar = () => {
    const [isMenu, setIsMenu] = useState(false)
  return (
    <Box
        component={'footer'}
        sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            width: '100%',            
        }}
    >
        <Paper
            component={'img'}
            src={menu}
            sx={{ 
                width: '100%',
                display: 'block',
                margin: 0,
            }}
        > 
        </Paper>  
        <Box
            component={'div'}
            sx={{
                position: 'fixed',
                left: 0,
                bottom: 0,
                width:'100%',
                maxWidth: 'calc(100% - 95vw)',
                cursor: 'pointer',
            }}
        >
            <Paper
                component={'img'}
                src={button}
                sx={{ 
                    width: '100%',
                    display: 'block',
                    margin: 0,
                }}
                onClick={()=> setIsMenu(!isMenu)}
            >

            </Paper>
        </Box>
        <Box
            component={'div'}
            sx={{
                position: 'fixed',
                bottom: '18px',
                left: 0,
                visibility: isMenu ? 'visible' : 'hidden'
            }}
        >
            <Paper
                component={'img'}
                src={start_menu}
                alt='menu'
            />
        </Box>
        <Virus/>
    </Box>
    
  )
}

export default DownBar