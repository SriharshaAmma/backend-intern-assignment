const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const authMiddleware = require("./middleware/authMiddleware");

const { swaggerUi, swaggerSpec } = require("./docs/swagger");

const app = express();

/* ----------- MIDDLEWARE ----------- */

app.use(express.json());
app.use(cors());

/* ----------- SERVE FRONTEND ----------- */

app.use(express.static(path.join(__dirname, "../frontend")));

/* Default route → login page */

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/login.html"));
});

/* ----------- DATABASE ----------- */

mongoose.connect("mongodb://127.0.0.1:27017/intern_task")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

/* ----------- API ROUTES ----------- */

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tasks", taskRoutes);

/* ----------- SWAGGER DOCS ----------- */

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/* ----------- PROTECTED TEST ROUTE ----------- */

app.get("/protected", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user
  });
});

/* ----------- SERVER ----------- */

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Frontend: http://localhost:5000`);
  console.log(`Swagger: http://localhost:5000/api-docs`);
});