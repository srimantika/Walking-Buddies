DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    picture VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    age VARCHAR(255),
    gender VARCHAR(255),
    street_name VARCHAR(255),
    city VARCHAR(255),
    postal_code VARCHAR(255) NOT NULL,
    walk_reason VARCHAR(255),
    walk_time VARCHAR(255),
    interests TEXT
);



INSERT INTO
users(name, picture, email, password, age, gender, street_name, city, postal_code, walk_reason, walk_time, interests)
VALUES
    ('Mario','https://i.imgur.com/FK8V841.jpg', 'mario@nintendo.com', 'test', '25-35', 'male', 'Glen Erin Drive', 'Mississauga', 'L5B 4M8', 'Leisure', 'Morning', 'Gaming, Travel');