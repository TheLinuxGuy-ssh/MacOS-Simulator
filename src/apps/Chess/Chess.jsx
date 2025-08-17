import "./style.css";
import { ChessGame } from "@react-chess-tools/react-chess-game";

const Chess = () => {
    return (
         <ChessGame.Root>
    <ChessGame.Board />
  </ChessGame.Root>
    )
}

export default Chess