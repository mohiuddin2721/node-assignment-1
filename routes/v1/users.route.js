const express = require('express')
const router = express();

router.route('/random').get((req, res) => {
    res.send('Required to show random users')
})

module.exports = router;