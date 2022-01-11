import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { fetchAllLabTests } from "../api";
import LabTestList from "../components/LabTestList";
import GhostLoader from "../components/GhostLoader";

function ViewAll() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = () => {
    setIsLoading(true);
    fetchAllLabTests()
      .then((list) => {
        setData(list);
      })
      .finally(() => setIsLoading(false));
  };

  const handleEvents = useCallback(
    ({ data }) => {
      switch (data.action) {
        case "exitFullScreen":
          console.log("I will exit full screen from view all");
          navigate("/");
          break;
        default:
          break;
      }
    },
    [navigate]
  );

  useEffect(() => {
    getData();
    window.addEventListener("message", handleEvents);

    return () => window.removeEventListener("message", handleEvents);
  }, [handleEvents]);

  return (
    <div className="px-5 vh-100 overflow-auto bg-light">
      {isLoading ? <GhostLoader count={5} /> : <LabTestList list={data} />}
    </div>
  );
}

export default ViewAll;
