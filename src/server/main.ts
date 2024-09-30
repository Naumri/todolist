import express from "express";
import ViteExpress from "vite-express";

const app = express();
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Olá mundo!");
});

ViteExpress.listen(app, 3000, () => console.log("http://localhost:3000"));
