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

//十的阶乘
for(i=1;i<=10;i++){
	var sum = 1;
	for(m=1;m<=i;m++){
		sum = sum*m
	}
	console.log(sum);
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
	}
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