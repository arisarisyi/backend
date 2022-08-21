import mongoose from "mongoose"

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }, desc: {
    type: String,
    required: true
  }, categories: {
    type: Array,
    required: false
  }
})

export default mongoose.model("Post", PostSchema)