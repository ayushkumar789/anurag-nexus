const settings = {
    charts: {
        defaultColor: "#aaa",
        defaultFontColor: "#333",
        defaultFontFamily: "Arial",
        defaultFontSize: 12,
    },
    colors: {
        primary: { 500: "#4285F4" },
        transparent: "rgba(0,0,0,0)",
        white: "#fff",
    },
};

! function(t) {
    var e = {};

    function r(n) {
        if (e[n]) return e[n].exports;
        var o = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    r.m = t, r.c = e, r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) r.d(n, o, function(e) {
                return t[e]
            }.bind(null, o));
        return n
    }, r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "/", r(r.s = 491)
}({
    0: function(t, e, r) {
        (function(e) {
            var r = function(t) {
                return t && t.Math == Math && t
            };
            t.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof e && e) || function() {
                return this
            }() || Function("return this")()
        }).call(this, r(57))
    },
    1: function(t, e) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    },
    10: function(t, e, r) {
        var n = r(33),
            o = r(13);
        t.exports = function(t) {
            return n(o(t))
        }
    },
    106: function(t, e, r) {
        "use strict";
        var n = r(84).charAt;
        t.exports = function(t, e, r) {
            return e + (r ? n(t, e).length : 1)
        }
    },
    108: function(t, e, r) {
        "use strict";
        var n = r(97),
            o = r(6),
            i = r(15),
            a = r(11),
            c = r(19),
            s = r(13),
            u = r(106),
            l = r(98),
            f = Math.max,
            d = Math.min,
            p = Math.floor,
            h = /\$([$&'`]|\d\d?|<[^>]*>)/g,
            g = /\$([$&'`]|\d\d?)/g;
        n("replace", 2, (function(t, e, r, n) {
            var v = n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
                y = n.REPLACE_KEEPS_$0,
                x = v ? "$" : "$0";
            return [function(r, n) {
                var o = s(this),
                    i = null == r ? void 0 : r[t];
                return void 0 !== i ? i.call(r, o, n) : e.call(String(o), r, n)
            }, function(t, n) {
                if (!v && y || "string" == typeof n && -1 === n.indexOf(x)) {
                    var i = r(e, t, this, n);
                    if (i.done) return i.value
                }
                var s = o(t),
                    p = String(this),
                    h = "function" == typeof n;
                h || (n = String(n));
                var g = s.global;
                if (g) {
                    var m = s.unicode;
                    s.lastIndex = 0
                }
                for (var S = [];;) {
                    var C = l(s, p);
                    if (null === C) break;
                    if (S.push(C), !g) break;
                    "" === String(C[0]) && (s.lastIndex = u(p, a(s.lastIndex), m))
                }
                for (var E, w = "", L = 0, O = 0; O < S.length; O++) {
                    C = S[O];
                    for (var A = String(C[0]), k = f(d(c(C.index), p.length), 0), T = [], R = 1; R < C.length; R++) T.push(void 0 === (E = C[R]) ? E : String(E));
                    var P = C.groups;
                    if (h) {
                        var M = [A].concat(T, k, p);
                        void 0 !== P && M.push(P);
                        var I = String(n.apply(void 0, M))
                    } else I = b(A, p, k, T, P, n);
                    k >= L && (w += p.slice(L, k) + I, L = k + A.length)
                }
                return w + p.slice(L)
            }];

            function b(t, r, n, o, a, c) {
                var s = n + t.length,
                    u = o.length,
                    l = g;
                return void 0 !== a && (a = i(a), l = h), e.call(c, l, (function(e, i) {
                    var c;
                    switch (i.charAt(0)) {
                        case "$":
                            return "$";
                        case "&":
                            return t;
                        case "`":
                            return r.slice(0, n);
                        case "'":
                            return r.slice(s);
                        case "<":
                            c = a[i.slice(1, -1)];
                            break;
                        default:
                            var l = +i;
                            if (0 === l) return e;
                            if (l > u) {
                                var f = p(l / 10);
                                return 0 === f ? e : f <= u ? void 0 === o[f - 1] ? i.charAt(1) : o[f - 1] + i.charAt(1) : e
                            }
                            c = o[l - 1]
                    }
                    return void 0 === c ? "" : c
                }))
            }
        }))
    },
    11: function(t, e, r) {
        var n = r(19),
            o = Math.min;
        t.exports = function(t) {
            return t > 0 ? o(n(t), 9007199254740991) : 0
        }
    },
    110: function(t, e, r) {
        "use strict";
        var n = r(97),
            o = r(116),
            i = r(6),
            a = r(13),
            c = r(122),
            s = r(106),
            u = r(11),
            l = r(98),
            f = r(79),
            d = r(1),
            p = [].push,
            h = Math.min,
            g = !d((function() {
                return !RegExp(4294967295, "y")
            }));
        n("split", 2, (function(t, e, r) {
            var n;
            return n = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(t, r) {
                var n = String(a(this)),
                    i = void 0 === r ? 4294967295 : r >>> 0;
                if (0 === i) return [];
                if (void 0 === t) return [n];
                if (!o(t)) return e.call(n, t, i);
                for (var c, s, u, l = [], d = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), h = 0, g = new RegExp(t.source, d + "g");
                    (c = f.call(g, n)) && !((s = g.lastIndex) > h && (l.push(n.slice(h, c.index)), c.length > 1 && c.index < n.length && p.apply(l, c.slice(1)), u = c[0].length, h = s, l.length >= i));) g.lastIndex === c.index && g.lastIndex++;
                return h === n.length ? !u && g.test("") || l.push("") : l.push(n.slice(h)), l.length > i ? l.slice(0, i) : l
            } : "0".split(void 0, 0).length ? function(t, r) {
                return void 0 === t && 0 === r ? [] : e.call(this, t, r)
            } : e, [function(e, r) {
                var o = a(this),
                    i = null == e ? void 0 : e[t];
                return void 0 !== i ? i.call(e, o, r) : n.call(String(o), e, r)
            }, function(t, o) {
                var a = r(n, t, this, o, n !== e);
                if (a.done) return a.value;
                var f = i(t),
                    d = String(this),
                    p = c(f, RegExp),
                    v = f.unicode,
                    y = (f.ignoreCase ? "i" : "") + (f.multiline ? "m" : "") + (f.unicode ? "u" : "") + (g ? "y" : "g"),
                    x = new p(g ? f : "^(?:" + f.source + ")", y),
                    b = void 0 === o ? 4294967295 : o >>> 0;
                if (0 === b) return [];
                if (0 === d.length) return null === l(x, d) ? [d] : [];
                for (var m = 0, S = 0, C = []; S < d.length;) {
                    x.lastIndex = g ? S : 0;
                    var E, w = l(x, g ? d : d.slice(S));
                    if (null === w || (E = h(u(x.lastIndex + (g ? 0 : S)), d.length)) === m) S = s(d, S, v);
                    else {
                        if (C.push(d.slice(m, S)), C.length === b) return C;
                        for (var L = 1; L <= w.length - 1; L++)
                            if (C.push(w[L]), C.length === b) return C;
                        S = m = E
                    }
                }
                return C.push(d.slice(m)), C
            }]
        }), !g)
    },
    111: function(t, e, r) {
        "use strict";
        var n = r(1);

        function o(t, e) {
            return RegExp(t, e)
        }
        e.UNSUPPORTED_Y = n((function() {
            var t = o("a", "y");
            return t.lastIndex = 2, null != t.exec("abcd")
        })), e.BROKEN_CARET = n((function() {
            var t = o("^r", "gy");
            return t.lastIndex = 2, null != t.exec("str")
        }))
    },
    112: function(t, e, r) {
        "use strict";
        var n = r(8),
            o = r(55).indexOf,
            i = r(77),
            a = r(28),
            c = [].indexOf,
            s = !!c && 1 / [1].indexOf(1, -0) < 0,
            u = i("indexOf"),
            l = a("indexOf", {
                ACCESSORS: !0,
                1: 0
            });
        n({
            target: "Array",
            proto: !0,
            forced: s || !u || !l
        }, {
            indexOf: function(t) {
                return s ? c.apply(this, arguments) || 0 : o(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    },
    116: function(t, e, r) {
        var n = r(4),
            o = r(16),
            i = r(2)("match");
        t.exports = function(t) {
            var e;
            return n(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t))
        }
    },
    117: function(t, e, r) {
        "use strict";
        var n = r(8),
            o = r(45).filter,
            i = r(48),
            a = r(28),
            c = i("filter"),
            s = a("filter");
        n({
            target: "Array",
            proto: !0,
            forced: !c || !s
        }, {
            filter: function(t) {
                return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    },
    12: function(t, e, r) {
        var n = r(0),
            o = r(9),
            i = r(3),
            a = r(21),
            c = r(35),
            s = r(24),
            u = s.get,
            l = s.enforce,
            f = String(String).split("String");
        (t.exports = function(t, e, r, c) {
            var s, u = !!c && !!c.unsafe,
                d = !!c && !!c.enumerable,
                p = !!c && !!c.noTargetGet;
            "function" == typeof r && ("string" != typeof e || i(r, "name") || o(r, "name", e), (s = l(r)).source || (s.source = f.join("string" == typeof e ? e : ""))), t !== n ? (u ? !p && t[e] && (d = !0) : delete t[e], d ? t[e] = r : o(t, e, r)) : d ? t[e] = r : a(e, r)
        })(Function.prototype, "toString", (function() {
            return "function" == typeof this && u(this).source || c(this)
        }))
    },
    122: function(t, e, r) {
        var n = r(6),
            o = r(62),
            i = r(2)("species");
        t.exports = function(t, e) {
            var r, a = n(t).constructor;
            return void 0 === a || null == (r = n(a)[i]) ? e : o(r)
        }
    },
    127: function(t, e, r) {
        var n = r(16),
            o = r(0);
        t.exports = "process" == n(o.process)
    },
    13: function(t, e) {
        t.exports = function(t) {
            if (null == t) throw TypeError("Can't call method on " + t);
            return t
        }
    },
    136: function(t, e, r) {
        "use strict";
        var n = r(8),
            o = r(138).left,
            i = r(77),
            a = r(28),
            c = r(61),
            s = r(127),
            u = i("reduce"),
            l = a("reduce", {
                1: 0
            });
        n({
            target: "Array",
            proto: !0,
            forced: !u || !l || !s && c > 79 && c < 83
        }, {
            reduce: function(t) {
                return o(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    },
    138: function(t, e, r) {
        var n = r(62),
            o = r(15),
            i = r(33),
            a = r(11),
            c = function(t) {
                return function(e, r, c, s) {
                    n(r);
                    var u = o(e),
                        l = i(u),
                        f = a(u.length),
                        d = t ? f - 1 : 0,
                        p = t ? -1 : 1;
                    if (c < 2)
                        for (;;) {
                            if (d in l) {
                                s = l[d], d += p;
                                break
                            }
                            if (d += p, t ? d < 0 : f <= d) throw TypeError("Reduce of empty array with no initial value")
                        }
                    for (; t ? d >= 0 : f > d; d += p) d in l && (s = r(s, l[d], d, u));
                    return s
                }
            };
        t.exports = {
            left: c(!1),
            right: c(!0)
        }
    },
    14: function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    },
    15: function(t, e, r) {
        var n = r(13);
        t.exports = function(t) {
            return Object(n(t))
        }
    },
    16: function(t, e) {
        var r = {}.toString;
        t.exports = function(t) {
            return r.call(t).slice(8, -1)
        }
    },
    17: function(t, e, r) {
        var n = r(4);
        t.exports = function(t, e) {
            if (!n(t)) return t;
            var r, o;
            if (e && "function" == typeof(r = t.toString) && !n(o = r.call(t))) return o;
            if ("function" == typeof(r = t.valueOf) && !n(o = r.call(t))) return o;
            if (!e && "function" == typeof(r = t.toString) && !n(o = r.call(t))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    18: function(t, e) {
        t.exports = {}
    },
    19: function(t, e) {
        var r = Math.ceil,
            n = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? n : r)(t)
        }
    },
    2: function(t, e, r) {
        var n = r(0),
            o = r(29),
            i = r(3),
            a = r(27),
            c = r(31),
            s = r(52),
            u = o("wks"),
            l = n.Symbol,
            f = s ? l : l && l.withoutSetter || a;
        t.exports = function(t) {
            return i(u, t) || (c && i(l, t) ? u[t] = l[t] : u[t] = f("Symbol." + t)), u[t]
        }
    },
    20: function(t, e, r) {
        var n = r(50),
            o = r(0),
            i = function(t) {
                return "function" == typeof t ? t : void 0
            };
        t.exports = function(t, e) {
            return arguments.length < 2 ? i(n[t]) || i(o[t]) : n[t] && n[t][e] || o[t] && o[t][e]
        }
    },
    21: function(t, e, r) {
        var n = r(0),
            o = r(9);
        t.exports = function(t, e) {
            try {
                o(n, t, e)
            } catch (r) {
                n[t] = e
            }
            return e
        }
    },
    2126: function(t, e, r) {
        "use strict";
        r.r(e);
        r(46), r(117), r(89), r(112), r(81), r(136), r(59), r(67), r(108), r(110), r(93);
        var n = r(42),
            o = r.n(n),
            i = function t(e, r) {
                for (var n in r) "object" != o()(r[n]) ? e[n] = r[n] : t(e[n], r[n])
            },
            a = function(t) {
                var e = t.data("add"),
                    r = $(t.data("target")).data("chart");
                if (t.is(":checked")) {
                    ! function t(e, r) {
                        for (var n in r) Array.isArray(r[n]) ? r[n].forEach((function(t) {
                            e[n].push(t)
                        })) : t(e[n], r[n])
                    }(r, e)
                } else {
                    ! function t(e, r) {
                        for (var n in r) Array.isArray(r[n]) ? r[n].forEach((function(t) {
                            e[n].pop()
                        })) : t(e[n], r[n])
                    }(r, e)
                }
                r.update()
            },
            c = function(t) {
                var e = t.data("update"),
                    r = $(t.data("target")).data("chart");
                if (i(r, e), void 0 !== t.data("prefix") || void 0 !== t.data("suffix")) {
                    var n = t.data("prefix") ? t.data("prefix") : "",
                        o = t.data("suffix") ? t.data("suffix") : "";
                    void 0 !== r.options.scales && (r.options.scales.yAxes[0].ticks.callback = function(t) {
                        if (!(t % 10)) return n + t + o
                    }), r.options.tooltips.callbacks.label = function(t, e) {
                        var r = e.datasets[t.datasetIndex].label || "",
                            i = t.yLabel || e.datasets[0].data[t.index],
                            a = "";
                        return 1 < e.datasets.length && (a += '<span class="popover-body-label mr-auto">' + r + "</span>"), a + '<span class="popover-body-value">' + n + i + o + "</span>"
                    }
                }
                r.update()
            },
            s = {
                responsive: !0,
                maintainAspectRatio: !1,
                defaultColor: settings.charts.defaultColor,
                defaultFontColor: settings.charts.defaultFontColor,
                defaultFontFamily: settings.charts.defaultFontFamily,
                defaultFontSize: settings.charts.defaultFontSize,
                layout: {
                    padding: 0
                },
                legend: {
                    display: !1,
                    position: "bottom",
                    labels: {
                        usePointStyle: !0,
                        padding: 16
                    }
                },
                elements: {
                    point: {
                        radius: 0,
                        backgroundColor: settings.colors.primary[500]
                    },
                    line: {
                        tension: .4,
                        borderWidth: 3,
                        borderColor: settings.colors.primary[500],
                        backgroundColor: settings.colors.transparent,
                        borderCapStyle: "rounded"
                    },
                    rectangle: {
                        backgroundColor: settings.colors.primary[500]
                    },
                    arc: {
                        backgroundColor: settings.colors.primary[500],
                        borderColor: settings.colors.white,
                        borderWidth: 4
                    }
                },
                legendCallback: function(t) {
                    var e = t.data,
                        r = "",
                        n = t.options.elements.line.borderColor;
                    return e.datasets.forEach((function(t, o) {
                        var i = e.datasets[o].label,
                            a = e.datasets[o].borderColor || n;
                        r += '<span class="chart-legend-item">', r += '<i class="chart-legend-indicator" style="background-color: ' + a + '"></i>', r += i, r += "</span>"
                    })), r
                },
                tooltips: {
                    enabled: !1,
                    mode: "index",
                    intersect: !1,
                    custom: function(t) {
                        var e = $("#chart-tooltip");
                        if (e.length || (e = $('<div id="chart-tooltip" class="popover bs-popover-top" role="tooltip"></div>'), $("body").append(e)), 0 !== t.opacity) {
                            if (t.body) {
                                var r = t.title || [],
                                    n = t.body.map((function(t) {
                                        return t.lines
                                    })),
                                    o = "";
                                o += '<div class="arrow"></div>', r.forEach((function(t) {
                                    o += '<h3 class="popover-header text-center">' + t + "</h3>"
                                })), n.forEach((function(e, r) {
                                    var i = '<span class="popover-body-indicator" style="background-color: ' + t.labelColors[r].backgroundColor + '"></span>',
                                        a = 1 < n.length ? "justify-content-left" : "justify-content-center";
                                    o += '<div class="popover-body d-flex align-items-center ' + a + '">' + i + e + "</div>"
                                })), e.html(o)
                            }
                            var i = $(this._chart.canvas),
                                a = (i.outerWidth(), i.outerHeight(), i.offset().top),
                                c = i.offset().left,
                                s = e.outerWidth(),
                                u = e.outerHeight(),
                                l = a + t.caretY - u - 16,
                                f = c + t.caretX - s / 2;
                            e.css({
                                top: l + "px",
                                left: f + "px",
                                display: "block"
                            })
                        } else e.css("display", "none")
                    },
                    callbacks: {
                        title: function(t, e) {
                            return e.labels[t[0].index]
                        },
                        label: function(t, e) {
                            var r = e.datasets[t.datasetIndex].label || "",
                                n = t.yLabel,
                                o = "";
                            return 1 < e.datasets.length && (o += '<span class="popover-body-label mr-auto">' + r + "</span>"), o + '<span class="popover-body-value">' + n + "</span>"
                        }
                    }
                }
            },
            u = {
                cutoutPercentage: 83,
                tooltips: {
                    callbacks: {
                        title: function(t, e) {
                            return e.labels[t[0].index]
                        },
                        label: function(t, e) {
                            return "" + '<span class="popover-body-value">' + e.datasets[0].data[t.index] + "</span>"
                        }
                    }
                },
                legendCallback: function(t) {
                    var e = t.data,
                        r = "";
                    return e.labels.forEach((function(t, n) {
                        var o = e.datasets[0].backgroundColor[n];
                        r += '<span class="chart-legend-item">', r += '<i class="chart-legend-indicator" style="background-color: ' + o + '"></i>', r += t, r += "</span>"
                    })), r
                }
            },
            l = function(t, e) {
                return t.split(".").reduce((function(t, e) {
                    return t[e]
                }), e)
            },
            f = function(t) {
                var e = $(t).data("chart"),
                    r = t.hasAttribute("data-chart-dark-mode");
                void 0 !== e.options.scales.yAxes[0] && (e.options.scales.yAxes[0].gridLines = {
                    color: r ? settings.colors.darkMode.border : settings.charts.gridLinesColor,
                    zeroLineColor: r ? settings.colors.darkMode.border : settings.charts.zeroLineColor
                }, e.options.scales.yAxes[0].angleLines = {
                    color: r ? settings.colors.darkMode.border : settings.charts.angleLinesColor
                }), "doughnut" === e.config.type && (e.data.datasets[0].borderColor = r ? settings.colors.darkMode.bodyBg : settings.colors.white, e.data.datasets[0].hoverBorderColor = r ? settings.colors.darkMode.bodyBg : settings.colors.white);
                var n = (t.getAttribute("data-chart-line-border-color") || "").split(",").filter((function(t) {
                        return !!t
                    })),
                    o = new String(t.getAttribute("data-chart-line-border-opacity") || "1").split(",").filter((function(t) {
                        return !!t
                    })),
                    i = (t.getAttribute("data-chart-line-background-color") || "").split(",").filter((function(t) {
                        return !!t
                    })),
                    a = new String(t.getAttribute("data-chart-line-background-opacity") || "1").split(",").filter((function(t) {
                        return !!t
                    }));
                n.forEach((function(t, r) {
                    var n = o[r]; - 1 !== t.indexOf(";") ? (t = t.split(";"), n = o[0].split(";"), e.data.datasets[0].borderColor = [], e.data.datasets[0].pointBackgroundColor = [], t.forEach((function(t, r) {
                        t = -1 !== t.indexOf(".") ? l(t, settings.colors) : d(settings.colors.plain[t], n[r]), e.data.datasets[0].borderColor.push(t), e.data.datasets[0].pointBackgroundColor.push(settings.colors.white)
                    }))) : (t = -1 !== t.indexOf(".") ? l(t, settings.colors) : d(settings.colors.plain[t], n), e.data.datasets[r].borderColor = t, e.data.datasets[r].pointBackgroundColor = settings.colors.white)
                }));
                var c = t.getContext("2d"),
                    s = t.scrollHeight,
                    u = null,
                    f = .001; - 1 !== e.config.type.toLowerCase().indexOf("bar") && (f = .2), i.forEach((function(t, r) {
                    var n = a[r];
                    if (u = u || -1 !== t.indexOf("gradient:"), -1 !== (t = t.replace(/gradient\:/gi, "")).indexOf(";")) t = t.split(";"), n = a[0].split(";"), e.data.datasets[0].backgroundColor = [], t.forEach((function(t, r) {
                        var o = t;
                        if (t = -1 !== t.indexOf(".") ? l(t, settings.colors) : d(settings.colors.plain[t], n[r]), u) {
                            var i = c.createLinearGradient(0, 0, 0, s);
                            i.addColorStop(0, t), i.addColorStop(1, d(o, f)), t = i
                        }
                        e.data.datasets[0].backgroundColor.push(t)
                    }));
                    else {
                        var o;
                        if (-1 !== t.indexOf(".") ? o = t = l(t, settings.colors) : (o = settings.colors.plain[t], t = d(o, n)), u) {
                            var i = c.createLinearGradient(0, 0, 0, s);
                            i.addColorStop(0, t), i.addColorStop(1, d(o, f)), t = i
                        }
                        e.data.datasets[r].backgroundColor = t
                    }
                })), e.update(), $(t).data("chart-legend") && (document.querySelector($(t).data("chart-legend")).innerHTML = e.generateLegend())
            },
            d = function(t, e) {
                var r = parseInt(t.slice(1, 3), 16),
                    n = parseInt(t.slice(3, 5), 16),
                    o = parseInt(t.slice(5, 7), 16);
                return e ? "rgba(" + r + ", " + n + ", " + o + ", " + e + ")" : "rgb(" + r + ", " + n + ", " + o + ")"
            },
            p = {
                settings: settings,
                init: function() {
                    i(Chart, {
                        defaults: {
                            global: s,
                            doughnut: u
                        }
                    }), Chart.scaleService.updateScaleDefaults("linear", {
                        gridLines: {
                            borderDash: [2],
                            borderDashOffset: [2],
                            color: settings.charts.gridLinesColor,
                            drawBorder: !1,
                            drawTicks: !1,
                            lineWidth: settings.charts.lineWidth,
                            zeroLineWidth: settings.charts.zeroLineWidth,
                            zeroLineColor: settings.charts.zeroLineColor,
                            zeroLineBorderDash: [2],
                            zeroLineBorderDashOffset: [2]
                        },
                        angleLines: {
                            color: settings.charts.angleLinesColor
                        },
                        ticks: {
                            beginAtZero: !0,
                            padding: 10,
                            callback: function(t) {
                                if (!(t % 10)) return t
                            }
                        }
                    }), Chart.scaleService.updateScaleDefaults("category", {
                        gridLines: {
                            drawBorder: !1,
                            drawOnChartArea: !1,
                            drawTicks: !1
                        },
                        ticks: {
                            padding: 20
                        },
                        maxBarThickness: 10
                    }), $('[data-toggle="chart"]').on({
                        change: function() {
                            var t = $(this);
                            t.is("[data-add]") && a(t)
                        },
                        click: function() {
                            var t = $(this);
                            t.is("[data-update]") && c(t)
                        }
                    })
                },
                add: a,
                update: c,
                create: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "line",
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        o = $(t),
                        i = o.data("chart-prefix") || "",
                        a = o.data("chart-suffix") || "",
                        c = o.data("chart-points"),
                        s = o.data("chart-hide-axes"),
                        u = o.data("chart-disable-tooltips");
                    s && (r = Chart.helpers.merge({
                        scales: {
                            yAxes: [{
                                display: !1
                            }],
                            xAxes: [{
                                display: !1
                            }]
                        }
                    }, r)), "area" === e && (e = "line", r = Chart.helpers.merge({
                        elements: {
                            line: {
                                fill: "start"
                            }
                        }
                    }, r)), c && (r = Chart.helpers.merge({
                        elements: {
                            point: {
                                pointStyle: "circle",
                                radius: 4,
                                hoverRadius: 4,
                                backgroundColor: settings.colors.white,
                                borderColor: settings.colors.primary[500],
                                borderWidth: 2
                            }
                        }
                    }, r)), "radar" === e && (r = Chart.helpers.merge({
                        scale: {
                            ticks: {
                                display: !1,
                                beginAtZero: !0,
                                maxTicksLimit: 4
                            },
                            pointLabels: {
                                fontSize: settings.charts.defaultFontSize
                            }
                        }
                    }, r)), "roundedBar" === e && (r = Chart.helpers.merge({
                        barRoundness: 1.2
                    }, r)), "doughnut" !== e && "radar" !== e || (r = Chart.helpers.merge({
                        scales: {
                            yAxes: {
                                gridLines: {
                                    zeroLineWidth: 0
                                }
                            }
                        }
                    }, r)), (i.length || a.length) && (r = Chart.helpers.merge({
                        scales: {
                            yAxes: [{
                                ticks: {
                                    callback: function(t) {
                                        if (!(t % 10)) return "".concat(i).concat(t).concat(a)
                                    }
                                }
                            }]
                        },
                        tooltips: {
                            callbacks: {
                                label: function(t, r) {
                                    var n = r.datasets[t.datasetIndex].label || "",
                                        o = t.yLabel,
                                        c = "";
                                    return "doughnut" === e && (o = r.datasets[0].data[t.index]), 1 < r.datasets.length && (c += '<span class="popover-body-label mr-auto">' + n + "</span>"), c + '<span class="popover-body-value">'.concat(i).concat(o).concat(a, "</span>")
                                }
                            }
                        }
                    }, r)), u && (r = Chart.helpers.merge({
                        tooltips: {
                            enabled: !1,
                            custom: function() {}
                        }
                    }, r));
                    var l = new Chart(o, {
                        type: e,
                        options: r,
                        data: n
                    });
                    o.data("chart", l), o.data("chart-legend") && (document.querySelector(o.data("chart-legend")).innerHTML = l.generateLegend()), f(document.querySelector(t))
                },
                applyColors: f,
                hexToRGB: d
            };
        if (void 0 !== window) {
            window.Charts = p, p.init();
            var h = new MutationObserver((function(t) {
                t.forEach((function(t) {
                    return f(t.target)
                }))
            }));
            document.querySelectorAll(".chart-canvas").forEach((function(t) {
                h.observe(t, {
                    attributes: !0,
                    attributeOldValue: !1,
                    attributeFilter: ["data-chart-line-border-color", "data-chart-line-border-opacity", "data-chart-line-background-color", "data-chart-line-background-opacity", "data-chart-dark-mode"]
                })
            }))
        }
    },
    22: function(t, e, r) {
        var n = r(0),
            o = r(21),
            i = n["__core-js_shared__"] || o("__core-js_shared__", {});
        t.exports = i
    },
    23: function(t, e, r) {
        var n = r(5),
            o = r(43),
            i = r(14),
            a = r(10),
            c = r(17),
            s = r(3),
            u = r(37),
            l = Object.getOwnPropertyDescriptor;
        e.f = n ? l : function(t, e) {
            if (t = a(t), e = c(e, !0), u) try {
                return l(t, e)
            } catch (t) {}
            if (s(t, e)) return i(!o.f.call(t, e), t[e])
        }
    },
    24: function(t, e, r) {
        var n, o, i, a = r(64),
            c = r(0),
            s = r(4),
            u = r(9),
            l = r(3),
            f = r(22),
            d = r(25),
            p = r(18),
            h = c.WeakMap;
        if (a) {
            var g = f.state || (f.state = new h),
                v = g.get,
                y = g.has,
                x = g.set;
            n = function(t, e) {
                return e.facade = t, x.call(g, t, e), e
            }, o = function(t) {
                return v.call(g, t) || {}
            }, i = function(t) {
                return y.call(g, t)
            }
        } else {
            var b = d("state");
            p[b] = !0, n = function(t, e) {
                return e.facade = t, u(t, b, e), e
            }, o = function(t) {
                return l(t, b) ? t[b] : {}
            }, i = function(t) {
                return l(t, b)
            }
        }
        t.exports = {
            set: n,
            get: o,
            has: i,
            enforce: function(t) {
                return i(t) ? o(t) : n(t, {})
            },
            getterFor: function(t) {
                return function(e) {
                    var r;
                    if (!s(e) || (r = o(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                    return r
                }
            }
        }
    },
    25: function(t, e, r) {
        var n = r(29),
            o = r(27),
            i = n("keys");
        t.exports = function(t) {
            return i[t] || (i[t] = o(t))
        }
    },
    26: function(t, e) {
        t.exports = !1
    },
    27: function(t, e) {
        var r = 0,
            n = Math.random();
        t.exports = function(t) {
            return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++r + n).toString(36)
        }
    },
    28: function(t, e, r) {
        var n = r(5),
            o = r(1),
            i = r(3),
            a = Object.defineProperty,
            c = {},
            s = function(t) {
                throw t
            };
        t.exports = function(t, e) {
            if (i(c, t)) return c[t];
            e || (e = {});
            var r = [][t],
                u = !!i(e, "ACCESSORS") && e.ACCESSORS,
                l = i(e, 0) ? e[0] : s,
                f = i(e, 1) ? e[1] : void 0;
            return c[t] = !!r && !o((function() {
                if (u && !n) return !0;
                var t = {
                    length: -1
                };
                u ? a(t, 1, {
                    enumerable: !0,
                    get: s
                }) : t[1] = 1, r.call(t, l, f)
            }))
        }
    },
    29: function(t, e, r) {
        var n = r(26),
            o = r(22);
        (t.exports = function(t, e) {
            return o[t] || (o[t] = void 0 !== e ? e : {})
        })("versions", []).push({
            version: "3.8.0",
            mode: n ? "pure" : "global",
            copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        })
    },
    3: function(t, e) {
        var r = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return r.call(t, e)
        }
    },
    30: function(t, e) {
        t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    },
    31: function(t, e, r) {
        var n = r(1);
        t.exports = !!Object.getOwnPropertySymbols && !n((function() {
            return !String(Symbol())
        }))
    },
    32: function(t, e, r) {
        var n = r(16);
        t.exports = Array.isArray || function(t) {
            return "Array" == n(t)
        }
    },
    33: function(t, e, r) {
        var n = r(1),
            o = r(16),
            i = "".split;
        t.exports = n((function() {
            return !Object("z").propertyIsEnumerable(0)
        })) ? function(t) {
            return "String" == o(t) ? i.call(t, "") : Object(t)
        } : Object
    },
    34: function(t, e, r) {
        var n = r(40),
            o = r(30).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function(t) {
            return n(t, o)
        }
    },
    35: function(t, e, r) {
        var n = r(22),
            o = Function.toString;
        "function" != typeof n.inspectSource && (n.inspectSource = function(t) {
            return o.call(t)
        }), t.exports = n.inspectSource
    },
    37: function(t, e, r) {
        var n = r(5),
            o = r(1),
            i = r(39);
        t.exports = !n && !o((function() {
            return 7 != Object.defineProperty(i("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    },
    38: function(t, e, r) {
        var n = r(19),
            o = Math.max,
            i = Math.min;
        t.exports = function(t, e) {
            var r = n(t);
            return r < 0 ? o(r + e, 0) : i(r, e)
        }
    },
    39: function(t, e, r) {
        var n = r(0),
            o = r(4),
            i = n.document,
            a = o(i) && o(i.createElement);
        t.exports = function(t) {
            return a ? i.createElement(t) : {}
        }
    },
    4: function(t, e) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    },
    40: function(t, e, r) {
        var n = r(3),
            o = r(10),
            i = r(55).indexOf,
            a = r(18);
        t.exports = function(t, e) {
            var r, c = o(t),
                s = 0,
                u = [];
            for (r in c) !n(a, r) && n(c, r) && u.push(r);
            for (; e.length > s;) n(c, r = e[s++]) && (~i(u, r) || u.push(r));
            return u
        }
    },
    42: function(t, e) {
        function r(e) {
            return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = r = function(t) {
                return typeof t
            } : t.exports = r = function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, r(e)
        }
        t.exports = r
    },
    43: function(t, e, r) {
        "use strict";
        var n = {}.propertyIsEnumerable,
            o = Object.getOwnPropertyDescriptor,
            i = o && !n.call({
                1: 2
            }, 1);
        e.f = i ? function(t) {
            var e = o(this, t);
            return !!e && e.enumerable
        } : n
    },
    44: function(t, e) {
        e.f = Object.getOwnPropertySymbols
    },
    45: function(t, e, r) {
        var n = r(53),
            o = r(33),
            i = r(15),
            a = r(11),
            c = r(60),
            s = [].push,
            u = function(t) {
                var e = 1 == t,
                    r = 2 == t,
                    u = 3 == t,
                    l = 4 == t,
                    f = 6 == t,
                    d = 7 == t,
                    p = 5 == t || f;
                return function(h, g, v, y) {
                    for (var x, b, m = i(h), S = o(m), C = n(g, v, 3), E = a(S.length), w = 0, L = y || c, O = e ? L(h, E) : r || d ? L(h, 0) : void 0; E > w; w++)
                        if ((p || w in S) && (b = C(x = S[w], w, m), t))
                            if (e) O[w] = b;
                            else if (b) switch (t) {
                        case 3:
                            return !0;
                        case 5:
                            return x;
                        case 6:
                            return w;
                        case 2:
                            s.call(O, x)
                    } else switch (t) {
                        case 4:
                            return !1;
                        case 7:
                            s.call(O, x)
                    }
                    return f ? -1 : u || l ? l : O
                }
            };
        t.exports = {
            forEach: u(0),
            map: u(1),
            filter: u(2),
            some: u(3),
            every: u(4),
            find: u(5),
            findIndex: u(6),
            filterOut: u(7)
        }
    },
    46: function(t, e, r) {
        "use strict";
        var n = r(8),
            o = r(1),
            i = r(32),
            a = r(4),
            c = r(15),
            s = r(11),
            u = r(51),
            l = r(60),
            f = r(48),
            d = r(2),
            p = r(61),
            h = d("isConcatSpreadable"),
            g = p >= 51 || !o((function() {
                var t = [];
                return t[h] = !1, t.concat()[0] !== t
            })),
            v = f("concat"),
            y = function(t) {
                if (!a(t)) return !1;
                var e = t[h];
                return void 0 !== e ? !!e : i(t)
            };
        n({
            target: "Array",
            proto: !0,
            forced: !g || !v
        }, {
            concat: function(t) {
                var e, r, n, o, i, a = c(this),
                    f = l(a, 0),
                    d = 0;
                for (e = -1, n = arguments.length; e < n; e++)
                    if (y(i = -1 === e ? a : arguments[e])) {
                        if (d + (o = s(i.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                        for (r = 0; r < o; r++, d++) r in i && u(f, d, i[r])
                    } else {
                        if (d >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                        u(f, d++, i)
                    } return f.length = d, f
            }
        })
    },
    47: function(t, e, r) {
        var n = r(1),
            o = /#|\.prototype\./,
            i = function(t, e) {
                var r = c[a(t)];
                return r == u || r != s && ("function" == typeof e ? n(e) : !!e)
            },
            a = i.normalize = function(t) {
                return String(t).replace(o, ".").toLowerCase()
            },
            c = i.data = {},
            s = i.NATIVE = "N",
            u = i.POLYFILL = "P";
        t.exports = i
    },
    48: function(t, e, r) {
        var n = r(1),
            o = r(2),
            i = r(61),
            a = o("species");
        t.exports = function(t) {
            return i >= 51 || !n((function() {
                var e = [];
                return (e.constructor = {})[a] = function() {
                    return {
                        foo: 1
                    }
                }, 1 !== e[t](Boolean).foo
            }))
        }
    },
    49: function(t, e, r) {
        var n = r(3),
            o = r(65),
            i = r(23),
            a = r(7);
        t.exports = function(t, e) {
            for (var r = o(e), c = a.f, s = i.f, u = 0; u < r.length; u++) {
                var l = r[u];
                n(t, l) || c(t, l, s(e, l))
            }
        }
    },
    491: function(t, e, r) {
        t.exports = r(2126)
    },
    5: function(t, e, r) {
        var n = r(1);
        t.exports = !n((function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        }))
    },
    50: function(t, e, r) {
        var n = r(0);
        t.exports = n
    },
    51: function(t, e, r) {
        "use strict";
        var n = r(17),
            o = r(7),
            i = r(14);
        t.exports = function(t, e, r) {
            var a = n(e);
            a in t ? o.f(t, a, i(0, r)) : t[a] = r
        }
    },
    52: function(t, e, r) {
        var n = r(31);
        t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
    },
    53: function(t, e, r) {
        var n = r(62);
        t.exports = function(t, e, r) {
            if (n(t), void 0 === e) return t;
            switch (r) {
                case 0:
                    return function() {
                        return t.call(e)
                    };
                case 1:
                    return function(r) {
                        return t.call(e, r)
                    };
                case 2:
                    return function(r, n) {
                        return t.call(e, r, n)
                    };
                case 3:
                    return function(r, n, o) {
                        return t.call(e, r, n, o)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
    },
    55: function(t, e, r) {
        var n = r(10),
            o = r(11),
            i = r(38),
            a = function(t) {
                return function(e, r, a) {
                    var c, s = n(e),
                        u = o(s.length),
                        l = i(a, u);
                    if (t && r != r) {
                        for (; u > l;)
                            if ((c = s[l++]) != c) return !0
                    } else
                        for (; u > l; l++)
                            if ((t || l in s) && s[l] === r) return t || l || 0;
                    return !t && -1
                }
            };
        t.exports = {
            includes: a(!0),
            indexOf: a(!1)
        }
    },
    57: function(t, e, r) {
        var n, o = r(42);
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (t) {
            "object" === ("undefined" == typeof window ? "undefined" : o(window)) && (n = window)
        }
        t.exports = n
    },
    59: function(t, e, r) {
        "use strict";
        var n = r(8),
            o = r(4),
            i = r(32),
            a = r(38),
            c = r(11),
            s = r(10),
            u = r(51),
            l = r(2),
            f = r(48),
            d = r(28),
            p = f("slice"),
            h = d("slice", {
                ACCESSORS: !0,
                0: 0,
                1: 2
            }),
            g = l("species"),
            v = [].slice,
            y = Math.max;
        n({
            target: "Array",
            proto: !0,
            forced: !p || !h
        }, {
            slice: function(t, e) {
                var r, n, l, f = s(this),
                    d = c(f.length),
                    p = a(t, d),
                    h = a(void 0 === e ? d : e, d);
                if (i(f) && ("function" != typeof(r = f.constructor) || r !== Array && !i(r.prototype) ? o(r) && null === (r = r[g]) && (r = void 0) : r = void 0, r === Array || void 0 === r)) return v.call(f, p, h);
                for (n = new(void 0 === r ? Array : r)(y(h - p, 0)), l = 0; p < h; p++, l++) p in f && u(n, l, f[p]);
                return n.length = l, n
            }
        })
    },
    6: function(t, e, r) {
        var n = r(4);
        t.exports = function(t) {
            if (!n(t)) throw TypeError(String(t) + " is not an object");
            return t
        }
    },
    60: function(t, e, r) {
        var n = r(4),
            o = r(32),
            i = r(2)("species");
        t.exports = function(t, e) {
            var r;
            return o(t) && ("function" != typeof(r = t.constructor) || r !== Array && !o(r.prototype) ? n(r) && null === (r = r[i]) && (r = void 0) : r = void 0), new(void 0 === r ? Array : r)(0 === e ? 0 : e)
        }
    },
    61: function(t, e, r) {
        var n, o, i = r(0),
            a = r(74),
            c = i.process,
            s = c && c.versions,
            u = s && s.v8;
        u ? o = (n = u.split("."))[0] + n[1] : a && (!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = a.match(/Chrome\/(\d+)/)) && (o = n[1]), t.exports = o && +o
    },
    62: function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
            return t
        }
    },
    64: function(t, e, r) {
        var n = r(0),
            o = r(35),
            i = n.WeakMap;
        t.exports = "function" == typeof i && /native code/.test(o(i))
    },
    65: function(t, e, r) {
        var n = r(20),
            o = r(34),
            i = r(44),
            a = r(6);
        t.exports = n("Reflect", "ownKeys") || function(t) {
            var e = o.f(a(t)),
                r = i.f;
            return r ? e.concat(r(t)) : e
        }
    },
    67: function(t, e, r) {
        "use strict";
        var n = r(8),
            o = r(79);
        n({
            target: "RegExp",
            proto: !0,
            forced: /./.exec !== o
        }, {
            exec: o
        })
    },
    68: function(t, e, r) {
        "use strict";
        var n = r(6);
        t.exports = function() {
            var t = n(this),
                e = "";
            return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
        }
    },
    7: function(t, e, r) {
        var n = r(5),
            o = r(37),
            i = r(6),
            a = r(17),
            c = Object.defineProperty;
        e.f = n ? c : function(t, e, r) {
            if (i(t), e = a(e, !0), i(r), o) try {
                return c(t, e, r)
            } catch (t) {}
            if ("get" in r || "set" in r) throw TypeError("Accessors not supported");
            return "value" in r && (t[e] = r.value), t
        }
    },
    72: function(t, e) {
        t.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }
    },
    74: function(t, e, r) {
        var n = r(20);
        t.exports = n("navigator", "userAgent") || ""
    },
    77: function(t, e, r) {
        "use strict";
        var n = r(1);
        t.exports = function(t, e) {
            var r = [][t];
            return !!r && n((function() {
                r.call(null, e || function() {
                    throw 1
                }, 1)
            }))
        }
    },
    79: function(t, e, r) {
        "use strict";
        var n, o, i = r(68),
            a = r(111),
            c = RegExp.prototype.exec,
            s = String.prototype.replace,
            u = c,
            l = (n = /a/, o = /b*/g, c.call(n, "a"), c.call(o, "a"), 0 !== n.lastIndex || 0 !== o.lastIndex),
            f = a.UNSUPPORTED_Y || a.BROKEN_CARET,
            d = void 0 !== /()??/.exec("")[1];
        (l || d || f) && (u = function(t) {
            var e, r, n, o, a = this,
                u = f && a.sticky,
                p = i.call(a),
                h = a.source,
                g = 0,
                v = t;
            return u && (-1 === (p = p.replace("y", "")).indexOf("g") && (p += "g"), v = String(t).slice(a.lastIndex), a.lastIndex > 0 && (!a.multiline || a.multiline && "\n" !== t[a.lastIndex - 1]) && (h = "(?: " + h + ")", v = " " + v, g++), r = new RegExp("^(?:" + h + ")", p)), d && (r = new RegExp("^" + h + "$(?!\\s)", p)), l && (e = a.lastIndex), n = c.call(u ? r : a, v), u ? n ? (n.input = n.input.slice(g), n[0] = n[0].slice(g), n.index = a.lastIndex, a.lastIndex += n[0].length) : a.lastIndex = 0 : l && n && (a.lastIndex = a.global ? n.index + n[0].length : e), d && n && n.length > 1 && s.call(n[0], r, (function() {
                for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (n[o] = void 0)
            })), n
        }), t.exports = u
    },
    8: function(t, e, r) {
        var n = r(0),
            o = r(23).f,
            i = r(9),
            a = r(12),
            c = r(21),
            s = r(49),
            u = r(47);
        t.exports = function(t, e) {
            var r, l, f, d, p, h = t.target,
                g = t.global,
                v = t.stat;
            if (r = g ? n : v ? n[h] || c(h, {}) : (n[h] || {}).prototype)
                for (l in e) {
                    if (d = e[l], f = t.noTargetGet ? (p = o(r, l)) && p.value : r[l], !u(g ? l : h + (v ? "." : "#") + l, t.forced) && void 0 !== f) {
                        if (typeof d == typeof f) continue;
                        s(d, f)
                    }(t.sham || f && f.sham) && i(d, "sham", !0), a(r, l, d, t)
                }
        }
    },
    81: function(t, e, r) {
        "use strict";
        var n = r(8),
            o = r(45).map,
            i = r(48),
            a = r(28),
            c = i("map"),
            s = a("map");
        n({
            target: "Array",
            proto: !0,
            forced: !c || !s
        }, {
            map: function(t) {
                return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    },
    84: function(t, e, r) {
        var n = r(19),
            o = r(13),
            i = function(t) {
                return function(e, r) {
                    var i, a, c = String(o(e)),
                        s = n(r),
                        u = c.length;
                    return s < 0 || s >= u ? t ? "" : void 0 : (i = c.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === u || (a = c.charCodeAt(s + 1)) < 56320 || a > 57343 ? t ? c.charAt(s) : i : t ? c.slice(s, s + 2) : a - 56320 + (i - 55296 << 10) + 65536
                }
            };
        t.exports = {
            codeAt: i(!1),
            charAt: i(!0)
        }
    },
    89: function(t, e, r) {
        "use strict";
        var n = r(8),
            o = r(91);
        n({
            target: "Array",
            proto: !0,
            forced: [].forEach != o
        }, {
            forEach: o
        })
    },
    9: function(t, e, r) {
        var n = r(5),
            o = r(7),
            i = r(14);
        t.exports = n ? function(t, e, r) {
            return o.f(t, e, i(1, r))
        } : function(t, e, r) {
            return t[e] = r, t
        }
    },
    91: function(t, e, r) {
        "use strict";
        var n = r(45).forEach,
            o = r(77),
            i = r(28),
            a = o("forEach"),
            c = i("forEach");
        t.exports = a && c ? [].forEach : function(t) {
            return n(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    },
    93: function(t, e, r) {
        var n = r(0),
            o = r(72),
            i = r(91),
            a = r(9);
        for (var c in o) {
            var s = n[c],
                u = s && s.prototype;
            if (u && u.forEach !== i) try {
                a(u, "forEach", i)
            } catch (t) {
                u.forEach = i
            }
        }
    },
    97: function(t, e, r) {
        "use strict";
        r(67);
        var n = r(12),
            o = r(1),
            i = r(2),
            a = r(79),
            c = r(9),
            s = i("species"),
            u = !o((function() {
                var t = /./;
                return t.exec = function() {
                    var t = [];
                    return t.groups = {
                        a: "7"
                    }, t
                }, "7" !== "".replace(t, "$<a>")
            })),
            l = "$0" === "a".replace(/./, "$0"),
            f = i("replace"),
            d = !!/./ [f] && "" === /./ [f]("a", "$0"),
            p = !o((function() {
                var t = /(?:)/,
                    e = t.exec;
                t.exec = function() {
                    return e.apply(this, arguments)
                };
                var r = "ab".split(t);
                return 2 !== r.length || "a" !== r[0] || "b" !== r[1]
            }));
        t.exports = function(t, e, r, f) {
            var h = i(t),
                g = !o((function() {
                    var e = {};
                    return e[h] = function() {
                        return 7
                    }, 7 != "" [t](e)
                })),
                v = g && !o((function() {
                    var e = !1,
                        r = /a/;
                    return "split" === t && ((r = {}).constructor = {}, r.constructor[s] = function() {
                        return r
                    }, r.flags = "", r[h] = /./ [h]), r.exec = function() {
                        return e = !0, null
                    }, r[h](""), !e
                }));
            if (!g || !v || "replace" === t && (!u || !l || d) || "split" === t && !p) {
                var y = /./ [h],
                    x = r(h, "" [t], (function(t, e, r, n, o) {
                        return e.exec === a ? g && !o ? {
                            done: !0,
                            value: y.call(e, r, n)
                        } : {
                            done: !0,
                            value: t.call(r, e, n)
                        } : {
                            done: !1
                        }
                    }), {
                        REPLACE_KEEPS_$0: l,
                        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: d
                    }),
                    b = x[0],
                    m = x[1];
                n(String.prototype, t, b), n(RegExp.prototype, h, 2 == e ? function(t, e) {
                    return m.call(t, this, e)
                } : function(t) {
                    return m.call(t, this)
                })
            }
            f && c(RegExp.prototype[h], "sham", !0)
        }
    },
    98: function(t, e, r) {
        var n = r(16),
            o = r(79);
        t.exports = function(t, e) {
            var r = t.exec;
            if ("function" == typeof r) {
                var i = r.call(t, e);
                if ("object" != typeof i) throw TypeError("RegExp exec method returned something other than an Object or null");
                return i
            }
            if ("RegExp" !== n(t)) throw TypeError("RegExp#exec called on incompatible receiver");
            return o.call(t, e)
        }
    }
	
});


