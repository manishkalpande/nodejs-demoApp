import express from "express";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("<H1>Hello World! Node.js app is running 🚀</H1>");
});

app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
