let fs = require('fs')

fs.readFile('大炮.png',(err,data)=>{
    if(!err){
        console.log(data)
        fs.writeFile('小炮.png',data,(err)=>{
            if(!err){
                console.log('图片读取写入成功')
            }else{
                console.log('err',err)
            }
        })
    }else{
        console.log('err',err)
    }
})

console.log('读取数据')