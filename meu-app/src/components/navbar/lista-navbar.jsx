import React, {Component} from "react";

class ListaNav extends Component{
    render(){
        return(
                <ul>
                        {Array.of("Home", "Product", "About", "Contact").map((aba)=>{
                            return(
                                <li>
                                    {aba}
                                </li>
                            )
                        }
                        )}
                </ul>
                
        )
    }

}
export default ListaNav;