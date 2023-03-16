import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route } from "react-router-dom"
import Coins from "./pages/Coins/Coins"
import Portfolio from "./pages/Portfolio/Portfolio"
import GlobalStyle from './globalStyle';
import Navbar from './components/Navbar/Navbar';

import { ThemeProvider } from 'styled-components'
import { colours }  from './globalStyle';
console.log(colours)

const theme = {
  colours: colours
}


const App = () => {
  return (
    <ThemeProvider theme={theme}>

    <div className="App">
    <Navbar/>
    <GlobalStyle />
      <Routes>
        <Route path="/" element={ <Coins/> } />
        <Route path="portfolio" element={ <Portfolio/> } />
        {/* <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
      
    </div>
    </ThemeProvider>
  )
}

export default App
