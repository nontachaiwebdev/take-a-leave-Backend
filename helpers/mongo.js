import Mongoose from 'mongoose'
Mongoose.Promise = global.Promise

export function connectMongo () {
  return new Promise(function(resolve, reject) {
    const mongodbHost = '127.0.0.1:27017/takealeaveTest'
    Mongoose.connect(`mongodb://${mongodbHost}`)
      .then(() => {
        return resolve()
      })
      .catch((err) => {
        process.exit(1)
      })
  })
}

export function disconnectMongo (done) {
  return Mongoose.connection.db.dropDatabase(done)
}
