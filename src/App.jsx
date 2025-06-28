import "./App.css";
import "./assets/css/animate.css";
import "./assets/css/splash.css";
import "./assets/css/topbar.css";
import "./assets/css/dock.css";
import Wallpaper from "./assets/pages/Wallpaper";
import Splash from "./assets/pages/Splash";
import Topbar from "./assets/pages/Topbar";
import Subapps from "./assets/pages/Subapps";
import Dock from "./assets/pages/Dock";
import Desktop from "./assets/pages/Desktop";
import Workspace from "./assets/pages/Workspace";

const App = () => {
  return (
    <>
    <Splash />
    <Topbar />
    <Wallpaper />
    <Subapps />
    <Dock />
    <Desktop />
    <Workspace />
    </>
  )
}

export default App;