module.exports = {
  evntWrapper: function(ev) {
    let { pageX, pageY, target } = ev;
    let { left, top } = target.getBoundingClientRect();
    return { x: pageX - left, y: pageY - top };
  },
  getOffset: function(ele) {
    let mouse = { x: 0, y: 0 };
    ele.addEventListener('mousemove', function (e) {
      let { x, y } = this.evntWrapper(e);
      mouse.x = x;
      mouse.y = y;
    });
    return mouse;
  }
}