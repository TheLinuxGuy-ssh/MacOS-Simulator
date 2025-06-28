import { useEffect } from "react";
import apps from "../data/config.json"

const Dock = () => {
  useEffect(() => {
    let dockpuller = document.querySelector(".dockpuller");
    let dock = document.querySelector(".dock");
    dockpuller.addEventListener("mouseenter", function (event) {
      event.dock.classList.add("show");
    });

    dock.addEventListener(
      "mouseleave",
      function (event) {
        event.setInterval(dock.classList.remove("show"));
      },
      3000
    );
    let icons = document.querySelectorAll(".ico");
    icons.forEach((item, index) => {
      item.addEventListener("mouseover", (e) => {
        focus(e.target, index);
      });
      item.addEventListener("mouseleave", (e) => {
        e.icons.forEach((item) => {
          item.style.transform = "scale(1)  translateY(0px)";
        });
      });
    });

    const focus = (elem, index) => {
      let previous = index - 1;
      let previous1 = index - 2;
      let next = index + 1;
      let next2 = index + 2;

      if (previous == -1) {
        elem.style.transform = "scale(1.5)  translateY(-10px)";
      } else if (next == icons.length) {
        elem.style.transform = "scale(1.5)  translateY(-10px)";
      } else {
        elem.style.transform = "scale(1.5)  translateY(-10px)";
        icons[previous].style.transform = "scale(1.2) translateY(-6px)";
        icons[previous1].style.transform = "scale(1.1)";
        icons[next].style.transform = "scale(1.2) translateY(-6px)";
        icons[next2].style.transform = "scale(1.1)";
      }
    };
  });

  return (
    <>
      <div className="dockpuller">
        <div className="dock">
            <div className="dock-container">
                {
    apps.app.map((item) => (
      <li key={item.UID} className="dock-li">
              <div className="name">{item.Name}</div>
              <img
                className="ico"
                src={item.Icon}
                alt=""
              />
            </li>
    ))
  }          
        </div>
        </div>
      </div>
    </>
  );
};

export default Dock;
