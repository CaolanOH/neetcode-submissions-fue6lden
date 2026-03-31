class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        const set = new Set(nums1);
        const res = [];
        for(const n of nums2){
            if(set.has(n)){
            res.push(n);
            set.delete(n);
            }
        }
        return res;
    }
}
