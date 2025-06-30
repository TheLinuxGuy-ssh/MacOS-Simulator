import "../css/window.css";
import Window from "../components/Window";
import Finder from "./Finder/Finder";
import Terminal from "./Terminal/Terminal"

let Apps = [Finder, Terminal]

const AppCompiler = () => {
    return (
        Apps.map((item) => (
            <Window key={item} UID={item}>
                <item></item>
            </Window>
        ))
    )
}

export default AppCompiler;
