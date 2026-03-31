class Solution {
    public boolean isPalindrome(String s) {
        s = s.replaceAll("[^a-zA-Z-0-9]", "");
        s = s.toLowerCase();
        String reverse = "";
        char ch;
        for(int i =0; i < s.length(); i++){
            ch = s.charAt(i);
            reverse = ch+reverse;
        }
        reverse = reverse.replaceAll("[^a-zA-Z-0-9]", "");
        System.out.println(reverse);
        System.out.println(s);
        return s.equals(reverse);
    }
}
