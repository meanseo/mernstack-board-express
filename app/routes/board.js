import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import passport from 'passport'
import BoardService from '../services/board.js'
dotenv.config()
const mongoUri = process.env.MONGO_URI
const port = process.env.PORT
const jwtSecret = process.env.JWT_SECERT
const origin = process.env.ORIGIN
const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}
const app = express()
app.use(cors());
app.use(function (_req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});
app.post('/add', cors(corsOptions), (req, res) => {
    BoardService().add(req, res)
});
app.get('/list', cors(corsOptions),(req,res)=>{
    const service = new BoardService()
    res.status(200).json(service.boardList(req,res))
})


export default app
