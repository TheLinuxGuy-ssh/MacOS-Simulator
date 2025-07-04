import "./App.css";
import Splash from "./assets/pages/Splash";
import Wallpaper from "./assets/pages/Wallpaper";
import Topbar from "./assets/pages/Topbar";
import Dock from "./assets/pages/Dock";
import Desktop from "./assets/pages/Desktop";
import Workspace from "./assets/pages/Workspace";

const App = () => {
  return (
    <>
    <Splash />
    <Topbar />
    <Wallpaper />
    <Dock />
    <Desktop />
    <Workspace />
    </>
  )
}

export default App;