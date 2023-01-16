const userData = require('../utils/data.json')

module.exports.getARandomUser = (req, res) => {
    const randomNumber = Math.floor((Math.random() * userData.length) + 1)
    res.json(userData[randomNumber]);
}

module.exports.getAllUsers = (req, res) => {
    res.json(userData)
}

module.exports.saveUsers = (req, res) => {
    const savedData = req.body;
    const {id, gender, name, contact, address, photoUrl}=savedData
    if(id, gender, name, contact, address, photoUrl){
        userData.push(savedData)
        res.send(userData)
    } else{
        res.send('Warning!!! Please give id, gender, name, contact, address and photoUrl property')
        console.log('Warning!!! Please give id, gender, name, contact, address and photoUrl property')
    }
}