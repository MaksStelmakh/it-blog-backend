import PostSchema from "../models/post.js";

export const create = async (req, res) => {
  try {
    const doc = new PostSchema({
      title: req.body.title,
      text: req.body.text,
      imageUrl: req.body.imageUrl,
      tags: req.body.tags,
      user: req.userId,
    });

    const post = await dic.save();

    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something wrong",
    });
  }
};
