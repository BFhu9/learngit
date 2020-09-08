// 完全数
for(i=1;i<=1000;i++){
	var arr = new Array;
	for(k=1;k<=i;k++){
		if((i/k)%1==0&&i!=k){
			arr.push(k);
		}
	}
	var sum = 0;
	for(m=0;m<arr.length;m++){
		sum = sum+arr[m];
	}
	if(sum==i){
	console.log(sum);
	}
}

//1--n的阶乘
function sum(n){
var res = new Array;
for(i=1;i<=n;i++){
	var sum = 1;
	for(m=1;m<=i;m++){
		sum = sum*m
	}
	res.push(sum);
}
console.log(res);
}

//水仙花数
for(i=100;i<1000;i++){
	var a = Math.floor(i/100);
	var b = Math.floor((i-a*100)/10);
	var c = i-a*100-b*10;
	if(Math.pow(a,3)+Math.pow(b,3)+Math.pow(c,3)==i){
		console.log(i);
	}
}

//互不相同三位数 1，2，3，4
function dift(){
	var sum;
	var res = new Array;
	for(n=1;n<5;n++){
		sum=n*100;
		for(m = 1;m<5;m++){
			sum=n*100+m*10;
			for(z = 1;z<5;z++){
				if(n!=m&&m!=z&&n!=z){
				sum = n*100+m*10+z;
				res.push(sum);
				}
			}
		}
	}
	console.log(res.length);
	console.log(res);
}

//最大公约数最小公倍数
function GCD(a,b){
	var arr = new Array;
	var arr1 =new Array;
	var arr2 = new Array;
	var res;
	for(i=1;i<=a;i++){
		if((a/i)%1==0){
			arr.push(i);
		}
	}
	for(m=1;m<=b;m++){
		if((b/m)%1==0){
			arr1.push(m);
	}
	for(n =0;n<arr.length;n++){
		for(k=0;k<arr1.length;k++){
			if(arr[n]==arr1[k]){
				arr2.push(arr[n]);
			}
		}
	}
	res = arr2[0];
	for(x=1;x<arr2.length;x++){
		if(arr2[x]>res){
			res = arr2[x];
		}
	}p
    }
    alert(res);
}
function LCM(a,b){
	var ma;
	var mi;
	for(i=1;i<10;i++){
		ma = Math.max(a,b)*i;
			for(n=1;n<10;n++){
			mi = Math.min(a,b)*n;
			if(ma==mi){
				alert(ma);
				return ma;
			}
		}
	}
}

//101-200素数
function su(P){
	var res = new Array;
	for(i=1;i<P;i++){
		var arr = new Array;
		for(n=2;n<i;n++){	
		if((i/n)%1==0){
		arr.push(i);
		}
		}
		if(arr.length==0){
			res.push(i);
		}
	}
	return res;
}

//分解质因数
function sc(P){
	var arr = new Array;
	var arr1 = new Array;
	var mi;
	arr = su(P);
	do{
		for(i=0;i<arr.length;i++){
			if((P/arr[i])%1==0&&arr[i]!=1){
				mi = arr[i];
				arr1.push(mi);
				P=P/mi;	
				break;
			}
		}
	}
	while(P!=1)
	console.log(arr1)
}

//计算1-100直接所有3的倍数的和
function n3(a,b){
	var res = 0;
	for(i=1;i<=b;i++){
		if((i/a)%1==0){
			res += i;
		}
	}
	console.log(res);
}
n3(3,100);

//输出”This is Baidu Campus”
var stringArray = ["This","is","Baidu","Campus"];
alert("“"+stringArray.join(" ")+"”");

//完成驼峰命名
function aBa(str){
	var sp = str.split("-")
	for(i=0;i<sp.length;i++){
		var sp1 = sp[i].split("");
		sp1[0] = sp1[0].toUpperCase();
	    sp[i]=sp1.join("");
	}
	console.log(sp.join(""));
}

//一球从100米高度自由落下，每次落地后反跳回原高度的一半；再落下，求它在 第10次落地时，共经过多少米？第10次反弹多高？
function Ball(h,n){
	var x = 0;
	var d = 0;
	for(i=1;i<=n;i++){
		d=h;
		h/=2;
		x += d+h;
	}
	console.log(x,h);

//有这样一道智力题：“某商店规定：三个空汽水瓶可以换一瓶汽水。小张手上有十个空汽水瓶，她最多可以换多少瓶汽水喝？”答案是5瓶，方法如下：先用9个空瓶子换3瓶汽水，喝掉3瓶满的，喝完以后4个空瓶子，用3个再换一瓶，喝掉这瓶满的，这时候剩2个空瓶子。然后你让老板先借给你一瓶汽水，喝掉这瓶满的，喝完以后用3个空瓶子换一瓶满的还给老板。如果小张手上有n个空汽水瓶，最多可以换多少瓶汽水喝？
function Cola(n,x){
	var Coca = 0;
	do{
		var n1 = parseInt(n/x);
		n = n-n1*x+n1;
		Coca += n1;
	}
	while(n>=x)
	if(n==x-1){
		Coca+=1;
		console.log(Coca);
	}
}

//判断一个数是不是回文数
function Num(n){
	var str = ""+n;
	var arr = str.split("");
	if((arr.length)%2!=0&&arr.length>1){
		for(i=0;i<arr.length;i++){
			if(parseInt(arr[i])!=parseInt(arr[arr.length-1-i])){
				return false
			}
		}
		return true
	}
	else{
		return false
	}
	return false
}

//排序
function st(arr,obj,x){
	if(x>=0){
	arr.sort(sortNumber);
	function sortNumber(a,b){
		a1 = a[obj]
		b1 = b[obj]
		return a1 - b1
		}
	}
	else{
	arr.sort(sortNumber);
	function sortNumber(a,b){
		a1 = a[obj]
		b1 = b[obj]
		return b1 - a1
		}		
	}
	console.log(arr);
}

var li = Array({
	name:"asd",
	age:23,
	salary:5000
},{
	name:"qwe",
	age:24,
	salary:3000
},{
	name:"zxc",
	age:27,
	salary:8000
});