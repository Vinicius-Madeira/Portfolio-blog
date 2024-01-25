import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import AboutMe from "../pages/AboutMe";
import Hobbies from "../pages/Hobbies";

export interface Page {
  name: string;
  path: string;
}

export const routes: Page[] = [
  {
    name: "Homepage",
    path: "/",
  },
  {
    name: "About Me",
    path: "/about",
  },
  {
    name: "Hobbies",
    path: "/hobbies",
  },
];

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/hobbies" element={<Hobbies />} />
    </Routes>
  );
}
