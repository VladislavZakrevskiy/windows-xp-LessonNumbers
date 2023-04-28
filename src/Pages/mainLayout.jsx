//@ts-nocheck
import React, { useEffect, useState } from 'react'
import DownBar from '../components/Layout/DownBar'
import IconList from '../components/Icons/IconList'
import PlotModal from '../components/PlotProcess/PlotModalList'
import { useDispatch } from 'react-redux'
import { selectPlot, startStop } from '../redux/reducers/PlotSlice'
import ALLPlot from '../components/PlotProcess/ALLPlot'
import Virus from '../components/Layout/Virus'

const MainLayout = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(startStop(true))
    dispatch(selectPlot('first'))
    setTimeout(()=> {
      dispatch(startStop(true))
      dispatch(selectPlot('second'))
    }, 70000)
  },[])
  return ( 
      <div className='quest'>
          <IconList/>
          <DownBar/>
          <ALLPlot/>
      </div>     
    )
}

export default MainLayout