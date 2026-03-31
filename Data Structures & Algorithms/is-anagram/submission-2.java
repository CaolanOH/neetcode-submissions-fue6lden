class Solution {
    public boolean isAnagram(String s, String t) {
        Map<Character, Integer> map = new HashMap<>();
        Map<Character, Integer> map2 = new HashMap<>();

        for(int i = 0; i < s.length(); i++){
            if(map.containsKey(s.charAt(i))){
                int temp = map.get(s.charAt(i));
                temp++;
                map.put(s.charAt(i), temp);
            } else {
                map.put(s.charAt(i), 1);
            }
        }

        for(int i = 0; i < t.length(); i++){
            if(map2.containsKey(t.charAt(i))){
                int temp = map2.get(t.charAt(i));
                temp++;
                map2.put(t.charAt(i), temp);
            } else {
                map2.put(t.charAt(i), 1);
            }
        }

        return map.equals(map2);
    }
    }

