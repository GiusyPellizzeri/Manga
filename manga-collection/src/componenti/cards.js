import React, { useState } from "react";
import stile from "./stileCard.css"

function Card(props){

  const [stile, setStile] = useState("notOwned")

  function stileNO(){
    setStile("notOwned")
  }
  function stileYES(){
    setStile("Owned")
  }
  function stileWish(){
    setStile("Wishlist")
  }

  return(
    <div className={stile}>
      <div>
        <img src={props.immagine} alt="immagine non disponibile"/>
      </div>
      <div className="buttons">
        <button className="no" onClick={stileNO}>not owned</button>
        <button className="yes" onClick={stileYES}>owned</button>
        <button className="wish" onClick={stileWish}>wishlist</button>
      </div>
    </div>
  )
}

export default Card
