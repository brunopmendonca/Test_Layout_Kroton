import React from "react"
import "./style.css"
import Img from '../../images/lupa.png'



const Inputs = () => {

    return (

        <div className="cardInput">

            <text className="title">Titulo 3</text>

            <div className="groupInput">

                <div className="subGroup">
                    <text>pergunta 1 ?</text>
                    <input placeholder="Digite a resposta." className="campo" />
                </div>

                <div className="subGroup">
                    <text>pergunta 2 ?</text>
                    <input placeholder="Digite a resposta." className="campo" />
                </div>

                <div className="subGroup">
                    <text>pergunta 3 ?</text>
                    <select placeholder="selecione" className="campo" />
                </div>

                <div className="buttonResearch">
                    <button className="button">
                        <text className="textButton">Buscar...</text>
                        <img className="iconButton" src={Img} />
                    </button>
                </div>


            </div>

        </div>

    )

}


export default Inputs;
