/*! highlight.js v9.3.0 | BSD3 License | git.io/hljslicense */ ! function(e) {
	var n = "object" == typeof window && window || "object" == typeof self && self;
	"undefined" != typeof exports ? e(exports) : n && (n.hljs = e({}), "function" == typeof define && define.amd && define([], function() {
		return n.hljs
	}))
}(function(e) {
	function n(e) {
		return e.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
	}

	function t(e) {
		return e.nodeName.toLowerCase()
	}

	function r(e, n) {
		var t = e && e.exec(n);
		return t && 0 == t.index
	}

	function a(e) {
		return /^(no-?highlight|plain|text)$/i.test(e)
	}

	function i(e) {
		var n, t, r, i = e.className + " ";
		if (i += e.parentNode ? e.parentNode.className : "", t = /\blang(?:uage)?-([\w-]+)\b/i.exec(i)) return w(t[1]) ? t[1] : "no-highlight";
		for (i = i.split(/\s+/), n = 0, r = i.length; r > n; n++)
			if (w(i[n]) || a(i[n])) return i[n]
	}

	function o(e, n) {
		var t, r = {};
		for (t in e) r[t] = e[t];
		if (n)
			for (t in n) r[t] = n[t];
		return r
	}

	function u(e) {
		var n = [];
		return function r(e, a) {
			for (var i = e.firstChild; i; i = i.nextSibling) 3 == i.nodeType ? a += i.nodeValue.length : 1 == i.nodeType && (n.push({
				event: "start",
				offset: a,
				node: i
			}), a = r(i, a), t(i).match(/br|hr|img|input/) || n.push({
				event: "stop",
				offset: a,
				node: i
			}));
			return a
		}(e, 0), n
	}

	function c(e, r, a) {
		function i() {
			return e.length && r.length ? e[0].offset != r[0].offset ? e[0].offset < r[0].offset ? e : r : "start" == r[0].event ? e : r : e.length ? e : r
		}

		function o(e) {
			function r(e) {
				return " " + e.nodeName + '="' + n(e.value) + '"'
			}
			f += "<" + t(e) + Array.prototype.map.call(e.attributes, r).join("") + ">"
		}

		function u(e) {
			f += "</" + t(e) + ">"
		}

		function c(e) {
			("start" == e.event ? o : u)(e.node)
		}
		for (var s = 0, f = "", l = []; e.length || r.length;) {
			var g = i();
			if (f += n(a.substr(s, g[0].offset - s)), s = g[0].offset, g == e) {
				l.reverse().forEach(u);
				do c(g.splice(0, 1)[0]), g = i(); while (g == e && g.length && g[0].offset == s);
				l.reverse().forEach(o)
			} else "start" == g[0].event ? l.push(g[0].node) : l.pop(), c(g.splice(0, 1)[0])
		}
		return f + n(a.substr(s))
	}

	function s(e) {
		function n(e) {
			return e && e.source || e
		}

		function t(t, r) {
			return new RegExp(n(t), "m" + (e.cI ? "i" : "") + (r ? "g" : ""))
		}

		function r(a, i) {
			if (!a.compiled) {
				if (a.compiled = !0, a.k = a.k || a.bK, a.k) {
					var u = {},
						c = function(n, t) {
							e.cI && (t = t.toLowerCase()), t.split(" ").forEach(function(e) {
								var t = e.split("|");
								u[t[0]] = [n, t[1] ? Number(t[1]) : 1]
							})
						};
					"string" == typeof a.k ? c("keyword", a.k) : Object.keys(a.k).forEach(function(e) {
						c(e, a.k[e])
					}), a.k = u
				}
				a.lR = t(a.l || /\w+/, !0), i && (a.bK && (a.b = "\\b(" + a.bK.split(" ").join("|") + ")\\b"), a.b || (a.b = /\B|\b/), a.bR = t(a.b), a.e || a.eW || (a.e = /\B|\b/), a.e && (a.eR = t(a.e)), a.tE = n(a.e) || "", a.eW && i.tE && (a.tE += (a.e ? "|" : "") + i.tE)), a.i && (a.iR = t(a.i)), void 0 === a.r && (a.r = 1), a.c || (a.c = []);
				var s = [];
				a.c.forEach(function(e) {
					e.v ? e.v.forEach(function(n) {
						s.push(o(e, n))
					}) : s.push("self" == e ? a : e)
				}), a.c = s, a.c.forEach(function(e) {
					r(e, a)
				}), a.starts && r(a.starts, i);
				var f = a.c.map(function(e) {
					return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b
				}).concat([a.tE, a.i]).map(n).filter(Boolean);
				a.t = f.length ? t(f.join("|"), !0) : {
					exec: function() {
						return null
					}
				}
			}
		}
		r(e)
	}

	function f(e, t, a, i) {
		function o(e, n) {
			for (var t = 0; t < n.c.length; t++)
				if (r(n.c[t].bR, e)) return n.c[t]
		}

		function u(e, n) {
			if (r(e.eR, n)) {
				for (; e.endsParent && e.parent;) e = e.parent;
				return e
			}
			return e.eW ? u(e.parent, n) : void 0
		}

		function c(e, n) {
			return !a && r(n.iR, e)
		}

		function g(e, n) {
			var t = N.cI ? n[0].toLowerCase() : n[0];
			return e.k.hasOwnProperty(t) && e.k[t]
		}

		function p(e, n, t, r) {
			var a = r ? "" : E.classPrefix,
				i = '<span class="' + a,
				o = t ? "" : "</span>";
			return i += e + '">', i + n + o
		}

		function h() {
			if (!k.k) return n(M);
			var e = "",
				t = 0;
			k.lR.lastIndex = 0;
			for (var r = k.lR.exec(M); r;) {
				e += n(M.substr(t, r.index - t));
				var a = g(k, r);
				a ? (B += a[1], e += p(a[0], n(r[0]))) : e += n(r[0]), t = k.lR.lastIndex, r = k.lR.exec(M)
			}
			return e + n(M.substr(t))
		}

		function d() {
			var e = "string" == typeof k.sL;
			if (e && !R[k.sL]) return n(M);
			var t = e ? f(k.sL, M, !0, y[k.sL]) : l(M, k.sL.length ? k.sL : void 0);
			return k.r > 0 && (B += t.r), e && (y[k.sL] = t.top), p(t.language, t.value, !1, !0)
		}

		function b() {
			L += void 0 !== k.sL ? d() : h(), M = ""
		}

		function v(e, n) {
			L += e.cN ? p(e.cN, "", !0) : "", k = Object.create(e, {
				parent: {
					value: k
				}
			})
		}

		function m(e, n) {
			if (M += e, void 0 === n) return b(), 0;
			var t = o(n, k);
			if (t) return t.skip ? M += n : (t.eB && (M += n), b(), t.rB || t.eB || (M = n)), v(t, n), t.rB ? 0 : n.length;
			var r = u(k, n);
			if (r) {
				var a = k;
				a.skip ? M += n : (a.rE || a.eE || (M += n), b(), a.eE && (M = n));
				do k.cN && (L += "</span>"), k.skip || (B += k.r), k = k.parent; while (k != r.parent);
				return r.starts && v(r.starts, ""), a.rE ? 0 : n.length
			}
			if (c(n, k)) throw new Error('Illegal lexeme "' + n + '" for mode "' + (k.cN || "<unnamed>") + '"');
			return M += n, n.length || 1
		}
		var N = w(e);
		if (!N) throw new Error('Unknown language: "' + e + '"');
		s(N);
		var x, k = i || N,
			y = {},
			L = "";
		for (x = k; x != N; x = x.parent) x.cN && (L = p(x.cN, "", !0) + L);
		var M = "",
			B = 0;
		try {
			for (var C, j, I = 0;;) {
				if (k.t.lastIndex = I, C = k.t.exec(t), !C) break;
				j = m(t.substr(I, C.index - I), C[0]), I = C.index + j
			}
			for (m(t.substr(I)), x = k; x.parent; x = x.parent) x.cN && (L += "</span>");
			return {
				r: B,
				value: L,
				language: e,
				top: k
			}
		} catch (O) {
			if (-1 != O.message.indexOf("Illegal")) return {
				r: 0,
				value: n(t)
			};
			throw O
		}
	}

	function l(e, t) {
		t = t || E.languages || Object.keys(R);
		var r = {
				r: 0,
				value: n(e)
			},
			a = r;
		return t.filter(w).forEach(function(n) {
			var t = f(n, e, !1);
			t.language = n, t.r > a.r && (a = t), t.r > r.r && (a = r, r = t)
		}), a.language && (r.second_best = a), r
	}

	function g(e) {
		return E.tabReplace && (e = e.replace(/^((<[^>]+>|\t)+)/gm, function(e, n) {
			return n.replace(/\t/g, E.tabReplace)
		})), E.useBR && (e = e.replace(/\n/g, "<br>")), e
	}

	function p(e, n, t) {
		var r = n ? x[n] : t,
			a = [e.trim()];
		return e.match(/\bhljs\b/) || a.push("hljs"), -1 === e.indexOf(r) && a.push(r), a.join(" ").trim()
	}

	function h(e) {
		var n = i(e);
		if (!a(n)) {
			var t;
			E.useBR ? (t = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), t.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : t = e;
			var r = t.textContent,
				o = n ? f(n, r, !0) : l(r),
				s = u(t);
			if (s.length) {
				var h = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
				h.innerHTML = o.value, o.value = c(s, u(h), r)
			}
			o.value = g(o.value), e.innerHTML = o.value, e.className = p(e.className, n, o.language), e.result = {
				language: o.language,
				re: o.r
			}, o.second_best && (e.second_best = {
				language: o.second_best.language,
				re: o.second_best.r
			})
		}
	}

	function d(e) {
		E = o(E, e)
	}

	function b() {
		if (!b.called) {
			b.called = !0;
			var e = document.querySelectorAll("pre code");
			Array.prototype.forEach.call(e, h)
		}
	}

	function v() {
		addEventListener("DOMContentLoaded", b, !1), addEventListener("load", b, !1)
	}

	function m(n, t) {
		var r = R[n] = t(e);
		r.aliases && r.aliases.forEach(function(e) {
			x[e] = n
		})
	}

	function N() {
		return Object.keys(R)
	}

	function w(e) {
		return e = (e || "").toLowerCase(), R[e] || R[x[e]]
	}
	var E = {
			classPrefix: "hljs-",
			tabReplace: null,
			useBR: !1,
			languages: void 0
		},
		R = {},
		x = {};
	return e.highlight = f, e.highlightAuto = l, e.fixMarkup = g, e.highlightBlock = h, e.configure = d, e.initHighlighting = b, e.initHighlightingOnLoad = v, e.registerLanguage = m, e.listLanguages = N, e.getLanguage = w, e.inherit = o, e.IR = "[a-zA-Z]\\w*", e.UIR = "[a-zA-Z_]\\w*", e.NR = "\\b\\d+(\\.\\d+)?", e.CNR = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BNR = "\\b(0b[01]+)", e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BE = {
		b: "\\\\[\\s\\S]",
		r: 0
	}, e.ASM = {
		cN: "string",
		b: "'",
		e: "'",
		i: "\\n",
		c: [e.BE]
	}, e.QSM = {
		cN: "string",
		b: '"',
		e: '"',
		i: "\\n",
		c: [e.BE]
	}, e.PWM = {
		b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/
	}, e.C = function(n, t, r) {
		var a = e.inherit({
			cN: "comment",
			b: n,
			e: t,
			c: []
		}, r || {});
		return a.c.push(e.PWM), a.c.push({
			cN: "doctag",
			b: "(?:TODO|FIXME|NOTE|BUG|XXX):",
			r: 0
		}), a
	}, e.CLCM = e.C("//", "$"), e.CBCM = e.C("/\\*", "\\*/"), e.HCM = e.C("#", "$"), e.NM = {
		cN: "number",
		b: e.NR,
		r: 0
	}, e.CNM = {
		cN: "number",
		b: e.CNR,
		r: 0
	}, e.BNM = {
		cN: "number",
		b: e.BNR,
		r: 0
	}, e.CSSNM = {
		cN: "number",
		b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
		r: 0
	}, e.RM = {
		cN: "regexp",
		b: /\//,
		e: /\/[gimuy]*/,
		i: /\n/,
		c: [e.BE, {
			b: /\[/,
			e: /\]/,
			r: 0,
			c: [e.BE]
		}]
	}, e.TM = {
		cN: "title",
		b: e.IR,
		r: 0
	}, e.UTM = {
		cN: "title",
		b: e.UIR,
		r: 0
	}, e.METHOD_GUARD = {
		b: "\\.\\s*" + e.UIR,
		r: 0
	}, e
});
hljs.registerLanguage("xml", function(s) {
	var e = "[A-Za-z0-9\\._:-]+",
		t = {
			eW: !0,
			i: /</,
			r: 0,
			c: [{
				cN: "attr",
				b: e,
				r: 0
			}, {
				b: /=\s*/,
				r: 0,
				c: [{
					cN: "string",
					endsParent: !0,
					v: [{
						b: /"/,
						e: /"/
					}, {
						b: /'/,
						e: /'/
					}, {
						b: /[^\s"'=<>`]+/
					}]
				}]
			}]
		};
	return {
		aliases: ["html", "xhtml", "rss", "atom", "xsl", "plist"],
		cI: !0,
		c: [{
			cN: "meta",
			b: "<!DOCTYPE",
			e: ">",
			r: 10,
			c: [{
				b: "\\[",
				e: "\\]"
			}]
		}, s.C("<!--", "-->", {
			r: 10
		}), {
			b: "<\\!\\[CDATA\\[",
			e: "\\]\\]>",
			r: 10
		}, {
			b: /<\?(php)?/,
			e: /\?>/,
			sL: "php",
			c: [{
				b: "/\\*",
				e: "\\*/",
				skip: !0
			}]
		}, {
			cN: "tag",
			b: "<style(?=\\s|>|$)",
			e: ">",
			k: {
				name: "style"
			},
			c: [t],
			starts: {
				e: "</style>",
				rE: !0,
				sL: ["css", "xml"]
			}
		}, {
			cN: "tag",
			b: "<script(?=\\s|>|$)",
			e: ">",
			k: {
				name: "script"
			},
			c: [t],
			starts: {
				e: "</script>",
				rE: !0,
				sL: ["actionscript", "javascript", "handlebars", "xml"]
			}
		}, {
			cN: "meta",
			v: [{
				b: /<\?xml/,
				e: /\?>/,
				r: 10
			}, {
				b: /<\?\w+/,
				e: /\?>/
			}]
		}, {
			cN: "tag",
			b: "</?",
			e: "/?>",
			c: [{
				cN: "name",
				b: /[^\/><\s]+/,
				r: 0
			}, t]
		}]
	}
});
hljs.registerLanguage("http", function(e) {
	var t = "HTTP/[0-9\\.]+";
	return {
		aliases: ["https"],
		i: "\\S",
		c: [{
			b: "^" + t,
			e: "$",
			c: [{
				cN: "number",
				b: "\\b\\d{3}\\b"
			}]
		}, {
			b: "^[A-Z]+ (.*?) " + t + "$",
			rB: !0,
			e: "$",
			c: [{
				cN: "string",
				b: " ",
				e: " ",
				eB: !0,
				eE: !0
			}, {
				b: t
			}, {
				cN: "keyword",
				b: "[A-Z]+"
			}]
		}, {
			cN: "attribute",
			b: "^\\w",
			e: ": ",
			eE: !0,
			i: "\\n|\\s|=",
			starts: {
				e: "$",
				r: 0
			}
		}, {
			b: "\\n\\n",
			starts: {
				sL: [],
				eW: !0
			}
		}]
	}
});
hljs.registerLanguage("ini", function(e) {
	var b = {
		cN: "string",
		c: [e.BE],
		v: [{
			b: "'''",
			e: "'''",
			r: 10
		}, {
			b: '"""',
			e: '"""',
			r: 10
		}, {
			b: '"',
			e: '"'
		}, {
			b: "'",
			e: "'"
		}]
	};
	return {
		aliases: ["toml"],
		cI: !0,
		i: /\S/,
		c: [e.C(";", "$"), e.HCM, {
			cN: "section",
			b: /^\s*\[+/,
			e: /\]+/
		}, {
			b: /^[a-z0-9\[\]_-]+\s*=\s*/,
			e: "$",
			rB: !0,
			c: [{
				cN: "attr",
				b: /[a-z0-9\[\]_-]+/
			}, {
				b: /=/,
				eW: !0,
				r: 0,
				c: [{
					cN: "literal",
					b: /\bon|off|true|false|yes|no\b/
				}, {
					cN: "variable",
					v: [{
						b: /\$[\w\d"][\w\d_]*/
					}, {
						b: /\$\{(.*?)}/
					}]
				}, b, {
					cN: "number",
					b: /([\+\-]+)?[\d]+_[\d_]+/
				}, e.NM]
			}]
		}]
	}
});
hljs.registerLanguage("markdown", function(e) {
	return {
		aliases: ["md", "mkdown", "mkd"],
		c: [{
			cN: "section",
			v: [{
				b: "^#{1,6}",
				e: "$"
			}, {
				b: "^.+?\\n[=-]{2,}$"
			}]
		}, {
			b: "<",
			e: ">",
			sL: "xml",
			r: 0
		}, {
			cN: "bullet",
			b: "^([*+-]|(\\d+\\.))\\s+"
		}, {
			cN: "strong",
			b: "[*_]{2}.+?[*_]{2}"
		}, {
			cN: "emphasis",
			v: [{
				b: "\\*.+?\\*"
			}, {
				b: "_.+?_",
				r: 0
			}]
		}, {
			cN: "quote",
			b: "^>\\s+",
			e: "$"
		}, {
			cN: "code",
			v: [{
				b: "^```w*s*$",
				e: "^```s*$"
			}, {
				b: "`.+?`"
			}, {
				b: "^( {4}|	)",
				e: "$",
				r: 0
			}]
		}, {
			b: "^[-\\*]{3,}",
			e: "$"
		}, {
			b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
			rB: !0,
			c: [{
				cN: "string",
				b: "\\[",
				e: "\\]",
				eB: !0,
				rE: !0,
				r: 0
			}, {
				cN: "link",
				b: "\\]\\(",
				e: "\\)",
				eB: !0,
				eE: !0
			}, {
				cN: "symbol",
				b: "\\]\\[",
				e: "\\]",
				eB: !0,
				eE: !0
			}],
			r: 10
		}, {
			b: "^\\[.+\\]:",
			rB: !0,
			c: [{
				cN: "symbol",
				b: "\\[",
				e: "\\]:",
				eB: !0,
				eE: !0,
				starts: {
					cN: "link",
					e: "$"
				}
			}]
		}]
	}
});
hljs.registerLanguage("objectivec", function(e) {
	var t = {
			cN: "built_in",
			b: "(AV|CA|CF|CG|CI|MK|MP|NS|UI|XC)\\w+"
		},
		i = {
			keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required",
			literal: "false true FALSE TRUE nil YES NO NULL",
			built_in: "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
		},
		n = /[a-zA-Z@][a-zA-Z0-9_]*/,
		o = "@interface @class @protocol @implementation";
	return {
		aliases: ["mm", "objc", "obj-c"],
		k: i,
		l: n,
		i: "</",
		c: [t, e.CLCM, e.CBCM, e.CNM, e.QSM, {
			cN: "string",
			v: [{
				b: '@"',
				e: '"',
				i: "\\n",
				c: [e.BE]
			}, {
				b: "'",
				e: "[^\\\\]'",
				i: "[^\\\\][^']"
			}]
		}, {
			cN: "meta",
			b: "#",
			e: "$",
			c: [{
				cN: "meta-string",
				v: [{
					b: '"',
					e: '"'
				}, {
					b: "<",
					e: ">"
				}]
			}]
		}, {
			cN: "class",
			b: "(" + o.split(" ").join("|") + ")\\b",
			e: "({|$)",
			eE: !0,
			k: o,
			l: n,
			c: [e.UTM]
		}, {
			b: "\\." + e.UIR,
			r: 0
		}]
	}
});
hljs.registerLanguage("php", function(e) {
	var c = {
			b: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"
		},
		a = {
			cN: "meta",
			b: /<\?(php)?|\?>/
		},
		i = {
			cN: "string",
			c: [e.BE, a],
			v: [{
				b: 'b"',
				e: '"'
			}, {
				b: "b'",
				e: "'"
			}, e.inherit(e.ASM, {
				i: null
			}), e.inherit(e.QSM, {
				i: null
			})]
		},
		t = {
			v: [e.BNM, e.CNM]
		};
	return {
		aliases: ["php3", "php4", "php5", "php6"],
		cI: !0,
		k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
		c: [e.HCM, e.C("//", "$", {
			c: [a]
		}), e.C("/\\*", "\\*/", {
			c: [{
				cN: "doctag",
				b: "@[A-Za-z]+"
			}]
		}), e.C("__halt_compiler.+?;", !1, {
			eW: !0,
			k: "__halt_compiler",
			l: e.UIR
		}), {
			cN: "string",
			b: /<<<['"]?\w+['"]?$/,
			e: /^\w+;?$/,
			c: [e.BE, {
				cN: "subst",
				v: [{
					b: /\$\w+/
				}, {
					b: /\{\$/,
					e: /\}/
				}]
			}]
		}, a, c, {
			b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
		}, {
			cN: "function",
			bK: "function",
			e: /[;{]/,
			eE: !0,
			i: "\\$|\\[|%",
			c: [e.UTM, {
				cN: "params",
				b: "\\(",
				e: "\\)",
				c: ["self", c, e.CBCM, i, t]
			}]
		}, {
			cN: "class",
			bK: "class interface",
			e: "{",
			eE: !0,
			i: /[:\(\$"]/,
			c: [{
				bK: "extends implements"
			}, e.UTM]
		}, {
			bK: "namespace",
			e: ";",
			i: /[\.']/,
			c: [e.UTM]
		}, {
			bK: "use",
			e: ";",
			c: [e.UTM]
		}, {
			b: "=>"
		}, i, t]
	}
});
hljs.registerLanguage("perl", function(e) {
	var t = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",
		r = {
			cN: "subst",
			b: "[$@]\\{",
			e: "\\}",
			k: t
		},
		s = {
			b: "->{",
			e: "}"
		},
		n = {
			v: [{
				b: /\$\d/
			}, {
				b: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/
			}, {
				b: /[\$%@][^\s\w{]/,
				r: 0
			}]
		},
		i = [e.BE, r, n],
		o = [n, e.HCM, e.C("^\\=\\w", "\\=cut", {
			eW: !0
		}), s, {
			cN: "string",
			c: i,
			v: [{
				b: "q[qwxr]?\\s*\\(",
				e: "\\)",
				r: 5
			}, {
				b: "q[qwxr]?\\s*\\[",
				e: "\\]",
				r: 5
			}, {
				b: "q[qwxr]?\\s*\\{",
				e: "\\}",
				r: 5
			}, {
				b: "q[qwxr]?\\s*\\|",
				e: "\\|",
				r: 5
			}, {
				b: "q[qwxr]?\\s*\\<",
				e: "\\>",
				r: 5
			}, {
				b: "qw\\s+q",
				e: "q",
				r: 5
			}, {
				b: "'",
				e: "'",
				c: [e.BE]
			}, {
				b: '"',
				e: '"'
			}, {
				b: "`",
				e: "`",
				c: [e.BE]
			}, {
				b: "{\\w+}",
				c: [],
				r: 0
			}, {
				b: "-?\\w+\\s*\\=\\>",
				c: [],
				r: 0
			}]
		}, {
			cN: "number",
			b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
			r: 0
		}, {
			b: "(\\/\\/|" + e.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
			k: "split return print reverse grep",
			r: 0,
			c: [e.HCM, {
				cN: "regexp",
				b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
				r: 10
			}, {
				cN: "regexp",
				b: "(m|qr)?/",
				e: "/[a-z]*",
				c: [e.BE],
				r: 0
			}]
		}, {
			cN: "function",
			bK: "sub",
			e: "(\\s*\\(.*?\\))?[;{]",
			eE: !0,
			r: 5,
			c: [e.TM]
		}, {
			b: "-\\w\\b",
			r: 0
		}, {
			b: "^__DATA__$",
			e: "^__END__$",
			sL: "mojolicious",
			c: [{
				b: "^@@.*",
				e: "$",
				cN: "comment"
			}]
		}];
	return r.c = o, s.c = o, {
		aliases: ["pl", "pm"],
		l: /[\w\.]+/,
		k: t,
		c: o
	}
});
hljs.registerLanguage("css", function(e) {
	var c = "[a-zA-Z-][a-zA-Z0-9_-]*",
		t = {
			b: /[A-Z\_\.\-]+\s*:/,
			rB: !0,
			e: ";",
			eW: !0,
			c: [{
				cN: "attribute",
				b: /\S/,
				e: ":",
				eE: !0,
				starts: {
					eW: !0,
					eE: !0,
					c: [{
						b: /[\w-]+\(/,
						rB: !0,
						c: [{
							cN: "built_in",
							b: /[\w-]+/
						}, {
							b: /\(/,
							e: /\)/,
							c: [e.ASM, e.QSM]
						}]
					}, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
						cN: "number",
						b: "#[0-9A-Fa-f]+"
					}, {
						cN: "meta",
						b: "!important"
					}]
				}
			}]
		};
	return {
		cI: !0,
		i: /[=\/|'\$]/,
		c: [e.CBCM, {
			cN: "selector-id",
			b: /#[A-Za-z0-9_-]+/
		}, {
			cN: "selector-class",
			b: /\.[A-Za-z0-9_-]+/
		}, {
			cN: "selector-attr",
			b: /\[/,
			e: /\]/,
			i: "$"
		}, {
			cN: "selector-pseudo",
			b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
		}, {
			b: "@(font-face|page)",
			l: "[a-z-]+",
			k: "font-face page"
		}, {
			b: "@",
			e: "[{;]",
			i: /:/,
			c: [{
				cN: "keyword",
				b: /\w+/
			}, {
				b: /\s/,
				eW: !0,
				eE: !0,
				r: 0,
				c: [e.ASM, e.QSM, e.CSSNM]
			}]
		}, {
			cN: "selector-tag",
			b: c,
			r: 0
		}, {
			b: "{",
			e: "}",
			i: /\S/,
			c: [e.CBCM, t]
		}]
	}
});
hljs.registerLanguage("sql", function(e) {
	var t = e.C("--", "$");
	return {
		cI: !0,
		i: /[<>{}*#]/,
		c: [{
			bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke",
			e: /;/,
			eW: !0,
			l: /[\w\.]+/,
			k: {
				keyword: "abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
				literal: "true false null",
				built_in: "array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void"
			},
			c: [{
				cN: "string",
				b: "'",
				e: "'",
				c: [e.BE, {
					b: "''"
				}]
			}, {
				cN: "string",
				b: '"',
				e: '"',
				c: [e.BE, {
					b: '""'
				}]
			}, {
				cN: "string",
				b: "`",
				e: "`",
				c: [e.BE]
			}, e.CNM, e.CBCM, t]
		}, e.CBCM, t]
	}
});
hljs.registerLanguage("python", function(e) {
	var r = {
			cN: "meta",
			b: /^(>>>|\.\.\.) /
		},
		b = {
			cN: "string",
			c: [e.BE],
			v: [{
				b: /(u|b)?r?'''/,
				e: /'''/,
				c: [r],
				r: 10
			}, {
				b: /(u|b)?r?"""/,
				e: /"""/,
				c: [r],
				r: 10
			}, {
				b: /(u|r|ur)'/,
				e: /'/,
				r: 10
			}, {
				b: /(u|r|ur)"/,
				e: /"/,
				r: 10
			}, {
				b: /(b|br)'/,
				e: /'/
			}, {
				b: /(b|br)"/,
				e: /"/
			}, e.ASM, e.QSM]
		},
		a = {
			cN: "number",
			r: 0,
			v: [{
				b: e.BNR + "[lLjJ]?"
			}, {
				b: "\\b(0o[0-7]+)[lLjJ]?"
			}, {
				b: e.CNR + "[lLjJ]?"
			}]
		},
		l = {
			cN: "params",
			b: /\(/,
			e: /\)/,
			c: ["self", r, a, b]
		};
	return {
		aliases: ["py", "gyp"],
		k: {
			keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False",
			built_in: "Ellipsis NotImplemented"
		},
		i: /(<\/|->|\?)/,
		c: [r, a, b, e.HCM, {
			v: [{
				cN: "function",
				bK: "def",
				r: 10
			}, {
				cN: "class",
				bK: "class"
			}],
			e: /:/,
			i: /[${=;\n,]/,
			c: [e.UTM, l, {
				b: /->/,
				eW: !0,
				k: "None"
			}]
		}, {
			cN: "meta",
			b: /^[\t ]*@/,
			e: /$/
		}, {
			b: /\b(print|exec)\(/
		}]
	}
});
hljs.registerLanguage("bash", function(e) {
	var t = {
			cN: "variable",
			v: [{
				b: /\$[\w\d#@][\w\d_]*/
			}, {
				b: /\$\{(.*?)}/
			}]
		},
		s = {
			cN: "string",
			b: /"/,
			e: /"/,
			c: [e.BE, t, {
				cN: "variable",
				b: /\$\(/,
				e: /\)/,
				c: [e.BE]
			}]
		},
		a = {
			cN: "string",
			b: /'/,
			e: /'/
		};
	return {
		aliases: ["sh", "zsh"],
		l: /-?[a-z\.]+/,
		k: {
			keyword: "if then else elif fi for while in do done case esac function",
			literal: "true false",
			built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
			_: "-ne -eq -lt -gt -f -d -e -s -l -a"
		},
		c: [{
			cN: "meta",
			b: /^#![^\n]+sh\s*$/,
			r: 10
		}, {
			cN: "function",
			b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
			rB: !0,
			c: [e.inherit(e.TM, {
				b: /\w[\w\d_]*/
			})],
			r: 0
		}, e.HCM, s, a, t]
	}
});
hljs.registerLanguage("java", function(e) {
	var t = e.UIR + "(<" + e.UIR + "(\\s*,\\s*" + e.UIR + ")*>)?",
		a = "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports",
		r = "\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",
		s = {
			cN: "number",
			b: r,
			r: 0
		};
	return {
		aliases: ["jsp"],
		k: a,
		i: /<\/|#/,
		c: [e.C("/\\*\\*", "\\*/", {
			r: 0,
			c: [{
				b: /\w+@/,
				r: 0
			}, {
				cN: "doctag",
				b: "@[A-Za-z]+"
			}]
		}), e.CLCM, e.CBCM, e.ASM, e.QSM, {
			cN: "class",
			bK: "class interface",
			e: /[{;=]/,
			eE: !0,
			k: "class interface",
			i: /[:"\[\]]/,
			c: [{
				bK: "extends implements"
			}, e.UTM]
		}, {
			bK: "new throw return else",
			r: 0
		}, {
			cN: "function",
			b: "(" + t + "\\s+)+" + e.UIR + "\\s*\\(",
			rB: !0,
			e: /[{;=]/,
			eE: !0,
			k: a,
			c: [{
				b: e.UIR + "\\s*\\(",
				rB: !0,
				r: 0,
				c: [e.UTM]
			}, {
				cN: "params",
				b: /\(/,
				e: /\)/,
				k: a,
				r: 0,
				c: [e.ASM, e.QSM, e.CNM, e.CBCM]
			}, e.CLCM, e.CBCM]
		}, s, {
			cN: "meta",
			b: "@[A-Za-z]+"
		}]
	}
});
hljs.registerLanguage("ruby", function(e) {
	var r = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
		b = {
			keyword: "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
			literal: "true false nil"
		},
		c = {
			cN: "doctag",
			b: "@[A-Za-z]+"
		},
		a = {
			b: "#<",
			e: ">"
		},
		s = [e.C("#", "$", {
			c: [c]
		}), e.C("^\\=begin", "^\\=end", {
			c: [c],
			r: 10
		}), e.C("^__END__", "\\n$")],
		n = {
			cN: "subst",
			b: "#\\{",
			e: "}",
			k: b
		},
		t = {
			cN: "string",
			c: [e.BE, n],
			v: [{
				b: /'/,
				e: /'/
			}, {
				b: /"/,
				e: /"/
			}, {
				b: /`/,
				e: /`/
			}, {
				b: "%[qQwWx]?\\(",
				e: "\\)"
			}, {
				b: "%[qQwWx]?\\[",
				e: "\\]"
			}, {
				b: "%[qQwWx]?{",
				e: "}"
			}, {
				b: "%[qQwWx]?<",
				e: ">"
			}, {
				b: "%[qQwWx]?/",
				e: "/"
			}, {
				b: "%[qQwWx]?%",
				e: "%"
			}, {
				b: "%[qQwWx]?-",
				e: "-"
			}, {
				b: "%[qQwWx]?\\|",
				e: "\\|"
			}, {
				b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
			}]
		},
		i = {
			cN: "params",
			b: "\\(",
			e: "\\)",
			endsParent: !0,
			k: b
		},
		d = [t, a, {
			cN: "class",
			bK: "class module",
			e: "$|;",
			i: /=/,
			c: [e.inherit(e.TM, {
				b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
			}), {
				b: "<\\s*",
				c: [{
					b: "(" + e.IR + "::)?" + e.IR
				}]
			}].concat(s)
		}, {
			cN: "function",
			bK: "def",
			e: "$|;",
			c: [e.inherit(e.TM, {
				b: r
			}), i].concat(s)
		}, {
			b: e.IR + "::"
		}, {
			cN: "symbol",
			b: e.UIR + "(\\!|\\?)?:",
			r: 0
		}, {
			cN: "symbol",
			b: ":(?!\\s)",
			c: [t, {
				b: r
			}],
			r: 0
		}, {
			cN: "number",
			b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
			r: 0
		}, {
			b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
		}, {
			cN: "params",
			b: /\|/,
			e: /\|/,
			k: b
		}, {
			b: "(" + e.RSR + ")\\s*",
			c: [a, {
				cN: "regexp",
				c: [e.BE, n],
				i: /\n/,
				v: [{
					b: "/",
					e: "/[a-z]*"
				}, {
					b: "%r{",
					e: "}[a-z]*"
				}, {
					b: "%r\\(",
					e: "\\)[a-z]*"
				}, {
					b: "%r!",
					e: "![a-z]*"
				}, {
					b: "%r\\[",
					e: "\\][a-z]*"
				}]
			}].concat(s),
			r: 0
		}].concat(s);
	n.c = d, i.c = d;
	var l = "[>?]>",
		o = "[\\w#]+\\(\\w+\\):\\d+:\\d+>",
		u = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",
		w = [{
			b: /^\s*=>/,
			starts: {
				e: "$",
				c: d
			}
		}, {
			cN: "meta",
			b: "^(" + l + "|" + o + "|" + u + ")",
			starts: {
				e: "$",
				c: d
			}
		}];
	return {
		aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
		k: b,
		i: /\/\*/,
		c: s.concat(w).concat(d)
	}
});
hljs.registerLanguage("diff", function(e) {
	return {
		aliases: ["patch"],
		c: [{
			cN: "meta",
			r: 10,
			v: [{
				b: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/
			}, {
				b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
			}, {
				b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/
			}]
		}, {
			cN: "comment",
			v: [{
				b: /Index: /,
				e: /$/
			}, {
				b: /=====/,
				e: /=====$/
			}, {
				b: /^\-\-\-/,
				e: /$/
			}, {
				b: /^\*{3} /,
				e: /$/
			}, {
				b: /^\+\+\+/,
				e: /$/
			}, {
				b: /\*{5}/,
				e: /\*{5}$/
			}]
		}, {
			cN: "addition",
			b: "^\\+",
			e: "$"
		}, {
			cN: "deletion",
			b: "^\\-",
			e: "$"
		}, {
			cN: "addition",
			b: "^\\!",
			e: "$"
		}]
	}
});
hljs.registerLanguage("makefile", function(e) {
	var a = {
		cN: "variable",
		b: /\$\(/,
		e: /\)/,
		c: [e.BE]
	};
	return {
		aliases: ["mk", "mak"],
		c: [e.HCM, {
			b: /^\w+\s*\W*=/,
			rB: !0,
			r: 0,
			starts: {
				e: /\s*\W*=/,
				eE: !0,
				starts: {
					e: /$/,
					r: 0,
					c: [a]
				}
			}
		}, {
			cN: "section",
			b: /^[\w]+:\s*$/
		}, {
			cN: "meta",
			b: /^\.PHONY:/,
			e: /$/,
			k: {
				"meta-keyword": ".PHONY"
			},
			l: /[\.\w]+/
		}, {
			b: /^\t+/,
			e: /$/,
			r: 0,
			c: [e.QSM, a]
		}]
	}
});
hljs.registerLanguage("json", function(e) {
	var i = {
			literal: "true false null"
		},
		n = [e.QSM, e.CNM],
		r = {
			e: ",",
			eW: !0,
			eE: !0,
			c: n,
			k: i
		},
		t = {
			b: "{",
			e: "}",
			c: [{
				cN: "attr",
				b: /"/,
				e: /"/,
				c: [e.BE],
				i: "\\n"
			}, e.inherit(r, {
				b: /:/
			})],
			i: "\\S"
		},
		c = {
			b: "\\[",
			e: "\\]",
			c: [e.inherit(r)],
			i: "\\S"
		};
	return n.splice(n.length, 0, t, c), {
		c: n,
		k: i,
		i: "\\S"
	}
});
hljs.registerLanguage("javascript", function(e) {
	return {
		aliases: ["js", "jsx"],
		k: {
			keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
			literal: "true false null undefined NaN Infinity",
			built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
		},
		c: [{
			cN: "meta",
			r: 10,
			b: /^\s*['"]use (strict|asm)['"]/
		}, {
			cN: "meta",
			b: /^#!/,
			e: /$/
		}, e.ASM, e.QSM, {
			cN: "string",
			b: "`",
			e: "`",
			c: [e.BE, {
				cN: "subst",
				b: "\\$\\{",
				e: "\\}"
			}]
		}, e.CLCM, e.CBCM, {
			cN: "number",
			v: [{
				b: "\\b(0[bB][01]+)"
			}, {
				b: "\\b(0[oO][0-7]+)"
			}, {
				b: e.CNR
			}],
			r: 0
		}, {
			b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
			k: "return throw case",
			c: [e.CLCM, e.CBCM, e.RM, {
				b: /</,
				e: /(\/\w+|\w+\/)>/,
				sL: "xml",
				c: [{
					b: /<\w+\s*\/>/,
					skip: !0
				}, {
					b: /<\w+/,
					e: /(\/\w+|\w+\/)>/,
					skip: !0,
					c: ["self"]
				}]
			}],
			r: 0
		}, {
			cN: "function",
			bK: "function",
			e: /\{/,
			eE: !0,
			c: [e.inherit(e.TM, {
				b: /[A-Za-z$_][0-9A-Za-z$_]*/
			}), {
				cN: "params",
				b: /\(/,
				e: /\)/,
				eB: !0,
				eE: !0,
				c: [e.CLCM, e.CBCM]
			}],
			i: /\[|%/
		}, {
			b: /\$[(.]/
		}, e.METHOD_GUARD, {
			cN: "class",
			bK: "class",
			e: /[{;=]/,
			eE: !0,
			i: /[:"\[\]]/,
			c: [{
				bK: "extends"
			}, e.UTM]
		}, {
			bK: "constructor",
			e: /\{/,
			eE: !0
		}],
		i: /#(?!!)/
	}
});
hljs.registerLanguage("cpp", function(t) {
	var e = {
			cN: "keyword",
			b: "\\b[a-z\\d_]*_t\\b"
		},
		r = {
			cN: "string",
			v: [t.inherit(t.QSM, {
				b: '((u8?|U)|L)?"'
			}), {
				b: '(u8?|U)?R"',
				e: '"',
				c: [t.BE]
			}, {
				b: "'\\\\?.",
				e: "'",
				i: "."
			}]
		},
		i = {
			cN: "number",
			v: [{
				b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"
			}, {
				b: t.CNR
			}],
			r: 0
		},
		s = {
			cN: "meta",
			b: "#",
			e: "$",
			k: {
				"meta-keyword": "if else elif endif define undef warning error line pragma ifdef ifndef"
			},
			c: [{
				b: /\\\n/,
				r: 0
			}, {
				bK: "include",
				e: "$",
				k: {
					"meta-keyword": "include"
				},
				c: [t.inherit(r, {
					cN: "meta-string"
				}), {
					cN: "meta-string",
					b: "<",
					e: ">",
					i: "\\n"
				}]
			}, r, t.CLCM, t.CBCM]
		},
		a = t.IR + "\\s*\\(",
		c = {
			keyword: "int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong",
			built_in: "std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",
			literal: "true false nullptr NULL"
		},
		n = [e, t.CLCM, t.CBCM, i, r];
	return {
		aliases: ["c", "cc", "h", "c++", "h++", "hpp"],
		k: c,
		i: "</",
		c: n.concat([s, {
			b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
			e: ">",
			k: c,
			c: ["self", e]
		}, {
			b: t.IR + "::",
			k: c
		}, {
			v: [{
				b: /=/,
				e: /;/
			}, {
				b: /\(/,
				e: /\)/
			}, {
				bK: "new throw return else",
				e: /;/
			}],
			k: c,
			c: n.concat([{
				b: /\(/,
				e: /\)/,
				c: n.concat(["self"]),
				r: 0
			}]),
			r: 0
		}, {
			cN: "function",
			b: "(" + t.IR + "[\\*&\\s]+)+" + a,
			rB: !0,
			e: /[{;=]/,
			eE: !0,
			k: c,
			i: /[^\w\s\*&]/,
			c: [{
				b: a,
				rB: !0,
				c: [t.TM],
				r: 0
			}, {
				cN: "params",
				b: /\(/,
				e: /\)/,
				k: c,
				r: 0,
				c: [t.CLCM, t.CBCM, r, i]
			}, t.CLCM, t.CBCM, s]
		}])
	}
});
hljs.registerLanguage("apache", function(e) {
	var r = {
		cN: "number",
		b: "[\\$%]\\d+"
	};
	return {
		aliases: ["apacheconf"],
		cI: !0,
		c: [e.HCM, {
			cN: "section",
			b: "</?",
			e: ">"
		}, {
			cN: "attribute",
			b: /\w+/,
			r: 0,
			k: {
				nomarkup: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
			},
			starts: {
				e: /$/,
				r: 0,
				k: {
					literal: "on off all"
				},
				c: [{
					cN: "meta",
					b: "\\s\\[",
					e: "\\]$"
				}, {
					cN: "variable",
					b: "[\\$%]\\{",
					e: "\\}",
					c: ["self", r]
				}, r, e.QSM]
			}
		}],
		i: /\S/
	}
});
hljs.registerLanguage("nginx", function(e) {
	var r = {
			cN: "variable",
			v: [{
				b: /\$\d+/
			}, {
				b: /\$\{/,
				e: /}/
			}, {
				b: "[\\$\\@]" + e.UIR
			}]
		},
		b = {
			eW: !0,
			l: "[a-z/_]+",
			k: {
				literal: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
			},
			r: 0,
			i: "=>",
			c: [e.HCM, {
				cN: "string",
				c: [e.BE, r],
				v: [{
					b: /"/,
					e: /"/
				}, {
					b: /'/,
					e: /'/
				}]
			}, {
				b: "([a-z]+):/",
				e: "\\s",
				eW: !0,
				eE: !0,
				c: [r]
			}, {
				cN: "regexp",
				c: [e.BE, r],
				v: [{
					b: "\\s\\^",
					e: "\\s|{|;",
					rE: !0
				}, {
					b: "~\\*?\\s+",
					e: "\\s|{|;",
					rE: !0
				}, {
					b: "\\*(\\.[a-z\\-]+)+"
				}, {
					b: "([a-z\\-]+\\.)+\\*"
				}]
			}, {
				cN: "number",
				b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
			}, {
				cN: "number",
				b: "\\b\\d+[kKmMgGdshdwy]*\\b",
				r: 0
			}, r]
		};
	return {
		aliases: ["nginxconf"],
		c: [e.HCM, {
			b: e.UIR + "\\s+{",
			rB: !0,
			e: "{",
			c: [{
				cN: "section",
				b: e.UIR
			}],
			r: 0
		}, {
			b: e.UIR + "\\s",
			e: ";|{",
			rB: !0,
			c: [{
				cN: "attribute",
				b: e.UIR,
				starts: b
			}],
			r: 0
		}],
		i: "[^\\s\\}]"
	}
});
hljs.registerLanguage("coffeescript", function(e) {
	var c = {
			keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
			literal: "true false null undefined yes no on off",
			built_in: "npm require console print module global window document"
		},
		n = "[A-Za-z$_][0-9A-Za-z$_]*",
		r = {
			cN: "subst",
			b: /#\{/,
			e: /}/,
			k: c
		},
		s = [e.BNM, e.inherit(e.CNM, {
			starts: {
				e: "(\\s*/)?",
				r: 0
			}
		}), {
			cN: "string",
			v: [{
				b: /'''/,
				e: /'''/,
				c: [e.BE]
			}, {
				b: /'/,
				e: /'/,
				c: [e.BE]
			}, {
				b: /"""/,
				e: /"""/,
				c: [e.BE, r]
			}, {
				b: /"/,
				e: /"/,
				c: [e.BE, r]
			}]
		}, {
			cN: "regexp",
			v: [{
				b: "///",
				e: "///",
				c: [r, e.HCM]
			}, {
				b: "//[gim]*",
				r: 0
			}, {
				b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
			}]
		}, {
			b: "@" + n
		}, {
			b: "`",
			e: "`",
			eB: !0,
			eE: !0,
			sL: "javascript"
		}];
	r.c = s;
	var i = e.inherit(e.TM, {
			b: n
		}),
		t = "(\\(.*\\))?\\s*\\B[-=]>",
		o = {
			cN: "params",
			b: "\\([^\\(]",
			rB: !0,
			c: [{
				b: /\(/,
				e: /\)/,
				k: c,
				c: ["self"].concat(s)
			}]
		};
	return {
		aliases: ["coffee", "cson", "iced"],
		k: c,
		i: /\/\*/,
		c: s.concat([e.C("###", "###"), e.HCM, {
			cN: "function",
			b: "^\\s*" + n + "\\s*=\\s*" + t,
			e: "[-=]>",
			rB: !0,
			c: [i, o]
		}, {
			b: /[:\(,=]\s*/,
			r: 0,
			c: [{
				cN: "function",
				b: t,
				e: "[-=]>",
				rB: !0,
				c: [o]
			}]
		}, {
			cN: "class",
			bK: "class",
			e: "$",
			i: /[:="\[\]]/,
			c: [{
				bK: "extends",
				eW: !0,
				i: /[:="\[\]]/,
				c: [i]
			}, i]
		}, {
			b: n + ":",
			e: ":",
			rB: !0,
			rE: !0,
			r: 0
		}])
	}
});
hljs.registerLanguage("cs", function(e) {
	var r = {
			keyword: "abstract as base bool break byte case catch char checked const continue decimal dynamic default delegate do double else enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long when object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield",
			literal: "null false true"
		},
		t = e.IR + "(<" + e.IR + ">)?(\\[\\])?";
	return {
		aliases: ["csharp"],
		k: r,
		i: /::/,
		c: [e.C("///", "$", {
			rB: !0,
			c: [{
				cN: "doctag",
				v: [{
					b: "///",
					r: 0
				}, {
					b: "<!--|-->"
				}, {
					b: "</?",
					e: ">"
				}]
			}]
		}), e.CLCM, e.CBCM, {
			cN: "meta",
			b: "#",
			e: "$",
			k: {
				"meta-keyword": "if else elif endif define undef warning error line region endregion pragma checksum"
			}
		}, {
			cN: "string",
			b: '@"',
			e: '"',
			c: [{
				b: '""'
			}]
		}, e.ASM, e.QSM, e.CNM, {
			bK: "class interface",
			e: /[{;=]/,
			i: /[^\s:]/,
			c: [e.TM, e.CLCM, e.CBCM]
		}, {
			bK: "namespace",
			e: /[{;=]/,
			i: /[^\s:]/,
			c: [e.inherit(e.TM, {
				b: "[a-zA-Z](\\.?\\w)*"
			}), e.CLCM, e.CBCM]
		}, {
			bK: "new return throw await",
			r: 0
		}, {
			cN: "function",
			b: "(" + t + "\\s+)+" + e.IR + "\\s*\\(",
			rB: !0,
			e: /[{;=]/,
			eE: !0,
			k: r,
			c: [{
				b: e.IR + "\\s*\\(",
				rB: !0,
				c: [e.TM],
				r: 0
			}, {
				cN: "params",
				b: /\(/,
				e: /\)/,
				eB: !0,
				eE: !0,
				k: r,
				r: 0,
				c: [e.ASM, e.QSM, e.CNM, e.CBCM]
			}, e.CLCM, e.CBCM]
		}]
	}
});