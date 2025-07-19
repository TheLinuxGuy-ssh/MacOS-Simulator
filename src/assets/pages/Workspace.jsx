import { useState } from "react";
import "../css/window.css";
import config from "../data/config";
import Dock from "./Dock";
import Window from "../components/Window";
import * as Apps from "../apps";

const componentMap = Apps;

const Workspace = () => {
  
  const [windowStates, setWindowStates] = useState(
    Object.fromEntries(config.app.map(app => [app.uid, { open: false, minimized: false }]))
  );
  const apps = config.app;

  const [zIndexes, setZIndexes] = useState({});
  const [maxZ, setMaxZ] = useState(1);

  const bringToFront = (uid) => {
    setMaxZ((prev) => prev + 1);
    setZIndexes((prev) => ({ ...prev, [uid]: maxZ + 1 }));
  };
  const handleMinimize = (uid) => setWindowStates(ws => ({
    ...ws,
    [uid]: { ...ws[uid], minimized: true }
  }));

  const handleRestore = (uid) => setWindowStates(ws => ({
    ...ws,
    [uid]: { ...ws[uid], open: true, minimized: false }
  }));

  const handleClose = (uid) => setWindowStates(ws => ({
    ...ws,
    [uid]: { ...ws[uid], open: false, minimized: false }
  }));
  return (
    <>
  <div className="workspace">
    {apps.map(app => {
        const AppComponent = componentMap[app.Name] || (() => <div>Unknown App: {app.Name}</div>);
        return (
            windowStates[app.uid]?.open && !windowStates[app.uid]?.minimized ? (
              <Window
  key={app.uid}
  uid={app.uid}
  zIndex={zIndexes[app.uid] || 1}
  bringToFront={bringToFront}
  appMeta={app}
  type="app"
  onClose={() => handleClose(app.uid)}
  onMinimize={() => handleMinimize(app.uid)}
>
  <AppComponent />
</Window>

     ) : null
        );
      })}
  </div>
  <Dock windowStates={windowStates}
  onOpen={handleRestore} />
  </>
  )
};

export default Workspace;
