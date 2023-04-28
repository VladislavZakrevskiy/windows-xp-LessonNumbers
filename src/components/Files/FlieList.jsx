//@ts-nocheck
import { Box, List, ListItem, Typography } from '@mui/material'
import React, { useState } from 'react'

import FileItem from './FileItem'

const FlieList = ({setDir, dir}) => {
    const [mousePos, setMousePos] = useState({x: '', y: ''})
    const handleCxtMenu = e => {
        setMousePos({x: e.clientX, y: e.clientY})
    }
    


    if(dir[0] == undefined){
        return (
            <Box
                component={'div'}
                display='flex'
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Typography
                    variant='p'
                    fontFamily={'Tahoma'}
                    color = {'rgba(0,0,0,.5)'}
                >
                    Пусто...
                </Typography>
            </Box>
            )
    }
    return (
        <List
            sx={{
                overflowY: 'scroll',
                maxHeight: '74%',
                '&::-webkit-scrollbar': {
                    display: 'none'
                }
            }}
            onMouseDown={e => handleCxtMenu(e)}
        >
            {
                dir.map((item,i)=> 
                        <ListItem key={i+100}>
                            <FileItem mousePos = {mousePos} key={i} file={item} setDir={setDir}/>
                        </ListItem>
                    )
            }
        </List>
    )
}

export default FlieList