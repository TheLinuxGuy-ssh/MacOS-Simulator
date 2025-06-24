import "../css/dock.css";

const Dock = () => {
    return (
        <>
        <div className="dockpuller">
    <div className="dock">
        <div className="dock-container">
          <li className="dock-li">
            <div className="name">Finder</div>
            <img className="ico" src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853981255cc36b3a37af_finder.png" alt="" />
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
            <img className="ico showfile" src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853c849ec3735b52cef9_notes.png" alt="" />
          </li>
          <li className=" dock-li">
            <div className="name">Excel</div>
            <a href="https://www.office.com/launch/excel?auth=1" target="_blank">
            <img className="ico" src="assets/img/excel.png" alt="" />
            </a>
          </li>
          <li className=" dock-li">
            <div className="name">Powerpoint</div>
            <a href="https://www.office.com/launch/powerpoint?auth=1" target="_blank">
            <img className="ico" src="assets/img/powerpoint.png" alt="" />
            </a>
          </li>
          <li className=" dock-li">
            <div className="name">Word</div>
            <a href="https://www.office.com/launch/word?auth=1" target="_blank">
            <img className="ico" src="assets/img/word2.png" alt="" />
            </a>
          </li>
          <li className=" dock-li">
            <div className="name">Camera</div>
            <img className="ico opencamera" id="opencamera" src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f708537f18e2cb27247c904_facetime.png" alt="" />
          </li>
          <li className=" dock-li">
            <div className="name">Music</div>
            <img className="ico" src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ba0782d6ff2aca6b3_music.png" alt="" />
          </li>
          <li className=" dock-li">
            <div className="name">Calculator</div>
            <img className="ico opencalc" src="assets/img/calculator.png" alt="" />
          </li>
          <li className=" dock-li">
            <div className="name">Powerline</div>
            <img className="ico openpowerline" src="assets/img/powerline.png" alt="" />
          </li>
          <li className=" dock-li">
            <div className="name">2048</div>
            <img className="ico opentwozero" src="assets/img/2048.png" alt="" />
          </li>
          <li className=" dock-li">
            <div className="name">Safari</div>
            <img className="ico openbrowser" src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ddd826358438eda6d_safari.png" alt="" />
          </li>
          <li className=" dock-li">
            <div className="name">Comments</div>
            <img className="ico opencommentssection" src="assets/img/comments.png"  alt="" />
          </li>
          <li className="dock-li">
            <div className="name">Developer</div>
            <img className="ico ico-bin openportfolio" src="assets/img/rohan.png" alt="" />
          </li>
          
        </div>
        </div>
      </div>
      </>
    )
}

export default Dock;