const { BOOK, AUTH_TOKEN } = require("./config.json");
const queue = require("./enqueue.js");
const chks = require("./cs.js");
const https = require("https");

var interval = setInterval(() => {
	if (queue.length < 1) return;
	var [id, part] = queue.shift();
	var ct = "2022-01-12T07:24:40Z";
	var cs = chks(`content_resource/${id}/activity${ct}${AUTH_TOKEN}${id}${part}true77c5338b-ffc8-c876-01fc-b181874cee8c`);
	body = `{"part":${part},"complete":true,"answer":"Commutative","metadata":"{\\"isTrusted\\":true,\\"computerTime\\":\\"${ct}\\"}","zybook_code":"${BOOK}","auth_token":"${AUTH_TOKEN}","timestamp":"${ct}","__cs__":"${cs}"}`;
	var req = https.request(
		{
			hostname: "zyserver.zybooks.com",
			headers: {
				"Content-Type": "application/json",
			},
			path: `/v1/content_resource/${id}/activity`,
			method: "POST",
		},
		(resp) => {
			resp.on("data", (b) => console.log(id, part, b.toString()));
		}
	);
	req.end(body);
	if (queue.length < 1) clearInterval(interval);
}, 1337);
