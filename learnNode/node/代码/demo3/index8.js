let fs = require('fs');

// 删除文件
// fs.unlink('text1.html',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('删除文件成功')
//     }
// })

// 读取目录下的所有文件
fs.readdir('./',(err,files)=>{
    if(err){
        console.log(err)
    }else{
        console.log(files)
    }
})


