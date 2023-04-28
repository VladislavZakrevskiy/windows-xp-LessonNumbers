import { Box, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { C_Tree } from '../../mainTree'
import { selectPlot, startStop } from '../../redux/reducers/PlotSlice'
import { findNodeInDir, findNodeName } from '../Files/FileService'

const Console = () => {
    const [lines, setLines] = useState([''])
    const [value, setValue] = useState('')
    const [currentTree, setCurrentTree] = useState(C_Tree)
    const [label, setLabel] = useState('C:/')
    const [isVal, setIsVal] = useState(false)
    const [beforeFlag, setFlag] = useState(false)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(isVal && beforeFlag){
            setLabel(prev => prev + currentTree?.name + `/`)
        }
    },[currentTree])

    const onKeyPress = e => {
        if (e.charCode == 13) {
            setLines([...lines, `${label} ${value}`])
            if(value.includes('cls')){
                setLines([])
            }
            if(value.includes('cd')){
                const dir = value.split(' ')
                if(dir[1] == '..'){
                    const tree = findNodeName(C_Tree, currentTree.prev)
                    setCurrentTree(tree)
                    setLabel(prev => {
                        const before = prev.split('/')
                        if(before[before.length - 1] == ''){
                            before.pop()
                        }
                        before.pop()
                        before.pop()
                        return before.join('/') 
                    }) 
                }
                else {
                    if(findNodeName(C_Tree, dir[1])){
                        const tree = findNodeInDir(currentTree, dir[1])
                        if(tree !== null && tree !== undefined) {
                            setIsVal(true)
                            setFlag(true)
                            setCurrentTree(tree)
                            setFlag(true)
                        }
                        else {
                            setLines(['ERROR ERROR ERROR NOT EXIST 2'])                            
                            setIsVal(false)
                        }
                    }
                    else {
                        setLines(['ERROR ERROR ERROR NOT EXIST 1'])
                        setIsVal(false)
                    }
                }
            }
            if(value.includes('rm')){
                const dir = value.split(' ')
                if(dir[1] == 'virus.troyan' && currentTree.name === 'virus.troyan'){
                    setLines(['!!!virus.troyan allow to delete himself!!!'])
                    dispatch(startStop(true))
                    dispatch(selectPlot('fourth'))
                }
                else {
                    setLines(['NO LAWS OF ADMIN'])
                }
            }
            setValue('')
        }
    }

    return (
        <>
            <Box
                component={"div"}
                sx={{
                    backgroundColor: 'black',
                    padding: 1
                }}
            >
                {
                    lines.map((line, i) =>
                        <Typography sx={{
                            wordWrap: 'break-word'
                        }} 
                            fontFamily={'Consolas'} 
                            key={i} 
                            color={'#FFFFFF'}>
                            {line}
                        </Typography>
                    )
                }
            </Box>
            <Box
                component={'div'}
                sx={{
                    color: '#FFFFFF',
                    backgroundColor: '#000000',
                    padding:0
                }}
            >
                <TextField
                    value={ value}
                    onChange={e=>setValue(e.target.value)}
                    onKeyPress={e => onKeyPress(e)}
                    sx={{
                        border: 'none',
                        "& fieldset": { border: 'none' }
                    }}
                    variant='outlined'
                    fullWidth
                    InputProps={{
                        style: {
                            color: 'white',
                            border: 'none',
                            fontFamily: 'Consolas'
                        },
                        startAdornment: <InputAdornment style={{color: 'white', fontFamily: 'Consolas'}} position="start"> {label }</InputAdornment>
                    }}
                />
            </Box>
        </>
        
    )
}

export default Console