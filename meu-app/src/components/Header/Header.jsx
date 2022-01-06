import React, {Component} from "react";
import ListaNav from "../navbar/lista-navbar";
import "./styled-header.css"

class Header extends Component{
    render(){
        return(
            <nav className="body-header">
                <section>
                <img src={"image/logo.png"}/>
                </section>
                <ListaNav/>
                <button>
                    <a>Login</a>
                </button>                
            </nav>
        )
    }

}
export default Header;