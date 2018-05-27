import Leaflet from '../model/leaflet'
const HTTPStatus = require('http-status')

function getLeftletById (req, res, next) {

}

async function getLeftletList (req, res, next) {
  const { limit = 10, offset = 0 } = req.query
  const result = await Leaflet.find()
    .limit(parseInt(limit))
    .skip(parseInt(offset))
  if (!result) {
    res.status(HTTPStatus.NOT_FOUND).json({})
  } else {
    res.status(HTTPStatus.OK).json(result)
  }
}

async function createLeftlet (req, res, next) {
  const { body } = req
  const result = await Leaflet.create(body)
  res.status(HTTPStatus.CREATED).json(result)
}

function updateLeftlet (req, res, next) {

}

function deleteLeftlet (req, res, next) {

}


export default {
  get: getLeftletById,
  list: getLeftletList,
  create: createLeftlet,
  update: updateLeftlet,
  delete: deleteLeftlet
}
