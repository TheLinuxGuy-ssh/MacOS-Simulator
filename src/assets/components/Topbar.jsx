import { DropdownMenu, Button, Theme } from "@radix-ui/themes";
import { useState } from "react";
import Config from "../data/config";
import { DropItem, DropSeparator, Drop } from "../components/Drop";
import { useNavigate } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Topbar = ({ focused, onClose, onOpen, handleLaunch, dark, setDark }) => {
  const navigate = useNavigate();
  const Topbar = Config.app.Options;
  const [night, setNight] = useState(false);
  const handleClose = (uid) => {
    onClose(uid);
  };
  const handleRefresh = () => {
    navigate("/");
  };
  const [brightness, setBrightness] = useState(100);
  let time = new Date().toLocaleTimeString();
  const formattedTime = time.replace(/,/g, "");

  const [ctime, setTime] = useState(formattedTime);
  const UpdateTime = () => {
    const time = new Date().toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
    setTime(time.replace(/,/g, ""));
  };
  setInterval(UpdateTime);
  const handleOpen = (uid) => {
    onOpen(uid);
  };

  const toggleNight = (status) => {
      if(status){
        setNight(false)
      } else {
        setNight(true)
      }
  }

  const toggleMode = (status) => {
      if(status) {
        setDark(false)
      }else {
        setDark(true)
      }
  }

  return (
    <>
    <div className={`night-light ${night && "active"}`}>

    </div>
      <div
        className="brightness"
        style={{ opacity: `${1 - brightness / 100}` }}
      ></div>
      <div className="topbar">
        <div className="topbar-left">
          {/* <Drop className="apple" title={[ <img src="./apple-main.png" className="topbar-apple" alt="" /> ]} /> */}
          {/* {Topbar.map((topbar, index) => (
        <Drop key={topbar.Name || index} className="topbar-btn topbar-app" title={topbar.Name} alt="">
          {topbar.Subs?.map((topitem, topindex) => (
            <DropItem key={topitem}>{topitem.Name}</DropItem>
          ))}
        </Drop>
      ))} */}
          {/* <Drop title={focused ? focused.Name : "Finder"} className="topbar-btn topbar-app">
          <DropItem>About This Mac</DropItem>
          <DropSeparator />
          <DropItem>System Preferences...</DropItem>
          <DropItem>Location</DropItem>
          <DropItem>App Store...</DropItem>
          <DropSeparator />
          <DropItem>Sleep</DropItem>
          <DropItem>Restart</DropItem>
          <DropItem>Shutdown</DropItem>
          <DropItem>About {focused ? focused.Name : "Finder"}</DropItem>
          <DropSeparator />
          <DropItem>Quit</DropItem>
        </Drop>
        <Drop title={"File"} className="topbar-btn">
          <DropItem shortcut="⌘ E">Edit</DropItem>
          <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
          <DropSeparator />
        </Drop>
        <Drop title={"Edit"} className="topbar-btn">
          <DropItem shortcut="⌘ E">Edit</DropItem>
          <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
          <DropSeparator />
        </Drop>
        <Drop title={"View"} className="topbar-btn">
          <DropItem shortcut="⌘ E">View</DropItem>
          <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
          <DropSeparator />
        </Drop>
        <Drop title={"Window"} className="topbar-btn">
          <DropItem shortcut="⌘ E">Window</DropItem>
          <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
          <DropSeparator />
        </Drop>
        <Drop title={"Help"} className="topbar-btn">
          <DropItem shortcut="⌘ E">Edit</DropItem>
          <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
          <DropSeparator />
        </Drop> */}
          <Drop
            className="apple"
            title={[
              <img src="./apple-main.png" className="topbar-apple" alt="" />,
            ]}
          >
            <DropItem onClick={() => handleOpen(1000)}>About This Mac</DropItem>
            <DropSeparator />
            <DropItem onClick={handleRefresh}>Restart</DropItem>
          </Drop>
          {/* <DropItem onClick={() => handleOpen(1001)}>
              About {focused ? focused.Name : "Finder"}
            </DropItem> */}
          {focused ? (
            <Drop
              title={focused ? focused.Name : "Finder"}
              className="topbar-btn topbar-app"
            >
              <DropItem onClick={() => handleClose(focused)}>Quit</DropItem>
            </Drop>
          ) : (
            <div className="topbar-btn topbar-app">Finder</div>
          )}
        </div>
        <div className="topbar-right">
          <Drop
            title={<img src="/ControlCentre.png" alt="" />}
            className="topbar-btn topbar-ico"
          >
            <div>
              <div className="control-centre">
                <DropItem className={'control-centre-btn'} onClick={() => toggleNight(night)('')}>
                  <div className={`control-btn-icon night-light-btn ${night && 'active'}`}>
                    <i className="fa fa-moon"></i>
                  </div>
                Night Light
              </DropItem>
              <DropItem className={'control-centre-btn'} onClick={() => toggleMode(dark)('')}>
                <div className={`control-btn-icon dark-mode-btn ${dark && 'active'}`}>
                    <img src="./dark-mode.svg" alt="" />
                  </div>
                Dark Mode
              </DropItem>
              </div>
              <DropItem className={'control-centre-spacing'} onClick={""}>
                <div>
                  <div className="label">Display</div>
                  <div>
                    <Slider
                      defaultValue={brightness}
                      onChange={(value) => setBrightness(value)}
                      className="sound-slider"
                    />
                  </div>
                </div>
              </DropItem>
              <DropItem className={'control-centre-spacing'} onClick={""}>
                <div>
                  <div className="label">Sound</div>
                  <div>
                    <Slider className="sound-slider" />
                  </div>
                </div>
              </DropItem>
            </div>
          </Drop>
          <div className="topbar-btn clock">{ctime}</div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
