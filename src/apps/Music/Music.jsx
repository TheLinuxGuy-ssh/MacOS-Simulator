import { useState } from "react";
import config from "./config";
import * as Pages from "./components";
import "./assets/style.css";
import { LiquidGlass } from "../../components";
import { HomeIcon, LayersIcon, MagnifyingGlassIcon, DashboardIcon, SpeakerLoudIcon } from "@radix-ui/react-icons"
import parse, { domToReact } from "html-react-parser";

const Music = () => {
    const pagesMap = Pages;
    const [activeTab, setActiveTab] = useState(1); 
    const tabs = config.Tabs;
    return (
        <>
          <div className="music-container">
                <div className="music-sidebar">
                    <div className="music-sidebar-container">
                    <div className="music-sidebar-item" onClick={() => setActiveTab(2)}>
                        <HomeIcon className="fa" />
                        Search
                    </div>
                    <div className="music-sidebar-item" onClick={() => setActiveTab(1)}>
                        <DashboardIcon className="fa" />
                        Home
                    </div>
                    <div className="sidebar-category">
                        Library
                    </div>
                    {tabs.map((tab) => (
                        <div key={tab.uid} className={`music-sidebar-item ${tab.uid == activeTab ? 'active' : ''}`} onClick={() => setActiveTab(tab.uid)}>
                        {parse(tab.Icon)}
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
                        <h2 className="current-page-title">
                            {tabs.map((tab) => tab.uid === activeTab ? (
                                tab.Name
                            ) : null)}
                        </h2>
                        <div className="music-profile">
                            {/* <img src="" alt="" />    */}
                        </div>
                    </div>
                    <div className="music-content-body">
                        {tabs.filter(tab => tab.uid == activeTab).map((tab) => {
                        const PageComponent = pagesMap[tab.Name] || (() => <div>Unknown App: {tab.Name}</div>);
                            return (
                            <div>
                                    <PageComponent />
                            </div>
                            )
                        })}
                    </div>
                </div>
          </div>  
        </>
    )
}

export default Music