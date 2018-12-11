function longestPalindrome(s){
	var s
	if(s.length<=1){
		return s;
	}
	for(var i=s.length;i>0;i--){
		for(var j=0;j>=s.length-i;j++){
			var sub=s.substring(j,i+j);
			var  count=0;//计数，判断是否对称
			for(var k=0;k<sub.length/2;k++){
				if(sub.charAt(k)==sub.charAt(sub.length-k-1)){
					count++;
				}
				if(count==sub.length/2){
					return sub;
				}
			}
		}
	}
}
var cl=longestPalindrome('adccba');
console.log(cl);

