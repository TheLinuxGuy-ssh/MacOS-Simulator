import "./style.css";
import { LiquidGlass } from "../../components";

const Finder = () => {
  return (
    <div className="finder" UID="1">
      <div className="sidebar">
        <LiquidGlass />
        <div className="sidebar-items">
        <div className="sidebar-item">
          Applications
        </div>
        <div className="sidebar-item">
          Documents
        </div>
        <div className="sidebar-item">
          Downloads
        </div>
        </div>
      </div>
      <div className="finder-main">
        <div className="finder-topbar">
            <div className="topbar-start">
                <div className="dual-back-forward">
                  <div className="back-btn">
                    <i className="fa fa-chevron-left"></i>
                  </div>
                  <hr className="dual-separate" />
                  <div className="forward-btn">
                    <i className="fa fa-chevron-right"></i>
                  </div>
                </div>
                <div className="active-directory">
                  Home
                </div>
            </div>
            <div className="topbar-end">
              <div className="search-btn">
                <i className="fa fa-search"></i>
              </div>
            </div>
        </div>
        <div className="finder-content">
          This app is currently under development, <br />please feel free to try the other apps!
        </div>
      </div>
    </div>
  );
};

export default Finder;
