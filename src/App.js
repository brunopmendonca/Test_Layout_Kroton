import React from "react"
import Button from "./components/Button"
import Header from "./components/Header"
import Card from "./components/CardTitle1"
import Inputs from "./components/inputs"
import CardTitle4 from './components/CardTitle4'
import CardTitle1 from "./images/CardTitle1.png"
import CardTitle2 from "./images/CardTitle2.png"


function App() {


  return (

    <div>
      {/* <Header></Header> */}
      <Card route={CardTitle1} />
      <Card route={CardTitle2} />
      {/* <Button name="Botão para detalhes..." classButton="classButtonWhite"></Button> */}
      <Inputs></Inputs>
      <CardTitle4></CardTitle4>

    </div>
  );
}

export default App;
