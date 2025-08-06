import "../css/launcher.css";
import { useState } from "react";
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import LiquidGlass from "../components/LiquidGlass";
import appsConfig from "../data/config.json";

const Launcher = ({ state, onOpen, handleLauncher, onAppOpen, manageState }) => {
  const [query, setQuery] = useState('')
  const apps = appsConfig.app;
  const handleRestore = (uid) => {
    onOpen(uid);
  };
  const handleAppRestore = (uid) => {
    onAppOpen(uid);
    manageState(false);
  };
  
  return (
    <>
    {state ? (
    <div className="launcher">
      <LiquidGlass />
      <div className="launcher-search-box">
        <i className="fa fa-search"></i>
       <Combobox onChange={handleAppRestore} defaultValue={query} onClose={() => setQuery('')}>
      <ComboboxInput
        aria-label="Assignee"
        className="launcher-box"
        placeholder="Spotlight Search..."
        onChange={(event) => setQuery(event.target.value)}
        autoFocus
      />
      <ComboboxOptions anchor="bottom" className="launcher-option-list">
        {appsConfig.app.filter((item) => item.Name.toLowerCase().includes(query.toLowerCase())).map((item, index) => (
          <ComboboxOption key={item.uid} value={item.uid} className="launcher-option">
            {item.Name}
          </ComboboxOption>
      ))}
      </ComboboxOptions>
    </Combobox>
      </div>
    </div>
    ): null
    }
     </>
  );
};

export default Launcher;
