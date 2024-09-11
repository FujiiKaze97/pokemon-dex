import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Dex from './page/Dex'
import PokemonContextProvider from './Context/PokemonContext'
import Detail from './page/Detail'

const App = () => {
  return (
    <PokemonContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dex' element={<Dex/>}/>
          <Route path='/detail' element={<Detail/>}/>
        </Routes>
      </BrowserRouter>
    </PokemonContextProvider>
  )
}

export default App