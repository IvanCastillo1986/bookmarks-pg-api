-- connect to our database
\c bookmarks_dev;

INSERT INTO bookmarks
(name, url, category, is_favorite)
VALUES
('MDN', 'https://developer.mozilla.org/en-US/', 'educational', true),
('Apartment Therapy', 'https://www.apartmenttherapy.com', 'inspirational', true),
('DMV', 'https://dmv.ny.gov', 'adulting', false),
('YouTube', 'https://www.youtube.com', 'entertainment', true),
('Total 180 Training', 'https://www.total180training.com', 'fitness', true);
