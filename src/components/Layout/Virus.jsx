//@ts-nocheck
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import VirusItem from './VirusItem'

const Virus = () => {
    const [virus, setVirus] = useState (Array(1000).fill(null))
    const { plot } = useSelector( state => state.plotSlice)
    const[isShown, setIsShown] = useState(false)
    useEffect(()=>{
        const timer = setTimeout(()=> setIsShown(true), 7000)
        return () => clearTimeout(timer)
    },[])

    if(plot == 'first') {
        

        return isShown ? (
            <Box sx ={{position: 'absolute', width: '100%', height: '100%'}}>
                {
                    virus.map((item, i) => 
                        <VirusItem key={i} wait={(i)* 100} heigth={Math.random()} width={Math.random()}/>
                    )
                }
            </Box>
          ) : null
    }
    return null
}

export default Virus