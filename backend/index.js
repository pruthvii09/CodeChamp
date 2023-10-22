const express = require("express");
const cors = require("cors");
const app = express();

// Enable CORS
app.use(cors());

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const userRoutes = require("./routes/userRoutes");
const questionRoutes = require("./routes/questionRoutes");
const codeRoutes = require("./routes/codeRoutes");
app.use("/api/users", userRoutes);
app.use("/api/question", questionRoutes);
app.use("/api/code", codeRoutes);

// Sample route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Start the server
app.listen(4000, () => {
  console.log("Listening to Port 4000");
});
