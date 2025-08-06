import { useEffect } from "react";
import { useHotkeys } from 'react-hotkeys-hook';
import {
  useNavigate
} from "react-router-dom";

const Keybinds = () => {
    const navigate = useNavigate();
    useHotkeys('ctrl+shift+l, cmd+shift+l', () => {
    navigate('/');
  });
  return null;
}

export default Keybinds