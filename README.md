# Walking Buddies

**Walking Buddies** is a full stack PERN web application built using Postgres, Express,React and Nodejs. The App allows users to connect with others in their neighbourhood with similar walking preferences and habits. 

So once a user registers on Walking Buddy they can go and check all the other users residing in their neighbourhood. The App also lets them filter further based on their preferences. For example Mario wants to check who all walks in the morning which is his preferred time of walk. He can easily do so and then connect with the individual through the chat feature and take it forward from there ! 


## Setup

1. git clone https://github.com/srimantika/Walking-Buddies

   This will create a  folder Walking-Buddies on your local directory. Follow the Setup below for setting up your frontend and backend.

2. **For Backend**
   Go to Walking-Buddies/backend
   - Install dependencies : npm install
   - Reset database : npm run db:reset
     Use the npm run db:reset command each time there is a change to the database schema or seeds.
     It runs through each of the files, in order, and executes them against the database.
     Note: you will lose all newly created (test) data each time this is run, since the schema files will tend to DROP the tables and recreate them.
   - Start your server : npm start

3. **For Frontend**
   Go to Walking-Buddies/frontend
   - Install dependencies : npm install
   - Start your client : npm start

Then go and check Walking-Buddies at:

http://localhost:3000/   


## Project Stack

- Front-End: React, Axios, SASS, JavaScript

- Back-End: Express, Node.js, PostgreSQL

- API : React-Chat-Engine