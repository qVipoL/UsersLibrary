import React, { FC } from "react";
import { Routes } from "react-router";
import { Route } from "react-router-dom";
import { IRoute } from "src/common/interfaces";
import { publicRoutes } from "src/routes";

const AppRouter: FC = () => {
  const mapRoutes = ({ path, Component }: IRoute) => {
    return <Route key={path} path={path} element={<Component />} />;
  };

  return <Routes>{publicRoutes.map(mapRoutes)}</Routes>;
};

export default AppRouter;
