import React from 'react'
import fileIco from '../../assets/icons/HelpIcons/WinFile.ico'
import folderIco from '../../assets/icons/HelpIcons/folder2.ico'
import { Box, Button, Paper, Typography } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { selectPlot, startStop } from '../../redux/reducers/PlotSlice'

const FileItem = ({file, setDir, mousePos}) => {
    const dispatch = useDispatch()
    const handleFileClick = () => {
        setDir(file.content)
    }

    const AlertVirus = () => {
        alert('В ДОСТУПЕ ЗАПРЕЩЕНО! Главный пользователь - virus.troyan')
        dispatch(startStop(true))
        dispatch(selectPlot('third'))

    }


    return (
        <Box
            component={'div'}
            display = 'flex'
            justifyContent={'space-between'}
            height={'5%'}
            width = {'100%'}
            onClick={file.type == 'folder' ? handleFileClick : undefined}
            onContextMenu={file.name == 'virus.troyan' ? AlertVirus : undefined}
            padding={1}
            sx={{
                '&:hover': {
                    backgroundColor: 'rgba(60,102,242,0.6)',
                }
            }}
        >
            <Box component={'div'} display='flex' gap={1} marginLeft={4} marginRight={1} justifyContent={'center'} >
                <Paper
                    component={'img'}
                    src={file.type == 'file' ? fileIco : folderIco}
                />
                <Typography
                    variant='p'
                    fontFamily={'Tahoma'}
                >
                    {file.name}
                </Typography>
            </Box>
            <Typography
                variant='p'
                fontFamily={'Tahoma'}
                sx={{
                    opacity: .2,
                    mr: 10
                }}
            >
                {file.type}
            </Typography>
        </Box>
    )
}

export default FileItem