const http = require("http");
const url = require("url");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  const parsed = url.parse(req.url, true);
  const path = parsed.pathname;
  const query = parsed.query;

  if (path === "/" || path === "/ping") {
    res.writeHead(200);
    res.end(JSON.stringify({ status: "ok", message: "Agora Token API running" }));
    return;
  }

  if (path === "/token") {
    const channel = query.channel || "test";

    res.writeHead(200);
    res.end(JSON.stringify({
      channel: channel,
      token: "temporary-token"
    }));
    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: "not found" }));

});

server.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
