import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route } from "react-router-dom"
import Coins from "./pages/Coins/Coins"
import Portfolio from "./pages/Portfolio/Portfolio"

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Coins/> } />
        <Route path="portfolio" element={ <Portfolio/> } />
        {/* <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
    </div>
  )
}

export default App
