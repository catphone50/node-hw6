import db from "./db.js";

const createTable = `
  CREATE TABLE IF NOT EXIST products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL
  )
`;

db.query(createTable, (err) => {
  if (err) {
    console.error("Error " + err.stack);
    return;
  }
  console.log("Table was created or exist");
});
db.end();
