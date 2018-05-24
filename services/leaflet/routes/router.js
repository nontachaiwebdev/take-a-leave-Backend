import express from 'express'
import leftlet from '../controller/leaflet'

const router = express.Router()

router.route('/')
  .get(leftlet.get)

export default router
