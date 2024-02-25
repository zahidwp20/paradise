/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";
    var i = [], n = Object.getPrototypeOf, s = i.slice, r = i.flat ? function (t) {
        return i.flat.call(t)
    } : function (t) {
        return i.concat.apply([], t)
    }, o = i.push, a = i.indexOf, l = {}, c = l.toString, h = l.hasOwnProperty, u = h.toString, d = u.call(Object), p = {}, f = function (t) {
        return "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item
    }, m = function (t) {
        return null != t && t === t.window
    }, g = t.document, y = {type: !0, src: !0, nonce: !0, noModule: !0};

    function v(t, e, i) {
        var n, s, r = (i = i || g).createElement("script");
        if (r.text = t, e) for (n in y) (s = e[n] || e.getAttribute && e.getAttribute(n)) && r.setAttribute(n, s);
        i.head.appendChild(r).parentNode.removeChild(r)
    }

    function b(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? l[c.call(t)] || "object" : typeof t
    }

    var _ = "3.6.0", w = function (t, e) {
        return new w.fn.init(t, e)
    };

    function x(t) {
        var e = !!t && "length" in t && t.length, i = b(t);
        return !f(t) && !m(t) && ("array" === i || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }

    w.fn = w.prototype = {
        jquery: _, constructor: w, length: 0, toArray: function () {
            return s.call(this)
        }, get: function (t) {
            return null == t ? s.call(this) : t < 0 ? this[t + this.length] : this[t]
        }, pushStack: function (t) {
            var e = w.merge(this.constructor(), t);
            return e.prevObject = this, e
        }, each: function (t) {
            return w.each(this, t)
        }, map: function (t) {
            return this.pushStack(w.map(this, function (e, i) {
                return t.call(e, i, e)
            }))
        }, slice: function () {
            return this.pushStack(s.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, even: function () {
            return this.pushStack(w.grep(this, function (t, e) {
                return (e + 1) % 2
            }))
        }, odd: function () {
            return this.pushStack(w.grep(this, function (t, e) {
                return e % 2
            }))
        }, eq: function (t) {
            var e = this.length, i = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= i && i < e ? [this[i]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: o, sort: i.sort, splice: i.splice
    }, w.extend = w.fn.extend = function () {
        var t, e, i, n, s, r, o = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof o && (c = o, o = arguments[a] || {}, a++), "object" == typeof o || f(o) || (o = {}), a === l && (o = this, a--); a < l; a++) if (null != (t = arguments[a])) for (e in t) n = t[e], "__proto__" !== e && o !== n && (c && n && (w.isPlainObject(n) || (s = Array.isArray(n))) ? (i = o[e], r = s && !Array.isArray(i) ? [] : s || w.isPlainObject(i) ? i : {}, s = !1, o[e] = w.extend(c, r, n)) : void 0 !== n && (o[e] = n));
        return o
    }, w.extend({
        expando: "jQuery" + (_ + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
            throw Error(t)
        }, noop: function () {
        }, isPlainObject: function (t) {
            var e, i;
            return !(!t || "[object Object]" !== c.call(t)) && (!(e = n(t)) || "function" == typeof (i = h.call(e, "constructor") && e.constructor) && u.call(i) === d)
        }, isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        }, globalEval: function (t, e, i) {
            v(t, {nonce: e && e.nonce}, i)
        }, each: function (t, e) {
            var i, n = 0;
            if (x(t)) for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++) ; else for (n in t) if (!1 === e.call(t[n], n, t[n])) break;
            return t
        }, makeArray: function (t, e) {
            var i = e || [];
            return null != t && (x(Object(t)) ? w.merge(i, "string" == typeof t ? [t] : t) : o.call(i, t)), i
        }, inArray: function (t, e, i) {
            return null == e ? -1 : a.call(e, t, i)
        }, merge: function (t, e) {
            for (var i = +e.length, n = 0, s = t.length; n < i; n++) t[s++] = e[n];
            return t.length = s, t
        }, grep: function (t, e, i) {
            for (var n = [], s = 0, r = t.length, o = !i; s < r; s++) !e(t[s], s) !== o && n.push(t[s]);
            return n
        }, map: function (t, e, i) {
            var n, s, o = 0, a = [];
            if (x(t)) for (n = t.length; o < n; o++) null != (s = e(t[o], o, i)) && a.push(s); else for (o in t) null != (s = e(t[o], o, i)) && a.push(s);
            return r(a)
        }, guid: 1, support: p
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = i[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        l["[object " + e + "]"] = e.toLowerCase()
    });
    var k = function (t) {
        var e, i, n, s, r, o, a, l, c, h, u, d, p, f, m, g, y, v, b, _ = "sizzle" + 1 * new Date, w = t.document, x = 0, k = 0, D = th(), C = th(), S = th(), T = th(), E = function (t, e) {
                return t === e && (u = !0), 0
            }, A = {}.hasOwnProperty, P = [], L = P.pop, M = P.push, O = P.push, I = P.slice, Y = function (t, e) {
                for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i;
                return -1
            }, z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", H = "[\\x20\\t\\r\\n\\f]", N = "(?:\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", j = "\\[" + H + "*(" + N + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + H + "*\\]", R = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + j + ")*)|.*)\\)|)", W = RegExp(H + "+", "g"), B = RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"), F = RegExp("^" + H + "*," + H + "*"), V = RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"), q = RegExp(H + "|>"), U = RegExp(R), X = RegExp("^" + N + "$"),
            G = {ID: RegExp("^#(" + N + ")"), CLASS: RegExp("^\\.(" + N + ")"), TAG: RegExp("^(" + N + "|[*])"), ATTR: RegExp("^" + j), PSEUDO: RegExp("^" + R), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"), bool: RegExp("^(?:" + z + ")$", "i"), needsContext: RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")}, Q = /HTML$/i, Z = /^(?:input|select|textarea|button)$/i, K = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/, tt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, te = /[+~]/, ti = RegExp("\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\([^\\r\\n\\f])", "g"), tn = function (t, e) {
                var i = "0x" + t.slice(1) - 65536;
                return e || (i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320))
            }, ts = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, tr = function (t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            }, to = function () {
                d()
            }, ta = t_(function (t) {
                return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
            }, {dir: "parentNode", next: "legend"});
        try {
            O.apply(P = I.call(w.childNodes), w.childNodes), P[w.childNodes.length].nodeType
        } catch (tl) {
            O = {
                apply: P.length ? function (t, e) {
                    M.apply(t, I.call(e))
                } : function (t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];) ;
                    t.length = i - 1
                }
            }
        }

        function tc(t, e, n, s) {
            var r, a, c, h, u, f, y, v = e && e.ownerDocument, w = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== w && 9 !== w && 11 !== w) return n;
            if (!s && (d(e), e = e || p, m)) {
                if (11 !== w && (u = tt.exec(t))) {
                    if (r = u[1]) {
                        if (9 === w) {
                            if (!(c = e.getElementById(r))) return n;
                            if (c.id === r) return n.push(c), n
                        } else if (v && (c = v.getElementById(r)) && b(e, c) && c.id === r) return n.push(c), n
                    } else {
                        if (u[2]) return O.apply(n, e.getElementsByTagName(t)), n;
                        if ((r = u[3]) && i.getElementsByClassName && e.getElementsByClassName) return O.apply(n, e.getElementsByClassName(r)), n
                    }
                }
                if (i.qsa && !T[t + " "] && (!g || !g.test(t)) && (1 !== w || "object" !== e.nodeName.toLowerCase())) {
                    if (y = t, v = e, 1 === w && (q.test(t) || V.test(t))) {
                        for ((v = te.test(t) && t$(e.parentNode) || e) === e && i.scope || ((h = e.getAttribute("id")) ? h = h.replace(ts, tr) : e.setAttribute("id", h = _)), a = (f = o(t)).length; a--;) f[a] = (h ? "#" + h : ":scope") + " " + tb(f[a]);
                        y = f.join(",")
                    }
                    try {
                        return O.apply(n, v.querySelectorAll(y)), n
                    } catch (x) {
                        T(t, !0)
                    } finally {
                        h === _ && e.removeAttribute("id")
                    }
                }
            }
            return l(t.replace(B, "$1"), e, n, s)
        }

        function th() {
            var t = [];
            return function e(i, s) {
                return t.push(i + " ") > n.cacheLength && delete e[t.shift()], e[i + " "] = s
            }
        }

        function tu(t) {
            return t[_] = !0, t
        }

        function td(t) {
            var e = p.createElement("fieldset");
            try {
                return !!t(e)
            } catch (i) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function tp(t, e) {
            for (var i = t.split("|"), s = i.length; s--;) n.attrHandle[i[s]] = e
        }

        function tf(t, e) {
            var i = e && t, n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (n) return n;
            if (i) {
                for (; i = i.nextSibling;) if (i === e) return -1
            }
            return t ? 1 : -1
        }

        function tm(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function tg(t) {
            return function (e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function ty(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || !t !== e.isDisabled && ta(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function tv(t) {
            return tu(function (e) {
                return e = +e, tu(function (i, n) {
                    for (var s, r = t([], i.length, e), o = r.length; o--;) i[s = r[o]] && (i[s] = !(n[s] = i[s]))
                })
            })
        }

        function t$(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }

        for (e in i = tc.support = {}, r = tc.isXML = function (t) {
            var e = t && t.namespaceURI, i = t && (t.ownerDocument || t).documentElement;
            return !Q.test(e || i && i.nodeName || "HTML")
        }, d = tc.setDocument = function (t) {
            var e, s, o = t ? t.ownerDocument || t : w;
            return o != p && 9 === o.nodeType && o.documentElement && (f = (p = o).documentElement, m = !r(p), w != p && (s = p.defaultView) && s.top !== s && (s.addEventListener ? s.addEventListener("unload", to, !1) : s.attachEvent && s.attachEvent("onunload", to)), i.scope = td(function (t) {
                return f.appendChild(t).appendChild(p.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
            }), i.attributes = td(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), i.getElementsByTagName = td(function (t) {
                return t.appendChild(p.createComment("")), !t.getElementsByTagName("*").length
            }), i.getElementsByClassName = J.test(p.getElementsByClassName), i.getById = td(function (t) {
                return f.appendChild(t).id = _, !p.getElementsByName || !p.getElementsByName(_).length
            }), i.getById ? (n.filter.ID = function (t) {
                var e = t.replace(ti, tn);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }, n.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && m) {
                    var i = e.getElementById(t);
                    return i ? [i] : []
                }
            }) : (n.filter.ID = function (t) {
                var e = t.replace(ti, tn);
                return function (t) {
                    var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }, n.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && m) {
                    var i, n, s, r = e.getElementById(t);
                    if (r) {
                        if ((i = r.getAttributeNode("id")) && i.value === t) return [r];
                        for (s = e.getElementsByName(t), n = 0; r = s[n++];) if ((i = r.getAttributeNode("id")) && i.value === t) return [r]
                    }
                    return []
                }
            }), n.find.TAG = i.getElementsByTagName ? function (t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0
            } : function (t, e) {
                var i, n = [], s = 0, r = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = r[s++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return r
            }, n.find.CLASS = i.getElementsByClassName && function (t, e) {
                if (void 0 !== e.getElementsByClassName && m) return e.getElementsByClassName(t)
            }, y = [], g = [], (i.qsa = J.test(p.querySelectorAll)) && (td(function (t) {
                var e;
                f.appendChild(t).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + H + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + H + "*(?:value|" + z + ")"), t.querySelectorAll("[id~=" + _ + "-]").length || g.push("~="), (e = p.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || g.push("\\[" + H + "*name" + H + "*=" + H + "*(?:''|\"\")"), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + _ + "+*").length || g.push(".#.+[+~]"), t.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
            }), td(function (t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = p.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + H + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), f.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
            })), (i.matchesSelector = J.test(v = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && td(function (t) {
                i.disconnectedMatch = v.call(t, "*"), v.call(t, "[s!='']:x"), y.push("!=", R)
            }), g = g.length && RegExp(g.join("|")), y = y.length && RegExp(y.join("|")), b = (e = J.test(f.compareDocumentPosition)) || J.test(f.contains) ? function (t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t, n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function (t, e) {
                if (e) {
                    for (; e = e.parentNode;) if (e === t) return !0
                }
                return !1
            }, E = e ? function (t, e) {
                if (t === e) return u = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n || (1 & (n = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === n ? t == p || t.ownerDocument == w && b(w, t) ? -1 : e == p || e.ownerDocument == w && b(w, e) ? 1 : h ? Y(h, t) - Y(h, e) : 0 : 4 & n ? -1 : 1)
            } : function (t, e) {
                if (t === e) return u = !0, 0;
                var i, n = 0, s = t.parentNode, r = e.parentNode, o = [t], a = [e];
                if (!s || !r) return t == p ? -1 : e == p ? 1 : s ? -1 : r ? 1 : h ? Y(h, t) - Y(h, e) : 0;
                if (s === r) return tf(t, e);
                for (i = t; i = i.parentNode;) o.unshift(i);
                for (i = e; i = i.parentNode;) a.unshift(i);
                for (; o[n] === a[n];) n++;
                return n ? tf(o[n], a[n]) : o[n] == w ? -1 : a[n] == w ? 1 : 0
            }), p
        }, tc.matches = function (t, e) {
            return tc(t, null, null, e)
        }, tc.matchesSelector = function (t, e) {
            if (d(t), i.matchesSelector && m && !T[e + " "] && (!y || !y.test(e)) && (!g || !g.test(e))) try {
                var n = v.call(t, e);
                if (n || i.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch (s) {
                T(e, !0)
            }
            return 0 < tc(e, p, null, [t]).length
        }, tc.contains = function (t, e) {
            return (t.ownerDocument || t) != p && d(t), b(t, e)
        }, tc.attr = function (t, e) {
            (t.ownerDocument || t) != p && d(t);
            var s = n.attrHandle[e.toLowerCase()], r = s && A.call(n.attrHandle, e.toLowerCase()) ? s(t, e, !m) : void 0;
            return void 0 !== r ? r : i.attributes || !m ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }, tc.escape = function (t) {
            return (t + "").replace(ts, tr)
        }, tc.error = function (t) {
            throw Error("Syntax error, unrecognized expression: " + t)
        }, tc.uniqueSort = function (t) {
            var e, n = [], s = 0, r = 0;
            if (u = !i.detectDuplicates, h = !i.sortStable && t.slice(0), t.sort(E), u) {
                for (; e = t[r++];) e === t[r] && (s = n.push(r));
                for (; s--;) t.splice(n[s], 1)
            }
            return h = null, t
        }, s = tc.getText = function (t) {
            var e, i = "", n = 0, r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += s(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else for (; e = t[n++];) i += s(e);
            return i
        }, (n = tc.selectors = {
            cacheLength: 50, createPseudo: tu, match: G, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(ti, tn), t[3] = (t[3] || t[4] || t[5] || "").replace(ti, tn), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                }, CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || tc.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && tc.error(t[0]), t
                }, PSEUDO: function (t) {
                    var e, i = !t[6] && t[2];
                    return G.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && U.test(i) && (e = o(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            }, filter: {
                TAG: function (t) {
                    var e = t.replace(ti, tn).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                }, CLASS: function (t) {
                    var e = D[t + " "];
                    return e || (e = RegExp("(^|" + H + ")" + t + "(" + H + "|$)"), D(t, function (t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    }))
                }, ATTR: function (t, e, i) {
                    return function (n) {
                        var s = tc.attr(n, t);
                        return null == s ? "!=" === e : !e || (s += "", "=" === e ? s === i : "!=" === e ? s !== i : "^=" === e ? i && 0 === s.indexOf(i) : "*=" === e ? i && -1 < s.indexOf(i) : "$=" === e ? i && s.slice(-i.length) === i : "~=" === e ? -1 < (" " + s.replace(W, " ") + " ").indexOf(i) : "|=" === e && (s === i || s.slice(0, i.length + 1) === i + "-"))
                    }
                }, CHILD: function (t, e, i, n, s) {
                    var r = "nth" !== t.slice(0, 3), o = "last" !== t.slice(-4), a = "of-type" === e;
                    return 1 === n && 0 === s ? function (t) {
                        return !!t.parentNode
                    } : function (e, i, l) {
                        var c, h, u, d, p, f, m = r !== o ? "nextSibling" : "previousSibling", g = e.parentNode, y = a && e.nodeName.toLowerCase(), v = !l && !a, b = !1;
                        if (g) {
                            if (r) {
                                for (; m;) {
                                    for (d = e; d = d[m];) if (a ? d.nodeName.toLowerCase() === y : 1 === d.nodeType) return !1;
                                    f = m = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [o ? g.firstChild : g.lastChild], o && v) {
                                for (b = (p = (c = (h = (u = (d = g)[_] || (d[_] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] || [])[0] === x && c[1]) && c[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (b = p = 0) || f.pop();) if (1 === d.nodeType && ++b && d === e) {
                                    h[t] = [x, p, b];
                                    break
                                }
                            } else if (v && (b = p = (c = (h = (u = (d = e)[_] || (d[_] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] || [])[0] === x && c[1]), !1 === b) for (; (d = ++p && d && d[m] || (b = p = 0) || f.pop()) && (!((a ? d.nodeName.toLowerCase() === y : 1 === d.nodeType) && ++b) || (v && ((h = (u = d[_] || (d[_] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] = [x, b]), d !== e));) ;
                            return (b -= s) === n || b % n == 0 && 0 <= b / n
                        }
                    }
                }, PSEUDO: function (t, e) {
                    var i, s = n.pseudos[t] || n.setFilters[t.toLowerCase()] || tc.error("unsupported pseudo: " + t);
                    return s[_] ? s(e) : 1 < s.length ? (i = [t, t, "", e], n.setFilters.hasOwnProperty(t.toLowerCase()) ? tu(function (t, i) {
                        for (var n, r = s(t, e), o = r.length; o--;) t[n = Y(t, r[o])] = !(i[n] = r[o])
                    }) : function (t) {
                        return s(t, 0, i)
                    }) : s
                }
            }, pseudos: {
                not: tu(function (t) {
                    var e = [], i = [], n = a(t.replace(B, "$1"));
                    return n[_] ? tu(function (t, e, i, s) {
                        for (var r, o = n(t, null, s, []), a = t.length; a--;) (r = o[a]) && (t[a] = !(e[a] = r))
                    }) : function (t, s, r) {
                        return e[0] = t, n(e, null, r, i), e[0] = null, !i.pop()
                    }
                }), has: tu(function (t) {
                    return function (e) {
                        return 0 < tc(t, e).length
                    }
                }), contains: tu(function (t) {
                    return t = t.replace(ti, tn), function (e) {
                        return -1 < (e.textContent || s(e)).indexOf(t)
                    }
                }), lang: tu(function (t) {
                    return X.test(t || "") || tc.error("unsupported lang: " + t), t = t.replace(ti, tn).toLowerCase(), function (e) {
                        var i;
                        do if (i = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                }, root: function (t) {
                    return t === f
                }, focus: function (t) {
                    return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                }, enabled: ty(!1), disabled: ty(!0), checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                }, selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                }, empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                    return !0
                }, parent: function (t) {
                    return !n.pseudos.empty(t)
                }, header: function (t) {
                    return K.test(t.nodeName)
                }, input: function (t) {
                    return Z.test(t.nodeName)
                }, button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                }, text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                }, first: tv(function () {
                    return [0]
                }), last: tv(function (t, e) {
                    return [e - 1]
                }), eq: tv(function (t, e, i) {
                    return [i < 0 ? i + e : i]
                }), even: tv(function (t, e) {
                    for (var i = 0; i < e; i += 2) t.push(i);
                    return t
                }), odd: tv(function (t, e) {
                    for (var i = 1; i < e; i += 2) t.push(i);
                    return t
                }), lt: tv(function (t, e, i) {
                    for (var n = i < 0 ? i + e : e < i ? e : i; 0 <= --n;) t.push(n);
                    return t
                }), gt: tv(function (t, e, i) {
                    for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                    return t
                })
            }
        }).pseudos.nth = n.pseudos.eq, {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) n.pseudos[e] = tm(e);
        for (e in {submit: !0, reset: !0}) n.pseudos[e] = tg(e);

        function t8() {
        }

        function tb(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
            return n
        }

        function t_(t, e, i) {
            var n = e.dir, s = e.next, r = s || n, o = i && "parentNode" === r, a = k++;
            return e.first ? function (e, i, s) {
                for (; e = e[n];) if (1 === e.nodeType || o) return t(e, i, s);
                return !1
            } : function (e, i, l) {
                var c, h, u, d = [x, a];
                if (l) {
                    for (; e = e[n];) if ((1 === e.nodeType || o) && t(e, i, l)) return !0
                } else for (; e = e[n];) if (1 === e.nodeType || o) {
                    if (h = (u = e[_] || (e[_] = {}))[e.uniqueID] || (u[e.uniqueID] = {}), s && s === e.nodeName.toLowerCase()) e = e[n] || e; else {
                        if ((c = h[r]) && c[0] === x && c[1] === a) return d[2] = c[2];
                        if ((h[r] = d)[2] = t(e, i, l)) return !0
                    }
                }
                return !1
            }
        }

        function tw(t) {
            return 1 < t.length ? function (e, i, n) {
                for (var s = t.length; s--;) if (!t[s](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function tx(t, e, i, n, s) {
            for (var r, o = [], a = 0, l = t.length, c = null != e; a < l; a++) (r = t[a]) && (i && !i(r, n, s) || (o.push(r), c && e.push(a)));
            return o
        }

        function tk(t, e, i, n, s, r) {
            return n && !n[_] && (n = tk(n)), s && !s[_] && (s = tk(s, r)), tu(function (r, o, a, l) {
                var c, h, u, d = [], p = [], f = o.length, m = r || function (t, e, i) {
                    for (var n = 0, s = e.length; n < s; n++) tc(t, e[n], i);
                    return i
                }(e || "*", a.nodeType ? [a] : a, []), g = t && (r || !e) ? tx(m, d, t, a, l) : m, y = i ? s || (r ? t : f || n) ? [] : o : g;
                if (i && i(g, y, a, l), n) for (c = tx(y, p), n(c, [], a, l), h = c.length; h--;) (u = c[h]) && (y[p[h]] = !(g[p[h]] = u));
                if (r) {
                    if (s || t) {
                        if (s) {
                            for (c = [], h = y.length; h--;) (u = y[h]) && c.push(g[h] = u);
                            s(null, y = [], c, l)
                        }
                        for (h = y.length; h--;) (u = y[h]) && -1 < (c = s ? Y(r, u) : d[h]) && (r[c] = !(o[c] = u))
                    }
                } else y = tx(y === o ? y.splice(f, y.length) : y), s ? s(null, o, y, l) : O.apply(o, y)
            })
        }

        function tD(t) {
            for (var e, i, s, r = t.length, o = n.relative[t[0].type], a = o || n.relative[" "], l = o ? 1 : 0, h = t_(function (t) {
                return t === e
            }, a, !0), u = t_(function (t) {
                return -1 < Y(e, t)
            }, a, !0), d = [function (t, i, n) {
                var s = !o && (n || i !== c) || ((e = i).nodeType ? h(t, i, n) : u(t, i, n));
                return e = null, s
            }]; l < r; l++) if (i = n.relative[t[l].type]) d = [t_(tw(d), i)]; else {
                if ((i = n.filter[t[l].type].apply(null, t[l].matches))[_]) {
                    for (s = ++l; s < r && !n.relative[t[s].type]; s++) ;
                    return tk(1 < l && tw(d), 1 < l && tb(t.slice(0, l - 1).concat({value: " " === t[l - 2].type ? "*" : ""})).replace(B, "$1"), i, l < s && tD(t.slice(l, s)), s < r && tD(t = t.slice(s)), s < r && tb(t))
                }
                d.push(i)
            }
            return tw(d)
        }

        return t8.prototype = n.filters = n.pseudos, n.setFilters = new t8, o = tc.tokenize = function (t, e) {
            var i, s, r, o, a, l, c, h = C[t + " "];
            if (h) return e ? 0 : h.slice(0);
            for (a = t, l = [], c = n.preFilter; a;) {
                for (o in (!i || (s = F.exec(a))) && (s && (a = a.slice(s[0].length) || a), l.push(r = [])), i = !1, (s = V.exec(a)) && (i = s.shift(), r.push({value: i, type: s[0].replace(B, " ")}), a = a.slice(i.length)), n.filter) (s = G[o].exec(a)) && (!c[o] || (s = c[o](s))) && (i = s.shift(), r.push({value: i, type: o, matches: s}), a = a.slice(i.length));
                if (!i) break
            }
            return e ? a.length : a ? tc.error(t) : C(t, l).slice(0)
        }, a = tc.compile = function (t, e) {
            var i, s, r, a, l, h, u = [], f = [], g = S[t + " "];
            if (!g) {
                for (e || (e = o(t)), i = e.length; i--;) (g = tD(e[i]))[_] ? u.push(g) : f.push(g);
                (g = S(t, (s = f, a = 0 < (r = u).length, l = 0 < s.length, h = function (t, e, i, o, h) {
                    var u, f, g, y = 0, v = "0", b = t && [], _ = [], w = c, k = t || l && n.find.TAG("*", h), D = x += null == w ? 1 : Math.random() || .1, C = k.length;
                    for (h && (c = e == p || e || h); v !== C && null != (u = k[v]); v++) {
                        if (l && u) {
                            for (f = 0, e || u.ownerDocument == p || (d(u), i = !m); g = s[f++];) if (g(u, e || p, i)) {
                                o.push(u);
                                break
                            }
                            h && (x = D)
                        }
                        a && ((u = !g && u) && y--, t && b.push(u))
                    }
                    if (y += v, a && v !== y) {
                        for (f = 0; g = r[f++];) g(b, _, e, i);
                        if (t) {
                            if (0 < y) for (; v--;) b[v] || _[v] || (_[v] = L.call(o));
                            _ = tx(_)
                        }
                        O.apply(o, _), h && !t && 0 < _.length && 1 < y + r.length && tc.uniqueSort(o)
                    }
                    return h && (x = D, c = w), b
                }, a ? tu(h) : h))).selector = t
            }
            return g
        }, l = tc.select = function (t, e, i, s) {
            var r, l, c, h, u, d = "function" == typeof t && t, p = !s && o(t = d.selector || t);
            if (i = i || [], 1 === p.length) {
                if (2 < (l = p[0] = p[0].slice(0)).length && "ID" === (c = l[0]).type && 9 === e.nodeType && m && n.relative[l[1].type]) {
                    if (!(e = (n.find.ID(c.matches[0].replace(ti, tn), e) || [])[0])) return i;
                    d && (e = e.parentNode), t = t.slice(l.shift().value.length)
                }
                for (r = G.needsContext.test(t) ? 0 : l.length; r-- && (c = l[r], !n.relative[h = c.type]);) if ((u = n.find[h]) && (s = u(c.matches[0].replace(ti, tn), te.test(l[0].type) && t$(e.parentNode) || e))) {
                    if (l.splice(r, 1), !(t = s.length && tb(l))) return O.apply(i, s), i;
                    break
                }
            }
            return (d || a(t, p))(s, e, !m, i, !e || te.test(t) && t$(e.parentNode) || e), i
        }, i.sortStable = _.split("").sort(E).join("") === _, i.detectDuplicates = !!u, d(), i.sortDetached = td(function (t) {
            return 1 & t.compareDocumentPosition(p.createElement("fieldset"))
        }), td(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || tp("type|href|height|width", function (t, e, i) {
            if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), i.attributes && td(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || tp("value", function (t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), td(function (t) {
            return null == t.getAttribute("disabled")
        }) || tp(z, function (t, e, i) {
            var n;
            if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), tc
    }(t);
    w.find = k, w.expr = k.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = k.uniqueSort, w.text = k.getText, w.isXMLDoc = k.isXML, w.contains = k.contains, w.escapeSelector = k.escape;
    var D = function (t, e, i) {
        for (var n = [], s = void 0 !== i; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
            if (s && w(t).is(i)) break;
            n.push(t)
        }
        return n
    }, C = function (t, e) {
        for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
        return i
    }, S = w.expr.match.needsContext;

    function T(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }

    var E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function A(t, e, i) {
        return f(e) ? w.grep(t, function (t, n) {
            return !!e.call(t, n, t) !== i
        }) : e.nodeType ? w.grep(t, function (t) {
            return t === e !== i
        }) : "string" != typeof e ? w.grep(t, function (t) {
            return -1 < a.call(e, t) !== i
        }) : w.filter(e, t, i)
    }

    w.filter = function (t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? w.find.matchesSelector(n, t) ? [n] : [] : w.find.matches(t, w.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, w.fn.extend({
        find: function (t) {
            var e, i, n = this.length, s = this;
            if ("string" != typeof t) return this.pushStack(w(t).filter(function () {
                for (e = 0; e < n; e++) if (w.contains(s[e], this)) return !0
            }));
            for (i = this.pushStack([]), e = 0; e < n; e++) w.find(t, s[e], i);
            return 1 < n ? w.uniqueSort(i) : i
        }, filter: function (t) {
            return this.pushStack(A(this, t || [], !1))
        }, not: function (t) {
            return this.pushStack(A(this, t || [], !0))
        }, is: function (t) {
            return !!A(this, "string" == typeof t && S.test(t) ? w(t) : t || [], !1).length
        }
    });
    var P, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function (t, e, i) {
        var n, s;
        if (!t) return this;
        if (i = i || P, "string" == typeof t) {
            if (!(n = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : L.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof w ? e[0] : e, w.merge(this, w.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : g, !0)), E.test(n[1]) && w.isPlainObject(e)) for (n in e) f(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            return (s = g.getElementById(n[2])) && (this[0] = s, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : f(t) ? void 0 !== i.ready ? i.ready(t) : t(w) : w.makeArray(t, this)
    }).prototype = w.fn, P = w(g);
    var M = /^(?:parents|prev(?:Until|All))/, O = {children: !0, contents: !0, next: !0, prev: !0};

    function I(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType;) ;
        return t
    }

    w.fn.extend({
        has: function (t) {
            var e = w(t, this), i = e.length;
            return this.filter(function () {
                for (var t = 0; t < i; t++) if (w.contains(this, e[t])) return !0
            })
        }, closest: function (t, e) {
            var i, n = 0, s = this.length, r = [], o = "string" != typeof t && w(t);
            if (!S.test(t)) {
                for (; n < s; n++) for (i = this[n]; i && i !== e; i = i.parentNode) if (i.nodeType < 11 && (o ? -1 < o.index(i) : 1 === i.nodeType && w.find.matchesSelector(i, t))) {
                    r.push(i);
                    break
                }
            }
            return this.pushStack(1 < r.length ? w.uniqueSort(r) : r)
        }, index: function (t) {
            return t ? "string" == typeof t ? a.call(w(t), this[0]) : a.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (t, e) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(t, e))))
        }, addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), w.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function (t) {
            return D(t, "parentNode")
        }, parentsUntil: function (t, e, i) {
            return D(t, "parentNode", i)
        }, next: function (t) {
            return I(t, "nextSibling")
        }, prev: function (t) {
            return I(t, "previousSibling")
        }, nextAll: function (t) {
            return D(t, "nextSibling")
        }, prevAll: function (t) {
            return D(t, "previousSibling")
        }, nextUntil: function (t, e, i) {
            return D(t, "nextSibling", i)
        }, prevUntil: function (t, e, i) {
            return D(t, "previousSibling", i)
        }, siblings: function (t) {
            return C((t.parentNode || {}).firstChild, t)
        }, children: function (t) {
            return C(t.firstChild)
        }, contents: function (t) {
            return null != t.contentDocument && n(t.contentDocument) ? t.contentDocument : (T(t, "template") && (t = t.content || t), w.merge([], t.childNodes))
        }
    }, function (t, e) {
        w.fn[t] = function (i, n) {
            var s = w.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = w.filter(n, s)), 1 < this.length && (O[t] || w.uniqueSort(s), M.test(t) && s.reverse()), this.pushStack(s)
        }
    });
    var Y = /[^\x20\t\r\n\f]+/g;

    function z(t) {
        return t
    }

    function H(t) {
        throw t
    }

    function N(t, e, i, n) {
        var s;
        try {
            t && f(s = t.promise) ? s.call(t).done(e).fail(i) : t && f(s = t.then) ? s.call(t, e, i) : e.apply(void 0, [t].slice(n))
        } catch (r) {
            i.apply(void 0, [r])
        }
    }

    w.Callbacks = function (t) {
        t = "string" == typeof t ? (e = t, i = {}, w.each(e.match(Y) || [], function (t, e) {
            i[e] = !0
        }), i) : w.extend({}, t);
        var e, i, n, s, r, o, a = [], l = [], c = -1, h = function () {
            for (o = o || t.once, r = n = !0; l.length; c = -1) for (s = l.shift(); ++c < a.length;) !1 === a[c].apply(s[0], s[1]) && t.stopOnFalse && (c = a.length, s = !1);
            t.memory || (s = !1), n = !1, o && (a = s ? [] : "")
        }, u = {
            add: function () {
                return a && (s && !n && (c = a.length - 1, l.push(s)), function e(i) {
                    w.each(i, function (i, n) {
                        f(n) ? t.unique && u.has(n) || a.push(n) : n && n.length && "string" !== b(n) && e(n)
                    })
                }(arguments), s && !n && h()), this
            }, remove: function () {
                return w.each(arguments, function (t, e) {
                    for (var i; -1 < (i = w.inArray(e, a, i));) a.splice(i, 1), i <= c && c--
                }), this
            }, has: function (t) {
                return t ? -1 < w.inArray(t, a) : 0 < a.length
            }, empty: function () {
                return a && (a = []), this
            }, disable: function () {
                return o = l = [], a = s = "", this
            }, disabled: function () {
                return !a
            }, lock: function () {
                return o = l = [], s || n || (a = s = ""), this
            }, locked: function () {
                return !!o
            }, fireWith: function (t, e) {
                return o || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), n || h()), this
            }, fire: function () {
                return u.fireWith(this, arguments), this
            }, fired: function () {
                return !!r
            }
        };
        return u
    }, w.extend({
        Deferred: function (e) {
            var i = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]], n = "pending", s = {
                state: function () {
                    return n
                }, always: function () {
                    return r.done(arguments).fail(arguments), this
                }, catch: function (t) {
                    return s.then(null, t)
                }, pipe: function () {
                    var t = arguments;
                    return w.Deferred(function (e) {
                        w.each(i, function (i, n) {
                            var s = f(t[n[4]]) && t[n[4]];
                            r[n[1]](function () {
                                var t = s && s.apply(this, arguments);
                                t && f(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[n[0] + "With"](this, s ? [t] : arguments)
                            })
                        }), t = null
                    }).promise()
                }, then: function (e, n, s) {
                    var r = 0;

                    function o(e, i, n, s) {
                        return function () {
                            var a = this, l = arguments, c = function () {
                                var t, c;
                                if (!(e < r)) {
                                    if ((t = n.apply(a, l)) === i.promise()) throw TypeError("Thenable self-resolution");
                                    f(c = t && ("object" == typeof t || "function" == typeof t) && t.then) ? s ? c.call(t, o(r, i, z, s), o(r, i, H, s)) : (r++, c.call(t, o(r, i, z, s), o(r, i, H, s), o(r, i, z, i.notifyWith))) : (n !== z && (a = void 0, l = [t]), (s || i.resolveWith)(a, l))
                                }
                            }, h = s ? c : function () {
                                try {
                                    c()
                                } catch (t) {
                                    w.Deferred.exceptionHook && w.Deferred.exceptionHook(t, h.stackTrace), r <= e + 1 && (n !== H && (a = void 0, l = [t]), i.rejectWith(a, l))
                                }
                            };
                            e ? h() : (w.Deferred.getStackHook && (h.stackTrace = w.Deferred.getStackHook()), t.setTimeout(h))
                        }
                    }

                    return w.Deferred(function (t) {
                        i[0][3].add(o(0, t, f(s) ? s : z, t.notifyWith)), i[1][3].add(o(0, t, f(e) ? e : z)), i[2][3].add(o(0, t, f(n) ? n : H))
                    }).promise()
                }, promise: function (t) {
                    return null != t ? w.extend(t, s) : s
                }
            }, r = {};
            return w.each(i, function (t, e) {
                var o = e[2], a = e[5];
                s[e[1]] = o.add, a && o.add(function () {
                    n = a
                }, i[3 - t][2].disable, i[3 - t][3].disable, i[0][2].lock, i[0][3].lock), o.add(e[3].fire), r[e[0]] = function () {
                    return r[e[0] + "With"](this === r ? void 0 : this, arguments), this
                }, r[e[0] + "With"] = o.fireWith
            }), s.promise(r), e && e.call(r, r), r
        }, when: function (t) {
            var e = arguments.length, i = e, n = Array(i), r = s.call(arguments), o = w.Deferred(), a = function (t) {
                return function (i) {
                    n[t] = this, r[t] = 1 < arguments.length ? s.call(arguments) : i, --e || o.resolveWith(n, r)
                }
            };
            if (e <= 1 && (N(t, o.done(a(i)).resolve, o.reject, !e), "pending" === o.state() || f(r[i] && r[i].then))) return o.then();
            for (; i--;) N(r[i], a(i), o.reject);
            return o.promise()
        }
    });
    var j = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function (e, i) {
        t.console && t.console.warn && e && j.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i)
    }, w.readyException = function (e) {
        t.setTimeout(function () {
            throw e
        })
    };
    var R = w.Deferred();

    function W() {
        g.removeEventListener("DOMContentLoaded", W), t.removeEventListener("load", W), w.ready()
    }

    w.fn.ready = function (t) {
        return R.then(t).catch(function (t) {
            w.readyException(t)
        }), this
    }, w.extend({
        isReady: !1, readyWait: 1, ready: function (t) {
            (!0 === t ? --w.readyWait : w.isReady) || (w.isReady = !0) !== t && 0 < --w.readyWait || R.resolveWith(g, [w])
        }
    }), w.ready.then = R.then, "complete" !== g.readyState && ("loading" === g.readyState || g.documentElement.doScroll) ? (g.addEventListener("DOMContentLoaded", W), t.addEventListener("load", W)) : t.setTimeout(w.ready);
    var B = function (t, e, i, n, s, r, o) {
        var a = 0, l = t.length, c = null == i;
        if ("object" === b(i)) for (a in s = !0, i) B(t, e, a, i[a], !0, r, o); else if (void 0 !== n && (s = !0, f(n) || (o = !0), c && (o ? (e.call(t, n), e = null) : (c = e, e = function (t, e, i) {
            return c.call(w(t), i)
        })), e)) for (; a < l; a++) e(t[a], i, o ? n : n.call(t[a], a, e(t[a], i)));
        return s ? t : c ? e.call(t) : l ? e(t[0], i) : r
    }, F = /^-ms-/, V = /-([a-z])/g;

    function q(t, e) {
        return e.toUpperCase()
    }

    function U(t) {
        return t.replace(F, "ms-").replace(V, q)
    }

    var X = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };

    function G() {
        this.expando = w.expando + G.uid++
    }

    G.uid = 1, G.prototype = {
        cache: function (t) {
            var e = t[this.expando];
            return e || (e = {}, X(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {value: e, configurable: !0}))), e
        }, set: function (t, e, i) {
            var n, s = this.cache(t);
            if ("string" == typeof e) s[U(e)] = i; else for (n in e) s[U(n)] = e[n];
            return s
        }, get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][U(e)]
        }, access: function (t, e, i) {
            return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
        }, remove: function (t, e) {
            var i, n = t[this.expando];
            if (void 0 !== n) {
                if (void 0 !== e) for (i = (e = Array.isArray(e) ? e.map(U) : ((e = U(e)) in n) ? [e] : e.match(Y) || []).length; i--;) delete n[e[i]];
                (void 0 === e || w.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        }, hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !w.isEmptyObject(e)
        }
    };
    var Q = new G, Z = new G, K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, J = /[A-Z]/g;

    function tt(t, e, i) {
        var n, s;
        if (void 0 === i && 1 === t.nodeType) {
            if (n = "data-" + e.replace(J, "-$&").toLowerCase(), "string" == typeof (i = t.getAttribute(n))) {
                try {
                    i = "true" === (s = i) || "false" !== s && ("null" === s ? null : s === +s + "" ? +s : K.test(s) ? JSON.parse(s) : s)
                } catch (r) {
                }
                Z.set(t, e, i)
            } else i = void 0
        }
        return i
    }

    w.extend({
        hasData: function (t) {
            return Z.hasData(t) || Q.hasData(t)
        }, data: function (t, e, i) {
            return Z.access(t, e, i)
        }, removeData: function (t, e) {
            Z.remove(t, e)
        }, _data: function (t, e, i) {
            return Q.access(t, e, i)
        }, _removeData: function (t, e) {
            Q.remove(t, e)
        }
    }), w.fn.extend({
        data: function (t, e) {
            var i, n, s, r = this[0], o = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (s = Z.get(r), 1 === r.nodeType && !Q.get(r, "hasDataAttrs"))) {
                    for (i = o.length; i--;) o[i] && 0 === (n = o[i].name).indexOf("data-") && tt(r, n = U(n.slice(5)), s[n]);
                    Q.set(r, "hasDataAttrs", !0)
                }
                return s
            }
            return "object" == typeof t ? this.each(function () {
                Z.set(this, t)
            }) : B(this, function (e) {
                var i;
                if (r && void 0 === e) return void 0 !== (i = Z.get(r, t)) ? i : void 0 !== (i = tt(r, t)) ? i : void 0;
                this.each(function () {
                    Z.set(this, t, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        }, removeData: function (t) {
            return this.each(function () {
                Z.remove(this, t)
            })
        }
    }), w.extend({
        queue: function (t, e, i) {
            var n;
            if (t) return e = (e || "fx") + "queue", n = Q.get(t, e), i && (!n || Array.isArray(i) ? n = Q.access(t, e, w.makeArray(i)) : n.push(i)), n || []
        }, dequeue: function (t, e) {
            e = e || "fx";
            var i = w.queue(t, e), n = i.length, s = i.shift(), r = w._queueHooks(t, e);
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete r.stop, s.call(t, function () {
                w.dequeue(t, e)
            }, r)), !n && r && r.empty.fire()
        }, _queueHooks: function (t, e) {
            var i = e + "queueHooks";
            return Q.get(t, i) || Q.access(t, i, {
                empty: w.Callbacks("once memory").add(function () {
                    Q.remove(t, [e + "queue", i])
                })
            })
        }
    }), w.fn.extend({
        queue: function (t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? w.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var i = w.queue(this, t, e);
                w._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && w.dequeue(this, t)
            })
        }, dequeue: function (t) {
            return this.each(function () {
                w.dequeue(this, t)
            })
        }, clearQueue: function (t) {
            return this.queue(t || "fx", [])
        }, promise: function (t, e) {
            var i, n = 1, s = w.Deferred(), r = this, o = this.length, a = function () {
                --n || s.resolveWith(r, [r])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;) (i = Q.get(r[o], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), s.promise(e)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ti = RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"), tn = ["Top", "Right", "Bottom", "Left"], ts = g.documentElement, tr = function (t) {
        return w.contains(t.ownerDocument, t)
    }, to = {composed: !0};
    ts.getRootNode && (tr = function (t) {
        return w.contains(t.ownerDocument, t) || t.getRootNode(to) === t.ownerDocument
    });
    var ta = function (t, e) {
        return "none" === (t = e || t).style.display || "" === t.style.display && tr(t) && "none" === w.css(t, "display")
    };

    function tl(t, e, i, n) {
        var s, r, o = 20, a = n ? function () {
            return n.cur()
        } : function () {
            return w.css(t, e, "")
        }, l = a(), c = i && i[3] || (w.cssNumber[e] ? "" : "px"), h = t.nodeType && (w.cssNumber[e] || "px" !== c && +l) && ti.exec(w.css(t, e));
        if (h && h[3] !== c) {
            for (l /= 2, c = c || h[3], h = +l || 1; o--;) w.style(t, e, h + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (o = 0), h /= r;
            h *= 2, w.style(t, e, h + c), i = i || []
        }
        return i && (h = +h || +l || 0, s = i[1] ? h + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = h, n.end = s)), s
    }

    var tc = {};

    function th(t, e) {
        for (var i, n, s, r, o, a, l, c = [], h = 0, u = t.length; h < u; h++) (n = t[h]).style && (i = n.style.display, e ? ("none" === i && (c[h] = Q.get(n, "display") || null, c[h] || (n.style.display = "")), "" === n.style.display && ta(n) && (c[h] = (l = o = r = void 0, o = (s = n).ownerDocument, (l = tc[a = s.nodeName]) || (r = o.body.appendChild(o.createElement(a)), l = w.css(r, "display"), r.parentNode.removeChild(r), "none" === l && (l = "block"), tc[a] = l)))) : "none" !== i && (c[h] = "none", Q.set(n, "display", i)));
        for (h = 0; h < u; h++) null != c[h] && (t[h].style.display = c[h]);
        return t
    }

    w.fn.extend({
        show: function () {
            return th(this, !0)
        }, hide: function () {
            return th(this)
        }, toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                ta(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var tu, td, tp = /^(?:checkbox|radio)$/i, tf = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, tm = /^$|^module$|\/(?:java|ecma)script/i;
    tu = g.createDocumentFragment().appendChild(g.createElement("div")), (td = g.createElement("input")).setAttribute("type", "radio"), td.setAttribute("checked", "checked"), td.setAttribute("name", "t"), tu.appendChild(td), p.checkClone = tu.cloneNode(!0).cloneNode(!0).lastChild.checked, tu.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!tu.cloneNode(!0).lastChild.defaultValue, tu.innerHTML = "<option></option>", p.option = !!tu.lastChild;
    var tg = {thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""]};

    function ty(t, e) {
        var i;
        return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && T(t, e) ? w.merge([t], i) : i
    }

    function tv(t, e) {
        for (var i = 0, n = t.length; i < n; i++) Q.set(t[i], "globalEval", !e || Q.get(e[i], "globalEval"))
    }

    tg.tbody = tg.tfoot = tg.colgroup = tg.caption = tg.thead, tg.th = tg.td, p.option || (tg.optgroup = tg.option = [1, "<select multiple='multiple'>", "</select>"]);
    var t$ = /<|&#?\w+;/;

    function t8(t, e, i, n, s) {
        for (var r, o, a, l, c, h, u = e.createDocumentFragment(), d = [], p = 0, f = t.length; p < f; p++) if ((r = t[p]) || 0 === r) {
            if ("object" === b(r)) w.merge(d, r.nodeType ? [r] : r); else if (t$.test(r)) {
                for (o = o || u.appendChild(e.createElement("div")), l = tg[a = (tf.exec(r) || ["", ""])[1].toLowerCase()] || tg._default, o.innerHTML = l[1] + w.htmlPrefilter(r) + l[2], h = l[0]; h--;) o = o.lastChild;
                w.merge(d, o.childNodes), (o = u.firstChild).textContent = ""
            } else d.push(e.createTextNode(r))
        }
        for (u.textContent = "", p = 0; r = d[p++];) if (n && -1 < w.inArray(r, n)) s && s.push(r); else if (c = tr(r), o = ty(u.appendChild(r), "script"), c && tv(o), i) for (h = 0; r = o[h++];) tm.test(r.type || "") && i.push(r);
        return u
    }

    var tb = /^([^.]*)(?:\.(.+)|)/;

    function t_() {
        return !0
    }

    function tw() {
        return !1
    }

    function tx(t, e) {
        return t === function () {
            try {
                return g.activeElement
            } catch (t) {
            }
        }() == ("focus" === e)
    }

    function tk(t, e, i, n, s, r) {
        var o, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof i && (n = n || i, i = void 0), e) tk(t, a, i, n, e[a], r);
            return t
        }
        if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), !1 === s) s = tw; else if (!s) return t;
        return 1 === r && (o = s, (s = function (t) {
            return w().off(t), o.apply(this, arguments)
        }).guid = o.guid || (o.guid = w.guid++)), t.each(function () {
            w.event.add(this, e, s, n, i)
        })
    }

    function tD(t, e, i) {
        i ? (Q.set(t, e, !1), w.event.add(t, e, {
            namespace: !1, handler: function (t) {
                var n, r, o = Q.get(this, e);
                if (1 & t.isTrigger && this[e]) {
                    if (o.length) (w.event.special[e] || {}).delegateType && t.stopPropagation(); else if (o = s.call(arguments), Q.set(this, e, o), n = i(this, e), this[e](), o !== (r = Q.get(this, e)) || n ? Q.set(this, e, !1) : r = {}, o !== r) return t.stopImmediatePropagation(), t.preventDefault(), r && r.value
                } else o.length && (Q.set(this, e, {value: w.event.trigger(w.extend(o[0], w.Event.prototype), o.slice(1), this)}), t.stopImmediatePropagation())
            }
        })) : void 0 === Q.get(t, e) && w.event.add(t, e, t_)
    }

    w.event = {
        global: {}, add: function (t, e, i, n, s) {
            var r, o, a, l, c, h, u, d, p, f, m, g = Q.get(t);
            if (X(t)) for (i.handler && (i = (r = i).handler, s = r.selector), s && w.find.matchesSelector(ts, s), i.guid || (i.guid = w.guid++), (l = g.events) || (l = g.events = Object.create(null)), (o = g.handle) || (o = g.handle = function (e) {
                return w.event.triggered !== e.type ? w.event.dispatch.apply(t, arguments) : void 0
            }), c = (e = (e || "").match(Y) || [""]).length; c--;) p = m = (a = tb.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p && (u = w.event.special[p] || {}, p = (s ? u.delegateType : u.bindType) || p, u = w.event.special[p] || {}, h = w.extend({type: p, origType: m, data: n, handler: i, guid: i.guid, selector: s, needsContext: s && w.expr.match.needsContext.test(s), namespace: f.join(".")}, r), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, n, f, o) || t.addEventListener && t.addEventListener(p, o)), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, h) : d.push(h), w.event.global[p] = !0)
        }, remove: function (t, e, i, n, s) {
            var r, o, a, l, c, h, u, d, p, f, m, g = Q.hasData(t) && Q.get(t);
            if (g && (l = g.events)) {
                for (c = (e = (e || "").match(Y) || [""]).length; c--;) if (p = m = (a = tb.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
                    for (u = w.event.special[p] || {}, d = l[p = (n ? u.delegateType : u.bindType) || p] || [], a = a[2] && RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = r = d.length; r--;) h = d[r], !s && m !== h.origType || i && i.guid !== h.guid || a && !a.test(h.namespace) || n && n !== h.selector && ("**" !== n || !h.selector) || (d.splice(r, 1), h.selector && d.delegateCount--, u.remove && u.remove.call(t, h));
                    o && !d.length && (u.teardown && !1 !== u.teardown.call(t, f, g.handle) || w.removeEvent(t, p, g.handle), delete l[p])
                } else for (p in l) w.event.remove(t, p + e[c], i, n, !0);
                w.isEmptyObject(l) && Q.remove(t, "handle events")
            }
        }, dispatch: function (t) {
            var e, i, n, s, r, o, a = Array(arguments.length), l = w.event.fix(t), c = (Q.get(this, "events") || Object.create(null))[l.type] || [], h = w.event.special[l.type] || {};
            for (a[0] = l, e = 1; e < arguments.length; e++) a[e] = arguments[e];
            if (l.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, l)) {
                for (o = w.event.handlers.call(this, l, c), e = 0; (s = o[e++]) && !l.isPropagationStopped();) for (l.currentTarget = s.elem, i = 0; (r = s.handlers[i++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r, l.data = r.data, void 0 !== (n = ((w.event.special[r.origType] || {}).handle || r.handler).apply(s.elem, a)) && !1 === (l.result = n) && (l.preventDefault(), l.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, l), l.result
            }
        }, handlers: function (t, e) {
            var i, n, s, r, o, a = [], l = e.delegateCount, c = t.target;
            if (l && c.nodeType && !("click" === t.type && 1 <= t.button)) {
                for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                    for (r = [], o = {}, i = 0; i < l; i++) void 0 === o[s = (n = e[i]).selector + " "] && (o[s] = n.needsContext ? -1 < w(s, this).index(c) : w.find(s, this, null, [c]).length), o[s] && r.push(n);
                    r.length && a.push({elem: c, handlers: r})
                }
            }
            return c = this, l < e.length && a.push({elem: c, handlers: e.slice(l)}), a
        }, addProp: function (t, e) {
            Object.defineProperty(w.Event.prototype, t, {
                enumerable: !0, configurable: !0, get: f(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                }, set: function (e) {
                    Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                }
            })
        }, fix: function (t) {
            return t[w.expando] ? t : new w.Event(t)
        }, special: {
            load: {noBubble: !0}, click: {
                setup: function (t) {
                    var e = this || t;
                    return tp.test(e.type) && e.click && T(e, "input") && tD(e, "click", t_), !1
                }, trigger: function (t) {
                    var e = this || t;
                    return tp.test(e.type) && e.click && T(e, "input") && tD(e, "click"), !0
                }, _default: function (t) {
                    var e = t.target;
                    return tp.test(e.type) && e.click && T(e, "input") && Q.get(e, "click") || T(e, "a")
                }
            }, beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, w.removeEvent = function (t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    }, w.Event = function (t, e) {
        if (!(this instanceof w.Event)) return new w.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? t_ : tw, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && w.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event, isDefaultPrevented: tw, isPropagationStopped: tw, isImmediatePropagationStopped: tw, isSimulated: !1, preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = t_, t && !this.isSimulated && t.preventDefault()
        }, stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = t_, t && !this.isSimulated && t.stopPropagation()
        }, stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = t_, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: !0}, w.event.addProp), w.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        w.event.special[t] = {
            setup: function () {
                return tD(this, t, tx), !1
            }, trigger: function () {
                return tD(this, t), !0
            }, _default: function () {
                return !0
            }, delegateType: e
        }
    }), w.each({mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout"}, function (t, e) {
        w.event.special[t] = {
            delegateType: e, bindType: e, handle: function (t) {
                var i, n = t.relatedTarget, s = t.handleObj;
                return n && (n === this || w.contains(this, n)) || (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), w.fn.extend({
        on: function (t, e, i, n) {
            return tk(this, t, e, i, n)
        }, one: function (t, e, i, n) {
            return tk(this, t, e, i, n, 1)
        }, off: function (t, e, i) {
            var n, s;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, w(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (s in t) this.off(s, e, t[s]);
                return this
            }
            return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = tw), this.each(function () {
                w.event.remove(this, t, i, e)
            })
        }
    });
    var tC = /<script|<style|<link/i, tS = /checked\s*(?:[^=]|=\s*.checked.)/i, tT = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function tE(t, e) {
        return T(t, "table") && T(11 !== e.nodeType ? e : e.firstChild, "tr") && w(t).children("tbody")[0] || t
    }

    function tA(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function tP(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
    }

    function tL(t, e) {
        var i, n, s, r, o, a;
        if (1 === e.nodeType) {
            if (Q.hasData(t) && (a = Q.get(t).events)) for (s in Q.remove(e, "handle events"), a) for (i = 0, n = a[s].length; i < n; i++) w.event.add(e, s, a[s][i]);
            Z.hasData(t) && (r = Z.access(t), o = w.extend({}, r), Z.set(e, o))
        }
    }

    function tM(t, e, i, n) {
        e = r(e);
        var s, o, a, l, c, h, u = 0, d = t.length, m = d - 1, g = e[0], y = f(g);
        if (y || 1 < d && "string" == typeof g && !p.checkClone && tS.test(g)) return t.each(function (s) {
            var r = t.eq(s);
            y && (e[0] = g.call(this, s, r.html())), tM(r, e, i, n)
        });
        if (d && (o = (s = t8(e, t[0].ownerDocument, !1, t, n)).firstChild, 1 === s.childNodes.length && (s = o), o || n)) {
            for (l = (a = w.map(ty(s, "script"), tA)).length; u < d; u++) c = s, u !== m && (c = w.clone(c, !0, !0), l && w.merge(a, ty(c, "script"))), i.call(t[u], c, u);
            if (l) for (h = a[a.length - 1].ownerDocument, w.map(a, tP), u = 0; u < l; u++) c = a[u], tm.test(c.type || "") && !Q.access(c, "globalEval") && w.contains(h, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && !c.noModule && w._evalUrl(c.src, {nonce: c.nonce || c.getAttribute("nonce")}, h) : v(c.textContent.replace(tT, ""), c, h))
        }
        return t
    }

    function t0(t, e, i) {
        for (var n, s = e ? w.filter(e, t) : t, r = 0; null != (n = s[r]); r++) i || 1 !== n.nodeType || w.cleanData(ty(n)), n.parentNode && (i && tr(n) && tv(ty(n, "script")), n.parentNode.removeChild(n));
        return t
    }

    w.extend({
        htmlPrefilter: function (t) {
            return t
        }, clone: function (t, e, i) {
            var n, s, r, o, a, l, c, h = t.cloneNode(!0), u = tr(t);
            if (!(p.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || w.isXMLDoc(t))) for (o = ty(h), n = 0, s = (r = ty(t)).length; n < s; n++) a = r[n], "input" === (c = (l = o[n]).nodeName.toLowerCase()) && tp.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (e) {
                if (i) for (r = r || ty(t), o = o || ty(h), n = 0, s = r.length; n < s; n++) tL(r[n], o[n]); else tL(t, h)
            }
            return 0 < (o = ty(h, "script")).length && tv(o, !u && ty(t, "script")), h
        }, cleanData: function (t) {
            for (var e, i, n, s = w.event.special, r = 0; void 0 !== (i = t[r]); r++) if (X(i)) {
                if (e = i[Q.expando]) {
                    if (e.events) for (n in e.events) s[n] ? w.event.remove(i, n) : w.removeEvent(i, n, e.handle);
                    i[Q.expando] = void 0
                }
                i[Z.expando] && (i[Z.expando] = void 0)
            }
        }
    }), w.fn.extend({
        detach: function (t) {
            return t0(this, t, !0)
        }, remove: function (t) {
            return t0(this, t)
        }, text: function (t) {
            return B(this, function (t) {
                return void 0 === t ? w.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        }, append: function () {
            return tM(this, arguments, function (t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || tE(this, t).appendChild(t)
            })
        }, prepend: function () {
            return tM(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = tE(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        }, before: function () {
            return tM(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        }, after: function () {
            return tM(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        }, empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (w.cleanData(ty(t, !1)), t.textContent = "");
            return this
        }, clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return w.clone(this, t, e)
            })
        }, html: function (t) {
            return B(this, function (t) {
                var e = this[0] || {}, i = 0, n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !tC.test(t) && !tg[(tf.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = w.htmlPrefilter(t);
                    try {
                        for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (w.cleanData(ty(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (s) {
                    }
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        }, replaceWith: function () {
            var t = [];
            return tM(this, arguments, function (e) {
                var i = this.parentNode;
                0 > w.inArray(this, t) && (w.cleanData(ty(this)), i && i.replaceChild(e, this))
            }, t)
        }
    }), w.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (t, e) {
        w.fn[t] = function (t) {
            for (var i, n = [], s = w(t), r = s.length - 1, a = 0; a <= r; a++) i = a === r ? this : this.clone(!0), w(s[a])[e](i), o.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var tO = RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"), tI = function (e) {
        var i = e.ownerDocument.defaultView;
        return i && i.opener || (i = t), i.getComputedStyle(e)
    }, t9 = function (t, e, i) {
        var n, s, r = {};
        for (s in e) r[s] = t.style[s], t.style[s] = e[s];
        for (s in n = i.call(t), e) t.style[s] = r[s];
        return n
    }, tY = RegExp(tn.join("|"), "i");

    function tz(t, e, i) {
        var n, s, r, o, a = t.style;
        return (i = i || tI(t)) && ("" !== (o = i.getPropertyValue(e) || i[e]) || tr(t) || (o = w.style(t, e)), !p.pixelBoxStyles() && tO.test(o) && tY.test(e) && (n = a.width, s = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = i.width, a.width = n, a.minWidth = s, a.maxWidth = r)), void 0 !== o ? o + "" : o
    }

    function tH(t, e) {
        return {
            get: function () {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }

    !function () {
        function e() {
            if (h) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", h.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ts.appendChild(c).appendChild(h);
                var e = t.getComputedStyle(h);
                n = "1%" !== e.top, l = 12 === i(e.marginLeft), h.style.right = "60%", o = 36 === i(e.right), s = 36 === i(e.width), h.style.position = "absolute", r = 12 === i(h.offsetWidth / 3), ts.removeChild(c), h = null
            }
        }

        function i(t) {
            return Math.round(parseFloat(t))
        }

        var n, s, r, o, a, l, c = g.createElement("div"), h = g.createElement("div");
        h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === h.style.backgroundClip, w.extend(p, {
            boxSizingReliable: function () {
                return e(), s
            }, pixelBoxStyles: function () {
                return e(), o
            }, pixelPosition: function () {
                return e(), n
            }, reliableMarginLeft: function () {
                return e(), l
            }, scrollboxSize: function () {
                return e(), r
            }, reliableTrDimensions: function () {
                var e, i, n, s;
                return null == a && (e = g.createElement("table"), i = g.createElement("tr"), n = g.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", i.style.cssText = "border:1px solid", i.style.height = "1px", n.style.height = "9px", n.style.display = "block", ts.appendChild(e).appendChild(i).appendChild(n), a = parseInt((s = t.getComputedStyle(i)).height, 10) + parseInt(s.borderTopWidth, 10) + parseInt(s.borderBottomWidth, 10) === i.offsetHeight, ts.removeChild(e)), a
            }
        }))
    }();
    var tN = ["Webkit", "Moz", "ms"], tj = g.createElement("div").style, tR = {};

    function t1(t) {
        return w.cssProps[t] || tR[t] || (t in tj ? t : tR[t] = function (t) {
            for (var e = t[0].toUpperCase() + t.slice(1), i = tN.length; i--;) if ((t = tN[i] + e) in tj) return t
        }(t) || t)
    }

    var tW = /^(none|table(?!-c[ea]).+)/, tB = /^--/, tF = {position: "absolute", visibility: "hidden", display: "block"}, tV = {letterSpacing: "0", fontWeight: "400"};

    function t2(t, e, i) {
        var n = ti.exec(e);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
    }

    function t3(t, e, i, n, s, r) {
        var o = "width" === e ? 1 : 0, a = 0, l = 0;
        if (i === (n ? "border" : "content")) return 0;
        for (; o < 4; o += 2) "margin" === i && (l += w.css(t, i + tn[o], !0, s)), n ? ("content" === i && (l -= w.css(t, "padding" + tn[o], !0, s)), "margin" !== i && (l -= w.css(t, "border" + tn[o] + "Width", !0, s))) : (l += w.css(t, "padding" + tn[o], !0, s), "padding" !== i ? l += w.css(t, "border" + tn[o] + "Width", !0, s) : a += w.css(t, "border" + tn[o] + "Width", !0, s));
        return !n && 0 <= r && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - r - l - a - .5)) || 0), l
    }

    function t4(t, e, i) {
        var n = tI(t), s = (!p.boxSizingReliable() || i) && "border-box" === w.css(t, "boxSizing", !1, n), r = s, o = tz(t, e, n), a = "offset" + e[0].toUpperCase() + e.slice(1);
        if (tO.test(o)) {
            if (!i) return o;
            o = "auto"
        }
        return (!p.boxSizingReliable() && s || !p.reliableTrDimensions() && T(t, "tr") || "auto" === o || !parseFloat(o) && "inline" === w.css(t, "display", !1, n)) && t.getClientRects().length && (s = "border-box" === w.css(t, "boxSizing", !1, n), (r = a in t) && (o = t[a])), (o = parseFloat(o) || 0) + t3(t, e, i || (s ? "border" : "content"), r, n, o) + "px"
    }

    function tq(t, e, i, n, s) {
        return new tq.prototype.init(t, e, i, n, s)
    }

    w.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var i = tz(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        }, cssNumber: {animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {}, style: function (t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, r, o, a = U(e), l = tB.test(e), c = t.style;
                if (l || (e = t1(a)), o = w.cssHooks[e] || w.cssHooks[a], void 0 === i) return o && "get" in o && void 0 !== (s = o.get(t, !1, n)) ? s : c[e];
                "string" == (r = typeof i) && (s = ti.exec(i)) && s[1] && (i = tl(t, e, s), r = "number"), null != i && i == i && ("number" !== r || l || (i += s && s[3] || (w.cssNumber[a] ? "" : "px")), p.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (c[e] = "inherit"), o && "set" in o && void 0 === (i = o.set(t, i, n)) || (l ? c.setProperty(e, i) : c[e] = i))
            }
        }, css: function (t, e, i, n) {
            var s, r, o, a = U(e);
            return tB.test(e) || (e = t1(a)), (o = w.cssHooks[e] || w.cssHooks[a]) && "get" in o && (s = o.get(t, !0, i)), void 0 === s && (s = tz(t, e, n)), "normal" === s && e in tV && (s = tV[e]), "" === i || i ? (r = parseFloat(s), !0 === i || isFinite(r) ? r || 0 : s) : s
        }
    }), w.each(["height", "width"], function (t, e) {
        w.cssHooks[e] = {
            get: function (t, i, n) {
                if (i) return !tW.test(w.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? t4(t, e, n) : t9(t, tF, function () {
                    return t4(t, e, n)
                })
            }, set: function (t, i, n) {
                var s, r = tI(t), o = !p.scrollboxSize() && "absolute" === r.position, a = (o || n) && "border-box" === w.css(t, "boxSizing", !1, r), l = n ? t3(t, e, n, a, r) : 0;
                return a && o && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(r[e]) - t3(t, e, "border", !1, r) - .5)), l && (s = ti.exec(i)) && "px" !== (s[3] || "px") && (t.style[e] = i, i = w.css(t, e)), t2(0, i, l)
            }
        }
    }), w.cssHooks.marginLeft = tH(p.reliableMarginLeft, function (t, e) {
        if (e) return (parseFloat(tz(t, "marginLeft")) || t.getBoundingClientRect().left - t9(t, {marginLeft: 0}, function () {
            return t.getBoundingClientRect().left
        })) + "px"
    }), w.each({margin: "", padding: "", border: "Width"}, function (t, e) {
        w.cssHooks[t + e] = {
            expand: function (i) {
                for (var n = 0, s = {}, r = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) s[t + tn[n] + e] = r[n] || r[n - 2] || r[0];
                return s
            }
        }, "margin" !== t && (w.cssHooks[t + e].set = t2)
    }), w.fn.extend({
        css: function (t, e) {
            return B(this, function (t, e, i) {
                var n, s, r = {}, o = 0;
                if (Array.isArray(e)) {
                    for (n = tI(t), s = e.length; o < s; o++) r[e[o]] = w.css(t, e[o], !1, n);
                    return r
                }
                return void 0 !== i ? w.style(t, e, i) : w.css(t, e)
            }, t, e, 1 < arguments.length)
        }
    }), ((w.Tween = tq).prototype = {
        constructor: tq, init: function (t, e, i, n, s, r) {
            this.elem = t, this.prop = i, this.easing = s || w.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = r || (w.cssNumber[i] ? "" : "px")
        }, cur: function () {
            var t = tq.propHooks[this.prop];
            return t && t.get ? t.get(this) : tq.propHooks._default.get(this)
        }, run: function (t) {
            var e, i = tq.propHooks[this.prop];
            return this.options.duration ? this.pos = e = w.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : tq.propHooks._default.set(this), this
        }
    }).init.prototype = tq.prototype, (tq.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = w.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            }, set: function (t) {
                w.fx.step[t.prop] ? w.fx.step[t.prop](t) : 1 === t.elem.nodeType && (w.cssHooks[t.prop] || null != t.elem.style[t1(t.prop)]) ? w.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }).scrollTop = tq.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, w.easing = {
        linear: function (t) {
            return t
        }, swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }, _default: "swing"
    }, w.fx = tq.prototype.init, w.fx.step = {};
    var t7, t5, tU, t6, tX = /^(?:toggle|show|hide)$/, tG = /queueHooks$/;

    function tQ() {
        return t.setTimeout(function () {
            t7 = void 0
        }), t7 = Date.now()
    }

    function tZ(t, e) {
        var i, n = 0, s = {height: t};
        for (e = e ? 1 : 0; n < 4; n += 2 - e) s["margin" + (i = tn[n])] = s["padding" + i] = t;
        return e && (s.opacity = s.width = t), s
    }

    function tK(t, e, i) {
        for (var n, s = (tJ.tweeners[e] || []).concat(tJ.tweeners["*"]), r = 0, o = s.length; r < o; r++) if (n = s[r].call(i, e, t)) return n
    }

    function tJ(t, e, i) {
        var n, s, r = 0, o = tJ.prefilters.length, a = w.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (s) return !1;
            for (var e = t7 || tQ(), i = Math.max(0, c.startTime + c.duration - e), n = 1 - (i / c.duration || 0), r = 0, o = c.tweens.length; r < o; r++) c.tweens[r].run(n);
            return a.notifyWith(t, [c, n, i]), n < 1 && o ? i : (o || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
        }, c = a.promise({
            elem: t, props: w.extend({}, e), opts: w.extend(!0, {specialEasing: {}, easing: w.easing._default}, i), originalProperties: e, originalOptions: i, startTime: t7 || tQ(), duration: i.duration, tweens: [], createTween: function (e, i) {
                var n = w.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(n), n
            }, stop: function (e) {
                var i = 0, n = e ? c.tweens.length : 0;
                if (s) return this;
                for (s = !0; i < n; i++) c.tweens[i].run(1);
                return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
            }
        }), h = c.props;
        for (function (t, e) {
            var i, n, s, r, o;
            for (i in t) if (s = e[n = U(i)], Array.isArray(r = t[i]) && (s = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), (o = w.cssHooks[n]) && ("expand" in o)) for (i in r = o.expand(r), delete t[n], r) (i in t) || (t[i] = r[i], e[i] = s); else e[n] = s
        }(h, c.opts.specialEasing); r < o; r++) if (n = tJ.prefilters[r].call(c, t, h, c.opts)) return f(n.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
        return w.map(h, tK, c), f(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), w.fx.timer(w.extend(l, {elem: t, anim: c, queue: c.opts.queue})), c
    }

    w.Animation = w.extend(tJ, {
        tweeners: {
            "*": [function (t, e) {
                var i = this.createTween(t, e);
                return tl(i.elem, t, ti.exec(e), i), i
            }]
        }, tweener: function (t, e) {
            f(t) ? (e = t, t = ["*"]) : t = t.match(Y);
            for (var i, n = 0, s = t.length; n < s; n++) i = t[n], tJ.tweeners[i] = tJ.tweeners[i] || [], tJ.tweeners[i].unshift(e)
        }, prefilters: [function (t, e, i) {
            var n, s, r, o, a, l, c, h, u = "width" in e || "height" in e, d = this, p = {}, f = t.style, m = t.nodeType && ta(t), g = Q.get(t, "fxshow");
            for (n in i.queue || (null == (o = w._queueHooks(t, "fx")).unqueued && (o.unqueued = 0, a = o.empty.fire, o.empty.fire = function () {
                o.unqueued || a()
            }), o.unqueued++, d.always(function () {
                d.always(function () {
                    o.unqueued--, w.queue(t, "fx").length || o.empty.fire()
                })
            })), e) if (s = e[n], tX.test(s)) {
                if (delete e[n], r = r || "toggle" === s, s === (m ? "hide" : "show")) {
                    if ("show" !== s || !g || void 0 === g[n]) continue;
                    m = !0
                }
                p[n] = g && g[n] || w.style(t, n)
            }
            if ((l = !w.isEmptyObject(e)) || !w.isEmptyObject(p)) for (n in u && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = g && g.display) && (c = Q.get(t, "display")), "none" === (h = w.css(t, "display")) && (c ? h = c : (th([t], !0), c = t.style.display || c, h = w.css(t, "display"), th([t]))), ("inline" === h || "inline-block" === h && null != c) && "none" === w.css(t, "float") && (l || (d.done(function () {
                f.display = c
            }), null == c && (c = "none" === (h = f.display) ? "" : h)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", d.always(function () {
                f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
            })), l = !1, p) l || (g ? "hidden" in g && (m = g.hidden) : g = Q.access(t, "fxshow", {display: c}), r && (g.hidden = !m), m && th([t], !0), d.done(function () {
                for (n in m || th([t]), Q.remove(t, "fxshow"), p) w.style(t, n, p[n])
            })), l = tK(m ? g[n] : 0, n, d), n in g || (g[n] = l.start, m && (l.end = l.start, l.start = 0))
        }], prefilter: function (t, e) {
            e ? tJ.prefilters.unshift(t) : tJ.prefilters.push(t)
        }
    }), w.speed = function (t, e, i) {
        var n = t && "object" == typeof t ? w.extend({}, t) : {complete: i || !i && e || f(t) && t, duration: t, easing: i && e || e && !f(e) && e};
        return w.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in w.fx.speeds ? n.duration = w.fx.speeds[n.duration] : n.duration = w.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            f(n.old) && n.old.call(this), n.queue && w.dequeue(this, n.queue)
        }, n
    }, w.fn.extend({
        fadeTo: function (t, e, i, n) {
            return this.filter(ta).css("opacity", 0).show().end().animate({opacity: e}, t, i, n)
        }, animate: function (t, e, i, n) {
            var s = w.isEmptyObject(t), r = w.speed(e, i, n), o = function () {
                var e = tJ(this, w.extend({}, t), r);
                (s || Q.get(this, "finish")) && e.stop(!0)
            };
            return o.finish = o, s || !1 === r.queue ? this.each(o) : this.queue(r.queue, o)
        }, stop: function (t, e, i) {
            var n = function (t) {
                var e = t.stop;
                delete t.stop, e(i)
            };
            return "string" != typeof t && (i = e, e = t, t = void 0), e && this.queue(t || "fx", []), this.each(function () {
                var e = !0, s = null != t && t + "queueHooks", r = w.timers, o = Q.get(this);
                if (s) o[s] && o[s].stop && n(o[s]); else for (s in o) o[s] && o[s].stop && tG.test(s) && n(o[s]);
                for (s = r.length; s--;) r[s].elem !== this || null != t && r[s].queue !== t || (r[s].anim.stop(i), e = !1, r.splice(s, 1));
                !e && i || w.dequeue(this, t)
            })
        }, finish: function (t) {
            return !1 !== t && (t = t || "fx"), this.each(function () {
                var e, i = Q.get(this), n = i[t + "queue"], s = i[t + "queueHooks"], r = w.timers, o = n ? n.length : 0;
                for (i.finish = !0, w.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish
            })
        }
    }), w.each(["toggle", "show", "hide"], function (t, e) {
        var i = w.fn[e];
        w.fn[e] = function (t, n, s) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(tZ(e, !0), t, n, s)
        }
    }), w.each({slideDown: tZ("show"), slideUp: tZ("hide"), slideToggle: tZ("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (t, e) {
        w.fn[t] = function (t, i, n) {
            return this.animate(e, t, i, n)
        }
    }), w.timers = [], w.fx.tick = function () {
        var t, e = 0, i = w.timers;
        for (t7 = Date.now(); e < i.length; e++) (t = i[e])() || i[e] !== t || i.splice(e--, 1);
        i.length || w.fx.stop(), t7 = void 0
    }, w.fx.timer = function (t) {
        w.timers.push(t), w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function () {
        t5 || (t5 = !0, function e() {
            t5 && (!1 === g.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(e) : t.setTimeout(e, w.fx.interval), w.fx.tick())
        }())
    }, w.fx.stop = function () {
        t5 = null
    }, w.fx.speeds = {slow: 600, fast: 200, _default: 400}, w.fn.delay = function (e, i) {
        return e = w.fx && w.fx.speeds[e] || e, i = i || "fx", this.queue(i, function (i, n) {
            var s = t.setTimeout(i, e);
            n.stop = function () {
                t.clearTimeout(s)
            }
        })
    }, tU = g.createElement("input"), t6 = g.createElement("select").appendChild(g.createElement("option")), tU.type = "checkbox", p.checkOn = "" !== tU.value, p.optSelected = t6.selected, (tU = g.createElement("input")).value = "t", tU.type = "radio", p.radioValue = "t" === tU.value;
    var et, ee = w.expr.attrHandle;
    w.fn.extend({
        attr: function (t, e) {
            return B(this, w.attr, t, e, 1 < arguments.length)
        }, removeAttr: function (t) {
            return this.each(function () {
                w.removeAttr(this, t)
            })
        }
    }), w.extend({
        attr: function (t, e, i) {
            var n, s, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? w.prop(t, e, i) : (1 === r && w.isXMLDoc(t) || (s = w.attrHooks[e.toLowerCase()] || (w.expr.match.bool.test(e) ? et : void 0)), void 0 !== i ? null === i ? void w.removeAttr(t, e) : s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : s && "get" in s && null !== (n = s.get(t, e)) ? n : null == (n = w.find.attr(t, e)) ? void 0 : n)
        }, attrHooks: {
            type: {
                set: function (t, e) {
                    if (!p.radioValue && "radio" === e && T(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        }, removeAttr: function (t, e) {
            var i, n = 0, s = e && e.match(Y);
            if (s && 1 === t.nodeType) for (; i = s[n++];) t.removeAttribute(i)
        }
    }), et = {
        set: function (t, e, i) {
            return !1 === e ? w.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var i = ee[e] || w.find.attr;
        ee[e] = function (t, e, n) {
            var s, r, o = e.toLowerCase();
            return n || (r = ee[o], ee[o] = s, s = null != i(t, e, n) ? o : null, ee[o] = r), s
        }
    });
    var ei = /^(?:input|select|textarea|button)$/i, en = /^(?:a|area)$/i;

    function es(t) {
        return (t.match(Y) || []).join(" ")
    }

    function er(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function eo(t) {
        return Array.isArray(t) ? t : "string" == typeof t && t.match(Y) || []
    }

    w.fn.extend({
        prop: function (t, e) {
            return B(this, w.prop, t, e, 1 < arguments.length)
        }, removeProp: function (t) {
            return this.each(function () {
                delete this[w.propFix[t] || t]
            })
        }
    }), w.extend({
        prop: function (t, e, i) {
            var n, s, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && w.isXMLDoc(t) || (e = w.propFix[e] || e, s = w.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
        }, propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = w.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ei.test(t.nodeName) || en.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), p.optSelected || (w.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }, set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        w.propFix[this.toLowerCase()] = this
    }), w.fn.extend({
        addClass: function (t) {
            var e, i, n, s, r, o, a, l = 0;
            if (f(t)) return this.each(function (e) {
                w(this).addClass(t.call(this, e, er(this)))
            });
            if ((e = eo(t)).length) {
                for (; i = this[l++];) if (s = er(i), n = 1 === i.nodeType && " " + es(s) + " ") {
                    for (o = 0; r = e[o++];) 0 > n.indexOf(" " + r + " ") && (n += r + " ");
                    s !== (a = es(n)) && i.setAttribute("class", a)
                }
            }
            return this
        }, removeClass: function (t) {
            var e, i, n, s, r, o, a, l = 0;
            if (f(t)) return this.each(function (e) {
                w(this).removeClass(t.call(this, e, er(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = eo(t)).length) {
                for (; i = this[l++];) if (s = er(i), n = 1 === i.nodeType && " " + es(s) + " ") {
                    for (o = 0; r = e[o++];) for (; -1 < n.indexOf(" " + r + " ");) n = n.replace(" " + r + " ", " ");
                    s !== (a = es(n)) && i.setAttribute("class", a)
                }
            }
            return this
        }, toggleClass: function (t, e) {
            var i = typeof t, n = "string" === i || Array.isArray(t);
            return "boolean" == typeof e && n ? e ? this.addClass(t) : this.removeClass(t) : f(t) ? this.each(function (i) {
                w(this).toggleClass(t.call(this, i, er(this), e), e)
            }) : this.each(function () {
                var e, s, r, o;
                if (n) for (s = 0, r = w(this), o = eo(t); e = o[s++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e); else void 0 !== t && "boolean" !== i || ((e = er(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Q.get(this, "__className__") || ""))
            })
        }, hasClass: function (t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++];) if (1 === i.nodeType && -1 < (" " + es(er(i)) + " ").indexOf(e)) return !0;
            return !1
        }
    });
    var ea = /\r/g;
    w.fn.extend({
        val: function (t) {
            var e, i, n, s = this[0];
            return arguments.length ? (n = f(t), this.each(function (i) {
                var s;
                1 === this.nodeType && (null == (s = n ? t.call(this, i, w(this).val()) : t) ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = w.map(s, function (t) {
                    return null == t ? "" : t + ""
                })), (e = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
            })) : s ? (e = w.valHooks[s.type] || w.valHooks[s.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : "string" == typeof (i = s.value) ? i.replace(ea, "") : null == i ? "" : i : void 0
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = w.find.attr(t, "value");
                    return null != e ? e : es(w.text(t))
                }
            }, select: {
                get: function (t) {
                    var e, i, n, s = t.options, r = t.selectedIndex, o = "select-one" === t.type, a = o ? null : [], l = o ? r + 1 : s.length;
                    for (n = r < 0 ? l : o ? r : 0; n < l; n++) if (((i = s[n]).selected || n === r) && !i.disabled && (!i.parentNode.disabled || !T(i.parentNode, "optgroup"))) {
                        if (e = w(i).val(), o) return e;
                        a.push(e)
                    }
                    return a
                }, set: function (t, e) {
                    for (var i, n, s = t.options, r = w.makeArray(e), o = s.length; o--;) ((n = s[o]).selected = -1 < w.inArray(w.valHooks.option.get(n), r)) && (i = !0);
                    return i || (t.selectedIndex = -1), r
                }
            }
        }
    }), w.each(["radio", "checkbox"], function () {
        w.valHooks[this] = {
            set: function (t, e) {
                if (Array.isArray(e)) return t.checked = -1 < w.inArray(w(t).val(), e)
            }
        }, p.checkOn || (w.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), p.focusin = "onfocusin" in t;
    var el = /^(?:focusinfocus|focusoutblur)$/, ec = function (t) {
        t.stopPropagation()
    };
    w.extend(w.event, {
        trigger: function (e, i, n, s) {
            var r, o, a, l, c, u, d, p, y = [n || g], v = h.call(e, "type") ? e.type : e, b = h.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = p = a = n = n || g, 3 !== n.nodeType && 8 !== n.nodeType && !el.test(v + w.event.triggered) && (-1 < v.indexOf(".") && (v = (b = v.split(".")).shift(), b.sort()), c = 0 > v.indexOf(":") && "on" + v, (e = e[w.expando] ? e : new w.Event(v, "object" == typeof e && e)).isTrigger = s ? 2 : 3, e.namespace = b.join("."), e.rnamespace = e.namespace ? RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : w.makeArray(i, [e]), d = w.event.special[v] || {}, s || !d.trigger || !1 !== d.trigger.apply(n, i))) {
                if (!s && !d.noBubble && !m(n)) {
                    for (l = d.delegateType || v, el.test(l + v) || (o = o.parentNode); o; o = o.parentNode) y.push(o), a = o;
                    a === (n.ownerDocument || g) && y.push(a.defaultView || a.parentWindow || t)
                }
                for (r = 0; (o = y[r++]) && !e.isPropagationStopped();) p = o, e.type = 1 < r ? l : d.bindType || v, (u = (Q.get(o, "events") || Object.create(null))[e.type] && Q.get(o, "handle")) && u.apply(o, i), (u = c && o[c]) && u.apply && X(o) && (e.result = u.apply(o, i), !1 === e.result && e.preventDefault());
                return e.type = v, s || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(y.pop(), i) || !X(n) || c && f(n[v]) && !m(n) && ((a = n[c]) && (n[c] = null), w.event.triggered = v, e.isPropagationStopped() && p.addEventListener(v, ec), n[v](), e.isPropagationStopped() && p.removeEventListener(v, ec), w.event.triggered = void 0, a && (n[c] = a)), e.result
            }
        }, simulate: function (t, e, i) {
            var n = w.extend(new w.Event, i, {type: t, isSimulated: !0});
            w.event.trigger(n, null, e)
        }
    }), w.fn.extend({
        trigger: function (t, e) {
            return this.each(function () {
                w.event.trigger(t, e, this)
            })
        }, triggerHandler: function (t, e) {
            var i = this[0];
            if (i) return w.event.trigger(t, e, i, !0)
        }
    }), p.focusin || w.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        var i = function (t) {
            w.event.simulate(e, t.target, w.event.fix(t))
        };
        w.event.special[e] = {
            setup: function () {
                var n = this.ownerDocument || this.document || this, s = Q.access(n, e);
                s || n.addEventListener(t, i, !0), Q.access(n, e, (s || 0) + 1)
            }, teardown: function () {
                var n = this.ownerDocument || this.document || this, s = Q.access(n, e) - 1;
                s ? Q.access(n, e, s) : (n.removeEventListener(t, i, !0), Q.remove(n, e))
            }
        }
    });
    var eh = t.location, eu = {guid: Date.now()}, ed = /\?/;
    w.parseXML = function (e) {
        var i, n;
        if (!e || "string" != typeof e) return null;
        try {
            i = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (s) {
        }
        return n = i && i.getElementsByTagName("parsererror")[0], i && !n || w.error("Invalid XML: " + (n ? w.map(n.childNodes, function (t) {
            return t.textContent
        }).join("\n") : e)), i
    };
    var ep = /\[\]$/, ef = /\r?\n/g, em = /^(?:submit|button|image|reset|file)$/i, eg = /^(?:input|select|textarea|keygen)/i;

    function ey(t, e, i, n) {
        var s;
        if (Array.isArray(e)) w.each(e, function (e, s) {
            i || ep.test(t) ? n(t, s) : ey(t + "[" + ("object" == typeof s && null != s ? e : "") + "]", s, i, n)
        }); else if (i || "object" !== b(e)) n(t, e); else for (s in e) ey(t + "[" + s + "]", e[s], i, n)
    }

    w.param = function (t, e) {
        var i, n = [], s = function (t, e) {
            var i = f(e) ? e() : e;
            n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
        };
        if (null == t) return "";
        if (Array.isArray(t) || t.jquery && !w.isPlainObject(t)) w.each(t, function () {
            s(this.name, this.value)
        }); else for (i in t) ey(i, t[i], e, s);
        return n.join("&")
    }, w.fn.extend({
        serialize: function () {
            return w.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var t = w.prop(this, "elements");
                return t ? w.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !w(this).is(":disabled") && eg.test(this.nodeName) && !em.test(t) && (this.checked || !tp.test(t))
            }).map(function (t, e) {
                var i = w(this).val();
                return null == i ? null : Array.isArray(i) ? w.map(i, function (t) {
                    return {name: e.name, value: t.replace(ef, "\r\n")}
                }) : {name: e.name, value: i.replace(ef, "\r\n")}
            }).get()
        }
    });
    var ev = /%20/g, e$ = /#.*$/, e8 = /([?&])_=[^&]*/, eb = /^(.*?):[ \t]*([^\r\n]*)$/gm, e_ = /^(?:GET|HEAD)$/, ew = /^\/\//, ex = {}, ek = {}, eD = "*/".concat("*"), eC = g.createElement("a");

    function eS(t) {
        return function (e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, s = 0, r = e.toLowerCase().match(Y) || [];
            if (f(i)) for (; n = r[s++];) "+" === n[0] ? (t[n = n.slice(1) || "*"] = t[n] || []).unshift(i) : (t[n] = t[n] || []).push(i)
        }
    }

    function eT(t, e, i, n) {
        var s = {}, r = t === ek;

        function o(a) {
            var l;
            return s[a] = !0, w.each(t[a] || [], function (t, a) {
                var c = a(e, i, n);
                return "string" != typeof c || r || s[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
            }), l
        }

        return o(e.dataTypes[0]) || !s["*"] && o("*")
    }

    function eE(t, e) {
        var i, n, s = w.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
        return n && w.extend(!0, t, n), t
    }

    eC.href = eh.href, w.extend({
        active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: eh.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(eh.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": eD, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function (t, e) {
            return e ? eE(eE(t, w.ajaxSettings), e) : eE(w.ajaxSettings, t)
        }, ajaxPrefilter: eS(ex), ajaxTransport: eS(ek), ajax: function (e, i) {
            "object" == typeof e && (i = e, e = void 0), i = i || {};
            var n, s, r, o, a, l, c, h, u, d, p = w.ajaxSetup({}, i), f = p.context || p, m = p.context && (f.nodeType || f.jquery) ? w(f) : w.event, y = w.Deferred(), v = w.Callbacks("once memory"), b = p.statusCode || {}, _ = {}, x = {}, k = "canceled", D = {
                readyState: 0, getResponseHeader: function (t) {
                    var e;
                    if (c) {
                        if (!o) for (o = {}; e = eb.exec(r);) o[e[1].toLowerCase() + " "] = (o[e[1].toLowerCase() + " "] || []).concat(e[2]);
                        e = o[t.toLowerCase() + " "]
                    }
                    return null == e ? null : e.join(", ")
                }, getAllResponseHeaders: function () {
                    return c ? r : null
                }, setRequestHeader: function (t, e) {
                    return null == c && (_[t = x[t.toLowerCase()] = x[t.toLowerCase()] || t] = e), this
                }, overrideMimeType: function (t) {
                    return null == c && (p.mimeType = t), this
                }, statusCode: function (t) {
                    var e;
                    if (t) {
                        if (c) D.always(t[D.status]); else for (e in t) b[e] = [b[e], t[e]]
                    }
                    return this
                }, abort: function (t) {
                    var e = t || k;
                    return n && n.abort(e), T(0, e), this
                }
            };
            if (y.promise(D), p.url = ((e || p.url || eh.href) + "").replace(ew, eh.protocol + "//"), p.type = i.method || i.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(Y) || [""], null == p.crossDomain) {
                l = g.createElement("a");
                try {
                    l.href = p.url, l.href = l.href, p.crossDomain = eC.protocol + "//" + eC.host != l.protocol + "//" + l.host
                } catch (C) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = w.param(p.data, p.traditional)), eT(ex, p, i, D), c) return D;
            for (u in (h = w.event && p.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !e_.test(p.type), s = p.url.replace(e$, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(ev, "+")) : (d = p.url.slice(s.length), p.data && (p.processData || "string" == typeof p.data) && (s += (ed.test(s) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (s = s.replace(e8, "$1"), d = (ed.test(s) ? "&" : "?") + "_=" + eu.guid++ + d), p.url = s + d), p.ifModified && (w.lastModified[s] && D.setRequestHeader("If-Modified-Since", w.lastModified[s]), w.etag[s] && D.setRequestHeader("If-None-Match", w.etag[s])), (p.data && p.hasContent && !1 !== p.contentType || i.contentType) && D.setRequestHeader("Content-Type", p.contentType), D.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + eD + "; q=0.01" : "") : p.accepts["*"]), p.headers) D.setRequestHeader(u, p.headers[u]);
            if (p.beforeSend && (!1 === p.beforeSend.call(f, D, p) || c)) return D.abort();
            if (k = "abort", v.add(p.complete), D.done(p.success), D.fail(p.error), n = eT(ek, p, i, D)) {
                if (D.readyState = 1, h && m.trigger("ajaxSend", [D, p]), c) return D;
                p.async && 0 < p.timeout && (a = t.setTimeout(function () {
                    D.abort("timeout")
                }, p.timeout));
                try {
                    c = !1, n.send(_, T)
                } catch (S) {
                    if (c) throw S;
                    T(-1, S)
                }
            } else T(-1, "No Transport");

            function T(e, i, o, l) {
                var u, d, g, _, x, k = i;
                c || (c = !0, a && t.clearTimeout(a), n = void 0, r = l || "", D.readyState = 0 < e ? 4 : 0, u = 200 <= e && e < 300 || 304 === e, o && (_ = function (t, e, i) {
                    for (var n, s, r, o, a = t.contents, l = t.dataTypes; "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (n) {
                        for (s in a) if (a[s] && a[s].test(n)) {
                            l.unshift(s);
                            break
                        }
                    }
                    if (l[0] in i) r = l[0]; else {
                        for (s in i) {
                            if (!l[0] || t.converters[s + " " + l[0]]) {
                                r = s;
                                break
                            }
                            o || (o = s)
                        }
                        r = r || o
                    }
                    if (r) return r !== l[0] && l.unshift(r), i[r]
                }(p, D, o)), !u && -1 < w.inArray("script", p.dataTypes) && 0 > w.inArray("json", p.dataTypes) && (p.converters["text script"] = function () {
                }), _ = function (t, e, i, n) {
                    var s, r, o, a, l, c = {}, h = t.dataTypes.slice();
                    if (h[1]) for (o in t.converters) c[o.toLowerCase()] = t.converters[o];
                    for (r = h.shift(); r;) if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = h.shift()) {
                        if ("*" === r) r = l; else if ("*" !== l && l !== r) {
                            if (!(o = c[l + " " + r] || c["* " + r])) {
                                for (s in c) if ((a = s.split(" "))[1] === r && (o = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === o ? o = c[s] : !0 !== c[s] && (r = a[0], h.unshift(a[1]));
                                    break
                                }
                            }
                            if (!0 !== o) {
                                if (o && t.throws) e = o(e); else try {
                                    e = o(e)
                                } catch (u) {
                                    return {state: "parsererror", error: o ? u : "No conversion from " + l + " to " + r}
                                }
                            }
                        }
                    }
                    return {state: "success", data: e}
                }(p, _, D, u), u ? (p.ifModified && ((x = D.getResponseHeader("Last-Modified")) && (w.lastModified[s] = x), (x = D.getResponseHeader("etag")) && (w.etag[s] = x)), 204 === e || "HEAD" === p.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = _.state, d = _.data, u = !(g = _.error))) : (g = k, !e && k || (k = "error", e < 0 && (e = 0))), D.status = e, D.statusText = (i || k) + "", u ? y.resolveWith(f, [d, k, D]) : y.rejectWith(f, [D, k, g]), D.statusCode(b), b = void 0, h && m.trigger(u ? "ajaxSuccess" : "ajaxError", [D, p, u ? d : g]), v.fireWith(f, [D, k]), h && (m.trigger("ajaxComplete", [D, p]), --w.active || w.event.trigger("ajaxStop")))
            }

            return D
        }, getJSON: function (t, e, i) {
            return w.get(t, e, i, "json")
        }, getScript: function (t, e) {
            return w.get(t, void 0, e, "script")
        }
    }), w.each(["get", "post"], function (t, e) {
        w[e] = function (t, i, n, s) {
            return f(i) && (s = s || n, n = i, i = void 0), w.ajax(w.extend({url: t, type: e, dataType: s, data: i, success: n}, w.isPlainObject(t) && t))
        }
    }), w.ajaxPrefilter(function (t) {
        var e;
        for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
    }), w._evalUrl = function (t, e, i) {
        return w.ajax({
            url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: {
                "text script": function () {
                }
            }, dataFilter: function (t) {
                w.globalEval(t, e, i)
            }
        })
    }, w.fn.extend({
        wrapAll: function (t) {
            var e;
            return this[0] && (f(t) && (t = t.call(this[0])), e = w(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        }, wrapInner: function (t) {
            return f(t) ? this.each(function (e) {
                w(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = w(this), i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        }, wrap: function (t) {
            var e = f(t);
            return this.each(function (i) {
                w(this).wrapAll(e ? t.call(this, i) : t)
            })
        }, unwrap: function (t) {
            return this.parent(t).not("body").each(function () {
                w(this).replaceWith(this.childNodes)
            }), this
        }
    }), w.expr.pseudos.hidden = function (t) {
        return !w.expr.pseudos.visible(t)
    }, w.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, w.ajaxSettings.xhr = function () {
        try {
            return new t.XMLHttpRequest
        } catch (e) {
        }
    };
    var eA = {0: 200, 1223: 204}, eP = w.ajaxSettings.xhr();
    p.cors = !!eP && "withCredentials" in eP, p.ajax = eP = !!eP, w.ajaxTransport(function (e) {
        var i, n;
        if (p.cors || eP && !e.crossDomain) return {
            send: function (s, r) {
                var o, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (o in e.xhrFields) a[o] = e.xhrFields[o];
                for (o in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"), s) a.setRequestHeader(o, s[o]);
                i = function (t) {
                    return function () {
                        i && (i = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(eA[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
                    }
                }, a.onload = i(), n = a.onerror = a.ontimeout = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function () {
                    4 === a.readyState && t.setTimeout(function () {
                        i && n()
                    })
                }, i = i("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (l) {
                    if (i) throw l
                }
            }, abort: function () {
                i && i()
            }
        }
    }), w.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1)
    }), w.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /\b(?:java|ecma)script\b/}, converters: {
            "text script": function (t) {
                return w.globalEval(t), t
            }
        }
    }), w.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), w.ajaxTransport("script", function (t) {
        var e, i;
        if (t.crossDomain || t.scriptAttrs) return {
            send: function (n, s) {
                e = w("<script>").attr(t.scriptAttrs || {}).prop({charset: t.scriptCharset, src: t.url}).on("load error", i = function (t) {
                    e.remove(), i = null, t && s("error" === t.type ? 404 : 200, t.type)
                }), g.head.appendChild(e[0])
            }, abort: function () {
                i && i()
            }
        }
    });
    var eL, eM = [], e0 = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var t = eM.pop() || w.expando + "_" + eu.guid++;
            return this[t] = !0, t
        }
    }), w.ajaxPrefilter("json jsonp", function (e, i, n) {
        var s, r, o, a = !1 !== e.jsonp && (e0.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && e0.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return s = e.jsonpCallback = f(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(e0, "$1" + s) : !1 !== e.jsonp && (e.url += (ed.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function () {
            return o || w.error(s + " was not called"), o[0]
        }, e.dataTypes[0] = "json", r = t[s], t[s] = function () {
            o = arguments
        }, n.always(function () {
            void 0 === r ? w(t).removeProp(s) : t[s] = r, e[s] && (e.jsonpCallback = i.jsonpCallback, eM.push(s)), o && f(r) && r(o[0]), o = r = void 0
        }), "script"
    }), p.createHTMLDocument = ((eL = g.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === eL.childNodes.length), w.parseHTML = function (t, e, i) {
        var n, s, r;
        return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (p.createHTMLDocument ? ((n = (e = g.implementation.createHTMLDocument("")).createElement("base")).href = g.location.href, e.head.appendChild(n)) : e = g), r = !i && [], (s = E.exec(t)) ? [e.createElement(s[1])] : (s = t8([t], e, r), r && r.length && w(r).remove(), w.merge([], s.childNodes)))
    }, w.fn.load = function (t, e, i) {
        var n, s, r, o = this, a = t.indexOf(" ");
        return -1 < a && (n = es(t.slice(a)), t = t.slice(0, a)), f(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), 0 < o.length && w.ajax({url: t, type: s || "GET", dataType: "html", data: e}).done(function (t) {
            r = arguments, o.html(n ? w("<div>").append(w.parseHTML(t)).find(n) : t)
        }).always(i && function (t, e) {
            o.each(function () {
                i.apply(this, r || [t.responseText, e, t])
            })
        }), this
    }, w.expr.pseudos.animated = function (t) {
        return w.grep(w.timers, function (e) {
            return t === e.elem
        }).length
    }, w.offset = {
        setOffset: function (t, e, i) {
            var n, s, r, o, a, l, c = w.css(t, "position"), h = w(t), u = {};
            "static" === c && (t.style.position = "relative"), a = h.offset(), r = w.css(t, "top"), l = w.css(t, "left"), ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? (o = (n = h.position()).top, s = n.left) : (o = parseFloat(r) || 0, s = parseFloat(l) || 0), f(e) && (e = e.call(t, i, w.extend({}, a))), null != e.top && (u.top = e.top - a.top + o), null != e.left && (u.left = e.left - a.left + s), "using" in e ? e.using.call(t, u) : h.css(u)
        }
    }, w.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                w.offset.setOffset(this, t, e)
            });
            var e, i, n = this[0];
            return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {top: e.top + i.pageYOffset, left: e.left + i.pageXOffset}) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var t, e, i, n = this[0], s = {top: 0, left: 0};
                if ("fixed" === w.css(n, "position")) e = n.getBoundingClientRect(); else {
                    for (e = this.offset(), i = n.ownerDocument, t = n.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === w.css(t, "position");) t = t.parentNode;
                    t && t !== n && 1 === t.nodeType && ((s = w(t).offset()).top += w.css(t, "borderTopWidth", !0), s.left += w.css(t, "borderLeftWidth", !0))
                }
                return {top: e.top - s.top - w.css(n, "marginTop", !0), left: e.left - s.left - w.css(n, "marginLeft", !0)}
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && "static" === w.css(t, "position");) t = t.offsetParent;
                return t || ts
            })
        }
    }), w.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
        var i = "pageYOffset" === e;
        w.fn[t] = function (n) {
            return B(this, function (t, n, s) {
                var r;
                if (m(t) ? r = t : 9 === t.nodeType && (r = t.defaultView), void 0 === s) return r ? r[e] : t[n];
                r ? r.scrollTo(i ? r.pageXOffset : s, i ? s : r.pageYOffset) : t[n] = s
            }, t, n, arguments.length)
        }
    }), w.each(["top", "left"], function (t, e) {
        w.cssHooks[e] = tH(p.pixelPosition, function (t, i) {
            if (i) return i = tz(t, e), tO.test(i) ? w(t).position()[e] + "px" : i
        })
    }), w.each({Height: "height", Width: "width"}, function (t, e) {
        w.each({padding: "inner" + t, content: e, "": "outer" + t}, function (i, n) {
            w.fn[n] = function (s, r) {
                var o = arguments.length && (i || "boolean" != typeof s), a = i || (!0 === s || !0 === r ? "margin" : "border");
                return B(this, function (e, i, s) {
                    var r;
                    return m(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === s ? w.css(e, i, a) : w.style(e, i, s, a)
                }, e, o ? s : void 0, o)
            }
        })
    }), w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        w.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), w.fn.extend({
        bind: function (t, e, i) {
            return this.on(t, null, e, i)
        }, unbind: function (t, e) {
            return this.off(t, null, e)
        }, delegate: function (t, e, i, n) {
            return this.on(e, t, i, n)
        }, undelegate: function (t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }, hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
        w.fn[e] = function (t, i) {
            return 0 < arguments.length ? this.on(e, null, t, i) : this.trigger(e)
        }
    });
    var eO = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.proxy = function (t, e) {
        var i, n, r;
        if ("string" == typeof e && (i = t[e], e = t, t = i), f(t)) return n = s.call(arguments, 2), (r = function () {
            return t.apply(e || this, n.concat(s.call(arguments)))
        }).guid = t.guid = t.guid || w.guid++, r
    }, w.holdReady = function (t) {
        t ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = T, w.isFunction = f, w.isWindow = m, w.camelCase = U, w.type = b, w.now = Date.now, w.isNumeric = function (t) {
        var e = w.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }, w.trim = function (t) {
        return null == t ? "" : (t + "").replace(eO, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return w
    });
    var eI = t.jQuery, e9 = t.$;
    return w.noConflict = function (e) {
        return t.$ === w && (t.$ = e9), e && t.jQuery === w && (t.jQuery = eI), w
    }, void 0 === e && (t.jQuery = t.$ = w), w
}), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, function () {
    "use strict";
    let t = "transitionend", e = t => {
        let e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
            let i = t.getAttribute("href");
            if (!i || !i.includes("#") && !i.startsWith(".")) return null;
            i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null
        }
        return e
    }, i = t => {
        let i = e(t);
        return i && document.querySelector(i) ? i : null
    }, n = t => {
        let i = e(t);
        return i ? document.querySelector(i) : null
    }, s = e => {
        e.dispatchEvent(new Event(t))
    }, r = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType), o = t => r(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null, a = t => {
        if (!r(t) || 0 === t.getClientRects().length) return !1;
        let e = "visible" === getComputedStyle(t).getPropertyValue("visibility"), i = t.closest("details:not([open])");
        if (!i) return e;
        if (i !== t) {
            let n = t.closest("summary");
            if (n && n.parentNode !== i || null === n) return !1
        }
        return e
    }, l = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")), c = t => {
        if (!document.documentElement.attachShadow) return null;
        if ("function" == typeof t.getRootNode) {
            let e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        }
        return t instanceof ShadowRoot ? t : t.parentNode ? c(t.parentNode) : null
    }, h = () => {
    }, u = t => {
        t.offsetHeight
    }, d = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, p = [], f = () => "rtl" === document.documentElement.dir, m = t => {
        var e;
        e = () => {
            let e = d();
            if (e) {
                let i = t.NAME, n = e.fn[i];
                e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = () => (e.fn[i] = n, t.jQueryInterface)
            }
        }, "loading" === document.readyState ? (p.length || document.addEventListener("DOMContentLoaded", () => {
            for (let t of p) t()
        }), p.push(e)) : e()
    }, g = t => {
        "function" == typeof t && t()
    }, y = (e, i, n = !0) => {
        if (!n) return void g(e);
        let r = (t => {
            if (!t) return 0;
            let {transitionDuration: e, transitionDelay: i} = window.getComputedStyle(t), n = Number.parseFloat(e), s = Number.parseFloat(i);
            return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
        })(i) + 5, o = !1, a = ({target: n}) => {
            n === i && (o = !0, i.removeEventListener(t, a), g(e))
        };
        i.addEventListener(t, a), setTimeout(() => {
            o || s(i)
        }, r)
    }, v = (t, e, i, n) => {
        let s = t.length, r = t.indexOf(e);
        return -1 === r ? !i && n ? t[s - 1] : t[0] : (r += i ? 1 : -1, n && (r = (r + s) % s), t[Math.max(0, Math.min(r, s - 1))])
    }, b = /[^.]*(?=\..*)\.|.*/, _ = /\..*/, w = /::\d+$/, x = {}, k = 1, D = {mouseenter: "mouseover", mouseleave: "mouseout"}, C = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function S(t, e) {
        return e && `${e}::${k++}` || t.uidEvent || k++
    }

    function T(t) {
        let e = S(t);
        return t.uidEvent = e, x[e] = x[e] || {}, x[e]
    }

    function E(t, e, i = null) {
        return Object.values(t).find(t => t.callable === e && t.delegationSelector === i)
    }

    function A(t, e, i) {
        let n = "string" == typeof e, s = O(t);
        return C.has(s) || (s = t), [n, n ? i : e || i, s]
    }

    function P(t, e, i, n, s) {
        var r, o, a, l, c, h;
        if ("string" != typeof e || !t) return;
        let [u, d, p] = A(e, i, n);
        e in D && (d = (r = d, function (t) {
            if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget)) return r.call(this, t)
        }));
        let f = T(t), m = f[p] || (f[p] = {}), g = E(m, d, u ? i : null);
        if (g) return void (g.oneOff = g.oneOff && s);
        let y = S(d, e.replace(b, "")), v = u ? (o = t, a = i, l = d, function t(e) {
            let i = o.querySelectorAll(a);
            for (let {target: n} = e; n && n !== this; n = n.parentNode) for (let s of i) if (s === n) return Y(e, {delegateTarget: n}), t.oneOff && I.off(o, e.type, a, l), l.apply(n, [e])
        }) : (c = t, h = d, function t(e) {
            return Y(e, {delegateTarget: c}), t.oneOff && I.off(c, e.type, h), h.apply(c, [e])
        });
        v.delegationSelector = u ? i : null, v.callable = d, v.oneOff = s, v.uidEvent = y, m[y] = v, t.addEventListener(p, v, u)
    }

    function L(t, e, i, n, s) {
        let r = E(e[i], n, s);
        r && (t.removeEventListener(i, r, Boolean(s)), delete e[i][r.uidEvent])
    }

    function M(t, e, i, n) {
        let s = e[i] || {};
        for (let r of Object.keys(s)) if (r.includes(n)) {
            let o = s[r];
            L(t, e, i, o.callable, o.delegationSelector)
        }
    }

    function O(t) {
        return D[t = t.replace(_, "")] || t
    }

    let I = {
        on(t, e, i, n) {
            P(t, e, i, n, !1)
        }, one(t, e, i, n) {
            P(t, e, i, n, !0)
        }, off(t, e, i, n) {
            if ("string" != typeof e || !t) return;
            let [s, r, o] = A(e, i, n), a = o !== e, l = T(t), c = l[o] || {}, h = e.startsWith(".");
            if (void 0 === r) {
                if (h) for (let u of Object.keys(l)) M(t, l, u, e.slice(1));
                for (let d of Object.keys(c)) {
                    let p = d.replace(w, "");
                    if (!a || e.includes(p)) {
                        let f = c[d];
                        L(t, l, o, f.callable, f.delegationSelector)
                    }
                }
            } else {
                if (!Object.keys(c).length) return;
                L(t, l, o, r, s ? i : null)
            }
        }, trigger(t, e, i) {
            if ("string" != typeof e || !t) return null;
            let n = d(), s = null, r = !0, o = !0, a = !1;
            e !== O(e) && n && (s = n.Event(e, i), n(t).trigger(s), r = !s.isPropagationStopped(), o = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
            let l = new Event(e, {bubbles: r, cancelable: !0});
            return l = Y(l, i), a && l.preventDefault(), o && t.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l
        }
    };

    function Y(t, e) {
        for (let [i, n] of Object.entries(e || {})) try {
            t[i] = n
        } catch (s) {
            Object.defineProperty(t, i, {configurable: !0, get: () => n})
        }
        return t
    }

    let z = new Map, H = {
        set(t, e, i) {
            z.has(t) || z.set(t, new Map);
            let n = z.get(t);
            n.has(e) || 0 === n.size ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)
        }, get: (t, e) => z.has(t) && z.get(t).get(e) || null, remove(t, e) {
            if (!z.has(t)) return;
            let i = z.get(t);
            i.delete(e), 0 === i.size && z.delete(t)
        }
    };

    function N(t) {
        if ("true" === t) return !0;
        if ("false" === t) return !1;
        if (t === Number(t).toString()) return Number(t);
        if ("" === t || "null" === t) return null;
        if ("string" != typeof t) return t;
        try {
            return JSON.parse(decodeURIComponent(t))
        } catch (e) {
            return t
        }
    }

    function j(t) {
        return t.replace(/[A-Z]/g, t => `-${t.toLowerCase()}`)
    }

    let R = {
        setDataAttribute(t, e, i) {
            t.setAttribute(`data-bs-${j(e)}`, i)
        }, removeDataAttribute(t, e) {
            t.removeAttribute(`data-bs-${j(e)}`)
        }, getDataAttributes(t) {
            if (!t) return {};
            let e = {}, i = Object.keys(t.dataset).filter(t => t.startsWith("bs") && !t.startsWith("bsConfig"));
            for (let n of i) {
                let s = n.replace(/^bs/, "");
                e[s = s.charAt(0).toLowerCase() + s.slice(1, s.length)] = N(t.dataset[n])
            }
            return e
        }, getDataAttribute: (t, e) => N(t.getAttribute(`data-bs-${j(e)}`))
    };

    class W {
        static get Default() {
            return {}
        }

        static get DefaultType() {
            return {}
        }

        static get NAME() {
            throw Error('You have to implement the static method "NAME", for each component!')
        }

        _getConfig(t) {
            return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
        }

        _configAfterMerge(t) {
            return t
        }

        _mergeConfigObj(t, e) {
            let i = r(e) ? R.getDataAttribute(e, "config") : {};
            return {...this.constructor.Default, ..."object" == typeof i ? i : {}, ...r(e) ? R.getDataAttributes(e) : {}, ..."object" == typeof t ? t : {}}
        }

        _typeCheckConfig(t, e = this.constructor.DefaultType) {
            var i;
            for (let n of Object.keys(e)) {
                let s = e[n], o = t[n], a = r(o) ? "element" : null == (i = o) ? `${i}` : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!RegExp(s).test(a)) throw TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`)
            }
        }
    }

    class B extends W {
        constructor(t, e) {
            super(), (t = o(t)) && (this._element = t, this._config = this._getConfig(e), H.set(this._element, this.constructor.DATA_KEY, this))
        }

        dispose() {
            for (let t of (H.remove(this._element, this.constructor.DATA_KEY), I.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this))) this[t] = null
        }

        _queueCallback(t, e, i = !0) {
            y(t, e, i)
        }

        _getConfig(t) {
            return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
        }

        static getInstance(t) {
            return H.get(o(t), this.DATA_KEY)
        }

        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
        }

        static get VERSION() {
            return "5.2.0"
        }

        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }

        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }

        static eventName(t) {
            return `${t}${this.EVENT_KEY}`
        }
    }

    let F = (t, e = "hide") => {
        let i = `click.dismiss${t.EVENT_KEY}`, s = t.NAME;
        I.on(document, i, `[data-bs-dismiss="${s}"]`, function (i) {
            if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), l(this)) return;
            let r = n(this) || this.closest(`.${s}`);
            t.getOrCreateInstance(r)[e]()
        })
    };

    class V extends B {
        static get NAME() {
            return "alert"
        }

        close() {
            if (I.trigger(this._element, "close.bs.alert").defaultPrevented) return;
            this._element.classList.remove("show");
            let t = this._element.classList.contains("fade");
            this._queueCallback(() => this._destroyElement(), this._element, t)
        }

        _destroyElement() {
            this._element.remove(), I.trigger(this._element, "closed.bs.alert"), this.dispose()
        }

        static jQueryInterface(t) {
            return this.each(function () {
                let e = V.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            })
        }
    }

    F(V, "close"), m(V);
    let q = '[data-bs-toggle="button"]';

    class U extends B {
        static get NAME() {
            return "button"
        }

        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }

        static jQueryInterface(t) {
            return this.each(function () {
                let e = U.getOrCreateInstance(this);
                "toggle" === t && e[t]()
            })
        }
    }

    I.on(document, "click.bs.button.data-api", q, t => {
        t.preventDefault();
        let e = t.target.closest(q);
        U.getOrCreateInstance(e).toggle()
    }), m(U);
    let X = {
        find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)), findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t), children: (t, e) => [].concat(...t.children).filter(t => t.matches(e)), parents(t, e) {
            let i = [], n = t.parentNode.closest(e);
            for (; n;) i.push(n), n = n.parentNode.closest(e);
            return i
        }, prev(t, e) {
            let i = t.previousElementSibling;
            for (; i;) {
                if (i.matches(e)) return [i];
                i = i.previousElementSibling
            }
            return []
        }, next(t, e) {
            let i = t.nextElementSibling;
            for (; i;) {
                if (i.matches(e)) return [i];
                i = i.nextElementSibling
            }
            return []
        }, focusableChildren(t) {
            let e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(t => `${t}:not([tabindex^="-"])`).join(",");
            return this.find(e, t).filter(t => !l(t) && a(t))
        }
    }, G = {endCallback: null, leftCallback: null, rightCallback: null}, Q = {endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)"};

    class Z extends W {
        constructor(t, e) {
            super(), this._element = t, t && Z.isSupported() && (this._config = this._getConfig(e), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents())
        }

        static get Default() {
            return G
        }

        static get DefaultType() {
            return Q
        }

        static get NAME() {
            return "swipe"
        }

        dispose() {
            I.off(this._element, ".bs.swipe")
        }

        _start(t) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX
        }

        _end(t) {
            this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), g(this._config.endCallback)
        }

        _move(t) {
            this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX
        }

        _handleSwipe() {
            let t = Math.abs(this._deltaX);
            if (t <= 40) return;
            let e = t / this._deltaX;
            this._deltaX = 0, e && g(e > 0 ? this._config.rightCallback : this._config.leftCallback)
        }

        _initEvents() {
            this._supportPointerEvents ? (I.on(this._element, "pointerdown.bs.swipe", t => this._start(t)), I.on(this._element, "pointerup.bs.swipe", t => this._end(t)), this._element.classList.add("pointer-event")) : (I.on(this._element, "touchstart.bs.swipe", t => this._start(t)), I.on(this._element, "touchmove.bs.swipe", t => this._move(t)), I.on(this._element, "touchend.bs.swipe", t => this._end(t)))
        }

        _eventIsPointerPenTouch(t) {
            return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType)
        }

        static isSupported() {
            return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
        }
    }

    let K = "next", J = "prev", tt = "left", te = "right", ti = "slid.bs.carousel", tn = "carousel", ts = "active", tr = {ArrowLeft: te, ArrowRight: tt}, to = {interval: 5e3, keyboard: !0, pause: "hover", ride: !1, touch: !0, wrap: !0}, ta = {interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean"};

    class tl extends B {
        constructor(t, e) {
            super(t, e), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = X.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === tn && this.cycle()
        }

        static get Default() {
            return to
        }

        static get DefaultType() {
            return ta
        }

        static get NAME() {
            return "carousel"
        }

        next() {
            this._slide(K)
        }

        nextWhenVisible() {
            !document.hidden && a(this._element) && this.next()
        }

        prev() {
            this._slide(J)
        }

        pause() {
            this._isSliding && s(this._element), this._clearInterval()
        }

        cycle() {
            this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval)
        }

        _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? I.one(this._element, ti, () => this.cycle()) : this.cycle())
        }

        to(t) {
            let e = this._getItems();
            if (t > e.length - 1 || t < 0) return;
            if (this._isSliding) return void I.one(this._element, ti, () => this.to(t));
            let i = this._getItemIndex(this._getActive());
            i !== t && this._slide(t > i ? K : J, e[t])
        }

        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
        }

        _configAfterMerge(t) {
            return t.defaultInterval = t.interval, t
        }

        _addEventListeners() {
            this._config.keyboard && I.on(this._element, "keydown.bs.carousel", t => this._keydown(t)), "hover" === this._config.pause && (I.on(this._element, "mouseenter.bs.carousel", () => this.pause()), I.on(this._element, "mouseleave.bs.carousel", () => this._maybeEnableCycle())), this._config.touch && Z.isSupported() && this._addTouchEventListeners()
        }

        _addTouchEventListeners() {
            for (let t of X.find(".carousel-item img", this._element)) I.on(t, "dragstart.bs.carousel", t => t.preventDefault());
            this._swipeHelper = new Z(this._element, {
                leftCallback: () => this._slide(this._directionToOrder(tt)), rightCallback: () => this._slide(this._directionToOrder(te)), endCallback: () => {
                    "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval))
                }
            })
        }

        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            let e = tr[t.key];
            e && (t.preventDefault(), this._slide(this._directionToOrder(e)))
        }

        _getItemIndex(t) {
            return this._getItems().indexOf(t)
        }

        _setActiveIndicatorElement(t) {
            if (!this._indicatorsElement) return;
            let e = X.findOne(".active", this._indicatorsElement);
            e.classList.remove(ts), e.removeAttribute("aria-current");
            let i = X.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
            i && (i.classList.add(ts), i.setAttribute("aria-current", "true"))
        }

        _updateInterval() {
            let t = this._activeElement || this._getActive();
            if (!t) return;
            let e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            this._config.interval = e || this._config.defaultInterval
        }

        _slide(t, e = null) {
            if (this._isSliding) return;
            let i = this._getActive(), n = t === K, s = e || v(this._getItems(), i, n, this._config.wrap);
            if (s === i) return;
            let r = this._getItemIndex(s), o = e => I.trigger(this._element, e, {relatedTarget: s, direction: this._orderToDirection(t), from: this._getItemIndex(i), to: r});
            if (o("slide.bs.carousel").defaultPrevented || !i || !s) return;
            let a = Boolean(this._interval);
            this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(r), this._activeElement = s;
            let l = n ? "carousel-item-start" : "carousel-item-end", c = n ? "carousel-item-next" : "carousel-item-prev";
            s.classList.add(c), u(s), i.classList.add(l), s.classList.add(l), this._queueCallback(() => {
                s.classList.remove(l, c), s.classList.add(ts), i.classList.remove(ts, c, l), this._isSliding = !1, o(ti)
            }, i, this._isAnimated()), a && this.cycle()
        }

        _isAnimated() {
            return this._element.classList.contains("slide")
        }

        _getActive() {
            return X.findOne(".active.carousel-item", this._element)
        }

        _getItems() {
            return X.find(".carousel-item", this._element)
        }

        _clearInterval() {
            this._interval && (clearInterval(this._interval), this._interval = null)
        }

        _directionToOrder(t) {
            return f() ? t === tt ? J : K : t === tt ? K : J
        }

        _orderToDirection(t) {
            return f() ? t === J ? tt : te : t === J ? te : tt
        }

        static jQueryInterface(t) {
            return this.each(function () {
                let e = tl.getOrCreateInstance(this, t);
                if ("number" != typeof t) {
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw TypeError(`No method named "${t}"`);
                        e[t]()
                    }
                } else e.to(t)
            })
        }
    }

    I.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", function (t) {
        let e = n(this);
        if (!e || !e.classList.contains(tn)) return;
        t.preventDefault();
        let i = tl.getOrCreateInstance(e), s = this.getAttribute("data-bs-slide-to");
        return s ? (i.to(s), void i._maybeEnableCycle()) : "next" === R.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle())
    }), I.on(window, "load.bs.carousel.data-api", () => {
        let t = X.find('[data-bs-ride="carousel"]');
        for (let e of t) tl.getOrCreateInstance(e)
    }), m(tl);
    let tc = "show", th = "collapse", tu = "collapsing", td = '[data-bs-toggle="collapse"]', tp = {parent: null, toggle: !0}, tf = {parent: "(null|element)", toggle: "boolean"};

    class tm extends B {
        constructor(t, e) {
            super(t, e), this._isTransitioning = !1, this._triggerArray = [];
            let n = X.find(td);
            for (let s of n) {
                let r = i(s), o = X.find(r).filter(t => t === this._element);
                null !== r && o.length && this._triggerArray.push(s)
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
        }

        static get Default() {
            return tp
        }

        static get DefaultType() {
            return tf
        }

        static get NAME() {
            return "collapse"
        }

        toggle() {
            this._isShown() ? this.hide() : this.show()
        }

        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t = [];
            if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(t => t !== this._element).map(t => tm.getOrCreateInstance(t, {toggle: !1}))), t.length && t[0]._isTransitioning || I.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
            for (let e of t) e.hide();
            let i = this._getDimension();
            this._element.classList.remove(th), this._element.classList.add(tu), this._element.style[i] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            let n = `scroll${i[0].toUpperCase() + i.slice(1)}`;
            this._queueCallback(() => {
                this._isTransitioning = !1, this._element.classList.remove(tu), this._element.classList.add(th, tc), this._element.style[i] = "", I.trigger(this._element, "shown.bs.collapse")
            }, this._element, !0), this._element.style[i] = `${this._element[n]}px`
        }

        hide() {
            if (this._isTransitioning || !this._isShown() || I.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
            let t = this._getDimension();
            for (let e of (this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, u(this._element), this._element.classList.add(tu), this._element.classList.remove(th, tc), this._triggerArray)) {
                let i = n(e);
                i && !this._isShown(i) && this._addAriaAndCollapsedClass([e], !1)
            }
            this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(() => {
                this._isTransitioning = !1, this._element.classList.remove(tu), this._element.classList.add(th), I.trigger(this._element, "hidden.bs.collapse")
            }, this._element, !0)
        }

        _isShown(t = this._element) {
            return t.classList.contains(tc)
        }

        _configAfterMerge(t) {
            return t.toggle = Boolean(t.toggle), t.parent = o(t.parent), t
        }

        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }

        _initializeChildren() {
            if (!this._config.parent) return;
            let t = this._getFirstLevelChildren(td);
            for (let e of t) {
                let i = n(e);
                i && this._addAriaAndCollapsedClass([e], this._isShown(i))
            }
        }

        _getFirstLevelChildren(t) {
            let e = X.find(":scope .collapse .collapse", this._config.parent);
            return X.find(t, this._config.parent).filter(t => !e.includes(t))
        }

        _addAriaAndCollapsedClass(t, e) {
            if (t.length) for (let i of t) i.classList.toggle("collapsed", !e), i.setAttribute("aria-expanded", e)
        }

        static jQueryInterface(t) {
            let e = {};
            return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each(function () {
                let i = tm.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw TypeError(`No method named "${t}"`);
                    i[t]()
                }
            })
        }
    }

    I.on(document, "click.bs.collapse.data-api", td, function (t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        let e = i(this), n = X.find(e);
        for (let s of n) tm.getOrCreateInstance(s, {toggle: !1}).toggle()
    }), m(tm);
    var tg = "top", ty = "bottom", tv = "right", t$ = "left", t8 = "auto", tb = [tg, ty, tv, t$], t_ = "start", tw = "clippingParents", tx = "viewport", tk = "popper", tD = "reference", tC = tb.reduce(function (t, e) {
        return t.concat([e + "-" + t_, e + "-end"])
    }, []), tS = [].concat(tb, [t8]).reduce(function (t, e) {
        return t.concat([e, e + "-" + t_, e + "-end"])
    }, []), tT = "beforeRead", tE = "read", tA = "afterRead", tP = "beforeMain", tL = "main", tM = "afterMain", t0 = "beforeWrite", tO = "write", tI = "afterWrite", t9 = [tT, tE, tA, tP, tL, tM, t0, tO, tI];

    function tY(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }

    function tz(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window
        }
        return t
    }

    function tH(t) {
        return t instanceof tz(t).Element || t instanceof Element
    }

    function tN(t) {
        return t instanceof tz(t).HTMLElement || t instanceof HTMLElement
    }

    function tj(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof tz(t).ShadowRoot || t instanceof ShadowRoot)
    }

    let tR = {
        name: "applyStyles", enabled: !0, phase: "write", fn: function (t) {
            var e = t.state;
            Object.keys(e.elements).forEach(function (t) {
                var i = e.styles[t] || {}, n = e.attributes[t] || {}, s = e.elements[t];
                tN(s) && tY(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function (t) {
                    var e = n[t];
                    !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
                }))
            })
        }, effect: function (t) {
            var e = t.state, i = {popper: {position: e.options.strategy, left: "0", top: "0", margin: "0"}, arrow: {position: "absolute"}, reference: {}};
            return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function () {
                Object.keys(e.elements).forEach(function (t) {
                    var n = e.elements[t], s = e.attributes[t] || {}, r = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function (t, e) {
                        return t[e] = "", t
                    }, {});
                    tN(n) && tY(n) && (Object.assign(n.style, r), Object.keys(s).forEach(function (t) {
                        n.removeAttribute(t)
                    }))
                })
            }
        }, requires: ["computeStyles"]
    };

    function t1(t) {
        return t.split("-")[0]
    }

    var tW = Math.max, tB = Math.min, tF = Math.round;

    function tV(t, e) {
        void 0 === e && (e = !1);
        var i = t.getBoundingClientRect(), n = 1, s = 1;
        if (tN(t) && e) {
            var r = t.offsetHeight, o = t.offsetWidth;
            o > 0 && (n = tF(i.width) / o || 1), r > 0 && (s = tF(i.height) / r || 1)
        }
        return {width: i.width / n, height: i.height / s, top: i.top / s, right: i.right / n, bottom: i.bottom / s, left: i.left / n, x: i.left / n, y: i.top / s}
    }

    function t2(t) {
        var e = tV(t), i = t.offsetWidth, n = t.offsetHeight;
        return 1 >= Math.abs(e.width - i) && (i = e.width), 1 >= Math.abs(e.height - n) && (n = e.height), {x: t.offsetLeft, y: t.offsetTop, width: i, height: n}
    }

    function t3(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && tj(i)) {
            var n = e;
            do {
                if (n && t.isSameNode(n)) return !0;
                n = n.parentNode || n.host
            } while (n)
        }
        return !1
    }

    function t4(t) {
        return tz(t).getComputedStyle(t)
    }

    function tq(t) {
        return ["table", "td", "th"].indexOf(tY(t)) >= 0
    }

    function t7(t) {
        return ((tH(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }

    function t5(t) {
        return "html" === tY(t) ? t : t.assignedSlot || t.parentNode || (tj(t) ? t.host : null) || t7(t)
    }

    function tU(t) {
        return tN(t) && "fixed" !== t4(t).position ? t.offsetParent : null
    }

    function t6(t) {
        for (var e = tz(t), i = tU(t); i && tq(i) && "static" === t4(i).position;) i = tU(i);
        return i && ("html" === tY(i) || "body" === tY(i) && "static" === t4(i).position) ? e : i || function (t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (-1 !== navigator.userAgent.indexOf("Trident") && tN(t) && "fixed" === t4(t).position) return null;
            var i = t5(t);
            for (tj(i) && (i = i.host); tN(i) && 0 > ["html", "body"].indexOf(tY(i));) {
                var n = t4(i);
                if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
                i = i.parentNode
            }
            return null
        }(t) || e
    }

    function tX(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }

    function tG(t, e, i) {
        return tW(t, tB(e, i))
    }

    function tQ(t) {
        return Object.assign({}, {top: 0, right: 0, bottom: 0, left: 0}, t)
    }

    function tZ(t, e) {
        return e.reduce(function (e, i) {
            return e[i] = t, e
        }, {})
    }

    let tK = {
        name: "arrow", enabled: !0, phase: "main", fn: function (t) {
            var e, i = t.state, n = t.name, s = t.options, r = i.elements.arrow, o = i.modifiersData.popperOffsets, a = t1(i.placement), l = tX(a), c = [t$, tv].indexOf(a) >= 0 ? "height" : "width";
            if (r && o) {
                var h, u, d = (h = s.padding, u = i, tQ("number" != typeof (h = "function" == typeof h ? h(Object.assign({}, u.rects, {placement: u.placement})) : h) ? h : tZ(h, tb))), p = t2(r), f = i.rects.reference[c] + i.rects.reference[l] - o[l] - i.rects.popper[c], m = o[l] - i.rects.reference[l], g = t6(r), y = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0, v = d["y" === l ? tg : t$], b = y - p[c] - d["y" === l ? ty : tv], _ = y / 2 - p[c] / 2 + (f / 2 - m / 2), w = tG(v, _, b), x = l;
                i.modifiersData[n] = ((e = {})[x] = w, e.centerOffset = w - _, e)
            }
        }, effect: function (t) {
            var e = t.state, i = t.options.element, n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && t3(e.elements.popper, n) && (e.elements.arrow = n)
        }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"]
    };

    function tJ(t) {
        return t.split("-")[1]
    }

    var et = {top: "auto", right: "auto", bottom: "auto", left: "auto"};

    function ee(t) {
        var e, i = t.popper, n = t.popperRect, s = t.placement, r = t.variation, o = t.offsets, a = t.position, l = t.gpuAcceleration, c = t.adaptive, h = t.roundOffsets, u = t.isFixed, d = o.x, p = void 0 === d ? 0 : d, f = o.y, m = void 0 === f ? 0 : f, g = "function" == typeof h ? h({x: p, y: m}) : {x: p, y: m};
        p = g.x, m = g.y;
        var y = o.hasOwnProperty("x"), v = o.hasOwnProperty("y"), b = t$, _ = tg, w = window;
        if (c) {
            var x = t6(i), k = "clientHeight", D = "clientWidth";
            x === tz(i) && "static" !== t4(x = t7(i)).position && "absolute" === a && (k = "scrollHeight", D = "scrollWidth"), (s === tg || (s === t$ || s === tv) && "end" === r) && (_ = ty, m -= (u && x === w && w.visualViewport ? w.visualViewport.height : x[k]) - n.height, m *= l ? 1 : -1), s !== t$ && (s !== tg && s !== ty || "end" !== r) || (b = tv, p -= (u && x === w && w.visualViewport ? w.visualViewport.width : x[D]) - n.width, p *= l ? 1 : -1)
        }
        var C, S, T, E, A, P = Object.assign({position: a}, c && et), L = !0 === h ? (S = (C = {x: p, y: m}).x, T = C.y, {x: tF(S * (E = window.devicePixelRatio || 1)) / E || 0, y: tF(T * E) / E || 0}) : {x: p, y: m};
        return p = L.x, m = L.y, l ? Object.assign({}, P, ((A = {})[_] = v ? "0" : "", A[b] = y ? "0" : "", A.transform = 1 >= (w.devicePixelRatio || 1) ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", A)) : Object.assign({}, P, ((e = {})[_] = v ? m + "px" : "", e[b] = y ? p + "px" : "", e.transform = "", e))
    }

    let ei = {
        name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function (t) {
            var e = t.state, i = t.options, n = i.gpuAcceleration, s = i.adaptive, r = i.roundOffsets, o = void 0 === r || r, a = {placement: t1(e.placement), variation: tJ(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: void 0 === n || n, isFixed: "fixed" === e.options.strategy};
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, ee(Object.assign({}, a, {offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: void 0 === s || s, roundOffsets: o})))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, ee(Object.assign({}, a, {offsets: e.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: o})))), e.attributes.popper = Object.assign({}, e.attributes.popper, {"data-popper-placement": e.placement})
        }, data: {}
    };
    var en = {passive: !0};
    let es = {
        name: "eventListeners", enabled: !0, phase: "write", fn: function () {
        }, effect: function (t) {
            var e = t.state, i = t.instance, n = t.options, s = n.scroll, r = void 0 === s || s, o = n.resize, a = void 0 === o || o, l = tz(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return r && c.forEach(function (t) {
                t.addEventListener("scroll", i.update, en)
            }), a && l.addEventListener("resize", i.update, en), function () {
                r && c.forEach(function (t) {
                    t.removeEventListener("scroll", i.update, en)
                }), a && l.removeEventListener("resize", i.update, en)
            }
        }, data: {}
    };
    var er = {left: "right", right: "left", bottom: "top", top: "bottom"};

    function eo(t) {
        return t.replace(/left|right|bottom|top/g, function (t) {
            return er[t]
        })
    }

    var ea = {start: "end", end: "start"};

    function el(t) {
        return t.replace(/start|end/g, function (t) {
            return ea[t]
        })
    }

    function ec(t) {
        var e = tz(t);
        return {scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset}
    }

    function eh(t) {
        return tV(t7(t)).left + ec(t).scrollLeft
    }

    function eu(t) {
        var e = t4(t), i = e.overflow, n = e.overflowX, s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n)
    }

    function ed(t, e) {
        void 0 === e && (e = []);
        var i, n = function t(e) {
            return ["html", "body", "#document"].indexOf(tY(e)) >= 0 ? e.ownerDocument.body : tN(e) && eu(e) ? e : t(t5(e))
        }(t), s = n === (null == (i = t.ownerDocument) ? void 0 : i.body), r = tz(n), o = s ? [r].concat(r.visualViewport || [], eu(n) ? n : []) : n, a = e.concat(o);
        return s ? a : a.concat(ed(t5(o)))
    }

    function ep(t) {
        return Object.assign({}, t, {left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height})
    }

    function ef(t, e) {
        var i, n, s, r, o, a, l, c, h, u, d, p, f, m, g, y, v, b, _;
        return e === tx ? ep((n = tz(i = t), s = t7(i), r = n.visualViewport, o = s.clientWidth, a = s.clientHeight, l = 0, c = 0, r && (o = r.width, a = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (l = r.offsetLeft, c = r.offsetTop)), {width: o, height: a, x: l + eh(i), y: c})) : tH(e) ? ((u = tV(h = e)).top = u.top + h.clientTop, u.left = u.left + h.clientLeft, u.bottom = u.top + h.clientHeight, u.right = u.left + h.clientWidth, u.width = h.clientWidth, u.height = h.clientHeight, u.x = u.left, u.y = u.top, u) : ep((d = t7(t), f = t7(d), m = ec(d), g = null == (p = d.ownerDocument) ? void 0 : p.body, y = tW(f.scrollWidth, f.clientWidth, g ? g.scrollWidth : 0, g ? g.clientWidth : 0), v = tW(f.scrollHeight, f.clientHeight, g ? g.scrollHeight : 0, g ? g.clientHeight : 0), b = -m.scrollLeft + eh(d), _ = -m.scrollTop, "rtl" === t4(g || f).direction && (b += tW(f.clientWidth, g ? g.clientWidth : 0) - y), {width: y, height: v, x: b, y: _}))
    }

    function em(t) {
        var e, i = t.reference, n = t.element, s = t.placement, r = s ? t1(s) : null, o = s ? tJ(s) : null, a = i.x + i.width / 2 - n.width / 2, l = i.y + i.height / 2 - n.height / 2;
        switch (r) {
            case tg:
                e = {x: a, y: i.y - n.height};
                break;
            case ty:
                e = {x: a, y: i.y + i.height};
                break;
            case tv:
                e = {x: i.x + i.width, y: l};
                break;
            case t$:
                e = {x: i.x - n.width, y: l};
                break;
            default:
                e = {x: i.x, y: i.y}
        }
        var c = r ? tX(r) : null;
        if (null != c) {
            var h = "y" === c ? "height" : "width";
            switch (o) {
                case t_:
                    e[c] = e[c] - (i[h] / 2 - n[h] / 2);
                    break;
                case"end":
                    e[c] = e[c] + (i[h] / 2 - n[h] / 2)
            }
        }
        return e
    }

    function eg(t, e) {
        void 0 === e && (e = {});
        var i, n, s, r, o, a, l, c, h, u = e, d = u.placement, p = void 0 === d ? t.placement : d, f = u.boundary, m = u.rootBoundary, g = u.elementContext, y = void 0 === g ? tk : g, v = u.altBoundary, b = u.padding, _ = void 0 === b ? 0 : b, w = tQ("number" != typeof _ ? _ : tZ(_, tb)), x = t.rects.popper, k = t.elements[void 0 !== v && v ? y === tk ? tD : tk : y], D = (i = tH(k) ? k : k.contextElement || t7(t.elements.popper), n = void 0 === f ? tw : f, s = void 0 === m ? tx : m, c = (l = [].concat("clippingParents" === n ? (r = i, o = ed(t5(r)), a = ["absolute", "fixed"].indexOf(t4(r).position) >= 0 && tN(r) ? t6(r) : r, tH(a) ? o.filter(function (t) {
            return tH(t) && t3(t, a) && "body" !== tY(t)
        }) : []) : [].concat(n), [s]))[0], (h = l.reduce(function (t, e) {
            var n = ef(i, e);
            return t.top = tW(n.top, t.top), t.right = tB(n.right, t.right), t.bottom = tB(n.bottom, t.bottom), t.left = tW(n.left, t.left), t
        }, ef(i, c))).width = h.right - h.left, h.height = h.bottom - h.top, h.x = h.left, h.y = h.top, h), C = tV(t.elements.reference), S = em({reference: C, element: x, strategy: "absolute", placement: p}), T = ep(Object.assign({}, x, S)), E = y === tk ? T : C, A = {top: D.top - E.top + w.top, bottom: E.bottom - D.bottom + w.bottom, left: D.left - E.left + w.left, right: E.right - D.right + w.right}, P = t.modifiersData.offset;
        if (y === tk && P) {
            var L = P[p];
            Object.keys(A).forEach(function (t) {
                var e = [tv, ty].indexOf(t) >= 0 ? 1 : -1, i = [tg, ty].indexOf(t) >= 0 ? "y" : "x";
                A[t] += L[i] * e
            })
        }
        return A
    }

    let ey = {
        name: "flip", enabled: !0, phase: "main", fn: function (t) {
            var e = t.state, i = t.options, n = t.name;
            if (!e.modifiersData[n]._skip) {
                for (var s = i.mainAxis, r = void 0 === s || s, o = i.altAxis, a = void 0 === o || o, l = i.fallbackPlacements, c = i.padding, h = i.boundary, u = i.rootBoundary, d = i.altBoundary, p = i.flipVariations, f = void 0 === p || p, m = i.allowedAutoPlacements, g = e.options.placement, y = t1(g), v = l || (y !== g && f ? function (t) {
                    if (t1(t) === t8) return [];
                    var e = eo(t);
                    return [el(t), e, el(e)]
                }(g) : [eo(g)]), b = [g].concat(v).reduce(function (t, i) {
                    var n, s, r, o, a, l, d, p, g, y, v, b, _, w;
                    return t.concat(t1(i) === t8 ? (n = e, s = {placement: i, boundary: h, rootBoundary: u, padding: c, flipVariations: f, allowedAutoPlacements: m}, o = (r = s).placement, a = r.boundary, l = r.rootBoundary, d = r.padding, p = r.flipVariations, y = void 0 === (g = r.allowedAutoPlacements) ? tS : g, 0 === (_ = (b = (v = tJ(o)) ? p ? tC : tC.filter(function (t) {
                        return tJ(t) === v
                    }) : tb).filter(function (t) {
                        return y.indexOf(t) >= 0
                    })).length && (_ = b), Object.keys(w = _.reduce(function (t, e) {
                        return t[e] = eg(n, {placement: e, boundary: a, rootBoundary: l, padding: d})[t1(e)], t
                    }, {})).sort(function (t, e) {
                        return w[t] - w[e]
                    })) : i)
                }, []), _ = e.rects.reference, w = e.rects.popper, x = new Map, k = !0, D = b[0], C = 0; C < b.length; C++) {
                    var S = b[C], T = t1(S), E = tJ(S) === t_, A = [tg, ty].indexOf(T) >= 0, P = A ? "width" : "height", L = eg(e, {placement: S, boundary: h, rootBoundary: u, altBoundary: d, padding: c}), M = A ? E ? tv : t$ : E ? ty : tg;
                    _[P] > w[P] && (M = eo(M));
                    var O = eo(M), I = [];
                    if (r && I.push(L[T] <= 0), a && I.push(L[M] <= 0, L[O] <= 0), I.every(function (t) {
                        return t
                    })) {
                        D = S, k = !1;
                        break
                    }
                    x.set(S, I)
                }
                if (k) for (var Y = function (t) {
                    var e = b.find(function (e) {
                        var i = x.get(e);
                        if (i) return i.slice(0, t).every(function (t) {
                            return t
                        })
                    });
                    if (e) return D = e, "break"
                }, z = f ? 3 : 1; z > 0 && "break" !== Y(z); z--) ;
                e.placement !== D && (e.modifiersData[n]._skip = !0, e.placement = D, e.reset = !0)
            }
        }, requiresIfExists: ["offset"], data: {_skip: !1}
    };

    function ev(t, e, i) {
        return void 0 === i && (i = {x: 0, y: 0}), {top: t.top - e.height - i.y, right: t.right - e.width + i.x, bottom: t.bottom - e.height + i.y, left: t.left - e.width - i.x}
    }

    function e$(t) {
        return [tg, tv, ty, t$].some(function (e) {
            return t[e] >= 0
        })
    }

    let e8 = {
        name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function (t) {
            var e = t.state, i = t.name, n = e.rects.reference, s = e.rects.popper, r = e.modifiersData.preventOverflow, o = eg(e, {elementContext: "reference"}), a = eg(e, {altBoundary: !0}), l = ev(o, n), c = ev(a, s, r), h = e$(l), u = e$(c);
            e.modifiersData[i] = {referenceClippingOffsets: l, popperEscapeOffsets: c, isReferenceHidden: h, hasPopperEscaped: u}, e.attributes.popper = Object.assign({}, e.attributes.popper, {"data-popper-reference-hidden": h, "data-popper-escaped": u})
        }
    }, eb = {
        name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function (t) {
            var e = t.state, i = t.options, n = t.name, s = i.offset, r = void 0 === s ? [0, 0] : s, o = tS.reduce(function (t, i) {
                var n, s, o, a, l, c, h, u;
                return t[i] = (n = i, s = e.rects, o = r, l = [t$, tg].indexOf(a = t1(n)) >= 0 ? -1 : 1, h = (c = "function" == typeof o ? o(Object.assign({}, s, {placement: n})) : o)[0], u = c[1], h = h || 0, u = (u || 0) * l, [t$, tv].indexOf(a) >= 0 ? {x: u, y: h} : {x: h, y: u}), t
            }, {}), a = o[e.placement], l = a.x, c = a.y;
            null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = o
        }
    }, e_ = {
        name: "popperOffsets", enabled: !0, phase: "read", fn: function (t) {
            var e = t.state, i = t.name;
            e.modifiersData[i] = em({reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement})
        }, data: {}
    }, ew = {
        name: "preventOverflow", enabled: !0, phase: "main", fn: function (t) {
            var e = t.state, i = t.options, n = t.name, s = i.mainAxis, r = i.altAxis, o = i.boundary, a = i.rootBoundary, l = i.altBoundary, c = i.padding, h = i.tether, u = void 0 === h || h, d = i.tetherOffset, p = void 0 === d ? 0 : d, f = eg(e, {boundary: o, rootBoundary: a, padding: c, altBoundary: l}), m = t1(e.placement), g = tJ(e.placement), y = !g, v = tX(m), b = "x" === v ? "y" : "x", _ = e.modifiersData.popperOffsets, w = e.rects.reference, x = e.rects.popper, k = "function" == typeof p ? p(Object.assign({}, e.rects, {placement: e.placement})) : p, D = "number" == typeof k ? {mainAxis: k, altAxis: k} : Object.assign({mainAxis: 0, altAxis: 0}, k), C = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, S = {x: 0, y: 0};
            if (_) {
                if (void 0 === s || s) {
                    var T, E = "y" === v ? tg : t$, A = "y" === v ? ty : tv, P = "y" === v ? "height" : "width", L = _[v], M = L + f[E], O = L - f[A], I = u ? -x[P] / 2 : 0, Y = g === t_ ? w[P] : x[P], z = g === t_ ? -x[P] : -w[P], H = e.elements.arrow, N = u && H ? t2(H) : {width: 0, height: 0}, j = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {top: 0, right: 0, bottom: 0, left: 0}, R = j[E], W = j[A], B = tG(0, w[P], N[P]), F = y ? w[P] / 2 - I - B - R - D.mainAxis : Y - B - R - D.mainAxis, V = y ? -w[P] / 2 + I + B + W + D.mainAxis : z + B + W + D.mainAxis, q = e.elements.arrow && t6(e.elements.arrow), U = q ? "y" === v ? q.clientTop || 0 : q.clientLeft || 0 : 0, X = null != (T = null == C ? void 0 : C[v]) ? T : 0, G = tG(u ? tB(M, L + F - X - U) : M, L, u ? tW(O, L + V - X) : O);
                    _[v] = G, S[v] = G - L
                }
                if (void 0 !== r && r) {
                    var Q, Z, K, J, tt, te = _[b], ti = "y" === b ? "height" : "width", tn = te + f["x" === v ? tg : t$], ts = te - f["x" === v ? ty : tv], tr = -1 !== [tg, t$].indexOf(m), to = null != (tt = null == C ? void 0 : C[b]) ? tt : 0, ta = tr ? tn : te - w[ti] - x[ti] - to + D.altAxis, tl = tr ? te + w[ti] + x[ti] - to - D.altAxis : ts, tc = u && tr ? (Q = ta, Z = te, K = tl, (J = tG(Q, Z, K)) > K ? K : J) : tG(u ? ta : tn, te, u ? tl : ts);
                    _[b] = tc, S[b] = tc - te
                }
                e.modifiersData[n] = S
            }
        }, requiresIfExists: ["offset"]
    };
    var ex = {placement: "bottom", modifiers: [], strategy: "absolute"};

    function ek() {
        for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return !e.some(function (t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        })
    }

    function eD(t) {
        void 0 === t && (t = {});
        var e = t, i = e.defaultModifiers, n = void 0 === i ? [] : i, s = e.defaultOptions, r = void 0 === s ? ex : s;
        return function (t, e, i) {
            void 0 === i && (i = r);
            var s, o, a = {placement: "bottom", orderedModifiers: [], options: Object.assign({}, ex, r), modifiersData: {}, elements: {reference: t, popper: e}, attributes: {}, styles: {}}, l = [], c = !1, h = {
                state: a, setOptions: function (i) {
                    var s, o, c, d, p, f, m = "function" == typeof i ? i(a.options) : i;
                    u(), a.options = Object.assign({}, r, a.options, m), a.scrollParents = {reference: tH(t) ? ed(t) : t.contextElement ? ed(t.contextElement) : [], popper: ed(e)};
                    var g, y, v = (f = (o = s = Object.keys(y = (g = [].concat(n, a.options.modifiers)).reduce(function (t, e) {
                        var i = t[e.name];
                        return t[e.name] = i ? Object.assign({}, i, e, {options: Object.assign({}, i.options, e.options), data: Object.assign({}, i.data, e.data)}) : e, t
                    }, {})).map(function (t) {
                        return y[t]
                    }), c = new Map, d = new Set, p = [], o.forEach(function (t) {
                        c.set(t.name, t)
                    }), o.forEach(function (t) {
                        d.has(t.name) || function t(e) {
                            d.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach(function (e) {
                                if (!d.has(e)) {
                                    var i = c.get(e);
                                    i && t(i)
                                }
                            }), p.push(e)
                        }(t)
                    }), p), t9.reduce(function (t, e) {
                        return t.concat(f.filter(function (t) {
                            return t.phase === e
                        }))
                    }, []));
                    return a.orderedModifiers = v.filter(function (t) {
                        return t.enabled
                    }), a.orderedModifiers.forEach(function (t) {
                        var e = t.name, i = t.options, n = t.effect;
                        if ("function" == typeof n) {
                            var s = n({state: a, name: e, instance: h, options: void 0 === i ? {} : i});
                            l.push(s || function () {
                            })
                        }
                    }), h.update()
                }, forceUpdate: function () {
                    if (!c) {
                        var t, e, i, n, s, r, o, l, u, d, p, f, m, g, y, v = a.elements, b = v.reference, _ = v.popper;
                        if (ek(b, _)) {
                            a.rects = {reference: (t = b, e = t6(_), i = "fixed" === a.options.strategy, d = tN(e), p = tN(e) && (r = tF((s = (n = e).getBoundingClientRect()).width) / n.offsetWidth || 1, o = tF(s.height) / n.offsetHeight || 1, 1 !== r || 1 !== o), f = t7(e), m = tV(t, p), g = {scrollLeft: 0, scrollTop: 0}, y = {x: 0, y: 0}, (d || !d && !i) && (("body" !== tY(e) || eu(f)) && (g = (l = e) !== tz(l) && tN(l) ? {scrollLeft: (u = l).scrollLeft, scrollTop: u.scrollTop} : ec(l)), tN(e) ? ((y = tV(e, !0)).x += e.clientLeft, y.y += e.clientTop) : f && (y.x = eh(f))), {x: m.left + g.scrollLeft - y.x, y: m.top + g.scrollTop - y.y, width: m.width, height: m.height}), popper: t2(_)}, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function (t) {
                                return a.modifiersData[t.name] = Object.assign({}, t.data)
                            });
                            for (var w = 0; w < a.orderedModifiers.length; w++) if (!0 !== a.reset) {
                                var x = a.orderedModifiers[w], k = x.fn, D = x.options, C = void 0 === D ? {} : D, S = x.name;
                                "function" == typeof k && (a = k({state: a, options: C, name: S, instance: h}) || a)
                            } else a.reset = !1, w = -1
                        }
                    }
                }, update: (s = function () {
                    return new Promise(function (t) {
                        h.forceUpdate(), t(a)
                    })
                }, function () {
                    return o || (o = new Promise(function (t) {
                        Promise.resolve().then(function () {
                            o = void 0, t(s())
                        })
                    })), o
                }), destroy: function () {
                    u(), c = !0
                }
            };
            if (!ek(t, e)) return h;

            function u() {
                l.forEach(function (t) {
                    return t()
                }), l = []
            }

            return h.setOptions(i).then(function (t) {
                !c && i.onFirstUpdate && i.onFirstUpdate(t)
            }), h
        }
    }

    var eC = eD(), eS = eD({defaultModifiers: [es, e_, ei, tR]}), eT = eD({defaultModifiers: [es, e_, ei, tR, eb, ey, ew, tK, e8]});
    let eE = Object.freeze(Object.defineProperty({__proto__: null, popperGenerator: eD, detectOverflow: eg, createPopperBase: eC, createPopper: eT, createPopperLite: eS, top: tg, bottom: ty, right: tv, left: t$, auto: t8, basePlacements: tb, start: t_, end: "end", clippingParents: tw, viewport: tx, popper: tk, reference: tD, variationPlacements: tC, placements: tS, beforeRead: tT, read: tE, afterRead: tA, beforeMain: tP, main: tL, afterMain: tM, beforeWrite: t0, write: tO, afterWrite: tI, modifierPhases: t9, applyStyles: tR, arrow: tK, computeStyles: ei, eventListeners: es, flip: ey, hide: e8, offset: eb, popperOffsets: e_, preventOverflow: ew}, Symbol.toStringTag, {value: "Module"})), eA = "dropdown", eP = "ArrowDown", eL = "click.bs.dropdown.data-api", eM = "keydown.bs.dropdown.data-api", e0 = "show", eO = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', eI = `${eO}.show`, e9 = ".dropdown-menu", eY = f() ? "top-end" : "top-start", ez = f() ? "top-start" : "top-end",
        eH = f() ? "bottom-end" : "bottom-start", eN = f() ? "bottom-start" : "bottom-end", ej = f() ? "left-start" : "right-start", eR = f() ? "right-start" : "left-start", e1 = {autoClose: !0, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle"}, eW = {autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)"};

    class eB extends B {
        constructor(t, e) {
            super(t, e), this._popper = null, this._parent = this._element.parentNode, this._menu = X.findOne(e9, this._parent), this._inNavbar = this._detectNavbar()
        }

        static get Default() {
            return e1
        }

        static get DefaultType() {
            return eW
        }

        static get NAME() {
            return eA
        }

        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }

        show() {
            if (l(this._element) || this._isShown()) return;
            let t = {relatedTarget: this._element};
            if (!I.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
                if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) for (let e of [].concat(...document.body.children)) I.on(e, "mouseover", h);
                this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(e0), this._element.classList.add(e0), I.trigger(this._element, "shown.bs.dropdown", t)
            }
        }

        hide() {
            if (l(this._element) || !this._isShown()) return;
            let t = {relatedTarget: this._element};
            this._completeHide(t)
        }

        dispose() {
            this._popper && this._popper.destroy(), super.dispose()
        }

        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
        }

        _completeHide(t) {
            if (!I.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented) {
                if ("ontouchstart" in document.documentElement) for (let e of [].concat(...document.body.children)) I.off(e, "mouseover", h);
                this._popper && this._popper.destroy(), this._menu.classList.remove(e0), this._element.classList.remove(e0), this._element.setAttribute("aria-expanded", "false"), R.removeDataAttribute(this._menu, "popper"), I.trigger(this._element, "hidden.bs.dropdown", t)
            }
        }

        _getConfig(t) {
            if ("object" == typeof (t = super._getConfig(t)).reference && !r(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw TypeError(`${eA.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t
        }

        _createPopper() {
            if (void 0 === eE) throw TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let t = this._element;
            "parent" === this._config.reference ? t = this._parent : r(this._config.reference) ? t = o(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
            let e = this._getPopperConfig();
            this._popper = eT(t, this._menu, e)
        }

        _isShown() {
            return this._menu.classList.contains(e0)
        }

        _getPlacement() {
            let t = this._parent;
            if (t.classList.contains("dropend")) return ej;
            if (t.classList.contains("dropstart")) return eR;
            if (t.classList.contains("dropup-center")) return "top";
            if (t.classList.contains("dropdown-center")) return "bottom";
            let e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? ez : eY : e ? eN : eH
        }

        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }

        _getOffset() {
            let {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
        }

        _getPopperConfig() {
            let t = {placement: this._getPlacement(), modifiers: [{name: "preventOverflow", options: {boundary: this._config.boundary}}, {name: "offset", options: {offset: this._getOffset()}}]};
            return (this._inNavbar || "static" === this._config.display) && (R.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{name: "applyStyles", enabled: !1}]), {...t, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig}
        }

        _selectMenuItem({key: t, target: e}) {
            let i = X.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(t => a(t));
            i.length && v(i, e, t === eP, !i.includes(e)).focus()
        }

        static jQueryInterface(t) {
            return this.each(function () {
                let e = eB.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }

        static clearMenus(t) {
            if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
            let e = X.find(eI);
            for (let i of e) {
                let n = eB.getInstance(i);
                if (!n || !1 === n._config.autoClose) continue;
                let s = t.composedPath(), r = s.includes(n._menu);
                if (s.includes(n._element) || "inside" === n._config.autoClose && !r || "outside" === n._config.autoClose && r || n._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                let o = {relatedTarget: n._element};
                "click" === t.type && (o.clickEvent = t), n._completeHide(o)
            }
        }

        static dataApiKeydownHandler(t) {
            let e = /input|textarea/i.test(t.target.tagName), i = "Escape" === t.key, n = ["ArrowUp", eP].includes(t.key);
            if (!n && !i || e && !i) return;
            t.preventDefault();
            let s = X.findOne(eO, t.delegateTarget.parentNode), r = eB.getOrCreateInstance(s);
            if (n) return t.stopPropagation(), r.show(), void r._selectMenuItem(t);
            r._isShown() && (t.stopPropagation(), r.hide(), s.focus())
        }
    }

    I.on(document, eM, eO, eB.dataApiKeydownHandler), I.on(document, eM, e9, eB.dataApiKeydownHandler), I.on(document, eL, eB.clearMenus), I.on(document, "keyup.bs.dropdown.data-api", eB.clearMenus), I.on(document, eL, eO, function (t) {
        t.preventDefault(), eB.getOrCreateInstance(this).toggle()
    }), m(eB);
    let eF = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", eV = ".sticky-top", e2 = "padding-right", e3 = "margin-right";

    class e4 {
        constructor() {
            this._element = document.body
        }

        getWidth() {
            let t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        }

        hide() {
            let t = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, e2, e => e + t), this._setElementAttributes(eF, e2, e => e + t), this._setElementAttributes(eV, e3, e => e - t)
        }

        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, e2), this._resetElementAttributes(eF, e2), this._resetElementAttributes(eV, e3)
        }

        isOverflowing() {
            return this.getWidth() > 0
        }

        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
        }

        _setElementAttributes(t, e, i) {
            let n = this.getWidth();
            this._applyManipulationCallback(t, t => {
                if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
                this._saveInitialAttribute(t, e);
                let s = window.getComputedStyle(t).getPropertyValue(e);
                t.style.setProperty(e, `${i(Number.parseFloat(s))}px`)
            })
        }

        _saveInitialAttribute(t, e) {
            let i = t.style.getPropertyValue(e);
            i && R.setDataAttribute(t, e, i)
        }

        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, t => {
                let i = R.getDataAttribute(t, e);
                null !== i ? (R.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e)
            })
        }

        _applyManipulationCallback(t, e) {
            if (r(t)) e(t); else for (let i of X.find(t, this._element)) e(i)
        }
    }

    let eq = "show", e7 = "mousedown.bs.backdrop", e5 = {className: "modal-backdrop", clickCallback: null, isAnimated: !1, isVisible: !0, rootElement: "body"}, eU = {className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)"};

    class e6 extends W {
        constructor(t) {
            super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null
        }

        static get Default() {
            return e5
        }

        static get DefaultType() {
            return eU
        }

        static get NAME() {
            return "backdrop"
        }

        show(t) {
            if (!this._config.isVisible) return void g(t);
            this._append();
            let e = this._getElement();
            this._config.isAnimated && u(e), e.classList.add(eq), this._emulateAnimation(() => {
                g(t)
            })
        }

        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove(eq), this._emulateAnimation(() => {
                this.dispose(), g(t)
            })) : g(t)
        }

        dispose() {
            this._isAppended && (I.off(this._element, e7), this._element.remove(), this._isAppended = !1)
        }

        _getElement() {
            if (!this._element) {
                let t = document.createElement("div");
                t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t
            }
            return this._element
        }

        _configAfterMerge(t) {
            return t.rootElement = o(t.rootElement), t
        }

        _append() {
            if (this._isAppended) return;
            let t = this._getElement();
            this._config.rootElement.append(t), I.on(t, e7, () => {
                g(this._config.clickCallback)
            }), this._isAppended = !0
        }

        _emulateAnimation(t) {
            y(t, this._getElement(), this._config.isAnimated)
        }
    }

    let eX = ".bs.focustrap", eG = "backward", eQ = {autofocus: !0, trapElement: null}, eZ = {autofocus: "boolean", trapElement: "element"};

    class eK extends W {
        constructor(t) {
            super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null
        }

        static get Default() {
            return eQ
        }

        static get DefaultType() {
            return eZ
        }

        static get NAME() {
            return "focustrap"
        }

        activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(), I.off(document, eX), I.on(document, "focusin.bs.focustrap", t => this._handleFocusin(t)), I.on(document, "keydown.tab.bs.focustrap", t => this._handleKeydown(t)), this._isActive = !0)
        }

        deactivate() {
            this._isActive && (this._isActive = !1, I.off(document, eX))
        }

        _handleFocusin(t) {
            let {trapElement: e} = this._config;
            if (t.target === document || t.target === e || e.contains(t.target)) return;
            let i = X.focusableChildren(e);
            0 === i.length ? e.focus() : this._lastTabNavDirection === eG ? i[i.length - 1].focus() : i[0].focus()
        }

        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? eG : "forward")
        }
    }

    let eJ = "hidden.bs.modal", it = "show.bs.modal", ie = "modal-open", ii = "show", is = "modal-static", ir = {backdrop: !0, focus: !0, keyboard: !0}, io = {backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean"};

    class ia extends B {
        constructor(t, e) {
            super(t, e), this._dialog = X.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new e4, this._addEventListeners()
        }

        static get Default() {
            return ir
        }

        static get DefaultType() {
            return io
        }

        static get NAME() {
            return "modal"
        }

        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }

        show(t) {
            this._isShown || this._isTransitioning || I.trigger(this._element, it, {relatedTarget: t}).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(ie), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)))
        }

        hide() {
            this._isShown && !this._isTransitioning && (I.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(ii), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())))
        }

        dispose() {
            for (let t of [window, this._dialog]) I.off(t, ".bs.modal");
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }

        handleUpdate() {
            this._adjustDialog()
        }

        _initializeBackDrop() {
            return new e6({isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated()})
        }

        _initializeFocusTrap() {
            return new eK({trapElement: this._element})
        }

        _showElement(t) {
            document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
            let e = X.findOne(".modal-body", this._dialog);
            e && (e.scrollTop = 0), u(this._element), this._element.classList.add(ii), this._queueCallback(() => {
                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, I.trigger(this._element, "shown.bs.modal", {relatedTarget: t})
            }, this._dialog, this._isAnimated())
        }

        _addEventListeners() {
            I.on(this._element, "keydown.dismiss.bs.modal", t => {
                if ("Escape" === t.key) return this._config.keyboard ? (t.preventDefault(), void this.hide()) : void this._triggerBackdropTransition()
            }), I.on(window, "resize.bs.modal", () => {
                this._isShown && !this._isTransitioning && this._adjustDialog()
            }), I.on(this._element, "mousedown.dismiss.bs.modal", t => {
                t.target === t.currentTarget && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition())
            })
        }

        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
                document.body.classList.remove(ie), this._resetAdjustments(), this._scrollBar.reset(), I.trigger(this._element, eJ)
            })
        }

        _isAnimated() {
            return this._element.classList.contains("fade")
        }

        _triggerBackdropTransition() {
            if (I.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
            let t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._element.style.overflowY;
            "hidden" === e || this._element.classList.contains(is) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(is), this._queueCallback(() => {
                this._element.classList.remove(is), this._queueCallback(() => {
                    this._element.style.overflowY = e
                }, this._dialog)
            }, this._dialog), this._element.focus())
        }

        _adjustDialog() {
            let t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(), i = e > 0;
            if (i && !t) {
                let n = f() ? "paddingLeft" : "paddingRight";
                this._element.style[n] = `${e}px`
            }
            if (!i && t) {
                let s = f() ? "paddingRight" : "paddingLeft";
                this._element.style[s] = `${e}px`
            }
        }

        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }

        static jQueryInterface(t, e) {
            return this.each(function () {
                let i = ia.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw TypeError(`No method named "${t}"`);
                    i[t](e)
                }
            })
        }
    }

    I.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
        let e = n(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), I.one(e, it, t => {
            t.defaultPrevented || I.one(e, eJ, () => {
                a(this) && this.focus()
            })
        });
        let i = X.findOne(".modal.show");
        i && ia.getInstance(i).hide(), ia.getOrCreateInstance(e).toggle(this)
    }), F(ia), m(ia);
    let il = "show", ic = "showing", ih = "hiding", iu = ".offcanvas.show", id = "hidePrevented.bs.offcanvas", ip = "hidden.bs.offcanvas", im = {backdrop: !0, keyboard: !0, scroll: !1}, ig = {backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean"};

    class iy extends B {
        constructor(t, e) {
            super(t, e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
        }

        static get Default() {
            return im
        }

        static get DefaultType() {
            return ig
        }

        static get NAME() {
            return "offcanvas"
        }

        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }

        show(t) {
            this._isShown || I.trigger(this._element, "show.bs.offcanvas", {relatedTarget: t}).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || (new e4).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(ic), this._queueCallback(() => {
                this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(il), this._element.classList.remove(ic), I.trigger(this._element, "shown.bs.offcanvas", {relatedTarget: t})
            }, this._element, !0))
        }

        hide() {
            this._isShown && (I.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(ih), this._backdrop.hide(), this._queueCallback(() => {
                this._element.classList.remove(il, ih), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new e4).reset(), I.trigger(this._element, ip)
            }, this._element, !0)))
        }

        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }

        _initializeBackDrop() {
            let t = Boolean(this._config.backdrop);
            return new e6({
                className: "offcanvas-backdrop", isVisible: t, isAnimated: !0, rootElement: this._element.parentNode, clickCallback: t ? () => {
                    "static" !== this._config.backdrop ? this.hide() : I.trigger(this._element, id)
                } : null
            })
        }

        _initializeFocusTrap() {
            return new eK({trapElement: this._element})
        }

        _addEventListeners() {
            I.on(this._element, "keydown.dismiss.bs.offcanvas", t => {
                "Escape" === t.key && (this._config.keyboard ? this.hide() : I.trigger(this._element, id))
            })
        }

        static jQueryInterface(t) {
            return this.each(function () {
                let e = iy.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            })
        }
    }

    I.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (t) {
        let e = n(this);
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this)) return;
        I.one(e, ip, () => {
            a(this) && this.focus()
        });
        let i = X.findOne(iu);
        i && i !== e && iy.getInstance(i).hide(), iy.getOrCreateInstance(e).toggle(this)
    }), I.on(window, "load.bs.offcanvas.data-api", () => {
        for (let t of X.find(iu)) iy.getOrCreateInstance(t).show()
    }), I.on(window, "resize.bs.offcanvas", () => {
        for (let t of X.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(t).position && iy.getOrCreateInstance(t).hide()
    }), F(iy), m(iy);
    let iv = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), i$ = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, i8 = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, ib = (t, e) => {
        let i = t.nodeName.toLowerCase();
        return e.includes(i) ? !iv.has(i) || Boolean(i$.test(t.nodeValue) || i8.test(t.nodeValue)) : e.filter(t => t instanceof RegExp).some(t => t.test(i))
    }, i_ = {"*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: []}, iw = {allowList: i_, content: {}, extraClass: "", html: !1, sanitize: !0, sanitizeFn: null, template: "<div></div>"}, ix = {allowList: "object", content: "object", extraClass: "(string|function)", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", template: "string"}, ik = {entry: "(string|element|function|null)", selector: "(string|element)"};

    class iD extends W {
        constructor(t) {
            super(), this._config = this._getConfig(t)
        }

        static get Default() {
            return iw
        }

        static get DefaultType() {
            return ix
        }

        static get NAME() {
            return "TemplateFactory"
        }

        getContent() {
            return Object.values(this._config.content).map(t => this._resolvePossibleFunction(t)).filter(Boolean)
        }

        hasContent() {
            return this.getContent().length > 0
        }

        changeContent(t) {
            return this._checkContent(t), this._config.content = {...this._config.content, ...t}, this
        }

        toHtml() {
            let t = document.createElement("div");
            for (let [e, i] of (t.innerHTML = this._maybeSanitize(this._config.template), Object.entries(this._config.content))) this._setContent(t, i, e);
            let n = t.children[0], s = this._resolvePossibleFunction(this._config.extraClass);
            return s && n.classList.add(...s.split(" ")), n
        }

        _typeCheckConfig(t) {
            super._typeCheckConfig(t), this._checkContent(t.content)
        }

        _checkContent(t) {
            for (let [e, i] of Object.entries(t)) super._typeCheckConfig({selector: e, entry: i}, ik)
        }

        _setContent(t, e, i) {
            let n = X.findOne(i, t);
            n && ((e = this._resolvePossibleFunction(e)) ? r(e) ? this._putElementInTemplate(o(e), n) : this._config.html ? n.innerHTML = this._maybeSanitize(e) : n.textContent = e : n.remove())
        }

        _maybeSanitize(t) {
            return this._config.sanitize ? function (t, e, i) {
                if (!t.length) return t;
                if (i && "function" == typeof i) return i(t);
                let n = (new window.DOMParser).parseFromString(t, "text/html"), s = [].concat(...n.body.querySelectorAll("*"));
                for (let r of s) {
                    let o = r.nodeName.toLowerCase();
                    if (!Object.keys(e).includes(o)) {
                        r.remove();
                        continue
                    }
                    let a = [].concat(...r.attributes), l = [].concat(e["*"] || [], e[o] || []);
                    for (let c of a) ib(c, l) || r.removeAttribute(c.nodeName)
                }
                return n.body.innerHTML
            }(t, this._config.allowList, this._config.sanitizeFn) : t
        }

        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t(this) : t
        }

        _putElementInTemplate(t, e) {
            if (this._config.html) return e.innerHTML = "", void e.append(t);
            e.textContent = t.textContent
        }
    }

    let iC = new Set(["sanitize", "allowList", "sanitizeFn"]), iS = "fade", iT = "show", iE = ".modal", iA = "hide.bs.modal", iP = "hover", iL = "focus", iM = {AUTO: "auto", TOP: "top", RIGHT: f() ? "left" : "right", BOTTOM: "bottom", LEFT: f() ? "right" : "left"}, i0 = {allowList: i_, animation: !0, boundary: "clippingParents", container: !1, customClass: "", delay: 0, fallbackPlacements: ["top", "right", "bottom", "left"], html: !1, offset: [0, 0], placement: "top", popperConfig: null, sanitize: !0, sanitizeFn: null, selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', title: "", trigger: "hover focus"},
        iO = {allowList: "object", animation: "boolean", boundary: "(string|element)", container: "(string|element|boolean)", customClass: "(string|function)", delay: "(number|object)", fallbackPlacements: "array", html: "boolean", offset: "(array|string|function)", placement: "(string|function)", popperConfig: "(null|object|function)", sanitize: "boolean", sanitizeFn: "(null|function)", selector: "(string|boolean)", template: "string", title: "(string|element|function)", trigger: "string"};

    class iI extends B {
        constructor(t, e) {
            if (void 0 === eE) throw TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t, e), this._isEnabled = !0, this._timeout = 0, this._isHovered = !1, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners()
        }

        static get Default() {
            return i0
        }

        static get DefaultType() {
            return iO
        }

        static get NAME() {
            return "tooltip"
        }

        enable() {
            this._isEnabled = !0
        }

        disable() {
            this._isEnabled = !1
        }

        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }

        toggle(t) {
            if (this._isEnabled) {
                if (t) {
                    let e = this._initializeOnDelegatedTarget(t);
                    return e._activeTrigger.click = !e._activeTrigger.click, void (e._isWithActiveTrigger() ? e._enter() : e._leave())
                }
                this._isShown() ? this._leave() : this._enter()
            }
        }

        dispose() {
            clearTimeout(this._timeout), I.off(this._element.closest(iE), iA, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose()
        }

        show() {
            if ("none" === this._element.style.display) throw Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled) return;
            let t = I.trigger(this._element, this.constructor.eventName("show")), e = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (t.defaultPrevented || !e) return;
            this.tip && (this.tip.remove(), this.tip = null);
            let i = this._getTipElement();
            this._element.setAttribute("aria-describedby", i.getAttribute("id"));
            let {container: n} = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), I.trigger(this._element, this.constructor.eventName("inserted"))), this._popper ? this._popper.update() : this._popper = this._createPopper(i), i.classList.add(iT), "ontouchstart" in document.documentElement) for (let s of [].concat(...document.body.children)) I.on(s, "mouseover", h);
            this._queueCallback(() => {
                let t = this._isHovered;
                this._isHovered = !1, I.trigger(this._element, this.constructor.eventName("shown")), t && this._leave()
            }, this.tip, this._isAnimated())
        }

        hide() {
            if (!this._isShown() || I.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) return;
            let t = this._getTipElement();
            if (t.classList.remove(iT), "ontouchstart" in document.documentElement) for (let e of [].concat(...document.body.children)) I.off(e, "mouseover", h);
            this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this._isHovered = !1, this._queueCallback(() => {
                this._isWithActiveTrigger() || (this._isHovered || t.remove(), this._element.removeAttribute("aria-describedby"), I.trigger(this._element, this.constructor.eventName("hidden")), this._disposePopper())
            }, this.tip, this._isAnimated())
        }

        update() {
            this._popper && this._popper.update()
        }

        _isWithContent() {
            return Boolean(this._getTitle())
        }

        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip
        }

        _createTipElement(t) {
            let e = this._getTemplateFactory(t).toHtml();
            if (!e) return null;
            e.classList.remove(iS, iT), e.classList.add(`bs-${this.constructor.NAME}-auto`);
            let i = (t => {
                do t += Math.floor(1e6 * Math.random()); while (document.getElementById(t));
                return t
            })(this.constructor.NAME).toString();
            return e.setAttribute("id", i), this._isAnimated() && e.classList.add(iS), e
        }

        setContent(t) {
            this._newContent = t, this._isShown() && (this._disposePopper(), this.show())
        }

        _getTemplateFactory(t) {
            return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new iD({...this._config, content: t, extraClass: this._resolvePossibleFunction(this._config.customClass)}), this._templateFactory
        }

        _getContentForTemplate() {
            return {".tooltip-inner": this._getTitle()}
        }

        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._config.originalTitle
        }

        _initializeOnDelegatedTarget(t) {
            return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
        }

        _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(iS)
        }

        _isShown() {
            return this.tip && this.tip.classList.contains(iT)
        }

        _createPopper(t) {
            let e = "function" == typeof this._config.placement ? this._config.placement.call(this, t, this._element) : this._config.placement, i = iM[e.toUpperCase()];
            return eT(this._element, t, this._getPopperConfig(i))
        }

        _getOffset() {
            let {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
        }

        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t.call(this._element) : t
        }

        _getPopperConfig(t) {
            let e = {
                placement: t, modifiers: [{name: "flip", options: {fallbackPlacements: this._config.fallbackPlacements}}, {name: "offset", options: {offset: this._getOffset()}}, {name: "preventOverflow", options: {boundary: this._config.boundary}}, {name: "arrow", options: {element: `.${this.constructor.NAME}-arrow`}}, {
                    name: "preSetPlacement", enabled: !0, phase: "beforeMain", fn: t => {
                        this._getTipElement().setAttribute("data-popper-placement", t.state.placement)
                    }
                }]
            };
            return {...e, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig}
        }

        _setListeners() {
            let t = this._config.trigger.split(" ");
            for (let e of t) if ("click" === e) I.on(this._element, this.constructor.eventName("click"), this._config.selector, t => this.toggle(t)); else if ("manual" !== e) {
                let i = e === iP ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), n = e === iP ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                I.on(this._element, i, this._config.selector, t => {
                    let e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusin" === t.type ? iL : iP] = !0, e._enter()
                }), I.on(this._element, n, this._config.selector, t => {
                    let e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusout" === t.type ? iL : iP] = e._element.contains(t.relatedTarget), e._leave()
                })
            }
            this._hideModalHandler = () => {
                this._element && this.hide()
            }, I.on(this._element.closest(iE), iA, this._hideModalHandler), this._config.selector ? this._config = {...this._config, trigger: "manual", selector: ""} : this._fixTitle()
        }

        _fixTitle() {
            let t = this._config.originalTitle;
            t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.removeAttribute("title"))
        }

        _enter() {
            this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(() => {
                this._isHovered && this.show()
            }, this._config.delay.show))
        }

        _leave() {
            this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(() => {
                this._isHovered || this.hide()
            }, this._config.delay.hide))
        }

        _setTimeout(t, e) {
            clearTimeout(this._timeout), this._timeout = setTimeout(t, e)
        }

        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0)
        }

        _getConfig(t) {
            let e = R.getDataAttributes(this._element);
            for (let i of Object.keys(e)) iC.has(i) && delete e[i];
            return t = {...e, ..."object" == typeof t && t ? t : {}}, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
        }

        _configAfterMerge(t) {
            return t.container = !1 === t.container ? document.body : o(t.container), "number" == typeof t.delay && (t.delay = {show: t.delay, hide: t.delay}), t.originalTitle = this._element.getAttribute("title") || "", "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t
        }

        _getDelegateConfig() {
            let t = {};
            for (let e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
            return t
        }

        _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null)
        }

        static jQueryInterface(t) {
            return this.each(function () {
                let e = iI.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
    }

    m(iI);
    let i9 = {...iI.Default, content: "", offset: [0, 8], placement: "right", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>', trigger: "click"}, iY = {...iI.DefaultType, content: "(null|string|element|function)"};

    class iz extends iI {
        static get Default() {
            return i9
        }

        static get DefaultType() {
            return iY
        }

        static get NAME() {
            return "popover"
        }

        _isWithContent() {
            return this._getTitle() || this._getContent()
        }

        _getContentForTemplate() {
            return {".popover-header": this._getTitle(), ".popover-body": this._getContent()}
        }

        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }

        static jQueryInterface(t) {
            return this.each(function () {
                let e = iz.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
    }

    m(iz);
    let iH = "click.bs.scrollspy", iN = "active", ij = "[href]", iR = {offset: null, rootMargin: "0px 0px -25%", smoothScroll: !1, target: null}, i1 = {offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element"};

    class iW extends B {
        constructor(t, e) {
            super(t, e), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {visibleEntryTop: 0, parentScrollTop: 0}, this.refresh()
        }

        static get Default() {
            return iR
        }

        static get DefaultType() {
            return i1
        }

        static get NAME() {
            return "scrollspy"
        }

        refresh() {
            for (let t of (this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver(), this._observableSections.values())) this._observer.observe(t)
        }

        dispose() {
            this._observer.disconnect(), super.dispose()
        }

        _configAfterMerge(t) {
            return t.target = o(t.target) || document.body, t
        }

        _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (I.off(this._config.target, iH), I.on(this._config.target, iH, ij, t => {
                let e = this._observableSections.get(t.target.hash);
                if (e) {
                    t.preventDefault();
                    let i = this._rootElement || window, n = e.offsetTop - this._element.offsetTop;
                    if (i.scrollTo) return void i.scrollTo({top: n, behavior: "smooth"});
                    i.scrollTop = n
                }
            }))
        }

        _getNewObserver() {
            let t = {root: this._rootElement, threshold: [.1, .5, 1], rootMargin: this._getRootMargin()};
            return new IntersectionObserver(t => this._observerCallback(t), t)
        }

        _observerCallback(t) {
            let e = t => this._targetLinks.get(`#${t.target.id}`), i = t => {
                this._previousScrollData.visibleEntryTop = t.target.offsetTop, this._process(e(t))
            }, n = (this._rootElement || document.documentElement).scrollTop, s = n >= this._previousScrollData.parentScrollTop;
            for (let r of (this._previousScrollData.parentScrollTop = n, t)) {
                if (!r.isIntersecting) {
                    this._activeTarget = null, this._clearActiveClass(e(r));
                    continue
                }
                let o = r.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (s && o) {
                    if (i(r), !n) return
                } else s || o || i(r)
            }
        }

        _getRootMargin() {
            return this._config.offset ? `${this._config.offset}px 0px -30%` : this._config.rootMargin
        }

        _initializeTargetsAndObservables() {
            this._targetLinks = new Map, this._observableSections = new Map;
            let t = X.find(ij, this._config.target);
            for (let e of t) {
                if (!e.hash || l(e)) continue;
                let i = X.findOne(e.hash, this._element);
                a(i) && (this._targetLinks.set(e.hash, e), this._observableSections.set(e.hash, i))
            }
        }

        _process(t) {
            this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(iN), this._activateParents(t), I.trigger(this._element, "activate.bs.scrollspy", {relatedTarget: t}))
        }

        _activateParents(t) {
            if (t.classList.contains("dropdown-item")) X.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(iN); else for (let e of X.parents(t, ".nav, .list-group")) for (let i of X.prev(e, ".nav-link, .nav-item > .nav-link, .list-group-item")) i.classList.add(iN)
        }

        _clearActiveClass(t) {
            t.classList.remove(iN);
            let e = X.find("[href].active", t);
            for (let i of e) i.classList.remove(iN)
        }

        static jQueryInterface(t) {
            return this.each(function () {
                let e = iW.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
    }

    I.on(window, "load.bs.scrollspy.data-api", () => {
        for (let t of X.find('[data-bs-spy="scroll"]')) iW.getOrCreateInstance(t)
    }), m(iW);
    let iB = "ArrowRight", iF = "ArrowDown", iV = "active", i2 = "fade", i3 = "show", i4 = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', iq = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${i4}`;

    class i7 extends B {
        constructor(t) {
            super(t), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), I.on(this._element, "keydown.bs.tab", t => this._keydown(t)))
        }

        static get NAME() {
            return "tab"
        }

        show() {
            let t = this._element;
            if (this._elemIsActive(t)) return;
            let e = this._getActiveElem(), i = e ? I.trigger(e, "hide.bs.tab", {relatedTarget: t}) : null;
            I.trigger(t, "show.bs.tab", {relatedTarget: e}).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e))
        }

        _activate(t, e) {
            t && (t.classList.add(iV), this._activate(n(t)), this._queueCallback(() => {
                "tab" === t.getAttribute("role") ? (t.focus(), t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), I.trigger(t, "shown.bs.tab", {relatedTarget: e})) : t.classList.add(i3)
            }, t, t.classList.contains(i2)))
        }

        _deactivate(t, e) {
            t && (t.classList.remove(iV), t.blur(), this._deactivate(n(t)), this._queueCallback(() => {
                "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), I.trigger(t, "hidden.bs.tab", {relatedTarget: e})) : t.classList.remove(i3)
            }, t, t.classList.contains(i2)))
        }

        _keydown(t) {
            if (!["ArrowLeft", iB, "ArrowUp", iF].includes(t.key)) return;
            t.stopPropagation(), t.preventDefault();
            let e = [iB, iF].includes(t.key), i = v(this._getChildren().filter(t => !l(t)), t.target, e, !0);
            i && i7.getOrCreateInstance(i).show()
        }

        _getChildren() {
            return X.find(iq, this._parent)
        }

        _getActiveElem() {
            return this._getChildren().find(t => this._elemIsActive(t)) || null
        }

        _setInitialAttributes(t, e) {
            for (let i of (this._setAttributeIfNotExists(t, "role", "tablist"), e)) this._setInitialAttributesOnChild(i)
        }

        _setInitialAttributesOnChild(t) {
            t = this._getInnerElement(t);
            let e = this._elemIsActive(t), i = this._getOuterElement(t);
            t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t)
        }

        _setInitialAttributesOnTargetPanel(t) {
            let e = n(t);
            e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `#${t.id}`))
        }

        _toggleDropDown(t, e) {
            let i = this._getOuterElement(t);
            if (!i.classList.contains("dropdown")) return;
            let n = (t, n) => {
                let s = X.findOne(t, i);
                s && s.classList.toggle(n, e)
            };
            n(".dropdown-toggle", iV), n(".dropdown-menu", i3), n(".dropdown-item", iV), i.setAttribute("aria-expanded", e)
        }

        _setAttributeIfNotExists(t, e, i) {
            t.hasAttribute(e) || t.setAttribute(e, i)
        }

        _elemIsActive(t) {
            return t.classList.contains(iV)
        }

        _getInnerElement(t) {
            return t.matches(iq) ? t : X.findOne(iq, t)
        }

        _getOuterElement(t) {
            return t.closest(".nav-item, .list-group-item") || t
        }

        static jQueryInterface(t) {
            return this.each(function () {
                let e = i7.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
    }

    I.on(document, "click.bs.tab", i4, function (t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this) || i7.getOrCreateInstance(this).show()
    }), I.on(window, "load.bs.tab", () => {
        for (let t of X.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]')) i7.getOrCreateInstance(t)
    }), m(i7);
    let i5 = "hide", iU = "show", i6 = "showing", iX = {animation: "boolean", autohide: "boolean", delay: "number"}, iG = {animation: !0, autohide: !0, delay: 5e3};

    class iQ extends B {
        constructor(t, e) {
            super(t, e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
        }

        static get Default() {
            return iG
        }

        static get DefaultType() {
            return iX
        }

        static get NAME() {
            return "toast"
        }

        show() {
            I.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(i5), u(this._element), this._element.classList.add(iU, i6), this._queueCallback(() => {
                this._element.classList.remove(i6), I.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
            }, this._element, this._config.animation))
        }

        hide() {
            this.isShown() && (I.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(i6), this._queueCallback(() => {
                this._element.classList.add(i5), this._element.classList.remove(i6, iU), I.trigger(this._element, "hidden.bs.toast")
            }, this._element, this._config.animation)))
        }

        dispose() {
            this._clearTimeout(), this.isShown() && this._element.classList.remove(iU), super.dispose()
        }

        isShown() {
            return this._element.classList.contains(iU)
        }

        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
                this.hide()
            }, this._config.delay)))
        }

        _onInteraction(t, e) {
            switch (t.type) {
                case"mouseover":
                case"mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case"focusin":
                case"focusout":
                    this._hasKeyboardInteraction = e
            }
            if (e) return void this._clearTimeout();
            let i = t.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide()
        }

        _setListeners() {
            I.on(this._element, "mouseover.bs.toast", t => this._onInteraction(t, !0)), I.on(this._element, "mouseout.bs.toast", t => this._onInteraction(t, !1)), I.on(this._element, "focusin.bs.toast", t => this._onInteraction(t, !0)), I.on(this._element, "focusout.bs.toast", t => this._onInteraction(t, !1))
        }

        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null
        }

        static jQueryInterface(t) {
            return this.each(function () {
                let e = iQ.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            })
        }
    }

    return F(iQ), m(iQ), {Alert: V, Button: U, Carousel: tl, Collapse: tm, Dropdown: eB, Modal: ia, Offcanvas: iy, Popover: iz, ScrollSpy: iW, Tab: i7, Toast: iQ, Tooltip: iI}
}), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).Headroom = e()
}(this, function () {
    "use strict";

    function t() {
        return "undefined" != typeof window
    }

    function e(t) {
        return t === Object(t) ? t : {down: t, up: t}
    }

    function i(t, n) {
        n = n || {}, Object.assign(this, i.options, n), this.classes = Object.assign({}, i.options.classes, n.classes), this.elem = t, this.tolerance = e(this.tolerance), this.offset = e(this.offset), this.initialised = !1, this.frozen = !1
    }

    return i.prototype = {
        constructor: i, init: function () {
            return i.cutsTheMustard && !this.initialised && (this.addClass("initial"), this.initialised = !0, setTimeout(function (t) {
                t.scrollTracker = function (t, e, i) {
                    var n, s, r, o, a, l, c, h, u = function () {
                        var t = !1;
                        try {
                            var e = {
                                get passive() {
                                    t = !0
                                }
                            };
                            window.addEventListener("test", e, e), window.removeEventListener("test", e, e)
                        } catch (i) {
                            t = !1
                        }
                        return t
                    }(), d = !1, p = (r = s = t) && r.document && 9 === r.document.nodeType ? (l = (a = (o = s).document).body, c = a.documentElement, {
                        scrollHeight: function () {
                            return Math.max(l.scrollHeight, c.scrollHeight, l.offsetHeight, c.offsetHeight, l.clientHeight, c.clientHeight)
                        }, height: function () {
                            return o.innerHeight || c.clientHeight || l.clientHeight
                        }, scrollY: function () {
                            return void 0 !== o.pageYOffset ? o.pageYOffset : (c || l.parentNode || l).scrollTop
                        }
                    }) : (h = s, {
                        scrollHeight: function () {
                            return Math.max(h.scrollHeight, h.offsetHeight, h.clientHeight)
                        }, height: function () {
                            return Math.max(h.offsetHeight, h.clientHeight)
                        }, scrollY: function () {
                            return h.scrollTop
                        }
                    }), f = p.scrollY(), m = {};

                    function g() {
                        var t = Math.round(p.scrollY()), n = p.height(), s = p.scrollHeight();
                        m.scrollY = t, m.lastScrollY = f, m.direction = t > f ? "down" : "up", m.distance = Math.abs(t - f), m.isOutOfBounds = t < 0 || t + n > s, m.top = t <= e.offset[m.direction], m.bottom = t + n >= s, m.toleranceExceeded = m.distance > e.tolerance[m.direction], i(m), f = t, d = !1
                    }

                    function y() {
                        d || (d = !0, n = requestAnimationFrame(g))
                    }

                    var v = !!u && {passive: !0, capture: !1};
                    return t.addEventListener("scroll", y, v), g(), {
                        destroy: function () {
                            cancelAnimationFrame(n), t.removeEventListener("scroll", y, v)
                        }
                    }
                }(t.scroller, {offset: t.offset, tolerance: t.tolerance}, t.update.bind(t))
            }, 100, this)), this
        }, destroy: function () {
            this.initialised = !1, Object.keys(this.classes).forEach(this.removeClass, this), this.scrollTracker.destroy()
        }, unpin: function () {
            (this.hasClass("pinned") || !this.hasClass("unpinned")) && (this.addClass("unpinned"), this.removeClass("pinned"), this.onUnpin && this.onUnpin.call(this))
        }, pin: function () {
            this.hasClass("unpinned") && (this.addClass("pinned"), this.removeClass("unpinned"), this.onPin && this.onPin.call(this))
        }, freeze: function () {
            this.frozen = !0, this.addClass("frozen")
        }, unfreeze: function () {
            this.frozen = !1, this.removeClass("frozen")
        }, top: function () {
            !this.hasClass("top") && (this.addClass("top"), this.removeClass("notTop"), this.onTop && this.onTop.call(this))
        }, notTop: function () {
            !this.hasClass("notTop") && (this.addClass("notTop"), this.removeClass("top"), this.onNotTop && this.onNotTop.call(this))
        }, bottom: function () {
            !this.hasClass("bottom") && (this.addClass("bottom"), this.removeClass("notBottom"), this.onBottom && this.onBottom.call(this))
        }, notBottom: function () {
            !this.hasClass("notBottom") && (this.addClass("notBottom"), this.removeClass("bottom"), this.onNotBottom && this.onNotBottom.call(this))
        }, shouldUnpin: function (t) {
            return "down" === t.direction && !t.top && t.toleranceExceeded
        }, shouldPin: function (t) {
            return "up" === t.direction && t.toleranceExceeded || t.top
        }, addClass: function (t) {
            this.elem.classList.add.apply(this.elem.classList, this.classes[t].split(" "))
        }, removeClass: function (t) {
            this.elem.classList.remove.apply(this.elem.classList, this.classes[t].split(" "))
        }, hasClass: function (t) {
            return this.classes[t].split(" ").every(function (t) {
                return this.classList.contains(t)
            }, this.elem)
        }, update: function (t) {
            !t.isOutOfBounds && !0 !== this.frozen && (t.top ? this.top() : this.notTop(), t.bottom ? this.bottom() : this.notBottom(), this.shouldUnpin(t) ? this.unpin() : this.shouldPin(t) && this.pin())
        }
    }, i.options = {tolerance: {up: 0, down: 0}, offset: 0, scroller: t() ? window : null, classes: {frozen: "headroom--frozen", pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", bottom: "headroom--bottom", notBottom: "headroom--not-bottom", initial: "headroom"}}, i.cutsTheMustard = !!(t() && (function () {
    }).bind && "classList" in document.documentElement && Object.assign && Object.keys && requestAnimationFrame), i
}), function (t) {
    t && (t.fn.headroom = function (e) {
        return this.each(function () {
            var i = t(this), n = i.data("headroom"), s = "object" == typeof e && e;
            s = t.extend(!0, {}, Headroom.options, s), n || ((n = new Headroom(this, s)).init(), i.data("headroom", n)), "string" == typeof e && (n[e](), "destroy" === e && i.removeData("headroom"))
        })
    }, t("[data-headroom]").each(function () {
        var e = t(this);
        e.headroom(e.data())
    }))
}(window.Zepto || window.jQuery), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).jarallax = e()
}(this, function () {
    "use strict";

    function t(t) {
        "complete" === document.readyState || "interactive" === document.readyState ? t() : document.addEventListener("DOMContentLoaded", t, {capture: !0, once: !0, passive: !0})
    }

    let e;
    var i = e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    let {navigator: n} = i, s = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(n.userAgent), r, o;

    function a() {
        s ? (!r && document.body && ((r = document.createElement("div")).style.cssText = "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;", document.body.appendChild(r)), o = (r ? r.clientHeight : 0) || i.innerHeight || document.documentElement.clientHeight) : o = i.innerHeight || document.documentElement.clientHeight
    }

    a(), i.addEventListener("resize", a), i.addEventListener("orientationchange", a), i.addEventListener("load", a), t(() => {
        a()
    });
    let l = [];

    function c() {
        l.length && (l.forEach((t, e) => {
            let {instance: n, oldData: s} = t, r = n.$item.getBoundingClientRect(), a = {width: r.width, height: r.height, top: r.top, bottom: r.bottom, wndW: i.innerWidth, wndH: o}, c = !s || s.wndW !== a.wndW || s.wndH !== a.wndH || s.width !== a.width || s.height !== a.height, h = c || !s || s.top !== a.top || s.bottom !== a.bottom;
            l[e].oldData = a, c && n.onResize(), h && n.onScroll()
        }), i.requestAnimationFrame(c))
    }

    let h = 0;

    class u {
        constructor(t, e) {
            let i = this;
            i.instanceID = h, h += 1, i.$item = t, i.defaults = {type: "scroll", speed: .5, imgSrc: null, imgElement: ".jarallax-img", imgSize: "cover", imgPosition: "50% 50%", imgRepeat: "no-repeat", keepImg: !1, elementInViewport: null, zIndex: -100, disableParallax: !1, disableVideo: !1, videoSrc: null, videoStartTime: 0, videoEndTime: 0, videoVolume: 0, videoLoop: !0, videoPlayOnlyVisible: !0, videoLazyLoading: !0, onScroll: null, onInit: null, onDestroy: null, onCoverImage: null};
            let s = i.$item.dataset || {}, r = {};
            if (Object.keys(s).forEach(t => {
                let e = t.substr(0, 1).toLowerCase() + t.substr(1);
                e && void 0 !== i.defaults[e] && (r[e] = s[t])
            }), i.options = i.extend({}, i.defaults, r, e), i.pureOptions = i.extend({}, i.options), Object.keys(i.options).forEach(t => {
                "true" === i.options[t] ? i.options[t] = !0 : "false" === i.options[t] && (i.options[t] = !1)
            }), i.options.speed = Math.min(2, Math.max(-1, parseFloat(i.options.speed))), "string" == typeof i.options.disableParallax && (i.options.disableParallax = RegExp(i.options.disableParallax)), i.options.disableParallax instanceof RegExp) {
                let o = i.options.disableParallax;
                i.options.disableParallax = () => o.test(n.userAgent)
            }
            if ("function" != typeof i.options.disableParallax && (i.options.disableParallax = () => !1), "string" == typeof i.options.disableVideo && (i.options.disableVideo = RegExp(i.options.disableVideo)), i.options.disableVideo instanceof RegExp) {
                let a = i.options.disableVideo;
                i.options.disableVideo = () => a.test(n.userAgent)
            }
            "function" != typeof i.options.disableVideo && (i.options.disableVideo = () => !1);
            let l = i.options.elementInViewport;
            l && "object" == typeof l && void 0 !== l.length && ([l] = l), l instanceof Element || (l = null), i.options.elementInViewport = l, i.image = {src: i.options.imgSrc || null, $container: null, useImgTag: !1, position: "fixed"}, i.initImg() && i.canInitParallax() && i.init()
        }

        css(t, e) {
            return "string" == typeof e ? i.getComputedStyle(t).getPropertyValue(e) : (Object.keys(e).forEach(i => {
                t.style[i] = e[i]
            }), t)
        }

        extend(t, ...e) {
            return t = t || {}, Object.keys(e).forEach(i => {
                e[i] && Object.keys(e[i]).forEach(n => {
                    t[n] = e[i][n]
                })
            }), t
        }

        getWindowData() {
            return {width: i.innerWidth || document.documentElement.clientWidth, height: o, y: document.documentElement.scrollTop}
        }

        initImg() {
            let t = this, e = t.options.imgElement;
            return e && "string" == typeof e && (e = t.$item.querySelector(e)), e instanceof Element || (t.options.imgSrc ? (e = new Image).src = t.options.imgSrc : e = null), e && (t.options.keepImg ? t.image.$item = e.cloneNode(!0) : (t.image.$item = e, t.image.$itemParent = e.parentNode), t.image.useImgTag = !0), !!t.image.$item || (null === t.image.src && (t.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", t.image.bgImage = t.css(t.$item, "background-image")), !(!t.image.bgImage || "none" === t.image.bgImage))
        }

        canInitParallax() {
            return !this.options.disableParallax()
        }

        init() {
            let t = this, e = {position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden"}, n = {pointerEvents: "none", transformStyle: "preserve-3d", backfaceVisibility: "hidden"};
            if (!t.options.keepImg) {
                let s = t.$item.getAttribute("style");
                if (s && t.$item.setAttribute("data-jarallax-original-styles", s), t.image.useImgTag) {
                    let r = t.image.$item.getAttribute("style");
                    r && t.image.$item.setAttribute("data-jarallax-original-styles", r)
                }
            }
            if ("static" === t.css(t.$item, "position") && t.css(t.$item, {position: "relative"}), "auto" === t.css(t.$item, "z-index") && t.css(t.$item, {zIndex: 0}), t.image.$container = document.createElement("div"), t.css(t.image.$container, e), t.css(t.image.$container, {"z-index": t.options.zIndex}), "fixed" === this.image.position && t.css(t.image.$container, {"-webkit-clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)", "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}), t.image.$container.setAttribute("id", `jarallax-container-${t.instanceID}`), t.$item.appendChild(t.image.$container), t.image.useImgTag ? n = t.extend({"object-fit": t.options.imgSize, "object-position": t.options.imgPosition, "max-width": "none"}, e, n) : (t.image.$item = document.createElement("div"), t.image.src && (n = t.extend({
                "background-position": t.options.imgPosition,
                "background-size": t.options.imgSize,
                "background-repeat": t.options.imgRepeat,
                "background-image": t.image.bgImage || `url("${t.image.src}")`
            }, e, n))), "opacity" !== t.options.type && "scale" !== t.options.type && "scale-opacity" !== t.options.type && 1 !== t.options.speed || (t.image.position = "absolute"), "fixed" === t.image.position) {
                let o = (function (t) {
                    let e = [];
                    for (; null !== t.parentElement;) 1 === (t = t.parentElement).nodeType && e.push(t);
                    return e
                })(t.$item).filter(t => {
                    let e = i.getComputedStyle(t), n = e["-webkit-transform"] || e["-moz-transform"] || e.transform;
                    return n && "none" !== n || /(auto|scroll)/.test(e.overflow + e["overflow-y"] + e["overflow-x"])
                });
                t.image.position = o.length ? "absolute" : "fixed"
            }
            n.position = t.image.position, t.css(t.image.$item, n), t.image.$container.appendChild(t.image.$item), t.onResize(), t.onScroll(!0), t.options.onInit && t.options.onInit.call(t), "none" !== t.css(t.$item, "background-image") && t.css(t.$item, {"background-image": "none"}), t.addToParallaxList()
        }

        addToParallaxList() {
            l.push({instance: this}), 1 === l.length && i.requestAnimationFrame(c)
        }

        removeFromParallaxList() {
            let t = this;
            l.forEach((e, i) => {
                e.instance.instanceID === t.instanceID && l.splice(i, 1)
            })
        }

        destroy() {
            this.removeFromParallaxList();
            let t = this.$item.getAttribute("data-jarallax-original-styles");
            if (this.$item.removeAttribute("data-jarallax-original-styles"), t ? this.$item.setAttribute("style", t) : this.$item.removeAttribute("style"), this.image.useImgTag) {
                let e = this.image.$item.getAttribute("data-jarallax-original-styles");
                this.image.$item.removeAttribute("data-jarallax-original-styles"), e ? this.image.$item.setAttribute("style", t) : this.image.$item.removeAttribute("style"), this.image.$itemParent && this.image.$itemParent.appendChild(this.image.$item)
            }
            this.image.$container && this.image.$container.parentNode.removeChild(this.image.$container), this.options.onDestroy && this.options.onDestroy.call(this), delete this.$item.jarallax
        }

        clipContainer() {
        }

        coverImage() {
            let t = this, e = t.image.$container.getBoundingClientRect(), i = e.height, {speed: n} = t.options, s = "scroll" === t.options.type || "scroll-opacity" === t.options.type, r = 0, a = i, l = 0;
            return s && (0 > n ? (r = n * Math.max(i, o), o < i && (r -= n * (i - o))) : r = n * (i + o), 1 < n ? a = Math.abs(r - o) : 0 > n ? a = r / n + Math.abs(r) : a += (o - i) * (1 - n), r /= 2), t.parallaxScrollDistance = r, l = s ? (o - a) / 2 : (i - a) / 2, t.css(t.image.$item, {height: `${a}px`, marginTop: `${l}px`, left: "fixed" === t.image.position ? `${e.left}px` : "0", width: `${e.width}px`}), t.options.onCoverImage && t.options.onCoverImage.call(t), {image: {height: a, marginTop: l}, container: e}
        }

        isVisible() {
            return this.isElementInViewport || !1
        }

        onScroll(t) {
            let e = this, n = e.$item.getBoundingClientRect(), s = n.top, r = n.height, a = {}, l = n;
            if (e.options.elementInViewport && (l = e.options.elementInViewport.getBoundingClientRect()), e.isElementInViewport = 0 <= l.bottom && 0 <= l.right && l.top <= o && l.left <= i.innerWidth, !t && !e.isElementInViewport) return;
            let c = Math.max(0, r + s), h = Math.max(0, -s), u = Math.max(0, s + r - o), d = Math.max(0, r - (s + r - o)), p = Math.max(0, -s + o - r), f = 1 - (o - s) / (o + r) * 2, m = 1;
            if (r < o ? m = 1 - (h || u) / r : c <= o ? m = c / o : d <= o && (m = d / o), "opacity" !== e.options.type && "scale-opacity" !== e.options.type && "scroll-opacity" !== e.options.type || (a.transform = "translate3d(0,0,0)", a.opacity = m), "scale" === e.options.type || "scale-opacity" === e.options.type) {
                let g = 1;
                0 > e.options.speed ? g -= e.options.speed * m : g += e.options.speed * (1 - m), a.transform = `scale(${g}) translate3d(0,0,0)`
            }
            if ("scroll" === e.options.type || "scroll-opacity" === e.options.type) {
                let y = e.parallaxScrollDistance * f;
                "absolute" === e.image.position && (y -= s), a.transform = `translate3d(0,${y}px,0)`
            }
            e.css(e.image.$item, a), e.options.onScroll && e.options.onScroll.call(e, {section: n, beforeTop: Math.max(0, s), beforeTopEnd: c, afterTop: h, beforeBottom: u, beforeBottomEnd: d, afterBottom: p, visiblePercent: m, fromViewportCenter: f})
        }

        onResize() {
            this.coverImage()
        }
    }

    let d = function (t, e, ...i) {
        ("object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName) && (t = [t]);
        let n = t.length, s, r = 0;
        for (; r < n; r += 1) if ("object" == typeof e || void 0 === e ? t[r].jarallax || (t[r].jarallax = new u(t[r], e)) : t[r].jarallax && (s = t[r].jarallax[e].apply(t[r].jarallax, i)), void 0 !== s) return s;
        return t
    };
    d.constructor = u;
    let p = i.jQuery;
    if (void 0 !== p) {
        let f = function (...t) {
            Array.prototype.unshift.call(t, this);
            let e = d.apply(i, t);
            return "object" != typeof e ? e : this
        };
        f.constructor = d.constructor;
        let m = p.fn.jarallax;
        p.fn.jarallax = f, p.fn.jarallax.noConflict = function () {
            return p.fn.jarallax = m, this
        }
    }
    return t(() => {
        d(document.querySelectorAll("[data-jarallax]"))
    }), d
}), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).jarallaxVideo = e()
}(this, function () {
    "use strict"; /*!
   * Name    : Video Worker
   * Version : 2.0.0
   * Author  : nK <https://nkdev.info>
   * GitHub  : https://github.com/nk-o/video-worker
   */
    let t;
    var e, i = t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function n() {
        this.doneCallbacks = [], this.failCallbacks = []
    }

    n.prototype = {
        execute(t, e) {
            let i = t.length;
            for (e = Array.prototype.slice.call(e); i;) t[i -= 1].apply(null, e)
        }, resolve(...t) {
            this.execute(this.doneCallbacks, t)
        }, reject(...t) {
            this.execute(this.failCallbacks, t)
        }, done(t) {
            this.doneCallbacks.push(t)
        }, fail(t) {
            this.failCallbacks.push(t)
        }
    };
    let s = 0, r = 0, o = 0, a = 0, l = 0, c = new n, h = new n;

    class u {
        constructor(t, e) {
            let i = this;
            i.url = t, i.options_default = {autoplay: !1, loop: !1, mute: !1, volume: 100, showControls: !0, accessibilityHidden: !1, startTime: 0, endTime: 0}, i.options = i.extend({}, i.options_default, e), void 0 !== i.options.showContols && (i.options.showControls = i.options.showContols, delete i.options.showContols), i.videoID = i.parseURL(t), i.videoID && (i.ID = s, s += 1, i.loadAPI(), i.init())
        }

        extend(...t) {
            let e = t[0] || {};
            return Object.keys(t).forEach(i => {
                t[i] && Object.keys(t[i]).forEach(n => {
                    e[n] = t[i][n]
                })
            }), e
        }

        parseURL(t) {
            var e, i, n;
            let s, r, o, a, l, c = !!(s = (e = t).match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/)) && 11 === s[1].length && s[1], h = !!(r = (i = t).match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/)) && !!r[3] && r[3], u = (o = (n = t).split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/), a = {}, l = 0, o.forEach(t => {
                let e = t.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                e && e[1] && e[2] && (a["ogv" === e[1] ? "ogg" : e[1]] = e[2], l = 1)
            }), !!l && a);
            return c ? (this.type = "youtube", c) : h ? (this.type = "vimeo", h) : !!u && (this.type = "local", u)
        }

        isValid() {
            return !!this.videoID
        }

        on(t, e) {
            this.userEventsList = this.userEventsList || [], (this.userEventsList[t] || (this.userEventsList[t] = [])).push(e)
        }

        off(t, e) {
            this.userEventsList && this.userEventsList[t] && (e ? this.userEventsList[t].forEach((i, n) => {
                i === e && (this.userEventsList[t][n] = !1)
            }) : delete this.userEventsList[t])
        }

        fire(t, ...e) {
            this.userEventsList && void 0 !== this.userEventsList[t] && this.userEventsList[t].forEach(t => {
                t && t.apply(this, e)
            })
        }

        play(t) {
            let e = this;
            e.player && ("youtube" === e.type && e.player.playVideo && (void 0 !== t && e.player.seekTo(t || 0), i.YT.PlayerState.PLAYING !== e.player.getPlayerState() && e.player.playVideo()), "vimeo" === e.type && (void 0 !== t && e.player.setCurrentTime(t), e.player.getPaused().then(t => {
                t && e.player.play()
            })), "local" === e.type && (void 0 !== t && (e.player.currentTime = t), e.player.paused && e.player.play()))
        }

        pause() {
            let t = this;
            t.player && ("youtube" === t.type && t.player.pauseVideo && i.YT.PlayerState.PLAYING === t.player.getPlayerState() && t.player.pauseVideo(), "vimeo" === t.type && t.player.getPaused().then(e => {
                e || t.player.pause()
            }), "local" !== t.type || t.player.paused || t.player.pause())
        }

        mute() {
            let t = this;
            t.player && ("youtube" === t.type && t.player.mute && t.player.mute(), "vimeo" === t.type && t.player.setVolume && t.player.setVolume(0), "local" === t.type && (t.$video.muted = !0))
        }

        unmute() {
            let t = this;
            t.player && ("youtube" === t.type && t.player.mute && t.player.unMute(), "vimeo" === t.type && t.player.setVolume && t.player.setVolume(t.options.volume), "local" === t.type && (t.$video.muted = !1))
        }

        setVolume(t = !1) {
            let e = this;
            e.player && t && ("youtube" === e.type && e.player.setVolume && e.player.setVolume(t), "vimeo" === e.type && e.player.setVolume && e.player.setVolume(t), "local" === e.type && (e.$video.volume = t / 100))
        }

        getVolume(t) {
            if (!this.player) {
                t(!1);
                return
            }
            "youtube" === this.type && this.player.getVolume && t(this.player.getVolume()), "vimeo" === this.type && this.player.getVolume && this.player.getVolume().then(e => {
                t(e)
            }), "local" === this.type && t(100 * this.$video.volume)
        }

        getMuted(t) {
            if (!this.player) {
                t(null);
                return
            }
            "youtube" === this.type && this.player.isMuted && t(this.player.isMuted()), "vimeo" === this.type && this.player.getVolume && this.player.getVolume().then(e => {
                t(!!e)
            }), "local" === this.type && t(this.$video.muted)
        }

        getImageURL(t) {
            let e = this;
            if (e.videoImage) {
                t(e.videoImage);
                return
            }
            if ("youtube" === e.type) {
                let i = ["maxresdefault", "sddefault", "hqdefault", "0"], n = 0, s = new Image;
                s.onload = function () {
                    120 !== (this.naturalWidth || this.width) || n === i.length - 1 ? (e.videoImage = `https://img.youtube.com/vi/${e.videoID}/${i[n]}.jpg`, t(e.videoImage)) : (n += 1, this.src = `https://img.youtube.com/vi/${e.videoID}/${i[n]}.jpg`)
                }, s.src = `https://img.youtube.com/vi/${e.videoID}/${i[n]}.jpg`
            }
            if ("vimeo" === e.type) {
                let r = new XMLHttpRequest;
                r.open("GET", `https://vimeo.com/api/oembed.json?url=${e.url}`, !0), r.onreadystatechange = function () {
                    if (4 === this.readyState && this.status >= 200 && this.status < 400) {
                        let i = JSON.parse(this.responseText);
                        i.thumbnail_url && (e.videoImage = i.thumbnail_url, t(e.videoImage))
                    }
                }, r.send(), r = null
            }
        }

        getIframe(t) {
            this.getVideo(t)
        }

        getVideo(t) {
            let e = this;
            if (e.$video) {
                t(e.$video);
                return
            }
            e.onAPIready(() => {
                let n;
                if (e.$video || ((n = document.createElement("div")).style.display = "none"), "youtube" === e.type) {
                    e.playerOptions = {host: "https://www.youtube-nocookie.com", videoId: e.videoID, playerVars: {autohide: 1, rel: 0, autoplay: 0, playsinline: 1}}, e.options.showControls || (e.playerOptions.playerVars.iv_load_policy = 3, e.playerOptions.playerVars.modestbranding = 1, e.playerOptions.playerVars.controls = 0, e.playerOptions.playerVars.showinfo = 0, e.playerOptions.playerVars.disablekb = 1);
                    let s, r;
                    e.playerOptions.events = {
                        onReady(t) {
                            e.options.mute ? t.target.mute() : e.options.volume && t.target.setVolume(e.options.volume), e.options.autoplay && e.play(e.options.startTime), e.fire("ready", t), e.options.loop && !e.options.endTime && (e.options.endTime = e.player.getDuration() - .1), setInterval(() => {
                                e.getVolume(i => {
                                    e.options.volume !== i && (e.options.volume = i, e.fire("volumechange", t))
                                })
                            }, 150)
                        }, onStateChange(t) {
                            e.options.loop && t.data === i.YT.PlayerState.ENDED && e.play(e.options.startTime), s || t.data !== i.YT.PlayerState.PLAYING || (s = 1, e.fire("started", t)), t.data === i.YT.PlayerState.PLAYING && e.fire("play", t), t.data === i.YT.PlayerState.PAUSED && e.fire("pause", t), t.data === i.YT.PlayerState.ENDED && e.fire("ended", t), t.data === i.YT.PlayerState.PLAYING ? r = setInterval(() => {
                                e.fire("timeupdate", t), e.options.endTime && e.player.getCurrentTime() >= e.options.endTime && (e.options.loop ? e.play(e.options.startTime) : e.pause())
                            }, 150) : clearInterval(r)
                        }, onError(t) {
                            e.fire("error", t)
                        }
                    };
                    let o = !e.$video;
                    if (o) {
                        let a = document.createElement("div");
                        a.setAttribute("id", e.playerID), n.appendChild(a), document.body.appendChild(n)
                    }
                    e.player = e.player || new i.YT.Player(e.playerID, e.playerOptions), o && (e.$video = document.getElementById(e.playerID), e.options.accessibilityHidden && (e.$video.setAttribute("tabindex", "-1"), e.$video.setAttribute("aria-hidden", "true")), e.videoWidth = parseInt(e.$video.getAttribute("width"), 10) || 1280, e.videoHeight = parseInt(e.$video.getAttribute("height"), 10) || 720)
                }
                if ("vimeo" === e.type) {
                    if (e.playerOptions = {dnt: 1, id: e.videoID, autopause: 0, transparent: 0, autoplay: e.options.autoplay ? 1 : 0, loop: e.options.loop ? 1 : 0, muted: e.options.mute ? 1 : 0}, e.options.volume && (e.playerOptions.volume = e.options.volume), e.options.showControls || (e.playerOptions.badge = 0, e.playerOptions.byline = 0, e.playerOptions.portrait = 0, e.playerOptions.title = 0, e.playerOptions.background = 1), !e.$video) {
                        let l = "";
                        Object.keys(e.playerOptions).forEach(t => {
                            "" !== l && (l += "&"), l += `${t}=${encodeURIComponent(e.playerOptions[t])}`
                        }), e.$video = document.createElement("iframe"), e.$video.setAttribute("id", e.playerID), e.$video.setAttribute("src", `https://player.vimeo.com/video/${e.videoID}?${l}`), e.$video.setAttribute("frameborder", "0"), e.$video.setAttribute("mozallowfullscreen", ""), e.$video.setAttribute("allowfullscreen", ""), e.$video.setAttribute("title", "Vimeo video player"), e.options.accessibilityHidden && (e.$video.setAttribute("tabindex", "-1"), e.$video.setAttribute("aria-hidden", "true")), n.appendChild(e.$video), document.body.appendChild(n)
                    }
                    e.player = e.player || new i.Vimeo.Player(e.$video, e.playerOptions), e.options.startTime && e.options.autoplay && e.player.setCurrentTime(e.options.startTime), e.player.getVideoWidth().then(t => {
                        e.videoWidth = t || 1280
                    }), e.player.getVideoHeight().then(t => {
                        e.videoHeight = t || 720
                    });
                    let c;
                    e.player.on("timeupdate", t => {
                        c || (e.fire("started", t), c = 1), e.fire("timeupdate", t), e.options.endTime && e.options.endTime && t.seconds >= e.options.endTime && (e.options.loop ? e.play(e.options.startTime) : e.pause())
                    }), e.player.on("play", t => {
                        e.fire("play", t), e.options.startTime && 0 === t.seconds && e.play(e.options.startTime)
                    }), e.player.on("pause", t => {
                        e.fire("pause", t)
                    }), e.player.on("ended", t => {
                        e.fire("ended", t)
                    }), e.player.on("loaded", t => {
                        e.fire("ready", t)
                    }), e.player.on("volumechange", t => {
                        e.fire("volumechange", t)
                    }), e.player.on("error", t => {
                        e.fire("error", t)
                    })
                }
                if ("local" === e.type) {
                    e.$video || (e.$video = document.createElement("video"), e.options.showControls && (e.$video.controls = !0), e.options.mute ? e.$video.muted = !0 : e.$video.volume && (e.$video.volume = e.options.volume / 100), e.options.loop && (e.$video.loop = !0), e.$video.setAttribute("playsinline", ""), e.$video.setAttribute("muted", "muted"), e.$video.setAttribute("webkit-playsinline", ""), e.options.accessibilityHidden && (e.$video.setAttribute("tabindex", "-1"), e.$video.setAttribute("aria-hidden", "true")), e.$video.setAttribute("id", e.playerID), n.appendChild(e.$video), document.body.appendChild(n), Object.keys(e.videoID).forEach(t => {
                        var i, n, s;
                        let r;
                        i = e.$video, n = e.videoID[t], s = `video/${t}`, (r = document.createElement("source")).src = n, r.type = s, i.appendChild(r)
                    })), e.player = e.player || e.$video;
                    let h;
                    e.player.addEventListener("playing", t => {
                        h || e.fire("started", t), h = 1
                    }), e.player.addEventListener("timeupdate", function (t) {
                        e.fire("timeupdate", t), e.options.endTime && e.options.endTime && this.currentTime >= e.options.endTime && (e.options.loop ? e.play(e.options.startTime) : e.pause())
                    }), e.player.addEventListener("play", t => {
                        e.fire("play", t)
                    }), e.player.addEventListener("pause", t => {
                        e.fire("pause", t)
                    }), e.player.addEventListener("ended", t => {
                        e.fire("ended", t)
                    }), e.player.addEventListener("loadedmetadata", function () {
                        e.videoWidth = this.videoWidth || 1280, e.videoHeight = this.videoHeight || 720, e.fire("ready"), e.options.autoplay && e.play(e.options.startTime)
                    }), e.player.addEventListener("volumechange", t => {
                        e.getVolume(t => {
                            e.options.volume = t
                        }), e.fire("volumechange", t)
                    }), e.player.addEventListener("error", t => {
                        e.fire("error", t)
                    })
                }
                t(e.$video)
            })
        }

        init() {
            let t = this;
            t.playerID = `VideoWorker-${t.ID}`
        }

        loadAPI() {
            if (r && o) return;
            let t = "";
            if ("youtube" !== this.type || r || (r = 1, t = "https://www.youtube.com/iframe_api"), "vimeo" === this.type && !o) {
                if (o = 1, void 0 !== i.Vimeo) return;
                t = "https://player.vimeo.com/api/player.js"
            }
            if (!t) return;
            let e = document.createElement("script"), n = document.getElementsByTagName("head")[0];
            e.src = t, n.appendChild(e), n = null, e = null
        }

        onAPIready(t) {
            if ("youtube" === this.type && (void 0 !== i.YT && 0 !== i.YT.loaded || a ? "object" == typeof i.YT && 1 === i.YT.loaded ? t() : c.done(() => {
                t()
            }) : (a = 1, i.onYouTubeIframeAPIReady = function () {
                i.onYouTubeIframeAPIReady = null, c.resolve("done"), t()
            })), "vimeo" === this.type) {
                if (void 0 !== i.Vimeo || l) void 0 !== i.Vimeo ? t() : h.done(() => {
                    t()
                }); else {
                    l = 1;
                    let e = setInterval(() => {
                        void 0 !== i.Vimeo && (clearInterval(e), h.resolve("done"), t())
                    }, 20)
                }
            }
            "local" === this.type && t()
        }
    }

    let d;
    var p = d = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function f(t = p.jarallax) {
        if (void 0 === t) return;
        let e = t.constructor, i = e.prototype.onScroll;
        e.prototype.onScroll = function () {
            let t = this;
            i.apply(t);
            t.isVideoInserted || !t.video || t.options.videoLazyLoading && !t.isElementInViewport || t.options.disableVideo() || (t.isVideoInserted = !0, t.video.getVideo(e => {
                let i = e.parentNode;
                t.css(e, {position: t.image.position, top: "0px", left: "0px", right: "0px", bottom: "0px", width: "100%", height: "100%", maxWidth: "none", maxHeight: "none", pointerEvents: "none", transformStyle: "preserve-3d", backfaceVisibility: "hidden", margin: 0, zIndex: -1}), t.$video = e, "local" === t.video.type && (t.image.src ? t.$video.setAttribute("poster", t.image.src) : t.image.$item && "IMG" === t.image.$item.tagName && t.image.$item.src && t.$video.setAttribute("poster", t.image.$item.src)), t.image.$container.appendChild(e), i.parentNode.removeChild(i), t.options.onVideoInsert && t.options.onVideoInsert.call(t)
            }))
        };
        let n = e.prototype.coverImage;
        e.prototype.coverImage = function () {
            let t = n.apply(this), e = !!this.image.$item && this.image.$item.nodeName;
            if (t && this.video && e && ("IFRAME" === e || "VIDEO" === e)) {
                let i = t.image.height, s = i * this.image.width / this.image.height, r = (t.container.width - s) / 2, o = t.image.marginTop;
                t.container.width > s && (i = (s = t.container.width) * this.image.height / this.image.width, r = 0, o += (t.image.height - i) / 2), "IFRAME" === e && (i += 400, o -= 200), this.css(this.$video, {width: `${s}px`, marginLeft: `${r}px`, height: `${i}px`, marginTop: `${o}px`})
            }
            return t
        };
        let s = e.prototype.initImg;
        e.prototype.initImg = function () {
            let t = this, e = s.apply(t);
            return (t.options.videoSrc || (t.options.videoSrc = t.$item.getAttribute("data-jarallax-video") || null), t.options.videoSrc) ? (t.defaultInitImgResult = e, !0) : e
        };
        let r = e.prototype.canInitParallax;
        e.prototype.canInitParallax = function () {
            let t = this, e = r.apply(t);
            if (!t.options.videoSrc) return e;
            let i = new u(t.options.videoSrc, {autoplay: !0, loop: t.options.videoLoop, showControls: !1, accessibilityHidden: !0, startTime: t.options.videoStartTime || 0, endTime: t.options.videoEndTime || 0, mute: t.options.videoVolume ? 0 : 1, volume: t.options.videoVolume || 0});

            function n() {
                t.image.$default_item && (t.image.$item = t.image.$default_item, t.image.$item.style.display = "block", t.coverImage(), t.onScroll())
            }

            if (t.options.onVideoWorkerInit && t.options.onVideoWorkerInit.call(t, i), i.isValid()) {
                if (this.options.disableParallax() && (e = !0, t.image.position = "absolute", t.options.type = "scroll", t.options.speed = 1), e) {
                    if (i.on("ready", () => {
                        if (t.options.videoPlayOnlyVisible) {
                            let e = t.onScroll;
                            t.onScroll = function () {
                                e.apply(t), t.videoError || !t.options.videoLoop && (t.options.videoLoop || t.videoEnded) || (t.isVisible() ? i.play() : i.pause())
                            }
                        } else i.play()
                    }), i.on("started", () => {
                        t.image.$default_item = t.image.$item, t.image.$item = t.$video, t.image.width = t.video.videoWidth || 1280, t.image.height = t.video.videoHeight || 720, t.coverImage(), t.onScroll(), t.image.$default_item && (t.image.$default_item.style.display = "none")
                    }), i.on("ended", () => {
                        t.videoEnded = !0, t.options.videoLoop || n()
                    }), i.on("error", () => {
                        t.videoError = !0, n()
                    }), t.video = i, !t.defaultInitImgResult && (t.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", "local" !== i.type)) return i.getImageURL(e => {
                        t.image.bgImage = `url("${e}")`, t.init()
                    }), !1
                } else t.defaultInitImgResult || i.getImageURL(e => {
                    let i = t.$item.getAttribute("style");
                    i && t.$item.setAttribute("data-jarallax-original-styles", i), t.css(t.$item, {"background-image": `url("${e}")`, "background-position": "center", "background-size": "cover"})
                })
            }
            return e
        };
        let o = e.prototype.destroy;
        e.prototype.destroy = function () {
            let t = this;
            t.image.$default_item && (t.image.$item = t.image.$default_item, delete t.image.$default_item), o.apply(t)
        }
    }

    return f(), e = () => {
        void 0 !== p.jarallax && p.jarallax(document.querySelectorAll("[data-jarallax-video]"))
    }, "complete" === document.readyState || "interactive" === document.readyState ? e() : document.addEventListener("DOMContentLoaded", e, {capture: !0, once: !0, passive: !0}), p.VideoWorker || (p.VideoWorker = u), f
}), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).jarallaxElement = e()
}(this, function () {
    "use strict";
    let t;
    var e, i = t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function n(t = i.jarallax) {
        if (void 0 === t) return;
        let e = t.constructor;
        ["initImg", "canInitParallax", "init", "destroy", "coverImage", "isVisible", "onScroll", "onResize"].forEach(t => {
            let i = e.prototype[t];
            e.prototype[t] = function (...e) {
                let n = this;
                if ("initImg" === t && null !== n.$item.getAttribute("data-jarallax-element") && (n.options.type = "element", n.pureOptions.speed = n.$item.getAttribute("data-jarallax-element") || "100"), "element" !== n.options.type) return i.apply(n, e);
                switch (n.pureOptions.threshold = n.$item.getAttribute("data-threshold") || "", t) {
                    case"init": {
                        let s = `${n.pureOptions.speed}`.split(" ");
                        n.options.speed = n.pureOptions.speed || 0, n.options.speedY = s[0] ? parseFloat(s[0]) : 0, n.options.speedX = s[1] ? parseFloat(s[1]) : 0;
                        let r = n.pureOptions.threshold.split(" ");
                        n.options.thresholdY = r[0] ? parseFloat(r[0]) : null, n.options.thresholdX = r[1] ? parseFloat(r[1]) : null, i.apply(n, e);
                        let o = n.$item.getAttribute("data-jarallax-original-styles");
                        return o && n.$item.setAttribute("style", o), !0
                    }
                    case"onResize": {
                        let a = n.css(n.$item, "transform");
                        n.css(n.$item, {transform: ""});
                        let l = n.$item.getBoundingClientRect();
                        n.itemData = {width: l.width, height: l.height, y: l.top + n.getWindowData().y, x: l.left}, n.css(n.$item, {transform: a});
                        break
                    }
                    case"onScroll": {
                        let c = n.getWindowData(), h = (c.y + c.height / 2 - n.itemData.y - n.itemData.height / 2) / (c.height / 2), u = h * n.options.speedY, d = h * n.options.speedX, p = u, f = d;
                        null !== n.options.thresholdY && u > n.options.thresholdY && (p = 0), null !== n.options.thresholdX && d > n.options.thresholdX && (f = 0), n.css(n.$item, {transform: `translate3d(${f}px,${p}px,0)`});
                        break
                    }
                    case"initImg":
                    case"isVisible":
                    case"coverImage":
                        return !0
                }
                return i.apply(n, e)
            }
        })
    }

    return n(), e = () => {
        void 0 !== i.jarallax && i.jarallax(document.querySelectorAll("[data-jarallax-element]"))
    }, "complete" === document.readyState || "interactive" === document.readyState ? e() : document.addEventListener("DOMContentLoaded", e, {capture: !0, once: !0, passive: !0}), n
}), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function (t) {
    "use strict";

    function e(t, e) {
        t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
    }

    function i(t) {
        if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function n(t) {
        return "string" == typeof t
    }

    function s(t) {
        return "function" == typeof t
    }

    function r(t) {
        return "number" == typeof t
    }

    function o(t) {
        return void 0 === t
    }

    function a(t) {
        return "object" == typeof t
    }

    function l(t) {
        return !1 !== t
    }

    function c() {
        return "undefined" != typeof window
    }

    function h(t) {
        return s(t) || n(t)
    }

    function u(t) {
        return (tk = ed(t, ee)) && iv
    }

    function d(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }

    function p(t, e) {
        return !e && console.warn(t)
    }

    function f(t, e) {
        return t && (ee[t] = e) && tk && (tk[t] = e) || ee
    }

    function m() {
        return 0
    }

    function g(t) {
        var e, i, n = t[0];
        if (a(n) || s(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
            for (i = eh.length; i-- && !eh[i].targetTest(n);) ;
            e = eh[i]
        }
        for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new eO(t[i], e))) || t.splice(i, 1);
        return t
    }

    function y(t) {
        return t._gsap || g(e$(t))[0]._gsap
    }

    function v(t, e, i) {
        return (i = t[e]) && s(i) ? t[e]() : o(i) && t.getAttribute && t.getAttribute(e) || i
    }

    function b(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }

    function _(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }

    function w(t) {
        return Math.round(1e7 * t) / 1e7 || 0
    }

    function x(t, e) {
        var i = e.charAt(0), n = parseFloat(e.substr(2));
        return t = parseFloat(t), "+" === i ? t + n : "-" === i ? t - n : "*" === i ? t * n : t / n
    }

    function k(t, e) {
        for (var i = e.length, n = 0; 0 > t.indexOf(e[n]) && ++n < i;) ;
        return n < i
    }

    function D() {
        var t, e, i = er.length, n = er.slice(0);
        for (eo = {}, t = er.length = 0; t < i; t++) (e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }

    function C(t, e, i, n) {
        er.length && D(), t.render(e, i, n || t$), er.length && D()
    }

    function S(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(tJ).length < 2 ? e : n(t) ? t.trim() : t
    }

    function T(t) {
        return t
    }

    function E(t, e) {
        for (var i in e) i in t || (t[i] = e[i]);
        return t
    }

    function A(t, e) {
        for (var i in e) "__proto__" !== i && "constructor" !== i && "prototype" !== i && (t[i] = a(e[i]) ? A(t[i] || (t[i] = {}), e[i]) : e[i]);
        return t
    }

    function P(t, e) {
        var i, n = {};
        for (i in t) i in e || (n[i] = t[i]);
        return n
    }

    function L(t) {
        var e, i = t.parent || tb, n = t.keyframes ? (e = t6(t.keyframes), function (t, i) {
            for (var n in i) n in t || "duration" === n && e || "ease" === n || (t[n] = i[n])
        }) : E;
        if (l(t.inherit)) for (; i;) n(t, i.vars.defaults), i = i.parent || i._dp;
        return t
    }

    function M(t, e, i, n, s) {
        void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
        var r, o = t[n];
        if (s) for (r = e[s]; o && o[s] > r;) o = o._prev;
        return o ? (e._next = o._next, o._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = o, e.parent = e._dp = t, e
    }

    function O(t, e, i, n) {
        void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
        var s = e._prev, r = e._next;
        s ? s._next = r : t[i] === e && (t[i] = r), r ? r._prev = s : t[n] === e && (t[n] = s), e._next = e._prev = e.parent = null
    }

    function I(t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
    }

    function Y(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0)) for (var i = t; i;) i._dirty = 1, i = i.parent;
        return t
    }

    function z(t, e, i, n) {
        return t._startAt && (t$ ? t._startAt.revert(en) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, n))
    }

    function H(t) {
        return t._repeat ? ep(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }

    function N(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }

    function j(t) {
        return t._end = w(t._start + (t._tDur / Math.abs(t._ts || t._rts || tV) || 0))
    }

    function R(t, e) {
        var i = t._dp;
        return i && i.smoothChildTiming && t._ts && (t._start = w(i._time - (0 < t._ts ? e / t._ts : -(((t._dirty ? t.totalDuration() : t._tDur) - e) / t._ts))), j(t), i._dirty || Y(i, t)), t
    }

    function W(t, e) {
        var i;
        if ((e._time || e._initted && !e._dur) && (i = N(t.rawTime(), e), (!e._dur || ey(0, e.totalDuration(), i) - e._tTime > tV) && e.render(i, !0)), Y(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration()) for (i = t; i._dp;) 0 <= i.rawTime() && i.totalTime(i._tTime), i = i._dp;
            t._zTime = -tV
        }
    }

    function B(t, e, i, n) {
        return e.parent && I(e), e._start = w((r(i) ? i : i || t !== tb ? eg(t, i, e) : t._time) + e._delay), e._end = w(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), M(t, e, "_first", "_last", t._sort ? "_start" : 0), ef(e) || (t._recent = e), n || W(t, e), t._ts < 0 && R(t, t._tTime), t
    }

    function F(t, e) {
        return (ee.ScrollTrigger || d("scrollTrigger", e)) && ee.ScrollTrigger.create(e, t)
    }

    function V(t, e, i, n) {
        return e1(t, e), t._initted ? !i && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && tC !== eD.frame ? (er.push(t), t._lazy = [e, n], 1) : void 0 : 1
    }

    function q(t, e, i, n) {
        var s = t._repeat, r = w(e) || 0, o = t._tTime / t._tDur;
        return o && !n && (t._time *= r / t._dur), t._dur = r, t._tDur = s ? s < 0 ? 1e10 : w(r * (s + 1) + t._rDelay * s) : r, 0 < o && !n ? R(t, t._tTime = t._tDur * o) : t.parent && j(t), i || Y(t.parent, t), t
    }

    function U(t) {
        return t instanceof eY ? Y(t) : q(t, t._dur)
    }

    function X(t, e, i) {
        var n, s, o = r(e[1]), a = (o ? 2 : 1) + (t < 2 ? 0 : 1), c = e[a];
        if (o && (c.duration = e[1]), c.parent = i, t) {
            for (n = c, s = i; s && !("immediateRender" in n);) n = s.vars.defaults || {}, s = l(s.vars.inherit) && s.parent;
            c.immediateRender = l(n.immediateRender), t < 2 ? c.runBackwards = 1 : c.startAt = e[a - 1]
        }
        return new eV(e[0], c, e[1 + a])
    }

    function G(t, e) {
        return t || 0 === t ? e(t) : e
    }

    function Q(t, e) {
        return n(t) && (e = et.exec(t)) ? e[1] : ""
    }

    function Z(t, e) {
        return t && a(t) && "length" in t && (!e && !t.length || t.length - 1 in t && a(t[0])) && !t.nodeType && t !== t_
    }

    function K(t) {
        return t = e$(t)[0] || p("Invalid scope") || {}, function (e) {
            var i = t.current || t.nativeElement || t;
            return e$(e, i.querySelectorAll ? i : i === t ? p("Invalid scope") || tx.createElement("div") : t)
        }
    }

    function J(t) {
        return t.sort(function () {
            return .5 - Math.random()
        })
    }

    function tt(t) {
        if (s(t)) return t;
        var e = a(t) ? t : {each: t}, i = eP(e.ease), r = e.from || 0, o = parseFloat(e.base) || 0, l = {}, c = 0 < r && r < 1, h = isNaN(r) || c, u = e.axis, d = r, p = r;
        return n(r) ? d = p = ({center: .5, edges: .5, end: 1})[r] || 0 : !c && h && (d = r[0], p = r[1]), function (t, n, s) {
            var a, c, f, m, g, y, v, b, _, x = (s || e).length, k = l[x];
            if (!k) {
                if (!(_ = "auto" === e.grid ? 0 : (e.grid || [1, tF])[1])) {
                    for (v = -tF; v < (v = s[_++].getBoundingClientRect().left) && _ < x;) ;
                    _--
                }
                for (k = l[x] = [], a = h ? Math.min(_, x) * d - .5 : r % _, c = _ === tF ? 0 : h ? x * p / _ - .5 : r / _ | 0, b = tF, y = v = 0; y < x; y++) f = y % _ - a, m = c - (y / _ | 0), k[y] = g = u ? Math.abs("y" === u ? m : f) : tq(f * f + m * m), v < g && (v = g), g < b && (b = g);
                "random" === r && J(k), k.max = v - b, k.min = b, k.v = x = (parseFloat(e.amount) || parseFloat(e.each) * (x < _ ? x - 1 : u ? "y" === u ? x / _ : _ : Math.max(_, x / _)) || 0) * ("edges" === r ? -1 : 1), k.b = x < 0 ? o - x : o, k.u = Q(e.amount || e.each) || 0, i = i && x < 0 ? eA(i) : i
            }
            return x = (k[t] - k.min) / k.max || 0, w(k.b + (i ? i(x) : x) * k.v) + k.u
        }
    }

    function te(t) {
        var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
        return function (i) {
            var n = w(Math.round(parseFloat(i) / t) * t * e);
            return (n - n % 1) / e + (r(i) ? 0 : Q(i))
        }
    }

    function ti(t, e) {
        var i, n, o = t6(t);
        return !o && a(t) && (i = o = t.radius || tF, t.values ? (t = e$(t.values), (n = !r(t[0])) && (i *= i)) : t = te(t.increment)), G(e, o ? s(t) ? function (e) {
            return Math.abs((n = t(e)) - e) <= i ? n : e
        } : function (e) {
            for (var s, o, a = parseFloat(n ? e.x : e), l = parseFloat(n ? e.y : 0), c = tF, h = 0, u = t.length; u--;) (s = n ? (s = t[u].x - a) * s + (o = t[u].y - l) * o : Math.abs(t[u] - a)) < c && (c = s, h = u);
            return h = !i || c <= i ? t[h] : e, n || h === e || r(e) ? h : h + Q(e)
        } : te(t))
    }

    function tn(t, e, i, n) {
        return G(t6(t) ? !e : !0 === i ? (i = 0, !1) : !n, function () {
            return t6(t) ? t[~~(Math.random() * t.length)] : (n = (i = i || 1e-5) < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + .99 * i)) / i) * i * n) / n
        })
    }

    function ts(t, e, i) {
        return G(i, function (i) {
            return t[~~e(i)]
        })
    }

    function tr(t) {
        for (var e, i, n, s, r = 0, o = ""; ~(e = t.indexOf("random(", r));) n = t.indexOf(")", e), s = "[" === t.charAt(e + 7), i = t.substr(e + 7, n - e - 7).match(s ? tJ : tX), o += t.substr(r, e - r) + tn(s ? i : +i[0], s ? 0 : +i[1], +i[2] || 1e-5), r = n + 1;
        return o + t.substr(r, t.length - r)
    }

    function to(t, e, i) {
        var n, s, r, o = t.labels, a = tF;
        for (n in o) (s = o[n] - e) < 0 == !!i && s && a > (s = Math.abs(s)) && (r = n, a = s);
        return r
    }

    function ta(t) {
        return I(t), t.scrollTrigger && t.scrollTrigger.kill(!1), 1 > t.progress() && eb(t, "onInterrupt"), t
    }

    function tl(t, e, i) {
        return (6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * e_ + .5 | 0
    }

    function tc(t, e, i) {
        var n, s, o, a, l, c, h, u, d, p, f = t ? r(t) ? [t >> 16, t >> 8 & e_, t & e_] : 0 : ew.black;
        if (!f) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ew[t]) f = ew[t]; else if ("#" === t.charAt(0)) {
                if (t.length < 6 && (t = "#" + (n = t.charAt(1)) + n + (s = t.charAt(2)) + s + (o = t.charAt(3)) + o + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(f = parseInt(t.substr(1, 6), 16)) >> 16, f >> 8 & e_, f & e_, parseInt(t.substr(7), 16) / 255];
                f = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & e_, t & e_]
            } else if ("hsl" === t.substr(0, 3)) {
                if (f = p = t.match(tX), e) {
                    if (~t.indexOf("=")) return f = t.match(tG), i && f.length < 4 && (f[3] = 1), f
                } else a = +f[0] % 360 / 360, l = f[1] / 100, n = 2 * (c = f[2] / 100) - (s = c <= .5 ? c * (l + 1) : c + l - c * l), 3 < f.length && (f[3] *= 1), f[0] = tl(a + 1 / 3, n, s), f[1] = tl(a, n, s), f[2] = tl(a - 1 / 3, n, s)
            } else f = t.match(tX) || ew.transparent;
            f = f.map(Number)
        }
        return e && !p && (n = f[0] / e_, c = ((h = Math.max(n, s = f[1] / e_, o = f[2] / e_)) + (u = Math.min(n, s, o))) / 2, h === u ? a = l = 0 : (d = h - u, l = .5 < c ? d / (2 - h - u) : d / (h + u), a = h === n ? (s - o) / d + (s < o ? 6 : 0) : h === s ? (o - n) / d + 2 : (n - s) / d + 4, a *= 60), f[0] = ~~(a + .5), f[1] = ~~(100 * l + .5), f[2] = ~~(100 * c + .5)), i && f.length < 4 && (f[3] = 1), f
    }

    function th(t) {
        var e = [], i = [], n = -1;
        return t.split(ex).forEach(function (t) {
            var s = t.match(tQ) || [];
            e.push.apply(e, s), i.push(n += s.length + 1)
        }), e.c = i, e
    }

    function tu(t, e, i) {
        var n, s, r, o, a = "", l = (t + a).match(ex), c = e ? "hsla(" : "rgba(", h = 0;
        if (!l) return t;
        if (l = l.map(function (t) {
            return (t = tc(t, e, 1)) && c + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
        }), i && (r = th(t), (n = i.c).join(a) !== r.c.join(a))) for (o = (s = t.replace(ex, "1").split(tQ)).length - 1; h < o; h++) a += s[h] + (~n.indexOf(h) ? l.shift() || c + "0,0,0,0)" : (r.length ? r : l.length ? l : i).shift());
        if (!s) for (o = (s = t.split(ex)).length - 1; h < o; h++) a += s[h] + l[h];
        return a + s[o]
    }

    function td(t) {
        var e, i = t.join(" ");
        if (ex.lastIndex = 0, ex.test(i)) return e = ek.test(i), t[1] = tu(t[1], e), t[0] = tu(t[0], e, th(t[1])), !0
    }

    function tp(t, e) {
        for (var i, n = t._first; n;) n instanceof eY ? tp(n, e) : !n.vars.yoyoEase || n._yoyo && n._repeat || n._yoyo === e || (n.timeline ? tp(n.timeline, e) : (i = n._ease, n._ease = n._yEase, n._yEase = i, n._yoyo = e)), n = n._next
    }

    function tf(t, e, i, n) {
        void 0 === i && (i = function t(i) {
            return 1 - e(1 - i)
        }), void 0 === n && (n = function t(i) {
            return i < .5 ? e(2 * i) / 2 : 1 - e(2 * (1 - i)) / 2
        });
        var s, r = {easeIn: e, easeOut: i, easeInOut: n};
        return b(t, function (t) {
            for (var e in eS[t] = ee[t] = r, eS[s = t.toLowerCase()] = i, r) eS[s + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = eS[t + "." + e] = r[e]
        }), r
    }

    function tm(t) {
        return function (e) {
            return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
        }
    }

    function tg(t, e, i) {
        function n(t) {
            return 1 === t ? 1 : s * Math.pow(2, -10 * t) * t5((t - o) * r) + 1
        }

        var s = 1 <= e ? e : 1, r = (i || (t ? .3 : .45)) / (e < 1 ? e : 1), o = r / t2 * (Math.asin(1 / s) || 0), a = "out" === t ? n : "in" === t ? function (t) {
            return 1 - n(1 - t)
        } : tm(n);
        return r = t2 / r, a.config = function (e, i) {
            return tg(t, e, i)
        }, a
    }

    function ty(t, e) {
        function i(t) {
            return t ? --t * t * ((e + 1) * t + e) + 1 : 0
        }

        void 0 === e && (e = 1.70158);
        var n = "out" === t ? i : "in" === t ? function (t) {
            return 1 - i(1 - t)
        } : tm(i);
        return n.config = function (e) {
            return ty(t, e)
        }, n
    }

    var tv, t$, t8, tb, t_, tw, tx, tk, tD, tC, tS, tT, tE, tA, tP, tL, tM, t0, tO, tI, t9, tY, tz, tH, tN, tj, tR, t1, tW = {autoSleep: 120, force3D: "auto", nullTargetWarn: !1, units: {lineHeight: ""}}, tB = {duration: .5, overwrite: !1, delay: 0}, tF = 1e8, tV = 1 / tF, t2 = 2 * Math.PI, t3 = t2 / 4, t4 = 0, tq = Math.sqrt, t7 = Math.cos, t5 = Math.sin, tU = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {
    }, t6 = Array.isArray, tX = /(?:-?\.?\d|\.)+/gi, tG = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, tQ = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, tZ = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, tK = /[+-]=-?[.\d]+/, tJ = /[^,'"\[\]\s]+/gi, et = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ee = {}, ei = {suppressEvents: !0, isStart: !0}, en = {suppressEvents: !0}, es = {}, er = [], eo = {}, ea = {}, el = {}, ec = 30, eh = [], eu = "", ed = function t(e, i) {
        for (var n in i) e[n] = i[n];
        return e
    }, ep = function t(e, i) {
        var n = Math.floor(e /= i);
        return e && n === e ? n - 1 : n
    }, ef = function t(e) {
        var i = e.data;
        return "isFromStart" === i || "isStart" === i
    }, em = {_start: 0, endTime: m, totalDuration: m}, eg = function t(e, i, s) {
        var r, o, a, l = e.labels, c = e._recent || em, h = e.duration() >= tF ? c.endTime(!1) : e._dur;
        return n(i) && (isNaN(i) || i in l) ? (o = i.charAt(0), a = "%" === i.substr(-1), r = i.indexOf("="), "<" === o || ">" === o ? (0 <= r && (i = i.replace(/=/, "")), ("<" === o ? c._start : c.endTime(0 <= c._repeat)) + (parseFloat(i.substr(1)) || 0) * (a ? (r < 0 ? c : s).totalDuration() / 100 : 1)) : r < 0 ? (i in l || (l[i] = h), l[i]) : (o = parseFloat(i.charAt(r - 1) + i.substr(r + 1)), a && s && (o = o / 100 * (t6(s) ? s[0] : s).totalDuration()), 1 < r ? t(e, i.substr(0, r - 1), s) + o : h + o)) : null == i ? h : +i
    }, ey = function t(e, i, n) {
        return n < e ? e : i < n ? i : n
    }, ev = [].slice, e$ = function t(e, i, s) {
        var r, o, a;
        return t8 && !i && t8.selector ? t8.selector(e) : !n(e) || s || !tw && eC() ? t6(e) ? (r = e, o = s, void 0 === a && (a = []), r.forEach(function (t) {
            return n(t) && !o || Z(t, 1) ? a.push.apply(a, e$(t)) : a.push(t)
        }) || a) : Z(e) ? ev.call(e, 0) : e ? [e] : [] : ev.call((i || tx).querySelectorAll(e), 0)
    }, e8 = function t(e, i, n, s, r) {
        var o = i - e, a = s - n;
        return G(r, function (t) {
            return n + ((t - e) / o * a || 0)
        })
    }, eb = function t(e, i, n) {
        var s, r, o, a = e.vars, l = a[i], c = t8, h = e._ctx;
        if (l) return s = a[i + "Params"], r = a.callbackScope || e, n && er.length && D(), h && (t8 = h), o = s ? l.apply(r, s) : l.call(r), t8 = c, o
    }, e_ = 255, ew = {aqua: [0, e_, e_], lime: [0, e_, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, e_], navy: [0, 0, 128], white: [e_, e_, e_], olive: [128, 128, 0], yellow: [e_, e_, 0], orange: [e_, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [e_, 0, 0], pink: [e_, 192, 203], cyan: [0, e_, e_], transparent: [e_, e_, e_, 0]}, ex = function () {
        var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in ew) e += "|" + t + "\\b";
        return RegExp(e + ")", "gi")
    }(), ek = /hsl[a]?\(/, eD = (tI = 500, t9 = 33, tz = tY = (tO = Date.now)(), tN = tH = 1e3 / 240, tL = {
        time: 0, frame: 0, tick: function t() {
            eL(!0)
        }, deltaRatio: function t(e) {
            return tM / (1e3 / (e || 60))
        }, wake: function t() {
            tD && (!tw && c() && (tx = (t_ = tw = window).document || {}, ee.gsap = iv, (t_.gsapVersions || (t_.gsapVersions = [])).push(iv.version), u(tk || t_.GreenSockGlobals || !t_.gsap && t_ || {}), tP = t_.requestAnimationFrame), tE && tL.sleep(), tA = tP || function (t) {
                return setTimeout(t, tN - 1e3 * tL.time + 1 | 0)
            }, tT = 1, eL(2))
        }, sleep: function t() {
            (tP ? t_.cancelAnimationFrame : clearTimeout)(tE), tT = 0, tA = m
        }, lagSmoothing: function t(e, i) {
            t9 = Math.min(i, tI = e || 1e8, 0)
        }, fps: function t(e) {
            tH = 1e3 / (e || 240), tN = 1e3 * tL.time + tH
        }, add: function t(e, i, n) {
            var s = i ? function (t, i, n, r) {
                e(t, i, n, r), tL.remove(s)
            } : e;
            return tL.remove(e), tj[n ? "unshift" : "push"](s), eC(), s
        }, remove: function t(e, i) {
            ~(i = tj.indexOf(e)) && tj.splice(i, 1) && i <= t0 && t0--
        }, _listeners: tj = []
    }), eC = function t() {
        return !tT && eD.wake()
    }, eS = {}, eT = /^[\d.\-M][\d.\-,\s]/, eE = /["']/g, eA = function t(e) {
        return function (t) {
            return 1 - e(1 - t)
        }
    }, eP = function t(e, i) {
        var n, r, o, a, l, c, h;
        return e && (s(e) ? e : eS[e] || ((o = eS[(r = ((n = e) + "").split("("))[0]]) && 1 < r.length && o.config ? o.config.apply(null, ~n.indexOf("{") ? [function t(e) {
            for (var i, n, s, r = {}, o = e.substr(1, e.length - 3).split(":"), a = o[0], l = 1, c = o.length; l < c; l++) n = o[l], i = l !== c - 1 ? n.lastIndexOf(",") : n.length, s = n.substr(0, i), r[a] = isNaN(s) ? s.replace(eE, "").trim() : +s, a = n.substr(i + 1).trim();
            return r
        }(r[1])] : (l = (a = n).indexOf("(") + 1, c = a.indexOf(")"), h = a.indexOf("(", l), a.substring(l, ~h && h < c ? a.indexOf(")", c + 1) : c)).split(",").map(S)) : eS._CE && eT.test(n) ? eS._CE("", n) : o)) || i
    };

    function eL(t) {
        var e, i, n, s, r = tO() - tz, o = !0 === t;
        if (tI < r && (tY += r - t9), (0 < (e = (n = (tz += r) - tY) - tN) || o) && (s = ++tL.frame, tM = n - 1e3 * tL.time, tL.time = n /= 1e3, tN += e + (tH <= e ? 4 : tH - e), i = 1), o || (tE = tA(eL)), i) for (t0 = 0; t0 < tj.length; t0++) tj[t0](n, tM, s, t)
    }

    function eM(t) {
        return t < t1 ? tR * t * t : t < .7272727272727273 ? tR * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? tR * (t -= 2.25 / 2.75) * t + .9375 : tR * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }

    b("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
        var i = e < 5 ? e + 1 : e;
        tf(t + ",Power" + (i - 1), e ? function (t) {
            return Math.pow(t, i)
        } : function (t) {
            return t
        }, function (t) {
            return 1 - Math.pow(1 - t, i)
        }, function (t) {
            return t < .5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2
        })
    }), eS.Linear.easeNone = eS.none = eS.Linear.easeIn, tf("Elastic", tg("in"), tg("out"), tg()), tR = 7.5625, t1 = 1 / 2.75, tf("Bounce", function (t) {
        return 1 - eM(1 - t)
    }, eM), tf("Expo", function (t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }), tf("Circ", function (t) {
        return -(tq(1 - t * t) - 1)
    }), tf("Sine", function (t) {
        return 1 === t ? 1 : 1 - t7(t * t3)
    }), tf("Back", ty("in"), ty("out"), ty()), eS.SteppedEase = eS.steps = ee.SteppedEase = {
        config: function t(e, i) {
            void 0 === e && (e = 1);
            var n = 1 / e, s = e + (i ? 0 : 1), r = i ? 1 : 0;
            return function (t) {
                return ((s * ey(0, .99999999, t) | 0) + r) * n
            }
        }
    }, tB.ease = eS["quad.out"], b("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
        return eu += t + "," + t + "Params,"
    });
    var e0, eO = function t(e, i) {
        this.id = t4++, (e._gsap = this).target = e, this.harness = i, this.get = i ? i.get : v, this.set = i ? i.getSetter : e5
    }, eI = ((e0 = e9.prototype).delay = function t(e) {
        return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay
    }, e0.duration = function t(e) {
        return arguments.length ? this.totalDuration(0 < this._repeat ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
    }, e0.totalDuration = function t(e) {
        return arguments.length ? (this._dirty = 0, q(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }, e0.totalTime = function t(e, i) {
        if (eC(), !arguments.length) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
            for (R(this, e), !n._dp || n.parent || W(n, this); n && n.parent;) n.parent._time !== n._start + (0 <= n._ts ? n._tTime / n._ts : -((n.totalDuration() - n._tTime) / n._ts)) && n.totalTime(n._tTime, !0), n = n.parent;
            !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && e < this._tDur || this._ts < 0 && 0 < e || !this._tDur && !e) && B(this._dp, this, this._start - this._delay)
        }
        return this._tTime === e && (this._dur || i) && (!this._initted || Math.abs(this._zTime) !== tV) && (e || this._initted || !this.add && !this._ptLookup) || (this._ts || (this._pTime = e), C(this, e, i)), this
    }, e0.time = function t(e, i) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + H(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), i) : this._time
    }, e0.totalProgress = function t(e, i) {
        return arguments.length ? this.totalTime(this.totalDuration() * e, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
    }, e0.progress = function t(e, i) {
        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + H(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
    }, e0.iteration = function t(e, i) {
        var n = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (e - 1) * n, i) : this._repeat ? ep(this._tTime, n) + 1 : 1
    }, e0.timeScale = function t(e) {
        if (!arguments.length) return this._rts === -tV ? 0 : this._rts;
        if (this._rts === e) return this;
        var i = this.parent && this._ts ? N(this.parent._time, this) : this._tTime;
        return this._rts = +e || 0, this._ts = this._ps || e === -tV ? 0 : this._rts, this.totalTime(ey(-this._delay, this._tDur, i), !0), j(this), function t(e) {
            for (var i = e.parent; i && i.parent;) i._dirty = 1, i.totalDuration(), i = i.parent;
            return e
        }(this)
    }, e0.paused = function t(e) {
        return arguments.length ? (this._ps !== e && ((this._ps = e) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (eC(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== tV && (this._tTime -= tV)))), this) : this._ps
    }, e0.startTime = function t(e) {
        if (arguments.length) {
            this._start = e;
            var i = this.parent || this._dp;
            return i && (i._sort || !this.parent) && B(i, this, e - this._delay), this
        }
        return this._start
    }, e0.endTime = function t(e) {
        return this._start + (l(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }, e0.rawTime = function t(e) {
        var i = this.parent || this._dp;
        return i ? e && (!this._ts || this._repeat && this._time && 1 > this.totalProgress()) ? this._tTime % (this._dur + this._rDelay) : this._ts ? N(i.rawTime(e), this) : this._tTime : this._tTime
    }, e0.revert = function t(e) {
        void 0 === e && (e = en);
        var i = t$;
        return t$ = e, this.timeline && this.timeline.revert(e), this.totalTime(-.01, e.suppressEvents), "nested" !== this.data && I(this), t$ = i, this
    }, e0.globalTime = function t(e) {
        for (var i = this, n = arguments.length ? e : i.rawTime(); i;) n = i._start + n / (i._ts || 1), i = i._dp;
        return !this.parent && this.vars.immediateRender ? -1 : n
    }, e0.repeat = function t(e) {
        return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, U(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
    }, e0.repeatDelay = function t(e) {
        if (arguments.length) {
            var i = this._time;
            return this._rDelay = e, U(this), i ? this.time(i) : this
        }
        return this._rDelay
    }, e0.yoyo = function t(e) {
        return arguments.length ? (this._yoyo = e, this) : this._yoyo
    }, e0.seek = function t(e, i) {
        return this.totalTime(eg(this, e), l(i))
    }, e0.restart = function t(e, i) {
        return this.play().totalTime(e ? -this._delay : 0, l(i))
    }, e0.play = function t(e, i) {
        return null != e && this.seek(e, i), this.reversed(!1).paused(!1)
    }, e0.reverse = function t(e, i) {
        return null != e && this.seek(e || this.totalDuration(), i), this.reversed(!0).paused(!1)
    }, e0.pause = function t(e, i) {
        return null != e && this.seek(e, i), this.paused(!0)
    }, e0.resume = function t() {
        return this.paused(!1)
    }, e0.reversed = function t(e) {
        return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -tV : 0)), this) : this._rts < 0
    }, e0.invalidate = function t() {
        return this._initted = this._act = 0, this._zTime = -tV, this
    }, e0.isActive = function t() {
        var e, i = this.parent || this._dp, n = this._start;
        return !(i && !(this._ts && this._initted && i.isActive() && (e = i.rawTime(!0)) >= n && e < this.endTime(!0) - tV))
    }, e0.eventCallback = function t(e, i, n) {
        var s = this.vars;
        return 1 < arguments.length ? (i ? (s[e] = i, n && (s[e + "Params"] = n), "onUpdate" === e && (this._onUpdate = i)) : delete s[e], this) : s[e]
    }, e0.then = function t(e) {
        var i = this;
        return new Promise(function (t) {
            function n() {
                var e = i.then;
                i.then = null, s(r) && (r = r(i)) && (r.then || r === i) && (i.then = e), t(r), i.then = e
            }

            var r = s(e) ? e : T;
            i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? n() : i._prom = n
        })
    }, e0.kill = function t() {
        ta(this)
    }, e9);

    function e9(t) {
        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, q(this, +t.duration, 1, 1), this.data = t.data, t8 && (this._ctx = t8).data.push(this), tT || eD.wake()
    }

    E(eI.prototype, {_time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: null, _initted: !1, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -tV, _prom: 0, _ps: !1, _rts: 1});
    var eY = function (t) {
        function o(e, n) {
            var s;
            return void 0 === e && (e = {}), (s = t.call(this, e) || this).labels = {}, s.smoothChildTiming = !!e.smoothChildTiming, s.autoRemoveChildren = !!e.autoRemoveChildren, s._sort = l(e.sortChildren), tb && B(e.parent || tb, i(s), n), e.reversed && s.reverse(), e.paused && s.paused(!0), e.scrollTrigger && F(i(s), e.scrollTrigger), s
        }

        e(o, t);
        var a = o.prototype;
        return a.to = function t(e, i, n) {
            return X(0, arguments, this), this
        }, a.from = function t(e, i, n) {
            return X(1, arguments, this), this
        }, a.fromTo = function t(e, i, n, s) {
            return X(2, arguments, this), this
        }, a.set = function t(e, i, n) {
            return i.duration = 0, i.parent = this, L(i).repeatDelay || (i.repeat = 0), i.immediateRender = !!i.immediateRender, new eV(e, i, eg(this, n), 1), this
        }, a.call = function t(e, i, n) {
            return B(this, eV.delayedCall(0, e, i), n)
        }, a.staggerTo = function t(e, i, n, s, r, o, a) {
            return n.duration = i, n.stagger = n.stagger || s, n.onComplete = o, n.onCompleteParams = a, n.parent = this, new eV(e, n, eg(this, r)), this
        }, a.staggerFrom = function t(e, i, n, s, r, o, a) {
            return n.runBackwards = 1, L(n).immediateRender = l(n.immediateRender), this.staggerTo(e, i, n, s, r, o, a)
        }, a.staggerFromTo = function t(e, i, n, s, r, o, a, c) {
            return s.startAt = n, L(s).immediateRender = l(s.immediateRender), this.staggerTo(e, i, s, r, o, a, c)
        }, a.render = function t(e, i, n) {
            var s, r, o, a, l, c, h, u, d, p, f, m, g = this._time, y = this._dirty ? this.totalDuration() : this._tDur, v = this._dur, b = e <= 0 ? 0 : w(e), _ = this._zTime < 0 != e < 0 && (this._initted || !v);
            if (this !== tb && y < b && 0 <= e && (b = y), b !== this._tTime || n || _) {
                if (g !== this._time && v && (b += this._time - g, e += this._time - g), s = b, d = this._start, c = !(u = this._ts), _ && (v || (g = this._zTime), !e && i || (this._zTime = e)), this._repeat) {
                    if (f = this._yoyo, l = v + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(100 * l + e, i, n);
                    if (s = w(b % l), b === y ? (a = this._repeat, s = v) : ((a = ~~(b / l)) && a === b / l && (s = v, a--), v < s && (s = v)), p = ep(this._tTime, l), !g && this._tTime && p !== a && (p = a), f && 1 & a && (s = v - s, m = 1), a !== p && !this._lock) {
                        var x = f && 1 & p, k = x === (f && 1 & a);
                        if (a < p && (x = !x), g = x ? 0 : v, this._lock = 1, this.render(g || (m ? 0 : w(a * l)), i, !v)._lock = 0, this._tTime = b, !i && this.parent && eb(this, "onRepeat"), this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1), g && g !== this._time || !this._ts != c || this.vars.onRepeat && !this.parent && !this._act || (v = this._dur, y = this._tDur, k && (this._lock = 2, g = x ? v : -.0001, this.render(g, !0), this.vars.repeatRefresh && !m && this.invalidate()), this._lock = 0, !this._ts && !c)) return this;
                        tp(this, m)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function t(e, i, n) {
                    var s;
                    if (i < n) for (s = e._first; s && s._start <= n;) {
                        if ("isPause" === s.data && s._start > i) return s;
                        s = s._next
                    } else for (s = e._last; s && s._start >= n;) {
                        if ("isPause" === s.data && s._start < i) return s;
                        s = s._prev
                    }
                }(this, w(g), w(s))) && (b -= s - (s = h._start)), this._tTime = b, this._time = s, this._act = !u, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, g = 0), !g && s && !i && (eb(this, "onStart"), this._tTime !== b)) return this;
                if (g <= s && 0 <= e) for (r = this._first; r;) {
                    if (o = r._next, (r._act || s >= r._start) && r._ts && h !== r) {
                        if (r.parent !== this) return this.render(e, i, n);
                        if (r.render(0 < r._ts ? (s - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (s - r._start) * r._ts, i, n), s !== this._time || !this._ts && !c) {
                            h = 0, o && (b += this._zTime = -tV);
                            break
                        }
                    }
                    r = o
                } else {
                    n = n || t$, r = this._last;
                    for (var D = e < 0 ? e : s; r;) {
                        if (o = r._prev, (r._act || D <= r._end) && r._ts && h !== r) {
                            if (r.parent !== this) return this.render(e, i, n);
                            if (r.render(0 < r._ts ? (D - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (D - r._start) * r._ts, i, n), s !== this._time || !this._ts && !c) {
                                h = 0, o && (b += this._zTime = D ? -tV : tV);
                                break
                            }
                        }
                        r = o
                    }
                }
                if (h && !i && (this.pause(), h.render(g <= s ? 0 : -tV)._zTime = g <= s ? 1 : -1, this._ts)) return this._start = d, j(this), this.render(e, i, n);
                this._onUpdate && !i && eb(this, "onUpdate", !0), (b === y && this._tTime >= this.totalDuration() || !b && g) && (d !== this._start && Math.abs(u) === Math.abs(this._ts) || this._lock || ((e || !v) && (b === y && 0 < this._ts || !b && this._ts < 0) && I(this, 1), i || e < 0 && !g || !b && !g && y || (eb(this, b === y && 0 <= e ? "onComplete" : "onReverseComplete", !0), !this._prom || b < y && 0 < this.timeScale() || this._prom())))
            }
            return this
        }, a.add = function t(e, i) {
            var o = this;
            if (r(i) || (i = eg(this, i, e)), !(e instanceof eI)) {
                if (t6(e)) return e.forEach(function (t) {
                    return o.add(t, i)
                }), this;
                if (n(e)) return this.addLabel(e, i);
                if (!s(e)) return this;
                e = eV.delayedCall(0, e)
            }
            return this !== e ? B(this, e, i) : this
        }, a.getChildren = function t(e, i, n, s) {
            void 0 === e && (e = !0), void 0 === i && (i = !0), void 0 === n && (n = !0), void 0 === s && (s = -tF);
            for (var r = [], o = this._first; o;) o._start >= s && (o instanceof eV ? i && r.push(o) : (n && r.push(o), e && r.push.apply(r, o.getChildren(!0, i, n)))), o = o._next;
            return r
        }, a.getById = function t(e) {
            for (var i = this.getChildren(1, 1, 1), n = i.length; n--;) if (i[n].vars.id === e) return i[n]
        }, a.remove = function t(e) {
            return n(e) ? this.removeLabel(e) : s(e) ? this.killTweensOf(e) : (O(this, e), e === this._recent && (this._recent = this._last), Y(this))
        }, a.totalTime = function e(i, n) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = w(eD.time - (0 < this._ts ? i / this._ts : -((this.totalDuration() - i) / this._ts)))), t.prototype.totalTime.call(this, i, n), this._forcing = 0, this) : this._tTime
        }, a.addLabel = function t(e, i) {
            return this.labels[e] = eg(this, i), this
        }, a.removeLabel = function t(e) {
            return delete this.labels[e], this
        }, a.addPause = function t(e, i, n) {
            var s = eV.delayedCall(0, i || m, n);
            return s.data = "isPause", this._hasPause = 1, B(this, s, eg(this, e))
        }, a.removePause = function t(e) {
            var i = this._first;
            for (e = eg(this, e); i;) i._start === e && "isPause" === i.data && I(i), i = i._next
        }, a.killTweensOf = function t(e, i, n) {
            for (var s = this.getTweensOf(e, n), r = s.length; r--;) eN !== s[r] && s[r].kill(e, i);
            return this
        }, a.getTweensOf = function t(e, i) {
            for (var n, s = [], o = e$(e), a = this._first, l = r(i); a;) a instanceof eV ? k(a._targets, o) && (l ? (!eN || a._initted && a._ts) && a.globalTime(0) <= i && a.globalTime(a.totalDuration()) > i : !i || a.isActive()) && s.push(a) : (n = a.getTweensOf(o, i)).length && s.push.apply(s, n), a = a._next;
            return s
        }, a.tweenTo = function t(e, i) {
            i = i || {};
            var n, s = this, r = eg(s, e), o = i.startAt, a = i.onStart, l = i.onStartParams, c = i.immediateRender, h = eV.to(s, E({
                ease: i.ease || "none", lazy: !1, immediateRender: !1, time: r, overwrite: "auto", duration: i.duration || Math.abs((r - (o && "time" in o ? o.time : s._time)) / s.timeScale()) || tV, onStart: function t() {
                    if (s.pause(), !n) {
                        var e = i.duration || Math.abs((r - (o && "time" in o ? o.time : s._time)) / s.timeScale());
                        h._dur !== e && q(h, e, 0, 1).render(h._time, !0, !0), n = 1
                    }
                    a && a.apply(h, l || [])
                }
            }, i));
            return c ? h.render(0) : h
        }, a.tweenFromTo = function t(e, i, n) {
            return this.tweenTo(i, E({startAt: {time: eg(this, e)}}, n))
        }, a.recent = function t() {
            return this._recent
        }, a.nextLabel = function t(e) {
            return void 0 === e && (e = this._time), to(this, eg(this, e))
        }, a.previousLabel = function t(e) {
            return void 0 === e && (e = this._time), to(this, eg(this, e), 1)
        }, a.currentLabel = function t(e) {
            return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + tV)
        }, a.shiftChildren = function t(e, i, n) {
            void 0 === n && (n = 0);
            for (var s, r = this._first, o = this.labels; r;) r._start >= n && (r._start += e, r._end += e), r = r._next;
            if (i) for (s in o) o[s] >= n && (o[s] += e);
            return Y(this)
        }, a.invalidate = function e() {
            var i = this._first;
            for (this._lock = 0; i;) i.invalidate(), i = i._next;
            return t.prototype.invalidate.call(this)
        }, a.clear = function t(e) {
            void 0 === e && (e = !0);
            for (var i, n = this._first; n;) i = n._next, this.remove(n), n = i;
            return this._dp && (this._time = this._tTime = this._pTime = 0), e && (this.labels = {}), Y(this)
        }, a.totalDuration = function t(e) {
            var i, n, s, r = 0, o = this, a = o._last, l = tF;
            if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -e : e));
            if (o._dirty) {
                for (s = o.parent; a;) i = a._prev, a._dirty && a.totalDuration(), l < (n = a._start) && o._sort && a._ts && !o._lock ? (o._lock = 1, B(o, a, n - a._delay, 1)._lock = 0) : l = n, n < 0 && a._ts && (r -= n, (!s && !o._dp || s && s.smoothChildTiming) && (o._start += n / o._ts, o._time -= n, o._tTime -= n), o.shiftChildren(-n, !1, -1 / 0), l = 0), a._end > r && a._ts && (r = a._end), a = i;
                q(o, o === tb && o._time > r ? o._time : r, 1, 1), o._dirty = 0
            }
            return o._tDur
        }, o.updateRoot = function t(e) {
            if (tb._ts && (C(tb, N(e, tb)), tC = eD.frame), eD.frame >= ec) {
                ec += tW.autoSleep || 120;
                var i = tb._first;
                if ((!i || !i._ts) && tW.autoSleep && eD._listeners.length < 2) {
                    for (; i && !i._ts;) i = i._next;
                    i || eD.sleep()
                }
            }
        }, o
    }(eI);

    function ez(t, e, i, r, o, l) {
        var c, h, u, d;
        if (ea[t] && !1 !== (c = new ea[t]).init(o, c.rawVars ? e[t] : function t(e, i, r, o, l) {
            if (s(e) && (e = eW(e, l, i, r, o)), !a(e) || e.style && e.nodeType || t6(e) || tU(e)) return n(e) ? eW(e, l, i, r, o) : e;
            var c, h = {};
            for (c in e) h[c] = eW(e[c], l, i, r, o);
            return h
        }(e[t], r, o, l, i), i, r, l) && (i._pt = h = new eJ(i._pt, o, t, 0, 1, c.render, c, 0, c.priority), i !== tS)) for (u = i._ptLookup[i._targets.indexOf(o)], d = c._props.length; d--;) u[c._props[d]] = h;
        return c
    }

    function eH(t, e, i, n) {
        var s, r, o = e.ease || n || "power1.inOut";
        if (t6(e)) r = i[t] || (i[t] = []), e.forEach(function (t, i) {
            return r.push({t: i / (e.length - 1) * 100, v: t, e: o})
        }); else for (s in e) r = i[s] || (i[s] = []), "ease" === s || r.push({t: parseFloat(t), v: e[s], e: o})
    }

    E(eY.prototype, {_lock: 0, _hasPause: 0, _forcing: 0});
    var eN, ej, eR = function t(e, i, r, o, a, l, c, h, u, p) {
        s(o) && (o = o(a || 0, e, l));
        var f, m = e[i], g = "get" !== r ? r : s(m) ? u ? e[i.indexOf("set") || !s(e["get" + i.substr(3)]) ? i : "get" + i.substr(3)](u) : e[i]() : m, y = s(m) ? u ? e7 : eq : e4;
        if (!n(o) || (~o.indexOf("random(") && (o = tr(o)), "=" !== o.charAt(1) || ((f = x(g, o) + (Q(g) || 0)) || 0 === f) && (o = f)), !p || g !== o || ej) return isNaN(g * o) || "" === o ? (m || i in e || d(i, o), (function t(e, i, n, s, r, o, a) {
            var l, c, h, u, d, p, f, m, g = new eJ(this._pt, e, i, 0, 1, eX, null, r), y = 0, v = 0;
            for (g.b = n, g.e = s, n += "", (f = ~(s += "").indexOf("random(")) && (s = tr(s)), o && (o(m = [n, s], e, i), n = m[0], s = m[1]), c = n.match(tZ) || []; l = tZ.exec(s);) u = l[0], d = s.substring(y, l.index), h ? h = (h + 1) % 5 : "rgba(" === d.substr(-5) && (h = 1), u !== c[v++] && (p = parseFloat(c[v - 1]) || 0, g._pt = {_next: g._pt, p: d || 1 === v ? d : ",", s: p, c: "=" === u.charAt(1) ? x(p, u) - p : parseFloat(u) - p, m: h && h < 4 ? Math.round : 0}, y = tZ.lastIndex);
            return g.c = y < s.length ? s.substring(y, s.length) : "", g.fp = a, (tK.test(s) || f) && (g.e = 0), this._pt = g
        }).call(this, e, i, g, o, y, h || tW.stringFilter, u)) : (f = new eJ(this._pt, e, i, +g || 0, o - (g || 0), "boolean" == typeof m ? e6 : eU, 0, y), u && (f.fp = u), c && f.modifier(c, this, e), this._pt = f)
    }, e1 = function t(e, i) {
        var n, s, r, o, a, c, h, u, d, p, f, m, v, b = e.vars, _ = b.ease, w = b.startAt, x = b.immediateRender, k = b.lazy, C = b.onUpdate, S = b.onUpdateParams, T = b.callbackScope, A = b.runBackwards, L = b.yoyoEase, M = b.keyframes, O = b.autoRevert, Y = e._dur, z = e._startAt, H = e._targets, N = e.parent, j = N && "nested" === N.data ? N.parent._targets : H, R = "auto" === e._overwrite && !tv, W = e.timeline;
        if (!W || M && _ || (_ = "none"), e._ease = eP(_, tB.ease), e._yEase = L ? eA(eP(!0 === L ? _ : L, tB.ease)) : 0, L && e._yoyo && !e._repeat && (L = e._yEase, e._yEase = e._ease, e._ease = L), e._from = !W && !!b.runBackwards, !W || M && !b.stagger) {
            if (m = (u = H[0] ? y(H[0]).harness : 0) && b[u.prop], n = P(b, es), z && (z.revert(A && Y ? en : ei), z._lazy = 0), w) {
                if (I(e._startAt = eV.set(H, E({data: "isStart", overwrite: !1, parent: N, immediateRender: !0, lazy: l(k), startAt: null, delay: 0, onUpdate: C, onUpdateParams: S, callbackScope: T, stagger: 0}, w))), i < 0 && (t$ || !x && !O) && e._startAt.revert(en), x && Y && i <= 0) return void (i && (e._zTime = i))
            } else if (A && Y && !z) {
                if (i && (x = !1), r = E({overwrite: !1, data: "isFromStart", lazy: x && l(k), immediateRender: x, stagger: 0, parent: N}, n), m && (r[u.prop] = m), I(e._startAt = eV.set(H, r)), i < 0 && (t$ ? e._startAt.revert(en) : e._startAt.render(-1, !0)), e._zTime = i, x) {
                    if (!i) return
                } else t(e._startAt, tV)
            }
            for (e._pt = e._ptCache = 0, k = Y && l(k) || k && !Y, s = 0; s < H.length; s++) {
                if (h = (a = H[s])._gsap || g(H)[s]._gsap, e._ptLookup[s] = p = {}, eo[h.id] && er.length && D(), f = j === H ? s : j.indexOf(a), u && !1 !== (d = new u).init(a, m || n, e, f, j) && (e._pt = o = new eJ(e._pt, a, d.name, 0, 1, d.render, d, 0, d.priority), d._props.forEach(function (t) {
                    p[t] = o
                }), d.priority && (c = 1)), !u || m) for (r in n) ea[r] && (d = ez(r, n, e, f, a, j)) ? d.priority && (c = 1) : p[r] = o = eR.call(e, a, r, "get", n[r], f, j, 0, b.stringFilter);
                e._op && e._op[s] && e.kill(a, e._op[s]), R && e._pt && (eN = e, tb.killTweensOf(a, p, e.globalTime(i)), v = !e.parent, eN = 0), e._pt && k && (eo[h.id] = 1)
            }
            c && eK(e), e._onInit && e._onInit(e)
        }
        e._onUpdate = C, e._initted = (!e._op || e._pt) && !v, M && i <= 0 && W.render(tF, !0, !0)
    }, eW = function t(e, i, r, o, a) {
        return s(e) ? e.call(i, r, o, a) : n(e) && ~e.indexOf("random(") ? tr(e) : e
    }, eB = eu + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", eF = {};
    b(eB + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
        return eF[t] = 1
    });
    var eV = function (t) {
        function s(e, n, s, o) {
            "number" == typeof n && (s.duration = n, n = s, s = null);
            var c, u, d, f, m, y, v, b, _, x = (c = t.call(this, o ? n : L(n)) || this).vars, k = x.duration, D = x.delay, C = x.immediateRender, S = x.stagger, T = x.overwrite, A = x.keyframes, M = x.defaults, O = x.scrollTrigger, I = x.yoyoEase, Y = n.parent || tb, z = (t6(e) || tU(e) ? r(e[0]) : "length" in n) ? [e] : e$(e);
            if (c._targets = z.length ? g(z) : p("GSAP target " + e + " not found. https://greensock.com", !tW.nullTargetWarn) || [], c._ptLookup = [], c._overwrite = T, A || S || h(k) || h(D)) {
                if (n = c.vars, (u = c.timeline = new eY({data: "nested", defaults: M || {}})).kill(), u.parent = u._dp = i(c), u._start = 0, S || h(k) || h(D)) {
                    if (m = z.length, b = S && tt(S), a(S)) for (y in S) ~eB.indexOf(y) && ((_ = _ || {})[y] = S[y]);
                    for (d = 0; d < m; d++) (f = P(n, eF)).stagger = 0, I && (f.yoyoEase = I), _ && ed(f, _), v = z[d], f.duration = +eW(k, i(c), d, v, z), f.delay = (+eW(D, i(c), d, v, z) || 0) - c._delay, !S && 1 === m && f.delay && (c._delay = D = f.delay, c._start += D, f.delay = 0), u.to(v, f, b ? b(d, v, z) : 0), u._ease = eS.none;
                    u.duration() ? k = D = 0 : c.timeline = 0
                } else if (A) {
                    L(E(u.vars.defaults, {ease: "none"})), u._ease = eP(A.ease || n.ease || "none");
                    var H, N, j, R = 0;
                    if (t6(A)) A.forEach(function (t) {
                        return u.to(z, t, ">")
                    }), u.duration(); else {
                        for (y in f = {}, A) "ease" === y || "easeEach" === y || eH(y, A[y], f, A.easeEach);
                        for (y in f) for (H = f[y].sort(function (t, e) {
                            return t.t - e.t
                        }), d = R = 0; d < H.length; d++) (j = {ease: (N = H[d]).e, duration: (N.t - (d ? H[d - 1].t : 0)) / 100 * k})[y] = N.v, u.to(z, j, R), R += j.duration;
                        u.duration() < k && u.to({}, {duration: k - u.duration()})
                    }
                }
                k || c.duration(k = u.duration())
            } else c.timeline = 0;
            return !0 !== T || tv || (eN = i(c), tb.killTweensOf(z), eN = 0), B(Y, i(c), s), n.reversed && c.reverse(), n.paused && c.paused(!0), (C || !k && !A && c._start === w(Y._time) && l(C) && function t(e) {
                return !e || e._ts && t(e.parent)
            }(i(c)) && "nested" !== Y.data) && (c._tTime = -tV, c.render(Math.max(0, -D))), O && F(i(c), O), c
        }

        e(s, t);
        var o = s.prototype;
        return o.render = function t(e, i, n) {
            var s, r, o, a, l, c, h, u, d, p = this._time, f = this._tDur, m = this._dur, g = e < 0, y = f - tV < e && !g ? f : e < tV ? 0 : e;
            if (m) {
                if (y !== this._tTime || !e || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 != g) {
                    if (s = y, u = this.timeline, this._repeat) {
                        if (a = m + this._rDelay, this._repeat < -1 && g) return this.totalTime(100 * a + e, i, n);
                        if (s = w(y % a), y === f ? (o = this._repeat, s = m) : ((o = ~~(y / a)) && o === y / a && (s = m, o--), m < s && (s = m)), (c = this._yoyo && 1 & o) && (d = this._yEase, s = m - s), l = ep(this._tTime, a), s === p && !n && this._initted) return this._tTime = y, this;
                        o !== l && (u && this._yEase && tp(u, c), !this.vars.repeatRefresh || c || this._lock || (this._lock = n = 1, this.render(w(a * o), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (V(this, g ? e : s, n, i)) return this._tTime = 0, this;
                        if (p !== this._time) return this;
                        if (m !== this._dur) return this.render(e, i, n)
                    }
                    if (this._tTime = y, this._time = s, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (d || this._ease)(s / m), this._from && (this.ratio = h = 1 - h), s && !p && !i && (eb(this, "onStart"), this._tTime !== y)) return this;
                    for (r = this._pt; r;) r.r(h, r.d), r = r._next;
                    u && u.render(e < 0 ? e : !s && c ? -tV : u._dur * u._ease(s / this._dur), i, n) || this._startAt && (this._zTime = e), this._onUpdate && !i && (g && z(this, e, 0, n), eb(this, "onUpdate")), this._repeat && o !== l && this.vars.onRepeat && !i && this.parent && eb(this, "onRepeat"), y !== this._tDur && y || this._tTime !== y || (g && !this._onUpdate && z(this, e, 0, !0), (e || !m) && (y === this._tDur && 0 < this._ts || !y && this._ts < 0) && I(this, 1), i || g && !p || !y && !p || (eb(this, y === f ? "onComplete" : "onReverseComplete", !0), !this._prom || y < f && 0 < this.timeScale() || this._prom()))
                }
            } else !function t(e, i, n, s) {
                var r, o, a, l = e.ratio, c = i < 0 || !i && (!e._start && function t(e) {
                    var i = e.parent;
                    return i && i._ts && i._initted && !i._lock && (0 > i.rawTime() || t(i))
                }(e) && (e._initted || !ef(e)) || (e._ts < 0 || e._dp._ts < 0) && !ef(e)) ? 0 : 1, h = e._rDelay, u = 0;
                if (h && e._repeat && (u = ey(0, e._tDur, i), o = ep(u, h), e._yoyo && 1 & o && (c = 1 - c), o !== ep(e._tTime, h) && (l = 1 - c, e.vars.repeatRefresh && e._initted && e.invalidate())), c !== l || t$ || s || e._zTime === tV || !i && e._zTime) {
                    if (!e._initted && V(e, i, s, n)) return;
                    for (a = e._zTime, e._zTime = i || (n ? tV : 0), n = n || i && !a, e.ratio = c, e._from && (c = 1 - c), e._time = 0, e._tTime = u, r = e._pt; r;) r.r(c, r.d), r = r._next;
                    i < 0 && z(e, i, 0, !0), e._onUpdate && !n && eb(e, "onUpdate"), u && e._repeat && !n && e.parent && eb(e, "onRepeat"), (i >= e._tDur || i < 0) && e.ratio === c && (c && I(e, 1), n || (eb(e, c ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
                } else e._zTime || (e._zTime = i)
            }(this, e, i, n);
            return this
        }, o.targets = function t() {
            return this._targets
        }, o.invalidate = function e() {
            return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
        }, o.resetTo = function t(e, i, n, s) {
            tT || eD.wake(), this._ts || this.play();
            var r, o = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return this._initted || e1(this, o), !function t(e, i, n, s, r, o, a) {
                var l, c, h, u, d = (e._pt && e._ptCache || (e._ptCache = {}))[i];
                if (!d) for (d = e._ptCache[i] = [], h = e._ptLookup, u = e._targets.length; u--;) {
                    if ((l = h[u][i]) && l.d && l.d._pt) for (l = l.d._pt; l && l.p !== i && l.fp !== i;) l = l._next;
                    if (!l) return ej = 1, e.vars[i] = "+=0", e1(e, a), ej = 0, 1;
                    d.push(l)
                }
                for (u = d.length; u--;) (l = (c = d[u])._pt || c).s = !s && 0 !== s || r ? l.s + (s || 0) + o * l.c : s, l.c = n - l.s, c.e && (c.e = _(n) + Q(c.e)), c.b && (c.b = l.s + Q(c.b))
            }(this, e, i, n, s, r = this._ease(o / this._dur), o) ? (R(this, 0), this.parent || M(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0)) : this.resetTo(e, i, n, s)
        }, o.kill = function t(e, i) {
            if (void 0 === i && (i = "all"), !(e || i && "all" !== i)) return this._lazy = this._pt = 0, this.parent ? ta(this) : this;
            if (this.timeline) {
                var s = this.timeline.totalDuration();
                return this.timeline.killTweensOf(e, i, eN && !0 !== eN.vars.overwrite)._first || ta(this), this.parent && s !== this.timeline.totalDuration() && q(this, this._dur * this.timeline._tDur / s, 0, 1), this
            }
            var r, o, a, l, c, h, u, d = this._targets, p = e ? e$(e) : d, f = this._ptLookup, m = this._pt;
            if ((!i || "all" === i) && function t(e, i) {
                for (var n = e.length, s = n === i.length; s && n-- && e[n] === i[n];) ;
                return n < 0
            }(d, p)) return "all" === i && (this._pt = 0), ta(this);
            for (r = this._op = this._op || [], "all" !== i && (n(i) && (c = {}, b(i, function (t) {
                return c[t] = 1
            }), i = c), i = function t(e, i) {
                var n, s, r, o, a = e[0] ? y(e[0]).harness : 0, l = a && a.aliases;
                if (!l) return i;
                for (s in n = ed({}, i), l) if ((s in n)) for (r = (o = l[s].split(",")).length; r--;) n[o[r]] = n[s];
                return n
            }(d, i)), u = d.length; u--;) if (~p.indexOf(d[u])) for (c in o = f[u], "all" === i ? (r[u] = i, l = o, a = {}) : (a = r[u] = r[u] || {}, l = i), l) (h = o && o[c]) && ("kill" in h.d && !0 !== h.d.kill(c) || O(this, h, "_pt"), delete o[c]), "all" !== a && (a[c] = 1);
            return this._initted && !this._pt && m && ta(this), this
        }, s.to = function t(e, i, n) {
            return new s(e, i, n)
        }, s.from = function t(e, i) {
            return X(1, arguments)
        }, s.delayedCall = function t(e, i, n, r) {
            return new s(i, 0, {immediateRender: !1, lazy: !1, overwrite: !1, delay: e, onComplete: i, onReverseComplete: i, onCompleteParams: n, onReverseCompleteParams: n, callbackScope: r})
        }, s.fromTo = function t(e, i, n) {
            return X(2, arguments)
        }, s.set = function t(e, i) {
            return i.duration = 0, i.repeatDelay || (i.repeat = 0), new s(e, i)
        }, s.killTweensOf = function t(e, i, n) {
            return tb.killTweensOf(e, i, n)
        }, s
    }(eI);

    function e2(t, e, i) {
        return t.setAttribute(e, i)
    }

    function e3(t, e, i, n) {
        n.mSet(t, e, n.m.call(n.tween, i, n.mt), n)
    }

    E(eV.prototype, {_targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0}), b("staggerTo,staggerFrom,staggerFromTo", function (t) {
        eV[t] = function () {
            var e = new eY, i = ev.call(arguments, 0);
            return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i)
        }
    });
    var e4 = function t(e, i, n) {
        return e[i] = n
    }, eq = function t(e, i, n) {
        return e[i](n)
    }, e7 = function t(e, i, n, s) {
        return e[i](s.fp, n)
    }, e5 = function t(e, i) {
        return s(e[i]) ? eq : o(e[i]) && e.setAttribute ? e2 : e4
    }, eU = function t(e, i) {
        return i.set(i.t, i.p, Math.round(1e6 * (i.s + i.c * e)) / 1e6, i)
    }, e6 = function t(e, i) {
        return i.set(i.t, i.p, !!(i.s + i.c * e), i)
    }, eX = function t(e, i) {
        var n = i._pt, s = "";
        if (!e && i.b) s = i.b; else if (1 === e && i.e) s = i.e; else {
            for (; n;) s = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round(1e4 * (n.s + n.c * e)) / 1e4) + s, n = n._next;
            s += i.c
        }
        i.set(i.t, i.p, s, i)
    }, eG = function t(e, i) {
        for (var n = i._pt; n;) n.r(e, n.d), n = n._next
    }, eQ = function t(e, i, n, s) {
        for (var r, o = this._pt; o;) r = o._next, o.p === s && o.modifier(e, i, n), o = r
    }, eZ = function t(e) {
        for (var i, n, s = this._pt; s;) n = s._next, (s.p !== e || s.op) && s.op !== e ? s.dep || (i = 1) : O(this, s, "_pt"), s = n;
        return !i
    }, eK = function t(e) {
        for (var i, n, s, r, o = e._pt; o;) {
            for (i = o._next, n = s; n && n.pr > o.pr;) n = n._next;
            (o._prev = n ? n._prev : r) ? o._prev._next = o : s = o, (o._next = n) ? n._prev = o : r = o, o = i
        }
        e._pt = s
    }, eJ = (it.prototype.modifier = function t(e, i, n) {
        this.mSet = this.mSet || this.set, this.set = e3, this.m = e, this.mt = n, this.tween = i
    }, it);

    function it(t, e, i, n, s, r, o, a, l) {
        this.t = e, this.s = n, this.c = s, this.p = i, this.r = r || eU, this.d = o || this, this.set = a || e4, this.pr = l || 0, (this._next = t) && (t._prev = this)
    }

    function ie(t) {
        return (io[t] || ia).map(function (t) {
            return t()
        })
    }

    function ii() {
        var t = Date.now(), e = [];
        2 < t - il && (ie("matchMediaInit"), ir.forEach(function (t) {
            var i, n, s, r, o = t.queries, a = t.conditions;
            for (n in o) (i = t_.matchMedia(o[n]).matches) && (s = 1), i !== a[n] && (a[n] = i, r = 1);
            r && (t.revert(), s && e.push(t))
        }), ie("matchMediaRevert"), e.forEach(function (t) {
            return t.onMatch(t)
        }), il = t, ie("matchMedia"))
    }

    b(eu + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (t) {
        return es[t] = 1
    }), ee.TweenMax = ee.TweenLite = eV, ee.TimelineLite = ee.TimelineMax = eY, tb = new eY({sortChildren: !1, defaults: tB, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0}), tW.stringFilter = td;
    var is, ir = [], io = {}, ia = [], il = 0, ic = ((is = ih.prototype).add = function t(e, i, n) {
        function r() {
            var t, e = t8, r = o.selector;
            return e && e.data.push(o), n && (o.selector = K(n)), t8 = o, t = i.apply(o, arguments), s(t) && o._r.push(t), t8 = e, o.selector = r, o.isReverted = !1, t
        }

        s(e) && (n = i, i = e, e = s);
        var o = this;
        return o.last = r, e === s ? r(o) : e ? o[e] = r : r
    }, is.ignore = function t(e) {
        var i = t8;
        t8 = null, e(this), t8 = i
    }, is.getTweens = function t() {
        var e = [];
        return this.data.forEach(function (t) {
            return t instanceof ih ? e.push.apply(e, t.getTweens()) : t instanceof eV && t._targets[0] !== t.vars.onComplete && e.push(t)
        }), e
    }, is.clear = function t() {
        this._r.length = this.data.length = 0
    }, is.kill = function t(e, i) {
        var n = this;
        if (e ? (this.getTweens().map(function (t) {
            return {g: t.globalTime(0), t: t}
        }).sort(function (t, e) {
            return e.g - t.g || -1
        }).forEach(function (t) {
            return t.t.revert(e)
        }), this.data.forEach(function (t) {
            return !(t instanceof eI) && t.revert && t.revert(e)
        }), this._r.forEach(function (t) {
            return t(e, n)
        }), this.isReverted = !0) : this.data.forEach(function (t) {
            return t.kill && t.kill()
        }), this.clear(), i) {
            var s = ir.indexOf(this);
            ~s && ir.splice(s, 1)
        }
    }, is.revert = function t(e) {
        this.kill(e || {})
    }, ih);

    function ih(t, e) {
        this.selector = e && K(e), this.data = [], this._r = [], this.isReverted = !1, t && this.add(t)
    }

    var iu, id = ((iu = ip.prototype).add = function t(e, i, n) {
        a(e) || (e = {matches: e});
        var s, r, o, l = new ic(0, n || this.scope), c = l.conditions = {};
        for (r in this.contexts.push(l), i = l.add("onMatch", i), l.queries = e) "all" === r ? o = 1 : (s = t_.matchMedia(e[r])) && (0 > ir.indexOf(l) && ir.push(l), (c[r] = s.matches) && (o = 1), s.addListener ? s.addListener(ii) : s.addEventListener("change", ii));
        return o && i(l), this
    }, iu.revert = function t(e) {
        this.kill(e || {})
    }, iu.kill = function t(e) {
        this.contexts.forEach(function (t) {
            return t.kill(e, !0)
        })
    }, ip);

    function ip(t) {
        this.contexts = [], this.scope = t
    }

    var im = {
        registerPlugin: function t() {
            for (var e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
            i.forEach(function (t) {
                return function t(e) {
                    var i = (e = !e.name && e.default || e).name, n = s(e), r = i && !n && e.init ? function () {
                        this._props = []
                    } : e, o = {init: m, render: eG, add: eR, kill: eZ, modifier: eQ, rawVars: 0}, a = {targetTest: 0, get: 0, getSetter: e5, aliases: {}, register: 0};
                    if (eC(), e !== r) {
                        if (ea[i]) return;
                        E(r, E(P(e, o), a)), ed(r.prototype, ed(o, P(e, a))), ea[r.prop = i] = r, e.targetTest && (eh.push(r), es[i] = 1), i = ("css" === i ? "CSS" : i.charAt(0).toUpperCase() + i.substr(1)) + "Plugin"
                    }
                    f(i, r), e.register && e.register(iv, r, eJ)
                }(t)
            })
        }, timeline: function t(e) {
            return new eY(e)
        }, getTweensOf: function t(e, i) {
            return tb.getTweensOf(e, i)
        }, getProperty: function t(e, i, s, r) {
            n(e) && (e = e$(e)[0]);
            var o = y(e || {}).get, a = s ? T : S;
            return "native" === s && (s = ""), e ? i ? a((ea[i] && ea[i].get || o)(e, i, s, r)) : function (t, i, n) {
                return a((ea[t] && ea[t].get || o)(e, t, i, n))
            } : e
        }, quickSetter: function t(e, i, n) {
            if (1 < (e = e$(e)).length) {
                var s = e.map(function (t) {
                    return iv.quickSetter(t, i, n)
                }), r = s.length;
                return function (t) {
                    for (var e = r; e--;) s[e](t)
                }
            }
            e = e[0] || {};
            var o = ea[i], a = y(e), l = a.harness && (a.harness.aliases || {})[i] || i, c = o ? function (t) {
                var i = new o;
                tS._pt = 0, i.init(e, n ? t + n : t, tS, 0, [e]), i.render(1, i), tS._pt && eG(1, tS)
            } : a.set(e, l);
            return o ? c : function (t) {
                return c(e, l, n ? t + n : t, a, 1)
            }
        }, quickTo: function t(e, i, n) {
            function s(t, e, n) {
                return o.resetTo(i, t, e, n)
            }

            var r, o = iv.to(e, ed(((r = {})[i] = "+=0.1", r.paused = !0, r), n || {}));
            return s.tween = o, s
        }, isTweening: function t(e) {
            return 0 < tb.getTweensOf(e, !0).length
        }, defaults: function t(e) {
            return e && e.ease && (e.ease = eP(e.ease, tB.ease)), A(tB, e || {})
        }, config: function t(e) {
            return A(tW, e || {})
        }, registerEffect: function t(e) {
            var i = e.name, n = e.effect, s = e.plugins, r = e.defaults, o = e.extendTimeline;
            (s || "").split(",").forEach(function (t) {
                return t && !ea[t] && !ee[t] && p(i + " effect requires " + t + " plugin.")
            }), el[i] = function (t, e, i) {
                return n(e$(t), E(e || {}, r), i)
            }, o && (eY.prototype[i] = function (t, e, n) {
                return this.add(el[i](t, a(e) ? e : (n = e) && {}, this), n)
            })
        }, registerEase: function t(e, i) {
            eS[e] = eP(i)
        }, parseEase: function t(e, i) {
            return arguments.length ? eP(e, i) : eS
        }, getById: function t(e) {
            return tb.getById(e)
        }, exportRoot: function t(e, i) {
            void 0 === e && (e = {});
            var n, s, r = new eY(e);
            for (r.smoothChildTiming = l(e.smoothChildTiming), tb.remove(r), r._dp = 0, r._time = r._tTime = tb._time, n = tb._first; n;) s = n._next, !i && !n._dur && n instanceof eV && n.vars.onComplete === n._targets[0] || B(r, n, n._start - n._delay), n = s;
            return B(tb, r, 0), r
        }, context: function t(e, i) {
            return e ? new ic(e, i) : t8
        }, matchMedia: function t(e) {
            return new id(e)
        }, matchMediaRefresh: function t() {
            return ir.forEach(function (t) {
                var e, i, n = t.conditions;
                for (i in n) n[i] && (n[i] = !1, e = 1);
                e && t.revert()
            }) || ii()
        }, addEventListener: function t(e, i) {
            var n = io[e] || (io[e] = []);
            ~n.indexOf(i) || n.push(i)
        }, removeEventListener: function t(e, i) {
            var n = io[e], s = n && n.indexOf(i);
            0 <= s && n.splice(s, 1)
        }, utils: {
            wrap: function t(e, i, n) {
                var s = i - e;
                return t6(e) ? ts(e, t(0, e.length), i) : G(n, function (t) {
                    return (s + (t - e) % s) % s + e
                })
            }, wrapYoyo: function t(e, i, n) {
                var s = i - e, r = 2 * s;
                return t6(e) ? ts(e, t(0, e.length - 1), i) : G(n, function (t) {
                    return e + (s < (t = (r + (t - e) % r) % r || 0) ? r - t : t)
                })
            }, distribute: tt, random: tn, snap: ti, normalize: function t(e, i, n) {
                return e8(e, i, 0, 1, n)
            }, getUnit: Q, clamp: function t(e, i, n) {
                return G(n, function (t) {
                    return ey(e, i, t)
                })
            }, splitColor: tc, toArray: e$, selector: K, mapRange: e8, pipe: function t() {
                for (var e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                return function (t) {
                    return i.reduce(function (t, e) {
                        return e(t)
                    }, t)
                }
            }, unitize: function t(e, i) {
                return function (t) {
                    return e(parseFloat(t)) + (i || Q(t))
                }
            }, interpolate: function t(e, i, s, r) {
                var o = isNaN(e + i) ? 0 : function (t) {
                    return (1 - t) * e + t * i
                };
                if (!o) {
                    var a, l, c, h, u, d = n(e), p = {};
                    if (!0 === s && (r = 1) && (s = null), d) e = {p: e}, i = {p: i}; else if (t6(e) && !t6(i)) {
                        for (c = [], u = (h = e.length) - 2, l = 1; l < h; l++) c.push(t(e[l - 1], e[l]));
                        h--, o = function t(e) {
                            var i = Math.min(u, ~~(e *= h));
                            return c[i](e - i)
                        }, s = i
                    } else r || (e = ed(t6(e) ? [] : {}, e));
                    if (!c) {
                        for (a in i) eR.call(p, e, a, "get", i[a]);
                        o = function t(i) {
                            return eG(i, p) || (d ? e.p : e)
                        }
                    }
                }
                return G(s, o)
            }, shuffle: J
        }, install: u, effects: el, ticker: eD, updateRoot: eY.updateRoot, plugins: ea, globalTimeline: tb, core: {
            PropTween: eJ, globals: f, Tween: eV, Timeline: eY, Animation: eI, getCache: y, _removeLinkedListItem: O, reverting: function t() {
                return t$
            }, context: function t(e) {
                return e && t8 && (t8.data.push(e), e._ctx = t8), t8
            }, suppressOverwrites: function t(e) {
                return tv = e
            }
        }
    };

    function ig(t, e) {
        for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next;
        return i
    }

    function iy(t, e) {
        return {
            name: t, rawVars: 1, init: function t(i, s, r) {
                r._onInit = function (t) {
                    var i, r;
                    if (n(s) && (i = {}, b(s, function (t) {
                        return i[t] = 1
                    }), s = i), e) {
                        for (r in i = {}, s) i[r] = e(s[r]);
                        s = i
                    }
                    !function t(e, i) {
                        var n, s, r, o = e._targets;
                        for (n in i) for (s = o.length; s--;) (r = (r = e._ptLookup[s][n]) && r.d) && (r._pt && (r = ig(r, n)), r && r.modifier && r.modifier(i[n], e, o[s], n))
                    }(t, s)
                }
            }
        }
    }

    b("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
        return im[t] = eV[t]
    }), eD.add(eY.updateRoot), tS = im.to({}, {duration: 0});
    var iv = im.registerPlugin({
        name: "attr", init: function t(e, i, n, s, r) {
            var o, a, l;
            for (o in this.tween = n, i) l = e.getAttribute(o) || "", (a = this.add(e, "setAttribute", (l || 0) + "", i[o], s, r, 0, 0, o)).op = o, a.b = l, this._props.push(o)
        }, render: function t(e, i) {
            for (var n = i._pt; n;) t$ ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), n = n._next
        }
    }, {
        name: "endArray", init: function t(e, i) {
            for (var n = i.length; n--;) this.add(e, n, e[n] || 0, i[n], 0, 0, 0, 0, 0, 1)
        }
    }, iy("roundProps", te), iy("modifiers"), iy("snap", ti)) || im;

    function i$(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function i8(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function ib(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }

    function i_(t, e) {
        var i = e.s + e.c * t;
        e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
    }

    function iw(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }

    function ix(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }

    function ik(t, e, i) {
        return t.style[e] = i
    }

    function iD(t, e, i) {
        return t.style.setProperty(e, i)
    }

    function iC(t, e, i) {
        return t._gsap[e] = i
    }

    function iS(t, e, i) {
        return t._gsap.scaleX = t._gsap.scaleY = i
    }

    function iT(t, e, i, n, s) {
        var r = t._gsap;
        r.scaleX = r.scaleY = i, r.renderTransform(s, r)
    }

    function iE(t, e, i, n, s) {
        var r = t._gsap;
        r[e] = i, r.renderTransform(s, r)
    }

    function iA(t) {
        var e = this, i = this.target, n = i.style;
        if (t in nv) {
            if (this.tfm = this.tfm || {}, "transform" !== t && (~(t = nk[t] || t).indexOf(",") ? t.split(",").forEach(function (t) {
                return e.tfm[t] = nP(i, t)
            }) : this.tfm[t] = i._gsap.x ? i._gsap[t] : nP(i, t)), i._gsap.svg && (this.svg = i.getAttribute(t) || ""), 0 <= this.props.indexOf(nD)) return;
            t = nD
        }
        n && this.props.push(t, n[t])
    }

    function iP(t) {
        t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
    }

    function iL() {
        var t, e, i = this.props, n = this.target, s = n.style, r = n._gsap;
        for (t = 0; t < i.length; t += 2) i[t + 1] ? s[i[t]] = i[t + 1] : s.removeProperty(i[t].replace(n_, "-$1").toLowerCase());
        if (this.tfm) {
            for (e in r.svg && n.setAttribute("transform", this.svg || ""), this.tfm) r[e] = this.tfm[e];
            (t = iK()) && !t.isStart && !s[nD] && (iP(s), r.uncache = 1)
        }
    }

    function iM(t, e) {
        var i = {target: t, props: [], revert: iL, save: iA};
        return e && e.split(",").forEach(function (t) {
            return i.save(t)
        }), i
    }

    function i0(t, e) {
        var i = i6.createElementNS ? i6.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : i6.createElement(t);
        return i.style ? i : i6.createElement(t)
    }

    function iO(t, e, i) {
        var n = getComputedStyle(t);
        return n[e] || n.getPropertyValue(e.replace(n_, "-$1").toLowerCase()) || n.getPropertyValue(e) || !i && iO(t, nT(e) || e, 1) || ""
    }

    function iI() {
        "undefined" != typeof window && window.document && (iX = (i6 = (iU = window).document).documentElement, iQ = i0("div") || {style: {}}, i0("div"), nC = (nD = nT(nD)) + "Origin", iQ.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", iJ = !!nT("perspective"), iK = iv.core.reverting, iG = 1)
    }

    function i9(t) {
        var e, i = i0("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = this.parentNode, s = this.nextSibling, r = this.style.cssText;
        if (iX.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
            e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = i9
        } catch (o) {
        } else this._gsapBBox && (e = this._gsapBBox());
        return n && (s ? n.insertBefore(this, s) : n.appendChild(this)), iX.removeChild(i), this.style.cssText = r, e
    }

    function iY(t, e) {
        for (var i = e.length; i--;) if (t.hasAttribute(e[i])) return t.getAttribute(e[i])
    }

    function iz(t) {
        var e;
        try {
            e = t.getBBox()
        } catch (i) {
            e = i9.call(t, !0)
        }
        return e && (e.width || e.height) || t.getBBox === i9 || (e = i9.call(t, !0)), !e || e.width || e.x || e.y ? e : {x: +iY(t, ["x", "cx", "x1"]) || 0, y: +iY(t, ["y", "cy", "y1"]) || 0, width: 0, height: 0}
    }

    function iH(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !iz(t))
    }

    function iN(t, e) {
        if (e) {
            var i = t.style;
            e in nv && e !== nC && (e = nD), i.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), i.removeProperty(e.replace(n_, "-$1").toLowerCase())) : i.removeAttribute(e)
        }
    }

    function ij(t, e, i, n, s, r) {
        var o = new eJ(t._pt, e, i, 0, 1, r ? ix : iw);
        return (t._pt = o).b = n, o.e = s, t._props.push(i), o
    }

    function iR(t, e, i, n) {
        var s, r, o, a, l = parseFloat(i) || 0, c = (i + "").trim().substr((l + "").length) || "px", h = iQ.style, u = nw.test(e), d = "svg" === t.tagName.toLowerCase(), p = (d ? "client" : "offset") + (u ? "Width" : "Height"), f = "px" === n, m = "%" === n;
        return n === c || !l || nE[n] || nE[c] ? l : ("px" === c || f || (l = iR(t, e, i, "px")), a = t.getCTM && iH(t), (m || "%" === c) && (nv[e] || ~e.indexOf("adius")) ? (s = a ? t.getBBox()[u ? "width" : "height"] : t[p], _(m ? l / s * 100 : l / 100 * s)) : (h[u ? "width" : "height"] = 100 + (f ? c : n), r = ~e.indexOf("adius") || "em" === n && t.appendChild && !d ? t : t.parentNode, a && (r = (t.ownerSVGElement || {}).parentNode), r && r !== i6 && r.appendChild || (r = i6.body), (o = r._gsap) && m && o.width && u && o.time === eD.time && !o.uncache ? _(l / o.width * 100) : (!m && "%" !== c || nA[iO(r, "display")] || (h.position = iO(t, "position")), r === t && (h.position = "static"), r.appendChild(iQ), s = iQ[p], r.removeChild(iQ), h.position = "absolute", u && m && ((o = y(r)).time = eD.time, o.width = r[p]), _(f ? s * l / 100 : s && l ? 100 / s * l : 0))))
    }

    function i1(t, e, i, n) {
        if (!i || "none" === i) {
            var s = nT(e, t, 1), r = s && iO(t, s, 1);
            r && r !== i ? (e = s, i = r) : "borderColor" === e && (i = iO(t, "borderTopColor"))
        }
        var o, a, l, c, h, u, d, p, f, m, g, y = new eJ(this._pt, t.style, e, 0, 1, eX), v = 0, b = 0;
        if (y.b = i, y.e = n, i += "", "auto" == (n += "") && (t.style[e] = n, n = iO(t, e) || n, t.style[e] = i), td(o = [i, n]), n = o[1], l = (i = o[0]).match(tQ) || [], (n.match(tQ) || []).length) {
            for (; a = tQ.exec(n);) d = a[0], f = n.substring(v, a.index), h ? h = (h + 1) % 5 : "rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5) || (h = 1), d !== (u = l[b++] || "") && (c = parseFloat(u) || 0, g = u.substr((c + "").length), "=" === d.charAt(1) && (d = x(c, d) + g), p = parseFloat(d), m = d.substr((p + "").length), v = tQ.lastIndex - m.length, m || (m = m || tW.units[e] || g, v === n.length && (n += m, y.e += m)), g !== m && (c = iR(t, e, u, m) || 0), y._pt = {_next: y._pt, p: f || 1 === b ? f : ",", s: c, c: p - c, m: h && h < 4 || "zIndex" === e ? Math.round : 0});
            y.c = v < n.length ? n.substring(v, n.length) : ""
        } else y.r = "display" === e && "none" === n ? ix : iw;
        return tK.test(n) && (y.e = 0), this._pt = y
    }

    function iW(t) {
        var e = t.split(" "), i = e[0], n = e[1] || "50%";
        return "top" !== i && "bottom" !== i && "left" !== n && "right" !== n || (t = i, i = n, n = t), e[0] = nL[i] || i, e[1] = nL[n] || n, e.join(" ")
    }

    function iB(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var i, n, s, r = e.t, o = r.style, a = e.u, l = r._gsap;
            if ("all" === a || !0 === a) o.cssText = "", n = 1; else for (s = (a = a.split(",")).length; -1 < --s;) nv[i = a[s]] && (n = 1, i = "transformOrigin" === i ? nC : nD), iN(r, i);
            n && (iN(r, nD), l && (l.svg && r.removeAttribute("transform"), nI(r, 1), l.uncache = 1, iP(o)))
        }
    }

    function iF(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }

    function iV(t) {
        var e = iO(t, nD);
        return iF(e) ? n0 : e.substr(7).match(tG).map(_)
    }

    function i2(t, e) {
        var i, n, s, r, o = t._gsap || y(t), a = t.style, l = iV(t);
        return o.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(s = t.transform.baseVal.consolidate().matrix).a, s.b, s.c, s.d, s.e, s.f]).join(",") ? n0 : l : (l !== n0 || t.offsetParent || t === iX || o.svg || (s = a.display, a.display = "block", (i = t.parentNode) && t.offsetParent || (r = 1, n = t.nextElementSibling, iX.appendChild(t)), l = iV(t), s ? a.display = s : iN(t, "display"), r && (n ? i.insertBefore(t, n) : i ? i.appendChild(t) : iX.removeChild(t))), e && 6 < l.length ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
    }

    function i3(t, e, i, n, s, r) {
        var o, a, l, c = t._gsap, h = s || i2(t, !0), u = c.xOrigin || 0, d = c.yOrigin || 0, p = c.xOffset || 0, f = c.yOffset || 0, m = h[0], g = h[1], y = h[2], v = h[3], b = h[4], _ = h[5], w = e.split(" "), x = parseFloat(w[0]) || 0, k = parseFloat(w[1]) || 0;
        i ? h !== n0 && (a = m * v - g * y) && (l = x * (-g / a) + k * (m / a) - (m * _ - g * b) / a, x = x * (v / a) + k * (-y / a) + (y * _ - v * b) / a, k = l) : (x = (o = iz(t)).x + (~w[0].indexOf("%") ? x / 100 * o.width : x), k = o.y + (~(w[1] || w[0]).indexOf("%") ? k / 100 * o.height : k)), n || !1 !== n && c.smooth ? (b = x - u, _ = k - d, c.xOffset = p + (b * m + _ * y) - b, c.yOffset = f + (b * g + _ * v) - _) : c.xOffset = c.yOffset = 0, c.xOrigin = x, c.yOrigin = k, c.smooth = !!n, c.origin = e, c.originIsAbsolute = !!i, t.style[nC] = "0px 0px", r && (ij(r, c, "xOrigin", u, x), ij(r, c, "yOrigin", d, k), ij(r, c, "xOffset", p, c.xOffset), ij(r, c, "yOffset", f, c.yOffset)), t.setAttribute("data-svg-origin", x + " " + k)
    }

    function i4(t, e, i) {
        var n = Q(e);
        return _(parseFloat(e) + parseFloat(iR(t, "x", i + "px", n))) + n
    }

    function iq(t, e, i, s, r) {
        var o, a, l = n(r), c = parseFloat(r) * (l && ~r.indexOf("rad") ? n$ : 1) - s, h = s + c + "deg";
        return l && ("short" === (o = r.split("_")[1]) && (c %= 360) != c % 180 && (c += c < 0 ? 360 : -360), "cw" === o && c < 0 ? c = (c + 36e9) % 360 - 360 * ~~(c / 360) : "ccw" === o && 0 < c && (c = (c - 36e9) % 360 - 360 * ~~(c / 360))), t._pt = a = new eJ(t._pt, e, i, s, c, i8), a.e = h, a.u = "deg", t._props.push(i), a
    }

    function i7(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }

    function i5(t, e, i) {
        var n, s, r, o, a, l, c, h = i7({}, i._gsap), u = i.style;
        for (s in h.svg ? (r = i.getAttribute("transform"), i.setAttribute("transform", ""), u[nD] = e, n = nI(i, 1), iN(i, nD), i.setAttribute("transform", r)) : (r = getComputedStyle(i)[nD], u[nD] = e, n = nI(i, 1), u[nD] = r), nv) (r = h[s]) !== (o = n[s]) && 0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(s) && (a = Q(r) !== (c = Q(o)) ? iR(i, s, r, c) : parseFloat(r), l = parseFloat(o), t._pt = new eJ(t._pt, n, s, a, l - a, i$), t._pt.u = c || 0, t._props.push(s));
        i7(n, h)
    }

    eV.version = eY.version = iv.version = "3.11.0", tD = 1, c() && eC();
    var iU, i6, iX, iG, iQ, iZ, iK, iJ, nt = eS.Power0, ne = eS.Power1, ni = eS.Power2, nn = eS.Power3, ns = eS.Power4, nr = eS.Linear, no = eS.Quad, na = eS.Cubic, nl = eS.Quart, nc = eS.Quint, nh = eS.Strong, nu = eS.Elastic, nd = eS.Back, np = eS.SteppedEase, nf = eS.Bounce, nm = eS.Sine, ng = eS.Expo, ny = eS.Circ, nv = {}, n$ = 180 / Math.PI, n8 = Math.PI / 180, nb = Math.atan2, n_ = /([A-Z])/g, nw = /(left|right|width|margin|padding|x)/i, nx = /[\s,\(]\S/, nk = {autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity"}, nD = "transform", nC = nD + "Origin", nS = "O,Moz,ms,Ms,Webkit".split(","), nT = function t(e, i, n) {
        var s = (i || iQ).style, r = 5;
        if (e in s && !n) return e;
        for (e = e.charAt(0).toUpperCase() + e.substr(1); r-- && !(nS[r] + e in s);) ;
        return r < 0 ? null : (3 === r ? "ms" : 0 <= r ? nS[r] : "") + e
    }, nE = {deg: 1, rad: 1, turn: 1}, nA = {grid: 1, flex: 1}, nP = function t(e, i, n, s) {
        var r;
        return iG || iI(), i in nk && "transform" !== i && ~(i = nk[i]).indexOf(",") && (i = i.split(",")[0]), nv[i] && "transform" !== i ? (r = nI(e, s), r = "transformOrigin" !== i ? r[i] : r.svg ? r.origin : n9(iO(e, nC)) + " " + r.zOrigin + "px") : (r = e.style[i]) && "auto" !== r && !s && !~(r + "").indexOf("calc(") || (r = nM[i] && nM[i](e, i, n) || iO(e, i) || v(e, i) || ("opacity" === i ? 1 : 0)), n && !~(r + "").trim().indexOf(" ") ? iR(e, i, r, n) + n : r
    }, nL = {top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%"}, nM = {
        clearProps: function t(e, i, n, s, r) {
            if ("isFromStart" !== r.data) {
                var o = e._pt = new eJ(e._pt, i, n, 0, 0, iB);
                return o.u = s, o.pr = -10, o.tween = r, e._props.push(n), 1
            }
        }
    }, n0 = [1, 0, 0, 1, 0, 0], nO = {}, nI = function t(e, i) {
        var n = e._gsap || new eO(e);
        if ("x" in n && !i && !n.uncache) return n;
        var s, r, o, a, l, c, h, u, d, p, f, m, g, y, v, b, w, x, k, D, C, S, T, E, A, P, L, M, O, I, Y, z, H = e.style, N = n.scaleX < 0, j = getComputedStyle(e), R = iO(e, nC) || "0";
        return s = r = o = c = h = u = d = p = f = 0, a = l = 1, n.svg = !(!e.getCTM || !iH(e)), j.translate && ("none" === j.translate && "none" === j.scale && "none" === j.rotate || (H[nD] = ("none" !== j.translate ? "translate3d(" + (j.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== j.rotate ? "rotate(" + j.rotate + ") " : "") + ("none" !== j.scale ? "scale(" + j.scale.split(" ").join(",") + ") " : "") + j[nD]), H.scale = H.rotate = H.translate = "none"), y = i2(e, n.svg), n.svg && (E = (!n.uncache || "0px 0px" === R) && !i && e.getAttribute("data-svg-origin"), i3(e, E || R, !!E || n.originIsAbsolute, !1 !== n.smooth, y)), m = n.xOrigin || 0, g = n.yOrigin || 0, y !== n0 && (x = y[0], k = y[1], D = y[2], C = y[3], s = S = y[4], r = T = y[5], 6 === y.length ? (a = Math.sqrt(x * x + k * k), l = Math.sqrt(C * C + D * D), c = x || k ? nb(k, x) * n$ : 0, (d = D || C ? nb(D, C) * n$ + c : 0) && (l *= Math.abs(Math.cos(d * n8))), n.svg && (s -= m - (m * x + g * D), r -= g - (m * k + g * C))) : (z = y[6], I = y[7], L = y[8], M = y[9], O = y[10], Y = y[11], s = y[12], r = y[13], o = y[14], h = (v = nb(z, O)) * n$, v && (E = S * (b = Math.cos(-v)) + L * (w = Math.sin(-v)), A = T * b + M * w, P = z * b + O * w, L = -(S * w) + L * b, M = -(T * w) + M * b, O = -(z * w) + O * b, Y = -(I * w) + Y * b, S = E, T = A, z = P), u = (v = nb(-D, O)) * n$, v && (b = Math.cos(-v), Y = C * (w = Math.sin(-v)) + Y * b, x = E = x * b - L * w, k = A = k * b - M * w, D = P = D * b - O * w), c = (v = nb(k, x)) * n$, v && (E = x * (b = Math.cos(v)) + k * (w = Math.sin(v)), A = S * b + T * w, k = k * b - x * w, T = T * b - S * w, x = E, S = A), h && 359.9 < Math.abs(h) + Math.abs(c) && (h = c = 0, u = 180 - u), a = _(Math.sqrt(x * x + k * k + D * D)), l = _(Math.sqrt(T * T + z * z)), d = 2e-4 < Math.abs(v = nb(S, T)) ? v * n$ : 0, f = Y ? 1 / (Y < 0 ? -Y : Y) : 0), n.svg && (E = e.getAttribute("transform"), n.forceCSS = e.setAttribute("transform", "") || !iF(iO(e, nD)), E && e.setAttribute("transform", E))), 90 < Math.abs(d) && 270 > Math.abs(d) && (N ? (a *= -1, d += c <= 0 ? 180 : -180, c += c <= 0 ? 180 : -180) : (l *= -1, d += d <= 0 ? 180 : -180)), i = i || n.uncache, n.x = s - ((n.xPercent = s && (!i && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-s) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + "px", n.y = r - ((n.yPercent = r && (!i && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + "px", n.z = o + "px", n.scaleX = _(a), n.scaleY = _(l), n.rotation = _(c) + "deg", n.rotationX = _(h) + "deg", n.rotationY = _(u) + "deg", n.skewX = d + "deg", n.skewY = p + "deg", n.transformPerspective = f + "px", (n.zOrigin = parseFloat(R.split(" ")[2]) || 0) && (H[nC] = n9(R)), n.xOffset = n.yOffset = 0, n.force3D = tW.force3D, n.renderTransform = n.svg ? nN : iJ ? nH : nY, n.uncache = 0, n
    }, n9 = function t(e) {
        return (e = e.split(" "))[0] + " " + e[1]
    }, nY = function t(e, i) {
        i.z = "0px", i.rotationY = i.rotationX = "0deg", i.force3D = 0, nH(e, i)
    }, nz = "0deg", nH = function t(e, i) {
        var n = i || this, s = n.xPercent, r = n.yPercent, o = n.x, a = n.y, l = n.z, c = n.rotation, h = n.rotationY, u = n.rotationX, d = n.skewX, p = n.skewY, f = n.scaleX, m = n.scaleY, g = n.transformPerspective, y = n.force3D, v = n.target, b = n.zOrigin, _ = "", w = "auto" === y && e && 1 !== e || !0 === y;
        if (b && (u !== nz || h !== nz)) {
            var x, k = parseFloat(h) * n8, D = Math.sin(k), C = Math.cos(k);
            x = Math.cos(k = parseFloat(u) * n8), o = i4(v, o, -(D * x * b)), a = i4(v, a, -(-Math.sin(k) * b)), l = i4(v, l, -(C * x * b) + b)
        }
        "0px" !== g && (_ += "perspective(" + g + ") "), (s || r) && (_ += "translate(" + s + "%, " + r + "%) "), (w || "0px" !== o || "0px" !== a || "0px" !== l) && (_ += "0px" !== l || w ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + ") "), c !== nz && (_ += "rotate(" + c + ") "), h !== nz && (_ += "rotateY(" + h + ") "), u !== nz && (_ += "rotateX(" + u + ") "), d === nz && p === nz || (_ += "skew(" + d + ", " + p + ") "), 1 === f && 1 === m || (_ += "scale(" + f + ", " + m + ") "), v.style[nD] = _ || "translate(0, 0)"
    }, nN = function t(e, i) {
        var n, s, r, o, a, l = i || this, c = l.xPercent, h = l.yPercent, u = l.x, d = l.y, p = l.rotation, f = l.skewX, m = l.skewY, g = l.scaleX, y = l.scaleY, v = l.target, b = l.xOrigin, w = l.yOrigin, x = l.xOffset, k = l.yOffset, D = l.forceCSS, C = parseFloat(u), S = parseFloat(d);
        p = parseFloat(p), f = parseFloat(f), (m = parseFloat(m)) && (f += m = parseFloat(m), p += m), p || f ? (p *= n8, f *= n8, n = Math.cos(p) * g, s = Math.sin(p) * g, r = -(Math.sin(p - f) * y), o = Math.cos(p - f) * y, f && (m *= n8, r *= a = Math.sqrt(1 + (a = Math.tan(f - m)) * a), o *= a, m && (n *= a = Math.sqrt(1 + (a = Math.tan(m)) * a), s *= a)), n = _(n), s = _(s), r = _(r), o = _(o)) : (n = g, o = y, s = r = 0), (C && !~(u + "").indexOf("px") || S && !~(d + "").indexOf("px")) && (C = iR(v, "x", u, "px"), S = iR(v, "y", d, "px")), (b || w || x || k) && (C = _(C + b - (b * n + w * r) + x), S = _(S + w - (b * s + w * o) + k)), (c || h) && (C = _(C + c / 100 * (a = v.getBBox()).width), S = _(S + h / 100 * a.height)), a = "matrix(" + n + "," + s + "," + r + "," + o + "," + C + "," + S + ")", v.setAttribute("transform", a), D && (v.style[nD] = a)
    };
    b("padding,margin,Width,Radius", function (t, e) {
        var i = "Right", n = "Bottom", s = "Left", r = (e < 3 ? ["Top", i, n, s] : ["Top" + s, "Top" + i, n + i, n + s]).map(function (i) {
            return e < 2 ? t + i : "border" + i + t
        });
        nM[1 < e ? "border" + t : t] = function (t, e, i, n, s) {
            var o, a;
            if (arguments.length < 4) return 5 === (a = (o = r.map(function (e) {
                return nP(t, e, i)
            })).join(" ")).split(o[0]).length ? o[0] : a;
            o = (n + "").split(" "), a = {}, r.forEach(function (t, e) {
                return a[t] = o[e] = o[e] || o[(e - 1) / 2 | 0]
            }), t.init(e, a, s)
        }
    });
    var nj, nR, n1, nW = {
        name: "css", register: iI, targetTest: function t(e) {
            return e.style && e.nodeType
        }, init: function t(e, i, s, r, o) {
            var a, l, c, h, u, p, f, m, g, y, v, b, _, w, k, D, C = this._props, S = e.style, T = s.vars.startAt;
            for (f in iG || iI(), this.styles = this.styles || iM(e), D = this.styles.props, this.tween = s, i) if ("autoRound" !== f && (l = i[f], !ea[f] || !ez(f, i, s, r, e, o))) {
                if (u = typeof l, p = nM[f], "function" === u && (u = typeof (l = l.call(s, r, e, o))), "string" === u && ~l.indexOf("random(") && (l = tr(l)), p) p(this, e, f, l, s) && (k = 1); else if ("--" === f.substr(0, 2)) a = (getComputedStyle(e).getPropertyValue(f) + "").trim(), l += "", ex.lastIndex = 0, ex.test(a) || (m = Q(a), g = Q(l)), g ? m !== g && (a = iR(e, f, a, g) + g) : m && (l += m), this.add(S, "setProperty", a, l, r, o, 0, 0, f), C.push(f), D.push(f, S[f]); else if ("undefined" !== u) {
                    if (T && f in T ? (n(a = "function" == typeof T[f] ? T[f].call(s, r, e, o) : T[f]) && ~a.indexOf("random(") && (a = tr(a)), Q(a + "") || (a += tW.units[f] || Q(nP(e, f)) || ""), "=" === (a + "").charAt(1) && (a = nP(e, f))) : a = nP(e, f), h = parseFloat(a), (y = "string" === u && "=" === l.charAt(1) && l.substr(0, 2)) && (l = l.substr(2)), c = parseFloat(l), f in nk && ("autoAlpha" === f && (1 === h && "hidden" === nP(e, "visibility") && c && (h = 0), D.push("visibility", S.visibility), ij(this, S, "visibility", h ? "inherit" : "hidden", c ? "inherit" : "hidden", !c)), "scale" !== f && "transform" !== f && ~(f = nk[f]).indexOf(",") && (f = f.split(",")[0])), v = f in nv) {
                        if (this.styles.save(f), b || ((_ = e._gsap).renderTransform && !i.parseTransform || nI(e, i.parseTransform), w = !1 !== i.smoothOrigin && _.smooth, (b = this._pt = new eJ(this._pt, S, nD, 0, 1, _.renderTransform, _, 0, -1)).dep = 1), "scale" === f) this._pt = new eJ(this._pt, _, "scaleY", _.scaleY, (y ? x(_.scaleY, y + c) : c) - _.scaleY || 0, i$), this._pt.u = 0, C.push("scaleY", f), f += "X"; else {
                            if ("transformOrigin" === f) {
                                D.push(nC, S[nC]), l = iW(l), _.svg ? i3(e, l, 0, w, 0, this) : ((g = parseFloat(l.split(" ")[2]) || 0) !== _.zOrigin && ij(this, _, "zOrigin", _.zOrigin, g), ij(this, S, f, n9(a), n9(l)));
                                continue
                            }
                            if ("svgOrigin" === f) {
                                i3(e, l, 1, w, 0, this);
                                continue
                            }
                            if (f in nO) {
                                iq(this, _, f, h, y ? x(h, y + l) : l);
                                continue
                            }
                            if ("smoothOrigin" === f) {
                                ij(this, _, "smooth", _.smooth, l);
                                continue
                            }
                            if ("force3D" === f) {
                                _[f] = l;
                                continue
                            }
                            if ("transform" === f) {
                                i5(this, l, e);
                                continue
                            }
                        }
                    } else f in S || (f = nT(f) || f);
                    if (v || (c || 0 === c) && (h || 0 === h) && !nx.test(l) && f in S) c = c || 0, (m = (a + "").substr((h + "").length)) !== (g = Q(l) || (f in tW.units ? tW.units[f] : m)) && (h = iR(e, f, a, g)), this._pt = new eJ(this._pt, v ? _ : S, f, h, (y ? x(h, y + c) : c) - h, v || "px" !== g && "zIndex" !== f || !1 === i.autoRound ? i$ : i_), this._pt.u = g || 0, m !== g && "%" !== g && (this._pt.b = a, this._pt.r = ib); else if (f in S) i1.call(this, e, f, a, y ? y + l : l); else {
                        if (!(f in e)) {
                            d(f, l);
                            continue
                        }
                        this.add(e, f, a || e[f], y ? y + l : l, r, o)
                    }
                    v || D.push(f, S[f]), C.push(f)
                }
            }
            k && eK(this)
        }, render: function t(e, i) {
            if (i.tween._time || !iK()) for (var n = i._pt; n;) n.r(e, n.d), n = n._next; else i.styles.revert()
        }, get: nP, aliases: nk, getSetter: function t(e, i, n) {
            var s = nk[i];
            return s && 0 > s.indexOf(",") && (i = s), i in nv && i !== nC && (e._gsap.x || nP(e, "x")) ? n && iZ === n ? "scale" === i ? iS : iC : (iZ = n || {}, "scale" === i ? iT : iE) : e.style && !o(e.style[i]) ? ik : ~i.indexOf("-") ? iD : e5(e, i)
        }, core: {_removeProperty: iN, _getMatrix: i2}
    };
    iv.utils.checkPrefix = nT, iv.core.getStyleSaver = iM, n1 = b((nj = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (nR = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
        nv[t] = 1
    }), b(nR, function (t) {
        tW.units[t] = "deg", nO[t] = 1
    }), nk[n1[13]] = nj + "," + nR, b("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
        var e = t.split(":");
        nk[e[1]] = n1[e[0]]
    }), b("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
        tW.units[t] = "px"
    }), iv.registerPlugin(nW);
    var nB = iv.registerPlugin(nW) || iv, nF = nB.core.Tween;
    t.Back = nd, t.Bounce = nf, t.CSSPlugin = nW, t.Circ = ny, t.Cubic = na, t.Elastic = nu, t.Expo = ng, t.Linear = nr, t.Power0 = nt, t.Power1 = ne, t.Power2 = ni, t.Power3 = nn, t.Power4 = ns, t.Quad = no, t.Quart = nl, t.Quint = nc, t.Sine = nm, t.SteppedEase = np, t.Strong = nh, t.TimelineLite = eY, t.TimelineMax = eY, t.TweenLite = eV, t.TweenMax = nF, t.default = nB, t.gsap = nB, "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {value: !0}) : delete t.default
}), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function (t) {
    "use strict";

    function e(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function i() {
        return g || "undefined" != typeof window && (g = window.gsap) && g.registerPlugin && g
    }

    function n(t, e) {
        return ~I.indexOf(t) && I[I.indexOf(t) + 1][e]
    }

    function s(t) {
        return !!~C.indexOf(t)
    }

    function r(t, e, i, n, s) {
        return t.addEventListener(e, i, {passive: !n, capture: !!s})
    }

    function o(t, e, i, n) {
        return t.removeEventListener(e, i, !!n)
    }

    function a() {
        return S && S.isPressed || O.cache++
    }

    function l(t, e) {
        function i(n) {
            if (n || 0 === n) {
                L && (v.history.scrollRestoration = "manual");
                var s = S && S.isPressed;
                n = i.v = Math.round(n) || (S && S.iOS ? 1 : 0), t(n), i.cacheID = O.cache, s && z("ss", n)
            } else (e || O.cache !== i.cacheID || z("ref")) && (i.cacheID = O.cache, i.v = t());
            return i.v + i.offset
        }

        return i.offset = 0, t && i
    }

    function c(t) {
        return g.utils.toArray(t)[0] || ("string" == typeof t && !1 !== g.config().nullTargetWarn ? console.warn("Element not found:", t) : null)
    }

    function h(t, e) {
        var i = e.s, r = e.sc, o = O.indexOf(t), a = r === R.sc ? 1 : 2;
        return ~o || (o = O.push(t) - 1), O[o + a] || (O[o + a] = l(n(t, i), !0) || (s(t) ? r : l(function (e) {
            return arguments.length ? t[i] = e : t[i]
        })))
    }

    function u(t, e, i) {
        function n(t, e) {
            var n = Y();
            e || l < n - o ? (r = s, s = t, a = o, o = n) : i ? s += t : s = r + (t - r) / (n - a) * (o - a)
        }

        var s = t, r = t, o = Y(), a = o, l = e || 50, c = Math.max(500, 3 * l);
        return {
            update: n, reset: function t() {
                r = s = i ? 0 : s, a = o = 0
            }, getVelocity: function t(e) {
                var l = a, h = r, u = Y();
                return (e || 0 === e) && e !== s && n(e), o === a || c < u - a ? 0 : (s + (i ? h : -h)) / ((i ? u : o) - l) * 1e3
            }
        }
    }

    function d(t, e) {
        return e && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t
    }

    function p(t) {
        var e = Math.max.apply(Math, t), i = Math.min.apply(Math, t);
        return Math.abs(e) >= Math.abs(i) ? e : i
    }

    function f() {
        var t, e, i, n;
        (D = g.core.globals().ScrollTrigger) && D.core && (e = (t = D.core).bridge || {}, i = t._scrollers, n = t._proxies, i.push.apply(i, O), n.push.apply(n, I), O = i, I = n, z = function t(i, n) {
            return e[i](n)
        })
    }

    function m(t) {
        return (g = t || i()) && "undefined" != typeof document && document.body && (v = window, _ = (b = document).documentElement, w = b.body, C = [v, b, _, w], g.utils.clamp, k = "onpointerenter" in w ? "pointer" : "mouse", x = W.isTouch = v.matchMedia && v.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in v || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0, T = W.eventTypes = ("ontouchstart" in _ ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in _ ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function () {
            return L = 0
        }, 500), f(), y = 1), y
    }

    var g, y, v, b, _, w, x, k, D, C, S, T, E, A, P, L = 1, M = [], O = [], I = [], Y = Date.now, z = function t(e, i) {
        return i
    }, H = "scrollLeft", N = "scrollTop", j = {
        s: H, p: "left", p2: "Left", os: "right", os2: "Right", d: "width", d2: "Width", a: "x", sc: l(function (t) {
            return arguments.length ? v.scrollTo(t, R.sc()) : v.pageXOffset || b[H] || _[H] || w[H] || 0
        })
    }, R = {
        s: N, p: "top", p2: "Top", os: "bottom", os2: "Bottom", d: "height", d2: "Height", a: "y", op: j, sc: l(function (t) {
            return arguments.length ? v.scrollTo(j.sc(), t) : v.pageYOffset || b[N] || _[N] || w[N] || 0
        })
    };
    j.op = R, O.cache = 0;
    var W = (B.prototype.init = function t(e) {
        y || m(g) || console.warn("Please gsap.registerPlugin(Observer)"), D || f();
        var i = e.tolerance, n = e.dragMinimum, l = e.type, C = e.target, E = e.lineHeight, A = e.debounce, P = e.preventDefault, L = e.onStop, O = e.onStopDelay, I = e.ignore, z = e.wheelSpeed, H = e.event, N = e.onDragStart, W = e.onDragEnd, B = e.onDrag, F = e.onPress, V = e.onRelease, q = e.onRight, U = e.onLeft, X = e.onUp, G = e.onDown, Q = e.onChangeX, Z = e.onChangeY, K = e.onChange, J = e.onToggleX, tt = e.onToggleY, te = e.onHover, ti = e.onHoverEnd, tn = e.onMove, ts = e.ignoreCheck, tr = e.isNormalizer, to = e.onGestureStart, ta = e.onGestureEnd, tl = e.onWheel, tc = e.onEnable, th = e.onDisable, tu = e.onClick, td = e.scrollSpeed, tp = e.capture, tf = e.allowClicks, tm = e.lockAxis, tg = e.onLockAxis;

        function ty() {
            return t3 = Y()
        }

        function tv(t, e) {
            return (tY.event = t) && I && ~I.indexOf(t.target) || e && tW && "touch" !== t.pointerType || ts && ts(t, e)
        }

        function t$() {
            var t = tY.deltaX = p(tV), e = tY.deltaY = p(t2), n = Math.abs(t) >= i, s = Math.abs(e) >= i;
            K && (n || s) && K(tY, t, e, tV, t2), n && (q && 0 < tY.deltaX && q(tY), U && tY.deltaX < 0 && U(tY), Q && Q(tY), J && tY.deltaX < 0 != tz < 0 && J(tY), tz = tY.deltaX, tV[0] = tV[1] = tV[2] = 0), s && (G && 0 < tY.deltaY && G(tY), X && tY.deltaY < 0 && X(tY), Z && Z(tY), tt && tY.deltaY < 0 != tH < 0 && tt(tY), tH = tY.deltaY, t2[0] = t2[1] = t2[2] = 0), (t0 || tM) && (tn && tn(tY), tM && (B(tY), tM = !1), t0 = !1), tI && (tI = !1, 1) && tg && tg(tY), tO && (tl(tY), tO = !1), tP = 0
        }

        function t8(t, e, i) {
            tV[i] += t, t2[i] += e, tY._vx.update(t), tY._vy.update(e), A ? tP = tP || requestAnimationFrame(t$) : t$()
        }

        function tb(t, e) {
            "y" !== t9 && (tV[2] += t, tY._vx.update(t, !0)), "x" !== t9 && (t2[2] += e, tY._vy.update(e, !0)), tm && !t9 && (tY.axis = t9 = Math.abs(t) > Math.abs(e) ? "x" : "y", tI = !0), A ? tP = tP || requestAnimationFrame(t$) : t$()
        }

        function t_(t) {
            if (!tv(t, 1)) {
                var e = (t = d(t, P)).clientX, i = t.clientY, s = e - tY.x, r = i - tY.y, o = tY.isDragging;
                tY.x = e, tY.y = i, (o || Math.abs(tY.startX - e) >= n || Math.abs(tY.startY - i) >= n) && (B && (tM = !0), o || (tY.isDragging = !0), tb(s, r), o || N && N(tY))
            }
        }

        function tw(t) {
            if (!tv(t, 1)) {
                o(tr ? C : tF, T[1], t_, !0);
                var e = tY.isDragging && (3 < Math.abs(tY.x - tY.startX) || 3 < Math.abs(tY.y - tY.startY)), i = d(t);
                e || (tY._vx.reset(), tY._vy.reset(), P && tf && g.delayedCall(.08, function () {
                    if (300 < Y() - t3 && !t.defaultPrevented) {
                        if (t.target.click) t.target.click(); else if (tF.createEvent) {
                            var e = tF.createEvent("MouseEvents");
                            e.initMouseEvent("click", !0, !0, v, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e)
                        }
                    }
                })), tY.isDragging = tY.isGesturing = tY.isPressed = !1, L && !tr && tL.restart(!0), W && e && W(tY), V && V(tY, e)
            }
        }

        function tx(t) {
            return t.touches && 1 < t.touches.length && (tY.isGesturing = !0) && to(t, tY.isDragging)
        }

        function tk() {
            return tY.isGesturing = !1, ta(tY)
        }

        function tD(t) {
            if (!tv(t)) {
                var e = tN(), i = tj();
                t8((e - tR) * td, (i - t1) * td, 1), tR = e, t1 = i, L && tL.restart(!0)
            }
        }

        function tC(t) {
            if (!tv(t)) {
                t = d(t, P), tl && (tO = !0);
                var e = (1 === t.deltaMode ? E : 2 === t.deltaMode ? v.innerHeight : 1) * z;
                t8(t.deltaX * e, t.deltaY * e, 0), L && !tr && tL.restart(!0)
            }
        }

        function tS(t) {
            if (!tv(t)) {
                var e = t.clientX, i = t.clientY, n = e - tY.x, s = i - tY.y;
                tY.x = e, tY.y = i, t0 = !0, (n || s) && tb(n, s)
            }
        }

        function tT(t) {
            tY.event = t, te(tY)
        }

        function tE(t) {
            tY.event = t, ti(tY)
        }

        function tA(t) {
            return tv(t) || d(t, P) && tu(tY)
        }

        this.target = C = c(C) || _, this.vars = e, I = I && g.utils.toArray(I), i = i || 1e-9, n = n || 0, z = z || 1, td = td || 1, l = l || "wheel,touch,pointer", A = !1 !== A, E = E || parseFloat(v.getComputedStyle(w).lineHeight) || 22;
        var tP, tL, tM, t0, tO, tI, t9, tY = this, tz = 0, tH = 0, tN = h(C, j), tj = h(C, R), tR = tN(), t1 = tj(), tW = ~l.indexOf("touch") && !~l.indexOf("pointer") && "pointerdown" === T[0], tB = s(C), tF = C.ownerDocument || b, tV = [0, 0, 0], t2 = [0, 0, 0], t3 = 0, t4 = tY.onPress = function (t) {
            tv(t, 1) || (tY.axis = t9 = null, tL.pause(), tY.isPressed = !0, t = d(t), tz = tH = 0, tY.startX = tY.x = t.clientX, tY.startY = tY.y = t.clientY, tY._vx.reset(), tY._vy.reset(), r(tr ? C : tF, T[1], t_, P, !0), tY.deltaX = tY.deltaY = 0, F && F(tY))
        };
        tL = tY._dc = g.delayedCall(O || .25, function t() {
            tY._vx.reset(), tY._vy.reset(), tL.pause(), L && L(tY)
        }).pause(), tY.deltaX = tY.deltaY = 0, tY._vx = u(0, 50, !0), tY._vy = u(0, 50, !0), tY.scrollX = tN, tY.scrollY = tj, tY.isDragging = tY.isGesturing = tY.isPressed = !1, tY.enable = function (t) {
            return tY.isEnabled || (r(tB ? tF : C, "scroll", a), 0 <= l.indexOf("scroll") && r(tB ? tF : C, "scroll", tD, P, tp), 0 <= l.indexOf("wheel") && r(C, "wheel", tC, P, tp), (0 <= l.indexOf("touch") && x || 0 <= l.indexOf("pointer")) && (r(C, T[0], t4, P, tp), r(tF, T[2], tw), r(tF, T[3], tw), tf && r(C, "click", ty, !1, !0), tu && r(C, "click", tA), to && r(tF, "gesturestart", tx), ta && r(tF, "gestureend", tk), te && r(C, k + "enter", tT), ti && r(C, k + "leave", tE), tn && r(C, k + "move", tS)), tY.isEnabled = !0, t && t.type && t4(t), tc && tc(tY)), tY
        }, tY.disable = function () {
            tY.isEnabled && (M.filter(function (t) {
                return t !== tY && s(t.target)
            }).length || o(tB ? tF : C, "scroll", a), tY.isPressed && (tY._vx.reset(), tY._vy.reset(), o(tr ? C : tF, T[1], t_, !0)), o(tB ? tF : C, "scroll", tD, tp), o(C, "wheel", tC, tp), o(C, T[0], t4, tp), o(tF, T[2], tw), o(tF, T[3], tw), o(C, "click", ty, !0), o(C, "click", tA), o(tF, "gesturestart", tx), o(tF, "gestureend", tk), o(C, k + "enter", tT), o(C, k + "leave", tE), o(C, k + "move", tS), tY.isEnabled = tY.isPressed = tY.isDragging = !1, th && th(tY))
        }, tY.kill = function () {
            tY.disable();
            var t = M.indexOf(tY);
            0 <= t && M.splice(t, 1), S === tY && (S = 0)
        }, M.push(tY), tr && s(C) && (S = tY), tY.enable(H)
    }, E = B, A = [{
        key: "velocityX", get: function t() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY", get: function t() {
            return this._vy.getVelocity()
        }
    }], e(E.prototype, A), P && e(E, P), B);

    function B(t) {
        this.init(t)
    }

    function F() {
        return tj = 1
    }

    function V() {
        return tj = 0
    }

    function q(t) {
        return t
    }

    function U(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }

    function X() {
        return "undefined" != typeof window
    }

    function G() {
        return tE || X() && (tE = window.gsap) && tE.registerPlugin && tE
    }

    function Q(t) {
        return !!~tO.indexOf(t)
    }

    function Z(t) {
        return n(t, "getBoundingClientRect") || (Q(t) ? function () {
            return e0.width = tP.innerWidth, e0.height = tP.innerHeight, e0
        } : function () {
            return em(t)
        })
    }

    function K(t, e) {
        var i = e.s, s = e.d2, r = e.d, o = e.a;
        return (o = n(t, i = "scroll" + s)) ? o() - Z(t)()[r] : Q(t) ? (tM[i] || t0[i]) - (tP["inner" + s] || tM["client" + s] || t0["client" + s]) : t[i] - t["offset" + s]
    }

    function J(t, e) {
        for (var i = 0; i < tF.length; i += 3) e && !~e.indexOf(tF[i + 1]) || t(tF[i], tF[i + 1], tF[i + 2])
    }

    function tt(t) {
        return "string" == typeof t
    }

    function te(t) {
        return "function" == typeof t
    }

    function ti(t) {
        return "number" == typeof t
    }

    function tn(t) {
        return "object" == typeof t
    }

    function ts(t, e, i) {
        return t && t.progress(e ? 0 : 1) && i && t.pause()
    }

    function tr(t, e) {
        if (t.enabled) {
            var i = e(t);
            i && i.totalTime && (t.callbackAnimation = i)
        }
    }

    function to(t) {
        return tP.getComputedStyle(t)
    }

    function ta(t, e) {
        for (var i in e) i in t || (t[i] = e[i]);
        return t
    }

    function tl(t, e) {
        var i = e.d2;
        return t["offset" + i] || t["client" + i] || 0
    }

    function tc(t) {
        var e, i = [], n = t.labels, s = t.duration();
        for (e in n) i.push(n[e] / s);
        return i
    }

    function th(t) {
        var e = tE.utils.snap(t), i = Array.isArray(t) && t.slice(0).sort(function (t, e) {
            return t - e
        });
        return i ? function (t, n, s) {
            var r;
            if (void 0 === s && (s = .001), !n) return e(t);
            if (0 < n) {
                for (t -= s, r = 0; r < i.length; r++) if (i[r] >= t) return i[r];
                return i[r - 1]
            }
            for (r = i.length, t += s; r--;) if (i[r] <= t) return i[r];
            return i[0]
        } : function (i, n, s) {
            void 0 === s && (s = .001);
            var r = e(i);
            return !n || Math.abs(r - i) < s || r - i < 0 == n < 0 ? r : e(n < 0 ? i - t : i + t)
        }
    }

    function tu(t, e, i, n) {
        return i.split(",").forEach(function (i) {
            return t(e, i, n)
        })
    }

    function td(t, e, i, n, s) {
        return t.addEventListener(e, i, {passive: !n, capture: !!s})
    }

    function tp(t, e, i, n) {
        return t.removeEventListener(e, i, !!n)
    }

    function tf(t, e, i) {
        return i && i.wheelHandler && t(e, "wheel", i)
    }

    function tm(t, e) {
        if (tt(t)) {
            var i = t.indexOf("="), n = ~i ? (t.charAt(i - 1) + 1) * parseFloat(t.substr(i + 1)) : 0;
            ~i && (t.indexOf("%") > i && (n *= e / 100), t = t.substr(0, i - 1)), t = n + (t in ev ? ev[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
        }
        return t
    }

    function tg(t, e, i, s, r, o, a, l) {
        var c = r.startColor, h = r.endColor, u = r.fontSize, d = r.indent, p = r.fontWeight, f = tL.createElement("div"), m = Q(i) || "fixed" === n(i, "pinType"), g = -1 !== t.indexOf("scroller"), y = m ? t0 : i, v = -1 !== t.indexOf("start"), b = v ? c : h, _ = "border-color:" + b + ";font-size:" + u + ";color:" + b + ";font-weight:" + p + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return _ += "position:" + ((g || l) && m ? "fixed;" : "absolute;"), (g || l || !m) && (_ += (s === R ? es : er) + ":" + (o + parseFloat(d)) + "px;"), a && (_ += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), f._isStart = v, f.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")), f.style.cssText = _, f.innerText = e || 0 === e ? t + "-" + e : t, y.children[0] ? y.insertBefore(f, y.children[0]) : y.appendChild(f), f._offset = f["offset" + s.op.d2], e$(f, 0, s, v), f
    }

    function ty() {
        return 34 < tJ() - ee && eE()
    }

    function tv() {
        t4 && t4.isPressed && !(t4.startX > t0.clientWidth) || (O.cache++, tG = tG || requestAnimationFrame(eE), ee || ex("scrollStart"), ee = tJ())
    }

    function t$() {
        t5 = tP.innerWidth, t7 = tP.innerHeight
    }

    function t8() {
        O.cache++, tN || t3 || tL.fullscreenElement || tL.webkitFullscreenElement || tq && t5 === tP.innerWidth && !(Math.abs(tP.innerHeight - t7) > .25 * tP.innerHeight) || tI.restart(!0)
    }

    function tb() {
        return tp(eI, "scrollEnd", tb) || eC(!0)
    }

    function t_(t) {
        for (var e = 0; e < ek.length; e += 5) (!t || ek[e + 4] && ek[e + 4].query === t) && (ek[e].style.cssText = ek[e + 1], ek[e].getBBox && ek[e].setAttribute("transform", ek[e + 2] || ""), ek[e + 3].uncache = 1)
    }

    function tw(t, e) {
        var i;
        for (t1 = 0; t1 < e8.length; t1++) (i = e8[t1]) && (!e || i._ctx === e) && (t ? i.kill(1) : i.revert(!0, !0));
        e && t_(e), e || ex("revert")
    }

    function tx() {
        return O.cache++ && O.forEach(function (t) {
            return "function" == typeof t && (t.rec = 0)
        })
    }

    function tk(t, e, i, n) {
        if (!t._gsap.swappedIn) {
            for (var s, r = eA.length, o = e.style, a = t.style; r--;) o[s = eA[r]] = i[s];
            o.position = "absolute" === i.position ? "absolute" : "relative", "inline" === i.display && (o.display = "inline-block"), a[er] = a[es] = o.flexBasis = "auto", o.overflow = "visible", o.boxSizing = "border-box", o[eo] = tl(t, j) + ef, o[ea] = tl(t, R) + ef, o[eu] = a[ed] = a.top = a.left = "0", eM(n), a[eo] = a.maxWidth = i[eo], a[ea] = a.maxHeight = i[ea], a[eu] = i[eu], t.parentNode !== e && (t.parentNode.insertBefore(e, t), e.appendChild(t)), t._gsap.swappedIn = !0
        }
    }

    function tD(t) {
        for (var e = eP.length, i = t.style, n = [], s = 0; s < e; s++) n.push(eP[s], i[eP[s]]);
        return n.t = t, n
    }

    function tC(t, e, i, n, s, r, o, a, l, h, u, d, p) {
        te(t) && (t = t(a)), tt(t) && "max" === t.substr(0, 3) && (t = d + ("=" === t.charAt(4) ? tm("0" + t.substr(3), i) : 0));
        var f, m, g, y = p ? p.time() : 0;
        if (p && p.seek(0), ti(t)) o && e$(o, i, n, !0); else {
            te(e) && (e = e(a));
            var v, b, _, w, x = (t || "0").split(" ");
            g = c(e) || t0, (v = em(g) || {}).left || v.top || "none" !== to(g).display || (w = g.style.display, g.style.display = "block", v = em(g), w ? g.style.display = w : g.style.removeProperty("display")), b = tm(x[0], v[n.d]), _ = tm(x[1] || "0", i), t = v[n.p] - l[n.p] - h + b + s - _, o && e$(o, _, n, i - _ < 20 || o._isStart && 20 < _), i -= i - _
        }
        if (r) {
            var k = t + i, D = r._isStart;
            f = "scroll" + n.d2, e$(r, k, n, D && 20 < k || !D && (u ? Math.max(t0[f], tM[f]) : r.parentNode[f]) <= k + 1), u && (l = em(o), u && (r.style[n.op.p] = l[n.op.p] - n.op.m - r._offset + ef))
        }
        return p && g && (f = em(g), p.seek(d), m = em(g), p._caScrollDist = f[n.p] - m[n.p], t = t / p._caScrollDist * d), p && p.seek(y), p ? t : Math.round(t)
    }

    function tS(t, e, i, n) {
        if (t.parentNode !== e) {
            var s, r, o = t.style;
            if (e === t0) {
                for (s in t._stOrig = o.cssText, r = to(t)) +s || eO.test(s) || !r[s] || "string" != typeof o[s] || "0" === s || (o[s] = r[s]);
                o.top = i, o.left = n
            } else o.cssText = t._stOrig;
            tE.core.getCache(t).uncache = 1, e.appendChild(t)
        }
    }

    function tT(t, e) {
        function i(e, a, l, c, h) {
            var u = i.tween, d = a.onComplete;
            return l = l || r(), h = c && h || 0, c = c || e - l, u && u.kill(), n = Math.round(l), a[o] = e, (a.modifiers = {})[o] = function (t) {
                return (t = Math.round(r())) !== n && t !== s && 3 < Math.abs(t - n) && 3 < Math.abs(t - s) ? (u.kill(), i.tween = 0) : t = l + c * u.ratio + h * u.ratio * u.ratio, s = n, n = Math.round(t)
            }, a.onComplete = function () {
                i.tween = 0, d && d.call(u)
            }, u = i.tween = tE.to(t, a)
        }

        var n, s, r = h(t, e), o = "_scroll" + e.p2;
        return (t[o] = r).wheelHandler = function () {
            return i.tween && i.tween.kill() && (i.tween = 0)
        }, td(t, "wheel", r.wheelHandler), i
    }

    W.version = "3.11.0", W.create = function (t) {
        return new W(t)
    }, W.register = m, W.getAll = function () {
        return M.slice()
    }, W.getById = function (t) {
        return M.filter(function (e) {
            return e.vars.id === t
        })[0]
    }, i() && g.registerPlugin(W);
    var tE, tA, tP, tL, tM, t0, tO, tI, t9, tY, tz, tH, tN, tj, tR, t1, tW, tB, tF, tV, t2, t3, t4, tq, t7, t5, tU, t6, tX, tG, tQ, tZ, tK = 1, tJ = Date.now, et = tJ(), ee = 0, ei = 0, en = Math.abs, es = "right", er = "bottom", eo = "width", ea = "height", el = "Right", ec = "Left", eh = "Bottom", eu = "padding", ed = "margin", ep = "Width", ef = "px", em = function t(e, i) {
        var n = i && "matrix(1, 0, 0, 1, 0, 0)" !== to(e)[tR] && tE.to(e, {x: 0, y: 0, xPercent: 0, yPercent: 0, rotation: 0, rotationX: 0, rotationY: 0, scale: 1, skewX: 0, skewY: 0}).progress(1), s = e.getBoundingClientRect();
        return n && n.progress(0).kill(), s
    }, eg = {startColor: "green", endColor: "red", indent: 0, fontSize: "16px", fontWeight: "normal"}, ey = {toggleActions: "play", anticipatePin: 0}, ev = {top: 0, left: 0, center: .5, bottom: 1, right: 1}, e$ = function t(e, i, n, s) {
        var r = {display: "block"}, o = n[s ? "os2" : "p2"], a = n[s ? "p2" : "os2"];
        e._isFlipped = s, r[n.a + "Percent"] = s ? -100 : 0, r[n.a] = s ? "1px" : 0, r["border" + o + ep] = 1, r["border" + a + ep] = 0, r[n.p] = i + "px", tE.set(e, r)
    }, e8 = [], eb = {}, e_ = {}, ew = [], ex = function t(e) {
        return e_[e] && e_[e].map(function (t) {
            return t()
        }) || ew
    }, ek = [], eD = 0, eC = function t(e, i) {
        if (!ee || e) {
            tQ = !0;
            var n = ex("refreshInit");
            tV && eI.sort(), i || tw(), e8.slice(0).forEach(function (t) {
                return t.refresh()
            }), e8.forEach(function (t) {
                return "max" === t.vars.end && t.setPositions(t.start, Math.max(t.start + 1, K(t.scroller, t._dir)))
            }), n.forEach(function (t) {
                return t && t.render && t.render(-1)
            }), tx(), tI.pause(), eD++, tQ = !1, ex("refresh")
        } else td(eI, "scrollEnd", tb)
    }, eS = 0, eT = 1, eE = function t() {
        if (!tQ) {
            eI.isUpdating = !0, tZ && tZ.update(0);
            var e = e8.length, i = tJ(), n = 50 <= i - et, s = e && e8[0].scroll();
            if (eT = s < eS ? -1 : 1, eS = s, n && (ee && !tj && 200 < i - ee && (ee = 0, ex("scrollEnd")), tz = et, et = i), eT < 0) {
                for (t1 = e; 0 < t1--;) e8[t1] && e8[t1].update(0, n);
                eT = 1
            } else for (t1 = 0; t1 < e; t1++) e8[t1] && e8[t1].update(0, n);
            eI.isUpdating = !1
        }
        tG = 0
    }, eA = ["left", "top", er, es, ed + eh, ed + el, ed + "Top", ed + ec, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], eP = eA.concat([eo, ea, "boxSizing", "max" + ep, "maxHeight", "position", ed, eu, eu + "Top", eu + el, eu + eh, eu + ec]), eL = /([A-Z])/g, eM = function t(e) {
        if (e) {
            var i, n, s = e.t.style, r = e.length, o = 0;
            for ((e.t._gsap || tE.core.getCache(e.t)).uncache = 1; o < r; o += 2) n = e[o + 1], i = e[o], n ? s[i] = n : s[i] && s.removeProperty(i.replace(eL, "-$1").toLowerCase())
        }
    }, e0 = {left: 0, top: 0}, eO = /(webkit|moz|length|cssText|inset)/i, eI = (e9.prototype.init = function t(e, i) {
        if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), ei) {
            var s, r, o, a, l, u, d, p, f, m, g, y, v, b, _, w, x, k, D, C, S, T, E, A, P, L, M, O, Y, z, H, N, W, B, F, V, X, G, J, tu, tf, ty, t$, t_, tw, tx, tA, tO, tI = (e = ta(tt(e) || ti(e) || e.nodeType ? {trigger: e} : e, ey)).onUpdate, tH = e.toggleClass, tR = e.id, tW = e.onToggle, tB = e.onRefresh, tF = e.scrub, t3 = e.trigger, t4 = e.pin, tq = e.pinSpacing, t7 = e.invalidateOnRefresh, t5 = e.anticipatePin, tU = e.onScrubComplete, tG = e.onSnapComplete, et = e.once, es = e.snap, er = e.pinReparent, ev = e.pinSpacer, e$ = e.containerAnimation, e_ = e.fastScrollEnd, ew = e.preventOverlaps, ex = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? j : R, ek = !tF && 0 !== tF, eD = c(e.scroller || tP), eC = tE.core.getCache(eD), eS = Q(eD), eE = "fixed" === ("pinType" in e ? e.pinType : n(eD, "pinType") || eS && "fixed"), eA = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack], eP = ek && e.toggleActions.split(" "), eL = "markers" in e ? e.markers : ey.markers,
                eO = eS ? 0 : parseFloat(to(eD)["border" + ex.p2 + ep]) || 0, eI = this, eY = e.onRefreshInit && function () {
                    return e.onRefreshInit(eI)
                }, ez = (s = eD, r = eS, a = (o = ex).d, l = o.d2, u = o.a, (u = n(s, "getBoundingClientRect")) ? function () {
                    return u()[a]
                } : function () {
                    return (r ? tP["inner" + l] : s["client" + l]) || 0
                }), eH = (d = eD, !(p = eS) || ~I.indexOf(d) ? Z(d) : function () {
                    return e0
                }), eN = 0, ej = 0, eR = h(eD, ex);
            if (t6(eI), eI._dir = ex, t5 *= 45, eI.scroller = eD, eI.scroll = e$ ? e$.time.bind(e$) : eR, y = eR(), eI.vars = e, i = i || e.animation, "refreshPriority" in e && (tV = 1, -9999 === e.refreshPriority && (tZ = eI)), eC.tweenScroll = eC.tweenScroll || {top: tT(eD, R), left: tT(eD, j)}, eI.tweenTo = f = eC.tweenScroll[ex.p], eI.scrubDuration = function (t) {
                (J = ti(t) && t) ? G ? G.duration(t) : G = tE.to(i, {
                    ease: "expo", totalProgress: "+=0.001", duration: J, paused: !0, onComplete: function t() {
                        return tU && tU(eI)
                    }
                }) : (G && G.progress(1).kill(), G = 0)
            }, i && (i.vars.lazy = !1, i._initted || !1 !== i.vars.immediateRender && !1 !== e.immediateRender && i.render(0, !0, !0), eI.animation = i.pause(), (i.scrollTrigger = eI).scrubDuration(tF), V = 0, tR = tR || i.vars.id), e8.push(eI), es && (tn(es) && !es.push || (es = {snapTo: es}), "scrollBehavior" in t0.style && tE.set(eS ? [t0, tM] : eD, {scrollBehavior: "auto"}), g = te(es.snapTo) ? es.snapTo : "labels" === es.snapTo ? (tA = i, function (t) {
                return tE.utils.snap(tc(tA), t)
            }) : "labelsDirectional" === es.snapTo ? (tO = i, function (t, e) {
                return th(tc(tO))(t, e.direction)
            }) : !1 !== es.directional ? function (t, e) {
                return th(es.snapTo)(t, tJ() - ej < 500 ? 0 : e.direction)
            } : tE.utils.snap(es.snapTo), tu = tn(tu = es.duration || {min: .1, max: 2}) ? tY(tu.min, tu.max) : tY(tu, tu), tf = tE.delayedCall(es.delay || J / 2 || .1, function () {
                var t = eR(), e = tJ() - ej < 500, n = f.tween;
                if (!(e || 10 > Math.abs(eI.getVelocity())) || n || tj || eN === t) eI.isActive && eN !== t && tf.restart(!0); else {
                    var s = (t - b) / S, r = i && !ek ? i.totalProgress() : s, o = e ? 0 : (r - X) / (tJ() - tz) * 1e3 || 0, a = tE.utils.clamp(-s, 1 - s, en(o / 2) * o / .185), l = s + (!1 === es.inertia ? 0 : a), c = tY(0, 1, g(l, eI)), h = Math.round(b + c * S), u = es.onStart, d = es.onInterrupt, p = es.onComplete;
                    if (t <= _ && b <= t && h !== t) {
                        if (n && !n._initted && n.data <= en(h - t)) return;
                        !1 === es.inertia && (a = c - s), f(h, {
                            duration: tu(en(.185 * Math.max(en(l - r), en(c - r)) / o / .05 || 0)), ease: es.ease || "power3", data: en(h - t), onInterrupt: function t() {
                                return tf.restart(!0) && d && d(eI)
                            }, onComplete: function t() {
                                eI.update(), eN = eR(), V = X = i && !ek ? i.totalProgress() : eI.progress, tG && tG(eI), p && p(eI)
                            }
                        }, t, a * S, h - t - a * S), u && u(eI, f.tween)
                    }
                }
            }).pause()), tR && (eb[tR] = eI), tx = (tx = (t3 = eI.trigger = c(t3 || t4)) && t3._gsap && t3._gsap.stRevert) && tx(eI), t4 = !0 === t4 ? t3 : c(t4), tt(tH) && (tH = {targets: t3, className: tH}), t4 && (!1 === tq || tq === ed || (tq = !(!tq && "flex" === to(t4.parentNode).display) && eu), eI.pin = t4, !1 !== e.force3D && tE.set(t4, {force3D: !0}), (m = tE.core.getCache(t4)).spacer ? T = m.pinState : (ev && ((ev = c(ev)) && !ev.nodeType && (ev = ev.current || ev.nativeElement), m.spacerIsNative = !!ev, ev && (m.spacerState = tD(ev))), m.spacer = P = ev || tL.createElement("div"), P.classList.add("pin-spacer"), tR && P.classList.add("pin-spacer-" + tR), m.pinState = T = tD(t4)), eI.spacer = P = m.spacer, H = (F = to(t4))[tq + ex.os2], M = tE.getProperty(t4), O = tE.quickSetter(t4, ex.a, ef), tk(t4, P, F), A = tD(t4)), eL) {
                C = tn(eL) ? ta(eL, eg) : eg, k = tg("scroller-start", tR, eD, ex, C, 0), D = tg("scroller-end", tR, eD, ex, C, 0, k), L = k["offset" + ex.op.d2];
                var e1, eW, eB = c(n(eD, "content") || eD);
                w = this.markerStart = tg("start", tR, eB, ex, C, L, 0, e$), x = this.markerEnd = tg("end", tR, eB, ex, C, L, 0, e$), e$ && (tw = tE.quickSetter([w, x], ex.a, ef)), eE || I.length && !0 === n(eD, "fixedMarkers") || (e1 = eS ? t0 : eD, eW = to(e1).position, e1.style.position = "absolute" === eW || "fixed" === eW ? eW : "relative", tE.set([k, D], {force3D: !0}), W = tE.quickSetter(k, ex.a, ef), B = tE.quickSetter(D, ex.a, ef))
            }
            if (e$) {
                var eF = e$.vars.onUpdate, eV = e$.vars.onUpdateParams;
                e$.eventCallback("onUpdate", function () {
                    eI.update(0, 0, 1), eF && eF.apply(eV || [])
                })
            }
            eI.previous = function () {
                return e8[e8.indexOf(eI) - 1]
            }, eI.next = function () {
                return e8[e8.indexOf(eI) + 1]
            }, eI.revert = function (t, e) {
                if (!e) return eI.kill(!0);
                var n = !1 !== t || !eI.enabled, s = tN;
                n !== eI.isReverted && (n && (!eI.scroll.rec && tN && tQ && (eI.scroll.rec = eR()), t$ = Math.max(eR(), eI.scroll.rec || 0), ty = eI.progress, t_ = i && i.progress()), w && [w, x, k, D].forEach(function (t) {
                    return t.style.display = n ? "none" : "block"
                }), n && (tN = 1), eI.update(n), tN = s, t4 && (n ? function t(e, i, n) {
                    eM(n);
                    var s = e._gsap;
                    if (s.spacerIsNative) eM(s.spacerState); else if (e._gsap.swappedIn) {
                        var r = i.parentNode;
                        r && (r.insertBefore(e, i), r.removeChild(i))
                    }
                    e._gsap.swappedIn = !1
                }(t4, P, T) : er && eI.isActive || tk(t4, P, to(t4), N)), eI.isReverted = n)
            }, eI.refresh = function (t, n) {
                if (!tN && eI.enabled || n) {
                    if (t4 && t && ee) td(e9, "scrollEnd", tb); else {
                        !tQ && eY && eY(eI), tN = 1, ej = tJ(), f.tween && (f.tween.kill(), f.tween = 0), G && G.pause(), t7 && i && i.revert().invalidate(), eI.isReverted || eI.revert(!0, !0);
                        for (var s, r, o, a, l, u, d, p, m, g, C = ez(), L = eH(), O = e$ ? e$.duration() : K(eD, ex), I = 0, H = 0, W = e.end, B = e.endTrigger || t3, F = e.start || (0 !== e.start && t3 ? t4 ? "0 0" : "0 100%" : 0), V = eI.pinnedContainer = e.pinnedContainer && c(e.pinnedContainer), q = t3 && Math.max(0, e8.indexOf(eI)) || 0, U = q; U--;) (u = e8[U]).end || u.refresh(0, 1) || (tN = 1), (d = u.pin) && (d === t3 || d === t4) && !u.isReverted && ((g = g || []).unshift(u), u.revert(!0, !0)), u !== e8[U] && (q--, U--);
                        for (te(F) && (F = F(eI)), b = tC(F, t3, C, ex, eR(), w, k, eI, L, eO, eE, O, e$) || (t4 ? -.001 : 0), te(W) && (W = W(eI)), tt(W) && !W.indexOf("+=") && (~W.indexOf(" ") ? W = (tt(F) ? F.split(" ")[0] : "") + W : (I = tm(W.substr(2), C), W = tt(F) ? F : b + I, B = t3)), S = (_ = Math.max(b, tC(W || (B ? "100% 0" : O), B, C, ex, eR() + I, x, D, eI, L, eO, eE, O, e$)) || -.001) - b || (b -= .01) && .001, I = 0, U = q; U--;) (d = (u = e8[U]).pin) && u.start - u._pinPush < b && !e$ && 0 < u.end && (s = u.end - u.start, d !== t3 && d !== V || ti(F) || (I += s * (1 - u.progress)), d === t4 && (H += s));
                        if (b += I, _ += I, eI._pinPush = H, w && I && ((s = {})[ex.a] = "+=" + I, V && (s[ex.p] = "-=" + eR()), tE.set([w, x], s)), t4) s = to(t4), a = ex === R, o = eR(), Y = parseFloat(M(ex.a)) + H, !O && 1 < _ && ((eS ? t0 : eD).style["overflow-" + ex.a] = "scroll"), tk(t4, P, s), A = tD(t4), r = em(t4, !0), p = eE && h(eD, a ? j : R)(), tq && ((N = [tq + ex.os2, S + H + ef]).t = P, (U = tq === eu ? tl(t4, ex) + S + H : 0) && N.push(ex.d, U + ef), eM(N), eE && eR(t$)), eE && ((l = {top: r.top + (a ? o - b : p) + ef, left: r.left + (a ? p : o - b) + ef, boxSizing: "border-box", position: "fixed"})[eo] = l.maxWidth = Math.ceil(r.width) + ef, l[ea] = l.maxHeight = Math.ceil(r.height) + ef, l[ed] = l[ed + "Top"] = l[ed + el] = l[ed + eh] = l[ed + ec] = "0", l[eu] = s[eu], l[eu + "Top"] = s[eu + "Top"], l[eu + el] = s[eu + el], l[eu + eh] = s[eu + eh], l[eu + ec] = s[eu + ec], E = function t(e, i, n) {
                            for (var s, r = [], o = e.length, a = n ? 8 : 0; a < o; a += 2) s = e[a], r.push(s, s in i ? i[s] : e[a + 1]);
                            return r.t = e.t, r
                        }(T, l, er)), i ? (m = i._initted, t2(1), i.render(i.duration(), !0, !0), z = M(ex.a) - Y + S + H, S !== z && eE && E.splice(E.length - 2, 2), i.render(0, !0, !0), m || i.invalidate(), t2(0)) : z = S; else if (t3 && eR() && !e$) for (r = t3.parentNode; r && r !== t0;) r._pinOffset && (b -= r._pinOffset, _ -= r._pinOffset), r = r.parentNode;
                        g && g.forEach(function (t) {
                            return t.revert(!1, !0)
                        }), eI.start = b, eI.end = _, y = v = eR(), e$ || (y < t$ && eR(t$), eI.scroll.rec = 0), eI.revert(!1, !0), tf && (eN = -1, eI.isActive && eR(b + S * ty), tf.restart(!0)), tN = 0, i && ek && (i._initted || t_) && i.progress() !== t_ && i.progress(t_, !0).render(i.time(), !0, !0), (ty !== eI.progress || e$) && (i && !ek && i.totalProgress(ty, !0), eI.progress = (y - b) / S === ty ? 0 : ty, eI.update(0, 0, 1)), t4 && tq && (P._pinOffset = Math.round(eI.progress * z)), tB && tB(eI)
                    }
                }
            }, eI.getVelocity = function () {
                return (eR() - v) / (tJ() - tz) * 1e3 || 0
            }, eI.endAnimation = function () {
                ts(eI.callbackAnimation), i && (G ? G.progress(1) : i.paused() ? ek || ts(i, eI.direction < 0, 1) : ts(i, i.reversed()))
            }, eI.labelToScroll = function (t) {
                return i && i.labels && (b || eI.refresh() || b) + i.labels[t] / i.duration() * S || 0
            }, eI.getTrailing = function (t) {
                var e = e8.indexOf(eI), i = 0 < eI.direction ? e8.slice(0, e).reverse() : e8.slice(e + 1);
                return (tt(t) ? i.filter(function (e) {
                    return e.vars.preventOverlaps === t
                }) : i).filter(function (t) {
                    return 0 < eI.direction ? t.end <= b : t.start >= _
                })
            }, eI.update = function (t, e, n) {
                if (!e$ || n || t) {
                    var s, r, o, a, l, c, h, u = eI.scroll(), d = t ? 0 : (u - b) / S, p = d < 0 ? 0 : 1 < d ? 1 : d || 0, m = eI.progress;
                    if (e && (v = y, y = e$ ? eR() : u, es && (X = V, V = i && !ek ? i.totalProgress() : p)), t5 && !p && t4 && !tN && !tK && ee && b < u + (u - v) / (tJ() - tz) * t5 && (p = 1e-4), p !== m && eI.enabled) {
                        if (a = (l = (s = eI.isActive = !!p && p < 1) != (!!m && m < 1)) || !!p != !!m, eI.direction = m < p ? 1 : -1, eI.progress = p, a && !tN && (r = p && !m ? 0 : 1 === p ? 1 : 1 === m ? 2 : 3, ek && (o = !l && "none" !== eP[r + 1] && eP[r + 1] || eP[r], h = i && ("complete" === o || "reset" === o || o in i))), ew && (l || h) && (h || tF || !i) && (te(ew) ? ew(eI) : eI.getTrailing(ew).forEach(function (t) {
                            return t.endAnimation()
                        })), ek || (!G || tN || tK ? i && i.totalProgress(p, !!tN) : ((e$ || tZ && tZ !== eI) && G.render(G._dp._time - G._start), G.resetTo ? G.resetTo("totalProgress", p, i._tTime / i._tDur) : (G.vars.totalProgress = p, G.invalidate().restart()))), t4) {
                            if (t && tq && (P.style[tq + ex.os2] = H), eE) {
                                if (a) {
                                    if (c = !t && m < p && u < _ + 1 && u + 1 >= K(eD, ex), er) {
                                        if (!t && (s || c)) {
                                            var g = em(t4, !0), w = u - b;
                                            tS(t4, t0, g.top + (ex === R ? w : 0) + ef, g.left + (ex === R ? 0 : w) + ef)
                                        } else tS(t4, P)
                                    }
                                    eM(s || c ? E : A), z !== S && p < 1 && s || O(Y + (1 !== p || c ? 0 : z))
                                }
                            } else O(U(Y + z * p))
                        }
                        !es || f.tween || tN || tK || tf.restart(!0), tH && (l || et && p && (p < 1 || !tX)) && t9(tH.targets).forEach(function (t) {
                            return t.classList[s || et ? "add" : "remove"](tH.className)
                        }), !tI || ek || t || tI(eI), a && !tN ? (ek && (h && ("complete" === o ? i.pause().totalProgress(1) : "reset" === o ? i.restart(!0).pause() : "restart" === o ? i.restart(!0) : i[o]()), tI && tI(eI)), !l && tX || (tW && l && tr(eI, tW), eA[r] && tr(eI, eA[r]), et && (1 === p ? eI.kill(!1, 1) : eA[r] = 0), l || eA[r = 1 === p ? 1 : 3] && tr(eI, eA[r])), e_ && !s && Math.abs(eI.getVelocity()) > (ti(e_) ? e_ : 2500) && (ts(eI.callbackAnimation), G ? G.progress(1) : ts(i, !p, 1))) : ek && tI && !tN && tI(eI)
                    }
                    if (B) {
                        var x = e$ ? u / e$.duration() * (e$._caScrollDist || 0) : u;
                        W(x + (k._isFlipped ? 1 : 0)), B(x)
                    }
                    tw && tw(-u / e$.duration() * (e$._caScrollDist || 0))
                }
            }, eI.enable = function (t, e) {
                eI.enabled || (eI.enabled = !0, td(eD, "resize", t8), td(eS ? tL : eD, "scroll", tv), eY && td(e9, "refreshInit", eY), !1 !== t && (eI.progress = ty = 0, y = v = eN = eR()), !1 !== e && eI.refresh())
            }, eI.getTween = function (t) {
                return t && f ? f.tween : G
            }, eI.setPositions = function (t, e) {
                t4 && (Y += t - b, z += e - t - S), eI.start = b = t, eI.end = _ = e, S = e - t, eI.update()
            }, eI.disable = function (t, e) {
                if (eI.enabled && (!1 !== t && eI.revert(!0, !0), eI.enabled = eI.isActive = !1, e || G && G.pause(), t$ = 0, m && (m.uncache = 1), eY && tp(e9, "refreshInit", eY), tf && (tf.pause(), f.tween && f.tween.kill() && (f.tween = 0)), !eS)) {
                    for (var i = e8.length; i--;) if (e8[i].scroller === eD && e8[i] !== eI) return;
                    tp(eD, "resize", t8), tp(eD, "scroll", tv)
                }
            }, eI.kill = function (t, n) {
                eI.disable(t, n), G && !n && G.kill(), tR && delete eb[tR];
                var s = e8.indexOf(eI);
                0 <= s && e8.splice(s, 1), s === t1 && 0 < eT && t1--, s = 0, e8.forEach(function (t) {
                    return t.scroller === eI.scroller && (s = 1)
                }), s || (eI.scroll.rec = 0), i && (i.scrollTrigger = null, t && i.render(-1), n || i.kill()), w && [w, x, k, D].forEach(function (t) {
                    return t.parentNode && t.parentNode.removeChild(t)
                }), tZ === eI && (tZ = 0), t4 && (m && (m.uncache = 1), s = 0, e8.forEach(function (t) {
                    return t.pin === t4 && s++
                }), s || (m.spacer = 0)), e.onKill && e.onKill(eI)
            }, eI.enable(!1, !1), tx && tx(eI), i && i.add && !S ? tE.delayedCall(.01, function () {
                return b || _ || eI.refresh()
            }) && (S = .01) && (b = _ = 0) : eI.refresh()
        } else this.update = this.refresh = this.kill = q
    }, e9.register = function t(e) {
        return tA || (tE = e || G(), X() && window.document && e9.enable(), tA = ei), tA
    }, e9.defaults = function t(e) {
        if (e) for (var i in e) ey[i] = e[i];
        return ey
    }, e9.disable = function t(e, i) {
        ei = 0, e8.forEach(function (t) {
            return t[i ? "kill" : "disable"](e)
        }), tp(tP, "wheel", tv), tp(tL, "scroll", tv), clearInterval(tH), tp(tL, "touchcancel", q), tp(t0, "touchstart", q), tu(tp, tL, "pointerdown,touchstart,mousedown", F), tu(tp, tL, "pointerup,touchend,mouseup", V), tI.kill(), J(tp);
        for (var n = 0; n < O.length; n += 3) tf(tp, O[n], O[n + 1]), tf(tp, O[n], O[n + 2])
    }, e9.enable = function t() {
        if (tP = window, tM = (tL = document).documentElement, t0 = tL.body, tE && (t9 = tE.utils.toArray, tY = tE.utils.clamp, t6 = tE.core.context || q, t2 = tE.core.suppressOverwrites || q, tE.core.globals("ScrollTrigger", e9), t0)) {
            ei = 1, W.register(tE), e9.isTouch = W.isTouch, tU = W.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), td(tP, "wheel", tv), tO = [tP, tL, tM, t0], tE.matchMedia ? (e9.matchMedia = function (t) {
                var e, i;
                for (i in t) e ? e.add(i, t[i]) : e = tE.matchMedia(i, t[i]);
                return e
            }, tE.addEventListener("matchMediaInit", function () {
                return tw()
            }), tE.addEventListener("matchMediaRevert", function () {
                return t_()
            }), tE.addEventListener("matchMedia", function () {
                eC(0, 1), ex("matchMedia")
            }), tE.matchMedia("(orientation: portrait)", function () {
                return t$(), t$
            })) : console.warn("Requires GSAP 3.11.0 or later"), td(tL, "scroll", tv);
            var e, i, n = t0.style, s = n.borderTopStyle, r = tE.core.Animation.prototype;
            for (r.revert || Object.defineProperty(r, "revert", {
                value: function t() {
                    return this.time(-.01, !0)
                }
            }), n.borderTopStyle = "solid", e = em(t0), R.m = Math.round(e.top + R.sc()) || 0, j.m = Math.round(e.left + j.sc()) || 0, s ? n.borderTopStyle = s : n.removeProperty("border-top-style"), tH = setInterval(ty, 250), tE.delayedCall(.5, function () {
                return tK = 0
            }), td(tL, "touchcancel", q), td(t0, "touchstart", q), tu(td, tL, "pointerdown,touchstart,mousedown", F), tu(td, tL, "pointerup,touchend,mouseup", V), tR = tE.utils.checkPrefix("transform"), eP.push(tR), tA = tJ(), tI = tE.delayedCall(.2, eC).pause(), tF = [tL, "visibilitychange", function () {
                var t = tP.innerWidth, e = tP.innerHeight;
                tL.hidden ? (tW = t, tB = e) : tW === t && tB === e || t8()
            }, tL, "DOMContentLoaded", eC, tP, "load", eC, tP, "resize", t8], J(td), e8.forEach(function (t) {
                return t.enable(0, 1)
            }), i = 0; i < O.length; i += 3) tf(tp, O[i], O[i + 1]), tf(tp, O[i], O[i + 2])
        }
    }, e9.config = function t(e) {
        "limitCallbacks" in e && (tX = !!e.limitCallbacks);
        var i = e.syncInterval;
        i && clearInterval(tH) || (tH = i) && setInterval(ty, i), "ignoreMobileResize" in e && (tq = 1 === e9.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (J(tp) || J(td, e.autoRefreshEvents || "none"), t3 = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
    }, e9.scrollerProxy = function t(e, i) {
        var n = c(e), s = O.indexOf(n), r = Q(n);
        ~s && O.splice(s, r ? 6 : 2), i && (r ? I.unshift(tP, i, t0, i, tM, i) : I.unshift(n, i))
    }, e9.clearMatchMedia = function t(e) {
        e8.forEach(function (t) {
            return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0)
        })
    }, e9.isInViewport = function t(e, i, n) {
        var s = (tt(e) ? c(e) : e).getBoundingClientRect(), r = s[n ? eo : ea] * i || 0;
        return n ? 0 < s.right - r && s.left + r < tP.innerWidth : 0 < s.bottom - r && s.top + r < tP.innerHeight
    }, e9.positionInViewport = function t(e, i, n) {
        tt(e) && (e = c(e));
        var s = e.getBoundingClientRect(), r = s[n ? eo : ea], o = null == i ? r / 2 : i in ev ? ev[i] * r : ~i.indexOf("%") ? parseFloat(i) * r / 100 : parseFloat(i) || 0;
        return n ? (s.left + o) / tP.innerWidth : (s.top + o) / tP.innerHeight
    }, e9.killAll = function t(e) {
        if (e8.forEach(function (t) {
            return "ScrollSmoother" !== t.vars.id && t.kill()
        }), !0 !== e) {
            var i = e_.killAll || [];
            e_ = {}, i.forEach(function (t) {
                return t()
            })
        }
    }, e9);

    function e9(t, e) {
        tA || e9.register(tE) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(t, e)
    }

    function eY(t, e, i, n) {
        return n < e ? t(n) : e < 0 && t(0), n < i ? (n - e) / (i - e) : i < 0 ? e / (e - i) : 1
    }

    function ez(t, e) {
        !0 === e ? t.style.removeProperty("touch-action") : t.style.touchAction = !0 === e ? "auto" : e ? "pan-" + e + (W.isTouch ? " pinch-zoom" : "") : "none", t === tM && ez(t0, e)
    }

    function eH(t) {
        var e, i = t.event, n = t.target, s = t.axis, r = (i.changedTouches ? i.changedTouches[0] : i).target, o = r._gsap || tE.core.getCache(r), a = tJ();
        if (!o._isScrollT || 2e3 < a - o._isScrollT) {
            for (; r && r.scrollHeight <= r.clientHeight;) r = r.parentNode;
            o._isScroll = r && !Q(r) && r !== n && (eR[(e = to(r)).overflowY] || eR[e.overflowX]), o._isScrollT = a
        }
        (o._isScroll || "x" === s) && (i.stopPropagation(), i._gsapAllow = !0)
    }

    function eN(t, e, i, n) {
        return W.create({
            target: t, capture: !0, debounce: !1, lockAxis: !0, type: e, onWheel: n = n && eH, onPress: n, onDrag: n, onScroll: n, onEnable: function t() {
                return i && td(tL, W.eventTypes[0], eW, !1, !0)
            }, onDisable: function t() {
                return tp(tL, W.eventTypes[0], eW, !0)
            }
        })
    }

    eI.version = "3.11.0", eI.saveStyles = function (t) {
        return t ? t9(t).forEach(function (t) {
            if (t && t.style) {
                var e = ek.indexOf(t);
                0 <= e && ek.splice(e, 5), ek.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), tE.core.getCache(t), t6())
            }
        }) : ek
    }, eI.revert = function (t, e) {
        return tw(!t, e)
    }, eI.create = function (t, e) {
        return new eI(t, e)
    }, eI.refresh = function (t) {
        return t ? t8() : (tA || eI.register()) && eC(!0)
    }, eI.update = eE, eI.clearScrollMemory = tx, eI.maxScroll = function (t, e) {
        return K(t, e ? j : R)
    }, eI.getScrollFunc = function (t, e) {
        return h(c(t), e ? j : R)
    }, eI.getById = function (t) {
        return eb[t]
    }, eI.getAll = function () {
        return e8.filter(function (t) {
            return "ScrollSmoother" !== t.vars.id
        })
    }, eI.isScrolling = function () {
        return !!ee
    }, eI.snapDirectional = th, eI.addEventListener = function (t, e) {
        var i = e_[t] || (e_[t] = []);
        ~i.indexOf(e) || i.push(e)
    }, eI.removeEventListener = function (t, e) {
        var i = e_[t], n = i && i.indexOf(e);
        0 <= n && i.splice(n, 1)
    }, eI.batch = function (t, e) {
        function i(t, e) {
            var i = [], n = [], s = tE.delayedCall(o, function () {
                e(i, n), i = [], n = []
            }).pause();
            return function (t) {
                i.length || s.restart(!0), i.push(t.trigger), n.push(t), a <= i.length && s.progress(1)
            }
        }

        var n, s = [], r = {}, o = e.interval || .016, a = e.batchMax || 1e9;
        for (n in e) r[n] = "on" === n.substr(0, 2) && te(e[n]) && "onRefreshInit" !== n ? i(0, e[n]) : e[n];
        return te(a) && (a = a(), td(eI, "refresh", function () {
            return a = e.batchMax()
        })), t9(t).forEach(function (t) {
            var e = {};
            for (n in r) e[n] = r[n];
            e.trigger = t, s.push(eI.create(e))
        }), s
    };
    var ej, eR = {auto: 1, scroll: 1}, e1 = /(input|label|select|textarea)/i, eW = function t(e) {
        var i = e1.test(e.target.tagName);
        (i || ej) && (e._gsapAllow = !0, ej = i)
    };
    eI.sort = function (t) {
        return e8.sort(t || function (t, e) {
            return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
        })
    }, eI.observe = function (t) {
        return new W(t)
    }, eI.normalizeScroll = function (t) {
        if (void 0 === t) return t4;
        if (!0 === t && t4) return t4.enable();
        if (!1 === t) return t4 && t4.kill();
        var e = t instanceof W ? t : function t(e) {
            function i() {
                return u = !1
            }

            function n() {
                a = K(b, R), L = tY(tU ? 1 : 0, a), g && (P = tY(0, K(b, j))), l = eD
            }

            function s() {
                x._gsap.y = U(parseFloat(x._gsap.y) + k.offset) + "px", x.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(x._gsap.y) + ", 0, 1)", k.offset = k.cacheID = 0
            }

            function r() {
                n(), d.isActive() && d.vars.scrollY > a && (k() > a ? d.progress(1) && k(a) : d.resetTo("scrollY", a))
            }

            tn(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
            var o, a, l, u, d, p, f, m, g = e.normalizeScrollX, y = e.momentum, v = e.allowNestedScroll, b = c(e.target) || tM, _ = tE.core.globals().ScrollSmoother, w = _ && _.get(), x = tU && (e.content && c(e.content) || w && !1 !== e.content && !w.smooth() && w.content()), k = h(b, R), D = h(b, j), C = 1, S = (W.isTouch && tP.visualViewport ? tP.visualViewport.scale * tP.visualViewport.width : tP.outerWidth) / tP.innerWidth, T = 0, E = te(y) ? function () {
                return y(o)
            } : function () {
                return y || 2.8
            }, A = eN(b, e.type, !0, v), P = q, L = q;
            return x && tE.set(x, {y: "+=0"}), e.ignoreCheck = function (t) {
                return tU && "touchmove" === t.type && function t() {
                    if (u) {
                        requestAnimationFrame(i);
                        var e = U(o.deltaY / 2), n = L(k.v - e);
                        if (x && n !== k.v + k.offset) {
                            k.offset = n - k.v;
                            var r = U((parseFloat(x && x._gsap.y) || 0) - k.offset);
                            x.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r + ", 0, 1)", x._gsap.y = r + "px", k.cacheID = O.cache, eE()
                        }
                        return !0
                    }
                    k.offset && s(), u = !0
                }() || 1.05 < C && "touchstart" !== t.type || o.isGesturing || t.touches && 1 < t.touches.length
            }, e.onPress = function () {
                var t = C;
                C = U((tP.visualViewport && tP.visualViewport.scale || 1) / S), d.pause(), t !== C && ez(b, 1.01 < C || !g && "x"), p = D(), f = k(), n(), l = eD
            }, e.onRelease = e.onGestureStart = function (t, e) {
                if (k.offset && s(), e) {
                    O.cache++;
                    var i, n, o = E();
                    g && (n = (i = D()) + -(.05 * o * t.velocityX) / .227, o *= eY(D, i, n, K(b, j)), d.vars.scrollX = P(n)), n = (i = k()) + -(.05 * o * t.velocityY) / .227, o *= eY(k, i, n, K(b, R)), d.vars.scrollY = L(n), d.invalidate().duration(o).play(.01), (tU && d.vars.scrollY >= a || a - 1 <= i) && tE.to({}, {onUpdate: r, duration: o})
                } else m.restart(!0)
            }, e.onWheel = function () {
                d._ts && d.pause(), 1e3 < tJ() - T && (l = 0, T = tJ())
            }, e.onChange = function (t, e, i, r, o) {
                if (eD !== l && n(), e && g && D(P(r[2] === e ? p + (t.startX - t.x) : D() + e - r[1])), i) {
                    k.offset && s();
                    var a = o[2] === i, c = a ? f + t.startY - t.y : k() + i - o[1], h = L(c);
                    a && c !== h && (f += h - c), k(h)
                }
                (i || e) && eE()
            }, e.onEnable = function () {
                ez(b, !g && "x"), td(tP, "resize", r), A.enable()
            }, e.onDisable = function () {
                ez(b, !0), tp(tP, "resize", r), A.kill()
            }, e.lockAxis = !1 !== e.lockAxis, ((o = new W(e)).iOS = tU) && !k() && k(1), tU && tE.ticker.add(q), m = o._dc, d = tE.to(o, {ease: "power4", paused: !0, scrollX: g ? "+=0.1" : "+=0", scrollY: "+=0.1", onComplete: m.vars.onComplete}), o
        }(t);
        return t4 && t4.target === e.target && t4.kill(), Q(e.target) && (t4 = e), e
    }, eI.core = {
        _getVelocityProp: u, _inputObserver: eN, _scrollers: O, _proxies: I, bridge: {
            ss: function t() {
                ee || ex("scrollStart"), ee = tJ()
            }, ref: function t() {
                return tN
            }
        }
    }, G() && tE.registerPlugin(eI), t.ScrollTrigger = eI, t.default = eI, "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {value: !0}) : delete t.default
});/*! SCROLL CUE */
var $jscomp = $jscomp || {};
$jscomp.scope = {}, $jscomp.arrayIteratorImpl = function (t) {
    var e = 0;
    return function () {
        return e < t.length ? {done: !1, value: t[e++]} : {done: !0}
    }
}, $jscomp.arrayIterator = function (t) {
    return {next: $jscomp.arrayIteratorImpl(t)}
}, $jscomp.ASSUME_ES5 = !1, $jscomp.ASSUME_NO_NATIVE_MAP = !1, $jscomp.ASSUME_NO_NATIVE_SET = !1, $jscomp.SIMPLE_FROUND_POLYFILL = !1, $jscomp.ISOLATE_POLYFILLS = !1, $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (t, e, i) {
    return t == Array.prototype || t == Object.prototype || (t[e] = i.value), t
}, $jscomp.getGlobal = function (t) {
    t = ["object" == typeof globalThis && globalThis, t, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var e = 0; e < t.length; ++e) {
        var i = t[e];
        if (i && i.Math == Math) return i
    }
    throw Error("Cannot find global object")
}, $jscomp.global = $jscomp.getGlobal(this), $jscomp.IS_SYMBOL_NATIVE = "function" == typeof Symbol && "symbol" == typeof Symbol("x"), $jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE, $jscomp.polyfills = {}, $jscomp.propertyToPolyfillSymbol = {}, $jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function (t, e) {
    var i = $jscomp.propertyToPolyfillSymbol[e];
    return null == i ? t[e] : void 0 !== (i = t[i]) ? i : t[e]
};
$jscomp.polyfill = function (t, e, i, n) {
    e && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(t, e, i, n) : $jscomp.polyfillUnisolated(t, e, i, n))
}, $jscomp.polyfillUnisolated = function (t, e, i, n) {
    for (n = 0, i = $jscomp.global, t = t.split("."); n < t.length - 1; n++) {
        var s = t[n];
        s in i || (i[s] = {}), i = i[s]
    }
    (e = e(n = i[t = t[t.length - 1]])) != n && null != e && $jscomp.defineProperty(i, t, {configurable: !0, writable: !0, value: e})
}, $jscomp.polyfillIsolated = function (t, e, i, n) {
    var s = t.split(".");
    t = 1 === s.length, n = s[0], n = !t && n in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var r = 0; r < s.length - 1; r++) {
        var o = s[r];
        o in n || (n[o] = {}), n = n[o]
    }
    s = s[s.length - 1], null != (e = e(i = $jscomp.IS_SYMBOL_NATIVE && "es6" === i ? n[s] : null)) && (t ? $jscomp.defineProperty($jscomp.polyfills, s, {configurable: !0, writable: !0, value: e}) : e !== i && ($jscomp.propertyToPolyfillSymbol[s] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(s) : $jscomp.POLYFILL_PREFIX + s, s = $jscomp.propertyToPolyfillSymbol[s], $jscomp.defineProperty(n, s, {configurable: !0, writable: !0, value: e})))
}, $jscomp.initSymbol = function () {
}, $jscomp.polyfill("Symbol", function (t) {
    if (t) return t;
    var e = function (t, e) {
        this.$jscomp$symbol$id_ = t, $jscomp.defineProperty(this, "description", {configurable: !0, writable: !0, value: e})
    };
    e.prototype.toString = function () {
        return this.$jscomp$symbol$id_
    };
    var i = 0, n = function (t) {
        if (this instanceof n) throw TypeError("Symbol is not a constructor");
        return new e("jscomp_symbol_" + (t || "") + "_" + i++, t)
    };
    return n
}, "es6", "es3"), $jscomp.initSymbolIterator = function () {
}, $jscomp.polyfill("Symbol.iterator", function (t) {
    if (t) return t;
    t = Symbol("Symbol.iterator");
    for (var e = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), i = 0; i < e.length; i++) {
        var n = $jscomp.global[e[i]];
        "function" == typeof n && "function" != typeof n.prototype[t] && $jscomp.defineProperty(n.prototype, t, {
            configurable: !0, writable: !0, value: function () {
                return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))
            }
        })
    }
    return t
}, "es6", "es3"), $jscomp.initSymbolAsyncIterator = function () {
}, $jscomp.iteratorPrototype = function (t) {
    return (t = {next: t})[Symbol.iterator] = function () {
        return this
    }, t
}, $jscomp.iteratorFromArray = function (t, e) {
    t instanceof String && (t += "");
    var i = 0, n = {
        next: function () {
            if (i < t.length) {
                var s = i++;
                return {value: e(s, t[s]), done: !1}
            }
            return n.next = function () {
                return {done: !0, value: void 0}
            }, n.next()
        }
    };
    return n[Symbol.iterator] = function () {
        return n
    }, n
}, $jscomp.polyfill("Array.prototype.keys", function (t) {
    return t || function () {
        return $jscomp.iteratorFromArray(this, function (t) {
            return t
        })
    }
}, "es6", "es3");
var scrollCue = function () {
    var t, e, i, n = {}, s = 0, r = !0, o = !0, a = !1, l = !1, c = {duration: 600, interval: -.7, percentage: .75, enable: !0, docSlider: !1, pageChangeReset: !1};
    return n = {
        setEvents: function (t) {
            var e = function () {
                r && (requestAnimationFrame(function () {
                    r = !0, o && (n.setQuery(), n.runQuery())
                }), r = !1)
            };
            if (o && !t && window.addEventListener("load", n.runQuery), window.addEventListener("scroll", e), a) {
                t = docSlider.getElements().pages;
                for (var i = 0; i < t.length; i++) t[i].addEventListener("scroll", function (t) {
                    var i;
                    if (docSlider.getCurrentIndex() + "" !== (t = t.target.getAttribute("data-ds-index"))) return !1;
                    docSlider._getWheelEnable() && e()
                })
            }
            window.addEventListener("resize", function () {
                0 < s && clearTimeout(s), s = setTimeout(function () {
                    o && (n.searchElements(), n.setQuery(), n.runQuery())
                }, 200)
            })
        }, setOptions: function (t, e) {
            var i = {};
            if (void 0 !== t) return Object.keys(t).forEach(function (s) {
                "[object Object]" === Object.prototype.toString.call(t[s]) ? i[s] = n.setOptions(t[s], e[s]) : (i[s] = t[s], void 0 !== e && void 0 !== e[s] && (i[s] = e[s]))
            }), i
        }, searchElements: function () {
            t = [];
            for (var e = document.querySelectorAll("[data-cues]:not([data-disabled])"), s = 0; s < e.length; s++) {
                for (var r = e[s], o = 0; o < r.children.length; o++) {
                    var l = r.children[o];
                    n.setAttrPtoC(l, "data-cue", r, "data-cues", ""), n.setAttrPtoC(l, "data-duration", r, "data-duration", !1), n.setAttrPtoC(l, "data-interval", r, "data-interval", !1), n.setAttrPtoC(l, "data-sort", r, "data-sort", !1), n.setAttrPtoC(l, "data-addClass", r, "data-addClass", !1), n.setAttrPtoC(l, "data-group", r, "data-group", !1), n.setAttrPtoC(l, "data-delay", r, "data-delay", !1)
                }
                r.setAttribute("data-disabled", "true")
            }
            for (s = 0, e = document.querySelectorAll('[data-cue]:not([data-show="true"])'); s < e.length; s++) r = e[s], t.push({elm: r, cue: n.getAttr(r, "data-cue", "fadeIn"), duration: Number(n.getAttr(r, "data-duration", i.duration)), interval: Number(n.getAttr(r, "data-interval", i.interval)), order: n.getOrderNumber(r), sort: n.getAttr(r, "data-sort", null), addClass: n.getAttr(r, "data-addClass", null), group: n.getAttr(r, "data-group", null), delay: Number(n.getAttr(r, "data-delay", 0))});
            if (a) for (e = docSlider.getElements().pages.length, s = 0; s < e; s++) for (r = document.querySelectorAll('[data-ds-index="' + s + '"] [data-cue]:not([data-scpage])'), o = 0; o < r.length; o++) r[o].setAttribute("data-scpage", s)
        }, sortElements: function () {
            for (var t = arguments[0], e = [].slice.call(arguments).slice(1), i = {$jscomp$loop$prop$i$4: 0}; i.$jscomp$loop$prop$i$4 < e.length; i = {$jscomp$loop$prop$i$4: i.$jscomp$loop$prop$i$4}, i.$jscomp$loop$prop$i$4++) t.sort(function (t) {
                return function (i, n) {
                    var s = void 0 === e[t.$jscomp$loop$prop$i$4][1] || e[t.$jscomp$loop$prop$i$4][1], r = e[t.$jscomp$loop$prop$i$4][0];
                    return i[r] > n[r] ? s ? 1 : -1 : i[r] < n[r] ? s ? -1 : 1 : 0
                }
            }(i))
        }, randElements: function (t) {
            for (var e = t.length - 1; 0 < e; e--) {
                var i = Math.floor(Math.random() * (e + 1)), n = t[e];
                t[e] = t[i], t[i] = n
            }
            return t
        }, setDurationValue: function (t, e, i) {
            return void 0 === e ? t : (e = e.duration, 0 > (t = -1 === (i + "").indexOf(".") ? t + e + i : t + e + e * i) ? 0 : t)
        }, getOrderNumber: function (t) {
            return t.hasAttribute("data-order") ? 0 <= (t = Number(t.getAttribute("data-order"))) ? t : 9007199254740991 + t : 0xfffffffffffff
        }, setAttrPtoC: function (t, e, i, n, s) {
            i.hasAttribute(n) ? t.hasAttribute(e) || t.setAttribute(e, i.getAttribute(n)) : !1 !== s && t.setAttribute(e, s)
        }, getAttr: function (t, e, i) {
            return t.hasAttribute(e) ? t.getAttribute(e) : i
        }, getOffsetTop: function (t) {
            return t.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop)
        }, setClassNames: function (t, e) {
            if (e) {
                e = e.split(" ");
                for (var i = 0; i < e.length; i++) t.classList.add(e[i])
            }
        }, setQuery: function () {
            e = {};
            for (var i = 0; i < t.length; i++) {
                var s = t[i], r = s.group ? s.group : "$" + n.getOffsetTop(s.elm);
                if (!s.elm.hasAttribute("data-show")) {
                    if (a) {
                        var o = s.elm.getAttribute("data-scpage");
                        if (o !== docSlider.getCurrentIndex() + "" && null !== o) continue
                    }
                    void 0 === e[r] && (e[r] = []), e[r].push(s)
                }
            }
        }, runQuery: function () {
            for (var t = Object.keys(e), i = {}, s = 0; s < t.length; i = {$jscomp$loop$prop$elms$6: i.$jscomp$loop$prop$elms$6, $jscomp$loop$prop$interval$7: i.$jscomp$loop$prop$interval$7}, s++) if (i.$jscomp$loop$prop$elms$6 = e[t[s]], n.isElementIn(i.$jscomp$loop$prop$elms$6[0].elm)) {
                "reverse" === i.$jscomp$loop$prop$elms$6[0].sort ? i.$jscomp$loop$prop$elms$6.reverse() : "random" === i.$jscomp$loop$prop$elms$6[0].sort && n.randElements(i.$jscomp$loop$prop$elms$6), n.sortElements(i.$jscomp$loop$prop$elms$6, ["order"]);
                for (var r = i.$jscomp$loop$prop$interval$7 = 0; r < i.$jscomp$loop$prop$elms$6.length; r++) (function (t) {
                    return function (e) {
                        t.$jscomp$loop$prop$elms$6[e].elm.setAttribute("data-show", "true"), n.setClassNames(t.$jscomp$loop$prop$elms$6[e].elm, t.$jscomp$loop$prop$elms$6[e].addClass), t.$jscomp$loop$prop$interval$7 = n.setDurationValue(t.$jscomp$loop$prop$interval$7, t.$jscomp$loop$prop$elms$6[e - 1], t.$jscomp$loop$prop$elms$6[e].interval), t.$jscomp$loop$prop$elms$6[e].elm.style.animationName = t.$jscomp$loop$prop$elms$6[e].cue, t.$jscomp$loop$prop$elms$6[e].elm.style.animationDuration = t.$jscomp$loop$prop$elms$6[e].duration + "ms", t.$jscomp$loop$prop$elms$6[e].elm.style.animationTimingFunction = "ease", t.$jscomp$loop$prop$elms$6[e].elm.style.animationDelay = t.$jscomp$loop$prop$interval$7 + t.$jscomp$loop$prop$elms$6[e].delay + "ms", t.$jscomp$loop$prop$elms$6[e].elm.style.animationDirection = "normal", t.$jscomp$loop$prop$elms$6[e].elm.style.animationFillMode = "both"
                    }
                })(i)(r);
                delete e[t[s]]
            }
        }, isElementIn: function (t) {
            var e = t.hasAttribute("data-scpage") ? n.isScrollEndWithDocSlider : n.isScrollEnd;
            return window.pageYOffset > n.getOffsetTop(t) - window.innerHeight * i.percentage || e()
        }, isScrollEnd: function () {
            var t = window.document.documentElement;
            return (window.document.body.scrollTop || t.scrollTop) >= t.scrollHeight - t.clientHeight
        }, isScrollEndWithDocSlider: function () {
            var t = docSlider.getCurrentPage();
            return t.scrollTop >= t.scrollHeight - t.clientHeight
        }
    }, {
        init: function (t) {
            o = (i = n.setOptions(c, t)).enable, a = i.docSlider, l = i.pageChangeReset, a || (n.setEvents(), n.searchElements(), n.setQuery())
        }, update: function () {
            o && (n.searchElements(), n.setQuery(), n.runQuery())
        }, enable: function (t) {
            o = void 0 === t ? !o : t, scrollCue.update()
        }, _hasDocSlider: function () {
            return a
        }, _hasPageChangeReset: function () {
            return l
        }, _initWithDocSlider: function (t) {
            n.setEvents(t), n.searchElements(), n.setQuery()
        }, _updateWithDocSlider: function () {
            o && (n.setQuery(), n.runQuery())
        }, _searchElements: function () {
            n.searchElements()
        }
    }
}();
/**
 * Owl carousel
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */ !function (t, e, i, n) {
    function s(e, i) {
        this.settings = null, this.options = t.extend({}, s.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {time: null, target: null, pointer: null, stage: {start: null, current: null}, direction: null}, this._states = {current: {}, tags: {initializing: ["busy"], animating: ["busy"], dragging: ["interacting"]}}, t.each(["onResize", "onThrottledResize"], t.proxy(function (e, i) {
            this._handlers[i] = t.proxy(this[i], this)
        }, this)), t.each(s.Plugins, t.proxy(function (t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }, this)), t.each(s.Workers, t.proxy(function (e, i) {
            this._pipe.push({filter: i.filter, run: t.proxy(i.run, this)})
        }, this)), this.setup(), this.initialize()
    }

    s.Defaults = {items: 3, loop: !1, center: !1, rewind: !1, checkVisibility: !0, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: e, fallbackEasing: "swing", slideTransition: "", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", refreshClass: "owl-refresh", loadedClass: "owl-loaded", loadingClass: "owl-loading", rtlClass: "owl-rtl", responsiveClass: "owl-responsive", dragClass: "owl-drag", itemClass: "owl-item", stageClass: "owl-stage", stageOuterClass: "owl-stage-outer", grabClass: "owl-grab"}, s.Width = {Default: "default", Inner: "inner", Outer: "outer"}, s.Type = {Event: "event", State: "state"}, s.Plugins = {}, s.Workers = [{
        filter: ["width", "settings"], run: function () {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"], run: function () {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            var e = this.settings.margin || "", i = !this.settings.autoWidth, n = this.settings.rtl, e = {width: "auto", "margin-left": n ? e : "", "margin-right": n ? "" : e};
            i || this.$stage.children().css(e), t.css = e
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, i = null, n = this._items.length, s = !this.settings.autoWidth, r = [];
            for (t.items = {merge: !1, width: e}; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = 1 < i || t.items.merge, r[n] = s ? e * i : this._items[n].width();
            this._widths = r
        }
    }, {
        filter: ["items", "settings"], run: function () {
            var e = [], i = this._items, n = this.settings, s = Math.max(2 * n.items, 4), r = 2 * Math.ceil(i.length / 2), o = n.loop && i.length ? n.rewind ? s : Math.max(s, r) : 0, a = "", l = "";
            for (o /= 2; 0 < o;) e.push(this.normalize(e.length / 2, !0)), a += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), l = i[e[e.length - 1]][0].outerHTML + l, --o;
            this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            for (var t, e, i = this.settings.rtl ? 1 : -1, n = this._clones.length + this._items.length, s = -1, r = []; ++s < n;) r.push((t = r[s - 1] || 0) + (e = this._widths[this.relative(s)] + this.settings.margin) * i);
            this._coordinates = r
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            var t = this.settings.stagePadding, e = this._coordinates, t = {width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t, "padding-left": t || "", "padding-right": t || ""};
            this.$stage.css(t)
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            var e = this._coordinates.length, i = !this.settings.autoWidth, n = this.$stage.children();
            if (i && t.items.merge) for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css); else i && (t.css.width = t.items.width, n.css(t.css))
        }
    }, {
        filter: ["items"], run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
        }
    }, {
        filter: ["position"], run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"], run: function () {
            for (var t, e, i = this.settings.rtl ? 1 : -1, n = 2 * this.settings.stagePadding, s = this.coordinates(this.current()) + n, r = s + this.width() * i, o = [], a = 0, l = this._coordinates.length; a < l; a++) t = this._coordinates[a - 1] || 0, e = Math.abs(this._coordinates[a]) + n * i, (this.op(t, "<=", s) && this.op(t, ">", r) || this.op(e, "<", s) && this.op(e, ">", r)) && o.push(a);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + o.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }], s.prototype.initializeStage = function () {
        this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ">", {class: this.settings.stageClass}).wrap(t("<div/>", {class: this.settings.stageOuterClass})), this.$element.append(this.$stage.parent()))
    }, s.prototype.initializeItems = function () {
        var e = this.$element.find(".owl-item");
        if (e.length) return this._items = e.get().map(function (e) {
            return t(e)
        }), this._mergers = this._items.map(function () {
            return 1
        }), void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }, s.prototype.initialize = function () {
        var t, e;
        this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading") && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, e = this.$element.children(e).width(), t.length && e <= 0 && this.preloadAutoWidthImages(t)), this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, s.prototype.isVisible = function () {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }, s.prototype.setup = function () {
        var e = this.viewport(), i = this.options.responsive, n = -1, s = null;
        i ? (t.each(i, function (t) {
            t <= e && n < t && (n = Number(t))
        }), "function" == typeof (s = t.extend({}, this.options, i[n])).stagePadding && (s.stagePadding = s.stagePadding()), delete s.responsive, s.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : s = t.extend({}, this.options), this.trigger("change", {property: {name: "settings", value: s}}), this._breakpoint = n, this.settings = s, this.invalidate("settings"), this.trigger("changed", {property: {name: "settings", value: this.settings}})
    }, s.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, s.prototype.prepare = function (e) {
        var i = this.trigger("prepare", {content: e});
        return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {content: i.data}), i.data
    }, s.prototype.update = function () {
        for (var e = 0, i = this._pipe.length, n = t.proxy(function (t) {
            return this[t]
        }, this._invalidated), s = {}; e < i;) (this._invalidated.all || 0 < t.grep(this._pipe[e].filter, n).length) && this._pipe[e].run(s), e++;
        this._invalidated = {}, this.is("valid") || this.enter("valid")
    }, s.prototype.width = function (t) {
        switch (t = t || s.Width.Default) {
            case s.Width.Inner:
            case s.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, s.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, s.prototype.onThrottledResize = function () {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, s.prototype.onResize = function () {
        return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
    }, s.prototype.registerEventHandlers = function () {
        t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
    }, s.prototype.onDragStart = function (e) {
        var n = null;
        3 !== e.which && (n = t.support.transform ? {x: (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === n.length ? 12 : 4], y: n[16 === n.length ? 13 : 5]} : (n = this.$stage.position(), {x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left, y: n.top}), this.is("animating") && (t.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy(function (e) {
            var n = this.difference(this._drag.pointer, this.pointer(e));
            t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, s.prototype.onDragMove = function (t) {
        var e, i = null, n = null, s = this.difference(this._drag.pointer, this.pointer(t)), r = this.difference(this._drag.stage.start, s);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (i = this.coordinates(this.minimum()), n = this.coordinates(this.maximum() + 1) - i, r.x = ((r.x - i) % n + n) % n + i) : (i = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), e = this.settings.pullDrag ? -1 * s.x / 5 : 0, r.x = Math.max(Math.min(r.x, i + e), n + e)), this._drag.stage.current = r, this.animate(r.x))
    }, s.prototype.onDragEnd = function (e) {
        var n = this.difference(this._drag.pointer, this.pointer(e)), s = this._drag.stage.current, e = 0 < n.x ^ this.settings.rtl ? "left" : "right";
        t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(s.x, 0 !== n.x ? e : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = e, (3 < Math.abs(n.x) || 300 < (new Date).getTime() - this._drag.time) && this._drag.target.one("click.owl.core", function () {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, s.prototype.closest = function (e, i) {
        var s = -1, r = this.width(), o = this.coordinates();
        return this.settings.freeDrag || t.each(o, t.proxy(function (t, a) {
            return "left" === i && a - 30 < e && e < a + 30 ? s = t : "right" === i && a - r - 30 < e && e < a - r + 30 ? s = t + 1 : this.op(e, "<", a) && this.op(e, ">", o[t + 1] !== n ? o[t + 1] : a - r) && (s = "left" === i ? t + 1 : t), -1 === s
        }, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? s = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (s = e = this.maximum())), s
    }, s.prototype.animate = function (e) {
        var i = 0 < this.speed();
        this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({transform: "translate3d(" + e + "px,0px,0px)", transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")}) : i ? this.$stage.animate({left: e + "px"}, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({left: e + "px"})
    }, s.prototype.is = function (t) {
        return this._states.current[t] && 0 < this._states.current[t]
    }, s.prototype.current = function (t) {
        var e;
        return t === n ? this._current : 0 === this._items.length ? n : (t = this.normalize(t), this._current !== t && ((e = this.trigger("change", {property: {name: "position", value: t}})).data !== n && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {property: {name: "position", value: this._current}})), this._current)
    }, s.prototype.invalidate = function (e) {
        return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function (t, e) {
            return e
        })
    }, s.prototype.reset = function (t) {
        (t = this.normalize(t)) !== n && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, s.prototype.normalize = function (t, e) {
        var i = this._items.length, e = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || i < 1 ? t = n : (t < 0 || i + e <= t) && (t = ((t - e / 2) % i + i) % i + e / 2), t
    }, s.prototype.relative = function (t) {
        return t -= this._clones.length / 2, this.normalize(t, !0)
    }, s.prototype.maximum = function (t) {
        var e, i, n, s = this.settings, r = this._coordinates.length;
        if (s.loop) r = this._clones.length / 2 + this._items.length - 1; else if (s.autoWidth || s.merge) {
            if (e = this._items.length) for (i = this._items[--e].width(), n = this.$element.width(); e-- && !(n < (i += this._items[e].width() + this.settings.margin));) ;
            r = e + 1
        } else r = s.center ? this._items.length - 1 : this._items.length - s.items;
        return t && (r -= this._clones.length / 2), Math.max(r, 0)
    }, s.prototype.minimum = function (t) {
        return t ? 0 : this._clones.length / 2
    }, s.prototype.items = function (t) {
        return t === n ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, s.prototype.mergers = function (t) {
        return t === n ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, s.prototype.clones = function (e) {
        function i(t) {
            return t % 2 == 0 ? r + t / 2 : s - (t + 1) / 2
        }

        var s = this._clones.length / 2, r = s + this._items.length;
        return e === n ? t.map(this._clones, function (t, e) {
            return i(e)
        }) : t.map(this._clones, function (t, n) {
            return t === e ? i(n) : null
        })
    }, s.prototype.speed = function (t) {
        return t !== n && (this._speed = t), this._speed
    }, s.prototype.coordinates = function (e) {
        var i, s = 1, r = e - 1;
        return e === n ? t.map(this._coordinates, t.proxy(function (t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (this.settings.rtl && (s = -1, r = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[r] || 0)) / 2 * s) : i = this._coordinates[r] || 0, i = Math.ceil(i))
    }, s.prototype.duration = function (t, e, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, s.prototype.to = function (t, e) {
        var i, n = this.current(), s = t - this.relative(n), r = (0 < s) - (s < 0), o = this._items.length, a = this.minimum(), l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(s) > o / 2 && (s += -1 * r * o), (i = (((t = n + s) - a) % o + o) % o + a) !== t && i - s <= l && 0 < i - s && (n = i - s, t = i, this.reset(n))) : t = this.settings.rewind ? (t % (l += 1) + l) % l : Math.max(a, Math.min(l, t)), this.speed(this.duration(n, t, e)), this.current(t), this.isVisible() && this.update()
    }, s.prototype.next = function (t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, s.prototype.prev = function (t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, s.prototype.onTransitionEnd = function (t) {
        if (t !== n && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, s.prototype.viewport = function () {
        var n;
        return this.options.responsiveBaseElement !== e ? n = t(this.options.responsiveBaseElement).width() : e.innerWidth ? n = e.innerWidth : i.documentElement && i.documentElement.clientWidth ? n = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), n
    }, s.prototype.replace = function (e) {
        this.$stage.empty(), this._items = [], e = e && (e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function () {
            return 1 === this.nodeType
        }).each(t.proxy(function (t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(+e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, s.prototype.add = function (e, i) {
        var s = this.relative(this._current);
        i = i === n ? this._items.length : this.normalize(i, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {content: e, position: i}), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(+e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, +e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[s] && this.reset(this._items[s].index()), this.invalidate("items"), this.trigger("added", {content: e, position: i})
    }, s.prototype.remove = function (t) {
        (t = this.normalize(t, !0)) !== n && (this.trigger("remove", {content: this._items[t], position: t}), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {content: null, position: t}))
    }, s.prototype.preloadAutoWidthImages = function (e) {
        e.each(t.proxy(function (e, i) {
            this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy(function (t) {
                i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), this.is("pre-loading") || this.is("initializing") || this.refresh()
            }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
        }, this))
    }, s.prototype.destroy = function () {
        for (var n in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[n].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, s.prototype.op = function (t, e, i) {
        var n = this.settings.rtl;
        switch (e) {
            case"<":
                return n ? i < t : t < i;
            case">":
                return n ? t < i : i < t;
            case">=":
                return n ? t <= i : i <= t;
            case"<=":
                return n ? i <= t : t <= i
        }
    }, s.prototype.on = function (t, e, i, n) {
        t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
    }, s.prototype.off = function (t, e, i, n) {
        t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
    }, s.prototype.trigger = function (e, i, n, r, o) {
        var a = {item: {count: this._items.length, index: this.current()}}, l = t.camelCase(t.grep(["on", e, n], function (t) {
            return t
        }).join("-").toLowerCase()), c = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({relatedTarget: this}, a, i));
        return this._supress[e] || (t.each(this._plugins, function (t, e) {
            e.onTrigger && e.onTrigger(c)
        }), this.register({type: s.Type.Event, name: e}), this.$element.trigger(c), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)), c
    }, s.prototype.enter = function (e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
            this._states.current[e] === n && (this._states.current[e] = 0), this._states.current[e]++
        }, this))
    }, s.prototype.leave = function (e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
            this._states.current[e]--
        }, this))
    }, s.prototype.register = function (e) {
        var i;
        e.type === s.Type.Event ? (t.event.special[e.name] || (t.event.special[e.name] = {}), t.event.special[e.name].owl || (i = t.event.special[e.name]._default, t.event.special[e.name]._default = function (t) {
            return i && i.apply && (!t.namespace || -1 === t.namespace.indexOf("owl")) ? i.apply(this, arguments) : t.namespace && -1 < t.namespace.indexOf("owl")
        }, t.event.special[e.name].owl = !0)) : e.type === s.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function (i, n) {
            return t.inArray(i, this._states.tags[e.name]) === n
        }, this)))
    }, s.prototype.suppress = function (e) {
        t.each(e, t.proxy(function (t, e) {
            this._supress[e] = !0
        }, this))
    }, s.prototype.release = function (e) {
        t.each(e, t.proxy(function (t, e) {
            delete this._supress[e]
        }, this))
    }, s.prototype.pointer = function (t) {
        var i = {x: null, y: null};
        return (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i
    }, s.prototype.isNumeric = function (t) {
        return !isNaN(parseFloat(t))
    }, s.prototype.difference = function (t, e) {
        return {x: t.x - e.x, y: t.y - e.y}
    }, t.fn.owlCarousel = function (e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var n = t(this), r = n.data("owl.carousel");
            r || (r = new s(this, "object" == typeof e && e), n.data("owl.carousel", r), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (e, i) {
                r.register({type: s.Type.Event, name: i}), r.$element.on(i + ".owl.carousel.core", t.proxy(function (t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([i]), r[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                }, r))
            })), "string" == typeof e && "_" !== e.charAt(0) && r[e].apply(r, i)
        })
    }, t.fn.owlCarousel.Constructor = s
}(window.Zepto || window.jQuery, window, document), function (t, e) {
    var i = function (e) {
        this._core = e, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    i.Defaults = {autoRefresh: !0, autoRefreshInterval: 500}, i.prototype.watch = function () {
        this._interval || (this._visible = this._core.isVisible(), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, i.prototype.refresh = function () {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, i.prototype.destroy = function () {
        var t, i;
        for (t in e.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = i
}(window.Zepto || window.jQuery, window, document), function (t, e) {
    var i = function (e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function (e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) {
                    var i = this._core.settings, n = i.center && Math.ceil(i.items / 2) || i.items, s = i.center && -1 * n || 0, r = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + s, o = this._core.clones().length, a = t.proxy(function (t, e) {
                        this.load(e)
                    }, this);
                    for (0 < i.lazyLoadEager && (n += i.lazyLoadEager, i.loop && (r -= i.lazyLoadEager, n++)); s++ < n;) this.load(o / 2 + this._core.relative(r)), o && t.each(this._core.clones(this._core.relative(r)), a), r++
                }
            }, this)
        }, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    i.Defaults = {lazyLoad: !1, lazyLoadEager: 0}, i.prototype.load = function (i) {
        var n = this._core.$stage.children().eq(i), i = n && n.find(".owl-lazy");
        !i || -1 < t.inArray(n.get(0), this._loaded) || (i.each(t.proxy(function (i, n) {
            var s = t(n), r = 1 < e.devicePixelRatio && s.attr("data-src-retina") || s.attr("data-src") || s.attr("data-srcset");
            this._core.trigger("load", {element: s, url: r}, "lazy"), s.is("img") ? s.one("load.owl.lazy", t.proxy(function () {
                s.css("opacity", 1), this._core.trigger("loaded", {element: s, url: r}, "lazy")
            }, this)).attr("src", r) : s.is("source") ? s.one("load.owl.lazy", t.proxy(function () {
                this._core.trigger("loaded", {element: s, url: r}, "lazy")
            }, this)).attr("srcset", r) : ((n = new Image).onload = t.proxy(function () {
                s.css({"background-image": 'url("' + r + '")', opacity: "1"}), this._core.trigger("loaded", {element: s, url: r}, "lazy")
            }, this), n.src = r)
        }, this)), this._loaded.push(n.get(0)))
    }, i.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = i
}(window.Zepto || window.jQuery, window, document), function (t, e) {
    var i = function (n) {
        this._core = n, this._previousHeight = null, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }, this), "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update()
            }, this), "loaded.owl.lazy": t.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
        var s = this;
        t(e).on("load", function () {
            s._core.settings.autoHeight && s.update()
        }), t(e).resize(function () {
            s._core.settings.autoHeight && (null != s._intervalId && clearTimeout(s._intervalId), s._intervalId = setTimeout(function () {
                s.update()
            }, 250))
        })
    };
    i.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, i.prototype.update = function () {
        var e = this._core._current, i = e + this._core.settings.items, n = this._core.settings.lazyLoad, e = this._core.$stage.children().toArray().slice(e, i), s = [], i = 0;
        t.each(e, function (e, i) {
            s.push(t(i).height())
        }), (i = Math.max.apply(null, s)) <= 1 && n && this._previousHeight && (i = this._previousHeight), this._previousHeight = i, this._core.$stage.parent().height(i).addClass(this._core.settings.autoHeightClass)
    }, i.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = i
}(window.Zepto || window.jQuery, window, document), function (t, e) {
    var i = function (e) {
        this._core = e, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.register({type: "state", name: "playing", tags: ["interacting"]})
            }, this), "resize.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }, this), "refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this), "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }, this), "prepared.owl.carousel": t.proxy(function (e) {
                var i;
                !e.namespace || (i = t(e.content).find(".owl-video")).length && (i.css("display", "none"), this.fetch(i, t(e.content)))
            }, this)
        }, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function (t) {
            this.play(t)
        }, this))
    };
    i.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, i.prototype.fetch = function (t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube", n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"), s = t.attr("data-width") || this._core.settings.videoWidth, r = t.attr("data-height") || this._core.settings.videoHeight, o = t.attr("href");
        if (!o) throw Error("Missing video URL.");
        if (-1 < (n = o.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")) i = "youtube"; else if (-1 < n[3].indexOf("vimeo")) i = "vimeo"; else {
            if (!(-1 < n[3].indexOf("vzaar"))) throw Error("Video URL not supported.");
            i = "vzaar"
        }
        n = n[6], this._videos[o] = {type: i, id: n, width: s, height: r}, e.attr("data-video", o), this.thumbnail(t, this._videos[o])
    }, i.prototype.thumbnail = function (e, i) {
        function n(i) {
            s = h.lazyLoad ? t("<div/>", {class: "owl-video-tn " + c, srcType: i}) : t("<div/>", {class: "owl-video-tn", style: "opacity:1;background-image:url(" + i + ")"}), e.after(s), e.after('<div class="owl-video-play-icon"></div>')
        }

        var s, r, o = i.width && i.height ? "width:" + i.width + "px;height:" + i.height + "px;" : "", a = e.find("img"), l = "src", c = "", h = this._core.settings;
        if (e.wrap(t("<div/>", {class: "owl-video-wrapper", style: o})), this._core.settings.lazyLoad && (l = "data-src", c = "owl-lazy"), a.length) return n(a.attr(l)), a.remove(), !1;
        "youtube" === i.type ? n(r = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg") : "vimeo" === i.type ? t.ajax({
            type: "GET", url: "//vimeo.com/api/v2/video/" + i.id + ".json", jsonp: "callback", dataType: "jsonp", success: function (t) {
                n(r = t[0].thumbnail_large)
            }
        }) : "vzaar" === i.type && t.ajax({
            type: "GET", url: "//vzaar.com/api/videos/" + i.id + ".json", jsonp: "callback", dataType: "jsonp", success: function (t) {
                n(r = t.framegrab_url)
            }
        })
    }, i.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, i.prototype.play = function (e) {
        var i = t(e.target).closest("." + this._core.settings.itemClass), n = this._videos[i.attr("data-video")], s = n.width || "100%", r = n.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), i = this._core.items(this._core.relative(i.index())), this._core.reset(i.index()), (e = t('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", r), e.attr("width", s), "youtube" === n.type ? e.attr("src", "//www.youtube.com/embed/" + n.id + "?autoplay=1&rel=0&v=" + n.id) : "vimeo" === n.type ? e.attr("src", "//player.vimeo.com/video/" + n.id + "?autoplay=1") : "vzaar" === n.type && e.attr("src", "//view.vzaar.com/" + n.id + "/player?autoplay=true"), t(e).wrap('<div class="owl-video-frame" />').insertAfter(i.find(".owl-video")), this._playing = i.addClass("owl-video-playing"))
    }, i.prototype.isInFullScreen = function () {
        var i = e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement;
        return i && t(i).parent().hasClass("owl-video-frame")
    }, i.prototype.destroy = function () {
        var t, e;
        for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = i
}(window.Zepto || window.jQuery, (window, document)), function (t) {
    var e = function (i) {
        this.core = i, this.core.options = t.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
            "change.owl.carousel": t.proxy(function (t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function (t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }, this), "translate.owl.carousel": t.proxy(function (t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    e.Defaults = {animateOut: !1, animateIn: !1}, e.prototype.swap = function () {
        var e, i, n, s, r, o;
        1 === this.core.settings.items && t.support.animation && t.support.transition && (this.core.speed(0), i = t.proxy(this.clear, this), n = this.core.$stage.children().eq(this.previous), s = this.core.$stage.children().eq(this.next), r = this.core.settings.animateIn, o = this.core.settings.animateOut, this.core.current() !== this.previous && (o && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(t.support.animation.end, i).css({left: e + "px"}).addClass("animated owl-animated-out").addClass(o)), r && s.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(r)))
    }, e.prototype.clear = function (e) {
        t(e.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, e.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, (window, document)), function (t, e, i) {
    var n = function (e) {
        this._core = e, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
            "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
            }, this), "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }, this), "play.owl.autoplay": t.proxy(function (t, e, i) {
                t.namespace && this.play(e, i)
            }, this), "stop.owl.autoplay": t.proxy(function (t) {
                t.namespace && this.stop()
            }, this), "mouseover.owl.autoplay": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "mouseleave.owl.autoplay": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this), "touchstart.owl.core": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "touchend.owl.core": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, n.Defaults, this._core.options)
    };
    n.Defaults = {autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1}, n.prototype._next = function (n) {
        this._call = e.setTimeout(t.proxy(this._next, this, n), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || i.hidden || this._core.next(n || this._core.settings.autoplaySpeed)
    }, n.prototype.read = function () {
        return (new Date).getTime() - this._time
    }, n.prototype.play = function (i, n) {
        var s;
        this._core.is("rotating") || this._core.enter("rotating"), i = i || this._core.settings.autoplayTimeout, s = Math.min(this._time % (this._timeout || i), i), this._paused ? (this._time = this.read(), this._paused = !1) : e.clearTimeout(this._call), this._time += this.read() % i - s, this._timeout = i, this._call = e.setTimeout(t.proxy(this._next, this, n), i - s)
    }, n.prototype.stop = function () {
        this._core.is("rotating") && (this._time = 0, this._paused = !0, e.clearTimeout(this._call), this._core.leave("rotating"))
    }, n.prototype.pause = function () {
        this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, e.clearTimeout(this._call))
    }, n.prototype.destroy = function () {
        var t, e;
        for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = n
}(window.Zepto || window.jQuery, window, document), function (t) {
    "use strict";
    var e = function (i) {
        this._core = i, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {next: this._core.next, prev: this._core.prev, to: this._core.to}, this._handlers = {
            "prepared.owl.carousel": t.proxy(function (e) {
                e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this), "added.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            }, this), "remove.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this), "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "position" == t.property.name && this.draw()
            }, this), "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this), "refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = t.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    e.Defaults = {nav: !1, navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'], navSpeed: !1, navElement: 'button type="button" role="presentation"', navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotsData: !1, dotsSpeed: !1, dotsContainer: !1}, e.prototype.initialize = function () {
        var e, i = this._core.settings;
        for (e in this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function (t) {
            this.prev(i.navSpeed)
        }, this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function (t) {
            this.next(i.navSpeed)
        }, this)), i.dotsData || (this._templates = [t('<button role="button">').addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", t.proxy(function (e) {
            var n = (t(e.target).parent().is(this._controls.$absolute) ? t(e.target) : t(e.target).parent()).index();
            e.preventDefault(), this.to(n, i.dotsSpeed)
        }, this)), this._overrides) this._core[e] = t.proxy(this[e], this)
    }, e.prototype.destroy = function () {
        var t, e, i, n, s = this._core.settings;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) "$relative" === e && s.navContainer ? this._controls[e].html("") : this._controls[e].remove();
        for (n in this.overides) this._core[n] = this._overrides[n];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, e.prototype.update = function () {
        var t, e, i = this._core.clones().length / 2, n = i + this._core.items().length, s = this._core.maximum(!0), r = this._core.settings, o = r.center || r.autoWidth || r.dotsData ? 1 : r.dotsEach || r.items;
        if ("page" !== r.slideBy && (r.slideBy = Math.min(r.slideBy, r.items)), r.dots || "page" == r.slideBy) for (this._pages = [], t = i, e = 0; t < n; t++) {
            if (o <= e || 0 === e) {
                if (this._pages.push({start: Math.min(s, t - i), end: t - i + o - 1}), Math.min(s, t - i) === s) break;
                e = 0
            }
            e += this._core.mergers(this._core.relative(t))
        }
    }, e.prototype.draw = function () {
        var e = this._core.settings, i = this._core.items().length <= e.items, n = this._core.relative(this._core.current()), s = e.loop || e.rewind;
        this._controls.$relative.toggleClass("disabled", !e.nav || i), e.nav && (this._controls.$previous.toggleClass("disabled", !s && n <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !s && n >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !e.dots || i), e.dots && (i = this._pages.length - this._controls.$absolute.children().length, e.dotsData && 0 != i ? this._controls.$absolute.html(this._templates.join("")) : 0 < i ? this._controls.$absolute.append(Array(1 + i).join(this._templates[0])) : i < 0 && this._controls.$absolute.children().slice(i).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
    }, e.prototype.onTrigger = function (e) {
        var i = this._core.settings;
        e.page = {index: t.inArray(this.current(), this._pages), count: this._pages.length, size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)}
    }, e.prototype.current = function () {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, t.proxy(function (t, i) {
            return t.start <= e && t.end >= e
        }, this)).pop()
    }, e.prototype.getPosition = function (e) {
        var i, n, s = this._core.settings;
        return "page" == s.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += s.slideBy : i -= s.slideBy), i
    }, e.prototype.next = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, e.prototype.prev = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, e.prototype.to = function (e, i, n) {
        !n && this._pages.length ? (n = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % n + n) % n].start, i)) : t.proxy(this._overrides.to, this._core)(e, i)
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, (window, document)), function (t, e) {
    "use strict";
    var i = function (n) {
        this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy(function (i) {
                i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }, this), "prepared.owl.carousel": t.proxy(function (e) {
                var i;
                !e.namespace || (i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash")) && (this._hashes[i] = e.content)
            }, this), "changed.owl.carousel": t.proxy(function (i) {
                var n;
                i.namespace && "position" === i.property.name && (n = this._core.items(this._core.relative(this._core.current())), (i = t.map(this._hashes, function (t, e) {
                    return t === n ? e : null
                }).join()) && e.location.hash.slice(1) !== i && (e.location.hash = i))
            }, this)
        }, this._core.options = t.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function (t) {
            var i = e.location.hash.substring(1), n = this._core.$stage.children(), i = this._hashes[i] && n.index(this._hashes[i]);
            void 0 !== i && i !== this._core.current() && this._core.to(this._core.relative(i), !1, !0)
        }, this))
    };
    i.Defaults = {URLhashListener: !1}, i.prototype.destroy = function () {
        var i, n;
        for (i in t(e).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = i
}(window.Zepto || window.jQuery, window, document), function (t, e) {
    var i = t("<support>").get(0).style, n = "Webkit Moz O ms".split(" "), s = {transition: {end: {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend"}}, animation: {end: {WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend"}}};

    function r(s, r) {
        var o = !1, a = s.charAt(0).toUpperCase() + s.slice(1);
        return t.each((s + " " + n.join(a + " ") + a).split(" "), function (t, n) {
            if (i[n] !== e) return o = !r || n, !1
        }), o
    }

    function o(t) {
        return r(t, !0)
    }

    r("transition") && (t.support.transition = new String(o("transition")), t.support.transition.end = s.transition.end[t.support.transition]), r("animation") && (t.support.animation = new String(o("animation")), t.support.animation.end = s.animation.end[t.support.animation]), r("transform") && (t.support.transform = new String(o("transform")), t.support.transform3d = !!r("perspective"))
}(window.Zepto || window.jQuery, void window), function (t) {
    t.fn.footerReveal = function (e) {
        var i = t(this), n = i.prev(), s = t(window), r = t.extend({shadow: !0, shadowOpacity: .8, zIndex: -100}, e);
        return t.extend(!0, {}, r, e), i.outerHeight() <= s.outerHeight() && i.offset().top >= s.outerHeight() && (i.css({"z-index": r.zIndex, position: "fixed", bottom: 0}), r.shadow && n.css({"-moz-box-shadow": "0 20px 30px -20px rgba(0,0,0," + r.shadowOpacity + ")", "-webkit-box-shadow": "0 20px 30px -20px rgba(0,0,0," + r.shadowOpacity + ")", "box-shadow": "0 20px 30px -20px rgba(0,0,0," + r.shadowOpacity + ")"}), s.on("load resize footerRevealResize", function () {
            i.css({width: n.outerWidth()}), n.css({"margin-bottom": i.outerHeight()})
        })), this
    }
}(jQuery), function (t) {
    t.fn.niceSelect = function (e) {
        function i(e) {
            e.after(t("<div></div>").addClass("nice-select").addClass(e.attr("class") || "").addClass(e.attr("disabled") ? "disabled" : "").attr("tabindex", e.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
            var i = e.next(), n = e.find("option"), s = e.find("option:selected");
            i.find(".current").html(s.data("display") || s.text()), n.each(function (e) {
                var n = t(this), s = n.data("display");
                i.find("ul").append(t("<li></li>").attr("data-value", n.val()).attr("data-display", s || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()))
            })
        }

        if ("string" == typeof e) return "update" == e ? this.each(function () {
            var e = t(this), n = t(this).next(".nice-select"), s = n.hasClass("open");
            n.length && (n.remove(), i(e), s && e.next().trigger("click"))
        }) : "destroy" == e ? (this.each(function () {
            var e = t(this), i = t(this).next(".nice-select");
            i.length && (i.remove(), e.css("display", ""))
        }), 0 == t(".nice-select").length && t(document).off(".nice_select")) : console.log('Method "' + e + '" does not exist.'), this;
        this.hide(), this.each(function () {
            var e = t(this);
            e.next().hasClass("nice-select") || i(e)
        }), t(document).off(".nice_select"), t(document).on("click.nice_select", ".nice-select", function (e) {
            var i = t(this);
            t(".nice-select").not(i).removeClass("open"), i.toggleClass("open"), i.hasClass("open") ? (i.find(".option"), i.find(".focus").removeClass("focus"), i.find(".selected").addClass("focus")) : i.focus()
        }), t(document).on("click.nice_select", function (e) {
            0 === t(e.target).closest(".nice-select").length && t(".nice-select").removeClass("open").find(".option")
        }), t(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (e) {
            var i = t(this), n = i.closest(".nice-select");
            n.find(".selected").removeClass("selected"), i.addClass("selected");
            var s = i.data("display") || i.text();
            n.find(".current").text(s), n.prev("select").val(i.data("value")).trigger("change")
        }), t(document).on("keydown.nice_select", ".nice-select", function (e) {
            var i = t(this), n = t(i.find(".focus") || i.find(".list .option.selected"));
            if (32 == e.keyCode || 13 == e.keyCode) return i.hasClass("open") ? n.trigger("click") : i.trigger("click"), !1;
            if (40 == e.keyCode) {
                if (i.hasClass("open")) {
                    var s = n.nextAll(".option:not(.disabled)").first();
                    s.length > 0 && (i.find(".focus").removeClass("focus"), s.addClass("focus"))
                } else i.trigger("click");
                return !1
            }
            if (38 == e.keyCode) {
                if (i.hasClass("open")) {
                    var r = n.prevAll(".option:not(.disabled)").first();
                    r.length > 0 && (i.find(".focus").removeClass("focus"), r.addClass("focus"))
                } else i.trigger("click");
                return !1
            }
            if (27 == e.keyCode) i.hasClass("open") && i.trigger("click"); else if (9 == e.keyCode && i.hasClass("open")) return !1
        });
        var n = document.createElement("a").style;
        return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && t("html").addClass("no-csspointerevents"), this
    }
}(jQuery), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e()
}(this, function () {
    "use strict";

    function t() {
        return k.apply(null, arguments)
    }

    function e(t) {
        return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
    }

    function i(t) {
        return null != t && "[object Object]" === Object.prototype.toString.call(t)
    }

    function n(t) {
        return void 0 === t
    }

    function s(t) {
        return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t)
    }

    function r(t) {
        return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
    }

    function o(t, e) {
        var i, n = [];
        for (i = 0; i < t.length; ++i) n.push(e(t[i], i));
        return n
    }

    function a(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }

    function l(t, e) {
        for (var i in e) a(e, i) && (t[i] = e[i]);
        return a(e, "toString") && (t.toString = e.toString), a(e, "valueOf") && (t.valueOf = e.valueOf), t
    }

    function c(t, e, i, n) {
        return el(t, e, i, n, !0).utc()
    }

    function h(t) {
        return null == t._pf && (t._pf = {empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1}), t._pf
    }

    function u(t) {
        if (null == t._isValid) {
            var e = h(t), i = D.call(e.parsedDateParts, function (t) {
                return null != t
            }), n = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && i);
            if (t._strict && (n = n && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return n;
            t._isValid = n
        }
        return t._isValid
    }

    function d(t) {
        var e = c(NaN);
        return null != t ? l(h(e), t) : h(e).userInvalidated = !0, e
    }

    D = Array.prototype.some ? Array.prototype.some : function (t) {
        for (var e = Object(this), i = e.length >>> 0, n = 0; n < i; n++) if (n in e && t.call(this, e[n], n, e)) return !0;
        return !1
    };
    var p = t.momentProperties = [];

    function f(t, e) {
        var i, s, r;
        if (n(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), n(e._i) || (t._i = e._i), n(e._f) || (t._f = e._f), n(e._l) || (t._l = e._l), n(e._strict) || (t._strict = e._strict), n(e._tzm) || (t._tzm = e._tzm), n(e._isUTC) || (t._isUTC = e._isUTC), n(e._offset) || (t._offset = e._offset), n(e._pf) || (t._pf = h(e)), n(e._locale) || (t._locale = e._locale), 0 < p.length) for (i = 0; i < p.length; i++) n(r = e[s = p[i]]) || (t[s] = r);
        return t
    }

    var m = !1;

    function g(e) {
        f(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === m && (m = !0, t.updateOffset(this), m = !1)
    }

    function y(t) {
        return t instanceof g || null != t && null != t._isAMomentObject
    }

    function v(t) {
        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
    }

    function b(t) {
        var e = +t, i = 0;
        return 0 !== e && isFinite(e) && (i = v(e)), i
    }

    function _(t, e, i) {
        var n, s = Math.min(t.length, e.length), r = Math.abs(t.length - e.length), o = 0;
        for (n = 0; n < s; n++) (i && t[n] !== e[n] || !i && b(t[n]) !== b(e[n])) && o++;
        return o + r
    }

    function w(e) {
        !1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }

    function x(e, i) {
        var n = !0;
        return l(function () {
            if (null != t.deprecationHandler && t.deprecationHandler(null, e), n) {
                for (var s, r = [], o = 0; o < arguments.length; o++) {
                    if (s = "", "object" == typeof arguments[o]) {
                        for (var a in s += "\n[" + o + "] ", arguments[0]) s += a + ": " + arguments[0][a] + ", ";
                        s = s.slice(0, -2)
                    } else s = arguments[o];
                    r.push(s)
                }
                w(e + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + Error().stack), n = !1
            }
            return i.apply(this, arguments)
        }, i)
    }

    var k, D, C, S = {};

    function T(e, i) {
        null != t.deprecationHandler && t.deprecationHandler(e, i), S[e] || (w(i), S[e] = !0)
    }

    function E(t) {
        return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
    }

    function A(t, e) {
        var n, s = l({}, t);
        for (n in e) a(e, n) && (i(t[n]) && i(e[n]) ? (s[n] = {}, l(s[n], t[n]), l(s[n], e[n])) : null != e[n] ? s[n] = e[n] : delete s[n]);
        for (n in t) a(t, n) && !a(e, n) && i(t[n]) && (s[n] = l({}, s[n]));
        return s
    }

    function P(t) {
        null != t && this.set(t)
    }

    t.suppressDeprecationWarnings = !1, t.deprecationHandler = null, C = Object.keys ? Object.keys : function (t) {
        var e, i = [];
        for (e in t) a(t, e) && i.push(e);
        return i
    };
    var L = {};

    function M(t, e) {
        var i = t.toLowerCase();
        L[i] = L[i + "s"] = L[e] = t
    }

    function O(t) {
        return "string" == typeof t ? L[t] || L[t.toLowerCase()] : void 0
    }

    function I(t) {
        var e, i, n = {};
        for (i in t) a(t, i) && (e = O(i)) && (n[e] = t[i]);
        return n
    }

    var Y = {};

    function z(t, e) {
        Y[t] = e
    }

    function H(t, e, i) {
        var n = "" + Math.abs(t);
        return (0 <= t ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, e - n.length)).toString().substr(1) + n
    }

    var N = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, j = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, R = {}, W = {};

    function B(t, e, i, n) {
        var s = n;
        "string" == typeof n && (s = function () {
            return this[n]()
        }), t && (W[t] = s), e && (W[e[0]] = function () {
            return H(s.apply(this, arguments), e[1], e[2])
        }), i && (W[i] = function () {
            return this.localeData().ordinal(s.apply(this, arguments), t)
        })
    }

    function F(t, e) {
        return t.isValid() ? (R[e = V(e, t.localeData())] = R[e] || function (t) {
            var e, i, n, s = t.match(N);
            for (e = 0, i = s.length; e < i; e++) W[s[e]] ? s[e] = W[s[e]] : s[e] = (n = s[e]).match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, "");
            return function (e) {
                var n, r = "";
                for (n = 0; n < i; n++) r += E(s[n]) ? s[n].call(e, t) : s[n];
                return r
            }
        }(e), R[e](t)) : t.localeData().invalidDate()
    }

    function V(t, e) {
        var i = 5;

        function n(t) {
            return e.longDateFormat(t) || t
        }

        for (j.lastIndex = 0; 0 <= i && j.test(t);) t = t.replace(j, n), j.lastIndex = 0, i -= 1;
        return t
    }

    var q = /\d/, U = /\d\d/, X = /\d{3}/, G = /\d{4}/, Q = /[+-]?\d{6}/, Z = /\d\d?/, K = /\d\d\d\d?/, J = /\d\d\d\d\d\d?/, tt = /\d{1,3}/, te = /\d{1,4}/, ti = /[+-]?\d{1,6}/, tn = /\d+/, ts = /[+-]?\d+/, tr = /Z|[+-]\d\d:?\d\d/gi, to = /Z|[+-]\d\d(?::?\d\d)?/gi, ta = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, tl = {};

    function tc(t, e, i) {
        tl[t] = E(e) ? e : function (t, n) {
            return t && i ? i : e
        }
    }

    function th(t, e) {
        return a(tl, t) ? tl[t](e._strict, e._locale) : RegExp(tu(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, i, n, s) {
            return e || i || n || s
        })))
    }

    function tu(t) {
        return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    var td = {};

    function tp(t, e) {
        var i, n = e;
        for ("string" == typeof t && (t = [t]), s(e) && (n = function (t, i) {
            i[e] = b(t)
        }), i = 0; i < t.length; i++) td[t[i]] = n
    }

    function tf(t, e) {
        tp(t, function (t, i, n, s) {
            n._w = n._w || {}, e(t, n._w, n, s)
        })
    }

    function tm(t) {
        return tg(t) ? 366 : 365
    }

    function tg(t) {
        return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
    }

    B("Y", 0, 0, function () {
        var t = this.year();
        return t <= 9999 ? "" + t : "+" + t
    }), B(0, ["YY", 2], 0, function () {
        return this.year() % 100
    }), B(0, ["YYYY", 4], 0, "year"), B(0, ["YYYYY", 5], 0, "year"), B(0, ["YYYYYY", 6, !0], 0, "year"), M("year", "y"), Y.year = 1, tc("Y", ts), tc("YY", Z, U), tc("YYYY", te, G), tc("YYYYY", ti, Q), tc("YYYYYY", ti, Q), tp(["YYYYY", "YYYYYY"], 0), tp("YYYY", function (e, i) {
        i[0] = 2 === e.length ? t.parseTwoDigitYear(e) : b(e)
    }), tp("YY", function (e, i) {
        i[0] = t.parseTwoDigitYear(e)
    }), tp("Y", function (t, e) {
        e[0] = parseInt(t, 10)
    }), t.parseTwoDigitYear = function (t) {
        return b(t) + (68 < b(t) ? 1900 : 2e3)
    };
    var ty, tv = t$("FullYear", !0);

    function t$(e, i) {
        return function (n) {
            return null != n ? (tb(this, e, n), t.updateOffset(this, i), this) : t8(this, e)
        }
    }

    function t8(t, e) {
        return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
    }

    function tb(t, e, i) {
        t.isValid() && !isNaN(i) && ("FullYear" === e && tg(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](i, t.month(), t_(i, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](i))
    }

    function t_(t, e) {
        if (isNaN(t) || isNaN(e)) return NaN;
        var i, n = (e % (i = 12) + i) % i;
        return t += (e - n) / 12, 1 === n ? tg(t) ? 29 : 28 : 31 - n % 7 % 2
    }

    ty = Array.prototype.indexOf ? Array.prototype.indexOf : function (t) {
        var e;
        for (e = 0; e < this.length; ++e) if (this[e] === t) return e;
        return -1
    }, B("M", ["MM", 2], "Mo", function () {
        return this.month() + 1
    }), B("MMM", 0, 0, function (t) {
        return this.localeData().monthsShort(this, t)
    }), B("MMMM", 0, 0, function (t) {
        return this.localeData().months(this, t)
    }), M("month", "M"), Y.month = 8, tc("M", Z), tc("MM", Z, U), tc("MMM", function (t, e) {
        return e.monthsShortRegex(t)
    }), tc("MMMM", function (t, e) {
        return e.monthsRegex(t)
    }), tp(["M", "MM"], function (t, e) {
        e[1] = b(t) - 1
    }), tp(["MMM", "MMMM"], function (t, e, i, n) {
        var s = i._locale.monthsParse(t, n, i._strict);
        null != s ? e[1] = s : h(i).invalidMonth = t
    });
    var tw = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, tx = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), tk = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

    function tD(t, e) {
        var i;
        if (!t.isValid()) return t;
        if ("string" == typeof e) {
            if (/^\d+$/.test(e)) e = b(e); else if (!s(e = t.localeData().monthsParse(e))) return t
        }
        return i = Math.min(t.date(), t_(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i), t
    }

    function tC(e) {
        return null != e ? (tD(this, e), t.updateOffset(this, !0), this) : t8(this, "Month")
    }

    var tS = ta, tT = ta;

    function tE() {
        function t(t, e) {
            return e.length - t.length
        }

        var e, i, n = [], s = [], r = [];
        for (e = 0; e < 12; e++) i = c([2e3, e]), n.push(this.monthsShort(i, "")), s.push(this.months(i, "")), r.push(this.months(i, "")), r.push(this.monthsShort(i, ""));
        for (n.sort(t), s.sort(t), r.sort(t), e = 0; e < 12; e++) n[e] = tu(n[e]), s[e] = tu(s[e]);
        for (e = 0; e < 24; e++) r[e] = tu(r[e]);
        this._monthsRegex = RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = RegExp("^(" + n.join("|") + ")", "i")
    }

    function tA(t) {
        var e;
        if (t < 100 && 0 <= t) {
            var i = Array.prototype.slice.call(arguments);
            i[0] = t + 400, e = new Date(Date.UTC.apply(null, i)), isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t)
        } else e = new Date(Date.UTC.apply(null, arguments));
        return e
    }

    function tP(t, e, i) {
        var n = 7 + e - i;
        return -((7 + tA(t, 0, n).getUTCDay() - e) % 7) + n - 1
    }

    function tL(t, e, i, n, s) {
        var r, o, a = 1 + 7 * (e - 1) + (7 + i - n) % 7 + tP(t, n, s);
        return o = a <= 0 ? tm(r = t - 1) + a : a > tm(t) ? (r = t + 1, a - tm(t)) : (r = t, a), {year: r, dayOfYear: o}
    }

    function tM(t, e, i) {
        var n, s, r = tP(t.year(), e, i), o = Math.floor((t.dayOfYear() - r - 1) / 7) + 1;
        return o < 1 ? n = o + t0(s = t.year() - 1, e, i) : o > t0(t.year(), e, i) ? (n = o - t0(t.year(), e, i), s = t.year() + 1) : (s = t.year(), n = o), {week: n, year: s}
    }

    function t0(t, e, i) {
        var n = tP(t, e, i), s = tP(t + 1, e, i);
        return (tm(t) - n + s) / 7
    }

    function tO(t, e) {
        return t.slice(e, 7).concat(t.slice(0, e))
    }

    B("w", ["ww", 2], "wo", "week"), B("W", ["WW", 2], "Wo", "isoWeek"), M("week", "w"), M("isoWeek", "W"), Y.week = 5, Y.isoWeek = 5, tc("w", Z), tc("ww", Z, U), tc("W", Z), tc("WW", Z, U), tf(["w", "ww", "W", "WW"], function (t, e, i, n) {
        e[n.substr(0, 1)] = b(t)
    });
    B("d", 0, "do", "day"), B("dd", 0, 0, function (t) {
        return this.localeData().weekdaysMin(this, t)
    }), B("ddd", 0, 0, function (t) {
        return this.localeData().weekdaysShort(this, t)
    }), B("dddd", 0, 0, function (t) {
        return this.localeData().weekdays(this, t)
    }), B("e", 0, 0, "weekday"), B("E", 0, 0, "isoWeekday"), M("day", "d"), M("weekday", "e"), M("isoWeekday", "E"), Y.day = 11, Y.weekday = 11, Y.isoWeekday = 11, tc("d", Z), tc("e", Z), tc("E", Z), tc("dd", function (t, e) {
        return e.weekdaysMinRegex(t)
    }), tc("ddd", function (t, e) {
        return e.weekdaysShortRegex(t)
    }), tc("dddd", function (t, e) {
        return e.weekdaysRegex(t)
    }), tf(["dd", "ddd", "dddd"], function (t, e, i, n) {
        var s = i._locale.weekdaysParse(t, n, i._strict);
        null != s ? e.d = s : h(i).invalidWeekday = t
    }), tf(["d", "e", "E"], function (t, e, i, n) {
        e[n] = b(t)
    });
    var tI = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), t9 = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), tY = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), tz = ta, tH = ta, tN = ta;

    function tj() {
        function t(t, e) {
            return e.length - t.length
        }

        var e, i, n, s, r, o = [], a = [], l = [], h = [];
        for (e = 0; e < 7; e++) i = c([2e3, 1]).day(e), n = this.weekdaysMin(i, ""), s = this.weekdaysShort(i, ""), r = this.weekdays(i, ""), o.push(n), a.push(s), l.push(r), h.push(n), h.push(s), h.push(r);
        for (o.sort(t), a.sort(t), l.sort(t), h.sort(t), e = 0; e < 7; e++) a[e] = tu(a[e]), l[e] = tu(l[e]), h[e] = tu(h[e]);
        this._weekdaysRegex = RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = RegExp("^(" + o.join("|") + ")", "i")
    }

    function tR() {
        return this.hours() % 12 || 12
    }

    function t1(t, e) {
        B(t, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), e)
        })
    }

    function tW(t, e) {
        return e._meridiemParse
    }

    B("H", ["HH", 2], 0, "hour"), B("h", ["hh", 2], 0, tR), B("k", ["kk", 2], 0, function () {
        return this.hours() || 24
    }), B("hmm", 0, 0, function () {
        return "" + tR.apply(this) + H(this.minutes(), 2)
    }), B("hmmss", 0, 0, function () {
        return "" + tR.apply(this) + H(this.minutes(), 2) + H(this.seconds(), 2)
    }), B("Hmm", 0, 0, function () {
        return "" + this.hours() + H(this.minutes(), 2)
    }), B("Hmmss", 0, 0, function () {
        return "" + this.hours() + H(this.minutes(), 2) + H(this.seconds(), 2)
    }), t1("a", !0), t1("A", !1), M("hour", "h"), Y.hour = 13, tc("a", tW), tc("A", tW), tc("H", Z), tc("h", Z), tc("k", Z), tc("HH", Z, U), tc("hh", Z, U), tc("kk", Z, U), tc("hmm", K), tc("hmmss", J), tc("Hmm", K), tc("Hmmss", J), tp(["H", "HH"], 3), tp(["k", "kk"], function (t, e, i) {
        var n = b(t);
        e[3] = 24 === n ? 0 : n
    }), tp(["a", "A"], function (t, e, i) {
        i._isPm = i._locale.isPM(t), i._meridiem = t
    }), tp(["h", "hh"], function (t, e, i) {
        e[3] = b(t), h(i).bigHour = !0
    }), tp("hmm", function (t, e, i) {
        var n = t.length - 2;
        e[3] = b(t.substr(0, n)), e[4] = b(t.substr(n)), h(i).bigHour = !0
    }), tp("hmmss", function (t, e, i) {
        var n = t.length - 4, s = t.length - 2;
        e[3] = b(t.substr(0, n)), e[4] = b(t.substr(n, 2)), e[5] = b(t.substr(s)), h(i).bigHour = !0
    }), tp("Hmm", function (t, e, i) {
        var n = t.length - 2;
        e[3] = b(t.substr(0, n)), e[4] = b(t.substr(n))
    }), tp("Hmmss", function (t, e, i) {
        var n = t.length - 4, s = t.length - 2;
        e[3] = b(t.substr(0, n)), e[4] = b(t.substr(n, 2)), e[5] = b(t.substr(s))
    });
    var tB, tF = t$("Hours", !0), tV = {calendar: {sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L"}, longDateFormat: {LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A"}, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: /\d{1,2}/, relativeTime: {future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years"}, months: tx, monthsShort: tk, week: {dow: 0, doy: 6}, weekdays: tI, weekdaysMin: tY, weekdaysShort: t9, meridiemParse: /[ap]\.?m?\.?/i}, t2 = {}, t3 = {};

    function t4(t) {
        return t ? t.toLowerCase().replace("_", "-") : t
    }

    function tq(t) {
        var e = null;
        if (!t2[t] && "undefined" != typeof module && module && module.exports) try {
            e = tB._abbr, require("./locale/" + t), t7(e)
        } catch (i) {
        }
        return t2[t]
    }

    function t7(t, e) {
        var i;
        return t && ((i = n(e) ? tU(t) : t5(t, e)) ? tB = i : "undefined" != typeof console && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")), tB._abbr
    }

    function t5(t, e) {
        if (null === e) return delete t2[t], null;
        var i, n = tV;
        if (e.abbr = t, null != t2[t]) T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = t2[t]._config; else if (null != e.parentLocale) {
            if (null != t2[e.parentLocale]) n = t2[e.parentLocale]._config; else {
                if (null == (i = tq(e.parentLocale))) return t3[e.parentLocale] || (t3[e.parentLocale] = []), t3[e.parentLocale].push({name: t, config: e}), null;
                n = i._config
            }
        }
        return t2[t] = new P(A(n, e)), t3[t] && t3[t].forEach(function (t) {
            t5(t.name, t.config)
        }), t7(t), t2[t]
    }

    function tU(t) {
        var i;
        if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return tB;
        if (!e(t)) {
            if (i = tq(t)) return i;
            t = [t]
        }
        return function (t) {
            for (var e, i, n, s, r = 0; r < t.length;) {
                for (e = (s = t4(t[r]).split("-")).length, i = (i = t4(t[r + 1])) ? i.split("-") : null; 0 < e;) {
                    if (n = tq(s.slice(0, e).join("-"))) return n;
                    if (i && i.length >= e && _(s, i, !0) >= e - 1) break;
                    e--
                }
                r++
            }
            return tB
        }(t)
    }

    function t6(t) {
        var e, i = t._a;
        return i && -2 === h(t).overflow && (e = i[1] < 0 || 11 < i[1] ? 1 : i[2] < 1 || i[2] > t_(i[0], i[1]) ? 2 : i[3] < 0 || 24 < i[3] || 24 === i[3] && (0 !== i[4] || 0 !== i[5] || 0 !== i[6]) ? 3 : i[4] < 0 || 59 < i[4] ? 4 : i[5] < 0 || 59 < i[5] ? 5 : i[6] < 0 || 999 < i[6] ? 6 : -1, h(t)._overflowDayOfYear && (e < 0 || 2 < e) && (e = 2), h(t)._overflowWeeks && -1 === e && (e = 7), h(t)._overflowWeekday && -1 === e && (e = 8), h(t).overflow = e), t
    }

    function tX(t, e, i) {
        return null != t ? t : null != e ? e : i
    }

    function tG(e) {
        var i, n, s, r, o, a, l, c = [];
        if (!e._d) {
            for (i = e, n = new Date(t.now()), o = i._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()], e._w && null == e._a[2] && null == e._a[1] && function (t) {
                var e, i, n, s, r, o, a, l;
                if (null != (e = t._w).GG || null != e.W || null != e.E) r = 1, o = 4, i = tX(e.GG, t._a[0], tM(ec(), 1, 4).year), n = tX(e.W, 1), ((s = tX(e.E, 1)) < 1 || 7 < s) && (l = !0); else {
                    r = t._locale._week.dow, o = t._locale._week.doy;
                    var c = tM(ec(), r, o);
                    i = tX(e.gg, t._a[0], c.year), n = tX(e.w, c.week), null != e.d ? ((s = e.d) < 0 || 6 < s) && (l = !0) : null != e.e ? (s = e.e + r, (e.e < 0 || 6 < e.e) && (l = !0)) : s = r
                }
                n < 1 || n > t0(i, r, o) ? h(t)._overflowWeeks = !0 : null != l ? h(t)._overflowWeekday = !0 : (a = tL(i, n, s, r, o), t._a[0] = a.year, t._dayOfYear = a.dayOfYear)
            }(e), null != e._dayOfYear && (l = tX(e._a[0], o[0]), (e._dayOfYear > tm(l) || 0 === e._dayOfYear) && (h(e)._overflowDayOfYear = !0), r = tA(l, 0, e._dayOfYear), e._a[1] = r.getUTCMonth(), e._a[2] = r.getUTCDate()), s = 0; s < 3 && null == e._a[s]; ++s) e._a[s] = c[s] = o[s];
            for (; s < 7; s++) e._a[s] = c[s] = null == e._a[s] ? 2 === s ? 1 : 0 : e._a[s];
            24 === e._a[3] && 0 === e._a[4] && 0 === e._a[5] && 0 === e._a[6] && (e._nextDay = !0, e._a[3] = 0), e._d = (e._useUTC ? tA : function (t, e, i, n, s, r, o) {
                var a;
                return t < 100 && 0 <= t ? (a = new Date(t + 400, e, i, n, s, r, o), isFinite(a.getFullYear()) && a.setFullYear(t)) : a = new Date(t, e, i, n, s, r, o), a
            }).apply(null, c), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[3] = 24), e._w && void 0 !== e._w.d && e._w.d !== a && (h(e).weekdayMismatch = !0)
        }
    }

    var tQ = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tZ = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tK = /Z|[+-]\d\d(?::?\d\d)?/, tJ = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]], et = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
        ee = /^\/?Date\((\-?\d+)/i;

    function ei(t) {
        var e, i, n, s, r, o, a = t._i, l = tQ.exec(a) || tZ.exec(a);
        if (l) {
            for (h(t).iso = !0, e = 0, i = tJ.length; e < i; e++) if (tJ[e][1].exec(l[1])) {
                s = tJ[e][0], n = !1 !== tJ[e][2];
                break
            }
            if (null == s) return void (t._isValid = !1);
            if (l[3]) {
                for (e = 0, i = et.length; e < i; e++) if (et[e][1].exec(l[3])) {
                    r = (l[2] || " ") + et[e][0];
                    break
                }
                if (null == r) return void (t._isValid = !1)
            }
            if (!n && null != r) return void (t._isValid = !1);
            if (l[4]) {
                if (!tK.exec(l[4])) return void (t._isValid = !1);
                o = "Z"
            }
            t._f = s + (r || "") + (o || ""), eo(t)
        } else t._isValid = !1
    }

    var en = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, es = {UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480};

    function er(t) {
        var e, i, n, s = en.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
        if (s) {
            var r, o, a, l, c, u, d, p, f, m = (r = s[4], o = s[3], a = s[2], l = s[5], c = s[6], u = s[7], f = [(d = r, (p = parseInt(d, 10)) <= 49 ? 2e3 + p : p <= 999 ? 1900 + p : p), tk.indexOf(o), parseInt(a, 10), parseInt(l, 10), parseInt(c, 10)], u && f.push(parseInt(u, 10)), f);
            if (e = s[1], i = m, n = t, e && t9.indexOf(e) !== new Date(i[0], i[1], i[2]).getDay() && (h(n).weekdayMismatch = !0, n._isValid = !1, 1)) return;
            t._a = m, t._tzm = function (t, e, i) {
                if (t) return es[t];
                if (e) return 0;
                var n = parseInt(i, 10), s = n % 100;
                return (n - s) / 100 * 60 + s
            }(s[8], s[9], s[10]), t._d = tA.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), h(t).rfc2822 = !0
        } else t._isValid = !1
    }

    function eo(e) {
        if (e._f !== t.ISO_8601) {
            if (e._f !== t.RFC_2822) {
                e._a = [], h(e).empty = !0;
                var i, n, s, r, o, l, c, u, d, p, f, m, g = "" + e._i, y = g.length, v = 0;
                for (c = V(e._f, e._locale).match(N) || [], o = 0; o < c.length; o++) u = c[o], (l = (g.match(th(u, e)) || [])[0]) && (0 < (d = g.substr(0, g.indexOf(l))).length && h(e).unusedInput.push(d), g = g.slice(g.indexOf(l) + l.length), v += l.length), W[u] ? (l ? h(e).empty = !1 : h(e).unusedTokens.push(u), p = u, m = e, null != (f = l) && a(td, p) && td[p](f, m._a, m, p)) : e._strict && !l && h(e).unusedTokens.push(u);
                h(e).charsLeftOver = y - v, 0 < g.length && h(e).unusedInput.push(g), e._a[3] <= 12 && !0 === h(e).bigHour && 0 < e._a[3] && (h(e).bigHour = void 0), h(e).parsedDateParts = e._a.slice(0), h(e).meridiem = e._meridiem, e._a[3] = (i = e._locale, n = e._a[3], null == (s = e._meridiem) ? n : null != i.meridiemHour ? i.meridiemHour(n, s) : (null != i.isPM && ((r = i.isPM(s)) && n < 12 && (n += 12), r || 12 !== n || (n = 0)), n)), tG(e), t6(e)
            } else er(e)
        } else ei(e)
    }

    function ea(a) {
        var c, p, m, v, b = a._i, _ = a._f;
        return a._locale = a._locale || tU(a._l), null === b || void 0 === _ && "" === b ? d({nullInput: !0}) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), y(b) ? new g(t6(b)) : (r(b) ? a._d = b : e(_) ? function (t) {
            var e, i, n, s, r;
            if (0 === t._f.length) return h(t).invalidFormat = !0, t._d = new Date(NaN);
            for (s = 0; s < t._f.length; s++) r = 0, e = f({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[s], eo(e), u(e) && (r += h(e).charsLeftOver, r += 10 * h(e).unusedTokens.length, h(e).score = r, (null == n || r < n) && (n = r, i = e));
            l(t, i || e)
        }(a) : _ ? eo(a) : n(p = (c = a)._i) ? c._d = new Date(t.now()) : r(p) ? c._d = new Date(p.valueOf()) : "string" == typeof p ? (m = c, null === (v = ee.exec(m._i)) ? (ei(m), !1 === m._isValid && (delete m._isValid, er(m), !1 === m._isValid && (delete m._isValid, t.createFromInputFallback(m)))) : m._d = new Date(+v[1])) : e(p) ? (c._a = o(p.slice(0), function (t) {
            return parseInt(t, 10)
        }), tG(c)) : i(p) ? function (t) {
            if (!t._d) {
                var e = I(t._i);
                t._a = o([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function (t) {
                    return t && parseInt(t, 10)
                }), tG(t)
            }
        }(c) : s(p) ? c._d = new Date(p) : t.createFromInputFallback(c), u(a) || (a._d = null), a))
    }

    function el(t, n, s, r, o) {
        var a, l = {};
        return !0 !== s && !1 !== s || (r = s, s = void 0), (i(t) && function (t) {
            var e;
            if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
            for (e in t) if (t.hasOwnProperty(e)) return !1;
            return !0
        }(t) || e(t) && 0 === t.length) && (t = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = o, l._l = s, l._i = t, l._f = n, l._strict = r, (a = new g(t6(ea(l))))._nextDay && (a.add(1, "d"), a._nextDay = void 0), a
    }

    function ec(t, e, i, n) {
        return el(t, e, i, n, !1)
    }

    t.createFromInputFallback = x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (t) {
        t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
    }), t.ISO_8601 = function () {
    }, t.RFC_2822 = function () {
    };
    var eh = x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
        var t = ec.apply(null, arguments);
        return this.isValid() && t.isValid() ? t < this ? this : t : d()
    }), eu = x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
        var t = ec.apply(null, arguments);
        return this.isValid() && t.isValid() ? this < t ? this : t : d()
    });

    function ed(t, i) {
        var n, s;
        if (1 === i.length && e(i[0]) && (i = i[0]), !i.length) return ec();
        for (n = i[0], s = 1; s < i.length; ++s) i[s].isValid() && !i[s][t](n) || (n = i[s]);
        return n
    }

    var ep = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

    function ef(t) {
        var e = I(t), i = e.year || 0, n = e.quarter || 0, s = e.month || 0, r = e.week || e.isoWeek || 0, o = e.day || 0, a = e.hour || 0, l = e.minute || 0, c = e.second || 0, h = e.millisecond || 0;
        this._isValid = function (t) {
            for (var e in t) if (-1 === ty.call(ep, e) || null != t[e] && isNaN(t[e])) return !1;
            for (var i = !1, n = 0; n < ep.length; ++n) if (t[ep[n]]) {
                if (i) return !1;
                parseFloat(t[ep[n]]) !== b(t[ep[n]]) && (i = !0)
            }
            return !0
        }(e), this._milliseconds = +h + 1e3 * c + 6e4 * l + 1e3 * a * 3600, this._days = +o + 7 * r, this._months = +s + 3 * n + 12 * i, this._data = {}, this._locale = tU(), this._bubble()
    }

    function em(t) {
        return t instanceof ef
    }

    function eg(t) {
        return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t)
    }

    function ey(t, e) {
        B(t, 0, 0, function () {
            var t = this.utcOffset(), i = "+";
            return t < 0 && (t = -t, i = "-"), i + H(~~(t / 60), 2) + e + H(~~t % 60, 2)
        })
    }

    ey("Z", ":"), ey("ZZ", ""), tc("Z", to), tc("ZZ", to), tp(["Z", "ZZ"], function (t, e, i) {
        i._useUTC = !0, i._tzm = e$(to, t)
    });
    var ev = /([\+\-]|\d\d)/gi;

    function e$(t, e) {
        var i = (e || "").match(t);
        if (null === i) return null;
        var n = ((i[i.length - 1] || []) + "").match(ev) || ["-", 0, 0], s = 60 * n[1] + b(n[2]);
        return 0 === s ? 0 : "+" === n[0] ? s : -s
    }

    function e8(e, i) {
        var n, s;
        return i._isUTC ? (n = i.clone(), s = (y(e) || r(e) ? e.valueOf() : ec(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + s), t.updateOffset(n, !1), n) : ec(e).local()
    }

    function eb(t) {
        return -(15 * Math.round(t._d.getTimezoneOffset() / 15))
    }

    function e_() {
        return !!this.isValid() && this._isUTC && 0 === this._offset
    }

    t.updateOffset = function () {
    };
    var ew = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/, ex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function ek(t, e) {
        var i, n, r, o, l, c, h = t, u = null;
        return em(t) ? h = {ms: t._milliseconds, d: t._days, M: t._months} : s(t) ? (h = {}, e ? h[e] = t : h.milliseconds = t) : (u = ew.exec(t)) ? (i = "-" === u[1] ? -1 : 1, h = {y: 0, d: b(u[2]) * i, h: b(u[3]) * i, m: b(u[4]) * i, s: b(u[5]) * i, ms: b(eg(1e3 * u[6])) * i}) : (u = ex.exec(t)) ? (i = "-" === u[1] ? -1 : 1, h = {y: eD(u[2], i), M: eD(u[3], i), w: eD(u[4], i), d: eD(u[5], i), h: eD(u[6], i), m: eD(u[7], i), s: eD(u[8], i)}) : null == h ? h = {} : "object" == typeof h && ("from" in h || "to" in h) && (r = (o = ec(h.from), l = ec(h.to), o.isValid() && l.isValid() ? (l = e8(l, o), o.isBefore(l) ? c = eC(o, l) : ((c = eC(l, o)).milliseconds = -c.milliseconds, c.months = -c.months), c) : {milliseconds: 0, months: 0}), (h = {}).ms = r.milliseconds, h.M = r.months), n = new ef(h), em(t) && a(t, "_locale") && (n._locale = t._locale), n
    }

    function eD(t, e) {
        var i = t && parseFloat(t.replace(",", "."));
        return (isNaN(i) ? 0 : i) * e
    }

    function eC(t, e) {
        var i = {};
        return i.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(i.months, "M").isAfter(e) && --i.months, i.milliseconds = +e - +t.clone().add(i.months, "M"), i
    }

    function eS(t, e) {
        return function (i, n) {
            var s;
            return null === n || isNaN(+n) || (T(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), s = i, i = n, n = s), eT(this, ek(i = "string" == typeof i ? +i : i, n), t), this
        }
    }

    function eT(e, i, n, s) {
        var r = i._milliseconds, o = eg(i._days), a = eg(i._months);
        e.isValid() && (s = null == s || s, a && tD(e, t8(e, "Month") + a * n), o && tb(e, "Date", t8(e, "Date") + o * n), r && e._d.setTime(e._d.valueOf() + r * n), s && t.updateOffset(e, o || a))
    }

    ek.fn = ef.prototype, ek.invalid = function () {
        return ek(NaN)
    };
    var eE = eS(1, "add"), eA = eS(-1, "subtract");

    function eP(t, e) {
        var i = 12 * (e.year() - t.year()) + (e.month() - t.month()), n = t.clone().add(i, "months");
        return -(i + (e - n < 0 ? (e - n) / (n - t.clone().add(i - 1, "months")) : (e - n) / (t.clone().add(i + 1, "months") - n))) || 0
    }

    function eL(t) {
        var e;
        return void 0 === t ? this._locale._abbr : (null != (e = tU(t)) && (this._locale = e), this)
    }

    t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var eM = x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (t) {
        return void 0 === t ? this.localeData() : this.locale(t)
    });

    function e0() {
        return this._locale
    }

    function eO(t, e) {
        return (t % e + e) % e
    }

    function eI(t, e, i) {
        return t < 100 && 0 <= t ? new Date(t + 400, e, i) - 126227808e5 : new Date(t, e, i).valueOf()
    }

    function e9(t, e, i) {
        return t < 100 && 0 <= t ? Date.UTC(t + 400, e, i) - 126227808e5 : Date.UTC(t, e, i)
    }

    function eY(t, e) {
        B(0, [t, t.length], 0, e)
    }

    function ez(t, e, i, n, s) {
        var r;
        return null == t ? tM(this, n, s).year : ((r = t0(t, n, s)) < e && (e = r), (function (t, e, i, n, s) {
            var r = tL(t, e, i, n, s), o = tA(r.year, 0, r.dayOfYear);
            return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this
        }).call(this, t, e, i, n, s))
    }

    B(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100
    }), B(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100
    }), eY("gggg", "weekYear"), eY("ggggg", "weekYear"), eY("GGGG", "isoWeekYear"), eY("GGGGG", "isoWeekYear"), M("weekYear", "gg"), M("isoWeekYear", "GG"), Y.weekYear = 1, Y.isoWeekYear = 1, tc("G", ts), tc("g", ts), tc("GG", Z, U), tc("gg", Z, U), tc("GGGG", te, G), tc("gggg", te, G), tc("GGGGG", ti, Q), tc("ggggg", ti, Q), tf(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, i, n) {
        e[n.substr(0, 2)] = b(t)
    }), tf(["gg", "GG"], function (e, i, n, s) {
        i[s] = t.parseTwoDigitYear(e)
    }), B("Q", 0, "Qo", "quarter"), M("quarter", "Q"), Y.quarter = 7, tc("Q", q), tp("Q", function (t, e) {
        e[1] = 3 * (b(t) - 1)
    }), B("D", ["DD", 2], "Do", "date"), M("date", "D"), Y.date = 9, tc("D", Z), tc("DD", Z, U), tc("Do", function (t, e) {
        return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
    }), tp(["D", "DD"], 2), tp("Do", function (t, e) {
        e[2] = b(t.match(Z)[0])
    });
    var eH = t$("Date", !0);
    B("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), M("dayOfYear", "DDD"), Y.dayOfYear = 4, tc("DDD", tt), tc("DDDD", X), tp(["DDD", "DDDD"], function (t, e, i) {
        i._dayOfYear = b(t)
    }), B("m", ["mm", 2], 0, "minute"), M("minute", "m"), Y.minute = 14, tc("m", Z), tc("mm", Z, U), tp(["m", "mm"], 4);
    var eN = t$("Minutes", !1);
    B("s", ["ss", 2], 0, "second"), M("second", "s"), Y.second = 15, tc("s", Z), tc("ss", Z, U), tp(["s", "ss"], 5);
    var ej, eR = t$("Seconds", !1);
    for (B("S", 0, 0, function () {
        return ~~(this.millisecond() / 100)
    }), B(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10)
    }), B(0, ["SSS", 3], 0, "millisecond"), B(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond()
    }), B(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond()
    }), B(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond()
    }), B(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond()
    }), B(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond()
    }), B(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond()
    }), M("millisecond", "ms"), Y.millisecond = 16, tc("S", tt, q), tc("SS", tt, U), tc("SSS", tt, X), ej = "SSSS"; ej.length <= 9; ej += "S") tc(ej, tn);

    function e1(t, e) {
        e[6] = b(1e3 * ("0." + t))
    }

    for (ej = "S"; ej.length <= 9; ej += "S") tp(ej, e1);
    var eW = t$("Milliseconds", !1);
    B("z", 0, 0, "zoneAbbr"), B("zz", 0, 0, "zoneName");
    var eB = g.prototype;

    function eF(t) {
        return t
    }

    eB.add = eE, eB.calendar = function (e, i) {
        var n = e || ec(), s = e8(n, this).startOf("day"), r = t.calendarFormat(this, s) || "sameElse", o = i && (E(i[r]) ? i[r].call(this, n) : i[r]);
        return this.format(o || this.localeData().calendar(r, this, ec(n)))
    }, eB.clone = function () {
        return new g(this)
    }, eB.diff = function (t, e, i) {
        var n, s, r;
        if (!this.isValid() || !(n = e8(t, this)).isValid()) return NaN;
        switch (s = 6e4 * (n.utcOffset() - this.utcOffset()), e = O(e)) {
            case"year":
                r = eP(this, n) / 12;
                break;
            case"month":
                r = eP(this, n);
                break;
            case"quarter":
                r = eP(this, n) / 3;
                break;
            case"second":
                r = (this - n) / 1e3;
                break;
            case"minute":
                r = (this - n) / 6e4;
                break;
            case"hour":
                r = (this - n) / 36e5;
                break;
            case"day":
                r = (this - n - s) / 864e5;
                break;
            case"week":
                r = (this - n - s) / 6048e5;
                break;
            default:
                r = this - n
        }
        return i ? r : v(r)
    }, eB.endOf = function (e) {
        if (void 0 === (e = O(e)) || "millisecond" === e || !this.isValid()) return this;
        var i, n = this._isUTC ? e9 : eI;
        switch (e) {
            case"year":
                i = n(this.year() + 1, 0, 1) - 1;
                break;
            case"quarter":
                i = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case"month":
                i = n(this.year(), this.month() + 1, 1) - 1;
                break;
            case"week":
                i = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case"isoWeek":
                i = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case"day":
            case"date":
                i = n(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case"hour":
                i = this._d.valueOf(), i += 36e5 - eO(i + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
                break;
            case"minute":
                i = this._d.valueOf(), i += 6e4 - eO(i, 6e4) - 1;
                break;
            case"second":
                i = this._d.valueOf(), i += 1e3 - eO(i, 1e3) - 1
        }
        return this._d.setTime(i), t.updateOffset(this, !0), this
    }, eB.format = function (e) {
        e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
        var i = F(this, e);
        return this.localeData().postformat(i)
    }, eB.from = function (t, e) {
        return this.isValid() && (y(t) && t.isValid() || ec(t).isValid()) ? ek({to: this, from: t}).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }, eB.fromNow = function (t) {
        return this.from(ec(), t)
    }, eB.to = function (t, e) {
        return this.isValid() && (y(t) && t.isValid() || ec(t).isValid()) ? ek({from: this, to: t}).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }, eB.toNow = function (t) {
        return this.to(ec(), t)
    }, eB.get = function (t) {
        return E(this[t = O(t)]) ? this[t]() : this
    }, eB.invalidAt = function () {
        return h(this).overflow
    }, eB.isAfter = function (t, e) {
        var i = y(t) ? t : ec(t);
        return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = O(e) || "millisecond") ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(e).valueOf())
    }, eB.isBefore = function (t, e) {
        var i = y(t) ? t : ec(t);
        return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = O(e) || "millisecond") ? this.valueOf() < i.valueOf() : this.clone().endOf(e).valueOf() < i.valueOf())
    }, eB.isBetween = function (t, e, i, n) {
        var s = y(t) ? t : ec(t), r = y(e) ? e : ec(e);
        return !!(this.isValid() && s.isValid() && r.isValid()) && ("(" === (n = n || "()")[0] ? this.isAfter(s, i) : !this.isBefore(s, i)) && (")" === n[1] ? this.isBefore(r, i) : !this.isAfter(r, i))
    }, eB.isSame = function (t, e) {
        var i, n = y(t) ? t : ec(t);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = O(e) || "millisecond") ? this.valueOf() === n.valueOf() : (i = n.valueOf(), this.clone().startOf(e).valueOf() <= i && i <= this.clone().endOf(e).valueOf()))
    }, eB.isSameOrAfter = function (t, e) {
        return this.isSame(t, e) || this.isAfter(t, e)
    }, eB.isSameOrBefore = function (t, e) {
        return this.isSame(t, e) || this.isBefore(t, e)
    }, eB.isValid = function () {
        return u(this)
    }, eB.lang = eM, eB.locale = eL, eB.localeData = e0, eB.max = eu, eB.min = eh, eB.parsingFlags = function () {
        return l({}, h(this))
    }, eB.set = function (t, e) {
        if ("object" == typeof t) for (var i = function (t) {
            var e = [];
            for (var i in t) e.push({unit: i, priority: Y[i]});
            return e.sort(function (t, e) {
                return t.priority - e.priority
            }), e
        }(t = I(t)), n = 0; n < i.length; n++) this[i[n].unit](t[i[n].unit]); else if (E(this[t = O(t)])) return this[t](e);
        return this
    }, eB.startOf = function (e) {
        if (void 0 === (e = O(e)) || "millisecond" === e || !this.isValid()) return this;
        var i, n = this._isUTC ? e9 : eI;
        switch (e) {
            case"year":
                i = n(this.year(), 0, 1);
                break;
            case"quarter":
                i = n(this.year(), this.month() - this.month() % 3, 1);
                break;
            case"month":
                i = n(this.year(), this.month(), 1);
                break;
            case"week":
                i = n(this.year(), this.month(), this.date() - this.weekday());
                break;
            case"isoWeek":
                i = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case"day":
            case"date":
                i = n(this.year(), this.month(), this.date());
                break;
            case"hour":
                i = this._d.valueOf(), i -= eO(i + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
                break;
            case"minute":
                i = this._d.valueOf(), i -= eO(i, 6e4);
                break;
            case"second":
                i = this._d.valueOf(), i -= eO(i, 1e3)
        }
        return this._d.setTime(i), t.updateOffset(this, !0), this
    }, eB.subtract = eA, eB.toArray = function () {
        return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]
    }, eB.toObject = function () {
        return {years: this.year(), months: this.month(), date: this.date(), hours: this.hours(), minutes: this.minutes(), seconds: this.seconds(), milliseconds: this.milliseconds()}
    }, eB.toDate = function () {
        return new Date(this.valueOf())
    }, eB.toISOString = function (t) {
        if (!this.isValid()) return null;
        var e = !0 !== t, i = e ? this.clone().utc() : this;
        return 0 > i.year() || 9999 < i.year() ? F(i, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : E(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", F(i, "Z")) : F(i, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    }, eB.inspect = function () {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var t = "moment", e = "";
        this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
        var i = "[" + t + '("]', n = 0 <= this.year() && 9999 >= this.year() ? "YYYY" : "YYYYYY", s = e + '[")]';
        return this.format(i + n + "-MM-DD[T]HH:mm:ss.SSS" + s)
    }, eB.toJSON = function () {
        return this.isValid() ? this.toISOString() : null
    }, eB.toString = function () {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }, eB.unix = function () {
        return Math.floor(this.valueOf() / 1e3)
    }, eB.valueOf = function () {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }, eB.creationData = function () {
        return {input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict}
    }, eB.year = tv, eB.isLeapYear = function () {
        return tg(this.year())
    }, eB.weekYear = function (t) {
        return ez.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }, eB.isoWeekYear = function (t) {
        return ez.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
    }, eB.quarter = eB.quarters = function (t) {
        return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
    }, eB.month = tC, eB.daysInMonth = function () {
        return t_(this.year(), this.month())
    }, eB.week = eB.weeks = function (t) {
        var e = this.localeData().week(this);
        return null == t ? e : this.add(7 * (t - e), "d")
    }, eB.isoWeek = eB.isoWeeks = function (t) {
        var e = tM(this, 1, 4).week;
        return null == t ? e : this.add(7 * (t - e), "d")
    }, eB.weeksInYear = function () {
        var t = this.localeData()._week;
        return t0(this.year(), t.dow, t.doy)
    }, eB.isoWeeksInYear = function () {
        return t0(this.year(), 1, 4)
    }, eB.date = eH, eB.day = eB.days = function (t) {
        if (!this.isValid()) return null != t ? this : NaN;
        var e, i, n = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != t ? (e = t, i = this.localeData(), t = "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = i.weekdaysParse(e)) ? e : null : parseInt(e, 10), this.add(t - n, "d")) : n
    }, eB.weekday = function (t) {
        if (!this.isValid()) return null != t ? this : NaN;
        var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == t ? e : this.add(t - e, "d")
    }, eB.isoWeekday = function (t) {
        if (!this.isValid()) return null != t ? this : NaN;
        if (null == t) return this.day() || 7;
        var e, i, n = (e = t, i = this.localeData(), "string" == typeof e ? i.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e);
        return this.day(this.day() % 7 ? n : n - 7)
    }, eB.dayOfYear = function (t) {
        var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == t ? e : this.add(t - e, "d")
    }, eB.hour = eB.hours = tF, eB.minute = eB.minutes = eN, eB.second = eB.seconds = eR, eB.millisecond = eB.milliseconds = eW, eB.utcOffset = function (e, i, n) {
        var s, r = this._offset || 0;
        if (!this.isValid()) return null != e ? this : NaN;
        if (null == e) return this._isUTC ? r : eb(this);
        if ("string" == typeof e) {
            if (null === (e = e$(to, e))) return this
        } else 16 > Math.abs(e) && !n && (e *= 60);
        return !this._isUTC && i && (s = eb(this)), this._offset = e, this._isUTC = !0, null != s && this.add(s, "m"), r !== e && (!i || this._changeInProgress ? eT(this, ek(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this
    }, eB.utc = function (t) {
        return this.utcOffset(0, t)
    }, eB.local = function (t) {
        return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(eb(this), "m")), this
    }, eB.parseZone = function () {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0); else if ("string" == typeof this._i) {
            var t = e$(tr, this._i);
            null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
        }
        return this
    }, eB.hasAlignedHourOffset = function (t) {
        return !!this.isValid() && (t = t ? ec(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0)
    }, eB.isDST = function () {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }, eB.isLocal = function () {
        return !!this.isValid() && !this._isUTC
    }, eB.isUtcOffset = function () {
        return !!this.isValid() && this._isUTC
    }, eB.isUtc = e_, eB.isUTC = e_, eB.zoneAbbr = function () {
        return this._isUTC ? "UTC" : ""
    }, eB.zoneName = function () {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }, eB.dates = x("dates accessor is deprecated. Use date instead.", eH), eB.months = x("months accessor is deprecated. Use month instead", tC), eB.years = x("years accessor is deprecated. Use year instead", tv), eB.zone = x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (t, e) {
        return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
    }), eB.isDSTShifted = x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
        if (!n(this._isDSTShifted)) return this._isDSTShifted;
        var t = {};
        if (f(t, this), (t = ea(t))._a) {
            var e = t._isUTC ? c(t._a) : ec(t._a);
            this._isDSTShifted = this.isValid() && 0 < _(t._a, e.toArray())
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    });
    var eV = P.prototype;

    function e2(t, e, i, n) {
        var s = tU(), r = c().set(n, e);
        return s[i](r, t)
    }

    function e3(t, e, i) {
        if (s(t) && (e = t, t = void 0), t = t || "", null != e) return e2(t, e, i, "month");
        var n, r = [];
        for (n = 0; n < 12; n++) r[n] = e2(t, n, i, "month");
        return r
    }

    function e4(t, e, i, n) {
        e = ("boolean" == typeof t ? s(e) && (i = e, e = void 0) : (e = t, t = !1, s(i = e) && (i = e, e = void 0)), e || "");
        var r, o = tU(), a = t ? o._week.dow : 0;
        if (null != i) return e2(e, (i + a) % 7, n, "day");
        var l = [];
        for (r = 0; r < 7; r++) l[r] = e2(e, (r + a) % 7, n, "day");
        return l
    }

    eV.calendar = function (t, e, i) {
        var n = this._calendar[t] || this._calendar.sameElse;
        return E(n) ? n.call(e, i) : n
    }, eV.longDateFormat = function (t) {
        var e = this._longDateFormat[t], i = this._longDateFormat[t.toUpperCase()];
        return e || !i ? e : (this._longDateFormat[t] = i.replace(/MMMM|MM|DD|dddd/g, function (t) {
            return t.slice(1)
        }), this._longDateFormat[t])
    }, eV.invalidDate = function () {
        return this._invalidDate
    }, eV.ordinal = function (t) {
        return this._ordinal.replace("%d", t)
    }, eV.preparse = eF, eV.postformat = eF, eV.relativeTime = function (t, e, i, n) {
        var s = this._relativeTime[i];
        return E(s) ? s(t, e, i, n) : s.replace(/%d/i, t)
    }, eV.pastFuture = function (t, e) {
        var i = this._relativeTime[0 < t ? "future" : "past"];
        return E(i) ? i(e) : i.replace(/%s/i, e)
    }, eV.set = function (t) {
        var e, i;
        for (i in t) E(e = t[i]) ? this[i] = e : this["_" + i] = e;
        this._config = t, this._dayOfMonthOrdinalParseLenient = RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }, eV.months = function (t, i) {
        return t ? e(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || tw).test(i) ? "format" : "standalone"][t.month()] : e(this._months) ? this._months : this._months.standalone
    }, eV.monthsShort = function (t, i) {
        return t ? e(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[tw.test(i) ? "format" : "standalone"][t.month()] : e(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }, eV.monthsParse = function (t, e, i) {
        var n, s, r;
        if (this._monthsParseExact) return (function (t, e, i) {
            var n, s, r, o = t.toLocaleLowerCase();
            if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) r = c([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(r, "").toLocaleLowerCase();
            return i ? "MMM" === e ? -1 !== (s = ty.call(this._shortMonthsParse, o)) ? s : null : -1 !== (s = ty.call(this._longMonthsParse, o)) ? s : null : "MMM" === e ? -1 !== (s = ty.call(this._shortMonthsParse, o)) ? s : -1 !== (s = ty.call(this._longMonthsParse, o)) ? s : null : -1 !== (s = ty.call(this._longMonthsParse, o)) ? s : -1 !== (s = ty.call(this._shortMonthsParse, o)) ? s : null
        }).call(this, t, e, i);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) if (s = c([2e3, n]), i && !this._longMonthsParse[n] && (this._longMonthsParse[n] = RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), i || this._monthsParse[n] || (r = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[n] = RegExp(r.replace(".", ""), "i")), i && "MMMM" === e && this._longMonthsParse[n].test(t) || i && "MMM" === e && this._shortMonthsParse[n].test(t) || !i && this._monthsParse[n].test(t)) return n
    }, eV.monthsRegex = function (t) {
        return this._monthsParseExact ? (a(this, "_monthsRegex") || tE.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (a(this, "_monthsRegex") || (this._monthsRegex = tT), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
    }, eV.monthsShortRegex = function (t) {
        return this._monthsParseExact ? (a(this, "_monthsRegex") || tE.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (a(this, "_monthsShortRegex") || (this._monthsShortRegex = tS), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }, eV.week = function (t) {
        return tM(t, this._week.dow, this._week.doy).week
    }, eV.firstDayOfYear = function () {
        return this._week.doy
    }, eV.firstDayOfWeek = function () {
        return this._week.dow
    }, eV.weekdays = function (t, i) {
        var n = e(this._weekdays) ? this._weekdays : this._weekdays[t && !0 !== t && this._weekdays.isFormat.test(i) ? "format" : "standalone"];
        return !0 === t ? tO(n, this._week.dow) : t ? n[t.day()] : n
    }, eV.weekdaysMin = function (t) {
        return !0 === t ? tO(this._weekdaysMin, this._week.dow) : t ? this._weekdaysMin[t.day()] : this._weekdaysMin
    }, eV.weekdaysShort = function (t) {
        return !0 === t ? tO(this._weekdaysShort, this._week.dow) : t ? this._weekdaysShort[t.day()] : this._weekdaysShort
    }, eV.weekdaysParse = function (t, e, i) {
        var n, s, r;
        if (this._weekdaysParseExact) return (function (t, e, i) {
            var n, s, r, o = t.toLocaleLowerCase();
            if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) r = c([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(r, "").toLocaleLowerCase();
            return i ? "dddd" === e ? -1 !== (s = ty.call(this._weekdaysParse, o)) ? s : null : "ddd" === e ? -1 !== (s = ty.call(this._shortWeekdaysParse, o)) ? s : null : -1 !== (s = ty.call(this._minWeekdaysParse, o)) ? s : null : "dddd" === e ? -1 !== (s = ty.call(this._weekdaysParse, o)) ? s : -1 !== (s = ty.call(this._shortWeekdaysParse, o)) ? s : -1 !== (s = ty.call(this._minWeekdaysParse, o)) ? s : null : "ddd" === e ? -1 !== (s = ty.call(this._shortWeekdaysParse, o)) ? s : -1 !== (s = ty.call(this._weekdaysParse, o)) ? s : -1 !== (s = ty.call(this._minWeekdaysParse, o)) ? s : null : -1 !== (s = ty.call(this._minWeekdaysParse, o)) ? s : -1 !== (s = ty.call(this._weekdaysParse, o)) ? s : -1 !== (s = ty.call(this._shortWeekdaysParse, o)) ? s : null
        }).call(this, t, e, i);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) if (s = c([2e3, 1]).day(n), i && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = RegExp("^" + this.weekdays(s, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[n] = RegExp("^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[n] = RegExp("^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[n] || (r = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[n] = RegExp(r.replace(".", ""), "i")), i && "dddd" === e && this._fullWeekdaysParse[n].test(t) || i && "ddd" === e && this._shortWeekdaysParse[n].test(t) || i && "dd" === e && this._minWeekdaysParse[n].test(t) || !i && this._weekdaysParse[n].test(t)) return n
    }, eV.weekdaysRegex = function (t) {
        return this._weekdaysParseExact ? (a(this, "_weekdaysRegex") || tj.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (a(this, "_weekdaysRegex") || (this._weekdaysRegex = tz), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }, eV.weekdaysShortRegex = function (t) {
        return this._weekdaysParseExact ? (a(this, "_weekdaysRegex") || tj.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (a(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = tH), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }, eV.weekdaysMinRegex = function (t) {
        return this._weekdaysParseExact ? (a(this, "_weekdaysRegex") || tj.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (a(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = tN), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }, eV.isPM = function (t) {
        return "p" === (t + "").toLowerCase().charAt(0)
    }, eV.meridiem = function (t, e, i) {
        return 11 < t ? i ? "pm" : "PM" : i ? "am" : "AM"
    }, t7("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function (t) {
            var e = t % 10;
            return t + (1 === b(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
        }
    }), t.lang = x("moment.lang is deprecated. Use moment.locale instead.", t7), t.langData = x("moment.langData is deprecated. Use moment.localeData instead.", tU);
    var eq = Math.abs;

    function e7(t, e, i, n) {
        var s = ek(e, i);
        return t._milliseconds += n * s._milliseconds, t._days += n * s._days, t._months += n * s._months, t._bubble()
    }

    function e5(t) {
        return t < 0 ? Math.floor(t) : Math.ceil(t)
    }

    function eU(t) {
        return 4800 * t / 146097
    }

    function e6(t) {
        return 146097 * t / 4800
    }

    function eX(t) {
        return function () {
            return this.as(t)
        }
    }

    var eG = eX("ms"), eQ = eX("s"), eZ = eX("m"), eK = eX("h"), eJ = eX("d"), it = eX("w"), ie = eX("M"), ii = eX("Q"), is = eX("y");

    function ir(t) {
        return function () {
            return this.isValid() ? this._data[t] : NaN
        }
    }

    var io = ir("milliseconds"), ia = ir("seconds"), il = ir("minutes"), ic = ir("hours"), ih = ir("days"), iu = ir("months"), id = ir("years"), ip = Math.round, im = {ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11}, ig = Math.abs;

    function iy(t) {
        return (0 < t) - (t < 0) || +t
    }

    function iv() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var t, e, i = ig(this._milliseconds) / 1e3, n = ig(this._days), s = ig(this._months);
        e = v((t = v(i / 60)) / 60), i %= 60, t %= 60;
        var r = v(s / 12), o = s %= 12, a = n, l = e, c = t, h = i ? i.toFixed(3).replace(/\.?0+$/, "") : "", u = this.asSeconds();
        if (!u) return "P0D";
        var d = iy(this._months) !== iy(u) ? "-" : "", p = iy(this._days) !== iy(u) ? "-" : "", f = iy(this._milliseconds) !== iy(u) ? "-" : "";
        return (u < 0 ? "-" : "") + "P" + (r ? d + r + "Y" : "") + (o ? d + o + "M" : "") + (a ? p + a + "D" : "") + (l || c || h ? "T" : "") + (l ? f + l + "H" : "") + (c ? f + c + "M" : "") + (h ? f + h + "S" : "")
    }

    var i$ = ef.prototype;
    return i$.isValid = function () {
        return this._isValid
    }, i$.abs = function () {
        var t = this._data;
        return this._milliseconds = eq(this._milliseconds), this._days = eq(this._days), this._months = eq(this._months), t.milliseconds = eq(t.milliseconds), t.seconds = eq(t.seconds), t.minutes = eq(t.minutes), t.hours = eq(t.hours), t.months = eq(t.months), t.years = eq(t.years), this
    }, i$.add = function (t, e) {
        return e7(this, t, e, 1)
    }, i$.subtract = function (t, e) {
        return e7(this, t, e, -1)
    }, i$.as = function (t) {
        if (!this.isValid()) return NaN;
        var e, i, n = this._milliseconds;
        if ("month" === (t = O(t)) || "quarter" === t || "year" === t) switch (e = this._days + n / 864e5, i = this._months + eU(e), t) {
            case"month":
                return i;
            case"quarter":
                return i / 3;
            case"year":
                return i / 12
        } else switch (e = this._days + Math.round(e6(this._months)), t) {
            case"week":
                return e / 7 + n / 6048e5;
            case"day":
                return e + n / 864e5;
            case"hour":
                return 24 * e + n / 36e5;
            case"minute":
                return 1440 * e + n / 6e4;
            case"second":
                return 86400 * e + n / 1e3;
            case"millisecond":
                return Math.floor(864e5 * e) + n;
            default:
                throw Error("Unknown unit " + t)
        }
    }, i$.asMilliseconds = eG, i$.asSeconds = eQ, i$.asMinutes = eZ, i$.asHours = eK, i$.asDays = eJ, i$.asWeeks = it, i$.asMonths = ie, i$.asQuarters = ii, i$.asYears = is, i$.valueOf = function () {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * b(this._months / 12) : NaN
    }, i$._bubble = function () {
        var t, e, i, n, s, r = this._milliseconds, o = this._days, a = this._months, l = this._data;
        return 0 <= r && 0 <= o && 0 <= a || r <= 0 && o <= 0 && a <= 0 || (r += 864e5 * e5(e6(a) + o), a = o = 0), l.milliseconds = r % 1e3, t = v(r / 1e3), l.seconds = t % 60, e = v(t / 60), l.minutes = e % 60, i = v(e / 60), l.hours = i % 24, a += s = v(eU(o += v(i / 24))), o -= e5(e6(s)), n = v(a / 12), a %= 12, l.days = o, l.months = a, l.years = n, this
    }, i$.clone = function () {
        return ek(this)
    }, i$.get = function (t) {
        return t = O(t), this.isValid() ? this[t + "s"]() : NaN
    }, i$.milliseconds = io, i$.seconds = ia, i$.minutes = il, i$.hours = ic, i$.days = ih, i$.weeks = function () {
        return v(this.days() / 7)
    }, i$.months = iu, i$.years = id, i$.humanize = function (t) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e, i, n, s, r, o, a, l, c, h, u, d = this.localeData(), p = (i = !t, n = d, s = ek(e = this).abs(), r = ip(s.as("s")), o = ip(s.as("m")), a = ip(s.as("h")), l = ip(s.as("d")), c = ip(s.as("M")), h = ip(s.as("y")), (u = r <= im.ss && ["s", r] || r < im.s && ["ss", r] || o <= 1 && ["m"] || o < im.m && ["mm", o] || a <= 1 && ["h"] || a < im.h && ["hh", a] || l <= 1 && ["d"] || l < im.d && ["dd", l] || c <= 1 && ["M"] || c < im.M && ["MM", c] || h <= 1 && ["y"] || ["yy", h])[2] = i, u[3] = 0 < +e, u[4] = n, (function (t, e, i, n, s) {
            return s.relativeTime(e || 1, !!i, t, n)
        }).apply(null, u));
        return t && (p = d.pastFuture(+this, p)), d.postformat(p)
    }, i$.toISOString = iv, i$.toString = iv, i$.toJSON = iv, i$.locale = eL, i$.localeData = e0, i$.toIsoString = x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", iv), i$.lang = eM, B("X", 0, 0, "unix"), B("x", 0, 0, "valueOf"), tc("x", ts), tc("X", /[+-]?\d+(\.\d{1,3})?/), tp("X", function (t, e, i) {
        i._d = new Date(1e3 * parseFloat(t, 10))
    }), tp("x", function (t, e, i) {
        i._d = new Date(b(t))
    }), t.version = "2.24.0", k = ec, t.fn = eB, t.min = function () {
        return ed("isBefore", [].slice.call(arguments, 0))
    }, t.max = function () {
        return ed("isAfter", [].slice.call(arguments, 0))
    }, t.now = function () {
        return Date.now ? Date.now() : +new Date
    }, t.utc = c, t.unix = function (t) {
        return ec(1e3 * t)
    }, t.months = function (t, e) {
        return e3(t, e, "months")
    }, t.isDate = r, t.locale = t7, t.invalid = d, t.duration = ek, t.isMoment = y, t.weekdays = function (t, e, i) {
        return e4(t, e, i, "weekdays")
    }, t.parseZone = function () {
        return ec.apply(null, arguments).parseZone()
    }, t.localeData = tU, t.isDuration = em, t.monthsShort = function (t, e) {
        return e3(t, e, "monthsShort")
    }, t.weekdaysMin = function (t, e, i) {
        return e4(t, e, i, "weekdaysMin")
    }, t.defineLocale = t5, t.updateLocale = function (t, e) {
        if (null != e) {
            var i, n, s = tV;
            null != (n = tq(t)) && (s = n._config), (i = new P(e = A(s, e))).parentLocale = t2[t], t2[t] = i, t7(t)
        } else null != t2[t] && (null != t2[t].parentLocale ? t2[t] = t2[t].parentLocale : null != t2[t] && delete t2[t]);
        return t2[t]
    }, t.locales = function () {
        return C(t2)
    }, t.weekdaysShort = function (t, e, i) {
        return e4(t, e, i, "weekdaysShort")
    }, t.normalizeUnits = O, t.relativeTimeRounding = function (t) {
        return void 0 === t ? ip : "function" == typeof t && (ip = t, !0)
    }, t.relativeTimeThreshold = function (t, e) {
        return void 0 !== im[t] && (void 0 === e ? im[t] : (im[t] = e, "s" === t && (im.ss = e - 1), !0))
    }, t.calendarFormat = function (t, e) {
        var i = t.diff(e, "days", !0);
        return i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse"
    }, t.prototype = eB, t.HTML5_FMT = {DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "GGGG-[W]WW", MONTH: "YYYY-MM"}, t
}), function (t, e) {
    var i, n;
    "function" == typeof define && define.amd ? define(["moment", "jquery"], function (t, i) {
        return i.fn || (i.fn = {}), "function" != typeof t && t.hasOwnProperty("default") && (t = t.default), e(t, i)
    }) : "object" == typeof module && module.exports ? ((i = "undefined" != typeof window ? window.jQuery : void 0) || (i = require("jquery")).fn || (i.fn = {}), n = "undefined" != typeof window && void 0 !== window.moment ? window.moment : require("moment"), module.exports = e(n, i)) : t.daterangepicker = e(t.moment, t.jQuery)
}("undefined" != typeof window ? window : this, function (t, e) {
    function i(i, n, s) {
        var r, o, a, l;
        if (this.parentEl = "body", this.element = e(i), this.startDate = t().startOf("day"), this.endDate = t().endOf("day"), this.minDate = !1, this.maxDate = !1, this.maxSpan = !1, this.autoApply = !1, this.singleDatePicker = !1, this.showDropdowns = !1, this.minYear = t().subtract(100, "year").format("YYYY"), this.maxYear = t().add(100, "year").format("YYYY"), this.showWeekNumbers = !1, this.showISOWeekNumbers = !1, this.showCustomRangeLabel = !0, this.timePicker = !1, this.timePicker24Hour = !1, this.timePickerIncrement = 1, this.timePickerSeconds = !1, this.linkedCalendars = !0, this.autoUpdateInput = !0, this.alwaysShowCalendars = !1, this.ranges = {}, this.opens = "right", this.element.hasClass("pull-right") && (this.opens = "left"), this.drops = "down", this.element.hasClass("dropup") && (this.drops = "up"), this.buttonClasses = "btn btn-sm", this.applyButtonClasses = "btn-primary", this.cancelButtonClasses = "btn-default", this.locale = {
            direction: "ltr",
            format: t.localeData().longDateFormat("L"),
            separator: " - ",
            applyLabel: "Apply",
            cancelLabel: "Cancel",
            weekLabel: "W",
            customRangeLabel: "Custom Range",
            daysOfWeek: t.weekdaysMin(),
            monthNames: t.monthsShort(),
            firstDay: t.localeData().firstDayOfWeek()
        }, this.callback = function () {
        }, this.isShowing = !1, this.leftCalendar = {}, this.rightCalendar = {}, "object" == typeof n && null !== n || (n = {}), "string" == typeof (n = e.extend(this.element.data(), n)).template || n.template instanceof e || (n.template = '<div class="daterangepicker"><div class="ranges"></div><div class="drp-calendar left"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-calendar right"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-buttons"><span class="drp-selected"></span><button class="cancelBtn" type="button"></button><button class="applyBtn" disabled="disabled" type="button"></button> </div></div>'), this.parentEl = n.parentEl && e(n.parentEl).length ? e(n.parentEl) : e(this.parentEl), this.container = e(n.template).appendTo(this.parentEl), "object" == typeof n.locale && ("string" == typeof n.locale.direction && (this.locale.direction = n.locale.direction), "string" == typeof n.locale.format && (this.locale.format = n.locale.format), "string" == typeof n.locale.separator && (this.locale.separator = n.locale.separator), "object" == typeof n.locale.daysOfWeek && (this.locale.daysOfWeek = n.locale.daysOfWeek.slice()), "object" == typeof n.locale.monthNames && (this.locale.monthNames = n.locale.monthNames.slice()), "number" == typeof n.locale.firstDay && (this.locale.firstDay = n.locale.firstDay), "string" == typeof n.locale.applyLabel && (this.locale.applyLabel = n.locale.applyLabel), "string" == typeof n.locale.cancelLabel && (this.locale.cancelLabel = n.locale.cancelLabel), "string" == typeof n.locale.weekLabel && (this.locale.weekLabel = n.locale.weekLabel), "string" == typeof n.locale.customRangeLabel && ((h = document.createElement("textarea")).innerHTML = n.locale.customRangeLabel, u = h.value, this.locale.customRangeLabel = u)), this.container.addClass(this.locale.direction), "string" == typeof n.startDate && (this.startDate = t(n.startDate, this.locale.format)), "string" == typeof n.endDate && (this.endDate = t(n.endDate, this.locale.format)), "string" == typeof n.minDate && (this.minDate = t(n.minDate, this.locale.format)), "string" == typeof n.maxDate && (this.maxDate = t(n.maxDate, this.locale.format)), "object" == typeof n.startDate && (this.startDate = t(n.startDate)), "object" == typeof n.endDate && (this.endDate = t(n.endDate)), "object" == typeof n.minDate && (this.minDate = t(n.minDate)), "object" == typeof n.maxDate && (this.maxDate = t(n.maxDate)), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), "string" == typeof n.applyButtonClasses && (this.applyButtonClasses = n.applyButtonClasses), "string" == typeof n.applyClass && (this.applyButtonClasses = n.applyClass), "string" == typeof n.cancelButtonClasses && (this.cancelButtonClasses = n.cancelButtonClasses), "string" == typeof n.cancelClass && (this.cancelButtonClasses = n.cancelClass), "object" == typeof n.maxSpan && (this.maxSpan = n.maxSpan), "object" == typeof n.dateLimit && (this.maxSpan = n.dateLimit), "string" == typeof n.opens && (this.opens = n.opens), "string" == typeof n.drops && (this.drops = n.drops), "boolean" == typeof n.showWeekNumbers && (this.showWeekNumbers = n.showWeekNumbers), "boolean" == typeof n.showISOWeekNumbers && (this.showISOWeekNumbers = n.showISOWeekNumbers), "string" == typeof n.buttonClasses && (this.buttonClasses = n.buttonClasses), "object" == typeof n.buttonClasses && (this.buttonClasses = n.buttonClasses.join(" ")), "boolean" == typeof n.showDropdowns && (this.showDropdowns = n.showDropdowns), "number" == typeof n.minYear && (this.minYear = n.minYear), "number" == typeof n.maxYear && (this.maxYear = n.maxYear), "boolean" == typeof n.showCustomRangeLabel && (this.showCustomRangeLabel = n.showCustomRangeLabel), "boolean" == typeof n.singleDatePicker && (this.singleDatePicker = n.singleDatePicker, this.singleDatePicker && (this.endDate = this.startDate.clone())), "boolean" == typeof n.timePicker && (this.timePicker = n.timePicker), "boolean" == typeof n.timePickerSeconds && (this.timePickerSeconds = n.timePickerSeconds), "number" == typeof n.timePickerIncrement && (this.timePickerIncrement = n.timePickerIncrement), "boolean" == typeof n.timePicker24Hour && (this.timePicker24Hour = n.timePicker24Hour), "boolean" == typeof n.autoApply && (this.autoApply = n.autoApply), "boolean" == typeof n.autoUpdateInput && (this.autoUpdateInput = n.autoUpdateInput), "boolean" == typeof n.linkedCalendars && (this.linkedCalendars = n.linkedCalendars), "function" == typeof n.isInvalidDate && (this.isInvalidDate = n.isInvalidDate), "function" == typeof n.isCustomDate && (this.isCustomDate = n.isCustomDate), "boolean" == typeof n.alwaysShowCalendars && (this.alwaysShowCalendars = n.alwaysShowCalendars), 0 != this.locale.firstDay) for (var c = this.locale.firstDay; 0 < c;) this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()), c--;
        if (void 0 === n.startDate && void 0 === n.endDate && e(this.element).is(":text") && (l = r = null, 2 == (i = (a = e(this.element).val()).split(this.locale.separator)).length ? (l = t(i[0], this.locale.format), r = t(i[1], this.locale.format)) : this.singleDatePicker && "" !== a && (l = t(a, this.locale.format), r = t(a, this.locale.format)), null !== l && null !== r && (this.setStartDate(l), this.setEndDate(r))), "object" == typeof n.ranges) {
            for (o in n.ranges) {
                l = "string" == typeof n.ranges[o][0] ? t(n.ranges[o][0], this.locale.format) : t(n.ranges[o][0]), r = "string" == typeof n.ranges[o][1] ? t(n.ranges[o][1], this.locale.format) : t(n.ranges[o][1]), this.minDate && l.isBefore(this.minDate) && (l = this.minDate.clone());
                var h, u, d = this.maxDate;
                this.maxSpan && d && l.clone().add(this.maxSpan).isAfter(d) && (d = l.clone().add(this.maxSpan)), d && r.isAfter(d) && (r = d.clone()), this.minDate && r.isBefore(this.minDate, this.timepicker ? "minute" : "day") || d && l.isAfter(d, this.timepicker ? "minute" : "day") || ((h = document.createElement("textarea")).innerHTML = o, u = h.value, this.ranges[u] = [l, r])
            }
            var p = "<ul>";
            for (o in this.ranges) p += '<li data-range-key="' + o + '">' + o + "</li>";
            this.showCustomRangeLabel && (p += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + "</li>"), p += "</ul>", this.container.find(".ranges").prepend(p)
        }
        "function" == typeof s && (this.callback = s), this.timePicker || (this.startDate = this.startDate.startOf("day"), this.endDate = this.endDate.endOf("day"), this.container.find(".calendar-time").hide()), this.timePicker && this.autoApply && (this.autoApply = !1), this.autoApply && this.container.addClass("auto-apply"), "object" == typeof n.ranges && this.container.addClass("show-ranges"), this.singleDatePicker && (this.container.addClass("single"), this.container.find(".drp-calendar.left").addClass("single"), this.container.find(".drp-calendar.left").show(), this.container.find(".drp-calendar.right").hide(), !this.timePicker && this.autoApply && this.container.addClass("auto-apply")), (void 0 === n.ranges && !this.singleDatePicker || this.alwaysShowCalendars) && this.container.addClass("show-calendar"), this.container.addClass("opens" + this.opens), this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses), this.applyButtonClasses.length && this.container.find(".applyBtn").addClass(this.applyButtonClasses), this.cancelButtonClasses.length && this.container.find(".cancelBtn").addClass(this.cancelButtonClasses), this.container.find(".applyBtn").html(this.locale.applyLabel), this.container.find(".cancelBtn").html(this.locale.cancelLabel), this.container.find(".drp-calendar").on("click.daterangepicker", ".prev", e.proxy(this.clickPrev, this)).on("click.daterangepicker", ".next", e.proxy(this.clickNext, this)).on("mousedown.daterangepicker", "td.available", e.proxy(this.clickDate, this)).on("mouseenter.daterangepicker", "td.available", e.proxy(this.hoverDate, this)).on("change.daterangepicker", "select.yearselect", e.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.monthselect", e.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.hourselect,select.minuteselect,select.secondselect,select.ampmselect", e.proxy(this.timeChanged, this)), this.container.find(".ranges").on("click.daterangepicker", "li", e.proxy(this.clickRange, this)), this.container.find(".drp-buttons").on("click.daterangepicker", "button.applyBtn", e.proxy(this.clickApply, this)).on("click.daterangepicker", "button.cancelBtn", e.proxy(this.clickCancel, this)), this.element.is("input") || this.element.is("button") ? this.element.on({
            "click.daterangepicker": e.proxy(this.show, this),
            "focus.daterangepicker": e.proxy(this.show, this),
            "keyup.daterangepicker": e.proxy(this.elementChanged, this),
            "keydown.daterangepicker": e.proxy(this.keydown, this)
        }) : (this.element.on("click.daterangepicker", e.proxy(this.toggle, this)), this.element.on("keydown.daterangepicker", e.proxy(this.toggle, this))), this.updateElement()
    }

    return i.prototype = {
        constructor: i, setStartDate: function (e) {
            "string" == typeof e && (this.startDate = t(e, this.locale.format)), "object" == typeof e && (this.startDate = t(e)), this.timePicker || (this.startDate = this.startDate.startOf("day")), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.maxDate && this.startDate.isAfter(this.maxDate) && (this.startDate = this.maxDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.isShowing || this.updateElement(), this.updateMonthsInView()
        }, setEndDate: function (e) {
            "string" == typeof e && (this.endDate = t(e, this.locale.format)), "object" == typeof e && (this.endDate = t(e)), this.timePicker || (this.endDate = this.endDate.endOf("day")), this.timePicker && this.timePickerIncrement && this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.endDate.isBefore(this.startDate) && (this.endDate = this.startDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), this.maxSpan && this.startDate.clone().add(this.maxSpan).isBefore(this.endDate) && (this.endDate = this.startDate.clone().add(this.maxSpan)), this.previousRightTime = this.endDate.clone(), this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.isShowing || this.updateElement(), this.updateMonthsInView()
        }, isInvalidDate: function () {
            return !1
        }, isCustomDate: function () {
            return !1
        }, updateView: function () {
            this.timePicker && (this.renderTimePicker("left"), this.renderTimePicker("right"), this.endDate ? this.container.find(".right .calendar-time select").prop("disabled", !1).removeClass("disabled") : this.container.find(".right .calendar-time select").prop("disabled", !0).addClass("disabled")), this.endDate && this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.updateMonthsInView(), this.updateCalendars(), this.updateFormInputs()
        }, updateMonthsInView: function () {
            if (this.endDate) {
                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month && (this.startDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.startDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM")) && (this.endDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.endDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM"))) return;
                this.leftCalendar.month = this.startDate.clone().date(2), this.linkedCalendars || this.endDate.month() == this.startDate.month() && this.endDate.year() == this.startDate.year() ? this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month") : this.rightCalendar.month = this.endDate.clone().date(2)
            } else this.leftCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && this.rightCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && (this.leftCalendar.month = this.startDate.clone().date(2), this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month"));
            this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate && (this.rightCalendar.month = this.maxDate.clone().date(2), this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, "month"))
        }, updateCalendars: function () {
            var t, e, i, n;
            this.timePicker && (this.endDate ? (e = parseInt(this.container.find(".left .hourselect").val(), 10), i = parseInt(this.container.find(".left .minuteselect").val(), 10), isNaN(i) && (i = parseInt(this.container.find(".left .minuteselect option:last").val(), 10)), t = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0, this.timePicker24Hour || ("PM" === (n = this.container.find(".left .ampmselect").val()) && e < 12 && (e += 12), "AM" === n && 12 === e && (e = 0))) : (e = parseInt(this.container.find(".right .hourselect").val(), 10), i = parseInt(this.container.find(".right .minuteselect").val(), 10), isNaN(i) && (i = parseInt(this.container.find(".right .minuteselect option:last").val(), 10)), t = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0, this.timePicker24Hour || ("PM" === (n = this.container.find(".right .ampmselect").val()) && e < 12 && (e += 12), "AM" === n && 12 === e && (e = 0))), this.leftCalendar.month.hour(e).minute(i).second(t), this.rightCalendar.month.hour(e).minute(i).second(t)), this.renderCalendar("left"), this.renderCalendar("right"), this.container.find(".ranges li").removeClass("active"), null != this.endDate && this.calculateChosenLabel()
        }, renderCalendar: function (i) {
            var n = "left" == i ? this.leftCalendar : this.rightCalendar, s = n.month.month(), r = n.month.year(), o = n.month.hour(), a = n.month.minute(), l = n.month.second(), c = t([r, s]).daysInMonth(), h = t([r, s, 1]), u = t([r, s, c]), d = t(h).subtract(1, "month").month(), r = t(h).subtract(1, "month").year(), s = t([r, d]).daysInMonth(), c = h.day();
            (n = []).firstDay = h, n.lastDay = u;
            for (var p = 0; p < 6; p++) n[p] = [];
            u = s - c + this.locale.firstDay + 1, s < u && (u -= 7), c == this.locale.firstDay && (u = s - 6);
            for (var f = t([r, d, u, 12, a, l]), p = 0, m = 0, g = 0; p < 42; p++, m++, f = t(f).add(24, "hour")) 0 < p && m % 7 == 0 && (m = 0, g++), n[g][m] = f.clone().hour(o).minute(a).second(l), f.hour(12), this.minDate && n[g][m].format("YYYY-MM-DD") == this.minDate.format("YYYY-MM-DD") && n[g][m].isBefore(this.minDate) && "left" == i && (n[g][m] = this.minDate.clone()), this.maxDate && n[g][m].format("YYYY-MM-DD") == this.maxDate.format("YYYY-MM-DD") && n[g][m].isAfter(this.maxDate) && "right" == i && (n[g][m] = this.maxDate.clone());
            "left" == i ? this.leftCalendar.calendar = n : this.rightCalendar.calendar = n;
            var y = "left" == i ? this.minDate : this.startDate, v = this.maxDate, b = ("left" == i ? this.startDate : this.endDate, this.locale.direction, '<table class="table-condensed">');
            if (b += "<thead>", b += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (b += "<th></th>"), y && !y.isBefore(n.firstDay) || this.linkedCalendars && "left" != i ? b += "<th></th>" : b += '<th class="prev available"><span></span></th>', d = this.locale.monthNames[n[1][1].month()] + n[1][1].format(" YYYY"), this.showDropdowns) {
                for (var _ = n[1][1].month(), w = n[1][1].year(), x = v && v.year() || this.maxYear, u = y && y.year() || this.minYear, k = w == u, D = w == x, C = '<select class="monthselect">', S = 0; S < 12; S++) (!k || y && S >= y.month()) && (!D || v && S <= v.month()) ? C += "<option value='" + S + "'" + (S === _ ? " selected='selected'" : "") + ">" + this.locale.monthNames[S] + "</option>" : C += "<option value='" + S + "'" + (S === _ ? " selected='selected'" : "") + " disabled='disabled'>" + this.locale.monthNames[S] + "</option>";
                C += "</select>";
                for (var T = '<select class="yearselect">', E = u; E <= x; E++) T += '<option value="' + E + '"' + (E === w ? ' selected="selected"' : "") + ">" + E + "</option>";
                d = C + (T += "</select>")
            }
            for (b += '<th colspan="5" class="month">' + d + "</th>", v && !v.isAfter(n.lastDay) || this.linkedCalendars && "right" != i && !this.singleDatePicker ? b += "<th></th>" : b += '<th class="next available"><span></span></th>', b += "</tr>", b += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (b += '<th class="week">' + this.locale.weekLabel + "</th>"), e.each(this.locale.daysOfWeek, function (t, e) {
                b += "<th>" + e + "</th>"
            }), b += "</tr>", b += "</thead>", b += "<tbody>", null == this.endDate && this.maxSpan && (d = this.startDate.clone().add(this.maxSpan).endOf("day"), v && !d.isBefore(v) || (v = d)), g = 0; g < 6; g++) {
                for (b += "<tr>", this.showWeekNumbers ? b += '<td class="week">' + n[g][0].week() + "</td>" : this.showISOWeekNumbers && (b += '<td class="week">' + n[g][0].isoWeek() + "</td>"), m = 0; m < 7; m++) {
                    var A = [];
                    n[g][m].isSame(new Date, "day") && A.push("today"), 5 < n[g][m].isoWeekday() && A.push("weekend"), n[g][m].month() != n[1][1].month() && A.push("off", "ends"), this.minDate && n[g][m].isBefore(this.minDate, "day") && A.push("off", "disabled"), v && n[g][m].isAfter(v, "day") && A.push("off", "disabled"), this.isInvalidDate(n[g][m]) && A.push("off", "disabled"), n[g][m].format("YYYY-MM-DD") == this.startDate.format("YYYY-MM-DD") && A.push("active", "start-date"), null != this.endDate && n[g][m].format("YYYY-MM-DD") == this.endDate.format("YYYY-MM-DD") && A.push("active", "end-date"), null != this.endDate && n[g][m] > this.startDate && n[g][m] < this.endDate && A.push("in-range");
                    var P = this.isCustomDate(n[g][m]);
                    !1 !== P && ("string" == typeof P ? A.push(P) : Array.prototype.push.apply(A, P));
                    for (var L = "", M = !1, p = 0; p < A.length; p++) L += A[p] + " ", "disabled" == A[p] && (M = !0);
                    M || (L += "available"), b += '<td class="' + L.replace(/^\s+|\s+$/g, "") + '" data-title="r' + g + "c" + m + '">' + n[g][m].date() + "</td>"
                }
                b += "</tr>"
            }
            b += "</tbody>", b += "</table>", this.container.find(".drp-calendar." + i + " .calendar-table").html(b)
        }, renderTimePicker: function (t) {
            if ("right" != t || this.endDate) {
                var e, i, n, s = this.maxDate;
                this.maxSpan && (!this.maxDate || this.startDate.clone().add(this.maxSpan).isBefore(this.maxDate)) && (s = this.startDate.clone().add(this.maxSpan)), "left" == t ? (i = this.startDate.clone(), n = this.minDate) : "right" == t && (i = this.endDate.clone(), n = this.startDate, "" != (r = this.container.find(".drp-calendar.right .calendar-time")).html() && (i.hour(isNaN(i.hour()) ? r.find(".hourselect option:selected").val() : i.hour()), i.minute(isNaN(i.minute()) ? r.find(".minuteselect option:selected").val() : i.minute()), i.second(isNaN(i.second()) ? r.find(".secondselect option:selected").val() : i.second()), this.timePicker24Hour || ("PM" === (u = r.find(".ampmselect option:selected").val()) && 12 > i.hour() && i.hour(i.hour() + 12), "AM" === u && 12 === i.hour() && i.hour(0))), i.isBefore(this.startDate) && (i = this.startDate.clone()), s && i.isAfter(s) && (i = s.clone())), e = '<select class="hourselect">';
                for (var r = this.timePicker24Hour ? 0 : 1, o = this.timePicker24Hour ? 23 : 12, a = r; a <= o; a++) {
                    var l = a;
                    this.timePicker24Hour || (l = 12 <= i.hour() ? 12 == a ? 12 : a + 12 : 12 == a ? 0 : a);
                    var c = i.clone().hour(l), h = !1;
                    n && c.minute(59).isBefore(n) && (h = !0), s && c.minute(0).isAfter(s) && (h = !0), l != i.hour() || h ? e += h ? '<option value="' + a + '" disabled="disabled" class="disabled">' + a + "</option>" : '<option value="' + a + '">' + a + "</option>" : e += '<option value="' + a + '" selected="selected">' + a + "</option>"
                }
                e += "</select> ", e += ': <select class="minuteselect">';
                for (var u, a = 0; a < 60; a += this.timePickerIncrement) {
                    var d = a < 10 ? "0" + a : a, c = i.clone().minute(a), h = !1;
                    n && c.second(59).isBefore(n) && (h = !0), s && c.second(0).isAfter(s) && (h = !0), i.minute() != a || h ? e += h ? '<option value="' + a + '" disabled="disabled" class="disabled">' + d + "</option>" : '<option value="' + a + '">' + d + "</option>" : e += '<option value="' + a + '" selected="selected">' + d + "</option>"
                }
                if (e += "</select> ", this.timePickerSeconds) {
                    for (e += ': <select class="secondselect">', a = 0; a < 60; a++) d = a < 10 ? "0" + a : a, c = i.clone().second(a), h = !1, n && c.isBefore(n) && (h = !0), s && c.isAfter(s) && (h = !0), i.second() != a || h ? e += h ? '<option value="' + a + '" disabled="disabled" class="disabled">' + d + "</option>" : '<option value="' + a + '">' + d + "</option>" : e += '<option value="' + a + '" selected="selected">' + d + "</option>";
                    e += "</select> "
                }
                this.timePicker24Hour || (e += '<select class="ampmselect">', r = u = "", n && i.clone().hour(12).minute(0).second(0).isBefore(n) && (u = ' disabled="disabled" class="disabled"'), s && i.clone().hour(0).minute(0).second(0).isAfter(s) && (r = ' disabled="disabled" class="disabled"'), 12 <= i.hour() ? e += '<option value="AM"' + u + '>AM</option><option value="PM" selected="selected"' + r + ">PM</option>" : e += '<option value="AM" selected="selected"' + u + '>AM</option><option value="PM"' + r + ">PM</option>", e += "</select>"), this.container.find(".drp-calendar." + t + " .calendar-time").html(e)
            }
        }, updateFormInputs: function () {
            this.singleDatePicker || this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)) ? this.container.find("button.applyBtn").prop("disabled", !1) : this.container.find("button.applyBtn").prop("disabled", !0)
        }, move: function () {
            var t, i = {top: 0, left: 0}, n = this.drops, s = e(window).width();
            switch (this.parentEl.is("body") || (i = {top: this.parentEl.offset().top - this.parentEl.scrollTop(), left: this.parentEl.offset().left - this.parentEl.scrollLeft()}, s = this.parentEl[0].clientWidth + this.parentEl.offset().left), n) {
                case"auto":
                    (t = this.element.offset().top + this.element.outerHeight() - i.top) + this.container.outerHeight() >= this.parentEl[0].scrollHeight && (t = this.element.offset().top - this.container.outerHeight() - i.top, n = "up");
                    break;
                case"up":
                    t = this.element.offset().top - this.container.outerHeight() - i.top;
                    break;
                default:
                    t = this.element.offset().top + this.element.outerHeight() - i.top
            }
            this.container.css({top: 0, left: 0, right: "auto"});
            var r, o = this.container.outerWidth();
            this.container.toggleClass("drop-up", "up" == n), "left" == this.opens ? o + (s = s - this.element.offset().left - this.element.outerWidth()) > e(window).width() ? this.container.css({top: t, right: "auto", left: 9}) : this.container.css({top: t, right: s, left: "auto"}) : "center" == this.opens ? (r = this.element.offset().left - i.left + this.element.outerWidth() / 2 - o / 2) < 0 ? this.container.css({top: t, right: "auto", left: 9}) : r + o > e(window).width() ? this.container.css({top: t, left: "auto", right: 0}) : this.container.css({top: t, left: r, right: "auto"}) : (r = this.element.offset().left - i.left) + o > e(window).width() ? this.container.css({top: t, left: "auto", right: 0}) : this.container.css({top: t, left: r, right: "auto"})
        }, show: function (t) {
            this.isShowing || (this._outsideClickProxy = e.proxy(function (t) {
                this.outsideClick(t)
            }, this), e(document).on("mousedown.daterangepicker", this._outsideClickProxy).on("touchend.daterangepicker", this._outsideClickProxy).on("click.daterangepicker", "[data-bs-toggle=dropdown]", this._outsideClickProxy).on("focusin.daterangepicker", this._outsideClickProxy), e(window).on("resize.daterangepicker", e.proxy(function (t) {
                this.move(t)
            }, this)), this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), this.previousRightTime = this.endDate.clone(), this.updateView(), this.container.show(), this.move(), this.element.trigger("show.daterangepicker", this), this.isShowing = !0)
        }, hide: function (t) {
            this.isShowing && (this.endDate || (this.startDate = this.oldStartDate.clone(), this.endDate = this.oldEndDate.clone()), this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate) || this.callback(this.startDate.clone(), this.endDate.clone(), this.chosenLabel), this.updateElement(), e(document).off(".daterangepicker"), e(window).off(".daterangepicker"), this.container.hide(), this.element.trigger("hide.daterangepicker", this), this.isShowing = !1)
        }, toggle: function (t) {
            this.isShowing ? this.hide() : this.show()
        }, outsideClick: function (t) {
            var i = e(t.target);
            "focusin" == t.type || i.closest(this.element).length || i.closest(this.container).length || i.closest(".calendar-table").length || (this.hide(), this.element.trigger("outsideClick.daterangepicker", this))
        }, showCalendars: function () {
            this.container.addClass("show-calendar"), this.move(), this.element.trigger("showCalendar.daterangepicker", this)
        }, hideCalendars: function () {
            this.container.removeClass("show-calendar"), this.element.trigger("hideCalendar.daterangepicker", this)
        }, clickRange: function (t) {
            t = t.target.getAttribute("data-range-key"), (this.chosenLabel = t) == this.locale.customRangeLabel ? this.showCalendars() : (t = this.ranges[t], this.startDate = t[0], this.endDate = t[1], this.timePicker || (this.startDate.startOf("day"), this.endDate.endOf("day")), this.alwaysShowCalendars || this.hideCalendars(), this.clickApply())
        }, clickPrev: function (t) {
            e(t.target).parents(".drp-calendar").hasClass("left") ? (this.leftCalendar.month.subtract(1, "month"), this.linkedCalendars && this.rightCalendar.month.subtract(1, "month")) : this.rightCalendar.month.subtract(1, "month"), this.updateCalendars()
        }, clickNext: function (t) {
            e(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.month.add(1, "month") : (this.rightCalendar.month.add(1, "month"), this.linkedCalendars && this.leftCalendar.month.add(1, "month")), this.updateCalendars()
        }, hoverDate: function (t) {
            var i, n, s, r, o, a;
            e(t.target).hasClass("available") && (i = (n = e(t.target).attr("data-title")).substr(1, 1), n = n.substr(3, 1), s = (e(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar : this.rightCalendar).calendar[i][n], r = this.leftCalendar, o = this.rightCalendar, a = this.startDate, this.endDate || this.container.find(".drp-calendar tbody td").each(function (t, i) {
                var n, l;
                e(i).hasClass("week") || (n = (l = e(i).attr("data-title")).substr(1, 1), l = l.substr(3, 1), (l = (e(i).parents(".drp-calendar").hasClass("left") ? r : o).calendar[n][l]).isAfter(a) && l.isBefore(s) || l.isSame(s, "day") ? e(i).addClass("in-range") : e(i).removeClass("in-range"))
            }))
        }, clickDate: function (t) {
            var i, n, s, r, o, a;
            e(t.target).hasClass("available") && (i = (n = e(t.target).attr("data-title")).substr(1, 1), n = n.substr(3, 1), n = (e(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar : this.rightCalendar).calendar[i][n], this.endDate || n.isBefore(this.startDate, "day") ? (this.timePicker && (s = parseInt(this.container.find(".left .hourselect").val(), 10), this.timePicker24Hour || ("PM" === (r = this.container.find(".left .ampmselect").val()) && s < 12 && (s += 12), "AM" === r && 12 === s && (s = 0)), o = parseInt(this.container.find(".left .minuteselect").val(), 10), isNaN(o) && (o = parseInt(this.container.find(".left .minuteselect option:last").val(), 10)), a = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0, n = n.clone().hour(s).minute(o).second(a)), this.endDate = null, this.setStartDate(n.clone())) : !this.endDate && n.isBefore(this.startDate) ? this.setEndDate(this.startDate.clone()) : (this.timePicker && (s = parseInt(this.container.find(".right .hourselect").val(), 10), this.timePicker24Hour || ("PM" === (r = this.container.find(".right .ampmselect").val()) && s < 12 && (s += 12), "AM" === r && 12 === s && (s = 0)), o = parseInt(this.container.find(".right .minuteselect").val(), 10), isNaN(o) && (o = parseInt(this.container.find(".right .minuteselect option:last").val(), 10)), a = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0, n = n.clone().hour(s).minute(o).second(a)), this.setEndDate(n.clone()), this.autoApply && (this.calculateChosenLabel(), this.clickApply())), this.singleDatePicker && (this.setEndDate(this.startDate), !this.timePicker && this.autoApply && this.clickApply()), this.updateView(), t.stopPropagation())
        }, calculateChosenLabel: function () {
            var t, e = !0, i = 0;
            for (t in this.ranges) {
                if (this.timePicker) {
                    var n = this.timePickerSeconds ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD HH:mm";
                    if (this.startDate.format(n) == this.ranges[t][0].format(n) && this.endDate.format(n) == this.ranges[t][1].format(n)) {
                        e = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + i + ")").addClass("active").attr("data-range-key");
                        break
                    }
                } else if (this.startDate.format("YYYY-MM-DD") == this.ranges[t][0].format("YYYY-MM-DD") && this.endDate.format("YYYY-MM-DD") == this.ranges[t][1].format("YYYY-MM-DD")) {
                    e = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + i + ")").addClass("active").attr("data-range-key");
                    break
                }
                i++
            }
            e && (this.showCustomRangeLabel ? this.chosenLabel = this.container.find(".ranges li:last").addClass("active").attr("data-range-key") : this.chosenLabel = null, this.showCalendars())
        }, clickApply: function (t) {
            this.hide(), this.element.trigger("apply.daterangepicker", this)
        }, clickCancel: function (t) {
            this.startDate = this.oldStartDate, this.endDate = this.oldEndDate, this.hide(), this.element.trigger("cancel.daterangepicker", this)
        }, monthOrYearChanged: function (t) {
            var i = e(t.target).closest(".drp-calendar").hasClass("left"), n = i ? "left" : "right", t = this.container.find(".drp-calendar." + n), n = parseInt(t.find(".monthselect").val(), 10), t = t.find(".yearselect").val();
            i || (t < this.startDate.year() || t == this.startDate.year() && n < this.startDate.month()) && (n = this.startDate.month(), t = this.startDate.year()), this.minDate && (t < this.minDate.year() || t == this.minDate.year() && n < this.minDate.month()) && (n = this.minDate.month(), t = this.minDate.year()), this.maxDate && (t > this.maxDate.year() || t == this.maxDate.year() && n > this.maxDate.month()) && (n = this.maxDate.month(), t = this.maxDate.year()), i ? (this.leftCalendar.month.month(n).year(t), this.linkedCalendars && (this.rightCalendar.month = this.leftCalendar.month.clone().add(1, "month"))) : (this.rightCalendar.month.month(n).year(t), this.linkedCalendars && (this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, "month"))), this.updateCalendars()
        }, timeChanged: function (t) {
            var i = e(t.target).closest(".drp-calendar"), n = i.hasClass("left"), s = parseInt(i.find(".hourselect").val(), 10), r = parseInt(i.find(".minuteselect").val(), 10);
            isNaN(r) && (r = parseInt(i.find(".minuteselect option:last").val(), 10));
            var o, t = this.timePickerSeconds ? parseInt(i.find(".secondselect").val(), 10) : 0;
            this.timePicker24Hour || ("PM" === (i = i.find(".ampmselect").val()) && s < 12 && (s += 12), "AM" === i && 12 === s && (s = 0)), n ? ((o = this.startDate.clone()).hour(s), o.minute(r), o.second(t), this.setStartDate(o), this.singleDatePicker ? this.endDate = this.startDate.clone() : this.endDate && this.endDate.format("YYYY-MM-DD") == o.format("YYYY-MM-DD") && this.endDate.isBefore(o) && this.setEndDate(o.clone())) : this.endDate && ((o = this.endDate.clone()).hour(s), o.minute(r), o.second(t), this.setEndDate(o)), this.updateCalendars(), this.updateFormInputs(), this.renderTimePicker("left"), this.renderTimePicker("right")
        }, elementChanged: function () {
            var e, i, n;
            this.element.is("input") && this.element.val().length && (n = i = null, 2 === (e = this.element.val().split(this.locale.separator)).length && (i = t(e[0], this.locale.format), n = t(e[1], this.locale.format)), (this.singleDatePicker || null === i || null === n) && (n = i = t(this.element.val(), this.locale.format)), i.isValid() && n.isValid() && (this.setStartDate(i), this.setEndDate(n), this.updateView()))
        }, keydown: function (t) {
            9 !== t.keyCode && 13 !== t.keyCode || this.hide(), 27 === t.keyCode && (t.preventDefault(), t.stopPropagation(), this.hide())
        }, updateElement: function () {
            var t;
            this.element.is("input") && this.autoUpdateInput && (t = this.startDate.format(this.locale.format), this.singleDatePicker || (t += this.locale.separator + this.endDate.format(this.locale.format)), t !== this.element.val() && this.element.val(t).trigger("change"))
        }, remove: function () {
            this.container.remove(), this.element.off(".daterangepicker"), this.element.removeData()
        }
    }, e.fn.daterangepicker = function (t, n) {
        var s = e.extend(!0, {}, e.fn.daterangepicker.defaultOptions, t);
        return this.each(function () {
            var t = e(this);
            t.data("daterangepicker") && t.data("daterangepicker").remove(), t.data("daterangepicker", new i(t, s, n))
        }), this
    }, i
}),/*! Quantity input incrementer */ $(".qtyplus").on("click", function (t) {
    t.preventDefault(), fieldName = $(this).attr("name"), t = parseInt($("input[name=" + fieldName + "]").val()), isNaN(t) ? $("input[name=" + fieldName + "]").val(0) : $("input[name=" + fieldName + "]").val(t + 1)
}), $(".qtyminus").on("click", function (t) {
    t.preventDefault(), fieldName = $(this).attr("name"), t = parseInt($("input[name=" + fieldName + "]").val()), !isNaN(t) && 0 < t ? $("input[name=" + fieldName + "]").val(t - 1) : $("input[name=" + fieldName + "]").val(0)
}), function (t) {
    function e() {
    }

    function i(t) {
        if (t) {
            var i = "undefined" == typeof console ? e : function (t) {
                console.error(t)
            };
            return t.bridget = function (e, s) {
                var r, o, a;
                (r = s).prototype.option || (r.prototype.option = function (e) {
                    t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
                }), o = e, a = s, t.fn[o] = function (e) {
                    if ("string" == typeof e) {
                        for (var s = n.call(arguments, 1), r = 0, l = this.length; l > r; r++) {
                            var c = this[r], h = t.data(c, o);
                            if (h) {
                                if (t.isFunction(h[e]) && "_" !== e.charAt(0)) {
                                    var u = h[e].apply(h, s);
                                    if (void 0 !== u) return u
                                } else i("no such method '" + e + "' for " + o + " instance")
                            } else i("cannot call methods on " + o + " prior to initialization; attempted to call '" + e + "'")
                        }
                        return this
                    }
                    return this.each(function () {
                        var i = t.data(this, o);
                        i ? (i.option(e), i._init()) : (i = new a(this, e), t.data(this, o, i))
                    })
                }
            }, t.bridget
        }
    }

    var n = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i("object" == typeof exports ? require("jquery") : t.jQuery)
}(window), function (t) {
    function e(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e, i
    }

    var i = document.documentElement, n = function () {
    };
    i.addEventListener ? n = function (t, e, i) {
        t.addEventListener(e, i, !1)
    } : i.attachEvent && (n = function (t, i, n) {
        t[i + n] = n.handleEvent ? function () {
            var i = e(t);
            n.handleEvent.call(n, i)
        } : function () {
            var i = e(t);
            n.call(t, i)
        }, t.attachEvent("on" + i, t[i + n])
    });
    var s = function () {
    };
    i.removeEventListener ? s = function (t, e, i) {
        t.removeEventListener(e, i, !1)
    } : i.detachEvent && (s = function (t, e, i) {
        t.detachEvent("on" + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (n) {
            t[e + i] = void 0
        }
    });
    var r = {bind: n, unbind: s};
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(window), (function () {
    "use strict";

    function t() {
    }

    function e(t, e) {
        for (var i = t.length; i--;) if (t[i].listener === e) return i;
        return -1
    }

    function i(t) {
        return function () {
            return this[t].apply(this, arguments)
        }
    }

    var n = t.prototype, s = this, r = s.EventEmitter;
    n.getListeners = function (t) {
        var e, i, n = this._getEvents();
        if (t instanceof RegExp) for (i in e = {}, n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i]); else e = n[t] || (n[t] = []);
        return e
    }, n.flattenListeners = function (t) {
        var e, i = [];
        for (e = 0; e < t.length; e += 1) i.push(t[e].listener);
        return i
    }, n.getListenersAsObject = function (t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && ((e = {})[t] = i), e || i
    }, n.addListener = function (t, i) {
        var n, s = this.getListenersAsObject(t), r = "object" == typeof i;
        for (n in s) s.hasOwnProperty(n) && -1 === e(s[n], i) && s[n].push(r ? i : {listener: i, once: !1});
        return this
    }, n.on = i("addListener"), n.addOnceListener = function (t, e) {
        return this.addListener(t, {listener: e, once: !0})
    }, n.once = i("addOnceListener"), n.defineEvent = function (t) {
        return this.getListeners(t), this
    }, n.defineEvents = function (t) {
        for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
        return this
    }, n.removeListener = function (t, i) {
        var n, s, r = this.getListenersAsObject(t);
        for (s in r) r.hasOwnProperty(s) && -1 !== (n = e(r[s], i)) && r[s].splice(n, 1);
        return this
    }, n.off = i("removeListener"), n.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e)
    }, n.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e)
    }, n.manipulateListeners = function (t, e, i) {
        var n, s, r = t ? this.removeListener : this.addListener, o = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp) for (n = i.length; n--;) r.call(this, e, i[n]); else for (n in e) e.hasOwnProperty(n) && (s = e[n]) && ("function" == typeof s ? r.call(this, n, s) : o.call(this, n, s));
        return this
    }, n.removeEvent = function (t) {
        var e, i = this._getEvents();
        if ("string" == typeof t) delete i[t]; else if (t instanceof RegExp) for (e in i) i.hasOwnProperty(e) && t.test(e) && delete i[e]; else delete this._events;
        return this
    }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function (t, e) {
        var i, n, s, r, o = this.getListenersAsObject(t);
        for (s in o) if (o.hasOwnProperty(s)) for (n = o[s].length; n--;) !0 === (i = o[s][n]).once && this.removeListener(t, i.listener), (r = i.listener.apply(this, e || [])) === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, n.trigger = i("emitEvent"), n.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, n.setOnceReturnValue = function (t) {
        return this._onceReturnValue = t, this
    }, n._getOnceReturnValue = function () {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
    }, n._getEvents = function () {
        return this._events || (this._events = {})
    }, t.noConflict = function () {
        return s.EventEmitter = r, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : s.EventEmitter = t
}).call(this), function (t) {
    function e(t) {
        if (t) {
            if ("string" == typeof n[t]) return t;
            t = t.charAt(0).toUpperCase() + t.slice(1);
            for (var e, s = 0, r = i.length; r > s; s++) if ("string" == typeof n[e = i[s] + t]) return e
        }
    }

    var i = "Webkit Moz ms Ms O".split(" "), n = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
        return e
    }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window), function (t, e) {
    function i(t) {
        var e = parseFloat(t);
        return -1 === t.indexOf("%") && !isNaN(e) && e
    }

    function n(e) {
        function n(e, i) {
            if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
            var n = e.style, s = n.left, r = e.runtimeStyle, o = r && r.left;
            return o && (r.left = e.currentStyle.left), n.left = i, i = n.pixelLeft, n.left = s, o && (r.left = o), i
        }

        var o, a, l, c = !1;
        return function h(u) {
            if (function n() {
                if (!c) {
                    c = !0;
                    var r, h = t.getComputedStyle;
                    if (o = (r = h ? function (t) {
                        return h(t, null)
                    } : function (t) {
                        return t.currentStyle
                    }, function (t) {
                        var e = r(t);
                        return e || s("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
                    }), a = e("boxSizing")) {
                        var u = document.createElement("div");
                        u.style.width = "200px", u.style.padding = "1px 2px 3px 4px", u.style.borderStyle = "solid", u.style.borderWidth = "1px 2px 3px 4px", u.style[a] = "border-box";
                        var d = document.body || document.documentElement;
                        d.appendChild(u), l = 200 === i(o(u).width), d.removeChild(u)
                    }
                }
            }(), "string" == typeof u && (u = document.querySelector(u)), u && "object" == typeof u && u.nodeType) {
                var d = o(u);
                if ("none" === d.display) return function t() {
                    for (var e = {width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0}, i = 0, n = r.length; n > i; i++) e[r[i]] = 0;
                    return e
                }();
                var p = {};
                p.width = u.offsetWidth, p.height = u.offsetHeight;
                for (var f = p.isBorderBox = !(!a || !d[a] || "border-box" !== d[a]), m = 0, g = r.length; g > m; m++) {
                    var y = r[m], v = d[y];
                    v = n(u, v);
                    var b = parseFloat(v);
                    p[y] = isNaN(b) ? 0 : b
                }
                var _ = p.paddingLeft + p.paddingRight, w = p.paddingTop + p.paddingBottom, x = p.marginLeft + p.marginRight, k = p.marginTop + p.marginBottom, D = p.borderLeftWidth + p.borderRightWidth, C = p.borderTopWidth + p.borderBottomWidth, S = f && l, T = i(d.width);
                !1 !== T && (p.width = T + (S ? 0 : _ + D));
                var E = i(d.height);
                return !1 !== E && (p.height = E + (S ? 0 : w + C)), p.innerWidth = p.width - (_ + D), p.innerHeight = p.height - (w + C), p.outerWidth = p.width + x, p.outerHeight = p.height + k, p
            }
        }
    }

    var s = "undefined" == typeof console ? function t() {
    } : function (t) {
        console.error(t)
    }, r = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], n) : "object" == typeof exports ? module.exports = n(require("desandro-get-style-property")) : t.getSize = n(t.getStyleProperty)
}(window), function (t) {
    function e(t) {
        "function" == typeof t && (e.isReady ? t() : o.push(t))
    }

    function i(t) {
        var i = "readystatechange" === t.type && "complete" !== r.readyState;
        e.isReady || i || n()
    }

    function n() {
        e.isReady = !0;
        for (var t = 0, i = o.length; i > t; t++) (0, o[t])()
    }

    function s(s) {
        return "complete" === r.readyState ? n() : (s.bind(r, "DOMContentLoaded", i), s.bind(r, "readystatechange", i), s.bind(t, "load", i)), e
    }

    var r = t.document, o = [];
    e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], s) : "object" == typeof exports ? module.exports = s(require("eventie")) : t.docReady = s(t.eventie)
}(window), function (t) {
    "use strict";

    function e(t, e) {
        return t[s](e)
    }

    function i(t) {
        !t.parentNode && document.createDocumentFragment().appendChild(t)
    }

    var n, s = function () {
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length; n > i; i++) {
            var s = e[i] + "MatchesSelector";
            if (t[s]) return s
        }
    }();
    n = s ? e(document.createElement("div"), "div") ? e : function t(n, s) {
        return i(n), e(n, s)
    } : function t(e, n) {
        i(e);
        for (var s = e.parentNode.querySelectorAll(n), r = 0, o = s.length; o > r; r++) if (s[r] === e) return !0;
        return !1
    }, "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
        return n
    }) : "object" == typeof exports ? module.exports = n : window.matchesSelector = n
}(Element.prototype), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function (i, n) {
        return e(t, i, n)
    }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
}(window, function (t, e, i) {
    var n = {};
    n.extend = function (t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }, n.modulo = function (t, e) {
        return (t % e + e) % e
    };
    var s, r = Object.prototype.toString;
    n.isArray = function (t) {
        return "[object Array]" == r.call(t)
    }, n.makeArray = function (t) {
        var e = [];
        if (n.isArray(t)) e = t; else if (t && "number" == typeof t.length) for (var i = 0, s = t.length; s > i; i++) e.push(t[i]); else e.push(t);
        return e
    }, n.indexOf = Array.prototype.indexOf ? function (t, e) {
        return t.indexOf(e)
    } : function (t, e) {
        for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return i;
        return -1
    }, n.removeFrom = function (t, e) {
        var i = n.indexOf(t, e);
        -1 != i && t.splice(i, 1)
    }, n.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (t) {
        return t instanceof HTMLElement
    } : function (t) {
        return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName
    }, n.setText = function t(e, i) {
        e[s = s || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText")] = i
    }, n.getParent = function (t, e) {
        for (; t != document.body;) if (i(t = t.parentNode, e)) return t
    }, n.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, n.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, n.filterFindElements = function (t, e) {
        t = n.makeArray(t);
        for (var s = [], r = 0, o = t.length; o > r; r++) {
            var a = t[r];
            if (n.isElement(a)) {
                if (e) {
                    i(a, e) && s.push(a);
                    for (var l = a.querySelectorAll(e), c = 0, h = l.length; h > c; c++) s.push(l[c])
                } else s.push(a)
            }
        }
        return s
    }, n.debounceMethod = function (t, e, i) {
        var n = t.prototype[e], s = e + "Timeout";
        t.prototype[e] = function () {
            var t = this[s];
            t && clearTimeout(t);
            var e = arguments, r = this;
            this[s] = setTimeout(function () {
                n.apply(r, e), delete r[s]
            }, i || 100)
        }
    }, n.toDashed = function (t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var o = t.console;
    return n.htmlInit = function (i, s) {
        e(function () {
            for (var e = n.toDashed(s), r = document.querySelectorAll(".js-" + e), a = "data-" + e + "-options", l = 0, c = r.length; c > l; l++) {
                var h, u = r[l], d = u.getAttribute(a);
                try {
                    h = d && JSON.parse(d)
                } catch (p) {
                    o && o.error("Error parsing " + a + " on " + u.nodeName.toLowerCase() + (u.id ? "#" + u.id : "") + ": " + p);
                    continue
                }
                var f = new i(u, h), m = t.jQuery;
                m && m.data(u, s, f)
            }
        })
    }, n
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function (i, n, s, r) {
        return e(t, i, n, s, r)
    }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Outlayer = {}, t.Outlayer.Item = e(t, t.EventEmitter, t.getSize, t.getStyleProperty, t.fizzyUIUtils))
}(window, function (t, e, i, n, s) {
    "use strict";

    function r(t, e) {
        t && (this.element = t, this.layout = e, this.position = {x: 0, y: 0}, this._create())
    }

    var o, a = t.getComputedStyle, l = a ? function (t) {
        return a(t, null)
    } : function (t) {
        return t.currentStyle
    }, c = n("transition"), h = n("transform"), u = !!n("perspective"), d = {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend", transition: "transitionend"}[c], p = ["transform", "transition", "transitionDuration", "transitionProperty"], f = function () {
        for (var t = {}, e = 0, i = p.length; i > e; e++) {
            var s = p[e], r = n(s);
            r && r !== s && (t[s] = r)
        }
        return t
    }();
    s.extend(r.prototype, e.prototype), r.prototype._create = function () {
        this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
    }, r.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, r.prototype.getSize = function () {
        this.size = i(this.element)
    }, r.prototype.css = function (t) {
        var e = this.element.style;
        for (var i in t) e[f[i] || i] = t[i]
    }, r.prototype.getPosition = function () {
        var t = l(this.element), e = this.layout.options, i = e.isOriginLeft, n = e.isOriginTop, s = t[i ? "left" : "right"], r = t[n ? "top" : "bottom"], o = this.layout.size, a = -1 != s.indexOf("%") ? parseFloat(s) / 100 * o.width : parseInt(s, 10), c = -1 != r.indexOf("%") ? parseFloat(r) / 100 * o.height : parseInt(r, 10);
        a = isNaN(a) ? 0 : a, c = isNaN(c) ? 0 : c, a -= i ? o.paddingLeft : o.paddingRight, c -= n ? o.paddingTop : o.paddingBottom, this.position.x = a, this.position.y = c
    }, r.prototype.layoutPosition = function () {
        var t = this.layout.size, e = this.layout.options, i = {}, n = e.isOriginLeft ? "paddingLeft" : "paddingRight", s = e.isOriginLeft ? "left" : "right", r = e.isOriginLeft ? "right" : "left", o = this.position.x + t[n];
        i[s] = this.getXValue(o), i[r] = "";
        var a = e.isOriginTop ? "paddingTop" : "paddingBottom", l = e.isOriginTop ? "top" : "bottom", c = e.isOriginTop ? "bottom" : "top", h = this.position.y + t[a];
        i[l] = this.getYValue(h), i[c] = "", this.css(i), this.emitEvent("layout", [this])
    }, r.prototype.getXValue = function (t) {
        var e = this.layout.options;
        return e.percentPosition && !e.isHorizontal ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, r.prototype.getYValue = function (t) {
        var e = this.layout.options;
        return e.percentPosition && e.isHorizontal ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, r.prototype._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x, n = this.position.y, s = parseInt(t, 10), r = parseInt(e, 10), o = s === this.position.x && r === this.position.y;
        if (this.setPosition(t, e), o && !this.isTransitioning) return void this.layoutPosition();
        var a = {};
        a.transform = this.getTranslate(t - i, e - n), this.transition({to: a, onTransitionEnd: {transform: this.layoutPosition}, isCleaning: !0})
    }, r.prototype.getTranslate = function (t, e) {
        var i = this.layout.options;
        return t = i.isOriginLeft ? t : -t, e = i.isOriginTop ? e : -e, u ? "translate3d(" + t + "px, " + e + "px, 0)" : "translate(" + t + "px, " + e + "px)"
    }, r.prototype.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, r.prototype.moveTo = c && h ? r.prototype._transitionTo : r.prototype.goTo, r.prototype.setPosition = function (t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
    }, r.prototype._nonTransition = function (t) {
        for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, r.prototype._transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var n = this.element.offsetHeight;
            n = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var m = "opacity," + (o = f.transform || "transform").replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase()
    });
    r.prototype.enableTransition = function () {
        this.isTransitioning || (this.css({transitionProperty: m, transitionDuration: this.layout.options.transitionDuration}), this.element.addEventListener(d, this, !1))
    }, r.prototype.transition = r.prototype[c ? "_transition" : "_nonTransition"], r.prototype.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t)
    }, r.prototype.onotransitionend = function (t) {
        this.ontransitionend(t)
    };
    var g = {"-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform"};
    r.prototype.ontransitionend = function (t) {
        if (t.target === this.element) {
            var e = this._transn, i = g[t.propertyName] || t.propertyName;
            delete e.ingProperties[i], function t(e) {
                for (var i in e) return !1;
                return i = null, !0
            }(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd && (e.onEnd[i].call(this), delete e.onEnd[i]), this.emitEvent("transitionEnd", [this])
        }
    }, r.prototype.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(d, this, !1), this.isTransitioning = !1
    }, r.prototype._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var y = {transitionProperty: "", transitionDuration: ""};
    return r.prototype.removeTransitionStyles = function () {
        this.css(y)
    }, r.prototype.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({display: ""}), this.emitEvent("remove", [this])
    }, r.prototype.remove = function () {
        if (!c || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
        var t = this;
        this.once("transitionEnd", function () {
            t.removeElem()
        }), this.hide()
    }, r.prototype.reveal = function () {
        delete this.isHidden, this.css({display: ""});
        var t = this.layout.options, e = {};
        e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e})
    }, r.prototype.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal")
    }, r.prototype.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, r.prototype.hide = function () {
        this.isHidden = !0, this.css({display: ""});
        var t = this.layout.options, e = {};
        e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e})
    }, r.prototype.onHideTransitionEnd = function () {
        this.isHidden && (this.css({display: "none"}), this.emitEvent("hide"))
    }, r.prototype.destroy = function () {
        this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
    }, r
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, n, s, r, o) {
        return e(t, i, n, s, r, o)
    }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.eventie, t.EventEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function (t, e, i, n, s, r) {
    "use strict";

    function o(t, e) {
        var i = s.getQueryElement(t);
        if (!i) return void (a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, l && (this.$element = l(this.element)), this.options = s.extend({}, this.constructor.defaults), this.option(e);
        var n = ++h;
        this.element.outlayerGUID = n, u[n] = this, this._create(), this.options.isInitLayout && this.layout()
    }

    var a = t.console, l = t.jQuery, c = function () {
    }, h = 0, u = {};
    return o.namespace = "outlayer", o.Item = r, o.defaults = {containerStyle: {position: "relative"}, isInitLayout: !0, isOriginLeft: !0, isOriginTop: !0, isResizeBound: !0, isResizingContainer: !0, transitionDuration: "0.4s", hiddenStyle: {opacity: 0, transform: "scale(0.001)"}, visibleStyle: {opacity: 1, transform: "scale(1)"}}, s.extend(o.prototype, i.prototype), o.prototype.option = function (t) {
        s.extend(this.options, t)
    }, o.prototype._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), s.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
    }, o.prototype.reloadItems = function () {
        this.items = this._itemize(this.element.children)
    }, o.prototype._itemize = function (t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], s = 0, r = e.length; r > s; s++) {
            var o = e[s], a = new i(o, this);
            n.push(a)
        }
        return n
    }, o.prototype._filterFindItemElements = function (t) {
        return s.filterFindElements(t, this.options.itemSelector)
    }, o.prototype.getItemElements = function () {
        for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
        return t
    }, o.prototype.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, t), this._isLayoutInited = !0
    }, o.prototype._init = o.prototype.layout, o.prototype._resetLayout = function () {
        this.getSize()
    }, o.prototype.getSize = function () {
        this.size = n(this.element)
    }, o.prototype._getMeasurement = function (t, e) {
        var i, r = this.options[t];
        r ? ("string" == typeof r ? i = this.element.querySelector(r) : s.isElement(r) && (i = r), this[t] = i ? n(i)[e] : r) : this[t] = 0
    }, o.prototype.layoutItems = function (t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, o.prototype._getItemsForLayout = function (t) {
        for (var e = [], i = 0, n = t.length; n > i; i++) {
            var s = t[i];
            s.isIgnored || e.push(s)
        }
        return e
    }, o.prototype._layoutItems = function (t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            for (var i = [], n = 0, s = t.length; s > n; n++) {
                var r = t[n], o = this._getItemLayoutPosition(r);
                o.item = r, o.isInstant = e || r.isLayoutInstant, i.push(o)
            }
            this._processLayoutQueue(i)
        }
    }, o.prototype._getItemLayoutPosition = function () {
        return {x: 0, y: 0}
    }, o.prototype._processLayoutQueue = function (t) {
        for (var e = 0, i = t.length; i > e; e++) {
            var n = t[e];
            this._positionItem(n.item, n.x, n.y, n.isInstant)
        }
    }, o.prototype._positionItem = function (t, e, i, n) {
        n ? t.goTo(e, i) : t.moveTo(e, i)
    }, o.prototype._postLayout = function () {
        this.resizeContainer()
    }, o.prototype.resizeContainer = function () {
        if (this.options.isResizingContainer) {
            var t = this._getContainerSize();
            t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
        }
    }, o.prototype._getContainerSize = c, o.prototype._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, o.prototype._emitCompleteOnItems = function (t, e) {
        function i() {
            s.dispatchEvent(t + "Complete", null, [e])
        }

        function n() {
            ++o === r && i()
        }

        var s = this, r = e.length;
        if (!e || !r) return void i();
        for (var o = 0, a = 0, l = e.length; l > a; a++) e[a].once(t, n)
    }, o.prototype.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), l) {
            if (this.$element = this.$element || l(this.element), e) {
                var s = l.Event(e);
                s.type = t, this.$element.trigger(s, i)
            } else this.$element.trigger(t, i)
        }
    }, o.prototype.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, o.prototype.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, o.prototype.stamp = function (t) {
        if (t = this._find(t)) {
            this.stamps = this.stamps.concat(t);
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                this.ignore(n)
            }
        }
    }, o.prototype.unstamp = function (t) {
        if (t = this._find(t)) for (var e = 0, i = t.length; i > e; e++) {
            var n = t[e];
            s.removeFrom(this.stamps, n), this.unignore(n)
        }
    }, o.prototype._find = function (t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = s.makeArray(t)) : void 0
    }, o.prototype._manageStamps = function () {
        if (this.stamps && this.stamps.length) {
            this._getBoundingRect();
            for (var t = 0, e = this.stamps.length; e > t; t++) {
                var i = this.stamps[t];
                this._manageStamp(i)
            }
        }
    }, o.prototype._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(), e = this.size;
        this._boundingRect = {left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)}
    }, o.prototype._manageStamp = c, o.prototype._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(), i = this._boundingRect, s = n(t);
        return {left: e.left - i.left - s.marginLeft, top: e.top - i.top - s.marginTop, right: i.right - e.right - s.marginRight, bottom: i.bottom - e.bottom - s.marginBottom}
    }, o.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, o.prototype.bindResize = function () {
        this.isResizeBound || (e.bind(t, "resize", this), this.isResizeBound = !0)
    }, o.prototype.unbindResize = function () {
        this.isResizeBound && e.unbind(t, "resize", this), this.isResizeBound = !1
    }, o.prototype.onresize = function () {
        this.resizeTimeout && clearTimeout(this.resizeTimeout);
        var t = this;
        this.resizeTimeout = setTimeout(function e() {
            t.resize(), delete t.resizeTimeout
        }, 100)
    }, o.prototype.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, o.prototype.needsResizeLayout = function () {
        var t = n(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth
    }, o.prototype.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, o.prototype.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, o.prototype.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, o.prototype.reveal = function (t) {
        this._emitCompleteOnItems("reveal", t);
        for (var e = t && t.length, i = 0; e && e > i; i++) t[i].reveal()
    }, o.prototype.hide = function (t) {
        this._emitCompleteOnItems("hide", t);
        for (var e = t && t.length, i = 0; e && e > i; i++) t[i].hide()
    }, o.prototype.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, o.prototype.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e)
    }, o.prototype.getItem = function (t) {
        for (var e = 0, i = this.items.length; i > e; e++) {
            var n = this.items[e];
            if (n.element === t) return n
        }
    }, o.prototype.getItems = function (t) {
        t = s.makeArray(t);
        for (var e = [], i = 0, n = t.length; n > i; i++) {
            var r = t[i], o = this.getItem(r);
            o && e.push(o)
        }
        return e
    }, o.prototype.remove = function (t) {
        var e = this.getItems(t);
        if (this._emitCompleteOnItems("remove", e), e && e.length) for (var i = 0, n = e.length; n > i; i++) {
            var r = e[i];
            r.remove(), s.removeFrom(this.items, r)
        }
    }, o.prototype.destroy = function () {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "";
        for (var e = 0, i = this.items.length; i > e; e++) this.items[e].destroy();
        this.unbindResize(), delete u[this.element.outlayerGUID], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
    }, o.data = function (t) {
        var e = (t = s.getQueryElement(t)) && t.outlayerGUID;
        return e && u[e]
    }, o.create = function (t, e) {
        function i() {
            o.apply(this, arguments)
        }

        return Object.create ? i.prototype = Object.create(o.prototype) : s.extend(i.prototype, o.prototype), i.prototype.constructor = i, i.defaults = s.extend({}, o.defaults), s.extend(i.defaults, e), i.prototype.settings = {}, i.namespace = t, i.data = o.data, i.Item = function () {
            r.apply(this, arguments)
        }, i.Item.prototype = new r, s.htmlInit(i, t), l && l.bridget && l.bridget(t, i), i
    }, o.Item = r, o
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function (t) {
    "use strict";

    function e() {
        t.Item.apply(this, arguments)
    }

    e.prototype = new t.Item, e.prototype._create = function () {
        this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
    }, e.prototype.updateSortData = function () {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData, e = this.layout._sorters;
            for (var i in t) {
                var n = e[i];
                this.sortData[i] = n(this.element, this)
            }
        }
    };
    var i = e.prototype.destroy;
    return e.prototype.destroy = function () {
        i.apply(this, arguments), this.css({display: ""})
    }, e
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function (t, e) {
    "use strict";

    function i(t) {
        this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }

    return function () {
        function t(t) {
            return function () {
                return e.prototype[t].apply(this.isotope, arguments)
            }
        }

        for (var n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], s = 0, r = n.length; r > s; s++) {
            var o = n[s];
            i.prototype[o] = t(o)
        }
    }(), i.prototype.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element);
        return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight
    }, i.prototype._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments)
    }, i.prototype.getColumnWidth = function () {
        this.getSegmentSize("column", "Width")
    }, i.prototype.getRowHeight = function () {
        this.getSegmentSize("row", "Height")
    }, i.prototype.getSegmentSize = function (t, e) {
        var i = t + e, n = "outer" + e;
        if (this._getMeasurement(i, n), !this[i]) {
            var s = this.getFirstItemSize();
            this[i] = s && s[n] || this.isotope.size["inner" + e]
        }
    }, i.prototype.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }, i.prototype.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments)
    }, i.prototype.getSize = function () {
        this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function (t, e) {
        function n() {
            i.apply(this, arguments)
        }

        return n.prototype = new i, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
    }, i
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : t.Masonry = e(t.Outlayer, t.getSize, t.fizzyUIUtils)
}(window, function (t, e, i) {
    var n = t.create("masonry");
    return n.prototype._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
        var t = this.cols;
        for (this.colYs = []; t--;) this.colYs.push(0);
        this.maxY = 0
    }, n.prototype.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0], i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter, s = this.containerWidth + this.gutter, r = s / n, o = n - s % n;
        r = Math[o && 1 > o ? "round" : "floor"](r), this.cols = Math.max(r, 1)
    }, n.prototype.getContainerWidth = function () {
        var t = e(this.options.isFitWidth ? this.element.parentNode : this.element);
        this.containerWidth = t && t.innerWidth
    }, n.prototype._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth, n = Math[e && 1 > e ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (var s = this._getColGroup(n), r = Math.min.apply(Math, s), o = i.indexOf(s, r), a = {x: this.columnWidth * o, y: r}, l = r + t.size.outerHeight, c = this.cols + 1 - s.length, h = 0; c > h; h++) this.colYs[o + h] = l;
        return a
    }, n.prototype._getColGroup = function (t) {
        if (2 > t) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
            var s = this.colYs.slice(n, n + t);
            e[n] = Math.max.apply(Math, s)
        }
        return e
    }, n.prototype._manageStamp = function (t) {
        var i = e(t), n = this._getElementOffset(t), s = this.options.isOriginLeft ? n.left : n.right, r = s + i.outerWidth, o = Math.floor(s / this.columnWidth);
        o = Math.max(0, o);
        var a = Math.floor(r / this.columnWidth);
        a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
        for (var l = (this.options.isOriginTop ? n.top : n.bottom) + i.outerHeight, c = o; a >= c; c++) this.colYs[c] = Math.max(l, this.colYs[c])
    }, n.prototype._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {height: this.maxY};
        return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
    }, n.prototype._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, n.prototype.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t !== this.containerWidth
    }, n
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"), n = i.prototype._getElementOffset, s = i.prototype.layout, r = i.prototype._getMeasurement;
    (function t(e, i) {
        for (var n in i) e[n] = i[n];
        return e
    })(i.prototype, e.prototype), i.prototype._getElementOffset = n, i.prototype.layout = s, i.prototype._getMeasurement = r;
    var o = i.prototype.measureColumns;
    i.prototype.measureColumns = function () {
        this.items = this.isotope.filteredItems, o.call(this)
    };
    var a = i.prototype._manageStamp;
    return i.prototype._manageStamp = function () {
        this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, a.apply(this, arguments)
    }, i
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
    "use strict";
    var e = t.create("fitRows");
    return e.prototype._resetLayout = function () {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, e.prototype._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter, i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var n = {x: this.x, y: this.y};
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
    }, e.prototype._getContainerSize = function () {
        return {height: this.maxY}
    }, e
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
    "use strict";
    var e = t.create("vertical", {horizontalAlignment: 0});
    return e.prototype._resetLayout = function () {
        this.y = 0
    }, e.prototype._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment, i = this.y;
        return this.y += t.size.outerHeight, {x: e, y: i}
    }, e.prototype._getContainerSize = function () {
        return {height: this.y}
    }, e
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function (i, n, s, r, o, a) {
        return e(t, i, n, s, r, o, a)
    }) : "object" == typeof exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function (t, e, i, n, s, r, o) {
    var a = t.jQuery, l = String.prototype.trim ? function (t) {
        return t.trim()
    } : function (t) {
        return t.replace(/^\s+|\s+$/g, "")
    }, c = document.documentElement.textContent ? function (t) {
        return t.textContent
    } : function (t) {
        return t.innerText
    }, h = e.create("isotope", {layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0});
    h.Item = r, h.LayoutMode = o, h.prototype._create = function () {
        for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], o.modes) this._initLayoutMode(t)
    }, h.prototype.reloadItems = function () {
        this.itemGUID = 0, e.prototype.reloadItems.call(this)
    }, h.prototype._itemize = function () {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0, n = t.length; n > i; i++) t[i].id = this.itemGUID++;
        return this._updateItemsSortData(t), t
    }, h.prototype._initLayoutMode = function (t) {
        var e = o.modes[t], i = this.options[t] || {};
        this.options[t] = e.options ? s.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, h.prototype.layout = function () {
        return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
    }, h.prototype._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, h.prototype.arrange = function (t) {
        function e() {
            n.reveal(i.needReveal), n.hide(i.needHide)
        }

        this.option(t), this._getIsInstant();
        var i = this._filter(this.items);
        this.filteredItems = i.matches;
        var n = this;
        this._bindArrangeComplete(), this._isInstant ? this._noTransition(e) : e(), this._sort(), this._layout()
    }, h.prototype._init = h.prototype.arrange, h.prototype._getIsInstant = function () {
        var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        return this._isInstant = t, t
    }, h.prototype._bindArrangeComplete = function () {
        function t() {
            e && i && n && s.dispatchEvent("arrangeComplete", null, [s.filteredItems])
        }

        var e, i, n, s = this;
        this.once("layoutComplete", function () {
            e = !0, t()
        }), this.once("hideComplete", function () {
            i = !0, t()
        }), this.once("revealComplete", function () {
            n = !0, t()
        })
    }, h.prototype._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], n = [], s = [], r = this._getFilterTest(e), o = 0, a = t.length; a > o; o++) {
            var l = t[o];
            if (!l.isIgnored) {
                var c = r(l);
                c && i.push(l), c && l.isHidden ? n.push(l) : c || l.isHidden || s.push(l)
            }
        }
        return {matches: i, needReveal: n, needHide: s}
    }, h.prototype._getFilterTest = function (t) {
        return a && this.options.isJQueryFiltering ? function (e) {
            return a(e.element).is(t)
        } : "function" == typeof t ? function (e) {
            return t(e.element)
        } : function (e) {
            return n(e.element, t)
        }
    }, h.prototype.updateSortData = function (t) {
        var e;
        t ? (t = s.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
    }, h.prototype._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = u(i)
        }
    }, h.prototype._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && e > i; i++) t[i].updateSortData()
    };
    var u = function t(e) {
        if ("string" != typeof e) return e;
        var i, n, s, r = l(e).split(" "), o = r[0], a = o.match(/^\[(.+)\]$/), u = (i = a && a[1], n = o, i ? function (t) {
            return t.getAttribute(i)
        } : function (t) {
            var e = t.querySelector(n);
            return e && c(e)
        }), d = h.sortDataParsers[r[1]];
        return e = d ? function (t) {
            return t && d(u(t))
        } : function (t) {
            return t && u(t)
        }
    };
    h.sortDataParsers = {
        parseInt: function (t) {
            return parseInt(t, 10)
        }, parseFloat: function (t) {
            return parseFloat(t)
        }
    }, h.prototype._sort = function () {
        var t = this.options.sortBy;
        if (t) {
            var e, i, n = (e = [].concat.apply(t, this.sortHistory), i = this.options.sortAscending, function (t, n) {
                for (var s = 0, r = e.length; r > s; s++) {
                    var o = e[s], a = t.sortData[o], l = n.sortData[o];
                    if (a > l || l > a) return (a > l ? 1 : -1) * ((void 0 !== i[o] ? i[o] : i) ? 1 : -1)
                }
                return 0
            });
            this.filteredItems.sort(n), t != this.sortHistory[0] && this.sortHistory.unshift(t)
        }
    }, h.prototype._mode = function () {
        var t = this.options.layoutMode, e = this.modes[t];
        if (!e) throw Error("No layout mode: " + t);
        return e.options = this.options[t], e
    }, h.prototype._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, h.prototype._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t)
    }, h.prototype._manageStamp = function (t) {
        this._mode()._manageStamp(t)
    }, h.prototype._getContainerSize = function () {
        return this._mode()._getContainerSize()
    }, h.prototype.needsResizeLayout = function () {
        return this._mode().needsResizeLayout()
    }, h.prototype.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, h.prototype.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
        }
    }, h.prototype._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
    }, h.prototype.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, n, s = e.length;
            for (i = 0; s > i; i++) n = e[i], this.element.appendChild(n.element);
            var r = this._filter(e).matches;
            for (i = 0; s > i; i++) e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; s > i; i++) delete e[i].isLayoutInstant;
            this.reveal(r)
        }
    };
    var d = h.prototype.remove;
    return h.prototype.remove = function (t) {
        t = s.makeArray(t);
        var e = this.getItems(t);
        d.call(this, t);
        var i = e && e.length;
        if (i) for (var n = 0; i > n; n++) {
            var r = e[n];
            s.removeFrom(this.filteredItems, r)
        }
    }, h.prototype.shuffle = function () {
        for (var t = 0, e = this.items.length; e > t; t++) this.items[t].sortData.random = Math.random();
        this.options.sortBy = "random", this._sort(), this._layout()
    }, h.prototype._noTransition = function (t) {
        var e = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var i = t.call(this);
        return this.options.transitionDuration = e, i
    }, h.prototype.getFilteredItemElements = function () {
        for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++) t.push(this.filteredItems[e].element);
        return t
    }, h
}),/*! Error page */ gsap.set("svg", {visibility: "visible"}), gsap.to("#headStripe", {y: .5, rotation: 1, yoyo: !0, repeat: -1, ease: "sine.inOut", duration: 1}), gsap.to("#spaceman", {y: .5, rotation: 1, yoyo: !0, repeat: -1, ease: "sine.inOut", duration: 1}), gsap.to("#craterSmall", {x: -3, yoyo: !0, repeat: -1, duration: 1, ease: "sine.inOut"}), gsap.to("#craterBig", {x: 3, yoyo: !0, repeat: -1, duration: 1, ease: "sine.inOut"}), gsap.to("#planet", {rotation: -2, yoyo: !0, repeat: -1, duration: 1, ease: "sine.inOut", transformOrigin: "50% 50%"}), gsap.to("#starsBig g", {rotation: "random(-30,30)", transformOrigin: "50% 50%", yoyo: !0, repeat: -1, ease: "sine.inOut"}), gsap.fromTo("#starsSmall g", {scale: 0, transformOrigin: "50% 50%"}, {scale: 1, transformOrigin: "50% 50%", yoyo: !0, repeat: -1, stagger: .1}), gsap.to("#circlesSmall circle", {y: -4, yoyo: !0, duration: 1, ease: "sine.inOut", repeat: -1}), gsap.to("#circlesBig circle", {
    y: -2,
    yoyo: !0,
    duration: 1,
    ease: "sine.inOut",
    repeat: -1
}), gsap.set("#glassShine", {x: -68}), gsap.to("#glassShine", {x: 80, duration: 2, rotation: -30, ease: "expo.inOut", transformOrigin: "50% 50%", repeat: -1, repeatDelay: 8, delay: 2}), function () {
    var t = function (e, i) {
        function n() {
            var t, e;
            this.q = [], this.add = function (t) {
                this.q.push(t)
            }, this.call = function () {
                for (t = 0, e = this.q.length; t < e; t++) this.q[t].call()
            }
        }

        function s(t, e) {
            if (t.resizedAttached) {
                if (t.resizedAttached) return void t.resizedAttached.add(e)
            } else t.resizedAttached = new n, t.resizedAttached.add(e);
            t.resizeSensor = document.createElement("div"), t.resizeSensor.className = "resize-sensor";
            var i, s = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;", r = "position: absolute; left: 0; top: 0; transition: 0s;", o = "position";
            t.resizeSensor.style.cssText = s, t.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + s + '"><div style="' + r + '"></div></div><div class="resize-sensor-shrink" style="' + s + '"><div style="' + r + ' width: 200%; height: 200%"></div></div>', t.appendChild(t.resizeSensor), ({fixed: 1, absolute: 1})[(i = t).currentStyle ? i.currentStyle[o] : window.getComputedStyle ? window.getComputedStyle(i, null).getPropertyValue(o) : i.style[o]] || (t.style.position = "relative");
            var a, l, c = t.resizeSensor.childNodes[0], h = c.childNodes[0], u = t.resizeSensor.childNodes[1], d = (u.childNodes[0], function () {
                h.style.width = c.offsetWidth + 10 + "px", h.style.height = c.offsetHeight + 10 + "px", c.scrollLeft = c.scrollWidth, c.scrollTop = c.scrollHeight, u.scrollLeft = u.scrollWidth, u.scrollTop = u.scrollHeight, a = t.offsetWidth, l = t.offsetHeight
            });
            d();
            var p = function () {
                t.resizedAttached && t.resizedAttached.call()
            }, f = function (t, e, i) {
                t.attachEvent ? t.attachEvent("on" + e, i) : t.addEventListener(e, i)
            }, m = function () {
                t.offsetWidth == a && t.offsetHeight == l || p(), d()
            };
            f(c, "scroll", m), f(u, "scroll", m)
        }

        var r = Object.prototype.toString.call(e), o = "[object Array]" === r || "[object NodeList]" === r || "[object HTMLCollection]" === r || "undefined" != typeof jQuery && e instanceof jQuery || "undefined" != typeof Elements && e instanceof Elements;
        if (o) for (var a = 0, l = e.length; a < l; a++) s(e[a], i); else s(e, i);
        this.detach = function () {
            if (o) for (var i = 0, n = e.length; i < n; i++) t.detach(e[i]); else t.detach(e)
        }
    };
    t.detach = function (t) {
        t.resizeSensor && (t.removeChild(t.resizeSensor), delete t.resizeSensor, delete t.resizedAttached)
    }, "undefined" != typeof module && void 0 !== module.exports ? module.exports = t : window.ResizeSensor = t
}(), function (t) {
    t.fn.theiaStickySidebar = function (e) {
        var i, n, s, r, o, a;

        function l(e, i) {
            var n, s;
            return !0 === e.initialized || !(t("body").width() < e.minWidth) && (n = e, s = i, n.initialized = !0, 0 === t("#theia-sticky-sidebar-stylesheet-" + n.namespace).length && t("head").append(t('<style id="theia-sticky-sidebar-stylesheet-' + n.namespace + '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')), s.each(function () {
                function e() {
                    i.fixedScrollTop = 0, i.sidebar.css({"min-height": "1px"}), i.stickySidebar.css({position: "static", width: "", transform: "none"})
                }

                var i = {};
                if (i.sidebar = t(this), i.options = n || {}, i.container = t(i.options.containerSelector), 0 == i.container.length && (i.container = i.sidebar.parent()), i.sidebar.parents(":not(.theia-exception)").css("-webkit-transform", "none"), i.sidebar.css({position: i.options.defaultPosition, overflow: "visible", "-webkit-box-sizing": "border-box", "-moz-box-sizing": "border-box", "box-sizing": "border-box"}), i.stickySidebar = i.sidebar.find(".theiaStickySidebar"), 0 == i.stickySidebar.length) {
                    var s = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
                    i.sidebar.find("script").filter(function (t, e) {
                        return 0 === e.type.length || e.type.match(s)
                    }).remove(), i.stickySidebar = t("<div>").addClass("theiaStickySidebar").append(i.sidebar.children()), i.sidebar.append(i.stickySidebar)
                }
                i.marginBottom = parseInt(i.sidebar.css("margin-bottom")), i.paddingTop = parseInt(i.sidebar.css("padding-top")), i.paddingBottom = parseInt(i.sidebar.css("padding-bottom"));
                var r, o, a, l = i.stickySidebar.offset().top, h = i.stickySidebar.outerHeight();
                i.stickySidebar.css("padding-top", 1), i.stickySidebar.css("padding-bottom", 1), l -= i.stickySidebar.offset().top, h = i.stickySidebar.outerHeight() - h - l, 0 == l ? (i.stickySidebar.css("padding-top", 0), i.stickySidebarPaddingTop = 0) : i.stickySidebarPaddingTop = 1, 0 == h ? (i.stickySidebar.css("padding-bottom", 0), i.stickySidebarPaddingBottom = 0) : i.stickySidebarPaddingBottom = 1, i.previousScrollTop = null, i.fixedScrollTop = 0, e(), i.onScroll = function (i) {
                    if (i.stickySidebar.is(":visible")) {
                        if (t("body").width() < i.options.minWidth) e(); else if (i.options.disableOnResponsiveLayouts && i.sidebar.outerWidth("none" == i.sidebar.css("float")) + 50 > i.container.width()) e(); else {
                            var s = t(document).scrollTop(), r = "static";
                            if (s >= i.sidebar.offset().top + (i.paddingTop - i.options.additionalMarginTop)) {
                                var o, a, l, h = i.paddingTop + n.additionalMarginTop, u = i.paddingBottom + i.marginBottom + n.additionalMarginBottom, d = i.sidebar.offset().top, p = i.sidebar.offset().top + (a = (o = i.container).height(), o.children().each(function () {
                                    a = Math.max(a, t(this).height())
                                }), a), f = 0 + n.additionalMarginTop;
                                l = i.stickySidebar.outerHeight() + h + u < t(window).height() ? f + i.stickySidebar.outerHeight() : t(window).height() - i.marginBottom - i.paddingBottom - n.additionalMarginBottom;
                                var m = d - s + i.paddingTop, g = p - s - i.paddingBottom - i.marginBottom, y = i.stickySidebar.offset().top - s, v = i.previousScrollTop - s;
                                "fixed" == i.stickySidebar.css("position") && "modern" == i.options.sidebarBehavior && (y += v), "stick-to-top" == i.options.sidebarBehavior && (y = n.additionalMarginTop), "stick-to-bottom" == i.options.sidebarBehavior && (y = l - i.stickySidebar.outerHeight()), y = Math.min(y = Math.max(y = v > 0 ? Math.min(y, f) : Math.max(y, l - i.stickySidebar.outerHeight()), m), g - i.stickySidebar.outerHeight());
                                var b = i.container.height() == i.stickySidebar.outerHeight();
                                r = (b || y != f) && (b || y != l - i.stickySidebar.outerHeight()) ? s + y - i.sidebar.offset().top - i.paddingTop <= n.additionalMarginTop ? "static" : "absolute" : "fixed"
                            }
                            if ("fixed" == r) {
                                var _ = t(document).scrollLeft();
                                i.stickySidebar.css({position: "fixed", width: c(i.stickySidebar) + "px", transform: "translateY(" + y + "px)", left: i.sidebar.offset().left + parseInt(i.sidebar.css("padding-left")) - _ + "px", top: "0px"})
                            } else if ("absolute" == r) {
                                var w = {};
                                "absolute" != i.stickySidebar.css("position") && (w.position = "absolute", w.transform = "translateY(" + (s + y - i.sidebar.offset().top - i.stickySidebarPaddingTop - i.stickySidebarPaddingBottom) + "px)", w.top = "0px"), w.width = c(i.stickySidebar) + "px", w.left = "", i.stickySidebar.css(w)
                            } else "static" == r && e();
                            "static" != r && 1 == i.options.updateSidebarHeight && i.sidebar.css({"min-height": i.stickySidebar.outerHeight() + i.stickySidebar.offset().top - i.sidebar.offset().top + i.paddingBottom}), i.previousScrollTop = s
                        }
                    }
                }, i.onScroll(i), t(document).on("scroll." + i.options.namespace, (r = i, function () {
                    r.onScroll(r)
                })), t(window).on("resize." + i.options.namespace, (o = i, function () {
                    o.stickySidebar.css({position: "static"}), o.onScroll(o)
                })), "undefined" != typeof ResizeSensor && new ResizeSensor(i.stickySidebar[0], (a = i, function () {
                    a.onScroll(a)
                }))
            }), !0)
        }

        function c(t) {
            var e;
            try {
                e = t[0].getBoundingClientRect().width
            } catch (i) {
            }
            return void 0 === e && (e = t.width()), e
        }

        return (e = t.extend({containerSelector: "", additionalMarginTop: 0, additionalMarginBottom: 0, updateSidebarHeight: !0, minWidth: 0, disableOnResponsiveLayouts: !0, sidebarBehavior: "modern", defaultPosition: "relative", namespace: "TSS"}, e)).additionalMarginTop = parseInt(e.additionalMarginTop) || 0, e.additionalMarginBottom = parseInt(e.additionalMarginBottom) || 0, i = e, n = this, l(i, n) || (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."), t(document).on("scroll." + i.namespace, (s = i, r = n, function (e) {
            l(s, r) && t(this).unbind(e)
        })), t(window).on("resize." + i.namespace, (o = i, a = n, function (e) {
            l(o, a) && t(this).unbind(e)
        }))), this
    }
}(jQuery), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).easepick = t.easepick || {})
}(this, function (t) {
    "use strict";

    class e extends Date {
        static parseDateTime(t, i = "YYYY-MM-DD", n = "en-US") {
            if (!t) return new Date((new Date).setHours(0, 0, 0, 0));
            if (t instanceof e) return t.toJSDate();
            if (t instanceof Date) return t;
            if (/^-?\d{10,}$/.test(String(t))) return new Date(Number(t));
            if ("string" == typeof t) {
                let s = [], r = null;
                for (; null != (r = e.regex.exec(i));) "\\" !== r[1] && s.push(r);
                if (s.length) {
                    let o = {year: null, month: null, shortMonth: null, longMonth: null, day: null, hour: 0, minute: 0, second: 0, ampm: null, value: ""};
                    for (let [a, l] of (s[0].index > 0 && (o.value += ".*?"), Object.entries(s))) {
                        let c = Number(a), {group: h, pattern: u} = e.formatPatterns(l[0], n);
                        o[h] = c + 1, o.value += u, o.value += ".*?"
                    }
                    let d = RegExp(`^${o.value}$`);
                    if (d.test(t)) {
                        let p = d.exec(t), f = Number(p[o.year]), m = null;
                        o.month ? m = Number(p[o.month]) - 1 : o.shortMonth ? m = e.shortMonths(n).indexOf(p[o.shortMonth]) : o.longMonth && (m = e.longMonths(n).indexOf(p[o.longMonth]));
                        let g = Number(p[o.day]) || 1, y = Number(p[o.hour]), v = Number.isNaN(y) ? 0 : y, b = Number(p[o.minute]), _ = Number.isNaN(b) ? 0 : b, w = Number(p[o.second]), x = Number.isNaN(w) ? 0 : w, k = p[o.ampm];
                        return k && "PM" === k && 24 === (v += 12) && (v = 0), new Date(f, m, g, v, _, x, 0)
                    }
                }
            }
            return new Date((new Date).setHours(0, 0, 0, 0))
        }

        static regex = /(\\)?(Y{2,4}|M{1,4}|D{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|A|a)/g;
        static MONTH_JS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

        static shortMonths(t) {
            return e.MONTH_JS.map(e => new Date(2019, e).toLocaleString(t, {month: "short"}))
        }

        static longMonths(t) {
            return e.MONTH_JS.map(e => new Date(2019, e).toLocaleString(t, {month: "long"}))
        }

        static formatPatterns(t, i) {
            switch (t) {
                case"YY":
                case"YYYY":
                    return {group: "year", pattern: `(\\d{${t.length}})`};
                case"M":
                    return {group: "month", pattern: "(\\d{1,2})"};
                case"MM":
                    return {group: "month", pattern: "(\\d{2})"};
                case"MMM":
                    return {group: "shortMonth", pattern: `(${e.shortMonths(i).join("|")})`};
                case"MMMM":
                    return {group: "longMonth", pattern: `(${e.longMonths(i).join("|")})`};
                case"D":
                    return {group: "day", pattern: "(\\d{1,2})"};
                case"DD":
                    return {group: "day", pattern: "(\\d{2})"};
                case"h":
                case"H":
                    return {group: "hour", pattern: "(\\d{1,2})"};
                case"hh":
                case"HH":
                    return {group: "hour", pattern: "(\\d{2})"};
                case"m":
                    return {group: "minute", pattern: "(\\d{1,2})"};
                case"mm":
                    return {group: "minute", pattern: "(\\d{2})"};
                case"s":
                    return {group: "second", pattern: "(\\d{1,2})"};
                case"ss":
                    return {group: "second", pattern: "(\\d{2})"};
                case"a":
                case"A":
                    return {group: "ampm", pattern: "(AM|PM|am|pm)"}
            }
        }

        lang;

        constructor(t = null, i = "YYYY-MM-DD", n = "en-US") {
            super(e.parseDateTime(t, i, n)), this.lang = n
        }

        getWeek(t) {
            let e = new Date(this.midnight_ts(this)), i = (this.getDay() + (7 - t)) % 7;
            e.setDate(e.getDate() - i);
            let n = e.getTime();
            return e.setMonth(0, 1), e.getDay() !== t && e.setMonth(0, 1 + (4 - e.getDay() + 7) % 7), 1 + Math.ceil((n - e.getTime()) / 6048e5)
        }

        clone() {
            return new e(this)
        }

        toJSDate() {
            return new Date(this)
        }

        inArray(t, e = "[]") {
            return t.some(t => t instanceof Array ? this.isBetween(t[0], t[1], e) : this.isSame(t, "day"))
        }

        isBetween(t, e, i = "()") {
            switch (i) {
                default:
                case"()":
                    return this.midnight_ts(this) > this.midnight_ts(t) && this.midnight_ts(this) < this.midnight_ts(e);
                case"[)":
                    return this.midnight_ts(this) >= this.midnight_ts(t) && this.midnight_ts(this) < this.midnight_ts(e);
                case"(]":
                    return this.midnight_ts(this) > this.midnight_ts(t) && this.midnight_ts(this) <= this.midnight_ts(e);
                case"[]":
                    return this.midnight_ts() >= this.midnight_ts(t) && this.midnight_ts() <= this.midnight_ts(e)
            }
        }

        isBefore(t, e = "days") {
            switch (e) {
                case"day":
                case"days":
                    return new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() > new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime();
                case"month":
                case"months":
                    return new Date(t.getFullYear(), t.getMonth(), 1).getTime() > new Date(this.getFullYear(), this.getMonth(), 1).getTime();
                case"year":
                case"years":
                    return t.getFullYear() > this.getFullYear()
            }
            throw Error("isBefore: Invalid unit!")
        }

        isSameOrBefore(t, e = "days") {
            switch (e) {
                case"day":
                case"days":
                    return new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() >= new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime();
                case"month":
                case"months":
                    return new Date(t.getFullYear(), t.getMonth(), 1).getTime() >= new Date(this.getFullYear(), this.getMonth(), 1).getTime()
            }
            throw Error("isSameOrBefore: Invalid unit!")
        }

        isAfter(t, e = "days") {
            switch (e) {
                case"day":
                case"days":
                    return new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime() > new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime();
                case"month":
                case"months":
                    return new Date(this.getFullYear(), this.getMonth(), 1).getTime() > new Date(t.getFullYear(), t.getMonth(), 1).getTime();
                case"year":
                case"years":
                    return this.getFullYear() > t.getFullYear()
            }
            throw Error("isAfter: Invalid unit!")
        }

        isSameOrAfter(t, e = "days") {
            switch (e) {
                case"day":
                case"days":
                    return new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime() >= new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime();
                case"month":
                case"months":
                    return new Date(this.getFullYear(), this.getMonth(), 1).getTime() >= new Date(t.getFullYear(), t.getMonth(), 1).getTime()
            }
            throw Error("isSameOrAfter: Invalid unit!")
        }

        isSame(t, e = "days") {
            switch (e) {
                case"day":
                case"days":
                    return new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime() === new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime();
                case"month":
                case"months":
                    return new Date(this.getFullYear(), this.getMonth(), 1).getTime() === new Date(t.getFullYear(), t.getMonth(), 1).getTime()
            }
            throw Error("isSame: Invalid unit!")
        }

        add(t, e = "days") {
            switch (e) {
                case"day":
                case"days":
                    this.setDate(this.getDate() + t);
                    break;
                case"month":
                case"months":
                    this.setMonth(this.getMonth() + t)
            }
            return this
        }

        subtract(t, e = "days") {
            switch (e) {
                case"day":
                case"days":
                    this.setDate(this.getDate() - t);
                    break;
                case"month":
                case"months":
                    this.setMonth(this.getMonth() - t)
            }
            return this
        }

        diff(t, e = "days") {
            switch (e) {
                default:
                case"day":
                case"days":
                    return Math.round((this.midnight_ts() - this.midnight_ts(t)) / 864e5);
                case"month":
                case"months":
                    let i = 12 * (t.getFullYear() - this.getFullYear());
                    return i -= t.getMonth(), i += this.getMonth()
            }
        }

        format(t, i = "en-US") {
            let n = "", s = [], r = null;
            for (; null != (r = e.regex.exec(t));) "\\" !== r[1] && s.push(r);
            if (s.length) for (let [o, a] of (s[0].index > 0 && (n += t.substring(0, s[0].index)), Object.entries(s))) {
                let l = Number(o);
                n += this.formatTokens(a[0], i), s[l + 1] && (n += t.substring(a.index + a[0].length, s[l + 1].index)), l === s.length - 1 && (n += t.substring(a.index + a[0].length))
            }
            return n.replace(/\\/g, "")
        }

        midnight_ts(t) {
            return t ? new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0, 0).getTime() : new Date(this.getFullYear(), this.getMonth(), this.getDate(), 0, 0, 0, 0).getTime()
        }

        formatTokens(t, i) {
            switch (t) {
                case"YY":
                    return String(this.getFullYear()).slice(-2);
                case"YYYY":
                    return String(this.getFullYear());
                case"M":
                    return String(this.getMonth() + 1);
                case"MM":
                    return `0${this.getMonth() + 1}`.slice(-2);
                case"MMM":
                    return e.shortMonths(i)[this.getMonth()];
                case"MMMM":
                    return e.longMonths(i)[this.getMonth()];
                case"D":
                    return String(this.getDate());
                case"DD":
                    return `0${this.getDate()}`.slice(-2);
                case"H":
                    return String(this.getHours());
                case"HH":
                    return `0${this.getHours()}`.slice(-2);
                case"h":
                    return String(this.getHours() % 12 || 12);
                case"hh":
                    return `0${this.getHours() % 12 || 12}`.slice(-2);
                case"m":
                    return String(this.getMinutes());
                case"mm":
                    return `0${this.getMinutes()}`.slice(-2);
                case"s":
                    return String(this.getSeconds());
                case"ss":
                    return `0${this.getSeconds()}`.slice(-2);
                case"a":
                    return 12 > this.getHours() || 24 === this.getHours() ? "am" : "pm";
                case"A":
                    return 12 > this.getHours() || 24 === this.getHours() ? "AM" : "PM";
                default:
                    return ""
            }
        }
    }

    class i {
        Calendar = new class t {
            picker;

            constructor(t) {
                this.picker = t
            }

            render(t, i) {
                t || (t = new e), t.setDate(1), t.setHours(0, 0, 0, 0), "function" == typeof this[`get${i}View`] && this[`get${i}View`](t)
            }

            getContainerView(t) {
                this.picker.ui.container.innerHTML = "", this.picker.options.header && this.picker.trigger("render", {date: t.clone(), view: "Header"}), this.picker.trigger("render", {date: t.clone(), view: "Main"}), this.picker.options.autoApply || this.picker.trigger("render", {date: t.clone(), view: "Footer"})
            }

            getHeaderView(t) {
                let e = document.createElement("header");
                this.picker.options.header instanceof HTMLElement && e.appendChild(this.picker.options.header), "string" == typeof this.picker.options.header && (e.innerHTML = this.picker.options.header), this.picker.ui.container.appendChild(e), this.picker.trigger("view", {target: e, date: t.clone(), view: "Header"})
            }

            getMainView(t) {
                let e = document.createElement("main");
                this.picker.ui.container.appendChild(e);
                let i = document.createElement("div");
                i.className = `calendars grid-${this.picker.options.grid}`;
                for (let n = 0; n < this.picker.options.calendars; n++) {
                    let s = document.createElement("div");
                    s.className = "calendar", i.appendChild(s);
                    let r = this.getCalendarHeaderView(t.clone());
                    s.appendChild(r), this.picker.trigger("view", {date: t.clone(), view: "CalendarHeader", index: n, target: r});
                    let o = this.getCalendarDayNamesView();
                    s.appendChild(o), this.picker.trigger("view", {date: t.clone(), view: "CalendarDayNames", index: n, target: o});
                    let a = this.getCalendarDaysView(t.clone());
                    s.appendChild(a), this.picker.trigger("view", {date: t.clone(), view: "CalendarDays", index: n, target: a});
                    let l = this.getCalendarFooterView(this.picker.options.lang, t.clone());
                    s.appendChild(l), this.picker.trigger("view", {date: t.clone(), view: "CalendarFooter", index: n, target: l}), this.picker.trigger("view", {date: t.clone(), view: "CalendarItem", index: n, target: s}), t.add(1, "month")
                }
                e.appendChild(i), this.picker.trigger("view", {date: t.clone(), view: "Calendars", target: i}), this.picker.trigger("view", {date: t.clone(), view: "Main", target: e})
            }

            getFooterView(t) {
                let e = document.createElement("footer"), i = document.createElement("div");
                i.className = "footer-buttons";
                let n = document.createElement("button");
                n.className = "cancel-button unit", n.innerHTML = this.picker.options.locale.cancel, i.appendChild(n);
                let s = document.createElement("button");
                s.className = "apply-button unit", s.innerHTML = this.picker.options.locale.apply, s.disabled = !0, i.appendChild(s), e.appendChild(i), this.picker.ui.container.appendChild(e), this.picker.trigger("view", {date: t, target: e, view: "Footer"})
            }

            getCalendarHeaderView(t) {
                let e = document.createElement("div");
                e.className = "header";
                let i = document.createElement("div");
                i.className = "month-name", i.innerHTML = `<span>${t.toLocaleString(this.picker.options.lang, {month: "long"})}</span> ${t.format("YYYY")}`, e.appendChild(i);
                let n = document.createElement("button");
                n.className = "previous-button unit", n.innerHTML = this.picker.options.locale.previousMonth, e.appendChild(n);
                let s = document.createElement("button");
                return s.className = "next-button unit", s.innerHTML = this.picker.options.locale.nextMonth, e.appendChild(s), e
            }

            getCalendarDayNamesView() {
                let t = document.createElement("div");
                t.className = "daynames-row";
                for (let e = 1; e <= 7; e++) {
                    let i = 3 + this.picker.options.firstDay + e, n = document.createElement("div");
                    n.className = "dayname", n.innerHTML = new Date(1970, 0, i, 12, 0, 0, 0).toLocaleString(this.picker.options.lang, {weekday: "short"}), n.title = new Date(1970, 0, i, 12, 0, 0, 0).toLocaleString(this.picker.options.lang, {weekday: "long"}), t.appendChild(n), this.picker.trigger("view", {dayIdx: i, view: "CalendarDayName", target: n})
                }
                return t
            }

            getCalendarDaysView(t) {
                let e = document.createElement("div");
                e.className = "days-grid";
                let i = this.calcOffsetDays(t, this.picker.options.firstDay), n = 32 - new Date(t.getFullYear(), t.getMonth(), 32).getDate();
                for (let s = 0; s < i; s++) {
                    let r = document.createElement("div");
                    r.className = "offset", e.appendChild(r)
                }
                for (let o = 1; o <= n; o++) {
                    t.setDate(o);
                    let a = this.getCalendarDayView(t);
                    e.appendChild(a), this.picker.trigger("view", {date: t, view: "CalendarDay", target: a})
                }
                return e
            }

            getCalendarDayView(t) {
                let i = this.picker.options.date ? new e(this.picker.options.date) : null, n = new e, s = document.createElement("div");
                return s.className = "day unit", s.innerHTML = t.format("D"), s.dataset.time = String(t.getTime()), t.isSame(n, "day") && s.classList.add("today"), [0, 6].includes(t.getDay()) && s.classList.add("weekend"), this.picker.datePicked.length ? this.picker.datePicked[0].isSame(t, "day") && s.classList.add("selected") : i && t.isSame(i, "day") && s.classList.add("selected"), this.picker.trigger("view", {date: t, view: "CalendarDay", target: s}), s
            }

            getCalendarFooterView(t, e) {
                let i = document.createElement("div");
                return i.className = "footer", i
            }

            calcOffsetDays(t, e) {
                let i = t.getDay() - e;
                return i < 0 && (i += 7), i
            }
        }(this);
        PluginManager = new class t {
            picker;
            instances = {};

            constructor(t) {
                this.picker = t
            }

            initialize() {
                let t = [];
                this.picker.options.plugins.forEach(e => {
                    "function" == typeof e ? t.push(new e) : "string" == typeof e && "undefined" != typeof easepick && Object.prototype.hasOwnProperty.call(easepick, e) ? t.push(new easepick[e]) : console.warn(`easepick: ${e} not found.`)
                }), t.sort((t, e) => t.priority > e.priority ? -1 : t.priority < e.priority || t.dependencies.length > e.dependencies.length ? 1 : t.dependencies.length < e.dependencies.length ? -1 : 0), t.forEach(t => {
                    t.attach(this.picker), this.instances[t.getName()] = t
                })
            }

            getInstance(t) {
                return this.instances[t]
            }

            addInstance(t) {
                if (Object.prototype.hasOwnProperty.call(this.instances, t)) console.warn(`easepick: ${t} already added.`); else {
                    if ("undefined" != typeof easepick && Object.prototype.hasOwnProperty.call(easepick, t)) {
                        let e = new easepick[t];
                        return e.attach(this.picker), this.instances[e.getName()] = e, e
                    }
                    if ("undefined" !== this.getPluginFn(t)) {
                        let i = new (this.getPluginFn(t));
                        return i.attach(this.picker), this.instances[i.getName()] = i, i
                    }
                    console.warn(`easepick: ${t} not found.`)
                }
                return null
            }

            removeInstance(t) {
                return t in this.instances && this.instances[t].detach(), delete this.instances[t]
            }

            reloadInstance(t) {
                return this.removeInstance(t), this.addInstance(t)
            }

            getPluginFn(t) {
                return [...this.picker.options.plugins].filter(e => "function" == typeof e && (new e).getName() === t).shift()
            }
        }(this);
        calendars = [];
        datePicked = [];
        cssLoaded = 0;
        binds = {hidePicker: this.hidePicker.bind(this), show: this.show.bind(this)};
        options = {doc: document, css: [], element: null, firstDay: 1, grid: 1, calendars: 1, lang: "en-US", date: null, format: "YYYY-MM-DD", readonly: !0, autoApply: !0, header: !1, inline: !1, scrollToDate: !0, locale: {nextMonth: '<svg width="11" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.748 16L0 13.333 5.333 8 0 2.667 2.748 0l7.919 8z" fill-rule="nonzero"/></svg>', previousMonth: '<svg width="11" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M7.919 0l2.748 2.667L5.333 8l5.334 5.333L7.919 16 0 8z" fill-rule="nonzero"/></svg>', cancel: "Cancel", apply: "Apply"}, documentClick: this.binds.hidePicker, plugins: []};
        ui = {container: null, shadowRoot: null, wrapper: null};
        version = "1.2.1";

        constructor(t) {
            let e = {...this.options.locale, ...t.locale};
            this.options = {...this.options, ...t}, this.options.locale = e, this.handleOptions(), this.ui.wrapper = document.createElement("span"), this.ui.wrapper.style.display = "none", this.ui.wrapper.style.position = "absolute", this.ui.wrapper.style.pointerEvents = "none", this.ui.wrapper.className = "easepick-wrapper", this.ui.wrapper.attachShadow({mode: "open"}), this.ui.shadowRoot = this.ui.wrapper.shadowRoot, this.ui.container = document.createElement("div"), this.ui.container.className = "container", this.options.zIndex && (this.ui.container.style.zIndex = String(this.options.zIndex)), this.options.inline && (this.ui.wrapper.style.position = "relative", this.ui.container.classList.add("inline")), this.ui.shadowRoot.appendChild(this.ui.container), this.options.element.after(this.ui.wrapper), this.handleCSS(), this.options.element.addEventListener("click", this.binds.show), this.on("view", this.onView.bind(this)), this.on("render", this.onRender.bind(this)), this.PluginManager.initialize(), this.parseValues(), "function" == typeof this.options.setup && this.options.setup(this), this.on("click", this.onClick.bind(this));
            let i = this.options.scrollToDate ? this.getDate() : null;
            this.renderAll(i)
        }

        on(t, e, i = {}) {
            this.ui.container.addEventListener(t, e, i)
        }

        off(t, e, i = {}) {
            this.ui.container.removeEventListener(t, e, i)
        }

        trigger(t, e = {}) {
            return this.ui.container.dispatchEvent(new CustomEvent(t, {detail: e}))
        }

        destroy() {
            this.options.element.removeEventListener("click", this.binds.show), "function" == typeof this.options.documentClick && document.removeEventListener("click", this.options.documentClick, !0), Object.keys(this.PluginManager.instances).forEach(t => {
                this.PluginManager.removeInstance(t)
            }), this.ui.wrapper.remove()
        }

        onRender(t) {
            let {view: e, date: i} = t.detail;
            this.Calendar.render(i, e)
        }

        onView(t) {
            let {view: e, target: i} = t.detail;
            "Footer" === e && this.datePicked.length && (i.querySelector(".apply-button").disabled = !1)
        }

        onClickHeaderButton(t) {
            this.isCalendarHeaderButton(t) && (t.classList.contains("next-button") ? this.calendars[0].add(1, "month") : this.calendars[0].subtract(1, "month"), this.renderAll(this.calendars[0]))
        }

        onClickCalendarDay(t) {
            if (this.isCalendarDay(t)) {
                let i = new e(t.dataset.time);
                this.options.autoApply ? (this.setDate(i), this.trigger("select", {date: this.getDate()}), this.hide()) : (this.datePicked[0] = i, this.trigger("preselect", {date: this.getDate()}), this.renderAll())
            }
        }

        onClickApplyButton(t) {
            if (this.isApplyButton(t)) {
                if (this.datePicked[0] instanceof Date) {
                    let e = this.datePicked[0].clone();
                    this.setDate(e)
                }
                this.hide(), this.trigger("select", {date: this.getDate()})
            }
        }

        onClickCancelButton(t) {
            this.isCancelButton(t) && this.hide()
        }

        onClick(t) {
            let e = t.target;
            if (e instanceof HTMLElement) {
                let i = e.closest(".unit");
                if (!(i instanceof HTMLElement)) return;
                this.onClickHeaderButton(i), this.onClickCalendarDay(i), this.onClickApplyButton(i), this.onClickCancelButton(i)
            }
        }

        isShown() {
            return this.ui.container.classList.contains("inline") || this.ui.container.classList.contains("show")
        }

        show(t) {
            if (this.isShown()) return;
            let e = t && "target" in t ? t.target : this.options.element, {top: i, left: n} = this.adjustPosition(e);
            this.ui.container.style.top = `${i}px`, this.ui.container.style.left = `${n}px`, this.ui.container.classList.add("show"), this.trigger("show", {target: e})
        }

        hide() {
            this.ui.container.classList.remove("show"), this.datePicked.length = 0, this.renderAll(), this.trigger("hide")
        }

        setDate(t) {
            let i = new e(t, this.options.format);
            this.options.date = i.clone(), this.updateValues(), this.calendars.length && this.renderAll()
        }

        getDate() {
            return this.options.date instanceof e ? this.options.date.clone() : null
        }

        parseValues() {
            this.options.date ? this.setDate(this.options.date) : this.options.element instanceof HTMLInputElement && this.options.element.value.length && this.setDate(this.options.element.value), this.options.date instanceof Date || (this.options.date = null)
        }

        updateValues() {
            let t = this.getDate(), e = t instanceof Date ? t.format(this.options.format, this.options.lang) : "", i = this.options.element;
            i instanceof HTMLInputElement ? i.value = e : i instanceof HTMLElement && (i.innerText = e)
        }

        hidePicker(t) {
            let e = t.target, i = null;
            e.shadowRoot && (i = (e = t.composedPath()[0]).getRootNode().host), this.isShown() && i !== this.ui.wrapper && e !== this.options.element && this.hide()
        }

        renderAll(t) {
            this.trigger("render", {view: "Container", date: (t || this.calendars[0]).clone()})
        }

        isCalendarHeaderButton(t) {
            return ["previous-button", "next-button"].some(e => t.classList.contains(e))
        }

        isCalendarDay(t) {
            return t.classList.contains("day")
        }

        isApplyButton(t) {
            return t.classList.contains("apply-button")
        }

        isCancelButton(t) {
            return t.classList.contains("cancel-button")
        }

        gotoDate(t) {
            let i = new e(t, this.options.format);
            i.setDate(1), this.calendars[0] = i.clone(), this.renderAll()
        }

        clear() {
            this.options.date = null, this.datePicked.length = 0, this.updateValues(), this.renderAll(), this.trigger("clear")
        }

        handleOptions() {
            this.options.element instanceof HTMLElement || (this.options.element = this.options.doc.querySelector(this.options.element)), "function" == typeof this.options.documentClick && document.addEventListener("click", this.options.documentClick, !0), this.options.element instanceof HTMLInputElement && (this.options.element.readOnly = this.options.readonly), this.options.date ? this.calendars[0] = new e(this.options.date, this.options.format) : this.calendars[0] = new e
        }

        handleCSS() {
            if (Array.isArray(this.options.css)) this.options.css.forEach(t => {
                let e = document.createElement("link");
                e.href = t, e.rel = "stylesheet";
                let i = () => {
                    this.cssLoaded++, this.cssLoaded === this.options.css.length && (this.ui.wrapper.style.display = "")
                };
                e.addEventListener("load", i), e.addEventListener("error", i), this.ui.shadowRoot.append(e)
            }); else if ("string" == typeof this.options.css) {
                let t = document.createElement("style"), e = document.createTextNode(this.options.css);
                t.appendChild(e), this.ui.shadowRoot.append(t), this.ui.wrapper.style.display = ""
            } else "function" == typeof this.options.css && (this.options.css.call(this, this), this.ui.wrapper.style.display = "")
        }

        adjustPosition(t) {
            let e = t.getBoundingClientRect(), i = this.ui.wrapper.getBoundingClientRect();
            this.ui.container.classList.add("calc");
            let n = this.ui.container.getBoundingClientRect();
            this.ui.container.classList.remove("calc");
            let s = e.bottom - i.bottom, r = e.left - i.left;
            return "undefined" != typeof window && (window.innerHeight < s + n.height && s - n.height >= 0 && (s = e.top - i.top - n.height), window.innerWidth < r + n.width && e.right - n.width >= 0 && (r = e.right - i.right - n.width)), {left: r, top: s}
        }
    }

    var n = Object.freeze({__proto__: null, Core: i, create: i});

    class s {
        picker;
        options;
        priority = 0;
        dependencies = [];

        attach(t) {
            let e = this.getName(), i = {...this.options};
            for (let n of (this.options = {...this.options, ...t.options[e] || {}}, Object.keys(i))) if (null !== i[n] && "object" == typeof i[n] && Object.keys(i[n]).length && e in t.options && n in t.options[e]) {
                let s = {...t.options[e][n]};
                null !== s && Object.keys(s).length && Object.keys(s).every(t => Object.keys(i[n]).includes(t)) && (this.options[n] = {...i[n], ...s})
            }
            if (this.picker = t, this.dependenciesNotFound()) {
                let r = this.dependencies.filter(t => !this.pluginsAsStringArray().includes(t));
                return void console.warn(`${this.getName()}: required dependencies (${r.join(", ")}).`)
            }
            let o = this.camelCaseToKebab(this.getName());
            this.picker.ui.container.classList.add(o), this.onAttach()
        }

        detach() {
            let t = this.camelCaseToKebab(this.getName());
            this.picker.ui.container.classList.remove(t), "function" == typeof this.onDetach && this.onDetach()
        }

        dependenciesNotFound() {
            return this.dependencies.length && !this.dependencies.every(t => this.pluginsAsStringArray().includes(t))
        }

        pluginsAsStringArray() {
            return this.picker.options.plugins.map(t => "function" == typeof t ? (new t).getName() : t)
        }

        camelCaseToKebab(t) {
            return t.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase()
        }
    }

    t.AmpPlugin = class extends s {
        rangePlugin;
        lockPlugin;
        priority = 10;
        binds = {onView: this.onView.bind(this), onColorScheme: this.onColorScheme.bind(this)};
        options = {dropdown: {months: !1, years: !1, minYear: 1950, maxYear: null}, darkMode: !0, locale: {resetButton: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>'}};
        matchMedia;

        getName() {
            return "AmpPlugin"
        }

        onAttach() {
            this.options.darkMode && window && "matchMedia" in window && (this.matchMedia = window.matchMedia("(prefers-color-scheme: dark)"), this.matchMedia.matches && (this.picker.ui.container.dataset.theme = "dark"), this.matchMedia.addEventListener("change", this.binds.onColorScheme)), this.options.weekNumbers && this.picker.ui.container.classList.add("week-numbers"), this.picker.on("view", this.binds.onView)
        }

        onDetach() {
            this.options.darkMode && window && "matchMedia" in window && this.matchMedia.removeEventListener("change", this.binds.onColorScheme), this.picker.ui.container.removeAttribute("data-theme"), this.picker.ui.container.classList.remove("week-numbers"), this.picker.off("view", this.binds.onView)
        }

        onView(t) {
            this.lockPlugin = this.picker.PluginManager.getInstance("LockPlugin"), this.rangePlugin = this.picker.PluginManager.getInstance("RangePlugin"), this.handleDropdown(t), this.handleResetButton(t), this.handleWeekNumbers(t)
        }

        onColorScheme(t) {
            let e = t.matches ? "dark" : "light";
            this.picker.ui.container.dataset.theme = e
        }

        handleDropdown(t) {
            let {view: i, target: n, date: s, index: r} = t.detail;
            if ("CalendarHeader" === i) {
                let o = n.querySelector(".month-name");
                if (this.options.dropdown.months) {
                    o.childNodes[0].remove();
                    let a = document.createElement("select");
                    a.className = "month-name--select month-name--dropdown";
                    for (let l = 0; l < 12; l += 1) {
                        let c = document.createElement("option"), h = new e(new Date(s.getFullYear(), l, 2, 0, 0, 0)), u = new e(new Date(s.getFullYear(), l, 1, 0, 0, 0));
                        c.value = String(l), c.text = h.toLocaleString(this.picker.options.lang, {month: "long"}), this.lockPlugin && (c.disabled = this.lockPlugin.options.minDate && u.isBefore(new e(this.lockPlugin.options.minDate), "month") || this.lockPlugin.options.maxDate && u.isAfter(new e(this.lockPlugin.options.maxDate), "month")), c.selected = u.getMonth() === s.getMonth(), a.appendChild(c)
                    }
                    a.addEventListener("change", t => {
                        let e = t.target;
                        this.picker.calendars[0].setDate(1), this.picker.calendars[0].setMonth(Number(e.value)), this.picker.renderAll()
                    }), o.prepend(a)
                }
                if (this.options.dropdown.years) {
                    o.childNodes[1].remove();
                    let d = document.createElement("select");
                    d.className = "month-name--select";
                    let p = this.options.dropdown.minYear, f = this.options.dropdown.maxYear ? this.options.dropdown.maxYear : (new Date).getFullYear();
                    if (s.getFullYear() > f) {
                        let m = document.createElement("option");
                        m.value = String(s.getFullYear()), m.text = String(s.getFullYear()), m.selected = !0, m.disabled = !0, d.appendChild(m)
                    }
                    for (let g = f; g >= p; g -= 1) {
                        let y = document.createElement("option"), v = new e(new Date(g, 0, 1, 0, 0, 0));
                        y.value = String(g), y.text = String(g), this.lockPlugin && (y.disabled = this.lockPlugin.options.minDate && v.isBefore(new e(this.lockPlugin.options.minDate), "year") || this.lockPlugin.options.maxDate && v.isAfter(new e(this.lockPlugin.options.maxDate), "year")), y.selected = s.getFullYear() === g, d.appendChild(y)
                    }
                    if (s.getFullYear() < p) {
                        let b = document.createElement("option");
                        b.value = String(s.getFullYear()), b.text = String(s.getFullYear()), b.selected = !0, b.disabled = !0, d.appendChild(b)
                    }
                    if ("asc" === this.options.dropdown.years) {
                        let _ = Array.prototype.slice.call(d.childNodes).reverse();
                        d.innerHTML = "", _.forEach(t => {
                            t.innerHTML = t.value, d.appendChild(t)
                        })
                    }
                    d.addEventListener("change", t => {
                        let e = t.target;
                        this.picker.calendars[0].setFullYear(Number(e.value)), this.picker.renderAll()
                    }), o.appendChild(d)
                }
            }
        }

        handleResetButton(t) {
            let {view: e, target: i} = t.detail;
            if ("CalendarHeader" === e && this.options.resetButton) {
                let n = document.createElement("button");
                n.className = "reset-button unit", n.innerHTML = this.options.locale.resetButton, n.addEventListener("click", t => {
                    t.preventDefault();
                    let e = !0;
                    "function" == typeof this.options.resetButton && (e = this.options.resetButton.call(this)), e && this.picker.clear()
                }), i.appendChild(n)
            }
        }

        handleWeekNumbers(t) {
            if (this.options.weekNumbers) {
                let {view: i, target: n} = t.detail;
                if ("CalendarDayNames" === i) {
                    let s = document.createElement("div");
                    s.className = "wnum-header", s.innerHTML = "Wk", n.prepend(s)
                }
                "CalendarDays" === i && [...n.children].forEach((t, i) => {
                    if (0 === i || i % 7 == 0) {
                        let s;
                        if (t.classList.contains("day")) s = new e(t.dataset.time); else {
                            let r = n.querySelector(".day");
                            s = new e(r.dataset.time)
                        }
                        let o = s.getWeek(this.picker.options.firstDay);
                        53 === o && 0 === s.getMonth() && (o = "53/1");
                        let a = document.createElement("div");
                        a.className = "wnum-item", a.innerHTML = String(o), n.insertBefore(a, t)
                    }
                })
            }
        }
    }, t.DateTime = e, t.KbdPlugin = class extends s {
        docElement = null;
        rangePlugin;
        binds = {onView: this.onView.bind(this), onKeydown: this.onKeydown.bind(this)};
        options = {unitIndex: 1, dayIndex: 2};

        getName() {
            return "KbdPlugin"
        }

        onAttach() {
            let t = this.picker.options.element, e = t.getBoundingClientRect();
            if (this.docElement = document.createElement("span"), this.docElement.style.position = "absolute", this.docElement.style.top = `${t.offsetTop}px`, this.docElement.style.left = t.offsetLeft + e.width - 25 + "px", this.docElement.attachShadow({mode: "open"}), this.options.html) this.docElement.shadowRoot.innerHTML = this.options.html; else {
                let i = `
      <style>
      button {
        border: none;
        background: transparent;
        font-size: ${window.getComputedStyle(this.picker.options.element).fontSize};
      }
      </style>

      <button>&#128197;</button>
      `;
                this.docElement.shadowRoot.innerHTML = i
            }
            let n = this.docElement.shadowRoot.querySelector("button");
            n && (n.addEventListener("click", t => {
                t.preventDefault(), this.picker.show({target: this.picker.options.element})
            }, {capture: !0}), n.addEventListener("keydown", t => {
                "Escape" === t.code && this.picker.hide()
            }, {capture: !0})), this.picker.options.element.after(this.docElement), this.picker.on("view", this.binds.onView), this.picker.on("keydown", this.binds.onKeydown)
        }

        onDetach() {
            this.docElement && this.docElement.isConnected && this.docElement.remove(), this.picker.off("view", this.binds.onView), this.picker.off("keydown", this.binds.onKeydown)
        }

        onView(t) {
            let {view: e, target: i} = t.detail;
            i && "querySelector" in i && ("CalendarDay" !== e || ["locked", "not-available"].some(t => i.classList.contains(t)) ? [...i.querySelectorAll(".unit:not(.day)")].forEach(t => t.tabIndex = this.options.unitIndex) : i.tabIndex = this.options.dayIndex)
        }

        onKeydown(t) {
            switch (this.onMouseEnter(t), t.code) {
                case"ArrowUp":
                case"ArrowDown":
                    this.verticalMove(t);
                    break;
                case"ArrowLeft":
                case"ArrowRight":
                    this.horizontalMove(t);
                    break;
                case"Enter":
                case"Space":
                    this.handleEnter(t);
                    break;
                case"Escape":
                    this.picker.hide()
            }
        }

        findAllowableDaySibling(t, e, i) {
            let n = Array.from(t.querySelectorAll(`.day[tabindex="${this.options.dayIndex}"]`)), s = n.indexOf(e);
            return n.filter((t, e) => i(e, s) && t.tabIndex === this.options.dayIndex)[0]
        }

        changeMonth(t) {
            let e = {ArrowLeft: "previous", ArrowRight: "next"}, i = this.picker.ui.container.querySelector(`.${e[t.code]}-button[tabindex="${this.options.unitIndex}"]`);
            i && !i.parentElement.classList.contains(`no-${e[t.code]}-month`) && (i.dispatchEvent(new Event("click", {bubbles: !0})), setTimeout(() => {
                let e = null;
                switch (t.code) {
                    case"ArrowLeft":
                        let i = this.picker.ui.container.querySelectorAll(`.day[tabindex="${this.options.dayIndex}"]`);
                        e = i[i.length - 1];
                        break;
                    case"ArrowRight":
                        e = this.picker.ui.container.querySelector(`.day[tabindex="${this.options.dayIndex}"]`)
                }
                e && e.focus()
            }))
        }

        verticalMove(t) {
            let e = t.target;
            if (e.classList.contains("day")) {
                t.preventDefault();
                let i = this.findAllowableDaySibling(this.picker.ui.container, e, (e, i) => e === ("ArrowUp" === t.code ? i - 7 : i + 7));
                i && i.focus()
            }
        }

        horizontalMove(t) {
            let e = t.target;
            if (e.classList.contains("day")) {
                t.preventDefault();
                let i = this.findAllowableDaySibling(this.picker.ui.container, e, (e, i) => e === ("ArrowLeft" === t.code ? i - 1 : i + 1));
                i ? i.focus() : this.changeMonth(t)
            }
        }

        handleEnter(t) {
            let e = t.target;
            e.classList.contains("day") && (t.preventDefault(), e.dispatchEvent(new Event("click", {bubbles: !0})), setTimeout(() => {
                if (this.rangePlugin = this.picker.PluginManager.getInstance("RangePlugin"), this.rangePlugin || !this.picker.options.autoApply) {
                    let t = this.picker.ui.container.querySelector(".day.selected");
                    t && setTimeout(() => {
                        t.focus()
                    })
                }
            }))
        }

        onMouseEnter(t) {
            t.target.classList.contains("day") && setTimeout(() => {
                let t = this.picker.ui.shadowRoot.activeElement;
                t && t.dispatchEvent(new Event("mouseenter", {bubbles: !0}))
            })
        }
    }, t.LockPlugin = class extends s {
        priority = 1;
        binds = {onView: this.onView.bind(this)};
        options = {minDate: null, maxDate: null, minDays: null, maxDays: null, selectForward: null, selectBackward: null, presets: !0, inseparable: !1, filter: null};

        getName() {
            return "LockPlugin"
        }

        onAttach() {
            if (this.options.minDate && (this.options.minDate = new e(this.options.minDate, this.picker.options.format, this.picker.options.lang)), this.options.maxDate && (this.options.maxDate = new e(this.options.maxDate, this.picker.options.format, this.picker.options.lang), this.options.maxDate instanceof e && this.picker.options.calendars > 1 && this.picker.calendars[0].isSame(this.options.maxDate, "month"))) {
                let t = this.picker.calendars[0].clone().subtract(1, "month");
                this.picker.gotoDate(t)
            }
            (this.options.minDays || this.options.maxDays || this.options.selectForward || this.options.selectBackward) && !this.picker.options.plugins.includes("RangePlugin") && console.warn(`${this.getName()}: options minDays, maxDays, selectForward, selectBackward required RangePlugin.`), this.picker.on("view", this.binds.onView)
        }

        onDetach() {
            this.picker.off("view", this.binds.onView)
        }

        onView(t) {
            let {view: i, target: n, date: s} = t.detail;
            if ("CalendarHeader" === i && (this.options.minDate instanceof e && s.isSameOrBefore(this.options.minDate, "month") && n.classList.add("no-previous-month"), this.options.maxDate instanceof e && s.isSameOrAfter(this.options.maxDate, "month") && n.classList.add("no-next-month")), "CalendarDay" === i) {
                let r = this.picker.datePicked.length ? this.picker.datePicked[0] : null;
                if (this.testFilter(s)) return void n.classList.add("locked");
                if (this.options.inseparable) {
                    if (this.options.minDays) {
                        let o = s.clone().subtract(this.options.minDays - 1, "day"), a = s.clone().add(this.options.minDays - 1, "day"), l = !1, c = !1;
                        for (; o.isBefore(s, "day");) {
                            if (this.testFilter(o)) {
                                l = !0;
                                break
                            }
                            o.add(1, "day")
                        }
                        for (; a.isAfter(s, "day");) {
                            if (this.testFilter(a)) {
                                c = !0;
                                break
                            }
                            a.subtract(1, "day")
                        }
                        l && c && n.classList.add("not-available")
                    }
                    this.rangeIsNotAvailable(s, r) && n.classList.add("not-available")
                }
                this.dateIsNotAvailable(s, r) && n.classList.add("not-available")
            }
            if (this.options.presets && "PresetPluginButton" === i) {
                let h = new e(Number(n.dataset.start)), u = new e(Number(n.dataset.end)), d = u.diff(h, "day"), p = this.options.minDays && d < this.options.minDays, f = this.options.maxDays && d > this.options.maxDays;
                (p || f || this.lockMinDate(h) || this.lockMaxDate(h) || this.lockMinDate(u) || this.lockMaxDate(u) || this.rangeIsNotAvailable(h, u)) && n.setAttribute("disabled", "disabled")
            }
        }

        dateIsNotAvailable(t, e) {
            return this.lockMinDate(t) || this.lockMaxDate(t) || this.lockMinDays(t, e) || this.lockMaxDays(t, e) || this.lockSelectForward(t) || this.lockSelectBackward(t)
        }

        rangeIsNotAvailable(t, e) {
            if (!t || !e) return !1;
            let i = (t.isSameOrBefore(e, "day") ? t : e).clone(), n = (e.isSameOrAfter(t, "day") ? e : t).clone();
            for (; i.isSameOrBefore(n, "day");) {
                if (this.testFilter(i)) return !0;
                i.add(1, "day")
            }
            return !1
        }

        lockMinDate(t) {
            return this.options.minDate instanceof e && t.isBefore(this.options.minDate, "day")
        }

        lockMaxDate(t) {
            return this.options.maxDate instanceof e && t.isAfter(this.options.maxDate, "day")
        }

        lockMinDays(t, e) {
            if (this.options.minDays && e) {
                let i = e.clone().subtract(this.options.minDays - 1, "day"), n = e.clone().add(this.options.minDays - 1, "day");
                return t.isBetween(i, n)
            }
            return !1
        }

        lockMaxDays(t, e) {
            if (this.options.maxDays && e) {
                let i = e.clone().subtract(this.options.maxDays, "day"), n = e.clone().add(this.options.maxDays, "day");
                return !t.isBetween(i, n)
            }
            return !1
        }

        lockSelectForward(t) {
            if (1 === this.picker.datePicked.length && this.options.selectForward) {
                let e = this.picker.datePicked[0].clone();
                return t.isBefore(e, "day")
            }
            return !1
        }

        lockSelectBackward(t) {
            if (1 === this.picker.datePicked.length && this.options.selectBackward) {
                let e = this.picker.datePicked[0].clone();
                return t.isAfter(e, "day")
            }
            return !1
        }

        testFilter(t) {
            return "function" == typeof this.options.filter && this.options.filter(t, this.picker.datePicked)
        }
    }, t.PresetPlugin = class extends s {
        dependencies = ["RangePlugin"];
        binds = {onView: this.onView.bind(this), onClick: this.onClick.bind(this)};
        options = {customLabels: ["Today", "Yesterday", "Last 7 Days", "Last 30 Days", "This Month", "Last Month"], customPreset: {}, position: "left"};

        getName() {
            return "PresetPlugin"
        }

        onAttach() {
            if (!Object.keys(this.options.customPreset).length) {
                let t = new e, i = [[t.clone(), t.clone()], [t.clone().subtract(1, "day"), t.clone().subtract(1, "day")], [t.clone().subtract(6, "day"), t.clone()], [t.clone().subtract(29, "day"), t.clone()], (() => {
                    let i = t.clone();
                    i.setDate(1);
                    let n = new Date(t.getFullYear(), t.getMonth() + 1, 0);
                    return [new e(i), new e(n)]
                })(), (() => {
                    let i = t.clone();
                    i.setMonth(i.getMonth() - 1), i.setDate(1);
                    let n = new Date(t.getFullYear(), t.getMonth(), 0);
                    return [new e(i), new e(n)]
                })()];
                Object.values(this.options.customLabels).forEach((t, e) => {
                    this.options.customPreset[t] = i[e]
                })
            }
            this.picker.on("view", this.binds.onView), this.picker.on("click", this.binds.onClick)
        }

        onDetach() {
            this.picker.off("view", this.binds.onView), this.picker.off("click", this.binds.onClick)
        }

        onView(t) {
            let {view: e, target: i} = t.detail;
            if ("Main" === e) {
                let n = document.createElement("div");
                n.className = "preset-plugin-container", Object.keys(this.options.customPreset).forEach(t => {
                    if (Object.prototype.hasOwnProperty.call(this.options.customPreset, t)) {
                        let e = this.options.customPreset[t], i = document.createElement("button");
                        i.className = "preset-button unit", i.innerHTML = t, i.dataset.start = e[0].getTime(), i.dataset.end = e[1].getTime(), n.appendChild(i), this.picker.trigger("view", {view: "PresetPluginButton", target: i})
                    }
                }), i.appendChild(n), i.classList.add(`preset-${this.options.position}`), this.picker.trigger("view", {view: "PresetPluginContainer", target: n})
            }
        }

        onClick(t) {
            let i = t.target;
            if (i instanceof HTMLElement) {
                let n = i.closest(".unit");
                if (!(n instanceof HTMLElement)) return;
                if (this.isPresetButton(n)) {
                    let s = new e(Number(n.dataset.start)), r = new e(Number(n.dataset.end));
                    this.picker.options.autoApply ? (this.picker.setDateRange(s, r), this.picker.trigger("select", {start: this.picker.getStartDate(), end: this.picker.getEndDate()}), this.picker.hide()) : (this.picker.datePicked = [s, r], this.picker.renderAll())
                }
            }
        }

        isPresetButton(t) {
            return t.classList.contains("preset-button")
        }
    }, t.RangePlugin = class extends s {
        tooltipElement;
        triggerElement;
        binds = {setStartDate: this.setStartDate.bind(this), setEndDate: this.setEndDate.bind(this), setDateRange: this.setDateRange.bind(this), getStartDate: this.getStartDate.bind(this), getEndDate: this.getEndDate.bind(this), onView: this.onView.bind(this), onShow: this.onShow.bind(this), onMouseEnter: this.onMouseEnter.bind(this), onMouseLeave: this.onMouseLeave.bind(this), onClickCalendarDay: this.onClickCalendarDay.bind(this), onClickApplyButton: this.onClickApplyButton.bind(this), parseValues: this.parseValues.bind(this), updateValues: this.updateValues.bind(this), clear: this.clear.bind(this)};
        options = {elementEnd: null, startDate: null, endDate: null, repick: !1, strict: !0, delimiter: " - ", tooltip: !0, tooltipNumber: t => t, locale: {zero: "", one: "day", two: "", few: "", many: "", other: "days"}, documentClick: this.hidePicker.bind(this)};

        getName() {
            return "RangePlugin"
        }

        onAttach() {
            this.binds._setStartDate = this.picker.setStartDate, this.binds._setEndDate = this.picker.setEndDate, this.binds._setDateRange = this.picker.setDateRange, this.binds._getStartDate = this.picker.getStartDate, this.binds._getEndDate = this.picker.getEndDate, this.binds._parseValues = this.picker.parseValues, this.binds._updateValues = this.picker.updateValues, this.binds._clear = this.picker.clear, this.binds._onClickCalendarDay = this.picker.onClickCalendarDay, this.binds._onClickApplyButton = this.picker.onClickApplyButton, Object.defineProperties(this.picker, {
                setStartDate: {configurable: !0, value: this.binds.setStartDate},
                setEndDate: {configurable: !0, value: this.binds.setEndDate},
                setDateRange: {configurable: !0, value: this.binds.setDateRange},
                getStartDate: {configurable: !0, value: this.binds.getStartDate},
                getEndDate: {configurable: !0, value: this.binds.getEndDate},
                parseValues: {configurable: !0, value: this.binds.parseValues},
                updateValues: {configurable: !0, value: this.binds.updateValues},
                clear: {configurable: !0, value: this.binds.clear},
                onClickCalendarDay: {configurable: !0, value: this.binds.onClickCalendarDay},
                onClickApplyButton: {configurable: !0, value: this.binds.onClickApplyButton}
            }), this.options.elementEnd && (this.options.elementEnd instanceof HTMLElement || (this.options.elementEnd = this.picker.options.doc.querySelector(this.options.elementEnd)), this.options.elementEnd instanceof HTMLInputElement && (this.options.elementEnd.readOnly = this.picker.options.readonly), "function" == typeof this.picker.options.documentClick && (document.removeEventListener("click", this.picker.options.documentClick, !0), "function" == typeof this.options.documentClick && document.addEventListener("click", this.options.documentClick, !0)), this.options.elementEnd.addEventListener("click", this.picker.show.bind(this.picker))), this.options.repick = this.options.repick && this.options.elementEnd instanceof HTMLElement, this.picker.options.date = null, this.picker.on("view", this.binds.onView), this.picker.on("show", this.binds.onShow), this.picker.on("mouseenter", this.binds.onMouseEnter, !0), this.picker.on("mouseleave", this.binds.onMouseLeave, !0), this.checkIntlPluralLocales()
        }

        onDetach() {
            Object.defineProperties(this.picker, {setStartDate: {configurable: !0, value: this.binds._setStartDate}, setEndDate: {configurable: !0, value: this.binds._setEndDate}, setDateRange: {configurable: !0, value: this.binds._setDateRange}, getStartDate: {configurable: !0, value: this.binds._getStartDate}, getEndDate: {configurable: !0, value: this.binds._getEndDate}, parseValues: {configurable: !0, value: this.binds._parseValues}, updateValues: {configurable: !0, value: this.binds._updateValues}, clear: {configurable: !0, value: this.binds._clear}, onClickCalendarDay: {configurable: !0, value: this.binds._onClickCalendarDay}, onClickApplyButton: {configurable: !0, value: this.binds._onClickApplyButton}}), this.picker.off("view", this.binds.onView), this.picker.off("show", this.binds.onShow), this.picker.off("mouseenter", this.binds.onMouseEnter, !0), this.picker.off("mouseleave", this.binds.onMouseLeave, !0)
        }

        parseValues() {
            if (this.options.startDate || this.options.endDate) this.options.strict ? this.options.startDate && this.options.endDate ? this.setDateRange(this.options.startDate, this.options.endDate) : (this.options.startDate = null, this.options.endDate = null) : (this.options.startDate && this.setStartDate(this.options.startDate), this.options.endDate && this.setEndDate(this.options.endDate)); else if (this.options.elementEnd) this.options.strict ? this.picker.options.element instanceof HTMLInputElement && this.picker.options.element.value.length && this.options.elementEnd instanceof HTMLInputElement && this.options.elementEnd.value.length && this.setDateRange(this.picker.options.element.value, this.options.elementEnd.value) : (this.picker.options.element instanceof HTMLInputElement && this.picker.options.element.value.length && this.setStartDate(this.picker.options.element.value), this.options.elementEnd instanceof HTMLInputElement && this.options.elementEnd.value.length && this.setEndDate(this.options.elementEnd.value)); else if (this.picker.options.element instanceof HTMLInputElement && this.picker.options.element.value.length) {
                let [t, e] = this.picker.options.element.value.split(this.options.delimiter);
                this.options.strict ? t && e && this.setDateRange(t, e) : (t && this.setStartDate(t), e && this.setEndDate(e))
            }
        }

        updateValues() {
            let t = this.picker.options.element, e = this.options.elementEnd, i = this.picker.getStartDate(), n = this.picker.getEndDate(), s = i instanceof Date ? i.format(this.picker.options.format, this.picker.options.lang) : "", r = n instanceof Date ? n.format(this.picker.options.format, this.picker.options.lang) : "";
            if (e) t instanceof HTMLInputElement ? t.value = s : t instanceof HTMLElement && (t.innerText = s), e instanceof HTMLInputElement ? e.value = r : e instanceof HTMLElement && (e.innerText = r); else {
                let o = `${s}${s || r ? this.options.delimiter : ""}${r}`;
                t instanceof HTMLInputElement ? t.value = o : t instanceof HTMLElement && (t.innerText = o)
            }
        }

        clear() {
            this.options.startDate = null, this.options.endDate = null, this.picker.datePicked.length = 0, this.updateValues(), this.picker.renderAll(), this.picker.trigger("clear")
        }

        onShow(t) {
            let {target: e} = t.detail;
            this.triggerElement = e, this.picker.options.scrollToDate && this.getStartDate() instanceof Date && this.picker.gotoDate(this.getStartDate()), this.initializeRepick()
        }

        onView(t) {
            let {view: i, target: n} = t.detail;
            if ("Main" === i && (this.tooltipElement = document.createElement("span"), this.tooltipElement.className = "range-plugin-tooltip", n.appendChild(this.tooltipElement)), "CalendarDay" === i) {
                let s = new e(n.dataset.time), r = this.picker.datePicked, o = r.length ? this.picker.datePicked[0] : this.getStartDate(), a = r.length ? this.picker.datePicked[1] : this.getEndDate();
                o && o.isSame(s, "day") && n.classList.add("start"), o && a && (a.isSame(s, "day") && n.classList.add("end"), s.isBetween(o, a) && n.classList.add("in-range"))
            }
            if ("Footer" === i) {
                let l = 1 === this.picker.datePicked.length && !this.options.strict || 2 === this.picker.datePicked.length;
                n.querySelector(".apply-button").disabled = !l
            }
        }

        hidePicker(t) {
            let e = t.target, i = null;
            e.shadowRoot && (i = (e = t.composedPath()[0]).getRootNode().host), this.picker.isShown() && i !== this.picker.ui.wrapper && e !== this.picker.options.element && e !== this.options.elementEnd && this.picker.hide()
        }

        setStartDate(t) {
            let i = new e(t, this.picker.options.format);
            this.options.startDate = i ? i.clone() : null, this.updateValues(), this.picker.renderAll()
        }

        setEndDate(t) {
            let i = new e(t, this.picker.options.format);
            this.options.endDate = i ? i.clone() : null, this.updateValues(), this.picker.renderAll()
        }

        setDateRange(t, i) {
            let n = new e(t, this.picker.options.format), s = new e(i, this.picker.options.format);
            this.options.startDate = n ? n.clone() : null, this.options.endDate = s ? s.clone() : null, this.updateValues(), this.picker.renderAll()
        }

        getStartDate() {
            return this.options.startDate instanceof Date ? this.options.startDate.clone() : null
        }

        getEndDate() {
            return this.options.endDate instanceof Date ? this.options.endDate.clone() : null
        }

        onMouseEnter(t) {
            let i = t.target;
            if (i instanceof HTMLElement) {
                this.isContainer(i) && this.initializeRepick();
                let n = i.closest(".unit");
                if (!(n instanceof HTMLElement)) return;
                if (this.picker.isCalendarDay(n)) {
                    if (1 !== this.picker.datePicked.length) return;
                    let s = this.picker.datePicked[0].clone(), r = new e(n.dataset.time), o = !1;
                    if (s.isAfter(r, "day")) {
                        let a = s.clone();
                        s = r.clone(), r = a.clone(), o = !0
                    }
                    if ([...this.picker.ui.container.querySelectorAll(".day")].forEach(t => {
                        let i = new e(t.dataset.time), a = this.picker.Calendar.getCalendarDayView(i);
                        i.isBetween(s, r) && a.classList.add("in-range"), i.isSame(this.picker.datePicked[0], "day") && (a.classList.add("start"), a.classList.toggle("flipped", o)), t === n && (a.classList.add("end"), a.classList.toggle("flipped", o)), t.className = a.className
                    }), this.options.tooltip) {
                        let l = this.options.tooltipNumber(r.diff(s, "day") + 1);
                        if (l > 0) {
                            let c = new Intl.PluralRules(this.picker.options.lang).select(l), h = `${l} ${this.options.locale[c]}`;
                            this.showTooltip(n, h)
                        } else this.hideTooltip()
                    }
                }
            }
        }

        onMouseLeave(t) {
            if (this.isContainer(t.target) && this.options.repick) {
                let e = this.getStartDate(), i = this.getEndDate();
                e && i && (this.picker.datePicked.length = 0, this.picker.renderAll())
            }
        }

        onClickCalendarDay(t) {
            if (this.picker.isCalendarDay(t)) {
                2 === this.picker.datePicked.length && (this.picker.datePicked.length = 0);
                let i = new e(t.dataset.time);
                if (this.picker.datePicked[this.picker.datePicked.length] = i, 2 === this.picker.datePicked.length && this.picker.datePicked[0].isAfter(this.picker.datePicked[1])) {
                    let n = this.picker.datePicked[1].clone();
                    this.picker.datePicked[1] = this.picker.datePicked[0].clone(), this.picker.datePicked[0] = n.clone()
                }
                1 !== this.picker.datePicked.length && this.picker.options.autoApply || this.picker.trigger("preselect", {start: this.picker.datePicked[0] instanceof Date ? this.picker.datePicked[0].clone() : null, end: this.picker.datePicked[1] instanceof Date ? this.picker.datePicked[1].clone() : null}), 1 === this.picker.datePicked.length && (!this.options.strict && this.picker.options.autoApply && (this.picker.options.element === this.triggerElement && this.setStartDate(this.picker.datePicked[0]), this.options.elementEnd === this.triggerElement && this.setEndDate(this.picker.datePicked[0]), this.picker.trigger("select", {start: this.picker.getStartDate(), end: this.picker.getEndDate()})), this.picker.renderAll()), 2 === this.picker.datePicked.length && (this.picker.options.autoApply ? (this.setDateRange(this.picker.datePicked[0], this.picker.datePicked[1]), this.picker.trigger("select", {
                    start: this.picker.getStartDate(),
                    end: this.picker.getEndDate()
                }), this.picker.hide()) : (this.hideTooltip(), this.picker.renderAll()))
            }
        }

        onClickApplyButton(t) {
            this.picker.isApplyButton(t) && (1 !== this.picker.datePicked.length || this.options.strict || (this.picker.options.element === this.triggerElement && (this.options.endDate = null, this.setStartDate(this.picker.datePicked[0])), this.options.elementEnd === this.triggerElement && (this.options.startDate = null, this.setEndDate(this.picker.datePicked[0]))), 2 === this.picker.datePicked.length && this.setDateRange(this.picker.datePicked[0], this.picker.datePicked[1]), this.picker.trigger("select", {start: this.picker.getStartDate(), end: this.picker.getEndDate()}), this.picker.hide())
        }

        showTooltip(t, e) {
            this.tooltipElement.style.visibility = "visible", this.tooltipElement.innerHTML = e;
            let i = this.picker.ui.container.getBoundingClientRect(), n = this.tooltipElement.getBoundingClientRect(), s = t.getBoundingClientRect(), r = s.top, o = s.left;
            r -= i.top, o -= i.left, r -= n.height, o -= n.width / 2, o += s.width / 2, this.tooltipElement.style.top = `${r}px`, this.tooltipElement.style.left = `${o}px`
        }

        hideTooltip() {
            this.tooltipElement.style.visibility = "hidden"
        }

        checkIntlPluralLocales() {
            if (!this.options.tooltip) return;
            let t = [...new Set([new Intl.PluralRules(this.picker.options.lang).select(0), new Intl.PluralRules(this.picker.options.lang).select(1), new Intl.PluralRules(this.picker.options.lang).select(2), new Intl.PluralRules(this.picker.options.lang).select(6), new Intl.PluralRules(this.picker.options.lang).select(18)])], e = Object.keys(this.options.locale);
            t.every(t => e.includes(t)) || console.warn(`${this.getName()}: provide locales (${t.join(", ")}) for correct tooltip text.`)
        }

        initializeRepick() {
            if (!this.options.repick) return;
            let t = this.getStartDate(), e = this.getEndDate();
            e && this.triggerElement === this.picker.options.element && (this.picker.datePicked[0] = e), t && this.triggerElement === this.options.elementEnd && (this.picker.datePicked[0] = t)
        }

        isContainer(t) {
            return t === this.picker.ui.container
        }
    }, t.TimePlugin = class extends s {
        options = {native: !1, seconds: !1, stepHours: 1, stepMinutes: 5, stepSeconds: 5, format12: !1};
        rangePlugin;
        timePicked = {input: null, start: null, end: null};
        timePrePicked = {input: null, start: null, end: null};
        binds = {getDate: this.getDate.bind(this), getStartDate: this.getStartDate.bind(this), getEndDate: this.getEndDate.bind(this), onView: this.onView.bind(this), onInput: this.onInput.bind(this), onChange: this.onChange.bind(this), onClick: this.onClick.bind(this), setTime: this.setTime.bind(this), setStartTime: this.setStartTime.bind(this), setEndTime: this.setEndTime.bind(this)};

        getName() {
            return "TimePlugin"
        }

        onAttach() {
            this.binds._getDate = this.picker.getDate, this.binds._getStartDate = this.picker.getStartDate, this.binds._getEndDate = this.picker.getEndDate, Object.defineProperties(this.picker, {getDate: {configurable: !0, value: this.binds.getDate}, getStartDate: {configurable: !0, value: this.binds.getStartDate}, getEndDate: {configurable: !0, value: this.binds.getEndDate}, setTime: {configurable: !0, value: this.binds.setTime}, setStartTime: {configurable: !0, value: this.binds.setStartTime}, setEndTime: {configurable: !0, value: this.binds.setEndTime}}), this.rangePlugin = this.picker.PluginManager.getInstance("RangePlugin"), this.parseValues(), this.picker.on("view", this.binds.onView), this.picker.on("input", this.binds.onInput), this.picker.on("change", this.binds.onChange), this.picker.on("click", this.binds.onClick)
        }

        onDetach() {
            delete this.picker.setTime, delete this.picker.setStartTime, delete this.picker.setEndTime, Object.defineProperties(this.picker, {getDate: {configurable: !0, value: this.binds._getDate}, getStartDate: {configurable: !0, value: this.binds._getStartDate}, getEndDate: {configurable: !0, value: this.binds._getEndDate}}), this.picker.off("view", this.binds.onView), this.picker.off("input", this.binds.onInput), this.picker.off("change", this.binds.onChange), this.picker.off("click", this.binds.onClick)
        }

        onView(t) {
            let {view: e, target: i} = t.detail;
            if ("Main" === e) {
                this.rangePlugin = this.picker.PluginManager.getInstance("RangePlugin");
                let n = document.createElement("div");
                if (n.className = "time-plugin-container", this.rangePlugin) {
                    let s = this.getStartInput();
                    n.appendChild(s), this.picker.trigger("view", {view: "TimePluginInput", target: s});
                    let r = this.getEndInput();
                    n.appendChild(r), this.picker.trigger("view", {view: "TimePluginInput", target: r})
                } else {
                    let o = this.getSingleInput();
                    n.appendChild(o), this.picker.trigger("view", {view: "TimePluginInput", target: o})
                }
                i.appendChild(n), this.picker.trigger("view", {view: "TimePluginContainer", target: n})
            }
        }

        onInput(t) {
            let i = t.target;
            if (i instanceof HTMLInputElement && i.classList.contains("time-plugin-input")) {
                let n = this.timePicked[i.name] || new e, [s, r] = i.value.split(":");
                n.setHours(Number(s) || 0, Number(r) || 0, 0, 0), this.picker.options.autoApply ? (this.timePicked[i.name] = n, this.picker.updateValues()) : this.timePrePicked[i.name] = n
            }
        }

        onChange(t) {
            let i = t.target;
            if (i instanceof HTMLSelectElement && i.classList.contains("time-plugin-custom-input")) {
                let [, n, s] = i.name.match(/(\w+)\[(\w+)\]/), r = Number(i.value), o = new e;
                switch (!this.picker.options.autoApply && this.timePrePicked[n] instanceof Date ? o = this.timePrePicked[n].clone() : this.timePicked[n] instanceof Date && (o = this.timePicked[n].clone()), s) {
                    case"HH":
                        if (this.options.format12) {
                            let a = i.closest(".time-plugin-custom-block").querySelector(`select[name="${n}[period]"]`).value, l = this.handleFormat12(a, o, r);
                            o.setHours(l.getHours(), l.getMinutes(), l.getSeconds(), 0)
                        } else o.setHours(r, o.getMinutes(), o.getSeconds(), 0);
                        break;
                    case"mm":
                        o.setHours(o.getHours(), r, o.getSeconds(), 0);
                        break;
                    case"ss":
                        o.setHours(o.getHours(), o.getMinutes(), r, 0);
                        break;
                    case"period":
                        if (this.options.format12) {
                            let c = i.closest(".time-plugin-custom-block").querySelector(`select[name="${n}[HH]"]`).value, h = this.handleFormat12(i.value, o, Number(c));
                            o.setHours(h.getHours(), h.getMinutes(), h.getSeconds(), 0)
                        }
                }
                if (this.picker.options.autoApply) this.timePicked[n] = o, this.picker.updateValues(); else {
                    this.timePrePicked[n] = o;
                    let u = this.picker.ui.container.querySelector(".apply-button");
                    if (this.rangePlugin) {
                        let d = this.rangePlugin.options, p = this.picker.datePicked, f = d.strict && 2 === p.length || !d.strict && p.length > 0 || !p.length && d.strict && d.startDate instanceof Date && d.endDate instanceof Date || !p.length && !d.strict && (d.startDate instanceof Date || d.endDate instanceof Date);
                        u.disabled = !f
                    } else this.picker.datePicked.length && (u.disabled = !1)
                }
            }
        }

        onClick(t) {
            let e = t.target;
            if (e instanceof HTMLElement) {
                let i = e.closest(".unit");
                if (!(i instanceof HTMLElement)) return;
                this.picker.isApplyButton(i) && (Object.keys(this.timePicked).forEach(t => {
                    this.timePrePicked[t] instanceof Date && (this.timePicked[t] = this.timePrePicked[t].clone())
                }), this.picker.updateValues(), this.timePrePicked = {input: null, start: null, end: null}), this.picker.isCancelButton(i) && (this.timePrePicked = {input: null, start: null, end: null}, this.picker.renderAll())
            }
        }

        setTime(t) {
            let e = this.handleTimeString(t);
            this.timePicked.input = e.clone(), this.picker.renderAll(), this.picker.updateValues()
        }

        setStartTime(t) {
            let e = this.handleTimeString(t);
            this.timePicked.start = e.clone(), this.picker.renderAll(), this.picker.updateValues()
        }

        setEndTime(t) {
            let e = this.handleTimeString(t);
            this.timePicked.end = e.clone(), this.picker.renderAll(), this.picker.updateValues()
        }

        handleTimeString(t) {
            let i = new e, [n, s, r] = t.split(":").map(t => Number(t)), o = n && !Number.isNaN(n) ? n : 0, a = s && !Number.isNaN(s) ? s : 0, l = r && !Number.isNaN(r) ? r : 0;
            return i.setHours(o, a, l, 0), i
        }

        getDate() {
            if (this.picker.options.date instanceof Date) {
                let t = new e(this.picker.options.date, this.picker.options.format);
                if (this.timePicked.input instanceof Date) {
                    let i = this.timePicked.input;
                    t.setHours(i.getHours(), i.getMinutes(), i.getSeconds(), 0)
                }
                return t
            }
            return null
        }

        getStartDate() {
            if (this.rangePlugin.options.startDate instanceof Date) {
                let t = new e(this.rangePlugin.options.startDate, this.picker.options.format);
                if (this.timePicked.start instanceof Date) {
                    let i = this.timePicked.start;
                    t.setHours(i.getHours(), i.getMinutes(), i.getSeconds(), 0)
                }
                return t
            }
            return null
        }

        getEndDate() {
            if (this.rangePlugin.options.endDate instanceof Date) {
                let t = new e(this.rangePlugin.options.endDate, this.picker.options.format);
                if (this.timePicked.end instanceof Date) {
                    let i = this.timePicked.end;
                    t.setHours(i.getHours(), i.getMinutes(), i.getSeconds(), 0)
                }
                return t
            }
            return null
        }

        getSingleInput() {
            return this.options.native ? this.getNativeInput("input") : this.getCustomInput("input")
        }

        getStartInput() {
            return this.options.native ? this.getNativeInput("start") : this.getCustomInput("start")
        }

        getEndInput() {
            return this.options.native ? this.getNativeInput("end") : this.getCustomInput("end")
        }

        getNativeInput(t) {
            let e = document.createElement("input");
            e.type = "time", e.name = t, e.className = "time-plugin-input unit";
            let i = this.timePicked[t];
            if (i) {
                let n = `0${i.getHours()}`.slice(-2), s = `0${i.getMinutes()}`.slice(-2);
                e.value = `${n}:${s}`
            }
            return e
        }

        getCustomInput(t) {
            let e = document.createElement("div");
            e.className = "time-plugin-custom-block";
            let i = document.createElement("select");
            i.className = "time-plugin-custom-input unit", i.name = `${t}[HH]`;
            let n = this.options.format12 ? 1 : 0, s = this.options.format12 ? 13 : 24, r = null;
            !this.picker.options.autoApply && this.timePrePicked[t] instanceof Date ? r = this.timePrePicked[t].clone() : this.timePicked[t] instanceof Date && (r = this.timePicked[t].clone());
            for (let o = n; o < s; o += this.options.stepHours) {
                let a = document.createElement("option");
                a.value = String(o), a.text = String(o), r && (this.options.format12 ? (r.getHours() % 12 ? r.getHours() % 12 : 12) === o && (a.selected = !0) : r.getHours() === o && (a.selected = !0)), i.appendChild(a)
            }
            e.appendChild(i);
            let l = document.createElement("select");
            l.className = "time-plugin-custom-input unit", l.name = `${t}[mm]`;
            for (let c = 0; c < 60; c += this.options.stepMinutes) {
                let h = document.createElement("option");
                h.value = `0${String(c)}`.slice(-2), h.text = `0${String(c)}`.slice(-2), r && r.getMinutes() === c && (h.selected = !0), l.appendChild(h)
            }
            if (e.appendChild(l), this.options.seconds) {
                let u = document.createElement("select");
                u.className = "time-plugin-custom-input unit", u.name = `${t}[ss]`;
                for (let d = 0; d < 60; d += this.options.stepSeconds) {
                    let p = document.createElement("option");
                    p.value = `0${String(d)}`.slice(-2), p.text = `0${String(d)}`.slice(-2), r && r.getSeconds() === d && (p.selected = !0), u.appendChild(p)
                }
                e.appendChild(u)
            }
            if (this.options.format12) {
                let f = document.createElement("select");
                f.className = "time-plugin-custom-input unit", f.name = `${t}[period]`, ["AM", "PM"].forEach(t => {
                    let e = document.createElement("option");
                    e.value = t, e.text = t, r && "PM" === t && r.getHours() >= 12 && (e.selected = !0), f.appendChild(e)
                }), e.appendChild(f)
            }
            return e
        }

        handleFormat12(t, e, i) {
            let n = e.clone();
            switch (t) {
                case"AM":
                    12 === i ? n.setHours(0, n.getMinutes(), n.getSeconds(), 0) : n.setHours(i, n.getMinutes(), n.getSeconds(), 0);
                    break;
                case"PM":
                    12 !== i ? n.setHours(i + 12, n.getMinutes(), n.getSeconds(), 0) : n.setHours(i, n.getMinutes(), n.getSeconds(), 0)
            }
            return n
        }

        parseValues() {
            if (this.rangePlugin) {
                if (this.rangePlugin.options.strict) {
                    if (this.rangePlugin.options.startDate && this.rangePlugin.options.endDate) {
                        let t = new e(this.rangePlugin.options.startDate, this.picker.options.format), i = new e(this.rangePlugin.options.endDate, this.picker.options.format);
                        this.timePicked.start = t.clone(), this.timePicked.end = i.clone()
                    }
                } else {
                    if (this.rangePlugin.options.startDate) {
                        let n = new e(this.rangePlugin.options.startDate, this.picker.options.format);
                        this.timePicked.start = n.clone()
                    }
                    if (this.rangePlugin.options.endDate) {
                        let s = new e(this.rangePlugin.options.endDate, this.picker.options.format);
                        this.timePicked.end = s.clone()
                    }
                }
                if (this.rangePlugin.options.elementEnd) {
                    if (this.rangePlugin.options.strict) {
                        if (this.picker.options.element instanceof HTMLInputElement && this.picker.options.element.value.length && this.rangePlugin.options.elementEnd instanceof HTMLInputElement && this.rangePlugin.options.elementEnd.value.length) {
                            let r = new e(this.picker.options.element.value, this.picker.options.format), o = new e(this.rangePlugin.options.elementEnd.value, this.picker.options.format);
                            this.timePicked.start = r.clone(), this.timePicked.end = o.clone()
                        }
                    } else {
                        if (this.picker.options.element instanceof HTMLInputElement && this.picker.options.element.value.length) {
                            let a = new e(this.picker.options.element.value, this.picker.options.format);
                            this.timePicked.start = a.clone()
                        }
                        if (this.rangePlugin.options.elementEnd instanceof HTMLInputElement && this.rangePlugin.options.elementEnd.value.length) {
                            let l = new e(this.rangePlugin.options.elementEnd.value, this.picker.options.format);
                            this.timePicked.start = l.clone()
                        }
                    }
                } else if (this.picker.options.element instanceof HTMLInputElement && this.picker.options.element.value.length) {
                    let [c, h] = this.picker.options.element.value.split(this.rangePlugin.options.delimiter);
                    if (this.rangePlugin.options.strict) {
                        if (c && h) {
                            let u = new e(c, this.picker.options.format), d = new e(h, this.picker.options.format);
                            this.timePicked.start = u.clone(), this.timePicked.end = d.clone()
                        }
                    } else {
                        if (c) {
                            let p = new e(c, this.picker.options.format);
                            this.timePicked.start = p.clone()
                        }
                        if (h) {
                            let f = new e(h, this.picker.options.format);
                            this.timePicked.start = f.clone()
                        }
                    }
                }
            } else {
                if (this.picker.options.date) {
                    let m = new e(this.picker.options.date, this.picker.options.format);
                    this.timePicked.input = m.clone()
                }
                if (this.picker.options.element instanceof HTMLInputElement && this.picker.options.element.value.length) {
                    let g = new e(this.picker.options.element.value, this.picker.options.format);
                    this.timePicked.input = g.clone()
                }
            }
        }
    }, t.create = i, t.easepick = n, Object.defineProperty(t, "__esModule", {value: !0})
}), function (t, e) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
        var i = e();
        for (var n in i) ("object" == typeof exports ? exports : t)[n] = i[n]
    }
}(window, function () {
    return function (t) {
        var e = {};

        function i(n) {
            if (e[n]) return e[n].exports;
            var s = e[n] = {i: n, l: !1, exports: {}};
            return t[n].call(s.exports, s, s.exports, i), s.l = !0, s.exports
        }

        return i.m = t, i.c = e, i.d = function (t, e, n) {
            i.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
        }, i.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
        }, i.t = function (t, e) {
            if (1 & e && (t = i(t)), 8 & e || 4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (i.r(n), Object.defineProperty(n, "default", {enumerable: !0, value: t}), 2 & e && "string" != typeof t) for (var s in t) i.d(n, s, (function (e) {
                return t[e]
            }).bind(null, s));
            return n
        }, i.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return i.d(e, "a", e), e
        }, i.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, i.p = "", i(i.s = 0)
    }([function (t, e, i) {
        "use strict";
        i.r(e);
        var n, s = "fslightbox-", r = "".concat(s, "styles"), o = "".concat(s, "cursor-grabbing"), a = "".concat(s, "full-dimension"), l = "".concat(s, "flex-centered"), c = "".concat(s, "open"), h = "".concat(s, "transform-transition"), u = "".concat(s, "absoluted"), d = "".concat(s, "slide-btn"), p = "".concat(d, "-container"), f = "".concat(s, "fade-in"), m = "".concat(s, "fade-out"), g = f + "-strong", y = m + "-strong", v = "".concat(s, "opacity-"), b = "".concat(v, "1"), _ = "".concat(s, "source");

        function w(t) {
            return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function x(t) {
            var e, i = t.props, n = 0, s = {};
            this.getSourceTypeFromLocalStorageByUrl = function (t) {
                return e[t] ? e[t] : r(t)
            }, this.handleReceivedSourceTypeForUrl = function (t, i) {
                !1 === s[i] && (n--, "invalid" !== t ? s[i] = t : delete s[i], 0 === n && (function (t, e) {
                    for (var i in e) t[i] = e[i]
                }(e, s), localStorage.setItem("fslightbox-types", JSON.stringify(e))))
            };
            var r = function (t) {
                n++, s[t] = !1
            };
            i.disableLocalStorage ? (this.getSourceTypeFromLocalStorageByUrl = function () {
            }, this.handleReceivedSourceTypeForUrl = function () {
            }) : (e = JSON.parse(localStorage.getItem("fslightbox-types"))) || (e = {}, this.getSourceTypeFromLocalStorageByUrl = r)
        }

        function k(t, e, i, n) {
            var s = t.data, r = t.elements.sources, o = i / n, a = 0;
            this.adjustSize = function () {
                if ((a = s.maxSourceWidth / o) < s.maxSourceHeight) return i < s.maxSourceWidth && (a = n), l();
                a = n > s.maxSourceHeight ? s.maxSourceHeight : n, l()
            };
            var l = function () {
                r[e].style.width = a * o + "px", r[e].style.height = a + "px"
            }
        }

        function D(t, e) {
            var i = this, n = t.collections.sourceSizers, s = t.elements, r = s.sourceAnimationWrappers, o = s.sourceMainWrappers, a = s.sources, l = t.resolve;

            function c(t, i) {
                n[e] = l(k, [e, t, i]), n[e].adjustSize()
            }

            this.runActions = function (t, n) {
                a[e].classList.add(b), r[e].classList.add(g), o[e].removeChild(o[e].firstChild), c(t, n), i.runActions = c
            }
        }

        function C(t, e) {
            var i, n = this, s = t.elements.sources, r = t.props, o = (0, t.resolve)(D, [e]);
            this.handleImageLoad = function (t) {
                var e = t.target, i = e.naturalWidth, n = e.naturalHeight;
                o.runActions(i, n)
            }, this.handleVideoLoad = function (t) {
                var e = t.target, n = e.videoWidth, s = e.videoHeight;
                i = !0, o.runActions(n, s)
            }, this.handleNotMetaDatedVideoLoad = function () {
                i || n.handleYoutubeLoad()
            }, this.handleYoutubeLoad = function () {
                var t = 1920, e = 1080;
                r.maxYoutubeDimensions && (t = r.maxYoutubeDimensions.width, e = r.maxYoutubeDimensions.height), o.runActions(t, e)
            }, this.handleCustomLoad = function () {
                setTimeout(function () {
                    var t = s[e];
                    o.runActions(t.offsetWidth, t.offsetHeight)
                })
            }
        }

        function S(t, e, i) {
            var n = t.elements.sources, s = t.props.customClasses, r = s[e] ? s[e] : "";
            n[e].className = i + " " + r
        }

        function T(t, e) {
            var i = t.elements.sources, n = t.props.customAttributes;
            for (var s in n[e]) i[e].setAttribute(s, n[e][s])
        }

        function E(t, e) {
            var i = t.collections.sourceLoadHandlers, n = t.elements, s = n.sources, r = n.sourceAnimationWrappers, o = t.props.sources;
            s[e] = document.createElement("img"), S(t, e, _), s[e].src = o[e], s[e].onload = i[e].handleImageLoad, T(t, e), r[e].appendChild(s[e])
        }

        function A(t, e) {
            var i = t.collections.sourceLoadHandlers, n = t.elements, s = n.sources, r = n.sourceAnimationWrappers, o = t.props, a = o.sources, l = o.videosPosters;
            s[e] = document.createElement("video"), S(t, e, _), s[e].src = a[e], s[e].onloadedmetadata = function (t) {
                i[e].handleVideoLoad(t)
            }, s[e].controls = !0, T(t, e), l[e] && (s[e].poster = l[e]);
            var c = document.createElement("source");
            c.src = a[e], s[e].appendChild(c), setTimeout(i[e].handleNotMetaDatedVideoLoad, 3e3), r[e].appendChild(s[e])
        }

        function P(t, e) {
            var i = t.collections.sourceLoadHandlers, n = t.elements, r = n.sources, o = n.sourceAnimationWrappers, a = t.props.sources;
            r[e] = document.createElement("iframe"), S(t, e, "".concat(_, " ").concat(s, "youtube-iframe")), r[e].src = "https://www.youtube.com/embed/".concat(a[e].match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2], "?enablejsapi=1"), r[e].allowFullscreen = !0, T(t, e), o[e].appendChild(r[e]), i[e].handleYoutubeLoad()
        }

        function L(t, e) {
            var i = t.collections.sourceLoadHandlers, n = t.elements, s = n.sources, r = n.sourceAnimationWrappers, o = t.props.sources;
            s[e] = o[e], S(t, e, "".concat(s[e].className, " ").concat(_)), r[e].appendChild(s[e]), i[e].handleCustomLoad()
        }

        function M(t, e) {
            var i = t.elements, n = i.sources, r = i.sourceAnimationWrappers, o = i.sourceMainWrappers;
            t.props.sources, n[e] = document.createElement("div"), n[e].className = "".concat(s, "invalid-file-wrapper ").concat(l), n[e].innerHTML = "Invalid source", r[e].classList.add(g), r[e].appendChild(n[e]), o[e].removeChild(o[e].firstChild)
        }

        function O(t) {
            var e = t.collections, i = e.sourceLoadHandlers, n = e.sourcesRenderFunctions, s = t.core.sourceDisplayFacade, r = t.resolve;
            this.runActionsForSourceTypeAndIndex = function (e, o) {
                var a;
                switch ("invalid" !== e && (i[o] = r(C, [o])), e) {
                    case"image":
                        a = E;
                        break;
                    case"video":
                        a = A;
                        break;
                    case"youtube":
                        a = P;
                        break;
                    case"custom":
                        a = L;
                        break;
                    default:
                        a = M
                }
                n[o] = function () {
                    return a(t, o)
                }, s.displaySourcesWhichShouldBeDisplayed()
            }
        }

        function I() {
            var t, e, i, n = {
                isUrlYoutubeOne: function (t) {
                    var e = document.createElement("a");
                    return e.href = t, "www.youtube.com" === e.hostname
                }, getTypeFromResponseContentType: function (t) {
                    return t.slice(0, t.indexOf("/"))
                }
            };

            function s() {
                if (4 !== i.readyState) {
                    if (2 === i.readyState) {
                        var t;
                        switch (n.getTypeFromResponseContentType(i.getResponseHeader("content-type"))) {
                            case"image":
                                t = "image";
                                break;
                            case"video":
                                t = "video";
                                break;
                            default:
                                t = "invalid"
                        }
                        i.onreadystatechange = null, i.abort(), e(t)
                    }
                } else e("invalid")
            }

            this.setUrlToCheck = function (e) {
                t = e
            }, this.getSourceType = function (r) {
                if (n.isUrlYoutubeOne(t)) return r("youtube");
                e = r, (i = new XMLHttpRequest).onreadystatechange = s, i.open("GET", t, !0), i.send()
            }
        }

        function Y(t, e, i) {
            var n = t.props, s = n.types, r = n.type, o = n.sources, a = t.resolve;
            this.getTypeSetByClientForIndex = function (t) {
                var e;
                return s && s[t] ? e = s[t] : r && (e = r), e
            }, this.retrieveTypeWithXhrForIndex = function (t) {
                var n = a(I);
                n.setUrlToCheck(o[t]), n.getSourceType(function (n) {
                    e.handleReceivedSourceTypeForUrl(n, o[t]), i.runActionsForSourceTypeAndIndex(n, t)
                })
            }
        }

        function z(t, e) {
            var i = t.componentsServices.hideSourceLoaderIfNotYetCollection, n = t.elements, s = n.sourceWrappersContainer, r = n.sourceMainWrappers;
            r[e] = document.createElement("div"), r[e].className = "".concat(u, " ").concat(a, " ").concat(l), r[e].innerHTML = '<div class="fslightbox-loader"><div></div><div></div><div></div><div></div></div>';
            var o, c, h, d, p, f = r[e].firstChild;
            i[e] = function () {
                r[e].contains(f) && r[e].removeChild(f)
            }, s.appendChild(r[e]), o = t, c = e, d = (h = o.elements).sourceMainWrappers, (p = h.sourceAnimationWrappers)[c] = document.createElement("div"), d[c].appendChild(p[c])
        }

        function H(t, e, i, n) {
            var r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            r.setAttributeNS(null, "width", e), r.setAttributeNS(null, "height", e), r.setAttributeNS(null, "viewBox", i);
            var o = document.createElementNS("http://www.w3.org/2000/svg", "path");
            return o.setAttributeNS(null, "class", "".concat(s, "svg-path")), o.setAttributeNS(null, "d", n), r.appendChild(o), t.appendChild(r), r
        }

        function N(t, e) {
            var i = document.createElement("div");
            return i.className = "".concat(s, "toolbar-button ").concat(l), i.title = e, t.appendChild(i), i
        }

        function j(t, e) {
            var i = this, n = t.elements.sourceMainWrappers, s = t.props, r = 0;
            this.byValue = function (t) {
                return r = t, i
            }, this.negative = function () {
                o(-a())
            }, this.zero = function () {
                o(0)
            }, this.positive = function () {
                o(a())
            };
            var o = function (t) {
                n[e].style.transform = "translateX(".concat(t + r, "px)"), r = 0
            }, a = function () {
                return (1 + s.slideDistance) * innerWidth
            }
        }

        function R(t, e, i, n) {
            var s, r, o, a = t.elements.container, c = i.charAt(0).toUpperCase() + i.slice(1), h = document.createElement("div");
            h.className = "".concat(p, " ").concat(p, "-").concat(i), h.title = "".concat(c, " slide"), h.onclick = e, s = h, r = n, (o = document.createElement("div")).className = "".concat(d, " ").concat(l), H(o, "20px", "0 0 20 20", r), s.appendChild(o), a.appendChild(h)
        }

        function W(t, e) {
            var i = t.classList;
            i.contains(e) && i.remove(e)
        }

        function B(t) {
            var e = this, i = t.core, n = i.eventsDispatcher, s = i.fullscreenToggler, r = i.globalEventsController, o = i.scrollbarRecompensor, a = t.data, l = t.elements, h = t.props, u = t.sourcePointerProps;
            this.isLightboxFadingOut = !1, this.runActions = function () {
                e.isLightboxFadingOut = !0, l.container.classList.add(y), r.removeListeners(), h.exitFullscreenOnClose && a.isFullscreenOpen && s.exitFullscreen(), setTimeout(function () {
                    e.isLightboxFadingOut = !1, u.isPointering = !1, l.container.classList.remove(y), document.documentElement.classList.remove(c), o.removeRecompense(), document.body.removeChild(l.container), n.dispatch("onClose")
                }, 270)
            }
        }

        function F(t) {
            var e = t.core, i = e.lightboxCloser, n = e.fullscreenToggler, s = e.slideChangeFacade;
            this.listener = function (t) {
                switch (t.key) {
                    case"Escape":
                        i.closeLightbox();
                        break;
                    case"ArrowLeft":
                        s.changeToPrevious();
                        break;
                    case"ArrowRight":
                        s.changeToNext();
                        break;
                    case"F11":
                        t.preventDefault(), n.enterFullscreen()
                }
            }
        }

        function V(t) {
            var e = t.collections.sourceMainWrappersTransformers, i = t.elements, n = t.sourcePointerProps, s = t.stageIndexes;

            function r(t, i) {
                e[t].byValue(n.swipedX)[i]()
            }

            this.runActionsForEvent = function (t) {
                var e, a, l;
                i.container.contains(i.slideSwipingHoverer) || i.container.appendChild(i.slideSwipingHoverer), e = i.container, a = o, (l = e.classList).contains(a) || l.add(a), n.swipedX = t.screenX - n.downScreenX, r(s.current, "zero"), void 0 !== s.previous && n.swipedX > 0 ? r(s.previous, "negative") : void 0 !== s.next && n.swipedX < 0 && r(s.next, "positive")
            }
        }

        function q(t) {
            var e = t.props.sources, i = t.resolve, n = t.sourcePointerProps, s = i(V);
            1 === e.length ? this.listener = function () {
                n.swipedX = 1
            } : this.listener = function (t) {
                n.isPointering && s.runActionsForEvent(t)
            }
        }

        function U(t) {
            var e = t.collections.sourceMainWrappersTransformers, i = t.core.slideIndexChanger, n = t.elements.sourceMainWrappers, s = t.stageIndexes;
            this.runPositiveSwipedXActions = function () {
                void 0 === s.previous || (r("positive"), i.changeTo(s.previous)), r("zero")
            }, this.runNegativeSwipedXActions = function () {
                void 0 === s.next || (r("negative"), i.changeTo(s.next)), r("zero")
            };
            var r = function (t) {
                n[s.current].classList.add(h), e[s.current][t]()
            }
        }

        function X(t, e) {
            t.contains(e) && t.removeChild(e)
        }

        function G(t) {
            var e = t.core.lightboxCloser, i = t.elements, n = t.resolve, s = t.sourcePointerProps, r = n(U);
            this.runNoSwipeActions = function () {
                X(i.container, i.slideSwipingHoverer), s.isSourceDownEventTarget || e.closeLightbox(), s.isPointering = !1
            }, this.runActions = function () {
                s.swipedX > 0 ? r.runPositiveSwipedXActions() : r.runNegativeSwipedXActions(), X(i.container, i.slideSwipingHoverer), i.container.classList.remove(o), s.isPointering = !1
            }
        }

        function Q(t) {
            var e = t.resolve, i = t.sourcePointerProps, n = e(G);
            this.listener = function () {
                i.isPointering && (i.swipedX ? n.runActions() : n.runNoSwipeActions())
            }
        }

        "object" === ("undefined" == typeof document ? "undefined" : w(document)) && ((n = document.createElement("style")).className = r, n.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:pinch-zoom;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightbox-loader{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightbox-loader div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightbox-loader 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightbox-loader div:nth-child(1){animation-delay:-.45s}.fslightbox-loader div:nth-child(2){animation-delay:-.3s}.fslightbox-loader div:nth-child(3){animation-delay:-.15s}@keyframes fslightbox-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}")), document.head.appendChild(n));

        function Z(t, e, i) {
            return (Z = !function t() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                    })), !0
                } catch (e) {
                    return !1
                }
            }() ? function (t, e, i) {
                var n = [null];
                n.push.apply(n, e);
                var s = new (Function.bind.apply(t, n));
                return i && K(s, i.prototype), s
            } : Reflect.construct).apply(null, arguments)
        }

        function K(t, e) {
            return (K = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function J(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = Array(e); i < e; i++) n[i] = t[i];
            return n
        }

        function tt() {
            for (var t = document.getElementsByTagName("a"), e = function (e) {
                if (!t[e].hasAttribute("data-fslightbox")) return "continue";
                var i = t[e].getAttribute("data-fslightbox"), n = t[e].getAttribute("href");
                fsLightboxInstances[i] || (fsLightboxInstances[i] = new FsLightbox);
                var s = null;
                "#" === n.charAt(0) ? (s = document.getElementById(n.substring(1)).cloneNode(!0)).removeAttribute("id") : s = n, fsLightboxInstances[i].props.sources.push(s), fsLightboxInstances[i].elements.a.push(t[e]);
                var r = fsLightboxInstances[i].props.sources.length - 1;
                t[e].onclick = function (t) {
                    t.preventDefault(), fsLightboxInstances[i].open(r)
                }, u("types", "data-type"), u("videosPosters", "data-video-poster"), u("customClasses", "data-class"), u("customClasses", "data-custom-class");
                for (var o = ["href", "data-fslightbox", "data-type", "data-video-poster", "data-class", "data-custom-class"], a = t[e].attributes, l = fsLightboxInstances[i].props.customAttributes, c = 0; c < a.length; c++) if (-1 === o.indexOf(a[c].name) && "data-" === a[c].name.substr(0, 5)) {
                    l[r] || (l[r] = {});
                    var h = a[c].name.substr(5);
                    l[r][h] = a[c].value
                }

                function u(n, s) {
                    t[e].hasAttribute(s) && (fsLightboxInstances[i].props[n][r] = t[e].getAttribute(s))
                }
            }, i = 0; i < t.length; i++) e(i);
            var n = Object.keys(fsLightboxInstances);
            window.fsLightbox = fsLightboxInstances[n[n.length - 1]]
        }

        window.FsLightbox = function () {
            var t = this;
            this.props = {sources: [], customAttributes: [], customClasses: [], types: [], videosPosters: [], slideDistance: .3}, this.data = {isInitialized: !1, isFullscreenOpen: !1, maxSourceWidth: 0, maxSourceHeight: 0, scrollbarWidth: 0}, this.sourcePointerProps = {downScreenX: null, isPointering: !1, isSourceDownEventTarget: !1, swipedX: 0}, this.stageIndexes = {}, this.elements = {a: [], container: null, slideSwipingHoverer: null, sourceWrappersContainer: null, sources: [], sourceMainWrappers: [], sourceAnimationWrappers: []}, this.componentsServices = {
                enterFullscreen: null, exitFullscreen: null, hideSourceLoaderIfNotYetCollection: [], setSlideNumber: function () {
                }
            }, this.resolve = function (e) {
                var i, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return n.unshift(t), Z(e, function (t) {
                    if (Array.isArray(t)) return J(t)
                }(i = n) || function (t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(i) || function (t, e) {
                    if (t) {
                        if ("string" == typeof t) return J(t, e);
                        var i = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i) return Array.from(t);
                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return J(t, e)
                    }
                }(i) || function () {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }())
            }, this.collections = {sourceMainWrappersTransformers: [], sourceLoadHandlers: [], sourcesRenderFunctions: [], sourceSizers: []}, this.core = {classFacade: {}, eventsDispatcher: {}, fullscreenToggler: {}, globalEventsController: {}, lightboxCloser: {}, lightboxOpener: {}, lightboxUpdater: {}, scrollbarRecompensor: {}, slideChangeFacade: {}, slideIndexChanger: {}, sourcesPointerDown: {}, sourceDisplayFacade: {}, stageManager: {}, windowResizeActioner: {}}, function t(e) {
                var i = e.collections.sourceMainWrappersTransformers, n = e.componentsServices, r = e.core, o = r.eventsDispatcher, d = r.lightboxOpener, p = r.globalEventsController, y = r.scrollbarRecompensor, v = r.sourceDisplayFacade, b = r.stageManager, _ = r.windowResizeActioner, w = e.data, k = e.elements, D = e.stageIndexes;
                d.open = function () {
                    var r, d, C, S, T, E, A, P, L, M, I, V, U, X, G, Z, K, J, tt, te, ti, tn, ts, tr, to, ta, tl, tc, th, tu, td, tp, tf, tm, tg, ty, tv, t$, t8, tb, t_, tw, tx, tk, tD, tC, tS, tT, tE, tA, tP, tL, tM, t0, tO, tI, t9, tY, tz, tH, tN, tj, tR, t1, tW, tB, tF, tV, t2, t3, t4, tq, t7, t5, tU, t6, tX, tG, tQ, tZ, tK, tJ, et, ee, ei, en, es, er, eo, ea, el, ec, eh, eu, ed, ep, ef = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    D.current = ef, w.isInitialized ? o.dispatch("onShow") : (d = (r = e).core.eventsDispatcher, C = r.data, S = r.elements, T = r.props.sources, C.isInitialized = !0, C.scrollbarWidth = function t(e) {
                        var i = e.props.disableLocalStorage;
                        if (!i) {
                            var n = localStorage.getItem("fslightbox-scrollbar-width");
                            if (n) return n
                        }
                        var s, r, o, a = ((r = (s = document.createElement("div")).style).visibility = "hidden", r.width = "100px", r.msOverflowStyle = "scrollbar", r.overflow = "scroll", s), l = ((o = document.createElement("div")).style.width = "100%", o);
                        document.body.appendChild(a);
                        var c = a.offsetWidth;
                        a.appendChild(l);
                        var h = l.offsetWidth;
                        document.body.removeChild(a);
                        var u = c - h;
                        return i || localStorage.setItem("fslightbox-scrollbar-width", u.toString()), u
                    }(r), function (t) {
                        for (var e = t.collections.sourceMainWrappersTransformers, i = t.props.sources, n = t.resolve, s = 0; s < i.length; s++) e[s] = n(j, [s])
                    }(r), P = (A = E = r).core.classFacade, L = A.elements, P.removeFromEachElementClassIfContains = function (t, e) {
                        for (var i = 0; i < L[t].length; i++) W(L[t][i], e)
                    }, I = (M = E).core.eventsDispatcher, V = M.props, I.dispatch = function (t) {
                        V[t] && V[t]()
                    }, X = (U = E).componentsServices, (G = U.core.fullscreenToggler).enterFullscreen = function () {
                        X.enterFullscreen();
                        var t = document.documentElement;
                        t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen()
                    }, G.exitFullscreen = function () {
                        X.exitFullscreen(), document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
                    }, J = (K = (Z = E).core).globalEventsController, tt = K.windowResizeActioner, ti = (te = Z.resolve)(F), tn = te(q), ts = te(Q), J.attachListeners = function () {
                        document.addEventListener("pointermove", tn.listener), document.addEventListener("pointerup", ts.listener), addEventListener("resize", tt.runActions), document.addEventListener("keydown", ti.listener)
                    }, J.removeListeners = function () {
                        document.removeEventListener("pointermove", tn.listener), document.removeEventListener("pointerup", ts.listener), removeEventListener("resize", tt.runActions), document.removeEventListener("keydown", ti.listener)
                    }, to = (tr = E).core.lightboxCloser, ta = (0, tr.resolve)(B), to.closeLightbox = function () {
                        ta.isLightboxFadingOut || ta.runActions()
                    }, t(E), function (t) {
                        var e = t.data, i = t.core.scrollbarRecompensor;

                        function n() {
                            document.body.offsetHeight > innerHeight && (document.body.style.marginRight = e.scrollbarWidth + "px")
                        }

                        i.addRecompense = function () {
                            "complete" === document.readyState ? n() : addEventListener("load", function () {
                                n(), i.addRecompense = n
                            })
                        }, i.removeRecompense = function () {
                            document.body.style.removeProperty("margin-right")
                        }
                    }(E), th = (tc = (tl = E).core).slideChangeFacade, tu = tc.slideIndexChanger, td = tc.stageManager, tl.props.sources.length > 1 ? (th.changeToPrevious = function () {
                        tu.jumpTo(td.getPreviousSlideIndex())
                    }, th.changeToNext = function () {
                        tu.jumpTo(td.getNextSlideIndex())
                    }) : (th.changeToPrevious = function () {
                    }, th.changeToNext = function () {
                    }), ty = (tp = E).collections.sourceMainWrappersTransformers, tv = tp.componentsServices, t8 = (t$ = tp.core).classFacade, tb = t$.slideIndexChanger, t_ = t$.sourceDisplayFacade, tw = t$.stageManager, tx = tp.elements.sourceAnimationWrappers, tk = tp.stageIndexes, tD = (tf = function () {
                        t8.removeFromEachElementClassIfContains("sourceAnimationWrappers", m)
                    }, tm = 300, tg = [], function () {
                        tg.push(!0), setTimeout(function () {
                            tg.pop(), tg.length || tf()
                        }, tm)
                    }), tb.changeTo = function (t) {
                        tk.current = t, tw.updateStageIndexes(), tv.setSlideNumber(t + 1), t_.displaySourcesWhichShouldBeDisplayed()
                    }, tb.jumpTo = function (t) {
                        var e = tk.current;
                        tb.changeTo(t), t8.removeFromEachElementClassIfContains("sourceMainWrappers", h), W(tx[e], g), W(tx[e], f), tx[e].classList.add(m), W(tx[t], g), W(tx[t], m), tx[t].classList.add(f), tD(), ty[t].zero(), setTimeout(function () {
                            e !== tk.current && ty[e].negative()
                        }, 270)
                    }, tT = (tS = (tC = E).core).classFacade, tE = tS.sourcesPointerDown, tA = tC.elements.sources, tP = tC.sourcePointerProps, tL = tC.stageIndexes, tE.listener = function (t) {
                        "VIDEO" !== t.target.tagName && t.preventDefault(), tP.isPointering = !0, tP.downScreenX = t.screenX, tP.swipedX = 0;
                        var e = tA[tL.current];
                        e && e.contains(t.target) ? tP.isSourceDownEventTarget = !0 : tP.isSourceDownEventTarget = !1, tT.removeFromEachElementClassIfContains("sourceMainWrappers", h)
                    }, function (t) {
                        var e = t.collections.sourcesRenderFunctions, i = t.core.sourceDisplayFacade, n = t.props, s = t.stageIndexes;

                        function r(t) {
                            e[t] && (e[t](), delete e[t])
                        }

                        i.displaySourcesWhichShouldBeDisplayed = function () {
                            if (n.loadOnlyCurrentSource) r(s.current); else for (var t in s) r(s[t])
                        }
                    }(E), t0 = (tM = E).stageIndexes, tO = tM.core.stageManager, tI = tM.props.sources.length - 1, tO.getPreviousSlideIndex = function () {
                        return 0 === t0.current ? tI : t0.current - 1
                    }, tO.getNextSlideIndex = function () {
                        return t0.current === tI ? 0 : t0.current + 1
                    }, tO.updateStageIndexes = 0 === tI ? function () {
                    } : 1 === tI ? function () {
                        0 === t0.current ? (t0.next = 1, delete t0.previous) : (t0.previous = 0, delete t0.next)
                    } : function () {
                        t0.previous = tO.getPreviousSlideIndex(), t0.next = tO.getNextSlideIndex()
                    }, tO.isSourceInStage = tI <= 2 ? function () {
                        return !0
                    } : function (t) {
                        var e = t0.current;
                        if (0 === e && t === tI || e === tI && 0 === t) return !0;
                        var i = e - t;
                        return -1 === i || 0 === i || 1 === i
                    }, tz = (tY = (t9 = E).collections).sourceMainWrappersTransformers, tH = tY.sourceSizers, tN = t9.core.windowResizeActioner, tj = t9.data, tR = t9.elements.sourceMainWrappers, t1 = t9.props, tW = t9.stageIndexes, tN.runActions = function () {
                        innerWidth < 992 ? tj.maxSourceWidth = innerWidth : tj.maxSourceWidth = .9 * innerWidth, tj.maxSourceHeight = .9 * innerHeight;
                        for (var t = 0; t < t1.sources.length; t++) W(tR[t], h), t !== tW.current && tz[t].negative(), tH[t] && tH[t].adjustSize()
                    }, S.container = document.createElement("div"), S.container.className = "".concat(s, "container ").concat(a, " ").concat(g), (tF = r.elements).slideSwipingHoverer = document.createElement("div"), tF.slideSwipingHoverer.className = "".concat(s, "slide-swiping-hoverer ").concat(a, " ").concat(u), t2 = (tV = r).props.sources, t3 = tV.elements.container, (t4 = document.createElement("div")).className = "".concat(s, "nav"), t3.appendChild(t4), tq = tV, t7 = t4, (t5 = document.createElement("div")).className = "".concat(s, "toolbar"), t7.appendChild(t5), tU = tq, t6 = t5, tX = tU.componentsServices, tG = tU.core.fullscreenToggler, tQ = tU.data, tZ = "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z", (tK = N(t6)).title = "Enter fullscreen", tJ = H(tK, "20px", "0 0 18 18", tZ), tX.enterFullscreen = function () {
                        tQ.isFullscreenOpen = !0, tK.title = "Exit fullscreen", tJ.setAttributeNS(null, "width", "24px"), tJ.setAttributeNS(null, "height", "24px"), tJ.setAttributeNS(null, "viewBox", "0 0 950 1024"), tJ.firstChild.setAttributeNS(null, "d", "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z")
                    }, tX.exitFullscreen = function () {
                        tQ.isFullscreenOpen = !1, tK.title = "Enter fullscreen", tJ.setAttributeNS(null, "width", "20px"), tJ.setAttributeNS(null, "height", "20px"), tJ.setAttributeNS(null, "viewBox", "0 0 18 18"), tJ.firstChild.setAttributeNS(null, "d", tZ)
                    }, tK.onclick = function () {
                        tQ.isFullscreenOpen ? tG.exitFullscreen() : tG.enterFullscreen()
                    }, et = tq, (ei = N(t5, "Close")).onclick = et.core.lightboxCloser.closeLightbox, H(ei, "20px", "0 0 24 24", "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"), t2.length > 1 && (en = tV, es = t4, er = en.componentsServices, eo = en.props.sources, (ea = (en.stageIndexes, document.createElement("div"))).className = "".concat(s, "slide-number-container"), (el = document.createElement("div")).className = l, ec = document.createElement("span"), er.setSlideNumber = function (t) {
                        return ec.innerHTML = t
                    }, (eh = document.createElement("span")).className = "".concat(s, "slash"), (eu = document.createElement("div")).innerHTML = eo.length, ea.appendChild(el), el.appendChild(ec), el.appendChild(eh), el.appendChild(eu), es.appendChild(ea), setTimeout(function () {
                        el.offsetWidth > 55 && (ea.style.justifyContent = "flex-start")
                    })), function (t) {
                        var e = t.core.sourcesPointerDown, i = t.elements, n = t.props.sources, s = document.createElement("div");
                        s.className = "".concat(u, " ").concat(a), i.container.appendChild(s), s.addEventListener("pointerdown", e.listener), i.sourceWrappersContainer = s;
                        for (var r = 0; r < n.length; r++) z(t, r)
                    }(r), T.length > 1 && (ep = (ed = r).core.slideChangeFacade, R(ed, ep.changeToPrevious, "previous", "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"), R(ed, ep.changeToNext, "next", "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z")), function (t) {
                        for (var e = t.props.sources, i = t.resolve, n = i(x), s = i(O), r = i(Y, [n, s]), o = 0; o < e.length; o++) if ("string" == typeof e[o]) {
                            var a = r.getTypeSetByClientForIndex(o);
                            if (a) s.runActionsForSourceTypeAndIndex(a, o); else {
                                var l = n.getSourceTypeFromLocalStorageByUrl(e[o]);
                                l ? s.runActionsForSourceTypeAndIndex(l, o) : r.retrieveTypeWithXhrForIndex(o)
                            }
                        } else s.runActionsForSourceTypeAndIndex("custom", o)
                    }(r), d.dispatch("onInit")), b.updateStageIndexes(), v.displaySourcesWhichShouldBeDisplayed(), n.setSlideNumber(ef + 1), document.body.appendChild(k.container), document.documentElement.classList.add(c), y.addRecompense(), p.attachListeners(), _.runActions(), i[D.current].zero(), o.dispatch("onOpen")
                }
            }(this), this.open = function (e) {
                return t.core.lightboxOpener.open(e)
            }, this.close = function () {
                return t.core.lightboxCloser.closeLightbox()
            }
        }, window.fsLightboxInstances = {}, tt(), window.refreshFsLightbox = function () {
            for (var t in fsLightboxInstances) {
                var e = fsLightboxInstances[t].props;
                fsLightboxInstances[t] = new FsLightbox, fsLightboxInstances[t].props = e, fsLightboxInstances[t].props.sources = [], fsLightboxInstances[t].elements.a = []
            }
            tt()
        }
    }])
});