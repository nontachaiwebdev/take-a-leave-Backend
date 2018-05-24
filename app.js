import cors from 'cors'
import express from 'express'
import { CORS_OPTIONS, SERVER_PORT } from './config/server'
import { NODE_ENV } from './config/env'

const app = express()

app.use(cors(CORS_OPTIONS))


if (NODE_ENV !== 'test') {
  app.listen(SERVER_PORT, () => {
    console.log(`PKCD SERVER IS RUNNING AT PORT ${SERVER_PORT}.`)
  })
}
