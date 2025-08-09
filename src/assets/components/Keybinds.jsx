import { useEffect } from "react";
import { useHotkeys } from 'react-hotkeys-hook';
import {
  useNavigate
} from "react-router-dom";

const Keybinds = ({ onOpen, handleLaunch }) => {
    const navigate = useNavigate();
    useHotkeys('ctrl+alt+l, cmd+alt+l', () => {
    navigate('/');
  });
  useHotkeys('ctrl+alt+t, cmd+alt+t', ( ) => {
    onOpen(2);
  });

  useHotkeys('ctrl+alt+space, cmd+alt+space', ( ) => {
    handleLaunch(true)
  });
  return null;
}

export default Keybinds