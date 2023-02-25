import mongoose, { Schema } from "mongoose";
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  authentication: {
    hashedPassword: {
      type: String,
      required: true,
      select: false,
    },
    sessionToken: {
      type: String,
      select: false,
    },
  },
});
export const UserModel = mongoose.model("User", UserSchema);
export const getUsers = () => UserModel.find({});
export const getUserByEmail = (email: string) => UserModel.find({ email });
export const getUserById = (id: string) => UserModel.findById(id);
export const getUserBySession = (session: string) =>
  UserModel.findOne({
    "authentication.sessionToken": session,
  });
export const createUser = (values: Record<string, any>) =>
  new UserModel(values).save().then((user) => user.toObject());
export const deleteById = (id: string) => UserModel.findByIdAndDelete(id);
export const updateById = (values: Record<string, any>, id: string) =>
  UserModel.findByIdAndUpdate(id, values);
