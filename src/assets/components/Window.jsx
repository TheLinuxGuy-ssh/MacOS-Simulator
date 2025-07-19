import React, { useRef, useState, useEffect, useCallback } from "react";
import LiquidGlass from "./LiquidGlass";

const throttle = (f) => {
  let token = null, lastArgs = null;
  const invoke = () => { f(...lastArgs); token = null; };
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
    const handleElem = handleRef.current;
    if (!handleElem) return;

    const handleMouseDown = (e) => {
      if (
        e.target.classList.contains("window-btn-control") ||
        e.target.closest(".window-btn-control")
      ) return;
      if (e.button !== 0) return;
      e.preventDefault();
      document.body.style.userSelect = "none";
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
      elem.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
    });

    const handleMouseUp = () => {
      document.body.style.userSelect = "";
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
  onMinimize
}) => {
  const handleDrag = useCallback(
    ({ x, y }) => ({
      x: Math.max(0, x),
      y: Math.max(0, y)
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
        maxHeight: maxh
      }}
      className={`window liquidGlass-wrapper ${type === "widget" ? "widget" : ""}`}
      onMouseDown={() => bringToFront && bringToFront(uid)}
    >
      <LiquidGlass />
      <div
        ref={topbarRef}
        className="window-topbar"
      >
        {appMeta?.Icon && (
          <img src={appMeta.Icon} alt={appMeta.Name} className="window-icon hidden" />
        )}
        <span className="window-title hidden">{appMeta?.Name}</span>
        <div
          className="window-btn close window-btn-control"
          onMouseDown={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.stopPropagation();
            onClose?.();
          }}
        ></div>
        <div
          className="window-btn minimise window-btn-control"
          onMouseDown={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.stopPropagation();
            onMinimize?.();
          }}
        ></div>
      </div>
      <div className="window-content">{children}</div>
    </div>
  );
};

export default Window;
