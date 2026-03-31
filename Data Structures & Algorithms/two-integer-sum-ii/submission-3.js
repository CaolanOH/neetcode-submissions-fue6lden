class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const map = new Map();
        for(let i =0; i < numbers.length; i++){
            map.set(numbers[i], i);
        }

        for(let i = 0; i < numbers.length; i++){
            let diff = target - numbers[i];
            if(map.has(diff)) return [i+1, map.get(diff)+1];
        }
    }
}
