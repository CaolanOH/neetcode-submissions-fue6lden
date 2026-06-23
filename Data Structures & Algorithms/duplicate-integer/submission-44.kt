class Solution {
    fun hasDuplicate(nums: IntArray): Boolean {
        val set = HashSet<Int>();
        for(num in nums){
            if(num in set){
                return true;
            }
            set.add(num);
        }
        return false;
    }
}
