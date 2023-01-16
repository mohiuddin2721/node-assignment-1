const express = require('express')
const router = express();
const usersController = require('../../controllers/users.controller')

router
    .route('/random')
    .get(usersController.getARandomUser)

router
    .route('/all')
    .get(usersController.getAllUsers)

router
    .route('/save')
    .post(usersController.saveUsers)

router
    .route('/update/:id')
    .patch(usersController.updateUserId)

router
    .route('/delete/:id')
    .get(usersController.deleteUserData)

module.exports = router;