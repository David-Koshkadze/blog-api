const router = require("express").Router();
const PostController = require("../controllers/PostsController");
const createPostMiddleware = require("../middleware/createPost");

router
  .route("/")
  .get()
  .post([createPostMiddleware], PostController.createPost);

module.exports = router;
