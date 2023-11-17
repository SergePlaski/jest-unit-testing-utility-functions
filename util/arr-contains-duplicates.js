/**
 * Blind-75 (2022) #217
 * @param: {number[]} nums
 * @return: {boolean}
 *
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 */

// utilizing the filter() array method:
export function containsDuplicates1(nums) {
	let unique = nums.filter(function (value, index, arr) {
		return arr.indexOf(value) == index;
	});
	return unique.length !== nums.length;
};

// utilizing the filter() array method with arrow finctions:
export const containsDuplicates2 = (nums) => {
	let unique = nums.filter(
		(value, index, arr) => arr.indexOf(value) == arr.lastIndexOf(value)
	);
	return unique.length !== nums.length;
};

// looping through the array, without creating a shallow copy:
export function containsDuplicates3(nums) {
	var duplicates = false;
	nums.forEach(function (value, index, arr) {
		if (arr.indexOf(value) !== arr.lastIndexOf(value)) duplicates = true;
	});
	return duplicates;
};

export function containsDuplicates4(nums) {
	if (nums.length > 0) {
		for (let index = 0; index < nums.length; index++) {
			if (nums.indexOf(nums[index]) !== index) return true;
		}
	}
	return false;
};
