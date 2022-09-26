import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingPage from "../components/loadingPage/LoadingPage";
import { ROUTER } from "../constants/constants";
const Home = lazy(() => import("../pages/home/Home"));
const Login = lazy(() => import("./../pages/login/Login"));
const Register = lazy(() => import("./../pages/register/Register"));
const Authentication = lazy(() => import("../layout/auth/Authentication"));
const Authorization = lazy(() => import("./Authorization"));
const Games = lazy(() => import("./../pages/games/Games"));
const MainLayout = lazy(() => import("../layout/main/MainLayout"));
const GameCaro = lazy(() => import("./../pages/gameCaro/GameCaro"));
const Caro = lazy(() => import("../pages/gameCaro/components/game/Caro"));
const StartCaro = lazy(() => import("./../pages/gameCaro/components/startCaro/StartCaro"));
const RootRouter = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path={ROUTER.HOME} element={<Home />} />
            <Route path={ROUTER.GAME} element={<Games />}>
              <Route path={ROUTER.GAMECARO} element={<GameCaro />}>
                <Route path={ROUTER.START} element={<StartCaro />} />
                <Route path={ROUTER.PLAYCARO} element={<Caro />} />
              </Route>
            </Route>
          </Route>
          <Route path={ROUTER.AUTHORIZATION} element={<Authorization />}></Route>
          <Route path={ROUTER.AUTHENTICATION} element={<Authentication />}>
            <Route path={ROUTER.LOGIN} element={<Login />} />
            <Route path={ROUTER.REGISTER} element={<Register />} />
          </Route>
          <Route path={ROUTER.NOTFOUND} element={"not found"} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default RootRouter;
