import React from "react";
import { Spinner } from "@innovaccer/design-system";

import { fetchAllLabTests } from "../../api";
import LabTestList from "../../components/LabTestList";

class Home extends React.Component {
  state = {
    isLoading: false,
    list: [],
  };

  updateCount = (count) =>
    window.parent.postMessage(
      {
        action: "updateCount",
        params: {
          count,
        },
      },
      "*"
    );

  getData() {
    this.setState({ isLoading: true });
    fetchAllLabTests()
      .then((list) => {
        this.setState({ list });
        this.updateCount(list.length);
      })
      .finally(() => this.setState({ isLoading: false }));
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { isLoading, list } = this.state;

    if (isLoading) {
      return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
          <Spinner />
        </div>
      );
    }

    return (
      <div className="px-5">
        <LabTestList list={list.slice(0, 7)} />
      </div>
    );
  }
}

export default Home;
