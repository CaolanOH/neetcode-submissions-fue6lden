class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const obj = {};
        for(const s of strs){
            const count = new Array(26).fill(0);
            for(const c of s){
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
            const key = count.join(',');
            if(!obj[key]){
                obj[key] = [];
            }
            obj[key].push(s);
        }
        return Object.values(obj);
    }
}
