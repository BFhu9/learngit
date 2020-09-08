let fs = require('fs')
let events = require('events')

// 创建事件对象
var eventLog = new events.EventEmitter();
// 监听事件
eventLog.on('lcMkDir',function(msg){
    console.log('老陈创建目录事件触发1',msg)
})
eventLog.on('lcMkDir',function(msg){
    console.log('老陈创建目录事件触发2',msg)
})
eventLog.on('lcMkDir',function(msg){
    console.log('老陈创建目录事件触发3',msg)
})


// 触发事件

console.log('over')

// 创建文件夹
fs.mkdir('./img',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('创建成功')
        eventLog.emit("lcMkDir","老陈真帅")
    }
    
})

// 删除文件夹
// fs.rmdir('./img',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('文件夹删除成功')
//     }
// })