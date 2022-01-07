import React from 'react';
import Header from "./components/Header/Header";
import PrimeiraParte from "./components/Apresentacao/PrimeiraParte";
import Amostragem from "./components/Apresentacao/Amostragem";
import Pricing from "./components/Pricing/Pricing";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header/>
      <PrimeiraParte/>
      <Amostragem/>
      <Pricing/>
      <Footer/>
    </div>
  );
}

export default App;
