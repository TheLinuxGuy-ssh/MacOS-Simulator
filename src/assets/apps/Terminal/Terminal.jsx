import { ReactTerminal } from "react-terminal";
import "./style.css";
import config from "../../data/config"

const Terminal = ({ onAppOpen }) => {
  const handleOpen = (uid) => {
      onAppOpen(uid)
  }
    const apps = 
  Object.fromEntries(
  config.app.map((app) => [app.Name, () => handleOpen(app.uid)])
)
  const commands = {
    whoami: "root",
    cd: (directory) => `changed path to ${directory}`,
    ls: "bin\tboot\tdev\tetc\thome\tlib\tlib64\tmedia\tmnt\topt\tproc\troot\trun\tsbin\tsrv\tsys\ttmp\tusr\tvar",
    help: "<AppName> (Opens App)\nwhoami\ncd\nls\nclear\nhelp",
    ...apps
  };
  return (
    <div className="Term">
      <ReactTerminal
        prompt="root@macos:~#"
        commands={commands}
        showControlBar={false}
        errorMessage={`bash: command not found`}
        themes={{
          terminal: {
            themeColor: "#FFFEFC",
            themePromptColor: "#FFFEFC",
          },
        }}
        theme="terminal"
      />
    </div>
  );
};

export default Terminal;
