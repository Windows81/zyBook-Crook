const { BOOK, AUTH_TOKEN } = require("./config.json");
const https = require("https");
const ret = [];

module.exports = new Promise((resl) => {
	https.get(
		{
			hostname: "zyserver.zybooks.com",
			path: `/v1/zybooks?zybooks=["${BOOK}"]&auth_token=${AUTH_TOKEN}`,
		},
		(resp) => {
			const buffers = [];
			resp.on("data", (b) => buffers.push(b));
			resp.on("end", () => {
				var j = JSON.parse(Buffer.concat(buffers).toString());
				for (var { sections } of j.zybooks[0].chapters) {
					for (var { canonical_chapter_number: n, canonical_section_number: s } of sections) {
						ret.push([n, s]);
					}
				}
				resl(ret);
			});
		}
	);
});
