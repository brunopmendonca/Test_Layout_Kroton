import React from "react"
import "./style.css"
import imagem from "../../images/imagem.png"
import Button from "../Button"


const CardTitle4 = () => {

    return (

        <div >

            <div className="cardGroup">

                <img src={imagem} />

                <div className="textGroup">
                    <text className="text">texto.....</text>
                    <text className="title1">Titulo</text>
                    <div className="buttonAcess">
                        <Button name="Acessar" classButton="classButtonWhite " />
                    </div>
                </div>

            </div>

        </div>

    )

}


export default CardTitle4;
