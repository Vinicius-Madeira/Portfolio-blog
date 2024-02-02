import { Route as ReactRoute, Routes as ReactRoutes } from "react-router-dom";
import { ReactElement } from "react";
import Homepage from "./pages/Homepage";
import AboutMe from "./pages/AboutMe";
import Hobbies from "./pages/Hobbies";

export enum RouteName {
  HOME = "Home",
  ABOUT_ME = "About Me",
  HOBBIES = "Hobbies",
}

interface Route {
  name: RouteName;
  element: ReactElement;
  path: string;
}

export const routes: Route[] = [
  {
    name: RouteName.HOME,
    element: <Homepage />,
    path: "/",
  },
  {
    name: RouteName.ABOUT_ME,
    element: <AboutMe />,
    path: "/about",
  },
  {
    name: RouteName.HOBBIES,
    element: <Hobbies />,
    path: "/hobbies",
  },
];

export default function Router() {
  return (
    <ReactRoutes>
      {routes.map((route) => {
        return (
          <ReactRoute
            key={route?.name}
            path={route?.path}
            element={route?.element}
          />
        );
      })}
    </ReactRoutes>
  );
}
