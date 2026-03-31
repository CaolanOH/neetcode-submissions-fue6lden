class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let forward = 0;
        let backward = s.length-1;

        while(forward < backward){
            while(forward < backward && !this.isAlpha(s[forward])){
                forward++;
            }
            while(forward < backward && !this.isAlpha(s[backward])){
                backward--;
            }

            if(s[forward].toLowerCase() !== s[backward].toLowerCase()) return false;

            forward++;
            backward--;
        }

        return true;
    }

    isAlpha(c){
        return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')
    }
}
