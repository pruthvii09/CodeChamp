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
app.use("/api/users", userRoutes);

// Sample route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Start the server
app.listen(4000, () => {
  console.log("Listening to Port 4000");
});
