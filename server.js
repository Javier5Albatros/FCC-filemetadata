const express = require("express");
const cors = require("cors");
require("dotenv").config();
const multer = require("multer");

const port = process.env.PORT || 8080;
const app = express();
const upload = multer({ dest: "uploads/" });

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
  const { file } = req;
  res.json({ name: file.originalname, type: file.mimetype, size: file.size });
});

app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
