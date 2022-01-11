import React, { useCallback, useEffect } from "react";
import { Card, Text } from "@innovaccer/design-system";
import { useLocation, useNavigate } from "react-router-dom";

import labTestDetail from "../constants/labTestDetail";
import postMessage from "../utils/postMessage";

function Detail() {
  const {
    state: { from },
  } = useLocation();
  const navigate = useNavigate();
  const data = labTestDetail;

  const handleEvents = useCallback(
    ({ data }) => {
      switch (data.action) {
        case "exitFullScreen":
          console.log("exit full screen from details");

          if (from === "/all") {
            console.log("posting message to open modal");
            postMessage("enterFullScreen", { modalTitle: "All lab tests" });
          }
          navigate(from);
          break;
        default:
          break;
      }
    },
    [from, navigate]
  );

  useEffect(() => {
    window.addEventListener("message", handleEvents);
    return () => window.removeEventListener("message", handleEvents);
  }, [handleEvents]);

  return (
    <Card className="mx-5 my-4 px-5 pb-5">
      <div className="d-flex flex-column mt-5">
        <Text weight="strong">Test name</Text>
        <Text className="mt-3">{data.name}</Text>
      </div>
      <div className="d-flex flex-column mt-5">
        <Text weight="strong">Result</Text>
        <Text className="mt-3">{data.displayValue}</Text>
      </div>
      <div className="d-flex flex-column mt-5">
        <Text weight="strong">Taken on</Text>
        <Text className="mt-3">{data.date}</Text>
      </div>
      <div className="d-flex flex-column mt-5">
        <Text weight="strong">Facility</Text>
        <Text className="mt-3">{data.facilityName}</Text>
      </div>
    </Card>
  );
}

export default Detail;
