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
    <>
        <div className="dockpuller">
      <div className="dock">
        <div className="liquidGlass-effect"></div>
          <div className="liquidGlass-tint"></div>
          <div className="liquidGlass-shine"></div>
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
     <svg className="glass-svg">
      <filter
        id="glass-distortion"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        filterUnits="objectBoundingBox"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.01 0.01"
          numOctaves="1"
          seed="5"
          result="turbulence"
        />

        <feComponentTransfer in="turbulence" result="mapped">
          <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
          <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
          <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
        </feComponentTransfer>

        <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />

        <feSpecularLighting
          in="softMap"
          surfaceScale="5"
          specularConstant="1"
          specularExponent="100"
          lightingColor="white"
          result="specLight"
        >
          <fePointLight x="-200" y="-200" z="300" />
        </feSpecularLighting>

        <feComposite
          in="specLight"
          operator="arithmetic"
          k1="0"
          k2="1"
          k3="1"
          k4="0"
          result="litImage"
        />

        <feDisplacementMap
          in="SourceGraphic"
          in2="softMap"
          scale="150"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
    </>
  );
};

export default Dock;
