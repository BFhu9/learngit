let express = require('express');

let app = express()

app.get('/',(req,res)=>{
    res.send("老陈打码首页")
})


app.listen(8080,()=>{
    console.log("服务器启动：",'http://localhost:8080/')
})