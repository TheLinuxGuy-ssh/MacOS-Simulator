const Window = (UID, type, content, minw, minh, maxw, maxh) => {
  return (
    <div id={UID} className={"window " + type}>
      <div className={"window-topbar" + type == "widget" ? "hidden" : ""}>
        <div className="close"></div>
        <div className="maximise"></div>
        <div className="minimise"></div>
      </div>
      <div className="window-content">{content}</div>
    </div>
  );
};

export default Window;
