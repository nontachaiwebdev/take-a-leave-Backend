import Mongoose from 'mongoose'
const Schema = Mongoose.Schema

const Leaflet = new Schema({
  leafDateFrom: Date,
  leafDateTo: Date,
  totalLeafDate: Number,
  oneDayOption: {
    type: String,
    enum: [
      'full day',
      'morning half day',
      'afternoon half day'
    ]
  },
  type: {
    type: String,
    enum: [
      'sick',
      'personal business',
      'annual',
      'maternity',
      'ordination',
      'military service'
    ]
  },
  reason: String,
  status: {
    type: String,
    enum: [
      'accept',
      'reject',
      'pending'
    ]
  }
})

module.exports = Mongoose.model('Leaflet', Leaflet)
