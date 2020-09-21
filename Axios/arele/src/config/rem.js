(function() {
	function resize(){
		let baseFontSize = 100;//设计稿字体尺寸
		let baseWidth = 750;
		let currentWidth = window.innerWidth;//获取屏幕宽度
		let currentFontWidth = (currentWidth/baseWidth)*baseFontSize;
		document.querySelector('html').style.fontSize = currentFontWidth + 'px';
	}
	//屏幕大小改变时的文字尺寸
	window.onresize = function(){
		resize()
	}
	//监听document文档加载完毕时重置字体尺寸
	document.addEventListener('DOMContentLoaded',resize)
}())