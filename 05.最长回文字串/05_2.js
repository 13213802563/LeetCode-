	var maxLen=0;
	var sub=[];
function longestPalindrome(s){
	if(s.length<=1){
		return s;
	}
	for(var i=0;i<s.length-1;i++){
		findLongestPalindrome(s,i,i);//单核回文
		findLongestPalindrome(s,i,i+1);//双核回文
	}
	return sub;
}
function findLongestPalindrome(s,low,high){
	while(low>=0&&high<=s.length-1){
		if(s.charAt(low)==s.charAt(high)){
			if(high-low+1>maxLen){
				maxLen=high-low+1;
				sub=s.substring(low,high+1);
				console.log(sub);
			}
			low--;
			high++;
		}
		else{
			break;
		}
	}
}
alert(longestPalindrome('abcba'));
