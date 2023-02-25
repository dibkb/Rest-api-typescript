import {
  deletePostById,
  getAllPosts,
  getPostByAuthor,
  updatePostById,
} from "db/Posts/Posts";
import express from "express";
export const getPosts = async (req: express.Request, res: express.Response) => {
  try {
    const users = await getAllPosts();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error.message).end();
  }
};
export const getAuthorPost = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  try {
    const posts = getPostByAuthor(id);
    res.status(200).json(posts).end();
  } catch (error) {
    res.status(400).json(error.message).end();
  }
};
export const deletePost = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  try {
    await deletePostById(id);
    res.status(200).json({ message: "Sucessfully deleted" });
  } catch (error) {
    res.status(400).json(error.message).end();
  }
};
export const updatePost = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  const { title, message } = req.body;
  try {
    await updatePostById(id, { title, message });
    res.status(200).json({ message: "Sucessfully updated" });
  } catch (error) {
    res.status(400).json(error.message).end();
  }
};
