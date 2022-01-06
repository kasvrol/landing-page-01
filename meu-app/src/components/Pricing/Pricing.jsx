import React, {Component} from "react";
import "./styled-pricing.css"

class Pricing extends Component{
    render(){
        return(
            <section className="body-pricing">
                    <section className="primeiro-paragrafo">
                        <h1>
                            Pricing
                        </h1>
                        <p className="texto">
                        Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.
                        </p>
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
                    </section>
            </section>
        )
    }

}
export default Pricing;