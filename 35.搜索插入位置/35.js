var searchlnsert = function(nums, target) {
	var hash = [];
	for(var i = 0, len = nums.length; i < len; i++)

		hash[nums[i]] = i;
	if(hash[target] !== undefined)
		return hash[target];

	nums[-1] = -Number.MAX_VALUE;
	nums[len] = Number.MAX_VALUE;

	for(var i = 0; i <= len; i++) {
		if(nums[i - 1] < target && target < nums[i]) {
			return i;
		}
	}
}

var nums = [1, 3, 5, 6, 8];
console.log(searchlnsert(nums, 9));