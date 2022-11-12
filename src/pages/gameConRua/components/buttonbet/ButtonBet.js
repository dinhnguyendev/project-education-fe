import React from 'react'
import "./buttonbet.css"
import { useEffect } from 'react';
const ButtonBet = ({ handleChangeBet, title, bets, colors, active }) => {
   
    const handleAddClassList = () => {
        const elements = document.querySelector(".bet__flex");
        elements.classList.add("bet__active");
    } 
  return (
      <div className='bet'>
          <div  style={{backgroundColor: `${colors}` }} onClick={()=> handleChangeBet(bets)} className="bet__flex">
              <div className="bet__heading">{title}</div>
          <div className="bet__number">2x</div> 
          </div>
    </div>
  )
}

export default ButtonBet