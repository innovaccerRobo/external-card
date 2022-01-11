import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Routes from "./routes";
import postMessage from "./utils/postMessage";

const App = () => {
  const navigate = useNavigate();

  const handleEvents = ({ data }) => {
    switch (data.action) {
      case "enterFullScreen":
        console.log("i will enter full screen");
        navigate("/all");
        break;
      case "openHelpModal":
        console.log("i will enter help screen");
        navigate("/help");
        break;
      case "exitHelpModal":
        console.log("i will exit help screen");
        navigate("/");
        break;
      case "showMore":
        console.log("i will show more");
        postMessage("updateHeight", { height: document.body.scrollHeight });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("message", handleEvents);
  }, []);

  return <Routes />;
};

export default App;
