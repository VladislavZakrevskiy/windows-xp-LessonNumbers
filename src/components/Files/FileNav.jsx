import { Box, IconButton } from '@mui/material'
import React from 'react'
import ArrowBack from '@mui/icons-material/ArrowBack'

const FileNav = ({setDir, path, setPath}) => {
    const backDir = () => {
        let copyPath = path
        copyPath.pop()
        setPath(copyPath)
        setDir(copyPath[copyPath.length - 1])
    }


    return (
        <Box
            onClick={backDir}
            component={'div'}
            sx={{
                minHeight: '7vh',
                width: '100%'
            }}
        >
            <IconButton>
                <ArrowBack/>
            </IconButton>
        </Box>
    )
}

export default FileNav