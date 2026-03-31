class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for(const s of strs){
            const char = Array.from(s);
            char.sort();
            const key = char.join(',');
            if(map.has(key)){
                map.get(key).push(s);
            } else {
                const group = [s];
                map.set(key, group);
            }
        }
        return Array.from(map.values());
    }
}
