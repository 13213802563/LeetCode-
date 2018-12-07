//@param {number[]} nums
//@param {number} target
//@return {number[]}

var twoSum = function(nums, target) {
	for(var i = 0; i < nums.length; i++) {
		var s = target - nums[i];
		var temp = nums.indexOf(s);
		if(~temp && i !== temp) {
			return [i, temp];
		}
	}
};
var nums = [2, 7, 11, 15];
console.log(twoSum(nums, 9));
