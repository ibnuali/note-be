const express = require("express");
const noteController = require("../controllers/noteController");
const { validate, noteSchema } = require("../middlewares/validation");

const router = express.Router();
const methodNotAllowed = (req, res) => {
  res.status(405).json({ message: "Method Not Allowed" });
};

router
  .route("/")
  .get(noteController.getAllNote)
  .post(validate(noteSchema), noteController.createNote)
  .all(methodNotAllowed);

router
  .route("/:id")
  .get(noteController.getNote)
  .patch(validate(noteSchema), noteController.updateNote)
  .delete(noteController.deleteNote)
  .all(methodNotAllowed);

module.exports = router;
