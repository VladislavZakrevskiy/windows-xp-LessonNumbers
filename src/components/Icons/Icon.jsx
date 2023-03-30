import { Box, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import Modal from '../Modal'
import ContentIcons from './ContentIcons'

const Icon = ({image, title}) => {
    const [modal, setModal] = useState(false)
    return (
        <>
        <Box
            onClick={()=>setModal(true)}
            component = 'div'
            sx={{
                '&:hover': {
                    backgroundColor: 'rgba(60,102,242,0.6)',
                },
                padding: 4,
                zIndex: 1
            }}
        >
            <Box
                component={'div'}
                display='flex'
                flexDirection={'column'}
                justifyContent = 'center'
                alignItems={'center'}
            >
                <Paper
                    component = {'img'}
                    src={image}
                    sx={{
                        background: 'inherit',
                        boxShadow: 'none',
                        width: '4vh'
                    }}
                />
                <Typography
                    variant='inherit'
                    fontFamily={`Tahoma`}
                    fontSize={13}
                >
                    {title}
                </Typography>
            </Box>
        </Box>
        <Modal color={title === 'cmd.exe' ? 'black' : undefined} setModal={setModal} modal={modal}>
                <ContentIcons title={title}/>
        </Modal>
        </>
    )
}

export default Icon