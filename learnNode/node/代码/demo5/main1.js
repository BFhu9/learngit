const child_process = require('child_process');
for(var i = 0;i<3;i++){
    // stdout子进程的输出结果
    // stderr子进程输出的错误
    var workerProcess = child_process.exec('node index1.js '+i,function(err,stdout,stderr){
        if(err){
            console.log(err)
        }else{
            console.log('stdout:',stdout)
            console.log('stderr:',stderr)
        }
    })

    workerProcess.on('exit',function(code){
        console.log('子进程已退出,退出码：'+code)
    })
}