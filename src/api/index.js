import labTests from "../constants/labTests";

export const fetchRecentLabTests = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(labTests.slice(0, 5));
    }, 2000);
  });

export const fetchAllLabTests = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(labTests);
    }, 2000);
  });
