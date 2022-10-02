import Random from "../random/Random";
import TimerBauCua from "../timer/TimerBauCua";

import "./lac.css";
const Lac = () => {
  return (
    <div className="lac">
      <TimerBauCua />
      <Random />
    </div>
  );
};

export default Lac;
