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

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post("/", async (req, res) => {
  const { message } = req.body;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${message}`,
    max_tokens: 4000,
    temperature: 0,
  });

  if (response.data) {
    if (response.data.choices) {
      res.json({
        message: response.data.choices[0].text,
      });
    }
  }
});

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
