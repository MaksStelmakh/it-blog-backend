import { body } from "express-validator";

export const registerValidation = [
  body("email", "Invalid mail format").isEmail(),
  body("password", "Password must be at least 5 characters long").isLength({
    min: 5,
  }),
  body("fullName", "Enter a name").isLength({ min: 3 }),
  body("avatarUrl", "Wrong avatar link").optional().isURL(),
];

export const loginValidation = [
  body("email", "Invalid mail format").isEmail(),
  body("password", "Password must be at least 5 characters long").isLength({
    min: 5,
  }),
];

export const postCreateValidation = [
  body("title", "Enter the title of the article")
    .isLength({
      min: 3,
    })
    .isString(),
  body("text", "Enter the text of the article")
    .isLength({
      min: 3,
    })
    .isString(),
  body("tags", "Invalid tag format (Specify array)").optional().isString(),
  body("imageUrl", "Wrong image link").optional().isString(),
];
