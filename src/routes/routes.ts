import { lazy } from "react";

interface Route {
  path: string;
  exact: boolean;
  auth: boolean;
  component: any;
}

const ROUTES: Route[] = [
  {
    path: "/",
    exact: true,
    auth: false,
    component: lazy(() => import("../pages/Home")),
  },
  {
    path: "/new-todo",
    exact: true,
    auth: false,
    component: lazy(() => import("../pages/NewTodo")),
  },
  {
    path: "/login",
    exact: true,
    auth: false,
    component: lazy(() => import("../pages/Login")),
  },
  {
    path: "/signup",
    exact: true,
    auth: false,
    component: lazy(() => import("../pages/Signup")),
  },
];

export default ROUTES;
