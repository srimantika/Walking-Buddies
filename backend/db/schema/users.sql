DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    picture TEXT,
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