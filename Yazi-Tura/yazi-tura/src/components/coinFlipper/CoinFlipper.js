import React, { Component } from "react";

import Coin from "../coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {

    state = {
      side: "yazi",
      flipping: false,
    }
  
  yaziCounter=0;
  turaCounter=0;
  clickCounter=0;
  handleClick = () => {
   
    this.setState({ flipping: true });
    this.clickCounter++;
    setTimeout(() =>{ 
      this.setState({ flipping: false })}, 500);
    let a=this.randomGenerator();
     if(a!=1){
      console.log("a: "+a);
       this.setState({side:"yazi"});
       this.yaziCounter++;
     }else{
      this.setState({side:"tura"});
       console.log("a: "+a);
       this.turaCounter++;
     }
  };
randomGenerator(){
  return Math.floor(Math.random()*2);
}
 

  render() {
   
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.clickCounter} </strong>
          atıştan
          <strong> {this.turaCounter} </strong>ü tura
          <strong> {this.yaziCounter} </strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;