class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a - b);
        const res = [];
        for(let i = 0; i < nums.length; i++){
            if(nums[i] > 0) break;
            if(i > 0 && nums[i] === nums[i-1]) continue;

            let forwards = i+1;
            let backwards = nums.length-1;
            while(forwards < backwards){
                let threeSum = nums[i] + nums[forwards] + nums[backwards];
                if(threeSum < 0){
                    forwards++;
                }else if(threeSum > 0){
                    backwards--;
                } else {
                    res.push([nums[i], nums[forwards], nums[backwards]]);
                    forwards++;
                    backwards--;
                    while(forwards < backwards && nums[forwards] === nums[forwards - 1]){
                        forwards++;
                    }
                }
            }
        }
        return res;
    }
}
