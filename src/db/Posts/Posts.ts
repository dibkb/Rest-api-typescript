import mongoose, { Schema } from "mongoose";
const PostScheme = new Schema({
  title: { type: String, required: true },
  message: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types,
    ref: "User",
    required: true,
  },
});
export const PostModel = mongoose.model("Post", PostScheme);
export const getAllPosts = () => PostModel.find({});
export const getPostbyId = (id: string) => PostModel.findById(id);
export const getPostByAuthor = (authorId: string) =>
  PostModel.findOne({ author: authorId });
export const deletePostById = (id: string) => PostModel.findByIdAndDelete(id);
export const updatePostById = (id: string, values: Record<string, any>) =>
  PostModel.findByIdAndUpdate(id, values);
