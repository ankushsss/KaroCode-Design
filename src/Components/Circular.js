import React from 'react'
import "./circle.css"
import img from "../karoCode.png"

const Circular = () => {
  return (
<div id="main">
      <div id="f"></div>
      <div id="sec"></div>
      <div class="img">
        <img src={img} alt=""/>
      </div>
    </div>
  )
}

export default Circular
