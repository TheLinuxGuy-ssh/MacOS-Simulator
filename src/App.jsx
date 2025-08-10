import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import * as comp from "./assets/components"

const Desktop = lazy(() => import("./assets/Desktop"))

const App = () => {
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
