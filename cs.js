function o(e, t) {
	var n = (65535 & e) + (65535 & t);
	return (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n);
}
function a(e, t, n, r, i, a) {
	var s, l;
	return o(((s = o(o(t, e), o(r, a))) << (l = i)) | (s >>> (32 - l)), n);
}
function s(e, t, n, r, i, o, s) {
	return a((t & n) | (~t & r), e, t, i, o, s);
}
function l(e, t, n, r, i, o, s) {
	return a((t & r) | (n & ~r), e, t, i, o, s);
}
function u(e, t, n, r, i, o, s) {
	return a(t ^ n ^ r, e, t, i, o, s);
}
function c(e, t, n, r, i, o, s) {
	return a(n ^ (t | ~r), e, t, i, o, s);
}
function d(e, t) {
	var n, r, i, a, d;
	(e[t >> 5] |= 128 << t % 32), (e[14 + (((t + 64) >>> 9) << 4)] = t);
	var p = 1732584193,
		f = -271733879,
		m = -1732584194,
		h = 271733878;
	for (n = 0; n < e.length; n += 16)
		(r = p),
			(i = f),
			(a = m),
			(d = h),
			(p = s(p, f, m, h, e[n], 7, -680876936)),
			(h = s(h, p, f, m, e[n + 1], 12, -389564586)),
			(m = s(m, h, p, f, e[n + 2], 17, 606105819)),
			(f = s(f, m, h, p, e[n + 3], 22, -1044525330)),
			(p = s(p, f, m, h, e[n + 4], 7, -176418897)),
			(h = s(h, p, f, m, e[n + 5], 12, 1200080426)),
			(m = s(m, h, p, f, e[n + 6], 17, -1473231341)),
			(f = s(f, m, h, p, e[n + 7], 22, -45705983)),
			(p = s(p, f, m, h, e[n + 8], 7, 1770035416)),
			(h = s(h, p, f, m, e[n + 9], 12, -1958414417)),
			(m = s(m, h, p, f, e[n + 10], 17, -42063)),
			(f = s(f, m, h, p, e[n + 11], 22, -1990404162)),
			(p = s(p, f, m, h, e[n + 12], 7, 1804603682)),
			(h = s(h, p, f, m, e[n + 13], 12, -40341101)),
			(m = s(m, h, p, f, e[n + 14], 17, -1502002290)),
			(p = l(p, (f = s(f, m, h, p, e[n + 15], 22, 1236535329)), m, h, e[n + 1], 5, -165796510)),
			(h = l(h, p, f, m, e[n + 6], 9, -1069501632)),
			(m = l(m, h, p, f, e[n + 11], 14, 643717713)),
			(f = l(f, m, h, p, e[n], 20, -373897302)),
			(p = l(p, f, m, h, e[n + 5], 5, -701558691)),
			(h = l(h, p, f, m, e[n + 10], 9, 38016083)),
			(m = l(m, h, p, f, e[n + 15], 14, -660478335)),
			(f = l(f, m, h, p, e[n + 4], 20, -405537848)),
			(p = l(p, f, m, h, e[n + 9], 5, 568446438)),
			(h = l(h, p, f, m, e[n + 14], 9, -1019803690)),
			(m = l(m, h, p, f, e[n + 3], 14, -187363961)),
			(f = l(f, m, h, p, e[n + 8], 20, 1163531501)),
			(p = l(p, f, m, h, e[n + 13], 5, -1444681467)),
			(h = l(h, p, f, m, e[n + 2], 9, -51403784)),
			(m = l(m, h, p, f, e[n + 7], 14, 1735328473)),
			(p = u(p, (f = l(f, m, h, p, e[n + 12], 20, -1926607734)), m, h, e[n + 5], 4, -378558)),
			(h = u(h, p, f, m, e[n + 8], 11, -2022574463)),
			(m = u(m, h, p, f, e[n + 11], 16, 1839030562)),
			(f = u(f, m, h, p, e[n + 14], 23, -35309556)),
			(p = u(p, f, m, h, e[n + 1], 4, -1530992060)),
			(h = u(h, p, f, m, e[n + 4], 11, 1272893353)),
			(m = u(m, h, p, f, e[n + 7], 16, -155497632)),
			(f = u(f, m, h, p, e[n + 10], 23, -1094730640)),
			(p = u(p, f, m, h, e[n + 13], 4, 681279174)),
			(h = u(h, p, f, m, e[n], 11, -358537222)),
			(m = u(m, h, p, f, e[n + 3], 16, -722521979)),
			(f = u(f, m, h, p, e[n + 6], 23, 76029189)),
			(p = u(p, f, m, h, e[n + 9], 4, -640364487)),
			(h = u(h, p, f, m, e[n + 12], 11, -421815835)),
			(m = u(m, h, p, f, e[n + 15], 16, 530742520)),
			(p = c(p, (f = u(f, m, h, p, e[n + 2], 23, -995338651)), m, h, e[n], 6, -198630844)),
			(h = c(h, p, f, m, e[n + 7], 10, 1126891415)),
			(m = c(m, h, p, f, e[n + 14], 15, -1416354905)),
			(f = c(f, m, h, p, e[n + 5], 21, -57434055)),
			(p = c(p, f, m, h, e[n + 12], 6, 1700485571)),
			(h = c(h, p, f, m, e[n + 3], 10, -1894986606)),
			(m = c(m, h, p, f, e[n + 10], 15, -1051523)),
			(f = c(f, m, h, p, e[n + 1], 21, -2054922799)),
			(p = c(p, f, m, h, e[n + 8], 6, 1873313359)),
			(h = c(h, p, f, m, e[n + 15], 10, -30611744)),
			(m = c(m, h, p, f, e[n + 6], 15, -1560198380)),
			(f = c(f, m, h, p, e[n + 13], 21, 1309151649)),
			(p = c(p, f, m, h, e[n + 4], 6, -145523070)),
			(h = c(h, p, f, m, e[n + 11], 10, -1120210379)),
			(m = c(m, h, p, f, e[n + 2], 15, 718787259)),
			(f = c(f, m, h, p, e[n + 9], 21, -343485551)),
			(p = o(p, r)),
			(f = o(f, i)),
			(m = o(m, a)),
			(h = o(h, d));
	return [p, f, m, h];
}
function p(e) {
	var t,
		n = "",
		r = 32 * e.length;
	for (t = 0; t < r; t += 8) n += String.fromCharCode((e[t >> 5] >>> t % 32) & 255);
	return n;
}
function f(e) {
	var t,
		n = [];
	for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
	var r = 8 * e.length;
	for (t = 0; t < r; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
	return n;
}
function m(e) {
	var t,
		n,
		r = "";
	for (n = 0; n < e.length; n += 1)
		(t = e.charCodeAt(n)), (r += "0123456789abcdef".charAt((t >>> 4) & 15) + "0123456789abcdef".charAt(15 & t));
	return r;
}
function h(e) {
	return unescape(encodeURIComponent(e));
}
function g(e) {
	return (function (e) {
		return p(d(f(e), 8 * e.length));
	})(h(e));
}
function b(e, t) {
	return (function (e, t) {
		var n,
			r,
			i = f(e),
			o = [],
			a = [];
		for (o[15] = a[15] = void 0, i.length > 16 && (i = d(i, 8 * e.length)), n = 0; n < 16; n += 1)
			(o[n] = 909522486 ^ i[n]), (a[n] = 1549556828 ^ i[n]);
		return (r = d(o.concat(f(t)), 512 + 8 * t.length)), p(d(a.concat(r), 640));
	})(h(e), h(t));
}
function v(e, t, n) {
	return t ? (n ? b(t, e) : m(b(t, e))) : n ? g(e) : m(g(e));
}
module.exports = v;
