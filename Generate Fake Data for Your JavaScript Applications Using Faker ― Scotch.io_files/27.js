webpackJsonp([27], {
    Jl5D: function (e, n, o) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r, t, a, i = o("Xxa5"),
            s = o.n(i),
            c = o("GiK3"),
            u = o.n(c),
            l = o("eSoy"),
            p = o("w2vo"),
            f = o("Rjr+"),
            b = o("31U9"),
            m = Object.assign || function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var o = arguments[n];
                    for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                }
                return e
            },
            v = (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, function (e, n, o, t) {
                var a = e && e.defaultProps,
                    i = arguments.length - 3;
                if (n || 0 === i || (n = {}), n && a)
                    for (var s in a) void 0 === n[s] && (n[s] = a[s]);
                else n || (n = a || {});
                if (1 === i) n.children = t;
                else if (i > 1) {
                    for (var c = Array(i), u = 0; u < i; u++) c[u] = arguments[u + 3];
                    n.children = c
                }
                return {
                    $$typeof: r,
                    type: e,
                    key: void 0 === o ? null : "" + o,
                    ref: null,
                    props: n,
                    _owner: null
                }
            }),
            k = function () {
                function e(e, n) {
                    for (var o = 0; o < n.length; o++) {
                        var r = n[o];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (n, o, r) {
                    return o && e(n.prototype, o), r && e(n, r), n
                }
            }(),
            d = (t = ["\n  font-size: 14px;\n\n  .bookmark-button {\n    margin-left: 15px;\n\n    &:hover {\n      text-decoration: none;\n      color: #000;\n\n      svg {\n        transform: scale(1.5);\n      }\n    }\n  }\n\n  .bookmark-button svg {\n    font-size: 14px;\n    margin-right: 5px;\n    transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) all;\n  }\n"], a = ["\n  font-size: 14px;\n\n  .bookmark-button {\n    margin-left: 15px;\n\n    &:hover {\n      text-decoration: none;\n      color: #000;\n\n      svg {\n        transform: scale(1.5);\n      }\n    }\n  }\n\n  .bookmark-button svg {\n    font-size: 14px;\n    margin-right: 5px;\n    transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) all;\n  }\n"], Object.freeze(Object.defineProperties(t, {
                raw: {
                    value: Object.freeze(a)
                }
            })));

        function g(e, n) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != typeof n && "function" != typeof n ? e : n
        }
        var y = function (e) {
            function n() {
                var e, o, r, t, a = this;
                ! function (e, n) {
                    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                }(this, n);
                for (var i = arguments.length, c = Array(i), u = 0; u < i; u++) c[u] = arguments[u];
                return o = r = g(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [this].concat(c))), r.bookmark = (t = s.a.mark(function e() {
                    return s.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r.props.user) {
                                    e.next = 4;
                                    break
                                }
                                return r.props.setModalMessage("Sign in to bookmark"), r.props.openSignupModal(), e.abrupt("return");
                            case 4:
                                return e.next = 6, r.props.toggleBookmark(r.props.articleType, r.props.articleId);
                            case 6:
                                void 0 !== window.ga && ga("send", "event", {
                                    eventCategory: "Bookmarks",
                                    eventAction: "Bookmark",
                                    eventLabel: r.props.articleTitle,
                                    transport: "beacon"
                                });
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }, e, a)
                }), function () {
                    var e = t.apply(this, arguments);
                    return new Promise(function (n, o) {
                        return function r(t, a) {
                            try {
                                var i = e[t](a),
                                    s = i.value
                            } catch (e) {
                                return void o(e)
                            }
                            if (!i.done) return Promise.resolve(s).then(function (e) {
                                r("next", e)
                            }, function (e) {
                                r("throw", e)
                            });
                            n(s)
                        }("next")
                    })
                }), g(r, o)
            }
            return function (e, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
                e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n)
            }(n, c["Component"]), k(n, [{
                key: "render",
                value: function () {
                    var e, n = this.props,
                        o = n.user,
                        r = n.userBookmarks,
                        t = n.articleType,
                        a = n.articleId;
                    return e = !!(o && r && r[t + "s"] && r[t + "s"].find(function (e) {
                        return e === +a
                    })), v(h, {}, void 0, v("a", {
                        className: "bookmark-button m-r-sm",
                        onClick: this.bookmark
                    }, void 0, e ? v(c.Fragment, {}, void 0, v(l.FontAwesomeIcon, {
                        icon: ["fas", "bookmark"],
                        className: "has-text-success"
                    }), "Bookmarked!") : v(c.Fragment, {}, void 0, v(l.FontAwesomeIcon, {
                        icon: ["fal", "bookmark"]
                    }), " Bookmark")))
                }
            }]), n
        }();
        n.default = function (e) {
            return v(f.a.Consumer, {}, void 0, function (n) {
                var o = n.user,
                    r = n.openLoginModal,
                    t = n.openSignupModal,
                    a = n.setModalMessage;
                return v(b.a.Consumer, {}, void 0, function (n) {
                    var i = n.userBookmarks,
                        s = n.toggleBookmark;
                    return u.a.createElement(y, m({
                        user: o,
                        openLoginModal: r,
                        openSignupModal: t,
                        setModalMessage: a,
                        userBookmarks: i,
                        toggleBookmark: s
                    }, e))
                })
            })
        };
        var h = p.a.div(d)
    }
});