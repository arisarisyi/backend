import express from "express"
import { getPost, getPostById, updatePost, deletePost, savePost } from "../controllers/PostController.js"

const router = express.Router()

router.get("/posts", getPost)
router.get("/post/:id", getPostById)
router.post("/posts", savePost)
router.patch("/post/:id", updatePost)
router.delete("/post/:id", deletePost)

export default router