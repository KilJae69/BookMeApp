import express from "express";
import cors from "cors";
import getMetaData from "metadata-scraper";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get("/metadata", async (req, res) => {
  const { url } = req.query;
  try {
    if (!url) throw new Error("URL parameter is required");
    const data = await getMetaData(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
