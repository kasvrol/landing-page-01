import React, {Component} from "react";
import ListaNav from "../navbar/lista-navbar";
import "./footer.css"

class Footer extends Component{
    render(){
        return(
            <nav className="body-footer">
                <section className="bordao-logo">
                        <img src={"image/logo.png"}/>
                    <p>
                        Just type what's on your minds
                    </p>
                </section>
                <ListaNav/>
                <section>
                <ul className="redes">
                        {Array.of("image/ant-design_twitter-outlined.png", "image/ant-design_linkedin-filled.png", "image/ant-design_facebook-filled.png").map((redes)=>{
                            return(
                                <li>
                                    <a><img src={redes}/></a>
                                </li>
                            )
                        }
                        )}
                    </ul>
                </section>                
            </nav>
        )
    }

}
export default Footer;