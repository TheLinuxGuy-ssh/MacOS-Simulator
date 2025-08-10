import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import * as comp from "./assets/components"

const Desktop = lazy(() => import("./assets/Desktop"))

const App = () => {
  return (
    <>
      <Routes>
            <Route path="*" element={<comp.Splash />} />
                    <Route path="/desktop" element={<Desktop />} />
                    <Route path="/" element={<comp.Lock />} />
                </Routes>
    </>
  );
};

export default App;
