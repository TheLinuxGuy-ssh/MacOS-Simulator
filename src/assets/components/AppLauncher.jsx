import appsConfig from "../data/config.json";
import "../css/applauncher.css";
import { LiquidGlass } from ".";

const AppLauncher = ({ state, onOpen, handleLauncher }) => {

  const apps = appsConfig.app;
  const handleRestore = (uid) => {
    onOpen(uid);
  };
  return (
    <>
      <div
        className={`applauncher ${state ? "show" : "closed"}`}
        onClick={handleLauncher}
      >
        <LiquidGlass />
        <div className="launcher-content">
          {
          apps.map((item, index) => (
            <div key={item.uid} className="app">
              <img
                src={item.Icon}
                alt=""
                onClick={() => handleRestore(item.uid)}
              />
              <span className="app-name">{item.Name}</span>
            </div>
          ))}
        </div>
      </div>
    </>



  );
};

export default AppLauncher