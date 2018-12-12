
//@param {number[]}  nums
//@return {boolean}

var containDuplicate=function(nums){
	var nums=nums.sort();
	for(var i=0;i<nums.length-1;i++){
		if(nums[i]===nums[i+1]){
			return  true;
		}
	}
	return false;
};

var num=[6,5,8,4];
console.log(containDuplicate(num));

