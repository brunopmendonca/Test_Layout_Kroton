import React from "react"
import "./style.css"


const Button = ({ name, classButton }) => {

    return (

        <button className={classButton}>
            {name}
        </button>

    )

}


export default Button;
