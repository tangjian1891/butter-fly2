import { defineComponent as i, ref as F, resolveComponent as _, openBlock as E, createElementBlock as f, createVNode as n, withCtx as s, createTextVNode as a, pushScopeId as v, popScopeId as B, createElementVNode as C } from "vue";
import { Collapse as p, CollapseItem as d } from "vant";
const D = (u, e) => {
  if (u.install = (t) => {
    for (const o of [u, ...Object.values(e ?? {})])
      t.component(o.name, o);
  }, e)
    for (const [t, o] of Object.entries(e))
      u[t] = o;
  return u;
}, A = i({
  components: {
    [p.name]: p,
    [d.name]: d
  },
  setup() {
    return {
      activeNames: F([])
    };
  }
});
const h = (u, e) => {
  const t = u.__vccOpts || u;
  for (const [o, l] of e)
    t[o] = l;
  return t;
}, N = (u) => (v("data-v-045677bc"), u = u(), B(), u), I = /* @__PURE__ */ N(() => /* @__PURE__ */ C("div", { class: "ddd_title" }, "看看样式能生效吗", -1)), V = /* @__PURE__ */ a(" 代码是写出来给人看的，附带能在机器上运行。 "), b = /* @__PURE__ */ a(" 技术无非就是那些开发它的人的共同灵魂。 "), k = /* @__PURE__ */ a(" 在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。 ");
function y(u, e, t, o, l, w) {
  const c = _("van-collapse-item"), m = _("van-collapse");
  return E(), f("div", null, [
    I,
    n(m, {
      modelValue: u.activeNames,
      "onUpdate:modelValue": e[0] || (e[0] = (r) => u.activeNames = r)
    }, {
      default: s(() => [
        n(c, {
          title: "标题1",
          name: "1"
        }, {
          default: s(() => [
            V
          ]),
          _: 1
        }),
        n(c, {
          title: "标题2",
          name: "2"
        }, {
          default: s(() => [
            b
          ]),
          _: 1
        }),
        n(c, {
          title: "标题3",
          name: "3"
        }, {
          default: s(() => [
            k
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"])
  ]);
}
const $ = /* @__PURE__ */ h(A, [["render", y], ["__scopeId", "data-v-045677bc"]]), S = D($);
export {
  S as BFCollapse,
  S as default
};
