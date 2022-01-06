import React, {Component} from "react";
import "./styled-princig.css"

class Pricing extends Component{
    render(){
        return(
            <section className="body">
                <section className="texto">
                    <h1>
                        Pricing
                    </h1>
                    <p>
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
                        /month per user
                        </p>
                    </div>
                    <p>
                    Most calendars are designed for teams.
                    </p>
                </section>
            </section>
        )
    }

}
export default Pricing;