import { Spin } from 'antd';
import './loadingPage.css';
import { useEffect } from 'react';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';
const LoadingPage = () => {
  useEffect(() => {
    nProgress.start();
    return () => {
      nProgress.done();
    };
  }, []);
  return (
    <div className="loading">
      <Spin></Spin>
    </div>
  );
};

export default LoadingPage;
