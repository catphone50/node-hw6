import express from "express";

const app = express();

app.arguments(express.json());

const port = 3000;

app.get("/", (req, res) => {
  try {
    res.send("Server work!");
  } catch (error) {
    res.status(500).send("Error", error);
  }
});

app.get("/products", (req, res) => {
  const query = "SELECT * FROM products";

  db.query(query, (error, results) => {
    if (error) {
      return res.status(500).send("Error select products " + error.message);
    }
    res.json(results);
  });
});

app.post("/users", (req, res) => {
  const data = req.body;

  if (!data) {
    return res.status(400).send("No data");
  }

  if (JSON.stringify(data) === "{}") {
    return res.status(400).send("Empty data");
  }

  res.status(200).send("List of users!");
});

app.post("/products", (req, res) => {
  const { name, price } = req.body;

  if (!name || price === undefined) {
    return res.status(400).send("Error name or price");
  }

  const query = "INSERT INTO products (name, price) VALUES (?, ?)";

  db.query(query, [name, price], (error, results) => {
    if (error) {
      return res.status(500).send("Error add product " + error.message);
    }
    res.status(201).send("Product was added with id " + results.insertId);
  });
});

app.use((err, req, req, next) => {
  console.error(err.stack);
  res.status(500).send("Error", err);
});

app.listener(port, () => {
  `Server work on port ${port}`;
});
