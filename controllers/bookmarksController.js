const express = require("express")
const bookmarks = express.Router()
const { getAllBookmarks, getBookmark, createBookmark, deleteBookmark, updateBookmark } = require("../queries/bookmarks.js")


// We need to send a request for some data in this endpoint "/"
// In order to do that, we need to access the database through pg-promise
    // We access pg-promise through our dbConfig file
        // dbConfig has an object with variables that lets us access our postgres SQL database
            // We do this in a new JS file which will hold this data. So let's create it in the root.
            // queries/bookmarks.js

// Index
bookmarks.get("/", async (req, res) => {
    const allBookmarks = await getAllBookmarks()
    res.json(allBookmarks)
})

// Show
bookmarks.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const bookmark = await getBookmark(id)
        if (bookmark["id"]) {
            res.json(bookmark)
        } else {
            console.log(`Database Error: ${bookmark}`)
            throw `There is no bookmark with id: ${id}`
        }
    } catch (e) {
        res.status(404).json({error: "Resource not found", message: e})
    }
})

// Create
bookmarks.post("/", async (req, res) => {
    try {
        const bookmark = await createBookmark(req.body)
        if (bookmark.name) {
            res.json(bookmark)
        } else {
            console.log(`Database error: ${bookmark}`)
            throw `Error adding ${req.body} to the database`
        }
    } catch (e) {
        console.log(`Error in queries: ${e}`)
        res.status(404).json({ error: `${e}` })
    }
})

// for errors, "relation" means the same thing as "table"

// Delete
bookmarks.delete("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const deleted = await deleteBookmark(id)
        if (deleted.name) {
            res.status(200).json(deleted)
        } else {
            throw "Resource not found"
        }
    } catch(e) {
        console.log(`Error: ${e}`)
        return e
    }
})

// Update
bookmarks.put("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const update = await updateBookmark(req.body, id)
        if (update.id) {   
            res.json({update})
        } else {
            res.status(404).send(`Bookmark with id of ${id} does not exist`)
        }
    } catch (e) {
        console.log(`Error: ${e}`)
        res.status(404).json({Error: `${e}`})
    }
})



module.exports = bookmarks;