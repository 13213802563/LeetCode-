@param {string[]} strs
@return {string}

var longestCommonPrefix=function(strs){
	if(!strs.length) return '';
	
	var len=strs.reduce(function(pre,item){
		return Math.min(pre,item.length)//
	},Number.MAX_VALUE);//可表示的最大的数
	console.log(len);
	
	var ans='';
	for(var i=0;i<len;i++){
		var a=strs[0][i];
		console.log(a);
		var f=strs.every(function(item){
			console.log(item);
			return item[i]===a;
		});
		if(!f)  break;
		ans+=a;
	}
	return ans;
}
	console.log(longestCommonPrefix(['flower','flow','flight']))
