import { DropdownMenu, Button, Theme } from "@radix-ui/themes";
import { DropItem, DropSeparator, Drop } from "../components/Drop";

const Topbar = () => {
  return (
    <>
      <div className="topbar">
        <Drop title={"File"} className="topbar-btn">
          <DropItem shortcut="⌘ E">Edit</DropItem>
          <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
          <DropSeparator />
        </Drop>
      </div>
    </>
  );
};

export default Topbar;
