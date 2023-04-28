import Icon  from './Icon'
import React, { useEffect } from 'react'
import { useState } from 'react'
import icons from './MainImagesProps'
import { Box, Grid } from '@mui/material'


const IconList = () => {
    const length = Object.keys(icons).length
    const [ico, setIco] = useState([])
    const [icoNames, setIcoNames] = useState([])
    useEffect(()=>{
        setIco([])
        setIcoNames([])
        const entries = Object.entries(icons)
        for(let i = 0;i< length;i++){
            setIco(prev => [...prev, entries[i][1]])
            setIcoNames(prev => [...prev, entries[i][0]])
        }
    },[])
  return (
    <Box
        component={"main"}
        sx={{
            width: '50%',
            height: '50%',
            margin: 2,
        }}
        
    >
        <Grid container 
            columnSpacing={{xs:1, cm: 2, md: 3}}
            gridTemplateColumns={'repeat(6, 1fr)'}
            gridTemplateRows={'repeat(5, 1fr)'}
        >
            {
                ico.map((item , i) => 
                    <Grid key={i} item xs={2} md={2}>
                        <Icon
                            image={item}
                            title={icoNames[i]}
                        />
                    </Grid>
                    
                )
            }
        </Grid>
    </Box>
  )
}

export default IconList