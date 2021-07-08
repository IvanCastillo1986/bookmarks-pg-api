const bookmarks = require("../controllers/bookmarksController");
const db = require("../db/dbConfig");

const getAllBookmarks = async () => {
    try {   // we need to add a query inside of this try block
        const allBookmarks = await db.any("SELECT * FROM bookmarks"); // promise.any(array/string) takes an iterable of promise objects 
        // and, as soon as one of those promises in the iterable fulfills, returns a single promise that resolves with the value
        // of that promise
        return allBookmarks;
    } catch (error) {
        return error;
    };
};

const getBookmark = async (id) => {
    try {
        // the first argument is a query, the second is the variable referenced in query with $1
        const oneBookmark = await db.one("SELECT * FROM bookmarks WHERE id=$1", id)
        if (oneBookmark["id"]) {
            return oneBookmark
        } else {
            throw oneBookmark
        }
    } catch (e) {
        return e
    }
}

const createBookmark = async (bookmark) => {
    try {
        if (!bookmark.name) {
            throw "You must specify a value for name"
        }
        // first argument is a query, the second is an array
        const newBookmark = await db.one(
            "INSERT INTO bookmarks (name, url, is_favorite) VALUES ($1, $2, $3) RETURNING *",
            [bookmark.name, bookmark.url, bookmark.is_favorite]
        )
        return newBookmark
    } catch (e) {
        console.log(`Error in queries ${e}`)
        return `Error in queries ${e}`
    }
}

const deleteBookmark = async (id) => {
    try {
        // db.one or .any returns a promise, so we need to store it in a variable and await it, then return it
        const deletedBookmark = await db.one("DELETE FROM bookmarks WHERE id=$1 RETURNING *", id)
        return deletedBookmark
    } catch (e) {
        return e
    }
}

const updateBookmark = async (bookmark, id) => {
    try {
        const update = await db.one(
            "UPDATE bookmarks SET name=$1, url=$2, category=$3, is_favorite=$4 WHERE id=$5 RETURNING *",
            [bookmark.name, bookmark.url, bookmark.category, bookmark.is_favorite, id]
        )
        return update
    } catch (e) {
        return e
    }
}


module.exports = {
    getAllBookmarks, getBookmark, createBookmark, deleteBookmark, updateBookmark
};