import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://MaksStelmakh:T7AZt6gSCjjaKykV@cluster0.xq8lyhn.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB is okey");
  })
  .catch(() => {
    console.log("DB error");
  });

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("111 Hello World");
});

app.post("/auth/login", (req, res) => {
  const token = jwt.sign(
    {
      email: req.body.email,
      // fullName: req.body.name,
      fullName: "Василь Степанович",
    },
    "secret123"
  );
  res.json({
    success: true,
    token,
  });
});

app.listen(3000, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server running");
});
