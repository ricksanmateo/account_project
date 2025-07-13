import express from "express";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "account",
  password: "sanmateo",
  port: 5432,
});

db.connect(function (err) {
  if (err) {
    return console.error("could not connect to postgres", err);
  }
  console.log("connected to postgres");
});

let users = [];

app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM users ORDER BY id ASC");
    users = result.rows;
    console.log(users);
  } catch (error) {
    console.log(error);
  }
});

// todo: reformat code
app.post("/create", async (req, res) => {
  const full_name = req.body.full_name;
  const username = req.body.username;
  const email = req.body.email;
  const phone = req.body.phone;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  try {
    await db.query(
      "INSERT INTO users (full_name, username, email, phone, password, confirm_password) VALUES ($1, $2, $3, $4, $5, $6)",
      [full_name, username, email, phone, password, confirmPassword]
    );
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
