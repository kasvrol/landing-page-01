import React, {Component} from "react";
import Frase from "../Textos/Frase";
import ButtonStart from "../Button-Start/Button-Start";
import "./apresentacao.css"

class PrimeiraParte extends Component{
    render(){
        return(
            <div className="body-primeira-parte">
                <section className="parte-de-apresentacao">
                    <h1 className="titulo-de-apresentacao">Lightning fast prototyping</h1>
                    <Frase/>
                    <section className="buttons-options">
                        <ButtonStart/>
                        <button className="button-try">
                            Try For Free
                        </button> 
                     </section>
                    <img src={"image/flat-browser.png"} alt="imagem do produto" className="imagem-do-produto"/>
                </section>
                <section  className="subparte">
                    <section>
                        <h2 className="just-type">Just type</h2>
                        <h1 className="titulo-de-apresentacao">Fastest way to navigate</h1>
                        <Frase/>
                    </section>
                    <section className="buttons-options">
                            <button className="button-download">
                                Download
                            </button> 
                            <button className="button-see">
                                See Walkthrough
                            </button> 
                    </section>
                </section> 
            </div>
        )
    }

}
export default PrimeiraParte;