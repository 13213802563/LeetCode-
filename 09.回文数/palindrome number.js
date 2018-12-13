@param  {number} str
@return {boolean}

var isPalindrome=function(s){
//	console.log(s.toString());
//	console.log(s.toString().split(''))
//	console.log(s.toString().split('').reverse())
//	console.log(s.toString().reverse());//reverse是对数组进行反
    return s.toString()==s.toString().split('').reverse().join('');
}
isPalindrome(141);
isPalindrome(-141);
isPalindrome(140);
