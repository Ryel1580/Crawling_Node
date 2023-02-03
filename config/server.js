const express = require('express');
const app = express();
const port = 5000;

// cors 이슈 localhost : 3000 접속가능
const cors = require('cors')
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// 서버 실행 localhost : 5000 port 사용
const server = app.listen(5000, ()=> {
    console.log(`Start Server : localhost : ${port}`);
})

// Login API
// app.post('/login' , async(req , res) =>{
//     const result = await 
//         .then(data => {
//             res.send(data)
//             console.log("login API Call")
//         })
// })
// Main Board API
app.get('/board',async(req, res) =>{
    const result = await require("./crawling")
        .then(result => {
            res.send(result)
            console.log("board API Call")
        })
})

// node ./config/server.js