import React, {Component} from "react";
import ConvitePart2 from "../Textos/ConvitePart2";
import ButtonStart from "../Button-Start/Button-Start";
import "./UltimaParte.css"

class UltimaParte extends Component{
    render(){
        return(
            <div className="bory-ultima-parte">
                <h1>
                We focus on ergonomic meeting
                </h1>
                <section className="textos-da-ultma-parte">
                    <ConvitePart2/>
                    <ConvitePart2/>
                    <div className="botao-ultima-parte">
                        <ButtonStart/>
                    </div>
                </section>
            </div>
        )
    }

}
export default UltimaParte;