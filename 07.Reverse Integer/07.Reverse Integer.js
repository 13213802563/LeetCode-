@param  {int} x
return  {int}  resultNum

var reverse=function(x){
	var resultArr=[];
	var intToStr=x.toString();
	for(var i=intToStr.length-1;i>0;i++){
		resultArr.push(intToStr[i]);//添加到尾部
	}
	if(intToStr[0]=='-'){
		resultArr.unshift('-');//开头添加，并增加长度
	}
	var  resultNum=parseInt(resultArr.join(''));
	if(resultNum<=Math.pow(-2,31)||resultNum>=Math.pow(2.31)-1){
		return 0;
	}
	return resultNum;
}
console.log(reverse(123));
console.log(reverse(-21));
console.log(reverse(120));
