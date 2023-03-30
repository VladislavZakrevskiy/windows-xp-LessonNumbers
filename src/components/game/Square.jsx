import { Box } from '@mui/material';
import React from 'react'

function Square({ value, onSquareClick }) {
    return (
      <Box 
        component={'div'}
        sx = {{
            fontFamily: 'Tahoma',
            background: '#fff',
            border: '1px solid #999',
            float: 'left',
            fontSize: '48px',
            fontWeight: 'bold',
            lineHeight: '34px',
            height: 80,
            padding: 0,
            display: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            width: 80,
        }} 
        onClick={onSquareClick}>
            {value}
      </Box>
    );
  }

export default Square