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
  let limit = 20;
  let offset = 0;
  if (!isNaN(req.query.limit / 1)) {
    limit = Number(req.query.limit);
    console.log(limit);
  }
  if (req.query.offset) {
    offset = Number(req.query.offset);
    console.log(offset);
  }
  res.send(data.slice(offset, offset + limit));
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
