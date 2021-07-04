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

module.exports = {
    getAllBookmarks
};