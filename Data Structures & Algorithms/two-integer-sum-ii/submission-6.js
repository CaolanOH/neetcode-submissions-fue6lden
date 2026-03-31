class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let forewards = 0;
        let backwards = numbers.length-1;
        while(forewards < backwards){
            if(numbers[forewards] + numbers[backwards] > target){
                backwards--;
            }
            if(numbers[forewards] + numbers[backwards] < target){
                forewards++;
            }
            if(numbers[forewards] + numbers[backwards] == target){
                return [forewards+1, backwards+1];
            }
        }
    }
}
