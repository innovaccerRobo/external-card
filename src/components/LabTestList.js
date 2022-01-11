import React from "react";
import { Badge, Text } from "@innovaccer/design-system";

import { useLocation, useNavigate } from "react-router-dom";
import postMessage from "../utils/postMessage";

function LabTestList({ list }) {
  const navigate = useNavigate();
  const location = useLocation();

  const openTestDetail = () => {
    console.log("i will trigger full screen modal");
    postMessage("enterFullScreen", { modalTitle: "Lab test detail" });
    navigate("/detail", { state: { from: location.pathname } });
  };

  return list.map(({ name, displayValue, date, resultStatus }) => (
    <div
      key={`${name}-${displayValue}-${date}`}
      onClick={openTestDetail}
      className={`cursor-pointer border-bottom`}
    >
      <div className="py-4 d-flex justify-content-between">
        <div className="d-flex flex-column flex-3">
          <Text>{name}</Text>
          <Text
            size="small"
            appearance="subtle"
            className="mt-3"
          >{`Last taken on ${date}`}</Text>
        </div>
        <div className="d-flex flex-column flex-2 text-align-end align-items-end">
          <Text weight="strong">{displayValue}</Text>
          {resultStatus && (
            <Badge className="flex-grow-0 mt-3">{resultStatus}</Badge>
          )}
        </div>
      </div>
    </div>
  ));
}

export default LabTestList;
