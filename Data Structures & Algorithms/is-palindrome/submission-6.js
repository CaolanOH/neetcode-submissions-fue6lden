class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let foreward = 0;
        let backward = s.length - 1;

        while(foreward < backward){
            while(foreward < backward && !this.isAlphaNum(s[foreward])){
                foreward++;
            }
            while(foreward < backward && !this.isAlphaNum(s[backward])){
                backward--;
            }
            if(s[foreward].toLowerCase() !== s[backward].toLowerCase()){
                return false;
            }
            foreward++;
            backward--;
        }
        return true;
    }



    isAlphaNum(c){
        return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9');
    }
}
