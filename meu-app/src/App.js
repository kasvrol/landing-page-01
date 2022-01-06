import React from 'react';
import Header from "./components/Header/Header";
import PrimeiraParte from "./components/Apresentacao/PrimeiraParte";
import Pricing from "./components/Pricing/Pricing";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header/>
      <PrimeiraParte/>
      <Pricing/>
      <Footer/>
    </div>
  );
}

export default App;
