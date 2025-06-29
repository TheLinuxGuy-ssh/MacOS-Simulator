import "../css/window.css";
import Window from "../components/Window";
import Finder from "./Finder/Finder";

let Apps = [Finder]

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
