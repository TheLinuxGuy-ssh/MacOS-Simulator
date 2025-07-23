import { ReactTerminal } from "react-terminal";
import "./style.css";

const Terminal = () => {
    const commands = {
    whoami: "root",
    cd: (directory) => `changed path to ${directory}`,
    ls: "bin\tboot\tdev\tetc\thome\tlib\tlib64\tmedia\tmnt\topt\tproc\troot\tproc\troot\trun\tsbin\tsrv\tsys\ttmp\tusr\tvar",
    help: "whoami\ncd\nls\nclear\nhelp"
  };
  return (
    <div className="Terminal">
          <ReactTerminal
      prompt="root@macos:~#"
      commands={commands}
      showControlBar={false}
      errorMessage={`bash: command not found`}
      themes={{
        "terminal": {
        themeColor: "#FFFEFC",
        themePromptColor: "#FFFEFC"
        }
      }}
      theme="terminal"
    />
    </div>
  )
};

export default Terminal;
