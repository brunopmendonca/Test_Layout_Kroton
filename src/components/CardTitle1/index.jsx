import React from "react"
import "./style.css"
import Button from "../Button"
import { } from "../../images/CardTitle1.png"



const CardTitle = ({ route }) => {

    return (

        <div className="Card">


            <img className="image" src={route} />


            <div className="Titles">
                <text >Titulo 1</text>
                <text className="Title2" >
                    Content.. ... content. ... content.. .. content.. .. content .. content....content....content....content....content.... content....content....
                 </text>
                <Button name="Botão para detalhes... " classButton="classButtonBlue Position"  ></Button>
            </div>

        </div>

    )

}


export default CardTitle;
