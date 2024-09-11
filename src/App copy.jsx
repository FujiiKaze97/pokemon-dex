import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Dex from './page/Dex'
import PokemonContextProvider from './Context/PokemonContext'

const App = () => {
  return (
    <PokemonContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dex' element={<Dex/>}/>
        </Routes>
      </BrowserRouter>
    </PokemonContextProvider>
  )
}

export default App