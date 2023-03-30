import { Box, List } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PlotModalItem from './PlotModalItem'
import { css, keyframes } from "@emotion/react";
import { useSelector } from 'react-redux';


const animation = keyframes`
  0%, 99% {
    height: 0px;
  }
  100% {
    min-height: 150px;
  }
`;


const PlotModal = ({phrases = [], callback}) => {
  const {flag} = useSelector(state => state.plotSlice)

  return (
    <List
        component={'div'}
        sx={{
          padding:2,
          position: 'absolute',
          right: 0,
          top: 0,
          flexDirection: 'column',
          gap: 1.5,
          display: flag ? 'flex' : 'none'
        }}
    >
        { 
          phrases.map((phrase, i) => 
             <Box 
              component={'div'}
              sx = {{
                animation: `${animation} ${i*2 + 1}s forwards`,
                minHeight: 0, 
                backgroundColor: 'white',
                overflow: 'hidden',
                borderRadius: 5,
                maxWidth: 250
              }}
             >
                <PlotModalItem phrase={phrase} isLast={i == phrases.length - 1} callback={callback} /> 
             </Box>
          )
        }
    </List> 
  )
}

export default PlotModal