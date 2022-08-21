import Post from "../models/PostModel.js"

export const getPost = async (req, res) => {
  try {
    const posts = await Post.find()
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.updateOne({ _id: req.params.id, $set: req.params.body })
    res.status(500).json("Post has been updated!")
  } catch (error) {
    res.status(500).json(error)
  }
}

export const deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.deleteOne({ _id: req.params.id })
    res.status(200).json("Post has been deleted!")
  } catch (error) {
    res.status(500).json(error)
  }
}

export const savePost = async (req, res) => {
  const savedPost = new Post(req.body)
  try {
    const insert = await savedPost.save()
    res.status(200).json(insert)
  } catch (error) {
    res.status(500).json(error)
  }
}