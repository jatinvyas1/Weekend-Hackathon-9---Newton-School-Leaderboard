const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
const { data } = require("./data");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here

app.get("/topRankings", (req, res) => {
  const limit = 20;
  const offset = 0;
  if (!isNaN(req.body.limit / 1)) {
    limit = Number(req.body.limit);
  }
  if (!isNaN(req.body.offset)) {
    offset = Number(req.body.offset);
  }
  res.send(data.slice(limit, offset + limit));
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
