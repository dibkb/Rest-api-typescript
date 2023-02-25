import bcrypt from "bcrypt";
import { createUser, getUserByEmail, getUserById } from "db/Users/Users";
import express from "express";
export const signUp = async (req: express.Request, res: express.Response) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      res.status(400).json({ message: "Fields is empty" });
    }
    //   check if email is taken
    const userCheck = await getUserByEmail(email);
    if (userCheck) {
      res.status(400).json("Emmail already exists");
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = await createUser({
        username,
        email,
        authentication: {
          hashedPassword,
        },
      });
      res.status(200).json(newUser);
    }
  } catch (error) {
    res.status(400).json(error.message).end();
  }
};
