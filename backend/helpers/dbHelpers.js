module.exports = (db) => {

    const getUsers = () => {
        const query = {
            text: 'SELECT * FROM users',
        };
  
        return db
            .query(query)
            .then((result) => result.rows)
            .catch((err) => err);
    };
  
     //*************************************************************************/
    const getUserByEmail = email => {
  
        const query = {
            text: `SELECT * FROM users WHERE email = $1` ,
            values: [email]
        }
  
        return db
            .query(query)
            .then(result => result.rows[0])
            .catch((err) => err);
    }
  
    //*************************************************************************/
    const addUser = (name, picture, email, password, age, gender, street_name, city, postal_code, walk_reason, walk_time, interests) => {
        const query = {
            text: `INSERT INTO users (name, picture, email, password, age, gender, street_name, city, postal_code, walk_reason, walk_time, interests) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *` ,
            values: [name, picture, email, password, age, gender, street_name, city, postal_code, walk_reason, walk_time, interests]
        }
  
        return db.query(query)
            .then(result => result.rows[0])
            .catch(err => err);
    }
  
    //*************************************************************************/
    // const getUsersPosts = () => {
    //     const query = {
    //         text: `SELECT users.id as user_id, first_name, last_name, email, posts.id as post_id, title, content
    //     FROM users
    //     INNER JOIN posts
    //     ON users.id = posts.user_id`
    //     }
  
    //     return db.query(query)
    //         .then(result => result.rows)
    //         .catch(err => err);
  
    // }
  
    return {
        getUsers,
        getUserByEmail,
        addUser,
        // getUsersPosts
    };
  };
  