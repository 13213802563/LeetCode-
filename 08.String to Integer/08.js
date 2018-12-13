@param {string}  str
@return {number}

var myAtoi=function(str){
	str=str.trim();
	var pattern=/^(\-|\+)?[0-9]+/;
	var tmp=pattern.exec(str);
	console.log(tmp[0]);
	console.log(tmp);
	
	if(tmp){
		var num=Number(tmp[0]);
		if(num<-Math.pow(2,31)){//2147483648
			return -Math.pow(2,31);
		}
		if(num>Math.pow(2,31)){
			return  Math.pow(2,31);
		}
      return num;
	}
	return 0;
};
console.log(myAtoi('-2345'))
