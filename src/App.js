import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route } from "react-router-dom"
import Coins from "./pages/Coins/Coins"
import Portfolio from "./pages/Portfolio/Portfolio"
import GlobalStyle from './globalStyle';
import Navbar from './components/Navbar/Navbar'

import { ThemeProvider } from 'styled-components'
import { colours }  from './globalStyle';

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/Counter/reducers/counterSlice'

const theme = {
  colours: colours
}


const App = () => {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <ThemeProvider theme={theme}>

    <div className="App">

    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
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
