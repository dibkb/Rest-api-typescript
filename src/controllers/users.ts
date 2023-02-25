import express from "express";
import { getAllUsers, deleteById, updateById } from "db/Users/Users";
export const getUsers = async (req: express.Request, res: express.Response) => {
  try {
    const users = await getAllUsers();
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
    await deleteById(id);
    res.status(200).json({ message: "Sucessfully deleted" });
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
    await updateById(id, { username });
    res.status(200).json({ message: "Sucessfully updated" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
