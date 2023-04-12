const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const { searchTarget } = require("./server/searchTarget");

const app = express();
const port = 3002;

app.use(cors());
app.use(bodyParser.json());
dotenv.config();

app.get("/api/search/target", async (req, res) => {
  const target = req.query.target;
  const emptyInfo = [];

  const targetInfo = await searchTarget(target);

  console.log("targetInfo", targetInfo);

  if (target.length > 0) {
    console.log("target : ", target);
    res.json(targetInfo);
  } else {
    console.log("target : ", target);
    res.json(emptyInfo);
  }
});

app.listen(port, () => {
  console.log("Example app port: " + port);
});
