let fs = require('fs')

fs.readFile('text1.html',(err,data)=>{
    if(!err){
        console.log(data.toString())
    }else{
        console.log('err',err)
    }
})

console.log('读取数据')