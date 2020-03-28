export default {
  bind: function(el, binding, vnode) {
    el.eventOnClick = function(event) {
      if (el == event.target || el.contains(event.target)) {
        if (el == event.target) {
          vnode.context[binding.expression](event);
        }
      }
    };
    document.addEventListener("click", el.eventOnClick);
    document.addEventListener("touchend", el.eventOnClick);
  },
  unbind: function(el) {
    document.removeEventListener("click", el.eventOnClick);
    document.removeEventListener("touchend", el.eventOnClick);
  }
};
