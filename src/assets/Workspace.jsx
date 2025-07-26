import { useState, useRef } from "react";
import "./css/window.css";
import config from "./data/config";
import * as comp from "./components";
import * as Apps from "./apps";
import * as Popups from "./popups";

const componentMap = Apps;
const componentPopup = Popups;

const Workspace = () => {
  const workspaceRef = useRef(null);
  const [windowStates, setWindowStates] = useState(
    Object.fromEntries(
      config.app.map((app) => [
        app.uid,
        {
          open: false,
          minimized: false,
          isminimizing: false,
          maximized: false,
        },
      ]),
      config.popup.map((popup) => [
        popup.uid,
        {
          open: true
        }
      ])
    )
  );
  const [launcherState, setLauncherState] = useState(false);
  const [focusedUid, setFocusUid] = useState(null);
  const apps = config.app;
  const popups = config.popup;

  const [zIndexes, setZIndexes] = useState({});
  const [maxZ, setMaxZ] = useState(1);

  const bringToFront = (uid) => {
    setFocusUid(uid);
    setMaxZ((prev) => prev + 1);
    setZIndexes((prev) => ({ ...prev, [uid]: maxZ + 1 }));
  };
  const focusedApp = apps.find((app) => app.uid === focusedUid) || popups.find((popup) => popup.uid === focusedUid);
  const handleMinimize = (uid) => {
    setWindowStates((ws) => ({
      ...ws,
      [uid]: { ...ws[uid], isminimizing: true },
    }));
    setTimeout(() => {
      setWindowStates((ws) => ({
        ...ws,
        [uid]: { ...ws[uid], minimized: true, isminimizing: false },
      }));
    }, 500);
  };
  const handleMaximize = (uid) => {
    if (windowStates[uid].maximized) {
      setWindowStates((ws) => ({
        ...ws,
        [uid]: { ...ws[uid], maximized: false },
      }));
    } else {
      setWindowStates((ws) => ({
        ...ws,
        [uid]: { ...ws[uid], maximized: true },
      }));
    }
  };
  const handleRestore = (uid) => [
    setFocusUid(uid),
    setWindowStates((ws) => ({
      ...ws,
      [uid]: { ...ws[uid], open: true, minimized: false },
    })),
    launcherState ? handleLauncher() : null,
  ];

  const handleLaunchRestore = (uid) => [
    setFocusUid(uid),
    setWindowStates((ws) => ({
      ...ws,
      [uid]: { ...ws[uid], open: true, minimized: false },
    })),
  ];

  const handleClose = (uid) =>
    setWindowStates(
      (ws) => ({
        ...ws,
        [uid]: { ...ws[uid], open: false, minimized: false },
      }),
      setFocusUid(null)
    );

  const handleLauncher = () => {
    setLauncherState((prev) => !prev);
  };
  return (
    <>
      <comp.Topbar
        focused={focusedApp}
        onClose={() => handleClose(focusedApp.uid)}
        onOpen={handleRestore}
      />
      <div className="workspace">
        {apps.map((app) => {
          const AppComponent =
            componentMap[app.Name] ||
            (() => <div>Unknown App: {app.Name}</div>);
          return windowStates[app.uid]?.open ? (
            <comp.Window
              key={app.uid}
              uid={app.uid}
              zIndex={zIndexes[app.uid] || 1}
              bringToFront={bringToFront}
              appMeta={app}
              type="app"
              className={`${
                windowStates[app.uid]?.minimized ? "app-hidden " : " "
              } ${
                windowStates[app.uid]?.isminimizing ? "app-minimising" : ""
              } ${windowStates[app.uid]?.maximized ? "app-maximized" : ""}`}
              onClose={() => handleClose(app.uid)}
              onMinimize={() => handleMinimize(app.uid)}
              onMaximize={() => handleMaximize(app.uid)}
            >
              <AppComponent />
            </comp.Window>
          ) : null;
        })}
        {popups.map((popup) => {
          const PopupComponent = componentPopup[popup.Name]; 
          return windowStates[popup.uid]?.open ? (
            <comp.Window key={popup.uid} type="popup" className={`${popup.Name}`} uid={popup.uid} zIndex={zIndexes[popup.uid] || 1} bringToFront={bringToFront} onClose={() => handleClose(popup.uid)}>
              <PopupComponent />
            </comp.Window>
          ) : null;
        })}
      </div>
      <comp.Dock
        windowStates={windowStates}
        onOpen={handleRestore}
        bringToFront={bringToFront}
        handleLauncher={handleLauncher}
      />
      <comp.Launcher
        state={launcherState}
        onOpen={handleLaunchRestore}
        handleLauncher={handleLauncher}
      />
    </>
  );
};

export default Workspace;
