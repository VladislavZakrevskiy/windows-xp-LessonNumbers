import { Box, IconButton } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({modal = false, setModal, children, color}) => {
    const [pressed, setPressed] = useState(false)
    const [position, setPosition] = useState({x: 0, y: 0})
    const ref = useRef()
    useEffect(() => {
        if (ref.current) {
        ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`
        }
    }, [position])
    const onMouseMove = (event) => {
        if (pressed) {
        setPosition({
            x: position.x + event.movementX,
            y: position.y + event.movementY
        })
        }
    }

  return (
    <div
        onMouseMove={ onMouseMove }
        onMouseDown={ () => setPressed(true) }
        onMouseUp={ () => setPressed(false) }
        onMouseLeave={ () => setPressed(false)}
        ref = {ref}
    >
        <Box 
            component={'div'}
            sx={{
                width: "650px",
                height: "400px",
                background: '#FFFFFF',
                color: "black",
                position: 'absolute', 
                visibility: modal ? 'visible' : 'hidden',
                backgroundColor: color || 'white'
            }}
        >
             
            <Box
                component={'div'}
                sx={{
                    minHeight: '7vh',
                    width: '100%',
                    backgroundColor: '#FFFFFF'
                }}
            >
                <IconButton onClick={()=>setModal(false)}>
                    <CloseIcon/>
                </IconButton>  
            </Box>
            {children}     
        </Box>  
         
    </div>
    
  )
}

export default Modal