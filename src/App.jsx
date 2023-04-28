import React from 'react'
import { Provider } from 'react-redux'
import MainLayout from './Pages/mainLayout'
import store from './redux/store'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Start from './Pages/Start'
import Final from './Pages/Final'

const App = () => {
  return (
    <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route index path = '/' element={<Start/>}/>
            <Route path = '/quest' element={<MainLayout/>}/>
            <Route path = '/final' element={<Final/>}/>
          </Routes>
        </Provider>
    </BrowserRouter>

      
  )
}

export default App