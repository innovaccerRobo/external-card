import React from "react";
import { Badge, Text } from "@innovaccer/design-system";

import "./index.css";
import { useNavigate } from "react-router-dom";

function LabTestList({ list }) {
  const navigate = useNavigate();

  const openTestDetail = () => {
    window.parent.postMessage(
      {
        action: "enterFullScreen",
        params: { modalTitle: "Lab test detail" },
      },
      "*"
    );
    navigate("/detail");
  };

  return list.map(({ name, displayValue, date, resultStatus }) => (
    <div
      key={`${name}-${displayValue}-${date}`}
      onClick={openTestDetail}
      className="cursor-pointer"
    >
      <div className="py-4 d-flex justify-content-between">
        <div className="d-flex flex-column info ">
          <Text>{name}</Text>
          <Text
            size="small"
            appearance="subtle"
            className="mt-3"
          >{`Last taken on ${date}`}</Text>
        </div>
        <div className="d-flex flex-column value text-align-end align-items-end">
          <Text weight="strong">{displayValue}</Text>
          {resultStatus && (
            <Badge className="flex-grow-0 mt-3">{resultStatus}</Badge>
          )}
        </div>
      </div>
      <div className="border-bottom" />
    </div>
  ));
}

export default LabTestList;
