import "../css/launcher.css";
import { useState } from "react";
import LiquidGlass from "../components/LiquidGlass";
import appsConfig from "../data/config.json";

const Launcher = (handleLauncher) => {
    return(
        <>
            <div className="launcher" onClick={handleLauncher}>
                <LiquidGlass />
                <div className="launcher-content">
    
                </div>
            </div>
        </>
    )
}

export default Launcher;