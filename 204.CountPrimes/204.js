@param {number} n
@return {number}

var countPrimes=function(n){
	if(n<=2){
		return 0;
	}
	if(n===3){
		return 1;
	}
	var i=3;
	var j=2;
	var res=1;
	var flag;//标志数
	while(i<n){
		j=2;
		flag=0;
		while(j=Math.ceil(Math.sqrt(i))){//i=10,j=4
			if(i%j===0){
				flag=1;
				break;
			}
			j++;
		}
		if(!flag){
			res++;
		}
		i=i+2;
	}
	return res;
}
console.log(countPrimes(10));
