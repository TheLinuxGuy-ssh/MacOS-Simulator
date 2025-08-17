import "./App.css";
import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import * as comp from "./components";
import "./assets/css"

const Desktop = lazy(() => import("./assets/Desktop"));

const App = () => {
  const lenis = new Lenis({
    autoRaf: true,
  });
  lenis.on("scroll", (e) => {
    console.log(e);
  });
  return (
    <>
      <Routes>
        <Route path="/desktop" element={<Desktop />} />
        <Route path="/" element={<comp.Lock />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </>
  );
};

export default App;
