/* eslint-disable import/no-anonymous-default-export */
import { Route, Routes } from "react-router-dom";

import Detail from "./Detail";
import Help from "./Help";
import Home from "./Home";
import ViewAll from "./ViewAll";

const routes = [
  { path: "/", Component: Home },
  { path: "help", Component: Help },
  { path: "detail", Component: Detail },
  { path: "all", Component: ViewAll },
];

export default function () {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
}
