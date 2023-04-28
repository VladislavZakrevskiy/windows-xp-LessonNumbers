import { Box, CircularProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {keyframes} from '@emotion/react'
import { useDispatch } from 'react-redux'
import { selectPlot, startStop } from '../../redux/reducers/PlotSlice'

const gradient  = keyframes`
    0% {
        background-position: 80% 0%;
    }
    50% {
        background-position: 20% 100%;
    }
    100% {
        background-position: 80% 0%;
    }
`

const Hub = () => {
    const [isReady, setIsReady] = useState(false)
    const dispatch = useDispatch()
    const handleKasp = () => {
        dispatch(startStop(true))
        dispatch(selectPlot('fifth'))
        setIsReady(true)
        setTimeout(()=>{
            dispatch(startStop(true))
            dispatch(selectPlot('sixth'))
            setIsReady(false)
        }, 30000)
    }



    return (
        <>
            <Box display={'flex'} flexDirection={'column'} padding={2} justifyContent='start' alignItems={'center'} gap={5} > 
                <Typography fontFamily={'Tahoma'} fontWeight={900} fontSize={40} color="#00ff1a">Kasperskiy</Typography>
                <Box height={'60%'} width={'60%'} borderRadius={'100%'} sx={{   
                    background: 'linear-gradient(149deg, #00ff1a 0%, #40ff53 42%, #00b012 72%, #00780c 100%)', 
                    animation: `${gradient } 1s infinite linear`, 
                    backgroundSize: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#003005',
                    fontSize: 24,
                    fontWeight: 'bold',
                    transition: '800ms',
                    '&:hover': {
                        transform: 'scale(1.1)',
                        transition: '800ms'
                    },
                    '&:active':{
                        transform: 'scale(.9)',
                        transition: '300ms',
                    },
                    fontFamily: 'Tahoma'
                    }}
                    onClick={handleKasp}
                >
                Проверка
                </Box>
            </Box>
            <Box sx={{
                background: 'rgba(0,0,0, .9)',
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                display: isReady ? 'flex' : 'none',
                justifyContent: 'center',
                alignItems: 'center'

            }}>
                <CircularProgress sx={{

                    }}  size={100}/>
            </Box>
            
        </>
    )
}

export default Hub