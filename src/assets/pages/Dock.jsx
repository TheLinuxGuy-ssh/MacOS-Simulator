import "../css/dock.css";
import appsConfig from "../data/config.json";
import { useState } from "react";

const Dock = ({ windowStates, onOpen }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleIconClick = (uid) => {
    onOpen(uid);
  };

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const scaleForIndex = (index) => {
    if (hoveredIndex === null) return "scale(1) translateY(0)";
    if (index === hoveredIndex) return "scale(1.5) translateY(-10px)";
    if (Math.abs(index - hoveredIndex) === 1) return "scale(1.2) translateY(-6px)";
    if (Math.abs(index - hoveredIndex) === 2) return "scale(1.1)";
    return "scale(1)";
  };

  return (
    <div className="dockpuller">
      <div className="dock">
        <ul className="dock-container">
          {appsConfig.app.map((item, index) => (
            <li key={item.uid} className="dock-li">
              <div className="name">{item.Name}</div>
              <img
                className="ico"
                src={item.Icon}
                alt={item.Name}
                style={{ transform: scaleForIndex(index), transition: "transform 0.15s" }}
                onClick={() => handleIconClick(item.uid)}
                onMouseEnter={() => handleMouseOver(index)}
                onMouseLeave={handleMouseLeave}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dock;
