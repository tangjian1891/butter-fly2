import { defineComponent as u, resolveComponent as p, openBlock as _, createElementBlock as l, createVNode as a, withCtx as f, createTextVNode as m } from "vue";
import { Button as s } from "vant";
const d = (t, e) => {
  if (t.install = (o) => {
    for (const n of [t, ...Object.values(e ?? {})])
      o.component(n.name, n);
  }, e)
    for (const [o, n] of Object.entries(e))
      t[o] = n;
  return t;
}, i = u({
  name: "BFButton",
  components: {
    [s.name]: s
  },
  setup() {
  }
}), B = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, c] of e)
    o[n] = c;
  return o;
}, v = /* @__PURE__ */ m("这是按钮");
function F(t, e, o, n, c, h) {
  const r = p("van-button");
  return _(), l("div", null, [
    a(r, null, {
      default: f(() => [
        v
      ]),
      _: 1
    })
  ]);
}
const b = /* @__PURE__ */ B(i, [["render", F]]), x = d(b);
export {
  x as BFButton,
  x as default
};
