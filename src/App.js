import React from 'react';
import { Routes, Route } from "react-router-dom"
import Coins from "./pages/Coins/Coins"
import Coin from './pages/Coin/Coin';
import Portfolio from "./pages/Portfolio/Portfolio"
import GlobalStyle from './globalStyle';
import Navbar from './components/Navbar/Navbar'

import { ThemeProvider } from 'styled-components'
import { colours }  from './globalStyle';

import { useSelector, useDispatch } from 'react-redux'

const theme = {
  colours: colours
}

const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <Navbar/>
    <GlobalStyle />
      <Routes>
        <Route path="/" element={ <Coins/> } />
        <Route path="portfolio" element={ <Portfolio/> } />
        {/* <Route path="contact" element={ <Contact/> } /> */}
        <Route path="coin" element={ <Coin/> } />
      </Routes>
    </div>
    </ThemeProvider>
  )
}

export default App
