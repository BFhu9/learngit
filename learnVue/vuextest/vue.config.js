module.exports = {
  lintOnSave: false,
  // 设定路径为相对路径
  publicPath:'./',
  devServer:{
  		proxy:{
  			'/api':{
  				target:'http://api.apiopen.top/getJoke',
  				pathRewrite:{
  					'^/api':''
  				}
  			}
  		}
  }
}
