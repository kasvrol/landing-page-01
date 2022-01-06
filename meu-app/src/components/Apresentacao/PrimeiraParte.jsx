import React, {Component} from "react";
import Proposta from "../Textos/Frase";
import ButtonStart from "../Button-Start/Button-Start";

class PrimeiraParte extends Component{
    render(){
        return(
            <secton>
                <h1>Lightning fast prototyping</h1>
                <Frase/>
                <ButtonStart/>
                <button className="button-try">
                    <a>Try For Free</a>
                </button>  
            </secton>
        )
    }

}
export default PrimeiraParte;