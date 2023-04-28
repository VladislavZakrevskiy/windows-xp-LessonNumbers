//@ts-nocheck
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { startStop} from '../../redux/reducers/PlotSlice'
import PlotModal from './PlotModalList'

const ALLPlot = () => {
    const {flag, plot} = useSelector(state => state.plotSlice)
    const dispatch = useDispatch()
    const nav = useNavigate()

    const finish = () => {
        dispatch(startStop(false))
        nav('/final')
    }

    switch(plot){
        case 'first': 
        return (
            <PlotModal phrases={['Привет, я твой Помощник, буду тебе помогать с безопасностью твоего компьютера', 'Подожди минуту, пока зайти в Game, там можно скоротать время']} callback={()=>dispatch(startStop(false))}/>
        );
        case 'second': 
        return (
            <PlotModal phrases={['Вирус напал!', 'Это страшная напасть, нам надо вылечить твой компьютер!', 'Давай попробуем найти его в файловой системе, открой Explorer на рабочем столе']} callback={()=>dispatch(startStop(false))}/>  
        );
        case 'third': 
        return (
            <PlotModal phrases={['Отлично мы его нашли, теперь открой терминал, это cmd.exe', 'Не закрывай эти подсказки, если не хочешь думать сам!', 'команда cls - очистка консоли, cd [имя_папки] - перемещение в папку или к файлу, cd .. - переход на уровень выше по папкам, rm [имя_файла] - удаление']} callback={()=>dispatch(startStop(false))}/>  
        );
        case 'fourth': 
        return (
            <PlotModal phrases={['БЛИН, вирус не дает нам удалить его!', 'как думаешь, что делать?', 'я знаю одно средство, открой Kasperskiy_Security']} callback={()=>dispatch(startStop(false))}/>  
        );
        case 'fifth': 
        return (
            <PlotModal phrases={['Ждем...']} callback={()=>dispatch(startStop(false))}/>  
        );
        case 'sixth': 
        return (
            <PlotModal phrases={['Молодец, ты справился!', 'Спасибо, что защитил систему!', '//By Zakrevskiy Vladislav']} callback={finish}/>  
        );
    }

  
}

export default ALLPlot