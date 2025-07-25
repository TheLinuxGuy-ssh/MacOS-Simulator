import "../css/launcher.css";
import { useState } from "react";
import LiquidGlass from "../components/LiquidGlass";
import appsConfig from "../data/config.json";

const Launcher = ({state, onOpen, handleLauncher}) => {
    const apps = appsConfig.app;
    const handleRestore = (uid) => {
        onOpen(uid);
    }
    return (
        <>
            <div className={`launcher ${state ? "show" : "closed"}`} onClick={handleLauncher}>
                <LiquidGlass />
                <div className="launcher-content">
                    {apps.map((item, index) => (
                        <div key={item.uid} className="app">
                            <img src={item.Icon} alt="" onClick={() => handleRestore(item.uid)} />
                            <span className="app-name">{item.Name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Launcher;