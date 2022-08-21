import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import PostRoute from "./routes/PostRoute.js"

dotenv.config()
mongoose.connect(process.env.MONGO_LOCAL).then(console.log("Connect MongoDb")).catch((err) => console.log(err))
const app = express()
app.use(express.json())
app.use(cors())
app.use(PostRoute)

app.listen(5000, () => console.log("Backend running in Port 5000"))