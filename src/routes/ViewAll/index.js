import React from "react";
import { Spinner } from "@innovaccer/design-system";

import { fetchAllLabTests } from "../../api";
import LabTestList from "../../components/LabTestList";

class ViewAll extends React.Component {
  state = {
    isLoading: false,
    list: [],
  };

  getData() {
    this.setState({ isLoading: true });
    fetchAllLabTests()
      .then((list) => {
        this.setState({ list });
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
      <div className="px-5 vh-100 overflow-auto">
        <LabTestList list={list} />
      </div>
    );
  }
}

export default ViewAll;
