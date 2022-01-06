import React, {Component} from "react";
import Frase from "../Textos/Frase";
import ButtonStart from "../Button-Start/Button-Start";

class PrimeiraParte extends Component{
    render(){
        return(
            <secton>
                <section>
                    <h1>Lightning fast prototyping</h1>
                    <Frase/>
                    <ButtonStart/>
                    <button className="button-try">
                        <a>Try For Free</a>
                    </button>  
                </section>
                <section>
                    <img src={"image/flat-browser.png"} alt="imagem do produto"/>
                </section>
            </secton>
        )
    }

}
export default PrimeiraParte;