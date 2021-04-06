import React from "react"
import "./style.css"
import imagem from "../../images/whattsap1.png"


const Header = () => {

    return (

        <div className="ClassHeader">
            <img className="logo" src={imagem} />
        </div>
    )

}


export default Header;
