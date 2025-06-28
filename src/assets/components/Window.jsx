import { useEffect } from "react";
import $ from "jquery";
const Window = (UID, type, content, minw, minh, maxw, maxh) => {
  useEffect(() => {
    $( function() {
    $( "#draggable" ).draggable();
  } );
  });
  return (
    <div id={UID} className={"window " + type}>
      <div className={"window-topbar " + `{type == "widget" ? "hidden" : ""}`}>
        <div className="window-btn close"></div>
        <div className="window-btn maximise"></div>
        <div className="window-btn minimise"></div>
      </div>
      <div className="window-content">{content}</div>
    </div>
  );
};

export default Window;
