var FullCalendar = (function (e) {
  "use strict";
  var t = function (e, n) {
    return (t =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, t) {
          e.__proto__ = t;
        }) ||
      function (e, t) {
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      })(e, n);
  };
  function n(e, n) {
    if ("function" != typeof n && null !== n)
      throw new TypeError(
        "Class extends value " + String(n) + " is not a constructor or null"
      );
    function r() {
      this.constructor = e;
    }
    t(e, n),
      (e.prototype =
        null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
  }
  var r = function () {
    return (r =
      Object.assign ||
      function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var o in (t = arguments[n]))
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
      }).apply(this, arguments);
  };
  function o(e, t, n) {
    if (n || 2 === arguments.length)
      for (var r, o = 0, i = t.length; o < i; o++)
        (!r && o in t) ||
          (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
    return e.concat(r || t);
  }
  var i,
    a,
    s,
    l,
    u,
    c,
    d,
    p,
    f = {},
    h = [],
    v = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function g(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function m(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  }
  function y(e, t, n) {
    var r,
      o,
      a,
      s = {};
    for (a in t)
      "key" == a ? (r = t[a]) : "ref" == a ? (o = t[a]) : (s[a] = t[a]);
    if (
      (arguments.length > 2 &&
        (s.children = arguments.length > 3 ? i.call(arguments, 2) : n),
      "function" == typeof e && null != e.defaultProps)
    )
      for (a in e.defaultProps) void 0 === s[a] && (s[a] = e.defaultProps[a]);
    return E(e, s, r, o, null);
  }
  function E(e, t, n, r, o) {
    var i = {
      type: e,
      props: t,
      key: n,
      ref: r,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: null == o ? ++s : o,
    };
    return null == o && null != a.vnode && a.vnode(i), i;
  }
  function S(e) {
    return e.children;
  }
  function b(e, t, n) {
    "-" === t[0]
      ? e.setProperty(t, null == n ? "" : n)
      : (e[t] =
          null == n ? "" : "number" != typeof n || v.test(t) ? n : n + "px");
  }
  function D(e, t, n, r, o) {
    var i;
    e: if ("style" === t)
      if ("string" == typeof n) e.style.cssText = n;
      else {
        if (("string" == typeof r && (e.style.cssText = r = ""), r))
          for (t in r) (n && t in n) || b(e.style, t, "");
        if (n) for (t in n) (r && n[t] === r[t]) || b(e.style, t, n[t]);
      }
    else if ("o" === t[0] && "n" === t[1])
      (i = t !== (t = t.replace(/Capture$/, ""))),
        (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
        e.l || (e.l = {}),
        (e.l[t + i] = n),
        n
          ? r || e.addEventListener(t, i ? w : C, i)
          : e.removeEventListener(t, i ? w : C, i);
    else if ("dangerouslySetInnerHTML" !== t) {
      if (o) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (
        "width" !== t &&
        "height" !== t &&
        "href" !== t &&
        "list" !== t &&
        "form" !== t &&
        "tabIndex" !== t &&
        "download" !== t &&
        t in e
      )
        try {
          e[t] = null == n ? "" : n;
          break e;
        } catch (e) {}
      "function" == typeof n ||
        (null == n || (!1 === n && -1 == t.indexOf("-"))
          ? e.removeAttribute(t)
          : e.setAttribute(t, n));
    }
  }
  function C(e) {
    l = !0;
    try {
      return this.l[e.type + !1](a.event ? a.event(e) : e);
    } finally {
      l = !1;
    }
  }
  function w(e) {
    l = !0;
    try {
      return this.l[e.type + !0](a.event ? a.event(e) : e);
    } finally {
      l = !1;
    }
  }
  function _(e, t) {
    (this.props = e), (this.context = t);
  }
  function R(e, t) {
    if (null == t) return e.__ ? R(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var n; t < e.__k.length; t++)
      if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
    return "function" == typeof e.type ? R(e) : null;
  }
  function T(e) {
    var t, n;
    if (null != (e = e.__) && null != e.__c) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if (null != (n = e.__k[t]) && null != n.__e) {
          e.__e = e.__c.base = n.__e;
          break;
        }
      return T(e);
    }
  }
  function k(e) {
    l ? setTimeout(e) : d(e);
  }
  function x(e) {
    ((!e.__d && (e.__d = !0) && u.push(e) && !M.__r++) ||
      c !== a.debounceRendering) &&
      ((c = a.debounceRendering) || k)(M);
  }
  function M() {
    var e, t, n, r, o, i, a, s;
    for (
      u.sort(function (e, t) {
        return e.__v.__b - t.__v.__b;
      });
      (e = u.shift());

    )
      e.__d &&
        ((t = u.length),
        (r = void 0),
        (o = void 0),
        (a = (i = (n = e).__v).__e),
        (s = n.__P) &&
          ((r = []),
          ((o = g({}, i)).__v = i.__v + 1),
          A(
            s,
            i,
            o,
            n.__n,
            void 0 !== s.ownerSVGElement,
            null != i.__h ? [a] : null,
            r,
            null == a ? R(i) : a,
            i.__h
          ),
          L(r, i),
          i.__e != a && T(i)),
        u.length > t &&
          u.sort(function (e, t) {
            return e.__v.__b - t.__v.__b;
          }));
    M.__r = 0;
  }
  function I(e, t, n, r, o, i, a, s, l, u) {
    var c,
      d,
      p,
      v,
      g,
      m,
      y,
      b = (r && r.__k) || h,
      D = b.length;
    for (n.__k = [], c = 0; c < t.length; c++)
      if (
        null !=
        (v = n.__k[c] =
          null == (v = t[c]) || "boolean" == typeof v
            ? null
            : "string" == typeof v ||
              "number" == typeof v ||
              "bigint" == typeof v
            ? E(null, v, null, null, v)
            : Array.isArray(v)
            ? E(S, { children: v }, null, null, null)
            : v.__b > 0
            ? E(v.type, v.props, v.key, v.ref ? v.ref : null, v.__v)
            : v)
      ) {
        if (
          ((v.__ = n),
          (v.__b = n.__b + 1),
          null === (p = b[c]) || (p && v.key == p.key && v.type === p.type))
        )
          b[c] = void 0;
        else
          for (d = 0; d < D; d++) {
            if ((p = b[d]) && v.key == p.key && v.type === p.type) {
              b[d] = void 0;
              break;
            }
            p = null;
          }
        A(e, v, (p = p || f), o, i, a, s, l, u),
          (g = v.__e),
          (d = v.ref) &&
            p.ref != d &&
            (y || (y = []),
            p.ref && y.push(p.ref, null, v),
            y.push(d, v.__c || g, v)),
          null != g
            ? (null == m && (m = g),
              "function" == typeof v.type && v.__k === p.__k
                ? (v.__d = l = P(v, l, e))
                : (l = H(e, v, p, b, g, l)),
              "function" == typeof n.type && (n.__d = l))
            : l && p.__e == l && l.parentNode != e && (l = R(p));
      }
    for (n.__e = m, c = D; c--; )
      null != b[c] &&
        ("function" == typeof n.type &&
          null != b[c].__e &&
          b[c].__e == n.__d &&
          (n.__d = O(r).nextSibling),
        V(b[c], b[c]));
    if (y) for (c = 0; c < y.length; c++) W(y[c], y[++c], y[++c]);
  }
  function P(e, t, n) {
    for (var r, o = e.__k, i = 0; o && i < o.length; i++)
      (r = o[i]) &&
        ((r.__ = e),
        (t =
          "function" == typeof r.type ? P(r, t, n) : H(n, r, r, o, r.__e, t)));
    return t;
  }
  function N(e, t) {
    return (
      (t = t || []),
      null == e ||
        "boolean" == typeof e ||
        (Array.isArray(e)
          ? e.some(function (e) {
              N(e, t);
            })
          : t.push(e)),
      t
    );
  }
  function H(e, t, n, r, o, i) {
    var a, s, l;
    if (void 0 !== t.__d) (a = t.__d), (t.__d = void 0);
    else if (null == n || o != i || null == o.parentNode)
      e: if (null == i || i.parentNode !== e) e.appendChild(o), (a = null);
      else {
        for (s = i, l = 0; (s = s.nextSibling) && l < r.length; l += 1)
          if (s == o) break e;
        e.insertBefore(o, i), (a = i);
      }
    return void 0 !== a ? a : o.nextSibling;
  }
  function O(e) {
    var t, n, r;
    if (null == e.type || "string" == typeof e.type) return e.__e;
    if (e.__k)
      for (t = e.__k.length - 1; t >= 0; t--)
        if ((n = e.__k[t]) && (r = O(n))) return r;
    return null;
  }
  function A(e, t, n, r, o, i, s, l, u) {
    var c,
      d,
      p,
      f,
      h,
      v,
      m,
      y,
      E,
      b,
      D,
      C,
      w,
      R,
      T,
      k = t.type;
    if (void 0 !== t.constructor) return null;
    null != n.__h &&
      ((u = n.__h), (l = t.__e = n.__e), (t.__h = null), (i = [l])),
      (c = a.__b) && c(t);
    try {
      e: if ("function" == typeof k) {
        if (
          ((y = t.props),
          (E = (c = k.contextType) && r[c.__c]),
          (b = c ? (E ? E.props.value : c.__) : r),
          n.__c
            ? (m = (d = t.__c = n.__c).__ = d.__E)
            : ("prototype" in k && k.prototype.render
                ? (t.__c = d = new k(y, b))
                : ((t.__c = d = new _(y, b)),
                  (d.constructor = k),
                  (d.render = F)),
              E && E.sub(d),
              (d.props = y),
              d.state || (d.state = {}),
              (d.context = b),
              (d.__n = r),
              (p = d.__d = !0),
              (d.__h = []),
              (d._sb = [])),
          null == d.__s && (d.__s = d.state),
          null != k.getDerivedStateFromProps &&
            (d.__s == d.state && (d.__s = g({}, d.__s)),
            g(d.__s, k.getDerivedStateFromProps(y, d.__s))),
          (f = d.props),
          (h = d.state),
          (d.__v = t),
          p)
        )
          null == k.getDerivedStateFromProps &&
            null != d.componentWillMount &&
            d.componentWillMount(),
            null != d.componentDidMount && d.__h.push(d.componentDidMount);
        else {
          if (
            (null == k.getDerivedStateFromProps &&
              y !== f &&
              null != d.componentWillReceiveProps &&
              d.componentWillReceiveProps(y, b),
            (!d.__e &&
              null != d.shouldComponentUpdate &&
              !1 === d.shouldComponentUpdate(y, d.__s, b)) ||
              t.__v === n.__v)
          ) {
            for (
              t.__v !== n.__v &&
                ((d.props = y), (d.state = d.__s), (d.__d = !1)),
                t.__e = n.__e,
                t.__k = n.__k,
                t.__k.forEach(function (e) {
                  e && (e.__ = t);
                }),
                D = 0;
              D < d._sb.length;
              D++
            )
              d.__h.push(d._sb[D]);
            (d._sb = []), d.__h.length && s.push(d);
            break e;
          }
          null != d.componentWillUpdate && d.componentWillUpdate(y, d.__s, b),
            null != d.componentDidUpdate &&
              d.__h.push(function () {
                d.componentDidUpdate(f, h, v);
              });
        }
        if (
          ((d.context = b),
          (d.props = y),
          (d.__P = e),
          (C = a.__r),
          (w = 0),
          "prototype" in k && k.prototype.render)
        ) {
          for (
            d.state = d.__s,
              d.__d = !1,
              C && C(t),
              c = d.render(d.props, d.state, d.context),
              R = 0;
            R < d._sb.length;
            R++
          )
            d.__h.push(d._sb[R]);
          d._sb = [];
        } else
          do {
            (d.__d = !1),
              C && C(t),
              (c = d.render(d.props, d.state, d.context)),
              (d.state = d.__s);
          } while (d.__d && ++w < 25);
        (d.state = d.__s),
          null != d.getChildContext && (r = g(g({}, r), d.getChildContext())),
          p ||
            null == d.getSnapshotBeforeUpdate ||
            (v = d.getSnapshotBeforeUpdate(f, h)),
          (T =
            null != c && c.type === S && null == c.key ? c.props.children : c),
          I(e, Array.isArray(T) ? T : [T], t, n, r, o, i, s, l, u),
          (d.base = t.__e),
          (t.__h = null),
          d.__h.length && s.push(d),
          m && (d.__E = d.__ = null),
          (d.__e = !1);
      } else
        null == i && t.__v === n.__v
          ? ((t.__k = n.__k), (t.__e = n.__e))
          : (t.__e = U(n.__e, t, n, r, o, i, s, u));
      (c = a.diffed) && c(t);
    } catch (e) {
      (t.__v = null),
        (u || null != i) &&
          ((t.__e = l), (t.__h = !!u), (i[i.indexOf(l)] = null)),
        a.__e(e, t, n);
    }
  }
  function L(e, t) {
    a.__c && a.__c(t, e),
      e.some(function (t) {
        try {
          (e = t.__h),
            (t.__h = []),
            e.some(function (e) {
              e.call(t);
            });
        } catch (e) {
          a.__e(e, t.__v);
        }
      });
  }
  function U(e, t, n, r, o, a, s, l) {
    var u,
      c,
      d,
      p = n.props,
      h = t.props,
      v = t.type,
      g = 0;
    if (("svg" === v && (o = !0), null != a))
      for (; g < a.length; g++)
        if (
          (u = a[g]) &&
          "setAttribute" in u == !!v &&
          (v ? u.localName === v : 3 === u.nodeType)
        ) {
          (e = u), (a[g] = null);
          break;
        }
    if (null == e) {
      if (null === v) return document.createTextNode(h);
      (e = o
        ? document.createElementNS("http://www.w3.org/2000/svg", v)
        : document.createElement(v, h.is && h)),
        (a = null),
        (l = !1);
    }
    if (null === v) p === h || (l && e.data === h) || (e.data = h);
    else {
      if (
        ((a = a && i.call(e.childNodes)),
        (c = (p = n.props || f).dangerouslySetInnerHTML),
        (d = h.dangerouslySetInnerHTML),
        !l)
      ) {
        if (null != a)
          for (p = {}, g = 0; g < e.attributes.length; g++)
            p[e.attributes[g].name] = e.attributes[g].value;
        (d || c) &&
          ((d && ((c && d.__html == c.__html) || d.__html === e.innerHTML)) ||
            (e.innerHTML = (d && d.__html) || ""));
      }
      if (
        ((function (e, t, n, r, o) {
          var i;
          for (i in n)
            "children" === i || "key" === i || i in t || D(e, i, null, n[i], r);
          for (i in t)
            (o && "function" != typeof t[i]) ||
              "children" === i ||
              "key" === i ||
              "value" === i ||
              "checked" === i ||
              n[i] === t[i] ||
              D(e, i, t[i], n[i], r);
        })(e, h, p, o, l),
        d)
      )
        t.__k = [];
      else if (
        ((g = t.props.children),
        I(
          e,
          Array.isArray(g) ? g : [g],
          t,
          n,
          r,
          o && "foreignObject" !== v,
          a,
          s,
          a ? a[0] : n.__k && R(n, 0),
          l
        ),
        null != a)
      )
        for (g = a.length; g--; ) null != a[g] && m(a[g]);
      l ||
        ("value" in h &&
          void 0 !== (g = h.value) &&
          (g !== e.value ||
            ("progress" === v && !g) ||
            ("option" === v && g !== p.value)) &&
          D(e, "value", g, p.value, !1),
        "checked" in h &&
          void 0 !== (g = h.checked) &&
          g !== e.checked &&
          D(e, "checked", g, p.checked, !1));
    }
    return e;
  }
  function W(e, t, n) {
    try {
      "function" == typeof e ? e(t) : (e.current = t);
    } catch (e) {
      a.__e(e, n);
    }
  }
  function V(e, t, n) {
    var r, o;
    if (
      (a.unmount && a.unmount(e),
      (r = e.ref) && ((r.current && r.current !== e.__e) || W(r, null, t)),
      null != (r = e.__c))
    ) {
      if (r.componentWillUnmount)
        try {
          r.componentWillUnmount();
        } catch (e) {
          a.__e(e, t);
        }
      (r.base = r.__P = null), (e.__c = void 0);
    }
    if ((r = e.__k))
      for (o = 0; o < r.length; o++)
        r[o] && V(r[o], t, n || "function" != typeof e.type);
    n || null == e.__e || m(e.__e), (e.__ = e.__e = e.__d = void 0);
  }
  function F(e, t, n) {
    return this.constructor(e, n);
  }
  function B(e, t, n) {
    var r, o, s;
    a.__ && a.__(e, t),
      (o = (r = "function" == typeof n) ? null : (n && n.__k) || t.__k),
      (s = []),
      A(
        t,
        (e = ((!r && n) || t).__k = y(S, null, [e])),
        o || f,
        f,
        void 0 !== t.ownerSVGElement,
        !r && n ? [n] : o ? null : t.firstChild ? i.call(t.childNodes) : null,
        s,
        !r && n ? n : o ? o.__e : t.firstChild,
        r
      ),
      L(s, e);
  }
  (i = h.slice),
    (a = {
      __e: function (e, t, n, r) {
        for (var o, i, a; (t = t.__); )
          if ((o = t.__c) && !o.__)
            try {
              if (
                ((i = o.constructor) &&
                  null != i.getDerivedStateFromError &&
                  (o.setState(i.getDerivedStateFromError(e)), (a = o.__d)),
                null != o.componentDidCatch &&
                  (o.componentDidCatch(e, r || {}), (a = o.__d)),
                a)
              )
                return (o.__E = o);
            } catch (t) {
              e = t;
            }
        throw e;
      },
    }),
    (s = 0),
    (l = !1),
    (_.prototype.setState = function (e, t) {
      var n;
      (n =
        null != this.__s && this.__s !== this.state
          ? this.__s
          : (this.__s = g({}, this.state))),
        "function" == typeof e && (e = e(g({}, n), this.props)),
        e && g(n, e),
        null != e && this.__v && (t && this._sb.push(t), x(this));
    }),
    (_.prototype.forceUpdate = function (e) {
      this.__v && ((this.__e = !0), e && this.__h.push(e), x(this));
    }),
    (_.prototype.render = S),
    (u = []),
    (d =
      "function" == typeof Promise
        ? Promise.prototype.then.bind(Promise.resolve())
        : setTimeout),
    (M.__r = 0),
    (p = 0);
  var z,
    j,
    G,
    q = [],
    Y = [],
    Z = a.__b,
    X = a.__r,
    K = a.diffed,
    $ = a.__c,
    J = a.unmount;
  function Q() {
    for (var e; (e = q.shift()); )
      if (e.__P && e.__H)
        try {
          e.__H.__h.forEach(ne), e.__H.__h.forEach(re), (e.__H.__h = []);
        } catch (t) {
          (e.__H.__h = []), a.__e(t, e.__v);
        }
  }
  (a.__b = function (e) {
    (z = null), Z && Z(e);
  }),
    (a.__r = function (e) {
      X && X(e);
      var t = (z = e.__c).__H;
      t &&
        (j === z
          ? ((t.__h = []),
            (z.__h = []),
            t.__.forEach(function (e) {
              e.__N && (e.__ = e.__N), (e.__V = Y), (e.__N = e.i = void 0);
            }))
          : (t.__h.forEach(ne), t.__h.forEach(re), (t.__h = []))),
        (j = z);
    }),
    (a.diffed = function (e) {
      K && K(e);
      var t = e.__c;
      t &&
        t.__H &&
        (t.__H.__h.length &&
          ((1 !== q.push(t) && G === a.requestAnimationFrame) ||
            ((G = a.requestAnimationFrame) || te)(Q)),
        t.__H.__.forEach(function (e) {
          e.i && (e.__H = e.i),
            e.__V !== Y && (e.__ = e.__V),
            (e.i = void 0),
            (e.__V = Y);
        })),
        (j = z = null);
    }),
    (a.__c = function (e, t) {
      t.some(function (e) {
        try {
          e.__h.forEach(ne),
            (e.__h = e.__h.filter(function (e) {
              return !e.__ || re(e);
            }));
        } catch (n) {
          t.some(function (e) {
            e.__h && (e.__h = []);
          }),
            (t = []),
            a.__e(n, e.__v);
        }
      }),
        $ && $(e, t);
    }),
    (a.unmount = function (e) {
      J && J(e);
      var t,
        n = e.__c;
      n &&
        n.__H &&
        (n.__H.__.forEach(function (e) {
          try {
            ne(e);
          } catch (e) {
            t = e;
          }
        }),
        (n.__H = void 0),
        t && a.__e(t, n.__v));
    });
  var ee = "function" == typeof requestAnimationFrame;
  function te(e) {
    var t,
      n = function () {
        clearTimeout(r), ee && cancelAnimationFrame(t), setTimeout(e);
      },
      r = setTimeout(n, 100);
    ee && (t = requestAnimationFrame(n));
  }
  function ne(e) {
    var t = z,
      n = e.__c;
    "function" == typeof n && ((e.__c = void 0), n()), (z = t);
  }
  function re(e) {
    var t = z;
    (e.__c = e.__()), (z = t);
  }
  function oe(e, t) {
    for (var n in e) if ("__source" !== n && !(n in t)) return !0;
    for (var r in t) if ("__source" !== r && e[r] !== t[r]) return !0;
    return !1;
  }
  function ie(e) {
    this.props = e;
  }
  ((ie.prototype = new _()).isPureReactComponent = !0),
    (ie.prototype.shouldComponentUpdate = function (e, t) {
      return oe(this.props, e) || oe(this.state, t);
    });
  var ae = a.__b;
  a.__b = function (e) {
    e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
      ae && ae(e);
  };
  var se = a.__e;
  a.__e = function (e, t, n, r) {
    if (e.then)
      for (var o, i = t; (i = i.__); )
        if ((o = i.__c) && o.__c)
          return (
            null == t.__e && ((t.__e = n.__e), (t.__k = n.__k)), o.__c(e, t)
          );
    se(e, t, n, r);
  };
  var le = a.unmount;
  function ue() {
    (this.__u = 0), (this.t = null), (this.__b = null);
  }
  function ce(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e);
  }
  function de() {
    (this.u = null), (this.o = null);
  }
  (a.unmount = function (e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), le && le(e);
  }),
    ((ue.prototype = new _()).__c = function (e, t) {
      var n = t.__c,
        r = this;
      null == r.t && (r.t = []), r.t.push(n);
      var o = ce(r.__v),
        i = !1,
        a = function () {
          i || ((i = !0), (n.__R = null), o ? o(s) : s());
        };
      n.__R = a;
      var s = function () {
          if (!--r.__u) {
            if (r.state.__a) {
              var e = r.state.__a;
              r.__v.__k[0] = (function e(t, n, r) {
                return (
                  t &&
                    ((t.__v = null),
                    (t.__k =
                      t.__k &&
                      t.__k.map(function (t) {
                        return e(t, n, r);
                      })),
                    t.__c &&
                      t.__c.__P === n &&
                      (t.__e && r.insertBefore(t.__e, t.__d),
                      (t.__c.__e = !0),
                      (t.__c.__P = r))),
                  t
                );
              })(e, e.__c.__P, e.__c.__O);
            }
            var t;
            for (r.setState({ __a: (r.__b = null) }); (t = r.t.pop()); )
              t.forceUpdate();
          }
        },
        l = !0 === t.__h;
      r.__u++ || l || r.setState({ __a: (r.__b = r.__v.__k[0]) }), e.then(a, a);
    }),
    (ue.prototype.componentWillUnmount = function () {
      this.t = [];
    }),
    (ue.prototype.render = function (e, t) {
      if (this.__b) {
        if (this.__v.__k) {
          var n = document.createElement("div"),
            r = this.__v.__k[0].__c;
          this.__v.__k[0] = (function e(t, n, r) {
            return (
              t &&
                (t.__c &&
                  t.__c.__H &&
                  (t.__c.__H.__.forEach(function (e) {
                    "function" == typeof e.__c && e.__c();
                  }),
                  (t.__c.__H = null)),
                null !=
                  (t = (function (e, t) {
                    for (var n in t) e[n] = t[n];
                    return e;
                  })({}, t)).__c &&
                  (t.__c.__P === r && (t.__c.__P = n), (t.__c = null)),
                (t.__k =
                  t.__k &&
                  t.__k.map(function (t) {
                    return e(t, n, r);
                  }))),
              t
            );
          })(this.__b, n, (r.__O = r.__P));
        }
        this.__b = null;
      }
      var o = t.__a && y(S, null, e.fallback);
      return o && (o.__h = null), [y(S, null, t.__a ? null : e.children), o];
    });
  var pe = function (e, t, n) {
    if (
      (++n[1] === n[0] && e.o.delete(t),
      e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
    )
      for (n = e.u; n; ) {
        for (; n.length > 3; ) n.pop()();
        if (n[1] < n[0]) break;
        e.u = n = n[2];
      }
  };
  function fe(e) {
    return (
      (this.getChildContext = function () {
        return e.context;
      }),
      e.children
    );
  }
  function he(e) {
    var t = this,
      n = e.i;
    (t.componentWillUnmount = function () {
      B(null, t.l), (t.l = null), (t.i = null);
    }),
      t.i && t.i !== n && t.componentWillUnmount(),
      e.__v
        ? (t.l ||
            ((t.i = n),
            (t.l = {
              nodeType: 1,
              parentNode: n,
              childNodes: [],
              appendChild: function (e) {
                this.childNodes.push(e), t.i.appendChild(e);
              },
              insertBefore: function (e, n) {
                this.childNodes.push(e), t.i.appendChild(e);
              },
              removeChild: function (e) {
                this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1),
                  t.i.removeChild(e);
              },
            })),
          B(y(fe, { context: t.context }, e.__v), t.l))
        : t.l && t.componentWillUnmount();
  }
  ((de.prototype = new _()).__a = function (e) {
    var t = this,
      n = ce(t.__v),
      r = t.o.get(e);
    return (
      r[0]++,
      function (o) {
        var i = function () {
          t.props.revealOrder ? (r.push(o), pe(t, e, r)) : o();
        };
        n ? n(i) : i();
      }
    );
  }),
    (de.prototype.render = function (e) {
      (this.u = null), (this.o = new Map());
      var t = N(e.children);
      e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
      for (var n = t.length; n--; ) this.o.set(t[n], (this.u = [1, 0, this.u]));
      return e.children;
    }),
    (de.prototype.componentDidUpdate = de.prototype.componentDidMount =
      function () {
        var e = this;
        this.o.forEach(function (t, n) {
          pe(e, n, t);
        });
      });
  var ve =
      ("undefined" != typeof Symbol &&
        Symbol.for &&
        Symbol.for("react.element")) ||
      60103,
    ge =
      /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    me = "undefined" != typeof document,
    ye = function (e) {
      return (
        "undefined" != typeof Symbol && "symbol" == typeof Symbol()
          ? /fil|che|rad/i
          : /fil|che|ra/i
      ).test(e);
    };
  (_.prototype.isReactComponent = {}),
    [
      "componentWillMount",
      "componentWillReceiveProps",
      "componentWillUpdate",
    ].forEach(function (e) {
      Object.defineProperty(_.prototype, e, {
        configurable: !0,
        get: function () {
          return this["UNSAFE_" + e];
        },
        set: function (t) {
          Object.defineProperty(this, e, {
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    });
  var Ee = a.event;
  function Se() {}
  function be() {
    return this.cancelBubble;
  }
  function De() {
    return this.defaultPrevented;
  }
  a.event = function (e) {
    return (
      Ee && (e = Ee(e)),
      (e.persist = Se),
      (e.isPropagationStopped = be),
      (e.isDefaultPrevented = De),
      (e.nativeEvent = e)
    );
  };
  var Ce = {
      configurable: !0,
      get: function () {
        return this.class;
      },
    },
    we = a.vnode;
  a.vnode = function (e) {
    var t = e.type,
      n = e.props,
      r = n;
    if ("string" == typeof t) {
      var o = -1 === t.indexOf("-");
      for (var i in ((r = {}), n)) {
        var a = n[i];
        (me && "children" === i && "noscript" === t) ||
          ("value" === i && "defaultValue" in n && null == a) ||
          ("defaultValue" === i && "value" in n && null == n.value
            ? (i = "value")
            : "download" === i && !0 === a
            ? (a = "")
            : /ondoubleclick/i.test(i)
            ? (i = "ondblclick")
            : /^onchange(textarea|input)/i.test(i + t) && !ye(n.type)
            ? (i = "oninput")
            : /^onfocus$/i.test(i)
            ? (i = "onfocusin")
            : /^onblur$/i.test(i)
            ? (i = "onfocusout")
            : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i)
            ? (i = i.toLowerCase())
            : o && ge.test(i)
            ? (i = i.replace(/[A-Z0-9]/g, "-$&").toLowerCase())
            : null === a && (a = void 0),
          /^oninput$/i.test(i) &&
            ((i = i.toLowerCase()), r[i] && (i = "oninputCapture")),
          (r[i] = a));
      }
      "select" == t &&
        r.multiple &&
        Array.isArray(r.value) &&
        (r.value = N(n.children).forEach(function (e) {
          e.props.selected = -1 != r.value.indexOf(e.props.value);
        })),
        "select" == t &&
          null != r.defaultValue &&
          (r.value = N(n.children).forEach(function (e) {
            e.props.selected = r.multiple
              ? -1 != r.defaultValue.indexOf(e.props.value)
              : r.defaultValue == e.props.value;
          })),
        (e.props = r),
        n.class != n.className &&
          ((Ce.enumerable = "className" in n),
          null != n.className && (r.class = n.className),
          Object.defineProperty(r, "className", Ce));
    }
    (e.$$typeof = ve), we && we(e);
  };
  var _e = a.__r;
  a.__r = function (e) {
    _e && _e(e);
  };
  var Re = "undefined" != typeof globalThis ? globalThis : window;
  Re.FullCalendarVDom
    ? console.warn("FullCalendar VDOM already loaded")
    : (Re.FullCalendarVDom = {
        Component: _,
        createElement: y,
        render: B,
        createRef: function () {
          return { current: null };
        },
        Fragment: S,
        createContext: function (e) {
          var t = (function (e, t) {
              var n = {
                __c: (t = "__cC" + p++),
                __: e,
                Consumer: function (e, t) {
                  return e.children(t);
                },
                Provider: function (e) {
                  var n, r;
                  return (
                    this.getChildContext ||
                      ((n = []),
                      ((r = {})[t] = this),
                      (this.getChildContext = function () {
                        return r;
                      }),
                      (this.shouldComponentUpdate = function (e) {
                        this.props.value !== e.value &&
                          n.some(function (e) {
                            (e.__e = !0), x(e);
                          });
                      }),
                      (this.sub = function (e) {
                        n.push(e);
                        var t = e.componentWillUnmount;
                        e.componentWillUnmount = function () {
                          n.splice(n.indexOf(e), 1), t && t.call(e);
                        };
                      })),
                    e.children
                  );
                },
              };
              return (n.Provider.__ = n.Consumer.contextType = n);
            })(e),
            n = t.Provider;
          return (
            (t.Provider = function () {
              var e = this,
                t = !this.getChildContext,
                r = n.apply(this, arguments);
              if (t) {
                var o = [];
                (this.shouldComponentUpdate = function (t) {
                  e.props.value !== t.value &&
                    o.forEach(function (e) {
                      (e.context = t.value), e.forceUpdate();
                    });
                }),
                  (this.sub = function (e) {
                    o.push(e);
                    var t = e.componentWillUnmount;
                    e.componentWillUnmount = function () {
                      o.splice(o.indexOf(e), 1), t && t.call(e);
                    };
                  });
              }
              return r;
            }),
            t
          );
        },
        createPortal: function (e, t) {
          var n = y(he, { __v: e, i: t });
          return (n.containerInfo = t), n;
        },
        flushSync: function (e) {
          e();
          var t = a.debounceRendering,
            n = [];
          for (
            a.debounceRendering = function (e) {
              n.push(e);
            },
              B(y(Te, {}), document.createElement("div"));
            n.length;

          )
            n.shift()();
          a.debounceRendering = t;
        },
        unmountComponentAtNode: function (e) {
          B(null, e);
        },
      });
  var Te = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          return y("div", {});
        }),
        (t.prototype.componentDidMount = function () {
          this.setState({});
        }),
        t
      );
    })(_),
    ke = (function () {
      function e(e, t) {
        (this.context = e), (this.internalEventSource = t);
      }
      return (
        (e.prototype.remove = function () {
          this.context.dispatch({
            type: "REMOVE_EVENT_SOURCE",
            sourceId: this.internalEventSource.sourceId,
          });
        }),
        (e.prototype.refetch = function () {
          this.context.dispatch({
            type: "FETCH_EVENT_SOURCES",
            sourceIds: [this.internalEventSource.sourceId],
            isRefetch: !0,
          });
        }),
        Object.defineProperty(e.prototype, "id", {
          get: function () {
            return this.internalEventSource.publicId;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "url", {
          get: function () {
            return this.internalEventSource.meta.url;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "format", {
          get: function () {
            return this.internalEventSource.meta.format;
          },
          enumerable: !1,
          configurable: !0,
        }),
        e
      );
    })();
  function xe(e) {
    e.parentNode && e.parentNode.removeChild(e);
  }
  function Me(e, t) {
    if (e.closest) return e.closest(t);
    if (!document.documentElement.contains(e)) return null;
    do {
      if (Ie(e, t)) return e;
      e = e.parentElement || e.parentNode;
    } while (null !== e && 1 === e.nodeType);
    return null;
  }
  function Ie(e, t) {
    return (e.matches || e.matchesSelector || e.msMatchesSelector).call(e, t);
  }
  function Pe(e, t) {
    for (
      var n = e instanceof HTMLElement ? [e] : e, r = [], o = 0;
      o < n.length;
      o += 1
    )
      for (var i = n[o].querySelectorAll(t), a = 0; a < i.length; a += 1)
        r.push(i[a]);
    return r;
  }
  var Ne = /(top|left|right|bottom|width|height)$/i;
  function He(e, t) {
    for (var n in t) Oe(e, n, t[n]);
  }
  function Oe(e, t, n) {
    null == n
      ? (e.style[t] = "")
      : "number" == typeof n && Ne.test(t)
      ? (e.style[t] = n + "px")
      : (e.style[t] = n);
  }
  function Ae(e) {
    var t, n;
    return null !==
      (n =
        null === (t = e.composedPath) || void 0 === t
          ? void 0
          : t.call(e)[0]) && void 0 !== n
      ? n
      : e.target;
  }
  function Le(e) {
    return e.getRootNode ? e.getRootNode() : document;
  }
  var Ue = 0;
  function We() {
    return "fc-dom-" + (Ue += 1);
  }
  function Ve(e) {
    e.preventDefault();
  }
  function Fe(e, t, n, r) {
    var o = (function (e, t) {
      return function (n) {
        var r = Me(n.target, e);
        r && t.call(r, n, r);
      };
    })(n, r);
    return (
      e.addEventListener(t, o),
      function () {
        e.removeEventListener(t, o);
      }
    );
  }
  var Be = [
    "webkitTransitionEnd",
    "otransitionend",
    "oTransitionEnd",
    "msTransitionEnd",
    "transitionend",
  ];
  function ze(e, t) {
    var n = function (r) {
      t(r),
        Be.forEach(function (t) {
          e.removeEventListener(t, n);
        });
    };
    Be.forEach(function (t) {
      e.addEventListener(t, n);
    });
  }
  function je(e) {
    return r({ onClick: e }, Ge(e));
  }
  function Ge(e) {
    return {
      tabIndex: 0,
      onKeyDown: function (t) {
        ("Enter" !== t.key && " " !== t.key) || (e(t), t.preventDefault());
      },
    };
  }
  var qe = 0;
  function Ye() {
    return String((qe += 1));
  }
  function Ze() {
    document.body.classList.add("fc-not-allowed");
  }
  function Xe() {
    document.body.classList.remove("fc-not-allowed");
  }
  function Ke(e) {
    e.classList.add("fc-unselectable"), e.addEventListener("selectstart", Ve);
  }
  function $e(e) {
    e.classList.remove("fc-unselectable"),
      e.removeEventListener("selectstart", Ve);
  }
  function Je(e) {
    e.addEventListener("contextmenu", Ve);
  }
  function Qe(e) {
    e.removeEventListener("contextmenu", Ve);
  }
  function et(e) {
    var t,
      n,
      r = [],
      o = [];
    for (
      "string" == typeof e
        ? (o = e.split(/\s*,\s*/))
        : "function" == typeof e
        ? (o = [e])
        : Array.isArray(e) && (o = e),
        t = 0;
      t < o.length;
      t += 1
    )
      "string" == typeof (n = o[t])
        ? r.push(
            "-" === n.charAt(0)
              ? { field: n.substring(1), order: -1 }
              : { field: n, order: 1 }
          )
        : "function" == typeof n && r.push({ func: n });
    return r;
  }
  function tt(e, t, n) {
    var r, o;
    for (r = 0; r < n.length; r += 1) if ((o = nt(e, t, n[r]))) return o;
    return 0;
  }
  function nt(e, t, n) {
    return n.func ? n.func(e, t) : rt(e[n.field], t[n.field]) * (n.order || 1);
  }
  function rt(e, t) {
    return e || t
      ? null == t
        ? -1
        : null == e
        ? 1
        : "string" == typeof e || "string" == typeof t
        ? String(e).localeCompare(String(t))
        : e - t
      : 0;
  }
  function ot(e, t) {
    var n = String(e);
    return "000".substr(0, t - n.length) + n;
  }
  function it(e, t, n) {
    return "function" == typeof e
      ? e.apply(void 0, t)
      : "string" == typeof e
      ? t.reduce(function (e, t, n) {
          return e.replace("$" + n, t || "");
        }, e)
      : n;
  }
  function at(e, t) {
    return e - t;
  }
  function st(e) {
    return e % 1 == 0;
  }
  function lt(e) {
    var t = e.querySelector(".fc-scrollgrid-shrink-frame"),
      n = e.querySelector(".fc-scrollgrid-shrink-cushion");
    if (!t) throw new Error("needs fc-scrollgrid-shrink-frame className");
    if (!n) throw new Error("needs fc-scrollgrid-shrink-cushion className");
    return (
      e.getBoundingClientRect().width -
      t.getBoundingClientRect().width +
      n.getBoundingClientRect().width
    );
  }
  var ut = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  function ct(e, t) {
    var n = Ct(e);
    return (n[2] += 7 * t), wt(n);
  }
  function dt(e, t) {
    var n = Ct(e);
    return (n[2] += t), wt(n);
  }
  function pt(e, t) {
    var n = Ct(e);
    return (n[6] += t), wt(n);
  }
  function ft(e, t) {
    return ht(e, t) / 7;
  }
  function ht(e, t) {
    return (t.valueOf() - e.valueOf()) / 864e5;
  }
  function vt(e, t) {
    var n = yt(e),
      r = yt(t);
    return {
      years: 0,
      months: 0,
      days: Math.round(ht(n, r)),
      milliseconds: t.valueOf() - r.valueOf() - (e.valueOf() - n.valueOf()),
    };
  }
  function gt(e, t) {
    var n = mt(e, t);
    return null !== n && n % 7 == 0 ? n / 7 : null;
  }
  function mt(e, t) {
    return Rt(e) === Rt(t) ? Math.round(ht(e, t)) : null;
  }
  function yt(e) {
    return wt([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()]);
  }
  function Et(e, t, n, r) {
    var o = wt([t, 0, 1 + St(t, n, r)]),
      i = yt(e),
      a = Math.round(ht(o, i));
    return Math.floor(a / 7) + 1;
  }
  function St(e, t, n) {
    var r = 7 + t - n;
    return (-(7 + wt([e, 0, r]).getUTCDay() - t) % 7) + r - 1;
  }
  function bt(e) {
    return [
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds(),
    ];
  }
  function Dt(e) {
    return new Date(
      e[0],
      e[1] || 0,
      null == e[2] ? 1 : e[2],
      e[3] || 0,
      e[4] || 0,
      e[5] || 0
    );
  }
  function Ct(e) {
    return [
      e.getUTCFullYear(),
      e.getUTCMonth(),
      e.getUTCDate(),
      e.getUTCHours(),
      e.getUTCMinutes(),
      e.getUTCSeconds(),
      e.getUTCMilliseconds(),
    ];
  }
  function wt(e) {
    return (
      1 === e.length && (e = e.concat([0])), new Date(Date.UTC.apply(Date, e))
    );
  }
  function _t(e) {
    return !isNaN(e.valueOf());
  }
  function Rt(e) {
    return (
      1e3 * e.getUTCHours() * 60 * 60 +
      1e3 * e.getUTCMinutes() * 60 +
      1e3 * e.getUTCSeconds() +
      e.getUTCMilliseconds()
    );
  }
  function Tt(e, t, n, r) {
    return {
      instanceId: Ye(),
      defId: e,
      range: t,
      forcedStartTzo: null == n ? null : n,
      forcedEndTzo: null == r ? null : r,
    };
  }
  var kt = Object.prototype.hasOwnProperty;
  function xt(e, t) {
    var n = {};
    if (t)
      for (var r in t) {
        for (var o = [], i = e.length - 1; i >= 0; i -= 1) {
          var a = e[i][r];
          if ("object" == typeof a && a) o.unshift(a);
          else if (void 0 !== a) {
            n[r] = a;
            break;
          }
        }
        o.length && (n[r] = xt(o));
      }
    for (i = e.length - 1; i >= 0; i -= 1) {
      var s = e[i];
      for (var l in s) l in n || (n[l] = s[l]);
    }
    return n;
  }
  function Mt(e, t) {
    var n = {};
    for (var r in e) t(e[r], r) && (n[r] = e[r]);
    return n;
  }
  function It(e, t) {
    var n = {};
    for (var r in e) n[r] = t(e[r], r);
    return n;
  }
  function Pt(e) {
    for (var t = {}, n = 0, r = e; n < r.length; n++) t[r[n]] = !0;
    return t;
  }
  function Nt(e) {
    var t = [];
    for (var n in e) t.push(e[n]);
    return t;
  }
  function Ht(e, t) {
    if (e === t) return !0;
    for (var n in e) if (kt.call(e, n) && !(n in t)) return !1;
    for (var n in t) if (kt.call(t, n) && e[n] !== t[n]) return !1;
    return !0;
  }
  function Ot(e, t) {
    var n = [];
    for (var r in e) kt.call(e, r) && (r in t || n.push(r));
    for (var r in t) kt.call(t, r) && e[r] !== t[r] && n.push(r);
    return n;
  }
  function At(e, t, n) {
    if ((void 0 === n && (n = {}), e === t)) return !0;
    for (var r in t) if (!(r in e) || !Lt(e[r], t[r], n[r])) return !1;
    for (var r in e) if (!(r in t)) return !1;
    return !0;
  }
  function Lt(e, t, n) {
    return e === t || !0 === n || (!!n && n(e, t));
  }
  function Ut(e, t, n, r) {
    void 0 === t && (t = 0), void 0 === r && (r = 1);
    var o = [];
    null == n && (n = Object.keys(e).length);
    for (var i = t; i < n; i += r) {
      var a = e[i];
      void 0 !== a && o.push(a);
    }
    return o;
  }
  function Wt(e, t, n) {
    var r = n.dateEnv,
      o = n.pluginHooks,
      i = n.options,
      a = e.defs,
      s = e.instances;
    for (var l in ((s = Mt(s, function (e) {
      return !a[e.defId].recurringDef;
    })),
    a)) {
      var u = a[l];
      if (u.recurringDef) {
        var c = u.recurringDef.duration;
        c ||
          (c = u.allDay
            ? i.defaultAllDayEventDuration
            : i.defaultTimedEventDuration);
        for (
          var d = 0, p = Vt(u, c, t, r, o.recurringTypes);
          d < p.length;
          d++
        ) {
          var f = p[d],
            h = Tt(l, { start: f, end: r.add(f, c) });
          s[h.instanceId] = h;
        }
      }
    }
    return { defs: a, instances: s };
  }
  function Vt(e, t, n, r, o) {
    var i = o[e.recurringDef.typeId].expand(
      e.recurringDef.typeData,
      { start: r.subtract(n.start, t), end: n.end },
      r
    );
    return e.allDay && (i = i.map(yt)), i;
  }
  var Ft = ["years", "months", "days", "milliseconds"],
    Bt = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
  function zt(e, t) {
    var n;
    return "string" == typeof e
      ? (function (e) {
          var t = Bt.exec(e);
          if (t) {
            var n = t[1] ? -1 : 1;
            return {
              years: 0,
              months: 0,
              days: n * (t[2] ? parseInt(t[2], 10) : 0),
              milliseconds:
                n *
                (60 * (t[3] ? parseInt(t[3], 10) : 0) * 60 * 1e3 +
                  60 * (t[4] ? parseInt(t[4], 10) : 0) * 1e3 +
                  1e3 * (t[5] ? parseInt(t[5], 10) : 0) +
                  (t[6] ? parseInt(t[6], 10) : 0)),
            };
          }
          return null;
        })(e)
      : "object" == typeof e && e
      ? jt(e)
      : "number" == typeof e
      ? jt((((n = {})[t || "milliseconds"] = e), n))
      : null;
  }
  function jt(e) {
    var t = {
        years: e.years || e.year || 0,
        months: e.months || e.month || 0,
        days: e.days || e.day || 0,
        milliseconds:
          60 * (e.hours || e.hour || 0) * 60 * 1e3 +
          60 * (e.minutes || e.minute || 0) * 1e3 +
          1e3 * (e.seconds || e.second || 0) +
          (e.milliseconds || e.millisecond || e.ms || 0),
      },
      n = e.weeks || e.week;
    return n && ((t.days += 7 * n), (t.specifiedWeeks = !0)), t;
  }
  function Gt(e, t) {
    return {
      years: e.years + t.years,
      months: e.months + t.months,
      days: e.days + t.days,
      milliseconds: e.milliseconds + t.milliseconds,
    };
  }
  function qt(e, t) {
    return {
      years: e.years * t,
      months: e.months * t,
      days: e.days * t,
      milliseconds: e.milliseconds * t,
    };
  }
  function Yt(e) {
    return Zt(e) / 864e5;
  }
  function Zt(e) {
    return (
      31536e6 * e.years + 2592e6 * e.months + 864e5 * e.days + e.milliseconds
    );
  }
  function Xt(e, t) {
    for (var n = null, r = 0; r < Ft.length; r += 1) {
      var o = Ft[r];
      if (t[o]) {
        var i = e[o] / t[o];
        if (!st(i) || (null !== n && n !== i)) return null;
        n = i;
      } else if (e[o]) return null;
    }
    return n;
  }
  function Kt(e) {
    var t = e.milliseconds;
    if (t) {
      if (t % 1e3 != 0) return { unit: "millisecond", value: t };
      if (t % 6e4 != 0) return { unit: "second", value: t / 1e3 };
      if (t % 36e5 != 0) return { unit: "minute", value: t / 6e4 };
      if (t) return { unit: "hour", value: t / 36e5 };
    }
    return e.days
      ? e.specifiedWeeks && e.days % 7 == 0
        ? { unit: "week", value: e.days / 7 }
        : { unit: "day", value: e.days }
      : e.months
      ? { unit: "month", value: e.months }
      : e.years
      ? { unit: "year", value: e.years }
      : { unit: "millisecond", value: 0 };
  }
  function $t(e, t, n) {
    void 0 === n && (n = !1);
    var r = e.toISOString();
    return (
      (r = r.replace(".000", "")),
      n && (r = r.replace("T00:00:00Z", "")),
      r.length > 10 &&
        (null == t
          ? (r = r.replace("Z", ""))
          : 0 !== t && (r = r.replace("Z", en(t, !0)))),
      r
    );
  }
  function Jt(e) {
    return e.toISOString().replace(/T.*$/, "");
  }
  function Qt(e) {
    return (
      ot(e.getUTCHours(), 2) +
      ":" +
      ot(e.getUTCMinutes(), 2) +
      ":" +
      ot(e.getUTCSeconds(), 2)
    );
  }
  function en(e, t) {
    void 0 === t && (t = !1);
    var n = e < 0 ? "-" : "+",
      r = Math.abs(e),
      o = Math.floor(r / 60),
      i = Math.round(r % 60);
    return t
      ? n + ot(o, 2) + ":" + ot(i, 2)
      : "GMT" + n + o + (i ? ":" + ot(i, 2) : "");
  }
  function tn(e, t, n) {
    if (e === t) return !0;
    var r,
      o = e.length;
    if (o !== t.length) return !1;
    for (r = 0; r < o; r += 1)
      if (!(n ? n(e[r], t[r]) : e[r] === t[r])) return !1;
    return !0;
  }
  function nn(e, t, n) {
    var r, o;
    return function () {
      for (var i = [], a = 0; a < arguments.length; a++) i[a] = arguments[a];
      if (r) {
        if (!tn(r, i)) {
          n && n(o);
          var s = e.apply(this, i);
          (t && t(s, o)) || (o = s);
        }
      } else o = e.apply(this, i);
      return (r = i), o;
    };
  }
  function rn(e, t, n) {
    var r,
      o,
      i = this;
    return function (a) {
      if (r) {
        if (!Ht(r, a)) {
          n && n(o);
          var s = e.call(i, a);
          (t && t(s, o)) || (o = s);
        }
      } else o = e.call(i, a);
      return (r = a), o;
    };
  }
  var on = {
      week: 3,
      separator: 0,
      omitZeroMinute: 0,
      meridiem: 0,
      omitCommas: 0,
    },
    an = {
      timeZoneName: 7,
      era: 6,
      year: 5,
      month: 4,
      day: 2,
      weekday: 2,
      hour: 1,
      minute: 1,
      second: 1,
    },
    sn = /\s*([ap])\.?m\.?/i,
    ln = /,/g,
    un = /\s+/g,
    cn = /\u200e/g,
    dn = /UTC|GMT/,
    pn = (function () {
      function e(e) {
        var t = {},
          n = {},
          r = 0;
        for (var o in e)
          o in on
            ? ((n[o] = e[o]), (r = Math.max(on[o], r)))
            : ((t[o] = e[o]), o in an && (r = Math.max(an[o], r)));
        (this.standardDateProps = t),
          (this.extendedSettings = n),
          (this.severity = r),
          (this.buildFormattingFunc = nn(fn));
      }
      return (
        (e.prototype.format = function (e, t) {
          return this.buildFormattingFunc(
            this.standardDateProps,
            this.extendedSettings,
            t
          )(e);
        }),
        (e.prototype.formatRange = function (e, t, n, r) {
          var o = this.standardDateProps,
            i = this.extendedSettings,
            a = (function (e, t, n) {
              return n.getMarkerYear(e) !== n.getMarkerYear(t)
                ? 5
                : n.getMarkerMonth(e) !== n.getMarkerMonth(t)
                ? 4
                : n.getMarkerDay(e) !== n.getMarkerDay(t)
                ? 2
                : Rt(e) !== Rt(t)
                ? 1
                : 0;
            })(e.marker, t.marker, n.calendarSystem);
          if (!a) return this.format(e, n);
          var s = a;
          !(s > 1) ||
            ("numeric" !== o.year && "2-digit" !== o.year) ||
            ("numeric" !== o.month && "2-digit" !== o.month) ||
            ("numeric" !== o.day && "2-digit" !== o.day) ||
            (s = 1);
          var l = this.format(e, n),
            u = this.format(t, n);
          if (l === u) return l;
          var c = fn(
              (function (e, t) {
                var n = {};
                for (var r in e) (!(r in an) || an[r] <= t) && (n[r] = e[r]);
                return n;
              })(o, s),
              i,
              n
            ),
            d = c(e),
            p = c(t),
            f = (function (e, t, n, r) {
              for (var o = 0; o < e.length; ) {
                var i = e.indexOf(t, o);
                if (-1 === i) break;
                var a = e.substr(0, i);
                o = i + t.length;
                for (var s = e.substr(o), l = 0; l < n.length; ) {
                  var u = n.indexOf(r, l);
                  if (-1 === u) break;
                  var c = n.substr(0, u);
                  l = u + r.length;
                  var d = n.substr(l);
                  if (a === c && s === d) return { before: a, after: s };
                }
              }
              return null;
            })(l, d, u, p),
            h = i.separator || r || n.defaultSeparator || "";
          return f ? f.before + d + h + p + f.after : l + h + u;
        }),
        (e.prototype.getLargestUnit = function () {
          switch (this.severity) {
            case 7:
            case 6:
            case 5:
              return "year";
            case 4:
              return "month";
            case 3:
              return "week";
            case 2:
              return "day";
            default:
              return "time";
          }
        }),
        e
      );
    })();
  function fn(e, t, n) {
    var o = Object.keys(e).length;
    return 1 === o && "short" === e.timeZoneName
      ? function (e) {
          return en(e.timeZoneOffset);
        }
      : 0 === o && t.week
      ? function (e) {
          return (function (e, t, n, r, o) {
            var i = [];
            return (
              "long" === o
                ? i.push(n)
                : ("short" !== o && "narrow" !== o) || i.push(t),
              ("long" !== o && "short" !== o) || i.push(" "),
              i.push(r.simpleNumberFormat.format(e)),
              "rtl" === r.options.direction && i.reverse(),
              i.join("")
            );
          })(
            n.computeWeekNumber(e.marker),
            n.weekText,
            n.weekTextLong,
            n.locale,
            t.week
          );
        }
      : (function (e, t, n) {
          (e = r({}, e)),
            (t = r({}, t)),
            (function (e, t) {
              e.timeZoneName &&
                (e.hour || (e.hour = "2-digit"),
                e.minute || (e.minute = "2-digit")),
                "long" === e.timeZoneName && (e.timeZoneName = "short"),
                t.omitZeroMinute &&
                  (e.second || e.millisecond) &&
                  delete t.omitZeroMinute;
            })(e, t),
            (e.timeZone = "UTC");
          var o,
            i = new Intl.DateTimeFormat(n.locale.codes, e);
          if (t.omitZeroMinute) {
            var a = r({}, e);
            delete a.minute, (o = new Intl.DateTimeFormat(n.locale.codes, a));
          }
          return function (r) {
            var a = r.marker;
            return (function (e, t, n, r, o) {
              return (
                (e = e.replace(cn, "")),
                "short" === n.timeZoneName &&
                  (e = (function (e, t) {
                    var n = !1;
                    return (
                      (e = e.replace(dn, function () {
                        return (n = !0), t;
                      })),
                      n || (e += " " + t),
                      e
                    );
                  })(
                    e,
                    "UTC" === o.timeZone || null == t.timeZoneOffset
                      ? "UTC"
                      : en(t.timeZoneOffset)
                  )),
                r.omitCommas && (e = e.replace(ln, "").trim()),
                r.omitZeroMinute && (e = e.replace(":00", "")),
                !1 === r.meridiem
                  ? (e = e.replace(sn, "").trim())
                  : "narrow" === r.meridiem
                  ? (e = e.replace(sn, function (e, t) {
                      return t.toLocaleLowerCase();
                    }))
                  : "short" === r.meridiem
                  ? (e = e.replace(sn, function (e, t) {
                      return t.toLocaleLowerCase() + "m";
                    }))
                  : "lowercase" === r.meridiem &&
                    (e = e.replace(sn, function (e) {
                      return e.toLocaleLowerCase();
                    })),
                (e = e.replace(un, " ")).trim()
              );
            })((o && !a.getUTCMinutes() ? o : i).format(a), r, e, t, n);
          };
        })(e, t, n);
  }
  function hn(e, t) {
    var n = t.markerToArray(e.marker);
    return {
      marker: e.marker,
      timeZoneOffset: e.timeZoneOffset,
      array: n,
      year: n[0],
      month: n[1],
      day: n[2],
      hour: n[3],
      minute: n[4],
      second: n[5],
      millisecond: n[6],
    };
  }
  function vn(e, t, n, r) {
    var o = hn(e, n.calendarSystem);
    return {
      date: o,
      start: o,
      end: t ? hn(t, n.calendarSystem) : null,
      timeZone: n.timeZone,
      localeCodes: n.locale.codes,
      defaultSeparator: r || n.defaultSeparator,
    };
  }
  var gn = (function () {
      function e(e) {
        this.cmdStr = e;
      }
      return (
        (e.prototype.format = function (e, t, n) {
          return t.cmdFormatter(this.cmdStr, vn(e, null, t, n));
        }),
        (e.prototype.formatRange = function (e, t, n, r) {
          return n.cmdFormatter(this.cmdStr, vn(e, t, n, r));
        }),
        e
      );
    })(),
    mn = (function () {
      function e(e) {
        this.func = e;
      }
      return (
        (e.prototype.format = function (e, t, n) {
          return this.func(vn(e, null, t, n));
        }),
        (e.prototype.formatRange = function (e, t, n, r) {
          return this.func(vn(e, t, n, r));
        }),
        e
      );
    })();
  function yn(e) {
    return "object" == typeof e && e
      ? new pn(e)
      : "string" == typeof e
      ? new gn(e)
      : "function" == typeof e
      ? new mn(e)
      : null;
  }
  var En = {
      navLinkDayClick: kn,
      navLinkWeekClick: kn,
      duration: zt,
      bootstrapFontAwesome: kn,
      buttonIcons: kn,
      customButtons: kn,
      defaultAllDayEventDuration: zt,
      defaultTimedEventDuration: zt,
      nextDayThreshold: zt,
      scrollTime: zt,
      scrollTimeReset: Boolean,
      slotMinTime: zt,
      slotMaxTime: zt,
      dayPopoverFormat: yn,
      slotDuration: zt,
      snapDuration: zt,
      headerToolbar: kn,
      footerToolbar: kn,
      defaultRangeSeparator: String,
      titleRangeSeparator: String,
      forceEventDuration: Boolean,
      dayHeaders: Boolean,
      dayHeaderFormat: yn,
      dayHeaderClassNames: kn,
      dayHeaderContent: kn,
      dayHeaderDidMount: kn,
      dayHeaderWillUnmount: kn,
      dayCellClassNames: kn,
      dayCellContent: kn,
      dayCellDidMount: kn,
      dayCellWillUnmount: kn,
      initialView: String,
      aspectRatio: Number,
      weekends: Boolean,
      weekNumberCalculation: kn,
      weekNumbers: Boolean,
      weekNumberClassNames: kn,
      weekNumberContent: kn,
      weekNumberDidMount: kn,
      weekNumberWillUnmount: kn,
      editable: Boolean,
      viewClassNames: kn,
      viewDidMount: kn,
      viewWillUnmount: kn,
      nowIndicator: Boolean,
      nowIndicatorClassNames: kn,
      nowIndicatorContent: kn,
      nowIndicatorDidMount: kn,
      nowIndicatorWillUnmount: kn,
      showNonCurrentDates: Boolean,
      lazyFetching: Boolean,
      startParam: String,
      endParam: String,
      timeZoneParam: String,
      timeZone: String,
      locales: kn,
      locale: kn,
      themeSystem: String,
      dragRevertDuration: Number,
      dragScroll: Boolean,
      allDayMaintainDuration: Boolean,
      unselectAuto: Boolean,
      dropAccept: kn,
      eventOrder: et,
      eventOrderStrict: Boolean,
      handleWindowResize: Boolean,
      windowResizeDelay: Number,
      longPressDelay: Number,
      eventDragMinDistance: Number,
      expandRows: Boolean,
      height: kn,
      contentHeight: kn,
      direction: String,
      weekNumberFormat: yn,
      eventResizableFromStart: Boolean,
      displayEventTime: Boolean,
      displayEventEnd: Boolean,
      weekText: String,
      weekTextLong: String,
      progressiveEventRendering: Boolean,
      businessHours: kn,
      initialDate: kn,
      now: kn,
      eventDataTransform: kn,
      stickyHeaderDates: kn,
      stickyFooterScrollbar: kn,
      viewHeight: kn,
      defaultAllDay: Boolean,
      eventSourceFailure: kn,
      eventSourceSuccess: kn,
      eventDisplay: String,
      eventStartEditable: Boolean,
      eventDurationEditable: Boolean,
      eventOverlap: kn,
      eventConstraint: kn,
      eventAllow: kn,
      eventBackgroundColor: String,
      eventBorderColor: String,
      eventTextColor: String,
      eventColor: String,
      eventClassNames: kn,
      eventContent: kn,
      eventDidMount: kn,
      eventWillUnmount: kn,
      selectConstraint: kn,
      selectOverlap: kn,
      selectAllow: kn,
      droppable: Boolean,
      unselectCancel: String,
      slotLabelFormat: kn,
      slotLaneClassNames: kn,
      slotLaneContent: kn,
      slotLaneDidMount: kn,
      slotLaneWillUnmount: kn,
      slotLabelClassNames: kn,
      slotLabelContent: kn,
      slotLabelDidMount: kn,
      slotLabelWillUnmount: kn,
      dayMaxEvents: kn,
      dayMaxEventRows: kn,
      dayMinWidth: Number,
      slotLabelInterval: zt,
      allDayText: String,
      allDayClassNames: kn,
      allDayContent: kn,
      allDayDidMount: kn,
      allDayWillUnmount: kn,
      slotMinWidth: Number,
      navLinks: Boolean,
      eventTimeFormat: yn,
      rerenderDelay: Number,
      moreLinkText: kn,
      moreLinkHint: kn,
      selectMinDistance: Number,
      selectable: Boolean,
      selectLongPressDelay: Number,
      eventLongPressDelay: Number,
      selectMirror: Boolean,
      eventMaxStack: Number,
      eventMinHeight: Number,
      eventMinWidth: Number,
      eventShortHeight: Number,
      slotEventOverlap: Boolean,
      plugins: kn,
      firstDay: Number,
      dayCount: Number,
      dateAlignment: String,
      dateIncrement: zt,
      hiddenDays: kn,
      monthMode: Boolean,
      fixedWeekCount: Boolean,
      validRange: kn,
      visibleRange: kn,
      titleFormat: kn,
      eventInteractive: Boolean,
      noEventsText: String,
      viewHint: kn,
      navLinkHint: kn,
      closeHint: String,
      timeHint: String,
      eventHint: String,
      moreLinkClick: kn,
      moreLinkClassNames: kn,
      moreLinkContent: kn,
      moreLinkDidMount: kn,
      moreLinkWillUnmount: kn,
    },
    Sn = {
      eventDisplay: "auto",
      defaultRangeSeparator: " - ",
      titleRangeSeparator: " – ",
      defaultTimedEventDuration: "01:00:00",
      defaultAllDayEventDuration: { day: 1 },
      forceEventDuration: !1,
      nextDayThreshold: "00:00:00",
      dayHeaders: !0,
      initialView: "",
      aspectRatio: 1.35,
      headerToolbar: { start: "title", center: "", end: "today prev,next" },
      weekends: !0,
      weekNumbers: !1,
      weekNumberCalculation: "local",
      editable: !1,
      nowIndicator: !1,
      scrollTime: "06:00:00",
      scrollTimeReset: !0,
      slotMinTime: "00:00:00",
      slotMaxTime: "24:00:00",
      showNonCurrentDates: !0,
      lazyFetching: !0,
      startParam: "start",
      endParam: "end",
      timeZoneParam: "timeZone",
      timeZone: "local",
      locales: [],
      locale: "",
      themeSystem: "standard",
      dragRevertDuration: 500,
      dragScroll: !0,
      allDayMaintainDuration: !1,
      unselectAuto: !0,
      dropAccept: "*",
      eventOrder: "start,-duration,allDay,title",
      dayPopoverFormat: { month: "long", day: "numeric", year: "numeric" },
      handleWindowResize: !0,
      windowResizeDelay: 100,
      longPressDelay: 1e3,
      eventDragMinDistance: 5,
      expandRows: !1,
      navLinks: !1,
      selectable: !1,
      eventMinHeight: 15,
      eventMinWidth: 30,
      eventShortHeight: 30,
    },
    bn = {
      datesSet: kn,
      eventsSet: kn,
      eventAdd: kn,
      eventChange: kn,
      eventRemove: kn,
      windowResize: kn,
      eventClick: kn,
      eventMouseEnter: kn,
      eventMouseLeave: kn,
      select: kn,
      unselect: kn,
      loading: kn,
      _unmount: kn,
      _beforeprint: kn,
      _afterprint: kn,
      _noEventDrop: kn,
      _noEventResize: kn,
      _resize: kn,
      _scrollRequest: kn,
    },
    Dn = {
      buttonText: kn,
      buttonHints: kn,
      views: kn,
      plugins: kn,
      initialEvents: kn,
      events: kn,
      eventSources: kn,
    },
    Cn = {
      headerToolbar: wn,
      footerToolbar: wn,
      buttonText: wn,
      buttonHints: wn,
      buttonIcons: wn,
      dateIncrement: wn,
    };
  function wn(e, t) {
    return "object" == typeof e && "object" == typeof t && e && t
      ? Ht(e, t)
      : e === t;
  }
  var _n = {
    type: String,
    component: kn,
    buttonText: String,
    buttonTextKey: String,
    dateProfileGeneratorClass: kn,
    usesMinMaxTime: Boolean,
    classNames: kn,
    content: kn,
    didMount: kn,
    willUnmount: kn,
  };
  function Rn(e) {
    return xt(e, Cn);
  }
  function Tn(e, t) {
    var n = {},
      r = {};
    for (var o in t) o in e && (n[o] = t[o](e[o]));
    for (var o in e) o in t || (r[o] = e[o]);
    return { refined: n, extra: r };
  }
  function kn(e) {
    return e;
  }
  function xn(e, t, n, r) {
    for (
      var o = { defs: {}, instances: {} }, i = Gn(n), a = 0, s = e;
      a < s.length;
      a++
    ) {
      var l = zn(s[a], t, n, r, i);
      l && Mn(l, o);
    }
    return o;
  }
  function Mn(e, t) {
    return (
      void 0 === t && (t = { defs: {}, instances: {} }),
      (t.defs[e.def.defId] = e.def),
      e.instance && (t.instances[e.instance.instanceId] = e.instance),
      t
    );
  }
  function In(e, t) {
    var n = e.instances[t];
    if (n) {
      var r = e.defs[n.defId],
        o = Nn(e, function (e) {
          return (
            (t = r), (n = e), Boolean(t.groupId && t.groupId === n.groupId)
          );
          var t, n;
        });
      return (o.defs[r.defId] = r), (o.instances[n.instanceId] = n), o;
    }
    return { defs: {}, instances: {} };
  }
  function Pn(e, t) {
    return {
      defs: r(r({}, e.defs), t.defs),
      instances: r(r({}, e.instances), t.instances),
    };
  }
  function Nn(e, t) {
    var n = Mt(e.defs, t),
      r = Mt(e.instances, function (e) {
        return n[e.defId];
      });
    return { defs: n, instances: r };
  }
  function Hn(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.split(/\s+/) : [];
  }
  var On = {
      display: String,
      editable: Boolean,
      startEditable: Boolean,
      durationEditable: Boolean,
      constraint: kn,
      overlap: kn,
      allow: kn,
      className: Hn,
      classNames: Hn,
      color: String,
      backgroundColor: String,
      borderColor: String,
      textColor: String,
    },
    An = {
      display: null,
      startEditable: null,
      durationEditable: null,
      constraints: [],
      overlap: null,
      allows: [],
      backgroundColor: "",
      borderColor: "",
      textColor: "",
      classNames: [],
    };
  function Ln(e, t) {
    var n = (function (e, t) {
      return Array.isArray(e)
        ? xn(e, null, t, !0)
        : "object" == typeof e && e
        ? xn([e], null, t, !0)
        : null != e
        ? String(e)
        : null;
    })(e.constraint, t);
    return {
      display: e.display || null,
      startEditable: null != e.startEditable ? e.startEditable : e.editable,
      durationEditable:
        null != e.durationEditable ? e.durationEditable : e.editable,
      constraints: null != n ? [n] : [],
      overlap: null != e.overlap ? e.overlap : null,
      allows: null != e.allow ? [e.allow] : [],
      backgroundColor: e.backgroundColor || e.color || "",
      borderColor: e.borderColor || e.color || "",
      textColor: e.textColor || "",
      classNames: (e.className || []).concat(e.classNames || []),
    };
  }
  function Un(e) {
    return e.reduce(Wn, An);
  }
  function Wn(e, t) {
    return {
      display: null != t.display ? t.display : e.display,
      startEditable:
        null != t.startEditable ? t.startEditable : e.startEditable,
      durationEditable:
        null != t.durationEditable ? t.durationEditable : e.durationEditable,
      constraints: e.constraints.concat(t.constraints),
      overlap: "boolean" == typeof t.overlap ? t.overlap : e.overlap,
      allows: e.allows.concat(t.allows),
      backgroundColor: t.backgroundColor || e.backgroundColor,
      borderColor: t.borderColor || e.borderColor,
      textColor: t.textColor || e.textColor,
      classNames: e.classNames.concat(t.classNames),
    };
  }
  var Vn = {
      id: String,
      groupId: String,
      title: String,
      url: String,
      interactive: Boolean,
    },
    Fn = { start: kn, end: kn, date: kn, allDay: Boolean },
    Bn = r(r(r({}, Vn), Fn), { extendedProps: kn });
  function zn(e, t, n, r, o) {
    void 0 === o && (o = Gn(n));
    var i = jn(e, n, o),
      a = i.refined,
      s = i.extra,
      l = (function (e, t) {
        var n = null;
        return (
          e && (n = e.defaultAllDay),
          null == n && (n = t.options.defaultAllDay),
          n
        );
      })(t, n),
      u = (function (e, t, n, r) {
        for (var o = 0; o < r.length; o += 1) {
          var i = r[o].parse(e, n);
          if (i) {
            var a = e.allDay;
            return (
              null == a &&
                null == (a = t) &&
                null == (a = i.allDayGuess) &&
                (a = !1),
              {
                allDay: a,
                duration: i.duration,
                typeData: i.typeData,
                typeId: o,
              }
            );
          }
        }
        return null;
      })(a, l, n.dateEnv, n.pluginHooks.recurringTypes);
    if (u)
      return (
        ((c = qn(
          a,
          s,
          t ? t.sourceId : "",
          u.allDay,
          Boolean(u.duration),
          n
        )).recurringDef = {
          typeId: u.typeId,
          typeData: u.typeData,
          duration: u.duration,
        }),
        { def: c, instance: null }
      );
    var c,
      d = (function (e, t, n, r) {
        var o,
          i,
          a = e.allDay,
          s = null,
          l = !1,
          u = null,
          c = null != e.start ? e.start : e.date;
        if ((o = n.dateEnv.createMarkerMeta(c))) s = o.marker;
        else if (!r) return null;
        return (
          null != e.end && (i = n.dateEnv.createMarkerMeta(e.end)),
          null == a &&
            (a =
              null != t
                ? t
                : (!o || o.isTimeUnspecified) && (!i || i.isTimeUnspecified)),
          a && s && (s = yt(s)),
          i && ((u = i.marker), a && (u = yt(u)), s && u <= s && (u = null)),
          u
            ? (l = !0)
            : r ||
              ((l = n.options.forceEventDuration || !1),
              (u = n.dateEnv.add(
                s,
                a
                  ? n.options.defaultAllDayEventDuration
                  : n.options.defaultTimedEventDuration
              ))),
          {
            allDay: a,
            hasEnd: l,
            range: { start: s, end: u },
            forcedStartTzo: o ? o.forcedTzo : null,
            forcedEndTzo: i ? i.forcedTzo : null,
          }
        );
      })(a, l, n, r);
    return d
      ? {
          def: (c = qn(a, s, t ? t.sourceId : "", d.allDay, d.hasEnd, n)),
          instance: Tt(c.defId, d.range, d.forcedStartTzo, d.forcedEndTzo),
        }
      : null;
  }
  function jn(e, t, n) {
    return void 0 === n && (n = Gn(t)), Tn(e, n);
  }
  function Gn(e) {
    return r(r(r({}, On), Bn), e.pluginHooks.eventRefiners);
  }
  function qn(e, t, n, o, i, a) {
    for (
      var s = {
          title: e.title || "",
          groupId: e.groupId || "",
          publicId: e.id || "",
          url: e.url || "",
          recurringDef: null,
          defId: Ye(),
          sourceId: n,
          allDay: o,
          hasEnd: i,
          interactive: e.interactive,
          ui: Ln(e, a),
          extendedProps: r(r({}, e.extendedProps || {}), t),
        },
        l = 0,
        u = a.pluginHooks.eventDefMemberAdders;
      l < u.length;
      l++
    ) {
      var c = u[l];
      r(s, c(e));
    }
    return Object.freeze(s.ui.classNames), Object.freeze(s.extendedProps), s;
  }
  function Yn(e) {
    var t = Math.floor(ht(e.start, e.end)) || 1,
      n = yt(e.start);
    return { start: n, end: dt(n, t) };
  }
  function Zn(e, t) {
    void 0 === t && (t = zt(0));
    var n = null,
      r = null;
    if (e.end) {
      r = yt(e.end);
      var o = e.end.valueOf() - r.valueOf();
      o && o >= Zt(t) && (r = dt(r, 1));
    }
    return (
      e.start && ((n = yt(e.start)), r && r <= n && (r = dt(n, 1))),
      { start: n, end: r }
    );
  }
  function Xn(e) {
    var t = Zn(e);
    return ht(t.start, t.end) > 1;
  }
  function Kn(e, t, n, r) {
    return "year" === r
      ? zt(n.diffWholeYears(e, t), "year")
      : "month" === r
      ? zt(n.diffWholeMonths(e, t), "month")
      : vt(e, t);
  }
  function $n(e, t) {
    var n,
      r,
      o = [],
      i = t.start;
    for (e.sort(Jn), n = 0; n < e.length; n += 1)
      (r = e[n]).start > i && o.push({ start: i, end: r.start }),
        r.end > i && (i = r.end);
    return i < t.end && o.push({ start: i, end: t.end }), o;
  }
  function Jn(e, t) {
    return e.start.valueOf() - t.start.valueOf();
  }
  function Qn(e, t) {
    var n = e.start,
      r = e.end,
      o = null;
    return (
      null !== t.start &&
        (n =
          null === n
            ? t.start
            : new Date(Math.max(n.valueOf(), t.start.valueOf()))),
      null != t.end &&
        (r =
          null === r
            ? t.end
            : new Date(Math.min(r.valueOf(), t.end.valueOf()))),
      (null === n || null === r || n < r) && (o = { start: n, end: r }),
      o
    );
  }
  function er(e, t) {
    return (
      (null === e.start ? null : e.start.valueOf()) ===
        (null === t.start ? null : t.start.valueOf()) &&
      (null === e.end ? null : e.end.valueOf()) ===
        (null === t.end ? null : t.end.valueOf())
    );
  }
  function tr(e, t) {
    return (
      (null === e.end || null === t.start || e.end > t.start) &&
      (null === e.start || null === t.end || e.start < t.end)
    );
  }
  function nr(e, t) {
    return (
      (null === e.start || (null !== t.start && t.start >= e.start)) &&
      (null === e.end || (null !== t.end && t.end <= e.end))
    );
  }
  function rr(e, t) {
    return (null === e.start || t >= e.start) && (null === e.end || t < e.end);
  }
  function or(e, t, n, r) {
    var o = {},
      i = {},
      a = {},
      s = [],
      l = [],
      u = lr(e.defs, t);
    for (var c in e.defs)
      "inverse-background" === (f = u[(S = e.defs[c]).defId]).display &&
        (S.groupId
          ? ((o[S.groupId] = []), a[S.groupId] || (a[S.groupId] = S))
          : (i[c] = []));
    for (var d in e.instances) {
      var p = e.instances[d],
        f = u[(S = e.defs[p.defId]).defId],
        h = p.range,
        v = !S.allDay && r ? Zn(h, r) : h,
        g = Qn(v, n);
      g &&
        ("inverse-background" === f.display
          ? S.groupId
            ? o[S.groupId].push(g)
            : i[p.defId].push(g)
          : "none" !== f.display &&
            ("background" === f.display ? s : l).push({
              def: S,
              ui: f,
              instance: p,
              range: g,
              isStart: v.start && v.start.valueOf() === g.start.valueOf(),
              isEnd: v.end && v.end.valueOf() === g.end.valueOf(),
            }));
    }
    for (var m in o)
      for (var y = 0, E = $n(o[m], n); y < E.length; y++) {
        var S,
          b = E[y];
        (f = u[(S = a[m]).defId]),
          s.push({
            def: S,
            ui: f,
            instance: null,
            range: b,
            isStart: !1,
            isEnd: !1,
          });
      }
    for (var c in i)
      for (var D = 0, C = $n(i[c], n); D < C.length; D++)
        (b = C[D]),
          s.push({
            def: e.defs[c],
            ui: u[c],
            instance: null,
            range: b,
            isStart: !1,
            isEnd: !1,
          });
    return { bg: s, fg: l };
  }
  function ir(e) {
    return (
      "background" === e.ui.display || "inverse-background" === e.ui.display
    );
  }
  function ar(e, t) {
    e.fcSeg = t;
  }
  function sr(e) {
    return e.fcSeg || e.parentNode.fcSeg || null;
  }
  function lr(e, t) {
    return It(e, function (e) {
      return ur(e, t);
    });
  }
  function ur(e, t) {
    var n = [];
    return (
      t[""] && n.push(t[""]),
      t[e.defId] && n.push(t[e.defId]),
      n.push(e.ui),
      Un(n)
    );
  }
  function cr(e, t) {
    var n = e.map(dr);
    return (
      n.sort(function (e, n) {
        return tt(e, n, t);
      }),
      n.map(function (e) {
        return e._seg;
      })
    );
  }
  function dr(e) {
    var t = e.eventRange,
      n = t.def,
      o = t.instance ? t.instance.range : t.range,
      i = o.start ? o.start.valueOf() : 0,
      a = o.end ? o.end.valueOf() : 0;
    return r(r(r({}, n.extendedProps), n), {
      id: n.publicId,
      start: i,
      end: a,
      duration: a - i,
      allDay: Number(n.allDay),
      _seg: e,
    });
  }
  function pr(e, t) {
    for (
      var n = t.pluginHooks.isDraggableTransformers,
        r = e.eventRange,
        o = r.def,
        i = r.ui,
        a = i.startEditable,
        s = 0,
        l = n;
      s < l.length;
      s++
    )
      a = (0, l[s])(a, o, i, t);
    return a;
  }
  function fr(e, t) {
    return (
      e.isStart &&
      e.eventRange.ui.durationEditable &&
      t.options.eventResizableFromStart
    );
  }
  function hr(e, t) {
    return e.isEnd && e.eventRange.ui.durationEditable;
  }
  function vr(e, t, n, r, o, i, a) {
    var s = n.dateEnv,
      l = n.options,
      u = l.displayEventTime,
      c = l.displayEventEnd,
      d = e.eventRange.def,
      p = e.eventRange.instance;
    null == u && (u = !1 !== r), null == c && (c = !1 !== o);
    var f = p.range.start,
      h = p.range.end,
      v = i || e.start || e.eventRange.range.start,
      g = a || e.end || e.eventRange.range.end,
      m = yt(f).valueOf() === yt(v).valueOf(),
      y = yt(pt(h, -1)).valueOf() === yt(pt(g, -1)).valueOf();
    return u && !d.allDay && (m || y)
      ? ((v = m ? f : v),
        (g = y ? h : g),
        c && d.hasEnd
          ? s.formatRange(v, g, t, {
              forcedStartTzo: i ? null : p.forcedStartTzo,
              forcedEndTzo: a ? null : p.forcedEndTzo,
            })
          : s.format(v, t, { forcedTzo: i ? null : p.forcedStartTzo }))
      : "";
  }
  function gr(e, t, n) {
    var r = e.eventRange.range;
    return {
      isPast: r.end < (n || t.start),
      isFuture: r.start >= (n || t.end),
      isToday: t && rr(t, r.start),
    };
  }
  function mr(e) {
    var t = ["fc-event"];
    return (
      e.isMirror && t.push("fc-event-mirror"),
      e.isDraggable && t.push("fc-event-draggable"),
      (e.isStartResizable || e.isEndResizable) && t.push("fc-event-resizable"),
      e.isDragging && t.push("fc-event-dragging"),
      e.isResizing && t.push("fc-event-resizing"),
      e.isSelected && t.push("fc-event-selected"),
      e.isStart && t.push("fc-event-start"),
      e.isEnd && t.push("fc-event-end"),
      e.isPast && t.push("fc-event-past"),
      e.isToday && t.push("fc-event-today"),
      e.isFuture && t.push("fc-event-future"),
      t
    );
  }
  function yr(e) {
    return e.instance
      ? e.instance.instanceId
      : e.def.defId + ":" + e.range.start.toISOString();
  }
  function Er(e, t) {
    var n = e.eventRange,
      r = n.def,
      o = n.instance,
      i = r.url;
    if (i) return { href: i };
    var a = t.emitter,
      s = t.options.eventInteractive;
    return (
      null == s &&
        null == (s = r.interactive) &&
        (s = Boolean(a.hasHandlers("eventClick"))),
      s
        ? Ge(function (e) {
            a.trigger("eventClick", {
              el: e.target,
              event: new Ur(t, r, o),
              jsEvent: e,
              view: t.viewApi,
            });
          })
        : {}
    );
  }
  var Sr = { start: kn, end: kn, allDay: Boolean };
  function br(e, t, n) {
    var o = (function (e, t) {
        var n = Tn(e, Sr),
          o = n.refined,
          i = n.extra,
          a = o.start ? t.createMarkerMeta(o.start) : null,
          s = o.end ? t.createMarkerMeta(o.end) : null,
          l = o.allDay;
        return (
          null == l &&
            (l = a && a.isTimeUnspecified && (!s || s.isTimeUnspecified)),
          r(
            {
              range: { start: a ? a.marker : null, end: s ? s.marker : null },
              allDay: l,
            },
            i
          )
        );
      })(e, t),
      i = o.range;
    if (!i.start) return null;
    if (!i.end) {
      if (null == n) return null;
      i.end = t.add(i.start, n);
    }
    return o;
  }
  function Dr(e, t) {
    return (
      er(e.range, t.range) &&
      e.allDay === t.allDay &&
      (function (e, t) {
        for (var n in t)
          if ("range" !== n && "allDay" !== n && e[n] !== t[n]) return !1;
        for (var n in e) if (!(n in t)) return !1;
        return !0;
      })(e, t)
    );
  }
  function Cr(e, t, n) {
    return r(r({}, wr(e, t, n)), { timeZone: t.timeZone });
  }
  function wr(e, t, n) {
    return {
      start: t.toDate(e.start),
      end: t.toDate(e.end),
      startStr: t.formatIso(e.start, { omitTime: n }),
      endStr: t.formatIso(e.end, { omitTime: n }),
    };
  }
  function _r(e, t, n) {
    var r = jn({ editable: !1 }, n),
      o = qn(r.refined, r.extra, "", e.allDay, !0, n);
    return {
      def: o,
      ui: ur(o, t),
      instance: Tt(o.defId, e.range),
      range: e.range,
      isStart: !0,
      isEnd: !0,
    };
  }
  function Rr(e, t, n) {
    n.emitter.trigger(
      "select",
      r(r({}, Tr(e, n)), {
        jsEvent: t ? t.origEvent : null,
        view: n.viewApi || n.calendarApi.view,
      })
    );
  }
  function Tr(e, t) {
    for (
      var n, o, i = {}, a = 0, s = t.pluginHooks.dateSpanTransforms;
      a < s.length;
      a++
    ) {
      var l = s[a];
      r(i, l(e, t));
    }
    return (
      r(
        i,
        ((n = e),
        (o = t.dateEnv),
        r(r({}, wr(n.range, o, n.allDay)), { allDay: n.allDay }))
      ),
      i
    );
  }
  function kr(e, t, n) {
    var r = n.dateEnv,
      o = n.options,
      i = t;
    return (
      e
        ? ((i = yt(i)), (i = r.add(i, o.defaultAllDayEventDuration)))
        : (i = r.add(i, o.defaultTimedEventDuration)),
      i
    );
  }
  function xr(e, t, n, r) {
    var o = lr(e.defs, t),
      i = { defs: {}, instances: {} };
    for (var a in e.defs) {
      var s = e.defs[a];
      i.defs[a] = Mr(s, o[a], n, r);
    }
    for (var l in e.instances) {
      var u = e.instances[l];
      (s = i.defs[u.defId]), (i.instances[l] = Ir(u, s, o[u.defId], n, r));
    }
    return i;
  }
  function Mr(e, t, n, o) {
    var i = n.standardProps || {};
    null == i.hasEnd &&
      t.durationEditable &&
      (n.startDelta || n.endDelta) &&
      (i.hasEnd = !0);
    var a = r(r(r({}, e), i), { ui: r(r({}, e.ui), i.ui) });
    n.extendedProps &&
      (a.extendedProps = r(r({}, a.extendedProps), n.extendedProps));
    for (
      var s = 0, l = o.pluginHooks.eventDefMutationAppliers;
      s < l.length;
      s++
    )
      (0, l[s])(a, n, o);
    return !a.hasEnd && o.options.forceEventDuration && (a.hasEnd = !0), a;
  }
  function Ir(e, t, n, o, i) {
    var a = i.dateEnv,
      s = o.standardProps && !0 === o.standardProps.allDay,
      l = o.standardProps && !1 === o.standardProps.hasEnd,
      u = r({}, e);
    return (
      s && (u.range = Yn(u.range)),
      o.datesDelta &&
        n.startEditable &&
        (u.range = {
          start: a.add(u.range.start, o.datesDelta),
          end: a.add(u.range.end, o.datesDelta),
        }),
      o.startDelta &&
        n.durationEditable &&
        (u.range = {
          start: a.add(u.range.start, o.startDelta),
          end: u.range.end,
        }),
      o.endDelta &&
        n.durationEditable &&
        (u.range = {
          start: u.range.start,
          end: a.add(u.range.end, o.endDelta),
        }),
      l &&
        (u.range = {
          start: u.range.start,
          end: kr(t.allDay, u.range.start, i),
        }),
      t.allDay &&
        (u.range = { start: yt(u.range.start), end: yt(u.range.end) }),
      u.range.end < u.range.start &&
        (u.range.end = kr(t.allDay, u.range.start, i)),
      u
    );
  }
  var Pr = (function () {
      function e(e, t, n) {
        (this.type = e), (this.getCurrentData = t), (this.dateEnv = n);
      }
      return (
        Object.defineProperty(e.prototype, "calendar", {
          get: function () {
            return this.getCurrentData().calendarApi;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "title", {
          get: function () {
            return this.getCurrentData().viewTitle;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "activeStart", {
          get: function () {
            return this.dateEnv.toDate(
              this.getCurrentData().dateProfile.activeRange.start
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "activeEnd", {
          get: function () {
            return this.dateEnv.toDate(
              this.getCurrentData().dateProfile.activeRange.end
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "currentStart", {
          get: function () {
            return this.dateEnv.toDate(
              this.getCurrentData().dateProfile.currentRange.start
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "currentEnd", {
          get: function () {
            return this.dateEnv.toDate(
              this.getCurrentData().dateProfile.currentRange.end
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.getOption = function (e) {
          return this.getCurrentData().options[e];
        }),
        e
      );
    })(),
    Nr = {
      id: String,
      defaultAllDay: Boolean,
      url: String,
      format: String,
      events: kn,
      eventDataTransform: kn,
      success: kn,
      failure: kn,
    };
  function Hr(e, t, n) {
    var r;
    if (
      (void 0 === n && (n = Or(t)),
      "string" == typeof e
        ? (r = { url: e })
        : "function" == typeof e || Array.isArray(e)
        ? (r = { events: e })
        : "object" == typeof e && e && (r = e),
      r)
    ) {
      var o = Tn(r, n),
        i = o.refined,
        a = o.extra,
        s = (function (e, t) {
          for (
            var n = t.pluginHooks.eventSourceDefs, r = n.length - 1;
            r >= 0;
            r -= 1
          ) {
            var o = n[r].parseMeta(e);
            if (o) return { sourceDefId: r, meta: o };
          }
          return null;
        })(i, t);
      if (s)
        return {
          _raw: e,
          isFetching: !1,
          latestFetchId: "",
          fetchRange: null,
          defaultAllDay: i.defaultAllDay,
          eventDataTransform: i.eventDataTransform,
          success: i.success,
          failure: i.failure,
          publicId: i.id || "",
          sourceId: Ye(),
          sourceDefId: s.sourceDefId,
          meta: s.meta,
          ui: Ln(i, t),
          extendedProps: a,
        };
    }
    return null;
  }
  function Or(e) {
    return r(r(r({}, On), Nr), e.pluginHooks.eventSourceRefiners);
  }
  function Ar(e, t) {
    return (
      "function" == typeof e && (e = e()),
      null == e ? t.createNowMarker() : t.createMarker(e)
    );
  }
  var Lr = (function () {
      function e() {}
      return (
        (e.prototype.getCurrentData = function () {
          return this.currentDataManager.getCurrentData();
        }),
        (e.prototype.dispatch = function (e) {
          return this.currentDataManager.dispatch(e);
        }),
        Object.defineProperty(e.prototype, "view", {
          get: function () {
            return this.getCurrentData().viewApi;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.batchRendering = function (e) {
          e();
        }),
        (e.prototype.updateSize = function () {
          this.trigger("_resize", !0);
        }),
        (e.prototype.setOption = function (e, t) {
          this.dispatch({
            type: "SET_OPTION",
            optionName: e,
            rawOptionValue: t,
          });
        }),
        (e.prototype.getOption = function (e) {
          return this.currentDataManager.currentCalendarOptionsInput[e];
        }),
        (e.prototype.getAvailableLocaleCodes = function () {
          return Object.keys(this.getCurrentData().availableRawLocales);
        }),
        (e.prototype.on = function (e, t) {
          var n = this.currentDataManager;
          n.currentCalendarOptionsRefiners[e]
            ? n.emitter.on(e, t)
            : console.warn("Unknown listener name '" + e + "'");
        }),
        (e.prototype.off = function (e, t) {
          this.currentDataManager.emitter.off(e, t);
        }),
        (e.prototype.trigger = function (e) {
          for (var t, n = [], r = 1; r < arguments.length; r++)
            n[r - 1] = arguments[r];
          (t = this.currentDataManager.emitter).trigger.apply(t, o([e], n));
        }),
        (e.prototype.changeView = function (e, t) {
          var n = this;
          this.batchRendering(function () {
            if ((n.unselect(), t))
              if (t.start && t.end)
                n.dispatch({ type: "CHANGE_VIEW_TYPE", viewType: e }),
                  n.dispatch({
                    type: "SET_OPTION",
                    optionName: "visibleRange",
                    rawOptionValue: t,
                  });
              else {
                var r = n.getCurrentData().dateEnv;
                n.dispatch({
                  type: "CHANGE_VIEW_TYPE",
                  viewType: e,
                  dateMarker: r.createMarker(t),
                });
              }
            else n.dispatch({ type: "CHANGE_VIEW_TYPE", viewType: e });
          });
        }),
        (e.prototype.zoomTo = function (e, t) {
          var n;
          (t = t || "day"),
            (n = this.getCurrentData().viewSpecs[t] || this.getUnitViewSpec(t)),
            this.unselect(),
            n
              ? this.dispatch({
                  type: "CHANGE_VIEW_TYPE",
                  viewType: n.type,
                  dateMarker: e,
                })
              : this.dispatch({ type: "CHANGE_DATE", dateMarker: e });
        }),
        (e.prototype.getUnitViewSpec = function (e) {
          var t,
            n,
            r = this.getCurrentData(),
            o = r.viewSpecs,
            i = r.toolbarConfig,
            a = [].concat(
              i.header ? i.header.viewsWithButtons : [],
              i.footer ? i.footer.viewsWithButtons : []
            );
          for (var s in o) a.push(s);
          for (t = 0; t < a.length; t += 1)
            if ((n = o[a[t]]) && n.singleUnit === e) return n;
          return null;
        }),
        (e.prototype.prev = function () {
          this.unselect(), this.dispatch({ type: "PREV" });
        }),
        (e.prototype.next = function () {
          this.unselect(), this.dispatch({ type: "NEXT" });
        }),
        (e.prototype.prevYear = function () {
          var e = this.getCurrentData();
          this.unselect(),
            this.dispatch({
              type: "CHANGE_DATE",
              dateMarker: e.dateEnv.addYears(e.currentDate, -1),
            });
        }),
        (e.prototype.nextYear = function () {
          var e = this.getCurrentData();
          this.unselect(),
            this.dispatch({
              type: "CHANGE_DATE",
              dateMarker: e.dateEnv.addYears(e.currentDate, 1),
            });
        }),
        (e.prototype.today = function () {
          var e = this.getCurrentData();
          this.unselect(),
            this.dispatch({
              type: "CHANGE_DATE",
              dateMarker: Ar(e.calendarOptions.now, e.dateEnv),
            });
        }),
        (e.prototype.gotoDate = function (e) {
          var t = this.getCurrentData();
          this.unselect(),
            this.dispatch({
              type: "CHANGE_DATE",
              dateMarker: t.dateEnv.createMarker(e),
            });
        }),
        (e.prototype.incrementDate = function (e) {
          var t = this.getCurrentData(),
            n = zt(e);
          n &&
            (this.unselect(),
            this.dispatch({
              type: "CHANGE_DATE",
              dateMarker: t.dateEnv.add(t.currentDate, n),
            }));
        }),
        (e.prototype.getDate = function () {
          var e = this.getCurrentData();
          return e.dateEnv.toDate(e.currentDate);
        }),
        (e.prototype.formatDate = function (e, t) {
          var n = this.getCurrentData().dateEnv;
          return n.format(n.createMarker(e), yn(t));
        }),
        (e.prototype.formatRange = function (e, t, n) {
          var r = this.getCurrentData().dateEnv;
          return r.formatRange(r.createMarker(e), r.createMarker(t), yn(n), n);
        }),
        (e.prototype.formatIso = function (e, t) {
          var n = this.getCurrentData().dateEnv;
          return n.formatIso(n.createMarker(e), { omitTime: t });
        }),
        (e.prototype.select = function (e, t) {
          var n;
          n =
            null == t
              ? null != e.start
                ? e
                : { start: e, end: null }
              : { start: e, end: t };
          var r = this.getCurrentData(),
            o = br(n, r.dateEnv, zt({ days: 1 }));
          o &&
            (this.dispatch({ type: "SELECT_DATES", selection: o }),
            Rr(o, null, r));
        }),
        (e.prototype.unselect = function (e) {
          var t = this.getCurrentData();
          t.dateSelection &&
            (this.dispatch({ type: "UNSELECT_DATES" }),
            (function (e, t) {
              t.emitter.trigger("unselect", {
                jsEvent: e ? e.origEvent : null,
                view: t.viewApi || t.calendarApi.view,
              });
            })(e, t));
        }),
        (e.prototype.addEvent = function (e, t) {
          if (e instanceof Ur) {
            var n = e._def,
              r = e._instance;
            return (
              this.getCurrentData().eventStore.defs[n.defId] ||
                (this.dispatch({
                  type: "ADD_EVENTS",
                  eventStore: Mn({ def: n, instance: r }),
                }),
                this.triggerEventAdd(e)),
              e
            );
          }
          var o,
            i = this.getCurrentData();
          if (t instanceof ke) o = t.internalEventSource;
          else if ("boolean" == typeof t) t && (o = Nt(i.eventSources)[0]);
          else if (null != t) {
            var a = this.getEventSourceById(t);
            if (!a)
              return (
                console.warn(
                  'Could not find an event source with ID "' + t + '"'
                ),
                null
              );
            o = a.internalEventSource;
          }
          var s = zn(e, o, i, !1);
          if (s) {
            var l = new Ur(i, s.def, s.def.recurringDef ? null : s.instance);
            return (
              this.dispatch({ type: "ADD_EVENTS", eventStore: Mn(s) }),
              this.triggerEventAdd(l),
              l
            );
          }
          return null;
        }),
        (e.prototype.triggerEventAdd = function (e) {
          var t = this;
          this.getCurrentData().emitter.trigger("eventAdd", {
            event: e,
            relatedEvents: [],
            revert: function () {
              t.dispatch({ type: "REMOVE_EVENTS", eventStore: Wr(e) });
            },
          });
        }),
        (e.prototype.getEventById = function (e) {
          var t = this.getCurrentData(),
            n = t.eventStore,
            r = n.defs,
            o = n.instances;
          for (var i in ((e = String(e)), r)) {
            var a = r[i];
            if (a.publicId === e) {
              if (a.recurringDef) return new Ur(t, a, null);
              for (var s in o) {
                var l = o[s];
                if (l.defId === a.defId) return new Ur(t, a, l);
              }
            }
          }
          return null;
        }),
        (e.prototype.getEvents = function () {
          var e = this.getCurrentData();
          return Vr(e.eventStore, e);
        }),
        (e.prototype.removeAllEvents = function () {
          this.dispatch({ type: "REMOVE_ALL_EVENTS" });
        }),
        (e.prototype.getEventSources = function () {
          var e = this.getCurrentData(),
            t = e.eventSources,
            n = [];
          for (var r in t) n.push(new ke(e, t[r]));
          return n;
        }),
        (e.prototype.getEventSourceById = function (e) {
          var t = this.getCurrentData(),
            n = t.eventSources;
          for (var r in ((e = String(e)), n))
            if (n[r].publicId === e) return new ke(t, n[r]);
          return null;
        }),
        (e.prototype.addEventSource = function (e) {
          var t = this.getCurrentData();
          if (e instanceof ke)
            return (
              t.eventSources[e.internalEventSource.sourceId] ||
                this.dispatch({
                  type: "ADD_EVENT_SOURCES",
                  sources: [e.internalEventSource],
                }),
              e
            );
          var n = Hr(e, t);
          return n
            ? (this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [n] }),
              new ke(t, n))
            : null;
        }),
        (e.prototype.removeAllEventSources = function () {
          this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" });
        }),
        (e.prototype.refetchEvents = function () {
          this.dispatch({ type: "FETCH_EVENT_SOURCES", isRefetch: !0 });
        }),
        (e.prototype.scrollToTime = function (e) {
          var t = zt(e);
          t && this.trigger("_scrollRequest", { time: t });
        }),
        e
      );
    })(),
    Ur = (function () {
      function e(e, t, n) {
        (this._context = e), (this._def = t), (this._instance = n || null);
      }
      return (
        (e.prototype.setProp = function (e, t) {
          var n, r;
          if (e in Fn)
            console.warn(
              "Could not set date-related prop 'name'. Use one of the date-related methods instead."
            );
          else if ("id" === e)
            (t = Vn[e](t)), this.mutate({ standardProps: { publicId: t } });
          else if (e in Vn)
            (t = Vn[e](t)),
              this.mutate({ standardProps: ((n = {}), (n[e] = t), n) });
          else if (e in On) {
            var o = On[e](t);
            "color" === e
              ? (o = { backgroundColor: t, borderColor: t })
              : "editable" === e
              ? (o = { startEditable: t, durationEditable: t })
              : (((r = {})[e] = t), (o = r)),
              this.mutate({ standardProps: { ui: o } });
          } else
            console.warn(
              "Could not set prop '" + e + "'. Use setExtendedProp instead."
            );
        }),
        (e.prototype.setExtendedProp = function (e, t) {
          var n;
          this.mutate({ extendedProps: ((n = {}), (n[e] = t), n) });
        }),
        (e.prototype.setStart = function (e, t) {
          void 0 === t && (t = {});
          var n = this._context.dateEnv,
            r = n.createMarker(e);
          if (r && this._instance) {
            var o = Kn(this._instance.range.start, r, n, t.granularity);
            t.maintainDuration
              ? this.mutate({ datesDelta: o })
              : this.mutate({ startDelta: o });
          }
        }),
        (e.prototype.setEnd = function (e, t) {
          void 0 === t && (t = {});
          var n,
            r = this._context.dateEnv;
          if ((null == e || (n = r.createMarker(e))) && this._instance)
            if (n) {
              var o = Kn(this._instance.range.end, n, r, t.granularity);
              this.mutate({ endDelta: o });
            } else this.mutate({ standardProps: { hasEnd: !1 } });
        }),
        (e.prototype.setDates = function (e, t, n) {
          void 0 === n && (n = {});
          var r,
            o,
            i,
            a = this._context.dateEnv,
            s = { allDay: n.allDay },
            l = a.createMarker(e);
          if (l && (null == t || (r = a.createMarker(t))) && this._instance) {
            var u = this._instance.range;
            !0 === n.allDay && (u = Yn(u));
            var c = Kn(u.start, l, a, n.granularity);
            if (r) {
              var d = Kn(u.end, r, a, n.granularity);
              (i = d),
                (o = c).years === i.years &&
                o.months === i.months &&
                o.days === i.days &&
                o.milliseconds === i.milliseconds
                  ? this.mutate({ datesDelta: c, standardProps: s })
                  : this.mutate({
                      startDelta: c,
                      endDelta: d,
                      standardProps: s,
                    });
            } else
              (s.hasEnd = !1), this.mutate({ datesDelta: c, standardProps: s });
          }
        }),
        (e.prototype.moveStart = function (e) {
          var t = zt(e);
          t && this.mutate({ startDelta: t });
        }),
        (e.prototype.moveEnd = function (e) {
          var t = zt(e);
          t && this.mutate({ endDelta: t });
        }),
        (e.prototype.moveDates = function (e) {
          var t = zt(e);
          t && this.mutate({ datesDelta: t });
        }),
        (e.prototype.setAllDay = function (e, t) {
          void 0 === t && (t = {});
          var n = { allDay: e },
            r = t.maintainDuration;
          null == r && (r = this._context.options.allDayMaintainDuration),
            this._def.allDay !== e && (n.hasEnd = r),
            this.mutate({ standardProps: n });
        }),
        (e.prototype.formatRange = function (e) {
          var t = this._context.dateEnv,
            n = this._instance,
            r = yn(e);
          return this._def.hasEnd
            ? t.formatRange(n.range.start, n.range.end, r, {
                forcedStartTzo: n.forcedStartTzo,
                forcedEndTzo: n.forcedEndTzo,
              })
            : t.format(n.range.start, r, { forcedTzo: n.forcedStartTzo });
        }),
        (e.prototype.mutate = function (t) {
          var n = this._instance;
          if (n) {
            var r = this._def,
              o = this._context,
              i = o.getCurrentData().eventStore,
              a = In(i, n.instanceId);
            a = xr(
              a,
              {
                "": {
                  display: "",
                  startEditable: !0,
                  durationEditable: !0,
                  constraints: [],
                  overlap: null,
                  allows: [],
                  backgroundColor: "",
                  borderColor: "",
                  textColor: "",
                  classNames: [],
                },
              },
              t,
              o
            );
            var s = new e(o, r, n);
            (this._def = a.defs[r.defId]),
              (this._instance = a.instances[n.instanceId]),
              o.dispatch({ type: "MERGE_EVENTS", eventStore: a }),
              o.emitter.trigger("eventChange", {
                oldEvent: s,
                event: this,
                relatedEvents: Vr(a, o, n),
                revert: function () {
                  o.dispatch({ type: "RESET_EVENTS", eventStore: i });
                },
              });
          }
        }),
        (e.prototype.remove = function () {
          var e = this._context,
            t = Wr(this);
          e.dispatch({ type: "REMOVE_EVENTS", eventStore: t }),
            e.emitter.trigger("eventRemove", {
              event: this,
              relatedEvents: [],
              revert: function () {
                e.dispatch({ type: "MERGE_EVENTS", eventStore: t });
              },
            });
        }),
        Object.defineProperty(e.prototype, "source", {
          get: function () {
            var e = this._def.sourceId;
            return e
              ? new ke(
                  this._context,
                  this._context.getCurrentData().eventSources[e]
                )
              : null;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "start", {
          get: function () {
            return this._instance
              ? this._context.dateEnv.toDate(this._instance.range.start)
              : null;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "end", {
          get: function () {
            return this._instance && this._def.hasEnd
              ? this._context.dateEnv.toDate(this._instance.range.end)
              : null;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "startStr", {
          get: function () {
            var e = this._instance;
            return e
              ? this._context.dateEnv.formatIso(e.range.start, {
                  omitTime: this._def.allDay,
                  forcedTzo: e.forcedStartTzo,
                })
              : "";
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "endStr", {
          get: function () {
            var e = this._instance;
            return e && this._def.hasEnd
              ? this._context.dateEnv.formatIso(e.range.end, {
                  omitTime: this._def.allDay,
                  forcedTzo: e.forcedEndTzo,
                })
              : "";
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "id", {
          get: function () {
            return this._def.publicId;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "groupId", {
          get: function () {
            return this._def.groupId;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "allDay", {
          get: function () {
            return this._def.allDay;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "title", {
          get: function () {
            return this._def.title;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "url", {
          get: function () {
            return this._def.url;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "display", {
          get: function () {
            return this._def.ui.display || "auto";
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "startEditable", {
          get: function () {
            return this._def.ui.startEditable;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "durationEditable", {
          get: function () {
            return this._def.ui.durationEditable;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "constraint", {
          get: function () {
            return this._def.ui.constraints[0] || null;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "overlap", {
          get: function () {
            return this._def.ui.overlap;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "allow", {
          get: function () {
            return this._def.ui.allows[0] || null;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "backgroundColor", {
          get: function () {
            return this._def.ui.backgroundColor;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "borderColor", {
          get: function () {
            return this._def.ui.borderColor;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "textColor", {
          get: function () {
            return this._def.ui.textColor;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "classNames", {
          get: function () {
            return this._def.ui.classNames;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "extendedProps", {
          get: function () {
            return this._def.extendedProps;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.toPlainObject = function (e) {
          void 0 === e && (e = {});
          var t = this._def,
            n = t.ui,
            o = this.startStr,
            i = this.endStr,
            a = {};
          return (
            t.title && (a.title = t.title),
            o && (a.start = o),
            i && (a.end = i),
            t.publicId && (a.id = t.publicId),
            t.groupId && (a.groupId = t.groupId),
            t.url && (a.url = t.url),
            n.display && "auto" !== n.display && (a.display = n.display),
            e.collapseColor &&
            n.backgroundColor &&
            n.backgroundColor === n.borderColor
              ? (a.color = n.backgroundColor)
              : (n.backgroundColor && (a.backgroundColor = n.backgroundColor),
                n.borderColor && (a.borderColor = n.borderColor)),
            n.textColor && (a.textColor = n.textColor),
            n.classNames.length && (a.classNames = n.classNames),
            Object.keys(t.extendedProps).length &&
              (e.collapseExtendedProps
                ? r(a, t.extendedProps)
                : (a.extendedProps = t.extendedProps)),
            a
          );
        }),
        (e.prototype.toJSON = function () {
          return this.toPlainObject();
        }),
        e
      );
    })();
  function Wr(e) {
    var t,
      n,
      r = e._def,
      o = e._instance;
    return {
      defs: ((t = {}), (t[r.defId] = r), t),
      instances: o ? ((n = {}), (n[o.instanceId] = o), n) : {},
    };
  }
  function Vr(e, t, n) {
    var r = e.defs,
      o = e.instances,
      i = [],
      a = n ? n.instanceId : "";
    for (var s in o) {
      var l = o[s],
        u = r[l.defId];
      l.instanceId !== a && i.push(new Ur(t, u, l));
    }
    return i;
  }
  var Fr,
    Br = {};
  (Fr = (function () {
    function e() {}
    return (
      (e.prototype.getMarkerYear = function (e) {
        return e.getUTCFullYear();
      }),
      (e.prototype.getMarkerMonth = function (e) {
        return e.getUTCMonth();
      }),
      (e.prototype.getMarkerDay = function (e) {
        return e.getUTCDate();
      }),
      (e.prototype.arrayToMarker = function (e) {
        return wt(e);
      }),
      (e.prototype.markerToArray = function (e) {
        return Ct(e);
      }),
      e
    );
  })()),
    (Br.gregory = Fr);
  var zr =
    /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
  function jr(e) {
    var t = zr.exec(e);
    if (t) {
      var n = new Date(
        Date.UTC(
          Number(t[1]),
          t[3] ? Number(t[3]) - 1 : 0,
          Number(t[5] || 1),
          Number(t[7] || 0),
          Number(t[8] || 0),
          Number(t[10] || 0),
          t[12] ? 1e3 * Number("0." + t[12]) : 0
        )
      );
      if (_t(n)) {
        var r = null;
        return (
          t[13] &&
            (r =
              ("-" === t[15] ? -1 : 1) *
              (60 * Number(t[16] || 0) + Number(t[18] || 0))),
          { marker: n, isTimeUnspecified: !t[6], timeZoneOffset: r }
        );
      }
    }
    return null;
  }
  var Gr = (function () {
      function e(e) {
        var t = (this.timeZone = e.timeZone),
          n = "local" !== t && "UTC" !== t;
        e.namedTimeZoneImpl &&
          n &&
          (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(t)),
          (this.canComputeOffset = Boolean(!n || this.namedTimeZoneImpl)),
          (this.calendarSystem = (function (e) {
            return new Br[e]();
          })(e.calendarSystem)),
          (this.locale = e.locale),
          (this.weekDow = e.locale.week.dow),
          (this.weekDoy = e.locale.week.doy),
          "ISO" === e.weekNumberCalculation &&
            ((this.weekDow = 1), (this.weekDoy = 4)),
          "number" == typeof e.firstDay && (this.weekDow = e.firstDay),
          "function" == typeof e.weekNumberCalculation &&
            (this.weekNumberFunc = e.weekNumberCalculation),
          (this.weekText =
            null != e.weekText ? e.weekText : e.locale.options.weekText),
          (this.weekTextLong =
            (null != e.weekTextLong
              ? e.weekTextLong
              : e.locale.options.weekTextLong) || this.weekText),
          (this.cmdFormatter = e.cmdFormatter),
          (this.defaultSeparator = e.defaultSeparator);
      }
      return (
        (e.prototype.createMarker = function (e) {
          var t = this.createMarkerMeta(e);
          return null === t ? null : t.marker;
        }),
        (e.prototype.createNowMarker = function () {
          return this.canComputeOffset
            ? this.timestampToMarker(new Date().valueOf())
            : wt(bt(new Date()));
        }),
        (e.prototype.createMarkerMeta = function (e) {
          if ("string" == typeof e) return this.parse(e);
          var t = null;
          return (
            "number" == typeof e
              ? (t = this.timestampToMarker(e))
              : e instanceof Date
              ? ((e = e.valueOf()), isNaN(e) || (t = this.timestampToMarker(e)))
              : Array.isArray(e) && (t = wt(e)),
            null !== t && _t(t)
              ? { marker: t, isTimeUnspecified: !1, forcedTzo: null }
              : null
          );
        }),
        (e.prototype.parse = function (e) {
          var t = jr(e);
          if (null === t) return null;
          var n = t.marker,
            r = null;
          return (
            null !== t.timeZoneOffset &&
              (this.canComputeOffset
                ? (n = this.timestampToMarker(
                    n.valueOf() - 60 * t.timeZoneOffset * 1e3
                  ))
                : (r = t.timeZoneOffset)),
            { marker: n, isTimeUnspecified: t.isTimeUnspecified, forcedTzo: r }
          );
        }),
        (e.prototype.getYear = function (e) {
          return this.calendarSystem.getMarkerYear(e);
        }),
        (e.prototype.getMonth = function (e) {
          return this.calendarSystem.getMarkerMonth(e);
        }),
        (e.prototype.add = function (e, t) {
          var n = this.calendarSystem.markerToArray(e);
          return (
            (n[0] += t.years),
            (n[1] += t.months),
            (n[2] += t.days),
            (n[6] += t.milliseconds),
            this.calendarSystem.arrayToMarker(n)
          );
        }),
        (e.prototype.subtract = function (e, t) {
          var n = this.calendarSystem.markerToArray(e);
          return (
            (n[0] -= t.years),
            (n[1] -= t.months),
            (n[2] -= t.days),
            (n[6] -= t.milliseconds),
            this.calendarSystem.arrayToMarker(n)
          );
        }),
        (e.prototype.addYears = function (e, t) {
          var n = this.calendarSystem.markerToArray(e);
          return (n[0] += t), this.calendarSystem.arrayToMarker(n);
        }),
        (e.prototype.addMonths = function (e, t) {
          var n = this.calendarSystem.markerToArray(e);
          return (n[1] += t), this.calendarSystem.arrayToMarker(n);
        }),
        (e.prototype.diffWholeYears = function (e, t) {
          var n = this.calendarSystem;
          return Rt(e) === Rt(t) &&
            n.getMarkerDay(e) === n.getMarkerDay(t) &&
            n.getMarkerMonth(e) === n.getMarkerMonth(t)
            ? n.getMarkerYear(t) - n.getMarkerYear(e)
            : null;
        }),
        (e.prototype.diffWholeMonths = function (e, t) {
          var n = this.calendarSystem;
          return Rt(e) === Rt(t) && n.getMarkerDay(e) === n.getMarkerDay(t)
            ? n.getMarkerMonth(t) -
                n.getMarkerMonth(e) +
                12 * (n.getMarkerYear(t) - n.getMarkerYear(e))
            : null;
        }),
        (e.prototype.greatestWholeUnit = function (e, t) {
          var n = this.diffWholeYears(e, t);
          return null !== n
            ? { unit: "year", value: n }
            : null !== (n = this.diffWholeMonths(e, t))
            ? { unit: "month", value: n }
            : null !== (n = gt(e, t))
            ? { unit: "week", value: n }
            : null !== (n = mt(e, t))
            ? { unit: "day", value: n }
            : st(
                (n = (function (e, t) {
                  return (t.valueOf() - e.valueOf()) / 36e5;
                })(e, t))
              )
            ? { unit: "hour", value: n }
            : st(
                (n = (function (e, t) {
                  return (t.valueOf() - e.valueOf()) / 6e4;
                })(e, t))
              )
            ? { unit: "minute", value: n }
            : st(
                (n = (function (e, t) {
                  return (t.valueOf() - e.valueOf()) / 1e3;
                })(e, t))
              )
            ? { unit: "second", value: n }
            : { unit: "millisecond", value: t.valueOf() - e.valueOf() };
        }),
        (e.prototype.countDurationsBetween = function (e, t, n) {
          var r;
          return n.years && null !== (r = this.diffWholeYears(e, t))
            ? r / (Yt(n) / 365)
            : n.months && null !== (r = this.diffWholeMonths(e, t))
            ? r /
              (function (e) {
                return Yt(e) / 30;
              })(n)
            : n.days && null !== (r = mt(e, t))
            ? r / Yt(n)
            : (t.valueOf() - e.valueOf()) / Zt(n);
        }),
        (e.prototype.startOf = function (e, t) {
          return "year" === t
            ? this.startOfYear(e)
            : "month" === t
            ? this.startOfMonth(e)
            : "week" === t
            ? this.startOfWeek(e)
            : "day" === t
            ? yt(e)
            : "hour" === t
            ? (function (e) {
                return wt([
                  e.getUTCFullYear(),
                  e.getUTCMonth(),
                  e.getUTCDate(),
                  e.getUTCHours(),
                ]);
              })(e)
            : "minute" === t
            ? (function (e) {
                return wt([
                  e.getUTCFullYear(),
                  e.getUTCMonth(),
                  e.getUTCDate(),
                  e.getUTCHours(),
                  e.getUTCMinutes(),
                ]);
              })(e)
            : "second" === t
            ? (function (e) {
                return wt([
                  e.getUTCFullYear(),
                  e.getUTCMonth(),
                  e.getUTCDate(),
                  e.getUTCHours(),
                  e.getUTCMinutes(),
                  e.getUTCSeconds(),
                ]);
              })(e)
            : null;
        }),
        (e.prototype.startOfYear = function (e) {
          return this.calendarSystem.arrayToMarker([
            this.calendarSystem.getMarkerYear(e),
          ]);
        }),
        (e.prototype.startOfMonth = function (e) {
          return this.calendarSystem.arrayToMarker([
            this.calendarSystem.getMarkerYear(e),
            this.calendarSystem.getMarkerMonth(e),
          ]);
        }),
        (e.prototype.startOfWeek = function (e) {
          return this.calendarSystem.arrayToMarker([
            this.calendarSystem.getMarkerYear(e),
            this.calendarSystem.getMarkerMonth(e),
            e.getUTCDate() - ((e.getUTCDay() - this.weekDow + 7) % 7),
          ]);
        }),
        (e.prototype.computeWeekNumber = function (e) {
          return this.weekNumberFunc
            ? this.weekNumberFunc(this.toDate(e))
            : (function (e, t, n) {
                var r = e.getUTCFullYear(),
                  o = Et(e, r, t, n);
                if (o < 1) return Et(e, r - 1, t, n);
                var i = Et(e, r + 1, t, n);
                return i >= 1 ? Math.min(o, i) : o;
              })(e, this.weekDow, this.weekDoy);
        }),
        (e.prototype.format = function (e, t, n) {
          return (
            void 0 === n && (n = {}),
            t.format(
              {
                marker: e,
                timeZoneOffset:
                  null != n.forcedTzo ? n.forcedTzo : this.offsetForMarker(e),
              },
              this
            )
          );
        }),
        (e.prototype.formatRange = function (e, t, n, r) {
          return (
            void 0 === r && (r = {}),
            r.isEndExclusive && (t = pt(t, -1)),
            n.formatRange(
              {
                marker: e,
                timeZoneOffset:
                  null != r.forcedStartTzo
                    ? r.forcedStartTzo
                    : this.offsetForMarker(e),
              },
              {
                marker: t,
                timeZoneOffset:
                  null != r.forcedEndTzo
                    ? r.forcedEndTzo
                    : this.offsetForMarker(t),
              },
              this,
              r.defaultSeparator
            )
          );
        }),
        (e.prototype.formatIso = function (e, t) {
          void 0 === t && (t = {});
          var n = null;
          return (
            t.omitTimeZoneOffset ||
              (n = null != t.forcedTzo ? t.forcedTzo : this.offsetForMarker(e)),
            $t(e, n, t.omitTime)
          );
        }),
        (e.prototype.timestampToMarker = function (e) {
          return "local" === this.timeZone
            ? wt(bt(new Date(e)))
            : "UTC" !== this.timeZone && this.namedTimeZoneImpl
            ? wt(this.namedTimeZoneImpl.timestampToArray(e))
            : new Date(e);
        }),
        (e.prototype.offsetForMarker = function (e) {
          return "local" === this.timeZone
            ? -Dt(Ct(e)).getTimezoneOffset()
            : "UTC" === this.timeZone
            ? 0
            : this.namedTimeZoneImpl
            ? this.namedTimeZoneImpl.offsetForArray(Ct(e))
            : null;
        }),
        (e.prototype.toDate = function (e, t) {
          return "local" === this.timeZone
            ? Dt(Ct(e))
            : "UTC" === this.timeZone
            ? new Date(e.valueOf())
            : this.namedTimeZoneImpl
            ? new Date(
                e.valueOf() -
                  1e3 * this.namedTimeZoneImpl.offsetForArray(Ct(e)) * 60
              )
            : new Date(e.valueOf() - (t || 0));
        }),
        e
      );
    })(),
    qr = [],
    Yr = {
      code: "en",
      week: { dow: 0, doy: 4 },
      direction: "ltr",
      buttonText: {
        prev: "prev",
        next: "next",
        prevYear: "prev year",
        nextYear: "next year",
        year: "year",
        today: "today",
        month: "month",
        week: "week",
        day: "day",
      },
      weekText: "W",
      weekTextLong: "Week",
      closeHint: "Close",
      timeHint: "Time",
      eventHint: "Event",
      allDayText: "all-day",
      moreLinkText: "more",
      noEventsText: "No events to display",
    },
    Zr = r(r({}, Yr), {
      buttonHints: {
        prev: "Previous $0",
        next: "Next $0",
        today: function (e, t) {
          return "day" === t ? "Today" : "This " + e;
        },
      },
      viewHint: "$0 view",
      navLinkHint: "Go to $0",
      moreLinkHint: function (e) {
        return "Show " + e + " more event" + (1 === e ? "" : "s");
      },
    });
  function Xr(e) {
    for (
      var t = e.length > 0 ? e[0].code : "en",
        n = qr.concat(e),
        r = { en: Zr },
        o = 0,
        i = n;
      o < i.length;
      o++
    ) {
      var a = i[o];
      r[a.code] = a;
    }
    return { map: r, defaultCode: t };
  }
  function Kr(e, t) {
    return "object" != typeof e || Array.isArray(e)
      ? (function (e, t) {
          var n = [].concat(e || []),
            r =
              (function (e, t) {
                for (var n = 0; n < e.length; n += 1)
                  for (
                    var r = e[n].toLocaleLowerCase().split("-"), o = r.length;
                    o > 0;
                    o -= 1
                  ) {
                    var i = r.slice(0, o).join("-");
                    if (t[i]) return t[i];
                  }
                return null;
              })(n, t) || Zr;
          return $r(e, n, r);
        })(e, t)
      : $r(e.code, [e.code], e);
  }
  function $r(e, t, n) {
    var r = xt([Yr, n], ["buttonText"]);
    delete r.code;
    var o = r.week;
    return (
      delete r.week,
      {
        codeArg: e,
        codes: t,
        week: o,
        simpleNumberFormat: new Intl.NumberFormat(e),
        options: r,
      }
    );
  }
  function Jr(e) {
    var t = Kr(e.locale || "en", Xr([]).map);
    return new Gr(
      r(r({ timeZone: Sn.timeZone, calendarSystem: "gregory" }, e), {
        locale: t,
      })
    );
  }
  var Qr,
    eo = {
      startTime: "09:00",
      endTime: "17:00",
      daysOfWeek: [1, 2, 3, 4, 5],
      display: "inverse-background",
      classNames: "fc-non-business",
      groupId: "_businessHours",
    };
  function to(e, t) {
    return xn(
      (function (e) {
        return (
          !0 === e
            ? [{}]
            : Array.isArray(e)
            ? e.filter(function (e) {
                return e.daysOfWeek;
              })
            : "object" == typeof e && e
            ? [e]
            : []
        ).map(function (e) {
          return r(r({}, eo), e);
        });
      })(e),
      null,
      t
    );
  }
  function no(e, t) {
    return (
      e.left >= t.left && e.left < t.right && e.top >= t.top && e.top < t.bottom
    );
  }
  function ro(e, t) {
    var n = {
      left: Math.max(e.left, t.left),
      right: Math.min(e.right, t.right),
      top: Math.max(e.top, t.top),
      bottom: Math.min(e.bottom, t.bottom),
    };
    return n.left < n.right && n.top < n.bottom && n;
  }
  function oo(e, t) {
    return {
      left: Math.min(Math.max(e.left, t.left), t.right),
      top: Math.min(Math.max(e.top, t.top), t.bottom),
    };
  }
  function io(e) {
    return { left: (e.left + e.right) / 2, top: (e.top + e.bottom) / 2 };
  }
  function ao(e, t) {
    return { left: e.left - t.left, top: e.top - t.top };
  }
  function so() {
    return (
      null == Qr &&
        (Qr = (function () {
          if ("undefined" == typeof document) return !0;
          var e = document.createElement("div");
          (e.style.position = "absolute"),
            (e.style.top = "0px"),
            (e.style.left = "0px"),
            (e.innerHTML = "<table><tr><td><div></div></td></tr></table>"),
            (e.querySelector("table").style.height = "100px"),
            (e.querySelector("div").style.height = "100%"),
            document.body.appendChild(e);
          var t = e.querySelector("div").offsetHeight > 0;
          return document.body.removeChild(e), t;
        })()),
      Qr
    );
  }
  var lo = { defs: {}, instances: {} },
    uo = (function () {
      function e() {
        (this.getKeysForEventDefs = nn(this._getKeysForEventDefs)),
          (this.splitDateSelection = nn(this._splitDateSpan)),
          (this.splitEventStore = nn(this._splitEventStore)),
          (this.splitIndividualUi = nn(this._splitIndividualUi)),
          (this.splitEventDrag = nn(this._splitInteraction)),
          (this.splitEventResize = nn(this._splitInteraction)),
          (this.eventUiBuilders = {});
      }
      return (
        (e.prototype.splitProps = function (e) {
          var t = this,
            n = this.getKeyInfo(e),
            r = this.getKeysForEventDefs(e.eventStore),
            o = this.splitDateSelection(e.dateSelection),
            i = this.splitIndividualUi(e.eventUiBases, r),
            a = this.splitEventStore(e.eventStore, r),
            s = this.splitEventDrag(e.eventDrag),
            l = this.splitEventResize(e.eventResize),
            u = {};
          for (var c in ((this.eventUiBuilders = It(n, function (e, n) {
            return t.eventUiBuilders[n] || nn(co);
          })),
          n)) {
            var d = n[c],
              p = a[c] || lo,
              f = this.eventUiBuilders[c];
            u[c] = {
              businessHours: d.businessHours || e.businessHours,
              dateSelection: o[c] || null,
              eventStore: p,
              eventUiBases: f(e.eventUiBases[""], d.ui, i[c]),
              eventSelection: p.instances[e.eventSelection]
                ? e.eventSelection
                : "",
              eventDrag: s[c] || null,
              eventResize: l[c] || null,
            };
          }
          return u;
        }),
        (e.prototype._splitDateSpan = function (e) {
          var t = {};
          if (e)
            for (var n = 0, r = this.getKeysForDateSpan(e); n < r.length; n++)
              t[r[n]] = e;
          return t;
        }),
        (e.prototype._getKeysForEventDefs = function (e) {
          var t = this;
          return It(e.defs, function (e) {
            return t.getKeysForEventDef(e);
          });
        }),
        (e.prototype._splitEventStore = function (e, t) {
          var n = e.defs,
            r = e.instances,
            o = {};
          for (var i in n)
            for (var a = 0, s = t[i]; a < s.length; a++)
              o[(p = s[a])] || (o[p] = { defs: {}, instances: {} }),
                (o[p].defs[i] = n[i]);
          for (var l in r)
            for (var u = r[l], c = 0, d = t[u.defId]; c < d.length; c++) {
              var p;
              o[(p = d[c])] && (o[p].instances[l] = u);
            }
          return o;
        }),
        (e.prototype._splitIndividualUi = function (e, t) {
          var n = {};
          for (var r in e)
            if (r)
              for (var o = 0, i = t[r]; o < i.length; o++) {
                var a = i[o];
                n[a] || (n[a] = {}), (n[a][r] = e[r]);
              }
          return n;
        }),
        (e.prototype._splitInteraction = function (e) {
          var t = {};
          if (e) {
            var n = this._splitEventStore(
                e.affectedEvents,
                this._getKeysForEventDefs(e.affectedEvents)
              ),
              r = this._getKeysForEventDefs(e.mutatedEvents),
              o = this._splitEventStore(e.mutatedEvents, r),
              i = function (r) {
                t[r] ||
                  (t[r] = {
                    affectedEvents: n[r] || lo,
                    mutatedEvents: o[r] || lo,
                    isEvent: e.isEvent,
                  });
              };
            for (var a in n) i(a);
            for (var a in o) i(a);
          }
          return t;
        }),
        e
      );
    })();
  function co(e, t, n) {
    var o = [];
    e && o.push(e), t && o.push(t);
    var i = { "": Un(o) };
    return n && r(i, n), i;
  }
  function po(e, t, n, r) {
    return {
      dow: e.getUTCDay(),
      isDisabled: Boolean(r && !rr(r.activeRange, e)),
      isOther: Boolean(r && !rr(r.currentRange, e)),
      isToday: Boolean(t && rr(t, e)),
      isPast: Boolean(n ? e < n : !!t && e < t.start),
      isFuture: Boolean(n ? e > n : !!t && e >= t.end),
    };
  }
  function fo(e, t) {
    var n = ["fc-day", "fc-day-" + ut[e.dow]];
    return (
      e.isDisabled
        ? n.push("fc-day-disabled")
        : (e.isToday && (n.push("fc-day-today"), n.push(t.getClass("today"))),
          e.isPast && n.push("fc-day-past"),
          e.isFuture && n.push("fc-day-future"),
          e.isOther && n.push("fc-day-other")),
      n
    );
  }
  var ho = yn({ year: "numeric", month: "long", day: "numeric" }),
    vo = yn({ week: "long" });
  function go(e, t, n, o) {
    void 0 === n && (n = "day"), void 0 === o && (o = !0);
    var i = e.dateEnv,
      a = e.options,
      s = e.calendarApi,
      l = i.format(t, "week" === n ? vo : ho);
    if (a.navLinks) {
      var u = i.toDate(t),
        c = function (e) {
          var r =
            "day" === n
              ? a.navLinkDayClick
              : "week" === n
              ? a.navLinkWeekClick
              : null;
          "function" == typeof r
            ? r.call(s, i.toDate(t), e)
            : ("string" == typeof r && (n = r), s.zoomTo(t, n));
        };
      return r(
        { title: it(a.navLinkHint, [l, u], l), "data-navlink": "" },
        o ? je(c) : { onClick: c }
      );
    }
    return { "aria-label": l };
  }
  var mo,
    yo = null;
  function Eo() {
    return (
      null === yo &&
        (yo = (function () {
          var e = document.createElement("div");
          He(e, {
            position: "absolute",
            top: -1e3,
            left: 0,
            border: 0,
            padding: 0,
            overflow: "scroll",
            direction: "rtl",
          }),
            (e.innerHTML = "<div></div>"),
            document.body.appendChild(e);
          var t =
            e.firstChild.getBoundingClientRect().left >
            e.getBoundingClientRect().left;
          return xe(e), t;
        })()),
      yo
    );
  }
  function So() {
    return (
      mo ||
        (mo = (function () {
          var e = document.createElement("div");
          (e.style.overflow = "scroll"),
            (e.style.position = "absolute"),
            (e.style.top = "-9999px"),
            (e.style.left = "-9999px"),
            document.body.appendChild(e);
          var t = bo(e);
          return document.body.removeChild(e), t;
        })()),
      mo
    );
  }
  function bo(e) {
    return {
      x: e.offsetHeight - e.clientHeight,
      y: e.offsetWidth - e.clientWidth,
    };
  }
  function Do(e, t) {
    void 0 === t && (t = !1);
    var n = window.getComputedStyle(e),
      r = parseInt(n.borderLeftWidth, 10) || 0,
      o = parseInt(n.borderRightWidth, 10) || 0,
      i = parseInt(n.borderTopWidth, 10) || 0,
      a = parseInt(n.borderBottomWidth, 10) || 0,
      s = bo(e),
      l = s.y - r - o,
      u = {
        borderLeft: r,
        borderRight: o,
        borderTop: i,
        borderBottom: a,
        scrollbarBottom: s.x - i - a,
        scrollbarLeft: 0,
        scrollbarRight: 0,
      };
    return (
      Eo() && "rtl" === n.direction
        ? (u.scrollbarLeft = l)
        : (u.scrollbarRight = l),
      t &&
        ((u.paddingLeft = parseInt(n.paddingLeft, 10) || 0),
        (u.paddingRight = parseInt(n.paddingRight, 10) || 0),
        (u.paddingTop = parseInt(n.paddingTop, 10) || 0),
        (u.paddingBottom = parseInt(n.paddingBottom, 10) || 0)),
      u
    );
  }
  function Co(e, t, n) {
    void 0 === t && (t = !1);
    var r = n ? e.getBoundingClientRect() : wo(e),
      o = Do(e, t),
      i = {
        left: r.left + o.borderLeft + o.scrollbarLeft,
        right: r.right - o.borderRight - o.scrollbarRight,
        top: r.top + o.borderTop,
        bottom: r.bottom - o.borderBottom - o.scrollbarBottom,
      };
    return (
      t &&
        ((i.left += o.paddingLeft),
        (i.right -= o.paddingRight),
        (i.top += o.paddingTop),
        (i.bottom -= o.paddingBottom)),
      i
    );
  }
  function wo(e) {
    var t = e.getBoundingClientRect();
    return {
      left: t.left + window.pageXOffset,
      top: t.top + window.pageYOffset,
      right: t.right + window.pageXOffset,
      bottom: t.bottom + window.pageYOffset,
    };
  }
  function _o(e) {
    for (var t = []; e instanceof HTMLElement; ) {
      var n = window.getComputedStyle(e);
      if ("fixed" === n.position) break;
      /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && t.push(e),
        (e = e.parentNode);
    }
    return t;
  }
  function Ro(e, t, n) {
    var r = !1,
      o = function () {
        r || ((r = !0), t.apply(this, arguments));
      },
      i = function () {
        r || ((r = !0), n && n.apply(this, arguments));
      },
      a = e(o, i);
    a && "function" == typeof a.then && a.then(o, i);
  }
  var To = (function () {
      function e() {
        (this.handlers = {}), (this.thisContext = null);
      }
      return (
        (e.prototype.setThisContext = function (e) {
          this.thisContext = e;
        }),
        (e.prototype.setOptions = function (e) {
          this.options = e;
        }),
        (e.prototype.on = function (e, t) {
          !(function (e, t, n) {
            (e[t] || (e[t] = [])).push(n);
          })(this.handlers, e, t);
        }),
        (e.prototype.off = function (e, t) {
          !(function (e, t, n) {
            n
              ? e[t] &&
                (e[t] = e[t].filter(function (e) {
                  return e !== n;
                }))
              : delete e[t];
          })(this.handlers, e, t);
        }),
        (e.prototype.trigger = function (e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          for (
            var r = this.handlers[e] || [],
              o = this.options && this.options[e],
              i = [].concat(o || [], r),
              a = 0,
              s = i;
            a < s.length;
            a++
          ) {
            var l = s[a];
            l.apply(this.thisContext, t);
          }
        }),
        (e.prototype.hasHandlers = function (e) {
          return Boolean(
            (this.handlers[e] && this.handlers[e].length) ||
              (this.options && this.options[e])
          );
        }),
        e
      );
    })(),
    ko = (function () {
      function e(e, t, n, r) {
        this.els = t;
        var o = (this.originClientRect = e.getBoundingClientRect());
        n && this.buildElHorizontals(o.left), r && this.buildElVerticals(o.top);
      }
      return (
        (e.prototype.buildElHorizontals = function (e) {
          for (var t = [], n = [], r = 0, o = this.els; r < o.length; r++) {
            var i = o[r].getBoundingClientRect();
            t.push(i.left - e), n.push(i.right - e);
          }
          (this.lefts = t), (this.rights = n);
        }),
        (e.prototype.buildElVerticals = function (e) {
          for (var t = [], n = [], r = 0, o = this.els; r < o.length; r++) {
            var i = o[r].getBoundingClientRect();
            t.push(i.top - e), n.push(i.bottom - e);
          }
          (this.tops = t), (this.bottoms = n);
        }),
        (e.prototype.leftToIndex = function (e) {
          var t,
            n = this.lefts,
            r = this.rights,
            o = n.length;
          for (t = 0; t < o; t += 1) if (e >= n[t] && e < r[t]) return t;
        }),
        (e.prototype.topToIndex = function (e) {
          var t,
            n = this.tops,
            r = this.bottoms,
            o = n.length;
          for (t = 0; t < o; t += 1) if (e >= n[t] && e < r[t]) return t;
        }),
        (e.prototype.getWidth = function (e) {
          return this.rights[e] - this.lefts[e];
        }),
        (e.prototype.getHeight = function (e) {
          return this.bottoms[e] - this.tops[e];
        }),
        e
      );
    })(),
    xo = (function () {
      function e() {}
      return (
        (e.prototype.getMaxScrollTop = function () {
          return this.getScrollHeight() - this.getClientHeight();
        }),
        (e.prototype.getMaxScrollLeft = function () {
          return this.getScrollWidth() - this.getClientWidth();
        }),
        (e.prototype.canScrollVertically = function () {
          return this.getMaxScrollTop() > 0;
        }),
        (e.prototype.canScrollHorizontally = function () {
          return this.getMaxScrollLeft() > 0;
        }),
        (e.prototype.canScrollUp = function () {
          return this.getScrollTop() > 0;
        }),
        (e.prototype.canScrollDown = function () {
          return this.getScrollTop() < this.getMaxScrollTop();
        }),
        (e.prototype.canScrollLeft = function () {
          return this.getScrollLeft() > 0;
        }),
        (e.prototype.canScrollRight = function () {
          return this.getScrollLeft() < this.getMaxScrollLeft();
        }),
        e
      );
    })(),
    Mo = (function (e) {
      function t(t) {
        var n = e.call(this) || this;
        return (n.el = t), n;
      }
      return (
        n(t, e),
        (t.prototype.getScrollTop = function () {
          return this.el.scrollTop;
        }),
        (t.prototype.getScrollLeft = function () {
          return this.el.scrollLeft;
        }),
        (t.prototype.setScrollTop = function (e) {
          this.el.scrollTop = e;
        }),
        (t.prototype.setScrollLeft = function (e) {
          this.el.scrollLeft = e;
        }),
        (t.prototype.getScrollWidth = function () {
          return this.el.scrollWidth;
        }),
        (t.prototype.getScrollHeight = function () {
          return this.el.scrollHeight;
        }),
        (t.prototype.getClientHeight = function () {
          return this.el.clientHeight;
        }),
        (t.prototype.getClientWidth = function () {
          return this.el.clientWidth;
        }),
        t
      );
    })(xo),
    Io = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        n(t, e),
        (t.prototype.getScrollTop = function () {
          return window.pageYOffset;
        }),
        (t.prototype.getScrollLeft = function () {
          return window.pageXOffset;
        }),
        (t.prototype.setScrollTop = function (e) {
          window.scroll(window.pageXOffset, e);
        }),
        (t.prototype.setScrollLeft = function (e) {
          window.scroll(e, window.pageYOffset);
        }),
        (t.prototype.getScrollWidth = function () {
          return document.documentElement.scrollWidth;
        }),
        (t.prototype.getScrollHeight = function () {
          return document.documentElement.scrollHeight;
        }),
        (t.prototype.getClientHeight = function () {
          return document.documentElement.clientHeight;
        }),
        (t.prototype.getClientWidth = function () {
          return document.documentElement.clientWidth;
        }),
        t
      );
    })(xo),
    Po = (function () {
      function e(e) {
        this.iconOverrideOption &&
          this.setIconOverride(e[this.iconOverrideOption]);
      }
      return (
        (e.prototype.setIconOverride = function (e) {
          var t, n;
          if ("object" == typeof e && e) {
            for (n in ((t = r({}, this.iconClasses)), e))
              t[n] = this.applyIconOverridePrefix(e[n]);
            this.iconClasses = t;
          } else !1 === e && (this.iconClasses = {});
        }),
        (e.prototype.applyIconOverridePrefix = function (e) {
          var t = this.iconOverridePrefix;
          return t && 0 !== e.indexOf(t) && (e = t + e), e;
        }),
        (e.prototype.getClass = function (e) {
          return this.classes[e] || "";
        }),
        (e.prototype.getIconClass = function (e, t) {
          var n;
          return (n =
            (t && this.rtlIconClasses && this.rtlIconClasses[e]) ||
            this.iconClasses[e])
            ? this.baseIconClass + " " + n
            : "";
        }),
        (e.prototype.getCustomButtonIconClass = function (e) {
          var t;
          return this.iconOverrideCustomButtonOption &&
            (t = e[this.iconOverrideCustomButtonOption])
            ? this.baseIconClass + " " + this.applyIconOverridePrefix(t)
            : "";
        }),
        e
      );
    })();
  if (
    ((Po.prototype.classes = {}),
    (Po.prototype.iconClasses = {}),
    (Po.prototype.baseIconClass = ""),
    (Po.prototype.iconOverridePrefix = ""),
    "undefined" == typeof FullCalendarVDom)
  )
    throw new Error(
      "Please import the top-level fullcalendar lib before attempting to import a plugin."
    );
  var No = FullCalendarVDom.Component,
    Ho = FullCalendarVDom.createElement,
    Oo = FullCalendarVDom.render,
    Ao = FullCalendarVDom.createRef,
    Lo = FullCalendarVDom.Fragment,
    Uo = FullCalendarVDom.createContext,
    Wo = FullCalendarVDom.createPortal,
    Vo = FullCalendarVDom.flushSync,
    Fo = FullCalendarVDom.unmountComponentAtNode,
    Bo = (function () {
      function e(e, t, n, o) {
        var i = this;
        (this.execFunc = e),
          (this.emitter = t),
          (this.scrollTime = n),
          (this.scrollTimeReset = o),
          (this.handleScrollRequest = function (e) {
            (i.queuedRequest = r({}, i.queuedRequest || {}, e)), i.drain();
          }),
          t.on("_scrollRequest", this.handleScrollRequest),
          this.fireInitialScroll();
      }
      return (
        (e.prototype.detach = function () {
          this.emitter.off("_scrollRequest", this.handleScrollRequest);
        }),
        (e.prototype.update = function (e) {
          e && this.scrollTimeReset ? this.fireInitialScroll() : this.drain();
        }),
        (e.prototype.fireInitialScroll = function () {
          this.handleScrollRequest({ time: this.scrollTime });
        }),
        (e.prototype.drain = function () {
          this.queuedRequest &&
            this.execFunc(this.queuedRequest) &&
            (this.queuedRequest = null);
        }),
        e
      );
    })(),
    zo = Uo({});
  function jo(e, t, n, r, o, i, a, s, l, u, c, d, p) {
    return {
      dateEnv: o,
      options: n,
      pluginHooks: a,
      emitter: u,
      dispatch: s,
      getCurrentData: l,
      calendarApi: c,
      viewSpec: e,
      viewApi: t,
      dateProfileGenerator: r,
      theme: i,
      isRtl: "rtl" === n.direction,
      addResizeHandler: function (e) {
        u.on("_resize", e);
      },
      removeResizeHandler: function (e) {
        u.off("_resize", e);
      },
      createScrollResponder: function (e) {
        return new Bo(e, u, zt(n.scrollTime), n.scrollTimeReset);
      },
      registerInteractiveComponent: d,
      unregisterInteractiveComponent: p,
    };
  }
  var Go = (function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return (
      n(t, e),
      (t.prototype.shouldComponentUpdate = function (e, t) {
        return (
          this.debug && console.log(Ot(e, this.props), Ot(t, this.state)),
          !At(this.props, e, this.propEquality) ||
            !At(this.state, t, this.stateEquality)
        );
      }),
      (t.prototype.safeSetState = function (e) {
        At(this.state, r(r({}, this.state), e), this.stateEquality) ||
          this.setState(e);
      }),
      (t.addPropsEquality = Yo),
      (t.addStateEquality = Zo),
      (t.contextType = zo),
      t
    );
  })(No);
  (Go.prototype.propEquality = {}), (Go.prototype.stateEquality = {});
  var qo = (function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return n(t, e), (t.contextType = zo), t;
  })(Go);
  function Yo(e) {
    var t = Object.create(this.prototype.propEquality);
    r(t, e), (this.prototype.propEquality = t);
  }
  function Zo(e) {
    var t = Object.create(this.prototype.stateEquality);
    r(t, e), (this.prototype.stateEquality = t);
  }
  function Xo(e, t) {
    "function" == typeof e ? e(t) : e && (e.current = t);
  }
  var Ko = (function (e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this;
      return (t.uid = Ye()), t;
    }
    return (
      n(t, e),
      (t.prototype.prepareHits = function () {}),
      (t.prototype.queryHit = function (e, t, n, r) {
        return null;
      }),
      (t.prototype.isValidSegDownEl = function (e) {
        return (
          !this.props.eventDrag &&
          !this.props.eventResize &&
          !Me(e, ".fc-event-mirror")
        );
      }),
      (t.prototype.isValidDateDownEl = function (e) {
        return !(
          Me(e, ".fc-event:not(.fc-bg-event)") ||
          Me(e, ".fc-more-link") ||
          Me(e, "a[data-navlink]") ||
          Me(e, ".fc-popover")
        );
      }),
      t
    );
  })(qo);
  function $o(e) {
    return {
      id: Ye(),
      deps: e.deps || [],
      reducers: e.reducers || [],
      isLoadingFuncs: e.isLoadingFuncs || [],
      contextInit: [].concat(e.contextInit || []),
      eventRefiners: e.eventRefiners || {},
      eventDefMemberAdders: e.eventDefMemberAdders || [],
      eventSourceRefiners: e.eventSourceRefiners || {},
      isDraggableTransformers: e.isDraggableTransformers || [],
      eventDragMutationMassagers: e.eventDragMutationMassagers || [],
      eventDefMutationAppliers: e.eventDefMutationAppliers || [],
      dateSelectionTransformers: e.dateSelectionTransformers || [],
      datePointTransforms: e.datePointTransforms || [],
      dateSpanTransforms: e.dateSpanTransforms || [],
      views: e.views || {},
      viewPropsTransformers: e.viewPropsTransformers || [],
      isPropsValid: e.isPropsValid || null,
      externalDefTransforms: e.externalDefTransforms || [],
      viewContainerAppends: e.viewContainerAppends || [],
      eventDropTransformers: e.eventDropTransformers || [],
      componentInteractions: e.componentInteractions || [],
      calendarInteractions: e.calendarInteractions || [],
      themeClasses: e.themeClasses || {},
      eventSourceDefs: e.eventSourceDefs || [],
      cmdFormatter: e.cmdFormatter,
      recurringTypes: e.recurringTypes || [],
      namedTimeZonedImpl: e.namedTimeZonedImpl,
      initialView: e.initialView || "",
      elementDraggingImpl: e.elementDraggingImpl,
      optionChangeHandlers: e.optionChangeHandlers || {},
      scrollGridImpl: e.scrollGridImpl || null,
      contentTypeHandlers: e.contentTypeHandlers || {},
      listenerRefiners: e.listenerRefiners || {},
      optionRefiners: e.optionRefiners || {},
      propSetHandlers: e.propSetHandlers || {},
    };
  }
  var Jo = (function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return n(t, e), t;
  })(Po);
  function Qo(e, t, n, o) {
    if (t[e]) return t[e];
    var i = (function (e, t, n, o) {
      var i = n[e],
        a = o[e],
        s = function (e) {
          return i && null !== i[e] ? i[e] : a && null !== a[e] ? a[e] : null;
        },
        l = s("component"),
        u = s("superType"),
        c = null;
      if (u) {
        if (u === e)
          throw new Error(
            "Can't have a custom view type that references itself"
          );
        c = Qo(u, t, n, o);
      }
      return (
        !l && c && (l = c.component),
        l
          ? {
              type: e,
              component: l,
              defaults: r(r({}, c ? c.defaults : {}), i ? i.rawOptions : {}),
              overrides: r(r({}, c ? c.overrides : {}), a ? a.rawOptions : {}),
            }
          : null
      );
    })(e, t, n, o);
    return i && (t[e] = i), i;
  }
  (Jo.prototype.classes = {
    root: "fc-theme-standard",
    tableCellShaded: "fc-cell-shaded",
    buttonGroup: "fc-button-group",
    button: "fc-button fc-button-primary",
    buttonActive: "fc-button-active",
  }),
    (Jo.prototype.baseIconClass = "fc-icon"),
    (Jo.prototype.iconClasses = {
      close: "fc-icon-x",
      prev: "fc-icon-chevron-left",
      next: "fc-icon-chevron-right",
      prevYear: "fc-icon-chevrons-left",
      nextYear: "fc-icon-chevrons-right",
    }),
    (Jo.prototype.rtlIconClasses = {
      prev: "fc-icon-chevron-right",
      next: "fc-icon-chevron-left",
      prevYear: "fc-icon-chevrons-right",
      nextYear: "fc-icon-chevrons-left",
    }),
    (Jo.prototype.iconOverrideOption = "buttonIcons"),
    (Jo.prototype.iconOverrideCustomButtonOption = "icon"),
    (Jo.prototype.iconOverridePrefix = "fc-icon-");
  var ei = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.rootElRef = Ao()),
          (t.handleRootEl = function (e) {
            Xo(t.rootElRef, e), t.props.elRef && Xo(t.props.elRef, e);
          }),
          t
        );
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          var e = this,
            t = this.props,
            n = t.hookProps;
          return Ho(
            oi,
            {
              hookProps: n,
              didMount: t.didMount,
              willUnmount: t.willUnmount,
              elRef: this.handleRootEl,
            },
            function (r) {
              return Ho(
                ni,
                {
                  hookProps: n,
                  content: t.content,
                  defaultContent: t.defaultContent,
                  backupElRef: e.rootElRef,
                },
                function (e, o) {
                  return t.children(r, ai(t.classNames, n), e, o);
                }
              );
            }
          );
        }),
        t
      );
    })(qo),
    ti = Uo(0);
  function ni(e) {
    return Ho(ti.Consumer, null, function (t) {
      return Ho(ri, r({ renderId: t }, e));
    });
  }
  var ri = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (t.innerElRef = Ao()), t;
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          return this.props.children(
            this.innerElRef,
            this.renderInnerContent()
          );
        }),
        (t.prototype.componentDidMount = function () {
          this.updateCustomContent();
        }),
        (t.prototype.componentDidUpdate = function () {
          this.updateCustomContent();
        }),
        (t.prototype.componentWillUnmount = function () {
          this.customContentInfo &&
            this.customContentInfo.destroy &&
            this.customContentInfo.destroy();
        }),
        (t.prototype.renderInnerContent = function () {
          var e = this.customContentInfo,
            t = this.getInnerContent(),
            n = this.getContentMeta(t);
          return (
            e && e.contentKey === n.contentKey
              ? e && (e.contentVal = t[n.contentKey])
              : (e &&
                  (e.destroy && e.destroy(),
                  (e = this.customContentInfo = null)),
                n.contentKey &&
                  (e = this.customContentInfo =
                    r(
                      { contentKey: n.contentKey, contentVal: t[n.contentKey] },
                      n.buildLifecycleFuncs()
                    ))),
            e ? [] : t
          );
        }),
        (t.prototype.getInnerContent = function () {
          var e = this.props,
            t = si(e.content, e.hookProps);
          return (
            void 0 === t && (t = si(e.defaultContent, e.hookProps)),
            null == t ? null : t
          );
        }),
        (t.prototype.getContentMeta = function (e) {
          var t = this.context.pluginHooks.contentTypeHandlers,
            n = "",
            r = null;
          if (e)
            for (var o in t)
              if (void 0 !== e[o]) {
                (n = o), (r = t[o]);
                break;
              }
          return { contentKey: n, buildLifecycleFuncs: r };
        }),
        (t.prototype.updateCustomContent = function () {
          this.customContentInfo &&
            this.customContentInfo.render(
              this.innerElRef.current || this.props.backupElRef.current,
              this.customContentInfo.contentVal
            );
        }),
        t
      );
    })(qo),
    oi = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.handleRootEl = function (e) {
            (t.rootEl = e), t.props.elRef && Xo(t.props.elRef, e);
          }),
          t
        );
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          return this.props.children(this.handleRootEl);
        }),
        (t.prototype.componentDidMount = function () {
          var e = this.props.didMount;
          e && e(r(r({}, this.props.hookProps), { el: this.rootEl }));
        }),
        (t.prototype.componentWillUnmount = function () {
          var e = this.props.willUnmount;
          e && e(r(r({}, this.props.hookProps), { el: this.rootEl }));
        }),
        t
      );
    })(qo);
  function ii() {
    var e,
      t,
      n = [];
    return function (r, o) {
      return (
        (t && Ht(t, o) && r === e) || ((e = r), (t = o), (n = ai(r, o))), n
      );
    };
  }
  function ai(e, t) {
    return "function" == typeof e && (e = e(t)), Hn(e);
  }
  function si(e, t) {
    return "function" == typeof e ? e(t, Ho) : e;
  }
  var li = (function (e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this;
      return (t.normalizeClassNames = ii()), t;
    }
    return (
      n(t, e),
      (t.prototype.render = function () {
        var e = this.props,
          t = this.context,
          n = t.options,
          r = { view: t.viewApi },
          o = this.normalizeClassNames(n.viewClassNames, r);
        return Ho(
          oi,
          {
            hookProps: r,
            didMount: n.viewDidMount,
            willUnmount: n.viewWillUnmount,
            elRef: e.elRef,
          },
          function (t) {
            return e.children(
              t,
              ["fc-" + e.viewSpec.type + "-view", "fc-view"].concat(o)
            );
          }
        );
      }),
      t
    );
  })(qo);
  function ui(e) {
    return It(e, ci);
  }
  function ci(e) {
    var t,
      n = "function" == typeof e ? { component: e } : e,
      o = n.component;
    return (
      n.content &&
        ((t = n),
        (o = function (e) {
          return Ho(zo.Consumer, null, function (n) {
            return Ho(li, { viewSpec: n.viewSpec }, function (o, i) {
              var a = r(r({}, e), {
                nextDayThreshold: n.options.nextDayThreshold,
              });
              return Ho(
                ei,
                {
                  hookProps: a,
                  classNames: t.classNames,
                  content: t.content,
                  didMount: t.didMount,
                  willUnmount: t.willUnmount,
                  elRef: o,
                },
                function (e, t, n, r) {
                  return Ho(
                    "div",
                    { className: i.concat(t).join(" "), ref: e },
                    r
                  );
                }
              );
            });
          });
        })),
      { superType: n.type, component: o, rawOptions: n }
    );
  }
  function di(e, t, n, o) {
    var i = ui(e),
      a = ui(t.views);
    return It(
      (function (e, t) {
        var n,
          r = {};
        for (n in e) Qo(n, r, e, t);
        for (n in t) Qo(n, r, e, t);
        return r;
      })(i, a),
      function (e) {
        return (function (e, t, n, o, i) {
          var a =
              e.overrides.duration ||
              e.defaults.duration ||
              o.duration ||
              n.duration,
            s = null,
            l = "",
            u = "",
            c = {};
          if (
            a &&
            (s = (function (e) {
              var t = JSON.stringify(e),
                n = pi[t];
              return void 0 === n && ((n = zt(e)), (pi[t] = n)), n;
            })(a))
          ) {
            var d = Kt(s);
            (l = d.unit),
              1 === d.value && ((u = l), (c = t[l] ? t[l].rawOptions : {}));
          }
          var p = function (t) {
              var n = t.buttonText || {},
                r = e.defaults.buttonTextKey;
              return null != r && null != n[r]
                ? n[r]
                : null != n[e.type]
                ? n[e.type]
                : null != n[u]
                ? n[u]
                : null;
            },
            f = function (t) {
              var n = t.buttonHints || {},
                r = e.defaults.buttonTextKey;
              return null != r && null != n[r]
                ? n[r]
                : null != n[e.type]
                ? n[e.type]
                : null != n[u]
                ? n[u]
                : null;
            };
          return {
            type: e.type,
            component: e.component,
            duration: s,
            durationUnit: l,
            singleUnit: u,
            optionDefaults: e.defaults,
            optionOverrides: r(r({}, c), e.overrides),
            buttonTextOverride: p(o) || p(n) || e.overrides.buttonText,
            buttonTextDefault: p(i) || e.defaults.buttonText || p(Sn) || e.type,
            buttonTitleOverride: f(o) || f(n) || e.overrides.buttonHint,
            buttonTitleDefault: f(i) || e.defaults.buttonHint || f(Sn),
          };
        })(e, a, t, n, o);
      }
    );
  }
  var pi = {},
    fi = (function () {
      function e(e) {
        (this.props = e),
          (this.nowDate = Ar(e.nowInput, e.dateEnv)),
          this.initHiddenDays();
      }
      return (
        (e.prototype.buildPrev = function (e, t, n) {
          var r = this.props.dateEnv,
            o = r.subtract(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
          return this.build(o, -1, n);
        }),
        (e.prototype.buildNext = function (e, t, n) {
          var r = this.props.dateEnv,
            o = r.add(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
          return this.build(o, 1, n);
        }),
        (e.prototype.build = function (e, t, n) {
          void 0 === n && (n = !0);
          var r,
            o,
            i,
            a,
            s,
            l,
            u,
            c,
            d = this.props;
          return (
            (r = this.buildValidRange()),
            (r = this.trimHiddenDays(r)),
            n &&
              ((u = e),
              (e =
                null != (c = r).start && u < c.start
                  ? c.start
                  : null != c.end && u >= c.end
                  ? new Date(c.end.valueOf() - 1)
                  : u)),
            (o = this.buildCurrentRangeInfo(e, t)),
            (i = /^(year|month|week|day)$/.test(o.unit)),
            (a = this.buildRenderRange(
              this.trimHiddenDays(o.range),
              o.unit,
              i
            )),
            (s = a = this.trimHiddenDays(a)),
            d.showNonCurrentDates || (s = Qn(s, o.range)),
            (s = Qn((s = this.adjustActiveRange(s)), r)),
            (l = tr(o.range, r)),
            {
              validRange: r,
              currentRange: o.range,
              currentRangeUnit: o.unit,
              isRangeAllDay: i,
              activeRange: s,
              renderRange: a,
              slotMinTime: d.slotMinTime,
              slotMaxTime: d.slotMaxTime,
              isValid: l,
              dateIncrement: this.buildDateIncrement(o.duration),
            }
          );
        }),
        (e.prototype.buildValidRange = function () {
          var e = this.props.validRangeInput,
            t =
              "function" == typeof e
                ? e.call(this.props.calendarApi, this.nowDate)
                : e;
          return this.refineRange(t) || { start: null, end: null };
        }),
        (e.prototype.buildCurrentRangeInfo = function (e, t) {
          var n,
            r = this.props,
            o = null,
            i = null,
            a = null;
          return (
            r.duration
              ? ((o = r.duration),
                (i = r.durationUnit),
                (a = this.buildRangeFromDuration(e, t, o, i)))
              : (n = this.props.dayCount)
              ? ((i = "day"), (a = this.buildRangeFromDayCount(e, t, n)))
              : (a = this.buildCustomVisibleRange(e))
              ? (i = r.dateEnv.greatestWholeUnit(a.start, a.end).unit)
              : ((i = Kt((o = this.getFallbackDuration())).unit),
                (a = this.buildRangeFromDuration(e, t, o, i))),
            { duration: o, unit: i, range: a }
          );
        }),
        (e.prototype.getFallbackDuration = function () {
          return zt({ day: 1 });
        }),
        (e.prototype.adjustActiveRange = function (e) {
          var t = this.props,
            n = t.dateEnv,
            r = t.usesMinMaxTime,
            o = t.slotMinTime,
            i = t.slotMaxTime,
            a = e.start,
            s = e.end;
          return (
            r &&
              (Yt(o) < 0 && ((a = yt(a)), (a = n.add(a, o))),
              Yt(i) > 1 && ((s = dt((s = yt(s)), -1)), (s = n.add(s, i)))),
            { start: a, end: s }
          );
        }),
        (e.prototype.buildRangeFromDuration = function (e, t, n, r) {
          var o,
            i,
            a,
            s = this.props,
            l = s.dateEnv,
            u = s.dateAlignment;
          if (!u) {
            var c = this.props.dateIncrement;
            u = c && Zt(c) < Zt(n) ? Kt(c).unit : r;
          }
          function d() {
            (o = l.startOf(e, u)),
              (i = l.add(o, n)),
              (a = { start: o, end: i });
          }
          return (
            Yt(n) <= 1 &&
              this.isHiddenDay(o) &&
              (o = yt((o = this.skipHiddenDays(o, t)))),
            d(),
            this.trimHiddenDays(a) || ((e = this.skipHiddenDays(e, t)), d()),
            a
          );
        }),
        (e.prototype.buildRangeFromDayCount = function (e, t, n) {
          var r,
            o = this.props,
            i = o.dateEnv,
            a = o.dateAlignment,
            s = 0,
            l = e;
          a && (l = i.startOf(l, a)),
            (l = yt(l)),
            (r = l = this.skipHiddenDays(l, t));
          do {
            (r = dt(r, 1)), this.isHiddenDay(r) || (s += 1);
          } while (s < n);
          return { start: l, end: r };
        }),
        (e.prototype.buildCustomVisibleRange = function (e) {
          var t = this.props,
            n = t.visibleRangeInput,
            r =
              "function" == typeof n
                ? n.call(t.calendarApi, t.dateEnv.toDate(e))
                : n,
            o = this.refineRange(r);
          return !o || (null != o.start && null != o.end) ? o : null;
        }),
        (e.prototype.buildRenderRange = function (e, t, n) {
          return e;
        }),
        (e.prototype.buildDateIncrement = function (e) {
          var t;
          return (
            this.props.dateIncrement ||
            ((t = this.props.dateAlignment) ? zt(1, t) : e || zt({ days: 1 }))
          );
        }),
        (e.prototype.refineRange = function (e) {
          if (e) {
            var t =
              ((n = e),
              (r = this.props.dateEnv),
              (o = null),
              (i = null),
              n.start && (o = r.createMarker(n.start)),
              n.end && (i = r.createMarker(n.end)),
              o || i ? (o && i && i < o ? null : { start: o, end: i }) : null);
            return t && (t = Zn(t)), t;
          }
          var n, r, o, i;
          return null;
        }),
        (e.prototype.initHiddenDays = function () {
          var e,
            t = this.props.hiddenDays || [],
            n = [],
            r = 0;
          for (!1 === this.props.weekends && t.push(0, 6), e = 0; e < 7; e += 1)
            (n[e] = -1 !== t.indexOf(e)) || (r += 1);
          if (!r) throw new Error("invalid hiddenDays");
          this.isHiddenDayHash = n;
        }),
        (e.prototype.trimHiddenDays = function (e) {
          var t = e.start,
            n = e.end;
          return (
            t && (t = this.skipHiddenDays(t)),
            n && (n = this.skipHiddenDays(n, -1, !0)),
            null == t || null == n || t < n ? { start: t, end: n } : null
          );
        }),
        (e.prototype.isHiddenDay = function (e) {
          return (
            e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e]
          );
        }),
        (e.prototype.skipHiddenDays = function (e, t, n) {
          for (
            void 0 === t && (t = 1), void 0 === n && (n = !1);
            this.isHiddenDayHash[(e.getUTCDay() + (n ? t : 0) + 7) % 7];

          )
            e = dt(e, t);
          return e;
        }),
        e
      );
    })();
  function hi(e) {
    for (var t in e) if (e[t].isFetching) return !0;
    return !1;
  }
  function vi(e, t, n, o) {
    for (var i = {}, a = 0, s = t; a < s.length; a++) {
      var l = s[a];
      i[l.sourceId] = l;
    }
    return n && (i = gi(i, n, o)), r(r({}, e), i);
  }
  function gi(e, t, n) {
    return mi(
      e,
      Mt(e, function (e) {
        return (function (e, t, n) {
          return Si(e, n)
            ? !n.options.lazyFetching ||
                !e.fetchRange ||
                e.isFetching ||
                t.start < e.fetchRange.start ||
                t.end > e.fetchRange.end
            : !e.latestFetchId;
        })(e, t, n);
      }),
      t,
      !1,
      n
    );
  }
  function mi(e, t, n, r, o) {
    var i = {};
    for (var a in e) {
      var s = e[a];
      t[a] ? (i[a] = yi(s, n, r, o)) : (i[a] = s);
    }
    return i;
  }
  function yi(e, t, n, o) {
    var i = o.options,
      a = o.calendarApi,
      s = o.pluginHooks.eventSourceDefs[e.sourceDefId],
      l = Ye();
    return (
      s.fetch(
        { eventSource: e, range: t, isRefetch: n, context: o },
        function (n) {
          var r = n.rawEvents;
          i.eventSourceSuccess &&
            (r = i.eventSourceSuccess.call(a, r, n.xhr) || r),
            e.success && (r = e.success.call(a, r, n.xhr) || r),
            o.dispatch({
              type: "RECEIVE_EVENTS",
              sourceId: e.sourceId,
              fetchId: l,
              fetchRange: t,
              rawEvents: r,
            });
        },
        function (n) {
          console.warn(n.message, n),
            i.eventSourceFailure && i.eventSourceFailure.call(a, n),
            e.failure && e.failure(n),
            o.dispatch({
              type: "RECEIVE_EVENT_ERROR",
              sourceId: e.sourceId,
              fetchId: l,
              fetchRange: t,
              error: n,
            });
        }
      ),
      r(r({}, e), { isFetching: !0, latestFetchId: l })
    );
  }
  function Ei(e, t) {
    return Mt(e, function (e) {
      return Si(e, t);
    });
  }
  function Si(e, t) {
    return !t.pluginHooks.eventSourceDefs[e.sourceDefId].ignoreRange;
  }
  function bi(e, t) {
    var n;
    if (t) {
      n = [];
      for (var r = 0, o = e; r < o.length; r++) {
        var i = o[r],
          a = t(i);
        a ? n.push(a) : null == a && n.push(i);
      }
    } else n = e;
    return n;
  }
  function Di(e, t) {
    return Nn(e, function (e) {
      return e.sourceId !== t;
    });
  }
  function Ci(e, t) {
    switch (t.type) {
      case "UNSELECT_DATES":
        return null;
      case "SELECT_DATES":
        return t.selection;
      default:
        return e;
    }
  }
  function wi(e, t) {
    switch (t.type) {
      case "UNSELECT_EVENT":
        return "";
      case "SELECT_EVENT":
        return t.eventInstanceId;
      default:
        return e;
    }
  }
  function _i(e, t) {
    var n;
    switch (t.type) {
      case "UNSET_EVENT_DRAG":
        return null;
      case "SET_EVENT_DRAG":
        return {
          affectedEvents: (n = t.state).affectedEvents,
          mutatedEvents: n.mutatedEvents,
          isEvent: n.isEvent,
        };
      default:
        return e;
    }
  }
  function Ri(e, t) {
    var n;
    switch (t.type) {
      case "UNSET_EVENT_RESIZE":
        return null;
      case "SET_EVENT_RESIZE":
        return {
          affectedEvents: (n = t.state).affectedEvents,
          mutatedEvents: n.mutatedEvents,
          isEvent: n.isEvent,
        };
      default:
        return e;
    }
  }
  function Ti(e, t, n, r, o) {
    return {
      header: e.headerToolbar ? ki(e.headerToolbar, e, t, n, r, o) : null,
      footer: e.footerToolbar ? ki(e.footerToolbar, e, t, n, r, o) : null,
    };
  }
  function ki(e, t, n, r, o, i) {
    var a = {},
      s = [],
      l = !1;
    for (var u in e) {
      var c = xi(e[u], t, n, r, o, i);
      (a[u] = c.widgets),
        s.push.apply(s, c.viewsWithButtons),
        (l = l || c.hasTitle);
    }
    return { sectionWidgets: a, viewsWithButtons: s, hasTitle: l };
  }
  function xi(e, t, n, r, o, i) {
    var a = "rtl" === t.direction,
      s = t.customButtons || {},
      l = n.buttonText || {},
      u = t.buttonText || {},
      c = n.buttonHints || {},
      d = t.buttonHints || {},
      p = e ? e.split(" ") : [],
      f = [],
      h = !1;
    return {
      widgets: p.map(function (e) {
        return e.split(",").map(function (e) {
          if ("title" === e) return (h = !0), { buttonName: e };
          var n, p, v, g, m, y;
          if ((n = s[e]))
            (v = function (e) {
              n.click && n.click.call(e.target, e, e.target);
            }),
              (g = r.getCustomButtonIconClass(n)) ||
                (g = r.getIconClass(e, a)) ||
                (m = n.text),
              (y = n.hint || n.text);
          else if ((p = o[e])) {
            f.push(e),
              (v = function () {
                i.changeView(e);
              }),
              (m = p.buttonTextOverride) ||
                (g = r.getIconClass(e, a)) ||
                (m = p.buttonTextDefault);
            var E = p.buttonTextOverride || p.buttonTextDefault;
            y = it(
              p.buttonTitleOverride || p.buttonTitleDefault || t.viewHint,
              [E, e],
              E
            );
          } else if (i[e])
            if (
              ((v = function () {
                i[e]();
              }),
              (m = l[e]) || (g = r.getIconClass(e, a)) || (m = u[e]),
              "prevYear" === e || "nextYear" === e)
            ) {
              var S = "prevYear" === e ? "prev" : "next";
              y = it(c[S] || d[S], [u.year || "year", "year"], u[e]);
            } else
              y = function (t) {
                return it(c[e] || d[e], [u[t] || t, t], u[e]);
              };
          return {
            buttonName: e,
            buttonClick: v,
            buttonIcon: g,
            buttonText: m,
            buttonHint: y,
          };
        });
      }),
      viewsWithButtons: f,
      hasTitle: h,
    };
  }
  function Mi(e, t, n, r, o) {
    var i = null;
    "GET" === (e = e.toUpperCase())
      ? (t = (function (e, t) {
          return e + (-1 === e.indexOf("?") ? "?" : "&") + Ii(t);
        })(t, n))
      : (i = Ii(n));
    var a = new XMLHttpRequest();
    a.open(e, t, !0),
      "GET" !== e &&
        a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
      (a.onload = function () {
        if (a.status >= 200 && a.status < 400) {
          var e = !1,
            t = void 0;
          try {
            (t = JSON.parse(a.responseText)), (e = !0);
          } catch (e) {}
          e ? r(t, a) : o("Failure parsing JSON", a);
        } else o("Request failed", a);
      }),
      (a.onerror = function () {
        o("Request failed", a);
      }),
      a.send(i);
  }
  function Ii(e) {
    var t = [];
    for (var n in e)
      t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
    return t.join("&");
  }
  function Pi(e, t) {
    for (
      var n = Nt(t.getCurrentData().eventSources), r = [], o = 0, i = e;
      o < i.length;
      o++
    ) {
      for (var a = i[o], s = !1, l = 0; l < n.length; l += 1)
        if (n[l]._raw === a) {
          n.splice(l, 1), (s = !0);
          break;
        }
      s || r.push(a);
    }
    for (var u = 0, c = n; u < c.length; u++) {
      var d = c[u];
      t.dispatch({ type: "REMOVE_EVENT_SOURCE", sourceId: d.sourceId });
    }
    for (var p = 0, f = r; p < f.length; p++) {
      var h = f[p];
      t.calendarApi.addEventSource(h);
    }
  }
  var Ni = [
      $o({
        eventSourceDefs: [
          {
            ignoreRange: !0,
            parseMeta: function (e) {
              return Array.isArray(e.events) ? e.events : null;
            },
            fetch: function (e, t) {
              t({ rawEvents: e.eventSource.meta });
            },
          },
        ],
      }),
      $o({
        eventSourceDefs: [
          {
            parseMeta: function (e) {
              return "function" == typeof e.events ? e.events : null;
            },
            fetch: function (e, t, n) {
              var r = e.context.dateEnv;
              Ro(
                e.eventSource.meta.bind(null, Cr(e.range, r)),
                function (e) {
                  t({ rawEvents: e });
                },
                n
              );
            },
          },
        ],
      }),
      $o({
        eventSourceRefiners: {
          method: String,
          extraParams: kn,
          startParam: String,
          endParam: String,
          timeZoneParam: String,
        },
        eventSourceDefs: [
          {
            parseMeta: function (e) {
              return !e.url || ("json" !== e.format && e.format)
                ? null
                : {
                    url: e.url,
                    format: "json",
                    method: (e.method || "GET").toUpperCase(),
                    extraParams: e.extraParams,
                    startParam: e.startParam,
                    endParam: e.endParam,
                    timeZoneParam: e.timeZoneParam,
                  };
            },
            fetch: function (e, t, n) {
              var o = e.eventSource.meta,
                i = (function (e, t, n) {
                  var o,
                    i,
                    a,
                    s,
                    l = n.dateEnv,
                    u = n.options,
                    c = {};
                  return (
                    null == (o = e.startParam) && (o = u.startParam),
                    null == (i = e.endParam) && (i = u.endParam),
                    null == (a = e.timeZoneParam) && (a = u.timeZoneParam),
                    (s =
                      "function" == typeof e.extraParams
                        ? e.extraParams()
                        : e.extraParams || {}),
                    r(c, s),
                    (c[o] = l.formatIso(t.start)),
                    (c[i] = l.formatIso(t.end)),
                    "local" !== l.timeZone && (c[a] = l.timeZone),
                    c
                  );
                })(o, e.range, e.context);
              Mi(
                o.method,
                o.url,
                i,
                function (e, n) {
                  t({ rawEvents: e, xhr: n });
                },
                function (e, t) {
                  n({ message: e, xhr: t });
                }
              );
            },
          },
        ],
      }),
      $o({
        recurringTypes: [
          {
            parse: function (e, t) {
              if (
                e.daysOfWeek ||
                e.startTime ||
                e.endTime ||
                e.startRecur ||
                e.endRecur
              ) {
                var n = {
                    daysOfWeek: e.daysOfWeek || null,
                    startTime: e.startTime || null,
                    endTime: e.endTime || null,
                    startRecur: e.startRecur
                      ? t.createMarker(e.startRecur)
                      : null,
                    endRecur: e.endRecur ? t.createMarker(e.endRecur) : null,
                  },
                  r = void 0;
                return (
                  e.duration && (r = e.duration),
                  !r &&
                    e.startTime &&
                    e.endTime &&
                    ((o = e.endTime),
                    (i = e.startTime),
                    (r = {
                      years: o.years - i.years,
                      months: o.months - i.months,
                      days: o.days - i.days,
                      milliseconds: o.milliseconds - i.milliseconds,
                    })),
                  {
                    allDayGuess: Boolean(!e.startTime && !e.endTime),
                    duration: r,
                    typeData: n,
                  }
                );
              }
              var o, i;
              return null;
            },
            expand: function (e, t, n) {
              var r = Qn(t, { start: e.startRecur, end: e.endRecur });
              return r
                ? (function (e, t, n, r) {
                    for (
                      var o = e ? Pt(e) : null,
                        i = yt(n.start),
                        a = n.end,
                        s = [];
                      i < a;

                    ) {
                      var l = void 0;
                      (o && !o[i.getUTCDay()]) ||
                        ((l = t ? r.add(i, t) : i), s.push(l)),
                        (i = dt(i, 1));
                    }
                    return s;
                  })(e.daysOfWeek, e.startTime, r, n)
                : [];
            },
          },
        ],
        eventRefiners: {
          daysOfWeek: kn,
          startTime: zt,
          endTime: zt,
          duration: zt,
          startRecur: kn,
          endRecur: kn,
        },
      }),
      $o({
        optionChangeHandlers: {
          events: function (e, t) {
            Pi([e], t);
          },
          eventSources: Pi,
        },
      }),
      $o({
        isLoadingFuncs: [
          function (e) {
            return hi(e.eventSources);
          },
        ],
        contentTypeHandlers: {
          html: function () {
            var e = null,
              t = "";
            return {
              render: function (n, r) {
                (n === e && r === t) || (n.innerHTML = r), (e = n), (t = r);
              },
              destroy: function () {
                (e.innerHTML = ""), (e = null), (t = "");
              },
            };
          },
          domNodes: function () {
            var e = null,
              t = [];
            function n() {
              t.forEach(xe), (t = []), (e = null);
            }
            return {
              render: function (r, o) {
                var i = Array.prototype.slice.call(o);
                if (r !== e || !tn(t, i)) {
                  for (var a = 0, s = i; a < s.length; a++) {
                    var l = s[a];
                    r.appendChild(l);
                  }
                  n();
                }
                (e = r), (t = i);
              },
              destroy: n,
            };
          },
        },
        propSetHandlers: {
          dateProfile: function (e, t) {
            t.emitter.trigger(
              "datesSet",
              r(r({}, Cr(e.activeRange, t.dateEnv)), { view: t.viewApi })
            );
          },
          eventStore: function (e, t) {
            var n = t.emitter;
            n.hasHandlers("eventsSet") && n.trigger("eventsSet", Vr(e, t));
          },
        },
      }),
    ],
    Hi = (function () {
      function e(e) {
        (this.drainedOption = e),
          (this.isRunning = !1),
          (this.isDirty = !1),
          (this.pauseDepths = {}),
          (this.timeoutId = 0);
      }
      return (
        (e.prototype.request = function (e) {
          (this.isDirty = !0),
            this.isPaused() ||
              (this.clearTimeout(),
              null == e
                ? this.tryDrain()
                : (this.timeoutId = setTimeout(this.tryDrain.bind(this), e)));
        }),
        (e.prototype.pause = function (e) {
          void 0 === e && (e = "");
          var t = this.pauseDepths;
          (t[e] = (t[e] || 0) + 1), this.clearTimeout();
        }),
        (e.prototype.resume = function (e, t) {
          void 0 === e && (e = "");
          var n = this.pauseDepths;
          e in n &&
            (t ? delete n[e] : ((n[e] -= 1), n[e] <= 0 && delete n[e]),
            this.tryDrain());
        }),
        (e.prototype.isPaused = function () {
          return Object.keys(this.pauseDepths).length;
        }),
        (e.prototype.tryDrain = function () {
          if (!this.isRunning && !this.isPaused()) {
            for (this.isRunning = !0; this.isDirty; )
              (this.isDirty = !1), this.drained();
            this.isRunning = !1;
          }
        }),
        (e.prototype.clear = function () {
          this.clearTimeout(), (this.isDirty = !1), (this.pauseDepths = {});
        }),
        (e.prototype.clearTimeout = function () {
          this.timeoutId &&
            (clearTimeout(this.timeoutId), (this.timeoutId = 0));
        }),
        (e.prototype.drained = function () {
          this.drainedOption && this.drainedOption();
        }),
        e
      );
    })(),
    Oi = (function () {
      function e(e, t) {
        (this.runTaskOption = e),
          (this.drainedOption = t),
          (this.queue = []),
          (this.delayedRunner = new Hi(this.drain.bind(this)));
      }
      return (
        (e.prototype.request = function (e, t) {
          this.queue.push(e), this.delayedRunner.request(t);
        }),
        (e.prototype.pause = function (e) {
          this.delayedRunner.pause(e);
        }),
        (e.prototype.resume = function (e, t) {
          this.delayedRunner.resume(e, t);
        }),
        (e.prototype.drain = function () {
          for (var e = this.queue; e.length; ) {
            for (var t = [], n = void 0; (n = e.shift()); )
              this.runTask(n), t.push(n);
            this.drained(t);
          }
        }),
        (e.prototype.runTask = function (e) {
          this.runTaskOption && this.runTaskOption(e);
        }),
        (e.prototype.drained = function (e) {
          this.drainedOption && this.drainedOption(e);
        }),
        e
      );
    })();
  function Ai(e, t, n) {
    var r;
    return (
      (r = /^(year|month)$/.test(e.currentRangeUnit)
        ? e.currentRange
        : e.activeRange),
      n.formatRange(
        r.start,
        r.end,
        yn(
          t.titleFormat ||
            (function (e) {
              var t = e.currentRangeUnit;
              if ("year" === t) return { year: "numeric" };
              if ("month" === t) return { year: "numeric", month: "long" };
              var n = mt(e.currentRange.start, e.currentRange.end);
              return null !== n && n > 1
                ? { year: "numeric", month: "short", day: "numeric" }
                : { year: "numeric", month: "long", day: "numeric" };
            })(e)
        ),
        {
          isEndExclusive: e.isRangeAllDay,
          defaultSeparator: t.titleRangeSeparator,
        }
      )
    );
  }
  var Li = (function () {
    function e(e) {
      var t = this;
      (this.computeOptionsData = nn(this._computeOptionsData)),
        (this.computeCurrentViewData = nn(this._computeCurrentViewData)),
        (this.organizeRawLocales = nn(Xr)),
        (this.buildLocale = nn(Kr)),
        (this.buildPluginHooks = (function () {
          var e,
            t = [],
            n = [];
          return function (o, i) {
            return (
              (e && tn(o, t) && tn(i, n)) ||
                (e = (function (e, t) {
                  var n = {},
                    o = {
                      reducers: [],
                      isLoadingFuncs: [],
                      contextInit: [],
                      eventRefiners: {},
                      eventDefMemberAdders: [],
                      eventSourceRefiners: {},
                      isDraggableTransformers: [],
                      eventDragMutationMassagers: [],
                      eventDefMutationAppliers: [],
                      dateSelectionTransformers: [],
                      datePointTransforms: [],
                      dateSpanTransforms: [],
                      views: {},
                      viewPropsTransformers: [],
                      isPropsValid: null,
                      externalDefTransforms: [],
                      viewContainerAppends: [],
                      eventDropTransformers: [],
                      componentInteractions: [],
                      calendarInteractions: [],
                      themeClasses: {},
                      eventSourceDefs: [],
                      cmdFormatter: null,
                      recurringTypes: [],
                      namedTimeZonedImpl: null,
                      initialView: "",
                      elementDraggingImpl: null,
                      optionChangeHandlers: {},
                      scrollGridImpl: null,
                      contentTypeHandlers: {},
                      listenerRefiners: {},
                      optionRefiners: {},
                      propSetHandlers: {},
                    };
                  function i(e) {
                    for (var t = 0, a = e; t < a.length; t++) {
                      var s = a[t];
                      n[s.id] ||
                        ((n[s.id] = !0),
                        i(s.deps),
                        (u = s),
                        (o = {
                          reducers: (l = o).reducers.concat(u.reducers),
                          isLoadingFuncs: l.isLoadingFuncs.concat(
                            u.isLoadingFuncs
                          ),
                          contextInit: l.contextInit.concat(u.contextInit),
                          eventRefiners: r(
                            r({}, l.eventRefiners),
                            u.eventRefiners
                          ),
                          eventDefMemberAdders: l.eventDefMemberAdders.concat(
                            u.eventDefMemberAdders
                          ),
                          eventSourceRefiners: r(
                            r({}, l.eventSourceRefiners),
                            u.eventSourceRefiners
                          ),
                          isDraggableTransformers:
                            l.isDraggableTransformers.concat(
                              u.isDraggableTransformers
                            ),
                          eventDragMutationMassagers:
                            l.eventDragMutationMassagers.concat(
                              u.eventDragMutationMassagers
                            ),
                          eventDefMutationAppliers:
                            l.eventDefMutationAppliers.concat(
                              u.eventDefMutationAppliers
                            ),
                          dateSelectionTransformers:
                            l.dateSelectionTransformers.concat(
                              u.dateSelectionTransformers
                            ),
                          datePointTransforms: l.datePointTransforms.concat(
                            u.datePointTransforms
                          ),
                          dateSpanTransforms: l.dateSpanTransforms.concat(
                            u.dateSpanTransforms
                          ),
                          views: r(r({}, l.views), u.views),
                          viewPropsTransformers: l.viewPropsTransformers.concat(
                            u.viewPropsTransformers
                          ),
                          isPropsValid: u.isPropsValid || l.isPropsValid,
                          externalDefTransforms: l.externalDefTransforms.concat(
                            u.externalDefTransforms
                          ),
                          viewContainerAppends: l.viewContainerAppends.concat(
                            u.viewContainerAppends
                          ),
                          eventDropTransformers: l.eventDropTransformers.concat(
                            u.eventDropTransformers
                          ),
                          calendarInteractions: l.calendarInteractions.concat(
                            u.calendarInteractions
                          ),
                          componentInteractions: l.componentInteractions.concat(
                            u.componentInteractions
                          ),
                          themeClasses: r(
                            r({}, l.themeClasses),
                            u.themeClasses
                          ),
                          eventSourceDefs: l.eventSourceDefs.concat(
                            u.eventSourceDefs
                          ),
                          cmdFormatter: u.cmdFormatter || l.cmdFormatter,
                          recurringTypes: l.recurringTypes.concat(
                            u.recurringTypes
                          ),
                          namedTimeZonedImpl:
                            u.namedTimeZonedImpl || l.namedTimeZonedImpl,
                          initialView: l.initialView || u.initialView,
                          elementDraggingImpl:
                            l.elementDraggingImpl || u.elementDraggingImpl,
                          optionChangeHandlers: r(
                            r({}, l.optionChangeHandlers),
                            u.optionChangeHandlers
                          ),
                          scrollGridImpl: u.scrollGridImpl || l.scrollGridImpl,
                          contentTypeHandlers: r(
                            r({}, l.contentTypeHandlers),
                            u.contentTypeHandlers
                          ),
                          listenerRefiners: r(
                            r({}, l.listenerRefiners),
                            u.listenerRefiners
                          ),
                          optionRefiners: r(
                            r({}, l.optionRefiners),
                            u.optionRefiners
                          ),
                          propSetHandlers: r(
                            r({}, l.propSetHandlers),
                            u.propSetHandlers
                          ),
                        }));
                    }
                    var l, u;
                  }
                  return e && i(e), i(t), o;
                })(o, i)),
              (t = o),
              (n = i),
              e
            );
          };
        })()),
        (this.buildDateEnv = nn(Ui)),
        (this.buildTheme = nn(Wi)),
        (this.parseToolbars = nn(Ti)),
        (this.buildViewSpecs = nn(di)),
        (this.buildDateProfileGenerator = rn(Vi)),
        (this.buildViewApi = nn(Fi)),
        (this.buildViewUiProps = rn(ji)),
        (this.buildEventUiBySource = nn(Bi, Ht)),
        (this.buildEventUiBases = nn(zi)),
        (this.parseContextBusinessHours = rn(qi)),
        (this.buildTitle = nn(Ai)),
        (this.emitter = new To()),
        (this.actionRunner = new Oi(
          this._handleAction.bind(this),
          this.updateData.bind(this)
        )),
        (this.currentCalendarOptionsInput = {}),
        (this.currentCalendarOptionsRefined = {}),
        (this.currentViewOptionsInput = {}),
        (this.currentViewOptionsRefined = {}),
        (this.currentCalendarOptionsRefiners = {}),
        (this.getCurrentData = function () {
          return t.data;
        }),
        (this.dispatch = function (e) {
          t.actionRunner.request(e);
        }),
        (this.props = e),
        this.actionRunner.pause();
      var n = {},
        o = this.computeOptionsData(e.optionOverrides, n, e.calendarApi),
        i = o.calendarOptions.initialView || o.pluginHooks.initialView,
        a = this.computeCurrentViewData(i, o, e.optionOverrides, n);
      (e.calendarApi.currentDataManager = this),
        this.emitter.setThisContext(e.calendarApi),
        this.emitter.setOptions(a.options);
      var s,
        l,
        u,
        c =
          ((s = o.calendarOptions),
          (l = o.dateEnv),
          null != (u = s.initialDate) ? l.createMarker(u) : Ar(s.now, l)),
        d = a.dateProfileGenerator.build(c);
      rr(d.activeRange, c) || (c = d.currentRange.start);
      for (
        var p = {
            dateEnv: o.dateEnv,
            options: o.calendarOptions,
            pluginHooks: o.pluginHooks,
            calendarApi: e.calendarApi,
            dispatch: this.dispatch,
            emitter: this.emitter,
            getCurrentData: this.getCurrentData,
          },
          f = 0,
          h = o.pluginHooks.contextInit;
        f < h.length;
        f++
      )
        (0, h[f])(p);
      for (
        var v = (function (e, t, n) {
            var r = t ? t.activeRange : null;
            return vi(
              {},
              (function (e, t) {
                var n = Or(t),
                  r = [].concat(e.eventSources || []),
                  o = [];
                e.initialEvents && r.unshift(e.initialEvents),
                  e.events && r.unshift(e.events);
                for (var i = 0, a = r; i < a.length; i++) {
                  var s = Hr(a[i], t, n);
                  s && o.push(s);
                }
                return o;
              })(e, n),
              r,
              n
            );
          })(o.calendarOptions, d, p),
          g = {
            dynamicOptionOverrides: n,
            currentViewType: i,
            currentDate: c,
            dateProfile: d,
            businessHours: this.parseContextBusinessHours(p),
            eventSources: v,
            eventUiBases: {},
            eventStore: { defs: {}, instances: {} },
            renderableEventStore: { defs: {}, instances: {} },
            dateSelection: null,
            eventSelection: "",
            eventDrag: null,
            eventResize: null,
            selectionConfig: this.buildViewUiProps(p).selectionConfig,
          },
          m = r(r({}, p), g),
          y = 0,
          E = o.pluginHooks.reducers;
        y < E.length;
        y++
      ) {
        var S = E[y];
        r(g, S(null, null, m));
      }
      Gi(g, p) && this.emitter.trigger("loading", !0),
        (this.state = g),
        this.updateData(),
        this.actionRunner.resume();
    }
    return (
      (e.prototype.resetOptions = function (e, t) {
        var n = this.props;
        (n.optionOverrides = t ? r(r({}, n.optionOverrides), e) : e),
          this.actionRunner.request({ type: "NOTHING" });
      }),
      (e.prototype._handleAction = function (e) {
        var t = this,
          n = t.props,
          o = t.state,
          i = t.emitter,
          a = (function (e, t) {
            var n;
            switch (t.type) {
              case "SET_OPTION":
                return r(
                  r({}, e),
                  (((n = {})[t.optionName] = t.rawOptionValue), n)
                );
              default:
                return e;
            }
          })(o.dynamicOptionOverrides, e),
          s = this.computeOptionsData(n.optionOverrides, a, n.calendarApi),
          l = (function (e, t) {
            switch (t.type) {
              case "CHANGE_VIEW_TYPE":
                e = t.viewType;
            }
            return e;
          })(o.currentViewType, e),
          u = this.computeCurrentViewData(l, s, n.optionOverrides, a);
        (n.calendarApi.currentDataManager = this),
          i.setThisContext(n.calendarApi),
          i.setOptions(u.options);
        var c = {
            dateEnv: s.dateEnv,
            options: s.calendarOptions,
            pluginHooks: s.pluginHooks,
            calendarApi: n.calendarApi,
            dispatch: this.dispatch,
            emitter: i,
            getCurrentData: this.getCurrentData,
          },
          d = o.currentDate,
          p = o.dateProfile;
        this.data &&
          this.data.dateProfileGenerator !== u.dateProfileGenerator &&
          (p = u.dateProfileGenerator.build(d)),
          (p = (function (e, t, n, r) {
            var o;
            switch (t.type) {
              case "CHANGE_VIEW_TYPE":
                return r.build(t.dateMarker || n);
              case "CHANGE_DATE":
                return r.build(t.dateMarker);
              case "PREV":
                if ((o = r.buildPrev(e, n)).isValid) return o;
                break;
              case "NEXT":
                if ((o = r.buildNext(e, n)).isValid) return o;
            }
            return e;
          })(
            p,
            e,
            (d = (function (e, t) {
              switch (t.type) {
                case "CHANGE_DATE":
                  return t.dateMarker;
                default:
                  return e;
              }
            })(d, e)),
            u.dateProfileGenerator
          )),
          ("PREV" !== e.type && "NEXT" !== e.type && rr(p.currentRange, d)) ||
            (d = p.currentRange.start);
        for (
          var f = (function (e, t, n, o) {
              var i,
                a,
                s = n ? n.activeRange : null;
              switch (t.type) {
                case "ADD_EVENT_SOURCES":
                  return vi(e, t.sources, s, o);
                case "REMOVE_EVENT_SOURCE":
                  return (
                    (i = e),
                    (a = t.sourceId),
                    Mt(i, function (e) {
                      return e.sourceId !== a;
                    })
                  );
                case "PREV":
                case "NEXT":
                case "CHANGE_DATE":
                case "CHANGE_VIEW_TYPE":
                  return n ? gi(e, s, o) : e;
                case "FETCH_EVENT_SOURCES":
                  return mi(
                    e,
                    t.sourceIds ? Pt(t.sourceIds) : Ei(e, o),
                    s,
                    t.isRefetch || !1,
                    o
                  );
                case "RECEIVE_EVENTS":
                case "RECEIVE_EVENT_ERROR":
                  return (function (e, t, n, o) {
                    var i,
                      a = e[t];
                    return a && n === a.latestFetchId
                      ? r(
                          r({}, e),
                          (((i = {})[t] = r(r({}, a), {
                            isFetching: !1,
                            fetchRange: o,
                          })),
                          i)
                        )
                      : e;
                  })(e, t.sourceId, t.fetchId, t.fetchRange);
                case "REMOVE_ALL_EVENT_SOURCES":
                  return {};
                default:
                  return e;
              }
            })(o.eventSources, e, p, c),
            h = (function (e, t, n, r, o) {
              switch (t.type) {
                case "RECEIVE_EVENTS":
                  return (function (e, t, n, r, o, i) {
                    if (t && n === t.latestFetchId) {
                      var a = xn(
                        (function (e, t, n) {
                          var r = n.options.eventDataTransform,
                            o = t ? t.eventDataTransform : null;
                          return o && (e = bi(e, o)), r && (e = bi(e, r)), e;
                        })(o, t, i),
                        t,
                        i
                      );
                      return r && (a = Wt(a, r, i)), Pn(Di(e, t.sourceId), a);
                    }
                    return e;
                  })(e, n[t.sourceId], t.fetchId, t.fetchRange, t.rawEvents, o);
                case "ADD_EVENTS":
                  return (function (e, t, n, r) {
                    return n && (t = Wt(t, n, r)), Pn(e, t);
                  })(e, t.eventStore, r ? r.activeRange : null, o);
                case "RESET_EVENTS":
                  return t.eventStore;
                case "MERGE_EVENTS":
                  return Pn(e, t.eventStore);
                case "PREV":
                case "NEXT":
                case "CHANGE_DATE":
                case "CHANGE_VIEW_TYPE":
                  return r ? Wt(e, r.activeRange, o) : e;
                case "REMOVE_EVENTS":
                  return (function (e, t) {
                    var n = e.defs,
                      r = e.instances,
                      o = {},
                      i = {};
                    for (var a in n) t.defs[a] || (o[a] = n[a]);
                    for (var s in r)
                      !t.instances[s] && o[r[s].defId] && (i[s] = r[s]);
                    return { defs: o, instances: i };
                  })(e, t.eventStore);
                case "REMOVE_EVENT_SOURCE":
                  return Di(e, t.sourceId);
                case "REMOVE_ALL_EVENT_SOURCES":
                  return Nn(e, function (e) {
                    return !e.sourceId;
                  });
                case "REMOVE_ALL_EVENTS":
                  return { defs: {}, instances: {} };
                default:
                  return e;
              }
            })(o.eventStore, e, f, p, c),
            v =
              (hi(f) &&
                !u.options.progressiveEventRendering &&
                o.renderableEventStore) ||
              h,
            g = this.buildViewUiProps(c),
            m = g.eventUiSingleBase,
            y = g.selectionConfig,
            E = this.buildEventUiBySource(f),
            S = {
              dynamicOptionOverrides: a,
              currentViewType: l,
              currentDate: d,
              dateProfile: p,
              eventSources: f,
              eventStore: h,
              renderableEventStore: v,
              selectionConfig: y,
              eventUiBases: this.buildEventUiBases(v.defs, m, E),
              businessHours: this.parseContextBusinessHours(c),
              dateSelection: Ci(o.dateSelection, e),
              eventSelection: wi(o.eventSelection, e),
              eventDrag: _i(o.eventDrag, e),
              eventResize: Ri(o.eventResize, e),
            },
            b = r(r({}, c), S),
            D = 0,
            C = s.pluginHooks.reducers;
          D < C.length;
          D++
        ) {
          var w = C[D];
          r(S, w(o, e, b));
        }
        var _ = Gi(o, c),
          R = Gi(S, c);
        !_ && R
          ? i.trigger("loading", !0)
          : _ && !R && i.trigger("loading", !1),
          (this.state = S),
          n.onAction && n.onAction(e);
      }),
      (e.prototype.updateData = function () {
        var e,
          t,
          n,
          o,
          i,
          a,
          s,
          l,
          u,
          c = this.props,
          d = this.state,
          p = this.data,
          f = this.computeOptionsData(
            c.optionOverrides,
            d.dynamicOptionOverrides,
            c.calendarApi
          ),
          h = this.computeCurrentViewData(
            d.currentViewType,
            f,
            c.optionOverrides,
            d.dynamicOptionOverrides
          ),
          v = (this.data = r(
            r(
              r(
                {
                  viewTitle: this.buildTitle(
                    d.dateProfile,
                    h.options,
                    f.dateEnv
                  ),
                  calendarApi: c.calendarApi,
                  dispatch: this.dispatch,
                  emitter: this.emitter,
                  getCurrentData: this.getCurrentData,
                },
                f
              ),
              h
            ),
            d
          )),
          g = f.pluginHooks.optionChangeHandlers,
          m = p && p.calendarOptions,
          y = f.calendarOptions;
        if (m && m !== y)
          for (var E in (m.timeZone !== y.timeZone &&
            ((d.eventSources = v.eventSources =
              ((a = v.eventSources),
              (l = v),
              (u = (s = d.dateProfile) ? s.activeRange : null),
              mi(a, Ei(a, l), u, !0, l))),
            (d.eventStore = v.eventStore =
              ((e = v.eventStore),
              (t = p.dateEnv),
              (n = v.dateEnv),
              (o = e.defs),
              (i = It(e.instances, function (e) {
                var i = o[e.defId];
                return i.allDay || i.recurringDef
                  ? e
                  : r(r({}, e), {
                      range: {
                        start: n.createMarker(
                          t.toDate(e.range.start, e.forcedStartTzo)
                        ),
                        end: n.createMarker(
                          t.toDate(e.range.end, e.forcedEndTzo)
                        ),
                      },
                      forcedStartTzo: n.canComputeOffset
                        ? null
                        : e.forcedStartTzo,
                      forcedEndTzo: n.canComputeOffset ? null : e.forcedEndTzo,
                    });
              })),
              { defs: o, instances: i }))),
          g))
            m[E] !== y[E] && g[E](y[E], v);
        c.onData && c.onData(v);
      }),
      (e.prototype._computeOptionsData = function (e, t, n) {
        var r = this.processRawCalendarOptions(e, t),
          o = r.refinedOptions,
          i = r.pluginHooks,
          a = r.localeDefaults,
          s = r.availableLocaleData;
        Yi(r.extra);
        var l = this.buildDateEnv(
            o.timeZone,
            o.locale,
            o.weekNumberCalculation,
            o.firstDay,
            o.weekText,
            i,
            s,
            o.defaultRangeSeparator
          ),
          u = this.buildViewSpecs(i.views, e, t, a),
          c = this.buildTheme(o, i);
        return {
          calendarOptions: o,
          pluginHooks: i,
          dateEnv: l,
          viewSpecs: u,
          theme: c,
          toolbarConfig: this.parseToolbars(o, e, c, u, n),
          localeDefaults: a,
          availableRawLocales: s.map,
        };
      }),
      (e.prototype.processRawCalendarOptions = function (e, t) {
        var n = Rn([Sn, e, t]),
          o = n.locales,
          i = n.locale,
          a = this.organizeRawLocales(o),
          s = a.map,
          l = this.buildLocale(i || a.defaultCode, s).options,
          u = this.buildPluginHooks(e.plugins || [], Ni),
          c = (this.currentCalendarOptionsRefiners = r(
            r(r(r(r({}, En), bn), Dn), u.listenerRefiners),
            u.optionRefiners
          )),
          d = {},
          p = Rn([Sn, l, e, t]),
          f = {},
          h = this.currentCalendarOptionsInput,
          v = this.currentCalendarOptionsRefined,
          g = !1;
        for (var m in p)
          "plugins" !== m &&
            (p[m] === h[m] || (Cn[m] && m in h && Cn[m](h[m], p[m]))
              ? (f[m] = v[m])
              : c[m]
              ? ((f[m] = c[m](p[m])), (g = !0))
              : (d[m] = h[m]));
        return (
          g &&
            ((this.currentCalendarOptionsInput = p),
            (this.currentCalendarOptionsRefined = f)),
          {
            rawOptions: this.currentCalendarOptionsInput,
            refinedOptions: this.currentCalendarOptionsRefined,
            pluginHooks: u,
            availableLocaleData: a,
            localeDefaults: l,
            extra: d,
          }
        );
      }),
      (e.prototype._computeCurrentViewData = function (e, t, n, r) {
        var o = t.viewSpecs[e];
        if (!o)
          throw new Error(
            'viewType "' +
              e +
              "\" is not available. Please make sure you've loaded all neccessary plugins"
          );
        var i = this.processRawViewOptions(
            o,
            t.pluginHooks,
            t.localeDefaults,
            n,
            r
          ),
          a = i.refinedOptions;
        return (
          Yi(i.extra),
          {
            viewSpec: o,
            options: a,
            dateProfileGenerator: this.buildDateProfileGenerator({
              dateProfileGeneratorClass:
                o.optionDefaults.dateProfileGeneratorClass,
              duration: o.duration,
              durationUnit: o.durationUnit,
              usesMinMaxTime: o.optionDefaults.usesMinMaxTime,
              dateEnv: t.dateEnv,
              calendarApi: this.props.calendarApi,
              slotMinTime: a.slotMinTime,
              slotMaxTime: a.slotMaxTime,
              showNonCurrentDates: a.showNonCurrentDates,
              dayCount: a.dayCount,
              dateAlignment: a.dateAlignment,
              dateIncrement: a.dateIncrement,
              hiddenDays: a.hiddenDays,
              weekends: a.weekends,
              nowInput: a.now,
              validRangeInput: a.validRange,
              visibleRangeInput: a.visibleRange,
              monthMode: a.monthMode,
              fixedWeekCount: a.fixedWeekCount,
            }),
            viewApi: this.buildViewApi(e, this.getCurrentData, t.dateEnv),
          }
        );
      }),
      (e.prototype.processRawViewOptions = function (e, t, n, o, i) {
        var a = Rn([Sn, e.optionDefaults, n, o, e.optionOverrides, i]),
          s = r(
            r(r(r(r(r({}, En), bn), Dn), _n), t.listenerRefiners),
            t.optionRefiners
          ),
          l = {},
          u = this.currentViewOptionsInput,
          c = this.currentViewOptionsRefined,
          d = !1,
          p = {};
        for (var f in a)
          a[f] === u[f] || (Cn[f] && Cn[f](a[f], u[f]))
            ? (l[f] = c[f])
            : (a[f] === this.currentCalendarOptionsInput[f] ||
              (Cn[f] && Cn[f](a[f], this.currentCalendarOptionsInput[f]))
                ? f in this.currentCalendarOptionsRefined &&
                  (l[f] = this.currentCalendarOptionsRefined[f])
                : s[f]
                ? (l[f] = s[f](a[f]))
                : (p[f] = a[f]),
              (d = !0));
        return (
          d &&
            ((this.currentViewOptionsInput = a),
            (this.currentViewOptionsRefined = l)),
          {
            rawOptions: this.currentViewOptionsInput,
            refinedOptions: this.currentViewOptionsRefined,
            extra: p,
          }
        );
      }),
      e
    );
  })();
  function Ui(e, t, n, r, o, i, a, s) {
    var l = Kr(t || a.defaultCode, a.map);
    return new Gr({
      calendarSystem: "gregory",
      timeZone: e,
      namedTimeZoneImpl: i.namedTimeZonedImpl,
      locale: l,
      weekNumberCalculation: n,
      firstDay: r,
      weekText: o,
      cmdFormatter: i.cmdFormatter,
      defaultSeparator: s,
    });
  }
  function Wi(e, t) {
    return new (t.themeClasses[e.themeSystem] || Jo)(e);
  }
  function Vi(e) {
    return new (e.dateProfileGeneratorClass || fi)(e);
  }
  function Fi(e, t, n) {
    return new Pr(e, t, n);
  }
  function Bi(e) {
    return It(e, function (e) {
      return e.ui;
    });
  }
  function zi(e, t, n) {
    var r = { "": t };
    for (var o in e) {
      var i = e[o];
      i.sourceId && n[i.sourceId] && (r[o] = n[i.sourceId]);
    }
    return r;
  }
  function ji(e) {
    var t = e.options;
    return {
      eventUiSingleBase: Ln(
        {
          display: t.eventDisplay,
          editable: t.editable,
          startEditable: t.eventStartEditable,
          durationEditable: t.eventDurationEditable,
          constraint: t.eventConstraint,
          overlap: "boolean" == typeof t.eventOverlap ? t.eventOverlap : void 0,
          allow: t.eventAllow,
          backgroundColor: t.eventBackgroundColor,
          borderColor: t.eventBorderColor,
          textColor: t.eventTextColor,
          color: t.eventColor,
        },
        e
      ),
      selectionConfig: Ln(
        {
          constraint: t.selectConstraint,
          overlap:
            "boolean" == typeof t.selectOverlap ? t.selectOverlap : void 0,
          allow: t.selectAllow,
        },
        e
      ),
    };
  }
  function Gi(e, t) {
    for (var n = 0, r = t.pluginHooks.isLoadingFuncs; n < r.length; n++)
      if ((0, r[n])(e)) return !0;
    return !1;
  }
  function qi(e) {
    return to(e.options.businessHours, e);
  }
  function Yi(e, t) {
    for (var n in e)
      console.warn(
        "Unknown option '" + n + "'" + (t ? " for view '" + t + "'" : "")
      );
  }
  var Zi = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this;
        return (
          (n.handleData = function (e) {
            n.dataManager ? n.setState(e) : (n.state = e);
          }),
          (n.dataManager = new Li({
            optionOverrides: t.optionOverrides,
            calendarApi: t.calendarApi,
            onData: n.handleData,
          })),
          n
        );
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          return this.props.children(this.state);
        }),
        (t.prototype.componentDidUpdate = function (e) {
          var t = this.props.optionOverrides;
          t !== e.optionOverrides && this.dataManager.resetOptions(t);
        }),
        t
      );
    })(No),
    Xi = (function () {
      function e() {
        (this.strictOrder = !1),
          (this.allowReslicing = !1),
          (this.maxCoord = -1),
          (this.maxStackCnt = -1),
          (this.levelCoords = []),
          (this.entriesByLevel = []),
          (this.stackCnts = {});
      }
      return (
        (e.prototype.addSegs = function (e) {
          for (var t = [], n = 0, r = e; n < r.length; n++) {
            var o = r[n];
            this.insertEntry(o, t);
          }
          return t;
        }),
        (e.prototype.insertEntry = function (e, t) {
          var n = this.findInsertion(e);
          return this.isInsertionValid(n, e)
            ? (this.insertEntryAt(e, n), 1)
            : this.handleInvalidInsertion(n, e, t);
        }),
        (e.prototype.isInsertionValid = function (e, t) {
          return (
            (-1 === this.maxCoord ||
              e.levelCoord + t.thickness <= this.maxCoord) &&
            (-1 === this.maxStackCnt || e.stackCnt < this.maxStackCnt)
          );
        }),
        (e.prototype.handleInvalidInsertion = function (e, t, n) {
          return this.allowReslicing && e.touchingEntry
            ? this.splitEntry(t, e.touchingEntry, n)
            : (n.push(t), 0);
        }),
        (e.prototype.splitEntry = function (e, t, n) {
          var r = 0,
            i = [],
            a = e.span,
            s = t.span;
          return (
            a.start < s.start &&
              (r += this.insertEntry(
                {
                  index: e.index,
                  thickness: e.thickness,
                  span: { start: a.start, end: s.start },
                },
                i
              )),
            a.end > s.end &&
              (r += this.insertEntry(
                {
                  index: e.index,
                  thickness: e.thickness,
                  span: { start: s.end, end: a.end },
                },
                i
              )),
            r
              ? (n.push.apply(
                  n,
                  o(
                    [
                      {
                        index: e.index,
                        thickness: e.thickness,
                        span: ea(s, a),
                      },
                    ],
                    i
                  )
                ),
                r)
              : (n.push(e), 0)
          );
        }),
        (e.prototype.insertEntryAt = function (e, t) {
          var n = this.entriesByLevel,
            r = this.levelCoords;
          -1 === t.lateral
            ? (ta(r, t.level, t.levelCoord), ta(n, t.level, [e]))
            : ta(n[t.level], t.lateral, e),
            (this.stackCnts[$i(e)] = t.stackCnt);
        }),
        (e.prototype.findInsertion = function (e) {
          for (
            var t = this,
              n = t.levelCoords,
              r = t.entriesByLevel,
              o = t.strictOrder,
              i = t.stackCnts,
              a = n.length,
              s = 0,
              l = -1,
              u = -1,
              c = null,
              d = 0,
              p = 0;
            p < a;
            p += 1
          ) {
            var f = n[p];
            if (!o && f >= s + e.thickness) break;
            for (
              var h = r[p],
                v = void 0,
                g = na(h, e.span.start, Ki),
                m = g[0] + g[1];
              (v = h[m]) && v.span.start < e.span.end;

            ) {
              var y = f + v.thickness;
              y > s && ((s = y), (c = v), (l = p), (u = m)),
                y === s && (d = Math.max(d, i[$i(v)] + 1)),
                (m += 1);
            }
          }
          var E = 0;
          if (c) for (E = l + 1; E < a && n[E] < s; ) E += 1;
          var S = -1;
          return (
            E < a && n[E] === s && (S = na(r[E], e.span.end, Ki)[0]),
            {
              touchingLevel: l,
              touchingLateral: u,
              touchingEntry: c,
              stackCnt: d,
              levelCoord: s,
              level: E,
              lateral: S,
            }
          );
        }),
        (e.prototype.toRects = function () {
          for (
            var e = this.entriesByLevel,
              t = this.levelCoords,
              n = e.length,
              o = [],
              i = 0;
            i < n;
            i += 1
          )
            for (var a = e[i], s = t[i], l = 0, u = a; l < u.length; l++) {
              var c = u[l];
              o.push(r(r({}, c), { levelCoord: s }));
            }
          return o;
        }),
        e
      );
    })();
  function Ki(e) {
    return e.span.end;
  }
  function $i(e) {
    return e.index + ":" + e.span.start;
  }
  function Ji(e) {
    for (var t = [], n = 0, r = e; n < r.length; n++) {
      for (
        var o = r[n], i = [], a = { span: o.span, entries: [o] }, s = 0, l = t;
        s < l.length;
        s++
      ) {
        var u = l[s];
        ea(u.span, a.span)
          ? (a = {
              entries: u.entries.concat(a.entries),
              span: Qi(u.span, a.span),
            })
          : i.push(u);
      }
      i.push(a), (t = i);
    }
    return t;
  }
  function Qi(e, t) {
    return { start: Math.min(e.start, t.start), end: Math.max(e.end, t.end) };
  }
  function ea(e, t) {
    var n = Math.max(e.start, t.start),
      r = Math.min(e.end, t.end);
    return n < r ? { start: n, end: r } : null;
  }
  function ta(e, t, n) {
    e.splice(t, 0, n);
  }
  function na(e, t, n) {
    var r = 0,
      o = e.length;
    if (!o || t < n(e[r])) return [0, 0];
    if (t > n(e[o - 1])) return [o, 0];
    for (; r < o; ) {
      var i = Math.floor(r + (o - r) / 2),
        a = n(e[i]);
      if (t < a) o = i;
      else {
        if (!(t > a)) return [i, 1];
        r = i + 1;
      }
    }
    return [r, 0];
  }
  var ra = (function () {
    function e(e) {
      (this.component = e.component),
        (this.isHitComboAllowed = e.isHitComboAllowed || null);
    }
    return (e.prototype.destroy = function () {}), e;
  })();
  function oa(e, t) {
    return {
      component: e,
      el: t.el,
      useEventCenter: null == t.useEventCenter || t.useEventCenter,
      isHitComboAllowed: t.isHitComboAllowed || null,
    };
  }
  function ia(e) {
    var t;
    return ((t = {})[e.component.uid] = e), t;
  }
  var aa = {},
    sa = (function () {
      function e(e, t) {
        this.emitter = new To();
      }
      return (
        (e.prototype.destroy = function () {}),
        (e.prototype.setMirrorIsVisible = function (e) {}),
        (e.prototype.setMirrorNeedsRevert = function (e) {}),
        (e.prototype.setAutoScrollEnabled = function (e) {}),
        e
      );
    })(),
    la = {},
    ua = { startTime: zt, duration: zt, create: Boolean, sourceId: String };
  function ca(e) {
    var t = Tn(e, ua),
      n = t.refined,
      r = t.extra;
    return {
      startTime: n.startTime || null,
      duration: n.duration || null,
      create: null == n.create || n.create,
      sourceId: n.sourceId,
      leftoverProps: r,
    };
  }
  var da = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          var e = this,
            t = this.props.widgetGroups.map(function (t) {
              return e.renderWidgetGroup(t);
            });
          return Ho.apply(
            void 0,
            o(["div", { className: "fc-toolbar-chunk" }], t)
          );
        }),
        (t.prototype.renderWidgetGroup = function (e) {
          for (
            var t = this.props,
              n = this.context.theme,
              r = [],
              i = !0,
              a = 0,
              s = e;
            a < s.length;
            a++
          ) {
            var l = s[a],
              u = l.buttonName,
              c = l.buttonClick,
              d = l.buttonText,
              p = l.buttonIcon,
              f = l.buttonHint;
            if ("title" === u)
              (i = !1),
                r.push(
                  Ho(
                    "h2",
                    { className: "fc-toolbar-title", id: t.titleId },
                    t.title
                  )
                );
            else {
              var h = u === t.activeButton,
                v =
                  (!t.isTodayEnabled && "today" === u) ||
                  (!t.isPrevEnabled && "prev" === u) ||
                  (!t.isNextEnabled && "next" === u),
                g = ["fc-" + u + "-button", n.getClass("button")];
              h && g.push(n.getClass("buttonActive")),
                r.push(
                  Ho(
                    "button",
                    {
                      type: "button",
                      title: "function" == typeof f ? f(t.navUnit) : f,
                      disabled: v,
                      "aria-pressed": h,
                      className: g.join(" "),
                      onClick: c,
                    },
                    d || (p ? Ho("span", { className: p }) : "")
                  )
                );
            }
          }
          if (r.length > 1) {
            var m = (i && n.getClass("buttonGroup")) || "";
            return Ho.apply(void 0, o(["div", { className: m }], r));
          }
          return r[0];
        }),
        t
      );
    })(qo),
    pa = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          var e,
            t,
            n = this.props,
            r = n.model,
            o = n.extraClassName,
            i = !1,
            a = r.sectionWidgets,
            s = a.center;
          return (
            a.left ? ((i = !0), (e = a.left)) : (e = a.start),
            a.right ? ((i = !0), (t = a.right)) : (t = a.end),
            Ho(
              "div",
              {
                className: [
                  o || "",
                  "fc-toolbar",
                  i ? "fc-toolbar-ltr" : "",
                ].join(" "),
              },
              this.renderSection("start", e || []),
              this.renderSection("center", s || []),
              this.renderSection("end", t || [])
            )
          );
        }),
        (t.prototype.renderSection = function (e, t) {
          var n = this.props;
          return Ho(da, {
            key: e,
            widgetGroups: t,
            title: n.title,
            navUnit: n.navUnit,
            activeButton: n.activeButton,
            isTodayEnabled: n.isTodayEnabled,
            isPrevEnabled: n.isPrevEnabled,
            isNextEnabled: n.isNextEnabled,
            titleId: n.titleId,
          });
        }),
        t
      );
    })(qo),
    fa = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.state = { availableWidth: null }),
          (t.handleEl = function (e) {
            (t.el = e), Xo(t.props.elRef, e), t.updateAvailableWidth();
          }),
          (t.handleResize = function () {
            t.updateAvailableWidth();
          }),
          t
        );
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          var e = this.props,
            t = this.state,
            n = e.aspectRatio,
            r = [
              "fc-view-harness",
              n || e.liquid || e.height
                ? "fc-view-harness-active"
                : "fc-view-harness-passive",
            ],
            o = "",
            i = "";
          return (
            n
              ? null !== t.availableWidth
                ? (o = t.availableWidth / n)
                : (i = (1 / n) * 100 + "%")
              : (o = e.height || ""),
            Ho(
              "div",
              {
                "aria-labelledby": e.labeledById,
                ref: this.handleEl,
                className: r.join(" "),
                style: { height: o, paddingBottom: i },
              },
              e.children
            )
          );
        }),
        (t.prototype.componentDidMount = function () {
          this.context.addResizeHandler(this.handleResize);
        }),
        (t.prototype.componentWillUnmount = function () {
          this.context.removeResizeHandler(this.handleResize);
        }),
        (t.prototype.updateAvailableWidth = function () {
          this.el &&
            this.props.aspectRatio &&
            this.setState({ availableWidth: this.el.offsetWidth });
        }),
        t
      );
    })(qo),
    ha = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this;
        return (
          (n.handleSegClick = function (e, t) {
            var r = n.component,
              o = r.context,
              i = sr(t);
            if (i && r.isValidSegDownEl(e.target)) {
              var a = Me(e.target, ".fc-event-forced-url"),
                s = a ? a.querySelector("a[href]").href : "";
              o.emitter.trigger("eventClick", {
                el: t,
                event: new Ur(
                  r.context,
                  i.eventRange.def,
                  i.eventRange.instance
                ),
                jsEvent: e,
                view: o.viewApi,
              }),
                s && !e.defaultPrevented && (window.location.href = s);
            }
          }),
          (n.destroy = Fe(t.el, "click", ".fc-event", n.handleSegClick)),
          n
        );
      }
      return n(t, e), t;
    })(ra),
    va = (function (e) {
      function t(t) {
        var n,
          r,
          o,
          i,
          a = e.call(this, t) || this;
        return (
          (a.handleEventElRemove = function (e) {
            e === a.currentSegEl && a.handleSegLeave(null, a.currentSegEl);
          }),
          (a.handleSegEnter = function (e, t) {
            sr(t) &&
              ((a.currentSegEl = t), a.triggerEvent("eventMouseEnter", e, t));
          }),
          (a.handleSegLeave = function (e, t) {
            a.currentSegEl &&
              ((a.currentSegEl = null),
              a.triggerEvent("eventMouseLeave", e, t));
          }),
          (a.removeHoverListeners =
            ((n = t.el),
            ".fc-event",
            (r = a.handleSegEnter),
            (o = a.handleSegLeave),
            Fe(n, "mouseover", ".fc-event", function (e, t) {
              if (t !== i) {
                (i = t), r(e, t);
                var n = function (e) {
                  (i = null), o(e, t), t.removeEventListener("mouseleave", n);
                };
                t.addEventListener("mouseleave", n);
              }
            }))),
          a
        );
      }
      return (
        n(t, e),
        (t.prototype.destroy = function () {
          this.removeHoverListeners();
        }),
        (t.prototype.triggerEvent = function (e, t, n) {
          var r = this.component,
            o = r.context,
            i = sr(n);
          (t && !r.isValidSegDownEl(t.target)) ||
            o.emitter.trigger(e, {
              el: n,
              event: new Ur(o, i.eventRange.def, i.eventRange.instance),
              jsEvent: t,
              view: o.viewApi,
            });
        }),
        t
      );
    })(ra),
    ga = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.buildViewContext = nn(jo)),
          (t.buildViewPropTransformers = nn(ya)),
          (t.buildToolbarProps = nn(ma)),
          (t.headerRef = Ao()),
          (t.footerRef = Ao()),
          (t.interactionsStore = {}),
          (t.state = { viewLabelId: We() }),
          (t.registerInteractiveComponent = function (e, n) {
            var r = oa(e, n),
              o = [ha, va]
                .concat(t.props.pluginHooks.componentInteractions)
                .map(function (e) {
                  return new e(r);
                });
            (t.interactionsStore[e.uid] = o), (aa[e.uid] = r);
          }),
          (t.unregisterInteractiveComponent = function (e) {
            var n = t.interactionsStore[e.uid];
            if (n) {
              for (var r = 0, o = n; r < o.length; r++) o[r].destroy();
              delete t.interactionsStore[e.uid];
            }
            delete aa[e.uid];
          }),
          (t.resizeRunner = new Hi(function () {
            t.props.emitter.trigger("_resize", !0),
              t.props.emitter.trigger("windowResize", {
                view: t.props.viewApi,
              });
          })),
          (t.handleWindowResize = function (e) {
            var n = t.props.options;
            n.handleWindowResize &&
              e.target === window &&
              t.resizeRunner.request(n.windowResizeDelay);
          }),
          t
        );
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          var e,
            t = this.props,
            n = t.toolbarConfig,
            o = t.options,
            i = this.buildToolbarProps(
              t.viewSpec,
              t.dateProfile,
              t.dateProfileGenerator,
              t.currentDate,
              Ar(t.options.now, t.dateEnv),
              t.viewTitle
            ),
            a = !1,
            s = "";
          t.isHeightAuto || t.forPrint
            ? (s = "")
            : null != o.height
            ? (a = !0)
            : null != o.contentHeight
            ? (s = o.contentHeight)
            : (e = Math.max(o.aspectRatio, 0.5));
          var l = this.buildViewContext(
              t.viewSpec,
              t.viewApi,
              t.options,
              t.dateProfileGenerator,
              t.dateEnv,
              t.theme,
              t.pluginHooks,
              t.dispatch,
              t.getCurrentData,
              t.emitter,
              t.calendarApi,
              this.registerInteractiveComponent,
              this.unregisterInteractiveComponent
            ),
            u = n.header && n.header.hasTitle ? this.state.viewLabelId : "";
          return Ho(
            zo.Provider,
            { value: l },
            n.header &&
              Ho(
                pa,
                r(
                  {
                    ref: this.headerRef,
                    extraClassName: "fc-header-toolbar",
                    model: n.header,
                    titleId: u,
                  },
                  i
                )
              ),
            Ho(
              fa,
              { liquid: a, height: s, aspectRatio: e, labeledById: u },
              this.renderView(t),
              this.buildAppendContent()
            ),
            n.footer &&
              Ho(
                pa,
                r(
                  {
                    ref: this.footerRef,
                    extraClassName: "fc-footer-toolbar",
                    model: n.footer,
                    titleId: "",
                  },
                  i
                )
              )
          );
        }),
        (t.prototype.componentDidMount = function () {
          var e = this.props;
          (this.calendarInteractions = e.pluginHooks.calendarInteractions.map(
            function (t) {
              return new t(e);
            }
          )),
            window.addEventListener("resize", this.handleWindowResize);
          var t = e.pluginHooks.propSetHandlers;
          for (var n in t) t[n](e[n], e);
        }),
        (t.prototype.componentDidUpdate = function (e) {
          var t = this.props,
            n = t.pluginHooks.propSetHandlers;
          for (var r in n) t[r] !== e[r] && n[r](t[r], t);
        }),
        (t.prototype.componentWillUnmount = function () {
          window.removeEventListener("resize", this.handleWindowResize),
            this.resizeRunner.clear();
          for (var e = 0, t = this.calendarInteractions; e < t.length; e++)
            t[e].destroy();
          this.props.emitter.trigger("_unmount");
        }),
        (t.prototype.buildAppendContent = function () {
          var e = this.props,
            t = e.pluginHooks.viewContainerAppends.map(function (t) {
              return t(e);
            });
          return Ho.apply(void 0, o([Lo, {}], t));
        }),
        (t.prototype.renderView = function (e) {
          for (
            var t = e.pluginHooks,
              n = e.viewSpec,
              o = {
                dateProfile: e.dateProfile,
                businessHours: e.businessHours,
                eventStore: e.renderableEventStore,
                eventUiBases: e.eventUiBases,
                dateSelection: e.dateSelection,
                eventSelection: e.eventSelection,
                eventDrag: e.eventDrag,
                eventResize: e.eventResize,
                isHeightAuto: e.isHeightAuto,
                forPrint: e.forPrint,
              },
              i = 0,
              a = this.buildViewPropTransformers(t.viewPropsTransformers);
            i < a.length;
            i++
          ) {
            var s = a[i];
            r(o, s.transform(o, e));
          }
          var l = n.component;
          return Ho(l, r({}, o));
        }),
        t
      );
    })(Go);
  function ma(e, t, n, r, o, i) {
    var a = n.build(o, void 0, !1),
      s = n.buildPrev(t, r, !1),
      l = n.buildNext(t, r, !1);
    return {
      title: i,
      activeButton: e.type,
      navUnit: e.singleUnit,
      isTodayEnabled: a.isValid && !rr(t.currentRange, o),
      isPrevEnabled: s.isValid,
      isNextEnabled: l.isValid,
    };
  }
  function ya(e) {
    return e.map(function (e) {
      return new e();
    });
  }
  var Ea = (function (e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this;
      return (
        (t.state = { forPrint: !1 }),
        (t.handleBeforePrint = function () {
          t.setState({ forPrint: !0 });
        }),
        (t.handleAfterPrint = function () {
          t.setState({ forPrint: !1 });
        }),
        t
      );
    }
    return (
      n(t, e),
      (t.prototype.render = function () {
        var e = this.props,
          t = e.options,
          n = this.state.forPrint,
          r = n || "auto" === t.height || "auto" === t.contentHeight,
          o = r || null == t.height ? "" : t.height,
          i = [
            "fc",
            n ? "fc-media-print" : "fc-media-screen",
            "fc-direction-" + t.direction,
            e.theme.getClass("root"),
          ];
        return so() || i.push("fc-liquid-hack"), e.children(i, o, r, n);
      }),
      (t.prototype.componentDidMount = function () {
        var e = this.props.emitter;
        e.on("_beforeprint", this.handleBeforePrint),
          e.on("_afterprint", this.handleAfterPrint);
      }),
      (t.prototype.componentWillUnmount = function () {
        var e = this.props.emitter;
        e.off("_beforeprint", this.handleBeforePrint),
          e.off("_afterprint", this.handleAfterPrint);
      }),
      t
    );
  })(qo);
  function Sa(e, t) {
    return yn(
      !e || t > 10
        ? { weekday: "short" }
        : t > 1
        ? { weekday: "short", month: "numeric", day: "numeric", omitCommas: !0 }
        : { weekday: "long" }
    );
  }
  var ba = "fc-col-header-cell";
  function Da(e) {
    return e.text;
  }
  var Ca = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          var e = this.context,
            t = e.dateEnv,
            n = e.options,
            o = e.theme,
            i = e.viewApi,
            a = this.props,
            s = a.date,
            l = a.dateProfile,
            u = po(s, a.todayRange, null, l),
            c = [ba].concat(fo(u, o)),
            d = t.format(s, a.dayHeaderFormat),
            p = !u.isDisabled && a.colCnt > 1 ? go(this.context, s) : {},
            f = r(
              r(r({ date: t.toDate(s), view: i }, a.extraHookProps), {
                text: d,
              }),
              u
            );
          return Ho(
            ei,
            {
              hookProps: f,
              classNames: n.dayHeaderClassNames,
              content: n.dayHeaderContent,
              defaultContent: Da,
              didMount: n.dayHeaderDidMount,
              willUnmount: n.dayHeaderWillUnmount,
            },
            function (e, t, n, o) {
              return Ho(
                "th",
                r(
                  {
                    ref: e,
                    role: "columnheader",
                    className: c.concat(t).join(" "),
                    "data-date": u.isDisabled ? void 0 : Jt(s),
                    colSpan: a.colSpan,
                  },
                  a.extraDataAttrs
                ),
                Ho(
                  "div",
                  { className: "fc-scrollgrid-sync-inner" },
                  !u.isDisabled &&
                    Ho(
                      "a",
                      r(
                        {
                          ref: n,
                          className: [
                            "fc-col-header-cell-cushion",
                            a.isSticky ? "fc-sticky" : "",
                          ].join(" "),
                        },
                        p
                      ),
                      o
                    )
                )
              );
            }
          );
        }),
        t
      );
    })(qo),
    wa = yn({ weekday: "long" }),
    _a = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          var e = this.props,
            t = this.context,
            n = t.dateEnv,
            o = t.theme,
            i = t.viewApi,
            a = t.options,
            s = dt(new Date(2592e5), e.dow),
            l = {
              dow: e.dow,
              isDisabled: !1,
              isFuture: !1,
              isPast: !1,
              isToday: !1,
              isOther: !1,
            },
            u = [ba].concat(fo(l, o), e.extraClassNames || []),
            c = n.format(s, e.dayHeaderFormat),
            d = r(r(r(r({ date: s }, l), { view: i }), e.extraHookProps), {
              text: c,
            });
          return Ho(
            ei,
            {
              hookProps: d,
              classNames: a.dayHeaderClassNames,
              content: a.dayHeaderContent,
              defaultContent: Da,
              didMount: a.dayHeaderDidMount,
              willUnmount: a.dayHeaderWillUnmount,
            },
            function (t, o, i, a) {
              return Ho(
                "th",
                r(
                  {
                    ref: t,
                    role: "columnheader",
                    className: u.concat(o).join(" "),
                    colSpan: e.colSpan,
                  },
                  e.extraDataAttrs
                ),
                Ho(
                  "div",
                  { className: "fc-scrollgrid-sync-inner" },
                  Ho(
                    "a",
                    {
                      "aria-label": n.format(s, wa),
                      className: [
                        "fc-col-header-cell-cushion",
                        e.isSticky ? "fc-sticky" : "",
                      ].join(" "),
                      ref: i,
                    },
                    a
                  )
                )
              );
            }
          );
        }),
        t
      );
    })(qo),
    Ra = (function (e) {
      function t(t, n) {
        var r = e.call(this, t, n) || this;
        return (
          (r.initialNowDate = Ar(n.options.now, n.dateEnv)),
          (r.initialNowQueriedMs = new Date().valueOf()),
          (r.state = r.computeTiming().currentState),
          r
        );
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          var e = this.props,
            t = this.state;
          return e.children(t.nowDate, t.todayRange);
        }),
        (t.prototype.componentDidMount = function () {
          this.setTimeout();
        }),
        (t.prototype.componentDidUpdate = function (e) {
          e.unit !== this.props.unit &&
            (this.clearTimeout(), this.setTimeout());
        }),
        (t.prototype.componentWillUnmount = function () {
          this.clearTimeout();
        }),
        (t.prototype.computeTiming = function () {
          var e = this.props,
            t = this.context,
            n = pt(
              this.initialNowDate,
              new Date().valueOf() - this.initialNowQueriedMs
            ),
            r = t.dateEnv.startOf(n, e.unit),
            o = t.dateEnv.add(r, zt(1, e.unit)),
            i = o.valueOf() - n.valueOf();
          return (
            (i = Math.min(864e5, i)),
            {
              currentState: { nowDate: r, todayRange: Ta(r) },
              nextState: { nowDate: o, todayRange: Ta(o) },
              waitMs: i,
            }
          );
        }),
        (t.prototype.setTimeout = function () {
          var e = this,
            t = this.computeTiming(),
            n = t.nextState,
            r = t.waitMs;
          this.timeoutId = setTimeout(function () {
            e.setState(n, function () {
              e.setTimeout();
            });
          }, r);
        }),
        (t.prototype.clearTimeout = function () {
          this.timeoutId && clearTimeout(this.timeoutId);
        }),
        (t.contextType = zo),
        t
      );
    })(No);
  function Ta(e) {
    var t = yt(e);
    return { start: t, end: dt(t, 1) };
  }
  var ka = (function (e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this;
      return (t.createDayHeaderFormatter = nn(xa)), t;
    }
    return (
      n(t, e),
      (t.prototype.render = function () {
        var e = this.context,
          t = this.props,
          n = t.dates,
          r = t.dateProfile,
          o = t.datesRepDistinctDays,
          i = t.renderIntro,
          a = this.createDayHeaderFormatter(
            e.options.dayHeaderFormat,
            o,
            n.length
          );
        return Ho(Ra, { unit: "day" }, function (e, t) {
          return Ho(
            "tr",
            { role: "row" },
            i && i("day"),
            n.map(function (e) {
              return o
                ? Ho(Ca, {
                    key: e.toISOString(),
                    date: e,
                    dateProfile: r,
                    todayRange: t,
                    colCnt: n.length,
                    dayHeaderFormat: a,
                  })
                : Ho(_a, {
                    key: e.getUTCDay(),
                    dow: e.getUTCDay(),
                    dayHeaderFormat: a,
                  });
            })
          );
        });
      }),
      t
    );
  })(qo);
  function xa(e, t, n) {
    return e || Sa(t, n);
  }
  var Ma = (function () {
      function e(e, t) {
        for (var n = e.start, r = e.end, o = [], i = [], a = -1; n < r; )
          t.isHiddenDay(n) ? o.push(a + 0.5) : ((a += 1), o.push(a), i.push(n)),
            (n = dt(n, 1));
        (this.dates = i), (this.indices = o), (this.cnt = i.length);
      }
      return (
        (e.prototype.sliceRange = function (e) {
          var t = this.getDateDayIndex(e.start),
            n = this.getDateDayIndex(dt(e.end, -1)),
            r = Math.max(0, t),
            o = Math.min(this.cnt - 1, n);
          return (r = Math.ceil(r)) <= (o = Math.floor(o))
            ? { firstIndex: r, lastIndex: o, isStart: t === r, isEnd: n === o }
            : null;
        }),
        (e.prototype.getDateDayIndex = function (e) {
          var t = this.indices,
            n = Math.floor(ht(this.dates[0], e));
          return n < 0 ? t[0] - 1 : n >= t.length ? t[t.length - 1] + 1 : t[n];
        }),
        e
      );
    })(),
    Ia = (function () {
      function e(e, t) {
        var n,
          r,
          o,
          i = e.dates;
        if (t) {
          for (
            r = i[0].getUTCDay(), n = 1;
            n < i.length && i[n].getUTCDay() !== r;
            n += 1
          );
          o = Math.ceil(i.length / n);
        } else (o = 1), (n = i.length);
        (this.rowCnt = o),
          (this.colCnt = n),
          (this.daySeries = e),
          (this.cells = this.buildCells()),
          (this.headerDates = this.buildHeaderDates());
      }
      return (
        (e.prototype.buildCells = function () {
          for (var e = [], t = 0; t < this.rowCnt; t += 1) {
            for (var n = [], r = 0; r < this.colCnt; r += 1)
              n.push(this.buildCell(t, r));
            e.push(n);
          }
          return e;
        }),
        (e.prototype.buildCell = function (e, t) {
          var n = this.daySeries.dates[e * this.colCnt + t];
          return { key: n.toISOString(), date: n };
        }),
        (e.prototype.buildHeaderDates = function () {
          for (var e = [], t = 0; t < this.colCnt; t += 1)
            e.push(this.cells[0][t].date);
          return e;
        }),
        (e.prototype.sliceRange = function (e) {
          var t = this.colCnt,
            n = this.daySeries.sliceRange(e),
            r = [];
          if (n)
            for (var o = n.firstIndex, i = n.lastIndex, a = o; a <= i; ) {
              var s = Math.floor(a / t),
                l = Math.min((s + 1) * t, i + 1);
              r.push({
                row: s,
                firstCol: a % t,
                lastCol: (l - 1) % t,
                isStart: n.isStart && a === o,
                isEnd: n.isEnd && l - 1 === i,
              }),
                (a = l);
            }
          return r;
        }),
        e
      );
    })(),
    Pa = (function () {
      function e() {
        (this.sliceBusinessHours = nn(this._sliceBusinessHours)),
          (this.sliceDateSelection = nn(this._sliceDateSpan)),
          (this.sliceEventStore = nn(this._sliceEventStore)),
          (this.sliceEventDrag = nn(this._sliceInteraction)),
          (this.sliceEventResize = nn(this._sliceInteraction)),
          (this.forceDayIfListItem = !1);
      }
      return (
        (e.prototype.sliceProps = function (e, t, n, r) {
          for (var i = [], a = 4; a < arguments.length; a++)
            i[a - 4] = arguments[a];
          var s = e.eventUiBases,
            l = this.sliceEventStore.apply(this, o([e.eventStore, s, t, n], i));
          return {
            dateSelectionSegs: this.sliceDateSelection.apply(
              this,
              o([e.dateSelection, s, r], i)
            ),
            businessHourSegs: this.sliceBusinessHours.apply(
              this,
              o([e.businessHours, t, n, r], i)
            ),
            fgEventSegs: l.fg,
            bgEventSegs: l.bg,
            eventDrag: this.sliceEventDrag.apply(
              this,
              o([e.eventDrag, s, t, n], i)
            ),
            eventResize: this.sliceEventResize.apply(
              this,
              o([e.eventResize, s, t, n], i)
            ),
            eventSelection: e.eventSelection,
          };
        }),
        (e.prototype.sliceNowDate = function (e, t) {
          for (var n = [], r = 2; r < arguments.length; r++)
            n[r - 2] = arguments[r];
          return this._sliceDateSpan.apply(
            this,
            o([{ range: { start: e, end: pt(e, 1) }, allDay: !1 }, {}, t], n)
          );
        }),
        (e.prototype._sliceBusinessHours = function (e, t, n, r) {
          for (var i = [], a = 4; a < arguments.length; a++)
            i[a - 4] = arguments[a];
          return e
            ? this._sliceEventStore.apply(
                this,
                o([Wt(e, Na(t, Boolean(n)), r), {}, t, n], i)
              ).bg
            : [];
        }),
        (e.prototype._sliceEventStore = function (e, t, n, r) {
          for (var o = [], i = 4; i < arguments.length; i++)
            o[i - 4] = arguments[i];
          if (e) {
            var a = or(e, t, Na(n, Boolean(r)), r);
            return {
              bg: this.sliceEventRanges(a.bg, o),
              fg: this.sliceEventRanges(a.fg, o),
            };
          }
          return { bg: [], fg: [] };
        }),
        (e.prototype._sliceInteraction = function (e, t, n, r) {
          for (var o = [], i = 4; i < arguments.length; i++)
            o[i - 4] = arguments[i];
          if (!e) return null;
          var a = or(e.mutatedEvents, t, Na(n, Boolean(r)), r);
          return {
            segs: this.sliceEventRanges(a.fg, o),
            affectedInstances: e.affectedEvents.instances,
            isEvent: e.isEvent,
          };
        }),
        (e.prototype._sliceDateSpan = function (e, t, n) {
          for (var r = [], i = 3; i < arguments.length; i++)
            r[i - 3] = arguments[i];
          if (!e) return [];
          for (
            var a = _r(e, t, n),
              s = this.sliceRange.apply(this, o([e.range], r)),
              l = 0,
              u = s;
            l < u.length;
            l++
          ) {
            var c = u[l];
            c.eventRange = a;
          }
          return s;
        }),
        (e.prototype.sliceEventRanges = function (e, t) {
          for (var n = [], r = 0, o = e; r < o.length; r++) {
            var i = o[r];
            n.push.apply(n, this.sliceEventRange(i, t));
          }
          return n;
        }),
        (e.prototype.sliceEventRange = function (e, t) {
          var n = e.range;
          this.forceDayIfListItem &&
            "list-item" === e.ui.display &&
            (n = { start: n.start, end: dt(n.start, 1) });
          for (
            var r = this.sliceRange.apply(this, o([n], t)), i = 0, a = r;
            i < a.length;
            i++
          ) {
            var s = a[i];
            (s.eventRange = e),
              (s.isStart = e.isStart && s.isStart),
              (s.isEnd = e.isEnd && s.isEnd);
          }
          return r;
        }),
        e
      );
    })();
  function Na(e, t) {
    var n = e.activeRange;
    return t
      ? n
      : {
          start: pt(n.start, e.slotMinTime.milliseconds),
          end: pt(n.end, e.slotMaxTime.milliseconds - 864e5),
        };
  }
  function Ha(e, t, n) {
    var r = e.mutatedEvents.instances;
    for (var o in r) if (!nr(t.validRange, r[o].range)) return !1;
    return Aa({ eventDrag: e }, n);
  }
  function Oa(e, t, n) {
    return !!nr(t.validRange, e.range) && Aa({ dateSelection: e }, n);
  }
  function Aa(e, t) {
    var n = t.getCurrentData(),
      o = r(
        {
          businessHours: n.businessHours,
          dateSelection: "",
          eventStore: n.eventStore,
          eventUiBases: n.eventUiBases,
          eventSelection: "",
          eventDrag: null,
          eventResize: null,
        },
        e
      );
    return (t.pluginHooks.isPropsValid || La)(o, t);
  }
  function La(e, t, n, o) {
    return (
      void 0 === n && (n = {}),
      !(
        (e.eventDrag &&
          !(function (e, t, n, o) {
            var i = t.getCurrentData(),
              a = e.eventDrag,
              s = a.mutatedEvents,
              l = s.defs,
              u = s.instances,
              c = lr(l, a.isEvent ? e.eventUiBases : { "": i.selectionConfig });
            o && (c = It(c, o));
            var d,
              p,
              f =
                ((d = e.eventStore),
                (p = a.affectedEvents.instances),
                {
                  defs: d.defs,
                  instances: Mt(d.instances, function (e) {
                    return !p[e.instanceId];
                  }),
                }),
              h = f.defs,
              v = f.instances,
              g = lr(h, e.eventUiBases);
            for (var m in u) {
              var y = u[m],
                E = y.range,
                S = c[y.defId],
                b = l[y.defId];
              if (!Ua(S.constraints, E, f, e.businessHours, t)) return !1;
              var D = t.options.eventOverlap,
                C = "function" == typeof D ? D : null;
              for (var w in v) {
                var _ = v[w];
                if (tr(E, _.range)) {
                  if (!1 === g[_.defId].overlap && a.isEvent) return !1;
                  if (!1 === S.overlap) return !1;
                  if (C && !C(new Ur(t, h[_.defId], _), new Ur(t, b, y)))
                    return !1;
                }
              }
              for (
                var R = i.eventStore, T = 0, k = S.allows;
                T < k.length;
                T++
              ) {
                var x,
                  M = k[T],
                  I = r(r({}, n), { range: y.range, allDay: b.allDay }),
                  P = R.defs[b.defId],
                  N = R.instances[m];
                if (((x = P ? new Ur(t, P, N) : new Ur(t, b)), !M(Tr(I, t), x)))
                  return !1;
              }
            }
            return !0;
          })(e, t, n, o)) ||
        (e.dateSelection &&
          !(function (e, t, n, o) {
            var i = e.eventStore,
              a = i.defs,
              s = i.instances,
              l = e.dateSelection,
              u = l.range,
              c = t.getCurrentData().selectionConfig;
            if ((o && (c = o(c)), !Ua(c.constraints, u, i, e.businessHours, t)))
              return !1;
            var d = t.options.selectOverlap,
              p = "function" == typeof d ? d : null;
            for (var f in s) {
              var h = s[f];
              if (tr(u, h.range)) {
                if (!1 === c.overlap) return !1;
                if (p && !p(new Ur(t, a[h.defId], h), null)) return !1;
              }
            }
            for (var v = 0, g = c.allows; v < g.length; v++)
              if (!(0, g[v])(Tr(r(r({}, n), l), t), null)) return !1;
            return !0;
          })(e, t, n, o))
      )
    );
  }
  function Ua(e, t, n, r, o) {
    for (var i = 0, a = e; i < a.length; i++)
      if (!Fa(Wa(a[i], t, n, r, o), t)) return !1;
    return !0;
  }
  function Wa(e, t, n, r, o) {
    return "businessHours" === e
      ? Va(Wt(r, t, o))
      : "string" == typeof e
      ? Va(
          Nn(n, function (t) {
            return t.groupId === e;
          })
        )
      : "object" == typeof e && e
      ? Va(Wt(e, t, o))
      : [];
  }
  function Va(e) {
    var t = e.instances,
      n = [];
    for (var r in t) n.push(t[r].range);
    return n;
  }
  function Fa(e, t) {
    for (var n = 0, r = e; n < r.length; n++) if (nr(r[n], t)) return !0;
    return !1;
  }
  var Ba = /^(visible|hidden)$/,
    za = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.handleEl = function (e) {
            (t.el = e), Xo(t.props.elRef, e);
          }),
          t
        );
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          var e = this.props,
            t = e.liquid,
            n = e.liquidIsAbsolute,
            r = t && n,
            o = ["fc-scroller"];
          return (
            t &&
              (n
                ? o.push("fc-scroller-liquid-absolute")
                : o.push("fc-scroller-liquid")),
            Ho(
              "div",
              {
                ref: this.handleEl,
                className: o.join(" "),
                style: {
                  overflowX: e.overflowX,
                  overflowY: e.overflowY,
                  left: (r && -(e.overcomeLeft || 0)) || "",
                  right: (r && -(e.overcomeRight || 0)) || "",
                  bottom: (r && -(e.overcomeBottom || 0)) || "",
                  marginLeft: (!r && -(e.overcomeLeft || 0)) || "",
                  marginRight: (!r && -(e.overcomeRight || 0)) || "",
                  marginBottom: (!r && -(e.overcomeBottom || 0)) || "",
                  maxHeight: e.maxHeight || "",
                },
              },
              e.children
            )
          );
        }),
        (t.prototype.needsXScrolling = function () {
          if (Ba.test(this.props.overflowX)) return !1;
          for (
            var e = this.el,
              t =
                this.el.getBoundingClientRect().width -
                this.getYScrollbarWidth(),
              n = e.children,
              r = 0;
            r < n.length;
            r += 1
          )
            if (n[r].getBoundingClientRect().width > t) return !0;
          return !1;
        }),
        (t.prototype.needsYScrolling = function () {
          if (Ba.test(this.props.overflowY)) return !1;
          for (
            var e = this.el,
              t =
                this.el.getBoundingClientRect().height -
                this.getXScrollbarWidth(),
              n = e.children,
              r = 0;
            r < n.length;
            r += 1
          )
            if (n[r].getBoundingClientRect().height > t) return !0;
          return !1;
        }),
        (t.prototype.getXScrollbarWidth = function () {
          return Ba.test(this.props.overflowX)
            ? 0
            : this.el.offsetHeight - this.el.clientHeight;
        }),
        (t.prototype.getYScrollbarWidth = function () {
          return Ba.test(this.props.overflowY)
            ? 0
            : this.el.offsetWidth - this.el.clientWidth;
        }),
        t
      );
    })(qo),
    ja = (function () {
      function e(e) {
        var t = this;
        (this.masterCallback = e),
          (this.currentMap = {}),
          (this.depths = {}),
          (this.callbackMap = {}),
          (this.handleValue = function (e, n) {
            var r = t,
              o = r.depths,
              i = r.currentMap,
              a = !1,
              s = !1;
            null !== e
              ? ((a = n in i), (i[n] = e), (o[n] = (o[n] || 0) + 1), (s = !0))
              : ((o[n] -= 1),
                o[n] || (delete i[n], delete t.callbackMap[n], (a = !0))),
              t.masterCallback &&
                (a && t.masterCallback(null, String(n)),
                s && t.masterCallback(e, String(n)));
          });
      }
      return (
        (e.prototype.createRef = function (e) {
          var t = this,
            n = this.callbackMap[e];
          return (
            n ||
              (n = this.callbackMap[e] =
                function (n) {
                  t.handleValue(n, String(e));
                }),
            n
          );
        }),
        (e.prototype.collect = function (e, t, n) {
          return Ut(this.currentMap, e, t, n);
        }),
        (e.prototype.getAll = function () {
          return Nt(this.currentMap);
        }),
        e
      );
    })();
  function Ga(e) {
    for (
      var t = 0, n = 0, r = Pe(e, ".fc-scrollgrid-shrink");
      n < r.length;
      n++
    ) {
      var o = r[n];
      t = Math.max(t, lt(o));
    }
    return Math.ceil(t);
  }
  function qa(e, t) {
    return e.liquid && t.liquid;
  }
  function Ya(e, t) {
    return null != t.maxHeight || qa(e, t);
  }
  function Za(e, t, n, r) {
    var o = n.expandRows;
    return "function" == typeof t.content
      ? t.content(n)
      : Ho(
          "table",
          {
            role: "presentation",
            className: [
              t.tableClassName,
              e.syncRowHeights ? "fc-scrollgrid-sync-table" : "",
            ].join(" "),
            style: {
              minWidth: n.tableMinWidth,
              width: n.clientWidth,
              height: o ? n.clientHeight : "",
            },
          },
          n.tableColGroupNode,
          Ho(
            r ? "thead" : "tbody",
            { role: "presentation" },
            "function" == typeof t.rowContent ? t.rowContent(n) : t.rowContent
          )
        );
  }
  function Xa(e, t) {
    return tn(e, t, Ht);
  }
  function Ka(e, t) {
    for (var n = [], r = 0, i = e; r < i.length; r++)
      for (var a = i[r], s = a.span || 1, l = 0; l < s; l += 1)
        n.push(
          Ho("col", {
            style: {
              width: "shrink" === a.width ? $a(t) : a.width || "",
              minWidth: a.minWidth || "",
            },
          })
        );
    return Ho.apply(void 0, o(["colgroup", {}], n));
  }
  function $a(e) {
    return null == e ? 4 : e;
  }
  function Ja(e) {
    for (var t = 0, n = e; t < n.length; t++)
      if ("shrink" === n[t].width) return !0;
    return !1;
  }
  function Qa(e, t) {
    var n = ["fc-scrollgrid", t.theme.getClass("table")];
    return e && n.push("fc-scrollgrid-liquid"), n;
  }
  function es(e, t) {
    var n = [
      "fc-scrollgrid-section",
      "fc-scrollgrid-section-" + e.type,
      e.className,
    ];
    return (
      t &&
        e.liquid &&
        null == e.maxHeight &&
        n.push("fc-scrollgrid-section-liquid"),
      e.isSticky && n.push("fc-scrollgrid-section-sticky"),
      n
    );
  }
  function ts(e) {
    return Ho("div", {
      className: "fc-scrollgrid-sticky-shim",
      style: { width: e.clientWidth, minWidth: e.tableMinWidth },
    });
  }
  function ns(e) {
    var t = e.stickyHeaderDates;
    return (
      (null != t && "auto" !== t) ||
        (t = "auto" === e.height || "auto" === e.viewHeight),
      t
    );
  }
  function rs(e) {
    var t = e.stickyFooterScrollbar;
    return (
      (null != t && "auto" !== t) ||
        (t = "auto" === e.height || "auto" === e.viewHeight),
      t
    );
  }
  var os = (function (e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this;
      return (
        (t.processCols = nn(function (e) {
          return e;
        }, Xa)),
        (t.renderMicroColGroup = nn(Ka)),
        (t.scrollerRefs = new ja()),
        (t.scrollerElRefs = new ja(t._handleScrollerEl.bind(t))),
        (t.state = {
          shrinkWidth: null,
          forceYScrollbars: !1,
          scrollerClientWidths: {},
          scrollerClientHeights: {},
        }),
        (t.handleSizing = function () {
          t.safeSetState(
            r({ shrinkWidth: t.computeShrinkWidth() }, t.computeScrollerDims())
          );
        }),
        t
      );
    }
    return (
      n(t, e),
      (t.prototype.render = function () {
        var e = this,
          t = e.props,
          n = e.state,
          r = e.context,
          i = t.sections || [],
          a = this.processCols(t.cols),
          s = this.renderMicroColGroup(a, n.shrinkWidth),
          l = Qa(t.liquid, r);
        t.collapsibleWidth && l.push("fc-scrollgrid-collapsible");
        for (
          var u, c = i.length, d = 0, p = [], f = [], h = [];
          d < c && "header" === (u = i[d]).type;

        )
          p.push(this.renderSection(u, s, !0)), (d += 1);
        for (; d < c && "body" === (u = i[d]).type; )
          f.push(this.renderSection(u, s, !1)), (d += 1);
        for (; d < c && "footer" === (u = i[d]).type; )
          h.push(this.renderSection(u, s, !0)), (d += 1);
        var v = !so(),
          g = { role: "rowgroup" };
        return Ho(
          "table",
          { role: "grid", className: l.join(" "), style: { height: t.height } },
          Boolean(!v && p.length) && Ho.apply(void 0, o(["thead", g], p)),
          Boolean(!v && f.length) && Ho.apply(void 0, o(["tbody", g], f)),
          Boolean(!v && h.length) && Ho.apply(void 0, o(["tfoot", g], h)),
          v && Ho.apply(void 0, o(o(o(["tbody", g], p), f), h))
        );
      }),
      (t.prototype.renderSection = function (e, t, n) {
        return "outerContent" in e
          ? Ho(Lo, { key: e.key }, e.outerContent)
          : Ho(
              "tr",
              {
                key: e.key,
                role: "presentation",
                className: es(e, this.props.liquid).join(" "),
              },
              this.renderChunkTd(e, t, e.chunk, n)
            );
      }),
      (t.prototype.renderChunkTd = function (e, t, n, r) {
        if ("outerContent" in n) return n.outerContent;
        var o = this.props,
          i = this.state,
          a = i.forceYScrollbars,
          s = i.scrollerClientWidths,
          l = i.scrollerClientHeights,
          u = Ya(o, e),
          c = qa(o, e),
          d = o.liquid ? (a ? "scroll" : u ? "auto" : "hidden") : "visible",
          p = e.key,
          f = Za(
            e,
            n,
            {
              tableColGroupNode: t,
              tableMinWidth: "",
              clientWidth: o.collapsibleWidth || void 0 === s[p] ? null : s[p],
              clientHeight: void 0 !== l[p] ? l[p] : null,
              expandRows: e.expandRows,
              syncRowHeights: !1,
              rowSyncHeights: [],
              reportRowHeightChange: function () {},
            },
            r
          );
        return Ho(
          r ? "th" : "td",
          { ref: n.elRef, role: "presentation" },
          Ho(
            "div",
            {
              className:
                "fc-scroller-harness" +
                (c ? " fc-scroller-harness-liquid" : ""),
            },
            Ho(
              za,
              {
                ref: this.scrollerRefs.createRef(p),
                elRef: this.scrollerElRefs.createRef(p),
                overflowY: d,
                overflowX: o.liquid ? "hidden" : "visible",
                maxHeight: e.maxHeight,
                liquid: c,
                liquidIsAbsolute: !0,
              },
              f
            )
          )
        );
      }),
      (t.prototype._handleScrollerEl = function (e, t) {
        var n = (function (e, t) {
          for (var n = 0, r = e; n < r.length; n++) {
            var o = r[n];
            if (o.key === t) return o;
          }
          return null;
        })(this.props.sections, t);
        n && Xo(n.chunk.scrollerElRef, e);
      }),
      (t.prototype.componentDidMount = function () {
        this.handleSizing(), this.context.addResizeHandler(this.handleSizing);
      }),
      (t.prototype.componentDidUpdate = function () {
        this.handleSizing();
      }),
      (t.prototype.componentWillUnmount = function () {
        this.context.removeResizeHandler(this.handleSizing);
      }),
      (t.prototype.computeShrinkWidth = function () {
        return Ja(this.props.cols) ? Ga(this.scrollerElRefs.getAll()) : 0;
      }),
      (t.prototype.computeScrollerDims = function () {
        var e = So(),
          t = this.scrollerRefs,
          n = this.scrollerElRefs,
          r = !1,
          o = {},
          i = {};
        for (var a in t.currentMap) {
          var s = t.currentMap[a];
          if (s && s.needsYScrolling()) {
            r = !0;
            break;
          }
        }
        for (var l = 0, u = this.props.sections; l < u.length; l++) {
          a = u[l].key;
          var c = n.currentMap[a];
          if (c) {
            var d = c.parentNode;
            (o[a] = Math.floor(
              d.getBoundingClientRect().width - (r ? e.y : 0)
            )),
              (i[a] = Math.floor(d.getBoundingClientRect().height));
          }
        }
        return {
          forceYScrollbars: r,
          scrollerClientWidths: o,
          scrollerClientHeights: i,
        };
      }),
      t
    );
  })(qo);
  os.addStateEquality({ scrollerClientWidths: Ht, scrollerClientHeights: Ht });
  var is = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (t.elRef = Ao()), t;
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          var e = this.props,
            t = this.context,
            n = t.options,
            r = e.seg,
            o = r.eventRange,
            i = o.ui,
            a = {
              event: new Ur(t, o.def, o.instance),
              view: t.viewApi,
              timeText: e.timeText,
              textColor: i.textColor,
              backgroundColor: i.backgroundColor,
              borderColor: i.borderColor,
              isDraggable: !e.disableDragging && pr(r, t),
              isStartResizable: !e.disableResizing && fr(r, t),
              isEndResizable: !e.disableResizing && hr(r),
              isMirror: Boolean(
                e.isDragging || e.isResizing || e.isDateSelecting
              ),
              isStart: Boolean(r.isStart),
              isEnd: Boolean(r.isEnd),
              isPast: Boolean(e.isPast),
              isFuture: Boolean(e.isFuture),
              isToday: Boolean(e.isToday),
              isSelected: Boolean(e.isSelected),
              isDragging: Boolean(e.isDragging),
              isResizing: Boolean(e.isResizing),
            },
            s = mr(a).concat(i.classNames);
          return Ho(
            ei,
            {
              hookProps: a,
              classNames: n.eventClassNames,
              content: n.eventContent,
              defaultContent: e.defaultContent,
              didMount: n.eventDidMount,
              willUnmount: n.eventWillUnmount,
              elRef: this.elRef,
            },
            function (t, n, r, o) {
              return e.children(t, s.concat(n), r, o, a);
            }
          );
        }),
        (t.prototype.componentDidMount = function () {
          ar(this.elRef.current, this.props.seg);
        }),
        (t.prototype.componentDidUpdate = function (e) {
          var t = this.props.seg;
          t !== e.seg && ar(this.elRef.current, t);
        }),
        t
      );
    })(qo),
    as = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          var e = this.props,
            t = this.context,
            n = e.seg,
            o = t.options.eventTimeFormat || e.defaultTimeFormat,
            i = vr(
              n,
              o,
              t,
              e.defaultDisplayEventTime,
              e.defaultDisplayEventEnd
            );
          return Ho(
            is,
            {
              seg: n,
              timeText: i,
              disableDragging: e.disableDragging,
              disableResizing: e.disableResizing,
              defaultContent: e.defaultContent || ss,
              isDragging: e.isDragging,
              isResizing: e.isResizing,
              isDateSelecting: e.isDateSelecting,
              isSelected: e.isSelected,
              isPast: e.isPast,
              isFuture: e.isFuture,
              isToday: e.isToday,
            },
            function (o, i, a, s, l) {
              return Ho(
                "a",
                r(
                  {
                    className: e.extraClassNames.concat(i).join(" "),
                    style: {
                      borderColor: l.borderColor,
                      backgroundColor: l.backgroundColor,
                    },
                    ref: o,
                  },
                  Er(n, t)
                ),
                Ho(
                  "div",
                  {
                    className: "fc-event-main",
                    ref: a,
                    style: { color: l.textColor },
                  },
                  s
                ),
                l.isStartResizable &&
                  Ho("div", {
                    className: "fc-event-resizer fc-event-resizer-start",
                  }),
                l.isEndResizable &&
                  Ho("div", {
                    className: "fc-event-resizer fc-event-resizer-end",
                  })
              );
            }
          );
        }),
        t
      );
    })(qo);
  function ss(e) {
    return Ho(
      "div",
      { className: "fc-event-main-frame" },
      e.timeText && Ho("div", { className: "fc-event-time" }, e.timeText),
      Ho(
        "div",
        { className: "fc-event-title-container" },
        Ho(
          "div",
          { className: "fc-event-title fc-sticky" },
          e.event.title || Ho(Lo, null, " ")
        )
      )
    );
  }
  var ls = function (e) {
      return Ho(zo.Consumer, null, function (t) {
        var n = t.options,
          r = {
            isAxis: e.isAxis,
            date: t.dateEnv.toDate(e.date),
            view: t.viewApi,
          };
        return Ho(
          ei,
          {
            hookProps: r,
            classNames: n.nowIndicatorClassNames,
            content: n.nowIndicatorContent,
            didMount: n.nowIndicatorDidMount,
            willUnmount: n.nowIndicatorWillUnmount,
          },
          e.children
        );
      });
    },
    us = yn({ day: "numeric" }),
    cs = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          var e = this.props,
            t = this.context,
            n = t.options,
            r = ds({
              date: e.date,
              dateProfile: e.dateProfile,
              todayRange: e.todayRange,
              showDayNumber: e.showDayNumber,
              extraProps: e.extraHookProps,
              viewApi: t.viewApi,
              dateEnv: t.dateEnv,
            });
          return Ho(
            ni,
            {
              hookProps: r,
              content: n.dayCellContent,
              defaultContent: e.defaultContent,
            },
            e.children
          );
        }),
        t
      );
    })(qo);
  function ds(e) {
    var t = e.date,
      n = e.dateEnv,
      o = po(t, e.todayRange, null, e.dateProfile);
    return r(
      r(r({ date: n.toDate(t), view: e.viewApi }, o), {
        dayNumberText: e.showDayNumber ? n.format(t, us) : "",
      }),
      e.extraProps
    );
  }
  var ps = (function (e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this;
      return (t.refineHookProps = rn(ds)), (t.normalizeClassNames = ii()), t;
    }
    return (
      n(t, e),
      (t.prototype.render = function () {
        var e = this.props,
          t = this.context,
          n = t.options,
          r = this.refineHookProps({
            date: e.date,
            dateProfile: e.dateProfile,
            todayRange: e.todayRange,
            showDayNumber: e.showDayNumber,
            extraProps: e.extraHookProps,
            viewApi: t.viewApi,
            dateEnv: t.dateEnv,
          }),
          o = fo(r, t.theme).concat(
            r.isDisabled ? [] : this.normalizeClassNames(n.dayCellClassNames, r)
          ),
          i = r.isDisabled ? {} : { "data-date": Jt(e.date) };
        return Ho(
          oi,
          {
            hookProps: r,
            didMount: n.dayCellDidMount,
            willUnmount: n.dayCellWillUnmount,
            elRef: e.elRef,
          },
          function (t) {
            return e.children(t, o, i, r.isDisabled);
          }
        );
      }),
      t
    );
  })(qo);
  function fs(e) {
    return Ho("div", { className: "fc-" + e });
  }
  var hs = function (e) {
    return Ho(
      is,
      {
        defaultContent: vs,
        seg: e.seg,
        timeText: "",
        disableDragging: !0,
        disableResizing: !0,
        isDragging: !1,
        isResizing: !1,
        isDateSelecting: !1,
        isSelected: !1,
        isPast: e.isPast,
        isFuture: e.isFuture,
        isToday: e.isToday,
      },
      function (e, t, n, r, o) {
        return Ho(
          "div",
          {
            ref: e,
            className: ["fc-bg-event"].concat(t).join(" "),
            style: { backgroundColor: o.backgroundColor },
          },
          r
        );
      }
    );
  };
  function vs(e) {
    return (
      e.event.title && Ho("div", { className: "fc-event-title" }, e.event.title)
    );
  }
  var gs = function (e) {
    return Ho(zo.Consumer, null, function (t) {
      var n = t.dateEnv,
        r = t.options,
        o = e.date,
        i = r.weekNumberFormat || e.defaultFormat,
        a = n.computeWeekNumber(o),
        s = n.format(o, i);
      return Ho(
        ei,
        {
          hookProps: { num: a, text: s, date: o },
          classNames: r.weekNumberClassNames,
          content: r.weekNumberContent,
          defaultContent: ms,
          didMount: r.weekNumberDidMount,
          willUnmount: r.weekNumberWillUnmount,
        },
        e.children
      );
    });
  };
  function ms(e) {
    return e.text;
  }
  var ys = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.state = { titleId: We() }),
          (t.handleRootEl = function (e) {
            (t.rootEl = e), t.props.elRef && Xo(t.props.elRef, e);
          }),
          (t.handleDocumentMouseDown = function (e) {
            var n = Ae(e);
            t.rootEl.contains(n) || t.handleCloseClick();
          }),
          (t.handleDocumentKeyDown = function (e) {
            "Escape" === e.key && t.handleCloseClick();
          }),
          (t.handleCloseClick = function () {
            var e = t.props.onClose;
            e && e();
          }),
          t
        );
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          var e = this.context,
            t = e.theme,
            n = e.options,
            o = this.props,
            i = this.state,
            a = ["fc-popover", t.getClass("popover")].concat(
              o.extraClassNames || []
            );
          return Wo(
            Ho(
              "div",
              r(
                {
                  id: o.id,
                  className: a.join(" "),
                  "aria-labelledby": i.titleId,
                },
                o.extraAttrs,
                { ref: this.handleRootEl }
              ),
              Ho(
                "div",
                {
                  className: "fc-popover-header " + t.getClass("popoverHeader"),
                },
                Ho(
                  "span",
                  { className: "fc-popover-title", id: i.titleId },
                  o.title
                ),
                Ho("span", {
                  className: "fc-popover-close " + t.getIconClass("close"),
                  title: n.closeHint,
                  onClick: this.handleCloseClick,
                })
              ),
              Ho(
                "div",
                {
                  className: "fc-popover-body " + t.getClass("popoverContent"),
                },
                o.children
              )
            ),
            o.parentEl
          );
        }),
        (t.prototype.componentDidMount = function () {
          document.addEventListener("mousedown", this.handleDocumentMouseDown),
            document.addEventListener("keydown", this.handleDocumentKeyDown),
            this.updateSize();
        }),
        (t.prototype.componentWillUnmount = function () {
          document.removeEventListener(
            "mousedown",
            this.handleDocumentMouseDown
          ),
            document.removeEventListener("keydown", this.handleDocumentKeyDown);
        }),
        (t.prototype.updateSize = function () {
          var e = this.context.isRtl,
            t = this.props,
            n = t.alignmentEl,
            r = t.alignGridTop,
            o = this.rootEl,
            i = (function (e) {
              for (
                var t = _o(e), n = e.getBoundingClientRect(), r = 0, o = t;
                r < o.length;
                r++
              ) {
                var i = ro(n, o[r].getBoundingClientRect());
                if (!i) return null;
                n = i;
              }
              return n;
            })(n);
          if (i) {
            var a = o.getBoundingClientRect(),
              s = r
                ? Me(n, ".fc-scrollgrid").getBoundingClientRect().top
                : i.top,
              l = e ? i.right - a.width : i.left;
            (s = Math.max(s, 10)),
              (l = Math.min(
                l,
                document.documentElement.clientWidth - 10 - a.width
              )),
              (l = Math.max(l, 10));
            var u = o.offsetParent.getBoundingClientRect();
            He(o, { top: s - u.top, left: l - u.left });
          }
        }),
        t
      );
    })(qo),
    Es = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.handleRootEl = function (e) {
            (t.rootEl = e),
              e
                ? t.context.registerInteractiveComponent(t, {
                    el: e,
                    useEventCenter: !1,
                  })
                : t.context.unregisterInteractiveComponent(t);
          }),
          t
        );
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          var e = this.context,
            t = e.options,
            n = e.dateEnv,
            r = this.props,
            o = r.startDate,
            i = r.todayRange,
            a = r.dateProfile,
            s = n.format(o, t.dayPopoverFormat);
          return Ho(
            ps,
            {
              date: o,
              dateProfile: a,
              todayRange: i,
              elRef: this.handleRootEl,
            },
            function (e, t, n) {
              return Ho(
                ys,
                {
                  elRef: e,
                  id: r.id,
                  title: s,
                  extraClassNames: ["fc-more-popover"].concat(t),
                  extraAttrs: n,
                  parentEl: r.parentEl,
                  alignmentEl: r.alignmentEl,
                  alignGridTop: r.alignGridTop,
                  onClose: r.onClose,
                },
                Ho(
                  cs,
                  { date: o, dateProfile: a, todayRange: i },
                  function (e, t) {
                    return (
                      t &&
                      Ho(
                        "div",
                        { className: "fc-more-popover-misc", ref: e },
                        t
                      )
                    );
                  }
                ),
                r.children
              );
            }
          );
        }),
        (t.prototype.queryHit = function (e, t, n, o) {
          var i = this.rootEl,
            a = this.props;
          return e >= 0 && e < n && t >= 0 && t < o
            ? {
                dateProfile: a.dateProfile,
                dateSpan: r(
                  { allDay: !0, range: { start: a.startDate, end: a.endDate } },
                  a.extraDateSpan
                ),
                dayEl: i,
                rect: { left: 0, top: 0, right: n, bottom: o },
                layer: 1,
              }
            : null;
        }),
        t
      );
    })(Ko),
    Ss = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.linkElRef = Ao()),
          (t.state = { isPopoverOpen: !1, popoverId: We() }),
          (t.handleClick = function (e) {
            var n = t,
              r = n.props,
              o = n.context,
              i = o.options.moreLinkClick,
              a = Ds(r).start;
            function s(e) {
              var t = e.eventRange,
                n = t.def,
                r = t.instance,
                i = t.range;
              return {
                event: new Ur(o, n, r),
                start: o.dateEnv.toDate(i.start),
                end: o.dateEnv.toDate(i.end),
                isStart: e.isStart,
                isEnd: e.isEnd,
              };
            }
            "function" == typeof i &&
              (i = i({
                date: a,
                allDay: Boolean(r.allDayDate),
                allSegs: r.allSegs.map(s),
                hiddenSegs: r.hiddenSegs.map(s),
                jsEvent: e,
                view: o.viewApi,
              })),
              i && "popover" !== i
                ? "string" == typeof i && o.calendarApi.zoomTo(a, i)
                : t.setState({ isPopoverOpen: !0 });
          }),
          (t.handlePopoverClose = function () {
            t.setState({ isPopoverOpen: !1 });
          }),
          t
        );
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          var e = this,
            t = this.props,
            n = this.state;
          return Ho(zo.Consumer, null, function (r) {
            var o = r.viewApi,
              i = r.options,
              a = r.calendarApi,
              s = i.moreLinkText,
              l = t.moreCnt,
              u = Ds(t),
              c = "function" == typeof s ? s.call(a, l) : "+" + l + " " + s,
              d = it(i.moreLinkHint, [l], c),
              p = { num: l, shortText: "+" + l, text: c, view: o };
            return Ho(
              Lo,
              null,
              Boolean(t.moreCnt) &&
                Ho(
                  ei,
                  {
                    elRef: e.linkElRef,
                    hookProps: p,
                    classNames: i.moreLinkClassNames,
                    content: i.moreLinkContent,
                    defaultContent: t.defaultContent || bs,
                    didMount: i.moreLinkDidMount,
                    willUnmount: i.moreLinkWillUnmount,
                  },
                  function (r, o, i, a) {
                    return t.children(
                      r,
                      ["fc-more-link"].concat(o),
                      i,
                      a,
                      e.handleClick,
                      d,
                      n.isPopoverOpen,
                      n.isPopoverOpen ? n.popoverId : ""
                    );
                  }
                ),
              n.isPopoverOpen &&
                Ho(
                  Es,
                  {
                    id: n.popoverId,
                    startDate: u.start,
                    endDate: u.end,
                    dateProfile: t.dateProfile,
                    todayRange: t.todayRange,
                    extraDateSpan: t.extraDateSpan,
                    parentEl: e.parentEl,
                    alignmentEl: t.alignmentElRef.current,
                    alignGridTop: t.alignGridTop,
                    onClose: e.handlePopoverClose,
                  },
                  t.popoverContent()
                )
            );
          });
        }),
        (t.prototype.componentDidMount = function () {
          this.updateParentEl();
        }),
        (t.prototype.componentDidUpdate = function () {
          this.updateParentEl();
        }),
        (t.prototype.updateParentEl = function () {
          this.linkElRef.current &&
            (this.parentEl = Me(this.linkElRef.current, ".fc-view-harness"));
        }),
        t
      );
    })(qo);
  function bs(e) {
    return e.text;
  }
  function Ds(e) {
    if (e.allDayDate) return { start: e.allDayDate, end: dt(e.allDayDate, 1) };
    var t,
      n = e.hiddenSegs;
    return { start: Cs(n), end: ((t = n), t.reduce(_s).eventRange.range.end) };
  }
  function Cs(e) {
    return e.reduce(ws).eventRange.range.start;
  }
  function ws(e, t) {
    return e.eventRange.range.start < t.eventRange.range.start ? e : t;
  }
  function _s(e, t) {
    return e.eventRange.range.end > t.eventRange.range.end ? e : t;
  }
  var Rs = (function (e) {
    function t(t, n) {
      void 0 === n && (n = {});
      var o = e.call(this) || this;
      return (
        (o.isRendering = !1),
        (o.isRendered = !1),
        (o.currentClassNames = []),
        (o.customContentRenderId = 0),
        (o.handleAction = function (e) {
          switch (e.type) {
            case "SET_EVENT_DRAG":
            case "SET_EVENT_RESIZE":
              o.renderRunner.tryDrain();
          }
        }),
        (o.handleData = function (e) {
          (o.currentData = e),
            o.renderRunner.request(e.calendarOptions.rerenderDelay);
        }),
        (o.handleRenderRequest = function () {
          if (o.isRendering) {
            o.isRendered = !0;
            var e = o.currentData;
            Vo(function () {
              Oo(
                Ho(
                  Ea,
                  {
                    options: e.calendarOptions,
                    theme: e.theme,
                    emitter: e.emitter,
                  },
                  function (t, n, i, a) {
                    return (
                      o.setClassNames(t),
                      o.setHeight(n),
                      Ho(
                        ti.Provider,
                        { value: o.customContentRenderId },
                        Ho(ga, r({ isHeightAuto: i, forPrint: a }, e))
                      )
                    );
                  }
                ),
                o.el
              );
            });
          } else
            o.isRendered &&
              ((o.isRendered = !1),
              Fo(o.el),
              o.setClassNames([]),
              o.setHeight(""));
        }),
        (o.el = t),
        (o.renderRunner = new Hi(o.handleRenderRequest)),
        new Li({
          optionOverrides: n,
          calendarApi: o,
          onAction: o.handleAction,
          onData: o.handleData,
        }),
        o
      );
    }
    return (
      n(t, e),
      Object.defineProperty(t.prototype, "view", {
        get: function () {
          return this.currentData.viewApi;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.render = function () {
        var e = this.isRendering;
        e ? (this.customContentRenderId += 1) : (this.isRendering = !0),
          this.renderRunner.request(),
          e && this.updateSize();
      }),
      (t.prototype.destroy = function () {
        this.isRendering &&
          ((this.isRendering = !1), this.renderRunner.request());
      }),
      (t.prototype.updateSize = function () {
        var t = this;
        Vo(function () {
          e.prototype.updateSize.call(t);
        });
      }),
      (t.prototype.batchRendering = function (e) {
        this.renderRunner.pause("batchRendering"),
          e(),
          this.renderRunner.resume("batchRendering");
      }),
      (t.prototype.pauseRendering = function () {
        this.renderRunner.pause("pauseRendering");
      }),
      (t.prototype.resumeRendering = function () {
        this.renderRunner.resume("pauseRendering", !0);
      }),
      (t.prototype.resetOptions = function (e, t) {
        this.currentDataManager.resetOptions(e, t);
      }),
      (t.prototype.setClassNames = function (e) {
        if (!tn(e, this.currentClassNames)) {
          for (
            var t = this.el.classList, n = 0, r = this.currentClassNames;
            n < r.length;
            n++
          ) {
            var o = r[n];
            t.remove(o);
          }
          for (var i = 0, a = e; i < a.length; i++) (o = a[i]), t.add(o);
          this.currentClassNames = e;
        }
      }),
      (t.prototype.setHeight = function (e) {
        Oe(this.el, "height", e);
      }),
      t
    );
  })(Lr);
  la.touchMouseIgnoreWait = 500;
  var Ts = 0,
    ks = 0,
    xs = !1,
    Ms = (function () {
      function e(e) {
        var t = this;
        (this.subjectEl = null),
          (this.selector = ""),
          (this.handleSelector = ""),
          (this.shouldIgnoreMove = !1),
          (this.shouldWatchScroll = !0),
          (this.isDragging = !1),
          (this.isTouchDragging = !1),
          (this.wasTouchScroll = !1),
          (this.handleMouseDown = function (e) {
            if (
              !t.shouldIgnoreMouse() &&
              (function (e) {
                return 0 === e.button && !e.ctrlKey;
              })(e) &&
              t.tryStart(e)
            ) {
              var n = t.createEventFromMouse(e, !0);
              t.emitter.trigger("pointerdown", n),
                t.initScrollWatch(n),
                t.shouldIgnoreMove ||
                  document.addEventListener("mousemove", t.handleMouseMove),
                document.addEventListener("mouseup", t.handleMouseUp);
            }
          }),
          (this.handleMouseMove = function (e) {
            var n = t.createEventFromMouse(e);
            t.recordCoords(n), t.emitter.trigger("pointermove", n);
          }),
          (this.handleMouseUp = function (e) {
            document.removeEventListener("mousemove", t.handleMouseMove),
              document.removeEventListener("mouseup", t.handleMouseUp),
              t.emitter.trigger("pointerup", t.createEventFromMouse(e)),
              t.cleanup();
          }),
          (this.handleTouchStart = function (e) {
            if (t.tryStart(e)) {
              t.isTouchDragging = !0;
              var n = t.createEventFromTouch(e, !0);
              t.emitter.trigger("pointerdown", n), t.initScrollWatch(n);
              var r = e.target;
              t.shouldIgnoreMove ||
                r.addEventListener("touchmove", t.handleTouchMove),
                r.addEventListener("touchend", t.handleTouchEnd),
                r.addEventListener("touchcancel", t.handleTouchEnd),
                window.addEventListener("scroll", t.handleTouchScroll, !0);
            }
          }),
          (this.handleTouchMove = function (e) {
            var n = t.createEventFromTouch(e);
            t.recordCoords(n), t.emitter.trigger("pointermove", n);
          }),
          (this.handleTouchEnd = function (e) {
            if (t.isDragging) {
              var n = e.target;
              n.removeEventListener("touchmove", t.handleTouchMove),
                n.removeEventListener("touchend", t.handleTouchEnd),
                n.removeEventListener("touchcancel", t.handleTouchEnd),
                window.removeEventListener("scroll", t.handleTouchScroll, !0),
                t.emitter.trigger("pointerup", t.createEventFromTouch(e)),
                t.cleanup(),
                (t.isTouchDragging = !1),
                (Ts += 1),
                setTimeout(function () {
                  Ts -= 1;
                }, la.touchMouseIgnoreWait);
            }
          }),
          (this.handleTouchScroll = function () {
            t.wasTouchScroll = !0;
          }),
          (this.handleScroll = function (e) {
            if (!t.shouldIgnoreMove) {
              var n = window.pageXOffset - t.prevScrollX + t.prevPageX,
                r = window.pageYOffset - t.prevScrollY + t.prevPageY;
              t.emitter.trigger("pointermove", {
                origEvent: e,
                isTouch: t.isTouchDragging,
                subjectEl: t.subjectEl,
                pageX: n,
                pageY: r,
                deltaX: n - t.origPageX,
                deltaY: r - t.origPageY,
              });
            }
          }),
          (this.containerEl = e),
          (this.emitter = new To()),
          e.addEventListener("mousedown", this.handleMouseDown),
          e.addEventListener("touchstart", this.handleTouchStart, {
            passive: !0,
          }),
          1 === (ks += 1) &&
            window.addEventListener("touchmove", Is, { passive: !1 });
      }
      return (
        (e.prototype.destroy = function () {
          this.containerEl.removeEventListener(
            "mousedown",
            this.handleMouseDown
          ),
            this.containerEl.removeEventListener(
              "touchstart",
              this.handleTouchStart,
              { passive: !0 }
            ),
            (ks -= 1) ||
              window.removeEventListener("touchmove", Is, { passive: !1 });
        }),
        (e.prototype.tryStart = function (e) {
          var t = this.querySubjectEl(e),
            n = e.target;
          return !(
            !t ||
            (this.handleSelector && !Me(n, this.handleSelector)) ||
            ((this.subjectEl = t),
            (this.isDragging = !0),
            (this.wasTouchScroll = !1),
            0)
          );
        }),
        (e.prototype.cleanup = function () {
          (xs = !1),
            (this.isDragging = !1),
            (this.subjectEl = null),
            this.destroyScrollWatch();
        }),
        (e.prototype.querySubjectEl = function (e) {
          return this.selector ? Me(e.target, this.selector) : this.containerEl;
        }),
        (e.prototype.shouldIgnoreMouse = function () {
          return Ts || this.isTouchDragging;
        }),
        (e.prototype.cancelTouchScroll = function () {
          this.isDragging && (xs = !0);
        }),
        (e.prototype.initScrollWatch = function (e) {
          this.shouldWatchScroll &&
            (this.recordCoords(e),
            window.addEventListener("scroll", this.handleScroll, !0));
        }),
        (e.prototype.recordCoords = function (e) {
          this.shouldWatchScroll &&
            ((this.prevPageX = e.pageX),
            (this.prevPageY = e.pageY),
            (this.prevScrollX = window.pageXOffset),
            (this.prevScrollY = window.pageYOffset));
        }),
        (e.prototype.destroyScrollWatch = function () {
          this.shouldWatchScroll &&
            window.removeEventListener("scroll", this.handleScroll, !0);
        }),
        (e.prototype.createEventFromMouse = function (e, t) {
          var n = 0,
            r = 0;
          return (
            t
              ? ((this.origPageX = e.pageX), (this.origPageY = e.pageY))
              : ((n = e.pageX - this.origPageX),
                (r = e.pageY - this.origPageY)),
            {
              origEvent: e,
              isTouch: !1,
              subjectEl: this.subjectEl,
              pageX: e.pageX,
              pageY: e.pageY,
              deltaX: n,
              deltaY: r,
            }
          );
        }),
        (e.prototype.createEventFromTouch = function (e, t) {
          var n,
            r,
            o = e.touches,
            i = 0,
            a = 0;
          return (
            o && o.length
              ? ((n = o[0].pageX), (r = o[0].pageY))
              : ((n = e.pageX), (r = e.pageY)),
            t
              ? ((this.origPageX = n), (this.origPageY = r))
              : ((i = n - this.origPageX), (a = r - this.origPageY)),
            {
              origEvent: e,
              isTouch: !0,
              subjectEl: this.subjectEl,
              pageX: n,
              pageY: r,
              deltaX: i,
              deltaY: a,
            }
          );
        }),
        e
      );
    })();
  function Is(e) {
    xs && e.preventDefault();
  }
  var Ps = (function () {
      function e() {
        (this.isVisible = !1),
          (this.sourceEl = null),
          (this.mirrorEl = null),
          (this.sourceElRect = null),
          (this.parentNode = document.body),
          (this.zIndex = 9999),
          (this.revertDuration = 0);
      }
      return (
        (e.prototype.start = function (e, t, n) {
          (this.sourceEl = e),
            (this.sourceElRect = this.sourceEl.getBoundingClientRect()),
            (this.origScreenX = t - window.pageXOffset),
            (this.origScreenY = n - window.pageYOffset),
            (this.deltaX = 0),
            (this.deltaY = 0),
            this.updateElPosition();
        }),
        (e.prototype.handleMove = function (e, t) {
          (this.deltaX = e - window.pageXOffset - this.origScreenX),
            (this.deltaY = t - window.pageYOffset - this.origScreenY),
            this.updateElPosition();
        }),
        (e.prototype.setIsVisible = function (e) {
          e
            ? this.isVisible ||
              (this.mirrorEl && (this.mirrorEl.style.display = ""),
              (this.isVisible = e),
              this.updateElPosition())
            : this.isVisible &&
              (this.mirrorEl && (this.mirrorEl.style.display = "none"),
              (this.isVisible = e));
        }),
        (e.prototype.stop = function (e, t) {
          var n = this,
            r = function () {
              n.cleanup(), t();
            };
          e &&
          this.mirrorEl &&
          this.isVisible &&
          this.revertDuration &&
          (this.deltaX || this.deltaY)
            ? this.doRevertAnimation(r, this.revertDuration)
            : setTimeout(r, 0);
        }),
        (e.prototype.doRevertAnimation = function (e, t) {
          var n = this.mirrorEl,
            r = this.sourceEl.getBoundingClientRect();
          (n.style.transition = "top " + t + "ms,left " + t + "ms"),
            He(n, { left: r.left, top: r.top }),
            ze(n, function () {
              (n.style.transition = ""), e();
            });
        }),
        (e.prototype.cleanup = function () {
          this.mirrorEl && (xe(this.mirrorEl), (this.mirrorEl = null)),
            (this.sourceEl = null);
        }),
        (e.prototype.updateElPosition = function () {
          this.sourceEl &&
            this.isVisible &&
            He(this.getMirrorEl(), {
              left: this.sourceElRect.left + this.deltaX,
              top: this.sourceElRect.top + this.deltaY,
            });
        }),
        (e.prototype.getMirrorEl = function () {
          var e = this.sourceElRect,
            t = this.mirrorEl;
          return (
            t ||
              ((t = this.mirrorEl = this.sourceEl.cloneNode(!0)).classList.add(
                "fc-unselectable"
              ),
              t.classList.add("fc-event-dragging"),
              He(t, {
                position: "fixed",
                zIndex: this.zIndex,
                visibility: "",
                boxSizing: "border-box",
                width: e.right - e.left,
                height: e.bottom - e.top,
                right: "auto",
                bottom: "auto",
                margin: 0,
              }),
              this.parentNode.appendChild(t)),
            t
          );
        }),
        e
      );
    })(),
    Ns = (function (e) {
      function t(t, n) {
        var r = e.call(this) || this;
        return (
          (r.handleScroll = function () {
            (r.scrollTop = r.scrollController.getScrollTop()),
              (r.scrollLeft = r.scrollController.getScrollLeft()),
              r.handleScrollChange();
          }),
          (r.scrollController = t),
          (r.doesListening = n),
          (r.scrollTop = r.origScrollTop = t.getScrollTop()),
          (r.scrollLeft = r.origScrollLeft = t.getScrollLeft()),
          (r.scrollWidth = t.getScrollWidth()),
          (r.scrollHeight = t.getScrollHeight()),
          (r.clientWidth = t.getClientWidth()),
          (r.clientHeight = t.getClientHeight()),
          (r.clientRect = r.computeClientRect()),
          r.doesListening &&
            r.getEventTarget().addEventListener("scroll", r.handleScroll),
          r
        );
      }
      return (
        n(t, e),
        (t.prototype.destroy = function () {
          this.doesListening &&
            this.getEventTarget().removeEventListener(
              "scroll",
              this.handleScroll
            );
        }),
        (t.prototype.getScrollTop = function () {
          return this.scrollTop;
        }),
        (t.prototype.getScrollLeft = function () {
          return this.scrollLeft;
        }),
        (t.prototype.setScrollTop = function (e) {
          this.scrollController.setScrollTop(e),
            this.doesListening ||
              ((this.scrollTop = Math.max(
                Math.min(e, this.getMaxScrollTop()),
                0
              )),
              this.handleScrollChange());
        }),
        (t.prototype.setScrollLeft = function (e) {
          this.scrollController.setScrollLeft(e),
            this.doesListening ||
              ((this.scrollLeft = Math.max(
                Math.min(e, this.getMaxScrollLeft()),
                0
              )),
              this.handleScrollChange());
        }),
        (t.prototype.getClientWidth = function () {
          return this.clientWidth;
        }),
        (t.prototype.getClientHeight = function () {
          return this.clientHeight;
        }),
        (t.prototype.getScrollWidth = function () {
          return this.scrollWidth;
        }),
        (t.prototype.getScrollHeight = function () {
          return this.scrollHeight;
        }),
        (t.prototype.handleScrollChange = function () {}),
        t
      );
    })(xo),
    Hs = (function (e) {
      function t(t, n) {
        return e.call(this, new Mo(t), n) || this;
      }
      return (
        n(t, e),
        (t.prototype.getEventTarget = function () {
          return this.scrollController.el;
        }),
        (t.prototype.computeClientRect = function () {
          return Co(this.scrollController.el);
        }),
        t
      );
    })(Ns),
    Os = (function (e) {
      function t(t) {
        return e.call(this, new Io(), t) || this;
      }
      return (
        n(t, e),
        (t.prototype.getEventTarget = function () {
          return window;
        }),
        (t.prototype.computeClientRect = function () {
          return {
            left: this.scrollLeft,
            right: this.scrollLeft + this.clientWidth,
            top: this.scrollTop,
            bottom: this.scrollTop + this.clientHeight,
          };
        }),
        (t.prototype.handleScrollChange = function () {
          this.clientRect = this.computeClientRect();
        }),
        t
      );
    })(Ns),
    As = "function" == typeof performance ? performance.now : Date.now,
    Ls = (function () {
      function e() {
        var e = this;
        (this.isEnabled = !0),
          (this.scrollQuery = [window, ".fc-scroller"]),
          (this.edgeThreshold = 50),
          (this.maxVelocity = 300),
          (this.pointerScreenX = null),
          (this.pointerScreenY = null),
          (this.isAnimating = !1),
          (this.scrollCaches = null),
          (this.everMovedUp = !1),
          (this.everMovedDown = !1),
          (this.everMovedLeft = !1),
          (this.everMovedRight = !1),
          (this.animate = function () {
            if (e.isAnimating) {
              var t = e.computeBestEdge(
                e.pointerScreenX + window.pageXOffset,
                e.pointerScreenY + window.pageYOffset
              );
              if (t) {
                var n = As();
                e.handleSide(t, (n - e.msSinceRequest) / 1e3),
                  e.requestAnimation(n);
              } else e.isAnimating = !1;
            }
          });
      }
      return (
        (e.prototype.start = function (e, t, n) {
          this.isEnabled &&
            ((this.scrollCaches = this.buildCaches(n)),
            (this.pointerScreenX = null),
            (this.pointerScreenY = null),
            (this.everMovedUp = !1),
            (this.everMovedDown = !1),
            (this.everMovedLeft = !1),
            (this.everMovedRight = !1),
            this.handleMove(e, t));
        }),
        (e.prototype.handleMove = function (e, t) {
          if (this.isEnabled) {
            var n = e - window.pageXOffset,
              r = t - window.pageYOffset,
              o = null === this.pointerScreenY ? 0 : r - this.pointerScreenY,
              i = null === this.pointerScreenX ? 0 : n - this.pointerScreenX;
            o < 0
              ? (this.everMovedUp = !0)
              : o > 0 && (this.everMovedDown = !0),
              i < 0
                ? (this.everMovedLeft = !0)
                : i > 0 && (this.everMovedRight = !0),
              (this.pointerScreenX = n),
              (this.pointerScreenY = r),
              this.isAnimating ||
                ((this.isAnimating = !0), this.requestAnimation(As()));
          }
        }),
        (e.prototype.stop = function () {
          if (this.isEnabled) {
            this.isAnimating = !1;
            for (var e = 0, t = this.scrollCaches; e < t.length; e++)
              t[e].destroy();
            this.scrollCaches = null;
          }
        }),
        (e.prototype.requestAnimation = function (e) {
          (this.msSinceRequest = e), requestAnimationFrame(this.animate);
        }),
        (e.prototype.handleSide = function (e, t) {
          var n = e.scrollCache,
            r = this.edgeThreshold,
            o = r - e.distance,
            i = ((o * o) / (r * r)) * this.maxVelocity * t,
            a = 1;
          switch (e.name) {
            case "left":
              a = -1;
            case "right":
              n.setScrollLeft(n.getScrollLeft() + i * a);
              break;
            case "top":
              a = -1;
            case "bottom":
              n.setScrollTop(n.getScrollTop() + i * a);
          }
        }),
        (e.prototype.computeBestEdge = function (e, t) {
          for (
            var n = this.edgeThreshold,
              r = null,
              o = 0,
              i = this.scrollCaches || [];
            o < i.length;
            o++
          ) {
            var a = i[o],
              s = a.clientRect,
              l = e - s.left,
              u = s.right - e,
              c = t - s.top,
              d = s.bottom - t;
            l >= 0 &&
              u >= 0 &&
              c >= 0 &&
              d >= 0 &&
              (c <= n &&
                this.everMovedUp &&
                a.canScrollUp() &&
                (!r || r.distance > c) &&
                (r = { scrollCache: a, name: "top", distance: c }),
              d <= n &&
                this.everMovedDown &&
                a.canScrollDown() &&
                (!r || r.distance > d) &&
                (r = { scrollCache: a, name: "bottom", distance: d }),
              l <= n &&
                this.everMovedLeft &&
                a.canScrollLeft() &&
                (!r || r.distance > l) &&
                (r = { scrollCache: a, name: "left", distance: l }),
              u <= n &&
                this.everMovedRight &&
                a.canScrollRight() &&
                (!r || r.distance > u) &&
                (r = { scrollCache: a, name: "right", distance: u }));
          }
          return r;
        }),
        (e.prototype.buildCaches = function (e) {
          return this.queryScrollEls(e).map(function (e) {
            return e === window ? new Os(!1) : new Hs(e, !1);
          });
        }),
        (e.prototype.queryScrollEls = function (e) {
          for (var t = [], n = 0, r = this.scrollQuery; n < r.length; n++) {
            var o = r[n];
            "object" == typeof o
              ? t.push(o)
              : t.push.apply(
                  t,
                  Array.prototype.slice.call(Le(e).querySelectorAll(o))
                );
          }
          return t;
        }),
        e
      );
    })(),
    Us = (function (e) {
      function t(t, n) {
        var r = e.call(this, t) || this;
        (r.containerEl = t),
          (r.delay = null),
          (r.minDistance = 0),
          (r.touchScrollAllowed = !0),
          (r.mirrorNeedsRevert = !1),
          (r.isInteracting = !1),
          (r.isDragging = !1),
          (r.isDelayEnded = !1),
          (r.isDistanceSurpassed = !1),
          (r.delayTimeoutId = null),
          (r.onPointerDown = function (e) {
            r.isDragging ||
              ((r.isInteracting = !0),
              (r.isDelayEnded = !1),
              (r.isDistanceSurpassed = !1),
              Ke(document.body),
              Je(document.body),
              e.isTouch || e.origEvent.preventDefault(),
              r.emitter.trigger("pointerdown", e),
              r.isInteracting &&
                !r.pointer.shouldIgnoreMove &&
                (r.mirror.setIsVisible(!1),
                r.mirror.start(e.subjectEl, e.pageX, e.pageY),
                r.startDelay(e),
                r.minDistance || r.handleDistanceSurpassed(e)));
          }),
          (r.onPointerMove = function (e) {
            if (r.isInteracting) {
              if (
                (r.emitter.trigger("pointermove", e), !r.isDistanceSurpassed)
              ) {
                var t = r.minDistance,
                  n = e.deltaX,
                  o = e.deltaY;
                n * n + o * o >= t * t && r.handleDistanceSurpassed(e);
              }
              r.isDragging &&
                ("scroll" !== e.origEvent.type &&
                  (r.mirror.handleMove(e.pageX, e.pageY),
                  r.autoScroller.handleMove(e.pageX, e.pageY)),
                r.emitter.trigger("dragmove", e));
            }
          }),
          (r.onPointerUp = function (e) {
            r.isInteracting &&
              ((r.isInteracting = !1),
              $e(document.body),
              Qe(document.body),
              r.emitter.trigger("pointerup", e),
              r.isDragging && (r.autoScroller.stop(), r.tryStopDrag(e)),
              r.delayTimeoutId &&
                (clearTimeout(r.delayTimeoutId), (r.delayTimeoutId = null)));
          });
        var o = (r.pointer = new Ms(t));
        return (
          o.emitter.on("pointerdown", r.onPointerDown),
          o.emitter.on("pointermove", r.onPointerMove),
          o.emitter.on("pointerup", r.onPointerUp),
          n && (o.selector = n),
          (r.mirror = new Ps()),
          (r.autoScroller = new Ls()),
          r
        );
      }
      return (
        n(t, e),
        (t.prototype.destroy = function () {
          this.pointer.destroy(), this.onPointerUp({});
        }),
        (t.prototype.startDelay = function (e) {
          var t = this;
          "number" == typeof this.delay
            ? (this.delayTimeoutId = setTimeout(function () {
                (t.delayTimeoutId = null), t.handleDelayEnd(e);
              }, this.delay))
            : this.handleDelayEnd(e);
        }),
        (t.prototype.handleDelayEnd = function (e) {
          (this.isDelayEnded = !0), this.tryStartDrag(e);
        }),
        (t.prototype.handleDistanceSurpassed = function (e) {
          (this.isDistanceSurpassed = !0), this.tryStartDrag(e);
        }),
        (t.prototype.tryStartDrag = function (e) {
          this.isDelayEnded &&
            this.isDistanceSurpassed &&
            ((this.pointer.wasTouchScroll && !this.touchScrollAllowed) ||
              ((this.isDragging = !0),
              (this.mirrorNeedsRevert = !1),
              this.autoScroller.start(e.pageX, e.pageY, this.containerEl),
              this.emitter.trigger("dragstart", e),
              !1 === this.touchScrollAllowed &&
                this.pointer.cancelTouchScroll()));
        }),
        (t.prototype.tryStopDrag = function (e) {
          this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, e));
        }),
        (t.prototype.stopDrag = function (e) {
          (this.isDragging = !1), this.emitter.trigger("dragend", e);
        }),
        (t.prototype.setIgnoreMove = function (e) {
          this.pointer.shouldIgnoreMove = e;
        }),
        (t.prototype.setMirrorIsVisible = function (e) {
          this.mirror.setIsVisible(e);
        }),
        (t.prototype.setMirrorNeedsRevert = function (e) {
          this.mirrorNeedsRevert = e;
        }),
        (t.prototype.setAutoScrollEnabled = function (e) {
          this.autoScroller.isEnabled = e;
        }),
        t
      );
    })(sa),
    Ws = (function () {
      function e(e) {
        (this.origRect = wo(e)),
          (this.scrollCaches = _o(e).map(function (e) {
            return new Hs(e, !0);
          }));
      }
      return (
        (e.prototype.destroy = function () {
          for (var e = 0, t = this.scrollCaches; e < t.length; e++)
            t[e].destroy();
        }),
        (e.prototype.computeLeft = function () {
          for (
            var e = this.origRect.left, t = 0, n = this.scrollCaches;
            t < n.length;
            t++
          ) {
            var r = n[t];
            e += r.origScrollLeft - r.getScrollLeft();
          }
          return e;
        }),
        (e.prototype.computeTop = function () {
          for (
            var e = this.origRect.top, t = 0, n = this.scrollCaches;
            t < n.length;
            t++
          ) {
            var r = n[t];
            e += r.origScrollTop - r.getScrollTop();
          }
          return e;
        }),
        (e.prototype.isWithinClipping = function (e, t) {
          for (
            var n, r = { left: e, top: t }, o = 0, i = this.scrollCaches;
            o < i.length;
            o++
          ) {
            var a = i[o];
            if (
              (void 0,
              "HTML" !== (n = a.getEventTarget().tagName) &&
                "BODY" !== n &&
                !no(r, a.clientRect))
            )
              return !1;
          }
          return !0;
        }),
        e
      );
    })(),
    Vs = (function () {
      function e(e, t) {
        var n = this;
        (this.useSubjectCenter = !1),
          (this.requireInitial = !0),
          (this.initialHit = null),
          (this.movingHit = null),
          (this.finalHit = null),
          (this.handlePointerDown = function (e) {
            var t = n.dragging;
            (n.initialHit = null),
              (n.movingHit = null),
              (n.finalHit = null),
              n.prepareHits(),
              n.processFirstCoord(e),
              n.initialHit || !n.requireInitial
                ? (t.setIgnoreMove(!1), n.emitter.trigger("pointerdown", e))
                : t.setIgnoreMove(!0);
          }),
          (this.handleDragStart = function (e) {
            n.emitter.trigger("dragstart", e), n.handleMove(e, !0);
          }),
          (this.handleDragMove = function (e) {
            n.emitter.trigger("dragmove", e), n.handleMove(e);
          }),
          (this.handlePointerUp = function (e) {
            n.releaseHits(), n.emitter.trigger("pointerup", e);
          }),
          (this.handleDragEnd = function (e) {
            n.movingHit && n.emitter.trigger("hitupdate", null, !0, e),
              (n.finalHit = n.movingHit),
              (n.movingHit = null),
              n.emitter.trigger("dragend", e);
          }),
          (this.droppableStore = t),
          e.emitter.on("pointerdown", this.handlePointerDown),
          e.emitter.on("dragstart", this.handleDragStart),
          e.emitter.on("dragmove", this.handleDragMove),
          e.emitter.on("pointerup", this.handlePointerUp),
          e.emitter.on("dragend", this.handleDragEnd),
          (this.dragging = e),
          (this.emitter = new To());
      }
      return (
        (e.prototype.processFirstCoord = function (e) {
          var t,
            n = { left: e.pageX, top: e.pageY },
            r = n,
            o = e.subjectEl;
          o instanceof HTMLElement && (r = oo(r, (t = wo(o))));
          var i = (this.initialHit = this.queryHitForOffset(r.left, r.top));
          if (i) {
            if (this.useSubjectCenter && t) {
              var a = ro(t, i.rect);
              a && (r = io(a));
            }
            this.coordAdjust = ao(r, n);
          } else this.coordAdjust = { left: 0, top: 0 };
        }),
        (e.prototype.handleMove = function (e, t) {
          var n = this.queryHitForOffset(
            e.pageX + this.coordAdjust.left,
            e.pageY + this.coordAdjust.top
          );
          (!t && Fs(this.movingHit, n)) ||
            ((this.movingHit = n), this.emitter.trigger("hitupdate", n, !1, e));
        }),
        (e.prototype.prepareHits = function () {
          this.offsetTrackers = It(this.droppableStore, function (e) {
            return e.component.prepareHits(), new Ws(e.el);
          });
        }),
        (e.prototype.releaseHits = function () {
          var e = this.offsetTrackers;
          for (var t in e) e[t].destroy();
          this.offsetTrackers = {};
        }),
        (e.prototype.queryHitForOffset = function (e, t) {
          var n = this.droppableStore,
            r = this.offsetTrackers,
            o = null;
          for (var i in n) {
            var a = n[i].component,
              s = r[i];
            if (s && s.isWithinClipping(e, t)) {
              var l = s.computeLeft(),
                u = s.computeTop(),
                c = e - l,
                d = t - u,
                p = s.origRect,
                f = p.right - p.left,
                h = p.bottom - p.top;
              if (c >= 0 && c < f && d >= 0 && d < h) {
                var v = a.queryHit(c, d, f, h);
                v &&
                  nr(v.dateProfile.activeRange, v.dateSpan.range) &&
                  (!o || v.layer > o.layer) &&
                  ((v.componentId = i),
                  (v.context = a.context),
                  (v.rect.left += l),
                  (v.rect.right += l),
                  (v.rect.top += u),
                  (v.rect.bottom += u),
                  (o = v));
              }
            }
          }
          return o;
        }),
        e
      );
    })();
  function Fs(e, t) {
    return (
      (!e && !t) || (Boolean(e) === Boolean(t) && Dr(e.dateSpan, t.dateSpan))
    );
  }
  function Bs(e, t) {
    for (
      var n, o, i = {}, a = 0, s = t.pluginHooks.datePointTransforms;
      a < s.length;
      a++
    ) {
      var l = s[a];
      r(i, l(e, t));
    }
    return (
      r(
        i,
        ((n = e),
        {
          date: (o = t.dateEnv).toDate(n.range.start),
          dateStr: o.formatIso(n.range.start, { omitTime: n.allDay }),
          allDay: n.allDay,
        })
      ),
      i
    );
  }
  var zs = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this;
        (n.handlePointerDown = function (e) {
          var t = n.dragging,
            r = e.origEvent.target;
          t.setIgnoreMove(!n.component.isValidDateDownEl(r));
        }),
          (n.handleDragEnd = function (e) {
            var t = n.component;
            if (!n.dragging.pointer.wasTouchScroll) {
              var o = n.hitDragging,
                i = o.initialHit,
                a = o.finalHit;
              if (i && a && Fs(i, a)) {
                var s = t.context,
                  l = r(r({}, Bs(i.dateSpan, s)), {
                    dayEl: i.dayEl,
                    jsEvent: e.origEvent,
                    view: s.viewApi || s.calendarApi.view,
                  });
                s.emitter.trigger("dateClick", l);
              }
            }
          }),
          (n.dragging = new Us(t.el)),
          (n.dragging.autoScroller.isEnabled = !1);
        var o = (n.hitDragging = new Vs(n.dragging, ia(t)));
        return (
          o.emitter.on("pointerdown", n.handlePointerDown),
          o.emitter.on("dragend", n.handleDragEnd),
          n
        );
      }
      return (
        n(t, e),
        (t.prototype.destroy = function () {
          this.dragging.destroy();
        }),
        t
      );
    })(ra),
    js = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this;
        (n.dragSelection = null),
          (n.handlePointerDown = function (e) {
            var t = n,
              r = t.component,
              o = t.dragging,
              i =
                r.context.options.selectable &&
                r.isValidDateDownEl(e.origEvent.target);
            o.setIgnoreMove(!i),
              (o.delay = e.isTouch
                ? (function (e) {
                    var t = e.context.options,
                      n = t.selectLongPressDelay;
                    return null == n && (n = t.longPressDelay), n;
                  })(r)
                : null);
          }),
          (n.handleDragStart = function (e) {
            n.component.context.calendarApi.unselect(e);
          }),
          (n.handleHitUpdate = function (e, t) {
            var o = n.component.context,
              i = null,
              a = !1;
            if (e) {
              var s = n.hitDragging.initialHit;
              (e.componentId === s.componentId &&
                n.isHitComboAllowed &&
                !n.isHitComboAllowed(s, e)) ||
                (i = (function (e, t, n) {
                  var o = e.dateSpan,
                    i = t.dateSpan,
                    a = [
                      o.range.start,
                      o.range.end,
                      i.range.start,
                      i.range.end,
                    ];
                  a.sort(at);
                  for (var s = {}, l = 0, u = n; l < u.length; l++) {
                    var c = (0, u[l])(e, t);
                    if (!1 === c) return null;
                    c && r(s, c);
                  }
                  return (
                    (s.range = { start: a[0], end: a[3] }),
                    (s.allDay = o.allDay),
                    s
                  );
                })(s, e, o.pluginHooks.dateSelectionTransformers)),
                (i && Oa(i, e.dateProfile, o)) || ((a = !0), (i = null));
            }
            i
              ? o.dispatch({ type: "SELECT_DATES", selection: i })
              : t || o.dispatch({ type: "UNSELECT_DATES" }),
              a ? Ze() : Xe(),
              t || (n.dragSelection = i);
          }),
          (n.handlePointerUp = function (e) {
            n.dragSelection &&
              (Rr(n.dragSelection, e, n.component.context),
              (n.dragSelection = null));
          });
        var o = t.component.context.options,
          i = (n.dragging = new Us(t.el));
        (i.touchScrollAllowed = !1),
          (i.minDistance = o.selectMinDistance || 0),
          (i.autoScroller.isEnabled = o.dragScroll);
        var a = (n.hitDragging = new Vs(n.dragging, ia(t)));
        return (
          a.emitter.on("pointerdown", n.handlePointerDown),
          a.emitter.on("dragstart", n.handleDragStart),
          a.emitter.on("hitupdate", n.handleHitUpdate),
          a.emitter.on("pointerup", n.handlePointerUp),
          n
        );
      }
      return (
        n(t, e),
        (t.prototype.destroy = function () {
          this.dragging.destroy();
        }),
        t
      );
    })(ra),
    Gs = (function (e) {
      function t(n) {
        var o = e.call(this, n) || this;
        (o.subjectEl = null),
          (o.subjectSeg = null),
          (o.isDragging = !1),
          (o.eventRange = null),
          (o.relevantEvents = null),
          (o.receivingContext = null),
          (o.validMutation = null),
          (o.mutatedRelevantEvents = null),
          (o.handlePointerDown = function (e) {
            var t = e.origEvent.target,
              n = o,
              r = n.component,
              i = n.dragging,
              a = i.mirror,
              s = r.context.options,
              l = r.context;
            o.subjectEl = e.subjectEl;
            var u = (o.subjectSeg = sr(e.subjectEl)),
              c = (o.eventRange = u.eventRange).instance.instanceId;
            (o.relevantEvents = In(l.getCurrentData().eventStore, c)),
              (i.minDistance = e.isTouch ? 0 : s.eventDragMinDistance),
              (i.delay =
                e.isTouch && c !== r.props.eventSelection
                  ? (function (e) {
                      var t = e.context.options,
                        n = t.eventLongPressDelay;
                      return null == n && (n = t.longPressDelay), n;
                    })(r)
                  : null),
              s.fixedMirrorParent
                ? (a.parentNode = s.fixedMirrorParent)
                : (a.parentNode = Me(t, ".fc")),
              (a.revertDuration = s.dragRevertDuration);
            var d = r.isValidSegDownEl(t) && !Me(t, ".fc-event-resizer");
            i.setIgnoreMove(!d),
              (o.isDragging =
                d && e.subjectEl.classList.contains("fc-event-draggable"));
          }),
          (o.handleDragStart = function (e) {
            var t = o.component.context,
              n = o.eventRange,
              r = n.instance.instanceId;
            e.isTouch
              ? r !== o.component.props.eventSelection &&
                t.dispatch({ type: "SELECT_EVENT", eventInstanceId: r })
              : t.dispatch({ type: "UNSELECT_EVENT" }),
              o.isDragging &&
                (t.calendarApi.unselect(e),
                t.emitter.trigger("eventDragStart", {
                  el: o.subjectEl,
                  event: new Ur(t, n.def, n.instance),
                  jsEvent: e.origEvent,
                  view: t.viewApi,
                }));
          }),
          (o.handleHitUpdate = function (e, t) {
            if (o.isDragging) {
              var n = o.relevantEvents,
                r = o.hitDragging.initialHit,
                i = o.component.context,
                a = null,
                s = null,
                l = null,
                u = !1,
                c = {
                  affectedEvents: n,
                  mutatedEvents: { defs: {}, instances: {} },
                  isEvent: !0,
                };
              if (e) {
                var d = (a = e.context).options;
                i === a || (d.editable && d.droppable)
                  ? (s = (function (e, t, n) {
                      var r = e.dateSpan,
                        o = t.dateSpan,
                        i = r.range.start,
                        a = o.range.start,
                        s = {};
                      r.allDay !== o.allDay &&
                        ((s.allDay = o.allDay),
                        (s.hasEnd = t.context.options.allDayMaintainDuration),
                        o.allDay && (i = yt(i)));
                      var l = Kn(
                        i,
                        a,
                        e.context.dateEnv,
                        e.componentId === t.componentId ? e.largeUnit : null
                      );
                      l.milliseconds && (s.allDay = !1);
                      for (
                        var u = { datesDelta: l, standardProps: s },
                          c = 0,
                          d = n;
                        c < d.length;
                        c++
                      )
                        (0, d[c])(u, e, t);
                      return u;
                    })(
                      r,
                      e,
                      a.getCurrentData().pluginHooks.eventDragMutationMassagers
                    )) &&
                    ((l = xr(n, a.getCurrentData().eventUiBases, s, a)),
                    (c.mutatedEvents = l),
                    Ha(c, e.dateProfile, a) ||
                      ((u = !0),
                      (s = null),
                      (l = null),
                      (c.mutatedEvents = { defs: {}, instances: {} })))
                  : (a = null);
              }
              o.displayDrag(a, c),
                u ? Ze() : Xe(),
                t ||
                  (i === a && Fs(r, e) && (s = null),
                  o.dragging.setMirrorNeedsRevert(!s),
                  o.dragging.setMirrorIsVisible(
                    !e || !Le(o.subjectEl).querySelector(".fc-event-mirror")
                  ),
                  (o.receivingContext = a),
                  (o.validMutation = s),
                  (o.mutatedRelevantEvents = l));
            }
          }),
          (o.handlePointerUp = function () {
            o.isDragging || o.cleanup();
          }),
          (o.handleDragEnd = function (e) {
            if (o.isDragging) {
              var t = o.component.context,
                n = t.viewApi,
                i = o,
                a = i.receivingContext,
                s = i.validMutation,
                l = o.eventRange.def,
                u = o.eventRange.instance,
                c = new Ur(t, l, u),
                d = o.relevantEvents,
                p = o.mutatedRelevantEvents,
                f = o.hitDragging.finalHit;
              if (
                (o.clearDrag(),
                t.emitter.trigger("eventDragStop", {
                  el: o.subjectEl,
                  event: c,
                  jsEvent: e.origEvent,
                  view: n,
                }),
                s)
              ) {
                if (a === t) {
                  var h = new Ur(
                    t,
                    p.defs[l.defId],
                    u ? p.instances[u.instanceId] : null
                  );
                  t.dispatch({ type: "MERGE_EVENTS", eventStore: p });
                  for (
                    var v = {
                        oldEvent: c,
                        event: h,
                        relatedEvents: Vr(p, t, u),
                        revert: function () {
                          t.dispatch({ type: "MERGE_EVENTS", eventStore: d });
                        },
                      },
                      g = {},
                      m = 0,
                      y = t.getCurrentData().pluginHooks.eventDropTransformers;
                    m < y.length;
                    m++
                  ) {
                    var E = y[m];
                    r(g, E(s, t));
                  }
                  t.emitter.trigger(
                    "eventDrop",
                    r(r(r({}, v), g), {
                      el: e.subjectEl,
                      delta: s.datesDelta,
                      jsEvent: e.origEvent,
                      view: n,
                    })
                  ),
                    t.emitter.trigger("eventChange", v);
                } else if (a) {
                  var S = {
                    event: c,
                    relatedEvents: Vr(d, t, u),
                    revert: function () {
                      t.dispatch({ type: "MERGE_EVENTS", eventStore: d });
                    },
                  };
                  t.emitter.trigger(
                    "eventLeave",
                    r(r({}, S), { draggedEl: e.subjectEl, view: n })
                  ),
                    t.dispatch({ type: "REMOVE_EVENTS", eventStore: d }),
                    t.emitter.trigger("eventRemove", S);
                  var b = p.defs[l.defId],
                    D = p.instances[u.instanceId],
                    C = new Ur(a, b, D);
                  a.dispatch({ type: "MERGE_EVENTS", eventStore: p });
                  var w = {
                    event: C,
                    relatedEvents: Vr(p, a, D),
                    revert: function () {
                      a.dispatch({ type: "REMOVE_EVENTS", eventStore: p });
                    },
                  };
                  a.emitter.trigger("eventAdd", w),
                    e.isTouch &&
                      a.dispatch({
                        type: "SELECT_EVENT",
                        eventInstanceId: u.instanceId,
                      }),
                    a.emitter.trigger(
                      "drop",
                      r(r({}, Bs(f.dateSpan, a)), {
                        draggedEl: e.subjectEl,
                        jsEvent: e.origEvent,
                        view: f.context.viewApi,
                      })
                    ),
                    a.emitter.trigger(
                      "eventReceive",
                      r(r({}, w), {
                        draggedEl: e.subjectEl,
                        view: f.context.viewApi,
                      })
                    );
                }
              } else t.emitter.trigger("_noEventDrop");
            }
            o.cleanup();
          });
        var i = o.component.context.options,
          a = (o.dragging = new Us(n.el));
        (a.pointer.selector = t.SELECTOR),
          (a.touchScrollAllowed = !1),
          (a.autoScroller.isEnabled = i.dragScroll);
        var s = (o.hitDragging = new Vs(o.dragging, aa));
        return (
          (s.useSubjectCenter = n.useEventCenter),
          s.emitter.on("pointerdown", o.handlePointerDown),
          s.emitter.on("dragstart", o.handleDragStart),
          s.emitter.on("hitupdate", o.handleHitUpdate),
          s.emitter.on("pointerup", o.handlePointerUp),
          s.emitter.on("dragend", o.handleDragEnd),
          o
        );
      }
      return (
        n(t, e),
        (t.prototype.destroy = function () {
          this.dragging.destroy();
        }),
        (t.prototype.displayDrag = function (e, t) {
          var n = this.component.context,
            r = this.receivingContext;
          r &&
            r !== e &&
            (r === n
              ? r.dispatch({
                  type: "SET_EVENT_DRAG",
                  state: {
                    affectedEvents: t.affectedEvents,
                    mutatedEvents: { defs: {}, instances: {} },
                    isEvent: !0,
                  },
                })
              : r.dispatch({ type: "UNSET_EVENT_DRAG" })),
            e && e.dispatch({ type: "SET_EVENT_DRAG", state: t });
        }),
        (t.prototype.clearDrag = function () {
          var e = this.component.context,
            t = this.receivingContext;
          t && t.dispatch({ type: "UNSET_EVENT_DRAG" }),
            e !== t && e.dispatch({ type: "UNSET_EVENT_DRAG" });
        }),
        (t.prototype.cleanup = function () {
          (this.subjectSeg = null),
            (this.isDragging = !1),
            (this.eventRange = null),
            (this.relevantEvents = null),
            (this.receivingContext = null),
            (this.validMutation = null),
            (this.mutatedRelevantEvents = null);
        }),
        (t.SELECTOR = ".fc-event-draggable, .fc-event-resizable"),
        t
      );
    })(ra),
    qs = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this;
        (n.draggingSegEl = null),
          (n.draggingSeg = null),
          (n.eventRange = null),
          (n.relevantEvents = null),
          (n.validMutation = null),
          (n.mutatedRelevantEvents = null),
          (n.handlePointerDown = function (e) {
            var t = n.component,
              r = sr(n.querySegEl(e)),
              o = (n.eventRange = r.eventRange);
            (n.dragging.minDistance = t.context.options.eventDragMinDistance),
              n.dragging.setIgnoreMove(
                !n.component.isValidSegDownEl(e.origEvent.target) ||
                  (e.isTouch &&
                    n.component.props.eventSelection !== o.instance.instanceId)
              );
          }),
          (n.handleDragStart = function (e) {
            var t = n.component.context,
              r = n.eventRange;
            n.relevantEvents = In(
              t.getCurrentData().eventStore,
              n.eventRange.instance.instanceId
            );
            var o = n.querySegEl(e);
            (n.draggingSegEl = o),
              (n.draggingSeg = sr(o)),
              t.calendarApi.unselect(),
              t.emitter.trigger("eventResizeStart", {
                el: o,
                event: new Ur(t, r.def, r.instance),
                jsEvent: e.origEvent,
                view: t.viewApi,
              });
          }),
          (n.handleHitUpdate = function (e, t, r) {
            var o = n.component.context,
              i = n.relevantEvents,
              a = n.hitDragging.initialHit,
              s = n.eventRange.instance,
              l = null,
              u = null,
              c = !1,
              d = {
                affectedEvents: i,
                mutatedEvents: { defs: {}, instances: {} },
                isEvent: !0,
              };
            e &&
              ((e.componentId === a.componentId &&
                n.isHitComboAllowed &&
                !n.isHitComboAllowed(a, e)) ||
                (l = (function (e, t, n, r) {
                  var o = e.context.dateEnv,
                    i = Kn(
                      e.dateSpan.range.start,
                      t.dateSpan.range.start,
                      o,
                      e.largeUnit
                    );
                  if (n) {
                    if (o.add(r.start, i) < r.end) return { startDelta: i };
                  } else if (o.add(r.end, i) > r.start) return { endDelta: i };
                  return null;
                })(
                  a,
                  e,
                  r.subjectEl.classList.contains("fc-event-resizer-start"),
                  s.range
                ))),
              l &&
                ((u = xr(i, o.getCurrentData().eventUiBases, l, o)),
                (d.mutatedEvents = u),
                Ha(d, e.dateProfile, o) ||
                  ((c = !0), (l = null), (u = null), (d.mutatedEvents = null))),
              u
                ? o.dispatch({ type: "SET_EVENT_RESIZE", state: d })
                : o.dispatch({ type: "UNSET_EVENT_RESIZE" }),
              c ? Ze() : Xe(),
              t ||
                (l && Fs(a, e) && (l = null),
                (n.validMutation = l),
                (n.mutatedRelevantEvents = u));
          }),
          (n.handleDragEnd = function (e) {
            var t = n.component.context,
              o = n.eventRange.def,
              i = n.eventRange.instance,
              a = new Ur(t, o, i),
              s = n.relevantEvents,
              l = n.mutatedRelevantEvents;
            if (
              (t.emitter.trigger("eventResizeStop", {
                el: n.draggingSegEl,
                event: a,
                jsEvent: e.origEvent,
                view: t.viewApi,
              }),
              n.validMutation)
            ) {
              var u = new Ur(
                t,
                l.defs[o.defId],
                i ? l.instances[i.instanceId] : null
              );
              t.dispatch({ type: "MERGE_EVENTS", eventStore: l });
              var c = {
                oldEvent: a,
                event: u,
                relatedEvents: Vr(l, t, i),
                revert: function () {
                  t.dispatch({ type: "MERGE_EVENTS", eventStore: s });
                },
              };
              t.emitter.trigger(
                "eventResize",
                r(r({}, c), {
                  el: n.draggingSegEl,
                  startDelta: n.validMutation.startDelta || zt(0),
                  endDelta: n.validMutation.endDelta || zt(0),
                  jsEvent: e.origEvent,
                  view: t.viewApi,
                })
              ),
                t.emitter.trigger("eventChange", c);
            } else t.emitter.trigger("_noEventResize");
            (n.draggingSeg = null),
              (n.relevantEvents = null),
              (n.validMutation = null);
          });
        var o = t.component,
          i = (n.dragging = new Us(t.el));
        (i.pointer.selector = ".fc-event-resizer"),
          (i.touchScrollAllowed = !1),
          (i.autoScroller.isEnabled = o.context.options.dragScroll);
        var a = (n.hitDragging = new Vs(n.dragging, ia(t)));
        return (
          a.emitter.on("pointerdown", n.handlePointerDown),
          a.emitter.on("dragstart", n.handleDragStart),
          a.emitter.on("hitupdate", n.handleHitUpdate),
          a.emitter.on("dragend", n.handleDragEnd),
          n
        );
      }
      return (
        n(t, e),
        (t.prototype.destroy = function () {
          this.dragging.destroy();
        }),
        (t.prototype.querySegEl = function (e) {
          return Me(e.subjectEl, ".fc-event");
        }),
        t
      );
    })(ra),
    Ys = (function () {
      function e(e) {
        var t = this;
        (this.context = e),
          (this.isRecentPointerDateSelect = !1),
          (this.matchesCancel = !1),
          (this.matchesEvent = !1),
          (this.onSelect = function (e) {
            e.jsEvent && (t.isRecentPointerDateSelect = !0);
          }),
          (this.onDocumentPointerDown = function (e) {
            var n = t.context.options.unselectCancel,
              r = Ae(e.origEvent);
            (t.matchesCancel = !!Me(r, n)),
              (t.matchesEvent = !!Me(r, Gs.SELECTOR));
          }),
          (this.onDocumentPointerUp = function (e) {
            var n = t.context,
              r = t.documentPointer,
              o = n.getCurrentData();
            if (!r.wasTouchScroll) {
              if (o.dateSelection && !t.isRecentPointerDateSelect) {
                var i = n.options.unselectAuto;
                !i || (i && t.matchesCancel) || n.calendarApi.unselect(e);
              }
              o.eventSelection &&
                !t.matchesEvent &&
                n.dispatch({ type: "UNSELECT_EVENT" });
            }
            t.isRecentPointerDateSelect = !1;
          });
        var n = (this.documentPointer = new Ms(document));
        (n.shouldIgnoreMove = !0),
          (n.shouldWatchScroll = !1),
          n.emitter.on("pointerdown", this.onDocumentPointerDown),
          n.emitter.on("pointerup", this.onDocumentPointerUp),
          e.emitter.on("select", this.onSelect);
      }
      return (
        (e.prototype.destroy = function () {
          this.context.emitter.off("select", this.onSelect),
            this.documentPointer.destroy();
        }),
        e
      );
    })(),
    Zs = { fixedMirrorParent: kn },
    Xs = {
      dateClick: kn,
      eventDragStart: kn,
      eventDragStop: kn,
      eventDrop: kn,
      eventResizeStart: kn,
      eventResizeStop: kn,
      eventResize: kn,
      drop: kn,
      eventReceive: kn,
      eventLeave: kn,
    },
    Ks = (function () {
      function e(e, t) {
        var n = this;
        (this.receivingContext = null),
          (this.droppableEvent = null),
          (this.suppliedDragMeta = null),
          (this.dragMeta = null),
          (this.handleDragStart = function (e) {
            n.dragMeta = n.buildDragMeta(e.subjectEl);
          }),
          (this.handleHitUpdate = function (e, t, o) {
            var i = n.hitDragging.dragging,
              a = null,
              s = null,
              l = !1,
              u = {
                affectedEvents: { defs: {}, instances: {} },
                mutatedEvents: { defs: {}, instances: {} },
                isEvent: n.dragMeta.create,
              };
            e &&
              ((a = e.context),
              n.canDropElOnCalendar(o.subjectEl, a) &&
                ((s = (function (e, t, n) {
                  for (
                    var o = r({}, t.leftoverProps),
                      i = 0,
                      a = n.pluginHooks.externalDefTransforms;
                    i < a.length;
                    i++
                  ) {
                    var s = a[i];
                    r(o, s(e, t));
                  }
                  var l = jn(o, n),
                    u = qn(
                      l.refined,
                      l.extra,
                      t.sourceId,
                      e.allDay,
                      n.options.forceEventDuration || Boolean(t.duration),
                      n
                    ),
                    c = e.range.start;
                  e.allDay &&
                    t.startTime &&
                    (c = n.dateEnv.add(c, t.startTime));
                  var d = t.duration
                    ? n.dateEnv.add(c, t.duration)
                    : kr(e.allDay, c, n);
                  return {
                    def: u,
                    instance: Tt(u.defId, { start: c, end: d }),
                  };
                })(e.dateSpan, n.dragMeta, a)),
                (u.mutatedEvents = Mn(s)),
                (l = !Ha(u, e.dateProfile, a)) &&
                  ((u.mutatedEvents = { defs: {}, instances: {} }),
                  (s = null)))),
              n.displayDrag(a, u),
              i.setMirrorIsVisible(
                t || !s || !document.querySelector(".fc-event-mirror")
              ),
              l ? Ze() : Xe(),
              t ||
                (i.setMirrorNeedsRevert(!s),
                (n.receivingContext = a),
                (n.droppableEvent = s));
          }),
          (this.handleDragEnd = function (e) {
            var t = n,
              o = t.receivingContext,
              i = t.droppableEvent;
            if ((n.clearDrag(), o && i)) {
              var a = n.hitDragging.finalHit,
                s = a.context.viewApi,
                l = n.dragMeta;
              if (
                (o.emitter.trigger(
                  "drop",
                  r(r({}, Bs(a.dateSpan, o)), {
                    draggedEl: e.subjectEl,
                    jsEvent: e.origEvent,
                    view: s,
                  })
                ),
                l.create)
              ) {
                var u = Mn(i);
                o.dispatch({ type: "MERGE_EVENTS", eventStore: u }),
                  e.isTouch &&
                    o.dispatch({
                      type: "SELECT_EVENT",
                      eventInstanceId: i.instance.instanceId,
                    }),
                  o.emitter.trigger("eventReceive", {
                    event: new Ur(o, i.def, i.instance),
                    relatedEvents: [],
                    revert: function () {
                      o.dispatch({ type: "REMOVE_EVENTS", eventStore: u });
                    },
                    draggedEl: e.subjectEl,
                    view: s,
                  });
              }
            }
            (n.receivingContext = null), (n.droppableEvent = null);
          });
        var o = (this.hitDragging = new Vs(e, aa));
        (o.requireInitial = !1),
          o.emitter.on("dragstart", this.handleDragStart),
          o.emitter.on("hitupdate", this.handleHitUpdate),
          o.emitter.on("dragend", this.handleDragEnd),
          (this.suppliedDragMeta = t);
      }
      return (
        (e.prototype.buildDragMeta = function (e) {
          return "object" == typeof this.suppliedDragMeta
            ? ca(this.suppliedDragMeta)
            : "function" == typeof this.suppliedDragMeta
            ? ca(this.suppliedDragMeta(e))
            : ca(
                (t = (function (e, t) {
                  var n = la.dataAttrPrefix,
                    r = (n ? n + "-" : "") + "event";
                  return e.getAttribute("data-" + r) || "";
                })(e))
                  ? JSON.parse(t)
                  : { create: !1 }
              );
          var t;
        }),
        (e.prototype.displayDrag = function (e, t) {
          var n = this.receivingContext;
          n && n !== e && n.dispatch({ type: "UNSET_EVENT_DRAG" }),
            e && e.dispatch({ type: "SET_EVENT_DRAG", state: t });
        }),
        (e.prototype.clearDrag = function () {
          this.receivingContext &&
            this.receivingContext.dispatch({ type: "UNSET_EVENT_DRAG" });
        }),
        (e.prototype.canDropElOnCalendar = function (e, t) {
          var n = t.options.dropAccept;
          return "function" == typeof n
            ? n.call(t.calendarApi, e)
            : "string" != typeof n || !n || Boolean(Ie(e, n));
        }),
        e
      );
    })();
  la.dataAttrPrefix = "";
  var $s = (function () {
      function e(e, t) {
        var n = this;
        void 0 === t && (t = {}),
          (this.handlePointerDown = function (e) {
            var t = n.dragging,
              r = n.settings,
              o = r.minDistance,
              i = r.longPressDelay;
            (t.minDistance =
              null != o ? o : e.isTouch ? 0 : Sn.eventDragMinDistance),
              (t.delay = e.isTouch ? (null != i ? i : Sn.longPressDelay) : 0);
          }),
          (this.handleDragStart = function (e) {
            e.isTouch &&
              n.dragging.delay &&
              e.subjectEl.classList.contains("fc-event") &&
              n.dragging.mirror
                .getMirrorEl()
                .classList.add("fc-event-selected");
          }),
          (this.settings = t);
        var r = (this.dragging = new Us(e));
        (r.touchScrollAllowed = !1),
          null != t.itemSelector && (r.pointer.selector = t.itemSelector),
          null != t.appendTo && (r.mirror.parentNode = t.appendTo),
          r.emitter.on("pointerdown", this.handlePointerDown),
          r.emitter.on("dragstart", this.handleDragStart),
          new Ks(r, t.eventData);
      }
      return (
        (e.prototype.destroy = function () {
          this.dragging.destroy();
        }),
        e
      );
    })(),
    Js = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this;
        (n.shouldIgnoreMove = !1),
          (n.mirrorSelector = ""),
          (n.currentMirrorEl = null),
          (n.handlePointerDown = function (e) {
            n.emitter.trigger("pointerdown", e),
              n.shouldIgnoreMove || n.emitter.trigger("dragstart", e);
          }),
          (n.handlePointerMove = function (e) {
            n.shouldIgnoreMove || n.emitter.trigger("dragmove", e);
          }),
          (n.handlePointerUp = function (e) {
            n.emitter.trigger("pointerup", e),
              n.shouldIgnoreMove || n.emitter.trigger("dragend", e);
          });
        var r = (n.pointer = new Ms(t));
        return (
          r.emitter.on("pointerdown", n.handlePointerDown),
          r.emitter.on("pointermove", n.handlePointerMove),
          r.emitter.on("pointerup", n.handlePointerUp),
          n
        );
      }
      return (
        n(t, e),
        (t.prototype.destroy = function () {
          this.pointer.destroy();
        }),
        (t.prototype.setIgnoreMove = function (e) {
          this.shouldIgnoreMove = e;
        }),
        (t.prototype.setMirrorIsVisible = function (e) {
          if (e)
            this.currentMirrorEl &&
              ((this.currentMirrorEl.style.visibility = ""),
              (this.currentMirrorEl = null));
          else {
            var t = this.mirrorSelector
              ? document.querySelector(this.mirrorSelector)
              : null;
            t && ((this.currentMirrorEl = t), (t.style.visibility = "hidden"));
          }
        }),
        t
      );
    })(sa),
    Qs = (function () {
      function e(e, t) {
        var n = document;
        e === document || e instanceof Element
          ? ((n = e), (t = t || {}))
          : (t = e || {});
        var r = (this.dragging = new Js(n));
        "string" == typeof t.itemSelector
          ? (r.pointer.selector = t.itemSelector)
          : n === document && (r.pointer.selector = "[data-event]"),
          "string" == typeof t.mirrorSelector &&
            (r.mirrorSelector = t.mirrorSelector),
          new Ks(r, t.eventData);
      }
      return (
        (e.prototype.destroy = function () {
          this.dragging.destroy();
        }),
        e
      );
    })(),
    el = $o({
      componentInteractions: [zs, js, Gs, qs],
      calendarInteractions: [Ys],
      elementDraggingImpl: Us,
      optionRefiners: Zs,
      listenerRefiners: Xs,
    }),
    tl = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (t.headerElRef = Ao()), t;
      }
      return (
        n(t, e),
        (t.prototype.renderSimpleLayout = function (e, t) {
          var n = this.props,
            r = this.context,
            o = [],
            i = ns(r.options);
          return (
            e &&
              o.push({
                type: "header",
                key: "header",
                isSticky: i,
                chunk: {
                  elRef: this.headerElRef,
                  tableClassName: "fc-col-header",
                  rowContent: e,
                },
              }),
            o.push({
              type: "body",
              key: "body",
              liquid: !0,
              chunk: { content: t },
            }),
            Ho(li, { viewSpec: r.viewSpec }, function (e, t) {
              return Ho(
                "div",
                { ref: e, className: ["fc-daygrid"].concat(t).join(" ") },
                Ho(os, {
                  liquid: !n.isHeightAuto && !n.forPrint,
                  collapsibleWidth: n.forPrint,
                  cols: [],
                  sections: o,
                })
              );
            })
          );
        }),
        (t.prototype.renderHScrollLayout = function (e, t, n, r) {
          var o = this.context.pluginHooks.scrollGridImpl;
          if (!o) throw new Error("No ScrollGrid implementation");
          var i = this.props,
            a = this.context,
            s = !i.forPrint && ns(a.options),
            l = !i.forPrint && rs(a.options),
            u = [];
          return (
            e &&
              u.push({
                type: "header",
                key: "header",
                isSticky: s,
                chunks: [
                  {
                    key: "main",
                    elRef: this.headerElRef,
                    tableClassName: "fc-col-header",
                    rowContent: e,
                  },
                ],
              }),
            u.push({
              type: "body",
              key: "body",
              liquid: !0,
              chunks: [{ key: "main", content: t }],
            }),
            l &&
              u.push({
                type: "footer",
                key: "footer",
                isSticky: !0,
                chunks: [{ key: "main", content: ts }],
              }),
            Ho(li, { viewSpec: a.viewSpec }, function (e, t) {
              return Ho(
                "div",
                { ref: e, className: ["fc-daygrid"].concat(t).join(" ") },
                Ho(o, {
                  liquid: !i.isHeightAuto && !i.forPrint,
                  collapsibleWidth: i.forPrint,
                  colGroups: [{ cols: [{ span: n, minWidth: r }] }],
                  sections: u,
                })
              );
            })
          );
        }),
        t
      );
    })(Ko);
  function nl(e, t) {
    for (var n = [], r = 0; r < t; r += 1) n[r] = [];
    for (var o = 0, i = e; o < i.length; o++) {
      var a = i[o];
      n[a.row].push(a);
    }
    return n;
  }
  function rl(e, t) {
    for (var n = [], r = 0; r < t; r += 1) n[r] = [];
    for (var o = 0, i = e; o < i.length; o++) {
      var a = i[o];
      n[a.firstCol].push(a);
    }
    return n;
  }
  function ol(e, t) {
    var n = [];
    if (e) {
      for (a = 0; a < t; a += 1)
        n[a] = {
          affectedInstances: e.affectedInstances,
          isEvent: e.isEvent,
          segs: [],
        };
      for (var r = 0, o = e.segs; r < o.length; r++) {
        var i = o[r];
        n[i.row].segs.push(i);
      }
    } else for (var a = 0; a < t; a += 1) n[a] = null;
    return n;
  }
  var il = (function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return (
      n(t, e),
      (t.prototype.render = function () {
        var e = this.props,
          t = go(this.context, e.date);
        return Ho(
          cs,
          {
            date: e.date,
            dateProfile: e.dateProfile,
            todayRange: e.todayRange,
            showDayNumber: e.showDayNumber,
            extraHookProps: e.extraHookProps,
            defaultContent: al,
          },
          function (n, o) {
            return (
              (o || e.forceDayTop) &&
              Ho(
                "div",
                { className: "fc-daygrid-day-top", ref: n },
                Ho(
                  "a",
                  r(
                    { id: e.dayNumberId, className: "fc-daygrid-day-number" },
                    t
                  ),
                  o || Ho(Lo, null, " ")
                )
              )
            );
          }
        );
      }),
      t
    );
  })(qo);
  function al(e) {
    return e.dayNumberText;
  }
  var sl = yn({
    hour: "numeric",
    minute: "2-digit",
    omitZeroMinute: !0,
    meridiem: "narrow",
  });
  function ll(e) {
    var t = e.eventRange.ui.display;
    return (
      "list-item" === t ||
      ("auto" === t &&
        !e.eventRange.def.allDay &&
        e.firstCol === e.lastCol &&
        e.isStart &&
        e.isEnd)
    );
  }
  var ul = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          var e = this.props;
          return Ho(
            as,
            r({}, e, {
              extraClassNames: [
                "fc-daygrid-event",
                "fc-daygrid-block-event",
                "fc-h-event",
              ],
              defaultTimeFormat: sl,
              defaultDisplayEventEnd: e.defaultDisplayEventEnd,
              disableResizing: !e.seg.eventRange.def.allDay,
            })
          );
        }),
        t
      );
    })(qo),
    cl = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          var e = this.props,
            t = this.context,
            n = t.options.eventTimeFormat || sl,
            o = vr(e.seg, n, t, !0, e.defaultDisplayEventEnd);
          return Ho(
            is,
            {
              seg: e.seg,
              timeText: o,
              defaultContent: dl,
              isDragging: e.isDragging,
              isResizing: !1,
              isDateSelecting: !1,
              isSelected: e.isSelected,
              isPast: e.isPast,
              isFuture: e.isFuture,
              isToday: e.isToday,
            },
            function (n, o, i, a) {
              return Ho(
                "a",
                r(
                  {
                    className: ["fc-daygrid-event", "fc-daygrid-dot-event"]
                      .concat(o)
                      .join(" "),
                    ref: n,
                  },
                  Er(e.seg, t)
                ),
                a
              );
            }
          );
        }),
        t
      );
    })(qo);
  function dl(e) {
    return Ho(
      Lo,
      null,
      Ho("div", {
        className: "fc-daygrid-event-dot",
        style: { borderColor: e.borderColor || e.backgroundColor },
      }),
      e.timeText && Ho("div", { className: "fc-event-time" }, e.timeText),
      Ho(
        "div",
        { className: "fc-event-title" },
        e.event.title || Ho(Lo, null, " ")
      )
    );
  }
  var pl = (function (e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this;
      return (t.compileSegs = nn(fl)), t;
    }
    return (
      n(t, e),
      (t.prototype.render = function () {
        var e = this.props,
          t = this.compileSegs(e.singlePlacements),
          n = t.allSegs,
          o = t.invisibleSegs;
        return Ho(
          Ss,
          {
            dateProfile: e.dateProfile,
            todayRange: e.todayRange,
            allDayDate: e.allDayDate,
            moreCnt: e.moreCnt,
            allSegs: n,
            hiddenSegs: o,
            alignmentElRef: e.alignmentElRef,
            alignGridTop: e.alignGridTop,
            extraDateSpan: e.extraDateSpan,
            popoverContent: function () {
              var t =
                (e.eventDrag ? e.eventDrag.affectedInstances : null) ||
                (e.eventResize ? e.eventResize.affectedInstances : null) ||
                {};
              return Ho(
                Lo,
                null,
                n.map(function (n) {
                  var o = n.eventRange.instance.instanceId;
                  return Ho(
                    "div",
                    {
                      className: "fc-daygrid-event-harness",
                      key: o,
                      style: { visibility: t[o] ? "hidden" : "" },
                    },
                    ll(n)
                      ? Ho(
                          cl,
                          r(
                            {
                              seg: n,
                              isDragging: !1,
                              isSelected: o === e.eventSelection,
                              defaultDisplayEventEnd: !1,
                            },
                            gr(n, e.todayRange)
                          )
                        )
                      : Ho(
                          ul,
                          r(
                            {
                              seg: n,
                              isDragging: !1,
                              isResizing: !1,
                              isDateSelecting: !1,
                              isSelected: o === e.eventSelection,
                              defaultDisplayEventEnd: !1,
                            },
                            gr(n, e.todayRange)
                          )
                        )
                  );
                })
              );
            },
          },
          function (e, t, n, o, i, a, s, l) {
            return Ho(
              "a",
              r(
                {
                  ref: e,
                  className: ["fc-daygrid-more-link"].concat(t).join(" "),
                  title: a,
                  "aria-expanded": s,
                  "aria-controls": l,
                },
                je(i)
              ),
              o
            );
          }
        );
      }),
      t
    );
  })(qo);
  function fl(e) {
    for (var t = [], n = [], r = 0, o = e; r < o.length; r++) {
      var i = o[r];
      t.push(i.seg), i.isVisible || n.push(i.seg);
    }
    return { allSegs: t, invisibleSegs: n };
  }
  var hl = yn({ week: "narrow" }),
    vl = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.rootElRef = Ao()),
          (t.state = { dayNumberId: We() }),
          (t.handleRootEl = function (e) {
            Xo(t.rootElRef, e), Xo(t.props.elRef, e);
          }),
          t
        );
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          var e = this,
            t = e.context,
            n = e.props,
            o = e.state,
            i = e.rootElRef,
            a = n.date,
            s = n.dateProfile,
            l = go(t, a, "week");
          return Ho(
            ps,
            {
              date: a,
              dateProfile: s,
              todayRange: n.todayRange,
              showDayNumber: n.showDayNumber,
              extraHookProps: n.extraHookProps,
              elRef: this.handleRootEl,
            },
            function (e, t, u, c) {
              return Ho(
                "td",
                r(
                  {
                    ref: e,
                    role: "gridcell",
                    className: ["fc-daygrid-day"]
                      .concat(t, n.extraClassNames || [])
                      .join(" "),
                  },
                  u,
                  n.extraDataAttrs,
                  n.showDayNumber ? { "aria-labelledby": o.dayNumberId } : {}
                ),
                Ho(
                  "div",
                  {
                    className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
                    ref: n.innerElRef,
                  },
                  n.showWeekNumber &&
                    Ho(
                      gs,
                      { date: a, defaultFormat: hl },
                      function (e, t, n, o) {
                        return Ho(
                          "a",
                          r(
                            {
                              ref: e,
                              className: ["fc-daygrid-week-number"]
                                .concat(t)
                                .join(" "),
                            },
                            l
                          ),
                          o
                        );
                      }
                    ),
                  !c &&
                    Ho(il, {
                      date: a,
                      dateProfile: s,
                      showDayNumber: n.showDayNumber,
                      dayNumberId: o.dayNumberId,
                      forceDayTop: n.forceDayTop,
                      todayRange: n.todayRange,
                      extraHookProps: n.extraHookProps,
                    }),
                  Ho(
                    "div",
                    {
                      className: "fc-daygrid-day-events",
                      ref: n.fgContentElRef,
                    },
                    n.fgContent,
                    Ho(
                      "div",
                      {
                        className: "fc-daygrid-day-bottom",
                        style: { marginTop: n.moreMarginTop },
                      },
                      Ho(pl, {
                        allDayDate: a,
                        singlePlacements: n.singlePlacements,
                        moreCnt: n.moreCnt,
                        alignmentElRef: i,
                        alignGridTop: !n.showDayNumber,
                        extraDateSpan: n.extraDateSpan,
                        dateProfile: n.dateProfile,
                        eventSelection: n.eventSelection,
                        eventDrag: n.eventDrag,
                        eventResize: n.eventResize,
                        todayRange: n.todayRange,
                      })
                    )
                  ),
                  Ho("div", { className: "fc-daygrid-day-bg" }, n.bgContent)
                )
              );
            }
          );
        }),
        t
      );
    })(Ko);
  function gl(e, t, n, o) {
    if (e.firstCol === t && e.lastCol === n - 1) return e;
    var i = e.eventRange,
      a = i.range,
      s = Qn(a, { start: o[t].date, end: dt(o[n - 1].date, 1) });
    return r(r({}, e), {
      firstCol: t,
      lastCol: n - 1,
      eventRange: {
        def: i.def,
        ui: r(r({}, i.ui), { durationEditable: !1 }),
        instance: i.instance,
        range: s,
      },
      isStart: e.isStart && s.start.valueOf() === a.start.valueOf(),
      isEnd: e.isEnd && s.end.valueOf() === a.end.valueOf(),
    });
  }
  var ml = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (t.hiddenConsumes = !1), (t.forceHidden = {}), t;
      }
      return (
        n(t, e),
        (t.prototype.addSegs = function (t) {
          for (
            var n = this,
              r = e.prototype.addSegs.call(this, t),
              o = this.entriesByLevel,
              i = function (e) {
                return !n.forceHidden[$i(e)];
              },
              a = 0;
            a < o.length;
            a += 1
          )
            o[a] = o[a].filter(i);
          return r;
        }),
        (t.prototype.handleInvalidInsertion = function (t, n, o) {
          var i = this.entriesByLevel,
            a = this.forceHidden,
            s = t.touchingEntry,
            l = t.touchingLevel,
            u = t.touchingLateral;
          if (this.hiddenConsumes && s) {
            var c = $i(s);
            if (!a[c])
              if (this.allowReslicing) {
                var d = r(r({}, s), { span: ea(s.span, n.span) });
                (a[$i(d)] = !0), (i[l][u] = d), this.splitEntry(s, n, o);
              } else (a[c] = !0), o.push(s);
          }
          return e.prototype.handleInvalidInsertion.call(this, t, n, o);
        }),
        t
      );
    })(Xi),
    yl = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.cellElRefs = new ja()),
          (t.frameElRefs = new ja()),
          (t.fgElRefs = new ja()),
          (t.segHarnessRefs = new ja()),
          (t.rootElRef = Ao()),
          (t.state = {
            framePositions: null,
            maxContentHeight: null,
            eventInstanceHeights: {},
          }),
          t
        );
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          var e = this,
            t = this,
            n = t.props,
            r = t.state,
            o = t.context.options,
            i = n.cells.length,
            a = rl(n.businessHourSegs, i),
            s = rl(n.bgEventSegs, i),
            l = rl(this.getHighlightSegs(), i),
            u = rl(this.getMirrorSegs(), i),
            c = (function (e, t, n, r, o, i, a) {
              var s = new ml();
              (s.allowReslicing = !0),
                (s.strictOrder = r),
                !0 === t || !0 === n
                  ? ((s.maxCoord = i), (s.hiddenConsumes = !0))
                  : "number" == typeof t
                  ? (s.maxStackCnt = t)
                  : "number" == typeof n &&
                    ((s.maxStackCnt = n), (s.hiddenConsumes = !0));
              for (var l = [], u = [], c = 0; c < e.length; c += 1) {
                var d = o[(_ = e[c]).eventRange.instance.instanceId];
                null != d
                  ? l.push({
                      index: c,
                      thickness: d,
                      span: { start: _.firstCol, end: _.lastCol + 1 },
                    })
                  : u.push(_);
              }
              for (
                var p = s.addSegs(l),
                  f = (function (e, t, n) {
                    for (
                      var r = (function (e, t) {
                          for (var n = [], r = 0; r < t; r += 1) n.push([]);
                          for (var o = 0, i = e; o < i.length; o++) {
                            var a = i[o];
                            for (r = a.span.start; r < a.span.end; r += 1)
                              n[r].push(a);
                          }
                          return n;
                        })(e, n.length),
                        o = [],
                        i = [],
                        a = [],
                        s = 0;
                      s < n.length;
                      s += 1
                    ) {
                      for (
                        var l = r[s], u = [], c = 0, d = 0, p = 0, f = l;
                        p < f.length;
                        p++
                      ) {
                        var h = t[(y = f[p]).index];
                        u.push({
                          seg: gl(h, s, s + 1, n),
                          isVisible: !0,
                          isAbsolute: !1,
                          absoluteTop: y.levelCoord,
                          marginTop: y.levelCoord - c,
                        }),
                          (c = y.levelCoord + y.thickness);
                      }
                      var v = [];
                      (c = 0), (d = 0);
                      for (var g = 0, m = l; g < m.length; g++) {
                        h = t[(y = m[g]).index];
                        var y,
                          E = y.span.end - y.span.start > 1,
                          S = y.span.start === s;
                        (d += y.levelCoord - c),
                          (c = y.levelCoord + y.thickness),
                          E
                            ? ((d += y.thickness),
                              S &&
                                v.push({
                                  seg: gl(h, y.span.start, y.span.end, n),
                                  isVisible: !0,
                                  isAbsolute: !0,
                                  absoluteTop: y.levelCoord,
                                  marginTop: 0,
                                }))
                            : S &&
                              (v.push({
                                seg: gl(h, y.span.start, y.span.end, n),
                                isVisible: !0,
                                isAbsolute: !1,
                                absoluteTop: y.levelCoord,
                                marginTop: d,
                              }),
                              (d = 0));
                      }
                      o.push(u), i.push(v), a.push(d);
                    }
                    return {
                      singleColPlacements: o,
                      multiColPlacements: i,
                      leftoverMargins: a,
                    };
                  })(s.toRects(), e, a),
                  h = f.singleColPlacements,
                  v = f.multiColPlacements,
                  g = f.leftoverMargins,
                  m = [],
                  y = [],
                  E = 0,
                  S = u;
                E < S.length;
                E++
              ) {
                v[(_ = S[E]).firstCol].push({
                  seg: _,
                  isVisible: !1,
                  isAbsolute: !0,
                  absoluteTop: 0,
                  marginTop: 0,
                });
                for (var b = _.firstCol; b <= _.lastCol; b += 1)
                  h[b].push({
                    seg: gl(_, b, b + 1, a),
                    isVisible: !1,
                    isAbsolute: !1,
                    absoluteTop: 0,
                    marginTop: 0,
                  });
              }
              for (b = 0; b < a.length; b += 1) m.push(0);
              for (var D = 0, C = p; D < C.length; D++) {
                var w = C[D],
                  _ = e[w.index],
                  R = w.span;
                for (
                  v[R.start].push({
                    seg: gl(_, R.start, R.end, a),
                    isVisible: !1,
                    isAbsolute: !0,
                    absoluteTop: 0,
                    marginTop: 0,
                  }),
                    b = R.start;
                  b < R.end;
                  b += 1
                )
                  (m[b] += 1),
                    h[b].push({
                      seg: gl(_, b, b + 1, a),
                      isVisible: !1,
                      isAbsolute: !1,
                      absoluteTop: 0,
                      marginTop: 0,
                    });
              }
              for (b = 0; b < a.length; b += 1) y.push(g[b]);
              return {
                singleColPlacements: h,
                multiColPlacements: v,
                moreCnts: m,
                moreMarginTops: y,
              };
            })(
              cr(n.fgEventSegs, o.eventOrder),
              n.dayMaxEvents,
              n.dayMaxEventRows,
              o.eventOrderStrict,
              r.eventInstanceHeights,
              r.maxContentHeight,
              n.cells
            ),
            d = c.singleColPlacements,
            p = c.multiColPlacements,
            f = c.moreCnts,
            h = c.moreMarginTops,
            v =
              (n.eventDrag && n.eventDrag.affectedInstances) ||
              (n.eventResize && n.eventResize.affectedInstances) ||
              {};
          return Ho(
            "tr",
            { ref: this.rootElRef, role: "row" },
            n.renderIntro && n.renderIntro(),
            n.cells.map(function (t, r) {
              var o = e.renderFgSegs(
                  r,
                  n.forPrint ? d[r] : p[r],
                  n.todayRange,
                  v
                ),
                i = e.renderFgSegs(
                  r,
                  (function (e, t) {
                    if (!e.length) return [];
                    var n = (function (e) {
                      for (var t = {}, n = 0, r = e; n < r.length; n++)
                        for (var o = 0, i = r[n]; o < i.length; o++) {
                          var a = i[o];
                          t[a.seg.eventRange.instance.instanceId] =
                            a.absoluteTop;
                        }
                      return t;
                    })(t);
                    return e.map(function (e) {
                      return {
                        seg: e,
                        isVisible: !0,
                        isAbsolute: !0,
                        absoluteTop: n[e.eventRange.instance.instanceId],
                        marginTop: 0,
                      };
                    });
                  })(u[r], p),
                  n.todayRange,
                  {},
                  Boolean(n.eventDrag),
                  Boolean(n.eventResize),
                  !1
                );
              return Ho(vl, {
                key: t.key,
                elRef: e.cellElRefs.createRef(t.key),
                innerElRef: e.frameElRefs.createRef(t.key),
                dateProfile: n.dateProfile,
                date: t.date,
                showDayNumber: n.showDayNumbers,
                showWeekNumber: n.showWeekNumbers && 0 === r,
                forceDayTop: n.showWeekNumbers,
                todayRange: n.todayRange,
                eventSelection: n.eventSelection,
                eventDrag: n.eventDrag,
                eventResize: n.eventResize,
                extraHookProps: t.extraHookProps,
                extraDataAttrs: t.extraDataAttrs,
                extraClassNames: t.extraClassNames,
                extraDateSpan: t.extraDateSpan,
                moreCnt: f[r],
                moreMarginTop: h[r],
                singlePlacements: d[r],
                fgContentElRef: e.fgElRefs.createRef(t.key),
                fgContent: Ho(Lo, null, Ho(Lo, null, o), Ho(Lo, null, i)),
                bgContent: Ho(
                  Lo,
                  null,
                  e.renderFillSegs(l[r], "highlight"),
                  e.renderFillSegs(a[r], "non-business"),
                  e.renderFillSegs(s[r], "bg-event")
                ),
              });
            })
          );
        }),
        (t.prototype.componentDidMount = function () {
          this.updateSizing(!0);
        }),
        (t.prototype.componentDidUpdate = function (e, t) {
          var n = this.props;
          this.updateSizing(!Ht(e, n));
        }),
        (t.prototype.getHighlightSegs = function () {
          var e = this.props;
          return e.eventDrag && e.eventDrag.segs.length
            ? e.eventDrag.segs
            : e.eventResize && e.eventResize.segs.length
            ? e.eventResize.segs
            : e.dateSelectionSegs;
        }),
        (t.prototype.getMirrorSegs = function () {
          var e = this.props;
          return e.eventResize && e.eventResize.segs.length
            ? e.eventResize.segs
            : [];
        }),
        (t.prototype.renderFgSegs = function (e, t, n, o, i, a, s) {
          var l = this.context,
            u = this.props.eventSelection,
            c = this.state.framePositions,
            d = 1 === this.props.cells.length,
            p = i || a || s,
            f = [];
          if (c)
            for (var h = 0, v = t; h < v.length; h++) {
              var g = v[h],
                m = g.seg,
                y = m.eventRange.instance.instanceId,
                E = y + ":" + e,
                S = g.isVisible && !o[y],
                b = g.isAbsolute,
                D = "",
                C = "";
              b &&
                (l.isRtl
                  ? ((C = 0), (D = c.lefts[m.lastCol] - c.lefts[m.firstCol]))
                  : ((D = 0),
                    (C = c.rights[m.firstCol] - c.rights[m.lastCol]))),
                f.push(
                  Ho(
                    "div",
                    {
                      className:
                        "fc-daygrid-event-harness" +
                        (b ? " fc-daygrid-event-harness-abs" : ""),
                      key: E,
                      ref: p ? null : this.segHarnessRefs.createRef(E),
                      style: {
                        visibility: S ? "" : "hidden",
                        marginTop: b ? "" : g.marginTop,
                        top: b ? g.absoluteTop : "",
                        left: D,
                        right: C,
                      },
                    },
                    ll(m)
                      ? Ho(
                          cl,
                          r(
                            {
                              seg: m,
                              isDragging: i,
                              isSelected: y === u,
                              defaultDisplayEventEnd: d,
                            },
                            gr(m, n)
                          )
                        )
                      : Ho(
                          ul,
                          r(
                            {
                              seg: m,
                              isDragging: i,
                              isResizing: a,
                              isDateSelecting: s,
                              isSelected: y === u,
                              defaultDisplayEventEnd: d,
                            },
                            gr(m, n)
                          )
                        )
                  )
                );
            }
          return f;
        }),
        (t.prototype.renderFillSegs = function (e, t) {
          var n = this.context.isRtl,
            i = this.props.todayRange,
            a = this.state.framePositions,
            s = [];
          if (a)
            for (var l = 0, u = e; l < u.length; l++) {
              var c = u[l],
                d = n
                  ? { right: 0, left: a.lefts[c.lastCol] - a.lefts[c.firstCol] }
                  : {
                      left: 0,
                      right: a.rights[c.firstCol] - a.rights[c.lastCol],
                    };
              s.push(
                Ho(
                  "div",
                  {
                    key: yr(c.eventRange),
                    className: "fc-daygrid-bg-harness",
                    style: d,
                  },
                  "bg-event" === t ? Ho(hs, r({ seg: c }, gr(c, i))) : fs(t)
                )
              );
            }
          return Ho.apply(void 0, o([Lo, {}], s));
        }),
        (t.prototype.updateSizing = function (e) {
          var t = this.props,
            n = this.frameElRefs;
          if (!t.forPrint && null !== t.clientWidth) {
            if (e) {
              var o = t.cells.map(function (e) {
                return n.currentMap[e.key];
              });
              if (o.length) {
                var i = this.rootElRef.current;
                this.setState({ framePositions: new ko(i, o, !0, !1) });
              }
            }
            var a = this.state.eventInstanceHeights,
              s = this.queryEventInstanceHeights(),
              l = !0 === t.dayMaxEvents || !0 === t.dayMaxEventRows;
            this.safeSetState({
              eventInstanceHeights: r(r({}, a), s),
              maxContentHeight: l ? this.computeMaxContentHeight() : null,
            });
          }
        }),
        (t.prototype.queryEventInstanceHeights = function () {
          var e = this.segHarnessRefs.currentMap,
            t = {};
          for (var n in e) {
            var r = Math.round(e[n].getBoundingClientRect().height),
              o = n.split(":")[0];
            t[o] = Math.max(t[o] || 0, r);
          }
          return t;
        }),
        (t.prototype.computeMaxContentHeight = function () {
          var e = this.props.cells[0].key,
            t = this.cellElRefs.currentMap[e],
            n = this.fgElRefs.currentMap[e];
          return (
            t.getBoundingClientRect().bottom - n.getBoundingClientRect().top
          );
        }),
        (t.prototype.getCellEls = function () {
          var e = this.cellElRefs.currentMap;
          return this.props.cells.map(function (t) {
            return e[t.key];
          });
        }),
        t
      );
    })(Ko);
  yl.addStateEquality({ eventInstanceHeights: Ht });
  var El = (function (e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this;
      return (
        (t.splitBusinessHourSegs = nn(nl)),
        (t.splitBgEventSegs = nn(nl)),
        (t.splitFgEventSegs = nn(nl)),
        (t.splitDateSelectionSegs = nn(nl)),
        (t.splitEventDrag = nn(ol)),
        (t.splitEventResize = nn(ol)),
        (t.rowRefs = new ja()),
        (t.handleRootEl = function (e) {
          (t.rootEl = e),
            e
              ? t.context.registerInteractiveComponent(t, {
                  el: e,
                  isHitComboAllowed: t.props.isHitComboAllowed,
                })
              : t.context.unregisterInteractiveComponent(t);
        }),
        t
      );
    }
    return (
      n(t, e),
      (t.prototype.render = function () {
        var e = this,
          t = this.props,
          n = t.dateProfile,
          r = t.dayMaxEventRows,
          o = t.dayMaxEvents,
          i = t.expandRows,
          a = t.cells.length,
          s = this.splitBusinessHourSegs(t.businessHourSegs, a),
          l = this.splitBgEventSegs(t.bgEventSegs, a),
          u = this.splitFgEventSegs(t.fgEventSegs, a),
          c = this.splitDateSelectionSegs(t.dateSelectionSegs, a),
          d = this.splitEventDrag(t.eventDrag, a),
          p = this.splitEventResize(t.eventResize, a),
          f = !0 === o || !0 === r;
        return (
          f && !i && ((f = !1), (r = null), (o = null)),
          Ho(
            "div",
            {
              className: [
                "fc-daygrid-body",
                f ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced",
                i ? "" : "fc-daygrid-body-natural",
              ].join(" "),
              ref: this.handleRootEl,
              style: { width: t.clientWidth, minWidth: t.tableMinWidth },
            },
            Ho(Ra, { unit: "day" }, function (f, h) {
              return Ho(
                Lo,
                null,
                Ho(
                  "table",
                  {
                    role: "presentation",
                    className: "fc-scrollgrid-sync-table",
                    style: {
                      width: t.clientWidth,
                      minWidth: t.tableMinWidth,
                      height: i ? t.clientHeight : "",
                    },
                  },
                  t.colGroupNode,
                  Ho(
                    "tbody",
                    { role: "presentation" },
                    t.cells.map(function (i, f) {
                      return Ho(yl, {
                        ref: e.rowRefs.createRef(f),
                        key: i.length ? i[0].date.toISOString() : f,
                        showDayNumbers: a > 1,
                        showWeekNumbers: t.showWeekNumbers,
                        todayRange: h,
                        dateProfile: n,
                        cells: i,
                        renderIntro: t.renderRowIntro,
                        businessHourSegs: s[f],
                        eventSelection: t.eventSelection,
                        bgEventSegs: l[f].filter(Sl),
                        fgEventSegs: u[f],
                        dateSelectionSegs: c[f],
                        eventDrag: d[f],
                        eventResize: p[f],
                        dayMaxEvents: o,
                        dayMaxEventRows: r,
                        clientWidth: t.clientWidth,
                        clientHeight: t.clientHeight,
                        forPrint: t.forPrint,
                      });
                    })
                  )
                )
              );
            })
          )
        );
      }),
      (t.prototype.prepareHits = function () {
        (this.rowPositions = new ko(
          this.rootEl,
          this.rowRefs.collect().map(function (e) {
            return e.getCellEls()[0];
          }),
          !1,
          !0
        )),
          (this.colPositions = new ko(
            this.rootEl,
            this.rowRefs.currentMap[0].getCellEls(),
            !0,
            !1
          ));
      }),
      (t.prototype.queryHit = function (e, t) {
        var n = this.colPositions,
          o = this.rowPositions,
          i = n.leftToIndex(e),
          a = o.topToIndex(t);
        if (null != a && null != i) {
          var s = this.props.cells[a][i];
          return {
            dateProfile: this.props.dateProfile,
            dateSpan: r(
              { range: this.getCellRange(a, i), allDay: !0 },
              s.extraDateSpan
            ),
            dayEl: this.getCellEl(a, i),
            rect: {
              left: n.lefts[i],
              right: n.rights[i],
              top: o.tops[a],
              bottom: o.bottoms[a],
            },
            layer: 0,
          };
        }
        return null;
      }),
      (t.prototype.getCellEl = function (e, t) {
        return this.rowRefs.currentMap[e].getCellEls()[t];
      }),
      (t.prototype.getCellRange = function (e, t) {
        var n = this.props.cells[e][t].date;
        return { start: n, end: dt(n, 1) };
      }),
      t
    );
  })(Ko);
  function Sl(e) {
    return e.eventRange.def.allDay;
  }
  var bl = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (t.forceDayIfListItem = !0), t;
      }
      return (
        n(t, e),
        (t.prototype.sliceRange = function (e, t) {
          return t.sliceRange(e);
        }),
        t
      );
    })(Pa),
    Dl = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (t.slicer = new bl()), (t.tableRef = Ao()), t;
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          var e = this.props,
            t = this.context;
          return Ho(
            El,
            r(
              { ref: this.tableRef },
              this.slicer.sliceProps(
                e,
                e.dateProfile,
                e.nextDayThreshold,
                t,
                e.dayTableModel
              ),
              {
                dateProfile: e.dateProfile,
                cells: e.dayTableModel.cells,
                colGroupNode: e.colGroupNode,
                tableMinWidth: e.tableMinWidth,
                renderRowIntro: e.renderRowIntro,
                dayMaxEvents: e.dayMaxEvents,
                dayMaxEventRows: e.dayMaxEventRows,
                showWeekNumbers: e.showWeekNumbers,
                expandRows: e.expandRows,
                headerAlignElRef: e.headerAlignElRef,
                clientWidth: e.clientWidth,
                clientHeight: e.clientHeight,
                forPrint: e.forPrint,
              }
            )
          );
        }),
        t
      );
    })(Ko),
    Cl = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.buildDayTableModel = nn(wl)),
          (t.headerRef = Ao()),
          (t.tableRef = Ao()),
          t
        );
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          var e = this,
            t = this.context,
            n = t.options,
            r = t.dateProfileGenerator,
            o = this.props,
            i = this.buildDayTableModel(o.dateProfile, r),
            a =
              n.dayHeaders &&
              Ho(ka, {
                ref: this.headerRef,
                dateProfile: o.dateProfile,
                dates: i.headerDates,
                datesRepDistinctDays: 1 === i.rowCnt,
              }),
            s = function (t) {
              return Ho(Dl, {
                ref: e.tableRef,
                dateProfile: o.dateProfile,
                dayTableModel: i,
                businessHours: o.businessHours,
                dateSelection: o.dateSelection,
                eventStore: o.eventStore,
                eventUiBases: o.eventUiBases,
                eventSelection: o.eventSelection,
                eventDrag: o.eventDrag,
                eventResize: o.eventResize,
                nextDayThreshold: n.nextDayThreshold,
                colGroupNode: t.tableColGroupNode,
                tableMinWidth: t.tableMinWidth,
                dayMaxEvents: n.dayMaxEvents,
                dayMaxEventRows: n.dayMaxEventRows,
                showWeekNumbers: n.weekNumbers,
                expandRows: !o.isHeightAuto,
                headerAlignElRef: e.headerElRef,
                clientWidth: t.clientWidth,
                clientHeight: t.clientHeight,
                forPrint: o.forPrint,
              });
            };
          return n.dayMinWidth
            ? this.renderHScrollLayout(a, s, i.colCnt, n.dayMinWidth)
            : this.renderSimpleLayout(a, s);
        }),
        t
      );
    })(tl);
  function wl(e, t) {
    var n = new Ma(e.renderRange, t);
    return new Ia(n, /year|month|week/.test(e.currentRangeUnit));
  }
  var _l = $o({
      initialView: "dayGridMonth",
      views: {
        dayGrid: {
          component: Cl,
          dateProfileGeneratorClass: (function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              n(t, e),
              (t.prototype.buildRenderRange = function (t, n, r) {
                var o,
                  i = this.props.dateEnv,
                  a = e.prototype.buildRenderRange.call(this, t, n, r),
                  s = a.start,
                  l = a.end;
                return (
                  /^(year|month)$/.test(n) &&
                    ((s = i.startOfWeek(s)),
                    (o = i.startOfWeek(l)).valueOf() !== l.valueOf() &&
                      (l = ct(o, 1))),
                  this.props.monthMode &&
                    this.props.fixedWeekCount &&
                    (l = ct(l, 6 - Math.ceil(ft(s, l)))),
                  { start: s, end: l }
                );
              }),
              t
            );
          })(fi),
        },
        dayGridDay: { type: "dayGrid", duration: { days: 1 } },
        dayGridWeek: { type: "dayGrid", duration: { weeks: 1 } },
        dayGridMonth: {
          type: "dayGrid",
          duration: { months: 1 },
          monthMode: !0,
          fixedWeekCount: !0,
        },
      },
    }),
    Rl = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        n(t, e),
        (t.prototype.getKeyInfo = function () {
          return { allDay: {}, timed: {} };
        }),
        (t.prototype.getKeysForDateSpan = function (e) {
          return e.allDay ? ["allDay"] : ["timed"];
        }),
        (t.prototype.getKeysForEventDef = function (e) {
          return e.allDay
            ? ir(e)
              ? ["timed", "allDay"]
              : ["allDay"]
            : ["timed"];
        }),
        t
      );
    })(uo),
    Tl = yn({
      hour: "numeric",
      minute: "2-digit",
      omitZeroMinute: !0,
      meridiem: "short",
    });
  function kl(e) {
    var t = [
      "fc-timegrid-slot",
      "fc-timegrid-slot-label",
      e.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor",
    ];
    return Ho(zo.Consumer, null, function (n) {
      if (!e.isLabeled)
        return Ho("td", { className: t.join(" "), "data-time": e.isoTimeStr });
      var r = n.dateEnv,
        o = n.options,
        i = n.viewApi,
        a =
          null == o.slotLabelFormat
            ? Tl
            : Array.isArray(o.slotLabelFormat)
            ? yn(o.slotLabelFormat[0])
            : yn(o.slotLabelFormat),
        s = {
          level: 0,
          time: e.time,
          date: r.toDate(e.date),
          view: i,
          text: r.format(e.date, a),
        };
      return Ho(
        ei,
        {
          hookProps: s,
          classNames: o.slotLabelClassNames,
          content: o.slotLabelContent,
          defaultContent: xl,
          didMount: o.slotLabelDidMount,
          willUnmount: o.slotLabelWillUnmount,
        },
        function (n, r, o, i) {
          return Ho(
            "td",
            {
              ref: n,
              className: t.concat(r).join(" "),
              "data-time": e.isoTimeStr,
            },
            Ho(
              "div",
              {
                className:
                  "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame",
              },
              Ho(
                "div",
                {
                  className:
                    "fc-timegrid-slot-label-cushion fc-scrollgrid-shrink-cushion",
                  ref: o,
                },
                i
              )
            )
          );
        }
      );
    });
  }
  function xl(e) {
    return e.text;
  }
  var Ml = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          return this.props.slatMetas.map(function (e) {
            return Ho("tr", { key: e.key }, Ho(kl, r({}, e)));
          });
        }),
        t
      );
    })(qo),
    Il = yn({ week: "short" }),
    Pl = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.allDaySplitter = new Rl()),
          (t.headerElRef = Ao()),
          (t.rootElRef = Ao()),
          (t.scrollerElRef = Ao()),
          (t.state = { slatCoords: null }),
          (t.handleScrollTopRequest = function (e) {
            var n = t.scrollerElRef.current;
            n && (n.scrollTop = e);
          }),
          (t.renderHeadAxis = function (e, n) {
            void 0 === n && (n = "");
            var o = t.context.options,
              i = t.props.dateProfile.renderRange,
              a =
                1 === ht(i.start, i.end) ? go(t.context, i.start, "week") : {};
            return o.weekNumbers && "day" === e
              ? Ho(
                  gs,
                  { date: i.start, defaultFormat: Il },
                  function (e, t, o, i) {
                    return Ho(
                      "th",
                      {
                        ref: e,
                        "aria-hidden": !0,
                        className: ["fc-timegrid-axis", "fc-scrollgrid-shrink"]
                          .concat(t)
                          .join(" "),
                      },
                      Ho(
                        "div",
                        {
                          className:
                            "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame fc-timegrid-axis-frame-liquid",
                          style: { height: n },
                        },
                        Ho(
                          "a",
                          r(
                            {
                              ref: o,
                              className:
                                "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner",
                            },
                            a
                          ),
                          i
                        )
                      )
                    );
                  }
                )
              : Ho(
                  "th",
                  { "aria-hidden": !0, className: "fc-timegrid-axis" },
                  Ho("div", {
                    className: "fc-timegrid-axis-frame",
                    style: { height: n },
                  })
                );
          }),
          (t.renderTableRowAxis = function (e) {
            var n = t.context,
              r = n.options,
              o = n.viewApi,
              i = { text: r.allDayText, view: o };
            return Ho(
              ei,
              {
                hookProps: i,
                classNames: r.allDayClassNames,
                content: r.allDayContent,
                defaultContent: Nl,
                didMount: r.allDayDidMount,
                willUnmount: r.allDayWillUnmount,
              },
              function (t, n, r, o) {
                return Ho(
                  "td",
                  {
                    ref: t,
                    "aria-hidden": !0,
                    className: ["fc-timegrid-axis", "fc-scrollgrid-shrink"]
                      .concat(n)
                      .join(" "),
                  },
                  Ho(
                    "div",
                    {
                      className:
                        "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame" +
                        (null == e ? " fc-timegrid-axis-frame-liquid" : ""),
                      style: { height: e },
                    },
                    Ho(
                      "span",
                      {
                        className:
                          "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner",
                        ref: r,
                      },
                      o
                    )
                  )
                );
              }
            );
          }),
          (t.handleSlatCoords = function (e) {
            t.setState({ slatCoords: e });
          }),
          t
        );
      }
      return (
        n(t, e),
        (t.prototype.renderSimpleLayout = function (e, t, n) {
          var r = this.context,
            o = this.props,
            i = [],
            a = ns(r.options);
          return (
            e &&
              i.push({
                type: "header",
                key: "header",
                isSticky: a,
                chunk: {
                  elRef: this.headerElRef,
                  tableClassName: "fc-col-header",
                  rowContent: e,
                },
              }),
            t &&
              (i.push({ type: "body", key: "all-day", chunk: { content: t } }),
              i.push({
                type: "body",
                key: "all-day-divider",
                outerContent: Ho(
                  "tr",
                  { role: "presentation", className: "fc-scrollgrid-section" },
                  Ho("td", {
                    className:
                      "fc-timegrid-divider " +
                      r.theme.getClass("tableCellShaded"),
                  })
                ),
              })),
            i.push({
              type: "body",
              key: "body",
              liquid: !0,
              expandRows: Boolean(r.options.expandRows),
              chunk: { scrollerElRef: this.scrollerElRef, content: n },
            }),
            Ho(
              li,
              { viewSpec: r.viewSpec, elRef: this.rootElRef },
              function (e, t) {
                return Ho(
                  "div",
                  { className: ["fc-timegrid"].concat(t).join(" "), ref: e },
                  Ho(os, {
                    liquid: !o.isHeightAuto && !o.forPrint,
                    collapsibleWidth: o.forPrint,
                    cols: [{ width: "shrink" }],
                    sections: i,
                  })
                );
              }
            )
          );
        }),
        (t.prototype.renderHScrollLayout = function (e, t, n, r, o, i, a) {
          var s = this,
            l = this.context.pluginHooks.scrollGridImpl;
          if (!l) throw new Error("No ScrollGrid implementation");
          var u = this.context,
            c = this.props,
            d = !c.forPrint && ns(u.options),
            p = !c.forPrint && rs(u.options),
            f = [];
          e &&
            f.push({
              type: "header",
              key: "header",
              isSticky: d,
              syncRowHeights: !0,
              chunks: [
                {
                  key: "axis",
                  rowContent: function (e) {
                    return Ho(
                      "tr",
                      { role: "presentation" },
                      s.renderHeadAxis("day", e.rowSyncHeights[0])
                    );
                  },
                },
                {
                  key: "cols",
                  elRef: this.headerElRef,
                  tableClassName: "fc-col-header",
                  rowContent: e,
                },
              ],
            }),
            t &&
              (f.push({
                type: "body",
                key: "all-day",
                syncRowHeights: !0,
                chunks: [
                  {
                    key: "axis",
                    rowContent: function (e) {
                      return Ho(
                        "tr",
                        { role: "presentation" },
                        s.renderTableRowAxis(e.rowSyncHeights[0])
                      );
                    },
                  },
                  { key: "cols", content: t },
                ],
              }),
              f.push({
                key: "all-day-divider",
                type: "body",
                outerContent: Ho(
                  "tr",
                  { role: "presentation", className: "fc-scrollgrid-section" },
                  Ho("td", {
                    colSpan: 2,
                    className:
                      "fc-timegrid-divider " +
                      u.theme.getClass("tableCellShaded"),
                  })
                ),
              }));
          var h = u.options.nowIndicator;
          return (
            f.push({
              type: "body",
              key: "body",
              liquid: !0,
              expandRows: Boolean(u.options.expandRows),
              chunks: [
                {
                  key: "axis",
                  content: function (e) {
                    return Ho(
                      "div",
                      { className: "fc-timegrid-axis-chunk" },
                      Ho(
                        "table",
                        {
                          "aria-hidden": !0,
                          style: { height: e.expandRows ? e.clientHeight : "" },
                        },
                        e.tableColGroupNode,
                        Ho("tbody", null, Ho(Ml, { slatMetas: i }))
                      ),
                      Ho(
                        "div",
                        { className: "fc-timegrid-now-indicator-container" },
                        Ho(Ra, { unit: h ? "minute" : "day" }, function (e) {
                          var t = h && a && a.safeComputeTop(e);
                          return "number" == typeof t
                            ? Ho(
                                ls,
                                { isAxis: !0, date: e },
                                function (e, n, r, o) {
                                  return Ho(
                                    "div",
                                    {
                                      ref: e,
                                      className: [
                                        "fc-timegrid-now-indicator-arrow",
                                      ]
                                        .concat(n)
                                        .join(" "),
                                      style: { top: t },
                                    },
                                    o
                                  );
                                }
                              )
                            : null;
                        })
                      )
                    );
                  },
                },
                { key: "cols", scrollerElRef: this.scrollerElRef, content: n },
              ],
            }),
            p &&
              f.push({
                key: "footer",
                type: "footer",
                isSticky: !0,
                chunks: [
                  { key: "axis", content: ts },
                  { key: "cols", content: ts },
                ],
              }),
            Ho(
              li,
              { viewSpec: u.viewSpec, elRef: this.rootElRef },
              function (e, t) {
                return Ho(
                  "div",
                  { className: ["fc-timegrid"].concat(t).join(" "), ref: e },
                  Ho(l, {
                    liquid: !c.isHeightAuto && !c.forPrint,
                    collapsibleWidth: !1,
                    colGroups: [
                      { width: "shrink", cols: [{ width: "shrink" }] },
                      { cols: [{ span: r, minWidth: o }] },
                    ],
                    sections: f,
                  })
                );
              }
            )
          );
        }),
        (t.prototype.getAllDayMaxEventProps = function () {
          var e = this.context.options,
            t = e.dayMaxEvents,
            n = e.dayMaxEventRows;
          return (
            (!0 !== t && !0 !== n) || ((t = void 0), (n = 5)),
            { dayMaxEvents: t, dayMaxEventRows: n }
          );
        }),
        t
      );
    })(Ko);
  function Nl(e) {
    return e.text;
  }
  var Hl = (function () {
      function e(e, t, n) {
        (this.positions = e), (this.dateProfile = t), (this.slotDuration = n);
      }
      return (
        (e.prototype.safeComputeTop = function (e) {
          var t = this.dateProfile;
          if (rr(t.currentRange, e)) {
            var n = yt(e),
              r = e.valueOf() - n.valueOf();
            if (r >= Zt(t.slotMinTime) && r < Zt(t.slotMaxTime))
              return this.computeTimeTop(zt(r));
          }
          return null;
        }),
        (e.prototype.computeDateTop = function (e, t) {
          return (
            t || (t = yt(e)), this.computeTimeTop(zt(e.valueOf() - t.valueOf()))
          );
        }),
        (e.prototype.computeTimeTop = function (e) {
          var t,
            n,
            r = this.positions,
            o = this.dateProfile,
            i = r.els.length,
            a = (e.milliseconds - Zt(o.slotMinTime)) / Zt(this.slotDuration);
          return (
            (a = Math.max(0, a)),
            (a = Math.min(i, a)),
            (t = Math.floor(a)),
            (n = a - (t = Math.min(t, i - 1))),
            r.tops[t] + r.getHeight(t) * n
          );
        }),
        e
      );
    })(),
    Ol = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          var e = this.props,
            t = this.context,
            n = t.options,
            o = e.slatElRefs;
          return Ho(
            "tbody",
            null,
            e.slatMetas.map(function (i, a) {
              var s = {
                  time: i.time,
                  date: t.dateEnv.toDate(i.date),
                  view: t.viewApi,
                },
                l = [
                  "fc-timegrid-slot",
                  "fc-timegrid-slot-lane",
                  i.isLabeled ? "" : "fc-timegrid-slot-minor",
                ];
              return Ho(
                "tr",
                { key: i.key, ref: o.createRef(i.key) },
                e.axis && Ho(kl, r({}, i)),
                Ho(
                  ei,
                  {
                    hookProps: s,
                    classNames: n.slotLaneClassNames,
                    content: n.slotLaneContent,
                    didMount: n.slotLaneDidMount,
                    willUnmount: n.slotLaneWillUnmount,
                  },
                  function (e, t, n, r) {
                    return Ho(
                      "td",
                      {
                        ref: e,
                        className: l.concat(t).join(" "),
                        "data-time": i.isoTimeStr,
                      },
                      r
                    );
                  }
                )
              );
            })
          );
        }),
        t
      );
    })(qo),
    Al = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (t.rootElRef = Ao()), (t.slatElRefs = new ja()), t;
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          var e = this.props,
            t = this.context;
          return Ho(
            "div",
            { ref: this.rootElRef, className: "fc-timegrid-slots" },
            Ho(
              "table",
              {
                "aria-hidden": !0,
                className: t.theme.getClass("table"),
                style: {
                  minWidth: e.tableMinWidth,
                  width: e.clientWidth,
                  height: e.minHeight,
                },
              },
              e.tableColGroupNode,
              Ho(Ol, {
                slatElRefs: this.slatElRefs,
                axis: e.axis,
                slatMetas: e.slatMetas,
              })
            )
          );
        }),
        (t.prototype.componentDidMount = function () {
          this.updateSizing();
        }),
        (t.prototype.componentDidUpdate = function () {
          this.updateSizing();
        }),
        (t.prototype.componentWillUnmount = function () {
          this.props.onCoords && this.props.onCoords(null);
        }),
        (t.prototype.updateSizing = function () {
          var e,
            t = this.context,
            n = this.props;
          n.onCoords &&
            null !== n.clientWidth &&
            this.rootElRef.current.offsetHeight &&
            n.onCoords(
              new Hl(
                new ko(
                  this.rootElRef.current,
                  ((e = this.slatElRefs.currentMap),
                  n.slatMetas.map(function (t) {
                    return e[t.key];
                  })),
                  !1,
                  !0
                ),
                this.props.dateProfile,
                t.options.slotDuration
              )
            );
        }),
        t
      );
    })(qo);
  function Ll(e, t) {
    var n,
      r = [];
    for (n = 0; n < t; n += 1) r.push([]);
    if (e) for (n = 0; n < e.length; n += 1) r[e[n].col].push(e[n]);
    return r;
  }
  function Ul(e, t) {
    var n = [];
    if (e) {
      for (a = 0; a < t; a += 1)
        n[a] = {
          affectedInstances: e.affectedInstances,
          isEvent: e.isEvent,
          segs: [],
        };
      for (var r = 0, o = e.segs; r < o.length; r++) {
        var i = o[r];
        n[i.col].segs.push(i);
      }
    } else for (var a = 0; a < t; a += 1) n[a] = null;
    return n;
  }
  var Wl = (function (e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this;
      return (t.rootElRef = Ao()), t;
    }
    return (
      n(t, e),
      (t.prototype.render = function () {
        var e = this,
          t = this.props;
        return Ho(
          Ss,
          {
            allDayDate: null,
            moreCnt: t.hiddenSegs.length,
            allSegs: t.hiddenSegs,
            hiddenSegs: t.hiddenSegs,
            alignmentElRef: this.rootElRef,
            defaultContent: Vl,
            extraDateSpan: t.extraDateSpan,
            dateProfile: t.dateProfile,
            todayRange: t.todayRange,
            popoverContent: function () {
              return $l(t.hiddenSegs, t);
            },
          },
          function (n, r, o, i, a, s, l, u) {
            return Ho(
              "a",
              {
                ref: function (t) {
                  Xo(n, t), Xo(e.rootElRef, t);
                },
                className: ["fc-timegrid-more-link"].concat(r).join(" "),
                style: { top: t.top, bottom: t.bottom },
                onClick: a,
                title: s,
                "aria-expanded": l,
                "aria-controls": u,
              },
              Ho(
                "div",
                { ref: o, className: "fc-timegrid-more-link-inner fc-sticky" },
                i
              )
            );
          }
        );
      }),
      t
    );
  })(qo);
  function Vl(e) {
    return e.shortText;
  }
  function Fl(e, t, n) {
    var o = new Xi();
    null != t && (o.strictOrder = t), null != n && (o.maxStackCnt = n);
    var i,
      a,
      s = Ji(o.addSegs(e)),
      l = (function (e) {
        var t = e.entriesByLevel,
          n = Gl(
            function (e, t) {
              return e + ":" + t;
            },
            function (o, i) {
              var a = Bl(
                  (function (e, t, n) {
                    for (
                      var r = e.levelCoords,
                        o = e.entriesByLevel,
                        i = o[t][n],
                        a = r[t] + i.thickness,
                        s = r.length,
                        l = t;
                      l < s && r[l] < a;
                      l += 1
                    );
                    for (; l < s; l += 1) {
                      for (
                        var u = o[l],
                          c = void 0,
                          d = na(u, i.span.start, Ki),
                          p = d[0] + d[1],
                          f = p;
                        (c = u[f]) && c.span.start < i.span.end;

                      )
                        f += 1;
                      if (p < f)
                        return { level: l, lateralStart: p, lateralEnd: f };
                    }
                    return null;
                  })(e, o, i),
                  n
                ),
                s = t[o][i];
              return [
                r(r({}, s), { nextLevelNodes: a[0] }),
                s.thickness + a[1],
              ];
            }
          );
        return Bl(
          t.length
            ? { level: 0, lateralStart: 0, lateralEnd: t[0].length }
            : null,
          n
        )[0];
      })(o);
    return (
      (i = l),
      1,
      (a = Gl(
        function (e, t, n) {
          return $i(e);
        },
        function (e, t, n) {
          var o,
            i = e.nextLevelNodes,
            s = e.thickness,
            l = s + n,
            u = s / l,
            c = [];
          if (i.length)
            for (var d = 0, p = i; d < p.length; d++) {
              var f = p[d];
              if (void 0 === o) (o = (h = a(f, t, l))[0]), c.push(h[1]);
              else {
                var h = a(f, o, 0);
                c.push(h[1]);
              }
            }
          else o = 1;
          var v = (o - t) * u;
          return [o - v, r(r({}, e), { thickness: v, nextLevelNodes: c })];
        }
      )),
      {
        segRects: (function (e) {
          var t = [],
            n = Gl(
              function (e, t, n) {
                return $i(e);
              },
              function (e, n, i) {
                var a = r(r({}, e), {
                  levelCoord: n,
                  stackDepth: i,
                  stackForward: 0,
                });
                return (
                  t.push(a),
                  (a.stackForward =
                    o(e.nextLevelNodes, n + e.thickness, i + 1) + 1)
                );
              }
            );
          function o(e, t, r) {
            for (var o = 0, i = 0, a = e; i < a.length; i++) {
              var s = a[i];
              o = Math.max(n(s, t, r), o);
            }
            return o;
          }
          return o(e, 0, 0), t;
        })(
          (l = i.map(function (e) {
            return a(e, 0, 0)[1];
          }))
        ),
        hiddenGroups: s,
      }
    );
  }
  function Bl(e, t) {
    if (!e) return [[], 0];
    for (
      var n = e.level, r = e.lateralStart, o = e.lateralEnd, i = r, a = [];
      i < o;

    )
      a.push(t(n, i)), (i += 1);
    return a.sort(zl), [a.map(jl), a[0][1]];
  }
  function zl(e, t) {
    return t[1] - e[1];
  }
  function jl(e) {
    return e[0];
  }
  function Gl(e, t) {
    var n = {};
    return function () {
      for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
      var i = e.apply(void 0, r);
      return i in n ? n[i] : (n[i] = t.apply(void 0, r));
    };
  }
  function ql(e, t, n, r) {
    void 0 === n && (n = null), void 0 === r && (r = 0);
    var o = [];
    if (n)
      for (var i = 0; i < e.length; i += 1) {
        var a = e[i],
          s = n.computeDateTop(a.start, t),
          l = Math.max(s + (r || 0), n.computeDateTop(a.end, t));
        o.push({ start: Math.round(s), end: Math.round(l) });
      }
    return o;
  }
  var Yl = yn({ hour: "numeric", minute: "2-digit", meridiem: !1 }),
    Zl = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          var e = ["fc-timegrid-event", "fc-v-event"];
          return (
            this.props.isShort && e.push("fc-timegrid-event-short"),
            Ho(
              as,
              r({}, this.props, { defaultTimeFormat: Yl, extraClassNames: e })
            )
          );
        }),
        t
      );
    })(qo),
    Xl = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          var e = this.props;
          return Ho(
            cs,
            {
              date: e.date,
              dateProfile: e.dateProfile,
              todayRange: e.todayRange,
              extraHookProps: e.extraHookProps,
            },
            function (e, t) {
              return (
                t && Ho("div", { className: "fc-timegrid-col-misc", ref: e }, t)
              );
            }
          );
        }),
        t
      );
    })(qo),
    Kl = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (t.sortEventSegs = nn(cr)), t;
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          var e = this,
            t = this.props,
            n = this.context,
            o = n.options.selectMirror,
            i =
              (t.eventDrag && t.eventDrag.segs) ||
              (t.eventResize && t.eventResize.segs) ||
              (o && t.dateSelectionSegs) ||
              [],
            a =
              (t.eventDrag && t.eventDrag.affectedInstances) ||
              (t.eventResize && t.eventResize.affectedInstances) ||
              {},
            s = this.sortEventSegs(t.fgEventSegs, n.options.eventOrder);
          return Ho(
            ps,
            {
              elRef: t.elRef,
              date: t.date,
              dateProfile: t.dateProfile,
              todayRange: t.todayRange,
              extraHookProps: t.extraHookProps,
            },
            function (n, l, u) {
              return Ho(
                "td",
                r(
                  {
                    ref: n,
                    role: "gridcell",
                    className: ["fc-timegrid-col"]
                      .concat(l, t.extraClassNames || [])
                      .join(" "),
                  },
                  u,
                  t.extraDataAttrs
                ),
                Ho(
                  "div",
                  { className: "fc-timegrid-col-frame" },
                  Ho(
                    "div",
                    { className: "fc-timegrid-col-bg" },
                    e.renderFillSegs(t.businessHourSegs, "non-business"),
                    e.renderFillSegs(t.bgEventSegs, "bg-event"),
                    e.renderFillSegs(t.dateSelectionSegs, "highlight")
                  ),
                  Ho(
                    "div",
                    { className: "fc-timegrid-col-events" },
                    e.renderFgSegs(s, a, !1, !1, !1)
                  ),
                  Ho(
                    "div",
                    { className: "fc-timegrid-col-events" },
                    e.renderFgSegs(
                      i,
                      {},
                      Boolean(t.eventDrag),
                      Boolean(t.eventResize),
                      Boolean(o)
                    )
                  ),
                  Ho(
                    "div",
                    { className: "fc-timegrid-now-indicator-container" },
                    e.renderNowIndicator(t.nowIndicatorSegs)
                  ),
                  Ho(Xl, {
                    date: t.date,
                    dateProfile: t.dateProfile,
                    todayRange: t.todayRange,
                    extraHookProps: t.extraHookProps,
                  })
                )
              );
            }
          );
        }),
        (t.prototype.renderFgSegs = function (e, t, n, r, o) {
          var i = this.props;
          return i.forPrint
            ? $l(e, i)
            : this.renderPositionedFgSegs(e, t, n, r, o);
        }),
        (t.prototype.renderPositionedFgSegs = function (e, t, n, o, i) {
          var a = this,
            s = this.context.options,
            l = s.eventMaxStack,
            u = s.eventShortHeight,
            c = s.eventOrderStrict,
            d = s.eventMinHeight,
            p = this.props,
            f = p.date,
            h = p.slatCoords,
            v = p.eventSelection,
            g = p.todayRange,
            m = p.nowDate,
            y = n || o || i,
            E = (function (e, t, n, r) {
              for (var o = [], i = [], a = 0; a < e.length; a += 1) {
                var s = t[a];
                s ? o.push({ index: a, thickness: 1, span: s }) : i.push(e[a]);
              }
              for (
                var l = Fl(o, n, r),
                  u = l.segRects,
                  c = l.hiddenGroups,
                  d = [],
                  p = 0,
                  f = u;
                p < f.length;
                p++
              ) {
                var h = f[p];
                d.push({ seg: e[h.index], rect: h });
              }
              for (var v = 0, g = i; v < g.length; v++) {
                var m = g[v];
                d.push({ seg: m, rect: null });
              }
              return { segPlacements: d, hiddenGroups: c };
            })(e, ql(e, f, h, d), c, l),
            S = E.segPlacements,
            b = E.hiddenGroups;
          return Ho(
            Lo,
            null,
            this.renderHiddenGroups(b, e),
            S.map(function (e) {
              var s = e.seg,
                l = e.rect,
                c = s.eventRange.instance.instanceId,
                d = y || Boolean(!t[c] && l),
                p = Jl(l && l.span),
                f = !y && l ? a.computeSegHStyle(l) : { left: 0, right: 0 },
                h = Boolean(l) && l.stackForward > 0,
                E = Boolean(l) && l.span.end - l.span.start < u;
              return Ho(
                "div",
                {
                  className:
                    "fc-timegrid-event-harness" +
                    (h ? " fc-timegrid-event-harness-inset" : ""),
                  key: c,
                  style: r(r({ visibility: d ? "" : "hidden" }, p), f),
                },
                Ho(
                  Zl,
                  r(
                    {
                      seg: s,
                      isDragging: n,
                      isResizing: o,
                      isDateSelecting: i,
                      isSelected: c === v,
                      isShort: E,
                    },
                    gr(s, g, m)
                  )
                )
              );
            })
          );
        }),
        (t.prototype.renderHiddenGroups = function (e, t) {
          var n = this.props,
            r = n.extraDateSpan,
            o = n.dateProfile,
            i = n.todayRange,
            a = n.nowDate,
            s = n.eventSelection,
            l = n.eventDrag,
            u = n.eventResize;
          return Ho(
            Lo,
            null,
            e.map(function (e) {
              var n,
                c,
                d = Jl(e.span),
                p =
                  ((n = e.entries),
                  (c = t),
                  n.map(function (e) {
                    return c[e.index];
                  }));
              return Ho(Wl, {
                key: $t(Cs(p)),
                hiddenSegs: p,
                top: d.top,
                bottom: d.bottom,
                extraDateSpan: r,
                dateProfile: o,
                todayRange: i,
                nowDate: a,
                eventSelection: s,
                eventDrag: l,
                eventResize: u,
              });
            })
          );
        }),
        (t.prototype.renderFillSegs = function (e, t) {
          var n = this.props,
            o = this.context,
            i = ql(e, n.date, n.slatCoords, o.options.eventMinHeight).map(
              function (o, i) {
                var a = e[i];
                return Ho(
                  "div",
                  {
                    key: yr(a.eventRange),
                    className: "fc-timegrid-bg-harness",
                    style: Jl(o),
                  },
                  "bg-event" === t
                    ? Ho(hs, r({ seg: a }, gr(a, n.todayRange, n.nowDate)))
                    : fs(t)
                );
              }
            );
          return Ho(Lo, null, i);
        }),
        (t.prototype.renderNowIndicator = function (e) {
          var t = this.props,
            n = t.slatCoords,
            r = t.date;
          return n
            ? e.map(function (e, t) {
                return Ho(
                  ls,
                  { isAxis: !1, date: r, key: t },
                  function (t, o, i, a) {
                    return Ho(
                      "div",
                      {
                        ref: t,
                        className: ["fc-timegrid-now-indicator-line"]
                          .concat(o)
                          .join(" "),
                        style: { top: n.computeDateTop(e.start, r) },
                      },
                      a
                    );
                  }
                );
              })
            : null;
        }),
        (t.prototype.computeSegHStyle = function (e) {
          var t,
            n,
            r = this.context,
            o = r.isRtl,
            i = r.options.slotEventOverlap,
            a = e.levelCoord,
            s = e.levelCoord + e.thickness;
          i && (s = Math.min(1, a + 2 * (s - a))),
            o ? ((t = 1 - s), (n = a)) : ((t = a), (n = 1 - s));
          var l = {
            zIndex: e.stackDepth + 1,
            left: 100 * t + "%",
            right: 100 * n + "%",
          };
          return (
            i && !e.stackForward && (l[o ? "marginLeft" : "marginRight"] = 20),
            l
          );
        }),
        t
      );
    })(qo);
  function $l(e, t) {
    var n = t.todayRange,
      o = t.nowDate,
      i = t.eventSelection,
      a = t.eventDrag,
      s = t.eventResize,
      l =
        (a ? a.affectedInstances : null) ||
        (s ? s.affectedInstances : null) ||
        {};
    return Ho(
      Lo,
      null,
      e.map(function (e) {
        var t = e.eventRange.instance.instanceId;
        return Ho(
          "div",
          { key: t, style: { visibility: l[t] ? "hidden" : "" } },
          Ho(
            Zl,
            r(
              {
                seg: e,
                isDragging: !1,
                isResizing: !1,
                isDateSelecting: !1,
                isSelected: t === i,
                isShort: !1,
              },
              gr(e, n, o)
            )
          )
        );
      })
    );
  }
  function Jl(e) {
    return e ? { top: e.start, bottom: -e.end } : { top: "", bottom: "" };
  }
  var Ql = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.splitFgEventSegs = nn(Ll)),
          (t.splitBgEventSegs = nn(Ll)),
          (t.splitBusinessHourSegs = nn(Ll)),
          (t.splitNowIndicatorSegs = nn(Ll)),
          (t.splitDateSelectionSegs = nn(Ll)),
          (t.splitEventDrag = nn(Ul)),
          (t.splitEventResize = nn(Ul)),
          (t.rootElRef = Ao()),
          (t.cellElRefs = new ja()),
          t
        );
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          var e = this,
            t = this.props,
            n =
              this.context.options.nowIndicator &&
              t.slatCoords &&
              t.slatCoords.safeComputeTop(t.nowDate),
            r = t.cells.length,
            o = this.splitFgEventSegs(t.fgEventSegs, r),
            i = this.splitBgEventSegs(t.bgEventSegs, r),
            a = this.splitBusinessHourSegs(t.businessHourSegs, r),
            s = this.splitNowIndicatorSegs(t.nowIndicatorSegs, r),
            l = this.splitDateSelectionSegs(t.dateSelectionSegs, r),
            u = this.splitEventDrag(t.eventDrag, r),
            c = this.splitEventResize(t.eventResize, r);
          return Ho(
            "div",
            { className: "fc-timegrid-cols", ref: this.rootElRef },
            Ho(
              "table",
              {
                role: "presentation",
                style: { minWidth: t.tableMinWidth, width: t.clientWidth },
              },
              t.tableColGroupNode,
              Ho(
                "tbody",
                { role: "presentation" },
                Ho(
                  "tr",
                  { role: "row" },
                  t.axis &&
                    Ho(
                      "td",
                      {
                        "aria-hidden": !0,
                        className: "fc-timegrid-col fc-timegrid-axis",
                      },
                      Ho(
                        "div",
                        { className: "fc-timegrid-col-frame" },
                        Ho(
                          "div",
                          { className: "fc-timegrid-now-indicator-container" },
                          "number" == typeof n &&
                            Ho(
                              ls,
                              { isAxis: !0, date: t.nowDate },
                              function (e, t, r, o) {
                                return Ho(
                                  "div",
                                  {
                                    ref: e,
                                    className: [
                                      "fc-timegrid-now-indicator-arrow",
                                    ]
                                      .concat(t)
                                      .join(" "),
                                    style: { top: n },
                                  },
                                  o
                                );
                              }
                            )
                        )
                      )
                    ),
                  t.cells.map(function (n, r) {
                    return Ho(Kl, {
                      key: n.key,
                      elRef: e.cellElRefs.createRef(n.key),
                      dateProfile: t.dateProfile,
                      date: n.date,
                      nowDate: t.nowDate,
                      todayRange: t.todayRange,
                      extraHookProps: n.extraHookProps,
                      extraDataAttrs: n.extraDataAttrs,
                      extraClassNames: n.extraClassNames,
                      extraDateSpan: n.extraDateSpan,
                      fgEventSegs: o[r],
                      bgEventSegs: i[r],
                      businessHourSegs: a[r],
                      nowIndicatorSegs: s[r],
                      dateSelectionSegs: l[r],
                      eventDrag: u[r],
                      eventResize: c[r],
                      slatCoords: t.slatCoords,
                      eventSelection: t.eventSelection,
                      forPrint: t.forPrint,
                    });
                  })
                )
              )
            )
          );
        }),
        (t.prototype.componentDidMount = function () {
          this.updateCoords();
        }),
        (t.prototype.componentDidUpdate = function () {
          this.updateCoords();
        }),
        (t.prototype.updateCoords = function () {
          var e,
            t = this.props;
          t.onColCoords &&
            null !== t.clientWidth &&
            t.onColCoords(
              new ko(
                this.rootElRef.current,
                ((e = this.cellElRefs.currentMap),
                t.cells.map(function (t) {
                  return e[t.key];
                })),
                !0,
                !1
              )
            );
        }),
        t
      );
    })(qo),
    eu = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.processSlotOptions = nn(tu)),
          (t.state = { slatCoords: null }),
          (t.handleRootEl = function (e) {
            e
              ? t.context.registerInteractiveComponent(t, {
                  el: e,
                  isHitComboAllowed: t.props.isHitComboAllowed,
                })
              : t.context.unregisterInteractiveComponent(t);
          }),
          (t.handleScrollRequest = function (e) {
            var n = t.props.onScrollTopRequest,
              r = t.state.slatCoords;
            if (n && r) {
              if (e.time) {
                var o = r.computeTimeTop(e.time);
                (o = Math.ceil(o)) && (o += 1), n(o);
              }
              return !0;
            }
            return !1;
          }),
          (t.handleColCoords = function (e) {
            t.colCoords = e;
          }),
          (t.handleSlatCoords = function (e) {
            t.setState({ slatCoords: e }),
              t.props.onSlatCoords && t.props.onSlatCoords(e);
          }),
          t
        );
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          var e = this.props,
            t = this.state;
          return Ho(
            "div",
            {
              className: "fc-timegrid-body",
              ref: this.handleRootEl,
              style: { width: e.clientWidth, minWidth: e.tableMinWidth },
            },
            Ho(Al, {
              axis: e.axis,
              dateProfile: e.dateProfile,
              slatMetas: e.slatMetas,
              clientWidth: e.clientWidth,
              minHeight: e.expandRows ? e.clientHeight : "",
              tableMinWidth: e.tableMinWidth,
              tableColGroupNode: e.axis ? e.tableColGroupNode : null,
              onCoords: this.handleSlatCoords,
            }),
            Ho(Ql, {
              cells: e.cells,
              axis: e.axis,
              dateProfile: e.dateProfile,
              businessHourSegs: e.businessHourSegs,
              bgEventSegs: e.bgEventSegs,
              fgEventSegs: e.fgEventSegs,
              dateSelectionSegs: e.dateSelectionSegs,
              eventSelection: e.eventSelection,
              eventDrag: e.eventDrag,
              eventResize: e.eventResize,
              todayRange: e.todayRange,
              nowDate: e.nowDate,
              nowIndicatorSegs: e.nowIndicatorSegs,
              clientWidth: e.clientWidth,
              tableMinWidth: e.tableMinWidth,
              tableColGroupNode: e.tableColGroupNode,
              slatCoords: t.slatCoords,
              onColCoords: this.handleColCoords,
              forPrint: e.forPrint,
            })
          );
        }),
        (t.prototype.componentDidMount = function () {
          this.scrollResponder = this.context.createScrollResponder(
            this.handleScrollRequest
          );
        }),
        (t.prototype.componentDidUpdate = function (e) {
          this.scrollResponder.update(e.dateProfile !== this.props.dateProfile);
        }),
        (t.prototype.componentWillUnmount = function () {
          this.scrollResponder.detach();
        }),
        (t.prototype.queryHit = function (e, t) {
          var n = this.context,
            o = n.dateEnv,
            i = n.options,
            a = this.colCoords,
            s = this.props.dateProfile,
            l = this.state.slatCoords,
            u = this.processSlotOptions(
              this.props.slotDuration,
              i.snapDuration
            ),
            c = u.snapDuration,
            d = u.snapsPerSlot,
            p = a.leftToIndex(e),
            f = l.positions.topToIndex(t);
          if (null != p && null != f) {
            var h = this.props.cells[p],
              v = l.positions.tops[f],
              g = l.positions.getHeight(f),
              m = (t - v) / g,
              y = f * d + Math.floor(m * d),
              E = this.props.cells[p].date,
              S = Gt(s.slotMinTime, qt(c, y)),
              b = o.add(E, S),
              D = o.add(b, c);
            return {
              dateProfile: s,
              dateSpan: r(
                { range: { start: b, end: D }, allDay: !1 },
                h.extraDateSpan
              ),
              dayEl: a.els[p],
              rect: {
                left: a.lefts[p],
                right: a.rights[p],
                top: v,
                bottom: v + g,
              },
              layer: 0,
            };
          }
          return null;
        }),
        t
      );
    })(Ko);
  function tu(e, t) {
    var n = t || e,
      r = Xt(e, n);
    return (
      null === r && ((n = e), (r = 1)), { snapDuration: n, snapsPerSlot: r }
    );
  }
  var nu = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        n(t, e),
        (t.prototype.sliceRange = function (e, t) {
          for (var n = [], r = 0; r < t.length; r += 1) {
            var o = Qn(e, t[r]);
            o &&
              n.push({
                start: o.start,
                end: o.end,
                isStart: o.start.valueOf() === e.start.valueOf(),
                isEnd: o.end.valueOf() === e.end.valueOf(),
                col: r,
              });
          }
          return n;
        }),
        t
      );
    })(Pa),
    ru = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.buildDayRanges = nn(ou)),
          (t.slicer = new nu()),
          (t.timeColsRef = Ao()),
          t
        );
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          var e = this,
            t = this.props,
            n = this.context,
            o = t.dateProfile,
            i = t.dayTableModel,
            a = n.options.nowIndicator,
            s = this.buildDayRanges(i, o, n.dateEnv);
          return Ho(Ra, { unit: a ? "minute" : "day" }, function (l, u) {
            return Ho(
              eu,
              r({ ref: e.timeColsRef }, e.slicer.sliceProps(t, o, null, n, s), {
                forPrint: t.forPrint,
                axis: t.axis,
                dateProfile: o,
                slatMetas: t.slatMetas,
                slotDuration: t.slotDuration,
                cells: i.cells[0],
                tableColGroupNode: t.tableColGroupNode,
                tableMinWidth: t.tableMinWidth,
                clientWidth: t.clientWidth,
                clientHeight: t.clientHeight,
                expandRows: t.expandRows,
                nowDate: l,
                nowIndicatorSegs: a && e.slicer.sliceNowDate(l, n, s),
                todayRange: u,
                onScrollTopRequest: t.onScrollTopRequest,
                onSlatCoords: t.onSlatCoords,
              })
            );
          });
        }),
        t
      );
    })(Ko);
  function ou(e, t, n) {
    for (var r = [], o = 0, i = e.headerDates; o < i.length; o++) {
      var a = i[o];
      r.push({ start: n.add(a, t.slotMinTime), end: n.add(a, t.slotMaxTime) });
    }
    return r;
  }
  var iu = [
    { hours: 1 },
    { minutes: 30 },
    { minutes: 15 },
    { seconds: 30 },
    { seconds: 15 },
  ];
  function au(e, t, n, r, o) {
    for (
      var i = new Date(0),
        a = e,
        s = zt(0),
        l =
          n ||
          (function (e) {
            var t, n, r;
            for (t = iu.length - 1; t >= 0; t -= 1)
              if (null !== (r = Xt((n = zt(iu[t])), e)) && r > 1) return n;
            return e;
          })(r),
        u = [];
      Zt(a) < Zt(t);

    ) {
      var c = o.add(i, a),
        d = null !== Xt(s, l);
      u.push({
        date: c,
        time: a,
        key: c.toISOString(),
        isoTimeStr: Qt(c),
        isLabeled: d,
      }),
        (a = Gt(a, r)),
        (s = Gt(s, r));
    }
    return u;
  }
  var su = (function (e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this;
      return (t.buildTimeColsModel = nn(lu)), (t.buildSlatMetas = nn(au)), t;
    }
    return (
      n(t, e),
      (t.prototype.render = function () {
        var e = this,
          t = this.context,
          n = t.options,
          o = t.dateEnv,
          i = t.dateProfileGenerator,
          a = this.props,
          s = a.dateProfile,
          l = this.buildTimeColsModel(s, i),
          u = this.allDaySplitter.splitProps(a),
          c = this.buildSlatMetas(
            s.slotMinTime,
            s.slotMaxTime,
            n.slotLabelInterval,
            n.slotDuration,
            o
          ),
          d = n.dayMinWidth,
          p = !d,
          f = d,
          h =
            n.dayHeaders &&
            Ho(ka, {
              dates: l.headerDates,
              dateProfile: s,
              datesRepDistinctDays: !0,
              renderIntro: p ? this.renderHeadAxis : null,
            }),
          v =
            !1 !== n.allDaySlot &&
            function (t) {
              return Ho(
                Dl,
                r(
                  {},
                  u.allDay,
                  {
                    dateProfile: s,
                    dayTableModel: l,
                    nextDayThreshold: n.nextDayThreshold,
                    tableMinWidth: t.tableMinWidth,
                    colGroupNode: t.tableColGroupNode,
                    renderRowIntro: p ? e.renderTableRowAxis : null,
                    showWeekNumbers: !1,
                    expandRows: !1,
                    headerAlignElRef: e.headerElRef,
                    clientWidth: t.clientWidth,
                    clientHeight: t.clientHeight,
                    forPrint: a.forPrint,
                  },
                  e.getAllDayMaxEventProps()
                )
              );
            },
          g = function (t) {
            return Ho(
              ru,
              r({}, u.timed, {
                dayTableModel: l,
                dateProfile: s,
                axis: p,
                slotDuration: n.slotDuration,
                slatMetas: c,
                forPrint: a.forPrint,
                tableColGroupNode: t.tableColGroupNode,
                tableMinWidth: t.tableMinWidth,
                clientWidth: t.clientWidth,
                clientHeight: t.clientHeight,
                onSlatCoords: e.handleSlatCoords,
                expandRows: t.expandRows,
                onScrollTopRequest: e.handleScrollTopRequest,
              })
            );
          };
        return f
          ? this.renderHScrollLayout(
              h,
              v,
              g,
              l.colCnt,
              d,
              c,
              this.state.slatCoords
            )
          : this.renderSimpleLayout(h, v, g);
      }),
      t
    );
  })(Pl);
  function lu(e, t) {
    var n = new Ma(e.renderRange, t);
    return new Ia(n, !1);
  }
  var uu = $o({
      initialView: "timeGridWeek",
      optionRefiners: { allDaySlot: Boolean },
      views: {
        timeGrid: {
          component: su,
          usesMinMaxTime: !0,
          allDaySlot: !0,
          slotDuration: "00:30:00",
          slotEventOverlap: !0,
        },
        timeGridDay: { type: "timeGrid", duration: { days: 1 } },
        timeGridWeek: { type: "timeGrid", duration: { weeks: 1 } },
      },
    }),
    cu = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (t.state = { textId: We() }), t;
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          var e = this.context,
            t = e.theme,
            n = e.dateEnv,
            o = e.options,
            i = e.viewApi,
            a = this.props,
            s = a.cellId,
            l = a.dayDate,
            u = a.todayRange,
            c = this.state.textId,
            d = po(l, u),
            p = o.listDayFormat ? n.format(l, o.listDayFormat) : "",
            f = o.listDaySideFormat ? n.format(l, o.listDaySideFormat) : "",
            h = r(
              {
                date: n.toDate(l),
                view: i,
                textId: c,
                text: p,
                sideText: f,
                navLinkAttrs: go(this.context, l),
                sideNavLinkAttrs: go(this.context, l, "day", !1),
              },
              d
            ),
            v = ["fc-list-day"].concat(fo(d, t));
          return Ho(
            ei,
            {
              hookProps: h,
              classNames: o.dayHeaderClassNames,
              content: o.dayHeaderContent,
              defaultContent: du,
              didMount: o.dayHeaderDidMount,
              willUnmount: o.dayHeaderWillUnmount,
            },
            function (e, n, r, o) {
              return Ho(
                "tr",
                {
                  ref: e,
                  className: v.concat(n).join(" "),
                  "data-date": Jt(l),
                },
                Ho(
                  "th",
                  {
                    scope: "colgroup",
                    colSpan: 3,
                    id: s,
                    "aria-labelledby": c,
                  },
                  Ho(
                    "div",
                    {
                      className:
                        "fc-list-day-cushion " + t.getClass("tableCellShaded"),
                      ref: r,
                    },
                    o
                  )
                )
              );
            }
          );
        }),
        t
      );
    })(qo);
  function du(e) {
    return Ho(
      Lo,
      null,
      e.text &&
        Ho(
          "a",
          r({ id: e.textId, className: "fc-list-day-text" }, e.navLinkAttrs),
          e.text
        ),
      e.sideText &&
        Ho(
          "a",
          r(
            { "aria-hidden": !0, className: "fc-list-day-side-text" },
            e.sideNavLinkAttrs
          ),
          e.sideText
        )
    );
  }
  var pu = yn({ hour: "numeric", minute: "2-digit", meridiem: "short" }),
    fu = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        n(t, e),
        (t.prototype.render = function () {
          var e = this.props,
            t = this.context,
            n = e.seg,
            o = e.timeHeaderId,
            i = e.eventHeaderId,
            a = e.dateHeaderId,
            s = t.options.eventTimeFormat || pu;
          return Ho(
            is,
            {
              seg: n,
              timeText: "",
              disableDragging: !0,
              disableResizing: !0,
              defaultContent: function () {
                return (function (e, t) {
                  var n = Er(e, t);
                  return Ho("a", r({}, n), e.eventRange.def.title);
                })(n, t);
              },
              isPast: e.isPast,
              isFuture: e.isFuture,
              isToday: e.isToday,
              isSelected: e.isSelected,
              isDragging: e.isDragging,
              isResizing: e.isResizing,
              isDateSelecting: e.isDateSelecting,
            },
            function (e, r, l, u, c) {
              return Ho(
                "tr",
                {
                  className: [
                    "fc-list-event",
                    c.event.url ? "fc-event-forced-url" : "",
                  ]
                    .concat(r)
                    .join(" "),
                  ref: e,
                },
                (function (e, t, n, r, o) {
                  var i = n.options;
                  if (!1 !== i.displayEventTime) {
                    var a = e.eventRange.def,
                      s = e.eventRange.instance,
                      l = !1,
                      u = void 0;
                    if (
                      (a.allDay
                        ? (l = !0)
                        : Xn(e.eventRange.range)
                        ? e.isStart
                          ? (u = vr(e, t, n, null, null, s.range.start, e.end))
                          : e.isEnd
                          ? (u = vr(e, t, n, null, null, e.start, s.range.end))
                          : (l = !0)
                        : (u = vr(e, t, n)),
                      l)
                    ) {
                      var c = { text: n.options.allDayText, view: n.viewApi };
                      return Ho(
                        ei,
                        {
                          hookProps: c,
                          classNames: i.allDayClassNames,
                          content: i.allDayContent,
                          defaultContent: hu,
                          didMount: i.allDayDidMount,
                          willUnmount: i.allDayWillUnmount,
                        },
                        function (e, t, n, i) {
                          return Ho(
                            "td",
                            {
                              ref: e,
                              headers: r + " " + o,
                              className: ["fc-list-event-time"]
                                .concat(t)
                                .join(" "),
                            },
                            i
                          );
                        }
                      );
                    }
                    return Ho("td", { className: "fc-list-event-time" }, u);
                  }
                  return null;
                })(n, s, t, o, a),
                Ho(
                  "td",
                  { "aria-hidden": !0, className: "fc-list-event-graphic" },
                  Ho("span", {
                    className: "fc-list-event-dot",
                    style: { borderColor: c.borderColor || c.backgroundColor },
                  })
                ),
                Ho(
                  "td",
                  {
                    ref: l,
                    headers: i + " " + a,
                    className: "fc-list-event-title",
                  },
                  u
                )
              );
            }
          );
        }),
        t
      );
    })(qo);
  function hu(e) {
    return e.text;
  }
  var vu = (function (e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this;
      return (
        (t.computeDateVars = nn(mu)),
        (t.eventStoreToSegs = nn(t._eventStoreToSegs)),
        (t.state = {
          timeHeaderId: We(),
          eventHeaderId: We(),
          dateHeaderIdRoot: We(),
        }),
        (t.setRootEl = function (e) {
          e
            ? t.context.registerInteractiveComponent(t, { el: e })
            : t.context.unregisterInteractiveComponent(t);
        }),
        t
      );
    }
    return (
      n(t, e),
      (t.prototype.render = function () {
        var e = this,
          t = this.props,
          n = this.context,
          r = [
            "fc-list",
            n.theme.getClass("table"),
            !1 !== n.options.stickyHeaderDates ? "fc-list-sticky" : "",
          ],
          o = this.computeDateVars(t.dateProfile),
          i = o.dayDates,
          a = o.dayRanges,
          s = this.eventStoreToSegs(t.eventStore, t.eventUiBases, a);
        return Ho(
          li,
          { viewSpec: n.viewSpec, elRef: this.setRootEl },
          function (n, o) {
            return Ho(
              "div",
              { ref: n, className: r.concat(o).join(" ") },
              Ho(
                za,
                {
                  liquid: !t.isHeightAuto,
                  overflowX: t.isHeightAuto ? "visible" : "hidden",
                  overflowY: t.isHeightAuto ? "visible" : "auto",
                },
                s.length > 0 ? e.renderSegList(s, i) : e.renderEmptyMessage()
              )
            );
          }
        );
      }),
      (t.prototype.renderEmptyMessage = function () {
        var e = this.context,
          t = e.options,
          n = e.viewApi,
          r = { text: t.noEventsText, view: n };
        return Ho(
          ei,
          {
            hookProps: r,
            classNames: t.noEventsClassNames,
            content: t.noEventsContent,
            defaultContent: gu,
            didMount: t.noEventsDidMount,
            willUnmount: t.noEventsWillUnmount,
          },
          function (e, t, n, r) {
            return Ho(
              "div",
              { className: ["fc-list-empty"].concat(t).join(" "), ref: e },
              Ho("div", { className: "fc-list-empty-cushion", ref: n }, r)
            );
          }
        );
      }),
      (t.prototype.renderSegList = function (e, t) {
        var n = this.context,
          o = n.theme,
          i = n.options,
          a = this.state,
          s = a.timeHeaderId,
          l = a.eventHeaderId,
          u = a.dateHeaderIdRoot,
          c = (function (e) {
            var t,
              n,
              r = [];
            for (t = 0; t < e.length; t += 1)
              (r[(n = e[t]).dayIndex] || (r[n.dayIndex] = [])).push(n);
            return r;
          })(e);
        return Ho(Ra, { unit: "day" }, function (e, n) {
          for (var a = [], d = 0; d < c.length; d += 1) {
            var p = c[d];
            if (p) {
              var f = Jt(t[d]),
                h = u + "-" + f;
              a.push(
                Ho(cu, { key: f, cellId: h, dayDate: t[d], todayRange: n })
              );
              for (
                var v = 0, g = (p = cr(p, i.eventOrder));
                v < g.length;
                v++
              ) {
                var m = g[v];
                a.push(
                  Ho(
                    fu,
                    r(
                      {
                        key: f + ":" + m.eventRange.instance.instanceId,
                        seg: m,
                        isDragging: !1,
                        isResizing: !1,
                        isDateSelecting: !1,
                        isSelected: !1,
                        timeHeaderId: s,
                        eventHeaderId: l,
                        dateHeaderId: h,
                      },
                      gr(m, n, e)
                    )
                  )
                );
              }
            }
          }
          return Ho(
            "table",
            { className: "fc-list-table " + o.getClass("table") },
            Ho(
              "thead",
              null,
              Ho(
                "tr",
                null,
                Ho("th", { scope: "col", id: s }, i.timeHint),
                Ho("th", { scope: "col", "aria-hidden": !0 }),
                Ho("th", { scope: "col", id: l }, i.eventHint)
              )
            ),
            Ho("tbody", null, a)
          );
        });
      }),
      (t.prototype._eventStoreToSegs = function (e, t, n) {
        return this.eventRangesToSegs(
          or(
            e,
            t,
            this.props.dateProfile.activeRange,
            this.context.options.nextDayThreshold
          ).fg,
          n
        );
      }),
      (t.prototype.eventRangesToSegs = function (e, t) {
        for (var n = [], r = 0, o = e; r < o.length; r++) {
          var i = o[r];
          n.push.apply(n, this.eventRangeToSegs(i, t));
        }
        return n;
      }),
      (t.prototype.eventRangeToSegs = function (e, t) {
        var n,
          r,
          o,
          i = this.context.dateEnv,
          a = this.context.options.nextDayThreshold,
          s = e.range,
          l = e.def.allDay,
          u = [];
        for (n = 0; n < t.length; n += 1)
          if (
            (r = Qn(s, t[n])) &&
            ((o = {
              component: this,
              eventRange: e,
              start: r.start,
              end: r.end,
              isStart: e.isStart && r.start.valueOf() === s.start.valueOf(),
              isEnd: e.isEnd && r.end.valueOf() === s.end.valueOf(),
              dayIndex: n,
            }),
            u.push(o),
            !o.isEnd &&
              !l &&
              n + 1 < t.length &&
              s.end < i.add(t[n + 1].start, a))
          ) {
            (o.end = s.end), (o.isEnd = !0);
            break;
          }
        return u;
      }),
      t
    );
  })(Ko);
  function gu(e) {
    return e.text;
  }
  function mu(e) {
    for (
      var t = yt(e.renderRange.start), n = e.renderRange.end, r = [], o = [];
      t < n;

    )
      r.push(t), o.push({ start: t, end: dt(t, 1) }), (t = dt(t, 1));
    return { dayDates: r, dayRanges: o };
  }
  function yu(e) {
    return !1 === e ? null : yn(e);
  }
  var Eu = $o({
      optionRefiners: {
        listDayFormat: yu,
        listDaySideFormat: yu,
        noEventsClassNames: kn,
        noEventsContent: kn,
        noEventsDidMount: kn,
        noEventsWillUnmount: kn,
      },
      views: {
        list: {
          component: vu,
          buttonTextKey: "list",
          listDayFormat: { month: "long", day: "numeric", year: "numeric" },
        },
        listDay: {
          type: "list",
          duration: { days: 1 },
          listDayFormat: { weekday: "long" },
        },
        listWeek: {
          type: "list",
          duration: { weeks: 1 },
          listDayFormat: { weekday: "long" },
          listDaySideFormat: { month: "long", day: "numeric", year: "numeric" },
        },
        listMonth: {
          type: "list",
          duration: { month: 1 },
          listDaySideFormat: { weekday: "long" },
        },
        listYear: {
          type: "list",
          duration: { year: 1 },
          listDaySideFormat: { weekday: "long" },
        },
      },
    }),
    Su = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return n(t, e), t;
    })(Po);
  (Su.prototype.classes = {
    root: "fc-theme-bootstrap",
    table: "table-bordered",
    tableCellShaded: "table-active",
    buttonGroup: "btn-group",
    button: "btn btn-primary",
    buttonActive: "active",
    popover: "popover",
    popoverHeader: "popover-header",
    popoverContent: "popover-body",
  }),
    (Su.prototype.baseIconClass = "fa"),
    (Su.prototype.iconClasses = {
      close: "fa-times",
      prev: "fa-chevron-left",
      next: "fa-chevron-right",
      prevYear: "fa-angle-double-left",
      nextYear: "fa-angle-double-right",
    }),
    (Su.prototype.rtlIconClasses = {
      prev: "fa-chevron-right",
      next: "fa-chevron-left",
      prevYear: "fa-angle-double-right",
      nextYear: "fa-angle-double-left",
    }),
    (Su.prototype.iconOverrideOption = "bootstrapFontAwesome"),
    (Su.prototype.iconOverrideCustomButtonOption = "bootstrapFontAwesome"),
    (Su.prototype.iconOverridePrefix = "fa-");
  var bu = $o({ themeClasses: { bootstrap: Su } }),
    Du = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return n(t, e), t;
    })(Po);
  (Du.prototype.classes = {
    root: "fc-theme-bootstrap5",
    tableCellShaded: "fc-theme-bootstrap5-shaded",
    buttonGroup: "btn-group",
    button: "btn btn-primary",
    buttonActive: "active",
    popover: "popover",
    popoverHeader: "popover-header",
    popoverContent: "popover-body",
  }),
    (Du.prototype.baseIconClass = "bi"),
    (Du.prototype.iconClasses = {
      close: "bi-x-lg",
      prev: "bi-chevron-left",
      next: "bi-chevron-right",
      prevYear: "bi-chevron-double-left",
      nextYear: "bi-chevron-double-right",
    }),
    (Du.prototype.rtlIconClasses = {
      prev: "bi-chevron-right",
      next: "bi-chevron-left",
      prevYear: "bi-chevron-double-right",
      nextYear: "bi-chevron-double-left",
    }),
    (Du.prototype.iconOverrideOption = "buttonIcons"),
    (Du.prototype.iconOverrideCustomButtonOption = "icon"),
    (Du.prototype.iconOverridePrefix = "bi-");
  var Cu = $o({ themeClasses: { bootstrap5: Du } }),
    wu = $o({
      eventSourceDefs: [
        {
          parseMeta: function (e) {
            var t = e.googleCalendarId;
            return (
              !t &&
                e.url &&
                (t = (function (e) {
                  var t;
                  return /^[^/]+@([^/.]+\.)*(google|googlemail|gmail)\.com$/.test(
                    e
                  )
                    ? e
                    : (t =
                        /^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^/]*)/.exec(
                          e
                        )) ||
                      (t =
                        /^https?:\/\/www.google.com\/calendar\/feeds\/([^/]*)/.exec(
                          e
                        ))
                    ? decodeURIComponent(t[1])
                    : null;
                })(e.url)),
              t
                ? {
                    googleCalendarId: t,
                    googleCalendarApiKey: e.googleCalendarApiKey,
                    googleCalendarApiBase: e.googleCalendarApiBase,
                    extraParams: e.extraParams,
                  }
                : null
            );
          },
          fetch: function (e, t, n) {
            var o = e.context,
              i = o.dateEnv,
              a = o.options,
              s = e.eventSource.meta,
              l = s.googleCalendarApiKey || a.googleCalendarApiKey;
            if (l) {
              var u = (function (e) {
                  var t = e.googleCalendarApiBase;
                  return (
                    t ||
                      (t = "https://www.googleapis.com/calendar/v3/calendars"),
                    t + "/" + encodeURIComponent(e.googleCalendarId) + "/events"
                  );
                })(s),
                c = s.extraParams,
                d = "function" == typeof c ? c() : c,
                p = (function (e, t, n, o) {
                  var i, a, s;
                  return (
                    o.canComputeOffset
                      ? ((a = o.formatIso(e.start)), (s = o.formatIso(e.end)))
                      : ((a = dt(e.start, -1).toISOString()),
                        (s = dt(e.end, 1).toISOString())),
                    (i = r(r({}, n || {}), {
                      key: t,
                      timeMin: a,
                      timeMax: s,
                      singleEvents: !0,
                      maxResults: 9999,
                    })),
                    "local" !== o.timeZone && (i.timeZone = o.timeZone),
                    i
                  );
                })(e.range, l, d, i);
              Mi(
                "GET",
                u,
                p,
                function (e, r) {
                  var o, i;
                  e.error
                    ? n({
                        message: "Google Calendar API: " + e.error.message,
                        errors: e.error.errors,
                        xhr: r,
                      })
                    : t({
                        rawEvents:
                          ((o = e.items),
                          (i = p.timeZone),
                          o.map(function (e) {
                            return (function (e, t) {
                              var n = e.htmlLink || null;
                              return (
                                n &&
                                  t &&
                                  (n = (function (e, t) {
                                    return e.replace(
                                      /(\?.*?)?(#|$)/,
                                      function (e, n, r) {
                                        return (n ? n + "&" : "?") + t + r;
                                      }
                                    );
                                  })(n, "ctz=" + t)),
                                {
                                  id: e.id,
                                  title: e.summary,
                                  start: e.start.dateTime || e.start.date,
                                  end: e.end.dateTime || e.end.date,
                                  url: n,
                                  location: e.location,
                                  description: e.description,
                                  attachments: e.attachments || [],
                                  extendedProps:
                                    (e.extendedProperties || {}).shared || {},
                                }
                              );
                            })(e, i);
                          })),
                        xhr: r,
                      });
                },
                function (e, t) {
                  n({ message: e, xhr: t });
                }
              );
            } else
              n({
                message:
                  "Specify a googleCalendarApiKey. See http://fullcalendar.io/docs/google_calendar/",
              });
          },
        },
      ],
      optionRefiners: { googleCalendarApiKey: String },
      eventSourceRefiners: {
        googleCalendarApiKey: String,
        googleCalendarId: String,
        googleCalendarApiBase: String,
        extraParams: kn,
      },
    });
  return (
    Ni.push(el, _l, uu, Eu, bu, Cu, wu),
    (e.BASE_OPTION_DEFAULTS = Sn),
    (e.BASE_OPTION_REFINERS = En),
    (e.BaseComponent = qo),
    (e.BgEvent = hs),
    (e.BootstrapTheme = Su),
    (e.Calendar = Rs),
    (e.CalendarApi = Lr),
    (e.CalendarContent = ga),
    (e.CalendarDataManager = Li),
    (e.CalendarDataProvider = Zi),
    (e.CalendarRoot = Ea),
    (e.Component = No),
    (e.ContentHook = ni),
    (e.CustomContentRenderContext = ti),
    (e.DateComponent = Ko),
    (e.DateEnv = Gr),
    (e.DateProfileGenerator = fi),
    (e.DayCellContent = cs),
    (e.DayCellRoot = ps),
    (e.DayGridView = Cl),
    (e.DayHeader = ka),
    (e.DaySeriesModel = Ma),
    (e.DayTable = Dl),
    (e.DayTableModel = Ia),
    (e.DayTableSlicer = bl),
    (e.DayTimeCols = ru),
    (e.DayTimeColsSlicer = nu),
    (e.DayTimeColsView = su),
    (e.DelayedRunner = Hi),
    (e.Draggable = $s),
    (e.ElementDragging = sa),
    (e.ElementScrollController = Mo),
    (e.Emitter = To),
    (e.EventApi = Ur),
    (e.EventRoot = is),
    (e.EventSourceApi = ke),
    (e.FeaturefulElementDragging = Us),
    (e.Fragment = Lo),
    (e.Interaction = ra),
    (e.ListView = vu),
    (e.MoreLinkRoot = Ss),
    (e.MountHook = oi),
    (e.NamedTimeZoneImpl = function (e) {
      this.timeZoneName = e;
    }),
    (e.NowIndicatorRoot = ls),
    (e.NowTimer = Ra),
    (e.PointerDragging = Ms),
    (e.PositionCache = ko),
    (e.RefMap = ja),
    (e.RenderHook = ei),
    (e.ScrollController = xo),
    (e.ScrollResponder = Bo),
    (e.Scroller = za),
    (e.SegHierarchy = Xi),
    (e.SimpleScrollGrid = os),
    (e.Slicer = Pa),
    (e.Splitter = uo),
    (e.StandardEvent = as),
    (e.Table = El),
    (e.TableDateCell = Ca),
    (e.TableDowCell = _a),
    (e.TableView = tl),
    (e.Theme = Po),
    (e.ThirdPartyDraggable = Qs),
    (e.TimeCols = eu),
    (e.TimeColsSlatsCoords = Hl),
    (e.TimeColsView = Pl),
    (e.ViewApi = Pr),
    (e.ViewContextType = zo),
    (e.ViewRoot = li),
    (e.WeekNumberRoot = gs),
    (e.WindowScrollController = Io),
    (e.addDays = dt),
    (e.addDurations = Gt),
    (e.addMs = pt),
    (e.addWeeks = ct),
    (e.allowContextMenu = Qe),
    (e.allowSelection = $e),
    (e.applyMutationToEventStore = xr),
    (e.applyStyle = He),
    (e.applyStyleProp = Oe),
    (e.asCleanDays = function (e) {
      return e.years || e.months || e.milliseconds ? 0 : e.days;
    }),
    (e.asRoughMinutes = function (e) {
      return Zt(e) / 6e4;
    }),
    (e.asRoughMs = Zt),
    (e.asRoughSeconds = function (e) {
      return Zt(e) / 1e3;
    }),
    (e.binarySearch = na),
    (e.buildClassNameNormalizer = ii),
    (e.buildDayRanges = ou),
    (e.buildDayTableModel = wl),
    (e.buildEntryKey = $i),
    (e.buildEventApis = Vr),
    (e.buildEventRangeKey = yr),
    (e.buildHashFromArray = function (e, t) {
      for (var n = {}, r = 0; r < e.length; r += 1) {
        var o = t(e[r], r);
        n[o[0]] = o[1];
      }
      return n;
    }),
    (e.buildIsoString = $t),
    (e.buildNavLinkAttrs = go),
    (e.buildSegCompareObj = dr),
    (e.buildSegTimeText = vr),
    (e.buildSlatMetas = au),
    (e.buildTimeColsModel = lu),
    (e.collectFromHash = Ut),
    (e.combineEventUis = Un),
    (e.compareByFieldSpec = nt),
    (e.compareByFieldSpecs = tt),
    (e.compareNumbers = at),
    (e.compareObjs = At),
    (e.computeEarliestSegStart = Cs),
    (e.computeEdges = Do),
    (e.computeFallbackHeaderFormat = Sa),
    (e.computeHeightAndMargins = function (e) {
      return (
        e.getBoundingClientRect().height +
        (function (e) {
          var t = window.getComputedStyle(e);
          return parseInt(t.marginTop, 10) + parseInt(t.marginBottom, 10);
        })(e)
      );
    }),
    (e.computeInnerRect = Co),
    (e.computeRect = wo),
    (e.computeSegDraggable = pr),
    (e.computeSegEndResizable = hr),
    (e.computeSegStartResizable = fr),
    (e.computeShrinkWidth = Ga),
    (e.computeSmallestCellWidth = lt),
    (e.computeVisibleDayRange = Zn),
    (e.config = la),
    (e.constrainPoint = oo),
    (e.createAriaClickAttrs = je),
    (e.createContext = Uo),
    (e.createDuration = zt),
    (e.createElement = Ho),
    (e.createEmptyEventStore = function () {
      return { defs: {}, instances: {} };
    }),
    (e.createEventInstance = Tt),
    (e.createEventUi = Ln),
    (e.createFormatter = yn),
    (e.createPlugin = $o),
    (e.createPortal = Wo),
    (e.createRef = Ao),
    (e.diffDates = Kn),
    (e.diffDayAndTime = vt),
    (e.diffDays = ht),
    (e.diffPoints = ao),
    (e.diffWeeks = ft),
    (e.diffWholeDays = mt),
    (e.diffWholeWeeks = gt),
    (e.disableCursor = Ze),
    (e.elementClosest = Me),
    (e.elementMatches = Ie),
    (e.enableCursor = Xe),
    (e.eventTupleToStore = Mn),
    (e.filterEventStoreDefs = Nn),
    (e.filterHash = Mt),
    (e.findDirectChildren = function (e, t) {
      for (
        var n = e instanceof HTMLElement ? [e] : e, r = [], o = 0;
        o < n.length;
        o += 1
      )
        for (var i = n[o].children, a = 0; a < i.length; a += 1) {
          var s = i[a];
          (t && !Ie(s, t)) || r.push(s);
        }
      return r;
    }),
    (e.findElements = Pe),
    (e.flexibleCompare = rt),
    (e.flushSync = Vo),
    (e.formatDate = function (e, t) {
      void 0 === t && (t = {});
      var n = Jr(t),
        r = yn(t),
        o = n.createMarkerMeta(e);
      return o ? n.format(o.marker, r, { forcedTzo: o.forcedTzo }) : "";
    }),
    (e.formatDayString = Jt),
    (e.formatIsoTimeString = Qt),
    (e.formatRange = function (e, t, n) {
      var r = Jr("object" == typeof n && n ? n : {}),
        o = yn(n),
        i = r.createMarkerMeta(e),
        a = r.createMarkerMeta(t);
      return i && a
        ? r.formatRange(i.marker, a.marker, o, {
            forcedStartTzo: i.forcedTzo,
            forcedEndTzo: a.forcedTzo,
            isEndExclusive: n.isEndExclusive,
            defaultSeparator: Sn.defaultRangeSeparator,
          })
        : "";
    }),
    (e.getAllowYScrolling = Ya),
    (e.getCanVGrowWithinCell = so),
    (e.getClippingParents = _o),
    (e.getDateMeta = po),
    (e.getDayClassNames = fo),
    (e.getDefaultEventEnd = kr),
    (e.getElRoot = Le),
    (e.getElSeg = sr),
    (e.getEntrySpanEnd = Ki),
    (e.getEventClassNames = mr),
    (e.getEventTargetViaRoot = Ae),
    (e.getIsRtlScrollbarOnLeft = Eo),
    (e.getRectCenter = io),
    (e.getRelevantEvents = In),
    (e.getScrollGridClassNames = Qa),
    (e.getScrollbarWidths = So),
    (e.getSectionClassNames = es),
    (e.getSectionHasLiquidHeight = qa),
    (e.getSegAnchorAttrs = Er),
    (e.getSegMeta = gr),
    (e.getSlotClassNames = function (e, t) {
      var n = ["fc-slot", "fc-slot-" + ut[e.dow]];
      return (
        e.isDisabled
          ? n.push("fc-slot-disabled")
          : (e.isToday &&
              (n.push("fc-slot-today"), n.push(t.getClass("today"))),
            e.isPast && n.push("fc-slot-past"),
            e.isFuture && n.push("fc-slot-future")),
        n
      );
    }),
    (e.getStickyFooterScrollbar = rs),
    (e.getStickyHeaderDates = ns),
    (e.getUnequalProps = Ot),
    (e.getUniqueDomId = We),
    (e.globalLocales = qr),
    (e.globalPlugins = Ni),
    (e.greatestDurationDenominator = Kt),
    (e.groupIntersectingEntries = Ji),
    (e.guid = Ye),
    (e.hasBgRendering = ir),
    (e.hasShrinkWidth = Ja),
    (e.identity = kn),
    (e.interactionSettingsStore = aa),
    (e.interactionSettingsToStore = ia),
    (e.intersectRanges = Qn),
    (e.intersectRects = ro),
    (e.intersectSpans = ea),
    (e.isArraysEqual = tn),
    (e.isColPropsEqual = Xa),
    (e.isDateSelectionValid = Oa),
    (e.isDateSpansEqual = Dr),
    (e.isInt = st),
    (e.isInteractionValid = Ha),
    (e.isMultiDayRange = Xn),
    (e.isPropsEqual = Ht),
    (e.isPropsValid = La),
    (e.isValidDate = _t),
    (e.joinSpans = Qi),
    (e.listenBySelector = Fe),
    (e.mapHash = It),
    (e.memoize = nn),
    (e.memoizeArraylike = function (e, t, n) {
      var r = this,
        o = [],
        i = [];
      return function (a) {
        for (var s = o.length, l = a.length, u = 0; u < s; u += 1)
          if (a[u]) {
            if (!tn(o[u], a[u])) {
              n && n(i[u]);
              var c = e.apply(r, a[u]);
              (t && t(c, i[u])) || (i[u] = c);
            }
          } else n && n(i[u]);
        for (; u < l; u += 1) i[u] = e.apply(r, a[u]);
        return (o = a), i.splice(l), i;
      };
    }),
    (e.memoizeHashlike = function (e, t, n) {
      var r = this,
        o = {},
        i = {};
      return function (a) {
        var s = {};
        for (var l in a)
          if (i[l])
            if (tn(o[l], a[l])) s[l] = i[l];
            else {
              n && n(i[l]);
              var u = e.apply(r, a[l]);
              s[l] = t && t(u, i[l]) ? i[l] : u;
            }
          else s[l] = e.apply(r, a[l]);
        return (o = a), (i = s), s;
      };
    }),
    (e.memoizeObjArg = rn),
    (e.mergeEventStores = Pn),
    (e.multiplyDuration = qt),
    (e.padStart = ot),
    (e.parseBusinessHours = to),
    (e.parseClassNames = Hn),
    (e.parseDragMeta = ca),
    (e.parseEventDef = qn),
    (e.parseFieldSpecs = et),
    (e.parseMarker = jr),
    (e.pointInsideRect = no),
    (e.preventContextMenu = Je),
    (e.preventDefault = Ve),
    (e.preventSelection = Ke),
    (e.rangeContainsMarker = rr),
    (e.rangeContainsRange = nr),
    (e.rangesEqual = er),
    (e.rangesIntersect = tr),
    (e.refineEventDef = jn),
    (e.refineProps = Tn),
    (e.removeElement = xe),
    (e.removeExact = function (e, t) {
      for (var n = 0, r = 0; r < e.length; )
        e[r] === t ? (e.splice(r, 1), (n += 1)) : (r += 1);
      return n;
    }),
    (e.render = Oo),
    (e.renderChunkContent = Za),
    (e.renderFill = fs),
    (e.renderMicroColGroup = Ka),
    (e.renderScrollShim = ts),
    (e.requestJson = Mi),
    (e.sanitizeShrinkWidth = $a),
    (e.setElSeg = ar),
    (e.setRef = Xo),
    (e.sliceEventStore = or),
    (e.sliceEvents = function (e, t) {
      return or(
        e.eventStore,
        e.eventUiBases,
        e.dateProfile.activeRange,
        t ? e.nextDayThreshold : null
      ).fg;
    }),
    (e.sortEventSegs = cr),
    (e.startOfDay = yt),
    (e.translateRect = function (e, t, n) {
      return {
        left: e.left + t,
        right: e.right + t,
        top: e.top + n,
        bottom: e.bottom + n,
      };
    }),
    (e.triggerDateSelect = Rr),
    (e.unmountComponentAtNode = Fo),
    (e.unpromisify = Ro),
    (e.version = "5.11.5"),
    (e.whenTransitionDone = ze),
    (e.wholeDivideDurations = Xt),
    Object.defineProperty(e, "__esModule", { value: !0 }),
    e
  );
})({});
