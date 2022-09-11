import { Avatar } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getUserById } from "../../../../actions/auth/authActions";
import "./user.css";
const User = ({ player }) => {
  const me = useSelector((state) => state.user.login?.data);
  const [players, setPlayers] = useState({});
  useEffect(() => {
    const id = player?.opponentName?.id;
    if (id) {
      getUserById(id)
        .then((data) => {
          console.log("user>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
          console.log(data);
          setPlayers(data?.data);
        })
        .catch((err) => {});
    }
  }, [player]);
  console.log("me");
  console.log(me);
  console.log("player");
  console.log(player);
  return (
    <div className="user">
      <div className="user__profile">
        <div className="user__profile__item">
          <div className="user__image user__center">
            <Avatar src={me?.avatar} />
          </div>
          <div className="user__name user__center">{me?.username}</div>
          <div className="user__name user__center">{me?.phone}</div>
          <div className="user__token user__center">300 Peer</div>
          <div className="user__position user__center">Quan co: X</div>
        </div>
      </div>
      <div className="user__sum">
        <div className="user__sum__item">
          <div className="user__sum__icon user__center">VS</div>
          <div className="user__sum__token user__center">600 peer</div>
        </div>
      </div>
      <div className="user__profile">
        <div className="user__profile__item">
          <div className="user__image user__center">
            <Avatar src={players?.avatar} />
          </div>
          <div className="user__name user__center">{players?.username}</div>
          <div className="user__name user__center">{players?.phone}</div>
          <div className="user__token user__center">300 Peer</div>
          <div className="user__position user__center"> Quan co: O</div>
        </div>
      </div>
    </div>
  );
};

export default User;
