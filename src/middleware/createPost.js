const createPost = (req, res, next) => {
  const { title, description, category } = req.body;

  if (!title || !description || !category) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (title.length < 3 || description.length < 3) {
    return res.status(400).json({
      error: "Title and description should be minimum 3 charachters",
    });
  }

  next();
};

module.exports = createPost;
