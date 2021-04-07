import React from "react"
import "./style.css"
import imagem from "../../images/whattsap1.png"


const Header = () => {

    return (

        <div className="classHeader">
            <img className="logo" src={imagem} />
        </div>
    )

}


export default Header;
