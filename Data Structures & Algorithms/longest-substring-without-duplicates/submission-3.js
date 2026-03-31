class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let count = new Set();
        let res = 0;
        let l = 0;
        for(let r = 0; r < s.length; r++){
            while(count.has(s[r])){
                count.delete(s[l]);
                l++;
            }
            count.add(s[r]);
            res = Math.max(res, r-l +1);
        }
        return res;
    }
}
