import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import { LINKTO } from "../constants/constants";
import { checkUserByToken } from "./../actions/auth/authActions";

const Authorization = () => {
  const navigate = useNavigate();
  const [userAdmin, setUserAdmin] = useState();
  checkUserByToken()
    .then((data) => {
      console.log(data);
      if (data?.data && data?.data?.role === "supperAdmin") {
        setUserAdmin(true);
      } else {
        setUserAdmin(false);
      }
    })
    .catch((err) => {});
  return <>{userAdmin ? <Outlet /> : navigate(LINKTO.LOGIN)}</>;
};

export default Authorization;
