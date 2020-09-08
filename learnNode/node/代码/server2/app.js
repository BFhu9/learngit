// 导入express框架
let express = require('express')

// 实例化服务器应用
let app = express()


// 实现静态服务器
app.use(express.static("static"))


// 实现自定义接口
app.get('/api/userlist',(req,res)=>{
    // 请求的信息：req对象
    // 响应的操作和信息：res对象
    res.json({
        state:"ok",
        userList:[
            {username:"小明",sex:"男"},
            {username:"小黑",sex:"男"},
            {username:"小白",sex:"女"}
        ]
    })
})


// 启动服务器
app.listen(3000,()=>{
    console.log("服务器启动","http://127.0.0.1:3000")
})
