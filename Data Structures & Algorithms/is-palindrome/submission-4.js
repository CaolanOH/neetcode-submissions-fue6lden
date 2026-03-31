class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let forewards = 0;
        let backwards = s.length-1;

        while(forewards < backwards){
            // left pointer
            while(forewards < backwards && !this.isAlpha(s[forewards])){
                forewards++;
            }

            // right pointer
            while(forewards < backwards && !this.isAlpha(s[backwards])){
                backwards--;
            }

            if(s[forewards].toLowerCase() !== s[backwards].toLowerCase()){
                return false;
            }

            forewards++;
            backwards--;
        }
        return true;
    }
    isAlpha(c){
            return (c >='a' && c <='z') || (c >= 'A' && c <='Z') || (c >= '0' && c <= '9');
        }
}
