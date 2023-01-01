import { defineComponent as E, reactive as d, resolveComponent as m, openBlock as F, createElementBlock as f, createVNode as n, withCtx as s, createTextVNode as c } from "vue";
import { Collapse as r, CollapseItem as p } from "vant";
const B = (u, e) => {
  if (u.install = (t) => {
    for (const o of [u, ...Object.values(e ?? {})])
      t.component(o.name, o);
  }, e)
    for (const [t, o] of Object.entries(e))
      u[t] = o;
  return u;
}, v = E({
  components: {
    [r.name]: r,
    [p.name]: p
  },
  setup() {
    return {
      activeNames: d([])
    };
  }
}), C = (u, e) => {
  const t = u.__vccOpts || u;
  for (const [o, l] of e)
    t[o] = l;
  return t;
}, A = /* @__PURE__ */ c(" 代码是写出来给人看的，附带能在机器上运行。 "), D = /* @__PURE__ */ c(" 技术无非就是那些开发它的人的共同灵魂。 "), N = /* @__PURE__ */ c(" 在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。 ");
function V(u, e, t, o, l, k) {
  const a = m("van-collapse-item"), _ = m("van-collapse");
  return F(), f("div", null, [
    n(_, {
      modelValue: u.activeNames,
      "onUpdate:modelValue": e[0] || (e[0] = (i) => u.activeNames = i)
    }, {
      default: s(() => [
        n(a, {
          title: "标题1",
          name: "1"
        }, {
          default: s(() => [
            A
          ]),
          _: 1
        }),
        n(a, {
          title: "标题2",
          name: "2"
        }, {
          default: s(() => [
            D
          ]),
          _: 1
        }),
        n(a, {
          title: "标题3",
          name: "3"
        }, {
          default: s(() => [
            N
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"])
  ]);
}
const h = /* @__PURE__ */ C(v, [["render", V]]), b = B(h);
export {
  b as BFButton,
  b as default
};
