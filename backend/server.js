import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import { GoogleGenAI } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

const port = Number.parseInt(process.env.PORT || "", 10) || 8080;
const apiKey =
  process.env.GEMINI_API_KEY || process.env.API_KEY || process.env.VITE_GEMINI_API_KEY || "";

const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const app = express();
app.disable("x-powered-by");
app.use(
  cors({
    origin: [/^http:\/\/localhost:\d+$/, /^http:\/\/127\.0\.0\.1:\d+$/],
  }),
);
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/chat", async (req, res) => {
  const message = typeof req.body?.message === "string" ? req.body.message.trim() : "";
  if (!message) {
    return res.status(400).json({ error: "Missing 'message'." });
  }

  if (!ai) {
    return res.status(500).json({
      error:
        "Gemini API key is missing. Set GEMINI_API_KEY in backend/.env and restart the backend.",
    });
  }

  try {
    const systemInstruction =
      "You are a professional, concise AI assistant for a personal portfolio website. " +
      "Answer questions clearly. If you don't know, say so and suggest contacting the owner via email.";

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
      config: { systemInstruction, temperature: 0.7 },
    });

    res.json({ reply: response.text || "" });
  } catch (err) {
    console.error("Chat API error:", err);
    res.status(502).json({ error: "Upstream AI service error." });
  }
});

const frontendDist = path.join(__dirname, "..", "frontend", "dist");
if (fs.existsSync(frontendDist)) {
  app.use(express.static(frontendDist));
  app.get(/.*/, (_req, res) => {
    res.sendFile(path.join(frontendDist, "index.html"));
  });
} else {
  app.get("/", (_req, res) => {
    res.redirect("http://localhost:3000");
  });
}

app.listen(port, "0.0.0.0", () => {
  console.log(`Backend listening on http://localhost:${port}`);
});
