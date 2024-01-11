import { Post } from "./models";
import { connectToDb } from "./utils";


export const getPosts = async () => {
  try {
    connectToDb()
    const posts = await Post.find()
    return posts;
  } catch (error) {
    console.log(error);
  }
}
export const getPost = async (id) => {
  try {
    connectToDb()
    const post = await Post.find({id})
    return post;
  } catch (error) {
    console.log(error);
  }
}

