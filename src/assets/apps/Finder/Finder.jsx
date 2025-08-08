import "./style.css";
import { LiquidGlass } from "../../components";

const Finder = () => {
  return (
    <div className="finder" UID="1">
      <div className="sidebar">
        <LiquidGlass />
        <div className="sidebar-items">
          <div className="sidebar-locations">
            <div className="sidebar-item">Applications</div>
            <div className="sidebar-item">Documents</div>
            <div className="sidebar-item">Downloads</div>
          </div>
          <div className="sidebar-tags">
            <div className="sidebar-tag">
              <div className="tag-dot"></div>
              Home
            </div>
          </div>
        </div>
      </div>
      <div className="finder-main">
        <div className="finder-topbar">
          <div className="topbar-start">
            <div className="dual-back-forward topbar-item">
              <div className="back-btn">
                <i className="fa fa-chevron-left"></i>
              </div>
              <hr className="dual-separate" />
              <div className="forward-btn">
                <i className="fa fa-chevron-right"></i>
              </div>
            </div>
            <div className="active-directory topbar-item">Home</div>
          </div>
          <div className="topbar-end">
            <div className="search-btn topbar-item">
              <i className="fa fa-search"></i>
            </div>
          </div>
        </div>
        This app is currently under development. 
        <div className="finder-content">
          <div className="content-item">
            <img src="/Applications_Folder.png" alt="" />
            <span className="content-item-title">
              Applications
            </span>
          </div>
          <div className="content-item">
            <img src="/Folder.png" alt="" />
            <span className="content-item-title">
              Documents
            </span>
          </div>
          <div className="content-item">
            <img src="/Folder.png" alt="" />
            <span className="content-item-title">
              Downloads
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finder;
