webpackJsonp([22], {
    Jrax: function (n, t, e) {
        (function (t) {
            var e = 1 / 0,
                r = 9007199254740991,
                o = 1.7976931348623157e308,
                i = NaN,
                a = 4294967295,
                u = "[object Arguments]",
                c = "[object Function]",
                f = "[object GeneratorFunction]",
                l = "[object Map]",
                s = "[object Set]",
                p = "[object String]",
                d = "[object Symbol]",
                m = /^\s+|\s+$/g,
                y = /^[-+]0x[0-9a-f]+$/i,
                h = /^0b[01]+$/i,
                v = /^\[object .+?Constructor\]$/,
                b = /^0o[0-7]+$/i,
                g = /^(?:0|[1-9]\d*)$/,
                j = "[\\ud800-\\udfff]",
                x = "[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",
                w = "\\ud83c[\\udffb-\\udfff]",
                O = "[^\\ud800-\\udfff]",
                _ = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                k = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                S = "(?:" + x + "|" + w + ")" + "?",
                P = "[\\ufe0e\\ufe0f]?" + S + ("(?:\\u200d(?:" + [O, _, k].join("|") + ")[\\ufe0e\\ufe0f]?" + S + ")*"),
                E = "(?:" + [O + x + "?", x, _, k, j].join("|") + ")",
                A = RegExp(w + "(?=" + w + ")|" + E + P, "g"),
                $ = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),
                z = parseInt,
                M = "object" == typeof t && t && t.Object === Object && t,
                N = "object" == typeof self && self && self.Object === Object && self,
                R = M || N || Function("return this")();

            function I(n, t) {
                return function (n, t) {
                    for (var e = -1, r = n ? n.length : 0, o = Array(r); ++e < r;) o[e] = t(n[e], e, n);
                    return o
                }(t, function (t) {
                    return n[t]
                })
            }

            function D(n) {
                var t = -1,
                    e = Array(n.size);
                return n.forEach(function (n, r) {
                    e[++t] = [r, n]
                }), e
            }

            function F(n) {
                var t = -1,
                    e = Array(n.size);
                return n.forEach(function (n) {
                    e[++t] = n
                }), e
            }

            function T(n) {
                return function (n) {
                    return $.test(n)
                }(n) ? function (n) {
                    return n.match(A) || []
                }(n) : function (n) {
                    return n.split("")
                }(n)
            }
            var W, J, L, V = Function.prototype,
                C = Object.prototype,
                G = R["__core-js_shared__"],
                q = (W = /[^.]+$/.exec(G && G.keys && G.keys.IE_PROTO || "")) ? "Symbol(src)_1." + W : "",
                K = V.toString,
                X = C.hasOwnProperty,
                Y = C.toString,
                B = RegExp("^" + K.call(X).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                H = R.Symbol,
                U = H ? H.iterator : void 0,
                Q = C.propertyIsEnumerable,
                Z = Math.floor,
                nn = (J = Object.keys, L = Object, function (n) {
                    return J(L(n))
                }),
                tn = Math.random,
                en = vn(R, "DataView"),
                rn = vn(R, "Map"),
                on = vn(R, "Promise"),
                an = vn(R, "Set"),
                un = vn(R, "WeakMap"),
                cn = jn(en),
                fn = jn(rn),
                ln = jn(on),
                sn = jn(an),
                pn = jn(un);

            function dn(n, t) {
                var e = wn(n) || function (n) {
                        return function (n) {
                            return Sn(n) && On(n)
                        }(n) && X.call(n, "callee") && (!Q.call(n, "callee") || Y.call(n) == u)
                    }(n) ? function (n, t) {
                        for (var e = -1, r = Array(n); ++e < n;) r[e] = t(e);
                        return r
                    }(n.length, String) : [],
                    r = e.length,
                    o = !!r;
                for (var i in n) !t && !X.call(n, i) || o && ("length" == i || gn(i, r)) || e.push(i);
                return e
            }

            function mn(n) {
                return !(!kn(n) || q && q in n) && (_n(n) || function (n) {
                    var t = !1;
                    if (null != n && "function" != typeof n.toString) try {
                        t = !!(n + "")
                    } catch (n) {}
                    return t
                }(n) ? B : v).test(jn(n))
            }

            function yn(n) {
                if (e = (t = n) && t.constructor, r = "function" == typeof e && e.prototype || C, t !== r) return nn(n);
                var t, e, r, o = [];
                for (var i in Object(n)) X.call(n, i) && "constructor" != i && o.push(i);
                return o
            }

            function hn(n, t) {
                return n + Z(tn() * (t - n + 1))
            }

            function vn(n, t) {
                var e = function (n, t) {
                    return null == n ? void 0 : n[t]
                }(n, t);
                return mn(e) ? e : void 0
            }
            var bn = function (n) {
                return Y.call(n)
            };

            function gn(n, t) {
                return !!(t = null == t ? r : t) && ("number" == typeof n || g.test(n)) && n > -1 && n % 1 == 0 && n < t
            }

            function jn(n) {
                if (null != n) {
                    try {
                        return K.call(n)
                    } catch (n) {}
                    try {
                        return n + ""
                    } catch (n) {}
                }
                return ""
            }

            function xn(n, t, r) {
                var a, u, c, f = -1,
                    v = function (n) {
                        if (!n) return [];
                        if (On(n)) return function (n) {
                            return "string" == typeof n || !wn(n) && Sn(n) && Y.call(n) == p
                        }(n) ? T(n) : function (n, t) {
                            var e = -1,
                                r = n.length;
                            for (t || (t = Array(r)); ++e < r;) t[e] = n[e];
                            return t
                        }(n);
                        if (U && n[U]) return function (n) {
                            for (var t, e = []; !(t = n.next()).done;) e.push(t.value);
                            return e
                        }(n[U]());
                        var t = bn(n);
                        return (t == l ? D : t == s ? F : Pn)(n)
                    }(n),
                    g = v.length,
                    j = g - 1;
                for ((r ? function (n, t, e) {
                        if (!kn(e)) return !1;
                        var r = typeof t;
                        return !!("number" == r ? On(e) && gn(t, e.length) : "string" == r && t in e) && function (n, t) {
                            return n === t || n != n && t != t
                        }(e[t], n)
                    }(n, t, r) : void 0 === t) ? t = 1 : (a = function (n) {
                        var t = function (n) {
                                if (!n) return 0 === n ? n : 0;
                                if ((n = function (n) {
                                        if ("number" == typeof n) return n;
                                        if (function (n) {
                                                return "symbol" == typeof n || Sn(n) && Y.call(n) == d
                                            }(n)) return i;
                                        if (kn(n)) {
                                            var t = "function" == typeof n.valueOf ? n.valueOf() : n;
                                            n = kn(t) ? t + "" : t
                                        }
                                        if ("string" != typeof n) return 0 === n ? n : +n;
                                        n = n.replace(m, "");
                                        var e = h.test(n);
                                        return e || b.test(n) ? z(n.slice(2), e ? 2 : 8) : y.test(n) ? i : +n
                                    }(n)) === e || n === -e) {
                                    var t = n < 0 ? -1 : 1;
                                    return t * o
                                }
                                return n == n ? n : 0
                            }(n),
                            r = t % 1;
                        return t == t ? r ? t - r : t : 0
                    }(t), u = 0, c = g, a == a && (void 0 !== c && (a = a <= c ? a : c), void 0 !== u && (a = a >= u ? a : u)), t = a); ++f < t;) {
                    var x = hn(f, j),
                        w = v[x];
                    v[x] = v[f], v[f] = w
                }
                return v.length = t, v
            }(en && "[object DataView]" != bn(new en(new ArrayBuffer(1))) || rn && bn(new rn) != l || on && "[object Promise]" != bn(on.resolve()) || an && bn(new an) != s || un && "[object WeakMap]" != bn(new un)) && (bn = function (n) {
                var t = Y.call(n),
                    e = "[object Object]" == t ? n.constructor : void 0,
                    r = e ? jn(e) : void 0;
                if (r) switch (r) {
                    case cn:
                        return "[object DataView]";
                    case fn:
                        return l;
                    case ln:
                        return "[object Promise]";
                    case sn:
                        return s;
                    case pn:
                        return "[object WeakMap]"
                }
                return t
            });
            var wn = Array.isArray;

            function On(n) {
                return null != n && function (n) {
                    return "number" == typeof n && n > -1 && n % 1 == 0 && n <= r
                }(n.length) && !_n(n)
            }

            function _n(n) {
                var t = kn(n) ? Y.call(n) : "";
                return t == c || t == f
            }

            function kn(n) {
                var t = typeof n;
                return !!n && ("object" == t || "function" == t)
            }

            function Sn(n) {
                return !!n && "object" == typeof n
            }

            function Pn(n) {
                return n ? I(n, function (n) {
                    return On(n) ? dn(n) : yn(n)
                }(n)) : []
            }
            n.exports = function (n) {
                return xn(n, a)
            }
        }).call(t, e("DuR2"))
    },
    njMu: function (n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, o, i, a = e("Xxa5"),
            u = e.n(a),
            c = e("GiK3"),
            f = e.n(c),
            l = e("mtWM"),
            s = e.n(l),
            p = e("r3rY"),
            d = e("U1XH"),
            m = e("Jrax"),
            y = e.n(m),
            h = e("w2vo"),
            v = e("eSoy"),
            b = (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, function (n, t, e, o) {
                var i = n && n.defaultProps,
                    a = arguments.length - 3;
                if (t || 0 === a || (t = {}), t && i)
                    for (var u in i) void 0 === t[u] && (t[u] = i[u]);
                else t || (t = i || {});
                if (1 === a) t.children = o;
                else if (a > 1) {
                    for (var c = Array(a), f = 0; f < a; f++) c[f] = arguments[f + 3];
                    t.children = c
                }
                return {
                    $$typeof: r,
                    type: n,
                    key: void 0 === e ? null : "" + e,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }),
            g = function () {
                return function (n, t) {
                    if (Array.isArray(n)) return n;
                    if (Symbol.iterator in Object(n)) return function (n, t) {
                        var e = [],
                            r = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (var a, u = n[Symbol.iterator](); !(r = (a = u.next()).done) && (e.push(a.value), !t || e.length !== t); r = !0);
                        } catch (n) {
                            o = !0, i = n
                        } finally {
                            try {
                                !r && u.return && u.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return e
                    }(n, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            j = (o = ["\n  .card.is-scotch.is-promo {\n    border-bottom: 4px solid #9d00ff;\n  }\n\n  .sponsor-label {\n    font-size: 11px !important;\n    opacity: 0.7;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n  }\n\n  .card-content {\n    display: flex;\n    position: relative;\n  }\n\n  .logo {\n    flex: none;\n    border-radius: none !important;\n    display: block;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    img {\n      width: 25px;\n      border-radius: 0 !important;\n      margin-left: 0 !important;\n      margin-right: 0 !important;\n    }\n\n    svg {\n      color: #e2485f;\n      margin-left: 8px;\n      margin-right: 8px;\n    }\n  }\n\n  .title {\n    flex: 3;\n    font-weight: normal;\n    font-size: 16px !important;\n    line-height: 1.3 !important;\n    margin: 0 !important;\n    display: flex;\n    align-items: center;\n  }\n\n  p {\n    font-size: 15px;\n    line-height: 1.5 !important;\n    margin: 0 !important;\n  }\n"], i = ["\n  .card.is-scotch.is-promo {\n    border-bottom: 4px solid #9d00ff;\n  }\n\n  .sponsor-label {\n    font-size: 11px !important;\n    opacity: 0.7;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n  }\n\n  .card-content {\n    display: flex;\n    position: relative;\n  }\n\n  .logo {\n    flex: none;\n    border-radius: none !important;\n    display: block;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    img {\n      width: 25px;\n      border-radius: 0 !important;\n      margin-left: 0 !important;\n      margin-right: 0 !important;\n    }\n\n    svg {\n      color: #e2485f;\n      margin-left: 8px;\n      margin-right: 8px;\n    }\n  }\n\n  .title {\n    flex: 3;\n    font-weight: normal;\n    font-size: 16px !important;\n    line-height: 1.3 !important;\n    margin: 0 !important;\n    display: flex;\n    align-items: center;\n  }\n\n  p {\n    font-size: 15px;\n    line-height: 1.5 !important;\n    margin: 0 !important;\n  }\n"], Object.freeze(Object.defineProperties(o, {
                raw: {
                    value: Object.freeze(i)
                }
            })));
        var x = function (n) {
            return n.replace("[timestamp]", (new Date).getTime())
        };
        var w = h.a.div(j);
        t.default = function (n) {
            var t, e, r = (t = u.a.mark(function n() {
                    var t, e, r;
                    return u.a.wrap(function (n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                if (!(t = Object(d.a)("ad_id") || null)) {
                                    n.next = 7;
                                    break
                                }
                                return n.next = 4, s.a.get("/api/syndicate/" + t);
                            case 4:
                                n.t0 = n.sent, n.next = 10;
                                break;
                            case 7:
                                return n.next = 9, s.a.get("/api/syndicate");
                            case 9:
                                n.t0 = n.sent;
                            case 10:
                                e = n.t0, r = e.data, l && (r = r.slice(l)), h && (r = r.slice(0, h)), "true" == O && (r = y()(r)), E(r);
                            case 16:
                            case "end":
                                return n.stop()
                        }
                    }, n, this)
                }), e = function () {
                    var n = t.apply(this, arguments);
                    return new Promise(function (t, e) {
                        return function r(o, i) {
                            try {
                                var a = n[o](i),
                                    u = a.value
                            } catch (n) {
                                return void e(n)
                            }
                            if (!a.done) return Promise.resolve(u).then(function (n) {
                                r("next", n)
                            }, function (n) {
                                r("throw", n)
                            });
                            t(u)
                        }("next")
                    })
                }, function () {
                    return e.apply(this, arguments)
                }),
                o = n.isSidebar,
                i = void 0 !== o && o,
                a = n.offset,
                l = void 0 === a ? 0 : a,
                m = n.take,
                h = void 0 === m ? 2 : m,
                j = n.shuffle,
                O = void 0 === j || j,
                _ = Object(c.useRef)(null),
                k = Object(c.useState)(null),
                S = g(k, 2),
                P = S[0],
                E = S[1],
                A = Object(c.useState)("auto"),
                $ = g(A, 2),
                z = $[0],
                M = $[1];
            return Object(c.useEffect)(function () {
                var n;
                r(), n = _.current.clientWidth, n = 50 * Math.round(n / 50), M(n)
            }, []), f.a.createElement(w, {
                ref: _
            }, P && P.map(function (n) {
                var t = n.title,
                    e = (n.description, i && n.sidebar_image || n.image),
                    r = i && n.sidebar_link || n.link,
                    o = Object(p.a)(e, z),
                    a = {
                        backgroundImage: "url('" + o + "')"
                    };
                return b("div", {
                    className: "is-fullwidth"
                }, n.id, b("div", {
                    className: "card is-scotch is-promo"
                }, void 0, b("a", {
                    className: "card-image",
                    href: r,
                    title: t
                }, void 0, i ? b("img", {
                    src: o,
                    alt: t
                }) : b("div", {
                    className: "image is-2by1",
                    style: a
                })), n.tracking_pixel && b("img", {
                    src: x(n.tracking_pixel)
                }), b("div", {
                    className: "card-content"
                }, void 0, b("div", {
                    className: "logo"
                }, void 0, b("img", {
                    className: "scotch",
                    src: "/img/school-logo-sticker.png"
                }), b(v.FontAwesomeIcon, {
                    icon: ["fas", "heart"]
                })), b("h2", {
                    className: "title is-5"
                }, void 0, b("a", {
                    href: r
                }, void 0, t)))))
            }))
        }
    },
    r3rY: function (n, t, e) {
        "use strict";
        e.d(t, "a", function () {
            return s
        });
        var r, o = e("GiK3"),
            i = e.n(o),
            a = e("7VJ8"),
            u = e.n(a),
            c = (e("eSoy"), r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, function (n, t, e, o) {
                var i = n && n.defaultProps,
                    a = arguments.length - 3;
                if (t || 0 === a || (t = {}), t && i)
                    for (var u in i) void 0 === t[u] && (t[u] = i[u]);
                else t || (t = i || {});
                if (1 === a) t.children = o;
                else if (a > 1) {
                    for (var c = Array(a), f = 0; f < a; f++) c[f] = arguments[f + 3];
                    t.children = c
                }
                return {
                    $$typeof: r,
                    type: n,
                    key: void 0 === e ? null : "" + e,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }),
            f = function () {
                function n(n, t) {
                    for (var e = 0; e < t.length; e++) {
                        var r = t[e];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r)
                    }
                }
                return function (t, e, r) {
                    return e && n(t.prototype, e), r && n(t, r), t
                }
            }();

        function l(n, t) {
            if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? n : t
        }
        var s = function (n, t) {
                var e = n.includes("cloudinary"),
                    r = Math.round(window.devicePixelRatio) || 1;
                n = (n = (n = n.replace("https://cdn.scotch.io", "")).replace("https://res.cloudinary.com/scotch/image/upload/", "")).replace("https://scotch-res.cloudinary.com/image/upload/", "");
                var o = "https://scotch-res.cloudinary.com/image/upload/";
                return o += e ? "w_" + t + ",dpr_" + r + ",q_auto:good,f_auto/" + n : "w_" + t + ",dpr_" + r + ",q_auto:good,f_auto/media/" + n
            },
            p = function (n) {
                function t() {
                    var n, e, r;
                    ! function (n, t) {
                        if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    for (var o = arguments.length, i = Array(o), a = 0; a < o; a++) i[a] = arguments[a];
                    return e = r = l(this, (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(n, [this].concat(i))), r.state = {
                        width: "350"
                    }, l(r, e)
                }
                return function (n, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    n.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: n,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : n.__proto__ = t)
                }(t, o["PureComponent"]), f(t, [{
                    key: "render",
                    value: function () {
                        var n = this,
                            t = this.state.width,
                            e = this.props,
                            r = e.article,
                            o = (e.showPremium, e.cardStyle),
                            a = r.local_url || r.link,
                            u = (r.is_free, r.image_thumbnail || r.image);
                        "horizontal" === o && (u = r.image), u && (u = s(u, t));
                        var f = {
                            backgroundImage: "url('" + u + "')"
                        };
                        return i.a.createElement("a", {
                            className: "card-image",
                            href: a,
                            title: r.title,
                            ref: function (t) {
                                return n.container = t
                            }
                        }, c("div", {
                            className: "image is-2by1",
                            style: f
                        }))
                    }
                }]), t
            }(),
            d = Object(o.memo)(function (n) {
                return n.isLazyLoaded ? c(u.a, {
                    height: 200,
                    offset: 250,
                    once: !0
                }, void 0, i.a.createElement(p, n)) : i.a.createElement(p, n)
            });
        d.defaultProps = {
            isLazyLoaded: !0
        }, t.b = d
    }
});