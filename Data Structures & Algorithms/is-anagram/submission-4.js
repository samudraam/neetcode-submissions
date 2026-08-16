class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
            const sC = this.countFrequency(s);
            const tC = this.countFrequency(t);
            let isAna = false;

            if (sC === tC ) {
                isAna = true;
            }

        return isAna;
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

        return signature; // e.g. "a1e1t1"
    }
}
