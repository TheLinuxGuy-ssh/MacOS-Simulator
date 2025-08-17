import { useEffect } from "react";

const Splash = () => {
  useEffect(() => {
    function onReady(callback) {
      var intervalId = window.setInterval(function () {
        if (document.getElementsByTagName("body")[0] !== undefined) {
          window.clearInterval(intervalId);
          callback.call(this);
        }
      }, 6000);
    }

    function setVisible(selector, visible) {
      document.querySelector(selector).style.display = visible
        ? "block"
        : "none";
    }

    onReady(function () {
      setVisible(".all", true);
      setVisible(".loader", false);
    });
  });
  return (
    <div className="loader">
      <div className="loaderback"></div>
      <img className="apple-logo" src="/apple.png" width="50px" />
      <div className="progressback">
        <div className="progressloader">
          <div className="progressloader-value"></div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
