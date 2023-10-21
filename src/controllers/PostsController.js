const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    const newPost = new Post({ title, description, category });
    const postData = await newPost.save();

    res.json(postData);
  } catch (err) {
    res.status(500).json({ error: "Error when creating the post" });
  }
};
