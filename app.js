// DEPENDENCIES
const express = require("express")
const cors = require("cors")
const bookmarksController = require("./controllers/bookmarksController.js")

// CONFIGURATION
const app = express()

// MIDDLEWARE
app.use(cors())
app.use(express.json())

// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to the Bookmarks API!!!")
})

app.use("/bookmarks", bookmarksController)

// 404 PAGE
app.get("*", (req, res) => {
    res.status(404).send("Page not found")
})


// EXPORT
module.exports = app