const express = require('express')
const cors = require('cors')

const corsOptions = {
  origin: new RegExp(process.env.CORS_ORIGIN) || '*'
}

const app = express()

app.use(cors(corsOptions))

const NODE_ENV = process.env.NODE_ENV || 'developement'


if (NODE_ENV !== 'test') {
  const port = 3003
  app.listen(port, () => {
    console.log(`PKCD SERVER IS RUNNING AT PORT ${port}.`)
  })
}
