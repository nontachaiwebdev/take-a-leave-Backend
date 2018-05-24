import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import { CORS_OPTIONS, SERVER_PORT } from './config/server'
import { NODE_ENV } from './config/env'
import routes from './routes/router'

const app = express()

// use cors middleware
app.use(cors(CORS_OPTIONS))

// use bodyParser middleware
app.use(bodyParser.json({limit: '15mb'}))
app.use(bodyParser.urlencoded({extended: false}))

// set api router
app.use('/api', routes)




if (NODE_ENV !== 'test') {
  app.listen(SERVER_PORT, () => {
    console.log(`PKCD SERVER IS RUNNING AT PORT ${SERVER_PORT}.`)
  })
}
