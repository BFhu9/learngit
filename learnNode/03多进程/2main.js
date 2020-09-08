let child_process = require('child_process');
for(var i =0;i<3;i++){
	work_process = child_process.spawn('node',['child.js',i]);
	work_process.stdout.on('data',(data)=>{
		console.log('data:',data.toString());
	})
	work_process.stderr.on('err',(err)=>{
		console.log('err:',err);
	})
	work_process.on('close',(code)=>{
		console.log('退出码：',code);
	})
}
//可以明显反映出异步性