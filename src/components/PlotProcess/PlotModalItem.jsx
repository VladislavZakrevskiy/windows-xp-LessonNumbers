//@ts-nocheck
import { Avatar, Box, Button, ListItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import chatGPT from '../../assets/chatgpt.jpg'

const PlotModalItem = ({phrase, callback, isLast = false}) => {
  return (
    <ListItem 
        sx={{
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column'
          }}
    >
        <Box
          component = {'div'}
          display='flex'
          flexDirection={'row'}
          justifyContent={'center'}
          alignContent={"center"}
          padding={1}
        >
          <Avatar sx={{mr: 2}} src={chatGPT} component={'image'}/>
          <Typography sx={{
            display: 'flex',
            alignItems: 'center'
          }} fontFamily={'Tahoma'}> Помощник </Typography>
        </Box>
        <Box sx={{padding: 1, display: 'flex', flexDirection: 'column', gap: 1, justifyContent: 'center'}}>
          <Typography  sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: 14
          }}>
            {phrase}
          </Typography>
          {
            isLast ? 
            <Button onClick= {callback}>
              Продолжить
            </Button> : 
            false
          }
        </Box>
    </ListItem>
  )
}

export default PlotModalItem