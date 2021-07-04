DROP DATABASE IF EXISTS bookmarks_dev;
CREATE DATABASE bookmarks_dev;

-- connecting to database
\connect bookmarks_dev;

-- create our bookmarks table
CREATE TABLE bookmarks (
    id SERIAL PRIMARY KEY,
    name TEXT,
    url TEXT,
    category TEXT,
    is_favorite BOOLEAN
);

