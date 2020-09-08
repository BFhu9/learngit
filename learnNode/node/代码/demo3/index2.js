let fs = require('fs')

fs.open('text2.txt','w',(err,fd)=>{
    console.log("文件打开")
    fs.writeFile(fd,'老陈，真帅！',function(err){
        if(!err){
            console.log("写入完成！")
            fs.close(fd,()=>{
                console.log("文件关闭完成")
            })
        }else{
            console.log(err)
        }
    })
})

console.log('123')

// 同步：点汉堡-》制作汉堡-》汉堡制作好之后，你拿走了。-》下一位用户继续点汉堡
// 异步：点汉堡-》旁边等候->下一位用户继续点汉堡-》旁边等候。汉堡好了之后，会自动叫你领取。