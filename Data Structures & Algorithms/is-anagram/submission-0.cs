public class Solution {
    public bool IsAnagram(string s, string t) {

        if (s.Length != t.Length){
            return false;
        }
        // using a dictionary to store values and occurances of chars in both words
        Dictionary<char, int> sTable = new Dictionary<char, int>();
        Dictionary<char, int> tTable = new Dictionary<char, int>();

        //populate s table
        foreach (char c in s){
            sTable[c] = sTable.GetValueOrDefault(c, 0) + 1;
        }

        foreach (char c in t){
            tTable[c] = tTable.GetValueOrDefault(c, 0) + 1;
        }

        // check equivalence
        if (sTable.Count != tTable.Count) {
            return false;
        }
        
        foreach (KeyValuePair<char, int> pair in sTable) {
            if (!tTable.ContainsKey(pair.Key) || tTable[pair.Key] != pair.Value) {
                return false;
            }
        }

        return true;
    }
}
