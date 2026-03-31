class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        HashMap<String, List<String>> map = new HashMap<>();
        

        for(int i = 0; i < strs.length; i++){
            char [] word = strs[i].toCharArray();
            Arrays.sort(word);
            String wordStr = new String(word);
            
            if (map.containsKey(wordStr)){
                map.get(wordStr).add(strs[i]);
            } else {
                ArrayList<String> list = new ArrayList<>();
                list.add(strs[i]);
                map.put(wordStr, list);
            }
        }

        return new ArrayList<>(map.values());
    }
}
