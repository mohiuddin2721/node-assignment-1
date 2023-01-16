const userData = require('../utils/data.json')

module.exports.getARandomUser = (req, res) => {
    const randomNumber = Math.floor((Math.random() * userData.length) + 1)
    res.json(userData[randomNumber]);
}

module.exports.getAllUsers = (req, res)=> {
    res.json(userData)
}