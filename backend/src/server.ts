import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import "dotenv/config"; // cleaner than calling dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/ping", (req: Request, res: Response) => {
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
