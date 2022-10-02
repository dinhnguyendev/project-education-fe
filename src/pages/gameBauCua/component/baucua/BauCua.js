import React from "react";
import { Card } from "antd";
import cua from "../../../../assets/image/cua.png";
import nai from "../../../../assets/image/nai.png";
import ca from "../../../../assets/image/ca.png";
import tom from "../../../../assets/image/tom.png";
import bau from "../../../../assets/image/bau.png";
import ga from "../../../../assets/image/ga.png";
import "./baucua.css";
const BauCua = () => {
  return (
    <div className="baucua">
      <div className="baucua__big">
        <div className="baucua__item">
          <Card className="baucua__card">
            <img src={ga} alt="" />
          </Card>
          <Card className="baucua__card">
            <img src={bau} alt="" />
          </Card>
          <Card className="baucua__card">
            <img src={nai} alt="" />
          </Card>
        </div>
        <div className="baucua__item">
          <Card className="baucua__card">
            <img src={ca} alt="" />
          </Card>
          <Card className="baucua__card">
            <img src={cua} alt="" />
          </Card>
          <Card className="baucua__card">
            <img src={tom} alt="" />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BauCua;
