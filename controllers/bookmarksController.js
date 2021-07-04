const express = require("express")
const bookmarks = express.Router()
const { getAllBookmarks } = require("../queries/bookmarks.js")


// We need to send a request for some data in this endpoint "/"
// In order to do that, we need to access the database through pg-promise
    // We access pg-promise through our dbConfig file
        // dbConfig has an object with variables that lets us access our postgres SQL database
            // We do this in a new JS file which will hold this data. So let's create it in the root.
            // queries/bookmarks.js

            
bookmarks.get("/", async (req, res) => {
    const allBookmarks = await getAllBookmarks()
    res.json(allBookmarks)
})

module.exports = bookmarks;