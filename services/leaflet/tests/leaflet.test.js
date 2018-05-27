import request from 'supertest'
import { connectMongo, disconnectMongo } from '../../../helpers/mongo'
import Leaflet from '../model/leaflet'
import app from '../../../app.js'
const assert = require('chai').assert

const LEAFLET_API = '/api/leaflet'


describe('Leaflet API', () => {

  before(async () => {
    await connectMongo()
  })

  describe('#POST create Leaflet', () => {
    it('should get some partners', async () => {
      const res = await request(app)
        .post(LEAFLET_API)
        .send(leaflet1)
        .expect(201)

      const result = res.body

      assert.equal(true, true)
    })
  })

  describe('#GET get Leaflet list', () => {
    it('should get some partners', async () => {
      const res = await request(app)
        .get(LEAFLET_API)
        .expect(200)

      const result = res.body
      console.log(result)

      assert.equal(true, true)
    })
  })

  after((done) => disconnectMongo(done))

})

const leaflet1 = {
  leafDateFrom: new Date(),
  leafDateTo: new Date(),
  totalLeafDate: 1,
  oneDayOption: 'full day',
  type: 'sick',
  reason: 'Reason something',
  status: 'pending'
}
