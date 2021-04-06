import React from "react"
import "./style.css"
import Button from "../Button"
import Img1 from "../../images/CardTitle1.png"
import Img2 from "../../images/CardTitle2.png"




const CardTitle = () => {

    return (

        <div className="groupTitle1">
            <div className="Card">

                <div className="image">

                    <img className="imagePosition" src={Img1} />

                </div>

                <div className="Titles">
                    <text >Titulo 1</text>
                    <text className="Title2" >
                        Content.. ... content. ... content.. .. content.. .. content .. content....content....content....content....content.... content....content....
                    </text>
                    <Button name="Botão para detalhes... " classButton="classButtonBlue Position"  ></Button>
                </div>

            </div>

            <div className="Card">

                <div className="image">

                    <img className="imagePosition" src={Img2} />

                </div>

                <div className="Titles">
                    <text >Titulo 1</text>
                    <text className="Title2" >
                        Content.. ... content. ... content.. .. content.. .. content .. content....content....content....content....content.... content....content....
                    </text>
                    <Button name="Botão para detalhes... " classButton="classButtonBlue Position"  ></Button>
                </div>

            </div>
        </div>

    )

}


export default CardTitle;
