class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let forward = 0;
        let backward = numbers.length - 1;
        while(forward < backward){
            let sum = numbers[forward] + numbers[backward];
            if(sum < target){
                forward++;
            } else if(sum > target){
                backward--;
            } else {
                return [forward+1, backward+1];
            }
            forward++;
            forward--;
        }
    }
}
