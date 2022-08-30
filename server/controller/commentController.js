const asyncHandler = require("express-async-handler");
const Comment = require("../models/commentModel");

const getComments = asyncHandler(async (req, res) => {
  const Comments = await Comment.find();
  res.status(200).json(Comments);
});

const setComment = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text");
  }
  const comment = await Comment.create({
    text: req.body.text,
  });
  res.status(200).json(comment);
});

const updateComment = asyncHandler(async (req, res) => {
  const comment = await Comment.findById(req.params.id);
  if (!comment) {
    res.status(400);
    throw new Error("comment not found");
  }

  const updatedcomment = await Comment.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedcomment);
});

const deleteComment = asyncHandler(async (req, res) => {

  const comment = await Comment.findById(req.params.id);
  if (!comment) {
    res.status(400);
    throw new Error("comment not found");
  }

  await Comment.remove()

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getComments,
  setComment,
  updateComment,
  deleteComment,
};
