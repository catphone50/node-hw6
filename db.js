import mysql from "mysql2";
import "dotenv/config";

const host = process.env.HOST;
const user = process.env.USER;
const pass = process.env.PASS;
const db = process.env.DB;

const connection = mysql.createConnection({
  host: host,
  user: user,
  password: pass,
  database: db,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connection " + err.stack);
    return;
  }

  console.log("Connected to db");
});

module.exports = connection;
