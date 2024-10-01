import express from "express";
import ViteExpress from "vite-express";
import routes from "./routes.js";

const app = express();
app.use(express.json());
app.use(routes);

ViteExpress.listen(app, 3000, () => console.log("http://localhost:3000"));
