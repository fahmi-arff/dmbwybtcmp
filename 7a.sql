CREATE DATABASE post;
USE post;
-- The Schema

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100)
);


CREATE TABLE posts (
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    content VARCHAR(4000),
    createdBy INT,
    FOREIGN KEY (createdBy) 
        REFERENCES users(id)
        ON DELETE CASCADE
);

CREATE TABLE comments (
	id INT AUTO_INCREMENT PRIMARY KEY,
    comment VARCHAR(1000),
    postId INT,
    FOREIGN KEY (postId) 
        REFERENCES posts(id)
        ON DELETE CASCADE
);

-- The Starter Data

INSERT INTO users (username) VALUES 
('Asep DumbsWay'), 
('Caleb'), 
('Samantha'), 
('Raj'), 
('Carlos'), 
('Lisa');

INSERT INTO posts (title, content, createdBy ) VALUES
('Artikel Kebun Binatang DumbWays', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 1),
('React & Redux', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 2),
('New Postman', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 3);

INSERT INTO comments (comment, postId ) VALUES
('Jenis binatang?', 1),
('Jumlah binatang?', 1),
('Kebun binatang mana?', 1);

-- 1. posts.title: Artikel Kebun Binatang DumbWays
SELECT * FROM posts WHERE title='Artikel Kebun Binatang DumbWays';

-- 2. posts.users.username: dibuat oleh Asep DumbWays
SELECT p.title, u.username FROM users u JOIN posts p ON u.id=p.createdBy WHERE username='Asep DumbsWay';

-- 3. comments: jenis binatang? jumlah binatang? kebun binatang mana?
SELECT * FROM comments;

-- Tampilkan hasil query post yang dibuat oleh user beserta comments
SELECT title, content, username, comment FROM users u JOIN posts p JOIN comments c ON u.id=p.createdBy AND c.postId=p.id;