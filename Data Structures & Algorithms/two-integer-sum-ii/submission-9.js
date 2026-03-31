class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let forwards = 0;
        let backwards = numbers.length -1;

        while(forwards < backwards){
            if(numbers[forwards] + numbers[backwards] < target){
                forwards++;
            } else if (numbers[forwards] + numbers[backwards] > target){
                backwards--;
            } else {
                return [forwards+1, backwards+1];
            }
        }
    }
}
