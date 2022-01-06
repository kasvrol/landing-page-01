import React, {Component} from "react";


class Header extends Component{
    render(){
        return(
            <nav className="body">
                <section>
                    figma
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