const express = require('express');
const app = express();

const port = 3000;
const goodsRouter = require('./routes/goods.js');
const cartsRouter = require("./routes/carts.js");
const connect = require("./schemas");
connect();


//전역 미들웨어 모든코드에서 모든API에서 작용되는코드
//app.use(express.json());
app.use(express.json());
app.use("/api", [goodsRouter, cartsRouter]);

// app.post("/", (req,res)=>{
//     console.log(req.body);

//     res.send("기본 URI에 POST 메소드가 정상적으로 실행되었습니다.");
// })

// app.get("/", (req,res) => {
//     console.log(req.query);

//     res.status(400).json({
//         "KeyKey" : "value 입니다.",
//         "이름입니다." : "이름일까요?",
//     });
// });

// app.get("/:id", (req,res) =>{
//     console.log(req.params);

//     res.send(":id URI에 정상적으로 반환됨!");
// })


// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// localhost:3000/api -> goodsRouter
//API경로 추가해 라우터로 가는 방법
// app.use("/api", goodsRouter);



app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
});