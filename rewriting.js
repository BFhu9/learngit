//myForEach
Array.prototype.myForEach =  function(Fn){
    var _this = this,
        len = _this.length,//数组的长度
        params2 = arguments[1]|| window;//参数二
     for( var i = 0 ; i < len; i++ ){
          Fn.call(params2,_this[i],i,_this);//把Fn函数里边的this指向参数二
      }
}
//测试
a.myForEach(function(item,index,arr){
  console.log(item,index,arr);
  console.log(this)
},{name:"111"})

//myReduce
Array.prototype.myReduce = function(Fn){
	var _this = this,
	len = this.length,//数组长度
	params2 = arguments[1] || this[0];//参数二
	console.log(arguments[1]);
	console.log(params2);
	var res;
	for( var i = 0 ; i < len; i++ ){
		if(i == 0){
			res = Fn.call(window,params2,_this[i],i,_this);
		}
		else{
			res = Fn.call(window,res,_this[i],i,_this);
		}
	}
}
//测试
a.myReduce(function(prev,cur,index,arr){
	console.log(prev,cur,arr)
	return cur+10
},1)

//reduce面试题
function sn(arr,n){
	var len = arr.length;
	var res = new Array;
	var arr1 = new Array;
	arr.reduce(function(prev,cur,index,arr){
		if(arr.length>=n+1){
			arr1 = arr.slice(prev,prev+n);
			if(arr1.length!=0){
			res.push(arr1);}
			else{return prev}
			prev = prev + n;
		}
		return prev;
	},0)
	return res;
}

function sn(arr,n){
	var res = new Array;
	arr.reduce(function(prev,cur,index,arr){
	    var arr1 = new Array;
	    if(arr.length-prev>=n){
	        arr1 = arr.splice(prev,n);
	        res.push(arr1);
	        for(i=0;i<n;i++){
	        arr.unshift("");
	        }
	        return prev+=n
	    }
	    else{
	      arr1 = arr.splice(prev,arr.length);
	      res.push(arr1);
		}
	},0)
	res.pop(res.length-1);
	console.log(res);
}

function sn(arr,n){
    var a = new Array;
    a = arr.reduce(function(pre,cur,index,arr){
    var res = arr.splice(0,n);
    if(res.length){
         pre.push(res)
        }
        return pre;
},[])
        console.log(a)
}



