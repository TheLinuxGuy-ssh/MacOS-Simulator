import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import * as comp from "./assets/components"

const Desktop = lazy(() => import("./assets/Desktop"))

const App = () => {
  return (
    <>
      <Routes>
            <Route path="*" Component={comp.Splash} />
                    <Route path="/desktop" Component={Desktop} />
                    <Route path="/" Component={comp.Lock} />
                </Routes>
    </>
  );
};

export default App;
