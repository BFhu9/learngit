let fs = require('fs');

// 创建写入流
let ws = fs.createWriteStream('text3.txt');

// 监听通道打开
ws.once('open',()=>{
    console.log("通道打开");
    ws.write('你吃饭了吗1？')
    ws.write('你吃饭了吗2？')
    ws.write('你吃饭了吗3？')
    // 写入结束
    ws.end()
})

// 监听通道关闭
ws.once('close',()=>{
    console.log('通道关闭')
})