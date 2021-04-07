import React from "react"
import "./App.css"
import Header from "./components/Header"
import Card from "./components/CardTitle1"
import Inputs from "./components/Inputs"
import CardTitle4 from './components/CardTitle4'
import ButtonLoad from "./components/ButtonLoad"
import Title4 from "./components/Title4"



function App() {


  return (

    <div >

      <Header />
      <Card />
      <Inputs />
      <Title4 />
      <div className="conjunto">
        <CardTitle4 className="cardTitle4" />
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
