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
  if (req.params.limit) {
    limit = Number(req.params.limit);
  }
  if (req.params.offset) {
    offset = Number(req.params.limit);
  }
  res.send(data.slice(limit, offset + limit));
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
