import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Helpers from "../components/helpers/Helpers";
import LoadingPage from "../components/loadingPage/LoadingPage";
import NotFound from "../components/notFound/NotFound";
import { ROUTER } from "../constants/constants";
import ManagerCaro from "../pages/admin/components/caro/ManagerCaro";

import HomeManager from "../pages/admin/components/home/HomeManager";
import TurtleManager from "../pages/admin/components/turtle/TurtleManager";
import User from "../pages/admin/components/user/User";
import GameTurtle from "../pages/gameConRua/GameTurtle";
const Home = lazy(() => import("../pages/home/Home"));
const Admin = lazy(() => import("../pages/admin/Admin"));
const GameBauCua = lazy(() => import("../pages/gameBauCua/GameBauCua"));
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
              <Route path={ROUTER.BAUCUA} element={<GameBauCua />} />
              <Route path={ROUTER.CON_RUA} element={<GameTurtle />} />
            </Route>
          </Route>
          <Route path={ROUTER.AUTHORIZATION} element={<Authorization />}>
            <Route path={ROUTER.ADMIN} element={<Admin />}>
              <Route path={ROUTER.CARO_MANAGER} element={<ManagerCaro />} />
              <Route path={ROUTER.USER_MANAGER} element={<User />} />
              <Route path={ROUTER.HOME_MANAGER} element={<HomeManager />} />
              <Route path={ROUTER.TURTLE_MANAGER} element={<TurtleManager />} />
            </Route>
          </Route>
          <Route path={ROUTER.AUTHENTICATION} element={<Authentication />}>
            <Route path={ROUTER.LOGIN} element={<Login />} />
            <Route path={ROUTER.REGISTER} element={<Register />} />
          </Route>
          <Route path={ROUTER.NOTFOUND} element={<NotFound />} />
          <Route path={ROUTER.HELPERS} element={<Helpers />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default RootRouter;
