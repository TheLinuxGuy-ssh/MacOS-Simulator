import { DropdownMenu, Button, Theme } from "@radix-ui/themes";
import Config from "../data/config";
import { DropItem, DropSeparator, Drop } from "../components/Drop";

const Topbar = ({ focused, onClose }) => {
  const Topbar = Config.app.Options;
  console.log(focused);
  const handleClose = (uid) => {
    onClose(uid);
  }
  return (
    <>

      <div className="topbar">
        {/* <Drop className="apple" title={[ <img src="./apple-main.png" className="topbar-apple" alt="" /> ]} /> */}
      {/* {Topbar.map((topbar, index) => (
        <Drop key={topbar.Name || index} className="topbar-btn topbar-app" title={topbar.Name} alt="">
          {topbar.Subs?.map((topitem, topindex) => (
            <DropItem key={topitem}>{topitem.Name}</DropItem>
          ))}
        </Drop>
      ))} */}
        {/* <Drop title={focused ? focused.Name : "Finder"} className="topbar-btn topbar-app">
          <DropItem>About This Mac</DropItem>
          <DropSeparator />
          <DropItem>System Preferences...</DropItem>
          <DropItem>Location</DropItem>
          <DropItem>App Store...</DropItem>
          <DropSeparator />
          <DropItem>Sleep</DropItem>
          <DropItem>Restart</DropItem>
          <DropItem>Shutdown</DropItem>
          <DropItem>About {focused ? focused.Name : "Finder"}</DropItem>
          <DropSeparator />
          <DropItem>Quit</DropItem>
        </Drop>
        <Drop title={"File"} className="topbar-btn">
          <DropItem shortcut="⌘ E">Edit</DropItem>
          <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
          <DropSeparator />
        </Drop>
        <Drop title={"Edit"} className="topbar-btn">
          <DropItem shortcut="⌘ E">Edit</DropItem>
          <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
          <DropSeparator />
        </Drop>
        <Drop title={"View"} className="topbar-btn">
          <DropItem shortcut="⌘ E">View</DropItem>
          <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
          <DropSeparator />
        </Drop>
        <Drop title={"Window"} className="topbar-btn">
          <DropItem shortcut="⌘ E">Window</DropItem>
          <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
          <DropSeparator />
        </Drop>
        <Drop title={"Help"} className="topbar-btn">
          <DropItem shortcut="⌘ E">Edit</DropItem>
          <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
          <DropSeparator />
        </Drop> */}
        <Drop className="apple" title={[ <img src="./apple-main.png" className="topbar-apple" alt="" /> ]}>
          <DropItem>About This Mac</DropItem>
          <DropSeparator />
          <DropItem>System Preferences...</DropItem>
          <DropItem>Location</DropItem>
          <DropItem>App Store...</DropItem>
          <DropSeparator />
          <DropItem>Sleep</DropItem>
          <DropItem>Restart</DropItem>
          <DropItem>Shutdown</DropItem>
        </Drop>
        <Drop title={focused ? focused.Name : "Finder"} className="topbar-btn topbar-app">
          <DropItem>About {focused ? focused.Name : "Finder"}</DropItem>
          <DropSeparator />
          {focused ? <DropItem onClick={() => handleClose(focused)}>Quit</DropItem> : ""}
        </Drop>
      </div>
    </>
  );
};

export default Topbar;
