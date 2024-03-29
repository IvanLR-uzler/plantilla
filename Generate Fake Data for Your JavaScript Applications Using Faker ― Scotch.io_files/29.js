webpackJsonp([29], {
    CklA: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = r("GiK3"),
            s = r.n(o),
            a = r("xhD6"),
            i = r("Rjr+"),
            u = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            c = (n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, function (e, t, r, o) {
                var s = e && e.defaultProps,
                    a = arguments.length - 3;
                if (t || 0 === a || (t = {}), t && s)
                    for (var i in s) void 0 === t[i] && (t[i] = s[i]);
                else t || (t = s || {});
                if (1 === a) t.children = o;
                else if (a > 1) {
                    for (var u = Array(a), c = 0; c < a; c++) u[c] = arguments[c + 3];
                    t.children = u
                }
                return {
                    $$typeof: n,
                    type: e,
                    key: void 0 === r ? null : "" + r,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }),
            l = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }();

        function p(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        var f = function (e) {
            function t() {
                var e, r, n;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var o = arguments.length, s = Array(o), i = 0; i < o; i++) s[i] = arguments[i];
                return r = n = p(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), n.state = {
                    isProcessing: !1,
                    message: "Add to Home Feed",
                    isProcessingSpam: !1,
                    spamMessage: "Mark as Spam"
                }, n.addToHomeFeed = function (e) {
                    e.preventDefault(), n.setState({
                        isProcessing: !0
                    }), a.a.post("/api/feed/" + n.props.type + "/" + n.props.id).then(function (e) {
                        var t = e.data;
                        return n.setState({
                            isProcessing: !1,
                            message: t.message
                        })
                    }).catch(function (e) {
                        return n.setState({
                            isProcessing: !1,
                            message: "Failed"
                        })
                    })
                }, n.markAsSpam = function (e) {
                    e.preventDefault(), n.setState({
                        isProcessingSpam: !0
                    }), a.a.put("/api/posts/" + n.props.id + "/spam").then(function (e) {
                        var t = e.data;
                        return n.setState({
                            isProcessingSpam: !1,
                            spamMessage: t.message
                        })
                    }).catch(function (e) {
                        return n.setState({
                            isProcessingSpam: !1,
                            spamMessage: "Failed"
                        })
                    })
                }, p(n, r)
            }
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o["PureComponent"]), l(t, [{
                key: "render",
                value: function () {
                    var e = this.state,
                        t = e.isProcessing,
                        r = e.isProcessingSpam,
                        n = e.message,
                        o = e.spamMessage,
                        s = this.props,
                        a = s.user,
                        i = s.authorId,
                        u = s.isPreview,
                        l = s.isCommunity,
                        p = s.type,
                        f = s.editUrl,
                        d = a && "god" === a.role,
                        m = a && a.id == i;
                    return c("div", {
                        className: "article-tools",
                        style: {
                            position: "fixed",
                            left: "30px",
                            bottom: "30px",
                            zIndex: "9999"
                        }
                    }, void 0, (m || d) && c("a", {
                        href: f,
                        className: "button is-small is-rounded is-info m-r-xs"
                    }, void 0, "Edit"), d && !u && "post" === p && c("a", {
                        className: "button is-small is-rounded is-info m-r-xs",
                        onClick: this.addToHomeFeed
                    }, void 0, t ? "Adding..." : n), d && l && "post" === p && c("a", {
                        className: "button is-small is-rounded is-info",
                        onClick: this.markAsSpam
                    }, void 0, r ? "Marking..." : o))
                }
            }]), t
        }();
        t.default = function (e) {
            return c(i.a.Consumer, {}, void 0, function (t) {
                var r = t.user;
                return s.a.createElement(f, u({
                    user: r
                }, e))
            })
        }
    }
});