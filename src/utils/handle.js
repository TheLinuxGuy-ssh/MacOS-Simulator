 export const bringToFront = (uid, setFocusUid, setMaxZ, setZIndexes) => {
    setFocusUid(uid);
    setMaxZ((prev) => prev + 1);
    setZIndexes((prev) => ({ ...prev, [uid]: maxZ + 1 }));
  };
  export const handleMinimize = (uid, setWindowStates) => {
    setWindowStates((ws) => ({
      ...ws,
      [uid]: { ...ws[uid], isminimizing: true, minimized: true },
    }));
  };
  export const handleMaximize = (uid, windowStates, setWindowStates) => {
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
  export const handleRestore = (uid, setFocusUid, bringToFront, setWindowStates, launcherState, handleLauncher) => [
    setFocusUid(uid),
    bringToFront(uid),
    setWindowStates((ws) => ({
      ...ws,
      [uid]: { ...ws[uid], open: true, isminimizing: true, minimized: false },
    })),
    setTimeout(() => {
      setWindowStates((ws) => ({
        ...ws,
        [uid]: { ...ws[uid], isminimizing: false },
      }));
    }, 500),
    launcherState ? handleLauncher() : null,
  ];

  export const handleLaunchRestore = (uid, setFocusUid, setWindowStates) => [
    setFocusUid(uid),
    setWindowStates((ws) => ({
      ...ws,
      [uid]: { ...ws[uid], open: true, minimized: false },
    })),
  ];

  export const handleClose = (uid, setWindowStates, setFocusUid) =>
    setWindowStates(
      (ws) => ({
        ...ws,
        [uid]: { ...ws[uid], open: false, minimized: false },
      }),
      setFocusUid(null)
    );

  export const handleLauncher = (setLauncherState) => {
    setLauncherState((prev) => !prev);
  };