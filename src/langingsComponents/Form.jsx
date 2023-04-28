import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const nav = useNavigate()


  return (
    <Box  component={'div'}>
        <Box gap={3} display={'flex'}  justifyContent='center' alignItems = 'center' flexDirection={'column'} borderRadius={10} padding={5} >
            <Typography fontSize={20} fontFamily={'Consolas'}>Регистрация</Typography>
            <TextField label='Область'/>
            <TextField label='Город'/>
            <TextField label='Имя'/>
            <TextField label='Фамилия'/>
            <Button onClick={() => nav('/quest')} variant='contained'>Продолжить</Button>
        </Box>
    </Box>
  )
}

export default Form