import React from 'react';
import Header from "./components/Header/Header";
import PrimeiraParte from "./components/Apresentacao/PrimeiraParte";
import Amostragem from "./components/Apresentacao/Amostragem";
import Pricing from "./components/Pricing/Pricing";
import UltimaParte from "./components/UltimaParte/UltimaParte";
import Footer from "./components/Footer/Footer";
import "./index.css"

function App() {
  return (
    <div>
      <Header/>
      <PrimeiraParte/>
      <Amostragem/>
      <Pricing/>
      <UltimaParte/>
      <Footer/>
    </div>
  );
}

export default App;
