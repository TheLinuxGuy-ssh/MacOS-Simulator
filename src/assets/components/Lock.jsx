import "../css/lock.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LiquidGlass from "./LiquidGlass";
import Wallpaper from "./Wallpaper";
import { Splash } from ".";

const Lock = () => {
  let time = new Date().toLocaleTimeString();
  const formattedTime = time.replace(/,/g, "");
  const [password, setPass] = useState("");
  const [ctime, setTime] = useState(formattedTime);
  const [cdate, setDate] = useState(formattedTime);
  const [wrong, setWrong] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setPass(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password == "tlg") {
      navigate("/desktop");
      console.log("it is correct");
    } else {
      setWrong(true);
      setTimeout(() => {
        setWrong(false);
        console.log("wrong wrong");
      }, 1000);
      console.log("you know what this means...");
    }
  };
  const UpdateTime = () => {
    const time = new Date().toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const date = new Date().toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "2-digit",
    });
    setTime(time.replace(/,/g, ""));
    setDate(date);
  };
  useState(() => {
    setInterval(UpdateTime);
  });
  const dark = true;

  return (
    <>
      <Splash />
      <Wallpaper dark={dark} />
      <div className="lockscreen">
        <LiquidGlass />
        <div className="info">
          <div className="date">{cdate}</div>
          <div className="time">{ctime}</div>
        </div>

        <div className="password-box">
          <div className="user">
            <div className="user-img">
              <img src="/profile.png" alt="" />
            </div>
            <div className="username">TheLinuxGuy</div>
            <div className="hint">Password: tlg</div>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              className={`lockscreen-password-box ${
                wrong ? "wrong-pass" : null
              }`}
              type="password"
              value={password || ""}
              onChange={handleChange}
              placeholder="Enter Password"
              autoFocus
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Lock;
