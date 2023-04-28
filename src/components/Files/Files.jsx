import React, { useEffect } from 'react'
import FileNav from './FileNav'
import FileList from './FlieList'
import { useState } from 'react'
import { fileSystem } from '../../fileSystem'

const Files = () => {
    const [dir, setDir] = useState([])
    const [path, setPath] = useState([])
    useEffect(()=>{
        setDir(fileSystem)
    },[])
    useEffect(()=>{
        setPath(prev => [...prev, dir])
    },[dir])

    return (
        <>
            <FileNav path={path} setDir={setDir} setPath={setPath}/>
            <FileList dir={dir} setDir={setDir}/>
        </>
    )
}

export default Files