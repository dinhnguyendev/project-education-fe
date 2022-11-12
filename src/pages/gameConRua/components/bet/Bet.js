import React, { useState } from 'react'
import ButtonBet from './../buttonbet/ButtonBet';
import "./bet.css";
const Bet = () => {
    const [active, setActive] = useState(0);
    const handleChangeBet = (bet) => {
        setActive(bet);
        console.log(bet);
    }
  return (
      <div>
          <div className="bet__games">
              <div className="bet__game__flex">
                <ButtonBet active={active} colors={"#ff9314"} title={"Yellow"} bets={1} handleChangeBet={handleChangeBet} />
                <ButtonBet active={active} colors={"#f23068"} title={"Red"} bets={2} handleChangeBet={handleChangeBet} />
                <ButtonBet active={active} colors={"#0d42ff"} title={"Blue"} bets={3} handleChangeBet={handleChangeBet} />
              </div>
          </div>
    </div>
  )
}

export default Bet