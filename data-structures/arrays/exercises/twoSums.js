/**
 * https://leetcode.com/problems/two-sum/description/
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */


function getTwoSumsIndexes(nums, target) {
    let sumsMap = {}
    for (let i = 0; i < nums.length; i++) {
        const complementary = target - nums[i]
        if (sumsMap[complementary] != null) {
            return [sumsMap[complementary], i]
        }
        sumsMap[nums[i]] = i
    }
}



console.log(getTwoSumsIndexes([2, 7, 11, 15], 9))
console.log(getTwoSumsIndexes([3, 2, 4], 6))
console.log(getTwoSumsIndexes([3, 3], 6))