import React from "react";
import { Card, Text } from "@innovaccer/design-system";
import labTestDetail from "../../constants/labTestDetail";

function Detail() {
  const data = labTestDetail;
  return (
    <Card className="m-5 px-5 pb-5">
      {Object.keys(data).map(
        (key) =>
          data[key] && (
            <div className="d-flex flex-column mt-5">
              <Text weight="strong">{key}</Text>
              <Text className="mt-3">{data[key]}</Text>
            </div>
          )
      )}
    </Card>
  );
}

export default Detail;
