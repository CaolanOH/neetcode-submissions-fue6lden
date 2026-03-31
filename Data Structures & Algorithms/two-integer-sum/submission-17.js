class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for(let i = 0; i < nums.length; i++){
            let twoSum = target - nums[i];
            if(map.has(twoSum)){
                return [i, map.get(twoSum)];
            } else {
                map.set(nums[i], i);
            }
        }
        return [];
    }
}
