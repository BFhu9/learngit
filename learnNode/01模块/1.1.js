// 箭头函数
let fn = () => {
	console.log("This is first require target");
}
// function fn(){
// 	console.log("This is first require target");
// }
let student = {
	name: "me"
}
console.log("Running!!");

// 模块导出
// module.exports = {student,fn};
exports.fn0 = fn;