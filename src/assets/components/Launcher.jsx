import "../css/launcher.css";
import { useState } from "react";
import LiquidGlass from "../components/LiquidGlass";
import appsConfig from "../data/config.json";

const Launcher = (className) => {
    return(
        <>
            <div className={`launcher ${className}`}>
                <LiquidGlass />
                <div className="launcher-content">
    
                </div>
            </div>
        </>
    )
}

export default Launcher;