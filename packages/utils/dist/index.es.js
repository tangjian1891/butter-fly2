const c = () => !0, r = (t, o) => {
  if (t.install = (n) => {
    for (const e of [t, ...Object.values(o ?? {})])
      n.component(e.name, e);
  }, o)
    for (const [n, e] of Object.entries(o))
      t[n] = e;
  return t;
};
function s(t) {
  return `bf-${t}`;
}
export {
  s as createNamespace,
  c as validateInput,
  r as withInstall
};
