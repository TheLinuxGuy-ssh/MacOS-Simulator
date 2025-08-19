import { useState } from "react";
import config from "./config";
import "./assets/style.css";
import { LiquidGlass } from "../../components";
import { HomeIcon, LayersIcon } from "@radix-ui/react-icons"

const Music = () => {
    const [activeTab, setActiveTab] = useState(1); 
    const tabs = config.Tabs;
    return (
        <>
          <div className="music-container">
                <div className="music-sidebar">
                    <LiquidGlass />
                    <div className="music-sidebar-container">
                    <div className="music-sidebar-item">
                        <HomeIcon className="fa" />
                        Search
                    </div>
                    <div className="music-sidebar-item">
                        <HomeIcon className="fa" />
                        New
                    </div>
                    <div className="music-sidebar-item">
                        <HomeIcon className="fa" />
                        Radio
                    </div>
                    <div className="sidebar-category">
                        Library
                    </div>
                    {tabs.map((tab) => (
                        <div key={tab.uid} className="music-sidebar-item" onClick={() => setActiveTab(tab.uid)}>
                        <i className={`fa ${tab.Icon}`}></i>
                        {tab.Name}
                    </div>
                    ))}
                    <div className="music-sidebar-item">
                        <i className="fa fa-stack"></i>
                        All Playlists
                    </div>
                    </div>
                </div>  
                <div className="music-content">
                    <div className="music-topbar">
                        <h1 className="current-page-title">
                            {tabs.map((tab) => tab.uid === activeTab ? (
                                tab.Name
                            ) : null)}
                        </h1>
                        <div className="music-profile">
                            {/* <img src="" alt="" />    */}
                        </div>
                    </div>
                    <div className="music-content-body">
                        this is home!
                    </div>
                </div>
          </div>  
        </>
    )
}

export default Music