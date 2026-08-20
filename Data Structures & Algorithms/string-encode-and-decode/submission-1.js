class Solution {
    // Naive solution uses non ascii characters in between characters to encode strings

    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        //store things into a string
        let encodedStr = "";
        //appen
        strs.forEach((str) => {
            let strLen = str.length;
            let appended = `${strLen}#${str}`;
            encodedStr += appended;
        });
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let cursor = 0; // tracks where we are in the string
        const result = []; // will hold the decoded words

        while (cursor < str.length) {
            // 1. Find the next '#' starting from cursor (not from 0!)
            const hashIndex = str.indexOf("#", cursor);

            // 2. Everything between cursor and hashIndex is the length digits
            const length = Number(str.slice(cursor, hashIndex));

            // 3. The word starts right after the '#'
            const wordStart = hashIndex + 1;
            const wordEnd = wordStart + length;
            const word = str.slice(wordStart, wordEnd);

            result.push(word);

            // 4. Move cursor past this word, to where the next length begins
            cursor = wordEnd;
        }

        return result;
    }
}
