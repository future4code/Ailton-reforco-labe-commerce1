import { GlobalStyled } from "./GlobalStyled";
import Main from "./components/Main";
import { useState } from "react";
import Header from './components/Header'
import Footer from './components/Footer'

function App( ) {

  return (
    <div>
      <GlobalStyled />
      <Header/>
      <Main />
      <Footer/>
    </div>

  );
}

export default App;
