import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Routes from "./routes";

const App = () => {
  const navigate = useNavigate();

  const handleEvents = ({ data }) => {
    switch (data.action) {
      case "enterFullScreen":
        console.log("i will enter full screen");
        navigate("/all");
        break;
      case "exitFullScreen":
        console.log("i will exit full screen");
        navigate("/");
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
        window.parent.postMessage(
          {
            action: "updateHeight",
            params: { height: document.body.scrollHeight },
          },
          "*"
        );
        break;
      default:
        break;
    }
  };

  console.log(window);

  useEffect(() => {
    window.addEventListener("message", handleEvents);
  }, []);

  return <Routes />;
};

export default App;
