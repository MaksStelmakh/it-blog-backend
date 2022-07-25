import express from "express";
import mongoose from "mongoose";
import {
  registerValidation,
  loginValidation,
} from "./validations/validations.js";
import checkAuth from "./utils/checkAuth.js";
import * as UserController from "./controllers/UserController.js";
import * as PostController from "./controllers/PostController.js";

mongoose
  .connect(
    "mongodb+srv://MaksStelmakh:T7AZt6gSCjjaKykV@cluster0.xq8lyhn.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB is okey");
  })
  .catch(() => {
    console.log("DB error");
  });

const app = express();

app.use(express.json());

app.post("/auth/login", loginValidation, UserController.login);

app.post("/auth/register", registerValidation, UserController.register);

app.get("/auth/me", checkAuth, UserController.getMe);

app.post("/posts", checkAuth, PostController.create);
// app.get("/posts", PostController.getAll);
// app.get("/posts/:id", PostController.getOne);
// app.delete("/posts", checkAuth, PostController.remove);
// app.patch("/posts", checkAuth, PostController.update);

app.listen(3000, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server running");
});
