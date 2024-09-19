import React, { useState } from 'react'
// import Home from './Component/Pages/Home';
import { CurrencyContext } from './Context/CurrencyContext';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Component/Routing/Routing';
import Navbar from "./Component/Navbar/Navbar"


// import Carousel from './Component/Banner/Carousel';

function App() {

  const [currency , SetCurrency] = useState("usd");
  return (
    <>
     
    <BrowserRouter>
      <CurrencyContext.Provider value = {{currency , SetCurrency}}>
      <Navbar/>
      <Routing/>
      </CurrencyContext.Provider>
    </BrowserRouter>

    </>
  )
}

export default App;
