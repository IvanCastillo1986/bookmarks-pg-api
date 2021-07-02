const express = require("express")
const bookmarks = express.Router()

bookmarks.get("/", (req, res) => {
    res.json({
        status: "ok"
    })
})

module.exports = bookmarks;