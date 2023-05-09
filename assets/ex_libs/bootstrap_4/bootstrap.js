/*! jQuery v3.6.4 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/animatedSelector,-effects/Tween | (c) OpenJS Foundation and other contributors | jquery.org/license */ ! function(e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function(g, e) {
  "use strict";
  var t = [],
      r = Object.getPrototypeOf,
      s = t.slice,
      v = t.flat ? function(e) {
          return t.flat.call(e)
      } : function(e) {
          return t.concat.apply([], e)
      },
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      y = n.hasOwnProperty,
      a = y.toString,
      l = a.call(Object),
      m = {},
      b = function(e) {
          return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
      },
      x = function(e) {
          return null != e && e === e.window
      },
      w = g.document,
      c = {
          type: !0,
          src: !0,
          nonce: !0,
          noModule: !0
      };

  function C(e, t, n) {
      var r, i, o = (n = n || w).createElement("script");
      if (o.text = e, t)
          for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
      n.head.appendChild(o).parentNode.removeChild(o)
  }

  function T(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
  }
  var f = "3.6.4 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/animatedSelector,-effects/Tween",
      E = function(e, t) {
          return new E.fn.init(e, t)
      };

  function d(e) {
      var t = !!e && "length" in e && e.length,
          n = T(e);
      return !b(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
  }
  E.fn = E.prototype = {
      jquery: f,
      constructor: E,
      length: 0,
      toArray: function() {
          return s.call(this)
      },
      get: function(e) {
          return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
      },
      pushStack: function(e) {
          var t = E.merge(this.constructor(), e);
          return t.prevObject = this, t
      },
      each: function(e) {
          return E.each(this, e)
      },
      map: function(n) {
          return this.pushStack(E.map(this, function(e, t) {
              return n.call(e, t, e)
          }))
      },
      slice: function() {
          return this.pushStack(s.apply(this, arguments))
      },
      first: function() {
          return this.eq(0)
      },
      last: function() {
          return this.eq(-1)
      },
      even: function() {
          return this.pushStack(E.grep(this, function(e, t) {
              return (t + 1) % 2
          }))
      },
      odd: function() {
          return this.pushStack(E.grep(this, function(e, t) {
              return t % 2
          }))
      },
      eq: function(e) {
          var t = this.length,
              n = +e + (e < 0 ? t : 0);
          return this.pushStack(0 <= n && n < t ? [this[n]] : [])
      },
      end: function() {
          return this.prevObject || this.constructor()
      },
      push: u,
      sort: t.sort,
      splice: t.splice
  }, E.extend = E.fn.extend = function() {
      var e, t, n, r, i, o, a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
      for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || b(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
          if (null != (e = arguments[s]))
              for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (E.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || E.isPlainObject(n) ? n : {}, i = !1, a[t] = E.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      return a
  }, E.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
          throw new Error(e)
      },
      noop: function() {},
      isPlainObject: function(e) {
          var t, n;
          return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = y.call(t, "constructor") && t.constructor) && a.call(n) === l)
      },
      isEmptyObject: function(e) {
          var t;
          for (t in e) return !1;
          return !0
      },
      globalEval: function(e, t, n) {
          C(e, {
              nonce: t && t.nonce
          }, n)
      },
      each: function(e, t) {
          var n, r = 0;
          if (d(e)) {
              for (n = e.length; r < n; r++)
                  if (!1 === t.call(e[r], r, e[r])) break
          } else
              for (r in e)
                  if (!1 === t.call(e[r], r, e[r])) break;
          return e
      },
      makeArray: function(e, t) {
          var n = t || [];
          return null != e && (d(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
      },
      inArray: function(e, t, n) {
          return null == t ? -1 : i.call(t, e, n)
      },
      merge: function(e, t) {
          for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
          return e.length = i, e
      },
      grep: function(e, t, n) {
          for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
          return r
      },
      map: function(e, t, n) {
          var r, i, o = 0,
              a = [];
          if (d(e))
              for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
          else
              for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
          return v(a)
      },
      guid: 1,
      support: m
  }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
      n["[object " + t + "]"] = t.toLowerCase()
  });
  var p = function(n) {
      var e, p, x, o, i, h, f, g, w, u, l, C, T, a, E, v, s, c, y, A = "sizzle" + 1 * new Date,
          d = n.document,
          N = 0,
          r = 0,
          m = ue(),
          b = ue(),
          S = ue(),
          k = ue(),
          D = function(e, t) {
              return e === t && (l = !0), 0
          },
          L = {}.hasOwnProperty,
          t = [],
          j = t.pop,
          q = t.push,
          O = t.push,
          P = t.slice,
          H = function(e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                  if (e[n] === t) return n;
              return -1
          },
          I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          R = "[\\x20\\t\\r\\n\\f]",
          B = "(?:\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
          M = "\\[" + R + "*(" + B + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + B + "))|)" + R + "*\\]",
          W = ":(" + B + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
          F = new RegExp(R + "+", "g"),
          $ = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
          z = new RegExp("^" + R + "*," + R + "*"),
          _ = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
          U = new RegExp(R + "|>"),
          V = new RegExp(W),
          X = new RegExp("^" + B + "$"),
          Q = {
              ID: new RegExp("^#(" + B + ")"),
              CLASS: new RegExp("^\\.(" + B + ")"),
              TAG: new RegExp("^(" + B + "|[*])"),
              ATTR: new RegExp("^" + M),
              PSEUDO: new RegExp("^" + W),
              CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
              bool: new RegExp("^(?:" + I + ")$", "i"),
              needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
          },
          Y = /HTML$/i,
          G = /^(?:input|select|textarea|button)$/i,
          K = /^h\d$/i,
          J = /^[^{]+\{\s*\[native \w/,
          Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ee = /[+~]/,
          te = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"),
          ne = function(e, t) {
              var n = "0x" + e.slice(1) - 65536;
              return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
          },
          re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          ie = function(e, t) {
              return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
          },
          oe = function() {
              C()
          },
          ae = xe(function(e) {
              return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
          }, {
              dir: "parentNode",
              next: "legend"
          });
      try {
          O.apply(t = P.call(d.childNodes), d.childNodes), t[d.childNodes.length].nodeType
      } catch (e) {
          O = {
              apply: t.length ? function(e, t) {
                  q.apply(e, P.call(t))
              } : function(e, t) {
                  var n = e.length,
                      r = 0;
                  while (e[n++] = t[r++]);
                  e.length = n - 1
              }
          }
      }

      function se(t, e, n, r) {
          var i, o, a, s, u, l, c, f = e && e.ownerDocument,
              d = e ? e.nodeType : 9;
          if (n = n || [], "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d) return n;
          if (!r && (C(e), e = e || T, E)) {
              if (11 !== d && (u = Z.exec(t)))
                  if (i = u[1]) {
                      if (9 === d) {
                          if (!(a = e.getElementById(i))) return n;
                          if (a.id === i) return n.push(a), n
                      } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
                  } else {
                      if (u[2]) return O.apply(n, e.getElementsByTagName(t)), n;
                      if ((i = u[3]) && p.getElementsByClassName && e.getElementsByClassName) return O.apply(n, e.getElementsByClassName(i)), n
                  } if (p.qsa && !k[t + " "] && (!v || !v.test(t)) && (1 !== d || "object" !== e.nodeName.toLowerCase())) {
                  if (c = t, f = e, 1 === d && (U.test(t) || _.test(t))) {
                      (f = ee.test(t) && ye(e.parentNode) || e) === e && p.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = A)), o = (l = h(t)).length;
                      while (o--) l[o] = (s ? "#" + s : ":scope") + " " + be(l[o]);
                      c = l.join(",")
                  }
                  try {
                      return O.apply(n, f.querySelectorAll(c)), n
                  } catch (e) {
                      k(t, !0)
                  } finally {
                      s === A && e.removeAttribute("id")
                  }
              }
          }
          return g(t.replace($, "$1"), e, n, r)
      }

      function ue() {
          var r = [];
          return function e(t, n) {
              return r.push(t + " ") > x.cacheLength && delete e[r.shift()], e[t + " "] = n
          }
      }

      function le(e) {
          return e[A] = !0, e
      }

      function ce(e) {
          var t = T.createElement("fieldset");
          try {
              return !!e(t)
          } catch (e) {
              return !1
          } finally {
              t.parentNode && t.parentNode.removeChild(t), t = null
          }
      }

      function fe(e, t) {
          var n = e.split("|"),
              r = n.length;
          while (r--) x.attrHandle[n[r]] = t
      }

      function de(e, t) {
          var n = t && e,
              r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
          if (r) return r;
          if (n)
              while (n = n.nextSibling)
                  if (n === t) return -1;
          return e ? 1 : -1
      }

      function pe(t) {
          return function(e) {
              return "input" === e.nodeName.toLowerCase() && e.type === t
          }
      }

      function he(n) {
          return function(e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t || "button" === t) && e.type === n
          }
      }

      function ge(t) {
          return function(e) {
              return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
          }
      }

      function ve(a) {
          return le(function(o) {
              return o = +o, le(function(e, t) {
                  var n, r = a([], e.length, o),
                      i = r.length;
                  while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
              })
          })
      }

      function ye(e) {
          return e && "undefined" != typeof e.getElementsByTagName && e
      }
      for (e in p = se.support = {}, i = se.isXML = function(e) {
              var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
              return !Y.test(t || n && n.nodeName || "HTML")
          }, C = se.setDocument = function(e) {
              var t, n, r = e ? e.ownerDocument || e : d;
              return r != T && 9 === r.nodeType && r.documentElement && (a = (T = r).documentElement, E = !i(T), d != T && (n = T.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), p.scope = ce(function(e) {
                  return a.appendChild(e).appendChild(T.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
              }), p.cssHas = ce(function() {
                  try {
                      return T.querySelector(":has(*,:jqfake)"), !1
                  } catch (e) {
                      return !0
                  }
              }), p.attributes = ce(function(e) {
                  return e.className = "i", !e.getAttribute("className")
              }), p.getElementsByTagName = ce(function(e) {
                  return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length
              }), p.getElementsByClassName = J.test(T.getElementsByClassName), p.getById = ce(function(e) {
                  return a.appendChild(e).id = A, !T.getElementsByName || !T.getElementsByName(A).length
              }), p.getById ? (x.filter.ID = function(e) {
                  var t = e.replace(te, ne);
                  return function(e) {
                      return e.getAttribute("id") === t
                  }
              }, x.find.ID = function(e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                      var n = t.getElementById(e);
                      return n ? [n] : []
                  }
              }) : (x.filter.ID = function(e) {
                  var n = e.replace(te, ne);
                  return function(e) {
                      var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                      return t && t.value === n
                  }
              }, x.find.ID = function(e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                      var n, r, i, o = t.getElementById(e);
                      if (o) {
                          if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                          i = t.getElementsByName(e), r = 0;
                          while (o = i[r++])
                              if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                      }
                      return []
                  }
              }), x.find.TAG = p.getElementsByTagName ? function(e, t) {
                  return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
              } : function(e, t) {
                  var n, r = [],
                      i = 0,
                      o = t.getElementsByTagName(e);
                  if ("*" === e) {
                      while (n = o[i++]) 1 === n.nodeType && r.push(n);
                      return r
                  }
                  return o
              }, x.find.CLASS = p.getElementsByClassName && function(e, t) {
                  if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
              }, s = [], v = [], (p.qsa = J.test(T.querySelectorAll)) && (ce(function(e) {
                  var t;
                  a.appendChild(e).innerHTML = "<a id='" + A + "'></a><select id='" + A + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + R + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + A + "-]").length || v.push("~="), (t = T.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + A + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
              }), ce(function(e) {
                  e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = T.createElement("input");
                  t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + R + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
              })), (p.matchesSelector = J.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                  p.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", W)
              }), p.cssHas || v.push(":has"), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = J.test(a.compareDocumentPosition), y = t || J.test(a.contains) ? function(e, t) {
                  var n = 9 === e.nodeType && e.documentElement || e,
                      r = t && t.parentNode;
                  return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
              } : function(e, t) {
                  if (t)
                      while (t = t.parentNode)
                          if (t === e) return !0;
                  return !1
              }, D = t ? function(e, t) {
                  if (e === t) return l = !0, 0;
                  var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e == T || e.ownerDocument == d && y(d, e) ? -1 : t == T || t.ownerDocument == d && y(d, t) ? 1 : u ? H(u, e) - H(u, t) : 0 : 4 & n ? -1 : 1)
              } : function(e, t) {
                  if (e === t) return l = !0, 0;
                  var n, r = 0,
                      i = e.parentNode,
                      o = t.parentNode,
                      a = [e],
                      s = [t];
                  if (!i || !o) return e == T ? -1 : t == T ? 1 : i ? -1 : o ? 1 : u ? H(u, e) - H(u, t) : 0;
                  if (i === o) return de(e, t);
                  n = e;
                  while (n = n.parentNode) a.unshift(n);
                  n = t;
                  while (n = n.parentNode) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r ? de(a[r], s[r]) : a[r] == d ? -1 : s[r] == d ? 1 : 0
              }), T
          }, se.matches = function(e, t) {
              return se(e, null, null, t)
          }, se.matchesSelector = function(e, t) {
              if (C(e), p.matchesSelector && E && !k[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                  var n = c.call(e, t);
                  if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
              } catch (e) {
                  k(t, !0)
              }
              return 0 < se(t, T, null, [e]).length
          }, se.contains = function(e, t) {
              return (e.ownerDocument || e) != T && C(e), y(e, t)
          }, se.attr = function(e, t) {
              (e.ownerDocument || e) != T && C(e);
              var n = x.attrHandle[t.toLowerCase()],
                  r = n && L.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
              return void 0 !== r ? r : p.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
          }, se.escape = function(e) {
              return (e + "").replace(re, ie)
          }, se.error = function(e) {
              throw new Error("Syntax error, unrecognized expression: " + e)
          }, se.uniqueSort = function(e) {
              var t, n = [],
                  r = 0,
                  i = 0;
              if (l = !p.detectDuplicates, u = !p.sortStable && e.slice(0), e.sort(D), l) {
                  while (t = e[i++]) t === e[i] && (r = n.push(i));
                  while (r--) e.splice(n[r], 1)
              }
              return u = null, e
          }, o = se.getText = function(e) {
              var t, n = "",
                  r = 0,
                  i = e.nodeType;
              if (i) {
                  if (1 === i || 9 === i || 11 === i) {
                      if ("string" == typeof e.textContent) return e.textContent;
                      for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                  } else if (3 === i || 4 === i) return e.nodeValue
              } else
                  while (t = e[r++]) n += o(t);
              return n
          }, (x = se.selectors = {
              cacheLength: 50,
              createPseudo: le,
              match: Q,
              attrHandle: {},
              find: {},
              relative: {
                  ">": {
                      dir: "parentNode",
                      first: !0
                  },
                  " ": {
                      dir: "parentNode"
                  },
                  "+": {
                      dir: "previousSibling",
                      first: !0
                  },
                  "~": {
                      dir: "previousSibling"
                  }
              },
              preFilter: {
                  ATTR: function(e) {
                      return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                  },
                  CHILD: function(e) {
                      return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                  },
                  PSEUDO: function(e) {
                      var t, n = !e[6] && e[2];
                      return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                  }
              },
              filter: {
                  TAG: function(e) {
                      var t = e.replace(te, ne).toLowerCase();
                      return "*" === e ? function() {
                          return !0
                      } : function(e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t
                      }
                  },
                  CLASS: function(e) {
                      var t = m[e + " "];
                      return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && m(e, function(e) {
                          return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                      })
                  },
                  ATTR: function(n, r, i) {
                      return function(e) {
                          var t = se.attr(e, n);
                          return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                      }
                  },
                  CHILD: function(h, e, t, g, v) {
                      var y = "nth" !== h.slice(0, 3),
                          m = "last" !== h.slice(-4),
                          b = "of-type" === e;
                      return 1 === g && 0 === v ? function(e) {
                          return !!e.parentNode
                      } : function(e, t, n) {
                          var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                              c = e.parentNode,
                              f = b && e.nodeName.toLowerCase(),
                              d = !n && !b,
                              p = !1;
                          if (c) {
                              if (y) {
                                  while (l) {
                                      a = e;
                                      while (a = a[l])
                                          if (b ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                      u = l = "only" === h && !u && "nextSibling"
                                  }
                                  return !0
                              }
                              if (u = [m ? c.firstChild : c.lastChild], m && d) {
                                  p = (s = (r = (i = (o = (a = c)[A] || (a[A] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === N && r[1]) && r[2], a = s && c.childNodes[s];
                                  while (a = ++s && a && a[l] || (p = s = 0) || u.pop())
                                      if (1 === a.nodeType && ++p && a === e) {
                                          i[h] = [N, s, p];
                                          break
                                      }
                              } else if (d && (p = s = (r = (i = (o = (a = e)[A] || (a[A] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === N && r[1]), !1 === p)
                                  while (a = ++s && a && a[l] || (p = s = 0) || u.pop())
                                      if ((b ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++p && (d && ((i = (o = a[A] || (a[A] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [N, p]), a === e)) break;
                              return (p -= v) === g || p % g == 0 && 0 <= p / g
                          }
                      }
                  },
                  PSEUDO: function(e, o) {
                      var t, a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                      return a[A] ? a(o) : 1 < a.length ? (t = [e, e, "", o], x.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                          var n, r = a(e, o),
                              i = r.length;
                          while (i--) e[n = H(e, r[i])] = !(t[n] = r[i])
                      }) : function(e) {
                          return a(e, 0, t)
                      }) : a
                  }
              },
              pseudos: {
                  not: le(function(e) {
                      var r = [],
                          i = [],
                          s = f(e.replace($, "$1"));
                      return s[A] ? le(function(e, t, n, r) {
                          var i, o = s(e, null, r, []),
                              a = e.length;
                          while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                      }) : function(e, t, n) {
                          return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                      }
                  }),
                  has: le(function(t) {
                      return function(e) {
                          return 0 < se(t, e).length
                      }
                  }),
                  contains: le(function(t) {
                      return t = t.replace(te, ne),
                          function(e) {
                              return -1 < (e.textContent || o(e)).indexOf(t)
                          }
                  }),
                  lang: le(function(n) {
                      return X.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                          function(e) {
                              var t;
                              do {
                                  if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                              } while ((e = e.parentNode) && 1 === e.nodeType);
                              return !1
                          }
                  }),
                  target: function(e) {
                      var t = n.location && n.location.hash;
                      return t && t.slice(1) === e.id
                  },
                  root: function(e) {
                      return e === a
                  },
                  focus: function(e) {
                      return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                  },
                  enabled: ge(!1),
                  disabled: ge(!0),
                  checked: function(e) {
                      var t = e.nodeName.toLowerCase();
                      return "input" === t && !!e.checked || "option" === t && !!e.selected
                  },
                  selected: function(e) {
                      return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                  },
                  empty: function(e) {
                      for (e = e.firstChild; e; e = e.nextSibling)
                          if (e.nodeType < 6) return !1;
                      return !0
                  },
                  parent: function(e) {
                      return !x.pseudos.empty(e)
                  },
                  header: function(e) {
                      return K.test(e.nodeName)
                  },
                  input: function(e) {
                      return G.test(e.nodeName)
                  },
                  button: function(e) {
                      var t = e.nodeName.toLowerCase();
                      return "input" === t && "button" === e.type || "button" === t
                  },
                  text: function(e) {
                      var t;
                      return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                  },
                  first: ve(function() {
                      return [0]
                  }),
                  last: ve(function(e, t) {
                      return [t - 1]
                  }),
                  eq: ve(function(e, t, n) {
                      return [n < 0 ? n + t : n]
                  }),
                  even: ve(function(e, t) {
                      for (var n = 0; n < t; n += 2) e.push(n);
                      return e
                  }),
                  odd: ve(function(e, t) {
                      for (var n = 1; n < t; n += 2) e.push(n);
                      return e
                  }),
                  lt: ve(function(e, t, n) {
                      for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                      return e
                  }),
                  gt: ve(function(e, t, n) {
                      for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                      return e
                  })
              }
          }).pseudos.nth = x.pseudos.eq, {
              radio: !0,
              checkbox: !0,
              file: !0,
              password: !0,
              image: !0
          }) x.pseudos[e] = pe(e);
      for (e in {
              submit: !0,
              reset: !0
          }) x.pseudos[e] = he(e);

      function me() {}

      function be(e) {
          for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
          return r
      }

      function xe(s, e, t) {
          var u = e.dir,
              l = e.next,
              c = l || u,
              f = t && "parentNode" === c,
              d = r++;
          return e.first ? function(e, t, n) {
              while (e = e[u])
                  if (1 === e.nodeType || f) return s(e, t, n);
              return !1
          } : function(e, t, n) {
              var r, i, o, a = [N, d];
              if (n) {
                  while (e = e[u])
                      if ((1 === e.nodeType || f) && s(e, t, n)) return !0
              } else
                  while (e = e[u])
                      if (1 === e.nodeType || f)
                          if (i = (o = e[A] || (e[A] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                          else {
                              if ((r = i[c]) && r[0] === N && r[1] === d) return a[2] = r[2];
                              if ((i[c] = a)[2] = s(e, t, n)) return !0
                          } return !1
          }
      }

      function we(i) {
          return 1 < i.length ? function(e, t, n) {
              var r = i.length;
              while (r--)
                  if (!i[r](e, t, n)) return !1;
              return !0
          } : i[0]
      }

      function Ce(e, t, n, r, i) {
          for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
          return a
      }

      function Te(p, h, g, v, y, e) {
          return v && !v[A] && (v = Te(v)), y && !y[A] && (y = Te(y, e)), le(function(e, t, n, r) {
              var i, o, a, s = [],
                  u = [],
                  l = t.length,
                  c = e || function(e, t, n) {
                      for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                      return n
                  }(h || "*", n.nodeType ? [n] : n, []),
                  f = !p || !e && h ? c : Ce(c, s, p, n, r),
                  d = g ? y || (e ? p : l || v) ? [] : t : f;
              if (g && g(f, d, n, r), v) {
                  i = Ce(d, u), v(i, [], n, r), o = i.length;
                  while (o--)(a = i[o]) && (d[u[o]] = !(f[u[o]] = a))
              }
              if (e) {
                  if (y || p) {
                      if (y) {
                          i = [], o = d.length;
                          while (o--)(a = d[o]) && i.push(f[o] = a);
                          y(null, d = [], i, r)
                      }
                      o = d.length;
                      while (o--)(a = d[o]) && -1 < (i = y ? H(e, a) : s[o]) && (e[i] = !(t[i] = a))
                  }
              } else d = Ce(d === t ? d.splice(l, d.length) : d), y ? y(null, t, d, r) : O.apply(t, d)
          })
      }

      function Ee(e) {
          for (var i, t, n, r = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, u = xe(function(e) {
                  return e === i
              }, a, !0), l = xe(function(e) {
                  return -1 < H(i, e)
              }, a, !0), c = [function(e, t, n) {
                  var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                  return i = null, r
              }]; s < r; s++)
              if (t = x.relative[e[s].type]) c = [xe(we(c), t)];
              else {
                  if ((t = x.filter[e[s].type].apply(null, e[s].matches))[A]) {
                      for (n = ++s; n < r; n++)
                          if (x.relative[e[n].type]) break;
                      return Te(1 < s && we(c), 1 < s && be(e.slice(0, s - 1).concat({
                          value: " " === e[s - 2].type ? "*" : ""
                      })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && be(e))
                  }
                  c.push(t)
              } return we(c)
      }
      return me.prototype = x.filters = x.pseudos, x.setFilters = new me, h = se.tokenize = function(e, t) {
          var n, r, i, o, a, s, u, l = b[e + " "];
          if (l) return t ? 0 : l.slice(0);
          a = e, s = [], u = x.preFilter;
          while (a) {
              for (o in n && !(r = z.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = _.exec(a)) && (n = r.shift(), i.push({
                      value: n,
                      type: r[0].replace($, " ")
                  }), a = a.slice(n.length)), x.filter) !(r = Q[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                  value: n,
                  type: o,
                  matches: r
              }), a = a.slice(n.length));
              if (!n) break
          }
          return t ? a.length : a ? se.error(e) : b(e, s).slice(0)
      }, f = se.compile = function(e, t) {
          var n, v, y, m, b, r, i = [],
              o = [],
              a = S[e + " "];
          if (!a) {
              t || (t = h(e)), n = t.length;
              while (n--)(a = Ee(t[n]))[A] ? i.push(a) : o.push(a);
              (a = S(e, (v = o, m = 0 < (y = i).length, b = 0 < v.length, r = function(e, t, n, r, i) {
                  var o, a, s, u = 0,
                      l = "0",
                      c = e && [],
                      f = [],
                      d = w,
                      p = e || b && x.find.TAG("*", i),
                      h = N += null == d ? 1 : Math.random() || .1,
                      g = p.length;
                  for (i && (w = t == T || t || i); l !== g && null != (o = p[l]); l++) {
                      if (b && o) {
                          a = 0, t || o.ownerDocument == T || (C(o), n = !E);
                          while (s = v[a++])
                              if (s(o, t || T, n)) {
                                  r.push(o);
                                  break
                              } i && (N = h)
                      }
                      m && ((o = !s && o) && u--, e && c.push(o))
                  }
                  if (u += l, m && l !== u) {
                      a = 0;
                      while (s = y[a++]) s(c, f, t, n);
                      if (e) {
                          if (0 < u)
                              while (l--) c[l] || f[l] || (f[l] = j.call(r));
                          f = Ce(f)
                      }
                      O.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                  }
                  return i && (N = h, w = d), c
              }, m ? le(r) : r))).selector = e
          }
          return a
      }, g = se.select = function(e, t, n, r) {
          var i, o, a, s, u, l = "function" == typeof e && e,
              c = !r && h(e = l.selector || e);
          if (n = n || [], 1 === c.length) {
              if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && x.relative[o[1].type]) {
                  if (!(t = (x.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                  l && (t = t.parentNode), e = e.slice(o.shift().value.length)
              }
              i = Q.needsContext.test(e) ? 0 : o.length;
              while (i--) {
                  if (a = o[i], x.relative[s = a.type]) break;
                  if ((u = x.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                      if (o.splice(i, 1), !(e = r.length && be(o))) return O.apply(n, r), n;
                      break
                  }
              }
          }
          return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
      }, p.sortStable = A.split("").sort(D).join("") === A, p.detectDuplicates = !!l, C(), p.sortDetached = ce(function(e) {
          return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
      }), ce(function(e) {
          return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
      }) || fe("type|href|height|width", function(e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      }), p.attributes && ce(function(e) {
          return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
      }) || fe("value", function(e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
      }), ce(function(e) {
          return null == e.getAttribute("disabled")
      }) || fe(I, function(e, t, n) {
          var r;
          if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
      }), se
  }(g);
  E.find = p, E.expr = p.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = p.uniqueSort, E.text = p.getText, E.isXMLDoc = p.isXML, E.contains = p.contains, E.escapeSelector = p.escape;
  var h = function(e, t, n) {
          var r = [],
              i = void 0 !== n;
          while ((e = e[t]) && 9 !== e.nodeType)
              if (1 === e.nodeType) {
                  if (i && E(e).is(n)) break;
                  r.push(e)
              } return r
      },
      A = function(e, t) {
          for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
          return n
      },
      N = E.expr.match.needsContext;

  function S(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }
  var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function D(e, n, r) {
      return b(n) ? E.grep(e, function(e, t) {
          return !!n.call(e, t, e) !== r
      }) : n.nodeType ? E.grep(e, function(e) {
          return e === n !== r
      }) : "string" != typeof n ? E.grep(e, function(e) {
          return -1 < i.call(n, e) !== r
      }) : E.filter(n, e, r)
  }
  E.filter = function(e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, function(e) {
          return 1 === e.nodeType
      }))
  }, E.fn.extend({
      find: function(e) {
          var t, n, r = this.length,
              i = this;
          if ("string" != typeof e) return this.pushStack(E(e).filter(function() {
              for (t = 0; t < r; t++)
                  if (E.contains(i[t], this)) return !0
          }));
          for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, i[t], n);
          return 1 < r ? E.uniqueSort(n) : n
      },
      filter: function(e) {
          return this.pushStack(D(this, e || [], !1))
      },
      not: function(e) {
          return this.pushStack(D(this, e || [], !0))
      },
      is: function(e) {
          return !!D(this, "string" == typeof e && N.test(e) ? E(e) : e || [], !1).length
      }
  });
  var L, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (E.fn.init = function(e, t, n) {
      var r, i;
      if (!e) return this;
      if (n = n || L, "string" == typeof e) {
          if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : j.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
          if (r[1]) {
              if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : w, !0)), k.test(r[1]) && E.isPlainObject(t))
                  for (r in t) b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
              return this
          }
          return (i = w.getElementById(r[2])) && (this[0] = i, this.length = 1), this
      }
      return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this)
  }).prototype = E.fn, L = E(w);
  var q = /^(?:parents|prev(?:Until|All))/,
      O = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
      };

  function P(e, t) {
      while ((e = e[t]) && 1 !== e.nodeType);
      return e
  }
  E.fn.extend({
      has: function(e) {
          var t = E(e, this),
              n = t.length;
          return this.filter(function() {
              for (var e = 0; e < n; e++)
                  if (E.contains(this, t[e])) return !0
          })
      },
      closest: function(e, t) {
          var n, r = 0,
              i = this.length,
              o = [],
              a = "string" != typeof e && E(e);
          if (!N.test(e))
              for (; r < i; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                      if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                          o.push(n);
                          break
                      } return this.pushStack(1 < o.length ? E.uniqueSort(o) : o)
      },
      index: function(e) {
          return e ? "string" == typeof e ? i.call(E(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
          return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
      },
      addBack: function(e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
  }), E.each({
      parent: function(e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
          return h(e, "parentNode")
      },
      parentsUntil: function(e, t, n) {
          return h(e, "parentNode", n)
      },
      next: function(e) {
          return P(e, "nextSibling")
      },
      prev: function(e) {
          return P(e, "previousSibling")
      },
      nextAll: function(e) {
          return h(e, "nextSibling")
      },
      prevAll: function(e) {
          return h(e, "previousSibling")
      },
      nextUntil: function(e, t, n) {
          return h(e, "nextSibling", n)
      },
      prevUntil: function(e, t, n) {
          return h(e, "previousSibling", n)
      },
      siblings: function(e) {
          return A((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
          return A(e.firstChild)
      },
      contents: function(e) {
          return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (S(e, "template") && (e = e.content || e), E.merge([], e.childNodes))
      }
  }, function(r, i) {
      E.fn[r] = function(e, t) {
          var n = E.map(this, i, e);
          return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = E.filter(t, n)), 1 < this.length && (O[r] || E.uniqueSort(n), q.test(r) && n.reverse()), this.pushStack(n)
      }
  });
  var H = /[^\x20\t\r\n\f]+/g;

  function I(e) {
      return e
  }

  function R(e) {
      throw e
  }

  function B(e, t, n, r) {
      var i;
      try {
          e && b(i = e.promise) ? i.call(e).done(t).fail(n) : e && b(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
      } catch (e) {
          n.apply(void 0, [e])
      }
  }
  E.Callbacks = function(r) {
      var e, n;
      r = "string" == typeof r ? (e = r, n = {}, E.each(e.match(H) || [], function(e, t) {
          n[t] = !0
      }), n) : E.extend({}, r);
      var i, t, o, a, s = [],
          u = [],
          l = -1,
          c = function() {
              for (a = a || r.once, o = i = !0; u.length; l = -1) {
                  t = u.shift();
                  while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
              }
              r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
          },
          f = {
              add: function() {
                  return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                      E.each(e, function(e, t) {
                          b(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== T(t) && n(t)
                      })
                  }(arguments), t && !i && c()), this
              },
              remove: function() {
                  return E.each(arguments, function(e, t) {
                      var n;
                      while (-1 < (n = E.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                  }), this
              },
              has: function(e) {
                  return e ? -1 < E.inArray(e, s) : 0 < s.length
              },
              empty: function() {
                  return s && (s = []), this
              },
              disable: function() {
                  return a = u = [], s = t = "", this
              },
              disabled: function() {
                  return !s
              },
              lock: function() {
                  return a = u = [], t || i || (s = t = ""), this
              },
              locked: function() {
                  return !!a
              },
              fireWith: function(e, t) {
                  return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
              },
              fire: function() {
                  return f.fireWith(this, arguments), this
              },
              fired: function() {
                  return !!o
              }
          };
      return f
  }, E.extend({
      Deferred: function(e) {
          var o = [
                  ["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2],
                  ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"],
                  ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]
              ],
              i = "pending",
              a = {
                  state: function() {
                      return i
                  },
                  always: function() {
                      return s.done(arguments).fail(arguments), this
                  },
                  "catch": function(e) {
                      return a.then(null, e)
                  },
                  pipe: function() {
                      var i = arguments;
                      return E.Deferred(function(r) {
                          E.each(o, function(e, t) {
                              var n = b(i[t[4]]) && i[t[4]];
                              s[t[1]](function() {
                                  var e = n && n.apply(this, arguments);
                                  e && b(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                              })
                          }), i = null
                      }).promise()
                  },
                  then: function(t, n, r) {
                      var u = 0;

                      function l(i, o, a, s) {
                          return function() {
                              var n = this,
                                  r = arguments,
                                  e = function() {
                                      var e, t;
                                      if (!(i < u)) {
                                          if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                          t = e && ("object" == typeof e || "function" == typeof e) && e.then, b(t) ? s ? t.call(e, l(u, o, I, s), l(u, o, R, s)) : (u++, t.call(e, l(u, o, I, s), l(u, o, R, s), l(u, o, I, o.notifyWith))) : (a !== I && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                      }
                                  },
                                  t = s ? e : function() {
                                      try {
                                          e()
                                      } catch (e) {
                                          E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== R && (n = void 0, r = [e]), o.rejectWith(n, r))
                                      }
                                  };
                              i ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()), g.setTimeout(t))
                          }
                      }
                      return E.Deferred(function(e) {
                          o[0][3].add(l(0, e, b(r) ? r : I, e.notifyWith)), o[1][3].add(l(0, e, b(t) ? t : I)), o[2][3].add(l(0, e, b(n) ? n : R))
                      }).promise()
                  },
                  promise: function(e) {
                      return null != e ? E.extend(e, a) : a
                  }
              },
              s = {};
          return E.each(o, function(e, t) {
              var n = t[2],
                  r = t[5];
              a[t[1]] = n.add, r && n.add(function() {
                  i = r
              }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                  return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
              }, s[t[0] + "With"] = n.fireWith
          }), a.promise(s), e && e.call(s, s), s
      },
      when: function(e) {
          var n = arguments.length,
              t = n,
              r = Array(t),
              i = s.call(arguments),
              o = E.Deferred(),
              a = function(t) {
                  return function(e) {
                      r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                  }
              };
          if (n <= 1 && (B(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || b(i[t] && i[t].then))) return o.then();
          while (t--) B(i[t], a(t), o.reject);
          return o.promise()
      }
  });
  var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  E.Deferred.exceptionHook = function(e, t) {
      g.console && g.console.warn && e && M.test(e.name) && g.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
  }, E.readyException = function(e) {
      g.setTimeout(function() {
          throw e
      })
  };
  var W = E.Deferred();

  function F() {
      w.removeEventListener("DOMContentLoaded", F), g.removeEventListener("load", F), E.ready()
  }
  E.fn.ready = function(e) {
      return W.then(e)["catch"](function(e) {
          E.readyException(e)
      }), this
  }, E.extend({
      isReady: !1,
      readyWait: 1,
      ready: function(e) {
          (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e && 0 < --E.readyWait || W.resolveWith(w, [E])
      }
  }), E.ready.then = W.then, "complete" === w.readyState || "loading" !== w.readyState && !w.documentElement.doScroll ? g.setTimeout(E.ready) : (w.addEventListener("DOMContentLoaded", F), g.addEventListener("load", F));
  var $ = function(e, t, n, r, i, o, a) {
          var s = 0,
              u = e.length,
              l = null == n;
          if ("object" === T(n))
              for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
          else if (void 0 !== r && (i = !0, b(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                  return l.call(E(e), n)
              })), t))
              for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
          return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
      },
      z = /^-ms-/,
      _ = /-([a-z])/g;

  function U(e, t) {
      return t.toUpperCase()
  }

  function V(e) {
      return e.replace(z, "ms-").replace(_, U)
  }
  var X = function(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  };

  function Q() {
      this.expando = E.expando + Q.uid++
  }
  Q.uid = 1, Q.prototype = {
      cache: function(e) {
          var t = e[this.expando];
          return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
              value: t,
              configurable: !0
          }))), t
      },
      set: function(e, t, n) {
          var r, i = this.cache(e);
          if ("string" == typeof t) i[V(t)] = n;
          else
              for (r in t) i[V(r)] = t[r];
          return i
      },
      get: function(e, t) {
          return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
      },
      access: function(e, t, n) {
          return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
      },
      remove: function(e, t) {
          var n, r = e[this.expando];
          if (void 0 !== r) {
              if (void 0 !== t) {
                  n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(H) || []).length;
                  while (n--) delete r[t[n]]
              }(void 0 === t || E.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
          }
      },
      hasData: function(e) {
          var t = e[this.expando];
          return void 0 !== t && !E.isEmptyObject(t)
      }
  };
  var Y = new Q,
      G = new Q,
      K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      J = /[A-Z]/g;

  function Z(e, t, n) {
      var r, i;
      if (void 0 === n && 1 === e.nodeType)
          if (r = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
              try {
                  n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i)
              } catch (e) {}
              G.set(e, t, n)
          } else n = void 0;
      return n
  }
  E.extend({
      hasData: function(e) {
          return G.hasData(e) || Y.hasData(e)
      },
      data: function(e, t, n) {
          return G.access(e, t, n)
      },
      removeData: function(e, t) {
          G.remove(e, t)
      },
      _data: function(e, t, n) {
          return Y.access(e, t, n)
      },
      _removeData: function(e, t) {
          Y.remove(e, t)
      }
  }), E.fn.extend({
      data: function(n, e) {
          var t, r, i, o = this[0],
              a = o && o.attributes;
          if (void 0 === n) {
              if (this.length && (i = G.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                  t = a.length;
                  while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), Z(o, r, i[r]));
                  Y.set(o, "hasDataAttrs", !0)
              }
              return i
          }
          return "object" == typeof n ? this.each(function() {
              G.set(this, n)
          }) : $(this, function(e) {
              var t;
              if (o && void 0 === e) return void 0 !== (t = G.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
              this.each(function() {
                  G.set(this, n, e)
              })
          }, null, e, 1 < arguments.length, null, !0)
      },
      removeData: function(e) {
          return this.each(function() {
              G.remove(this, e)
          })
      }
  }), E.extend({
      queue: function(e, t, n) {
          var r;
          if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, E.makeArray(n)) : r.push(n)), r || []
      },
      dequeue: function(e, t) {
          t = t || "fx";
          var n = E.queue(e, t),
              r = n.length,
              i = n.shift(),
              o = E._queueHooks(e, t);
          "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
              E.dequeue(e, t)
          }, o)), !r && o && o.empty.fire()
      },
      _queueHooks: function(e, t) {
          var n = t + "queueHooks";
          return Y.get(e, n) || Y.access(e, n, {
              empty: E.Callbacks("once memory").add(function() {
                  Y.remove(e, [t + "queue", n])
              })
          })
      }
  }), E.fn.extend({
      queue: function(t, n) {
          var e = 2;
          return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function() {
              var e = E.queue(this, t, n);
              E._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t)
          })
      },
      dequeue: function(e) {
          return this.each(function() {
              E.dequeue(this, e)
          })
      },
      clearQueue: function(e) {
          return this.queue(e || "fx", [])
      },
      promise: function(e, t) {
          var n, r = 1,
              i = E.Deferred(),
              o = this,
              a = this.length,
              s = function() {
                  --r || i.resolveWith(o, [o])
              };
          "string" != typeof e && (t = e, e = void 0), e = e || "fx";
          while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
          return s(), i.promise(t)
      }
  });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      re = w.documentElement,
      ie = function(e) {
          return E.contains(e.ownerDocument, e)
      },
      oe = {
          composed: !0
      };
  re.getRootNode && (ie = function(e) {
      return E.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
  });
  var ae = function(e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === E.css(e, "display")
  };
  var se = {};

  function ue(e, t) {
      for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = se[s]) || (o = a.body.appendChild(a.createElement(s)), u = E.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), se[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
      for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
      return e
  }
  E.fn.extend({
      show: function() {
          return ue(this, !0)
      },
      hide: function() {
          return ue(this)
      },
      toggle: function(e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
              ae(this) ? E(this).show() : E(this).hide()
          })
      }
  });
  var le, ce, fe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      pe = /^$|^module$|\/(?:java|ecma)script/i;
  le = w.createDocumentFragment().appendChild(w.createElement("div")), (ce = w.createElement("input")).setAttribute("type", "radio"), ce.setAttribute("checked", "checked"), ce.setAttribute("name", "t"), le.appendChild(ce), m.checkClone = le.cloneNode(!0).cloneNode(!0).lastChild.checked, le.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!le.cloneNode(!0).lastChild.defaultValue, le.innerHTML = "<option></option>", m.option = !!le.lastChild;
  var he = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
  };

  function ge(e, t) {
      var n;
      return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && S(e, t) ? E.merge([e], n) : n
  }

  function ve(e, t) {
      for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
  }
  he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td, m.option || (he.optgroup = he.option = [1, "<select multiple='multiple'>", "</select>"]);
  var ye = /<|&#?\w+;/;

  function me(e, t, n, r, i) {
      for (var o, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
          if ((o = e[p]) || 0 === o)
              if ("object" === T(o)) E.merge(d, o.nodeType ? [o] : o);
              else if (ye.test(o)) {
          a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = he[s] || he._default, a.innerHTML = u[1] + E.htmlPrefilter(o) + u[2], c = u[0];
          while (c--) a = a.lastChild;
          E.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
      } else d.push(t.createTextNode(o));
      f.textContent = "", p = 0;
      while (o = d[p++])
          if (r && -1 < E.inArray(o, r)) i && i.push(o);
          else if (l = ie(o), a = ge(f.appendChild(o), "script"), l && ve(a), n) {
          c = 0;
          while (o = a[c++]) pe.test(o.type || "") && n.push(o)
      }
      return f
  }
  var be = /^([^.]*)(?:\.(.+)|)/;

  function xe() {
      return !0
  }

  function we() {
      return !1
  }

  function Ce(e, t) {
      return e === function() {
          try {
              return w.activeElement
          } catch (e) {}
      }() == ("focus" === t)
  }

  function Te(e, t, n, r, i, o) {
      var a, s;
      if ("object" == typeof t) {
          for (s in "string" != typeof n && (r = r || n, n = void 0), t) Te(e, s, n, r, t[s], o);
          return e
      }
      if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = we;
      else if (!i) return e;
      return 1 === o && (a = i, (i = function(e) {
          return E().off(e), a.apply(this, arguments)
      }).guid = a.guid || (a.guid = E.guid++)), e.each(function() {
          E.event.add(this, t, i, r, n)
      })
  }

  function Ee(e, i, o) {
      o ? (Y.set(e, i, !1), E.event.add(e, i, {
          namespace: !1,
          handler: function(e) {
              var t, n, r = Y.get(this, i);
              if (1 & e.isTrigger && this[i]) {
                  if (r.length)(E.event.special[i] || {}).delegateType && e.stopPropagation();
                  else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
              } else r.length && (Y.set(this, i, {
                  value: E.event.trigger(E.extend(r[0], E.Event.prototype), r.slice(1), this)
              }), e.stopImmediatePropagation())
          }
      })) : void 0 === Y.get(e, i) && E.event.add(e, i, xe)
  }
  E.event = {
      global: {},
      add: function(t, e, n, r, i) {
          var o, a, s, u, l, c, f, d, p, h, g, v = Y.get(t);
          if (X(t)) {
              n.handler && (n = (o = n).handler, i = o.selector), i && E.find.matchesSelector(re, i), n.guid || (n.guid = E.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) {
                  return "undefined" != typeof E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
              }), l = (e = (e || "").match(H) || [""]).length;
              while (l--) p = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), p && (f = E.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = E.event.special[p] || {}, c = E.extend({
                  type: p,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && E.expr.match.needsContext.test(i),
                  namespace: h.join(".")
              }, o), (d = u[p]) || ((d = u[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(p, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), E.event.global[p] = !0)
          }
      },
      remove: function(e, t, n, r, i) {
          var o, a, s, u, l, c, f, d, p, h, g, v = Y.hasData(e) && Y.get(e);
          if (v && (u = v.events)) {
              l = (t = (t || "").match(H) || [""]).length;
              while (l--)
                  if (p = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                      f = E.event.special[p] || {}, d = u[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length;
                      while (o--) c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                      a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || E.removeEvent(e, p, v.handle), delete u[p])
                  } else
                      for (p in u) E.event.remove(e, p + t[l], n, r, !0);
              E.isEmptyObject(u) && Y.remove(e, "handle events")
          }
      },
      dispatch: function(e) {
          var t, n, r, i, o, a, s = new Array(arguments.length),
              u = E.event.fix(e),
              l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
              c = E.event.special[u.type] || {};
          for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
          if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
              a = E.event.handlers.call(this, u, l), t = 0;
              while ((i = a[t++]) && !u.isPropagationStopped()) {
                  u.currentTarget = i.elem, n = 0;
                  while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
              }
              return c.postDispatch && c.postDispatch.call(this, u), u.result
          }
      },
      handlers: function(e, t) {
          var n, r, i, o, a, s = [],
              u = t.delegateCount,
              l = e.target;
          if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
              for (; l !== this; l = l.parentNode || this)
                  if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                      for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < E(i, this).index(l) : E.find(i, this, null, [l]).length), a[i] && o.push(r);
                      o.length && s.push({
                          elem: l,
                          handlers: o
                      })
                  } return l = this, u < t.length && s.push({
              elem: l,
              handlers: t.slice(u)
          }), s
      },
      addProp: function(t, e) {
          Object.defineProperty(E.Event.prototype, t, {
              enumerable: !0,
              configurable: !0,
              get: b(e) ? function() {
                  if (this.originalEvent) return e(this.originalEvent)
              } : function() {
                  if (this.originalEvent) return this.originalEvent[t]
              },
              set: function(e) {
                  Object.defineProperty(this, t, {
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                      value: e
                  })
              }
          })
      },
      fix: function(e) {
          return e[E.expando] ? e : new E.Event(e)
      },
      special: {
          load: {
              noBubble: !0
          },
          click: {
              setup: function(e) {
                  var t = this || e;
                  return fe.test(t.type) && t.click && S(t, "input") && Ee(t, "click", xe), !1
              },
              trigger: function(e) {
                  var t = this || e;
                  return fe.test(t.type) && t.click && S(t, "input") && Ee(t, "click"), !0
              },
              _default: function(e) {
                  var t = e.target;
                  return fe.test(t.type) && t.click && S(t, "input") && Y.get(t, "click") || S(t, "a")
              }
          },
          beforeunload: {
              postDispatch: function(e) {
                  void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
              }
          }
      }
  }, E.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
  }, E.Event = function(e, t) {
      if (!(this instanceof E.Event)) return new E.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? xe : we, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0
  }, E.Event.prototype = {
      constructor: E.Event,
      isDefaultPrevented: we,
      isPropagationStopped: we,
      isImmediatePropagationStopped: we,
      isSimulated: !1,
      preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = xe, e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = xe, e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = xe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
      }
  }, E.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      "char": !0,
      code: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: !0
  }, E.event.addProp), E.each({
      focus: "focusin",
      blur: "focusout"
  }, function(t, e) {
      E.event.special[t] = {
          setup: function() {
              return Ee(this, t, Ce), !1
          },
          trigger: function() {
              return Ee(this, t), !0
          },
          _default: function(e) {
              return Y.get(e.target, t)
          },
          delegateType: e
      }
  }), E.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
  }, function(e, i) {
      E.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function(e) {
              var t, n = e.relatedTarget,
                  r = e.handleObj;
              return n && (n === this || E.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
          }
      }
  }), E.fn.extend({
      on: function(e, t, n, r) {
          return Te(this, e, t, n, r)
      },
      one: function(e, t, n, r) {
          return Te(this, e, t, n, r, 1)
      },
      off: function(e, t, n) {
          var r, i;
          if (e && e.preventDefault && e.handleObj) return r = e.handleObj, E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
          if ("object" == typeof e) {
              for (i in e) this.off(i, t, e[i]);
              return this
          }
          return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = we), this.each(function() {
              E.event.remove(this, e, n, t)
          })
      }
  });
  var Ae = /<script|<style|<link/i,
      Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Se = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

  function ke(e, t) {
      return S(e, "table") && S(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
  }

  function De(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function Le(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
  }

  function je(e, t) {
      var n, r, i, o, a, s;
      if (1 === t.nodeType) {
          if (Y.hasData(e) && (s = Y.get(e).events))
              for (i in Y.remove(t, "handle events"), s)
                  for (n = 0, r = s[i].length; n < r; n++) E.event.add(t, i, s[i][n]);
          G.hasData(e) && (o = G.access(e), a = E.extend({}, o), G.set(t, a))
      }
  }

  function qe(n, r, i, o) {
      r = v(r);
      var e, t, a, s, u, l, c = 0,
          f = n.length,
          d = f - 1,
          p = r[0],
          h = b(p);
      if (h || 1 < f && "string" == typeof p && !m.checkClone && Ne.test(p)) return n.each(function(e) {
          var t = n.eq(e);
          h && (r[0] = p.call(this, e, t.html())), qe(t, r, i, o)
      });
      if (f && (t = (e = me(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
          for (s = (a = E.map(ge(e, "script"), De)).length; c < f; c++) u = e, c !== d && (u = E.clone(u, !0, !0), s && E.merge(a, ge(u, "script"))), i.call(n[c], u, c);
          if (s)
              for (l = a[a.length - 1].ownerDocument, E.map(a, Le), c = 0; c < s; c++) u = a[c], pe.test(u.type || "") && !Y.access(u, "globalEval") && E.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? E._evalUrl && !u.noModule && E._evalUrl(u.src, {
                  nonce: u.nonce || u.getAttribute("nonce")
              }, l) : C(u.textContent.replace(Se, ""), u, l))
      }
      return n
  }

  function Oe(e, t, n) {
      for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || E.cleanData(ge(r)), r.parentNode && (n && ie(r) && ve(ge(r, "script")), r.parentNode.removeChild(r));
      return e
  }
  E.extend({
      htmlPrefilter: function(e) {
          return e
      },
      clone: function(e, t, n) {
          var r, i, o, a, s, u, l, c = e.cloneNode(!0),
              f = ie(e);
          if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
              for (a = ge(c), r = 0, i = (o = ge(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && fe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
          if (t)
              if (n)
                  for (o = o || ge(e), a = a || ge(c), r = 0, i = o.length; r < i; r++) je(o[r], a[r]);
              else je(e, c);
          return 0 < (a = ge(c, "script")).length && ve(a, !f && ge(e, "script")), c
      },
      cleanData: function(e) {
          for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
              if (X(n)) {
                  if (t = n[Y.expando]) {
                      if (t.events)
                          for (r in t.events) i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                      n[Y.expando] = void 0
                  }
                  n[G.expando] && (n[G.expando] = void 0)
              }
      }
  }), E.fn.extend({
      detach: function(e) {
          return Oe(this, e, !0)
      },
      remove: function(e) {
          return Oe(this, e)
      },
      text: function(e) {
          return $(this, function(e) {
              return void 0 === e ? E.text(this) : this.empty().each(function() {
                  1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
              })
          }, null, e, arguments.length)
      },
      append: function() {
          return qe(this, arguments, function(e) {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ke(this, e).appendChild(e)
          })
      },
      prepend: function() {
          return qe(this, arguments, function(e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var t = ke(this, e);
                  t.insertBefore(e, t.firstChild)
              }
          })
      },
      before: function() {
          return qe(this, arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this)
          })
      },
      after: function() {
          return qe(this, arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
          })
      },
      empty: function() {
          for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(ge(e, !1)), e.textContent = "");
          return this
      },
      clone: function(e, t) {
          return e = null != e && e, t = null == t ? e : t, this.map(function() {
              return E.clone(this, e, t)
          })
      },
      html: function(e) {
          return $(this, function(e) {
              var t = this[0] || {},
                  n = 0,
                  r = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if ("string" == typeof e && !Ae.test(e) && !he[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                  e = E.htmlPrefilter(e);
                  try {
                      for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(ge(t, !1)), t.innerHTML = e);
                      t = 0
                  } catch (e) {}
              }
              t && this.empty().append(e)
          }, null, e, arguments.length)
      },
      replaceWith: function() {
          var n = [];
          return qe(this, arguments, function(e) {
              var t = this.parentNode;
              E.inArray(this, n) < 0 && (E.cleanData(ge(this)), t && t.replaceChild(e, this))
          }, n)
      }
  }), E.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
  }, function(e, a) {
      E.fn[e] = function(e) {
          for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), E(r[o])[a](t), u.apply(n, t.get());
          return this.pushStack(n)
      }
  });
  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      He = /^--/,
      Ie = function(e) {
          var t = e.ownerDocument.defaultView;
          return t && t.opener || (t = g), t.getComputedStyle(e)
      },
      Re = function(e, t, n) {
          var r, i, o = {};
          for (i in t) o[i] = e.style[i], e.style[i] = t[i];
          for (i in r = n.call(e), t) e.style[i] = o[i];
          return r
      },
      Be = new RegExp(ne.join("|"), "i"),
      Me = "[\\x20\\t\\r\\n\\f]",
      We = new RegExp("^" + Me + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Me + "+$", "g");

  function Fe(e, t, n) {
      var r, i, o, a, s = He.test(t),
          u = e.style;
      return (n = n || Ie(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace(We, "$1") || void 0), "" !== a || ie(e) || (a = E.style(e, t)), !m.pixelBoxStyles() && Pe.test(a) && Be.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a
  }

  function $e(e, t) {
      return {
          get: function() {
              if (!e()) return (this.get = t).apply(this, arguments);
              delete this.get
          }
      }
  }! function() {
      function e() {
          if (l) {
              u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
              var e = g.getComputedStyle(l);
              n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
          }
      }

      function t(e) {
          return Math.round(parseFloat(e))
      }
      var n, r, i, o, a, s, u = w.createElement("div"),
          l = w.createElement("div");
      l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === l.style.backgroundClip, E.extend(m, {
          boxSizingReliable: function() {
              return e(), r
          },
          pixelBoxStyles: function() {
              return e(), o
          },
          pixelPosition: function() {
              return e(), n
          },
          reliableMarginLeft: function() {
              return e(), s
          },
          scrollboxSize: function() {
              return e(), i
          },
          reliableTrDimensions: function() {
              var e, t, n, r;
              return null == a && (e = w.createElement("table"), t = w.createElement("tr"), n = w.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = g.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a
          }
      }))
  }();
  var ze = ["Webkit", "Moz", "ms"],
      _e = w.createElement("div").style,
      Ue = {};

  function Ve(e) {
      var t = E.cssProps[e] || Ue[e];
      return t || (e in _e ? e : Ue[e] = function(e) {
          var t = e[0].toUpperCase() + e.slice(1),
              n = ze.length;
          while (n--)
              if ((e = ze[n] + t) in _e) return e
      }(e) || e)
  }
  var Xe, Qe, Ye = /^(none|table(?!-c[ea]).+)/,
      Ge = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
      },
      Ke = {
          letterSpacing: "0",
          fontWeight: "400"
      };

  function Je(e, t, n) {
      var r = te.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
  }

  function Ze(e, t, n, r, i, o) {
      var a = "width" === t ? 1 : 0,
          s = 0,
          u = 0;
      if (n === (r ? "border" : "content")) return 0;
      for (; a < 4; a += 2) "margin" === n && (u += E.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= E.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= E.css(e, "border" + ne[a] + "Width", !0, i))) : (u += E.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += E.css(e, "border" + ne[a] + "Width", !0, i) : s += E.css(e, "border" + ne[a] + "Width", !0, i));
      return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
  }

  function et(e, t, n) {
      var r = Ie(e),
          i = (!m.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r),
          o = i,
          a = Fe(e, t, r),
          s = "offset" + t[0].toUpperCase() + t.slice(1);
      if (Pe.test(a)) {
          if (!n) return a;
          a = "auto"
      }
      return (!m.boxSizingReliable() && i || !m.reliableTrDimensions() && S(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === E.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ze(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
  }
  E.extend({
      cssHooks: {
          opacity: {
              get: function(e, t) {
                  if (t) {
                      var n = Fe(e, "opacity");
                      return "" === n ? "1" : n
                  }
              }
          }
      },
      cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
      },
      cssProps: {},
      style: function(e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var i, o, a, s = V(t),
                  u = He.test(t),
                  l = e.style;
              if (u || (t = Ve(s)), a = E.cssHooks[t] || E.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
              "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = function(e, t, n, r) {
                  var i, o, a = 20,
                      s = r ? function() {
                          return r.cur()
                      } : function() {
                          return E.css(e, t, "")
                      },
                      u = s(),
                      l = n && n[3] || (E.cssNumber[t] ? "" : "px"),
                      c = e.nodeType && (E.cssNumber[t] || "px" !== l && +u) && te.exec(E.css(e, t));
                  if (c && c[3] !== l) {
                      u /= 2, l = l || c[3], c = +u || 1;
                      while (a--) E.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
                      c *= 2, E.style(e, t, c + l), n = n || []
                  }
                  return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
              }(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (E.cssNumber[s] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
          }
      },
      css: function(e, t, n, r) {
          var i, o, a, s = V(t);
          return He.test(t) || (t = Ve(s)), (a = E.cssHooks[t] || E.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
      }
  }), E.each(["height", "width"], function(e, u) {
      E.cssHooks[u] = {
          get: function(e, t, n) {
              if (t) return !Ye.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, u, n) : Re(e, Ge, function() {
                  return et(e, u, n)
              })
          },
          set: function(e, t, n) {
              var r, i = Ie(e),
                  o = !m.scrollboxSize() && "absolute" === i.position,
                  a = (o || n) && "border-box" === E.css(e, "boxSizing", !1, i),
                  s = n ? Ze(e, u, n, a, i) : 0;
              return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ze(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = E.css(e, u)), Je(0, t, s)
          }
      }
  }), E.cssHooks.marginLeft = $e(m.reliableMarginLeft, function(e, t) {
      if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - Re(e, {
          marginLeft: 0
      }, function() {
          return e.getBoundingClientRect().left
      })) + "px"
  }), E.each({
      margin: "",
      padding: "",
      border: "Width"
  }, function(i, o) {
      E.cssHooks[i + o] = {
          expand: function(e) {
              for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
              return n
          }
      }, "margin" !== i && (E.cssHooks[i + o].set = Je)
  }), E.fn.extend({
      css: function(e, t) {
          return $(this, function(e, t, n) {
              var r, i, o = {},
                  a = 0;
              if (Array.isArray(t)) {
                  for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = E.css(e, t[a], !1, r);
                  return o
              }
              return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
          }, e, t, 1 < arguments.length)
      }
  }), E.fn.delay = function(r, e) {
      return r = E.fx && E.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
          var n = g.setTimeout(e, r);
          t.stop = function() {
              g.clearTimeout(n)
          }
      })
  }, Xe = w.createElement("input"), Qe = w.createElement("select").appendChild(w.createElement("option")), Xe.type = "checkbox", m.checkOn = "" !== Xe.value, m.optSelected = Qe.selected, (Xe = w.createElement("input")).value = "t", Xe.type = "radio", m.radioValue = "t" === Xe.value;
  var tt, nt = E.expr.attrHandle;
  E.fn.extend({
      attr: function(e, t) {
          return $(this, E.attr, e, t, 1 < arguments.length)
      },
      removeAttr: function(e) {
          return this.each(function() {
              E.removeAttr(this, e)
          })
      }
  }), E.extend({
      attr: function(e, t, n) {
          var r, i, o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? tt : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r)
      },
      attrHooks: {
          type: {
              set: function(e, t) {
                  if (!m.radioValue && "radio" === t && S(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t
                  }
              }
          }
      },
      removeAttr: function(e, t) {
          var n, r = 0,
              i = t && t.match(H);
          if (i && 1 === e.nodeType)
              while (n = i[r++]) e.removeAttribute(n)
      }
  }), tt = {
      set: function(e, t, n) {
          return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n
      }
  }, E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var a = nt[t] || E.find.attr;
      nt[t] = function(e, t, n) {
          var r, i, o = t.toLowerCase();
          return n || (i = nt[o], nt[o] = r, r = null != a(e, t, n) ? o : null, nt[o] = i), r
      }
  });
  var rt = /^(?:input|select|textarea|button)$/i,
      it = /^(?:a|area)$/i;

  function ot(e) {
      return (e.match(H) || []).join(" ")
  }

  function at(e) {
      return e.getAttribute && e.getAttribute("class") || ""
  }

  function st(e) {
      return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || []
  }
  E.fn.extend({
      prop: function(e, t) {
          return $(this, E.prop, e, t, 1 < arguments.length)
      },
      removeProp: function(e) {
          return this.each(function() {
              delete this[E.propFix[e] || e]
          })
      }
  }), E.extend({
      prop: function(e, t, n) {
          var r, i, o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t, i = E.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
      },
      propHooks: {
          tabIndex: {
              get: function(e) {
                  var t = E.find.attr(e, "tabindex");
                  return t ? parseInt(t, 10) : rt.test(e.nodeName) || it.test(e.nodeName) && e.href ? 0 : -1
              }
          }
      },
      propFix: {
          "for": "htmlFor",
          "class": "className"
      }
  }), m.optSelected || (E.propHooks.selected = {
      get: function(e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null
      },
      set: function(e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
      }
  }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      E.propFix[this.toLowerCase()] = this
  }), E.fn.extend({
      addClass: function(t) {
          var e, n, r, i, o, a;
          return b(t) ? this.each(function(e) {
              E(this).addClass(t.call(this, e, at(this)))
          }) : (e = st(t)).length ? this.each(function() {
              if (r = at(this), n = 1 === this.nodeType && " " + ot(r) + " ") {
                  for (o = 0; o < e.length; o++) i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                  a = ot(n), r !== a && this.setAttribute("class", a)
              }
          }) : this
      },
      removeClass: function(t) {
          var e, n, r, i, o, a;
          return b(t) ? this.each(function(e) {
              E(this).removeClass(t.call(this, e, at(this)))
          }) : arguments.length ? (e = st(t)).length ? this.each(function() {
              if (r = at(this), n = 1 === this.nodeType && " " + ot(r) + " ") {
                  for (o = 0; o < e.length; o++) {
                      i = e[o];
                      while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ")
                  }
                  a = ot(n), r !== a && this.setAttribute("class", a)
              }
          }) : this : this.attr("class", "")
      },
      toggleClass: function(t, n) {
          var e, r, i, o, a = typeof t,
              s = "string" === a || Array.isArray(t);
          return b(t) ? this.each(function(e) {
              E(this).toggleClass(t.call(this, e, at(this), n), n)
          }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = st(t), this.each(function() {
              if (s)
                  for (o = E(this), i = 0; i < e.length; i++) r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
              else void 0 !== t && "boolean" !== a || ((r = at(this)) && Y.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : Y.get(this, "__className__") || ""))
          }))
      },
      hasClass: function(e) {
          var t, n, r = 0;
          t = " " + e + " ";
          while (n = this[r++])
              if (1 === n.nodeType && -1 < (" " + ot(at(n)) + " ").indexOf(t)) return !0;
          return !1
      }
  });
  var ut = /\r/g;
  E.fn.extend({
      val: function(n) {
          var r, e, i, t = this[0];
          return arguments.length ? (i = b(n), this.each(function(e) {
              var t;
              1 === this.nodeType && (null == (t = i ? n.call(this, e, E(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = E.map(t, function(e) {
                  return null == e ? "" : e + ""
              })), (r = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
          })) : t ? (r = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(ut, "") : null == e ? "" : e : void 0
      }
  }), E.extend({
      valHooks: {
          option: {
              get: function(e) {
                  var t = E.find.attr(e, "value");
                  return null != t ? t : ot(E.text(e))
              }
          },
          select: {
              get: function(e) {
                  var t, n, r, i = e.options,
                      o = e.selectedIndex,
                      a = "select-one" === e.type,
                      s = a ? null : [],
                      u = a ? o + 1 : i.length;
                  for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                      if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
                          if (t = E(n).val(), a) return t;
                          s.push(t)
                      } return s
              },
              set: function(e, t) {
                  var n, r, i = e.options,
                      o = E.makeArray(t),
                      a = i.length;
                  while (a--)((r = i[a]).selected = -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
                  return n || (e.selectedIndex = -1), o
              }
          }
      }
  }), E.each(["radio", "checkbox"], function() {
      E.valHooks[this] = {
          set: function(e, t) {
              if (Array.isArray(t)) return e.checked = -1 < E.inArray(E(e).val(), t)
          }
      }, m.checkOn || (E.valHooks[this].get = function(e) {
          return null === e.getAttribute("value") ? "on" : e.value
      })
  }), m.focusin = "onfocusin" in g;
  var lt = /^(?:focusinfocus|focusoutblur)$/,
      ct = function(e) {
          e.stopPropagation()
      };
  E.extend(E.event, {
      trigger: function(e, t, n, r) {
          var i, o, a, s, u, l, c, f, d = [n || w],
              p = y.call(e, "type") ? e.type : e,
              h = y.call(e, "namespace") ? e.namespace.split(".") : [];
          if (o = f = a = n = n || w, 3 !== n.nodeType && 8 !== n.nodeType && !lt.test(p + E.event.triggered) && (-1 < p.indexOf(".") && (p = (h = p.split(".")).shift(), h.sort()), u = p.indexOf(":") < 0 && "on" + p, (e = e[E.expando] ? e : new E.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), c = E.event.special[p] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
              if (!r && !c.noBubble && !x(n)) {
                  for (s = c.delegateType || p, lt.test(s + p) || (o = o.parentNode); o; o = o.parentNode) d.push(o), a = o;
                  a === (n.ownerDocument || w) && d.push(a.defaultView || a.parentWindow || g)
              }
              i = 0;
              while ((o = d[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || p, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && X(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
              return e.type = p, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !X(n) || u && b(n[p]) && !x(n) && ((a = n[u]) && (n[u] = null), E.event.triggered = p, e.isPropagationStopped() && f.addEventListener(p, ct), n[p](), e.isPropagationStopped() && f.removeEventListener(p, ct), E.event.triggered = void 0, a && (n[u] = a)), e.result
          }
      },
      simulate: function(e, t, n) {
          var r = E.extend(new E.Event, n, {
              type: e,
              isSimulated: !0
          });
          E.event.trigger(r, null, t)
      }
  }), E.fn.extend({
      trigger: function(e, t) {
          return this.each(function() {
              E.event.trigger(e, t, this)
          })
      },
      triggerHandler: function(e, t) {
          var n = this[0];
          if (n) return E.event.trigger(e, t, n, !0)
      }
  }), m.focusin || E.each({
      focus: "focusin",
      blur: "focusout"
  }, function(n, r) {
      var i = function(e) {
          E.event.simulate(r, e.target, E.event.fix(e))
      };
      E.event.special[r] = {
          setup: function() {
              var e = this.ownerDocument || this.document || this,
                  t = Y.access(e, r);
              t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
          },
          teardown: function() {
              var e = this.ownerDocument || this.document || this,
                  t = Y.access(e, r) - 1;
              t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
          }
      }
  }), E.parseXML = function(e) {
      var t, n;
      if (!e || "string" != typeof e) return null;
      try {
          t = (new g.DOMParser).parseFromString(e, "text/xml")
      } catch (e) {}
      return n = t && t.getElementsByTagName("parsererror")[0], t && !n || E.error("Invalid XML: " + (n ? E.map(n.childNodes, function(e) {
          return e.textContent
      }).join("\n") : e)), t
  };
  var ft, dt = /\[\]$/,
      pt = /\r?\n/g,
      ht = /^(?:submit|button|image|reset|file)$/i,
      gt = /^(?:input|select|textarea|keygen)/i;

  function vt(n, e, r, i) {
      var t;
      if (Array.isArray(e)) E.each(e, function(e, t) {
          r || dt.test(n) ? i(n, t) : vt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
      });
      else if (r || "object" !== T(e)) i(n, e);
      else
          for (t in e) vt(n + "[" + t + "]", e[t], r, i)
  }
  E.param = function(e, t) {
      var n, r = [],
          i = function(e, t) {
              var n = b(t) ? t() : t;
              r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
          };
      if (null == e) return "";
      if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function() {
          i(this.name, this.value)
      });
      else
          for (n in e) vt(n, e[n], t, i);
      return r.join("&")
  }, E.fn.extend({
      serialize: function() {
          return E.param(this.serializeArray())
      },
      serializeArray: function() {
          return this.map(function() {
              var e = E.prop(this, "elements");
              return e ? E.makeArray(e) : this
          }).filter(function() {
              var e = this.type;
              return this.name && !E(this).is(":disabled") && gt.test(this.nodeName) && !ht.test(e) && (this.checked || !fe.test(e))
          }).map(function(e, t) {
              var n = E(this).val();
              return null == n ? null : Array.isArray(n) ? E.map(n, function(e) {
                  return {
                      name: t.name,
                      value: e.replace(pt, "\r\n")
                  }
              }) : {
                  name: t.name,
                  value: n.replace(pt, "\r\n")
              }
          }).get()
      }
  }), E.fn.extend({
      wrapAll: function(e) {
          var t;
          return this[0] && (b(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
              var e = this;
              while (e.firstElementChild) e = e.firstElementChild;
              return e
          }).append(this)), this
      },
      wrapInner: function(n) {
          return b(n) ? this.each(function(e) {
              E(this).wrapInner(n.call(this, e))
          }) : this.each(function() {
              var e = E(this),
                  t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n)
          })
      },
      wrap: function(t) {
          var n = b(t);
          return this.each(function(e) {
              E(this).wrapAll(n ? t.call(this, e) : t)
          })
      },
      unwrap: function(e) {
          return this.parent(e).not("body").each(function() {
              E(this).replaceWith(this.childNodes)
          }), this
      }
  }), E.expr.pseudos.hidden = function(e) {
      return !E.expr.pseudos.visible(e)
  }, E.expr.pseudos.visible = function(e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }, m.createHTMLDocument = ((ft = w.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === ft.childNodes.length), E.parseHTML = function(e, t, n) {
      return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((r = (t = w.implementation.createHTMLDocument("")).createElement("base")).href = w.location.href, t.head.appendChild(r)) : t = w), o = !n && [], (i = k.exec(e)) ? [t.createElement(i[1])] : (i = me([e], t, o), o && o.length && E(o).remove(), E.merge([], i.childNodes)));
      var r, i, o
  }, E.offset = {
      setOffset: function(e, t, n) {
          var r, i, o, a, s, u, l = E.css(e, "position"),
              c = E(e),
              f = {};
          "static" === l && (e.style.position = "relative"), s = c.offset(), o = E.css(e, "top"), u = E.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), b(t) && (t = t.call(e, n, E.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
      }
  }, E.fn.extend({
      offset: function(t) {
          if (arguments.length) return void 0 === t ? this : this.each(function(e) {
              E.offset.setOffset(this, t, e)
          });
          var e, n, r = this[0];
          return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
              top: e.top + n.pageYOffset,
              left: e.left + n.pageXOffset
          }) : {
              top: 0,
              left: 0
          } : void 0
      },
      position: function() {
          if (this[0]) {
              var e, t, n, r = this[0],
                  i = {
                      top: 0,
                      left: 0
                  };
              if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect();
              else {
                  t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                  while (e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position")) e = e.parentNode;
                  e && e !== r && 1 === e.nodeType && ((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0), i.left += E.css(e, "borderLeftWidth", !0))
              }
              return {
                  top: t.top - i.top - E.css(r, "marginTop", !0),
                  left: t.left - i.left - E.css(r, "marginLeft", !0)
              }
          }
      },
      offsetParent: function() {
          return this.map(function() {
              var e = this.offsetParent;
              while (e && "static" === E.css(e, "position")) e = e.offsetParent;
              return e || re
          })
      }
  }), E.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
  }, function(t, i) {
      var o = "pageYOffset" === i;
      E.fn[t] = function(e) {
          return $(this, function(e, t, n) {
              var r;
              if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
              r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
          }, t, e, arguments.length)
      }
  }), E.each(["top", "left"], function(e, n) {
      E.cssHooks[n] = $e(m.pixelPosition, function(e, t) {
          if (t) return t = Fe(e, n), Pe.test(t) ? E(e).position()[n] + "px" : t
      })
  }), E.each({
      Height: "height",
      Width: "width"
  }, function(a, s) {
      E.each({
          padding: "inner" + a,
          content: s,
          "": "outer" + a
      }, function(r, o) {
          E.fn[o] = function(e, t) {
              var n = arguments.length && (r || "boolean" != typeof e),
                  i = r || (!0 === e || !0 === t ? "margin" : "border");
              return $(this, function(e, t, n) {
                  var r;
                  return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? E.css(e, t, i) : E.style(e, t, n, i)
              }, s, n ? e : void 0, n)
          }
      })
  }), E.fn.extend({
      bind: function(e, t, n) {
          return this.on(e, null, t, n)
      },
      unbind: function(e, t) {
          return this.off(e, null, t)
      },
      delegate: function(e, t, n, r) {
          return this.on(t, e, n, r)
      },
      undelegate: function(e, t, n) {
          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      },
      hover: function(e, t) {
          return this.mouseenter(e).mouseleave(t || e)
      }
  }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
      E.fn[n] = function(e, t) {
          return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
      }
  });
  var yt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  E.proxy = function(e, t) {
      var n, r, i;
      if ("string" == typeof t && (n = e[t], t = e, e = n), b(e)) return r = s.call(arguments, 2), (i = function() {
          return e.apply(t || this, r.concat(s.call(arguments)))
      }).guid = e.guid = e.guid || E.guid++, i
  }, E.holdReady = function(e) {
      e ? E.readyWait++ : E.ready(!0)
  }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = S, E.isFunction = b, E.isWindow = x, E.camelCase = V, E.type = T, E.now = Date.now, E.isNumeric = function(e) {
      var t = E.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
  }, E.trim = function(e) {
      return null == e ? "" : (e + "").replace(yt, "$1")
  }, "function" == typeof define && define.amd && define("jquery", [], function() {
      return E
  });
  var mt = g.jQuery,
      bt = g.$;
  return E.noConflict = function(e) {
      return g.$ === E && (g.$ = bt), e && g.jQuery === E && (g.jQuery = mt), E
  }, "undefined" == typeof e && (g.jQuery = g.$ = E), E
});