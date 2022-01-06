import React, {Component} from "react";
import "./styled-header.css"

class Header extends Component{
    render(){
        return(
            <nav className="body-header">
                <section>
                <img src={"image/logo.png"}/>
                </section>
                <section>
                    <ul>
                        {Array.of("Home", "Product", "About", "Contact").map((aba)=>{
                            return(
                                <li>
                                    <a>{aba}</a>
                                </li>
                            )
                        }
                        )}
                    </ul>
                </section>
                <section>
                    login
                </section>                
            </nav>
        )
    }

}
export default Header;