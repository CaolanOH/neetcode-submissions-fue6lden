class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Set();
        for(const num of nums){
            if(map.has(num)){
                return true;
            } else {
                map.add(num);
            }
        }
        return false;
        
    }
}
