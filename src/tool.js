import ResizeObserver from 'resize-observer-polyfill';
export default {
  a(x) {
    console.log(x);
  },
  clearNode(node) {
    while (node.hasChildNodes()) {
      node.removeChild(node.lastChild);
    }
  },
  //   监控DOM元素，第一个参数为监控的DOM对象，第二个是回调函数。
  watchDom(host, callback) {
    const myObserver = new ResizeObserver(entries => {
      callback();
    });
    myObserver.observe(host);
  }
};
