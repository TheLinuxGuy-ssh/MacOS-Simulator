import "../css/window.css";
import { useState } from "react";
import Window from "../components/Window";
import Finder from "./Finder/Finder";
import Terminal from "./Terminal/Terminal";
import config from "../data/config.json";

const componentMap = { Finder, Terminal };

const AppCompiler = () => {
  const [windowStates, setWindowStates] = useState(
    Object.fromEntries(config.app.map(app => [app.uid, { open: true, minimized: false }]))
  );
  const [zIndexes, setZIndexes] = useState({});
  const [maxZ, setMaxZ] = useState(1);

  const bringToFront = (uid) => {
    setMaxZ(prev => prev + 1);
    setZIndexes(prev => ({ ...prev, [uid]: maxZ + 1 }));
  };

  // ✅ MISSING: these two handlers
  const handleMinimize = (uid) =>
    setWindowStates(ws => ({
      ...ws,
      [uid]: { ...ws[uid], minimized: true }
    }));

  const handleClose = (uid) =>
    setWindowStates(ws => ({
      ...ws,
      [uid]: { open: false, minimized: false }
    }));

  return (
    <>
      {config.app.map(app => {
        const AppComponent = componentMap[app.Name];
        if (!AppComponent) return null;
        const uid = app.uid;

        return (
          windowStates[uid]?.open && !windowStates[uid]?.minimized ? (
            <Window
              key={uid}
              uid={uid}
              zIndex={zIndexes[uid] || 1}
              bringToFront={bringToFront}
              appMeta={app}
              type="app"
              onClose={() => handleClose(uid)}
              onMinimize={() => handleMinimize(uid)}
            >
              <AppComponent />
            </Window>
          ) : null
        );
      })}
    </>
  );
};

export default AppCompiler;
