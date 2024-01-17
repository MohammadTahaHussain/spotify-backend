const port = 8080
const express = require("express")
const cors = require("cors")
const router = require('./router/index')
const bodyParser = require('body-parser');

const app = express()

app.use(cors({
    credentials: true,
    origin: "*",
    // origin: "http://localhost:3000",
}))
app.use(express.json())
app.use(bodyParser.json());

app.use('/api', router)

app.listen(port, (() => {
    console.log("Alhamdulillah connected")
})) 
