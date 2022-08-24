import { Spin } from "antd";
import "./loadingPage.css";
import { useEffect } from "react";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import logo from "../../assets/image/logologin.svg";
const LoadingPage = () => {
  useEffect(() => {
    nProgress.start();
    return () => {
      nProgress.done();
    };
  }, []);
  return (
    <div className="loading">
      <img className="loading__image" src={logo} alt="" />
    </div>
  );
};

export default LoadingPage;
