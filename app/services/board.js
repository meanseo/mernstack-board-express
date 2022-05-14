import db from '../models/index.js'
export default function BoardService() {
    const Board = db.Board
    return {
        add(req, res) {
            const {name,date, title, subject} = req
                .body
                console
                .log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
            console.log(`title 값 : ${title}`)
            console.log(`name 값 : ${name}`)
            console.log(`contents 값 : ${subject}`)
            console.log(`date 값 : ${date}`)
            new Board(req.body).save(function (err) {
                if (err) {
                    res
                        .status(500)
                        .send({message: err});
                    console.log('등록 실패')
                    return;
                } else {
                    res
                        .status(200)
                        .json({ok: 'ok'})

                }
            })
        },
        list(_req, res){
            Board.find()
            .exec((err, boards)=>{
              if(err) return res.status(400).send(err)
              res.status(200).json({success: true, boards })
            })
        }
    }
}