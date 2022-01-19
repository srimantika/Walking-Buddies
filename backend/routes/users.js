const express = require('express');
const router = express.Router();
const {getUsers, addUser, getUserByEmail} = require('../helpers/dataHelpers');

module.exports = ({ getUsers, addUser, getUserByEmail}) => {
    /* GET users listing. */
    router.get('/', (req, res) => {
        getUsers()
            .then((users) => res.json(users))
            .catch((err) => res.json({
                error: err.message
            }));
    });

    //*************************************************************************/
    // router.get('/posts', (req, res) => {
    //     getUsersPosts()
    //         .then((usersPosts) => {
    //             const formattedPosts = getPostsByUsers(usersPosts);
    //             res.json(formattedPosts);
    //         })
    //         .catch((err) => res.json({
    //             error: err.message
    //         }));
    // });

    //*************************************************************************/
    router.post('/add', (req, res) => {
        
        console.log("Data in Backend",req.body);

        let {name, picture, email, password, age, gender, street_name, city, postal_code, walk_reason, walk_time, interests}= req.body;
        
        // picture = picture.split("base64,")[1];
        
        getUserByEmail(email)
            .then(user => {

                if (user) {
                    res.json({
                        msg: 'Sorry, a user account with this email already exists'
                    });
                } else {
                    return addUser(name, picture, email, password, age, gender, street_name, city, postal_code, walk_reason, walk_time, interests)
                }

            })
            .then(newUser => res.json(newUser))
            .catch(err => res.json({
                error: err.message
            }));
    

    })
    //*************************************************************************/
    return router;
};