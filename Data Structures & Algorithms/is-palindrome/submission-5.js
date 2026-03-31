class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let forward = 0;
        let backward = s.length - 1;

        while(forward < backward){
            while(forward < backward && !this.isAlphaNumeric(s[forward])){
                forward++;
            }
            while(forward < backward && !this.isAlphaNumeric(s[backward])){
                backward--;
            }

            if(s[forward].toLocaleLowerCase() !== s[backward].toLowerCase()) return false;

            forward++;
            backward--;
        }
        return true;
    }



    isAlphaNumeric = (c) => {
        return (c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || (c >= "0" && c <= "9"); 
    }
}
