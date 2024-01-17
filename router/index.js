const express = require("express")
const router = express.Router()
const getToken = require('../apis/getToken')
const getResults = require("../apis/getResults")

router.get("/search", getToken, getResults)

module.exports = router