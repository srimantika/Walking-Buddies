const express = require('express');
const router = express.Router();
const {getUsers, addUser, getUserByEmail,getUsersPostalcode} = require('../helpers/dataHelpers');

module.exports = ({ getUsers, addUser, getUserByEmail,getUsersPostalcode}) => {
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
        
        
        
        getUserByEmail(email)
            .then(user => {
                if (user) {
                    res.json({
                        msg: 'Sorry, a user account with this email already exists.'
                    });
                } else {
                    return addUser(name, picture, email, password, age, gender, street_name, city, postal_code, walk_reason, walk_time, interests)
                }

            })
            .then((newUser) => {
                
                res.json(newUser);
                
            })
            .catch(err => res.json({
                error: err.message
            }));
    

    })


//*************************************************************************/

    router.post('/login', (req, res) => {

        console.log("Email and password",req.body);

        let {email, password}= req.body;


        getUserByEmail(email)
            .then(user => {
                if (!user) {
                    res.json({
                        msg: 'Sorry, a user account with this email does not exist'
                    });
                } else {
                    if(user.password === password){
                        console.log(user.postal_code);
                        let postal_code = user.postal_code.slice(0,3);
                        let name = user.name;
                        let email = user.email;
                        let msg = "Password Match!"
                        getUsersPostalcode(postal_code,email)
                        .then ( users => {
                            console.log("UserList", users)
                            res.json ({
                                msg : msg,
                                email : email,
                                name: name,
                                users : users

                            })

                        })                
                        /* getUserByEmail */
                        // res.json({
                        //     msg: 'Password Match!',
                        //     user_email: user.email,
                        //     postal_code: user.postal_code,
                            
                        // });
                    } /* end of if */
                    else {
                        res.json({
                            msg: 'Incorrect Password! Try Again!'
                        });
                    }
                }

            })
            //.then(newUser => res.json(newUser))
            .catch(err => res.json({
                error: err.message
            }));


    })


    return router;
};