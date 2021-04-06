import React from "react"
import "./App.css"
import Button from "./components/Button"
import Header from "./components/Header"
import Card from "./components/CardTitle1"
import Inputs from "./components/inputs"
import CardTitle4 from './components/CardTitle4'
import CardTitle1 from "./images/CardTitle1.png"
import CardTitle2 from "./images/CardTitle2.png"
import ButtonLoad from "./components/ButtonLoad"



function App() {


  return (

    <div >

      <Header />
      <Card />
      <Inputs />
      <div className="conjunto">
        <CardTitle4 />
        <CardTitle4 />
        <CardTitle4 />
        <CardTitle4 />
      </div>
      <div className="conjunto">
        <CardTitle4 />
        <CardTitle4 />
        <CardTitle4 />
        <CardTitle4 />
      </div>
      <ButtonLoad />

    </div>
  );
}

export default App;
