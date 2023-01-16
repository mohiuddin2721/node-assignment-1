const userData = require('../utils/data.json')

module.exports.getAllUsers = (req, res) => {
    const randomNumber = Math.floor((Math.random() * userData.length) + 1)
    res.json(userData[randomNumber]);
}