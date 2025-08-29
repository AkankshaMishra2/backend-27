const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Welcome to EC2 environment')
})

app.listen(port, () => {
  console.log(`EC2 app listening on port ${port}`)
})
