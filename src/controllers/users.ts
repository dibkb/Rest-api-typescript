import express from "express";
import { getUsers, getUserById, deleteById } from "db/Users/Users";
export const getAllUsers = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error.message).end();
  }
};
export const deleteUser = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  try {
    const user = await getUserById(id);
    if (!user) res.status(400).json("No User Exist");
    await deleteById(user._id);
  } catch (error) {
    res.status(400).json(error.message).end();
  }
};
export const updateUser = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  const { username } = req.body;
  try {
    const user = await getUserById(id);
    if (!user) res.status(400).json("No User Exist");
    user.username = username;
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
