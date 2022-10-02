import React from "react";
import { XUCXACINIT } from "../../../../utils/baucua";
import Xucxac from "../xucxac/Xucxac";
import "./random.css";
const Random = () => {
  return (
    <div className="random">
      <div className="lac__broad">
        <div className="lac__big">
          <div className="lac__flex">
            <div className="lac__item">
              <Xucxac image={XUCXACINIT[0].image} />
            </div>
            <div className="lac__item">
              <Xucxac image={XUCXACINIT[1].image} />
            </div>
          </div>
          <div className="lac__item__center">
            <div className="lac__item">
              <Xucxac image={XUCXACINIT[2].image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Random;
