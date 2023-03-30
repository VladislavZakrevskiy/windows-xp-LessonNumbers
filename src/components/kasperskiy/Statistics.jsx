import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Statistics = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} padding={2} gap={2}>
        <Typography fontFamily={'Tahoma'} border={'2px solid red'} borderRadius={6} padding={2} fontSize={22} fontWeight={900} color={'red'}>Компьютер не защищен!</Typography>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={1}>
            <Typography mb={2} borderBottom={'2px solid red'} borderRadius={1.5} fontSize={25} color={'red'} fontWeight={900}>Опасности:</Typography>
            <Typography fontFamily={'Tahoma'} fontWeight={550} fontSize={17}>virus.troyan.bad</Typography>
            <Typography fontFamily={'Tahoma'} fontWeight={550} fontSize={17}>virus.troyan.exe</Typography>
            <Typography fontFamily={'Tahoma'} fontWeight={550} fontSize={17}>virus.troyan.dll</Typography>
            <Typography fontFamily={'Tahoma'} fontWeight={550} fontSize={17}>virus.troyan.vir</Typography>
        </Box>

    </Box>
  )
}

export default Statistics