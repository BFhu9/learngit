const child_process = require('child_process');
for(var i = 0;i<3;i++){
	var work_process = child_process.exec('node child.js '+i,(err,stdout,stderr)=>{
			if(err){
				console.log(err);
			}
			else{
				console.log(stdout,stderr);
			}
	});
	work_process.on('exit',(code)=>{
		console.log('进程结束,状态码： ',code);
	})
}