require("dotenv").config()
const express = require("express")
const router = require("./routers/router")
const cookieParser = require("cookie-parser")
const cors= require("cors")
const mongoose = require("mongoose")

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: true
}));
app.use(cookieParser())
app.use("/api", router)


async function start() {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, ()=> {
            console.log("Server has been started......")
        })

    } catch (e) {

    }

}

start()