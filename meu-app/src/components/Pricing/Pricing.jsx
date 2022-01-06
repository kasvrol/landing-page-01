import React, {Component} from "react";
import Proposta from "../Textos/Proposta";
import ButtonStart from "../Button-Start/Button-Start";
import "./styled-pricing.css"

class Pricing extends Component{
    render(){
        return(
            <section className="body-pricing">
                    <section className="primeiro-paragrafo">
                        <h1>
                            Pricing
                        </h1>
                        <Proposta/>
                    </section>
                    <section className="promocao">
                        <h2>
                        30-DAY FREE TRIAL
                        </h2>
                        <div>
                            <span>$5</span>
                            <p>
                            /month per<br/>user
                            </p>
                        </div>
                        <p className="texto">
                        Most calendars are designed<br/>for teams.
                        </p>
                        <ButtonStart/>
                    </section>
            </section>
        )
    }

}
export default Pricing;