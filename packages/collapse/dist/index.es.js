import { defineComponent as p, ref as r, openBlock as u, createElementBlock as i, createVNode as s, unref as c, withCtx as n, createTextVNode as a, pushScopeId as f, popScopeId as m, createElementVNode as v } from "vue";
import { Collapse as h, CollapseItem as _ } from "vant";
const C = (e, o) => {
  if (e.install = (l) => {
    for (const t of [e, ...Object.values(o ?? {})])
      l.component(t.name, t);
  }, o)
    for (const [l, t] of Object.entries(o))
      e[l] = t;
  return e;
}, I = (e) => (f("data-v-2dc41008"), e = e(), m(), e), V = /* @__PURE__ */ I(() => /* @__PURE__ */ v("div", { class: "ddd_title" }, "看看样式能生效吗", -1)), x = /* @__PURE__ */ a(" 代码是写出来给人看的，附带能在机器上运行。 "), k = /* @__PURE__ */ a(" 技术无非就是那些开发它的人的共同灵魂。 "), y = /* @__PURE__ */ a(" 在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。 "), B = /* @__PURE__ */ p({
  setup(e) {
    const o = r([]);
    return (l, t) => (u(), i("div", null, [
      V,
      s(c(h), {
        modelValue: o.value,
        "onUpdate:modelValue": t[0] || (t[0] = (d) => o.value = d)
      }, {
        default: n(() => [
          s(c(_), {
            title: "标题1",
            name: "1"
          }, {
            default: n(() => [
              x
            ]),
            _: 1
          }),
          s(c(_), {
            title: "标题2",
            name: "2"
          }, {
            default: n(() => [
              k
            ]),
            _: 1
          }),
          s(c(_), {
            title: "标题3",
            name: "3"
          }, {
            default: n(() => [
              y
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const N = (e, o) => {
  const l = e.__vccOpts || e;
  for (const [t, d] of o)
    l[t] = d;
  return l;
}, w = /* @__PURE__ */ N(B, [["__scopeId", "data-v-2dc41008"]]), b = C(w);
export {
  b as BFCollapse,
  b as default
};
