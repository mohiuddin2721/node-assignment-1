const express = require('express')
const app = express()
const usersRoute = require('./routes/v1/users.route')
const port = 5000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello nodeJs, I will destroy you. Assignment__1 !!!!')
})

app.use('/users', usersRoute)

app.all('*', (req, res)=>{
  res.send('Route not found. You inter the wrong route')
})

app.listen(port, () => {
  console.log(`Assignment app listening on port ${port}`)
})