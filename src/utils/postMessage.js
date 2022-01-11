const postMessage = (action, params) =>
  window.parent.postMessage({ action, params }, "*");

export default postMessage;
