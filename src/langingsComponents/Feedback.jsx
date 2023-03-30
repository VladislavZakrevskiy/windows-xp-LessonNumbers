import { Box, Button, Rating, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Feedback = () => {
  const [value, setValue] = useState('')
  const [rate, setRate] = useState(null)

  const clear = () => { 
      setValue('')
      setRate(null)
    }

  return (
    <Box  component={'div'}>
    <Box gap={3} display={'flex'}  justifyContent='center' alignItems = 'center' flexDirection={'column'} borderRadius={10} padding={5} >
        <Typography fontSize={20} fontFamily={'Consolas'}>Отзыв</Typography>
        <TextField value={value} onChange={e => setValue(e.target.value)} label='Отзыв' multiline/>
        <Rating value={rate} onChange={(e, newValue) => setRate(newValue)} size='large'/>
        <Button onClick={clear} variant='contained'>Отправить</Button>
    </Box>
</Box>
  )
}

export default Feedback