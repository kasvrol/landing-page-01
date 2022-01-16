import React, {Component} from "react";
import ConvitePart2 from "../Textos/ConvitePart2";
import "./UltimaParte.css"

class UltimaParte extends Component{
    render(){
        return(
            <div className="bory-ultima-parte">
                <h1>
                We focus on ergonomic meeting
                </h1>
                <section>
                    <ConvitePart2/>
                    <ConvitePart2/>
                </section>
            </div>
        )
    }

}
export default UltimaParte;