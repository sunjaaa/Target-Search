const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const OpenAI = require("openai");
const dotenv = require("dotenv");

const { Configuration, OpenAIApi } = OpenAI;
const { searchTarget } = require("./server/searchTarget");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
dotenv.config();

app.get("/api/search/target", async (req, res) => {
  const target = req.query.target;
  const emptyInfo = [];
  let humanList = [];

  await searchTarget(target, humanList);

  console.log("humanlist", humanList);

  if (target.length > 0) {
    console.log("target : ", target);
    res.json(humanList);
  } else {
    console.log("target : ", target);
    res.json(emptyInfo);
  }
});

app.listen(port, () => {
  console.log("Example app port: " + port);
});
