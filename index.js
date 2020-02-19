// code away!
const express = require("express")
const postRouter =require("./posts/postRouter")
const userRouter = require("./users/userRouter")

const server = express()
const port = 4000

server.use(express.json())
server.use("/", postRouter)
server.use("/api/user", userRouter)

server.listen(port, () => {
    console.log(`Server running at hhtp://localhost:${port}`)
})


