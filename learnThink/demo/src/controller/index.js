const Base = require('./base.js');

module.exports = class extends Base {
	async indexAction() {
		let stuList = await this.model('useStu').getStu();
		let obj = {
			head: '这就是thinkJS嘛？？',
			stuList
		}
		this.assign(obj);
		return this.display();
	}
	async updateAction() {
		let Cstu = this.get();
		console.log(Cstu);
		let rmsg = this.model('useStu').updateStu(Cstu.name, Cstu.msg);
		console.log(rmsg);
		return this.display();
	}
}