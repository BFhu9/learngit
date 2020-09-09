module.exports = class extends think.Model {
	getStu() {
		let stuList = this.table('stu').select();
		return stuList
	}
	updateStu(name,msg) {
		let rmsg = this.table('stu').where({name:`${name}`}).update({msg:`${msg}`});
		return rmsg
	}
};