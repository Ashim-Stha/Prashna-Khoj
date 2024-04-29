const express = require("express");
const app = express();

const elasticsearch = require("elasticsearch");
const es = new elasticsearch.Client({
  host: "https://elastic:9200",
  httpAuth: "elastic:GmLzRUMlVJe+4xHHr0aC",
  // ssl: {
  //   ca: fs.readFileSync("http_ca.crt"), // Path to your CA certificate file
  //   rejectUnauthorized: false // Set to false if you want to skip certificate validation
  // }
});

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/searchs", async (req, res) => {
  const query = req.query.q.toLowerCase();
  console.log(query);
  const tokens = query.split(" ");

  const clauses = tokens.map((token) => ({
    span_multi: {
      match: { fuzzy: { desc: { value: token, fuzziness: "AUTO" } } },
    },
  }));

  const payload = {
    bool: {
      must: [{ span_near: { clauses, slop: 0, in_order: false } }],
    },
  };

  const resp = await es.search({
    index: "data",
    body: { query: payload },
    size: 15,
  });

  res.json(resp.hits.hits.map((hit) => hit._source.desc));
});

app.get("/", (req, res) => {
  res.json({ status: "okay" });
});

app.listen(5000, () => {
  console.log("Server ruunnnninnnnng");
});
