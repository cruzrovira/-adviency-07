var Qi =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : typeof self != "undefined"
      ? self
      : {},
  R = { exports: {} },
  W = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var Nc = Object.getOwnPropertySymbols,
  ev = Object.prototype.hasOwnProperty,
  tv = Object.prototype.propertyIsEnumerable;
function rv(e) {
  if (e == null)
    throw new TypeError(
      "Object.assign cannot be called with null or undefined"
    );
  return Object(e);
}
function nv() {
  try {
    if (!Object.assign) return !1;
    var e = new String("abc");
    if (((e[5] = "de"), Object.getOwnPropertyNames(e)[0] === "5")) return !1;
    for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
    var n = Object.getOwnPropertyNames(t).map(function (o) {
      return t[o];
    });
    if (n.join("") !== "0123456789") return !1;
    var i = {};
    return (
      "abcdefghijklmnopqrst".split("").forEach(function (o) {
        i[o] = o;
      }),
      Object.keys(Object.assign({}, i)).join("") === "abcdefghijklmnopqrst"
    );
  } catch {
    return !1;
  }
}
var Lc = nv()
  ? Object.assign
  : function (e, t) {
      for (var r, n = rv(e), i, o = 1; o < arguments.length; o++) {
        r = Object(arguments[o]);
        for (var a in r) ev.call(r, a) && (n[a] = r[a]);
        if (Nc) {
          i = Nc(r);
          for (var l = 0; l < i.length; l++)
            tv.call(r, i[l]) && (n[i[l]] = r[i[l]]);
        }
      }
      return n;
    };
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sl = Lc,
  Br = 60103,
  jc = 60106;
W.Fragment = 60107;
W.StrictMode = 60108;
W.Profiler = 60114;
var Dc = 60109,
  Wc = 60110,
  Hc = 60112;
W.Suspense = 60113;
var Vc = 60115,
  Uc = 60116;
if (typeof Symbol == "function" && Symbol.for) {
  var it = Symbol.for;
  (Br = it("react.element")),
    (jc = it("react.portal")),
    (W.Fragment = it("react.fragment")),
    (W.StrictMode = it("react.strict_mode")),
    (W.Profiler = it("react.profiler")),
    (Dc = it("react.provider")),
    (Wc = it("react.context")),
    (Hc = it("react.forward_ref")),
    (W.Suspense = it("react.suspense")),
    (Vc = it("react.memo")),
    (Uc = it("react.lazy"));
}
var Gc = typeof Symbol == "function" && Symbol.iterator;
function iv(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Gc && e[Gc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
function Tn(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Yc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Qc = {};
function Mr(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Qc),
    (this.updater = r || Yc);
}
Mr.prototype.isReactComponent = {};
Mr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(Tn(85));
  this.updater.enqueueSetState(this, e, t, "setState");
};
Mr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Xc() {}
Xc.prototype = Mr.prototype;
function cl(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Qc),
    (this.updater = r || Yc);
}
var dl = (cl.prototype = new Xc());
dl.constructor = cl;
sl(dl, Mr.prototype);
dl.isPureReactComponent = !0;
var fl = { current: null },
  Kc = Object.prototype.hasOwnProperty,
  qc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zc(e, t, r) {
  var n,
    i = {},
    o = null,
    a = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Kc.call(t, n) && !qc.hasOwnProperty(n) && (i[n] = t[n]);
  var l = arguments.length - 2;
  if (l === 1) i.children = r;
  else if (1 < l) {
    for (var u = Array(l), s = 0; s < l; s++) u[s] = arguments[s + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (n in ((l = e.defaultProps), l)) i[n] === void 0 && (i[n] = l[n]);
  return {
    $$typeof: Br,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: fl.current,
  };
}
function ov(e, t) {
  return {
    $$typeof: Br,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function pl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Br;
}
function av(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var Jc = /\/+/g;
function hl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? av("" + e.key)
    : t.toString(36);
}
function Xi(e, t, r, n, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (o) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Br:
          case jc:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = n === "" ? "." + hl(a, 0) : n),
      Array.isArray(i)
        ? ((r = ""),
          e != null && (r = e.replace(Jc, "$&/") + "/"),
          Xi(i, t, r, "", function (s) {
            return s;
          }))
        : i != null &&
          (pl(i) &&
            (i = ov(
              i,
              r +
                (!i.key || (a && a.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Jc, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((a = 0), (n = n === "" ? "." : n + ":"), Array.isArray(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var u = n + hl(o, l);
      a += Xi(o, t, r, u, i);
    }
  else if (((u = iv(e)), typeof u == "function"))
    for (e = u.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (u = n + hl(o, l++)), (a += Xi(o, t, r, u, i));
  else if (o === "object")
    throw (
      ((t = "" + e),
      Error(
        Tn(
          31,
          t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t
        )
      ))
    );
  return a;
}
function Ki(e, t, r) {
  if (e == null) return e;
  var n = [],
    i = 0;
  return (
    Xi(e, n, "", "", function (o) {
      return t.call(r, o, i++);
    }),
    n
  );
}
function lv(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      (e._status = 0),
      (e._result = t),
      t.then(
        function (r) {
          e._status === 0 &&
            ((r = r.default), (e._status = 1), (e._result = r));
        },
        function (r) {
          e._status === 0 && ((e._status = 2), (e._result = r));
        }
      );
  }
  if (e._status === 1) return e._result;
  throw e._result;
}
var ed = { current: null };
function Rt() {
  var e = ed.current;
  if (e === null) throw Error(Tn(321));
  return e;
}
var uv = {
  ReactCurrentDispatcher: ed,
  ReactCurrentBatchConfig: { transition: 0 },
  ReactCurrentOwner: fl,
  IsSomeRendererActing: { current: !1 },
  assign: sl,
};
W.Children = {
  map: Ki,
  forEach: function (e, t, r) {
    Ki(
      e,
      function () {
        t.apply(this, arguments);
      },
      r
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ki(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ki(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!pl(e)) throw Error(Tn(143));
    return e;
  },
};
W.Component = Mr;
W.PureComponent = cl;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uv;
W.cloneElement = function (e, t, r) {
  if (e == null) throw Error(Tn(267, e));
  var n = sl({}, e.props),
    i = e.key,
    o = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (a = fl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (u in t)
      Kc.call(t, u) &&
        !qc.hasOwnProperty(u) &&
        (n[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) n.children = r;
  else if (1 < u) {
    l = Array(u);
    for (var s = 0; s < u; s++) l[s] = arguments[s + 2];
    n.children = l;
  }
  return { $$typeof: Br, type: e.type, key: i, ref: o, props: n, _owner: a };
};
W.createContext = function (e, t) {
  return (
    t === void 0 && (t = null),
    (e = {
      $$typeof: Wc,
      _calculateChangedBits: t,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
    }),
    (e.Provider = { $$typeof: Dc, _context: e }),
    (e.Consumer = e)
  );
};
W.createElement = Zc;
W.createFactory = function (e) {
  var t = Zc.bind(null, e);
  return (t.type = e), t;
};
W.createRef = function () {
  return { current: null };
};
W.forwardRef = function (e) {
  return { $$typeof: Hc, render: e };
};
W.isValidElement = pl;
W.lazy = function (e) {
  return { $$typeof: Uc, _payload: { _status: -1, _result: e }, _init: lv };
};
W.memo = function (e, t) {
  return { $$typeof: Vc, type: e, compare: t === void 0 ? null : t };
};
W.useCallback = function (e, t) {
  return Rt().useCallback(e, t);
};
W.useContext = function (e, t) {
  return Rt().useContext(e, t);
};
W.useDebugValue = function () {};
W.useEffect = function (e, t) {
  return Rt().useEffect(e, t);
};
W.useImperativeHandle = function (e, t, r) {
  return Rt().useImperativeHandle(e, t, r);
};
W.useLayoutEffect = function (e, t) {
  return Rt().useLayoutEffect(e, t);
};
W.useMemo = function (e, t) {
  return Rt().useMemo(e, t);
};
W.useReducer = function (e, t, r) {
  return Rt().useReducer(e, t, r);
};
W.useRef = function (e) {
  return Rt().useRef(e);
};
W.useState = function (e) {
  return Rt().useState(e);
};
W.version = "17.0.2";
R.exports = W;
var oE = R.exports,
  td = { exports: {} },
  Qe = {},
  rd = { exports: {} },
  nd = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  var t, r, n, i;
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var a = Date,
      l = a.now();
    e.unstable_now = function () {
      return a.now() - l;
    };
  }
  if (typeof window == "undefined" || typeof MessageChannel != "function") {
    var u = null,
      s = null,
      m = function () {
        if (u !== null)
          try {
            var z = e.unstable_now();
            u(!0, z), (u = null);
          } catch (F) {
            throw (setTimeout(m, 0), F);
          }
      };
    (t = function (z) {
      u !== null ? setTimeout(t, 0, z) : ((u = z), setTimeout(m, 0));
    }),
      (r = function (z, F) {
        s = setTimeout(z, F);
      }),
      (n = function () {
        clearTimeout(s);
      }),
      (e.unstable_shouldYield = function () {
        return !1;
      }),
      (i = e.unstable_forceFrameRate = function () {});
  } else {
    var b = window.setTimeout,
      v = window.clearTimeout;
    if (typeof console != "undefined") {
      var w = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame != "function" &&
        console.error(
          "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
        ),
        typeof w != "function" &&
          console.error(
            "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
          );
    }
    var C = !1,
      k = null,
      p = -1,
      d = 5,
      f = 0;
    (e.unstable_shouldYield = function () {
      return e.unstable_now() >= f;
    }),
      (i = function () {}),
      (e.unstable_forceFrameRate = function (z) {
        0 > z || 125 < z
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
            )
          : (d = 0 < z ? Math.floor(1e3 / z) : 5);
      });
    var y = new MessageChannel(),
      x = y.port2;
    (y.port1.onmessage = function () {
      if (k !== null) {
        var z = e.unstable_now();
        f = z + d;
        try {
          k(!0, z) ? x.postMessage(null) : ((C = !1), (k = null));
        } catch (F) {
          throw (x.postMessage(null), F);
        }
      } else C = !1;
    }),
      (t = function (z) {
        (k = z), C || ((C = !0), x.postMessage(null));
      }),
      (r = function (z, F) {
        p = b(function () {
          z(e.unstable_now());
        }, F);
      }),
      (n = function () {
        v(p), (p = -1);
      });
  }
  function $(z, F) {
    var B = z.length;
    z.push(F);
    e: for (;;) {
      var te = (B - 1) >>> 1,
        pe = z[te];
      if (pe !== void 0 && 0 < M(pe, F)) (z[te] = F), (z[B] = pe), (B = te);
      else break e;
    }
  }
  function E(z) {
    return (z = z[0]), z === void 0 ? null : z;
  }
  function T(z) {
    var F = z[0];
    if (F !== void 0) {
      var B = z.pop();
      if (B !== F) {
        z[0] = B;
        e: for (var te = 0, pe = z.length; te < pe; ) {
          var Le = 2 * (te + 1) - 1,
            dt = z[Le],
            nt = Le + 1,
            Ct = z[nt];
          if (dt !== void 0 && 0 > M(dt, B))
            Ct !== void 0 && 0 > M(Ct, dt)
              ? ((z[te] = Ct), (z[nt] = B), (te = nt))
              : ((z[te] = dt), (z[Le] = B), (te = Le));
          else if (Ct !== void 0 && 0 > M(Ct, B))
            (z[te] = Ct), (z[nt] = B), (te = nt);
          else break e;
        }
      }
      return F;
    }
    return null;
  }
  function M(z, F) {
    var B = z.sortIndex - F.sortIndex;
    return B !== 0 ? B : z.id - F.id;
  }
  var A = [],
    D = [],
    Pe = 1,
    ee = null,
    ae = 3,
    Nt = !1,
    _t = !1,
    sr = !1;
  function xn(z) {
    for (var F = E(D); F !== null; ) {
      if (F.callback === null) T(D);
      else if (F.startTime <= z)
        T(D), (F.sortIndex = F.expirationTime), $(A, F);
      else break;
      F = E(D);
    }
  }
  function wn(z) {
    if (((sr = !1), xn(z), !_t))
      if (E(A) !== null) (_t = !0), t(kn);
      else {
        var F = E(D);
        F !== null && r(wn, F.startTime - z);
      }
  }
  function kn(z, F) {
    (_t = !1), sr && ((sr = !1), n()), (Nt = !0);
    var B = ae;
    try {
      for (
        xn(F), ee = E(A);
        ee !== null &&
        (!(ee.expirationTime > F) || (z && !e.unstable_shouldYield()));

      ) {
        var te = ee.callback;
        if (typeof te == "function") {
          (ee.callback = null), (ae = ee.priorityLevel);
          var pe = te(ee.expirationTime <= F);
          (F = e.unstable_now()),
            typeof pe == "function" ? (ee.callback = pe) : ee === E(A) && T(A),
            xn(F);
        } else T(A);
        ee = E(A);
      }
      if (ee !== null) var Le = !0;
      else {
        var dt = E(D);
        dt !== null && r(wn, dt.startTime - F), (Le = !1);
      }
      return Le;
    } finally {
      (ee = null), (ae = B), (Nt = !1);
    }
  }
  var Ka = i;
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (z) {
      z.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      _t || Nt || ((_t = !0), t(kn));
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return ae;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return E(A);
    }),
    (e.unstable_next = function (z) {
      switch (ae) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = ae;
      }
      var B = ae;
      ae = F;
      try {
        return z();
      } finally {
        ae = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = Ka),
    (e.unstable_runWithPriority = function (z, F) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var B = ae;
      ae = z;
      try {
        return F();
      } finally {
        ae = B;
      }
    }),
    (e.unstable_scheduleCallback = function (z, F, B) {
      var te = e.unstable_now();
      switch (
        (typeof B == "object" && B !== null
          ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? te + B : te))
          : (B = te),
        z)
      ) {
        case 1:
          var pe = -1;
          break;
        case 2:
          pe = 250;
          break;
        case 5:
          pe = 1073741823;
          break;
        case 4:
          pe = 1e4;
          break;
        default:
          pe = 5e3;
      }
      return (
        (pe = B + pe),
        (z = {
          id: Pe++,
          callback: F,
          priorityLevel: z,
          startTime: B,
          expirationTime: pe,
          sortIndex: -1,
        }),
        B > te
          ? ((z.sortIndex = B),
            $(D, z),
            E(A) === null &&
              z === E(D) &&
              (sr ? n() : (sr = !0), r(wn, B - te)))
          : ((z.sortIndex = pe), $(A, z), _t || Nt || ((_t = !0), t(kn))),
        z
      );
    }),
    (e.unstable_wrapCallback = function (z) {
      var F = ae;
      return function () {
        var B = ae;
        ae = F;
        try {
          return z.apply(this, arguments);
        } finally {
          ae = B;
        }
      };
    });
})(nd);
rd.exports = nd;
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qi = R.exports,
  ie = Lc,
  ve = rd.exports;
function P(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
if (!qi) throw Error(P(227));
var id = new Set(),
  Rn = {};
function pr(e, t) {
  Fr(e, t), Fr(e + "Capture", t);
}
function Fr(e, t) {
  for (Rn[e] = t, e = 0; e < t.length; e++) id.add(t[e]);
}
var Pt = !(
    typeof window == "undefined" ||
    typeof window.document == "undefined" ||
    typeof window.document.createElement == "undefined"
  ),
  sv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  od = Object.prototype.hasOwnProperty,
  ad = {},
  ld = {};
function cv(e) {
  return od.call(ld, e)
    ? !0
    : od.call(ad, e)
    ? !1
    : sv.test(e)
    ? (ld[e] = !0)
    : ((ad[e] = !0), !1);
}
function dv(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : r !== null
        ? !r.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function fv(e, t, r, n) {
  if (t === null || typeof t == "undefined" || dv(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function $e(e, t, r, n, i, o, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = i),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = a);
}
var be = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    be[e] = new $e(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  be[t] = new $e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  be[e] = new $e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  be[e] = new $e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    be[e] = new $e(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  be[e] = new $e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  be[e] = new $e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  be[e] = new $e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  be[e] = new $e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ml = /[\-:]([a-z])/g;
function vl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ml, vl);
    be[t] = new $e(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ml, vl);
    be[t] = new $e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ml, vl);
  be[t] = new $e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  be[e] = new $e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
be.xlinkHref = new $e(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  be[e] = new $e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function gl(e, t, r, n) {
  var i = be.hasOwnProperty(t) ? be[t] : null,
    o =
      i !== null
        ? i.type === 0
        : n
        ? !1
        : !(
            !(2 < t.length) ||
            (t[0] !== "o" && t[0] !== "O") ||
            (t[1] !== "n" && t[1] !== "N")
          );
  o ||
    (fv(t, r, i, n) && (r = null),
    n || i === null
      ? cv(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
      : i.mustUseProperty
      ? (e[i.propertyName] = r === null ? (i.type === 3 ? !1 : "") : r)
      : ((t = i.attributeName),
        (n = i.attributeNamespace),
        r === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (r = i === 3 || (i === 4 && r === !0) ? "" : "" + r),
            n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var hr = qi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Pn = 60103,
  mr = 60106,
  Lt = 60107,
  yl = 60108,
  $n = 60114,
  bl = 60109,
  Sl = 60110,
  Zi = 60112,
  zn = 60113,
  Ji = 60120,
  eo = 60115,
  xl = 60116,
  wl = 60121,
  kl = 60128,
  ud = 60129,
  _l = 60130,
  Cl = 60131;
if (typeof Symbol == "function" && Symbol.for) {
  var ge = Symbol.for;
  (Pn = ge("react.element")),
    (mr = ge("react.portal")),
    (Lt = ge("react.fragment")),
    (yl = ge("react.strict_mode")),
    ($n = ge("react.profiler")),
    (bl = ge("react.provider")),
    (Sl = ge("react.context")),
    (Zi = ge("react.forward_ref")),
    (zn = ge("react.suspense")),
    (Ji = ge("react.suspense_list")),
    (eo = ge("react.memo")),
    (xl = ge("react.lazy")),
    (wl = ge("react.block")),
    ge("react.scope"),
    (kl = ge("react.opaque.id")),
    (ud = ge("react.debug_trace_mode")),
    (_l = ge("react.offscreen")),
    (Cl = ge("react.legacy_hidden"));
}
var sd = typeof Symbol == "function" && Symbol.iterator;
function An(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (sd && e[sd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var El;
function In(e) {
  if (El === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      El = (t && t[1]) || "";
    }
  return (
    `
` +
    El +
    e
  );
}
var Tl = !1;
function to(e, t) {
  if (!e || Tl) return "";
  Tl = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var n = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          n = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      e();
    }
  } catch (u) {
    if (u && n && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = n.stack.split(`
`),
          a = i.length - 1,
          l = o.length - 1;
        1 <= a && 0 <= l && i[a] !== o[l];

      )
        l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (i[a] !== o[l]) {
          if (a !== 1 || l !== 1)
            do
              if ((a--, l--, 0 > l || i[a] !== o[l]))
                return (
                  `
` + i[a].replace(" at new ", " at ")
                );
            while (1 <= a && 0 <= l);
          break;
        }
    }
  } finally {
    (Tl = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? In(e) : "";
}
function pv(e) {
  switch (e.tag) {
    case 5:
      return In(e.type);
    case 16:
      return In("Lazy");
    case 13:
      return In("Suspense");
    case 19:
      return In("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = to(e.type, !1)), e;
    case 11:
      return (e = to(e.type.render, !1)), e;
    case 22:
      return (e = to(e.type._render, !1)), e;
    case 1:
      return (e = to(e.type, !0)), e;
    default:
      return "";
  }
}
function Nr(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Lt:
      return "Fragment";
    case mr:
      return "Portal";
    case $n:
      return "Profiler";
    case yl:
      return "StrictMode";
    case zn:
      return "Suspense";
    case Ji:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Sl:
        return (e.displayName || "Context") + ".Consumer";
      case bl:
        return (e._context.displayName || "Context") + ".Provider";
      case Zi:
        var t = e.render;
        return (
          (t = t.displayName || t.name || ""),
          e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
        );
      case eo:
        return Nr(e.type);
      case wl:
        return Nr(e._render);
      case xl:
        (t = e._payload), (e = e._init);
        try {
          return Nr(e(t));
        } catch {}
    }
  return null;
}
function jt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return e;
    default:
      return "";
  }
}
function cd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function hv(e) {
  var t = cd(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r != "undefined" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var i = r.get,
      o = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (a) {
          (n = "" + a), o.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (a) {
          n = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ro(e) {
  e._valueTracker || (e._valueTracker = hv(e));
}
function dd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return (
    e && (n = cd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function no(e) {
  if (
    ((e = e || (typeof document != "undefined" ? document : void 0)),
    typeof e == "undefined")
  )
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Rl(e, t) {
  var r = t.checked;
  return ie({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r != null ? r : e._wrapperState.initialChecked,
  });
}
function fd(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (r = jt(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function pd(e, t) {
  (t = t.checked), t != null && gl(e, "checked", t, !1);
}
function Pl(e, t) {
  pd(e, t);
  var r = jt(t.value),
    n = t.type;
  if (r != null)
    n === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? $l(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && $l(e, t.type, jt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function hd(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r);
}
function $l(e, t, r) {
  (t !== "number" || no(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
function mv(e) {
  var t = "";
  return (
    qi.Children.forEach(e, function (r) {
      r != null && (t += r);
    }),
    t
  );
}
function zl(e, t) {
  return (
    (e = ie({ children: void 0 }, t)),
    (t = mv(t.children)) && (e.children = t),
    e
  );
}
function Lr(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < r.length; i++) t["$" + r[i]] = !0;
    for (r = 0; r < e.length; r++)
      (i = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== i && (e[r].selected = i),
        i && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + jt(r), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === r) {
        (e[i].selected = !0), n && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Al(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return ie({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function md(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(P(92));
      if (Array.isArray(r)) {
        if (!(1 >= r.length)) throw Error(P(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: jt(r) };
}
function vd(e, t) {
  var r = jt(t.value),
    n = jt(t.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n);
}
function gd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
var Il = {
  html: "http://www.w3.org/1999/xhtml",
  mathml: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg",
};
function yd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ol(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? yd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var io,
  bd = (function (e) {
    return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== Il.svg || "innerHTML" in e) e.innerHTML = t;
    else {
      for (
        io = io || document.createElement("div"),
          io.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = io.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function On(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Bn = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  vv = ["Webkit", "ms", "Moz", "O"];
Object.keys(Bn).forEach(function (e) {
  vv.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Bn[t] = Bn[e]);
  });
});
function Sd(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (Bn.hasOwnProperty(e) && Bn[e])
    ? ("" + t).trim()
    : t + "px";
}
function xd(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        i = Sd(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, i) : (e[r] = i);
    }
}
var gv = ie(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Bl(e, t) {
  if (t) {
    if (gv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (
        !(
          typeof t.dangerouslySetInnerHTML == "object" &&
          "__html" in t.dangerouslySetInnerHTML
        )
      )
        throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(P(62));
  }
}
function Ml(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
function Fl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Nl = null,
  jr = null,
  Dr = null;
function wd(e) {
  if ((e = ei(e))) {
    if (typeof Nl != "function") throw Error(P(280));
    var t = e.stateNode;
    t && ((t = ko(t)), Nl(e.stateNode, e.type, t));
  }
}
function kd(e) {
  jr ? (Dr ? Dr.push(e) : (Dr = [e])) : (jr = e);
}
function _d() {
  if (jr) {
    var e = jr,
      t = Dr;
    if (((Dr = jr = null), wd(e), t)) for (e = 0; e < t.length; e++) wd(t[e]);
  }
}
function Ll(e, t) {
  return e(t);
}
function Cd(e, t, r, n, i) {
  return e(t, r, n, i);
}
function jl() {}
var Ed = Ll,
  vr = !1,
  Dl = !1;
function Wl() {
  (jr !== null || Dr !== null) && (jl(), _d());
}
function yv(e, t, r) {
  if (Dl) return e(t, r);
  Dl = !0;
  try {
    return Ed(e, t, r);
  } finally {
    (Dl = !1), Wl();
  }
}
function Mn(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = ko(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(P(231, t, typeof r));
  return r;
}
var Hl = !1;
if (Pt)
  try {
    var Fn = {};
    Object.defineProperty(Fn, "passive", {
      get: function () {
        Hl = !0;
      },
    }),
      window.addEventListener("test", Fn, Fn),
      window.removeEventListener("test", Fn, Fn);
  } catch {
    Hl = !1;
  }
function bv(e, t, r, n, i, o, a, l, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, s);
  } catch (m) {
    this.onError(m);
  }
}
var Nn = !1,
  oo = null,
  ao = !1,
  Vl = null,
  Sv = {
    onError: function (e) {
      (Nn = !0), (oo = e);
    },
  };
function xv(e, t, r, n, i, o, a, l, u) {
  (Nn = !1), (oo = null), bv.apply(Sv, arguments);
}
function wv(e, t, r, n, i, o, a, l, u) {
  if ((xv.apply(this, arguments), Nn)) {
    if (Nn) {
      var s = oo;
      (Nn = !1), (oo = null);
    } else throw Error(P(198));
    ao || ((ao = !0), (Vl = s));
  }
}
function gr(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 1026) != 0 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function Td(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Rd(e) {
  if (gr(e) !== e) throw Error(P(188));
}
function kv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = gr(e)), t === null)) throw Error(P(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var i = r.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((n = i.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === r) return Rd(i), e;
        if (o === n) return Rd(i), t;
        o = o.sibling;
      }
      throw Error(P(188));
    }
    if (r.return !== n.return) (r = i), (n = o);
    else {
      for (var a = !1, l = i.child; l; ) {
        if (l === r) {
          (a = !0), (r = i), (n = o);
          break;
        }
        if (l === n) {
          (a = !0), (n = i), (r = o);
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = o.child; l; ) {
          if (l === r) {
            (a = !0), (r = o), (n = i);
            break;
          }
          if (l === n) {
            (a = !0), (n = o), (r = i);
            break;
          }
          l = l.sibling;
        }
        if (!a) throw Error(P(189));
      }
    }
    if (r.alternate !== n) throw Error(P(190));
  }
  if (r.tag !== 3) throw Error(P(188));
  return r.stateNode.current === r ? e : t;
}
function Pd(e) {
  if (((e = kv(e)), !e)) return null;
  for (var t = e; ; ) {
    if (t.tag === 5 || t.tag === 6) return t;
    if (t.child) (t.child.return = t), (t = t.child);
    else {
      if (t === e) break;
      for (; !t.sibling; ) {
        if (!t.return || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return null;
}
function $d(e, t) {
  for (var r = e.alternate; t !== null; ) {
    if (t === e || t === r) return !0;
    t = t.return;
  }
  return !1;
}
var zd,
  Ul,
  Ad,
  Id,
  Gl = !1,
  ft = [],
  Dt = null,
  Wt = null,
  Ht = null,
  Ln = new Map(),
  jn = new Map(),
  Dn = [],
  Od =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Yl(e, t, r, n, i) {
  return {
    blockedOn: e,
    domEventName: t,
    eventSystemFlags: r | 16,
    nativeEvent: i,
    targetContainers: [n],
  };
}
function Bd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Dt = null;
      break;
    case "dragenter":
    case "dragleave":
      Wt = null;
      break;
    case "mouseover":
    case "mouseout":
      Ht = null;
      break;
    case "pointerover":
    case "pointerout":
      Ln.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      jn.delete(t.pointerId);
  }
}
function Wn(e, t, r, n, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = Yl(t, r, n, i, o)),
      t !== null && ((t = ei(t)), t !== null && Ul(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function _v(e, t, r, n, i) {
  switch (t) {
    case "focusin":
      return (Dt = Wn(Dt, e, t, r, n, i)), !0;
    case "dragenter":
      return (Wt = Wn(Wt, e, t, r, n, i)), !0;
    case "mouseover":
      return (Ht = Wn(Ht, e, t, r, n, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Ln.set(o, Wn(Ln.get(o) || null, e, t, r, n, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), jn.set(o, Wn(jn.get(o) || null, e, t, r, n, i)), !0
      );
  }
  return !1;
}
function Cv(e) {
  var t = yr(e.target);
  if (t !== null) {
    var r = gr(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = Td(r)), t !== null)) {
          (e.blockedOn = t),
            Id(e.lanePriority, function () {
              ve.unstable_runWithPriority(e.priority, function () {
                Ad(r);
              });
            });
          return;
        }
      } else if (t === 3 && r.stateNode.hydrate) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function lo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Jl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r !== null)
      return (t = ei(r)), t !== null && Ul(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function Md(e, t, r) {
  lo(e) && r.delete(t);
}
function Ev() {
  for (Gl = !1; 0 < ft.length; ) {
    var e = ft[0];
    if (e.blockedOn !== null) {
      (e = ei(e.blockedOn)), e !== null && zd(e);
      break;
    }
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = Jl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r !== null) {
        e.blockedOn = r;
        break;
      }
      t.shift();
    }
    e.blockedOn === null && ft.shift();
  }
  Dt !== null && lo(Dt) && (Dt = null),
    Wt !== null && lo(Wt) && (Wt = null),
    Ht !== null && lo(Ht) && (Ht = null),
    Ln.forEach(Md),
    jn.forEach(Md);
}
function Hn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Gl ||
      ((Gl = !0),
      ve.unstable_scheduleCallback(ve.unstable_NormalPriority, Ev)));
}
function Fd(e) {
  function t(i) {
    return Hn(i, e);
  }
  if (0 < ft.length) {
    Hn(ft[0], e);
    for (var r = 1; r < ft.length; r++) {
      var n = ft[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    Dt !== null && Hn(Dt, e),
      Wt !== null && Hn(Wt, e),
      Ht !== null && Hn(Ht, e),
      Ln.forEach(t),
      jn.forEach(t),
      r = 0;
    r < Dn.length;
    r++
  )
    (n = Dn[r]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < Dn.length && ((r = Dn[0]), r.blockedOn === null); )
    Cv(r), r.blockedOn === null && Dn.shift();
}
function uo(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var Wr = {
    animationend: uo("Animation", "AnimationEnd"),
    animationiteration: uo("Animation", "AnimationIteration"),
    animationstart: uo("Animation", "AnimationStart"),
    transitionend: uo("Transition", "TransitionEnd"),
  },
  Ql = {},
  Nd = {};
Pt &&
  ((Nd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Wr.animationend.animation,
    delete Wr.animationiteration.animation,
    delete Wr.animationstart.animation),
  "TransitionEvent" in window || delete Wr.transitionend.transition);
function so(e) {
  if (Ql[e]) return Ql[e];
  if (!Wr[e]) return e;
  var t = Wr[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in Nd) return (Ql[e] = t[r]);
  return e;
}
var Ld = so("animationend"),
  jd = so("animationiteration"),
  Dd = so("animationstart"),
  Wd = so("transitionend"),
  Hd = new Map(),
  Xl = new Map(),
  Tv = [
    "abort",
    "abort",
    Ld,
    "animationEnd",
    jd,
    "animationIteration",
    Dd,
    "animationStart",
    "canplay",
    "canPlay",
    "canplaythrough",
    "canPlayThrough",
    "durationchange",
    "durationChange",
    "emptied",
    "emptied",
    "encrypted",
    "encrypted",
    "ended",
    "ended",
    "error",
    "error",
    "gotpointercapture",
    "gotPointerCapture",
    "load",
    "load",
    "loadeddata",
    "loadedData",
    "loadedmetadata",
    "loadedMetadata",
    "loadstart",
    "loadStart",
    "lostpointercapture",
    "lostPointerCapture",
    "playing",
    "playing",
    "progress",
    "progress",
    "seeking",
    "seeking",
    "stalled",
    "stalled",
    "suspend",
    "suspend",
    "timeupdate",
    "timeUpdate",
    Wd,
    "transitionEnd",
    "waiting",
    "waiting",
  ];
function Kl(e, t) {
  for (var r = 0; r < e.length; r += 2) {
    var n = e[r],
      i = e[r + 1];
    (i = "on" + (i[0].toUpperCase() + i.slice(1))),
      Xl.set(n, t),
      Hd.set(n, i),
      pr(i, [n]);
  }
}
var Rv = ve.unstable_now;
Rv();
var K = 8;
function Hr(e) {
  if ((1 & e) != 0) return (K = 15), 1;
  if ((2 & e) != 0) return (K = 14), 2;
  if ((4 & e) != 0) return (K = 13), 4;
  var t = 24 & e;
  return t !== 0
    ? ((K = 12), t)
    : (e & 32) != 0
    ? ((K = 11), 32)
    : ((t = 192 & e),
      t !== 0
        ? ((K = 10), t)
        : (e & 256) != 0
        ? ((K = 9), 256)
        : ((t = 3584 & e),
          t !== 0
            ? ((K = 8), t)
            : (e & 4096) != 0
            ? ((K = 7), 4096)
            : ((t = 4186112 & e),
              t !== 0
                ? ((K = 6), t)
                : ((t = 62914560 & e),
                  t !== 0
                    ? ((K = 5), t)
                    : e & 67108864
                    ? ((K = 4), 67108864)
                    : (e & 134217728) != 0
                    ? ((K = 3), 134217728)
                    : ((t = 805306368 & e),
                      t !== 0
                        ? ((K = 2), t)
                        : (1073741824 & e) != 0
                        ? ((K = 1), 1073741824)
                        : ((K = 8), e))))));
}
function Pv(e) {
  switch (e) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function $v(e) {
  switch (e) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(P(358, e));
  }
}
function Vn(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return (K = 0);
  var n = 0,
    i = 0,
    o = e.expiredLanes,
    a = e.suspendedLanes,
    l = e.pingedLanes;
  if (o !== 0) (n = o), (i = K = 15);
  else if (((o = r & 134217727), o !== 0)) {
    var u = o & ~a;
    u !== 0
      ? ((n = Hr(u)), (i = K))
      : ((l &= o), l !== 0 && ((n = Hr(l)), (i = K)));
  } else
    (o = r & ~a),
      o !== 0 ? ((n = Hr(o)), (i = K)) : l !== 0 && ((n = Hr(l)), (i = K));
  if (n === 0) return 0;
  if (
    ((n = 31 - Vt(n)),
    (n = r & (((0 > n ? 0 : 1 << n) << 1) - 1)),
    t !== 0 && t !== n && (t & a) == 0)
  ) {
    if ((Hr(t), i <= K)) return t;
    K = i;
  }
  if (((t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      (r = 31 - Vt(t)), (i = 1 << r), (n |= e[r]), (t &= ~i);
  return n;
}
function Vd(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function co(e, t) {
  switch (e) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return (e = Vr(24 & ~t)), e === 0 ? co(10, t) : e;
    case 10:
      return (e = Vr(192 & ~t)), e === 0 ? co(8, t) : e;
    case 8:
      return (
        (e = Vr(3584 & ~t)),
        e === 0 && ((e = Vr(4186112 & ~t)), e === 0 && (e = 512)),
        e
      );
    case 2:
      return (t = Vr(805306368 & ~t)), t === 0 && (t = 268435456), t;
  }
  throw Error(P(358, e));
}
function Vr(e) {
  return e & -e;
}
function ql(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function fo(e, t, r) {
  e.pendingLanes |= t;
  var n = t - 1;
  (e.suspendedLanes &= n),
    (e.pingedLanes &= n),
    (e = e.eventTimes),
    (t = 31 - Vt(t)),
    (e[t] = r);
}
var Vt = Math.clz32 ? Math.clz32 : Iv,
  zv = Math.log,
  Av = Math.LN2;
function Iv(e) {
  return e === 0 ? 32 : (31 - ((zv(e) / Av) | 0)) | 0;
}
var Ov = ve.unstable_UserBlockingPriority,
  Bv = ve.unstable_runWithPriority,
  po = !0;
function Mv(e, t, r, n) {
  vr || jl();
  var i = Zl,
    o = vr;
  vr = !0;
  try {
    Cd(i, e, t, r, n);
  } finally {
    (vr = o) || Wl();
  }
}
function Fv(e, t, r, n) {
  Bv(Ov, Zl.bind(null, e, t, r, n));
}
function Zl(e, t, r, n) {
  if (po) {
    var i;
    if ((i = (t & 4) == 0) && 0 < ft.length && -1 < Od.indexOf(e))
      (e = Yl(null, e, t, r, n)), ft.push(e);
    else {
      var o = Jl(e, t, r, n);
      if (o === null) i && Bd(e, n);
      else {
        if (i) {
          if (-1 < Od.indexOf(e)) {
            (e = Yl(o, e, t, r, n)), ft.push(e);
            return;
          }
          if (_v(o, e, t, r, n)) return;
          Bd(e, n);
        }
        xf(e, t, n, null, r);
      }
    }
  }
}
function Jl(e, t, r, n) {
  var i = Fl(n);
  if (((i = yr(i)), i !== null)) {
    var o = gr(i);
    if (o === null) i = null;
    else {
      var a = o.tag;
      if (a === 13) {
        if (((i = Td(o)), i !== null)) return i;
        i = null;
      } else if (a === 3) {
        if (o.stateNode.hydrate)
          return o.tag === 3 ? o.stateNode.containerInfo : null;
        i = null;
      } else o !== i && (i = null);
    }
  }
  return xf(e, t, n, i, r), null;
}
var Ut = null,
  eu = null,
  ho = null;
function Ud() {
  if (ho) return ho;
  var e,
    t = eu,
    r = t.length,
    n,
    i = "value" in Ut ? Ut.value : Ut.textContent,
    o = i.length;
  for (e = 0; e < r && t[e] === i[e]; e++);
  var a = r - e;
  for (n = 1; n <= a && t[r - n] === i[o - n]; n++);
  return (ho = i.slice(e, 1 < n ? 1 - n : void 0));
}
function mo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function vo() {
  return !0;
}
function Gd() {
  return !1;
}
function De(e) {
  function t(r, n, i, o, a) {
    (this._reactName = r),
      (this._targetInst = i),
      (this.type = n),
      (this.nativeEvent = o),
      (this.target = a),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((r = e[l]), (this[l] = r ? r(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? vo
        : Gd),
      (this.isPropagationStopped = Gd),
      this
    );
  }
  return (
    ie(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = vo));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = vo));
      },
      persist: function () {},
      isPersistent: vo,
    }),
    t
  );
}
var Ur = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  tu = De(Ur),
  Un = ie({}, Ur, { view: 0, detail: 0 }),
  Nv = De(Un),
  ru,
  nu,
  Gn,
  go = ie({}, Un, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ou,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Gn &&
            (Gn && e.type === "mousemove"
              ? ((ru = e.screenX - Gn.screenX), (nu = e.screenY - Gn.screenY))
              : (nu = ru = 0),
            (Gn = e)),
          ru);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : nu;
    },
  }),
  Yd = De(go),
  Lv = ie({}, go, { dataTransfer: 0 }),
  jv = De(Lv),
  Dv = ie({}, Un, { relatedTarget: 0 }),
  iu = De(Dv),
  Wv = ie({}, Ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Hv = De(Wv),
  Vv = ie({}, Ur, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Uv = De(Vv),
  Gv = ie({}, Ur, { data: 0 }),
  Qd = De(Gv),
  Yv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Qv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Xv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Kv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Xv[e]) ? !!t[e] : !1;
}
function ou() {
  return Kv;
}
var qv = ie({}, Un, {
    key: function (e) {
      if (e.key) {
        var t = Yv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = mo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Qv[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ou,
    charCode: function (e) {
      return e.type === "keypress" ? mo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? mo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Zv = De(qv),
  Jv = ie({}, go, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Xd = De(Jv),
  eg = ie({}, Un, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ou,
  }),
  tg = De(eg),
  rg = ie({}, Ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ng = De(rg),
  ig = ie({}, go, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  og = De(ig),
  ag = [9, 13, 27, 32],
  au = Pt && "CompositionEvent" in window,
  Yn = null;
Pt && "documentMode" in document && (Yn = document.documentMode);
var lg = Pt && "TextEvent" in window && !Yn,
  Kd = Pt && (!au || (Yn && 8 < Yn && 11 >= Yn)),
  qd = String.fromCharCode(32),
  Zd = !1;
function Jd(e, t) {
  switch (e) {
    case "keyup":
      return ag.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ef(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Gr = !1;
function ug(e, t) {
  switch (e) {
    case "compositionend":
      return ef(t);
    case "keypress":
      return t.which !== 32 ? null : ((Zd = !0), qd);
    case "textInput":
      return (e = t.data), e === qd && Zd ? null : e;
    default:
      return null;
  }
}
function sg(e, t) {
  if (Gr)
    return e === "compositionend" || (!au && Jd(e, t))
      ? ((e = Ud()), (ho = eu = Ut = null), (Gr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Kd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var cg = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function tf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!cg[e.type] : t === "textarea";
}
function rf(e, t, r, n) {
  kd(n),
    (t = bo(t, "onChange")),
    0 < t.length &&
      ((r = new tu("onChange", "change", null, r, n)),
      e.push({ event: r, listeners: t }));
}
var Qn = null,
  Xn = null;
function dg(e) {
  vf(e, 0);
}
function yo(e) {
  var t = qr(e);
  if (dd(t)) return e;
}
function fg(e, t) {
  if (e === "change") return t;
}
var nf = !1;
if (Pt) {
  var lu;
  if (Pt) {
    var uu = "oninput" in document;
    if (!uu) {
      var of = document.createElement("div");
      of.setAttribute("oninput", "return;"),
        (uu = typeof of.oninput == "function");
    }
    lu = uu;
  } else lu = !1;
  nf = lu && (!document.documentMode || 9 < document.documentMode);
}
function af() {
  Qn && (Qn.detachEvent("onpropertychange", lf), (Xn = Qn = null));
}
function lf(e) {
  if (e.propertyName === "value" && yo(Xn)) {
    var t = [];
    if ((rf(t, Xn, e, Fl(e)), (e = dg), vr)) e(t);
    else {
      vr = !0;
      try {
        Ll(e, t);
      } finally {
        (vr = !1), Wl();
      }
    }
  }
}
function pg(e, t, r) {
  e === "focusin"
    ? (af(), (Qn = t), (Xn = r), Qn.attachEvent("onpropertychange", lf))
    : e === "focusout" && af();
}
function hg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return yo(Xn);
}
function mg(e, t) {
  if (e === "click") return yo(t);
}
function vg(e, t) {
  if (e === "input" || e === "change") return yo(t);
}
function gg(e, t) {
  return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
}
var Xe = typeof Object.is == "function" ? Object.is : gg,
  yg = Object.prototype.hasOwnProperty;
function Kn(e, t) {
  if (Xe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++)
    if (!yg.call(t, r[n]) || !Xe(e[r[n]], t[r[n]])) return !1;
  return !0;
}
function uf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function sf(e, t) {
  var r = uf(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = uf(r);
  }
}
function cf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? cf(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function df() {
  for (var e = window, t = no(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = no(e.document);
  }
  return t;
}
function su(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
var bg = Pt && "documentMode" in document && 11 >= document.documentMode,
  Yr = null,
  cu = null,
  qn = null,
  du = !1;
function ff(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  du ||
    Yr == null ||
    Yr !== no(n) ||
    ((n = Yr),
    "selectionStart" in n && su(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (qn && Kn(qn, n)) ||
      ((qn = n),
      (n = bo(cu, "onSelect")),
      0 < n.length &&
        ((t = new tu("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = Yr))));
}
Kl(
  "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
    " "
  ),
  0
);
Kl(
  "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
    " "
  ),
  1
);
Kl(Tv, 2);
for (
  var pf =
      "change selectionchange textInput compositionstart compositionend compositionupdate".split(
        " "
      ),
    fu = 0;
  fu < pf.length;
  fu++
)
  Xl.set(pf[fu], 0);
Fr("onMouseEnter", ["mouseout", "mouseover"]);
Fr("onMouseLeave", ["mouseout", "mouseover"]);
Fr("onPointerEnter", ["pointerout", "pointerover"]);
Fr("onPointerLeave", ["pointerout", "pointerover"]);
pr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
pr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
pr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
pr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
pr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
pr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Zn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  hf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Zn));
function mf(e, t, r) {
  var n = e.type || "unknown-event";
  (e.currentTarget = r), wv(n, t, void 0, e), (e.currentTarget = null);
}
function vf(e, t) {
  t = (t & 4) != 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      i = n.event;
    n = n.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var a = n.length - 1; 0 <= a; a--) {
          var l = n[a],
            u = l.instance,
            s = l.currentTarget;
          if (((l = l.listener), u !== o && i.isPropagationStopped())) break e;
          mf(i, l, s), (o = u);
        }
      else
        for (a = 0; a < n.length; a++) {
          if (
            ((l = n[a]),
            (u = l.instance),
            (s = l.currentTarget),
            (l = l.listener),
            u !== o && i.isPropagationStopped())
          )
            break e;
          mf(i, l, s), (o = u);
        }
    }
  }
  if (ao) throw ((e = Vl), (ao = !1), (Vl = null), e);
}
function q(e, t) {
  var r = Tf(t),
    n = e + "__bubble";
  r.has(n) || (Sf(t, e, 2, !1), r.add(n));
}
var gf = "_reactListening" + Math.random().toString(36).slice(2);
function yf(e) {
  e[gf] ||
    ((e[gf] = !0),
    id.forEach(function (t) {
      hf.has(t) || bf(t, !1, e, null), bf(t, !0, e, null);
    }));
}
function bf(e, t, r, n) {
  var i = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0,
    o = r;
  if (
    (e === "selectionchange" && r.nodeType !== 9 && (o = r.ownerDocument),
    n !== null && !t && hf.has(e))
  ) {
    if (e !== "scroll") return;
    (i |= 2), (o = n);
  }
  var a = Tf(o),
    l = e + "__" + (t ? "capture" : "bubble");
  a.has(l) || (t && (i |= 4), Sf(o, e, i, t), a.add(l));
}
function Sf(e, t, r, n) {
  var i = Xl.get(t);
  switch (i === void 0 ? 2 : i) {
    case 0:
      i = Mv;
      break;
    case 1:
      i = Fv;
      break;
    default:
      i = Zl;
  }
  (r = i.bind(null, t, r, e)),
    (i = void 0),
    !Hl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    n
      ? i !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: i })
        : e.addEventListener(t, r, !0)
      : i !== void 0
      ? e.addEventListener(t, r, { passive: i })
      : e.addEventListener(t, r, !1);
}
function xf(e, t, r, n, i) {
  var o = n;
  if ((t & 1) == 0 && (t & 2) == 0 && n !== null)
    e: for (;;) {
      if (n === null) return;
      var a = n.tag;
      if (a === 3 || a === 4) {
        var l = n.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (a === 4)
          for (a = n.return; a !== null; ) {
            var u = a.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = a.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            a = a.return;
          }
        for (; l !== null; ) {
          if (((a = yr(l)), a === null)) return;
          if (((u = a.tag), u === 5 || u === 6)) {
            n = o = a;
            continue e;
          }
          l = l.parentNode;
        }
      }
      n = n.return;
    }
  yv(function () {
    var s = o,
      m = Fl(r),
      b = [];
    e: {
      var v = Hd.get(e);
      if (v !== void 0) {
        var w = tu,
          C = e;
        switch (e) {
          case "keypress":
            if (mo(r) === 0) break e;
          case "keydown":
          case "keyup":
            w = Zv;
            break;
          case "focusin":
            (C = "focus"), (w = iu);
            break;
          case "focusout":
            (C = "blur"), (w = iu);
            break;
          case "beforeblur":
          case "afterblur":
            w = iu;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = Yd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = jv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = tg;
            break;
          case Ld:
          case jd:
          case Dd:
            w = Hv;
            break;
          case Wd:
            w = ng;
            break;
          case "scroll":
            w = Nv;
            break;
          case "wheel":
            w = og;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Uv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Xd;
        }
        var k = (t & 4) != 0,
          p = !k && e === "scroll",
          d = k ? (v !== null ? v + "Capture" : null) : v;
        k = [];
        for (var f = s, y; f !== null; ) {
          y = f;
          var x = y.stateNode;
          if (
            (y.tag === 5 &&
              x !== null &&
              ((y = x),
              d !== null && ((x = Mn(f, d)), x != null && k.push(Jn(f, x, y)))),
            p)
          )
            break;
          f = f.return;
        }
        0 < k.length &&
          ((v = new w(v, C, null, r, m)), b.push({ event: v, listeners: k }));
      }
    }
    if ((t & 7) == 0) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          v &&
            (t & 16) == 0 &&
            (C = r.relatedTarget || r.fromElement) &&
            (yr(C) || C[Kr]))
        )
          break e;
        if (
          (w || v) &&
          ((v =
            m.window === m
              ? m
              : (v = m.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          w
            ? ((C = r.relatedTarget || r.toElement),
              (w = s),
              (C = C ? yr(C) : null),
              C !== null &&
                ((p = gr(C)), C !== p || (C.tag !== 5 && C.tag !== 6)) &&
                (C = null))
            : ((w = null), (C = s)),
          w !== C)
        ) {
          if (
            ((k = Yd),
            (x = "onMouseLeave"),
            (d = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = Xd),
              (x = "onPointerLeave"),
              (d = "onPointerEnter"),
              (f = "pointer")),
            (p = w == null ? v : qr(w)),
            (y = C == null ? v : qr(C)),
            (v = new k(x, f + "leave", w, r, m)),
            (v.target = p),
            (v.relatedTarget = y),
            (x = null),
            yr(m) === s &&
              ((k = new k(d, f + "enter", C, r, m)),
              (k.target = y),
              (k.relatedTarget = p),
              (x = k)),
            (p = x),
            w && C)
          )
            t: {
              for (k = w, d = C, f = 0, y = k; y; y = Qr(y)) f++;
              for (y = 0, x = d; x; x = Qr(x)) y++;
              for (; 0 < f - y; ) (k = Qr(k)), f--;
              for (; 0 < y - f; ) (d = Qr(d)), y--;
              for (; f--; ) {
                if (k === d || (d !== null && k === d.alternate)) break t;
                (k = Qr(k)), (d = Qr(d));
              }
              k = null;
            }
          else k = null;
          w !== null && wf(b, v, w, k, !1),
            C !== null && p !== null && wf(b, p, C, k, !0);
        }
      }
      e: {
        if (
          ((v = s ? qr(s) : window),
          (w = v.nodeName && v.nodeName.toLowerCase()),
          w === "select" || (w === "input" && v.type === "file"))
        )
          var $ = fg;
        else if (tf(v))
          if (nf) $ = vg;
          else {
            $ = hg;
            var E = pg;
          }
        else
          (w = v.nodeName) &&
            w.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            ($ = mg);
        if ($ && ($ = $(e, s))) {
          rf(b, $, r, m);
          break e;
        }
        E && E(e, v, s),
          e === "focusout" &&
            (E = v._wrapperState) &&
            E.controlled &&
            v.type === "number" &&
            $l(v, "number", v.value);
      }
      switch (((E = s ? qr(s) : window), e)) {
        case "focusin":
          (tf(E) || E.contentEditable === "true") &&
            ((Yr = E), (cu = s), (qn = null));
          break;
        case "focusout":
          qn = cu = Yr = null;
          break;
        case "mousedown":
          du = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (du = !1), ff(b, r, m);
          break;
        case "selectionchange":
          if (bg) break;
        case "keydown":
        case "keyup":
          ff(b, r, m);
      }
      var T;
      if (au)
        e: {
          switch (e) {
            case "compositionstart":
              var M = "onCompositionStart";
              break e;
            case "compositionend":
              M = "onCompositionEnd";
              break e;
            case "compositionupdate":
              M = "onCompositionUpdate";
              break e;
          }
          M = void 0;
        }
      else
        Gr
          ? Jd(e, r) && (M = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (M = "onCompositionStart");
      M &&
        (Kd &&
          r.locale !== "ko" &&
          (Gr || M !== "onCompositionStart"
            ? M === "onCompositionEnd" && Gr && (T = Ud())
            : ((Ut = m),
              (eu = "value" in Ut ? Ut.value : Ut.textContent),
              (Gr = !0))),
        (E = bo(s, M)),
        0 < E.length &&
          ((M = new Qd(M, e, null, r, m)),
          b.push({ event: M, listeners: E }),
          T ? (M.data = T) : ((T = ef(r)), T !== null && (M.data = T)))),
        (T = lg ? ug(e, r) : sg(e, r)) &&
          ((s = bo(s, "onBeforeInput")),
          0 < s.length &&
            ((m = new Qd("onBeforeInput", "beforeinput", null, r, m)),
            b.push({ event: m, listeners: s }),
            (m.data = T)));
    }
    vf(b, t);
  });
}
function Jn(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function bo(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Mn(e, r)),
      o != null && n.unshift(Jn(e, o, i)),
      (o = Mn(e, t)),
      o != null && n.push(Jn(e, o, i))),
      (e = e.return);
  }
  return n;
}
function Qr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function wf(e, t, r, n, i) {
  for (var o = t._reactName, a = []; r !== null && r !== n; ) {
    var l = r,
      u = l.alternate,
      s = l.stateNode;
    if (u !== null && u === n) break;
    l.tag === 5 &&
      s !== null &&
      ((l = s),
      i
        ? ((u = Mn(r, o)), u != null && a.unshift(Jn(r, u, l)))
        : i || ((u = Mn(r, o)), u != null && a.push(Jn(r, u, l)))),
      (r = r.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
function So() {}
var pu = null,
  hu = null;
function kf(e, t) {
  switch (e) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!t.autoFocus;
  }
  return !1;
}
function mu(e, t) {
  return (
    e === "textarea" ||
    e === "option" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var _f = typeof setTimeout == "function" ? setTimeout : void 0,
  Sg = typeof clearTimeout == "function" ? clearTimeout : void 0;
function vu(e) {
  e.nodeType === 1
    ? (e.textContent = "")
    : e.nodeType === 9 && ((e = e.body), e != null && (e.textContent = ""));
}
function Xr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
  }
  return e;
}
function Cf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var gu = 0;
function xg(e) {
  return { $$typeof: kl, toString: e, valueOf: e };
}
var xo = Math.random().toString(36).slice(2),
  Gt = "__reactFiber$" + xo,
  wo = "__reactProps$" + xo,
  Kr = "__reactContainer$" + xo,
  Ef = "__reactEvents$" + xo;
function yr(e) {
  var t = e[Gt];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[Kr] || r[Gt])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = Cf(e); e !== null; ) {
          if ((r = e[Gt])) return r;
          e = Cf(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function ei(e) {
  return (
    (e = e[Gt] || e[Kr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function qr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function ko(e) {
  return e[wo] || null;
}
function Tf(e) {
  var t = e[Ef];
  return t === void 0 && (t = e[Ef] = new Set()), t;
}
var yu = [],
  Zr = -1;
function Yt(e) {
  return { current: e };
}
function Z(e) {
  0 > Zr || ((e.current = yu[Zr]), (yu[Zr] = null), Zr--);
}
function le(e, t) {
  Zr++, (yu[Zr] = e.current), (e.current = t);
}
var Qt = {},
  _e = Yt(Qt),
  Ae = Yt(!1),
  br = Qt;
function Jr(e, t) {
  var r = e.type.contextTypes;
  if (!r) return Qt;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in r) i[o] = t[o];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ie(e) {
  return (e = e.childContextTypes), e != null;
}
function _o() {
  Z(Ae), Z(_e);
}
function Rf(e, t, r) {
  if (_e.current !== Qt) throw Error(P(168));
  le(_e, t), le(Ae, r);
}
function Pf(e, t, r) {
  var n = e.stateNode;
  if (((e = t.childContextTypes), typeof n.getChildContext != "function"))
    return r;
  n = n.getChildContext();
  for (var i in n) if (!(i in e)) throw Error(P(108, Nr(t) || "Unknown", i));
  return ie({}, r, n);
}
function Co(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Qt),
    (br = _e.current),
    le(_e, e),
    le(Ae, Ae.current),
    !0
  );
}
function $f(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(P(169));
  r
    ? ((e = Pf(e, t, br)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      Z(Ae),
      Z(_e),
      le(_e, e))
    : Z(Ae),
    le(Ae, r);
}
var bu = null,
  Sr = null,
  wg = ve.unstable_runWithPriority,
  Su = ve.unstable_scheduleCallback,
  xu = ve.unstable_cancelCallback,
  kg = ve.unstable_shouldYield,
  zf = ve.unstable_requestPaint,
  wu = ve.unstable_now,
  _g = ve.unstable_getCurrentPriorityLevel,
  Eo = ve.unstable_ImmediatePriority,
  Af = ve.unstable_UserBlockingPriority,
  If = ve.unstable_NormalPriority,
  Of = ve.unstable_LowPriority,
  Bf = ve.unstable_IdlePriority,
  ku = {},
  Cg = zf !== void 0 ? zf : function () {},
  $t = null,
  To = null,
  _u = !1,
  Mf = wu(),
  Ce =
    1e4 > Mf
      ? wu
      : function () {
          return wu() - Mf;
        };
function en() {
  switch (_g()) {
    case Eo:
      return 99;
    case Af:
      return 98;
    case If:
      return 97;
    case Of:
      return 96;
    case Bf:
      return 95;
    default:
      throw Error(P(332));
  }
}
function Ff(e) {
  switch (e) {
    case 99:
      return Eo;
    case 98:
      return Af;
    case 97:
      return If;
    case 96:
      return Of;
    case 95:
      return Bf;
    default:
      throw Error(P(332));
  }
}
function xr(e, t) {
  return (e = Ff(e)), wg(e, t);
}
function ti(e, t, r) {
  return (e = Ff(e)), Su(e, t, r);
}
function pt() {
  if (To !== null) {
    var e = To;
    (To = null), xu(e);
  }
  Nf();
}
function Nf() {
  if (!_u && $t !== null) {
    _u = !0;
    var e = 0;
    try {
      var t = $t;
      xr(99, function () {
        for (; e < t.length; e++) {
          var r = t[e];
          do r = r(!0);
          while (r !== null);
        }
      }),
        ($t = null);
    } catch (r) {
      throw ($t !== null && ($t = $t.slice(e + 1)), Su(Eo, pt), r);
    } finally {
      _u = !1;
    }
  }
}
var Eg = hr.ReactCurrentBatchConfig;
function ot(e, t) {
  if (e && e.defaultProps) {
    (t = ie({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
var Ro = Yt(null),
  Po = null,
  tn = null,
  $o = null;
function Cu() {
  $o = tn = Po = null;
}
function Eu(e) {
  var t = Ro.current;
  Z(Ro), (e.type._context._currentValue = t);
}
function Lf(e, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) === t) {
      if (r === null || (r.childLanes & t) === t) break;
      r.childLanes |= t;
    } else (e.childLanes |= t), r !== null && (r.childLanes |= t);
    e = e.return;
  }
}
function rn(e, t) {
  (Po = e),
    ($o = tn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) != 0 && (at = !0), (e.firstContext = null));
}
function Ke(e, t) {
  if ($o !== e && t !== !1 && t !== 0)
    if (
      ((typeof t != "number" || t === 1073741823) &&
        (($o = e), (t = 1073741823)),
      (t = { context: e, observedBits: t, next: null }),
      tn === null)
    ) {
      if (Po === null) throw Error(P(308));
      (tn = t),
        (Po.dependencies = { lanes: 0, firstContext: t, responders: null });
    } else tn = tn.next = t;
  return e._currentValue;
}
var Xt = !1;
function Tu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null },
    effects: null,
  };
}
function jf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Kt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function qt(e, t) {
  if (((e = e.updateQueue), e !== null)) {
    e = e.shared;
    var r = e.pending;
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t);
  }
}
function Df(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var i = null,
      o = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var a = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        o === null ? (i = o = a) : (o = o.next = a), (r = r.next);
      } while (r !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (r = {
      baseState: n.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t);
}
function ri(e, t, r, n) {
  var i = e.updateQueue;
  Xt = !1;
  var o = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var u = l,
      s = u.next;
    (u.next = null), a === null ? (o = s) : (a.next = s), (a = u);
    var m = e.alternate;
    if (m !== null) {
      m = m.updateQueue;
      var b = m.lastBaseUpdate;
      b !== a &&
        (b === null ? (m.firstBaseUpdate = s) : (b.next = s),
        (m.lastBaseUpdate = u));
    }
  }
  if (o !== null) {
    (b = i.baseState), (a = 0), (m = s = u = null);
    do {
      l = o.lane;
      var v = o.eventTime;
      if ((n & l) === l) {
        m !== null &&
          (m = m.next =
            {
              eventTime: v,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var w = e,
            C = o;
          switch (((l = t), (v = r), C.tag)) {
            case 1:
              if (((w = C.payload), typeof w == "function")) {
                b = w.call(v, b, l);
                break e;
              }
              b = w;
              break e;
            case 3:
              w.flags = (w.flags & -4097) | 64;
            case 0:
              if (
                ((w = C.payload),
                (l = typeof w == "function" ? w.call(v, b, l) : w),
                l == null)
              )
                break e;
              b = ie({}, b, l);
              break e;
            case 2:
              Xt = !0;
          }
        }
        o.callback !== null &&
          ((e.flags |= 32),
          (l = i.effects),
          l === null ? (i.effects = [o]) : l.push(o));
      } else
        (v = {
          eventTime: v,
          lane: l,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          m === null ? ((s = m = v), (u = b)) : (m = m.next = v),
          (a |= l);
      if (((o = o.next), o === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (o = l.next),
          (l.next = null),
          (i.lastBaseUpdate = l),
          (i.shared.pending = null);
      }
    } while (1);
    m === null && (u = b),
      (i.baseState = u),
      (i.firstBaseUpdate = s),
      (i.lastBaseUpdate = m),
      (hi |= a),
      (e.lanes = a),
      (e.memoizedState = b);
  }
}
function Wf(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        i = n.callback;
      if (i !== null) {
        if (((n.callback = null), (n = r), typeof i != "function"))
          throw Error(P(191, i));
        i.call(n);
      }
    }
}
var Hf = new qi.Component().refs;
function zo(e, t, r, n) {
  (t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : ie({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var Ao = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? gr(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = We(),
      i = er(e),
      o = Kt(n, i);
    (o.payload = t), r != null && (o.callback = r), qt(e, o), tr(e, i, n);
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = We(),
      i = er(e),
      o = Kt(n, i);
    (o.tag = 1),
      (o.payload = t),
      r != null && (o.callback = r),
      qt(e, o),
      tr(e, i, n);
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = We(),
      n = er(e),
      i = Kt(r, n);
    (i.tag = 2), t != null && (i.callback = t), qt(e, i), tr(e, n, r);
  },
};
function Vf(e, t, r, n, i, o, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, o, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Kn(r, n) || !Kn(i, o)
      : !0
  );
}
function Uf(e, t, r) {
  var n = !1,
    i = Qt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ke(o))
      : ((i = Ie(t) ? br : _e.current),
        (n = t.contextTypes),
        (o = (n = n != null) ? Jr(e, i) : Qt)),
    (t = new t(r, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ao),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Gf(e, t, r, n) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && Ao.enqueueReplaceState(t, t.state, null);
}
function Ru(e, t, r, n) {
  var i = e.stateNode;
  (i.props = r), (i.state = e.memoizedState), (i.refs = Hf), Tu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Ke(o))
    : ((o = Ie(t) ? br : _e.current), (i.context = Jr(e, o))),
    ri(e, r, i, n),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (zo(e, t, o, r), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Ao.enqueueReplaceState(i, i.state, null),
      ri(e, r, i, n),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4);
}
var Io = Array.isArray;
function ni(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(P(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(P(147, e));
      var i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = n.refs;
            a === Hf && (a = n.refs = {}),
              o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(P(284));
    if (!r._owner) throw Error(P(290, e));
  }
  return e;
}
function Oo(e, t) {
  if (e.type !== "textarea")
    throw Error(
      P(
        31,
        Object.prototype.toString.call(t) === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : t
      )
    );
}
function Yf(e) {
  function t(p, d) {
    if (e) {
      var f = p.lastEffect;
      f !== null
        ? ((f.nextEffect = d), (p.lastEffect = d))
        : (p.firstEffect = p.lastEffect = d),
        (d.nextEffect = null),
        (d.flags = 8);
    }
  }
  function r(p, d) {
    if (!e) return null;
    for (; d !== null; ) t(p, d), (d = d.sibling);
    return null;
  }
  function n(p, d) {
    for (p = new Map(); d !== null; )
      d.key !== null ? p.set(d.key, d) : p.set(d.index, d), (d = d.sibling);
    return p;
  }
  function i(p, d) {
    return (p = ir(p, d)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, d, f) {
    return (
      (p.index = f),
      e
        ? ((f = p.alternate),
          f !== null
            ? ((f = f.index), f < d ? ((p.flags = 2), d) : f)
            : ((p.flags = 2), d))
        : d
    );
  }
  function a(p) {
    return e && p.alternate === null && (p.flags = 2), p;
  }
  function l(p, d, f, y) {
    return d === null || d.tag !== 6
      ? ((d = cs(f, p.mode, y)), (d.return = p), d)
      : ((d = i(d, f)), (d.return = p), d);
  }
  function u(p, d, f, y) {
    return d !== null && d.elementType === f.type
      ? ((y = i(d, f.props)), (y.ref = ni(p, d, f)), (y.return = p), y)
      : ((y = Zo(f.type, f.key, f.props, null, p.mode, y)),
        (y.ref = ni(p, d, f)),
        (y.return = p),
        y);
  }
  function s(p, d, f, y) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== f.containerInfo ||
      d.stateNode.implementation !== f.implementation
      ? ((d = ds(f, p.mode, y)), (d.return = p), d)
      : ((d = i(d, f.children || [])), (d.return = p), d);
  }
  function m(p, d, f, y, x) {
    return d === null || d.tag !== 7
      ? ((d = dn(f, p.mode, y, x)), (d.return = p), d)
      : ((d = i(d, f)), (d.return = p), d);
  }
  function b(p, d, f) {
    if (typeof d == "string" || typeof d == "number")
      return (d = cs("" + d, p.mode, f)), (d.return = p), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Pn:
          return (
            (f = Zo(d.type, d.key, d.props, null, p.mode, f)),
            (f.ref = ni(p, null, d)),
            (f.return = p),
            f
          );
        case mr:
          return (d = ds(d, p.mode, f)), (d.return = p), d;
      }
      if (Io(d) || An(d))
        return (d = dn(d, p.mode, f, null)), (d.return = p), d;
      Oo(p, d);
    }
    return null;
  }
  function v(p, d, f, y) {
    var x = d !== null ? d.key : null;
    if (typeof f == "string" || typeof f == "number")
      return x !== null ? null : l(p, d, "" + f, y);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Pn:
          return f.key === x
            ? f.type === Lt
              ? m(p, d, f.props.children, y, x)
              : u(p, d, f, y)
            : null;
        case mr:
          return f.key === x ? s(p, d, f, y) : null;
      }
      if (Io(f) || An(f)) return x !== null ? null : m(p, d, f, y, null);
      Oo(p, f);
    }
    return null;
  }
  function w(p, d, f, y, x) {
    if (typeof y == "string" || typeof y == "number")
      return (p = p.get(f) || null), l(d, p, "" + y, x);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Pn:
          return (
            (p = p.get(y.key === null ? f : y.key) || null),
            y.type === Lt ? m(d, p, y.props.children, x, y.key) : u(d, p, y, x)
          );
        case mr:
          return (p = p.get(y.key === null ? f : y.key) || null), s(d, p, y, x);
      }
      if (Io(y) || An(y)) return (p = p.get(f) || null), m(d, p, y, x, null);
      Oo(d, y);
    }
    return null;
  }
  function C(p, d, f, y) {
    for (
      var x = null, $ = null, E = d, T = (d = 0), M = null;
      E !== null && T < f.length;
      T++
    ) {
      E.index > T ? ((M = E), (E = null)) : (M = E.sibling);
      var A = v(p, E, f[T], y);
      if (A === null) {
        E === null && (E = M);
        break;
      }
      e && E && A.alternate === null && t(p, E),
        (d = o(A, d, T)),
        $ === null ? (x = A) : ($.sibling = A),
        ($ = A),
        (E = M);
    }
    if (T === f.length) return r(p, E), x;
    if (E === null) {
      for (; T < f.length; T++)
        (E = b(p, f[T], y)),
          E !== null &&
            ((d = o(E, d, T)), $ === null ? (x = E) : ($.sibling = E), ($ = E));
      return x;
    }
    for (E = n(p, E); T < f.length; T++)
      (M = w(E, p, T, f[T], y)),
        M !== null &&
          (e && M.alternate !== null && E.delete(M.key === null ? T : M.key),
          (d = o(M, d, T)),
          $ === null ? (x = M) : ($.sibling = M),
          ($ = M));
    return (
      e &&
        E.forEach(function (D) {
          return t(p, D);
        }),
      x
    );
  }
  function k(p, d, f, y) {
    var x = An(f);
    if (typeof x != "function") throw Error(P(150));
    if (((f = x.call(f)), f == null)) throw Error(P(151));
    for (
      var $ = (x = null), E = d, T = (d = 0), M = null, A = f.next();
      E !== null && !A.done;
      T++, A = f.next()
    ) {
      E.index > T ? ((M = E), (E = null)) : (M = E.sibling);
      var D = v(p, E, A.value, y);
      if (D === null) {
        E === null && (E = M);
        break;
      }
      e && E && D.alternate === null && t(p, E),
        (d = o(D, d, T)),
        $ === null ? (x = D) : ($.sibling = D),
        ($ = D),
        (E = M);
    }
    if (A.done) return r(p, E), x;
    if (E === null) {
      for (; !A.done; T++, A = f.next())
        (A = b(p, A.value, y)),
          A !== null &&
            ((d = o(A, d, T)), $ === null ? (x = A) : ($.sibling = A), ($ = A));
      return x;
    }
    for (E = n(p, E); !A.done; T++, A = f.next())
      (A = w(E, p, T, A.value, y)),
        A !== null &&
          (e && A.alternate !== null && E.delete(A.key === null ? T : A.key),
          (d = o(A, d, T)),
          $ === null ? (x = A) : ($.sibling = A),
          ($ = A));
    return (
      e &&
        E.forEach(function (Pe) {
          return t(p, Pe);
        }),
      x
    );
  }
  return function (p, d, f, y) {
    var x =
      typeof f == "object" && f !== null && f.type === Lt && f.key === null;
    x && (f = f.props.children);
    var $ = typeof f == "object" && f !== null;
    if ($)
      switch (f.$$typeof) {
        case Pn:
          e: {
            for ($ = f.key, x = d; x !== null; ) {
              if (x.key === $) {
                switch (x.tag) {
                  case 7:
                    if (f.type === Lt) {
                      r(p, x.sibling),
                        (d = i(x, f.props.children)),
                        (d.return = p),
                        (p = d);
                      break e;
                    }
                    break;
                  default:
                    if (x.elementType === f.type) {
                      r(p, x.sibling),
                        (d = i(x, f.props)),
                        (d.ref = ni(p, x, f)),
                        (d.return = p),
                        (p = d);
                      break e;
                    }
                }
                r(p, x);
                break;
              } else t(p, x);
              x = x.sibling;
            }
            f.type === Lt
              ? ((d = dn(f.props.children, p.mode, y, f.key)),
                (d.return = p),
                (p = d))
              : ((y = Zo(f.type, f.key, f.props, null, p.mode, y)),
                (y.ref = ni(p, d, f)),
                (y.return = p),
                (p = y));
          }
          return a(p);
        case mr:
          e: {
            for (x = f.key; d !== null; ) {
              if (d.key === x)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === f.containerInfo &&
                  d.stateNode.implementation === f.implementation
                ) {
                  r(p, d.sibling),
                    (d = i(d, f.children || [])),
                    (d.return = p),
                    (p = d);
                  break e;
                } else {
                  r(p, d);
                  break;
                }
              else t(p, d);
              d = d.sibling;
            }
            (d = ds(f, p.mode, y)), (d.return = p), (p = d);
          }
          return a(p);
      }
    if (typeof f == "string" || typeof f == "number")
      return (
        (f = "" + f),
        d !== null && d.tag === 6
          ? (r(p, d.sibling), (d = i(d, f)), (d.return = p), (p = d))
          : (r(p, d), (d = cs(f, p.mode, y)), (d.return = p), (p = d)),
        a(p)
      );
    if (Io(f)) return C(p, d, f, y);
    if (An(f)) return k(p, d, f, y);
    if (($ && Oo(p, f), typeof f == "undefined" && !x))
      switch (p.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(P(152, Nr(p.type) || "Component"));
      }
    return r(p, d);
  };
}
var Bo = Yf(!0),
  Qf = Yf(!1),
  ii = {},
  ht = Yt(ii),
  oi = Yt(ii),
  ai = Yt(ii);
function wr(e) {
  if (e === ii) throw Error(P(174));
  return e;
}
function Pu(e, t) {
  switch ((le(ai, t), le(oi, e), le(ht, ii), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ol(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ol(t, e));
  }
  Z(ht), le(ht, t);
}
function nn() {
  Z(ht), Z(oi), Z(ai);
}
function Xf(e) {
  wr(ai.current);
  var t = wr(ht.current),
    r = Ol(t, e.type);
  t !== r && (le(oi, e), le(ht, r));
}
function $u(e) {
  oi.current === e && (Z(ht), Z(oi));
}
var ue = Yt(0);
function Mo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 64) != 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var zt = null,
  Zt = null,
  mt = !1;
function Kf(e, t) {
  var r = Je(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.type = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (r.flags = 8),
    e.lastEffect !== null
      ? ((e.lastEffect.nextEffect = r), (e.lastEffect = r))
      : (e.firstEffect = e.lastEffect = r);
}
function qf(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null ? ((e.stateNode = t), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), !0) : !1
      );
    case 13:
      return !1;
    default:
      return !1;
  }
}
function zu(e) {
  if (mt) {
    var t = Zt;
    if (t) {
      var r = t;
      if (!qf(e, t)) {
        if (((t = Xr(r.nextSibling)), !t || !qf(e, t))) {
          (e.flags = (e.flags & -1025) | 2), (mt = !1), (zt = e);
          return;
        }
        Kf(zt, r);
      }
      (zt = e), (Zt = Xr(t.firstChild));
    } else (e.flags = (e.flags & -1025) | 2), (mt = !1), (zt = e);
  }
}
function Zf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  zt = e;
}
function Fo(e) {
  if (e !== zt) return !1;
  if (!mt) return Zf(e), (mt = !0), !1;
  var t = e.type;
  if (e.tag !== 5 || (t !== "head" && t !== "body" && !mu(t, e.memoizedProps)))
    for (t = Zt; t; ) Kf(e, t), (t = Xr(t.nextSibling));
  if ((Zf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              Zt = Xr(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Zt = null;
    }
  } else Zt = zt ? Xr(e.stateNode.nextSibling) : null;
  return !0;
}
function Au() {
  (Zt = zt = null), (mt = !1);
}
var on = [];
function Iu() {
  for (var e = 0; e < on.length; e++)
    on[e]._workInProgressVersionPrimary = null;
  on.length = 0;
}
var li = hr.ReactCurrentDispatcher,
  qe = hr.ReactCurrentBatchConfig,
  ui = 0,
  se = null,
  Ee = null,
  Se = null,
  No = !1,
  si = !1;
function Oe() {
  throw Error(P(321));
}
function Ou(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!Xe(e[r], t[r])) return !1;
  return !0;
}
function Bu(e, t, r, n, i, o) {
  if (
    ((ui = o),
    (se = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (li.current = e === null || e.memoizedState === null ? Rg : Pg),
    (e = r(n, i)),
    si)
  ) {
    o = 0;
    do {
      if (((si = !1), !(25 > o))) throw Error(P(301));
      (o += 1),
        (Se = Ee = null),
        (t.updateQueue = null),
        (li.current = $g),
        (e = r(n, i));
    } while (si);
  }
  if (
    ((li.current = Wo),
    (t = Ee !== null && Ee.next !== null),
    (ui = 0),
    (Se = Ee = se = null),
    (No = !1),
    t)
  )
    throw Error(P(300));
  return e;
}
function kr() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Se === null ? (se.memoizedState = Se = e) : (Se = Se.next = e), Se;
}
function _r() {
  if (Ee === null) {
    var e = se.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ee.next;
  var t = Se === null ? se.memoizedState : Se.next;
  if (t !== null) (Se = t), (Ee = e);
  else {
    if (e === null) throw Error(P(310));
    (Ee = e),
      (e = {
        memoizedState: Ee.memoizedState,
        baseState: Ee.baseState,
        baseQueue: Ee.baseQueue,
        queue: Ee.queue,
        next: null,
      }),
      Se === null ? (se.memoizedState = Se = e) : (Se = Se.next = e);
  }
  return Se;
}
function vt(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ci(e) {
  var t = _r(),
    r = t.queue;
  if (r === null) throw Error(P(311));
  r.lastRenderedReducer = e;
  var n = Ee,
    i = n.baseQueue,
    o = r.pending;
  if (o !== null) {
    if (i !== null) {
      var a = i.next;
      (i.next = o.next), (o.next = a);
    }
    (n.baseQueue = i = o), (r.pending = null);
  }
  if (i !== null) {
    (i = i.next), (n = n.baseState);
    var l = (a = o = null),
      u = i;
    do {
      var s = u.lane;
      if ((ui & s) === s)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              eagerReducer: u.eagerReducer,
              eagerState: u.eagerState,
              next: null,
            }),
          (n = u.eagerReducer === e ? u.eagerState : e(n, u.action));
      else {
        var m = {
          lane: s,
          action: u.action,
          eagerReducer: u.eagerReducer,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = m), (o = n)) : (l = l.next = m),
          (se.lanes |= s),
          (hi |= s);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (o = n) : (l.next = a),
      Xe(n, t.memoizedState) || (at = !0),
      (t.memoizedState = n),
      (t.baseState = o),
      (t.baseQueue = l),
      (r.lastRenderedState = n);
  }
  return [t.memoizedState, r.dispatch];
}
function di(e) {
  var t = _r(),
    r = t.queue;
  if (r === null) throw Error(P(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    i = r.pending,
    o = t.memoizedState;
  if (i !== null) {
    r.pending = null;
    var a = (i = i.next);
    do (o = e(o, a.action)), (a = a.next);
    while (a !== i);
    Xe(o, t.memoizedState) || (at = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (r.lastRenderedState = o);
  }
  return [o, n];
}
function Jf(e, t, r) {
  var n = t._getVersion;
  n = n(t._source);
  var i = t._workInProgressVersionPrimary;
  if (
    (i !== null
      ? (e = i === n)
      : ((e = e.mutableReadLanes),
        (e = (ui & e) === e) &&
          ((t._workInProgressVersionPrimary = n), on.push(t))),
    e)
  )
    return r(t._source);
  throw (on.push(t), Error(P(350)));
}
function ep(e, t, r, n) {
  var i = ze;
  if (i === null) throw Error(P(349));
  var o = t._getVersion,
    a = o(t._source),
    l = li.current,
    u = l.useState(function () {
      return Jf(i, t, r);
    }),
    s = u[1],
    m = u[0];
  u = Se;
  var b = e.memoizedState,
    v = b.refs,
    w = v.getSnapshot,
    C = b.source;
  b = b.subscribe;
  var k = se;
  return (
    (e.memoizedState = { refs: v, source: t, subscribe: n }),
    l.useEffect(
      function () {
        (v.getSnapshot = r), (v.setSnapshot = s);
        var p = o(t._source);
        if (!Xe(a, p)) {
          (p = r(t._source)),
            Xe(m, p) ||
              (s(p), (p = er(k)), (i.mutableReadLanes |= p & i.pendingLanes)),
            (p = i.mutableReadLanes),
            (i.entangledLanes |= p);
          for (var d = i.entanglements, f = p; 0 < f; ) {
            var y = 31 - Vt(f),
              x = 1 << y;
            (d[y] |= p), (f &= ~x);
          }
        }
      },
      [r, t, n]
    ),
    l.useEffect(
      function () {
        return n(t._source, function () {
          var p = v.getSnapshot,
            d = v.setSnapshot;
          try {
            d(p(t._source));
            var f = er(k);
            i.mutableReadLanes |= f & i.pendingLanes;
          } catch (y) {
            d(function () {
              throw y;
            });
          }
        });
      },
      [t, n]
    ),
    (Xe(w, r) && Xe(C, t) && Xe(b, n)) ||
      ((e = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: vt,
        lastRenderedState: m,
      }),
      (e.dispatch = s = Lu.bind(null, se, e)),
      (u.queue = e),
      (u.baseQueue = null),
      (m = Jf(i, t, r)),
      (u.memoizedState = u.baseState = m)),
    m
  );
}
function tp(e, t, r) {
  var n = _r();
  return ep(n, e, t, r);
}
function fi(e) {
  var t = kr();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = t.queue =
      {
        pending: null,
        dispatch: null,
        lastRenderedReducer: vt,
        lastRenderedState: e,
      }),
    (e = e.dispatch = Lu.bind(null, se, e)),
    [t.memoizedState, e]
  );
}
function Lo(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = se.updateQueue),
    t === null
      ? ((t = { lastEffect: null }),
        (se.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function rp(e) {
  var t = kr();
  return (e = { current: e }), (t.memoizedState = e);
}
function jo() {
  return _r().memoizedState;
}
function Mu(e, t, r, n) {
  var i = kr();
  (se.flags |= e),
    (i.memoizedState = Lo(1 | t, r, void 0, n === void 0 ? null : n));
}
function Fu(e, t, r, n) {
  var i = _r();
  n = n === void 0 ? null : n;
  var o = void 0;
  if (Ee !== null) {
    var a = Ee.memoizedState;
    if (((o = a.destroy), n !== null && Ou(n, a.deps))) {
      Lo(t, r, o, n);
      return;
    }
  }
  (se.flags |= e), (i.memoizedState = Lo(1 | t, r, o, n));
}
function np(e, t) {
  return Mu(516, 4, e, t);
}
function Do(e, t) {
  return Fu(516, 4, e, t);
}
function ip(e, t) {
  return Fu(4, 2, e, t);
}
function op(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ap(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), Fu(4, 2, op.bind(null, t, e), r)
  );
}
function Nu() {}
function lp(e, t) {
  var r = _r();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Ou(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}
function up(e, t) {
  var r = _r();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Ou(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function Tg(e, t) {
  var r = en();
  xr(98 > r ? 98 : r, function () {
    e(!0);
  }),
    xr(97 < r ? 97 : r, function () {
      var n = qe.transition;
      qe.transition = 1;
      try {
        e(!1), t();
      } finally {
        qe.transition = n;
      }
    });
}
function Lu(e, t, r) {
  var n = We(),
    i = er(e),
    o = {
      lane: i,
      action: r,
      eagerReducer: null,
      eagerState: null,
      next: null,
    },
    a = t.pending;
  if (
    (a === null ? (o.next = o) : ((o.next = a.next), (a.next = o)),
    (t.pending = o),
    (a = e.alternate),
    e === se || (a !== null && a === se))
  )
    si = No = !0;
  else {
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var l = t.lastRenderedState,
          u = a(l, r);
        if (((o.eagerReducer = a), (o.eagerState = u), Xe(u, l))) return;
      } catch {
      } finally {
      }
    tr(e, i, n);
  }
}
var Wo = {
    readContext: Ke,
    useCallback: Oe,
    useContext: Oe,
    useEffect: Oe,
    useImperativeHandle: Oe,
    useLayoutEffect: Oe,
    useMemo: Oe,
    useReducer: Oe,
    useRef: Oe,
    useState: Oe,
    useDebugValue: Oe,
    useDeferredValue: Oe,
    useTransition: Oe,
    useMutableSource: Oe,
    useOpaqueIdentifier: Oe,
    unstable_isNewReconciler: !1,
  },
  Rg = {
    readContext: Ke,
    useCallback: function (e, t) {
      return (kr().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ke,
    useEffect: np,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null), Mu(4, 2, op.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return Mu(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = kr();
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var n = kr();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = n.queue =
          {
            pending: null,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
        (e = e.dispatch = Lu.bind(null, se, e)),
        [n.memoizedState, e]
      );
    },
    useRef: rp,
    useState: fi,
    useDebugValue: Nu,
    useDeferredValue: function (e) {
      var t = fi(e),
        r = t[0],
        n = t[1];
      return (
        np(
          function () {
            var i = qe.transition;
            qe.transition = 1;
            try {
              n(e);
            } finally {
              qe.transition = i;
            }
          },
          [e]
        ),
        r
      );
    },
    useTransition: function () {
      var e = fi(!1),
        t = e[0];
      return (e = Tg.bind(null, e[1])), rp(e), [e, t];
    },
    useMutableSource: function (e, t, r) {
      var n = kr();
      return (
        (n.memoizedState = {
          refs: { getSnapshot: t, setSnapshot: null },
          source: e,
          subscribe: r,
        }),
        ep(n, e, t, r)
      );
    },
    useOpaqueIdentifier: function () {
      if (mt) {
        var e = !1,
          t = xg(function () {
            throw (
              (e || ((e = !0), r("r:" + (gu++).toString(36))), Error(P(355)))
            );
          }),
          r = fi(t)[1];
        return (
          (se.mode & 2) == 0 &&
            ((se.flags |= 516),
            Lo(
              5,
              function () {
                r("r:" + (gu++).toString(36));
              },
              void 0,
              null
            )),
          t
        );
      }
      return (t = "r:" + (gu++).toString(36)), fi(t), t;
    },
    unstable_isNewReconciler: !1,
  },
  Pg = {
    readContext: Ke,
    useCallback: lp,
    useContext: Ke,
    useEffect: Do,
    useImperativeHandle: ap,
    useLayoutEffect: ip,
    useMemo: up,
    useReducer: ci,
    useRef: jo,
    useState: function () {
      return ci(vt);
    },
    useDebugValue: Nu,
    useDeferredValue: function (e) {
      var t = ci(vt),
        r = t[0],
        n = t[1];
      return (
        Do(
          function () {
            var i = qe.transition;
            qe.transition = 1;
            try {
              n(e);
            } finally {
              qe.transition = i;
            }
          },
          [e]
        ),
        r
      );
    },
    useTransition: function () {
      var e = ci(vt)[0];
      return [jo().current, e];
    },
    useMutableSource: tp,
    useOpaqueIdentifier: function () {
      return ci(vt)[0];
    },
    unstable_isNewReconciler: !1,
  },
  $g = {
    readContext: Ke,
    useCallback: lp,
    useContext: Ke,
    useEffect: Do,
    useImperativeHandle: ap,
    useLayoutEffect: ip,
    useMemo: up,
    useReducer: di,
    useRef: jo,
    useState: function () {
      return di(vt);
    },
    useDebugValue: Nu,
    useDeferredValue: function (e) {
      var t = di(vt),
        r = t[0],
        n = t[1];
      return (
        Do(
          function () {
            var i = qe.transition;
            qe.transition = 1;
            try {
              n(e);
            } finally {
              qe.transition = i;
            }
          },
          [e]
        ),
        r
      );
    },
    useTransition: function () {
      var e = di(vt)[0];
      return [jo().current, e];
    },
    useMutableSource: tp,
    useOpaqueIdentifier: function () {
      return di(vt)[0];
    },
    unstable_isNewReconciler: !1,
  },
  zg = hr.ReactCurrentOwner,
  at = !1;
function Be(e, t, r, n) {
  t.child = e === null ? Qf(t, null, r, n) : Bo(t, e.child, r, n);
}
function sp(e, t, r, n, i) {
  r = r.render;
  var o = t.ref;
  return (
    rn(t, i),
    (n = Bu(e, t, r, n, o, i)),
    e !== null && !at
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -517),
        (e.lanes &= ~i),
        At(e, t, i))
      : ((t.flags |= 1), Be(e, t, n, i), t.child)
  );
}
function cp(e, t, r, n, i, o) {
  if (e === null) {
    var a = r.type;
    return typeof a == "function" &&
      !us(a) &&
      a.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), dp(e, t, a, n, i, o))
      : ((e = Zo(r.type, null, n, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  return (
    (a = e.child),
    (i & o) == 0 &&
    ((i = a.memoizedProps),
    (r = r.compare),
    (r = r !== null ? r : Kn),
    r(i, n) && e.ref === t.ref)
      ? At(e, t, o)
      : ((t.flags |= 1),
        (e = ir(a, n)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  );
}
function dp(e, t, r, n, i, o) {
  if (e !== null && Kn(e.memoizedProps, n) && e.ref === t.ref)
    if (((at = !1), (o & i) != 0)) (e.flags & 16384) != 0 && (at = !0);
    else return (t.lanes = e.lanes), At(e, t, o);
  return Du(e, t, r, n, o);
}
function ju(e, t, r) {
  var n = t.pendingProps,
    i = n.children,
    o = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden" || n.mode === "unstable-defer-without-hiding")
    if ((t.mode & 4) == 0) (t.memoizedState = { baseLanes: 0 }), qo(t, r);
    else if ((r & 1073741824) != 0)
      (t.memoizedState = { baseLanes: 0 }), qo(t, o !== null ? o.baseLanes : r);
    else
      return (
        (e = o !== null ? o.baseLanes | r : r),
        (t.lanes = t.childLanes = 1073741824),
        (t.memoizedState = { baseLanes: e }),
        qo(t, e),
        null
      );
  else
    o !== null ? ((n = o.baseLanes | r), (t.memoizedState = null)) : (n = r),
      qo(t, n);
  return Be(e, t, i, r), t.child;
}
function fp(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    (t.flags |= 128);
}
function Du(e, t, r, n, i) {
  var o = Ie(r) ? br : _e.current;
  return (
    (o = Jr(t, o)),
    rn(t, i),
    (r = Bu(e, t, r, n, o, i)),
    e !== null && !at
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -517),
        (e.lanes &= ~i),
        At(e, t, i))
      : ((t.flags |= 1), Be(e, t, r, i), t.child)
  );
}
function pp(e, t, r, n, i) {
  if (Ie(r)) {
    var o = !0;
    Co(t);
  } else o = !1;
  if ((rn(t, i), t.stateNode === null))
    e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
      Uf(t, r, n),
      Ru(t, r, n, i),
      (n = !0);
  else if (e === null) {
    var a = t.stateNode,
      l = t.memoizedProps;
    a.props = l;
    var u = a.context,
      s = r.contextType;
    typeof s == "object" && s !== null
      ? (s = Ke(s))
      : ((s = Ie(r) ? br : _e.current), (s = Jr(t, s)));
    var m = r.getDerivedStateFromProps,
      b =
        typeof m == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    b ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== n || u !== s) && Gf(t, a, n, s)),
      (Xt = !1);
    var v = t.memoizedState;
    (a.state = v),
      ri(t, n, a, i),
      (u = t.memoizedState),
      l !== n || v !== u || Ae.current || Xt
        ? (typeof m == "function" && (zo(t, r, m, n), (u = t.memoizedState)),
          (l = Xt || Vf(t, r, l, n, v, u, s))
            ? (b ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4),
              (t.memoizedProps = n),
              (t.memoizedState = u)),
          (a.props = n),
          (a.state = u),
          (a.context = s),
          (n = l))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4),
          (n = !1));
  } else {
    (a = t.stateNode),
      jf(e, t),
      (l = t.memoizedProps),
      (s = t.type === t.elementType ? l : ot(t.type, l)),
      (a.props = s),
      (b = t.pendingProps),
      (v = a.context),
      (u = r.contextType),
      typeof u == "object" && u !== null
        ? (u = Ke(u))
        : ((u = Ie(r) ? br : _e.current), (u = Jr(t, u)));
    var w = r.getDerivedStateFromProps;
    (m =
      typeof w == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== b || v !== u) && Gf(t, a, n, u)),
      (Xt = !1),
      (v = t.memoizedState),
      (a.state = v),
      ri(t, n, a, i);
    var C = t.memoizedState;
    l !== b || v !== C || Ae.current || Xt
      ? (typeof w == "function" && (zo(t, r, w, n), (C = t.memoizedState)),
        (s = Xt || Vf(t, r, s, n, v, C, u))
          ? (m ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(n, C, u),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(n, C, u)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 256))
          : (typeof a.componentDidUpdate != "function" ||
              (l === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 256),
            (t.memoizedProps = n),
            (t.memoizedState = C)),
        (a.props = n),
        (a.state = C),
        (a.context = u),
        (n = s))
      : (typeof a.componentDidUpdate != "function" ||
          (l === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 256),
        (n = !1));
  }
  return Wu(e, t, r, n, o, i);
}
function Wu(e, t, r, n, i, o) {
  fp(e, t);
  var a = (t.flags & 64) != 0;
  if (!n && !a) return i && $f(t, r, !1), At(e, t, o);
  (n = t.stateNode), (zg.current = t);
  var l =
    a && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Bo(t, e.child, null, o)), (t.child = Bo(t, null, l, o)))
      : Be(e, t, l, o),
    (t.memoizedState = n.state),
    i && $f(t, r, !0),
    t.child
  );
}
function hp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Rf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Rf(e, t.context, !1),
    Pu(e, t.containerInfo);
}
var Ho = { dehydrated: null, retryLane: 0 };
function mp(e, t, r) {
  var n = t.pendingProps,
    i = ue.current,
    o = !1,
    a;
  return (
    (a = (t.flags & 64) != 0) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) != 0),
    a
      ? ((o = !0), (t.flags &= -65))
      : (e !== null && e.memoizedState === null) ||
        n.fallback === void 0 ||
        n.unstable_avoidThisFallback === !0 ||
        (i |= 1),
    le(ue, i & 1),
    e === null
      ? (n.fallback !== void 0 && zu(t),
        (e = n.children),
        (i = n.fallback),
        o
          ? ((e = vp(t, e, i, r)),
            (t.child.memoizedState = { baseLanes: r }),
            (t.memoizedState = Ho),
            e)
          : typeof n.unstable_expectedLoadTime == "number"
          ? ((e = vp(t, e, i, r)),
            (t.child.memoizedState = { baseLanes: r }),
            (t.memoizedState = Ho),
            (t.lanes = 33554432),
            e)
          : ((r = ss({ mode: "visible", children: e }, t.mode, r, null)),
            (r.return = t),
            (t.child = r)))
      : e.memoizedState !== null
      ? o
        ? ((n = yp(e, t, n.children, n.fallback, r)),
          (o = t.child),
          (i = e.child.memoizedState),
          (o.memoizedState =
            i === null ? { baseLanes: r } : { baseLanes: i.baseLanes | r }),
          (o.childLanes = e.childLanes & ~r),
          (t.memoizedState = Ho),
          n)
        : ((r = gp(e, t, n.children, r)), (t.memoizedState = null), r)
      : o
      ? ((n = yp(e, t, n.children, n.fallback, r)),
        (o = t.child),
        (i = e.child.memoizedState),
        (o.memoizedState =
          i === null ? { baseLanes: r } : { baseLanes: i.baseLanes | r }),
        (o.childLanes = e.childLanes & ~r),
        (t.memoizedState = Ho),
        n)
      : ((r = gp(e, t, n.children, r)), (t.memoizedState = null), r)
  );
}
function vp(e, t, r, n) {
  var i = e.mode,
    o = e.child;
  return (
    (t = { mode: "hidden", children: t }),
    (i & 2) == 0 && o !== null
      ? ((o.childLanes = 0), (o.pendingProps = t))
      : (o = ss(t, i, 0, null)),
    (r = dn(r, i, n, null)),
    (o.return = e),
    (r.return = e),
    (o.sibling = r),
    (e.child = o),
    r
  );
}
function gp(e, t, r, n) {
  var i = e.child;
  return (
    (e = i.sibling),
    (r = ir(i, { mode: "visible", children: r })),
    (t.mode & 2) == 0 && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((e.nextEffect = null),
      (e.flags = 8),
      (t.firstEffect = t.lastEffect = e)),
    (t.child = r)
  );
}
function yp(e, t, r, n, i) {
  var o = t.mode,
    a = e.child;
  e = a.sibling;
  var l = { mode: "hidden", children: r };
  return (
    (o & 2) == 0 && t.child !== a
      ? ((r = t.child),
        (r.childLanes = 0),
        (r.pendingProps = l),
        (a = r.lastEffect),
        a !== null
          ? ((t.firstEffect = r.firstEffect),
            (t.lastEffect = a),
            (a.nextEffect = null))
          : (t.firstEffect = t.lastEffect = null))
      : (r = ir(a, l)),
    e !== null ? (n = ir(e, n)) : ((n = dn(n, o, i, null)), (n.flags |= 2)),
    (n.return = t),
    (r.return = t),
    (r.sibling = n),
    (t.child = r),
    n
  );
}
function bp(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Lf(e.return, t);
}
function Hu(e, t, r, n, i, o) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: i,
        lastEffect: o,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = n),
      (a.tail = r),
      (a.tailMode = i),
      (a.lastEffect = o));
}
function Sp(e, t, r) {
  var n = t.pendingProps,
    i = n.revealOrder,
    o = n.tail;
  if ((Be(e, t, n.children, r), (n = ue.current), (n & 2) != 0))
    (n = (n & 1) | 2), (t.flags |= 64);
  else {
    if (e !== null && (e.flags & 64) != 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && bp(e, r);
        else if (e.tag === 19) bp(e, r);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((le(ue, n), (t.mode & 2) == 0)) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (r = t.child, i = null; r !== null; )
          (e = r.alternate),
            e !== null && Mo(e) === null && (i = r),
            (r = r.sibling);
        (r = i),
          r === null
            ? ((i = t.child), (t.child = null))
            : ((i = r.sibling), (r.sibling = null)),
          Hu(t, !1, i, r, o, t.lastEffect);
        break;
      case "backwards":
        for (r = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Mo(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = r), (r = i), (i = e);
        }
        Hu(t, !0, r, null, o, t.lastEffect);
        break;
      case "together":
        Hu(t, !1, null, null, void 0, t.lastEffect);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function At(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (hi |= t.lanes),
    (r & t.childLanes) != 0)
  ) {
    if (e !== null && t.child !== e.child) throw Error(P(153));
    if (t.child !== null) {
      for (
        e = t.child, r = ir(e, e.pendingProps), t.child = r, r.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (r = r.sibling = ir(e, e.pendingProps)),
          (r.return = t);
      r.sibling = null;
    }
    return t.child;
  }
  return null;
}
var xp, Vu, wp, kp;
xp = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
Vu = function () {};
wp = function (e, t, r, n) {
  var i = e.memoizedProps;
  if (i !== n) {
    (e = t.stateNode), wr(ht.current);
    var o = null;
    switch (r) {
      case "input":
        (i = Rl(e, i)), (n = Rl(e, n)), (o = []);
        break;
      case "option":
        (i = zl(e, i)), (n = zl(e, n)), (o = []);
        break;
      case "select":
        (i = ie({}, i, { value: void 0 })),
          (n = ie({}, n, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Al(e, i)), (n = Al(e, n)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof n.onClick == "function" &&
          (e.onclick = So);
    }
    Bl(r, n);
    var a;
    r = null;
    for (s in i)
      if (!n.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null)
        if (s === "style") {
          var l = i[s];
          for (a in l) l.hasOwnProperty(a) && (r || (r = {}), (r[a] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Rn.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in n) {
      var u = n[s];
      if (
        ((l = i != null ? i[s] : void 0),
        n.hasOwnProperty(s) && u !== l && (u != null || l != null))
      )
        if (s === "style")
          if (l) {
            for (a in l)
              !l.hasOwnProperty(a) ||
                (u && u.hasOwnProperty(a)) ||
                (r || (r = {}), (r[a] = ""));
            for (a in u)
              u.hasOwnProperty(a) &&
                l[a] !== u[a] &&
                (r || (r = {}), (r[a] = u[a]));
          } else r || (o || (o = []), o.push(s, r)), (r = u);
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (l = l ? l.__html : void 0),
              u != null && l !== u && (o = o || []).push(s, u))
            : s === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(s, "" + u)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (Rn.hasOwnProperty(s)
                ? (u != null && s === "onScroll" && q("scroll", e),
                  o || l === u || (o = []))
                : typeof u == "object" && u !== null && u.$$typeof === kl
                ? u.toString()
                : (o = o || []).push(s, u));
    }
    r && (o = o || []).push("style", r);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
kp = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function pi(e, t) {
  if (!mt)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), (r = r.sibling);
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function Ag(e, t, r) {
  var n = t.pendingProps;
  switch (t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return Ie(t.type) && _o(), null;
    case 3:
      return (
        nn(),
        Z(Ae),
        Z(_e),
        Iu(),
        (n = t.stateNode),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (Fo(t) ? (t.flags |= 4) : n.hydrate || (t.flags |= 256)),
        Vu(t),
        null
      );
    case 5:
      $u(t);
      var i = wr(ai.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        wp(e, t, r, n, i), e.ref !== t.ref && (t.flags |= 128);
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(P(166));
          return null;
        }
        if (((e = wr(ht.current)), Fo(t))) {
          (n = t.stateNode), (r = t.type);
          var o = t.memoizedProps;
          switch (((n[Gt] = t), (n[wo] = o), r)) {
            case "dialog":
              q("cancel", n), q("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              q("load", n);
              break;
            case "video":
            case "audio":
              for (e = 0; e < Zn.length; e++) q(Zn[e], n);
              break;
            case "source":
              q("error", n);
              break;
            case "img":
            case "image":
            case "link":
              q("error", n), q("load", n);
              break;
            case "details":
              q("toggle", n);
              break;
            case "input":
              fd(n, o), q("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!o.multiple }),
                q("invalid", n);
              break;
            case "textarea":
              md(n, o), q("invalid", n);
          }
          Bl(r, o), (e = null);
          for (var a in o)
            o.hasOwnProperty(a) &&
              ((i = o[a]),
              a === "children"
                ? typeof i == "string"
                  ? n.textContent !== i && (e = ["children", i])
                  : typeof i == "number" &&
                    n.textContent !== "" + i &&
                    (e = ["children", "" + i])
                : Rn.hasOwnProperty(a) &&
                  i != null &&
                  a === "onScroll" &&
                  q("scroll", n));
          switch (r) {
            case "input":
              ro(n), hd(n, o, !0);
              break;
            case "textarea":
              ro(n), gd(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (n.onclick = So);
          }
          (n = e), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          switch (
            ((a = i.nodeType === 9 ? i : i.ownerDocument),
            e === Il.html && (e = yd(r)),
            e === Il.html
              ? r === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == "string"
                ? (e = a.createElement(r, { is: n.is }))
                : ((e = a.createElement(r)),
                  r === "select" &&
                    ((a = e),
                    n.multiple
                      ? (a.multiple = !0)
                      : n.size && (a.size = n.size)))
              : (e = a.createElementNS(e, r)),
            (e[Gt] = t),
            (e[wo] = n),
            xp(e, t, !1, !1),
            (t.stateNode = e),
            (a = Ml(r, n)),
            r)
          ) {
            case "dialog":
              q("cancel", e), q("close", e), (i = n);
              break;
            case "iframe":
            case "object":
            case "embed":
              q("load", e), (i = n);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Zn.length; i++) q(Zn[i], e);
              i = n;
              break;
            case "source":
              q("error", e), (i = n);
              break;
            case "img":
            case "image":
            case "link":
              q("error", e), q("load", e), (i = n);
              break;
            case "details":
              q("toggle", e), (i = n);
              break;
            case "input":
              fd(e, n), (i = Rl(e, n)), q("invalid", e);
              break;
            case "option":
              i = zl(e, n);
              break;
            case "select":
              (e._wrapperState = { wasMultiple: !!n.multiple }),
                (i = ie({}, n, { value: void 0 })),
                q("invalid", e);
              break;
            case "textarea":
              md(e, n), (i = Al(e, n)), q("invalid", e);
              break;
            default:
              i = n;
          }
          Bl(r, i);
          var l = i;
          for (o in l)
            if (l.hasOwnProperty(o)) {
              var u = l[o];
              o === "style"
                ? xd(e, u)
                : o === "dangerouslySetInnerHTML"
                ? ((u = u ? u.__html : void 0), u != null && bd(e, u))
                : o === "children"
                ? typeof u == "string"
                  ? (r !== "textarea" || u !== "") && On(e, u)
                  : typeof u == "number" && On(e, "" + u)
                : o !== "suppressContentEditableWarning" &&
                  o !== "suppressHydrationWarning" &&
                  o !== "autoFocus" &&
                  (Rn.hasOwnProperty(o)
                    ? u != null && o === "onScroll" && q("scroll", e)
                    : u != null && gl(e, o, u, a));
            }
          switch (r) {
            case "input":
              ro(e), hd(e, n, !1);
              break;
            case "textarea":
              ro(e), gd(e);
              break;
            case "option":
              n.value != null && e.setAttribute("value", "" + jt(n.value));
              break;
            case "select":
              (e.multiple = !!n.multiple),
                (o = n.value),
                o != null
                  ? Lr(e, !!n.multiple, o, !1)
                  : n.defaultValue != null &&
                    Lr(e, !!n.multiple, n.defaultValue, !0);
              break;
            default:
              typeof i.onClick == "function" && (e.onclick = So);
          }
          kf(r, n) && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 128);
      }
      return null;
    case 6:
      if (e && t.stateNode != null) kp(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(P(166));
        (r = wr(ai.current)),
          wr(ht.current),
          Fo(t)
            ? ((n = t.stateNode),
              (r = t.memoizedProps),
              (n[Gt] = t),
              n.nodeValue !== r && (t.flags |= 4))
            : ((n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
              (n[Gt] = t),
              (t.stateNode = n));
      }
      return null;
    case 13:
      return (
        Z(ue),
        (n = t.memoizedState),
        (t.flags & 64) != 0
          ? ((t.lanes = r), t)
          : ((n = n !== null),
            (r = !1),
            e === null
              ? t.memoizedProps.fallback !== void 0 && Fo(t)
              : (r = e.memoizedState !== null),
            n &&
              !r &&
              (t.mode & 2) != 0 &&
              ((e === null &&
                t.memoizedProps.unstable_avoidThisFallback !== !0) ||
              (ue.current & 1) != 0
                ? xe === 0 && (xe = 3)
                : ((xe === 0 || xe === 3) && (xe = 4),
                  ze === null ||
                    ((hi & 134217727) == 0 && (ln & 134217727) == 0) ||
                    sn(ze, Te))),
            (n || r) && (t.flags |= 4),
            null)
      );
    case 4:
      return nn(), Vu(t), e === null && yf(t.stateNode.containerInfo), null;
    case 10:
      return Eu(t), null;
    case 17:
      return Ie(t.type) && _o(), null;
    case 19:
      if ((Z(ue), (n = t.memoizedState), n === null)) return null;
      if (((o = (t.flags & 64) != 0), (a = n.rendering), a === null))
        if (o) pi(n, !1);
        else {
          if (xe !== 0 || (e !== null && (e.flags & 64) != 0))
            for (e = t.child; e !== null; ) {
              if (((a = Mo(e)), a !== null)) {
                for (
                  t.flags |= 64,
                    pi(n, !1),
                    o = a.updateQueue,
                    o !== null && ((t.updateQueue = o), (t.flags |= 4)),
                    n.lastEffect === null && (t.firstEffect = null),
                    t.lastEffect = n.lastEffect,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  (o = r),
                    (e = n),
                    (o.flags &= 2),
                    (o.nextEffect = null),
                    (o.firstEffect = null),
                    (o.lastEffect = null),
                    (a = o.alternate),
                    a === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = a.childLanes),
                        (o.lanes = a.lanes),
                        (o.child = a.child),
                        (o.memoizedProps = a.memoizedProps),
                        (o.memoizedState = a.memoizedState),
                        (o.updateQueue = a.updateQueue),
                        (o.type = a.type),
                        (e = a.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return le(ue, (ue.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          n.tail !== null &&
            Ce() > ts &&
            ((t.flags |= 64), (o = !0), pi(n, !1), (t.lanes = 33554432));
        }
      else {
        if (!o)
          if (((e = Mo(a)), e !== null)) {
            if (
              ((t.flags |= 64),
              (o = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              pi(n, !0),
              n.tail === null && n.tailMode === "hidden" && !a.alternate && !mt)
            )
              return (
                (t = t.lastEffect = n.lastEffect),
                t !== null && (t.nextEffect = null),
                null
              );
          } else
            2 * Ce() - n.renderingStartTime > ts &&
              r !== 1073741824 &&
              ((t.flags |= 64), (o = !0), pi(n, !1), (t.lanes = 33554432));
        n.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((r = n.last),
            r !== null ? (r.sibling = a) : (t.child = a),
            (n.last = a));
      }
      return n.tail !== null
        ? ((r = n.tail),
          (n.rendering = r),
          (n.tail = r.sibling),
          (n.lastEffect = t.lastEffect),
          (n.renderingStartTime = Ce()),
          (r.sibling = null),
          (t = ue.current),
          le(ue, o ? (t & 1) | 2 : t & 1),
          r)
        : null;
    case 23:
    case 24:
      return (
        ls(),
        e !== null &&
          (e.memoizedState !== null) != (t.memoizedState !== null) &&
          n.mode !== "unstable-defer-without-hiding" &&
          (t.flags |= 4),
        null
      );
  }
  throw Error(P(156, t.tag));
}
function Ig(e) {
  switch (e.tag) {
    case 1:
      Ie(e.type) && _o();
      var t = e.flags;
      return t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null;
    case 3:
      if ((nn(), Z(Ae), Z(_e), Iu(), (t = e.flags), (t & 64) != 0))
        throw Error(P(285));
      return (e.flags = (t & -4097) | 64), e;
    case 5:
      return $u(e), null;
    case 13:
      return (
        Z(ue),
        (t = e.flags),
        t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null
      );
    case 19:
      return Z(ue), null;
    case 4:
      return nn(), null;
    case 10:
      return Eu(e), null;
    case 23:
    case 24:
      return ls(), null;
    default:
      return null;
  }
}
function Uu(e, t) {
  try {
    var r = "",
      n = t;
    do (r += pv(n)), (n = n.return);
    while (n);
    var i = r;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i };
}
function Gu(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var Og = typeof WeakMap == "function" ? WeakMap : Map;
function _p(e, t, r) {
  (r = Kt(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      Go || ((Go = !0), (rs = n)), Gu(e, t);
    }),
    r
  );
}
function Cp(e, t, r) {
  (r = Kt(-1, r)), (r.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var i = t.value;
    r.payload = function () {
      return Gu(e, t), n(i);
    };
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (r.callback = function () {
        typeof n != "function" &&
          (gt === null ? (gt = new Set([this])) : gt.add(this), Gu(e, t));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    r
  );
}
var Bg = typeof WeakSet == "function" ? WeakSet : Set;
function Ep(e) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (r) {
        nr(e, r);
      }
    else t.current = null;
}
function Mg(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (t.flags & 256 && e !== null) {
        var r = e.memoizedProps,
          n = e.memoizedState;
        (e = t.stateNode),
          (t = e.getSnapshotBeforeUpdate(
            t.elementType === t.type ? r : ot(t.type, r),
            n
          )),
          (e.__reactInternalSnapshotBeforeUpdate = t);
      }
      return;
    case 3:
      t.flags & 256 && vu(t.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(P(163));
}
function Fg(e, t, r) {
  switch (r.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      if (
        ((t = r.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
      ) {
        e = t = t.next;
        do {
          if ((e.tag & 3) == 3) {
            var n = e.create;
            e.destroy = n();
          }
          e = e.next;
        } while (e !== t);
      }
      if (
        ((t = r.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
      ) {
        e = t = t.next;
        do {
          var i = e;
          (n = i.next),
            (i = i.tag),
            (i & 4) != 0 && (i & 1) != 0 && (Dp(r, e), Ug(r, e)),
            (e = n);
        } while (e !== t);
      }
      return;
    case 1:
      (e = r.stateNode),
        r.flags & 4 &&
          (t === null
            ? e.componentDidMount()
            : ((n =
                r.elementType === r.type
                  ? t.memoizedProps
                  : ot(r.type, t.memoizedProps)),
              e.componentDidUpdate(
                n,
                t.memoizedState,
                e.__reactInternalSnapshotBeforeUpdate
              ))),
        (t = r.updateQueue),
        t !== null && Wf(r, t, e);
      return;
    case 3:
      if (((t = r.updateQueue), t !== null)) {
        if (((e = null), r.child !== null))
          switch (r.child.tag) {
            case 5:
              e = r.child.stateNode;
              break;
            case 1:
              e = r.child.stateNode;
          }
        Wf(r, t, e);
      }
      return;
    case 5:
      (e = r.stateNode),
        t === null && r.flags & 4 && kf(r.type, r.memoizedProps) && e.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      r.memoizedState === null &&
        ((r = r.alternate),
        r !== null &&
          ((r = r.memoizedState),
          r !== null && ((r = r.dehydrated), r !== null && Fd(r))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(P(163));
}
function Tp(e, t) {
  for (var r = e; ; ) {
    if (r.tag === 5) {
      var n = r.stateNode;
      if (t)
        (n = n.style),
          typeof n.setProperty == "function"
            ? n.setProperty("display", "none", "important")
            : (n.display = "none");
      else {
        n = r.stateNode;
        var i = r.memoizedProps.style;
        (i = i != null && i.hasOwnProperty("display") ? i.display : null),
          (n.style.display = Sd("display", i));
      }
    } else if (r.tag === 6) r.stateNode.nodeValue = t ? "" : r.memoizedProps;
    else if (
      ((r.tag !== 23 && r.tag !== 24) || r.memoizedState === null || r === e) &&
      r.child !== null
    ) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === e) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === e) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
}
function Rp(e, t) {
  if (Sr && typeof Sr.onCommitFiberUnmount == "function")
    try {
      Sr.onCommitFiberUnmount(bu, t);
    } catch {}
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      if (
        ((e = t.updateQueue), e !== null && ((e = e.lastEffect), e !== null))
      ) {
        var r = (e = e.next);
        do {
          var n = r,
            i = n.destroy;
          if (((n = n.tag), i !== void 0))
            if ((n & 4) != 0) Dp(t, r);
            else {
              n = t;
              try {
                i();
              } catch (o) {
                nr(n, o);
              }
            }
          r = r.next;
        } while (r !== e);
      }
      break;
    case 1:
      if (
        (Ep(t), (e = t.stateNode), typeof e.componentWillUnmount == "function")
      )
        try {
          (e.props = t.memoizedProps),
            (e.state = t.memoizedState),
            e.componentWillUnmount();
        } catch (o) {
          nr(t, o);
        }
      break;
    case 5:
      Ep(t);
      break;
    case 4:
      Ap(e, t);
  }
}
function Pp(e) {
  (e.alternate = null),
    (e.child = null),
    (e.dependencies = null),
    (e.firstEffect = null),
    (e.lastEffect = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.return = null),
    (e.updateQueue = null);
}
function $p(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function zp(e) {
  e: {
    for (var t = e.return; t !== null; ) {
      if ($p(t)) break e;
      t = t.return;
    }
    throw Error(P(160));
  }
  var r = t;
  switch (((t = r.stateNode), r.tag)) {
    case 5:
      var n = !1;
      break;
    case 3:
      (t = t.containerInfo), (n = !0);
      break;
    case 4:
      (t = t.containerInfo), (n = !0);
      break;
    default:
      throw Error(P(161));
  }
  r.flags & 16 && (On(t, ""), (r.flags &= -17));
  e: t: for (r = e; ; ) {
    for (; r.sibling === null; ) {
      if (r.return === null || $p(r.return)) {
        r = null;
        break e;
      }
      r = r.return;
    }
    for (
      r.sibling.return = r.return, r = r.sibling;
      r.tag !== 5 && r.tag !== 6 && r.tag !== 18;

    ) {
      if (r.flags & 2 || r.child === null || r.tag === 4) continue t;
      (r.child.return = r), (r = r.child);
    }
    if (!(r.flags & 2)) {
      r = r.stateNode;
      break e;
    }
  }
  n ? Yu(e, r, t) : Qu(e, r, t);
}
function Yu(e, t, r) {
  var n = e.tag,
    i = n === 5 || n === 6;
  if (i)
    (e = i ? e.stateNode : e.stateNode.instance),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = So));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Yu(e, t, r), e = e.sibling; e !== null; ) Yu(e, t, r), (e = e.sibling);
}
function Qu(e, t, r) {
  var n = e.tag,
    i = n === 5 || n === 6;
  if (i)
    (e = i ? e.stateNode : e.stateNode.instance),
      t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Qu(e, t, r), e = e.sibling; e !== null; ) Qu(e, t, r), (e = e.sibling);
}
function Ap(e, t) {
  for (var r = t, n = !1, i, o; ; ) {
    if (!n) {
      n = r.return;
      e: for (;;) {
        if (n === null) throw Error(P(160));
        switch (((i = n.stateNode), n.tag)) {
          case 5:
            o = !1;
            break e;
          case 3:
            (i = i.containerInfo), (o = !0);
            break e;
          case 4:
            (i = i.containerInfo), (o = !0);
            break e;
        }
        n = n.return;
      }
      n = !0;
    }
    if (r.tag === 5 || r.tag === 6) {
      e: for (var a = e, l = r, u = l; ; )
        if ((Rp(a, u), u.child !== null && u.tag !== 4))
          (u.child.return = u), (u = u.child);
        else {
          if (u === l) break e;
          for (; u.sibling === null; ) {
            if (u.return === null || u.return === l) break e;
            u = u.return;
          }
          (u.sibling.return = u.return), (u = u.sibling);
        }
      o
        ? ((a = i),
          (l = r.stateNode),
          a.nodeType === 8 ? a.parentNode.removeChild(l) : a.removeChild(l))
        : i.removeChild(r.stateNode);
    } else if (r.tag === 4) {
      if (r.child !== null) {
        (i = r.stateNode.containerInfo),
          (o = !0),
          (r.child.return = r),
          (r = r.child);
        continue;
      }
    } else if ((Rp(e, r), r.child !== null)) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      (r = r.return), r.tag === 4 && (n = !1);
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
}
function Xu(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var r = t.updateQueue;
      if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var n = (r = r.next);
        do
          (n.tag & 3) == 3 &&
            ((e = n.destroy), (n.destroy = void 0), e !== void 0 && e()),
            (n = n.next);
        while (n !== r);
      }
      return;
    case 1:
      return;
    case 5:
      if (((r = t.stateNode), r != null)) {
        n = t.memoizedProps;
        var i = e !== null ? e.memoizedProps : n;
        e = t.type;
        var o = t.updateQueue;
        if (((t.updateQueue = null), o !== null)) {
          for (
            r[wo] = n,
              e === "input" && n.type === "radio" && n.name != null && pd(r, n),
              Ml(e, i),
              t = Ml(e, n),
              i = 0;
            i < o.length;
            i += 2
          ) {
            var a = o[i],
              l = o[i + 1];
            a === "style"
              ? xd(r, l)
              : a === "dangerouslySetInnerHTML"
              ? bd(r, l)
              : a === "children"
              ? On(r, l)
              : gl(r, a, l, t);
          }
          switch (e) {
            case "input":
              Pl(r, n);
              break;
            case "textarea":
              vd(r, n);
              break;
            case "select":
              (e = r._wrapperState.wasMultiple),
                (r._wrapperState.wasMultiple = !!n.multiple),
                (o = n.value),
                o != null
                  ? Lr(r, !!n.multiple, o, !1)
                  : e !== !!n.multiple &&
                    (n.defaultValue != null
                      ? Lr(r, !!n.multiple, n.defaultValue, !0)
                      : Lr(r, !!n.multiple, n.multiple ? [] : "", !1));
          }
        }
      }
      return;
    case 6:
      if (t.stateNode === null) throw Error(P(162));
      t.stateNode.nodeValue = t.memoizedProps;
      return;
    case 3:
      (r = t.stateNode), r.hydrate && ((r.hydrate = !1), Fd(r.containerInfo));
      return;
    case 12:
      return;
    case 13:
      t.memoizedState !== null && ((es = Ce()), Tp(t.child, !0)), Ip(t);
      return;
    case 19:
      Ip(t);
      return;
    case 17:
      return;
    case 23:
    case 24:
      Tp(t, t.memoizedState !== null);
      return;
  }
  throw Error(P(163));
}
function Ip(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new Bg()),
      t.forEach(function (n) {
        var i = Qg.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(i, i));
      });
  }
}
function Ng(e, t) {
  return e !== null &&
    ((e = e.memoizedState), e === null || e.dehydrated !== null)
    ? ((t = t.memoizedState), t !== null && t.dehydrated === null)
    : !1;
}
var Lg = Math.ceil,
  Vo = hr.ReactCurrentDispatcher,
  Ku = hr.ReactCurrentOwner,
  N = 0,
  ze = null,
  he = null,
  Te = 0,
  Cr = 0,
  qu = Yt(0),
  xe = 0,
  Uo = null,
  an = 0,
  hi = 0,
  ln = 0,
  Zu = 0,
  Ju = null,
  es = 0,
  ts = 1 / 0;
function un() {
  ts = Ce() + 500;
}
var O = null,
  Go = !1,
  rs = null,
  gt = null,
  Jt = !1,
  mi = null,
  vi = 90,
  ns = [],
  is = [],
  It = null,
  gi = 0,
  os = null,
  Yo = -1,
  Ot = 0,
  Qo = 0,
  yi = null,
  Xo = !1;
function We() {
  return (N & 48) != 0 ? Ce() : Yo !== -1 ? Yo : (Yo = Ce());
}
function er(e) {
  if (((e = e.mode), (e & 2) == 0)) return 1;
  if ((e & 4) == 0) return en() === 99 ? 1 : 2;
  if ((Ot === 0 && (Ot = an), Eg.transition !== 0)) {
    Qo !== 0 && (Qo = Ju !== null ? Ju.pendingLanes : 0), (e = Ot);
    var t = 4186112 & ~Qo;
    return (
      (t &= -t),
      t === 0 && ((e = 4186112 & ~e), (t = e & -e), t === 0 && (t = 8192)),
      t
    );
  }
  return (
    (e = en()),
    (N & 4) != 0 && e === 98
      ? (e = co(12, Ot))
      : ((e = Pv(e)), (e = co(e, Ot))),
    e
  );
}
function tr(e, t, r) {
  if (50 < gi) throw ((gi = 0), (os = null), Error(P(185)));
  if (((e = Ko(e, t)), e === null)) return null;
  fo(e, t, r), e === ze && ((ln |= t), xe === 4 && sn(e, Te));
  var n = en();
  t === 1
    ? (N & 8) != 0 && (N & 48) == 0
      ? as(e)
      : (Ze(e, r), N === 0 && (un(), pt()))
    : ((N & 4) == 0 ||
        (n !== 98 && n !== 99) ||
        (It === null ? (It = new Set([e])) : It.add(e)),
      Ze(e, r)),
    (Ju = e);
}
function Ko(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
function Ze(e, t) {
  for (
    var r = e.callbackNode,
      n = e.suspendedLanes,
      i = e.pingedLanes,
      o = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var l = 31 - Vt(a),
      u = 1 << l,
      s = o[l];
    if (s === -1) {
      if ((u & n) == 0 || (u & i) != 0) {
        (s = t), Hr(u);
        var m = K;
        o[l] = 10 <= m ? s + 250 : 6 <= m ? s + 5e3 : -1;
      }
    } else s <= t && (e.expiredLanes |= u);
    a &= ~u;
  }
  if (((n = Vn(e, e === ze ? Te : 0)), (t = K), n === 0))
    r !== null &&
      (r !== ku && xu(r), (e.callbackNode = null), (e.callbackPriority = 0));
  else {
    if (r !== null) {
      if (e.callbackPriority === t) return;
      r !== ku && xu(r);
    }
    t === 15
      ? ((r = as.bind(null, e)),
        $t === null ? (($t = [r]), (To = Su(Eo, Nf))) : $t.push(r),
        (r = ku))
      : t === 14
      ? (r = ti(99, as.bind(null, e)))
      : ((r = $v(t)), (r = ti(r, Op.bind(null, e)))),
      (e.callbackPriority = t),
      (e.callbackNode = r);
  }
}
function Op(e) {
  if (((Yo = -1), (Qo = Ot = 0), (N & 48) != 0)) throw Error(P(327));
  var t = e.callbackNode;
  if (rr() && e.callbackNode !== t) return null;
  var r = Vn(e, e === ze ? Te : 0);
  if (r === 0) return null;
  var n = r,
    i = N;
  N |= 16;
  var o = Np();
  (ze !== e || Te !== n) && (un(), cn(e, n));
  do
    try {
      Wg();
      break;
    } catch (l) {
      Fp(e, l);
    }
  while (1);
  if (
    (Cu(),
    (Vo.current = o),
    (N = i),
    he !== null ? (n = 0) : ((ze = null), (Te = 0), (n = xe)),
    (an & ln) != 0)
  )
    cn(e, 0);
  else if (n !== 0) {
    if (
      (n === 2 &&
        ((N |= 64),
        e.hydrate && ((e.hydrate = !1), vu(e.containerInfo)),
        (r = Vd(e)),
        r !== 0 && (n = bi(e, r))),
      n === 1)
    )
      throw ((t = Uo), cn(e, 0), sn(e, r), Ze(e, Ce()), t);
    switch (
      ((e.finishedWork = e.current.alternate), (e.finishedLanes = r), n)
    ) {
      case 0:
      case 1:
        throw Error(P(345));
      case 2:
        Er(e);
        break;
      case 3:
        if (
          (sn(e, r), (r & 62914560) === r && ((n = es + 500 - Ce()), 10 < n))
        ) {
          if (Vn(e, 0) !== 0) break;
          if (((i = e.suspendedLanes), (i & r) !== r)) {
            We(), (e.pingedLanes |= e.suspendedLanes & i);
            break;
          }
          e.timeoutHandle = _f(Er.bind(null, e), n);
          break;
        }
        Er(e);
        break;
      case 4:
        if ((sn(e, r), (r & 4186112) === r)) break;
        for (n = e.eventTimes, i = -1; 0 < r; ) {
          var a = 31 - Vt(r);
          (o = 1 << a), (a = n[a]), a > i && (i = a), (r &= ~o);
        }
        if (
          ((r = i),
          (r = Ce() - r),
          (r =
            (120 > r
              ? 120
              : 480 > r
              ? 480
              : 1080 > r
              ? 1080
              : 1920 > r
              ? 1920
              : 3e3 > r
              ? 3e3
              : 4320 > r
              ? 4320
              : 1960 * Lg(r / 1960)) - r),
          10 < r)
        ) {
          e.timeoutHandle = _f(Er.bind(null, e), r);
          break;
        }
        Er(e);
        break;
      case 5:
        Er(e);
        break;
      default:
        throw Error(P(329));
    }
  }
  return Ze(e, Ce()), e.callbackNode === t ? Op.bind(null, e) : null;
}
function sn(e, t) {
  for (
    t &= ~Zu,
      t &= ~ln,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - Vt(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function as(e) {
  if ((N & 48) != 0) throw Error(P(327));
  if ((rr(), e === ze && (e.expiredLanes & Te) != 0)) {
    var t = Te,
      r = bi(e, t);
    (an & ln) != 0 && ((t = Vn(e, t)), (r = bi(e, t)));
  } else (t = Vn(e, 0)), (r = bi(e, t));
  if (
    (e.tag !== 0 &&
      r === 2 &&
      ((N |= 64),
      e.hydrate && ((e.hydrate = !1), vu(e.containerInfo)),
      (t = Vd(e)),
      t !== 0 && (r = bi(e, t))),
    r === 1)
  )
    throw ((r = Uo), cn(e, 0), sn(e, t), Ze(e, Ce()), r);
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Er(e),
    Ze(e, Ce()),
    null
  );
}
function jg() {
  if (It !== null) {
    var e = It;
    (It = null),
      e.forEach(function (t) {
        (t.expiredLanes |= 24 & t.pendingLanes), Ze(t, Ce());
      });
  }
  pt();
}
function Bp(e, t) {
  var r = N;
  N |= 1;
  try {
    return e(t);
  } finally {
    (N = r), N === 0 && (un(), pt());
  }
}
function Mp(e, t) {
  var r = N;
  (N &= -2), (N |= 8);
  try {
    return e(t);
  } finally {
    (N = r), N === 0 && (un(), pt());
  }
}
function qo(e, t) {
  le(qu, Cr), (Cr |= t), (an |= t);
}
function ls() {
  (Cr = qu.current), Z(qu);
}
function cn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), Sg(r)), he !== null))
    for (r = he.return; r !== null; ) {
      var n = r;
      switch (n.tag) {
        case 1:
          (n = n.type.childContextTypes), n != null && _o();
          break;
        case 3:
          nn(), Z(Ae), Z(_e), Iu();
          break;
        case 5:
          $u(n);
          break;
        case 4:
          nn();
          break;
        case 13:
          Z(ue);
          break;
        case 19:
          Z(ue);
          break;
        case 10:
          Eu(n);
          break;
        case 23:
        case 24:
          ls();
      }
      r = r.return;
    }
  (ze = e),
    (he = ir(e.current, null)),
    (Te = Cr = an = t),
    (xe = 0),
    (Uo = null),
    (Zu = ln = hi = 0);
}
function Fp(e, t) {
  do {
    var r = he;
    try {
      if ((Cu(), (li.current = Wo), No)) {
        for (var n = se.memoizedState; n !== null; ) {
          var i = n.queue;
          i !== null && (i.pending = null), (n = n.next);
        }
        No = !1;
      }
      if (
        ((ui = 0),
        (Se = Ee = se = null),
        (si = !1),
        (Ku.current = null),
        r === null || r.return === null)
      ) {
        (xe = 1), (Uo = t), (he = null);
        break;
      }
      e: {
        var o = e,
          a = r.return,
          l = r,
          u = t;
        if (
          ((t = Te),
          (l.flags |= 2048),
          (l.firstEffect = l.lastEffect = null),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var s = u;
          if ((l.mode & 2) == 0) {
            var m = l.alternate;
            m
              ? ((l.updateQueue = m.updateQueue),
                (l.memoizedState = m.memoizedState),
                (l.lanes = m.lanes))
              : ((l.updateQueue = null), (l.memoizedState = null));
          }
          var b = (ue.current & 1) != 0,
            v = a;
          do {
            var w;
            if ((w = v.tag === 13)) {
              var C = v.memoizedState;
              if (C !== null) w = C.dehydrated !== null;
              else {
                var k = v.memoizedProps;
                w =
                  k.fallback === void 0
                    ? !1
                    : k.unstable_avoidThisFallback !== !0
                    ? !0
                    : !b;
              }
            }
            if (w) {
              var p = v.updateQueue;
              if (p === null) {
                var d = new Set();
                d.add(s), (v.updateQueue = d);
              } else p.add(s);
              if ((v.mode & 2) == 0) {
                if (
                  ((v.flags |= 64),
                  (l.flags |= 16384),
                  (l.flags &= -2981),
                  l.tag === 1)
                )
                  if (l.alternate === null) l.tag = 17;
                  else {
                    var f = Kt(-1, 1);
                    (f.tag = 2), qt(l, f);
                  }
                l.lanes |= 1;
                break e;
              }
              (u = void 0), (l = t);
              var y = o.pingCache;
              if (
                (y === null
                  ? ((y = o.pingCache = new Og()), (u = new Set()), y.set(s, u))
                  : ((u = y.get(s)),
                    u === void 0 && ((u = new Set()), y.set(s, u))),
                !u.has(l))
              ) {
                u.add(l);
                var x = Yg.bind(null, o, s, l);
                s.then(x, x);
              }
              (v.flags |= 4096), (v.lanes = t);
              break e;
            }
            v = v.return;
          } while (v !== null);
          u = Error(
            (Nr(l.type) || "A React component") +
              ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`
          );
        }
        xe !== 5 && (xe = 2), (u = Uu(u, l)), (v = a);
        do {
          switch (v.tag) {
            case 3:
              (o = u), (v.flags |= 4096), (t &= -t), (v.lanes |= t);
              var $ = _p(v, o, t);
              Df(v, $);
              break e;
            case 1:
              o = u;
              var E = v.type,
                T = v.stateNode;
              if (
                (v.flags & 64) == 0 &&
                (typeof E.getDerivedStateFromError == "function" ||
                  (T !== null &&
                    typeof T.componentDidCatch == "function" &&
                    (gt === null || !gt.has(T))))
              ) {
                (v.flags |= 4096), (t &= -t), (v.lanes |= t);
                var M = Cp(v, o, t);
                Df(v, M);
                break e;
              }
          }
          v = v.return;
        } while (v !== null);
      }
      jp(r);
    } catch (A) {
      (t = A), he === r && r !== null && (he = r = r.return);
      continue;
    }
    break;
  } while (1);
}
function Np() {
  var e = Vo.current;
  return (Vo.current = Wo), e === null ? Wo : e;
}
function bi(e, t) {
  var r = N;
  N |= 16;
  var n = Np();
  (ze === e && Te === t) || cn(e, t);
  do
    try {
      Dg();
      break;
    } catch (i) {
      Fp(e, i);
    }
  while (1);
  if ((Cu(), (N = r), (Vo.current = n), he !== null)) throw Error(P(261));
  return (ze = null), (Te = 0), xe;
}
function Dg() {
  for (; he !== null; ) Lp(he);
}
function Wg() {
  for (; he !== null && !kg(); ) Lp(he);
}
function Lp(e) {
  var t = Hp(e.alternate, e, Cr);
  (e.memoizedProps = e.pendingProps),
    t === null ? jp(e) : (he = t),
    (Ku.current = null);
}
function jp(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), (t.flags & 2048) == 0)) {
      if (((r = Ag(r, t, Cr)), r !== null)) {
        he = r;
        return;
      }
      if (
        ((r = t),
        (r.tag !== 24 && r.tag !== 23) ||
          r.memoizedState === null ||
          (Cr & 1073741824) != 0 ||
          (r.mode & 4) == 0)
      ) {
        for (var n = 0, i = r.child; i !== null; )
          (n |= i.lanes | i.childLanes), (i = i.sibling);
        r.childLanes = n;
      }
      e !== null &&
        (e.flags & 2048) == 0 &&
        (e.firstEffect === null && (e.firstEffect = t.firstEffect),
        t.lastEffect !== null &&
          (e.lastEffect !== null && (e.lastEffect.nextEffect = t.firstEffect),
          (e.lastEffect = t.lastEffect)),
        1 < t.flags &&
          (e.lastEffect !== null
            ? (e.lastEffect.nextEffect = t)
            : (e.firstEffect = t),
          (e.lastEffect = t)));
    } else {
      if (((r = Ig(t)), r !== null)) {
        (r.flags &= 2047), (he = r);
        return;
      }
      e !== null && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
    }
    if (((t = t.sibling), t !== null)) {
      he = t;
      return;
    }
    he = t = e;
  } while (t !== null);
  xe === 0 && (xe = 5);
}
function Er(e) {
  var t = en();
  return xr(99, Hg.bind(null, e, t)), null;
}
function Hg(e, t) {
  do rr();
  while (mi !== null);
  if ((N & 48) != 0) throw Error(P(327));
  var r = e.finishedWork;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(P(177));
  e.callbackNode = null;
  var n = r.lanes | r.childLanes,
    i = n,
    o = e.pendingLanes & ~i;
  (e.pendingLanes = i),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= i),
    (e.mutableReadLanes &= i),
    (e.entangledLanes &= i),
    (i = e.entanglements);
  for (var a = e.eventTimes, l = e.expirationTimes; 0 < o; ) {
    var u = 31 - Vt(o),
      s = 1 << u;
    (i[u] = 0), (a[u] = -1), (l[u] = -1), (o &= ~s);
  }
  if (
    (It !== null && (n & 24) == 0 && It.has(e) && It.delete(e),
    e === ze && ((he = ze = null), (Te = 0)),
    1 < r.flags
      ? r.lastEffect !== null
        ? ((r.lastEffect.nextEffect = r), (n = r.firstEffect))
        : (n = r)
      : (n = r.firstEffect),
    n !== null)
  ) {
    if (
      ((i = N), (N |= 32), (Ku.current = null), (pu = po), (a = df()), su(a))
    ) {
      if ("selectionStart" in a)
        l = { start: a.selectionStart, end: a.selectionEnd };
      else
        e: if (
          ((l = ((l = a.ownerDocument) && l.defaultView) || window),
          (s = l.getSelection && l.getSelection()) && s.rangeCount !== 0)
        ) {
          (l = s.anchorNode),
            (o = s.anchorOffset),
            (u = s.focusNode),
            (s = s.focusOffset);
          try {
            l.nodeType, u.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0,
            b = -1,
            v = -1,
            w = 0,
            C = 0,
            k = a,
            p = null;
          t: for (;;) {
            for (
              var d;
              k !== l || (o !== 0 && k.nodeType !== 3) || (b = m + o),
                k !== u || (s !== 0 && k.nodeType !== 3) || (v = m + s),
                k.nodeType === 3 && (m += k.nodeValue.length),
                (d = k.firstChild) !== null;

            )
              (p = k), (k = d);
            for (;;) {
              if (k === a) break t;
              if (
                (p === l && ++w === o && (b = m),
                p === u && ++C === s && (v = m),
                (d = k.nextSibling) !== null)
              )
                break;
              (k = p), (p = k.parentNode);
            }
            k = d;
          }
          l = b === -1 || v === -1 ? null : { start: b, end: v };
        } else l = null;
      l = l || { start: 0, end: 0 };
    } else l = null;
    (hu = { focusedElem: a, selectionRange: l }),
      (po = !1),
      (yi = null),
      (Xo = !1),
      (O = n);
    do
      try {
        Vg();
      } catch (A) {
        if (O === null) throw Error(P(330));
        nr(O, A), (O = O.nextEffect);
      }
    while (O !== null);
    (yi = null), (O = n);
    do
      try {
        for (a = e; O !== null; ) {
          var f = O.flags;
          if ((f & 16 && On(O.stateNode, ""), f & 128)) {
            var y = O.alternate;
            if (y !== null) {
              var x = y.ref;
              x !== null &&
                (typeof x == "function" ? x(null) : (x.current = null));
            }
          }
          switch (f & 1038) {
            case 2:
              zp(O), (O.flags &= -3);
              break;
            case 6:
              zp(O), (O.flags &= -3), Xu(O.alternate, O);
              break;
            case 1024:
              O.flags &= -1025;
              break;
            case 1028:
              (O.flags &= -1025), Xu(O.alternate, O);
              break;
            case 4:
              Xu(O.alternate, O);
              break;
            case 8:
              (l = O), Ap(a, l);
              var $ = l.alternate;
              Pp(l), $ !== null && Pp($);
          }
          O = O.nextEffect;
        }
      } catch (A) {
        if (O === null) throw Error(P(330));
        nr(O, A), (O = O.nextEffect);
      }
    while (O !== null);
    if (
      ((x = hu),
      (y = df()),
      (f = x.focusedElem),
      (a = x.selectionRange),
      y !== f && f && f.ownerDocument && cf(f.ownerDocument.documentElement, f))
    ) {
      for (
        a !== null &&
          su(f) &&
          ((y = a.start),
          (x = a.end),
          x === void 0 && (x = y),
          ("selectionStart" in f)
            ? ((f.selectionStart = y),
              (f.selectionEnd = Math.min(x, f.value.length)))
            : ((x =
                ((y = f.ownerDocument || document) && y.defaultView) || window),
              x.getSelection &&
                ((x = x.getSelection()),
                (l = f.textContent.length),
                ($ = Math.min(a.start, l)),
                (a = a.end === void 0 ? $ : Math.min(a.end, l)),
                !x.extend && $ > a && ((l = a), (a = $), ($ = l)),
                (l = sf(f, $)),
                (o = sf(f, a)),
                l &&
                  o &&
                  (x.rangeCount !== 1 ||
                    x.anchorNode !== l.node ||
                    x.anchorOffset !== l.offset ||
                    x.focusNode !== o.node ||
                    x.focusOffset !== o.offset) &&
                  ((y = y.createRange()),
                  y.setStart(l.node, l.offset),
                  x.removeAllRanges(),
                  $ > a
                    ? (x.addRange(y), x.extend(o.node, o.offset))
                    : (y.setEnd(o.node, o.offset), x.addRange(y)))))),
          y = [],
          x = f;
        (x = x.parentNode);

      )
        x.nodeType === 1 &&
          y.push({ element: x, left: x.scrollLeft, top: x.scrollTop });
      for (typeof f.focus == "function" && f.focus(), f = 0; f < y.length; f++)
        (x = y[f]),
          (x.element.scrollLeft = x.left),
          (x.element.scrollTop = x.top);
    }
    (po = !!pu), (hu = pu = null), (e.current = r), (O = n);
    do
      try {
        for (f = e; O !== null; ) {
          var E = O.flags;
          if ((E & 36 && Fg(f, O.alternate, O), E & 128)) {
            y = void 0;
            var T = O.ref;
            if (T !== null) {
              var M = O.stateNode;
              switch (O.tag) {
                case 5:
                  y = M;
                  break;
                default:
                  y = M;
              }
              typeof T == "function" ? T(y) : (T.current = y);
            }
          }
          O = O.nextEffect;
        }
      } catch (A) {
        if (O === null) throw Error(P(330));
        nr(O, A), (O = O.nextEffect);
      }
    while (O !== null);
    (O = null), Cg(), (N = i);
  } else e.current = r;
  if (Jt) (Jt = !1), (mi = e), (vi = t);
  else
    for (O = n; O !== null; )
      (t = O.nextEffect),
        (O.nextEffect = null),
        O.flags & 8 && ((E = O), (E.sibling = null), (E.stateNode = null)),
        (O = t);
  if (
    ((n = e.pendingLanes),
    n === 0 && (gt = null),
    n === 1 ? (e === os ? gi++ : ((gi = 0), (os = e))) : (gi = 0),
    (r = r.stateNode),
    Sr && typeof Sr.onCommitFiberRoot == "function")
  )
    try {
      Sr.onCommitFiberRoot(bu, r, void 0, (r.current.flags & 64) == 64);
    } catch {}
  if ((Ze(e, Ce()), Go)) throw ((Go = !1), (e = rs), (rs = null), e);
  return (N & 8) != 0 || pt(), null;
}
function Vg() {
  for (; O !== null; ) {
    var e = O.alternate;
    Xo ||
      yi === null ||
      ((O.flags & 8) != 0
        ? $d(O, yi) && (Xo = !0)
        : O.tag === 13 && Ng(e, O) && $d(O, yi) && (Xo = !0));
    var t = O.flags;
    (t & 256) != 0 && Mg(e, O),
      (t & 512) == 0 ||
        Jt ||
        ((Jt = !0),
        ti(97, function () {
          return rr(), null;
        })),
      (O = O.nextEffect);
  }
}
function rr() {
  if (vi !== 90) {
    var e = 97 < vi ? 97 : vi;
    return (vi = 90), xr(e, Gg);
  }
  return !1;
}
function Ug(e, t) {
  ns.push(t, e),
    Jt ||
      ((Jt = !0),
      ti(97, function () {
        return rr(), null;
      }));
}
function Dp(e, t) {
  is.push(t, e),
    Jt ||
      ((Jt = !0),
      ti(97, function () {
        return rr(), null;
      }));
}
function Gg() {
  if (mi === null) return !1;
  var e = mi;
  if (((mi = null), (N & 48) != 0)) throw Error(P(331));
  var t = N;
  N |= 32;
  var r = is;
  is = [];
  for (var n = 0; n < r.length; n += 2) {
    var i = r[n],
      o = r[n + 1],
      a = i.destroy;
    if (((i.destroy = void 0), typeof a == "function"))
      try {
        a();
      } catch (u) {
        if (o === null) throw Error(P(330));
        nr(o, u);
      }
  }
  for (r = ns, ns = [], n = 0; n < r.length; n += 2) {
    (i = r[n]), (o = r[n + 1]);
    try {
      var l = i.create;
      i.destroy = l();
    } catch (u) {
      if (o === null) throw Error(P(330));
      nr(o, u);
    }
  }
  for (l = e.current.firstEffect; l !== null; )
    (e = l.nextEffect),
      (l.nextEffect = null),
      l.flags & 8 && ((l.sibling = null), (l.stateNode = null)),
      (l = e);
  return (N = t), pt(), !0;
}
function Wp(e, t, r) {
  (t = Uu(r, t)),
    (t = _p(e, t, 1)),
    qt(e, t),
    (t = We()),
    (e = Ko(e, 1)),
    e !== null && (fo(e, 1, t), Ze(e, t));
}
function nr(e, t) {
  if (e.tag === 3) Wp(e, e, t);
  else
    for (var r = e.return; r !== null; ) {
      if (r.tag === 3) {
        Wp(r, e, t);
        break;
      } else if (r.tag === 1) {
        var n = r.stateNode;
        if (
          typeof r.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (gt === null || !gt.has(n)))
        ) {
          e = Uu(t, e);
          var i = Cp(r, e, 1);
          if ((qt(r, i), (i = We()), (r = Ko(r, 1)), r !== null))
            fo(r, 1, i), Ze(r, i);
          else if (
            typeof n.componentDidCatch == "function" &&
            (gt === null || !gt.has(n))
          )
            try {
              n.componentDidCatch(t, e);
            } catch {}
          break;
        }
      }
      r = r.return;
    }
}
function Yg(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t),
    (t = We()),
    (e.pingedLanes |= e.suspendedLanes & r),
    ze === e &&
      (Te & r) === r &&
      (xe === 4 || (xe === 3 && (Te & 62914560) === Te && 500 > Ce() - es)
        ? cn(e, 0)
        : (Zu |= r)),
    Ze(e, t);
}
function Qg(e, t) {
  var r = e.stateNode;
  r !== null && r.delete(t),
    (t = 0),
    t === 0 &&
      ((t = e.mode),
      (t & 2) == 0
        ? (t = 1)
        : (t & 4) == 0
        ? (t = en() === 99 ? 1 : 2)
        : (Ot === 0 && (Ot = an),
          (t = Vr(62914560 & ~Ot)),
          t === 0 && (t = 4194304))),
    (r = We()),
    (e = Ko(e, t)),
    e !== null && (fo(e, t, r), Ze(e, r));
}
var Hp;
Hp = function (e, t, r) {
  var n = t.lanes;
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ae.current) at = !0;
    else if ((r & n) != 0) at = (e.flags & 16384) != 0;
    else {
      switch (((at = !1), t.tag)) {
        case 3:
          hp(t), Au();
          break;
        case 5:
          Xf(t);
          break;
        case 1:
          Ie(t.type) && Co(t);
          break;
        case 4:
          Pu(t, t.stateNode.containerInfo);
          break;
        case 10:
          n = t.memoizedProps.value;
          var i = t.type._context;
          le(Ro, i._currentValue), (i._currentValue = n);
          break;
        case 13:
          if (t.memoizedState !== null)
            return (r & t.child.childLanes) != 0
              ? mp(e, t, r)
              : (le(ue, ue.current & 1),
                (t = At(e, t, r)),
                t !== null ? t.sibling : null);
          le(ue, ue.current & 1);
          break;
        case 19:
          if (((n = (r & t.childLanes) != 0), (e.flags & 64) != 0)) {
            if (n) return Sp(e, t, r);
            t.flags |= 64;
          }
          if (
            ((i = t.memoizedState),
            i !== null &&
              ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            le(ue, ue.current),
            n)
          )
            break;
          return null;
        case 23:
        case 24:
          return (t.lanes = 0), ju(e, t, r);
      }
      return At(e, t, r);
    }
  else at = !1;
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      if (
        ((n = t.type),
        e !== null &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (e = t.pendingProps),
        (i = Jr(t, _e.current)),
        rn(t, r),
        (i = Bu(null, t, n, e, i, r)),
        (t.flags |= 1),
        typeof i == "object" &&
          i !== null &&
          typeof i.render == "function" &&
          i.$$typeof === void 0)
      ) {
        if (
          ((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), Ie(n))
        ) {
          var o = !0;
          Co(t);
        } else o = !1;
        (t.memoizedState =
          i.state !== null && i.state !== void 0 ? i.state : null),
          Tu(t);
        var a = n.getDerivedStateFromProps;
        typeof a == "function" && zo(t, n, a, e),
          (i.updater = Ao),
          (t.stateNode = i),
          (i._reactInternals = t),
          Ru(t, n, e, r),
          (t = Wu(null, t, n, !0, o, r));
      } else (t.tag = 0), Be(null, t, i, r), (t = t.child);
      return t;
    case 16:
      i = t.elementType;
      e: {
        switch (
          (e !== null &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          (e = t.pendingProps),
          (o = i._init),
          (i = o(i._payload)),
          (t.type = i),
          (o = t.tag = Kg(i)),
          (e = ot(i, e)),
          o)
        ) {
          case 0:
            t = Du(null, t, i, e, r);
            break e;
          case 1:
            t = pp(null, t, i, e, r);
            break e;
          case 11:
            t = sp(null, t, i, e, r);
            break e;
          case 14:
            t = cp(null, t, i, ot(i.type, e), n, r);
            break e;
        }
        throw Error(P(306, i, ""));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : ot(n, i)),
        Du(e, t, n, i, r)
      );
    case 1:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : ot(n, i)),
        pp(e, t, n, i, r)
      );
    case 3:
      if ((hp(t), (n = t.updateQueue), e === null || n === null))
        throw Error(P(282));
      if (
        ((n = t.pendingProps),
        (i = t.memoizedState),
        (i = i !== null ? i.element : null),
        jf(e, t),
        ri(t, n, null, r),
        (n = t.memoizedState.element),
        n === i)
      )
        Au(), (t = At(e, t, r));
      else {
        if (
          ((i = t.stateNode),
          (o = i.hydrate) &&
            ((Zt = Xr(t.stateNode.containerInfo.firstChild)),
            (zt = t),
            (o = mt = !0)),
          o)
        ) {
          if (((e = i.mutableSourceEagerHydrationData), e != null))
            for (i = 0; i < e.length; i += 2)
              (o = e[i]),
                (o._workInProgressVersionPrimary = e[i + 1]),
                on.push(o);
          for (r = Qf(t, null, n, r), t.child = r; r; )
            (r.flags = (r.flags & -3) | 1024), (r = r.sibling);
        } else Be(e, t, n, r), Au();
        t = t.child;
      }
      return t;
    case 5:
      return (
        Xf(t),
        e === null && zu(t),
        (n = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (a = i.children),
        mu(n, i) ? (a = null) : o !== null && mu(n, o) && (t.flags |= 16),
        fp(e, t),
        Be(e, t, a, r),
        t.child
      );
    case 6:
      return e === null && zu(t), null;
    case 13:
      return mp(e, t, r);
    case 4:
      return (
        Pu(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = Bo(t, null, n, r)) : Be(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : ot(n, i)),
        sp(e, t, n, i, r)
      );
    case 7:
      return Be(e, t, t.pendingProps, r), t.child;
    case 8:
      return Be(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return Be(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        (n = t.type._context),
          (i = t.pendingProps),
          (a = t.memoizedProps),
          (o = i.value);
        var l = t.type._context;
        if ((le(Ro, l._currentValue), (l._currentValue = o), a !== null))
          if (
            ((l = a.value),
            (o = Xe(l, o)
              ? 0
              : (typeof n._calculateChangedBits == "function"
                  ? n._calculateChangedBits(l, o)
                  : 1073741823) | 0),
            o === 0)
          ) {
            if (a.children === i.children && !Ae.current) {
              t = At(e, t, r);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var u = l.dependencies;
              if (u !== null) {
                a = l.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === n && (s.observedBits & o) != 0) {
                    l.tag === 1 &&
                      ((s = Kt(-1, r & -r)), (s.tag = 2), qt(l, s)),
                      (l.lanes |= r),
                      (s = l.alternate),
                      s !== null && (s.lanes |= r),
                      Lf(l.return, r),
                      (u.lanes |= r);
                    break;
                  }
                  s = s.next;
                }
              } else a = l.tag === 10 && l.type === t.type ? null : l.child;
              if (a !== null) a.return = l;
              else
                for (a = l; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((l = a.sibling), l !== null)) {
                    (l.return = a.return), (a = l);
                    break;
                  }
                  a = a.return;
                }
              l = a;
            }
        Be(e, t, i.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (o = t.pendingProps),
        (n = o.children),
        rn(t, r),
        (i = Ke(i, o.unstable_observedBits)),
        (n = n(i)),
        (t.flags |= 1),
        Be(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (i = t.type),
        (o = ot(i, t.pendingProps)),
        (o = ot(i.type, o)),
        cp(e, t, i, o, n, r)
      );
    case 15:
      return dp(e, t, t.type, t.pendingProps, n, r);
    case 17:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : ot(n, i)),
        e !== null &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (t.tag = 1),
        Ie(n) ? ((e = !0), Co(t)) : (e = !1),
        rn(t, r),
        Uf(t, n, i),
        Ru(t, n, i, r),
        Wu(null, t, n, !0, e, r)
      );
    case 19:
      return Sp(e, t, r);
    case 23:
      return ju(e, t, r);
    case 24:
      return ju(e, t, r);
  }
  throw Error(P(156, t.tag));
};
function Xg(e, t, r, n) {
  (this.tag = e),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.flags = 0),
    (this.lastEffect = this.firstEffect = this.nextEffect = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Je(e, t, r, n) {
  return new Xg(e, t, r, n);
}
function us(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Kg(e) {
  if (typeof e == "function") return us(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Zi)) return 11;
    if (e === eo) return 14;
  }
  return 2;
}
function ir(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = Je(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.nextEffect = null),
        (r.firstEffect = null),
        (r.lastEffect = null)),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function Zo(e, t, r, n, i, o) {
  var a = 2;
  if (((n = e), typeof e == "function")) us(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case Lt:
        return dn(r.children, i, o, t);
      case ud:
        (a = 8), (i |= 16);
        break;
      case yl:
        (a = 8), (i |= 1);
        break;
      case $n:
        return (
          (e = Je(12, r, t, i | 8)),
          (e.elementType = $n),
          (e.type = $n),
          (e.lanes = o),
          e
        );
      case zn:
        return (
          (e = Je(13, r, t, i)),
          (e.type = zn),
          (e.elementType = zn),
          (e.lanes = o),
          e
        );
      case Ji:
        return (e = Je(19, r, t, i)), (e.elementType = Ji), (e.lanes = o), e;
      case _l:
        return ss(r, i, o, t);
      case Cl:
        return (e = Je(24, r, t, i)), (e.elementType = Cl), (e.lanes = o), e;
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case bl:
              a = 10;
              break e;
            case Sl:
              a = 9;
              break e;
            case Zi:
              a = 11;
              break e;
            case eo:
              a = 14;
              break e;
            case xl:
              (a = 16), (n = null);
              break e;
            case wl:
              a = 22;
              break e;
          }
        throw Error(P(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Je(a, r, t, i)), (t.elementType = e), (t.type = n), (t.lanes = o), t
  );
}
function dn(e, t, r, n) {
  return (e = Je(7, e, n, t)), (e.lanes = r), e;
}
function ss(e, t, r, n) {
  return (e = Je(23, e, n, t)), (e.elementType = _l), (e.lanes = r), e;
}
function cs(e, t, r) {
  return (e = Je(6, e, null, t)), (e.lanes = r), e;
}
function ds(e, t, r) {
  return (
    (t = Je(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function qg(e, t, r) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.pendingContext = this.context = null),
    (this.hydrate = r),
    (this.callbackNode = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ql(0)),
    (this.expirationTimes = ql(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ql(0)),
    (this.mutableSourceEagerHydrationData = null);
}
function Zg(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: mr,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function Jo(e, t, r, n) {
  var i = t.current,
    o = We(),
    a = er(i);
  e: if (r) {
    r = r._reactInternals;
    t: {
      if (gr(r) !== r || r.tag !== 1) throw Error(P(170));
      var l = r;
      do {
        switch (l.tag) {
          case 3:
            l = l.stateNode.context;
            break t;
          case 1:
            if (Ie(l.type)) {
              l = l.stateNode.__reactInternalMemoizedMergedChildContext;
              break t;
            }
        }
        l = l.return;
      } while (l !== null);
      throw Error(P(171));
    }
    if (r.tag === 1) {
      var u = r.type;
      if (Ie(u)) {
        r = Pf(r, u, l);
        break e;
      }
    }
    r = l;
  } else r = Qt;
  return (
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = Kt(o, a)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    qt(i, t),
    tr(i, a, o),
    a
  );
}
function fs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Vp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function ps(e, t) {
  Vp(e, t), (e = e.alternate) && Vp(e, t);
}
function Jg() {
  return null;
}
function hs(e, t, r) {
  var n =
    (r != null &&
      r.hydrationOptions != null &&
      r.hydrationOptions.mutableSources) ||
    null;
  if (
    ((r = new qg(e, t, r != null && r.hydrate === !0)),
    (t = Je(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0)),
    (r.current = t),
    (t.stateNode = r),
    Tu(t),
    (e[Kr] = r.current),
    yf(e.nodeType === 8 ? e.parentNode : e),
    n)
  )
    for (e = 0; e < n.length; e++) {
      t = n[e];
      var i = t._getVersion;
      (i = i(t._source)),
        r.mutableSourceEagerHydrationData == null
          ? (r.mutableSourceEagerHydrationData = [t, i])
          : r.mutableSourceEagerHydrationData.push(t, i);
    }
  this._internalRoot = r;
}
hs.prototype.render = function (e) {
  Jo(e, this._internalRoot, null, null);
};
hs.prototype.unmount = function () {
  var e = this._internalRoot,
    t = e.containerInfo;
  Jo(null, e, null, function () {
    t[Kr] = null;
  });
};
function Si(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ey(e, t) {
  if (
    (t ||
      ((t = e ? (e.nodeType === 9 ? e.documentElement : e.firstChild) : null),
      (t = !(!t || t.nodeType !== 1 || !t.hasAttribute("data-reactroot")))),
    !t)
  )
    for (var r; (r = e.lastChild); ) e.removeChild(r);
  return new hs(e, 0, t ? { hydrate: !0 } : void 0);
}
function ea(e, t, r, n, i) {
  var o = r._reactRootContainer;
  if (o) {
    var a = o._internalRoot;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var s = fs(a);
        l.call(s);
      };
    }
    Jo(t, a, e, i);
  } else {
    if (
      ((o = r._reactRootContainer = ey(r, n)),
      (a = o._internalRoot),
      typeof i == "function")
    ) {
      var u = i;
      i = function () {
        var s = fs(a);
        u.call(s);
      };
    }
    Mp(function () {
      Jo(t, a, e, i);
    });
  }
  return fs(a);
}
zd = function (e) {
  if (e.tag === 13) {
    var t = We();
    tr(e, 4, t), ps(e, 4);
  }
};
Ul = function (e) {
  if (e.tag === 13) {
    var t = We();
    tr(e, 67108864, t), ps(e, 67108864);
  }
};
Ad = function (e) {
  if (e.tag === 13) {
    var t = We(),
      r = er(e);
    tr(e, r, t), ps(e, r);
  }
};
Id = function (e, t) {
  return t();
};
Nl = function (e, t, r) {
  switch (t) {
    case "input":
      if ((Pl(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var i = ko(n);
            if (!i) throw Error(P(90));
            dd(n), Pl(n, i);
          }
        }
      }
      break;
    case "textarea":
      vd(e, r);
      break;
    case "select":
      (t = r.value), t != null && Lr(e, !!r.multiple, t, !1);
  }
};
Ll = Bp;
Cd = function (e, t, r, n, i) {
  var o = N;
  N |= 4;
  try {
    return xr(98, e.bind(null, t, r, n, i));
  } finally {
    (N = o), N === 0 && (un(), pt());
  }
};
jl = function () {
  (N & 49) == 0 && (jg(), rr());
};
Ed = function (e, t) {
  var r = N;
  N |= 2;
  try {
    return e(t);
  } finally {
    (N = r), N === 0 && (un(), pt());
  }
};
function Up(e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Si(t)) throw Error(P(200));
  return Zg(e, t, null, r);
}
var ty = { Events: [ei, qr, ko, kd, _d, rr, { current: !1 }] },
  xi = {
    findFiberByHostInstance: yr,
    bundleType: 0,
    version: "17.0.2",
    rendererPackageName: "react-dom",
  },
  ry = {
    bundleType: xi.bundleType,
    version: xi.version,
    rendererPackageName: xi.rendererPackageName,
    rendererConfig: xi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: hr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Pd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: xi.findFiberByHostInstance || Jg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
  var ta = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ta.isDisabled && ta.supportsFiber)
    try {
      (bu = ta.inject(ry)), (Sr = ta);
    } catch {}
}
Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ty;
Qe.createPortal = Up;
Qe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(P(188))
      : Error(P(268, Object.keys(e)));
  return (e = Pd(t)), (e = e === null ? null : e.stateNode), e;
};
Qe.flushSync = function (e, t) {
  var r = N;
  if ((r & 48) != 0) return e(t);
  N |= 1;
  try {
    if (e) return xr(99, e.bind(null, t));
  } finally {
    (N = r), pt();
  }
};
Qe.hydrate = function (e, t, r) {
  if (!Si(t)) throw Error(P(200));
  return ea(null, e, t, !0, r);
};
Qe.render = function (e, t, r) {
  if (!Si(t)) throw Error(P(200));
  return ea(null, e, t, !1, r);
};
Qe.unmountComponentAtNode = function (e) {
  if (!Si(e)) throw Error(P(40));
  return e._reactRootContainer
    ? (Mp(function () {
        ea(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Kr] = null);
        });
      }),
      !0)
    : !1;
};
Qe.unstable_batchedUpdates = Bp;
Qe.unstable_createPortal = function (e, t) {
  return Up(
    e,
    t,
    2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  );
};
Qe.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!Si(r)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return ea(e, t, r, !1, n);
};
Qe.version = "17.0.2";
function Gp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gp);
    } catch (e) {
      console.error(e);
    }
}
Gp(), (td.exports = Qe);
var aE = td.exports;
function ny(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function iy(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var Yp = (function () {
    function e(r) {
      var n = this;
      (this._insertTag = function (i) {
        var o;
        n.tags.length === 0
          ? n.insertionPoint
            ? (o = n.insertionPoint.nextSibling)
            : n.prepend
            ? (o = n.container.firstChild)
            : (o = n.before)
          : (o = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(i, o),
          n.tags.push(i);
      }),
        (this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (n) {
        n.forEach(this._insertTag);
      }),
      (t.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(iy(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = ny(i);
          try {
            o.insertRule(n, o.cssRules.length);
          } catch {}
        } else i.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (n) {
          return n.parentNode && n.parentNode.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Re = "-ms-",
  ra = "-moz-",
  H = "-webkit-",
  Qp = "comm",
  ms = "rule",
  vs = "decl",
  oy = "@import",
  Xp = "@keyframes",
  ay = Math.abs,
  na = String.fromCharCode,
  ly = Object.assign;
function uy(e, t) {
  return (
    (((((((t << 2) ^ Me(e, 0)) << 2) ^ Me(e, 1)) << 2) ^ Me(e, 2)) << 2) ^
    Me(e, 3)
  );
}
function Kp(e) {
  return e.trim();
}
function sy(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function U(e, t, r) {
  return e.replace(t, r);
}
function gs(e, t) {
  return e.indexOf(t);
}
function Me(e, t) {
  return e.charCodeAt(t) | 0;
}
function wi(e, t, r) {
  return e.slice(t, r);
}
function yt(e) {
  return e.length;
}
function ys(e) {
  return e.length;
}
function ia(e, t) {
  return t.push(e), e;
}
function cy(e, t) {
  return e.map(t).join("");
}
var oa = 1,
  fn = 1,
  qp = 0,
  Fe = 0,
  de = 0,
  pn = "";
function aa(e, t, r, n, i, o, a) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: i,
    children: o,
    line: oa,
    column: fn,
    length: a,
    return: "",
  };
}
function ki(e, t) {
  return ly(aa("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function dy() {
  return de;
}
function fy() {
  return (
    (de = Fe > 0 ? Me(pn, --Fe) : 0), fn--, de === 10 && ((fn = 1), oa--), de
  );
}
function He() {
  return (
    (de = Fe < qp ? Me(pn, Fe++) : 0), fn++, de === 10 && ((fn = 1), oa++), de
  );
}
function bt() {
  return Me(pn, Fe);
}
function la() {
  return Fe;
}
function _i(e, t) {
  return wi(pn, e, t);
}
function Ci(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Zp(e) {
  return (oa = fn = 1), (qp = yt((pn = e))), (Fe = 0), [];
}
function Jp(e) {
  return (pn = ""), e;
}
function ua(e) {
  return Kp(_i(Fe - 1, bs(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function py(e) {
  for (; (de = bt()) && de < 33; ) He();
  return Ci(e) > 2 || Ci(de) > 3 ? "" : " ";
}
function hy(e, t) {
  for (
    ;
    --t &&
    He() &&
    !(de < 48 || de > 102 || (de > 57 && de < 65) || (de > 70 && de < 97));

  );
  return _i(e, la() + (t < 6 && bt() == 32 && He() == 32));
}
function bs(e) {
  for (; He(); )
    switch (de) {
      case e:
        return Fe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && bs(de);
        break;
      case 40:
        e === 41 && bs(e);
        break;
      case 92:
        He();
        break;
    }
  return Fe;
}
function my(e, t) {
  for (; He() && e + de !== 47 + 10; )
    if (e + de === 42 + 42 && bt() === 47) break;
  return "/*" + _i(t, Fe - 1) + "*" + na(e === 47 ? e : He());
}
function vy(e) {
  for (; !Ci(bt()); ) He();
  return _i(e, Fe);
}
function gy(e) {
  return Jp(sa("", null, null, null, [""], (e = Zp(e)), 0, [0], e));
}
function sa(e, t, r, n, i, o, a, l, u) {
  for (
    var s = 0,
      m = 0,
      b = a,
      v = 0,
      w = 0,
      C = 0,
      k = 1,
      p = 1,
      d = 1,
      f = 0,
      y = "",
      x = i,
      $ = o,
      E = n,
      T = y;
    p;

  )
    switch (((C = f), (f = He()))) {
      case 40:
        if (C != 108 && T.charCodeAt(b - 1) == 58) {
          gs((T += U(ua(f), "&", "&\f")), "&\f") != -1 && (d = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += ua(f);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += py(C);
        break;
      case 92:
        T += hy(la() - 1, 7);
        continue;
      case 47:
        switch (bt()) {
          case 42:
          case 47:
            ia(yy(my(He(), la()), t, r), u);
            break;
          default:
            T += "/";
        }
        break;
      case 123 * k:
        l[s++] = yt(T) * d;
      case 125 * k:
      case 59:
      case 0:
        switch (f) {
          case 0:
          case 125:
            p = 0;
          case 59 + m:
            w > 0 &&
              yt(T) - b &&
              ia(
                w > 32
                  ? t0(T + ";", n, r, b - 1)
                  : t0(U(T, " ", "") + ";", n, r, b - 2),
                u
              );
            break;
          case 59:
            T += ";";
          default:
            if (
              (ia((E = e0(T, t, r, s, m, i, l, y, (x = []), ($ = []), b)), o),
              f === 123)
            )
              if (m === 0) sa(T, t, E, E, x, o, b, l, $);
              else
                switch (v) {
                  case 100:
                  case 109:
                  case 115:
                    sa(
                      e,
                      E,
                      E,
                      n && ia(e0(e, E, E, 0, 0, i, l, y, i, (x = []), b), $),
                      i,
                      $,
                      b,
                      l,
                      n ? x : $
                    );
                    break;
                  default:
                    sa(T, E, E, E, [""], $, 0, l, $);
                }
        }
        (s = m = w = 0), (k = d = 1), (y = T = ""), (b = a);
        break;
      case 58:
        (b = 1 + yt(T)), (w = C);
      default:
        if (k < 1) {
          if (f == 123) --k;
          else if (f == 125 && k++ == 0 && fy() == 125) continue;
        }
        switch (((T += na(f)), f * k)) {
          case 38:
            d = m > 0 ? 1 : ((T += "\f"), -1);
            break;
          case 44:
            (l[s++] = (yt(T) - 1) * d), (d = 1);
            break;
          case 64:
            bt() === 45 && (T += ua(He())),
              (v = bt()),
              (m = b = yt((y = T += vy(la())))),
              f++;
            break;
          case 45:
            C === 45 && yt(T) == 2 && (k = 0);
        }
    }
  return o;
}
function e0(e, t, r, n, i, o, a, l, u, s, m) {
  for (
    var b = i - 1, v = i === 0 ? o : [""], w = ys(v), C = 0, k = 0, p = 0;
    C < n;
    ++C
  )
    for (var d = 0, f = wi(e, b + 1, (b = ay((k = a[C])))), y = e; d < w; ++d)
      (y = Kp(k > 0 ? v[d] + " " + f : U(f, /&\f/g, v[d]))) && (u[p++] = y);
  return aa(e, t, r, i === 0 ? ms : l, u, s, m);
}
function yy(e, t, r) {
  return aa(e, t, r, Qp, na(dy()), wi(e, 2, -2), 0);
}
function t0(e, t, r, n) {
  return aa(e, t, r, vs, wi(e, 0, n), wi(e, n + 1, -1), n);
}
function r0(e, t) {
  switch (uy(e, t)) {
    case 5103:
      return H + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return H + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return H + e + ra + e + Re + e + e;
    case 6828:
    case 4268:
      return H + e + Re + e + e;
    case 6165:
      return H + e + Re + "flex-" + e + e;
    case 5187:
      return (
        H + e + U(e, /(\w+).+(:[^]+)/, H + "box-$1$2" + Re + "flex-$1$2") + e
      );
    case 5443:
      return H + e + Re + "flex-item-" + U(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        H +
        e +
        Re +
        "flex-line-pack" +
        U(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return H + e + Re + U(e, "shrink", "negative") + e;
    case 5292:
      return H + e + Re + U(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        H +
        "box-" +
        U(e, "-grow", "") +
        H +
        e +
        Re +
        U(e, "grow", "positive") +
        e
      );
    case 4554:
      return H + U(e, /([^-])(transform)/g, "$1" + H + "$2") + e;
    case 6187:
      return (
        U(U(U(e, /(zoom-|grab)/, H + "$1"), /(image-set)/, H + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return U(e, /(image-set\([^]*)/, H + "$1$`$1");
    case 4968:
      return (
        U(
          U(e, /(.+:)(flex-)?(.*)/, H + "box-pack:$3" + Re + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        H +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return U(e, /(.+)-inline(.+)/, H + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (yt(e) - 1 - t > 6)
        switch (Me(e, t + 1)) {
          case 109:
            if (Me(e, t + 4) !== 45) break;
          case 102:
            return (
              U(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  H +
                  "$2-$3$1" +
                  ra +
                  (Me(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~gs(e, "stretch")
              ? r0(U(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (Me(e, t + 1) !== 115) break;
    case 6444:
      switch (Me(e, yt(e) - 3 - (~gs(e, "!important") && 10))) {
        case 107:
          return U(e, ":", ":" + H) + e;
        case 101:
          return (
            U(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                H +
                (Me(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                H +
                "$2$3$1" +
                Re +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (Me(e, t + 11)) {
        case 114:
          return H + e + Re + U(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return H + e + Re + U(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return H + e + Re + U(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return H + e + Re + e + e;
  }
  return e;
}
function hn(e, t) {
  for (var r = "", n = ys(e), i = 0; i < n; i++) r += t(e[i], i, e, t) || "";
  return r;
}
function by(e, t, r, n) {
  switch (e.type) {
    case oy:
    case vs:
      return (e.return = e.return || e.value);
    case Qp:
      return "";
    case Xp:
      return (e.return = e.value + "{" + hn(e.children, n) + "}");
    case ms:
      e.value = e.props.join(",");
  }
  return yt((r = hn(e.children, n)))
    ? (e.return = e.value + "{" + r + "}")
    : "";
}
function Sy(e) {
  var t = ys(e);
  return function (r, n, i, o) {
    for (var a = "", l = 0; l < t; l++) a += e[l](r, n, i, o) || "";
    return a;
  };
}
function xy(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function wy(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case vs:
        e.return = r0(e.value, e.length);
        break;
      case Xp:
        return hn([ki(e, { value: U(e.value, "@", "@" + H) })], n);
      case ms:
        if (e.length)
          return cy(e.props, function (i) {
            switch (sy(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return hn(
                  [ki(e, { props: [U(i, /:(read-\w+)/, ":" + ra + "$1")] })],
                  n
                );
              case "::placeholder":
                return hn(
                  [
                    ki(e, {
                      props: [U(i, /:(plac\w+)/, ":" + H + "input-$1")],
                    }),
                    ki(e, { props: [U(i, /:(plac\w+)/, ":" + ra + "$1")] }),
                    ki(e, { props: [U(i, /:(plac\w+)/, Re + "input-$1")] }),
                  ],
                  n
                );
            }
            return "";
          });
    }
}
var n0 = function (t) {
  var r = new WeakMap();
  return function (n) {
    if (r.has(n)) return r.get(n);
    var i = t(n);
    return r.set(n, i), i;
  };
};
function i0(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var ky = function (t, r, n) {
    for (
      var i = 0, o = 0;
      (i = o), (o = bt()), i === 38 && o === 12 && (r[n] = 1), !Ci(o);

    )
      He();
    return _i(t, Fe);
  },
  _y = function (t, r) {
    var n = -1,
      i = 44;
    do
      switch (Ci(i)) {
        case 0:
          i === 38 && bt() === 12 && (r[n] = 1), (t[n] += ky(Fe - 1, r, n));
          break;
        case 2:
          t[n] += ua(i);
          break;
        case 4:
          if (i === 44) {
            (t[++n] = bt() === 58 ? "&\f" : ""), (r[n] = t[n].length);
            break;
          }
        default:
          t[n] += na(i);
      }
    while ((i = He()));
    return t;
  },
  Cy = function (t, r) {
    return Jp(_y(Zp(t), r));
  },
  o0 = new WeakMap(),
  Ey = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value,
          n = t.parent,
          i = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (
        !(t.props.length === 1 && r.charCodeAt(0) !== 58 && !o0.get(n)) &&
        !i
      ) {
        o0.set(t, !0);
        for (
          var o = [], a = Cy(r, o), l = n.props, u = 0, s = 0;
          u < a.length;
          u++
        )
          for (var m = 0; m < l.length; m++, s++)
            t.props[s] = o[u] ? a[u].replace(/&\f/g, l[m]) : l[m] + " " + a[u];
      }
    }
  },
  Ty = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 &&
        r.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  },
  Ry = [wy],
  Py = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (k) {
        var p = k.getAttribute("data-emotion");
        p.indexOf(" ") !== -1 &&
          (document.head.appendChild(k), k.setAttribute("data-s", ""));
      });
    }
    var i = t.stylisPlugins || Ry,
      o = {},
      a,
      l = [];
    (a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (k) {
          for (
            var p = k.getAttribute("data-emotion").split(" "), d = 1;
            d < p.length;
            d++
          )
            o[p[d]] = !0;
          l.push(k);
        }
      );
    var u,
      s = [Ey, Ty];
    {
      var m,
        b = [
          by,
          xy(function (k) {
            m.insert(k);
          }),
        ],
        v = Sy(s.concat(i, b)),
        w = function (p) {
          return hn(gy(p), v);
        };
      u = function (p, d, f, y) {
        (m = f),
          w(p ? p + "{" + d.styles + "}" : d.styles),
          y && (C.inserted[d.name] = !0);
      };
    }
    var C = {
      key: r,
      sheet: new Yp({
        key: r,
        container: a,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: o,
      registered: {},
      insert: u,
    };
    return C.sheet.hydrate(l), C;
  };
function ca() {
  return (
    (ca =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    ca.apply(this, arguments)
  );
}
var a0 = { exports: {} },
  G = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ye = typeof Symbol == "function" && Symbol.for,
  Ss = ye ? Symbol.for("react.element") : 60103,
  xs = ye ? Symbol.for("react.portal") : 60106,
  da = ye ? Symbol.for("react.fragment") : 60107,
  fa = ye ? Symbol.for("react.strict_mode") : 60108,
  pa = ye ? Symbol.for("react.profiler") : 60114,
  ha = ye ? Symbol.for("react.provider") : 60109,
  ma = ye ? Symbol.for("react.context") : 60110,
  ws = ye ? Symbol.for("react.async_mode") : 60111,
  va = ye ? Symbol.for("react.concurrent_mode") : 60111,
  ga = ye ? Symbol.for("react.forward_ref") : 60112,
  ya = ye ? Symbol.for("react.suspense") : 60113,
  $y = ye ? Symbol.for("react.suspense_list") : 60120,
  ba = ye ? Symbol.for("react.memo") : 60115,
  Sa = ye ? Symbol.for("react.lazy") : 60116,
  zy = ye ? Symbol.for("react.block") : 60121,
  Ay = ye ? Symbol.for("react.fundamental") : 60117,
  Iy = ye ? Symbol.for("react.responder") : 60118,
  Oy = ye ? Symbol.for("react.scope") : 60119;
function Ve(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ss:
        switch (((e = e.type), e)) {
          case ws:
          case va:
          case da:
          case pa:
          case fa:
          case ya:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case ma:
              case ga:
              case Sa:
              case ba:
              case ha:
                return e;
              default:
                return t;
            }
        }
      case xs:
        return t;
    }
  }
}
function l0(e) {
  return Ve(e) === va;
}
G.AsyncMode = ws;
G.ConcurrentMode = va;
G.ContextConsumer = ma;
G.ContextProvider = ha;
G.Element = Ss;
G.ForwardRef = ga;
G.Fragment = da;
G.Lazy = Sa;
G.Memo = ba;
G.Portal = xs;
G.Profiler = pa;
G.StrictMode = fa;
G.Suspense = ya;
G.isAsyncMode = function (e) {
  return l0(e) || Ve(e) === ws;
};
G.isConcurrentMode = l0;
G.isContextConsumer = function (e) {
  return Ve(e) === ma;
};
G.isContextProvider = function (e) {
  return Ve(e) === ha;
};
G.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ss;
};
G.isForwardRef = function (e) {
  return Ve(e) === ga;
};
G.isFragment = function (e) {
  return Ve(e) === da;
};
G.isLazy = function (e) {
  return Ve(e) === Sa;
};
G.isMemo = function (e) {
  return Ve(e) === ba;
};
G.isPortal = function (e) {
  return Ve(e) === xs;
};
G.isProfiler = function (e) {
  return Ve(e) === pa;
};
G.isStrictMode = function (e) {
  return Ve(e) === fa;
};
G.isSuspense = function (e) {
  return Ve(e) === ya;
};
G.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === da ||
    e === va ||
    e === pa ||
    e === fa ||
    e === ya ||
    e === $y ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Sa ||
        e.$$typeof === ba ||
        e.$$typeof === ha ||
        e.$$typeof === ma ||
        e.$$typeof === ga ||
        e.$$typeof === Ay ||
        e.$$typeof === Iy ||
        e.$$typeof === Oy ||
        e.$$typeof === zy))
  );
};
G.typeOf = Ve;
a0.exports = G;
var u0 = a0.exports,
  By = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  My = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  s0 = {};
s0[u0.ForwardRef] = By;
s0[u0.Memo] = My;
var Fy = !0;
function Ny(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (i) {
      e[i] !== void 0 ? t.push(e[i] + ";") : (n += i + " ");
    }),
    n
  );
}
var c0 = function (t, r, n) {
  var i = t.key + "-" + r.name;
  if (
    ((n === !1 || Fy === !1) &&
      t.registered[i] === void 0 &&
      (t.registered[i] = r.styles),
    t.inserted[r.name] === void 0)
  ) {
    var o = r;
    do t.insert(r === o ? "." + i : "", o, t.sheet, !0), (o = o.next);
    while (o !== void 0);
  }
};
function Ly(e) {
  for (var t = 0, r, n = 0, i = e.length; i >= 4; ++n, i -= 4)
    (r =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(n) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var jy = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Dy = /[A-Z]|^ms/g,
  Wy = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  d0 = function (t) {
    return t.charCodeAt(1) === 45;
  },
  f0 = function (t) {
    return t != null && typeof t != "boolean";
  },
  ks = i0(function (e) {
    return d0(e) ? e : e.replace(Dy, "-$&").toLowerCase();
  }),
  p0 = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(Wy, function (n, i, o) {
            return (St = { name: i, styles: o, next: St }), i;
          });
    }
    return jy[t] !== 1 && !d0(t) && typeof r == "number" && r !== 0
      ? r + "px"
      : r;
  };
function Ei(e, t, r) {
  if (r == null) return "";
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return (St = { name: r.name, styles: r.styles, next: St }), r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            (St = { name: n.name, styles: n.styles, next: St }), (n = n.next);
        var i = r.styles + ";";
        return i;
      }
      return Hy(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var o = St,
          a = r(e);
        return (St = o), Ei(e, t, a);
      }
      break;
    }
  }
  if (t == null) return r;
  var l = t[r];
  return l !== void 0 ? l : r;
}
function Hy(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var i = 0; i < r.length; i++) n += Ei(e, t, r[i]) + ";";
  else
    for (var o in r) {
      var a = r[o];
      if (typeof a != "object")
        t != null && t[a] !== void 0
          ? (n += o + "{" + t[a] + "}")
          : f0(a) && (n += ks(o) + ":" + p0(o, a) + ";");
      else if (
        Array.isArray(a) &&
        typeof a[0] == "string" &&
        (t == null || t[a[0]] === void 0)
      )
        for (var l = 0; l < a.length; l++)
          f0(a[l]) && (n += ks(o) + ":" + p0(o, a[l]) + ";");
      else {
        var u = Ei(e, t, a);
        switch (o) {
          case "animation":
          case "animationName": {
            n += ks(o) + ":" + u + ";";
            break;
          }
          default:
            n += o + "{" + u + "}";
        }
      }
    }
  return n;
}
var h0 = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  St,
  _s = function (t, r, n) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var i = !0,
      o = "";
    St = void 0;
    var a = t[0];
    a == null || a.raw === void 0
      ? ((i = !1), (o += Ei(n, r, a)))
      : (o += a[0]);
    for (var l = 1; l < t.length; l++) (o += Ei(n, r, t[l])), i && (o += a[l]);
    h0.lastIndex = 0;
    for (var u = "", s; (s = h0.exec(o)) !== null; ) u += "-" + s[1];
    var m = Ly(o) + u;
    return { name: m, styles: o, next: St };
  },
  m0 = R.exports.createContext(
    typeof HTMLElement != "undefined" ? Py({ key: "css" }) : null
  );
m0.Provider;
var v0 = function (t) {
    return R.exports.forwardRef(function (r, n) {
      var i = R.exports.useContext(m0);
      return t(r, i, n);
    });
  },
  Ti = R.exports.createContext({}),
  Vy = function (t, r) {
    if (typeof r == "function") {
      var n = r(t);
      return n;
    }
    return ca({}, t, r);
  },
  Uy = n0(function (e) {
    return n0(function (t) {
      return Vy(e, t);
    });
  }),
  Gy = function (t) {
    var r = R.exports.useContext(Ti);
    return (
      t.theme !== r && (r = Uy(r)(t.theme)),
      R.exports.createElement(Ti.Provider, { value: r }, t.children)
    );
  },
  Cs = v0(function (e, t) {
    var r = e.styles,
      n = _s([r], void 0, R.exports.useContext(Ti)),
      i = R.exports.useRef();
    return (
      R.exports.useLayoutEffect(
        function () {
          var o = t.key + "-global",
            a = new Yp({
              key: o,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            l = !1,
            u = document.querySelector(
              'style[data-emotion="' + o + " " + n.name + '"]'
            );
          return (
            t.sheet.tags.length && (a.before = t.sheet.tags[0]),
            u !== null &&
              ((l = !0), u.setAttribute("data-emotion", o), a.hydrate([u])),
            (i.current = [a, l]),
            function () {
              a.flush();
            }
          );
        },
        [t]
      ),
      R.exports.useLayoutEffect(
        function () {
          var o = i.current,
            a = o[0],
            l = o[1];
          if (l) {
            o[1] = !1;
            return;
          }
          if ((n.next !== void 0 && c0(t, n.next, !0), a.tags.length)) {
            var u = a.tags[a.tags.length - 1].nextElementSibling;
            (a.before = u), a.flush();
          }
          t.insert("", n, a, !1);
        },
        [t, n.name]
      ),
      null
    );
  });
function Yy() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return _s(t);
}
var g0 = function () {
    var t = Yy.apply(void 0, arguments),
      r = "animation-" + t.name;
    return {
      name: r,
      styles: "@keyframes " + r + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  Qy = function () {
    return R.exports.createElement(Cs, {
      styles: `
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        font-feature-settings: 'kern';
      }

      *,
      *::before,
      *::after {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
      }

      main {
        display: block;
      }

      hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      pre,
      code,
      kbd,
      samp {
        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      b,
      strong {
        font-weight: bold;
      }

      small {
        font-size: 80%;
      }

      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      img {
        border-style: none;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      button,
      input {
        overflow: visible;
      }

      button,
      select {
        text-transform: none;
      }

      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      progress {
        vertical-align: baseline;
      }

      textarea {
        overflow: auto;
      }

      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box;
        padding: 0;
      }

      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      input[type="number"] {
        -moz-appearance: textfield;
      }

      [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      details {
        display: block;
      }

      summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      body,
      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hr,
      figure,
      p,
      pre {
        margin: 0;
      }

      button {
        background: transparent;
        padding: 0;
      }

      fieldset {
        margin: 0;
        padding: 0;
      }

      ol,
      ul {
        margin: 0;
        padding: 0;
      }

      textarea {
        resize: vertical;
      }

      button,
      [role="button"] {
        cursor: pointer;
      }

      button::-moz-focus-inner {
        border: 0 !important;
      }

      table {
        border-collapse: collapse;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: inherit;
        font-weight: inherit;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      img,
      svg,
      video,
      canvas,
      audio,
      iframe,
      embed,
      object {
        display: block;
      }

      img,
      video {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible] :focus:not([data-focus-visible-added]) {
        outline: none;
        box-shadow: none;
      }

      select::-ms-expand {
        display: none;
      }
    `,
    });
  },
  Xy = Qy,
  Es = { exports: {} };
(function (e, t) {
  var r = 200,
    n = "__lodash_hash_undefined__",
    i = 800,
    o = 16,
    a = 9007199254740991,
    l = "[object Arguments]",
    u = "[object Array]",
    s = "[object AsyncFunction]",
    m = "[object Boolean]",
    b = "[object Date]",
    v = "[object Error]",
    w = "[object Function]",
    C = "[object GeneratorFunction]",
    k = "[object Map]",
    p = "[object Number]",
    d = "[object Null]",
    f = "[object Object]",
    y = "[object Proxy]",
    x = "[object RegExp]",
    $ = "[object Set]",
    E = "[object String]",
    T = "[object Undefined]",
    M = "[object WeakMap]",
    A = "[object ArrayBuffer]",
    D = "[object DataView]",
    Pe = "[object Float32Array]",
    ee = "[object Float64Array]",
    ae = "[object Int8Array]",
    Nt = "[object Int16Array]",
    _t = "[object Int32Array]",
    sr = "[object Uint8Array]",
    xn = "[object Uint8ClampedArray]",
    wn = "[object Uint16Array]",
    kn = "[object Uint32Array]",
    Ka = /[\\^$.*+?()[\]{}|]/g,
    z = /^\[object .+?Constructor\]$/,
    F = /^(?:0|[1-9]\d*)$/,
    B = {};
  (B[Pe] = B[ee] = B[ae] = B[Nt] = B[_t] = B[sr] = B[xn] = B[wn] = B[kn] = !0),
    (B[l] =
      B[u] =
      B[A] =
      B[m] =
      B[D] =
      B[b] =
      B[v] =
      B[w] =
      B[k] =
      B[p] =
      B[f] =
      B[x] =
      B[$] =
      B[E] =
      B[M] =
        !1);
  var te = typeof Qi == "object" && Qi && Qi.Object === Object && Qi,
    pe = typeof self == "object" && self && self.Object === Object && self,
    Le = te || pe || Function("return this")(),
    dt = t && !t.nodeType && t,
    nt = dt && !0 && e && !e.nodeType && e,
    Ct = nt && nt.exports === dt,
    qa = Ct && te.process,
    gc = (function () {
      try {
        var c = nt && nt.require && nt.require("util").types;
        return c || (qa && qa.binding && qa.binding("util"));
      } catch {}
    })(),
    yc = gc && gc.isTypedArray;
  function Dh(c, h, S) {
    switch (S.length) {
      case 0:
        return c.call(h);
      case 1:
        return c.call(h, S[0]);
      case 2:
        return c.call(h, S[0], S[1]);
      case 3:
        return c.call(h, S[0], S[1], S[2]);
    }
    return c.apply(h, S);
  }
  function Wh(c, h) {
    for (var S = -1, I = Array(c); ++S < c; ) I[S] = h(S);
    return I;
  }
  function Hh(c) {
    return function (h) {
      return c(h);
    };
  }
  function Vh(c, h) {
    return c == null ? void 0 : c[h];
  }
  function Uh(c, h) {
    return function (S) {
      return c(h(S));
    };
  }
  var Gh = Array.prototype,
    Yh = Function.prototype,
    ji = Object.prototype,
    Za = Le["__core-js_shared__"],
    Di = Yh.toString,
    Et = ji.hasOwnProperty,
    bc = (function () {
      var c = /[^.]+$/.exec((Za && Za.keys && Za.keys.IE_PROTO) || "");
      return c ? "Symbol(src)_1." + c : "";
    })(),
    Sc = ji.toString,
    Qh = Di.call(Object),
    Xh = RegExp(
      "^" +
        Di.call(Et)
          .replace(Ka, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    Wi = Ct ? Le.Buffer : void 0,
    xc = Le.Symbol,
    wc = Le.Uint8Array,
    kc = Wi ? Wi.allocUnsafe : void 0,
    _c = Uh(Object.getPrototypeOf, Object),
    Cc = Object.create,
    Kh = ji.propertyIsEnumerable,
    qh = Gh.splice,
    cr = xc ? xc.toStringTag : void 0,
    Hi = (function () {
      try {
        var c = tl(Object, "defineProperty");
        return c({}, "", {}), c;
      } catch {}
    })(),
    Zh = Wi ? Wi.isBuffer : void 0,
    Ec = Math.max,
    Jh = Date.now,
    Tc = tl(Le, "Map"),
    _n = tl(Object, "create"),
    em = (function () {
      function c() {}
      return function (h) {
        if (!fr(h)) return {};
        if (Cc) return Cc(h);
        c.prototype = h;
        var S = new c();
        return (c.prototype = void 0), S;
      };
    })();
  function dr(c) {
    var h = -1,
      S = c == null ? 0 : c.length;
    for (this.clear(); ++h < S; ) {
      var I = c[h];
      this.set(I[0], I[1]);
    }
  }
  function tm() {
    (this.__data__ = _n ? _n(null) : {}), (this.size = 0);
  }
  function rm(c) {
    var h = this.has(c) && delete this.__data__[c];
    return (this.size -= h ? 1 : 0), h;
  }
  function nm(c) {
    var h = this.__data__;
    if (_n) {
      var S = h[c];
      return S === n ? void 0 : S;
    }
    return Et.call(h, c) ? h[c] : void 0;
  }
  function im(c) {
    var h = this.__data__;
    return _n ? h[c] !== void 0 : Et.call(h, c);
  }
  function om(c, h) {
    var S = this.__data__;
    return (
      (this.size += this.has(c) ? 0 : 1),
      (S[c] = _n && h === void 0 ? n : h),
      this
    );
  }
  (dr.prototype.clear = tm),
    (dr.prototype.delete = rm),
    (dr.prototype.get = nm),
    (dr.prototype.has = im),
    (dr.prototype.set = om);
  function Tt(c) {
    var h = -1,
      S = c == null ? 0 : c.length;
    for (this.clear(); ++h < S; ) {
      var I = c[h];
      this.set(I[0], I[1]);
    }
  }
  function am() {
    (this.__data__ = []), (this.size = 0);
  }
  function lm(c) {
    var h = this.__data__,
      S = Vi(h, c);
    if (S < 0) return !1;
    var I = h.length - 1;
    return S == I ? h.pop() : qh.call(h, S, 1), --this.size, !0;
  }
  function um(c) {
    var h = this.__data__,
      S = Vi(h, c);
    return S < 0 ? void 0 : h[S][1];
  }
  function sm(c) {
    return Vi(this.__data__, c) > -1;
  }
  function cm(c, h) {
    var S = this.__data__,
      I = Vi(S, c);
    return I < 0 ? (++this.size, S.push([c, h])) : (S[I][1] = h), this;
  }
  (Tt.prototype.clear = am),
    (Tt.prototype.delete = lm),
    (Tt.prototype.get = um),
    (Tt.prototype.has = sm),
    (Tt.prototype.set = cm);
  function Ir(c) {
    var h = -1,
      S = c == null ? 0 : c.length;
    for (this.clear(); ++h < S; ) {
      var I = c[h];
      this.set(I[0], I[1]);
    }
  }
  function dm() {
    (this.size = 0),
      (this.__data__ = {
        hash: new dr(),
        map: new (Tc || Tt)(),
        string: new dr(),
      });
  }
  function fm(c) {
    var h = Gi(this, c).delete(c);
    return (this.size -= h ? 1 : 0), h;
  }
  function pm(c) {
    return Gi(this, c).get(c);
  }
  function hm(c) {
    return Gi(this, c).has(c);
  }
  function mm(c, h) {
    var S = Gi(this, c),
      I = S.size;
    return S.set(c, h), (this.size += S.size == I ? 0 : 1), this;
  }
  (Ir.prototype.clear = dm),
    (Ir.prototype.delete = fm),
    (Ir.prototype.get = pm),
    (Ir.prototype.has = hm),
    (Ir.prototype.set = mm);
  function Or(c) {
    var h = (this.__data__ = new Tt(c));
    this.size = h.size;
  }
  function vm() {
    (this.__data__ = new Tt()), (this.size = 0);
  }
  function gm(c) {
    var h = this.__data__,
      S = h.delete(c);
    return (this.size = h.size), S;
  }
  function ym(c) {
    return this.__data__.get(c);
  }
  function bm(c) {
    return this.__data__.has(c);
  }
  function Sm(c, h) {
    var S = this.__data__;
    if (S instanceof Tt) {
      var I = S.__data__;
      if (!Tc || I.length < r - 1)
        return I.push([c, h]), (this.size = ++S.size), this;
      S = this.__data__ = new Ir(I);
    }
    return S.set(c, h), (this.size = S.size), this;
  }
  (Or.prototype.clear = vm),
    (Or.prototype.delete = gm),
    (Or.prototype.get = ym),
    (Or.prototype.has = bm),
    (Or.prototype.set = Sm);
  function xm(c, h) {
    var S = il(c),
      I = !S && nl(c),
      j = !S && !I && Ac(c),
      Q = !S && !I && !j && Oc(c),
      re = S || I || j || Q,
      L = re ? Wh(c.length, String) : [],
      ne = L.length;
    for (var Ye in c)
      (h || Et.call(c, Ye)) &&
        !(
          re &&
          (Ye == "length" ||
            (j && (Ye == "offset" || Ye == "parent")) ||
            (Q &&
              (Ye == "buffer" || Ye == "byteLength" || Ye == "byteOffset")) ||
            $c(Ye, ne))
        ) &&
        L.push(Ye);
    return L;
  }
  function Ja(c, h, S) {
    ((S !== void 0 && !Yi(c[h], S)) || (S === void 0 && !(h in c))) &&
      el(c, h, S);
  }
  function wm(c, h, S) {
    var I = c[h];
    (!(Et.call(c, h) && Yi(I, S)) || (S === void 0 && !(h in c))) &&
      el(c, h, S);
  }
  function Vi(c, h) {
    for (var S = c.length; S--; ) if (Yi(c[S][0], h)) return S;
    return -1;
  }
  function el(c, h, S) {
    h == "__proto__" && Hi
      ? Hi(c, h, { configurable: !0, enumerable: !0, value: S, writable: !0 })
      : (c[h] = S);
  }
  var km = Mm();
  function Ui(c) {
    return c == null
      ? c === void 0
        ? T
        : d
      : cr && cr in Object(c)
      ? Fm(c)
      : Hm(c);
  }
  function Rc(c) {
    return Cn(c) && Ui(c) == l;
  }
  function _m(c) {
    if (!fr(c) || Dm(c)) return !1;
    var h = al(c) ? Xh : z;
    return h.test(Ym(c));
  }
  function Cm(c) {
    return Cn(c) && Ic(c.length) && !!B[Ui(c)];
  }
  function Em(c) {
    if (!fr(c)) return Wm(c);
    var h = zc(c),
      S = [];
    for (var I in c) (I == "constructor" && (h || !Et.call(c, I))) || S.push(I);
    return S;
  }
  function Pc(c, h, S, I, j) {
    c !== h &&
      km(
        h,
        function (Q, re) {
          if ((j || (j = new Or()), fr(Q))) Tm(c, h, re, S, Pc, I, j);
          else {
            var L = I ? I(rl(c, re), Q, re + "", c, h, j) : void 0;
            L === void 0 && (L = Q), Ja(c, re, L);
          }
        },
        Bc
      );
  }
  function Tm(c, h, S, I, j, Q, re) {
    var L = rl(c, S),
      ne = rl(h, S),
      Ye = re.get(ne);
    if (Ye) {
      Ja(c, S, Ye);
      return;
    }
    var je = Q ? Q(L, ne, S + "", c, h, re) : void 0,
      En = je === void 0;
    if (En) {
      var ll = il(ne),
        ul = !ll && Ac(ne),
        Fc = !ll && !ul && Oc(ne);
      (je = ne),
        ll || ul || Fc
          ? il(L)
            ? (je = L)
            : Qm(L)
            ? (je = Im(L))
            : ul
            ? ((En = !1), (je = $m(ne, !0)))
            : Fc
            ? ((En = !1), (je = Am(ne, !0)))
            : (je = [])
          : Xm(ne) || nl(ne)
          ? ((je = L),
            nl(L) ? (je = Km(L)) : (!fr(L) || al(L)) && (je = Nm(ne)))
          : (En = !1);
    }
    En && (re.set(ne, je), j(je, ne, I, Q, re), re.delete(ne)), Ja(c, S, je);
  }
  function Rm(c, h) {
    return Um(Vm(c, h, Mc), c + "");
  }
  var Pm = Hi
    ? function (c, h) {
        return Hi(c, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Zm(h),
          writable: !0,
        });
      }
    : Mc;
  function $m(c, h) {
    if (h) return c.slice();
    var S = c.length,
      I = kc ? kc(S) : new c.constructor(S);
    return c.copy(I), I;
  }
  function zm(c) {
    var h = new c.constructor(c.byteLength);
    return new wc(h).set(new wc(c)), h;
  }
  function Am(c, h) {
    var S = h ? zm(c.buffer) : c.buffer;
    return new c.constructor(S, c.byteOffset, c.length);
  }
  function Im(c, h) {
    var S = -1,
      I = c.length;
    for (h || (h = Array(I)); ++S < I; ) h[S] = c[S];
    return h;
  }
  function Om(c, h, S, I) {
    var j = !S;
    S || (S = {});
    for (var Q = -1, re = h.length; ++Q < re; ) {
      var L = h[Q],
        ne = I ? I(S[L], c[L], L, S, c) : void 0;
      ne === void 0 && (ne = c[L]), j ? el(S, L, ne) : wm(S, L, ne);
    }
    return S;
  }
  function Bm(c) {
    return Rm(function (h, S) {
      var I = -1,
        j = S.length,
        Q = j > 1 ? S[j - 1] : void 0,
        re = j > 2 ? S[2] : void 0;
      for (
        Q = c.length > 3 && typeof Q == "function" ? (j--, Q) : void 0,
          re && Lm(S[0], S[1], re) && ((Q = j < 3 ? void 0 : Q), (j = 1)),
          h = Object(h);
        ++I < j;

      ) {
        var L = S[I];
        L && c(h, L, I, Q);
      }
      return h;
    });
  }
  function Mm(c) {
    return function (h, S, I) {
      for (var j = -1, Q = Object(h), re = I(h), L = re.length; L--; ) {
        var ne = re[c ? L : ++j];
        if (S(Q[ne], ne, Q) === !1) break;
      }
      return h;
    };
  }
  function Gi(c, h) {
    var S = c.__data__;
    return jm(h) ? S[typeof h == "string" ? "string" : "hash"] : S.map;
  }
  function tl(c, h) {
    var S = Vh(c, h);
    return _m(S) ? S : void 0;
  }
  function Fm(c) {
    var h = Et.call(c, cr),
      S = c[cr];
    try {
      c[cr] = void 0;
      var I = !0;
    } catch {}
    var j = Sc.call(c);
    return I && (h ? (c[cr] = S) : delete c[cr]), j;
  }
  function Nm(c) {
    return typeof c.constructor == "function" && !zc(c) ? em(_c(c)) : {};
  }
  function $c(c, h) {
    var S = typeof c;
    return (
      (h = h == null ? a : h),
      !!h &&
        (S == "number" || (S != "symbol" && F.test(c))) &&
        c > -1 &&
        c % 1 == 0 &&
        c < h
    );
  }
  function Lm(c, h, S) {
    if (!fr(S)) return !1;
    var I = typeof h;
    return (I == "number" ? ol(S) && $c(h, S.length) : I == "string" && h in S)
      ? Yi(S[h], c)
      : !1;
  }
  function jm(c) {
    var h = typeof c;
    return h == "string" || h == "number" || h == "symbol" || h == "boolean"
      ? c !== "__proto__"
      : c === null;
  }
  function Dm(c) {
    return !!bc && bc in c;
  }
  function zc(c) {
    var h = c && c.constructor,
      S = (typeof h == "function" && h.prototype) || ji;
    return c === S;
  }
  function Wm(c) {
    var h = [];
    if (c != null) for (var S in Object(c)) h.push(S);
    return h;
  }
  function Hm(c) {
    return Sc.call(c);
  }
  function Vm(c, h, S) {
    return (
      (h = Ec(h === void 0 ? c.length - 1 : h, 0)),
      function () {
        for (
          var I = arguments, j = -1, Q = Ec(I.length - h, 0), re = Array(Q);
          ++j < Q;

        )
          re[j] = I[h + j];
        j = -1;
        for (var L = Array(h + 1); ++j < h; ) L[j] = I[j];
        return (L[h] = S(re)), Dh(c, this, L);
      }
    );
  }
  function rl(c, h) {
    if (!(h === "constructor" && typeof c[h] == "function") && h != "__proto__")
      return c[h];
  }
  var Um = Gm(Pm);
  function Gm(c) {
    var h = 0,
      S = 0;
    return function () {
      var I = Jh(),
        j = o - (I - S);
      if (((S = I), j > 0)) {
        if (++h >= i) return arguments[0];
      } else h = 0;
      return c.apply(void 0, arguments);
    };
  }
  function Ym(c) {
    if (c != null) {
      try {
        return Di.call(c);
      } catch {}
      try {
        return c + "";
      } catch {}
    }
    return "";
  }
  function Yi(c, h) {
    return c === h || (c !== c && h !== h);
  }
  var nl = Rc(
      (function () {
        return arguments;
      })()
    )
      ? Rc
      : function (c) {
          return Cn(c) && Et.call(c, "callee") && !Kh.call(c, "callee");
        },
    il = Array.isArray;
  function ol(c) {
    return c != null && Ic(c.length) && !al(c);
  }
  function Qm(c) {
    return Cn(c) && ol(c);
  }
  var Ac = Zh || Jm;
  function al(c) {
    if (!fr(c)) return !1;
    var h = Ui(c);
    return h == w || h == C || h == s || h == y;
  }
  function Ic(c) {
    return typeof c == "number" && c > -1 && c % 1 == 0 && c <= a;
  }
  function fr(c) {
    var h = typeof c;
    return c != null && (h == "object" || h == "function");
  }
  function Cn(c) {
    return c != null && typeof c == "object";
  }
  function Xm(c) {
    if (!Cn(c) || Ui(c) != f) return !1;
    var h = _c(c);
    if (h === null) return !0;
    var S = Et.call(h, "constructor") && h.constructor;
    return typeof S == "function" && S instanceof S && Di.call(S) == Qh;
  }
  var Oc = yc ? Hh(yc) : Cm;
  function Km(c) {
    return Om(c, Bc(c));
  }
  function Bc(c) {
    return ol(c) ? xm(c, !0) : Em(c);
  }
  var qm = Bm(function (c, h, S, I) {
    Pc(c, h, S, I);
  });
  function Zm(c) {
    return function () {
      return c;
    };
  }
  function Mc(c) {
    return c;
  }
  function Jm() {
    return !1;
  }
  e.exports = qm;
})(Es, Es.exports);
var lt = Es.exports;
function Ky(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function Ri(e) {
  return typeof e == "number";
}
function Ts(e) {
  return Array.isArray(e);
}
function mn(e) {
  return typeof e == "function";
}
function et(e) {
  var t = typeof e;
  return e != null && (t === "object" || t === "function") && !Ts(e);
}
function qy(e) {
  return et(e) && Object.keys(e).length === 0;
}
function Rs(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
function y0(e) {
  return /^var\(--.+\)$/.test(e);
}
var Zy = !1;
function b0(e, t) {
  var r = {};
  return (
    Object.keys(e).forEach(function (n) {
      t.includes(n) || (r[n] = e[n]);
    }),
    r
  );
}
function Jy(e, t) {
  var r = {};
  return (
    t.forEach(function (n) {
      n in e && (r[n] = e[n]);
    }),
    r
  );
}
function e1(e, t, r, n) {
  var i = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < i.length && e; n += 1) e = e[i[n]];
  return e === void 0 ? r : e;
}
var t1 = function (t) {
    var r = new WeakMap(),
      n = function (o, a, l, u) {
        if (typeof o == "undefined") return t(o, a, l);
        r.has(o) || r.set(o, new Map());
        var s = r.get(o);
        if (s.has(a)) return s.get(a);
        var m = t(o, a, l, u);
        return s.set(a, m), m;
      };
    return n;
  },
  xa = t1(e1);
function S0(e, t) {
  var r = {};
  return (
    Object.keys(e).forEach(function (n) {
      var i = e[n],
        o = t(i, n, e);
      o && (r[n] = i);
    }),
    r
  );
}
var Ps = function (t) {
    return S0(t, function (r) {
      return r != null;
    });
  },
  $s = function (t) {
    return Object.keys(t);
  },
  wa = function (t) {
    return t.reduce(function (r, n) {
      var i = n[0],
        o = n[1];
      return (r[i] = o), r;
    }, {});
  };
function r1(e) {
  var t = parseFloat(e.toString()),
    r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function zs(e) {
  if (e == null) return e;
  var t = r1(e),
    r = t.unitless;
  return r || Ri(e) ? e + "px" : e;
}
var x0 = function (t, r) {
    return parseInt(t[1], 10) > parseInt(r[1], 10) ? 1 : -1;
  },
  As = function (t) {
    return wa(Object.entries(t).sort(x0));
  };
function w0(e) {
  var t = As(e);
  return Object.assign(Object.values(t), t);
}
function n1(e) {
  var t = Object.keys(As(e));
  return new Set(t);
}
function i1(e) {
  var t;
  if (!e) return e;
  e = (t = zs(e)) != null ? t : e;
  var r = e.endsWith("px") ? -1 : -0.0635;
  return Ri(e)
    ? "" + (e + r)
    : e.replace(/([0-9]+\.?[0-9]*)/, function (n) {
        return "" + (parseFloat(n) + r);
      });
}
function ka(e, t) {
  var r = [];
  return (
    e && r.push("@media screen and (min-width: " + zs(e) + ")"),
    r.length > 0 && t && r.push("and"),
    t && r.push("@media screen and (max-width: " + zs(t) + ")"),
    r.join(" ")
  );
}
function o1(e) {
  var t;
  if (!e) return null;
  e.base = (t = e.base) != null ? t : "0px";
  var r = w0(e),
    n = Object.entries(e)
      .sort(x0)
      .map(function (a, l, u) {
        var s,
          m = a[0],
          b = a[1],
          v = (s = u[l + 1]) != null ? s : [],
          w = v[1];
        return (
          (w = parseFloat(w) > 0 ? i1(w) : void 0),
          {
            breakpoint: m,
            minW: b,
            maxW: w,
            maxWQuery: ka(null, w),
            minWQuery: ka(b),
            minMaxQuery: ka(b, w),
          }
        );
      }),
    i = n1(e),
    o = Array.from(i.values());
  return {
    keys: i,
    normalized: r,
    isResponsive: function (l) {
      var u = Object.keys(l);
      return (
        u.length > 0 &&
        u.every(function (s) {
          return i.has(s);
        })
      );
    },
    asObject: As(e),
    asArray: w0(e),
    details: n,
    media: [null].concat(
      r
        .map(function (a) {
          return ka(a);
        })
        .slice(1)
    ),
    toArrayValue: function (l) {
      if (!et(l)) throw new Error("toArrayValue: value must be an object");
      for (
        var u = o.map(function (s) {
          var m;
          return (m = l[s]) != null ? m : null;
        });
        Ky(u) === null;

      )
        u.pop();
      return u;
    },
    toObjectValue: function (l) {
      if (!Array.isArray(l))
        throw new Error("toObjectValue: value must be an array");
      return l.reduce(function (u, s, m) {
        var b = o[m];
        return b != null && s != null && (u[b] = s), u;
      }, {});
    },
  };
}
function a1() {
  return !!(
    typeof window != "undefined" &&
    window.document &&
    window.document.createElement
  );
}
var _a = a1(),
  k0 = function (t) {
    return t ? "" : void 0;
  },
  Is = function (t) {
    return t ? !0 : void 0;
  },
  tt = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return r.filter(Boolean).join(" ");
  };
function xt(e) {
  for (
    var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
    n < t;
    n++
  )
    r[n - 1] = arguments[n];
  return mn(e) ? e.apply(void 0, r) : e;
}
function _0() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function (i) {
    t.some(function (o) {
      return o == null || o(i), i == null ? void 0 : i.defaultPrevented;
    });
  };
}
function l1(e) {
  var t;
  return function () {
    if (e) {
      for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
        i[o] = arguments[o];
      (t = e.apply(this, i)), (e = null);
    }
    return t;
  };
}
var Pi = function () {},
  u1 = l1(function (e) {
    return function () {
      var t = e.condition,
        r = e.message;
      t && Zy && console.warn(r);
    };
  }),
  s1 = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return function (i) {
      return r.reduce(function (o, a) {
        return a(o);
      }, i);
    };
  };
Object.freeze(["base", "sm", "md", "lg", "xl", "2xl"]);
function C0(e, t) {
  return Ts(e)
    ? e.map(function (r) {
        return r === null ? null : t(r);
      })
    : et(e)
    ? $s(e).reduce(function (r, n) {
        return (r[n] = t(e[n])), r;
      }, {})
    : e != null
    ? t(e)
    : null;
}
function c1(e, t) {
  function r(n, i) {
    return (
      i === void 0 && (i = []),
      Ts(n)
        ? n.map(function (o, a) {
            return r(o, [].concat(i, [String(a)]));
          })
        : et(n)
        ? wa(
            Object.entries(n).map(function (o) {
              var a = o[0],
                l = o[1];
              return [a, r(l, [].concat(i, [a]))];
            })
          )
        : t(n, i)
    );
  }
  return r(e);
}
function $i(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.strict,
    n = r === void 0 ? !0 : r,
    i = t.errorMessage,
    o =
      i === void 0
        ? "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider"
        : i,
    a = t.name,
    l = R.exports.createContext(void 0);
  l.displayName = a;
  function u() {
    var s = R.exports.useContext(l);
    if (!s && n) {
      var m = new Error(o);
      throw (
        ((m.name = "ContextError"),
        Error.captureStackTrace == null || Error.captureStackTrace(m, u),
        m)
      );
    }
    return s;
  }
  return [l.Provider, u, l];
}
function d1(e) {
  return R.exports.Children.toArray(e).filter(function (t) {
    return R.exports.isValidElement(t);
  });
}
var E0 = { prefix: Math.round(Math.random() * 1e10), current: 0 },
  T0 = R.exports.createContext(E0),
  f1 = R.exports.memo(function (e) {
    var t = e.children,
      r = R.exports.useContext(T0),
      n = r === E0,
      i = R.exports.useMemo(
        function () {
          return { prefix: n ? 0 : ++r.prefix, current: 0 };
        },
        [n, r]
      );
    return R.exports.createElement(T0.Provider, { value: i }, t);
  });
function p1(e, t) {
  if (e != null) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error("Cannot assign value '" + t + "' to ref '" + e + "'");
    }
  }
}
function h1() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return R.exports.useMemo(function () {
    return t.every(function (n) {
      return n == null;
    })
      ? null
      : function (n) {
          t.forEach(function (i) {
            i && p1(i, n);
          });
        };
  }, t);
}
var m1 = $i({ strict: !1, name: "PortalManagerContext" }),
  v1 = m1[0];
function g1(e) {
  var t = e.children,
    r = e.zIndex;
  return R.exports.createElement(v1, { value: { zIndex: r } }, t);
}
$i({ strict: !1, name: "PortalContext" });
var Os = { exports: {} },
  zi = {};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var y1 = R.exports,
  R0 = 60103;
zi.Fragment = 60107;
if (typeof Symbol == "function" && Symbol.for) {
  var P0 = Symbol.for;
  (R0 = P0("react.element")), (zi.Fragment = P0("react.fragment"));
}
var b1 =
    y1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  S1 = Object.prototype.hasOwnProperty,
  x1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function $0(e, t, r) {
  var n,
    i = {},
    o = null,
    a = null;
  r !== void 0 && (o = "" + r),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (n in t) S1.call(t, n) && !x1.hasOwnProperty(n) && (i[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) i[n] === void 0 && (i[n] = t[n]);
  return {
    $$typeof: R0,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: b1.current,
  };
}
zi.jsx = $0;
zi.jsxs = $0;
Os.exports = zi;
const w1 = Os.exports.jsx,
  k1 = Os.exports.jsxs;
var _1 = {
    body: { classList: { add: function () {}, remove: function () {} } },
    addEventListener: function () {},
    removeEventListener: function () {},
    activeElement: { blur: function () {}, nodeName: "" },
    querySelector: function () {
      return null;
    },
    querySelectorAll: function () {
      return [];
    },
    getElementById: function () {
      return null;
    },
    createEvent: function () {
      return { initEvent: function () {} };
    },
    createElement: function () {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function () {},
        getElementsByTagName: function () {
          return [];
        },
      };
    },
  },
  z0 = _1,
  vn = function () {},
  C1 = {
    document: z0,
    navigator: { userAgent: "" },
    CustomEvent: function () {
      return this;
    },
    addEventListener: vn,
    removeEventListener: vn,
    getComputedStyle: function () {
      return {
        getPropertyValue: function () {
          return "";
        },
      };
    },
    matchMedia: function () {
      return { matches: !1, addListener: vn, removeListener: vn };
    },
    requestAnimationFrame: function (t) {
      return typeof setTimeout == "undefined" ? (t(), null) : setTimeout(t, 0);
    },
    cancelAnimationFrame: function (t) {
      typeof setTimeout != "undefined" && clearTimeout(t);
    },
    setTimeout: function () {
      return 0;
    },
    clearTimeout: vn,
    setInterval: function () {
      return 0;
    },
    clearInterval: vn,
  },
  E1 = C1,
  T1 = { window: E1, document: z0 },
  A0 = _a ? { window, document } : T1,
  I0 = R.exports.createContext(A0);
function R1() {
  return R.exports.useContext(I0);
}
function P1(e) {
  var t = e.children,
    r = e.environment,
    n = R.exports.useState(null),
    i = n[0],
    o = n[1],
    a = R.exports.useMemo(
      function () {
        var u,
          s = i == null ? void 0 : i.ownerDocument,
          m = i == null ? void 0 : i.ownerDocument.defaultView,
          b = s ? { document: s, window: m } : void 0,
          v = (u = r != null ? r : b) != null ? u : A0;
        return v;
      },
      [i, r]
    ),
    l = !i && !r;
  return k1(I0.Provider, {
    value: a,
    children: [
      t,
      l &&
        w1("span", {
          ref: function (s) {
            s && o(s);
          },
        }),
    ],
  });
}
var Ca = { light: "chakra-ui-light", dark: "chakra-ui-dark" },
  $1 = { classList: { add: Pi, remove: Pi } },
  z1 = function (t) {
    return _a ? t.body : $1;
  };
function A1(e, t) {
  var r = z1(t);
  r.classList.add(e ? Ca.dark : Ca.light),
    r.classList.remove(e ? Ca.light : Ca.dark);
}
function I1(e) {
  var t = window.matchMedia == null ? void 0 : window.matchMedia(e);
  if (!!t) return !!t.media === t.matches;
}
var O0 = {
  light: "(prefers-color-scheme: light)",
  dark: "(prefers-color-scheme: dark)",
};
function O1(e) {
  var t,
    r = (t = I1(O0.dark)) != null ? t : e === "dark";
  return r ? "dark" : "light";
}
function B1(e) {
  if (!("matchMedia" in window)) return Pi;
  var t = window.matchMedia(O0.dark),
    r = function () {
      e(t.matches ? "dark" : "light", !0);
    };
  return (
    t.addEventListener("change", r),
    function () {
      t.removeEventListener("change", r);
    }
  );
}
var B0 = {
    get: function () {
      return document.documentElement.style.getPropertyValue(
        "--chakra-ui-color-mode"
      );
    },
    set: function (t) {
      _a &&
        document.documentElement.style.setProperty("--chakra-ui-color-mode", t);
    },
  },
  M0 = function () {
    return typeof Storage != "undefined";
  },
  F0 = "chakra-ui-color-mode",
  M1 = {
    get: function (t) {
      if (!M0()) return t;
      try {
        var r = localStorage.getItem(F0);
        return r != null ? r : t;
      } catch {
        return t;
      }
    },
    set: function (t) {
      if (!!M0())
        try {
          localStorage.setItem(F0, t);
        } catch {}
    },
    type: "localStorage",
  },
  N0 = R.exports.createContext({}),
  L0 = function () {
    var t = R.exports.useContext(N0);
    if (t === void 0)
      throw new Error("useColorMode must be used within a ColorModeProvider");
    return t;
  };
function F1(e) {
  var t = e.value,
    r = e.children,
    n = e.options,
    i = n.useSystemColorMode,
    o = n.initialColorMode,
    a = e.colorModeManager,
    l = a === void 0 ? M1 : a,
    u = o === "dark" ? "dark" : "light",
    s = R.exports.useState(l.type === "cookie" ? l.get(u) : u),
    m = s[0],
    b = s[1],
    v = R1(),
    w = v.document;
  R.exports.useEffect(
    function () {
      if (_a && l.type === "localStorage") {
        var d = O1(u);
        if (i) return b(d);
        var f = B0.get(),
          y = l.get();
        return b(f || y || (o === "system" ? d : u));
      }
    },
    [l, i, u, o]
  ),
    R.exports.useEffect(
      function () {
        var d = m === "dark";
        A1(d, w), B0.set(d ? "dark" : "light");
      },
      [m, w]
    );
  var C = R.exports.useCallback(
      function (d, f) {
        if ((f === void 0 && (f = !1), !f)) l.set(d);
        else if (l.get() && !i) return;
        b(d);
      },
      [l, i]
    ),
    k = R.exports.useCallback(
      function () {
        C(m === "light" ? "dark" : "light");
      },
      [m, C]
    );
  R.exports.useEffect(
    function () {
      var d = i || o === "system",
        f;
      return (
        d && (f = B1(C)),
        function () {
          f && d && f();
        }
      );
    },
    [C, i, o]
  );
  var p = R.exports.useMemo(
    function () {
      return {
        colorMode: t != null ? t : m,
        toggleColorMode: t ? Pi : k,
        setColorMode: t ? Pi : C,
      };
    },
    [m, C, k, t]
  );
  return R.exports.createElement(N0.Provider, { value: p }, r);
}
function gn() {
  return (
    (gn =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    gn.apply(this, arguments)
  );
}
var N1 = function (t, r) {
  return function (n) {
    var i = String(r),
      o = t ? t + "." + i : i;
    return et(n.__cssMap) && o in n.__cssMap ? n.__cssMap[o].varRef : r;
  };
};
function Ai(e) {
  var t = e.scale,
    r = e.transform,
    n = e.compose,
    i = function (a, l) {
      var u,
        s = N1(t, a)(l),
        m = (u = r == null ? void 0 : r(s, l)) != null ? u : s;
      return n && (m = n(m, l)), m;
    };
  return i;
}
function ut(e, t) {
  return function (r) {
    var n = { property: r, scale: e };
    return (n.transform = Ai({ scale: e, transform: t })), n;
  };
}
var L1 = function (t) {
  var r = t.rtl,
    n = t.ltr;
  return function (i) {
    return i.direction === "rtl" ? r : n;
  };
};
function j1(e) {
  var t = e.property,
    r = e.scale,
    n = e.transform;
  return {
    scale: r,
    property: L1(t),
    transform: r ? Ai({ scale: r, compose: n }) : n,
  };
}
var Bs,
  Ms,
  j0 = [
    "rotate(var(--chakra-rotate, 0))",
    "scaleX(var(--chakra-scale-x, 1))",
    "scaleY(var(--chakra-scale-y, 1))",
    "skewX(var(--chakra-skew-x, 0))",
    "skewY(var(--chakra-skew-y, 0))",
  ];
function D1() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
  ]
    .concat(j0)
    .join(" ");
}
function W1() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
  ]
    .concat(j0)
    .join(" ");
}
var H1 = {
    "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
    filter: [
      "var(--chakra-blur)",
      "var(--chakra-brightness)",
      "var(--chakra-contrast)",
      "var(--chakra-grayscale)",
      "var(--chakra-hue-rotate)",
      "var(--chakra-invert)",
      "var(--chakra-saturate)",
      "var(--chakra-sepia)",
      "var(--chakra-drop-shadow)",
    ].join(" "),
  },
  V1 = {
    backdropFilter: [
      "var(--chakra-backdrop-blur)",
      "var(--chakra-backdrop-brightness)",
      "var(--chakra-backdrop-contrast)",
      "var(--chakra-backdrop-grayscale)",
      "var(--chakra-backdrop-hue-rotate)",
      "var(--chakra-backdrop-invert)",
      "var(--chakra-backdrop-opacity)",
      "var(--chakra-backdrop-saturate)",
      "var(--chakra-backdrop-sepia)",
    ].join(" "),
    "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  };
function U1(e) {
  return {
    "--chakra-ring-offset-shadow":
      "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow":
      "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)",
    ].join(", "),
  };
}
var G1 = {
    "row-reverse": {
      space: "--chakra-space-x-reverse",
      divide: "--chakra-divide-x-reverse",
    },
    "column-reverse": {
      space: "--chakra-space-y-reverse",
      divide: "--chakra-divide-y-reverse",
    },
  },
  D0 = "& > :not(style) ~ :not(style)",
  Y1 =
    ((Bs = {}),
    (Bs[D0] = {
      marginInlineStart:
        "calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))",
      marginInlineEnd:
        "calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))",
    }),
    Bs),
  Q1 =
    ((Ms = {}),
    (Ms[D0] = {
      marginTop:
        "calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))",
      marginBottom:
        "calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))",
    }),
    Ms);
function Ea(e, t) {
  return (
    (Ea =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    Ea(e, t)
  );
}
function X1(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Ea(e, t);
}
function Fs() {
  Fs = function (i, o) {
    return new r(i, void 0, o);
  };
  var e = RegExp.prototype,
    t = new WeakMap();
  function r(i, o, a) {
    var l = new RegExp(i, o);
    return t.set(l, a || t.get(i)), Ea(l, r.prototype);
  }
  X1(r, RegExp),
    (r.prototype.exec = function (i) {
      var o = e.exec.call(this, i);
      return o && (o.groups = n(o, this)), o;
    }),
    (r.prototype[Symbol.replace] = function (i, o) {
      if (typeof o == "string") {
        var a = t.get(this);
        return e[Symbol.replace].call(
          this,
          i,
          o.replace(/\$<([^>]+)>/g, function (u, s) {
            return "$" + a[s];
          })
        );
      } else if (typeof o == "function") {
        var l = this;
        return e[Symbol.replace].call(this, i, function () {
          var u = arguments;
          return (
            typeof u[u.length - 1] != "object" &&
              ((u = [].slice.call(u)), u.push(n(u, l))),
            o.apply(this, u)
          );
        });
      } else return e[Symbol.replace].call(this, i, o);
    });
  function n(i, o) {
    var a = t.get(o);
    return Object.keys(a).reduce(function (l, u) {
      return (l[u] = i[a[u]]), l;
    }, Object.create(null));
  }
  return Fs.apply(this, arguments);
}
var Ns = {
    "to-t": "to top",
    "to-tr": "to top right",
    "to-r": "to right",
    "to-br": "to bottom right",
    "to-b": "to bottom",
    "to-bl": "to bottom left",
    "to-l": "to left",
    "to-tl": "to top left",
  },
  K1 = new Set(Object.values(Ns)),
  W0 = new Set([
    "none",
    "-moz-initial",
    "inherit",
    "initial",
    "revert",
    "unset",
  ]),
  q1 = function (t) {
    return t.trim();
  };
function Z1(e, t) {
  var r, n;
  if (e == null || W0.has(e)) return e;
  var i = Fs(/(^[\x2DA-Za-z]+)\(((.*))\)/g, { type: 1, values: 2 }),
    o = (r = (n = i.exec(e)) == null ? void 0 : n.groups) != null ? r : {},
    a = o.type,
    l = o.values;
  if (!a || !l) return e;
  var u = a.includes("-gradient") ? a : a + "-gradient",
    s = l.split(",").map(q1).filter(Boolean),
    m = s[0],
    b = s.slice(1);
  if ((b == null ? void 0 : b.length) === 0) return e;
  var v = m in Ns ? Ns[m] : m;
  b.unshift(v);
  var w = b.map(function (C) {
    if (K1.has(C)) return C;
    var k = C.indexOf(" "),
      p = k !== -1 ? [C.substr(0, k), C.substr(k + 1)] : [C],
      d = p[0],
      f = p[1],
      y = H0(f) ? f : f && f.split(" "),
      x = "colors." + d,
      $ = x in t.__cssMap ? t.__cssMap[x].varRef : d;
    return y ? [$].concat(Array.isArray(y) ? y : [y]).join(" ") : $;
  });
  return u + "(" + w.join(", ") + ")";
}
var H0 = function (t) {
    return Rs(t) && t.includes("(") && t.includes(")");
  },
  J1 = function (t, r) {
    return Z1(t, r != null ? r : {});
  },
  eb = function (t) {
    var r = parseFloat(t.toString()),
      n = t.toString().replace(String(r), "");
    return { unitless: !n, value: r, unit: n };
  },
  wt = function (t) {
    return function (r) {
      return t + "(" + r + ")";
    };
  },
  Y = {
    filter: function (t) {
      return t !== "auto" ? t : H1;
    },
    backdropFilter: function (t) {
      return t !== "auto" ? t : V1;
    },
    ring: function (t) {
      return U1(Y.px(t));
    },
    bgClip: function (t) {
      return t === "text"
        ? { color: "transparent", backgroundClip: "text" }
        : { backgroundClip: t };
    },
    transform: function (t) {
      return t === "auto" ? D1() : t === "auto-gpu" ? W1() : t;
    },
    px: function (t) {
      if (t == null) return t;
      var r = eb(t),
        n = r.unitless;
      return n || Ri(t) ? t + "px" : t;
    },
    fraction: function (t) {
      return !Ri(t) || t > 1 ? t : t * 100 + "%";
    },
    float: function (t, r) {
      var n = { left: "right", right: "left" };
      return r.direction === "rtl" ? n[t] : t;
    },
    degree: function (t) {
      if (y0(t) || t == null) return t;
      var r = Rs(t) && !t.endsWith("deg");
      return Ri(t) || r ? t + "deg" : t;
    },
    gradient: J1,
    blur: wt("blur"),
    opacity: wt("opacity"),
    brightness: wt("brightness"),
    contrast: wt("contrast"),
    dropShadow: wt("drop-shadow"),
    grayscale: wt("grayscale"),
    hueRotate: wt("hue-rotate"),
    invert: wt("invert"),
    saturate: wt("saturate"),
    sepia: wt("sepia"),
    bgImage: function (t) {
      if (t == null) return t;
      var r = H0(t) || W0.has(t);
      return r ? t : "url(" + t + ")";
    },
    outline: function (t) {
      var r = String(t) === "0" || String(t) === "none";
      return t !== null && r
        ? { outline: "2px solid transparent", outlineOffset: "2px" }
        : { outline: t };
    },
    flexDirection: function (t) {
      var r,
        n = (r = G1[t]) != null ? r : {},
        i = n.space,
        o = n.divide,
        a = { flexDirection: t };
      return i && (a[i] = 1), o && (a[o] = 1), a;
    },
  },
  g = {
    borderWidths: ut("borderWidths"),
    borderStyles: ut("borderStyles"),
    colors: ut("colors"),
    borders: ut("borders"),
    radii: ut("radii", Y.px),
    space: ut("space", Y.px),
    spaceT: ut("space", Y.px),
    degreeT: function (t) {
      return { property: t, transform: Y.degree };
    },
    prop: function (t, r, n) {
      return gn(
        { property: t, scale: r },
        r && { transform: Ai({ scale: r, transform: n }) }
      );
    },
    propT: function (t, r) {
      return { property: t, transform: r };
    },
    sizes: ut("sizes", Y.px),
    sizesT: ut("sizes", Y.fraction),
    shadows: ut("shadows"),
    logical: j1,
    blur: ut("blur", Y.blur),
  },
  Ta = {
    background: g.colors("background"),
    backgroundColor: g.colors("backgroundColor"),
    backgroundImage: g.propT("backgroundImage", Y.bgImage),
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
    backgroundAttachment: !0,
    backgroundClip: { transform: Y.bgClip },
    bgSize: g.prop("backgroundSize"),
    bgPosition: g.prop("backgroundPosition"),
    bg: g.colors("background"),
    bgColor: g.colors("backgroundColor"),
    bgPos: g.prop("backgroundPosition"),
    bgRepeat: g.prop("backgroundRepeat"),
    bgAttachment: g.prop("backgroundAttachment"),
    bgGradient: g.propT("backgroundImage", Y.gradient),
    bgClip: { transform: Y.bgClip },
  };
Object.assign(Ta, { bgImage: Ta.backgroundImage, bgImg: Ta.backgroundImage });
var V = {
  border: g.borders("border"),
  borderWidth: g.borderWidths("borderWidth"),
  borderStyle: g.borderStyles("borderStyle"),
  borderColor: g.colors("borderColor"),
  borderRadius: g.radii("borderRadius"),
  borderTop: g.borders("borderTop"),
  borderBlockStart: g.borders("borderBlockStart"),
  borderTopLeftRadius: g.radii("borderTopLeftRadius"),
  borderStartStartRadius: g.logical({
    scale: "radii",
    property: { ltr: "borderTopLeftRadius", rtl: "borderTopRightRadius" },
  }),
  borderEndStartRadius: g.logical({
    scale: "radii",
    property: { ltr: "borderBottomLeftRadius", rtl: "borderBottomRightRadius" },
  }),
  borderTopRightRadius: g.radii("borderTopRightRadius"),
  borderStartEndRadius: g.logical({
    scale: "radii",
    property: { ltr: "borderTopRightRadius", rtl: "borderTopLeftRadius" },
  }),
  borderEndEndRadius: g.logical({
    scale: "radii",
    property: { ltr: "borderBottomRightRadius", rtl: "borderBottomLeftRadius" },
  }),
  borderRight: g.borders("borderRight"),
  borderInlineEnd: g.borders("borderInlineEnd"),
  borderBottom: g.borders("borderBottom"),
  borderBlockEnd: g.borders("borderBlockEnd"),
  borderBottomLeftRadius: g.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: g.radii("borderBottomRightRadius"),
  borderLeft: g.borders("borderLeft"),
  borderInlineStart: { property: "borderInlineStart", scale: "borders" },
  borderInlineStartRadius: g.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"],
    },
  }),
  borderInlineEndRadius: g.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"],
    },
  }),
  borderX: g.borders(["borderLeft", "borderRight"]),
  borderInline: g.borders("borderInline"),
  borderY: g.borders(["borderTop", "borderBottom"]),
  borderBlock: g.borders("borderBlock"),
  borderTopWidth: g.borderWidths("borderTopWidth"),
  borderBlockStartWidth: g.borderWidths("borderBlockStartWidth"),
  borderTopColor: g.colors("borderTopColor"),
  borderBlockStartColor: g.colors("borderBlockStartColor"),
  borderTopStyle: g.borderStyles("borderTopStyle"),
  borderBlockStartStyle: g.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: g.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: g.borderWidths("borderBlockEndWidth"),
  borderBottomColor: g.colors("borderBottomColor"),
  borderBlockEndColor: g.colors("borderBlockEndColor"),
  borderBottomStyle: g.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: g.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: g.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: g.borderWidths("borderInlineStartWidth"),
  borderLeftColor: g.colors("borderLeftColor"),
  borderInlineStartColor: g.colors("borderInlineStartColor"),
  borderLeftStyle: g.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: g.borderStyles("borderInlineStartStyle"),
  borderRightWidth: g.borderWidths("borderRightWidth"),
  borderInlineEndWidth: g.borderWidths("borderInlineEndWidth"),
  borderRightColor: g.colors("borderRightColor"),
  borderInlineEndColor: g.colors("borderInlineEndColor"),
  borderRightStyle: g.borderStyles("borderRightStyle"),
  borderInlineEndStyle: g.borderStyles("borderInlineEndStyle"),
  borderTopRadius: g.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: g.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ]),
  borderLeftRadius: g.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: g.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius",
  ]),
};
Object.assign(V, {
  rounded: V.borderRadius,
  roundedTop: V.borderTopRadius,
  roundedTopLeft: V.borderTopLeftRadius,
  roundedTopRight: V.borderTopRightRadius,
  roundedTopStart: V.borderStartStartRadius,
  roundedTopEnd: V.borderStartEndRadius,
  roundedBottom: V.borderBottomRadius,
  roundedBottomLeft: V.borderBottomLeftRadius,
  roundedBottomRight: V.borderBottomRightRadius,
  roundedBottomStart: V.borderEndStartRadius,
  roundedBottomEnd: V.borderEndEndRadius,
  roundedLeft: V.borderLeftRadius,
  roundedRight: V.borderRightRadius,
  roundedStart: V.borderInlineStartRadius,
  roundedEnd: V.borderInlineEndRadius,
  borderStart: V.borderInlineStart,
  borderEnd: V.borderInlineEnd,
  borderTopStartRadius: V.borderStartStartRadius,
  borderTopEndRadius: V.borderStartEndRadius,
  borderBottomStartRadius: V.borderEndStartRadius,
  borderBottomEndRadius: V.borderEndEndRadius,
  borderStartRadius: V.borderInlineStartRadius,
  borderEndRadius: V.borderInlineEndRadius,
  borderStartWidth: V.borderInlineStartWidth,
  borderEndWidth: V.borderInlineEndWidth,
  borderStartColor: V.borderInlineStartColor,
  borderEndColor: V.borderInlineEndColor,
  borderStartStyle: V.borderInlineStartStyle,
  borderEndStyle: V.borderInlineEndStyle,
});
var tb = {
    color: g.colors("color"),
    textColor: g.colors("color"),
    fill: g.colors("fill"),
    stroke: g.colors("stroke"),
  },
  Ls = {
    boxShadow: g.shadows("boxShadow"),
    mixBlendMode: !0,
    blendMode: g.prop("mixBlendMode"),
    backgroundBlendMode: !0,
    bgBlendMode: g.prop("backgroundBlendMode"),
    opacity: !0,
  };
Object.assign(Ls, { shadow: Ls.boxShadow });
var rb = {
    filter: { transform: Y.filter },
    blur: g.blur("--chakra-blur"),
    brightness: g.propT("--chakra-brightness", Y.brightness),
    contrast: g.propT("--chakra-contrast", Y.contrast),
    hueRotate: g.degreeT("--chakra-hue-rotate"),
    invert: g.propT("--chakra-invert", Y.invert),
    saturate: g.propT("--chakra-saturate", Y.saturate),
    dropShadow: g.propT("--chakra-drop-shadow", Y.dropShadow),
    backdropFilter: { transform: Y.backdropFilter },
    backdropBlur: g.blur("--chakra-backdrop-blur"),
    backdropBrightness: g.propT("--chakra-backdrop-brightness", Y.brightness),
    backdropContrast: g.propT("--chakra-backdrop-contrast", Y.contrast),
    backdropHueRotate: g.degreeT("--chakra-backdrop-hue-rotate"),
    backdropInvert: g.propT("--chakra-backdrop-invert", Y.invert),
    backdropSaturate: g.propT("--chakra-backdrop-saturate", Y.saturate),
  },
  Ra = {
    alignItems: !0,
    alignContent: !0,
    justifyItems: !0,
    justifyContent: !0,
    flexWrap: !0,
    flexDirection: { transform: Y.flexDirection },
    experimental_spaceX: {
      static: Y1,
      transform: Ai({
        scale: "space",
        transform: function (t) {
          return t !== null ? { "--chakra-space-x": t } : null;
        },
      }),
    },
    experimental_spaceY: {
      static: Q1,
      transform: Ai({
        scale: "space",
        transform: function (t) {
          return t != null ? { "--chakra-space-y": t } : null;
        },
      }),
    },
    flex: !0,
    flexFlow: !0,
    flexGrow: !0,
    flexShrink: !0,
    flexBasis: g.sizes("flexBasis"),
    justifySelf: !0,
    alignSelf: !0,
    order: !0,
    placeItems: !0,
    placeContent: !0,
    placeSelf: !0,
    gap: g.space("gap"),
    rowGap: g.space("rowGap"),
    columnGap: g.space("columnGap"),
  };
Object.assign(Ra, { flexDir: Ra.flexDirection });
var V0 = {
    gridGap: g.space("gridGap"),
    gridColumnGap: g.space("gridColumnGap"),
    gridRowGap: g.space("gridRowGap"),
    gridColumn: !0,
    gridRow: !0,
    gridAutoFlow: !0,
    gridAutoColumns: !0,
    gridColumnStart: !0,
    gridColumnEnd: !0,
    gridRowStart: !0,
    gridRowEnd: !0,
    gridAutoRows: !0,
    gridTemplate: !0,
    gridTemplateColumns: !0,
    gridTemplateRows: !0,
    gridTemplateAreas: !0,
    gridArea: !0,
  },
  nb = {
    appearance: !0,
    cursor: !0,
    resize: !0,
    userSelect: !0,
    pointerEvents: !0,
    outline: { transform: Y.outline },
    outlineOffset: !0,
    outlineColor: g.colors("outlineColor"),
  },
  rt = {
    width: g.sizesT("width"),
    inlineSize: g.sizesT("inlineSize"),
    height: g.sizes("height"),
    blockSize: g.sizes("blockSize"),
    boxSize: g.sizes(["width", "height"]),
    minWidth: g.sizes("minWidth"),
    minInlineSize: g.sizes("minInlineSize"),
    minHeight: g.sizes("minHeight"),
    minBlockSize: g.sizes("minBlockSize"),
    maxWidth: g.sizes("maxWidth"),
    maxInlineSize: g.sizes("maxInlineSize"),
    maxHeight: g.sizes("maxHeight"),
    maxBlockSize: g.sizes("maxBlockSize"),
    d: g.prop("display"),
    overflow: !0,
    overflowX: !0,
    overflowY: !0,
    overscrollBehavior: !0,
    overscrollBehaviorX: !0,
    overscrollBehaviorY: !0,
    display: !0,
    verticalAlign: !0,
    boxSizing: !0,
    boxDecorationBreak: !0,
    float: g.propT("float", Y.float),
    objectFit: !0,
    objectPosition: !0,
    visibility: !0,
    isolation: !0,
  };
Object.assign(rt, {
  w: rt.width,
  h: rt.height,
  minW: rt.minWidth,
  maxW: rt.maxWidth,
  minH: rt.minHeight,
  maxH: rt.maxHeight,
  overscroll: rt.overscrollBehavior,
  overscrollX: rt.overscrollBehaviorX,
  overscrollY: rt.overscrollBehaviorY,
});
var ib = {
    listStyleType: !0,
    listStylePosition: !0,
    listStylePos: g.prop("listStylePosition"),
    listStyleImage: !0,
    listStyleImg: g.prop("listStyleImage"),
  },
  ob = {
    border: "0px",
    clip: "rect(0, 0, 0, 0)",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: "0px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute",
  },
  ab = {
    position: "static",
    width: "auto",
    height: "auto",
    clip: "auto",
    padding: "0",
    margin: "0",
    overflow: "visible",
    whiteSpace: "normal",
  },
  js = function (t, r, n) {
    var i = {},
      o = xa(t, r, {});
    for (var a in o) {
      var l = a in n && n[a] != null;
      l || (i[a] = o[a]);
    }
    return i;
  },
  lb = {
    srOnly: {
      transform: function (t) {
        return t === !0 ? ob : t === "focusable" ? ab : {};
      },
    },
    layerStyle: {
      processResult: !0,
      transform: function (t, r, n) {
        return js(r, "layerStyles." + t, n);
      },
    },
    textStyle: {
      processResult: !0,
      transform: function (t, r, n) {
        return js(r, "textStyles." + t, n);
      },
    },
    apply: {
      processResult: !0,
      transform: function (t, r, n) {
        return js(r, t, n);
      },
    },
  },
  Ii = {
    position: !0,
    pos: g.prop("position"),
    zIndex: g.prop("zIndex", "zIndices"),
    inset: g.spaceT("inset"),
    insetX: g.spaceT(["left", "right"]),
    insetInline: g.spaceT("insetInline"),
    insetY: g.spaceT(["top", "bottom"]),
    insetBlock: g.spaceT("insetBlock"),
    top: g.spaceT("top"),
    insetBlockStart: g.spaceT("insetBlockStart"),
    bottom: g.spaceT("bottom"),
    insetBlockEnd: g.spaceT("insetBlockEnd"),
    left: g.spaceT("left"),
    insetInlineStart: g.logical({
      scale: "space",
      property: { ltr: "left", rtl: "right" },
    }),
    right: g.spaceT("right"),
    insetInlineEnd: g.logical({
      scale: "space",
      property: { ltr: "right", rtl: "left" },
    }),
  };
Object.assign(Ii, {
  insetStart: Ii.insetInlineStart,
  insetEnd: Ii.insetInlineEnd,
});
var ub = {
    ring: { transform: Y.ring },
    ringColor: g.colors("--chakra-ring-color"),
    ringOffset: g.prop("--chakra-ring-offset-width"),
    ringOffsetColor: g.colors("--chakra-ring-offset-color"),
    ringInset: g.prop("--chakra-ring-inset"),
  },
  J = {
    margin: g.spaceT("margin"),
    marginTop: g.spaceT("marginTop"),
    marginBlockStart: g.spaceT("marginBlockStart"),
    marginRight: g.spaceT("marginRight"),
    marginInlineEnd: g.spaceT("marginInlineEnd"),
    marginBottom: g.spaceT("marginBottom"),
    marginBlockEnd: g.spaceT("marginBlockEnd"),
    marginLeft: g.spaceT("marginLeft"),
    marginInlineStart: g.spaceT("marginInlineStart"),
    marginX: g.spaceT(["marginInlineStart", "marginInlineEnd"]),
    marginInline: g.spaceT("marginInline"),
    marginY: g.spaceT(["marginTop", "marginBottom"]),
    marginBlock: g.spaceT("marginBlock"),
    padding: g.space("padding"),
    paddingTop: g.space("paddingTop"),
    paddingBlockStart: g.space("paddingBlockStart"),
    paddingRight: g.space("paddingRight"),
    paddingBottom: g.space("paddingBottom"),
    paddingBlockEnd: g.space("paddingBlockEnd"),
    paddingLeft: g.space("paddingLeft"),
    paddingInlineStart: g.space("paddingInlineStart"),
    paddingInlineEnd: g.space("paddingInlineEnd"),
    paddingX: g.space(["paddingInlineStart", "paddingInlineEnd"]),
    paddingInline: g.space("paddingInline"),
    paddingY: g.space(["paddingTop", "paddingBottom"]),
    paddingBlock: g.space("paddingBlock"),
  };
Object.assign(J, {
  m: J.margin,
  mt: J.marginTop,
  mr: J.marginRight,
  me: J.marginInlineEnd,
  marginEnd: J.marginInlineEnd,
  mb: J.marginBottom,
  ml: J.marginLeft,
  ms: J.marginInlineStart,
  marginStart: J.marginInlineStart,
  mx: J.marginX,
  my: J.marginY,
  p: J.padding,
  pt: J.paddingTop,
  py: J.paddingY,
  px: J.paddingX,
  pb: J.paddingBottom,
  pl: J.paddingLeft,
  ps: J.paddingInlineStart,
  paddingStart: J.paddingInlineStart,
  pr: J.paddingRight,
  pe: J.paddingInlineEnd,
  paddingEnd: J.paddingInlineEnd,
});
var sb = {
    textDecorationColor: g.colors("textDecorationColor"),
    textDecoration: !0,
    textDecor: { property: "textDecoration" },
    textDecorationLine: !0,
    textDecorationStyle: !0,
    textDecorationThickness: !0,
    textUnderlineOffset: !0,
    textShadow: g.shadows("textShadow"),
  },
  cb = {
    clipPath: !0,
    transform: g.propT("transform", Y.transform),
    transformOrigin: !0,
    translateX: g.spaceT("--chakra-translate-x"),
    translateY: g.spaceT("--chakra-translate-y"),
    skewX: g.degreeT("--chakra-skew-x"),
    skewY: g.degreeT("--chakra-skew-y"),
    scaleX: g.prop("--chakra-scale-x"),
    scaleY: g.prop("--chakra-scale-y"),
    scale: g.prop(["--chakra-scale-x", "--chakra-scale-y"]),
    rotate: g.degreeT("--chakra-rotate"),
  },
  db = {
    transition: !0,
    transitionDelay: !0,
    animation: !0,
    willChange: !0,
    transitionDuration: g.prop("transitionDuration", "transition.duration"),
    transitionProperty: g.prop("transitionProperty", "transition.property"),
    transitionTimingFunction: g.prop(
      "transitionTimingFunction",
      "transition.easing"
    ),
  },
  fb = {
    fontFamily: g.prop("fontFamily", "fonts"),
    fontSize: g.prop("fontSize", "fontSizes", Y.px),
    fontWeight: g.prop("fontWeight", "fontWeights"),
    lineHeight: g.prop("lineHeight", "lineHeights"),
    letterSpacing: g.prop("letterSpacing", "letterSpacings"),
    textAlign: !0,
    fontStyle: !0,
    wordBreak: !0,
    overflowWrap: !0,
    textOverflow: !0,
    textTransform: !0,
    whiteSpace: !0,
    noOfLines: {
      static: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: "var(--chakra-line-clamp)",
      },
      property: "--chakra-line-clamp",
    },
    isTruncated: {
      transform: function (t) {
        if (t === !0)
          return {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          };
      },
    },
  };
function U0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function pb(e, t) {
  if (!!e) {
    if (typeof e == "string") return U0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return U0(e, t);
  }
}
function hb(e, t) {
  var r =
    (typeof Symbol != "undefined" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (
    Array.isArray(e) ||
    (r = pb(e)) ||
    (t && e && typeof e.length == "number")
  ) {
    r && (e = r);
    var n = 0;
    return function () {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Tr = {
    hover: function (t) {
      return t + ":hover &, " + t + "[data-hover] &";
    },
    focus: function (t) {
      return t + ":focus &, " + t + "[data-focus] &";
    },
    focusVisible: function (t) {
      return t + ":focus-visible &";
    },
    active: function (t) {
      return t + ":active &, " + t + "[data-active] &";
    },
    disabled: function (t) {
      return t + ":disabled &, " + t + "[data-disabled] &";
    },
    invalid: function (t) {
      return t + ":invalid &, " + t + "[data-invalid] &";
    },
    checked: function (t) {
      return t + ":checked &, " + t + "[data-checked] &";
    },
    indeterminate: function (t) {
      return (
        t +
        ":indeterminate &, " +
        t +
        "[aria-checked=mixed] &, " +
        t +
        "[data-indeterminate] &"
      );
    },
    readOnly: function (t) {
      return (
        t + ":read-only &, " + t + "[readonly] &, " + t + "[data-read-only] &"
      );
    },
    expanded: function (t) {
      return (
        t +
        ":read-only &, " +
        t +
        "[aria-expanded=true] &, " +
        t +
        "[data-expanded] &"
      );
    },
  },
  Rr = function (t) {
    return mb(t, "[role=group]", "[data-group]", ".group");
  },
  mb = function (t) {
    for (
      var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1;
      i < r;
      i++
    )
      n[i - 1] = arguments[i];
    return n.map(t).join(", ");
  },
  Ds = {
    _hover: "&:hover, &[data-hover]",
    _active: "&:active, &[data-active]",
    _focus: "&:focus, &[data-focus]",
    _highlighted: "&[data-highlighted]",
    _focusWithin: "&:focus-within",
    _focusVisible: "&:focus-visible",
    _disabled: "&[disabled], &[aria-disabled=true], &[data-disabled]",
    _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
    _before: "&::before",
    _after: "&::after",
    _empty: "&:empty",
    _expanded: "&[aria-expanded=true], &[data-expanded]",
    _checked: "&[aria-checked=true], &[data-checked]",
    _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
    _pressed: "&[aria-pressed=true], &[data-pressed]",
    _invalid: "&[aria-invalid=true], &[data-invalid]",
    _valid: "&[data-valid], &[data-state=valid]",
    _loading: "&[data-loading], &[aria-busy=true]",
    _selected: "&[aria-selected=true], &[data-selected]",
    _hidden: "&[hidden], &[data-hidden]",
    _autofill: "&:-webkit-autofill",
    _even: "&:nth-of-type(even)",
    _odd: "&:nth-of-type(odd)",
    _first: "&:first-of-type",
    _last: "&:last-of-type",
    _notFirst: "&:not(:first-of-type)",
    _notLast: "&:not(:last-of-type)",
    _visited: "&:visited",
    _activeLink: "&[aria-current=page]",
    _activeStep: "&[aria-current=step]",
    _indeterminate:
      "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
    _groupHover: Rr(Tr.hover),
    _groupFocus: Rr(Tr.focus),
    _groupFocusVisible: Rr(Tr.focusVisible),
    _groupActive: Rr(Tr.active),
    _groupDisabled: Rr(Tr.disabled),
    _groupInvalid: Rr(Tr.invalid),
    _groupChecked: Rr(Tr.checked),
    _placeholder: "&::placeholder",
    _fullScreen: "&:fullscreen",
    _selection: "&::selection",
    _rtl: "[dir=rtl] &",
    _mediaDark: "@media (prefers-color-scheme: dark)",
    _dark: ".chakra-ui-dark &, [data-theme=dark] &, &[data-theme=dark]",
    _light: ".chakra-ui-light &, [data-theme=light] &, &[data-theme=light]",
  },
  vb = $s(Ds),
  Ws = lt(
    {},
    Ta,
    V,
    tb,
    Ra,
    rt,
    rb,
    ub,
    nb,
    V0,
    lb,
    Ii,
    Ls,
    J,
    fb,
    sb,
    cb,
    ib,
    db
  );
Object.assign({}, J, rt, Ra, V0, Ii);
var gb = [].concat($s(Ws), vb),
  yb = gn({}, Ws, Ds),
  bb = function (t) {
    return t in yb;
  },
  Sb = function (t) {
    return function (r) {
      if (!r.__breakpoints) return t;
      var n = r.__breakpoints,
        i = n.isResponsive,
        o = n.toArrayValue,
        a = n.media,
        l = {};
      for (var u in t) {
        var s = xt(t[u], r);
        if (s != null) {
          if (((s = et(s) && i(s) ? o(s) : s), !Array.isArray(s))) {
            l[u] = s;
            continue;
          }
          for (var m = s.slice(0, a.length).length, b = 0; b < m; b += 1) {
            var v = a == null ? void 0 : a[b];
            if (!v) {
              l[u] = s[b];
              continue;
            }
            (l[v] = l[v] || {}), s[b] != null && (l[v][u] = s[b]);
          }
        }
      }
      return l;
    };
  },
  xb = function (t, r) {
    return t.startsWith("--") && Rs(r) && !y0(r);
  },
  wb = function (t, r) {
    var n, i;
    if (r == null) return r;
    var o = function (b) {
        var v, w;
        return (v = t.__cssMap) == null || (w = v[b]) == null
          ? void 0
          : w.varRef;
      },
      a = function (b) {
        var v;
        return (v = o(b)) != null ? v : b;
      },
      l = r.split(",").map(function (m) {
        return m.trim();
      }),
      u = l[0],
      s = l[1];
    return (r = (n = (i = o(u)) != null ? i : a(s)) != null ? n : a(r)), r;
  };
function kb(e) {
  var t = e.configs,
    r = t === void 0 ? {} : t,
    n = e.pseudos,
    i = n === void 0 ? {} : n,
    o = e.theme,
    a = function l(u, s) {
      s === void 0 && (s = !1);
      var m = xt(u, o),
        b = Sb(m)(o),
        v = {};
      for (var w in b) {
        var C,
          k,
          p,
          d,
          f,
          y = b[w],
          x = xt(y, o);
        w in i && (w = i[w]), xb(w, x) && (x = wb(o, x));
        var $ = r[w];
        if (($ === !0 && ($ = { property: w }), et(x))) {
          var E;
          (v[w] = (E = v[w]) != null ? E : {}), (v[w] = lt({}, v[w], l(x, !0)));
          continue;
        }
        var T =
          (C =
            (k = $) == null || k.transform == null
              ? void 0
              : k.transform(x, o, m)) != null
            ? C
            : x;
        T = (p = $) != null && p.processResult ? l(T, !0) : T;
        var M = xt((d = $) == null ? void 0 : d.property, o);
        if (!s && (f = $) != null && f.static) {
          var A = xt($.static, o);
          v = lt({}, v, A);
        }
        if (M && Array.isArray(M)) {
          for (var D = hb(M), Pe; !(Pe = D()).done; ) {
            var ee = Pe.value;
            v[ee] = T;
          }
          continue;
        }
        if (M) {
          M === "&" && et(T) ? (v = lt({}, v, T)) : (v[M] = T);
          continue;
        }
        if (et(T)) {
          v = lt({}, v, T);
          continue;
        }
        v[w] = T;
      }
      return v;
    };
  return a;
}
var G0 = function (t) {
  return function (r) {
    var n = kb({ theme: r, pseudos: Ds, configs: Ws });
    return n(t);
  };
};
function Y0(e) {
  return et(e) && e.reference ? e.reference : String(e);
}
var Pa = function (t) {
    for (
      var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1;
      i < r;
      i++
    )
      n[i - 1] = arguments[i];
    return n
      .map(Y0)
      .join(" " + t + " ")
      .replace(/calc/g, "");
  },
  Q0 = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return "calc(" + Pa.apply(void 0, ["+"].concat(r)) + ")";
  },
  X0 = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return "calc(" + Pa.apply(void 0, ["-"].concat(r)) + ")";
  },
  Hs = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return "calc(" + Pa.apply(void 0, ["*"].concat(r)) + ")";
  },
  K0 = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return "calc(" + Pa.apply(void 0, ["/"].concat(r)) + ")";
  },
  q0 = function (t) {
    var r = Y0(t);
    return r != null && !Number.isNaN(parseFloat(r))
      ? String(r).startsWith("-")
        ? String(r).slice(1)
        : "-" + r
      : Hs(r, -1);
  },
  Pr = Object.assign(
    function (e) {
      return {
        add: function () {
          for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
            n[i] = arguments[i];
          return Pr(Q0.apply(void 0, [e].concat(n)));
        },
        subtract: function () {
          for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
            n[i] = arguments[i];
          return Pr(X0.apply(void 0, [e].concat(n)));
        },
        multiply: function () {
          for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
            n[i] = arguments[i];
          return Pr(Hs.apply(void 0, [e].concat(n)));
        },
        divide: function () {
          for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
            n[i] = arguments[i];
          return Pr(K0.apply(void 0, [e].concat(n)));
        },
        negate: function () {
          return Pr(q0(e));
        },
        toString: function () {
          return e.toString();
        },
      };
    },
    { add: Q0, subtract: X0, multiply: Hs, divide: K0, negate: q0 }
  );
function _b(e, t) {
  return t === void 0 && (t = "-"), e.replace(/\s+/g, t);
}
function Z0(e) {
  var t = _b(e.toString());
  if (t.includes("\\.")) return e;
  var r = !Number.isInteger(parseFloat(e.toString()));
  return r ? t.replace(".", "\\.") : e;
}
function Cb(e, t) {
  return t === void 0 && (t = ""), [t, Z0(e)].filter(Boolean).join("-");
}
function Eb(e, t) {
  return "var(" + Z0(e) + (t ? ", " + t : "") + ")";
}
function Tb(e, t) {
  return t === void 0 && (t = ""), "--" + Cb(e, t);
}
function J0(e, t, r) {
  var n = Tb(e, r);
  return { variable: n, reference: Eb(n, t) };
}
function Rb(e, t) {
  var r = { cssMap: {}, cssVars: {} };
  return (
    c1(e, function (n, i) {
      var o,
        a = i[0],
        l = (o = Vs[a]) != null ? o : Vs.defaultHandler,
        u = l(i, n, t),
        s = u.cssVars,
        m = u.cssMap;
      Object.assign(r.cssVars, s), Object.assign(r.cssMap, m);
    }),
    r
  );
}
var Vs = {
  space: function (t, r, n) {
    var i,
      o = Vs.defaultHandler(t, r, n),
      a = t[0],
      l = t.slice(1),
      u = a + ".-" + l.join("."),
      s = t.join("-"),
      m = J0(s, void 0, n.cssVarPrefix),
      b = m.variable,
      v = m.reference,
      w = Pr.negate(r),
      C = Pr.negate(v);
    return {
      cssVars: o.cssVars,
      cssMap: gn(
        {},
        o.cssMap,
        ((i = {}), (i[u] = { value: "" + w, var: "" + b, varRef: C }), i)
      ),
    };
  },
  defaultHandler: function (t, r, n) {
    var i,
      o,
      a = t.join("."),
      l = t.join("-"),
      u = J0(l, void 0, n.cssVarPrefix),
      s = u.variable,
      m = u.reference;
    return {
      cssVars: ((i = {}), (i[s] = r), i),
      cssMap: ((o = {}), (o[a] = { value: r, var: s, varRef: m }), o),
    };
  },
};
function Pb(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var $b = ["__cssMap", "__cssVars", "__breakpoints"],
  zb = [
    "colors",
    "borders",
    "borderWidths",
    "borderStyles",
    "fonts",
    "fontSizes",
    "fontWeights",
    "letterSpacings",
    "lineHeights",
    "radii",
    "space",
    "shadows",
    "sizes",
    "zIndices",
    "transition",
    "blur",
  ];
function Ab(e) {
  var t = zb;
  return Jy(e, t);
}
function Ib(e) {
  e.__cssMap, e.__cssVars, e.__breakpoints;
  var t = Pb(e, $b);
  return t;
}
function Ob(e) {
  var t,
    r = Ib(e),
    n = Ab(r),
    i = (t = r.config) == null ? void 0 : t.cssVarPrefix,
    o = Rb(n, { cssVarPrefix: i }),
    a = o.cssMap,
    l = o.cssVars,
    u = {
      "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-ring-offset-width": "0px",
      "--chakra-ring-offset-color": "#fff",
      "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
      "--chakra-ring-offset-shadow": "0 0 #0000",
      "--chakra-ring-shadow": "0 0 #0000",
      "--chakra-space-x-reverse": "0",
      "--chakra-space-y-reverse": "0",
    };
  return (
    Object.assign(r, {
      __cssVars: gn({}, u, l),
      __cssMap: a,
      __breakpoints: o1(r.breakpoints),
    }),
    r
  );
}
var Bb = typeof Element != "undefined",
  Mb = typeof Map == "function",
  Fb = typeof Set == "function",
  Nb = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function $a(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var r, n, i;
    if (Array.isArray(e)) {
      if (((r = e.length), r != t.length)) return !1;
      for (n = r; n-- != 0; ) if (!$a(e[n], t[n])) return !1;
      return !0;
    }
    var o;
    if (Mb && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!t.has(n.value[0])) return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!$a(n.value[1], t.get(n.value[0]))) return !1;
      return !0;
    }
    if (Fb && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!t.has(n.value[0])) return !1;
      return !0;
    }
    if (Nb && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((r = e.length), r != t.length)) return !1;
      for (n = r; n-- != 0; ) if (e[n] !== t[n]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    if (((i = Object.keys(e)), (r = i.length), r !== Object.keys(t).length))
      return !1;
    for (n = r; n-- != 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[n])) return !1;
    if (Bb && e instanceof Element) return !1;
    for (n = r; n-- != 0; )
      if (
        !(
          (i[n] === "_owner" || i[n] === "__v" || i[n] === "__o") &&
          e.$$typeof
        ) &&
        !$a(e[i[n]], t[i[n]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Lb = function (t, r) {
    try {
      return $a(t, r);
    } catch (n) {
      if ((n.message || "").match(/stack|recursion/i))
        return (
          console.warn("react-fast-compare cannot handle circular refs"), !1
        );
      throw n;
    }
  },
  jb =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Db = i0(function (e) {
    return (
      jb.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  Wb = Db,
  Hb = function (t) {
    return t !== "theme";
  },
  eh = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? Wb : Hb;
  },
  th = function (t, r, n) {
    var i;
    if (r) {
      var o = r.shouldForwardProp;
      i =
        t.__emotion_forwardProp && o
          ? function (a) {
              return t.__emotion_forwardProp(a) && o(a);
            }
          : o;
    }
    return typeof i != "function" && n && (i = t.__emotion_forwardProp), i;
  },
  Vb = function () {
    return null;
  },
  Ub = function e(t, r) {
    var n = t.__emotion_real === t,
      i = (n && t.__emotion_base) || t,
      o,
      a;
    r !== void 0 && ((o = r.label), (a = r.target));
    var l = th(t, r, n),
      u = l || eh(i),
      s = !u("as");
    return function () {
      var m = arguments,
        b =
          n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (o !== void 0 && b.push("label:" + o + ";"),
        m[0] == null || m[0].raw === void 0)
      )
        b.push.apply(b, m);
      else {
        b.push(m[0][0]);
        for (var v = m.length, w = 1; w < v; w++) b.push(m[w], m[0][w]);
      }
      var C = v0(function (k, p, d) {
        var f = (s && k.as) || i,
          y = "",
          x = [],
          $ = k;
        if (k.theme == null) {
          $ = {};
          for (var E in k) $[E] = k[E];
          $.theme = R.exports.useContext(Ti);
        }
        typeof k.className == "string"
          ? (y = Ny(p.registered, x, k.className))
          : k.className != null && (y = k.className + " ");
        var T = _s(b.concat(x), p.registered, $);
        c0(p, T, typeof f == "string"),
          (y += p.key + "-" + T.name),
          a !== void 0 && (y += " " + a);
        var M = s && l === void 0 ? eh(f) : u,
          A = {};
        for (var D in k) (s && D === "as") || (M(D) && (A[D] = k[D]));
        (A.className = y), (A.ref = d);
        var Pe = R.exports.createElement(f, A),
          ee = R.exports.createElement(Vb, null);
        return R.exports.createElement(R.exports.Fragment, null, ee, Pe);
      });
      return (
        (C.displayName =
          o !== void 0
            ? o
            : "Styled(" +
              (typeof i == "string"
                ? i
                : i.displayName || i.name || "Component") +
              ")"),
        (C.defaultProps = t.defaultProps),
        (C.__emotion_real = C),
        (C.__emotion_base = i),
        (C.__emotion_styles = b),
        (C.__emotion_forwardProp = l),
        Object.defineProperty(C, "toString", {
          value: function () {
            return "." + a;
          },
        }),
        (C.withComponent = function (k, p) {
          return e(k, ca({}, r, p, { shouldForwardProp: th(C, p, !0) })).apply(
            void 0,
            b
          );
        }),
        C
      );
    };
  },
  Gb = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  Us = Ub.bind();
Gb.forEach(function (e) {
  Us[e] = Us(e);
});
function Gs() {
  return (
    (Gs =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Gs.apply(this, arguments)
  );
}
var Yb = function (t) {
  var r = t.cssVarsRoot,
    n = r === void 0 ? ":host, :root" : r,
    i = t.theme,
    o = t.children,
    a = R.exports.useMemo(
      function () {
        return Ob(i);
      },
      [i]
    );
  return R.exports.createElement(
    Gy,
    { theme: a },
    R.exports.createElement(Cs, {
      styles: function (u) {
        var s;
        return (s = {}), (s[n] = u.__cssVars), s;
      },
    }),
    o
  );
};
function Qb() {
  var e = R.exports.useContext(Ti);
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var Xb = $i({
    name: "StylesContext",
    errorMessage:
      "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` ",
  }),
  rh = Xb[1],
  Kb = function () {
    var t = L0(),
      r = t.colorMode;
    return R.exports.createElement(Cs, {
      styles: function (i) {
        var o = xa(i, "styles.global"),
          a = xt(o, { theme: i, colorMode: r });
        if (!!a) {
          var l = G0(a)(i);
          return l;
        }
      },
    });
  },
  qb = [
    "a",
    "b",
    "article",
    "aside",
    "blockquote",
    "button",
    "caption",
    "cite",
    "circle",
    "code",
    "dd",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hr",
    "img",
    "input",
    "kbd",
    "label",
    "li",
    "main",
    "mark",
    "nav",
    "ol",
    "p",
    "path",
    "pre",
    "q",
    "rect",
    "s",
    "svg",
    "section",
    "select",
    "strong",
    "small",
    "span",
    "sub",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "tr",
    "ul",
  ];
function Oi(e) {
  return b0(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
function Zb() {
  var e = L0(),
    t = Qb();
  return Gs({}, e, { theme: t });
}
function Ys(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Jb = new Set(
    [].concat(gb, [
      "textStyle",
      "layerStyle",
      "apply",
      "isTruncated",
      "noOfLines",
      "focusBorderColor",
      "errorBorderColor",
      "as",
      "__css",
      "css",
      "sx",
    ])
  ),
  eS = new Set(["htmlWidth", "htmlHeight", "htmlSize"]),
  tS = function (t) {
    return eS.has(t) || !Jb.has(t);
  },
  rS = ["theme", "css", "__css", "sx"],
  nS = ["baseStyle"],
  iS = function (t) {
    var r = t.baseStyle;
    return function (n) {
      n.theme;
      var i = n.css,
        o = n.__css,
        a = n.sx,
        l = Ys(n, rS),
        u = S0(l, function (v, w) {
          return bb(w);
        }),
        s = xt(r, n),
        m = Object.assign({}, o, s, Ps(u), a),
        b = G0(m)(n.theme);
      return i ? [b, i] : b;
    };
  };
function oS(e, t) {
  var r = t != null ? t : {},
    n = r.baseStyle,
    i = Ys(r, nS);
  i.shouldForwardProp || (i.shouldForwardProp = tS);
  var o = iS({ baseStyle: n });
  return Us(e, i)(o);
}
var fe = oS;
qb.forEach(function (e) {
  fe[e] = fe(e);
});
function Ne(e) {
  return R.exports.forwardRef(e);
}
var aS = ["styleConfig"];
function Bi(e, t, r) {
  var n;
  t === void 0 && (t = {}), r === void 0 && (r = {});
  var i = t,
    o = i.styleConfig,
    a = Ys(i, aS),
    l = Zb(),
    u = l.theme,
    s = l.colorMode,
    m = xa(u, "components." + e),
    b = o || m,
    v = lt(
      { theme: u, colorMode: s },
      (n = b == null ? void 0 : b.defaultProps) != null ? n : {},
      Ps(b0(a, ["children"]))
    ),
    w = R.exports.useRef({});
  if (b) {
    var C,
      k,
      p,
      d,
      f,
      y,
      x = xt((C = b.baseStyle) != null ? C : {}, v),
      $ = xt(
        (k = (p = b.variants) == null ? void 0 : p[v.variant]) != null ? k : {},
        v
      ),
      E = xt(
        (d = (f = b.sizes) == null ? void 0 : f[v.size]) != null ? d : {},
        v
      ),
      T = lt({}, x, E, $);
    (y = r) != null &&
      y.isMultiPart &&
      b.parts &&
      b.parts.forEach(function (A) {
        var D;
        T[A] = (D = T[A]) != null ? D : {};
      });
    var M = Lb(w.current, T);
    M || (w.current = T);
  }
  return w.current;
}
function lS(e, t) {
  return Bi(e, t, { isMultiPart: !0 });
}
var uS = function (t) {
  var r = t.children,
    n = t.colorModeManager,
    i = t.portalZIndex,
    o = t.resetCSS,
    a = o === void 0 ? !0 : o,
    l = t.theme,
    u = l === void 0 ? {} : l,
    s = t.environment,
    m = t.cssVarsRoot,
    b = R.exports.createElement(P1, { environment: s }, r);
  return R.exports.createElement(
    f1,
    null,
    R.exports.createElement(
      Yb,
      { theme: u, cssVarsRoot: m },
      R.exports.createElement(
        F1,
        { colorModeManager: n, options: u.config },
        a && R.exports.createElement(Xy, null),
        R.exports.createElement(Kb, null),
        i ? R.exports.createElement(g1, { zIndex: i }, b) : b
      )
    )
  );
};
function we(e, t) {
  sS(e) && (e = "100%");
  var r = cS(e);
  return (
    (e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
    r && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6
      ? 1
      : (t === 360
          ? (e = (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)))
          : (e = (e % t) / parseFloat(String(t))),
        e)
  );
}
function za(e) {
  return Math.min(1, Math.max(0, e));
}
function sS(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function cS(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function nh(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Aa(e) {
  return e <= 1 ? Number(e) * 100 + "%" : e;
}
function $r(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function dS(e, t, r) {
  return { r: we(e, 255) * 255, g: we(t, 255) * 255, b: we(r, 255) * 255 };
}
function ih(e, t, r) {
  (e = we(e, 255)), (t = we(t, 255)), (r = we(r, 255));
  var n = Math.max(e, t, r),
    i = Math.min(e, t, r),
    o = 0,
    a = 0,
    l = (n + i) / 2;
  if (n === i) (a = 0), (o = 0);
  else {
    var u = n - i;
    switch (((a = l > 0.5 ? u / (2 - n - i) : u / (n + i)), n)) {
      case e:
        o = (t - r) / u + (t < r ? 6 : 0);
        break;
      case t:
        o = (r - e) / u + 2;
        break;
      case r:
        o = (e - t) / u + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: a, l };
}
function Qs(e, t, r) {
  return (
    r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6
      ? e + (t - e) * (6 * r)
      : r < 1 / 2
      ? t
      : r < 2 / 3
      ? e + (t - e) * (2 / 3 - r) * 6
      : e
  );
}
function fS(e, t, r) {
  var n, i, o;
  if (((e = we(e, 360)), (t = we(t, 100)), (r = we(r, 100)), t === 0))
    (i = r), (o = r), (n = r);
  else {
    var a = r < 0.5 ? r * (1 + t) : r + t - r * t,
      l = 2 * r - a;
    (n = Qs(l, a, e + 1 / 3)), (i = Qs(l, a, e)), (o = Qs(l, a, e - 1 / 3));
  }
  return { r: n * 255, g: i * 255, b: o * 255 };
}
function oh(e, t, r) {
  (e = we(e, 255)), (t = we(t, 255)), (r = we(r, 255));
  var n = Math.max(e, t, r),
    i = Math.min(e, t, r),
    o = 0,
    a = n,
    l = n - i,
    u = n === 0 ? 0 : l / n;
  if (n === i) o = 0;
  else {
    switch (n) {
      case e:
        o = (t - r) / l + (t < r ? 6 : 0);
        break;
      case t:
        o = (r - e) / l + 2;
        break;
      case r:
        o = (e - t) / l + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: u, v: a };
}
function pS(e, t, r) {
  (e = we(e, 360) * 6), (t = we(t, 100)), (r = we(r, 100));
  var n = Math.floor(e),
    i = e - n,
    o = r * (1 - t),
    a = r * (1 - i * t),
    l = r * (1 - (1 - i) * t),
    u = n % 6,
    s = [r, a, o, o, l, r][u],
    m = [l, r, r, a, o, o][u],
    b = [o, o, l, r, r, a][u];
  return { r: s * 255, g: m * 255, b: b * 255 };
}
function ah(e, t, r, n) {
  var i = [
    $r(Math.round(e).toString(16)),
    $r(Math.round(t).toString(16)),
    $r(Math.round(r).toString(16)),
  ];
  return n &&
    i[0].startsWith(i[0].charAt(1)) &&
    i[1].startsWith(i[1].charAt(1)) &&
    i[2].startsWith(i[2].charAt(1))
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join("");
}
function hS(e, t, r, n, i) {
  var o = [
    $r(Math.round(e).toString(16)),
    $r(Math.round(t).toString(16)),
    $r(Math.round(r).toString(16)),
    $r(mS(n)),
  ];
  return i &&
    o[0].startsWith(o[0].charAt(1)) &&
    o[1].startsWith(o[1].charAt(1)) &&
    o[2].startsWith(o[2].charAt(1)) &&
    o[3].startsWith(o[3].charAt(1))
    ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0)
    : o.join("");
}
function mS(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function lh(e) {
  return Ue(e) / 255;
}
function Ue(e) {
  return parseInt(e, 16);
}
function vS(e) {
  return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 };
}
var Xs = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32",
};
function gS(e) {
  var t = { r: 0, g: 0, b: 0 },
    r = 1,
    n = null,
    i = null,
    o = null,
    a = !1,
    l = !1;
  return (
    typeof e == "string" && (e = SS(e)),
    typeof e == "object" &&
      (Bt(e.r) && Bt(e.g) && Bt(e.b)
        ? ((t = dS(e.r, e.g, e.b)),
          (a = !0),
          (l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb"))
        : Bt(e.h) && Bt(e.s) && Bt(e.v)
        ? ((n = Aa(e.s)),
          (i = Aa(e.v)),
          (t = pS(e.h, n, i)),
          (a = !0),
          (l = "hsv"))
        : Bt(e.h) &&
          Bt(e.s) &&
          Bt(e.l) &&
          ((n = Aa(e.s)),
          (o = Aa(e.l)),
          (t = fS(e.h, n, o)),
          (a = !0),
          (l = "hsl")),
      Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)),
    (r = nh(r)),
    {
      ok: a,
      format: e.format || l,
      r: Math.min(255, Math.max(t.r, 0)),
      g: Math.min(255, Math.max(t.g, 0)),
      b: Math.min(255, Math.max(t.b, 0)),
      a: r,
    }
  );
}
var yS = "[-\\+]?\\d+%?",
  bS = "[-\\+]?\\d*\\.\\d+%?",
  or = "(?:" + bS + ")|(?:" + yS + ")",
  Ks = "[\\s|\\(]+(" + or + ")[,|\\s]+(" + or + ")[,|\\s]+(" + or + ")\\s*\\)?",
  qs =
    "[\\s|\\(]+(" +
    or +
    ")[,|\\s]+(" +
    or +
    ")[,|\\s]+(" +
    or +
    ")[,|\\s]+(" +
    or +
    ")\\s*\\)?",
  st = {
    CSS_UNIT: new RegExp(or),
    rgb: new RegExp("rgb" + Ks),
    rgba: new RegExp("rgba" + qs),
    hsl: new RegExp("hsl" + Ks),
    hsla: new RegExp("hsla" + qs),
    hsv: new RegExp("hsv" + Ks),
    hsva: new RegExp("hsva" + qs),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  };
function SS(e) {
  if (((e = e.trim().toLowerCase()), e.length === 0)) return !1;
  var t = !1;
  if (Xs[e]) (e = Xs[e]), (t = !0);
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = st.rgb.exec(e);
  return r
    ? { r: r[1], g: r[2], b: r[3] }
    : ((r = st.rgba.exec(e)),
      r
        ? { r: r[1], g: r[2], b: r[3], a: r[4] }
        : ((r = st.hsl.exec(e)),
          r
            ? { h: r[1], s: r[2], l: r[3] }
            : ((r = st.hsla.exec(e)),
              r
                ? { h: r[1], s: r[2], l: r[3], a: r[4] }
                : ((r = st.hsv.exec(e)),
                  r
                    ? { h: r[1], s: r[2], v: r[3] }
                    : ((r = st.hsva.exec(e)),
                      r
                        ? { h: r[1], s: r[2], v: r[3], a: r[4] }
                        : ((r = st.hex8.exec(e)),
                          r
                            ? {
                                r: Ue(r[1]),
                                g: Ue(r[2]),
                                b: Ue(r[3]),
                                a: lh(r[4]),
                                format: t ? "name" : "hex8",
                              }
                            : ((r = st.hex6.exec(e)),
                              r
                                ? {
                                    r: Ue(r[1]),
                                    g: Ue(r[2]),
                                    b: Ue(r[3]),
                                    format: t ? "name" : "hex",
                                  }
                                : ((r = st.hex4.exec(e)),
                                  r
                                    ? {
                                        r: Ue(r[1] + r[1]),
                                        g: Ue(r[2] + r[2]),
                                        b: Ue(r[3] + r[3]),
                                        a: lh(r[4] + r[4]),
                                        format: t ? "name" : "hex8",
                                      }
                                    : ((r = st.hex3.exec(e)),
                                      r
                                        ? {
                                            r: Ue(r[1] + r[1]),
                                            g: Ue(r[2] + r[2]),
                                            b: Ue(r[3] + r[3]),
                                            format: t ? "name" : "hex",
                                          }
                                        : !1)))))))));
}
function Bt(e) {
  return Boolean(st.CSS_UNIT.exec(String(e)));
}
var Mi = (function () {
  function e(t, r) {
    t === void 0 && (t = ""), r === void 0 && (r = {});
    var n;
    if (t instanceof e) return t;
    typeof t == "number" && (t = vS(t)), (this.originalInput = t);
    var i = gS(t);
    (this.originalInput = t),
      (this.r = i.r),
      (this.g = i.g),
      (this.b = i.b),
      (this.a = i.a),
      (this.roundA = Math.round(100 * this.a) / 100),
      (this.format = (n = r.format) !== null && n !== void 0 ? n : i.format),
      (this.gradientType = r.gradientType),
      this.r < 1 && (this.r = Math.round(this.r)),
      this.g < 1 && (this.g = Math.round(this.g)),
      this.b < 1 && (this.b = Math.round(this.b)),
      (this.isValid = i.ok);
  }
  return (
    (e.prototype.isDark = function () {
      return this.getBrightness() < 128;
    }),
    (e.prototype.isLight = function () {
      return !this.isDark();
    }),
    (e.prototype.getBrightness = function () {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }),
    (e.prototype.getLuminance = function () {
      var t = this.toRgb(),
        r,
        n,
        i,
        o = t.r / 255,
        a = t.g / 255,
        l = t.b / 255;
      return (
        o <= 0.03928
          ? (r = o / 12.92)
          : (r = Math.pow((o + 0.055) / 1.055, 2.4)),
        a <= 0.03928
          ? (n = a / 12.92)
          : (n = Math.pow((a + 0.055) / 1.055, 2.4)),
        l <= 0.03928
          ? (i = l / 12.92)
          : (i = Math.pow((l + 0.055) / 1.055, 2.4)),
        0.2126 * r + 0.7152 * n + 0.0722 * i
      );
    }),
    (e.prototype.getAlpha = function () {
      return this.a;
    }),
    (e.prototype.setAlpha = function (t) {
      return (
        (this.a = nh(t)), (this.roundA = Math.round(100 * this.a) / 100), this
      );
    }),
    (e.prototype.toHsv = function () {
      var t = oh(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }),
    (e.prototype.toHsvString = function () {
      var t = oh(this.r, this.g, this.b),
        r = Math.round(t.h * 360),
        n = Math.round(t.s * 100),
        i = Math.round(t.v * 100);
      return this.a === 1
        ? "hsv(" + r + ", " + n + "%, " + i + "%)"
        : "hsva(" + r + ", " + n + "%, " + i + "%, " + this.roundA + ")";
    }),
    (e.prototype.toHsl = function () {
      var t = ih(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }),
    (e.prototype.toHslString = function () {
      var t = ih(this.r, this.g, this.b),
        r = Math.round(t.h * 360),
        n = Math.round(t.s * 100),
        i = Math.round(t.l * 100);
      return this.a === 1
        ? "hsl(" + r + ", " + n + "%, " + i + "%)"
        : "hsla(" + r + ", " + n + "%, " + i + "%, " + this.roundA + ")";
    }),
    (e.prototype.toHex = function (t) {
      return t === void 0 && (t = !1), ah(this.r, this.g, this.b, t);
    }),
    (e.prototype.toHexString = function (t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }),
    (e.prototype.toHex8 = function (t) {
      return t === void 0 && (t = !1), hS(this.r, this.g, this.b, this.a, t);
    }),
    (e.prototype.toHex8String = function (t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }),
    (e.prototype.toRgb = function () {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a,
      };
    }),
    (e.prototype.toRgbString = function () {
      var t = Math.round(this.r),
        r = Math.round(this.g),
        n = Math.round(this.b);
      return this.a === 1
        ? "rgb(" + t + ", " + r + ", " + n + ")"
        : "rgba(" + t + ", " + r + ", " + n + ", " + this.roundA + ")";
    }),
    (e.prototype.toPercentageRgb = function () {
      var t = function (r) {
        return Math.round(we(r, 255) * 100) + "%";
      };
      return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a };
    }),
    (e.prototype.toPercentageRgbString = function () {
      var t = function (r) {
        return Math.round(we(r, 255) * 100);
      };
      return this.a === 1
        ? "rgb(" + t(this.r) + "%, " + t(this.g) + "%, " + t(this.b) + "%)"
        : "rgba(" +
            t(this.r) +
            "%, " +
            t(this.g) +
            "%, " +
            t(this.b) +
            "%, " +
            this.roundA +
            ")";
    }),
    (e.prototype.toName = function () {
      if (this.a === 0) return "transparent";
      if (this.a < 1) return !1;
      for (
        var t = "#" + ah(this.r, this.g, this.b, !1),
          r = 0,
          n = Object.entries(Xs);
        r < n.length;
        r++
      ) {
        var i = n[r],
          o = i[0],
          a = i[1];
        if (t === a) return o;
      }
      return !1;
    }),
    (e.prototype.toString = function (t) {
      var r = Boolean(t);
      t = t != null ? t : this.format;
      var n = !1,
        i = this.a < 1 && this.a >= 0,
        o = !r && i && (t.startsWith("hex") || t === "name");
      return o
        ? t === "name" && this.a === 0
          ? this.toName()
          : this.toRgbString()
        : (t === "rgb" && (n = this.toRgbString()),
          t === "prgb" && (n = this.toPercentageRgbString()),
          (t === "hex" || t === "hex6") && (n = this.toHexString()),
          t === "hex3" && (n = this.toHexString(!0)),
          t === "hex4" && (n = this.toHex8String(!0)),
          t === "hex8" && (n = this.toHex8String()),
          t === "name" && (n = this.toName()),
          t === "hsl" && (n = this.toHslString()),
          t === "hsv" && (n = this.toHsvString()),
          n || this.toHexString());
    }),
    (e.prototype.toNumber = function () {
      return (
        (Math.round(this.r) << 16) +
        (Math.round(this.g) << 8) +
        Math.round(this.b)
      );
    }),
    (e.prototype.clone = function () {
      return new e(this.toString());
    }),
    (e.prototype.lighten = function (t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return (r.l += t / 100), (r.l = za(r.l)), new e(r);
    }),
    (e.prototype.brighten = function (t) {
      t === void 0 && (t = 10);
      var r = this.toRgb();
      return (
        (r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100))))),
        (r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100))))),
        (r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100))))),
        new e(r)
      );
    }),
    (e.prototype.darken = function (t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return (r.l -= t / 100), (r.l = za(r.l)), new e(r);
    }),
    (e.prototype.tint = function (t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }),
    (e.prototype.shade = function (t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }),
    (e.prototype.desaturate = function (t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return (r.s -= t / 100), (r.s = za(r.s)), new e(r);
    }),
    (e.prototype.saturate = function (t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return (r.s += t / 100), (r.s = za(r.s)), new e(r);
    }),
    (e.prototype.greyscale = function () {
      return this.desaturate(100);
    }),
    (e.prototype.spin = function (t) {
      var r = this.toHsl(),
        n = (r.h + t) % 360;
      return (r.h = n < 0 ? 360 + n : n), new e(r);
    }),
    (e.prototype.mix = function (t, r) {
      r === void 0 && (r = 50);
      var n = this.toRgb(),
        i = new e(t).toRgb(),
        o = r / 100,
        a = {
          r: (i.r - n.r) * o + n.r,
          g: (i.g - n.g) * o + n.g,
          b: (i.b - n.b) * o + n.b,
          a: (i.a - n.a) * o + n.a,
        };
      return new e(a);
    }),
    (e.prototype.analogous = function (t, r) {
      t === void 0 && (t = 6), r === void 0 && (r = 30);
      var n = this.toHsl(),
        i = 360 / r,
        o = [this];
      for (n.h = (n.h - ((i * t) >> 1) + 720) % 360; --t; )
        (n.h = (n.h + i) % 360), o.push(new e(n));
      return o;
    }),
    (e.prototype.complement = function () {
      var t = this.toHsl();
      return (t.h = (t.h + 180) % 360), new e(t);
    }),
    (e.prototype.monochromatic = function (t) {
      t === void 0 && (t = 6);
      for (
        var r = this.toHsv(), n = r.h, i = r.s, o = r.v, a = [], l = 1 / t;
        t--;

      )
        a.push(new e({ h: n, s: i, v: o })), (o = (o + l) % 1);
      return a;
    }),
    (e.prototype.splitcomplement = function () {
      var t = this.toHsl(),
        r = t.h;
      return [
        this,
        new e({ h: (r + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (r + 216) % 360, s: t.s, l: t.l }),
      ];
    }),
    (e.prototype.onBackground = function (t) {
      var r = this.toRgb(),
        n = new e(t).toRgb();
      return new e({
        r: n.r + (r.r - n.r) * r.a,
        g: n.g + (r.g - n.g) * r.a,
        b: n.b + (r.b - n.b) * r.a,
      });
    }),
    (e.prototype.triad = function () {
      return this.polyad(3);
    }),
    (e.prototype.tetrad = function () {
      return this.polyad(4);
    }),
    (e.prototype.polyad = function (t) {
      for (
        var r = this.toHsl(), n = r.h, i = [this], o = 360 / t, a = 1;
        a < t;
        a++
      )
        i.push(new e({ h: (n + a * o) % 360, s: r.s, l: r.l }));
      return i;
    }),
    (e.prototype.equals = function (t) {
      return this.toRgbString() === new e(t).toRgbString();
    }),
    e
  );
})();
function uh(e) {
  if ((e === void 0 && (e = {}), e.count !== void 0 && e.count !== null)) {
    var t = e.count,
      r = [];
    for (e.count = void 0; t > r.length; )
      (e.count = null), e.seed && (e.seed += 1), r.push(uh(e));
    return (e.count = t), r;
  }
  var n = xS(e.hue, e.seed),
    i = wS(n, e),
    o = kS(n, i, e),
    a = { h: n, s: i, v: o };
  return e.alpha !== void 0 && (a.a = e.alpha), new Mi(a);
}
function xS(e, t) {
  var r = CS(e),
    n = Ia(r, t);
  return n < 0 && (n = 360 + n), n;
}
function wS(e, t) {
  if (t.hue === "monochrome") return 0;
  if (t.luminosity === "random") return Ia([0, 100], t.seed);
  var r = sh(e).saturationRange,
    n = r[0],
    i = r[1];
  switch (t.luminosity) {
    case "bright":
      n = 55;
      break;
    case "dark":
      n = i - 10;
      break;
    case "light":
      i = 55;
      break;
  }
  return Ia([n, i], t.seed);
}
function kS(e, t, r) {
  var n = _S(e, t),
    i = 100;
  switch (r.luminosity) {
    case "dark":
      i = n + 20;
      break;
    case "light":
      n = (i + n) / 2;
      break;
    case "random":
      (n = 0), (i = 100);
      break;
  }
  return Ia([n, i], r.seed);
}
function _S(e, t) {
  for (var r = sh(e).lowerBounds, n = 0; n < r.length - 1; n++) {
    var i = r[n][0],
      o = r[n][1],
      a = r[n + 1][0],
      l = r[n + 1][1];
    if (t >= i && t <= a) {
      var u = (l - o) / (a - i),
        s = o - u * i;
      return u * t + s;
    }
  }
  return 0;
}
function CS(e) {
  var t = parseInt(e, 10);
  if (!Number.isNaN(t) && t < 360 && t > 0) return [t, t];
  if (typeof e == "string") {
    var r = dh.find(function (a) {
      return a.name === e;
    });
    if (r) {
      var n = ch(r);
      if (n.hueRange) return n.hueRange;
    }
    var i = new Mi(e);
    if (i.isValid) {
      var o = i.toHsv().h;
      return [o, o];
    }
  }
  return [0, 360];
}
function sh(e) {
  e >= 334 && e <= 360 && (e -= 360);
  for (var t = 0, r = dh; t < r.length; t++) {
    var n = r[t],
      i = ch(n);
    if (i.hueRange && e >= i.hueRange[0] && e <= i.hueRange[1]) return i;
  }
  throw Error("Color not found");
}
function Ia(e, t) {
  if (t === void 0) return Math.floor(e[0] + Math.random() * (e[1] + 1 - e[0]));
  var r = e[1] || 1,
    n = e[0] || 0;
  t = (t * 9301 + 49297) % 233280;
  var i = t / 233280;
  return Math.floor(n + i * (r - n));
}
function ch(e) {
  var t = e.lowerBounds[0][0],
    r = e.lowerBounds[e.lowerBounds.length - 1][0],
    n = e.lowerBounds[e.lowerBounds.length - 1][1],
    i = e.lowerBounds[0][1];
  return {
    name: e.name,
    hueRange: e.hueRange,
    lowerBounds: e.lowerBounds,
    saturationRange: [t, r],
    brightnessRange: [n, i],
  };
}
var dh = [
    {
      name: "monochrome",
      hueRange: null,
      lowerBounds: [
        [0, 0],
        [100, 0],
      ],
    },
    {
      name: "red",
      hueRange: [-26, 18],
      lowerBounds: [
        [20, 100],
        [30, 92],
        [40, 89],
        [50, 85],
        [60, 78],
        [70, 70],
        [80, 60],
        [90, 55],
        [100, 50],
      ],
    },
    {
      name: "orange",
      hueRange: [19, 46],
      lowerBounds: [
        [20, 100],
        [30, 93],
        [40, 88],
        [50, 86],
        [60, 85],
        [70, 70],
        [100, 70],
      ],
    },
    {
      name: "yellow",
      hueRange: [47, 62],
      lowerBounds: [
        [25, 100],
        [40, 94],
        [50, 89],
        [60, 86],
        [70, 84],
        [80, 82],
        [90, 80],
        [100, 75],
      ],
    },
    {
      name: "green",
      hueRange: [63, 178],
      lowerBounds: [
        [30, 100],
        [40, 90],
        [50, 85],
        [60, 81],
        [70, 74],
        [80, 64],
        [90, 50],
        [100, 40],
      ],
    },
    {
      name: "blue",
      hueRange: [179, 257],
      lowerBounds: [
        [20, 100],
        [30, 86],
        [40, 80],
        [50, 74],
        [60, 60],
        [70, 52],
        [80, 44],
        [90, 39],
        [100, 35],
      ],
    },
    {
      name: "purple",
      hueRange: [258, 282],
      lowerBounds: [
        [20, 100],
        [30, 87],
        [40, 79],
        [50, 70],
        [60, 65],
        [70, 59],
        [80, 52],
        [90, 45],
        [100, 42],
      ],
    },
    {
      name: "pink",
      hueRange: [283, 334],
      lowerBounds: [
        [20, 100],
        [30, 90],
        [40, 86],
        [60, 84],
        [80, 80],
        [90, 75],
        [100, 73],
      ],
    },
  ],
  me = function (t, r, n) {
    var i = xa(t, "colors." + r, r),
      o = new Mi(i),
      a = o.isValid;
    return a ? i : n;
  },
  ES = function (t) {
    return function (r) {
      var n = me(r, t),
        i = new Mi(n).isDark();
      return i ? "dark" : "light";
    };
  },
  TS = function (t) {
    return function (r) {
      return ES(t)(r) === "dark";
    };
  },
  yn = function (t, r) {
    return function (n) {
      var i = me(n, t);
      return new Mi(i).setAlpha(r).toRgbString();
    };
  };
function fh(e, t) {
  return (
    e === void 0 && (e = "1rem"),
    t === void 0 && (t = "rgba(255, 255, 255, 0.15)"),
    {
      backgroundImage:
        `linear-gradient(
    45deg,
    ` +
        t +
        ` 25%,
    transparent 25%,
    transparent 50%,
    ` +
        t +
        ` 50%,
    ` +
        t +
        ` 75%,
    transparent 75%,
    transparent
  )`,
      backgroundSize: e + " " + e,
    }
  );
}
function RS(e) {
  var t = uh().toHexString();
  return !e || qy(e)
    ? t
    : e.string && e.colors
    ? $S(e.string, e.colors)
    : e.string && !e.colors
    ? PS(e.string)
    : e.colors && !e.string
    ? zS(e.colors)
    : t;
}
function PS(e) {
  var t = 0;
  if (e.length === 0) return t.toString();
  for (var r = 0; r < e.length; r += 1)
    (t = e.charCodeAt(r) + ((t << 5) - t)), (t = t & t);
  for (var n = "#", i = 0; i < 3; i += 1) {
    var o = (t >> (i * 8)) & 255;
    n += ("00" + o.toString(16)).substr(-2);
  }
  return n;
}
function $S(e, t) {
  var r = 0;
  if (e.length === 0) return t[0];
  for (var n = 0; n < e.length; n += 1)
    (r = e.charCodeAt(n) + ((r << 5) - r)), (r = r & r);
  return (r = ((r % t.length) + t.length) % t.length), t[r];
}
function zS(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function _(e, t) {
  return function (r) {
    return r.colorMode === "dark" ? t : e;
  };
}
function Fi(e) {
  var t = e.orientation,
    r = e.vertical,
    n = e.horizontal;
  return t ? (t === "vertical" ? r : n) : {};
}
function Zs() {
  return (
    (Zs =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Zs.apply(this, arguments)
  );
}
var AS = function (t) {
  return (
    u1({
      condition: !0,
      message: [
        "[chakra-ui]: createBreakpoints(...) will be deprecated pretty soon",
        "simply pass the breakpoints as an object. Remove the createBreakpoint(..) call",
      ].join(""),
    }),
    Zs({ base: "0em" }, t)
  );
};
function ph(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function IS(e, t, r) {
  return t && ph(e.prototype, t), r && ph(e, r), e;
}
var OS = (function () {
  function e(t) {
    var r = this;
    (this.map = {}),
      (this.called = !1),
      (this.assert = function () {
        if (!r.called) {
          r.called = !0;
          return;
        }
        throw new Error(
          "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
        );
      }),
      (this.parts = function () {
        r.assert();
        for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
          i[o] = arguments[o];
        for (var a = 0, l = i; a < l.length; a++) {
          var u = l[a];
          r.map[u] = r.toPart(u);
        }
        return r;
      }),
      (this.extend = function () {
        for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
          i[o] = arguments[o];
        for (var a = 0, l = i; a < l.length; a++) {
          var u = l[a];
          u in r.map || (r.map[u] = r.toPart(u));
        }
        return r;
      }),
      (this.toPart = function (n) {
        var i = ["container", "root"].includes(n != null ? n : "")
            ? [r.name]
            : [r.name, n],
          o = i.filter(Boolean).join("__"),
          a = "chakra-" + o,
          l = {
            className: a,
            selector: "." + a,
            toString: function () {
              return n;
            },
          };
        return l;
      }),
      (this.__type = {});
  }
  return (
    IS(e, [
      {
        key: "selectors",
        get: function () {
          var r = wa(
            Object.entries(this.map).map(function (n) {
              var i = n[0],
                o = n[1];
              return [i, o.selector];
            })
          );
          return r;
        },
      },
      {
        key: "classNames",
        get: function () {
          var r = wa(
            Object.entries(this.map).map(function (n) {
              var i = n[0],
                o = n[1];
              return [i, o.className];
            })
          );
          return r;
        },
      },
      {
        key: "keys",
        get: function () {
          return Object.keys(this.map);
        },
      },
    ]),
    e
  );
})();
function X(e) {
  return new OS(e);
}
function hh(e) {
  return et(e) && e.reference ? e.reference : String(e);
}
var Oa = function (t) {
    for (
      var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1;
      i < r;
      i++
    )
      n[i - 1] = arguments[i];
    return n
      .map(hh)
      .join(" " + t + " ")
      .replace(/calc/g, "");
  },
  mh = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return "calc(" + Oa.apply(void 0, ["+"].concat(r)) + ")";
  },
  vh = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return "calc(" + Oa.apply(void 0, ["-"].concat(r)) + ")";
  },
  Js = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return "calc(" + Oa.apply(void 0, ["*"].concat(r)) + ")";
  },
  gh = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return "calc(" + Oa.apply(void 0, ["/"].concat(r)) + ")";
  },
  yh = function (t) {
    var r = hh(t);
    return r != null && !Number.isNaN(parseFloat(r))
      ? String(r).startsWith("-")
        ? String(r).slice(1)
        : "-" + r
      : Js(r, -1);
  },
  Mt = Object.assign(
    function (e) {
      return {
        add: function () {
          for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
            n[i] = arguments[i];
          return Mt(mh.apply(void 0, [e].concat(n)));
        },
        subtract: function () {
          for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
            n[i] = arguments[i];
          return Mt(vh.apply(void 0, [e].concat(n)));
        },
        multiply: function () {
          for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
            n[i] = arguments[i];
          return Mt(Js.apply(void 0, [e].concat(n)));
        },
        divide: function () {
          for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
            n[i] = arguments[i];
          return Mt(gh.apply(void 0, [e].concat(n)));
        },
        negate: function () {
          return Mt(yh(e));
        },
        toString: function () {
          return e.toString();
        },
      };
    },
    { add: mh, subtract: vh, multiply: Js, divide: gh, negate: yh }
  );
function BS(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function MS(e, t) {
  return t === void 0 && (t = "-"), e.replace(/\s+/g, t);
}
function bh(e) {
  var t = MS(e.toString());
  return t.includes("\\.") ? e : BS(e) ? t.replace(".", "\\.") : e;
}
function FS(e, t) {
  return t === void 0 && (t = ""), [t, bh(e)].filter(Boolean).join("-");
}
function NS(e, t) {
  return "var(" + bh(e) + (t ? ", " + t : "") + ")";
}
function LS(e, t) {
  return t === void 0 && (t = ""), "--" + FS(e, t);
}
function Ge(e, t) {
  var r = LS(e, t == null ? void 0 : t.prefix);
  return { variable: r, reference: NS(r, jS(t == null ? void 0 : t.fallback)) };
}
function jS(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var DS = X("accordion")
    .parts("container", "item", "button", "panel")
    .extend("icon"),
  WS = X("alert").parts("title", "description", "container").extend("icon"),
  HS = X("avatar")
    .parts("label", "badge", "container")
    .extend("excessLabel", "group"),
  VS = X("breadcrumb").parts("link", "item", "container").extend("separator");
X("button").parts();
var US = X("checkbox").parts("control", "icon", "container").extend("label");
X("progress").parts("track", "filledTrack").extend("label");
var GS = X("drawer")
    .parts("overlay", "dialogContainer", "dialog")
    .extend("header", "closeButton", "body", "footer"),
  YS = X("editable").parts("preview", "input"),
  QS = X("form").parts("container", "requiredIndicator", "helperText"),
  XS = X("formError").parts("text", "icon"),
  KS = X("input").parts("addon", "field", "element"),
  qS = X("list").parts("container", "item", "icon"),
  ZS = X("menu")
    .parts("button", "list", "item")
    .extend("groupTitle", "command", "divider"),
  JS = X("modal")
    .parts("overlay", "dialogContainer", "dialog")
    .extend("header", "closeButton", "body", "footer"),
  ex = X("numberinput").parts("root", "field", "stepperGroup", "stepper");
X("pininput").parts("field");
var tx = X("popover")
    .parts("content", "header", "body", "footer")
    .extend("popper", "arrow", "closeButton"),
  rx = X("progress").parts("label", "filledTrack", "track"),
  nx = X("radio").parts("container", "control", "label"),
  ix = X("select").parts("field", "icon"),
  ox = X("slider").parts("container", "track", "thumb", "filledTrack"),
  ax = X("stat").parts("container", "label", "helpText", "number", "icon"),
  lx = X("switch").parts("container", "track", "thumb"),
  ux = X("table").parts(
    "table",
    "thead",
    "tbody",
    "tr",
    "th",
    "td",
    "tfoot",
    "caption"
  ),
  sx = X("tabs").parts(
    "root",
    "tab",
    "tablist",
    "tabpanel",
    "tabpanels",
    "indicator"
  ),
  cx = X("tag").parts("container", "label", "closeButton");
function ce() {
  return (
    (ce =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    ce.apply(this, arguments)
  );
}
var dx = {
    borderTopWidth: "1px",
    borderColor: "inherit",
    _last: { borderBottomWidth: "1px" },
  },
  fx = {
    transitionProperty: "common",
    transitionDuration: "normal",
    fontSize: "1rem",
    _focus: { boxShadow: "outline" },
    _hover: { bg: "blackAlpha.50" },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
    px: 4,
    py: 2,
  },
  px = { pt: 2, px: 4, pb: 5 },
  hx = { fontSize: "1.25em" },
  mx = { container: dx, button: fx, panel: px, icon: hx },
  vx = { parts: DS.keys, baseStyle: mx },
  gx = {
    container: { px: 4, py: 3 },
    title: { fontWeight: "bold", lineHeight: 6, marginEnd: 2 },
    description: { lineHeight: 6 },
    icon: { flexShrink: 0, marginEnd: 3, w: 5, h: 6 },
  };
function ec(e) {
  var t = e.theme,
    r = e.colorScheme,
    n = me(t, r + ".100", r),
    i = yn(r + ".200", 0.16)(t);
  return _(n, i)(e);
}
var yx = function (t) {
    var r = t.colorScheme;
    return {
      container: { bg: ec(t) },
      icon: { color: _(r + ".500", r + ".200")(t) },
    };
  },
  bx = function (t) {
    var r = t.colorScheme;
    return {
      container: {
        paddingStart: 3,
        borderStartWidth: "4px",
        borderStartColor: _(r + ".500", r + ".200")(t),
        bg: ec(t),
      },
      icon: { color: _(r + ".500", r + ".200")(t) },
    };
  },
  Sx = function (t) {
    var r = t.colorScheme;
    return {
      container: {
        pt: 2,
        borderTopWidth: "4px",
        borderTopColor: _(r + ".500", r + ".200")(t),
        bg: ec(t),
      },
      icon: { color: _(r + ".500", r + ".200")(t) },
    };
  },
  xx = function (t) {
    var r = t.colorScheme;
    return {
      container: {
        bg: _(r + ".500", r + ".200")(t),
        color: _("white", "gray.900")(t),
      },
    };
  },
  wx = { subtle: yx, "left-accent": bx, "top-accent": Sx, solid: xx },
  kx = { variant: "subtle", colorScheme: "blue" },
  _x = { parts: WS.keys, baseStyle: gx, variants: wx, defaultProps: kx },
  Sh = {
    px: "1px",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
  },
  Cx = {
    max: "max-content",
    min: "min-content",
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem",
  },
  Ex = { sm: "640px", md: "768px", lg: "1024px", xl: "1280px" },
  Tx = ce({}, Sh, Cx, { container: Ex }),
  xh = Tx,
  Rx = function (t) {
    return {
      transform: "translate(25%, 25%)",
      borderRadius: "full",
      border: "0.2em solid",
      borderColor: _("white", "gray.800")(t),
    };
  },
  Px = function (t) {
    return { bg: _("gray.200", "whiteAlpha.400")(t) };
  },
  $x = function (t) {
    var r = t.name,
      n = t.theme,
      i = r ? RS({ string: r }) : "gray.400",
      o = TS(i)(n),
      a = "white";
    o || (a = "gray.800");
    var l = _("white", "gray.800")(t);
    return { bg: i, color: a, borderColor: l, verticalAlign: "top" };
  },
  zx = function (t) {
    return { badge: Rx(t), excessLabel: Px(t), container: $x(t) };
  };
function ar(e) {
  var t = xh[e];
  return {
    container: {
      width: e,
      height: e,
      fontSize: "calc(" + (t != null ? t : e) + " / 2.5)",
    },
    excessLabel: { width: e, height: e },
    label: {
      fontSize: "calc(" + (t != null ? t : e) + " / 2.5)",
      lineHeight: e !== "100%" ? (t != null ? t : e) : void 0,
    },
  };
}
var Ax = {
    "2xs": ar("4"),
    xs: ar("6"),
    sm: ar("8"),
    md: ar("12"),
    lg: ar("16"),
    xl: ar("24"),
    "2xl": ar("32"),
    full: ar("100%"),
  },
  Ix = { size: "md" },
  Ox = { parts: HS.keys, baseStyle: zx, sizes: Ax, defaultProps: Ix },
  Bx = {
    px: 1,
    textTransform: "uppercase",
    fontSize: "xs",
    borderRadius: "sm",
    fontWeight: "bold",
  },
  Mx = function (t) {
    var r = t.colorScheme,
      n = t.theme,
      i = yn(r + ".500", 0.6)(n);
    return { bg: _(r + ".500", i)(t), color: _("white", "whiteAlpha.800")(t) };
  },
  Fx = function (t) {
    var r = t.colorScheme,
      n = t.theme,
      i = yn(r + ".200", 0.16)(n);
    return { bg: _(r + ".100", i)(t), color: _(r + ".800", r + ".200")(t) };
  },
  Nx = function (t) {
    var r = t.colorScheme,
      n = t.theme,
      i = yn(r + ".200", 0.8)(n),
      o = me(n, r + ".500"),
      a = _(o, i)(t);
    return { color: a, boxShadow: "inset 0 0 0px 1px " + a };
  },
  Lx = { solid: Mx, subtle: Fx, outline: Nx },
  jx = { variant: "subtle", colorScheme: "gray" },
  bn = { baseStyle: Bx, variants: Lx, defaultProps: jx },
  Dx = {
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    cursor: "pointer",
    textDecoration: "none",
    outline: "none",
    color: "inherit",
    _hover: { textDecoration: "underline" },
    _focus: { boxShadow: "outline" },
  },
  Wx = { link: Dx },
  Hx = { parts: VS.keys, baseStyle: Wx },
  Vx = {
    lineHeight: "1.2",
    borderRadius: "md",
    fontWeight: "semibold",
    transitionProperty: "common",
    transitionDuration: "normal",
    _focus: { boxShadow: "outline" },
    _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
    _hover: { _disabled: { bg: "initial" } },
  },
  wh = function (t) {
    var r = t.colorScheme,
      n = t.theme;
    if (r === "gray")
      return {
        color: _("inherit", "whiteAlpha.900")(t),
        _hover: { bg: _("gray.100", "whiteAlpha.200")(t) },
        _active: { bg: _("gray.200", "whiteAlpha.300")(t) },
      };
    var i = yn(r + ".200", 0.12)(n),
      o = yn(r + ".200", 0.24)(n);
    return {
      color: _(r + ".600", r + ".200")(t),
      bg: "transparent",
      _hover: { bg: _(r + ".50", i)(t) },
      _active: { bg: _(r + ".100", o)(t) },
    };
  },
  Ux = function (t) {
    var r = t.colorScheme,
      n = _("gray.200", "whiteAlpha.300")(t);
    return ce(
      { border: "1px solid", borderColor: r === "gray" ? n : "currentColor" },
      wh(t)
    );
  },
  Gx = {
    yellow: {
      bg: "yellow.400",
      color: "black",
      hoverBg: "yellow.500",
      activeBg: "yellow.600",
    },
    cyan: {
      bg: "cyan.400",
      color: "black",
      hoverBg: "cyan.500",
      activeBg: "cyan.600",
    },
  },
  Yx = function (t) {
    var r,
      n = t.colorScheme;
    if (n === "gray") {
      var i = _("gray.100", "whiteAlpha.200")(t);
      return {
        bg: i,
        _hover: {
          bg: _("gray.200", "whiteAlpha.300")(t),
          _disabled: { bg: i },
        },
        _active: { bg: _("gray.300", "whiteAlpha.400")(t) },
      };
    }
    var o = (r = Gx[n]) != null ? r : {},
      a = o.bg,
      l = a === void 0 ? n + ".500" : a,
      u = o.color,
      s = u === void 0 ? "white" : u,
      m = o.hoverBg,
      b = m === void 0 ? n + ".600" : m,
      v = o.activeBg,
      w = v === void 0 ? n + ".700" : v,
      C = _(l, n + ".200")(t);
    return {
      bg: C,
      color: _(s, "gray.800")(t),
      _hover: { bg: _(b, n + ".300")(t), _disabled: { bg: C } },
      _active: { bg: _(w, n + ".400")(t) },
    };
  },
  Qx = function (t) {
    var r = t.colorScheme;
    return {
      padding: 0,
      height: "auto",
      lineHeight: "normal",
      verticalAlign: "baseline",
      color: _(r + ".500", r + ".200")(t),
      _hover: {
        textDecoration: "underline",
        _disabled: { textDecoration: "none" },
      },
      _active: { color: _(r + ".700", r + ".500")(t) },
    };
  },
  Xx = {
    bg: "none",
    color: "inherit",
    display: "inline",
    lineHeight: "inherit",
    m: 0,
    p: 0,
  },
  Kx = { ghost: wh, outline: Ux, solid: Yx, link: Qx, unstyled: Xx },
  qx = {
    lg: { h: 12, minW: 12, fontSize: "lg", px: 6 },
    md: { h: 10, minW: 10, fontSize: "md", px: 4 },
    sm: { h: 8, minW: 8, fontSize: "sm", px: 3 },
    xs: { h: 6, minW: 6, fontSize: "xs", px: 2 },
  },
  Zx = { variant: "solid", size: "md", colorScheme: "gray" },
  Jx = { baseStyle: Vx, variants: Kx, sizes: qx, defaultProps: Zx },
  ew = function (t) {
    var r = t.colorScheme;
    return {
      w: "100%",
      transitionProperty: "box-shadow",
      transitionDuration: "normal",
      border: "2px solid",
      borderRadius: "sm",
      borderColor: "inherit",
      color: "white",
      _checked: {
        bg: _(r + ".500", r + ".200")(t),
        borderColor: _(r + ".500", r + ".200")(t),
        color: _("white", "gray.900")(t),
        _hover: {
          bg: _(r + ".600", r + ".300")(t),
          borderColor: _(r + ".600", r + ".300")(t),
        },
        _disabled: {
          borderColor: _("gray.200", "transparent")(t),
          bg: _("gray.200", "whiteAlpha.300")(t),
          color: _("gray.500", "whiteAlpha.500")(t),
        },
      },
      _indeterminate: {
        bg: _(r + ".500", r + ".200")(t),
        borderColor: _(r + ".500", r + ".200")(t),
        color: _("white", "gray.900")(t),
      },
      _disabled: {
        bg: _("gray.100", "whiteAlpha.100")(t),
        borderColor: _("gray.100", "transparent")(t),
      },
      _focus: { boxShadow: "outline" },
      _invalid: { borderColor: _("red.500", "red.300")(t) },
    };
  },
  tw = { userSelect: "none", _disabled: { opacity: 0.4 } },
  rw = { transitionProperty: "transform", transitionDuration: "normal" },
  nw = function (t) {
    return { icon: rw, control: ew(t), label: tw };
  },
  iw = {
    sm: {
      control: { h: 3, w: 3 },
      label: { fontSize: "sm" },
      icon: { fontSize: "0.45rem" },
    },
    md: {
      control: { w: 4, h: 4 },
      label: { fontSize: "md" },
      icon: { fontSize: "0.625rem" },
    },
    lg: {
      control: { w: 5, h: 5 },
      label: { fontSize: "lg" },
      icon: { fontSize: "0.625rem" },
    },
  },
  ow = { size: "md", colorScheme: "blue" },
  tc = { parts: US.keys, baseStyle: nw, sizes: iw, defaultProps: ow },
  Ba,
  Ma,
  Fa,
  Ni = Ge("close-button-size"),
  aw = function (t) {
    var r = _("blackAlpha.100", "whiteAlpha.100")(t),
      n = _("blackAlpha.200", "whiteAlpha.200")(t);
    return {
      w: [Ni.reference],
      h: [Ni.reference],
      borderRadius: "md",
      transitionProperty: "common",
      transitionDuration: "normal",
      _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
      _hover: { bg: r },
      _active: { bg: n },
      _focus: { boxShadow: "outline" },
    };
  },
  lw = {
    lg: ((Ba = {}), (Ba[Ni.variable] = "40px"), (Ba.fontSize = "16px"), Ba),
    md: ((Ma = {}), (Ma[Ni.variable] = "32px"), (Ma.fontSize = "12px"), Ma),
    sm: ((Fa = {}), (Fa[Ni.variable] = "24px"), (Fa.fontSize = "10px"), Fa),
  },
  uw = { size: "md" },
  sw = { baseStyle: aw, sizes: lw, defaultProps: uw },
  cw = bn.variants,
  dw = bn.defaultProps,
  fw = { fontFamily: "mono", fontSize: "sm", px: "0.2em", borderRadius: "sm" },
  pw = { baseStyle: fw, variants: cw, defaultProps: dw },
  hw = { w: "100%", mx: "auto", maxW: "60ch", px: "1rem" },
  mw = { baseStyle: hw },
  vw = { opacity: 0.6, borderColor: "inherit" },
  gw = { borderStyle: "solid" },
  yw = { borderStyle: "dashed" },
  bw = { solid: gw, dashed: yw },
  Sw = { variant: "solid" },
  xw = { baseStyle: vw, variants: bw, defaultProps: Sw };
function Sn(e) {
  return e === "full"
    ? { dialog: { maxW: "100vw", h: "100vh" } }
    : { dialog: { maxW: e } };
}
var ww = { bg: "blackAlpha.600", zIndex: "overlay" },
  kw = { display: "flex", zIndex: "modal", justifyContent: "center" },
  _w = function (t) {
    var r = t.isFullHeight;
    return ce({}, r && { height: "100vh" }, {
      zIndex: "modal",
      maxH: "100vh",
      bg: _("white", "gray.700")(t),
      color: "inherit",
      boxShadow: _("lg", "dark-lg")(t),
    });
  },
  Cw = { px: 6, py: 4, fontSize: "xl", fontWeight: "semibold" },
  Ew = { position: "absolute", top: 2, insetEnd: 3 },
  Tw = { px: 6, py: 2, flex: 1, overflow: "auto" },
  Rw = { px: 6, py: 4 },
  Pw = function (t) {
    return {
      overlay: ww,
      dialogContainer: kw,
      dialog: _w(t),
      header: Cw,
      closeButton: Ew,
      body: Tw,
      footer: Rw,
    };
  },
  $w = {
    xs: Sn("xs"),
    sm: Sn("md"),
    md: Sn("lg"),
    lg: Sn("2xl"),
    xl: Sn("4xl"),
    full: Sn("full"),
  },
  zw = { size: "xs" },
  Aw = { parts: GS.keys, baseStyle: Pw, sizes: $w, defaultProps: zw },
  Iw = {
    borderRadius: "md",
    py: "3px",
    transitionProperty: "common",
    transitionDuration: "normal",
  },
  Ow = {
    borderRadius: "md",
    py: "3px",
    transitionProperty: "common",
    transitionDuration: "normal",
    width: "full",
    _focus: { boxShadow: "outline" },
    _placeholder: { opacity: 0.6 },
  },
  Bw = { preview: Iw, input: Ow },
  Mw = { parts: YS.keys, baseStyle: Bw },
  Fw = function (t) {
    return { marginStart: 1, color: _("red.500", "red.300")(t) };
  },
  Nw = function (t) {
    return {
      mt: 2,
      color: _("gray.500", "whiteAlpha.600")(t),
      lineHeight: "normal",
      fontSize: "sm",
    };
  },
  Lw = function (t) {
    return {
      container: { width: "100%", position: "relative" },
      requiredIndicator: Fw(t),
      helperText: Nw(t),
    };
  },
  jw = { parts: QS.keys, baseStyle: Lw },
  Dw = {
    fontSize: "md",
    marginEnd: 3,
    mb: 2,
    fontWeight: "medium",
    transitionProperty: "common",
    transitionDuration: "normal",
    opacity: 1,
    _disabled: { opacity: 0.4 },
  },
  Ww = { baseStyle: Dw },
  Hw = { fontFamily: "heading", fontWeight: "bold" },
  Vw = {
    "4xl": { fontSize: ["6xl", null, "7xl"], lineHeight: 1 },
    "3xl": { fontSize: ["5xl", null, "6xl"], lineHeight: 1 },
    "2xl": { fontSize: ["4xl", null, "5xl"], lineHeight: [1.2, null, 1] },
    xl: { fontSize: ["3xl", null, "4xl"], lineHeight: [1.33, null, 1.2] },
    lg: { fontSize: ["2xl", null, "3xl"], lineHeight: [1.33, null, 1.2] },
    md: { fontSize: "xl", lineHeight: 1.2 },
    sm: { fontSize: "md", lineHeight: 1.2 },
    xs: { fontSize: "sm", lineHeight: 1.2 },
  },
  Uw = { size: "xl" },
  Gw = { baseStyle: Hw, sizes: Vw, defaultProps: Uw },
  Yw = {
    field: {
      width: "100%",
      minWidth: 0,
      outline: 0,
      position: "relative",
      appearance: "none",
      transitionProperty: "common",
      transitionDuration: "normal",
    },
  },
  lr = {
    lg: { fontSize: "lg", px: 4, h: 12, borderRadius: "md" },
    md: { fontSize: "md", px: 4, h: 10, borderRadius: "md" },
    sm: { fontSize: "sm", px: 3, h: 8, borderRadius: "sm" },
    xs: { fontSize: "xs", px: 2, h: 6, borderRadius: "sm" },
  },
  Qw = {
    lg: { field: lr.lg, addon: lr.lg },
    md: { field: lr.md, addon: lr.md },
    sm: { field: lr.sm, addon: lr.sm },
    xs: { field: lr.xs, addon: lr.xs },
  };
function rc(e) {
  var t = e.focusBorderColor,
    r = e.errorBorderColor;
  return {
    focusBorderColor: t || _("blue.500", "blue.300")(e),
    errorBorderColor: r || _("red.500", "red.300")(e),
  };
}
var Xw = function (t) {
    var r = t.theme,
      n = rc(t),
      i = n.focusBorderColor,
      o = n.errorBorderColor;
    return {
      field: {
        border: "1px solid",
        borderColor: "inherit",
        bg: "inherit",
        _hover: { borderColor: _("gray.300", "whiteAlpha.400")(t) },
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _disabled: { opacity: 0.4, cursor: "not-allowed" },
        _invalid: { borderColor: me(r, o), boxShadow: "0 0 0 1px " + me(r, o) },
        _focus: {
          zIndex: 1,
          borderColor: me(r, i),
          boxShadow: "0 0 0 1px " + me(r, i),
        },
      },
      addon: {
        border: "1px solid",
        borderColor: _("inherit", "whiteAlpha.50")(t),
        bg: _("gray.100", "whiteAlpha.300")(t),
      },
    };
  },
  Kw = function (t) {
    var r = t.theme,
      n = rc(t),
      i = n.focusBorderColor,
      o = n.errorBorderColor;
    return {
      field: {
        border: "2px solid",
        borderColor: "transparent",
        bg: _("gray.100", "whiteAlpha.50")(t),
        _hover: { bg: _("gray.200", "whiteAlpha.100")(t) },
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _disabled: { opacity: 0.4, cursor: "not-allowed" },
        _invalid: { borderColor: me(r, o) },
        _focus: { bg: "transparent", borderColor: me(r, i) },
      },
      addon: {
        border: "2px solid",
        borderColor: "transparent",
        bg: _("gray.100", "whiteAlpha.50")(t),
      },
    };
  },
  qw = function (t) {
    var r = t.theme,
      n = rc(t),
      i = n.focusBorderColor,
      o = n.errorBorderColor;
    return {
      field: {
        borderBottom: "1px solid",
        borderColor: "inherit",
        borderRadius: 0,
        px: 0,
        bg: "transparent",
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: {
          borderColor: me(r, o),
          boxShadow: "0px 1px 0px 0px " + me(r, o),
        },
        _focus: {
          borderColor: me(r, i),
          boxShadow: "0px 1px 0px 0px " + me(r, i),
        },
      },
      addon: {
        borderBottom: "2px solid",
        borderColor: "inherit",
        borderRadius: 0,
        px: 0,
        bg: "transparent",
      },
    };
  },
  Zw = {
    field: { bg: "transparent", px: 0, height: "auto" },
    addon: { bg: "transparent", px: 0, height: "auto" },
  },
  Jw = { outline: Xw, filled: Kw, flushed: qw, unstyled: Zw },
  ek = { size: "md", variant: "outline" },
  oe = {
    parts: KS.keys,
    baseStyle: Yw,
    sizes: Qw,
    variants: Jw,
    defaultProps: ek,
  },
  tk = function (t) {
    return {
      bg: _("gray.100", "whiteAlpha")(t),
      borderRadius: "md",
      borderWidth: "1px",
      borderBottomWidth: "3px",
      fontSize: "0.8em",
      fontWeight: "bold",
      lineHeight: "normal",
      px: "0.4em",
      whiteSpace: "nowrap",
    };
  },
  rk = { baseStyle: tk },
  nk = {
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    cursor: "pointer",
    textDecoration: "none",
    outline: "none",
    color: "inherit",
    _hover: { textDecoration: "underline" },
    _focus: { boxShadow: "outline" },
  },
  ik = { baseStyle: nk },
  ok = { marginEnd: "0.5rem", display: "inline", verticalAlign: "text-bottom" },
  ak = { container: {}, item: {}, icon: ok },
  lk = { parts: qS.keys, baseStyle: ak },
  uk = function (t) {
    return {
      bg: _("#fff", "gray.700")(t),
      boxShadow: _("sm", "dark-lg")(t),
      color: "inherit",
      minW: "3xs",
      py: "2",
      zIndex: 1,
      borderRadius: "md",
      borderWidth: "1px",
    };
  },
  sk = function (t) {
    return {
      py: "0.4rem",
      px: "0.8rem",
      transitionProperty: "background",
      transitionDuration: "ultra-fast",
      transitionTimingFunction: "ease-in",
      _focus: { bg: _("gray.100", "whiteAlpha.100")(t) },
      _active: { bg: _("gray.200", "whiteAlpha.200")(t) },
      _expanded: { bg: _("gray.100", "whiteAlpha.100")(t) },
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
    };
  },
  ck = { mx: 4, my: 2, fontWeight: "semibold", fontSize: "sm" },
  dk = { opacity: 0.6 },
  fk = {
    border: 0,
    borderBottom: "1px solid",
    borderColor: "inherit",
    my: "0.5rem",
    opacity: 0.6,
  },
  pk = { transitionProperty: "common", transitionDuration: "normal" },
  hk = function (t) {
    return {
      button: pk,
      list: uk(t),
      item: sk(t),
      groupTitle: ck,
      command: dk,
      divider: fk,
    };
  },
  mk = { parts: ZS.keys, baseStyle: hk },
  vk = { bg: "blackAlpha.600", zIndex: "modal" },
  gk = function (t) {
    var r = t.isCentered,
      n = t.scrollBehavior;
    return {
      display: "flex",
      zIndex: "modal",
      justifyContent: "center",
      alignItems: r ? "center" : "flex-start",
      overflow: n === "inside" ? "hidden" : "auto",
    };
  },
  yk = function (t) {
    var r = t.scrollBehavior;
    return {
      borderRadius: "md",
      bg: _("white", "gray.700")(t),
      color: "inherit",
      my: "3.75rem",
      zIndex: "modal",
      maxH: r === "inside" ? "calc(100% - 7.5rem)" : void 0,
      boxShadow: _("lg", "dark-lg")(t),
    };
  },
  bk = { px: 6, py: 4, fontSize: "xl", fontWeight: "semibold" },
  Sk = { position: "absolute", top: 2, insetEnd: 3 },
  xk = function (t) {
    var r = t.scrollBehavior;
    return {
      px: 6,
      py: 2,
      flex: 1,
      overflow: r === "inside" ? "auto" : void 0,
    };
  },
  wk = { px: 6, py: 4 },
  kk = function (t) {
    return {
      overlay: vk,
      dialogContainer: gk(t),
      dialog: yk(t),
      header: bk,
      closeButton: Sk,
      body: xk(t),
      footer: wk,
    };
  };
function ct(e) {
  return e === "full"
    ? { dialog: { maxW: "100vw", minH: "100vh", my: 0 } }
    : { dialog: { maxW: e } };
}
var _k = {
    xs: ct("xs"),
    sm: ct("sm"),
    md: ct("md"),
    lg: ct("lg"),
    xl: ct("xl"),
    "2xl": ct("2xl"),
    "3xl": ct("3xl"),
    "4xl": ct("4xl"),
    "5xl": ct("5xl"),
    "6xl": ct("6xl"),
    full: ct("full"),
  },
  Ck = { size: "md" },
  Ek = { parts: JS.keys, baseStyle: kk, sizes: _k, defaultProps: Ck },
  Tk = {
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    lineHeights: {
      normal: "normal",
      none: 1,
      shorter: 1.25,
      short: 1.375,
      base: 1.5,
      tall: 1.625,
      taller: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    fonts: {
      heading:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
  },
  kh = Tk,
  Na,
  _h,
  Ch,
  Rk = oe.variants,
  Pk = oe.defaultProps,
  nc = Ge("number-input-stepper-width"),
  Eh = Ge("number-input-input-padding"),
  $k = Mt(nc).add("0.5rem").toString(),
  zk = ((Na = {}), (Na[nc.variable] = "24px"), (Na[Eh.variable] = $k), Na),
  Ak = (_h = (Ch = oe.baseStyle) == null ? void 0 : Ch.field) != null ? _h : {},
  Ik = { width: [nc.reference] },
  Ok = function (t) {
    return {
      borderStart: "1px solid",
      borderStartColor: _("inherit", "whiteAlpha.300")(t),
      color: _("inherit", "whiteAlpha.800")(t),
      _active: { bg: _("gray.200", "whiteAlpha.300")(t) },
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
    };
  },
  Bk = function (t) {
    return { root: zk, field: Ak, stepperGroup: Ik, stepper: Ok(t) };
  };
function La(e) {
  var t,
    r,
    n = oe.sizes[e],
    i = { lg: "md", md: "md", sm: "sm", xs: "sm" },
    o = (t = (r = n.field) == null ? void 0 : r.fontSize) != null ? t : "md",
    a = kh.fontSizes[o.toString()];
  return {
    field: ce({}, n.field, {
      paddingInlineEnd: Eh.reference,
      verticalAlign: "top",
    }),
    stepper: {
      fontSize: Mt(a).multiply(0.75).toString(),
      _first: { borderTopEndRadius: i[e] },
      _last: { borderBottomEndRadius: i[e], mt: "-1px", borderTopWidth: 1 },
    },
  };
}
var Mk = { xs: La("xs"), sm: La("sm"), md: La("md"), lg: La("lg") },
  Fk = {
    parts: ex.keys,
    baseStyle: Bk,
    sizes: Mk,
    variants: Rk,
    defaultProps: Pk,
  },
  Th,
  Nk = ce({}, oe.baseStyle.field, { textAlign: "center" }),
  Lk = {
    lg: { fontSize: "lg", w: 12, h: 12, borderRadius: "md" },
    md: { fontSize: "md", w: 10, h: 10, borderRadius: "md" },
    sm: { fontSize: "sm", w: 8, h: 8, borderRadius: "sm" },
    xs: { fontSize: "xs", w: 6, h: 6, borderRadius: "sm" },
  },
  jk = {
    outline: function (t) {
      var r;
      return (r = oe.variants.outline(t).field) != null ? r : {};
    },
    flushed: function (t) {
      var r;
      return (r = oe.variants.flushed(t).field) != null ? r : {};
    },
    filled: function (t) {
      var r;
      return (r = oe.variants.filled(t).field) != null ? r : {};
    },
    unstyled: (Th = oe.variants.unstyled.field) != null ? Th : {},
  },
  Dk = oe.defaultProps,
  Wk = { baseStyle: Nk, sizes: Lk, variants: jk, defaultProps: Dk },
  ic = Ge("popper-bg"),
  Hk = Ge("popper-arrow-bg"),
  Vk = Ge("popper-arrow-shadow-color"),
  Uk = { zIndex: 10 },
  Gk = function (t) {
    var r,
      n = _("white", "gray.700")(t),
      i = _("gray.200", "whiteAlpha.300")(t);
    return (
      (r = {}),
      (r[ic.variable] = "colors." + n),
      (r.bg = ic.reference),
      (r[Hk.variable] = ic.reference),
      (r[Vk.variable] = "colors." + i),
      (r.width = "xs"),
      (r.border = "1px solid"),
      (r.borderColor = "inherit"),
      (r.borderRadius = "md"),
      (r.boxShadow = "sm"),
      (r.zIndex = "inherit"),
      (r._focus = { outline: 0, boxShadow: "outline" }),
      r
    );
  },
  Yk = { px: 3, py: 2, borderBottomWidth: "1px" },
  Qk = { px: 3, py: 2 },
  Xk = { px: 3, py: 2, borderTopWidth: "1px" },
  Kk = {
    position: "absolute",
    borderRadius: "md",
    top: 1,
    insetEnd: 2,
    padding: 2,
  },
  qk = function (t) {
    return {
      popper: Uk,
      content: Gk(t),
      header: Yk,
      body: Qk,
      footer: Xk,
      arrow: {},
      closeButton: Kk,
    };
  },
  Zk = { parts: tx.keys, baseStyle: qk };
function Jk(e) {
  var t = e.colorScheme,
    r = e.theme,
    n = e.isIndeterminate,
    i = e.hasStripe,
    o = _(fh(), fh("1rem", "rgba(0,0,0,0.1)"))(e),
    a = _(t + ".500", t + ".200")(e),
    l =
      `linear-gradient(
    to right,
    transparent 0%,
    ` +
      me(r, a) +
      ` 50%,
    transparent 100%
  )`,
    u = !n && i;
  return ce({}, u && o, n ? { bgImage: l } : { bgColor: a });
}
var e2 = {
    lineHeight: "1",
    fontSize: "0.25em",
    fontWeight: "bold",
    color: "white",
  },
  t2 = function (t) {
    return { bg: _("gray.100", "whiteAlpha.300")(t) };
  },
  r2 = function (t) {
    return ce(
      { transitionProperty: "common", transitionDuration: "slow" },
      Jk(t)
    );
  },
  n2 = function (t) {
    return { label: e2, filledTrack: r2(t), track: t2(t) };
  },
  i2 = {
    xs: { track: { h: "0.25rem" } },
    sm: { track: { h: "0.5rem" } },
    md: { track: { h: "0.75rem" } },
    lg: { track: { h: "1rem" } },
  },
  o2 = { size: "md", colorScheme: "blue" },
  a2 = { parts: rx.keys, sizes: i2, baseStyle: n2, defaultProps: o2 },
  l2 = function (t) {
    var r = tc.baseStyle(t),
      n = r.control,
      i = n === void 0 ? {} : n;
    return ce({}, i, {
      borderRadius: "full",
      _checked: ce({}, i._checked, {
        _before: {
          content: '""',
          display: "inline-block",
          pos: "relative",
          w: "50%",
          h: "50%",
          borderRadius: "50%",
          bg: "currentColor",
        },
      }),
    });
  },
  u2 = function (t) {
    return { label: tc.baseStyle(t).label, control: l2(t) };
  },
  s2 = {
    md: { control: { w: 4, h: 4 }, label: { fontSize: "md" } },
    lg: { control: { w: 5, h: 5 }, label: { fontSize: "lg" } },
    sm: { control: { width: 3, height: 3 }, label: { fontSize: "sm" } },
  },
  c2 = { size: "md", colorScheme: "blue" },
  d2 = { parts: nx.keys, baseStyle: u2, sizes: s2, defaultProps: c2 },
  f2 = function (t) {
    return ce({}, oe.baseStyle.field, {
      bg: _("white", "gray.700")(t),
      appearance: "none",
      paddingBottom: "1px",
      lineHeight: "normal",
      "> option, > optgroup": { bg: _("white", "gray.700")(t) },
    });
  },
  p2 = {
    width: "1.5rem",
    height: "100%",
    insetEnd: "0.5rem",
    position: "relative",
    color: "currentColor",
    fontSize: "1.25rem",
    _disabled: { opacity: 0.5 },
  },
  h2 = function (t) {
    return { field: f2(t), icon: p2 };
  },
  ja = { paddingInlineEnd: "2rem" },
  m2 = lt({}, oe.sizes, {
    lg: { field: ja },
    md: { field: ja },
    sm: { field: ja },
    xs: { field: ja, icon: { insetEnd: "0.25rem" } },
  }),
  v2 = {
    parts: ix.keys,
    baseStyle: h2,
    sizes: m2,
    variants: oe.variants,
    defaultProps: oe.defaultProps,
  },
  g2 = function (t, r) {
    return g0({
      from: { borderColor: t, background: t },
      to: { borderColor: r, background: r },
    });
  },
  y2 = function (t) {
    var r = _("gray.100", "gray.800")(t),
      n = _("gray.400", "gray.600")(t),
      i = t.startColor,
      o = i === void 0 ? r : i,
      a = t.endColor,
      l = a === void 0 ? n : a,
      u = t.speed,
      s = t.theme,
      m = me(s, o),
      b = me(s, l);
    return {
      opacity: 0.7,
      borderRadius: "2px",
      borderColor: m,
      background: b,
      animation: u + "s linear infinite alternate " + g2(m, b),
    };
  },
  b2 = { baseStyle: y2 },
  S2 = function (t) {
    return {
      borderRadius: "md",
      fontWeight: "semibold",
      _focus: {
        boxShadow: "outline",
        padding: "1rem",
        position: "fixed",
        top: "1.5rem",
        insetStart: "1.5rem",
        bg: _("white", "gray.700")(t),
      },
    };
  },
  x2 = { baseStyle: S2 };
function w2(e) {
  return Fi({
    orientation: e.orientation,
    vertical: {
      left: "50%",
      transform: "translateX(-50%)",
      _active: { transform: "translateX(-50%) scale(1.15)" },
    },
    horizontal: {
      top: "50%",
      transform: "translateY(-50%)",
      _active: { transform: "translateY(-50%) scale(1.15)" },
    },
  });
}
var k2 = function (t) {
    var r = t.orientation;
    return ce(
      {
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        _disabled: { opacity: 0.6, cursor: "default", pointerEvents: "none" },
      },
      Fi({ orientation: r, vertical: { h: "100%" }, horizontal: { w: "100%" } })
    );
  },
  _2 = function (t) {
    return {
      overflow: "hidden",
      borderRadius: "sm",
      bg: _("gray.200", "whiteAlpha.200")(t),
      _disabled: { bg: _("gray.300", "whiteAlpha.300")(t) },
    };
  },
  C2 = function (t) {
    return ce(
      {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        outline: 0,
        zIndex: 1,
        borderRadius: "full",
        bg: "white",
        boxShadow: "base",
        border: "1px solid",
        borderColor: "transparent",
        transitionProperty: "transform",
        transitionDuration: "normal",
        _focus: { boxShadow: "outline" },
        _disabled: { bg: "gray.300" },
      },
      w2(t)
    );
  },
  E2 = function (t) {
    var r = t.colorScheme;
    return {
      width: "inherit",
      height: "inherit",
      bg: _(r + ".500", r + ".200")(t),
    };
  },
  T2 = function (t) {
    return { container: k2(t), track: _2(t), thumb: C2(t), filledTrack: E2(t) };
  },
  R2 = function (t) {
    return {
      thumb: { w: "16px", h: "16px" },
      track: Fi({
        orientation: t.orientation,
        horizontal: { h: "4px" },
        vertical: { w: "4px" },
      }),
    };
  },
  P2 = function (t) {
    return {
      thumb: { w: "14px", h: "14px" },
      track: Fi({
        orientation: t.orientation,
        horizontal: { h: "4px" },
        vertical: { w: "4px" },
      }),
    };
  },
  $2 = function (t) {
    return {
      thumb: { w: "10px", h: "10px" },
      track: Fi({
        orientation: t.orientation,
        horizontal: { h: "2px" },
        vertical: { w: "2px" },
      }),
    };
  },
  z2 = { lg: R2, md: P2, sm: $2 },
  A2 = { size: "md", colorScheme: "blue" },
  I2 = { parts: ox.keys, sizes: z2, baseStyle: T2, defaultProps: A2 },
  oc,
  ac,
  lc,
  uc,
  sc,
  zr = Ge("spinner-size"),
  O2 = { width: [zr.reference], height: [zr.reference] },
  B2 = {
    xs: ((oc = {}), (oc[zr.variable] = "0.75rem"), oc),
    sm: ((ac = {}), (ac[zr.variable] = "1rem"), ac),
    md: ((lc = {}), (lc[zr.variable] = "1.5rem"), lc),
    lg: ((uc = {}), (uc[zr.variable] = "2rem"), uc),
    xl: ((sc = {}), (sc[zr.variable] = "3rem"), sc),
  },
  M2 = { size: "md" },
  F2 = { baseStyle: O2, sizes: B2, defaultProps: M2 },
  N2 = { fontWeight: "medium" },
  L2 = { opacity: 0.8, marginBottom: 2 },
  j2 = { verticalAlign: "baseline", fontWeight: "semibold" },
  D2 = { marginEnd: 1, w: "14px", h: "14px", verticalAlign: "middle" },
  W2 = { container: {}, label: N2, helpText: L2, number: j2, icon: D2 },
  H2 = {
    md: {
      label: { fontSize: "sm" },
      helpText: { fontSize: "sm" },
      number: { fontSize: "2xl" },
    },
  },
  V2 = { size: "md" },
  U2 = { parts: ax.keys, baseStyle: W2, sizes: H2, defaultProps: V2 },
  Da,
  Wa,
  Ha,
  Li = Ge("switch-track-width"),
  Ar = Ge("switch-track-height"),
  cc = Ge("switch-track-diff"),
  G2 = Mt.subtract(Li, Ar),
  dc = Ge("switch-thumb-x"),
  Y2 = function (t) {
    var r = t.colorScheme;
    return {
      borderRadius: "full",
      p: "2px",
      width: [Li.reference],
      height: [Ar.reference],
      transitionProperty: "common",
      transitionDuration: "fast",
      bg: _("gray.300", "whiteAlpha.400")(t),
      _focus: { boxShadow: "outline" },
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
      _checked: { bg: _(r + ".500", r + ".200")(t) },
    };
  },
  Q2 = {
    bg: "white",
    transitionProperty: "transform",
    transitionDuration: "normal",
    borderRadius: "inherit",
    width: [Ar.reference],
    height: [Ar.reference],
    _checked: { transform: "translateX(" + dc.reference + ")" },
  },
  X2 = function (t) {
    var r, n;
    return {
      container:
        ((n = {}),
        (n[cc.variable] = G2),
        (n[dc.variable] = cc.reference),
        (n._rtl = ((r = {}), (r[dc.variable] = Mt(cc).negate().toString()), r)),
        n),
      track: Y2(t),
      thumb: Q2,
    };
  },
  K2 = {
    sm: {
      container:
        ((Da = {}),
        (Da[Li.variable] = "1.375rem"),
        (Da[Ar.variable] = "0.75rem"),
        Da),
    },
    md: {
      container:
        ((Wa = {}),
        (Wa[Li.variable] = "1.875rem"),
        (Wa[Ar.variable] = "1rem"),
        Wa),
    },
    lg: {
      container:
        ((Ha = {}),
        (Ha[Li.variable] = "2.875rem"),
        (Ha[Ar.variable] = "1.5rem"),
        Ha),
    },
  },
  q2 = { size: "md", colorScheme: "blue" },
  Z2 = { parts: lx.keys, baseStyle: X2, sizes: K2, defaultProps: q2 },
  J2 = {
    table: {
      fontVariantNumeric: "lining-nums tabular-nums",
      borderCollapse: "collapse",
      width: "full",
    },
    th: {
      fontFamily: "heading",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "wider",
      textAlign: "start",
    },
    td: { textAlign: "start" },
    caption: {
      mt: 4,
      fontFamily: "heading",
      textAlign: "center",
      fontWeight: "medium",
    },
  },
  Va = { "&[data-is-numeric=true]": { textAlign: "end" } },
  e_ = function (t) {
    var r = t.colorScheme;
    return {
      th: ce(
        {
          color: _("gray.600", "gray.400")(t),
          borderBottom: "1px",
          borderColor: _(r + ".100", r + ".700")(t),
        },
        Va
      ),
      td: ce(
        { borderBottom: "1px", borderColor: _(r + ".100", r + ".700")(t) },
        Va
      ),
      caption: { color: _("gray.600", "gray.100")(t) },
      tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } },
    };
  },
  t_ = function (t) {
    var r = t.colorScheme;
    return {
      th: ce(
        {
          color: _("gray.600", "gray.400")(t),
          borderBottom: "1px",
          borderColor: _(r + ".100", r + ".700")(t),
        },
        Va
      ),
      td: ce(
        { borderBottom: "1px", borderColor: _(r + ".100", r + ".700")(t) },
        Va
      ),
      caption: { color: _("gray.600", "gray.100")(t) },
      tbody: {
        tr: {
          "&:nth-of-type(odd)": {
            "th, td": {
              borderBottomWidth: "1px",
              borderColor: _(r + ".100", r + ".700")(t),
            },
            td: { background: _(r + ".100", r + ".700")(t) },
          },
        },
      },
      tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } },
    };
  },
  r_ = { simple: e_, striped: t_, unstyled: {} },
  n_ = {
    sm: {
      th: { px: "4", py: "1", lineHeight: "4", fontSize: "xs" },
      td: { px: "4", py: "2", fontSize: "sm", lineHeight: "4" },
      caption: { px: "4", py: "2", fontSize: "xs" },
    },
    md: {
      th: { px: "6", py: "3", lineHeight: "4", fontSize: "xs" },
      td: { px: "6", py: "4", lineHeight: "5" },
      caption: { px: "6", py: "2", fontSize: "sm" },
    },
    lg: {
      th: { px: "8", py: "4", lineHeight: "5", fontSize: "sm" },
      td: { px: "8", py: "5", lineHeight: "6" },
      caption: { px: "6", py: "2", fontSize: "md" },
    },
  },
  i_ = { variant: "simple", size: "md", colorScheme: "gray" },
  o_ = {
    parts: ux.keys,
    baseStyle: J2,
    variants: r_,
    sizes: n_,
    defaultProps: i_,
  },
  a_ = function (t) {
    var r = t.orientation;
    return { display: r === "vertical" ? "flex" : "block" };
  },
  l_ = function (t) {
    var r = t.isFitted;
    return {
      flex: r ? 1 : void 0,
      transitionProperty: "common",
      transitionDuration: "normal",
      _focus: { zIndex: 1, boxShadow: "outline" },
    };
  },
  u_ = function (t) {
    var r = t.align,
      n = r === void 0 ? "start" : r,
      i = t.orientation,
      o = { end: "flex-end", center: "center", start: "flex-start" };
    return {
      justifyContent: o[n],
      flexDirection: i === "vertical" ? "column" : "row",
    };
  },
  s_ = { p: 4 },
  c_ = function (t) {
    return { root: a_(t), tab: l_(t), tablist: u_(t), tabpanel: s_ };
  },
  d_ = {
    sm: { tab: { py: 1, px: 4, fontSize: "sm" } },
    md: { tab: { fontSize: "md", py: 2, px: 4 } },
    lg: { tab: { fontSize: "lg", py: 3, px: 4 } },
  },
  f_ = function (t) {
    var r,
      n,
      i = t.colorScheme,
      o = t.orientation,
      a = o === "vertical",
      l = o === "vertical" ? "borderStart" : "borderBottom",
      u = a ? "marginStart" : "marginBottom";
    return {
      tablist: ((r = {}), (r[l] = "2px solid"), (r.borderColor = "inherit"), r),
      tab:
        ((n = {}),
        (n[l] = "2px solid"),
        (n.borderColor = "transparent"),
        (n[u] = "-2px"),
        (n._selected = {
          color: _(i + ".600", i + ".300")(t),
          borderColor: "currentColor",
        }),
        (n._active = { bg: _("gray.200", "whiteAlpha.300")(t) }),
        (n._disabled = { opacity: 0.4, cursor: "not-allowed" }),
        n),
    };
  },
  p_ = function (t) {
    var r = t.colorScheme;
    return {
      tab: {
        borderTopRadius: "md",
        border: "1px solid",
        borderColor: "transparent",
        mb: "-1px",
        _selected: {
          color: _(r + ".600", r + ".300")(t),
          borderColor: "inherit",
          borderBottomColor: _("white", "gray.800")(t),
        },
      },
      tablist: {
        mb: "-1px",
        borderBottom: "1px solid",
        borderColor: "inherit",
      },
    };
  },
  h_ = function (t) {
    var r = t.colorScheme;
    return {
      tab: {
        border: "1px solid",
        borderColor: "inherit",
        bg: _("gray.50", "whiteAlpha.50")(t),
        mb: "-1px",
        _notLast: { marginEnd: "-1px" },
        _selected: {
          bg: _("#fff", "gray.800")(t),
          color: _(r + ".600", r + ".300")(t),
          borderColor: "inherit",
          borderTopColor: "currentColor",
          borderBottomColor: "transparent",
        },
      },
      tablist: {
        mb: "-1px",
        borderBottom: "1px solid",
        borderColor: "inherit",
      },
    };
  },
  m_ = function (t) {
    var r = t.colorScheme,
      n = t.theme;
    return {
      tab: {
        borderRadius: "full",
        fontWeight: "semibold",
        color: "gray.600",
        _selected: { color: me(n, r + ".700"), bg: me(n, r + ".100") },
      },
    };
  },
  v_ = function (t) {
    var r = t.colorScheme;
    return {
      tab: {
        borderRadius: "full",
        fontWeight: "semibold",
        color: _("gray.600", "inherit")(t),
        _selected: {
          color: _("#fff", "gray.800")(t),
          bg: _(r + ".600", r + ".300")(t),
        },
      },
    };
  },
  g_ = {},
  y_ = {
    line: f_,
    enclosed: p_,
    "enclosed-colored": h_,
    "soft-rounded": m_,
    "solid-rounded": v_,
    unstyled: g_,
  },
  b_ = { size: "md", variant: "line", colorScheme: "blue" },
  S_ = {
    parts: sx.keys,
    baseStyle: c_,
    sizes: d_,
    variants: y_,
    defaultProps: b_,
  },
  x_ = {
    fontWeight: "medium",
    lineHeight: 1.2,
    outline: 0,
    _focus: { boxShadow: "outline" },
  },
  w_ = { lineHeight: 1.2, overflow: "visible" },
  k_ = {
    fontSize: "18px",
    w: "1.25rem",
    h: "1.25rem",
    transitionProperty: "common",
    transitionDuration: "normal",
    borderRadius: "full",
    marginStart: "0.375rem",
    marginEnd: "-1",
    opacity: 0.5,
    _disabled: { opacity: 0.4 },
    _focus: { boxShadow: "outline", bg: "rgba(0, 0, 0, 0.14)" },
    _hover: { opacity: 0.8 },
    _active: { opacity: 1 },
  },
  __ = { container: x_, label: w_, closeButton: k_ },
  C_ = {
    sm: {
      container: {
        minH: "1.25rem",
        minW: "1.25rem",
        fontSize: "xs",
        px: 2,
        borderRadius: "md",
      },
      closeButton: { marginEnd: "-2px", marginStart: "0.35rem" },
    },
    md: {
      container: {
        minH: "1.5rem",
        minW: "1.5rem",
        fontSize: "sm",
        borderRadius: "md",
        px: 2,
      },
    },
    lg: {
      container: {
        minH: 8,
        minW: 8,
        fontSize: "md",
        borderRadius: "md",
        px: 3,
      },
    },
  },
  E_ = {
    subtle: function (t) {
      return { container: bn.variants.subtle(t) };
    },
    solid: function (t) {
      return { container: bn.variants.solid(t) };
    },
    outline: function (t) {
      return { container: bn.variants.outline(t) };
    },
  },
  T_ = { size: "md", variant: "subtle", colorScheme: "gray" },
  R_ = {
    parts: cx.keys,
    variants: E_,
    baseStyle: __,
    sizes: C_,
    defaultProps: T_,
  },
  Rh,
  Ph,
  $h,
  zh,
  Ah,
  P_ = ce({}, oe.baseStyle.field, {
    paddingY: "8px",
    minHeight: "80px",
    lineHeight: "short",
    verticalAlign: "top",
  }),
  $_ = {
    outline: function (t) {
      var r;
      return (r = oe.variants.outline(t).field) != null ? r : {};
    },
    flushed: function (t) {
      var r;
      return (r = oe.variants.flushed(t).field) != null ? r : {};
    },
    filled: function (t) {
      var r;
      return (r = oe.variants.filled(t).field) != null ? r : {};
    },
    unstyled: (Rh = oe.variants.unstyled.field) != null ? Rh : {},
  },
  z_ = {
    xs: (Ph = oe.sizes.xs.field) != null ? Ph : {},
    sm: ($h = oe.sizes.sm.field) != null ? $h : {},
    md: (zh = oe.sizes.md.field) != null ? zh : {},
    lg: (Ah = oe.sizes.lg.field) != null ? Ah : {},
  },
  A_ = { size: "md", variant: "outline" },
  I_ = { baseStyle: P_, sizes: z_, variants: $_, defaultProps: A_ },
  fc = Ge("tooltip-bg"),
  O_ = Ge("popper-arrow-bg"),
  B_ = function (t) {
    var r,
      n = _("gray.700", "gray.300")(t);
    return (
      (r = {}),
      (r[fc.variable] = "colors." + n),
      (r.px = "8px"),
      (r.py = "2px"),
      (r.bg = [fc.reference]),
      (r[O_.variable] = [fc.reference]),
      (r.color = _("whiteAlpha.900", "gray.900")(t)),
      (r.borderRadius = "sm"),
      (r.fontWeight = "medium"),
      (r.fontSize = "sm"),
      (r.boxShadow = "md"),
      (r.maxW = "320px"),
      (r.zIndex = "tooltip"),
      r
    );
  },
  M_ = { baseStyle: B_ },
  F_ = function (t) {
    return { color: _("red.500", "red.300")(t), mt: 2, fontSize: "sm" };
  },
  N_ = function (t) {
    return { marginEnd: "0.5em", color: _("red.500", "red.300")(t) };
  },
  L_ = function (t) {
    return { text: F_(t), icon: N_(t) };
  },
  j_ = { parts: XS.keys, baseStyle: L_ },
  D_ = {
    Accordion: vx,
    Alert: _x,
    Avatar: Ox,
    Badge: bn,
    Breadcrumb: Hx,
    Button: Jx,
    Checkbox: tc,
    CloseButton: sw,
    Code: pw,
    Container: mw,
    Divider: xw,
    Drawer: Aw,
    Editable: Mw,
    Form: jw,
    FormLabel: Ww,
    Heading: Gw,
    Input: oe,
    Kbd: rk,
    Link: ik,
    List: lk,
    Menu: mk,
    Modal: Ek,
    NumberInput: Fk,
    PinInput: Wk,
    Popover: Zk,
    Progress: a2,
    Radio: d2,
    Select: v2,
    Skeleton: b2,
    SkipLink: x2,
    Slider: I2,
    Spinner: F2,
    Stat: U2,
    Switch: Z2,
    Table: o_,
    Tabs: S_,
    Tag: R_,
    Textarea: I_,
    Tooltip: M_,
    FormError: j_,
  },
  W_ = {
    none: 0,
    "1px": "1px solid",
    "2px": "2px solid",
    "4px": "4px solid",
    "8px": "8px solid",
  },
  H_ = W_,
  V_ = AS({ sm: "30em", md: "48em", lg: "62em", xl: "80em", "2xl": "96em" }),
  U_ = V_,
  G_ = {
    transparent: "transparent",
    current: "currentColor",
    black: "#000000",
    white: "#FFFFFF",
    whiteAlpha: {
      50: "rgba(255, 255, 255, 0.04)",
      100: "rgba(255, 255, 255, 0.06)",
      200: "rgba(255, 255, 255, 0.08)",
      300: "rgba(255, 255, 255, 0.16)",
      400: "rgba(255, 255, 255, 0.24)",
      500: "rgba(255, 255, 255, 0.36)",
      600: "rgba(255, 255, 255, 0.48)",
      700: "rgba(255, 255, 255, 0.64)",
      800: "rgba(255, 255, 255, 0.80)",
      900: "rgba(255, 255, 255, 0.92)",
    },
    blackAlpha: {
      50: "rgba(0, 0, 0, 0.04)",
      100: "rgba(0, 0, 0, 0.06)",
      200: "rgba(0, 0, 0, 0.08)",
      300: "rgba(0, 0, 0, 0.16)",
      400: "rgba(0, 0, 0, 0.24)",
      500: "rgba(0, 0, 0, 0.36)",
      600: "rgba(0, 0, 0, 0.48)",
      700: "rgba(0, 0, 0, 0.64)",
      800: "rgba(0, 0, 0, 0.80)",
      900: "rgba(0, 0, 0, 0.92)",
    },
    gray: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#171923",
    },
    red: {
      50: "#FFF5F5",
      100: "#FED7D7",
      200: "#FEB2B2",
      300: "#FC8181",
      400: "#F56565",
      500: "#E53E3E",
      600: "#C53030",
      700: "#9B2C2C",
      800: "#822727",
      900: "#63171B",
    },
    orange: {
      50: "#FFFAF0",
      100: "#FEEBC8",
      200: "#FBD38D",
      300: "#F6AD55",
      400: "#ED8936",
      500: "#DD6B20",
      600: "#C05621",
      700: "#9C4221",
      800: "#7B341E",
      900: "#652B19",
    },
    yellow: {
      50: "#FFFFF0",
      100: "#FEFCBF",
      200: "#FAF089",
      300: "#F6E05E",
      400: "#ECC94B",
      500: "#D69E2E",
      600: "#B7791F",
      700: "#975A16",
      800: "#744210",
      900: "#5F370E",
    },
    green: {
      50: "#F0FFF4",
      100: "#C6F6D5",
      200: "#9AE6B4",
      300: "#68D391",
      400: "#48BB78",
      500: "#38A169",
      600: "#2F855A",
      700: "#276749",
      800: "#22543D",
      900: "#1C4532",
    },
    teal: {
      50: "#E6FFFA",
      100: "#B2F5EA",
      200: "#81E6D9",
      300: "#4FD1C5",
      400: "#38B2AC",
      500: "#319795",
      600: "#2C7A7B",
      700: "#285E61",
      800: "#234E52",
      900: "#1D4044",
    },
    blue: {
      50: "#ebf8ff",
      100: "#bee3f8",
      200: "#90cdf4",
      300: "#63b3ed",
      400: "#4299e1",
      500: "#3182ce",
      600: "#2b6cb0",
      700: "#2c5282",
      800: "#2a4365",
      900: "#1A365D",
    },
    cyan: {
      50: "#EDFDFD",
      100: "#C4F1F9",
      200: "#9DECF9",
      300: "#76E4F7",
      400: "#0BC5EA",
      500: "#00B5D8",
      600: "#00A3C4",
      700: "#0987A0",
      800: "#086F83",
      900: "#065666",
    },
    purple: {
      50: "#FAF5FF",
      100: "#E9D8FD",
      200: "#D6BCFA",
      300: "#B794F4",
      400: "#9F7AEA",
      500: "#805AD5",
      600: "#6B46C1",
      700: "#553C9A",
      800: "#44337A",
      900: "#322659",
    },
    pink: {
      50: "#FFF5F7",
      100: "#FED7E2",
      200: "#FBB6CE",
      300: "#F687B3",
      400: "#ED64A6",
      500: "#D53F8C",
      600: "#B83280",
      700: "#97266D",
      800: "#702459",
      900: "#521B41",
    },
    linkedin: {
      50: "#E8F4F9",
      100: "#CFEDFB",
      200: "#9BDAF3",
      300: "#68C7EC",
      400: "#34B3E4",
      500: "#00A0DC",
      600: "#008CC9",
      700: "#0077B5",
      800: "#005E93",
      900: "#004471",
    },
    facebook: {
      50: "#E8F4F9",
      100: "#D9DEE9",
      200: "#B7C2DA",
      300: "#6482C0",
      400: "#4267B2",
      500: "#385898",
      600: "#314E89",
      700: "#29487D",
      800: "#223B67",
      900: "#1E355B",
    },
    messenger: {
      50: "#D0E6FF",
      100: "#B9DAFF",
      200: "#A2CDFF",
      300: "#7AB8FF",
      400: "#2E90FF",
      500: "#0078FF",
      600: "#0063D1",
      700: "#0052AC",
      800: "#003C7E",
      900: "#002C5C",
    },
    whatsapp: {
      50: "#dffeec",
      100: "#b9f5d0",
      200: "#90edb3",
      300: "#65e495",
      400: "#3cdd78",
      500: "#22c35e",
      600: "#179848",
      700: "#0c6c33",
      800: "#01421c",
      900: "#001803",
    },
    twitter: {
      50: "#E5F4FD",
      100: "#C8E9FB",
      200: "#A8DCFA",
      300: "#83CDF7",
      400: "#57BBF5",
      500: "#1DA1F2",
      600: "#1A94DA",
      700: "#1681BF",
      800: "#136B9E",
      900: "#0D4D71",
    },
    telegram: {
      50: "#E3F2F9",
      100: "#C5E4F3",
      200: "#A2D4EC",
      300: "#7AC1E4",
      400: "#47A9DA",
      500: "#0088CC",
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },
  },
  Y_ = G_,
  Q_ = {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  X_ = Q_,
  K_ = {
    xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    none: "none",
    "dark-lg":
      "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px",
  },
  q_ = K_,
  Z_ = {
    common:
      "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    colors: "background-color, border-color, color, fill, stroke",
    dimensions: "width, height",
    position: "left, right, top, bottom",
    background: "background-color, background-image, background-position",
  },
  J_ = {
    "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
    "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
    "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  eC = {
    "ultra-fast": "50ms",
    faster: "100ms",
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
    slower: "400ms",
    "ultra-slow": "500ms",
  },
  tC = { property: Z_, easing: J_, duration: eC },
  rC = tC,
  nC = {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1e3,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  iC = nC,
  oC = {
    none: 0,
    sm: "4px",
    base: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "40px",
    "3xl": "64px",
  },
  aC = oC,
  lC = ce(
    { breakpoints: U_, zIndices: iC, radii: X_, blur: aC, colors: Y_ },
    kh,
    { sizes: xh, shadows: q_, space: Sh, borders: H_, transition: rC }
  ),
  uC = lC,
  sC = {
    global: function (t) {
      return {
        body: {
          fontFamily: "body",
          color: _("gray.800", "whiteAlpha.900")(t),
          bg: _("white", "gray.800")(t),
          transitionProperty: "background-color",
          transitionDuration: "normal",
          lineHeight: "base",
        },
        "*::placeholder": { color: _("gray.400", "whiteAlpha.400")(t) },
        "*, *::before, &::after": {
          borderColor: _("gray.200", "whiteAlpha.300")(t),
          wordWrap: "break-word",
        },
      };
    },
  },
  cC = sC,
  dC = [
    "borders",
    "breakpoints",
    "colors",
    "components",
    "config",
    "direction",
    "fonts",
    "fontSizes",
    "fontWeights",
    "letterSpacings",
    "lineHeights",
    "radii",
    "shadows",
    "sizes",
    "space",
    "styles",
    "transition",
    "zIndices",
  ];
function fC(e) {
  return et(e)
    ? dC.every(function (t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      })
    : !1;
}
var pC = "ltr",
  hC = {
    useSystemColorMode: !1,
    initialColorMode: "light",
    cssVarPrefix: "chakra",
  },
  Ih = ce({ direction: pC }, uC, { components: D_, styles: cC, config: hC }),
  Oh = {
    border: "0px",
    clip: "rect(0px, 0px, 0px, 0px)",
    height: "1px",
    width: "1px",
    margin: "-1px",
    padding: "0px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute",
  },
  mC = fe("span", { baseStyle: Oh });
fe("input", { baseStyle: Oh });
function Ua() {
  return (
    (Ua =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Ua.apply(this, arguments)
  );
}
function vC(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var gC = ["label", "thickness", "speed", "emptyColor", "className"],
  yC = g0({
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  }),
  bC = Ne(function (e, t) {
    var r = Bi("Spinner", e),
      n = Oi(e),
      i = n.label,
      o = i === void 0 ? "Loading..." : i,
      a = n.thickness,
      l = a === void 0 ? "2px" : a,
      u = n.speed,
      s = u === void 0 ? "0.45s" : u,
      m = n.emptyColor,
      b = m === void 0 ? "transparent" : m,
      v = n.className,
      w = vC(n, gC),
      C = tt("chakra-spinner", v),
      k = Ua(
        {
          display: "inline-block",
          borderColor: "currentColor",
          borderStyle: "solid",
          borderRadius: "99999px",
          borderWidth: l,
          borderBottomColor: b,
          borderLeftColor: b,
          animation: yC + " " + s + " linear infinite",
        },
        r
      );
    return R.exports.createElement(
      fe.div,
      Ua({ ref: t, __css: k, className: C }, w),
      o && R.exports.createElement(mC, null, o)
    );
  });
function pc(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function ur() {
  return (
    (ur =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    ur.apply(this, arguments)
  );
}
var SC = $i({ strict: !1, name: "ButtonGroupContext" }),
  xC = SC[1],
  wC = ["label", "placement", "spacing", "children", "className", "__css"],
  Bh = function (t) {
    var r = t.label,
      n = t.placement;
    t.spacing;
    var i = t.children,
      o =
        i === void 0
          ? R.exports.createElement(bC, {
              color: "currentColor",
              width: "1em",
              height: "1em",
            })
          : i,
      a = t.className,
      l = t.__css,
      u = pc(t, wC),
      s = tt("chakra-button__spinner", a),
      m = n === "start" ? "marginEnd" : "marginStart",
      b = R.exports.useMemo(
        function () {
          var v;
          return ur(
            ((v = {
              display: "flex",
              alignItems: "center",
              position: r ? "relative" : "absolute",
            }),
            (v[m] = r ? "0.5rem" : 0),
            (v.fontSize = "1em"),
            (v.lineHeight = "normal"),
            v),
            l
          );
        },
        [l, r, m]
      );
    return R.exports.createElement(
      fe.div,
      ur({ className: s }, u, { __css: b }),
      o
    );
  },
  kC = ["children", "className"],
  Mh = function (t) {
    var r = t.children,
      n = t.className,
      i = pc(t, kC),
      o = R.exports.isValidElement(r)
        ? R.exports.cloneElement(r, { "aria-hidden": !0, focusable: !1 })
        : r,
      a = tt("chakra-button__icon", n);
    return R.exports.createElement(
      fe.span,
      ur({ display: "inline-flex", alignSelf: "center", flexShrink: 0 }, i, {
        className: a,
      }),
      o
    );
  };
function _C(e) {
  var t = R.exports.useState(!e),
    r = t[0],
    n = t[1],
    i = R.exports.useCallback(function (a) {
      !a || n(a.tagName === "BUTTON");
    }, []),
    o = r ? "button" : void 0;
  return { ref: i, type: o };
}
var CC = [
    "isDisabled",
    "isLoading",
    "isActive",
    "isFullWidth",
    "children",
    "leftIcon",
    "rightIcon",
    "loadingText",
    "iconSpacing",
    "type",
    "spinner",
    "spinnerPlacement",
    "className",
    "as",
  ],
  lE = Ne(function (e, t) {
    var r = xC(),
      n = Bi("Button", ur({}, r, e)),
      i = Oi(e),
      o = i.isDisabled,
      a = o === void 0 ? (r == null ? void 0 : r.isDisabled) : o,
      l = i.isLoading,
      u = i.isActive,
      s = i.isFullWidth,
      m = i.children,
      b = i.leftIcon,
      v = i.rightIcon,
      w = i.loadingText,
      C = i.iconSpacing,
      k = C === void 0 ? "0.5rem" : C,
      p = i.type,
      d = i.spinner,
      f = i.spinnerPlacement,
      y = f === void 0 ? "start" : f,
      x = i.className,
      $ = i.as,
      E = pc(i, CC),
      T = R.exports.useMemo(
        function () {
          var ee,
            ae = lt(
              {},
              (ee = n == null ? void 0 : n._focus) != null ? ee : {},
              { zIndex: 1 }
            );
          return ur(
            {
              display: "inline-flex",
              appearance: "none",
              alignItems: "center",
              justifyContent: "center",
              userSelect: "none",
              position: "relative",
              whiteSpace: "nowrap",
              verticalAlign: "middle",
              outline: "none",
              width: s ? "100%" : "auto",
            },
            n,
            !!r && { _focus: ae }
          );
        },
        [n, r, s]
      ),
      M = _C($),
      A = M.ref,
      D = M.type,
      Pe = { rightIcon: v, leftIcon: b, iconSpacing: k, children: m };
    return R.exports.createElement(
      fe.button,
      ur(
        {
          disabled: a || l,
          ref: h1(t, A),
          as: $,
          type: p != null ? p : D,
          "data-active": k0(u),
          "data-loading": k0(l),
          __css: T,
          className: tt("chakra-button", x),
        },
        E
      ),
      l &&
        y === "start" &&
        R.exports.createElement(
          Bh,
          {
            className: "chakra-button__spinner--start",
            label: w,
            placement: "start",
          },
          d
        ),
      l
        ? w ||
            R.exports.createElement(
              fe.span,
              { opacity: 0 },
              R.exports.createElement(Fh, Pe)
            )
        : R.exports.createElement(Fh, Pe),
      l &&
        y === "end" &&
        R.exports.createElement(
          Bh,
          {
            className: "chakra-button__spinner--end",
            label: w,
            placement: "end",
          },
          d
        )
    );
  });
function Fh(e) {
  var t = e.leftIcon,
    r = e.rightIcon,
    n = e.children,
    i = e.iconSpacing;
  return R.exports.createElement(
    R.exports.Fragment,
    null,
    t && R.exports.createElement(Mh, { marginEnd: i }, t),
    n,
    r && R.exports.createElement(Mh, { marginStart: i }, r)
  );
}
function Ga() {
  return (
    (Ga =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Ga.apply(this, arguments)
  );
}
function Nh(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var EC = $i({ strict: !1, name: "FormControlContext" }),
  TC = EC[1],
  RC = ["isDisabled", "isInvalid", "isReadOnly", "isRequired"],
  PC = [
    "id",
    "disabled",
    "readOnly",
    "required",
    "isRequired",
    "isInvalid",
    "isReadOnly",
    "isDisabled",
    "onFocus",
    "onBlur",
  ];
function $C(e) {
  var t = zC(e),
    r = t.isDisabled,
    n = t.isInvalid,
    i = t.isReadOnly,
    o = t.isRequired,
    a = Nh(t, RC);
  return Ga({}, a, {
    disabled: r,
    readOnly: i,
    required: o,
    "aria-invalid": Is(n),
    "aria-required": Is(o),
    "aria-readonly": Is(i),
  });
}
function zC(e) {
  var t,
    r,
    n,
    i = TC(),
    o = e.id,
    a = e.disabled,
    l = e.readOnly,
    u = e.required,
    s = e.isRequired,
    m = e.isInvalid,
    b = e.isReadOnly,
    v = e.isDisabled,
    w = e.onFocus,
    C = e.onBlur,
    k = Nh(e, PC),
    p = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return (
    i != null &&
      i.hasFeedbackText &&
      i != null &&
      i.isInvalid &&
      p.push(i.feedbackId),
    i != null && i.hasHelpText && p.push(i.helpTextId),
    Ga({}, k, {
      "aria-describedby": p.join(" ") || void 0,
      id: o != null ? o : i == null ? void 0 : i.id,
      isDisabled:
        (t = a != null ? a : v) != null ? t : i == null ? void 0 : i.isDisabled,
      isReadOnly:
        (r = l != null ? l : b) != null ? r : i == null ? void 0 : i.isReadOnly,
      isRequired:
        (n = u != null ? u : s) != null ? n : i == null ? void 0 : i.isRequired,
      isInvalid: m != null ? m : i == null ? void 0 : i.isInvalid,
      onFocus: _0(i == null ? void 0 : i.onFocus, w),
      onBlur: _0(i == null ? void 0 : i.onBlur, C),
    })
  );
}
function kt() {
  return (
    (kt =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    kt.apply(this, arguments)
  );
}
var AC = Ne(function (e, t) {
  var r = lS("Input", e),
    n = Oi(e),
    i = $C(n),
    o = tt("chakra-input", e.className);
  return R.exports.createElement(
    fe.input,
    kt({}, i, { __css: r.field, ref: t, className: o })
  );
});
AC.id = "Input";
function Ya(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var IC = ["placement"],
  OC = {
    left: {
      marginEnd: "-1px",
      borderEndRadius: 0,
      borderEndColor: "transparent",
    },
    right: {
      marginStart: "-1px",
      borderStartRadius: 0,
      borderStartColor: "transparent",
    },
  },
  BC = fe("div", {
    baseStyle: {
      flex: "0 0 auto",
      width: "auto",
      display: "flex",
      alignItems: "center",
      whiteSpace: "nowrap",
    },
  }),
  Lh = Ne(function (e, t) {
    var r,
      n = e.placement,
      i = n === void 0 ? "left" : n,
      o = Ya(e, IC),
      a = (r = OC[i]) != null ? r : {},
      l = rh();
    return R.exports.createElement(
      BC,
      kt({ ref: t }, o, { __css: kt({}, l.addon, a) })
    );
  }),
  MC = Ne(function (e, t) {
    return R.exports.createElement(
      Lh,
      kt({ ref: t, placement: "left" }, e, {
        className: tt("chakra-input__left-addon", e.className),
      })
    );
  });
MC.id = "InputLeftAddon";
var FC = Ne(function (e, t) {
  return R.exports.createElement(
    Lh,
    kt({ ref: t, placement: "right" }, e, {
      className: tt("chakra-input__right-addon", e.className),
    })
  );
});
FC.id = "InputRightAddon";
var NC = ["placement"],
  LC = ["className"],
  jC = ["className"],
  DC = fe("div", {
    baseStyle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "0",
      zIndex: 2,
    },
  }),
  hc = Ne(function (e, t) {
    var r,
      n,
      i,
      o = e.placement,
      a = o === void 0 ? "left" : o,
      l = Ya(e, NC),
      u = rh(),
      s = u.field,
      m = a === "left" ? "insetStart" : "insetEnd",
      b =
        ((i = {}),
        (i[m] = "0"),
        (i.width =
          (r = s == null ? void 0 : s.height) != null
            ? r
            : s == null
            ? void 0
            : s.h),
        (i.height =
          (n = s == null ? void 0 : s.height) != null
            ? n
            : s == null
            ? void 0
            : s.h),
        (i.fontSize = s == null ? void 0 : s.fontSize),
        i);
    return R.exports.createElement(DC, kt({ ref: t, __css: b }, l));
  });
hc.id = "InputElement";
var WC = Ne(function (e, t) {
  var r = e.className,
    n = Ya(e, LC),
    i = tt("chakra-input__left-element", r);
  return R.exports.createElement(
    hc,
    kt({ ref: t, placement: "left", className: i }, n)
  );
});
WC.id = "InputLeftElement";
var HC = Ne(function (e, t) {
  var r = e.className,
    n = Ya(e, jC),
    i = tt("chakra-input__right-element", r);
  return R.exports.createElement(
    hc,
    kt({ ref: t, placement: "right", className: i }, n)
  );
});
HC.id = "InputRightElement";
function Ft() {
  return (
    (Ft =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Ft.apply(this, arguments)
  );
}
function Qa(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
fe("div");
fe("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
var VC = ["direction", "align", "justify", "wrap", "basis", "grow", "shrink"],
  uE = Ne(function (e, t) {
    var r = e.direction,
      n = e.align,
      i = e.justify,
      o = e.wrap,
      a = e.basis,
      l = e.grow,
      u = e.shrink,
      s = Qa(e, VC),
      m = {
        display: "flex",
        flexDirection: r,
        alignItems: n,
        justifyContent: i,
        flexWrap: o,
        flexBasis: a,
        flexGrow: l,
        flexShrink: u,
      };
    return R.exports.createElement(fe.div, Ft({ ref: t, __css: m }, s));
  }),
  UC = ["className"],
  sE = Ne(function (e, t) {
    var r = Bi("Heading", e),
      n = Oi(e);
    n.className;
    var i = Qa(n, UC);
    return R.exports.createElement(
      fe.h2,
      Ft({ ref: t, className: tt("chakra-heading", e.className) }, i, {
        __css: r,
      })
    );
  });
fe("div", {
  baseStyle: { flex: 1, justifySelf: "stretch", alignSelf: "stretch" },
});
var mc = "& > *:not(style) ~ *:not(style)";
function GC(e) {
  var t,
    r = e.spacing,
    n = e.direction,
    i = {
      column: { marginTop: r, marginEnd: 0, marginBottom: 0, marginStart: 0 },
      row: { marginTop: 0, marginEnd: 0, marginBottom: 0, marginStart: r },
      "column-reverse": {
        marginTop: 0,
        marginEnd: 0,
        marginBottom: r,
        marginStart: 0,
      },
      "row-reverse": {
        marginTop: 0,
        marginEnd: r,
        marginBottom: 0,
        marginStart: 0,
      },
    };
  return (
    (t = { flexDirection: n }),
    (t[mc] = C0(n, function (o) {
      return i[o];
    })),
    t
  );
}
function YC(e) {
  var t = e.spacing,
    r = e.direction,
    n = {
      column: { my: t, mx: 0, borderLeftWidth: 0, borderBottomWidth: "1px" },
      "column-reverse": {
        my: t,
        mx: 0,
        borderLeftWidth: 0,
        borderBottomWidth: "1px",
      },
      row: { mx: t, my: 0, borderLeftWidth: "1px", borderBottomWidth: 0 },
      "row-reverse": {
        mx: t,
        my: 0,
        borderLeftWidth: "1px",
        borderBottomWidth: 0,
      },
    };
  return {
    "&": C0(r, function (i) {
      return n[i];
    }),
  };
}
var QC = [
    "isInline",
    "direction",
    "align",
    "justify",
    "spacing",
    "wrap",
    "children",
    "divider",
    "className",
    "shouldWrapChildren",
  ],
  XC = function (t) {
    return R.exports.createElement(
      fe.div,
      Ft({ className: "chakra-stack__item" }, t, {
        __css: Ft(
          { display: "inline-block", flex: "0 0 auto", minWidth: 0 },
          t.__css
        ),
      })
    );
  },
  KC = Ne(function (e, t) {
    var r,
      n = e.isInline,
      i = e.direction,
      o = e.align,
      a = e.justify,
      l = e.spacing,
      u = l === void 0 ? "0.5rem" : l,
      s = e.wrap,
      m = e.children,
      b = e.divider,
      v = e.className,
      w = e.shouldWrapChildren,
      C = Qa(e, QC),
      k = n ? "row" : i != null ? i : "column",
      p = R.exports.useMemo(
        function () {
          return GC({ direction: k, spacing: u });
        },
        [k, u]
      ),
      d = R.exports.useMemo(
        function () {
          return YC({ spacing: u, direction: k });
        },
        [u, k]
      ),
      f = !!b,
      y = !w && !f,
      x = d1(m),
      $ = y
        ? x
        : x.map(function (T, M) {
            var A = typeof T.key != "undefined" ? T.key : M,
              D = M + 1 === x.length,
              Pe = R.exports.createElement(XC, { key: A }, T),
              ee = w ? Pe : T;
            if (!f) return ee;
            var ae = R.exports.cloneElement(b, { __css: d }),
              Nt = D ? null : ae;
            return R.exports.createElement(
              R.exports.Fragment,
              { key: A },
              ee,
              Nt
            );
          }),
      E = tt("chakra-stack", v);
    return R.exports.createElement(
      fe.div,
      Ft(
        {
          ref: t,
          display: "flex",
          alignItems: o,
          justifyContent: a,
          flexDirection: p.flexDirection,
          flexWrap: s,
          className: E,
          __css: f ? {} : ((r = {}), (r[mc] = p[mc]), r),
        },
        C
      ),
      $
    );
  }),
  cE = Ne(function (e, t) {
    return R.exports.createElement(
      KC,
      Ft({ align: "center" }, e, { direction: "column", ref: t })
    );
  }),
  qC = ["className", "align", "decoration", "casing"],
  dE = Ne(function (e, t) {
    var r = Bi("Text", e),
      n = Oi(e);
    n.className, n.align, n.decoration, n.casing;
    var i = Qa(n, qC),
      o = Ps({
        textAlign: e.align,
        textDecoration: e.decoration,
        textTransform: e.casing,
      });
    return R.exports.createElement(
      fe.p,
      Ft({ ref: t, className: tt("chakra-text", e.className) }, o, i, {
        __css: r,
      })
    );
  }),
  ZC = uS;
ZC.defaultProps = { theme: Ih };
function fE() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = [].concat(t),
    i = t[t.length - 1];
  return (
    fC(i) && n.length > 1 ? (n = n.slice(0, n.length - 1)) : (i = Ih),
    s1.apply(
      void 0,
      n.map(function (o) {
        return function (a) {
          return mn(o) ? o(a) : JC(a, o);
        };
      })
    )(i)
  );
}
function JC() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return lt.apply(void 0, [{}].concat(t, [jh]));
}
function jh(e, t, r, n) {
  if ((mn(e) || mn(t)) && Object.prototype.hasOwnProperty.call(n, r))
    return function () {
      var i = mn(e) ? e.apply(void 0, arguments) : e,
        o = mn(t) ? t.apply(void 0, arguments) : t;
      return lt({}, i, o, jh);
    };
}
var Xa,
  eE = new Uint8Array(16);
function tE() {
  if (
    !Xa &&
    ((Xa =
      (typeof crypto != "undefined" &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)) ||
      (typeof msCrypto != "undefined" &&
        typeof msCrypto.getRandomValues == "function" &&
        msCrypto.getRandomValues.bind(msCrypto))),
    !Xa)
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
    );
  return Xa(eE);
}
var rE =
  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function nE(e) {
  return typeof e == "string" && rE.test(e);
}
var ke = [];
for (var vc = 0; vc < 256; ++vc) ke.push((vc + 256).toString(16).substr(1));
function iE(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    r = (
      ke[e[t + 0]] +
      ke[e[t + 1]] +
      ke[e[t + 2]] +
      ke[e[t + 3]] +
      "-" +
      ke[e[t + 4]] +
      ke[e[t + 5]] +
      "-" +
      ke[e[t + 6]] +
      ke[e[t + 7]] +
      "-" +
      ke[e[t + 8]] +
      ke[e[t + 9]] +
      "-" +
      ke[e[t + 10]] +
      ke[e[t + 11]] +
      ke[e[t + 12]] +
      ke[e[t + 13]] +
      ke[e[t + 14]] +
      ke[e[t + 15]]
    ).toLowerCase();
  if (!nE(r)) throw TypeError("Stringified UUID is invalid");
  return r;
}
function pE(e, t, r) {
  e = e || {};
  var n = e.random || (e.rng || tE)();
  if (((n[6] = (n[6] & 15) | 64), (n[8] = (n[8] & 63) | 128), t)) {
    r = r || 0;
    for (var i = 0; i < 16; ++i) t[r + i] = n[i];
    return t;
  }
  return iE(n);
}
export {
  lE as B,
  ZC as C,
  uE as F,
  sE as H,
  AC as I,
  aE as R,
  dE as T,
  cE as V,
  w1 as a,
  oE as b,
  fE as e,
  k1 as j,
  R as r,
  pE as v,
};
