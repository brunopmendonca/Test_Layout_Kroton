import React from "react"
import "./style.css"



const Inputs = () => {

    return (

        <div className="card">

            <text className="title">Titulo 3</text>

            <div className="group">

                <div className="subGroup">
                    <text>pergunta 1 ?</text>
                    <input className="campo" />
                </div>

                <div className="subGroup">
                    <text>pergunta 2 ?</text>
                    <input className="campo" />
                </div>

                <div className="subGroup">
                    <text>pergunta 3 ?</text>
                    <input className="campo" />
                </div>

                <div className="buttonResearch">
                    <button className="button">nada</button>
                </div>


            </div>

        </div>

    )

}


export default Inputs;
