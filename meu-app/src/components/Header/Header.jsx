import React, {Component} from "react";
import ListaNav from "../navbar/lista-navbar";
import "./styled-header.css"

class Header extends Component{
    render(){
        return(
            <nav className="body-header">
                <section>
                <img src={"image/logo.png"} alt="logo figma"/>
                </section>
                <ListaNav/>
                <button>
                    Login
                </button>                
            </nav>
        )
    }

}
export default Header;

