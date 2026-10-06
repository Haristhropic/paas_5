import { httpServerHandler } from "cloudflare:node";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello Express on Cloudflare Workers!"
  });
});

app.get("/html", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="id">
      <head>
        <meta charset="UTF-8" />
        <title>Response HTML Sederhana</title>
      </head>
      <body>
        <h1>Halo dari Express di Cloudflare Workers!</h1>
        <p>Ini adalah response HTML super sederhana.</p>
      </body>
    </html>
  `);
});


app.get("/api/status", (req, res) => {
  res.json({
    status: "ok",
    subject: "PaaS",
    week: 5,
    platform: "Cloudflare Workers"
  });
});

app.get("/api/info", (req, res) => {
  res.json({
    framework: "Express",
    runtime: "Cloudflare Workers",
    course: "Platform as a Service"
  });
});

app.get("/api/time", (req, res) => {
  res.json({
    framework: "Express",
    runtime: "Cloudflare Workers",
	nilai: "alhamdulilah 100",
    course: "Paas"
  });
});

app.listen(3000);

export default httpServerHandler({ port: 3000 });