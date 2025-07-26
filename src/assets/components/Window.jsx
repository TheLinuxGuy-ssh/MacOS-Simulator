import React, { useRef, useState, useEffect, useCallback } from "react";
import LiquidGlass from "./LiquidGlass";

const throttle = (f) => {
  let token = null,
    lastArgs = null;
  const invoke = () => {
    f(...lastArgs);
    token = null;
  };
  const result = (...args) => {
    lastArgs = args;
    if (!token) token = requestAnimationFrame(invoke);
  };
  result.cancel = () => token && cancelAnimationFrame(token);
  return result;
};

const id = (x) => x;

const useDraggable = ({ onDrag = id } = {}) => {
  const [pressed, setPressed] = useState(false);
  const position = useRef({ x: 0, y: 0 });
  const windowRef = useRef();
  const handleRef = useRef();

  useEffect(() => {
    const windowElem = windowRef.current;
    const handleElem = handleRef.current;
    if (!handleElem) return;

    const handleMouseDown = (e) => {
      if (
        e.target.classList.contains("window-btn-control") ||
        e.target.closest(".window-btn-control")
      )
        return;
      if (e.button !== 0) return;
      e.preventDefault();
      document.body.style.userSelect = "none";
      windowElem.classList.add("pressed");
      setPressed(true);
    };

    handleElem.addEventListener("mousedown", handleMouseDown);
    return () => {
      handleElem.removeEventListener("mousedown", handleMouseDown);
      document.body.style.userSelect = "";
    };
  }, []);

  useEffect(() => {
    if (!pressed) return;
    const handleMouseMove = throttle((event) => {
      if (!windowRef.current || !position.current) return;
      const pos = position.current;
      const elem = windowRef.current;
      position.current = onDrag({
        x: pos.x + event.movementX,
        y: pos.y + event.movementY,
      });
      elem.style.left = `${pos.x}px`;
      elem.style.top = `${pos.y}px`;
    });

    const handleMouseUp = () => {
      document.body.style.userSelect = "";
      const ele = windowRef.current;
      ele.classList.remove("pressed");
      setPressed(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      handleMouseMove.cancel();
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [pressed, onDrag]);

  return [windowRef, handleRef, pressed];
};

const Window = ({
  uid,
  type,
  minw,
  minh,
  maxw,
  maxh,
  children,
  zIndex,
  bringToFront,
  appMeta,
  onClose,
  onMinimize,
  onMaximize,
  className,
}) => {
  const handleDrag = useCallback(
    ({ x, y }) => ({
      x: Math.max(0, x),
      y: Math.max(0, y),
    }),
    []
  );
  const [windowRef, topbarRef] = useDraggable({ onDrag: handleDrag });

  return (
    <div
      id={`window-${uid}`}
      ref={windowRef}
      style={{
        zIndex,
        position: "absolute",
        minWidth: minw,
        minHeight: minh,
        maxWidth: maxw,
        maxHeight: maxh,
      }}
      className={`window liquidGlass-wrapper ${
        type === "popup" ? "popup" : ""
      } ${className}`}
      onMouseDown={() => bringToFront && bringToFront(uid)}
      type={type}
    >
      <LiquidGlass />
      <div ref={topbarRef} className="window-topbar">
        <div className="window-topbar-buttons">
            <LiquidGlass />
          {appMeta?.Icon && (
            <img
              src={appMeta.Icon}
              alt={appMeta.Name}
              className="window-icon hidden"
            />
          )}
          <span className="window-title hidden">{appMeta?.Name}</span>
          <div
            className="window-btn close window-btn-control"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              onClose?.();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="9"
              viewBox="0 0 9 9"
            >
              <line
                x1="2"
                y1="2"
                x2="7"
                y2="7"
                stroke="#3E3E3E"
                stroke-width="1.3"
                stroke-linecap="round"
              />
              <line
                x1="7"
                y1="2"
                x2="2"
                y2="7"
                stroke="#3E3E3E"
                stroke-width="1.3"
                stroke-linecap="round"
              />
            </svg>
          </div>
          {type === "popup" ? "" : (
            <>
          <div
            className="window-btn maximise"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              onMinimize?.();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="9"
              viewBox="0 0 9 9"
            >
              <line
                x1="2.3"
                y1="4.5"
                x2="6.7"
                y2="4.5"
                stroke="#3E3E3E"
                stroke-width="1.3"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div
            className="window-btn minimise window-btn-control"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              onMaximize?.();
            }}
          >
            <img src="./close.svg" className="window-btn-maximise" alt="" />
          </div>
          </>
          )}
        </div>
      </div>
      <div className="window-content">{children}</div>
    </div>
  );
};

export default Window;
