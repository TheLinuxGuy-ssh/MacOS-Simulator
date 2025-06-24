import "./App.css";
import "./assets/css/animate.css";
import "./assets/components/Drag";
import Splash from "./assets/pages/Splash";
import Topbar from "./assets/pages/Topbar";
import Subapps from "./assets/pages/Subapps";
import Dock from "./assets/pages/Dock";

const App = () => {
  return (
    <>
    <Splash />
    <Topbar />
    <Subapps />
    <Dock />
    </>
  )
}

export default App;