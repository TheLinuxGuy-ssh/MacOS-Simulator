import { useState } from "react";
import "./style.css";
import config from "../../data/config"
import { LiquidGlass } from "../../components";
import parse from 'html-react-parser';

const Tips = () => {
    const [tipStates, setTipStates] = useState(
    Object.fromEntries(
      config.tips.map((tip) => [
        tip.uid,
        {
          open: false,
        },
      ]),
    ))

    const handleTip = (uid) => {
            setTipStates((ws) => ({
      ...ws,
      [uid]: { ...ws[uid], open: true },
    }))
}
    const handleTipClose = (uid) => {
            setTipStates((ws) => ({
      ...ws,
      [uid]: { ...ws[uid], open: false },
    }))
    }
    const first = true;
    return (
        <>

        <div className="tips">
            {config.tips.map((tip) => (
                tipStates[tip.uid]?.open ? (
                    <div className="tip-panel">
                        <div className="tip-panel-close" onClick={() => handleTipClose(tip.uid)}>
                            <i className="fa fa-chevron-left"></i>
                        </div>
                        <div className="tip-content">
                            <LiquidGlass />
                        <div className="tip-image">
                        <img src={tip.Image} style={{ width: "100%" }} alt="" />
                    </div>
                    <div className="tip-heading">{tip.Title}</div>
                    <div className="tip-description">{parse(tip.Description)}</div>
                    </div>
                    </div>
                ) : null
            ))}
            {config.tips.map((tip, index) =>  (
                <div className={`tip `} onClick={() => handleTip(tip.uid)}>
                    <div className="tip-image" on>
                        <img src={tip.Image} style={{ width: "100%" }} alt="" />
                    </div>
                    <div className="tip-heading">{tip.Title}</div>
                    <div className="tip-description">{tip.Desc}</div>
                </div>
                
            ) 
            )}
        </div>
        </>
    )
}

export default Tips;