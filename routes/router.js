import express from 'express'
import leaflet from '../services/leaflet/routes/router'
const router = express.Router()

router.use('/leaflet', leaflet)

export default router
