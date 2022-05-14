import dotenv from 'dotenv'
import mongoose from 'mongoose'
import UserModel from './User.js'
import BoardModel from './Board.js'
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dotenv.MONGO_URI
db.User = new UserModel(mongoose)
db.Board = new BoardModel(mongoose)

export default db