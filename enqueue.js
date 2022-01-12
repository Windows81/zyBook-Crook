const { BOOK, AUTH_TOKEN } = require("./config.json");
const secs = require("./sections.js");
const https = require("https");
const queue = [];

secs.then((resp) => {
	for (var [ch, sc] of resp) {
		if (ch == 1 && sc <= 9) continue;
		https.get(
			{
				hostname: "zyserver.zybooks.com",
				path: `/v1/zybook/${BOOK}/chapter/${ch}/section/${sc}?auth_token=${AUTH_TOKEN}`,
			},
			(resp) => {
				const buffers = [];
				resp.on("data", (b) => buffers.push(b));
				resp.on("end", () => {
					var j = JSON.parse(Buffer.concat(buffers).toString());
					for (var { id: id, parts: parts } of j.section.content_resources) {
						for (var p = 0; p < parts; p++) queue.push([id, p]);
					}
				});
			}
		);
	}
});
module.exports = queue;
