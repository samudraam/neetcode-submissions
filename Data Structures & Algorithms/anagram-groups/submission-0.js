class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     * 
     * 
     * 
Create one outer Map — this holds canonicalKey -> [list of original strings].
For each string in strs:
a. Compute its canonical key (sorted string, or frequency signature).
b. Check if that key already exists in the outer map.
c. If yes, push the original string into that key's array. If no, create a new array [str] for that key.
Return [...outerMap.values()] — the arrays are your groups.
     */

    groupAnagrams(strs) {
        const groups = new Map(); // signature -> array of original strings

        strs.forEach((str) => {
            const signature = this.countFrequency(str);

            if (!groups.has(signature)) {
                groups.set(signature, []);
            }
            groups.get(signature).push(str);
        });

        return [...groups.values()];
    }

    countFrequency(str) {
        const wordMap = new Map();
        for (const char of str) {
            if (/[a-zA-Z]/.test(char)) {
                const letter = char.toLowerCase();
                wordMap.set(letter, (wordMap.get(letter) || 0) + 1);
            }
        }
        const sortedKeys = [...wordMap.keys()].sort();

        let signature = "";
        for (const key of sortedKeys) {
            signature += key + wordMap.get(key);
        }
        return signature; // "a1e1t1"
    }
}
