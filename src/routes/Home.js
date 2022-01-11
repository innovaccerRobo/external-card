import React, { useEffect, useState } from "react";

import { fetchAllLabTests } from "../api";
import LabTestList from "../components/LabTestList";
import GhostLoader from "../components/GhostLoader";
import postMessage from "../utils/postMessage";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const getData = () => {
    setIsLoading(true);
    fetchAllLabTests()
      .then((list) => {
        setData(list);
        postMessage("updateCount", { count: list.length });
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    postMessage("updateHeight", { height: document.body.scrollHeight });
  }, [data, isLoading]);

  return (
    <div className="px-5">
      {isLoading ? (
        <GhostLoader count={5} />
      ) : (
        <LabTestList list={data.slice(0, 7)} />
      )}
    </div>
  );
}

export default Home;
