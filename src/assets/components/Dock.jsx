import "../css/dock.css";
import { useEffect, useState } from "react";
import LiquidGlass from "../components/LiquidGlass";
import appsConfig from "../data/config.json";
import { ReactSortable } from "react-sortablejs";

const Dock = ({ windowStates, onOpen, handleLauncher, bringToFront }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleIconClick = (uid) => {
    onOpen(uid);
    bringToFront(uid);
  };

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const [apps, setApps] = useState([]);
  useEffect(() => {
    setApps(appsConfig.app);
  }, [])

  const scaleForIndex = (index) => {
    if (hoveredIndex === null) return "scale(1) translateY(0)";
    if (index === hoveredIndex) return "scale(1.5) translateY(-10px)";
    if (Math.abs(index - hoveredIndex) === 1)
      return "scale(1.2) translateY(-6px)";
    if (Math.abs(index - hoveredIndex) === 2) return "scale(1.1)";
    return "scale(1)";
  };

  return (
    <>
      <div className="dockpuller">
        <div className="dock">
          <LiquidGlass />
          <ul className="dock-container">
            <li className="dock-li">
              <div className="name">
                <LiquidGlass />
                Launcher
              </div>
              <img
                src="./applauncher.png"
                onClick={handleLauncher}
                className="ico"
                alt=""
              />
            </li>
             <ReactSortable className="flex" list={apps} setList={setApps} animation={200} delay={2}>
            {apps.map((item, index) => (
              <li
                key={item.uid}
                className={`dock-li ${
                  windowStates[item.uid].open ? `active` : ``
                }`}
              >
                <div className="name">
                  <LiquidGlass />
                  {item.Name}
                </div>
                <img
                  className="ico"
                  src={item.Icon}
                  alt={item.Name}
                  style={{
                    transform: scaleForIndex(index),
                    transition: "transform 0.15s",
                  }}
                  onClick={() => handleIconClick(item.uid)}
                  onMouseEnter={() => handleMouseOver(index)}
                  onMouseLeave={handleMouseLeave}
                />
              </li>
            ))}
            </ReactSortable>
            <hr className="dock-separator" />
            <li className="dock-li">
              <div className="name">
                <LiquidGlass />
                TheLinuxGuy
              </div>
              <a
                className="ico"
                href="https://github.com/thelinuxguy-ssh"
                target="_blank"
              >
                <img
                  src="./profile.png"
                  onClick={handleLauncher}
                  className="w-full h-full rounded-full"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dock;
