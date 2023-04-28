import React from 'react'
import Cmd from '../cmd/Command'
import Files from '../Files/Files'
import Game from '../game/Game'
import Kasperskiy from '../kasperskiy/Kasperskiy'

const ContentIcons = ({title}) => {

    if(title == 'cmd.exe'){
        return (
            <>
              <Cmd/>   
            </>
        ) 
    }

    if(title == 'Explorer'){
        return (
            <>
                <Files/> 
            </>
        ) 
    }

    if(title == 'Kasperskiy_Security'){
        return (
            <>
               <Kasperskiy/>  
            </>
        ) 
    }

    if(title == 'Game'){
        return (
            <>
                <Game/>  
            </>
        ) 
    }

    if(title == ''){
        return (
            <>
                 
            </>
        ) 
    }

    return (
        <>
            Вирус запретил входить сюда. Убирайся!  
        </>
    )
}

export default ContentIcons