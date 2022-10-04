import { IRoute } from "src/common/interfaces";
import HomePage from "src/pages/HomePage";

export enum ROUTES {
  HOME = "/",
  ANY = "*",
}

export const publicRoutes: IRoute[] = [
  { path: ROUTES.HOME, Component: HomePage },
];

export const privateRoutes: IRoute[] = [];
