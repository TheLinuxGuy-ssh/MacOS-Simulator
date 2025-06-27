import { useEffect } from "react";
import "../css/dock.css";

const Dock = () => {
  useEffect(() => {
    let dockpuller = document.querySelector(".dockpuller");
    let dock = document.querySelector(".dock");
    dockpuller.addEventListener("mouseenter", function (event) {
      dock.classList.add("show");
    });

    dock.addEventListener(
      "mouseleave",
      function (event) {
        setInterval(dock.classList.remove("show"));
      },
      3000
    );
    let icons = document.querySelectorAll(".ico");
    let length = icons.length;

    icons.forEach((item, index) => {
      item.addEventListener("mouseover", (e) => {
        focus(e.target, index);
      });
      item.addEventListener("mouseleave", (e) => {
        icons.forEach((item) => {
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
            <li className="dock-li">
              <div className="name">Finder</div>
              <img
                className="ico"
                src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853981255cc36b3a37af_finder.png"
                alt=""
              />
            </li>
            <li className=" dock-li">
              <div className="name">Rohan's Codepen</div>
              <div className="alan-btn">
                <a href="https://codepen.io/Rohan2312" target="_blank">
                  <img className="ico" src="assets/img/codepen.png" alt="" />
                </a>
              </div>
            </li>
            <li className=" dock-li">
              <div className="name">Youtube</div>
              <a href="https://youtube.com/" target="_blank">
                <img className="ico" src="assets/img/youtube.png" alt="" />
              </a>
            </li>
            <li className=" dock-li">
              <div className="name">Notes</div>
              <img
                className="ico showfile"
                src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853c849ec3735b52cef9_notes.png"
                alt=""
              />
            </li>
            <li className=" dock-li">
              <div className="name">Excel</div>
              <a
                href="https://www.office.com/launch/excel?auth=1"
                target="_blank"
              >
                <img className="ico" src="assets/img/excel.png" alt="" />
              </a>
            </li>
            <li className=" dock-li">
              <div className="name">Powerpoint</div>
              <a
                href="https://www.office.com/launch/powerpoint?auth=1"
                target="_blank"
              >
                <img className="ico" src="assets/img/powerpoint.png" alt="" />
              </a>
            </li>
            <li className=" dock-li">
              <div className="name">Word</div>
              <a
                href="https://www.office.com/launch/word?auth=1"
                target="_blank"
              >
                <img className="ico" src="assets/img/word2.png" alt="" />
              </a>
            </li>
            <li className=" dock-li">
              <div className="name">Camera</div>
              <img
                className="ico opencamera"
                id="opencamera"
                src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f708537f18e2cb27247c904_facetime.png"
                alt=""
              />
            </li>
            <li className=" dock-li">
              <div className="name">Music</div>
              <img
                className="ico"
                src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ba0782d6ff2aca6b3_music.png"
                alt=""
              />
            </li>
            <li className=" dock-li">
              <div className="name">Calculator</div>
              <img
                className="ico opencalc"
                src="assets/img/calculator.png"
                alt=""
              />
            </li>
            <li className=" dock-li">
              <div className="name">Powerline</div>
              <img
                className="ico openpowerline"
                src="assets/img/powerline.png"
                alt=""
              />
            </li>
            <li className=" dock-li">
              <div className="name">2048</div>
              <img
                className="ico opentwozero"
                src="assets/img/2048.png"
                alt=""
              />
            </li>
            <li className=" dock-li">
              <div className="name">Safari</div>
              <img
                className="ico openbrowser"
                src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ddd826358438eda6d_safari.png"
                alt=""
              />
            </li>
            <li className=" dock-li">
              <div className="name">Comments</div>
              <img
                className="ico opencommentssection"
                src="assets/img/comments.png"
                alt=""
              />
            </li>
            <li className="dock-li">
              <div className="name">Developer</div>
              <img
                className="ico ico-bin openportfolio"
                src="assets/img/rohan.png"
                alt=""
              />
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dock;
