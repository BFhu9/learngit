import Mock from 'mockjs'

//配置请求延时
Mock.setup({
	timeout:1000
})
//匹配路径,设置参数（可以使用字符串匹配，也可以使用正则）
Mock.mock('/api/user',{
	username:'Brthus',
	age:8080,
	gender:'man',
	type:'undead',
	//生产随机内容
	// 时间
	"mtime":"@datetime",
	// 随机数
	"score|0-100":800,
	"rank|1-10":10,
	// 中文名
	"nickname":"@cname",
	//邮件地址
	"adress":"@url",
	//图片
	"imgUrl":"@image",
	"email":"@email"
})