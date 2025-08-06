import "../css/launcher.css";
import { useState } from "react";
import LiquidGlass from "../components/LiquidGlass";
import appsConfig from "../data/config.json";

const Launcher = ({ state, onOpen, handleLauncher }) => {

  const apps = appsConfig.app;
  const handleRestore = (uid) => {
    onOpen(uid);
  };
  return (
    <>
    {state ? (
    <div className="launcher">
      <LiquidGlass />
      <div className="launcher-search-box">
        <i className="fa fa-search"></i>
      <input type="text" className="launcher-box" placeholder="Spotlight Search" autoFocus />
      </div>
    </div>
    ): null
    }
     </>
  );
};

export default Launcher;
