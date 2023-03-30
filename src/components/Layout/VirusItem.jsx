import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'

const VirusItem = ({wait, heigth, width}) => {
    const [isShown, setIsShown] = useState(false)

    useEffect(()=>{
        const timer1 = setTimeout(() => setIsShown(true), wait)
        const timer2 = setTimeout(() => setIsShown(false), wait + 1500)
        return () => { 
            clearTimeout(timer1)
            clearTimeout(timer2)
        }
    }, [wait])

    return isShown ? 
        <Box sx={{position: 'absolute', left: width * window.innerWidth, bottom: heigth * window.innerHeight , width: 150, height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'white', padding: 1, borderRadius: 2, border: '2px solid black'}}>
            Я ВИРУС! АХАХАХАХАХАХА
        </Box> : null
}

export default VirusItem