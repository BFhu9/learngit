let fs = require('fs');
// 删除文件
// fs.unlink('3.1html',(err)=>{
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log('删除成功！')
// 	}
// })
// 读取文件夹
// fs.readdir('./',(err,files)=>{
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log(files)
// 	}
// })
// 删除非空文件夹
let rmDir = (dirPath) => {
	let rDir = fs.readdirSync(dirPath);
	for (var i in rDir) {
		let Fpath = `${ dirPath }/${ rDir[i] }`
		let stat = fs.statSync(Fpath);
		if (stat.isFile()) {
			fs.unlinkSync(Fpath);
		} else {
			rmDir(Fpath);
		}
	}
	fs.rmdirSync(dirPath);
}
rmDir('./111');