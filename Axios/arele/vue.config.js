module.exports = {
	devServer:{
		proxy:{
			'/api':{
				target:'http://api.apiopen.top',
				pathRewrite:{
					'^/api':''
				}
			}
		}
	}
}