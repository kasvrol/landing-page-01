import React, {Component} from "react";
import Proposta from "../Textos/Proposta";
import Frase from "../Textos/Frase";
import Convite from "../Textos/Convite";
import "./apresentacao.css"

class Amostragem extends Component{
    render(){
        return(
            <div className="body-amostragem">
                <section className="amostragem-parte-um">
                    <div>
                        <h3>OpenType features</h3>
                        <Proposta/>
                    </div>
                    <img src={"image/screen.png"} alt="imagem de um computador" className="screen"/>
                </section>
                <section className="amostragem-parte-dois">
                    <img src={"image/screen (1).png"} alt="imagem da tela deum computador com código de programação" className="screen"/>
                    <div>
                        <h3>Variable fonts</h3>
                        <Frase/>
                    </div>
                </section>
                <section className="amostragem-parte-tres">
                    <section className="amostragem-parteIII-secaoI">
                        <div>
                            <h1 className="titulo-de-apresentacao">
                            A rethink of how we work
                            </h1>
                            <article>
                                Being a freelancer is a rollercoaster of emotions. We built Slate to keep your
                            </article>
                        </div>
                        <button className="button-get">
                            Get Started For Free
                        </button>
                    </section>
                    <section className="amostragem-parteIII-secaoII">
                            <h3>
                                Testimonials
                            </h3>
                            <img src={"image/logos_ibm.png"} alt="imagem da logo da ibm"/>
                            <article>
                                <p>Being a freelancer is a rollercoaster of emotions. <br/>
                                We built Slate to keep your freelance business less stressful. <br/>
                                We'd love to show you what we're building...</p>
                            </article>
                        <img src={"image/client.png"} alt="imagem do cliente"/>
                        <br/>
                        <button className="button-all">
                            All Testimonials
                        </button>
                    </section>
                </section>
            </div>
        )
    }

}
export default Amostragem;