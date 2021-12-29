import {
  v as c,
  r as d,
  j as u,
  F as f,
  a as t,
  T as g,
  B as m,
  V as h,
  H as S,
  I as w,
  e as C,
  R,
  b as k,
  C as j,
} from "./vendor.c841f75f.js";
const E = function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) l(e);
  new MutationObserver((e) => {
    for (const r of e)
      if (r.type === "childList")
        for (const i of r.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && l(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(e) {
    const r = {};
    return (
      e.integrity && (r.integrity = e.integrity),
      e.referrerpolicy && (r.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (r.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function l(e) {
    if (e.ep) return;
    e.ep = !0;
    const r = s(e);
    fetch(e.href, r);
  }
};
E();
const L = [
  { id: c(), name: "Medias" },
  { id: c(), name: "caramelos" },
  { id: c(), name: "Vitel Tone" },
];
function I() {
  const [a, n] = d.exports.useState([]),
    [s, l] = d.exports.useState(""),
    [e, r] = d.exports.useState("");
  d.exports.useEffect(() => {
    n(L);
  }, []);
  const i = () => {
      if (s.trim() === "") return r("El regalo no puede estar vac\xEDo"), !1;
      for (let o of a)
        if (o.name.toLocaleUpperCase() === s.trim().toLocaleUpperCase())
          return r("El regalo ya existe"), !1;
      return r(""), !0;
    },
    p = (o) => {
      o.preventDefault(), i() && n([...a, { id: c(), name: s.trim() }]), l("");
    },
    y = (o) => {
      n(a.filter((x) => x.id !== o));
    },
    b = () => {
      n([]);
    },
    v = a.map((o) =>
      u(
        f,
        {
          justifyContent: "space-between",
          w: "100%",
          children: [
            t(g, { children: o.name }),
            t(m, {
              colorScheme: "red",
              size: "xs",
              onClick: () => y(o.id),
              children: "x",
            }),
          ],
        },
        o.id
      )
    );
  return t(f, {
    alignItems: "center",
    justifyContent: "center",
    minH: "100vh",
    w: "100%",
    children: u(h, {
      background: "white",
      boxShadow: "md",
      p: 4,
      w: "30%",
      children: [
        t(S, { fontFamily: "'Mountains of Christmas'", children: "Regalos:" }),
        u(f, {
          as: "form",
          gap: 2,
          onSubmit: p,
          children: [
            t(w, {
              placeholder: "Regalo",
              value: s,
              onChange: (o) => l(o.target.value),
            }),
            t(m, { colorScheme: "red", type: "submit", children: "Agregar" }),
          ],
        }),
        e && t(g, { color: "red.500", children: e }),
        t(h, {
          w: "100%",
          children:
            a.length !== 0
              ? v
              : t(g, {
                  color: "gray.400",
                  children: "No hay regalos Grinch!! agrega uno .",
                }),
        }),
        a.length !== 0 &&
          t(m, {
            colorScheme: "red",
            w: "100%",
            onClick: b,
            children: "Borrar todo",
          }),
      ],
    }),
  });
}
var M = "./assets/bg.6808d548.jpg",
  N = C({
    styles: {
      global: {
        body: {
          backgroundImage: `url(${M})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          fontSize: "16px",
          w: "100%",
          minH: "100vh",
        },
      },
    },
  });
R.render(
  t(k.StrictMode, { children: t(j, { theme: N, children: t(I, {}) }) }),
  document.getElementById("root")
);
