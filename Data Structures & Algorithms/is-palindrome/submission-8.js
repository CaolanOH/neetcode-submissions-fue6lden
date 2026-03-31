class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let forewards = 0;
        let backwards = s.length-1;
        while(forewards < backwards){
            while(forewards < backwards && !this.isAlphaNum(s[forewards])){
                forewards++;
            }
            while(forewards < backwards && !this.isAlphaNum(s[backwards])){
                backwards--;
            }
            if(s[forewards].toLowerCase() !== s[backwards].toLowerCase()) return false;
            forewards++;
            backwards--;
        }
        return true;
    }

    isAlphaNum(c){
        return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <='9');
    }
}
