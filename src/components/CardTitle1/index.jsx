import React from "react"
import "./style.css"
import Button from "../Button"
import Img1 from "../../images/CardTitle1.png"
import Img2 from "../../images/CardTitle2.png"




const CardTitle = () => {

    return (

        <div className="groupTitle1">
            <div className="card">

                <div className="image">

                    <img className="imagePosition" src={Img2} />

                </div>

                <div className="titles">
                    <text className="title1" >Titulo 1</text>
                    <div className="subtitle1">
                        <text  >
                            Content.. ... content. ... content.. .. content.. .. content .. content....content
                            ....content....content....content.... content....content....
                        </text>
                    </div>
                    <Button name="Botão para detalhes... " classButton="classButtonBlue Position"  ></Button>
                </div>

            </div>

            <div className="card">

                <div className="image">

                    <img className="imagePosition" src={Img2} />

                </div>

                <div className="titles">
                    <text className="title1" >Titulo 1</text>
                    <div className="subtitle1">
                        <text  >
                            Content.. ... content. ... content.. .. content.. .. content .. content....content
                            ....content....content....content.... content....content....
                        </text>
                    </div>
                    <Button name="Botão para detalhes... " classButton="classButtonBlue Position"  ></Button>
                </div>

            </div>
        </div>

    )

}


export default CardTitle;
