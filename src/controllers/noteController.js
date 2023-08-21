const Note = require("../models/Note");

const getAllNote = async (req, res) => {
  const result = await Note.findAll();
  if (!result.length) {
    return res.status(200).json({
      status: "success",
      message: "data is empty",
      data: result,
    });
  }

  res.status(200).json({
    status: "success",
    data: result,
  });
};

const getNote = async (req, res) => {
  const id = parseInt(req.params.id);

  const result = await Note.findOne({
    where: {
      id: id,
    },
  });
  if (!result) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  res.status(200).json({
    status: "success",
    data: result,
  });
};

const createNote = async (req, res) => {
  const { title, description } = req.body;

  const data = {
    title: title,
    description: description,
  };

  const result = await Note.create(data);

  if (!result) {
    return res.status(400).json({
      status: "fail",
      message: "data unsuccessful created",
    });
  }

  res.status(201).json({
    status: "success",
    data: result,
  });
};

const updateNote = async (req, res) => {
  const id = parseInt(req.params.id);

  const { title, description } = req.body;

  const data = {
    title: title,
    description: description,
    updatedAt: new Date(),
  };

  const result = await Note.update(data, {
    where: {
      id: id,
    },
  });

  if (!result[0]) {
    return res.status(400).json({
      status: "fail",
      message: "data unsuccessful updated",
    });
  }
  res.status(200).json({
    status: "success",
    data: data,
  });
};

const deleteNote = async (req, res) => {
  const id = parseInt(req.params.id);

  const result = await Note.destroy({
    where: {
      id: id,
    },
  });

  if (!result) {
    return res.status(400).json({
      status: "fail",
      message: "data unsuccessful deleted",
    });
  }

  return res.status(204).json({
    status: "success",
  });
};

module.exports = {
  getAllNote,
  getNote,
  createNote,
  updateNote,
  deleteNote,
};
